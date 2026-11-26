import { Controller } from '@hotwired/stimulus';

const COLORS = {
    blue: 'border-blue-300 bg-blue-100 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100',
    green: 'border-green-300 bg-green-100 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100',
    red: 'border-red-300 bg-red-100 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100',
    amber: 'border-amber-300 bg-amber-100 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100',
    violet: 'border-violet-300 bg-violet-100 text-violet-900 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-100',
    slate: 'border-border bg-muted text-foreground',
};

const escapeHtml = (text) => String(text).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const pad = (number) => String(number).padStart(2, '0');
const isoDate = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const isoDateTime = (date) => `${isoDate(date)}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
const addDays = (date, count) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + count, date.getHours(), date.getMinutes());
const addMinutes = (date, count) => new Date(date.getTime() + count * 60000);
const parse = (text) => {
    const [day, time] = String(text).split('T');
    const [year, month, date] = day.split('-').map(Number);
    const [hours, minutes] = time ? time.split(':').map(Number) : [0, 0];
    return new Date(year, month - 1, date, hours, minutes);
};

/**
 * A calendar of events with month, week, day and agenda views.
 *
 * Events are `EventCalendar:Item` elements (hidden, inside the `items` target): `data-id`, `data-title`, `data-start`,
 * `data-end`, `data-color`, `data-resource` and `data-extra` (a JSON object), with dates as `YYYY-MM-DDTHH:mm` (or
 * `YYYY-MM-DD` for an event of the whole day). Add, change or remove an item and the calendar redraws.
 *
 * @target title       The title of the period shown.
 * @target viewButton  A button of the view switcher.
 * @target body        Where the view is drawn.
 * @target items      The hidden container of the items.
 * @target item       One event.
 * @target chip        Optional template for the content of a chip: {title}, {time}, {color}, {resource} and the keys of the event.
 * @value  view, date, weekStart, locale, resources, editable, creatable, startHour, endHour, slotMinutes, hourHeight, labels
 * @event  event-calendar:select  An event was chosen: `detail.event`.
 * @event  event-calendar:move    An event was dropped on another day or time (cancelable): `detail.event`, `detail.start`, `detail.end`, `detail.resource`.
 * @event  event-calendar:create  A free slot was chosen (creatable): `detail.start`, `detail.end`, `detail.allDay`, `detail.resource`.
 * @event  event-calendar:change  The period or the view changed: `detail.view`, `detail.date`.
 */
export default class extends Controller {
    static targets = ['title', 'viewButton', 'body', 'chip', 'items', 'item'];
    static values = {
        view: { type: String, default: 'month' },
        date: String,
        weekStart: { type: Number, default: 1 },
        locale: { type: String, default: 'en' },
        resources: Array,
        editable: Boolean,
        creatable: Boolean,
        startHour: { type: Number, default: 7 },
        endHour: { type: Number, default: 20 },
        slotMinutes: { type: Number, default: 30 },
        hourHeight: { type: Number, default: 48 },
        labels: Object,
    };

    connect() {
        this.cursor = startOfDay(this.hasDateValue && this.dateValue ? parse(this.dateValue) : new Date());
        this.drag = null;
        this.pending = false;
        this.observer = new MutationObserver(() => this.schedule());
        if (this.hasItemsTarget) {
            this.observer.observe(this.itemsTarget, { childList: true, subtree: true, attributes: true });
        }
        this.render();
    }

    disconnect() {
        this.observer?.disconnect();
    }

    schedule() {
        if (this.pending) return;
        this.pending = true;
        queueMicrotask(() => {
            this.pending = false;
            if (this.element.isConnected) this.render();
        });
    }
    resourcesValueChanged() {
        if (this.cursor) this.render();
    }
    viewValueChanged() {
        if (this.cursor) this.render();
    }
    dateValueChanged() {
        if (this.cursor && this.dateValue) {
            this.cursor = startOfDay(parse(this.dateValue));
            this.render();
        }
    }

    // ---- Navigation ----

    previous() {
        this.shift(-1);
    }

    next() {
        this.shift(1);
    }

    shift(direction) {
        const cursor = this.cursor;
        if (this.viewValue === 'week') {
            this.cursor = addDays(cursor, 7 * direction);
        } else if (this.viewValue === 'day') {
            this.cursor = addDays(cursor, direction);
        } else {
            this.cursor = new Date(cursor.getFullYear(), cursor.getMonth() + direction, 1);
        }
        this.render();
        this.announce();
    }

    today() {
        this.cursor = startOfDay(new Date());
        this.render();
        this.announce();
    }

    setView(event) {
        this.viewValue = event.params.view;
        this.announce();
    }

    announce() {
        this.dispatch('change', { detail: { view: this.viewValue, date: isoDate(this.cursor) } });
    }

    // ---- Data ----

    get items() {
        return this.itemTargets.map((element, index) => {
            let extra = {};
            try {
                extra = JSON.parse(element.dataset.extra || '{}');
            } catch (error) {
                extra = {};
            }
            const { id, title, start, end, color, resource } = element.dataset;
            const raw = { ...extra, id: id ?? String(index), title: title ?? '', start, end: end || undefined, color, resource };
            const allDay = !String(raw.start).includes('T');
            const start = parse(raw.start);
            let end = raw.end ? parse(raw.end) : allDay ? start : addMinutes(start, 60);
            if (allDay) {
                end = addDays(startOfDay(end), 1);
            }
            return { raw, element, id: String(raw.id), title: raw.title, color: COLORS[raw.color] ? raw.color : 'slate', resource: raw.resource || null, allDay, start, end };
        });
    }

    on(item, from, to) {
        return item.start < to && item.end > from;
    }

    formatter(options) {
        return new Intl.DateTimeFormat(this.localeValue, options);
    }

    time(item) {
        return item.allDay ? '' : this.formatter({ hour: 'numeric', minute: '2-digit' }).format(item.start);
    }

    weekStartOf(date) {
        const offset = (date.getDay() - this.weekStartValue + 7) % 7;
        return addDays(startOfDay(date), -offset);
    }

    // ---- Rendering ----

    render() {
        if (!this.hasBodyTarget) {
            return;
        }
        this.viewButtonTargets.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.eventCalendarViewParam === this.viewValue)));
        const view = this.viewValue;
        this.bodyTarget.replaceChildren();
        if (view === 'week') this.renderGrid(false);
        else if (view === 'day') this.renderGrid(true);
        else if (view === 'agenda') this.renderAgenda();
        else this.renderMonth();
        if (this.hasTitleTarget) {
            this.titleTarget.textContent = this.title();
        }
    }

    title() {
        const cursor = this.cursor;
        if (this.viewValue === 'day') return this.formatter({ dateStyle: 'full' }).format(cursor);
        if (this.viewValue === 'week') {
            const first = this.weekStartOf(cursor);
            const last = addDays(first, 6);
            const short = this.formatter({ month: 'short', day: 'numeric' });
            return `${short.format(first)} – ${short.format(last)}, ${last.getFullYear()}`;
        }
        return this.formatter({ month: 'long', year: 'numeric' }).format(cursor);
    }

    chip(item, extra = '') {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.id = item.id;
        button.className = `block w-full truncate rounded border px-1.5 py-0.5 text-left text-xs leading-tight outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 ${COLORS[item.color]} ${this.editableValue ? 'cursor-grab active:cursor-grabbing' : ''} ${extra}`;
        const time = this.time(item);
        if (this.hasChipTarget) {
            const values = { ...item.raw, title: item.title, time, color: item.color, resource: item.resource ?? '' };
            button.innerHTML = this.chipTarget.innerHTML.replace(/\{(\w+)\}/g, (match, name) => (name in values ? escapeHtml(values[name]) : match));
        } else {
            button.innerHTML = `${time ? `<span class="font-medium tabular-nums">${escapeHtml(time)}</span> ` : ''}${escapeHtml(item.title)}`;
        }
        button.setAttribute('aria-label', `${item.title}${time ? `, ${time}` : ''}`);
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            this.dispatch('select', { detail: { event: item.raw } });
        });
        if (this.editableValue) {
            button.draggable = true;
            button.addEventListener('dragstart', (event) => {
                const rect = button.getBoundingClientRect();
                this.drag = { item, grab: event.clientY - rect.top };
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('text/plain', item.id);
            });
            button.addEventListener('dragend', () => {
                this.drag = null;
                this.element.querySelectorAll('[data-over]').forEach((node) => node.removeAttribute('data-over'));
            });
        }
        return button;
    }

    renderMonth() {
        const cursor = this.cursor;
        const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
        const gridStart = this.weekStartOf(first);
        const days = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
        const weeks = Math.ceil(((first.getDay() - this.weekStartValue + 7) % 7 + days) / 7);
        const items = this.items;
        const labels = this.labelsValue;
        const wrapper = document.createElement('div');
        const heading = document.createElement('div');
        heading.className = 'grid grid-cols-7 border-b bg-muted/40 text-xs font-medium text-muted-foreground';
        const weekday = this.formatter({ weekday: 'short' });
        for (let index = 0; index < 7; index++) {
            const cell = document.createElement('div');
            cell.className = 'px-2 py-1.5';
            cell.textContent = weekday.format(addDays(gridStart, index));
            heading.append(cell);
        }
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-7';
        const today = isoDate(new Date());
        for (let index = 0; index < weeks * 7; index++) {
            const day = addDays(gridStart, index);
            const iso = isoDate(day);
            const cell = document.createElement('div');
            cell.dataset.date = iso;
            cell.className = `group/cell relative min-h-24 border-b border-r p-1 data-[over]:bg-accent ${day.getMonth() === cursor.getMonth() ? '' : 'bg-muted/30 text-muted-foreground'} ${this.creatableValue ? 'cursor-pointer hover:bg-accent/40' : ''}`;
            const number = document.createElement('span');
            number.className = `mb-1 inline-grid size-6 place-items-center rounded-full text-xs ${iso === today ? 'bg-primary font-semibold text-primary-foreground' : ''}`;
            number.textContent = String(day.getDate());
            cell.append(number);
            const list = items.filter((item) => this.on(item, day, addDays(day, 1))).sort((a, b) => a.start - b.start);
            const box = document.createElement('div');
            box.className = 'grid gap-0.5';
            list.slice(0, 3).forEach((item) => box.append(this.chip(item)));
            if (list.length > 3) {
                const more = document.createElement('button');
                more.type = 'button';
                more.className = 'px-1 text-left text-xs text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50';
                more.textContent = (labels.more ?? '+{count} more').replace('{count}', String(list.length - 3));
                more.addEventListener('click', (event) => {
                    event.stopPropagation();
                    this.cursor = day;
                    this.viewValue = 'day';
                    this.announce();
                });
                box.append(more);
            }
            cell.append(box);
            if (this.creatableValue) {
                cell.addEventListener('click', () => this.dispatch('create', { detail: { start: iso, end: iso, allDay: true, resource: null } }));
            }
            if (this.editableValue) {
                cell.addEventListener('dragover', (event) => {
                    if (this.drag) {
                        event.preventDefault();
                        cell.dataset.over = '';
                    }
                });
                cell.addEventListener('dragleave', () => cell.removeAttribute('data-over'));
                cell.addEventListener('drop', (event) => {
                    event.preventDefault();
                    cell.removeAttribute('data-over');
                    if (this.drag) {
                        const { item } = this.drag;
                        const delta = Math.round((startOfDay(day) - startOfDay(item.start)) / 86400000);
                        const start = addDays(item.start, delta);
                        const end = addDays(item.allDay ? addDays(item.end, -1) : item.end, delta);
                        this.move(item, start, end, item.resource);
                    }
                });
            }
            grid.append(cell);
        }
        wrapper.append(heading, grid);
        this.bodyTarget.append(wrapper);
    }

    renderGrid(single) {
        const startHour = this.startHourValue;
        const hours = this.endHourValue - startHour;
        const hourHeight = this.hourHeightValue;
        const items = this.items;
        const resources = single && this.resourcesValue.length > 0 ? this.resourcesValue : null;
        const days = single ? [this.cursor] : Array.from({ length: 7 }, (_, index) => addDays(this.weekStartOf(this.cursor), index));
        const columns = resources ? resources.map((resource) => ({ day: this.cursor, resource })) : days.map((day) => ({ day, resource: null }));
        const template = `3.5rem repeat(${columns.length}, minmax(0, 1fr))`;
        const today = isoDate(new Date());
        const weekday = this.formatter({ weekday: 'short' });
        const root = document.createElement('div');
        // Header
        const header = document.createElement('div');
        header.className = 'grid border-b bg-muted/40 text-xs';
        header.style.gridTemplateColumns = template;
        header.append(document.createElement('div'));
        columns.forEach(({ day, resource }) => {
            const cell = document.createElement('div');
            cell.className = `px-2 py-1.5 text-center font-medium ${!resource && isoDate(day) === today ? 'text-primary' : 'text-muted-foreground'}`;
            cell.textContent = resource ? resource.title : `${weekday.format(day)} ${day.getDate()}`;
            header.append(cell);
        });
        // All-day row
        const allDay = document.createElement('div');
        allDay.className = 'grid border-b text-xs';
        allDay.style.gridTemplateColumns = template;
        const allDayLabel = document.createElement('div');
        allDayLabel.className = 'px-1 py-1.5 text-right text-[10px] text-muted-foreground';
        allDayLabel.textContent = this.labelsValue.allDay ?? 'All day';
        allDay.append(allDayLabel);
        let anyAllDay = false;
        columns.forEach(({ day, resource }) => {
            const cell = document.createElement('div');
            cell.className = 'grid min-h-6 content-start gap-0.5 border-l p-0.5';
            items
                .filter((item) => item.allDay && this.on(item, day, addDays(day, 1)) && (!resource || item.resource === resource.id))
                .forEach((item) => {
                    anyAllDay = true;
                    cell.append(this.chip(item));
                });
            allDay.append(cell);
        });
        // Time grid
        const scroller = document.createElement('div');
        scroller.className = 'max-h-[28rem] overflow-y-auto';
        const body = document.createElement('div');
        body.className = 'grid';
        body.style.gridTemplateColumns = template;
        const hoursColumn = document.createElement('div');
        for (let hour = 0; hour < hours; hour++) {
            const label = document.createElement('div');
            label.className = 'pr-1 text-right text-[10px] text-muted-foreground';
            label.style.height = `${hourHeight}px`;
            label.textContent = this.formatter({ hour: 'numeric' }).format(new Date(2000, 0, 1, startHour + hour));
            hoursColumn.append(label);
        }
        body.append(hoursColumn);
        columns.forEach(({ day, resource }) => {
            const column = document.createElement('div');
            column.className = 'relative border-l';
            column.style.height = `${hours * hourHeight}px`;
            column.style.backgroundImage = `repeating-linear-gradient(to bottom, transparent 0, transparent ${hourHeight - 1}px, var(--color-border, #e4e4e7) ${hourHeight - 1}px, var(--color-border, #e4e4e7) ${hourHeight}px)`;
            column.dataset.date = isoDate(day);
            if (resource) column.dataset.resource = resource.id;
            const from = new Date(day.getFullYear(), day.getMonth(), day.getDate(), startHour);
            const to = new Date(day.getFullYear(), day.getMonth(), day.getDate(), this.endHourValue);
            const list = items.filter((item) => !item.allDay && this.on(item, from, to) && (!resource || item.resource === resource.id)).sort((a, b) => a.start - b.start || b.end - a.end);
            this.lanes(list).forEach(({ item, lane, lanes }) => {
                const top = (Math.max(item.start, from) - from) / 60000 * (hourHeight / 60);
                const height = Math.max((Math.min(item.end, to) - Math.max(item.start, from)) / 60000 * (hourHeight / 60), 20);
                const block = this.chip(item, 'absolute whitespace-normal overflow-hidden');
                block.style.cssText = `top:${top}px;height:${height - 1}px;left:calc(${(lane / lanes) * 100}% + 1px);width:calc(${100 / lanes}% - 2px)`;
                column.append(block);
            });
            this.wire(column, day, resource);
            body.append(column);
        });
        scroller.append(body);
        root.append(header);
        if (anyAllDay) root.append(allDay);
        root.append(scroller);
        this.bodyTarget.append(root);
    }

    /** Puts overlapping events side by side: returns the lane of each and the number of lanes of its cluster. */
    lanes(list) {
        const result = [];
        let cluster = [];
        let clusterEnd = null;
        const flush = () => {
            const count = Math.max(1, ...cluster.map((entry) => entry.lane + 1));
            cluster.forEach((entry) => result.push({ ...entry, lanes: count }));
            cluster = [];
        };
        list.forEach((item) => {
            if (clusterEnd !== null && item.start >= clusterEnd) {
                flush();
                clusterEnd = null;
            }
            const taken = cluster.filter((entry) => entry.item.end > item.start).map((entry) => entry.lane);
            let lane = 0;
            while (taken.includes(lane)) lane++;
            cluster.push({ item, lane });
            clusterEnd = clusterEnd === null ? item.end : new Date(Math.max(clusterEnd, item.end));
        });
        flush();
        return result;
    }

    minutesAt(column, clientY) {
        const rect = column.getBoundingClientRect();
        const raw = ((clientY - rect.top) / this.hourHeightValue) * 60 + this.startHourValue * 60;
        return Math.max(this.startHourValue * 60, Math.min(this.endHourValue * 60, Math.round(raw / this.slotMinutesValue) * this.slotMinutesValue));
    }

    at(day, minutes) {
        return new Date(day.getFullYear(), day.getMonth(), day.getDate(), 0, minutes);
    }

    wire(column, day, resource) {
        if (this.editableValue) {
            column.addEventListener('dragover', (event) => {
                if (this.drag) event.preventDefault();
            });
            column.addEventListener('drop', (event) => {
                event.preventDefault();
                if (!this.drag) return;
                const { item, grab } = this.drag;
                if (item.allDay) {
                    this.move(item, startOfDay(day), startOfDay(day), resource ? resource.id : item.resource);
                    return;
                }
                const start = this.at(day, this.minutesAt(column, event.clientY - grab));
                this.move(item, start, addMinutes(start, (item.end - item.start) / 60000), resource ? resource.id : item.resource);
            });
        }
        if (this.creatableValue) {
            column.addEventListener('pointerdown', (event) => {
                if (event.target !== column || event.button !== 0) return;
                const anchor = this.minutesAt(column, event.clientY);
                const selection = document.createElement('div');
                selection.className = 'pointer-events-none absolute inset-x-0.5 rounded border border-primary bg-primary/15';
                column.append(selection);
                const paint = (minutes) => {
                    const from = Math.min(anchor, minutes);
                    const to = Math.max(anchor, minutes) + (minutes === anchor ? this.slotMinutesValue * 2 : 0);
                    selection.style.top = `${((from - this.startHourValue * 60) / 60) * this.hourHeightValue}px`;
                    selection.style.height = `${((to - from) / 60) * this.hourHeightValue}px`;
                    return [from, to];
                };
                let range = paint(anchor);
                const onMove = (moveEvent) => {
                    range = paint(this.minutesAt(column, moveEvent.clientY));
                };
                const onUp = () => {
                    document.removeEventListener('pointermove', onMove);
                    document.removeEventListener('pointerup', onUp);
                    selection.remove();
                    this.dispatch('create', { detail: { start: isoDateTime(this.at(day, range[0])), end: isoDateTime(this.at(day, range[1])), allDay: false, resource: resource ? resource.id : null } });
                };
                document.addEventListener('pointermove', onMove);
                document.addEventListener('pointerup', onUp);
                event.preventDefault();
            });
        }
    }

    move(item, start, end, resource) {
        const allDay = item.allDay;
        const detail = {
            event: item.raw,
            start: allDay ? isoDate(start) : isoDateTime(start),
            end: allDay ? isoDate(end) : isoDateTime(end),
            resource: resource ?? null,
        };
        const accepted = this.dispatch('move', { detail, cancelable: true });
        if (accepted.defaultPrevented) {
            return;
        }
        item.element.dataset.start = detail.start;
        item.element.dataset.end = detail.end;
        if (detail.resource !== null) item.element.dataset.resource = detail.resource;
    }

    renderAgenda() {
        const cursor = this.cursor;
        const from = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
        const to = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
        const items = this.items.filter((item) => this.on(item, from, to)).sort((a, b) => a.start - b.start);
        const list = document.createElement('div');
        list.className = 'divide-y';
        if (items.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'p-6 text-center text-sm text-muted-foreground';
            empty.textContent = this.labelsValue.noEvents ?? 'No events';
            list.append(empty);
        }
        const heading = this.formatter({ weekday: 'long', month: 'long', day: 'numeric' });
        const groups = new Map();
        items.forEach((item) => {
            const key = isoDate(item.start < from ? from : item.start);
            groups.set(key, [...(groups.get(key) ?? []), item]);
        });
        groups.forEach((group, key) => {
            const section = document.createElement('section');
            section.className = 'grid gap-1 p-3 sm:grid-cols-[10rem_1fr]';
            const title = document.createElement('h3');
            title.className = 'text-sm font-semibold';
            title.textContent = heading.format(parse(key));
            const rows = document.createElement('div');
            rows.className = 'grid gap-1';
            group.forEach((item) => rows.append(this.chip(item, 'py-1 text-sm')));
            section.append(title, rows);
            list.append(section);
        });
        this.bodyTarget.append(list);
    }
}

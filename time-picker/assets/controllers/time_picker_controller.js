import { Controller } from '@hotwired/stimulus';

/*
 * Time picker: a typed field plus a popover of listbox columns.
 * - the submitted value is always 24h ("HH:mm" or "HH:mm:ss"), whatever the display cycle;
 * - min / max are inclusive (the window wraps overnight when min > max);
 * - picks, typed input and "Now" snap to the nearest allowed time.
 */
export default class extends Controller {
    static targets = ['input', 'hidden', 'trigger', 'panel', 'columns'];
    static values = {
        hoursLabel: { type: String, default: 'Hours' },
        minutesLabel: { type: String, default: 'Minutes' },
        secondsLabel: { type: String, default: 'Seconds' },
        periodLabel: { type: String, default: 'AM/PM' },
        value: String,
        hourCycle: { type: Number, default: 24 },
        hourStep: { type: Number, default: 1 },
        minuteStep: { type: Number, default: 1 },
        secondStep: { type: Number, default: 1 },
        seconds: Boolean,
        requireConfirm: Boolean,
        min: String,
        max: String,
    };

    connect() {
        this.time = this.parseTime(this.valueValue);
        this.draft = this.time ? { ...this.time } : null;
        this.onOutsideClick = (event) => {
            if (!this.element.contains(event.target)) this.close();
        };
        this.writeFields();
    }

    disconnect() {
        document.removeEventListener('pointerdown', this.onOutsideClick);
    }

    toggle() {
        this.panelTarget.hidden ? this.open() : this.close();
    }

    open() {
        this.draft = this.time ? { ...this.time } : null;
        this.panelTarget.hidden = false;
        this.triggerTarget.setAttribute('aria-expanded', 'true');
        this.render();
        document.addEventListener('pointerdown', this.onOutsideClick);
        (this.columnsTarget.querySelector('[role="listbox"]'))?.focus();
    }

    close(restoreFocus = false) {
        if (this.panelTarget.hidden) return;
        this.panelTarget.hidden = true;
        this.triggerTarget.setAttribute('aria-expanded', 'false');
        document.removeEventListener('pointerdown', this.onOutsideClick);
        if (restoreFocus) this.triggerTarget.focus();
    }

    confirm() {
        if (this.draft) this.commit(this.draft);
        this.close(true);
    }

    now() {
        const date = new Date();
        const snapped = this.snap({ h: date.getHours(), m: date.getMinutes(), s: date.getSeconds() });
        this.pick(snapped);
    }

    clear() {
        this.draft = null;
        this.commit(null);
        this.render();
    }

    panelKeydown(event) {
        if ('Escape' === event.key) {
            event.preventDefault();
            this.close(true);
        }
    }

    inputKeydown(event) {
        if ('Enter' === event.key) {
            event.preventDefault();
            this.parseInput();
        } else if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
            event.preventDefault();
            this.parseInput();
            this.stepAvailable('ArrowUp' === event.key ? -1 : 1);
        }
    }

    parseInput() {
        const text = this.inputTarget.value.trim();
        if ('' === text) {
            this.commit(null);

            return;
        }
        const parsed = this.parseTyped(text);
        if (parsed) {
            this.commit(this.snap(parsed));
        } else {
            this.writeFields();
        }
    }

    // --- model ------------------------------------------------------------------------------

    pick(time) {
        this.draft = time;
        if (!this.requireConfirmValue) this.commit(time);
        this.render();
    }

    commit(time) {
        const previous = this.valueString(this.time);
        this.time = time ? { ...time } : null;
        this.writeFields();
        if (this.valueString(this.time) !== previous) {
            this.hiddenTarget.dispatchEvent(new Event('change', { bubbles: true }));
            this.dispatch('change', { detail: { value: this.valueString(this.time) || null } });
        }
    }

    writeFields() {
        this.hiddenTarget.value = this.valueString(this.time);
        this.inputTarget.value = this.time ? this.display(this.time) : '';
    }

    valueString(time) {
        if (!time) return '';
        const parts = [time.h, time.m].concat(this.secondsValue ? [time.s ?? 0] : []);

        return parts.map((part) => String(part).padStart(2, '0')).join(':');
    }

    display(time) {
        const pad = (number) => String(number).padStart(2, '0');
        const tail = this.secondsValue ? `:${pad(time.s ?? 0)}` : '';
        if (24 === this.hourCycleValue) return `${pad(time.h)}:${pad(time.m)}${tail}`;

        return `${time.h % 12 || 12}:${pad(time.m)}${tail} ${time.h < 12 ? 'AM' : 'PM'}`;
    }

    parseTime(text) {
        const match = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec((text || '').trim());
        if (!match) return null;
        const time = { h: Number(match[1]), m: Number(match[2]), s: Number(match[3] ?? 0) };

        return time.h < 24 && time.m < 60 && time.s < 60 ? time : null;
    }

    // Accepts "1430", "14:30", "14h30", "2:30pm", "930", "9".
    parseTyped(text) {
        const match = /^(\d{1,2})(?:[:h.]?(\d{2}))?(?:[:.](\d{2}))?\s*([ap])?m?$/i.exec(text.replace(/\s+/g, ' ').trim()) || /^(\d{1,2})(\d{2})()\s*([ap])?m?$/i.exec(text.trim());
        if (!match) return null;
        let hours = Number(match[1]);
        const minutes = Number(match[2] ?? 0);
        const seconds = Number(match[3] || 0);
        const period = (match[4] || '').toLowerCase();
        if (period) {
            if (hours < 1 || hours > 12) return null;
            hours = 'p' === period ? (hours % 12) + 12 : hours % 12;
        }

        return hours < 24 && minutes < 60 && seconds < 60 ? { h: hours, m: minutes, s: seconds } : null;
    }

    // --- constraints ------------------------------------------------------------------------

    toSeconds(time) {
        return time.h * 3600 + time.m * 60 + (time.s ?? 0);
    }

    allowed(time) {
        const value = this.toSeconds(time);
        const min = this.parseTime(this.minValue);
        const max = this.parseTime(this.maxValue);
        const low = min ? this.toSeconds(min) : 0;
        const high = max ? this.toSeconds(max) + (max.s ? 0 : 59) : 86399;
        if (!min && !max) return true;

        return low <= high ? value >= low && value <= high : value >= low || value <= high;
    }

    snap(time) {
        const candidate = { h: time.h, m: time.m, s: this.secondsValue ? (time.s ?? 0) : 0 };
        if (this.allowed(candidate)) return candidate;
        let best = null;
        let distance = Infinity;
        for (let h = 0; h < 24; h += this.hourStepValue) {
            for (let m = 0; m < 60; m += this.minuteStepValue) {
                for (let s = 0; s < (this.secondsValue ? 60 : 1); s += this.secondStepValue) {
                    const option = { h, m, s };
                    if (!this.allowed(option)) continue;
                    const gap = Math.abs(this.toSeconds(option) - this.toSeconds(candidate));
                    if (gap < distance) {
                        distance = gap;
                        best = option;
                    }
                }
            }
        }

        return best ?? candidate;
    }

    stepAvailable(direction) {
        const options = [];
        for (let h = 0; h < 24; h += this.hourStepValue) {
            for (let m = 0; m < 60; m += this.minuteStepValue) {
                for (let s = 0; s < (this.secondsValue ? 60 : 1); s += this.secondStepValue) {
                    if (this.allowed({ h, m, s })) options.push({ h, m, s });
                }
            }
        }
        if (0 === options.length) return;
        const current = this.time ? this.toSeconds(this.time) : (direction > 0 ? -1 : 86400);
        const next = direction > 0 ? options.find((option) => this.toSeconds(option) > current) : [...options].reverse().find((option) => this.toSeconds(option) < current);
        if (next) this.commit(next);
    }

    // --- columns ----------------------------------------------------------------------------

    columnDefinitions() {
        const twelve = 12 === this.hourCycleValue;
        const range = (count, step) => Array.from({ length: Math.ceil(count / step) }, (_, index) => index * step);
        const current = this.draft;
        const columns = [];
        const hours = twelve ? [12, ...range(11, 1).map((hour) => hour + 1).filter((hour) => hour < 12)] : range(24, this.hourStepValue);
        columns.push({
            key: 'h',
            label: this.hoursLabelValue,
            options: hours.map((hour) => ({ value: hour, text: twelve ? String(hour) : String(hour).padStart(2, '0'), selected: current ? (twelve ? (current.h % 12 || 12) === hour : current.h === hour) : false, disabled: !this.hourAvailable(twelve ? this.to24(hour, current ? current.h >= 12 : false) : hour) })),
        });
        columns.push({
            key: 'm',
            label: this.minutesLabelValue,
            options: range(60, this.minuteStepValue).map((minute) => ({ value: minute, text: String(minute).padStart(2, '0'), selected: current?.m === minute, disabled: !this.minuteAvailable(current?.h ?? 0, minute) })),
        });
        if (this.secondsValue) {
            columns.push({
                key: 's',
                label: this.secondsLabelValue,
                options: range(60, this.secondStepValue).map((second) => ({ value: second, text: String(second).padStart(2, '0'), selected: (current?.s ?? 0) === second && current !== null, disabled: !this.allowed({ h: current?.h ?? 0, m: current?.m ?? 0, s: second }) })),
            });
        }
        if (twelve) {
            columns.push({
                key: 'p',
                label: this.periodLabelValue,
                options: ['AM', 'PM'].map((period) => ({ value: period, text: period, selected: current ? (current.h < 12) === ('AM' === period) : false, disabled: false })),
            });
        }

        return columns;
    }

    to24(hour12, pm) {
        return (hour12 % 12) + (pm ? 12 : 0);
    }

    hourAvailable(hour) {
        for (let m = 0; m < 60; m += this.minuteStepValue) {
            if (this.allowed({ h: hour, m, s: 0 }) || (this.secondsValue && this.minuteAvailable(hour, m))) return true;
        }

        return false;
    }

    minuteAvailable(hour, minute) {
        if (!this.secondsValue) return this.allowed({ h: hour, m: minute, s: 0 });
        for (let s = 0; s < 60; s += this.secondStepValue) {
            if (this.allowed({ h: hour, m: minute, s })) return true;
        }

        return false;
    }

    render() {
        const focused = this.columnsTarget.querySelector('[role="listbox"]:focus-within, [role="listbox"]:focus')?.dataset.key;
        this.columnsTarget.innerHTML = '';
        this.columnDefinitions().forEach((column) => {
            const list = document.createElement('div');
            list.setAttribute('role', 'listbox');
            list.setAttribute('aria-label', column.label);
            list.tabIndex = 0;
            list.dataset.key = column.key;
            list.className = 'h-48 w-14 overflow-y-auto rounded-md border border-border p-1 outline-none focus-visible:ring-2 focus-visible:ring-ring';
            list.addEventListener('keydown', (event) => this.columnKeydown(event, column));
            column.options.forEach((option) => {
                const item = document.createElement('div');
                item.setAttribute('role', 'option');
                item.setAttribute('aria-selected', String(option.selected));
                if (option.disabled) item.setAttribute('aria-disabled', 'true');
                item.dataset.value = option.value;
                item.textContent = option.text;
                item.className = 'cursor-pointer rounded px-2 py-1 text-center text-sm tabular-nums aria-selected:bg-primary aria-selected:text-primary-foreground aria-disabled:cursor-not-allowed aria-disabled:opacity-40 hover:bg-muted';
                if (!option.disabled) item.addEventListener('click', () => this.choose(column.key, option.value));
                list.appendChild(item);
            });
            this.columnsTarget.appendChild(list);
            list.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'center' });
        });
        if (focused) this.columnsTarget.querySelector(`[data-key="${focused}"]`)?.focus();
    }

    choose(key, value) {
        const base = this.draft ?? this.snap({ h: 0, m: 0, s: 0 });
        const next = { ...base };
        const twelve = 12 === this.hourCycleValue;
        if ('h' === key) next.h = twelve ? this.to24(value, base.h >= 12) : value;
        if ('m' === key) next.m = value;
        if ('s' === key) next.s = value;
        if ('p' === key) next.h = this.to24(base.h % 12, 'PM' === value);
        this.pick(this.snap(next));
    }

    columnKeydown(event, column) {
        const enabled = column.options.filter((option) => !option.disabled);
        const index = enabled.findIndex((option) => option.selected);
        let target = null;
        if ('ArrowDown' === event.key) target = enabled[Math.min(enabled.length - 1, index + 1)];
        else if ('ArrowUp' === event.key) target = enabled[Math.max(0, index - 1)];
        else if ('Home' === event.key) target = enabled[0];
        else if ('End' === event.key) target = enabled[enabled.length - 1];
        else if ('PageDown' === event.key) target = enabled[Math.min(enabled.length - 1, index + 5)];
        else if ('PageUp' === event.key) target = enabled[Math.max(0, index - 5)];
        else if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
            const lists = [...this.columnsTarget.querySelectorAll('[role="listbox"]')];
            const position = lists.indexOf(event.currentTarget) + ('ArrowRight' === event.key ? 1 : -1);
            event.preventDefault();
            lists[(position + lists.length) % lists.length]?.focus();

            return;
        } else if (/^\d$/.test(event.key)) {
            // Typing digits jumps to a matching value ("1" then "4" within a second selects 14).
            this.typeBuffer = (Date.now() - (this.typeTime ?? 0) < 1000 ? this.typeBuffer : '') + event.key;
            this.typeTime = Date.now();
            target = enabled.find((option) => String(option.value).padStart(2, '0').endsWith(this.typeBuffer.slice(-2)) || String(option.value) === this.typeBuffer);
        } else {
            return;
        }
        event.preventDefault();
        if (target) this.choose(column.key, target.value);
    }
}

import { Controller } from '@hotwired/stimulus';

const OPERATORS = {
    text: [['contains', 'contains'], ['eq', 'is'], ['neq', 'is not']],
    number: [['eq', '='], ['neq', '≠'], ['gt', '>'], ['lt', '<']],
    select: [['eq', 'is'], ['neq', 'is not']],
    multiselect: [['in', 'is any of'], ['nin', 'is none of']],
    boolean: [['eq', 'is']],
    date: [['eq', 'is'], ['before', 'before'], ['after', 'after']],
    slider: [['eq', '='], ['gt', '>'], ['lt', '<']],
};

/*
 * Filter bar. <twig:Filters:Fields> describes the available filters and <twig:Filters:Values> the active ones; the
 * controller reads that markup. The state is mirrored into hidden inputs (`<field>` and `<field>__op`) so the
 * surrounding GET form carries it in the URL. `filters:change` fires with the full list of active filters on every
 * change. The controls (select, input, buttons, popovers) are cloned from the shadcn components rendered by Twig
 * into the <template> targets; opening and closing the popovers is the shadcn Popover's job.
 */
export default class extends Controller {
    static targets = ['fields', 'values', 'chips', 'addButton', 'menuRoot', 'menu', 'clear', 'count', 'inputs', 'tplMenuItem', 'tplSelect', 'tplInput', 'tplRemove', 'tplMulti', 'tplOption'];
    static values = { labels: Object, autoSubmit: { type: Boolean, default: true }, mode: { type: String, default: 'chips' } };

    connect() {
        this.fields = Array.from(this.fieldsTarget.children).filter((item) => 'LI' === item.tagName).map((item) => ({
            name: item.dataset.name,
            label: item.dataset.label,
            type: item.dataset.type || 'text',
            group: item.dataset.group || '',
            min: Number(item.dataset.min ?? 0),
            max: Number(item.dataset.max ?? 100),
            step: Number(item.dataset.step ?? 1),
            pageSize: Number(item.dataset.pageSize ?? 0),
            searchable: 'searchable' in item.dataset,
            options: Object.fromEntries(Array.from(item.querySelectorAll(':scope > ul > li')).map((option) => [option.dataset.value, option.dataset.label])),
            content: Object.fromEntries(Array.from(item.querySelectorAll(':scope > ul > li')).filter((option) => option.querySelector(':scope > template')).map((option) => [option.dataset.value, option.querySelector(':scope > template')])),
        }));
        this.menuGroup = null;
        this.filters = Array.from(this.hasValuesTarget ? this.valuesTarget.children : [])
            .filter((item) => 'LI' === item.tagName && this.field(item.dataset.field))
            .map((item) => ({
                field: item.dataset.field,
                operator: item.dataset.operator || this.operators(item.dataset.field)[0][0],
                value: JSON.parse(item.dataset.value ?? '""') ?? this.emptyValue(item.dataset.field),
            }));
        this.observers = [];
        this.render();
    }

    disconnect() {
        this.observers.forEach((observer) => observer.disconnect());
    }

    // Texts come from the Twig props (English defaults); {placeholders} are replaced.
    text(key, replacements = {}) {
        const defaults = { where: 'Where', and: 'And', fieldName: 'Field', search: 'Search', more: 'Show more', empty: 'No more filters', select: 'Select…', yes: 'Yes', no: 'No', selected: '{count} selected', remove: 'Remove {field} filter', operator: '{field} operator', value: '{field} value' };

        return Object.entries(replacements).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), this.labelsValue[key] ?? defaults[key]);
    }

    operatorOptions(name) {
        const type = this.field(name).type;
        const custom = this.labelsValue.operators ?? {};

        return this.operators(name).map(([value, text]) => [['number', 'slider'].includes(type) ? text : (custom[value] ?? text), value]);
    }

    field(name) {
        return this.fields.find((field) => field.name === name);
    }

    operators(name) {
        return OPERATORS[this.field(name).type] ?? OPERATORS.text;
    }

    emptyValue(name) {
        const type = this.field(name).type;

        return 'multiselect' === type ? [] : 'boolean' === type ? '1' : '';
    }

    clone(target) {
        return target.content.firstElementChild.cloneNode(true);
    }

    // --- add menu ---------------------------------------------------------------------------

    // Display name of a field: `Group › Label` when it belongs to a group.
    fieldName(field) {
        return field.group ? `${field.group} › ${field.label}` : field.label;
    }

    buildMenu() {
        if (!this.hasMenuTarget) return;
        const available = this.fields.filter((field) => !this.filters.some((filter) => filter.field === field.name));
        const items = [];
        const entry = (text, action) => {
            const item = this.clone(this.tplMenuItemTarget);
            item.textContent = text;
            item.addEventListener('click', action);
            items.push(item);

            return item;
        };
        if (this.menuGroup) {
            entry(`‹ ${this.menuGroup}`, () => { this.menuGroup = null; this.buildMenu(); }).classList.add('text-muted-foreground');
            available.filter((field) => field.group === this.menuGroup).forEach((field) => entry(field.label, () => this.add(field.name)));
        } else {
            available.filter((field) => !field.group).forEach((field) => entry(field.label, () => this.add(field.name)));
            [...new Set(available.filter((field) => field.group).map((field) => field.group))].forEach((group) => {
                entry(`${group} ›`, () => { this.menuGroup = group; this.buildMenu(); });
            });
        }
        this.menuTarget.replaceChildren(...items);
        if (!available.length) {
            const empty = document.createElement('p');
            empty.className = 'px-2 py-1.5 text-sm text-muted-foreground';
            empty.textContent = this.text('empty');
            this.menuTarget.replaceChildren(empty);
        }
    }

    closeMenu() {
        this.menuGroup = null;
        if (this.hasMenuRootTarget) this.menuRootTarget.dataset.popoverOpenValue = 'false';
    }

    // Builder modes: the add button appends a rule with the first field that is not used yet.
    addNext() {
        const field = this.fields.find((item) => !this.filters.some((filter) => filter.field === item.name));
        if (field) this.add(field.name);
    }

    menuKey(event) {
        const items = [...this.menuTarget.querySelectorAll('[role=menuitem]')];
        const index = items.indexOf(document.activeElement);
        if ('ArrowDown' === event.key || 'ArrowUp' === event.key) {
            event.preventDefault();
            items[(index + ('ArrowDown' === event.key ? 1 : -1) + items.length) % items.length]?.focus();
        }
    }

    add(name) {
        this.closeMenu();
        this.filters.push({ field: name, operator: this.operators(name)[0][0], value: this.emptyValue(name) });
        this.render(name);
        // A new filter is only submitted once it has a value.
    }

    remove(name) {
        this.filters = this.filters.filter((filter) => filter.field !== name);
        this.render();
        this.changed();
        this.addButtonTarget.focus();
    }

    clear() {
        this.filters = [];
        this.render();
        this.changed();
        this.addButtonTarget.focus();
    }

    // --- rendering --------------------------------------------------------------------------

    render(focusField = null) {
        this.observers.forEach((observer) => observer.disconnect());
        this.observers = [];
        this.chipsTarget.replaceChildren(...this.filters.map((filter, index) => this.chip(filter, index)));
        this.clearTarget.hidden = 0 === this.filters.length;
        if (this.hasCountTarget) {
            const count = this.filters.filter((filter) => this.isActive(filter)).length;
            this.countTarget.textContent = String(count);
            this.countTarget.hidden = 0 === count;
        }
        if ('chips' !== this.modeValue && this.hasAddButtonTarget) this.addButtonTarget.disabled = this.filters.length >= this.fields.length;
        this.buildMenu();
        this.syncInputs();
        if (focusField) this.chipsTarget.querySelector(`[data-field="${focusField}"] [data-editor]`)?.focus();
    }

    chip(filter, index = 0) {
        const field = this.field(filter.field);
        const chip = document.createElement('div');
        chip.setAttribute('role', 'group');
        chip.setAttribute('aria-label', this.fieldName(field));
        chip.dataset.field = filter.field;
        chip.className = 'inline-flex h-8 items-stretch divide-x divide-border overflow-hidden rounded-lg border border-border bg-background text-sm';

        let name = document.createElement('span');
        name.className = 'flex items-center px-2 font-medium';
        name.textContent = this.fieldName(field);
        if ('chips' !== this.modeValue) name = this.fieldSelect(filter);

        const operators = this.operators(filter.field);
        const operatorBox = this.clone(this.tplSelectTarget);
        const operator = operatorBox.querySelector('select');
        operator.setAttribute('aria-label', this.text('operator', { field: field.label }));
        operator.classList.add('text-muted-foreground');
        this.operatorOptions(filter.field).forEach(([text, value]) => operator.append(new Option(text, value, false, value === filter.operator)));
        operator.disabled = 1 === operators.length;
        operator.addEventListener('change', () => {
            filter.operator = operator.value;
            this.syncInputs();
            this.changed();
        });

        const remove = this.clone(this.tplRemoveTarget);
        remove.setAttribute('aria-label', this.text('remove', { field: field.label }));
        remove.addEventListener('click', () => this.remove(filter.field));

        chip.append(name, operatorBox, this.editor(filter, field), remove);
        if ('chips' === this.modeValue) return chip;

        // Builder rows: "Where" / "And" in front of the same group of controls.
        const row = document.createElement('div');
        row.className = 'flex flex-wrap items-center gap-2';
        row.dataset.field = filter.field;
        const lead = document.createElement('span');
        lead.className = 'w-12 shrink-0 text-sm text-muted-foreground';
        lead.textContent = 0 === index ? this.text('where') : this.text('and');
        chip.removeAttribute('data-field');
        row.append(lead, chip);

        return row;
    }

    // Builder rows can change their field: the options are the fields no other rule uses.
    fieldSelect(filter) {
        const box = this.clone(this.tplSelectTarget);
        const select = box.querySelector('select');
        select.setAttribute('aria-label', this.text('fieldName'));
        this.fields.filter((field) => field.name === filter.field || !this.filters.some((other) => other.field === field.name))
            .forEach((field) => select.append(new Option(this.fieldName(field), field.name, false, field.name === filter.field)));
        select.addEventListener('change', () => {
            filter.field = select.value;
            filter.operator = this.operators(select.value)[0][0];
            filter.value = this.emptyValue(select.value);
            this.render(select.value);
            this.changed();
        });

        return box;
    }

    editor(filter, field) {
        const commit = (value) => {
            filter.value = value;
            this.syncInputs();
        };
        const options = Object.entries(field.options ?? {});

        if ('multiselect' === field.type) {
            return this.multiEditor(filter, field, options, commit);
        }

        if ('slider' === field.type) {
            return this.sliderEditor(filter, field, commit);
        }

        let box;
        let control;
        if ('select' === field.type || 'boolean' === field.type) {
            box = this.clone(this.tplSelectTarget);
            control = box.querySelector('select');
            const list = 'boolean' === field.type ? [['1', this.text('yes')], ['0', this.text('no')]] : [['', this.text('select')], ...options];
            list.forEach(([value, text]) => control.append(new Option(text, value, false, String(value) === String(filter.value))));
            control.addEventListener('change', () => {
                commit(control.value);
                this.changed();
            });
        } else {
            box = this.clone(this.tplInputTarget);
            control = box;
            control.type = { number: 'number', date: 'date' }[field.type] ?? 'text';
            control.value = filter.value;
            control.addEventListener('input', () => commit(control.value));
            control.addEventListener('change', () => this.changed());
            control.addEventListener('keydown', (event) => {
                if ('Enter' === event.key) {
                    event.preventDefault();
                    commit(control.value);
                    this.changed();
                }
            });
        }
        control.dataset.editor = '';
        control.setAttribute('aria-label', this.text('value', { field: field.label }));

        return box;
    }

    sliderEditor(filter, field, commit) {
        const box = document.createElement('div');
        box.className = 'flex items-center gap-2 px-2';
        const range = document.createElement('input');
        range.type = 'range';
        range.min = field.min;
        range.max = field.max;
        range.step = field.step;
        range.value = '' === filter.value ? field.min : filter.value;
        range.className = 'w-28 accent-primary';
        range.dataset.editor = '';
        range.setAttribute('aria-label', this.text('value', { field: field.label }));
        const output = document.createElement('output');
        output.className = 'w-8 text-right tabular-nums text-muted-foreground';
        output.textContent = '' === filter.value ? '' : filter.value;
        range.addEventListener('input', () => {
            commit(range.value);
            output.textContent = range.value;
        });
        range.addEventListener('change', () => this.changed());
        box.append(range, output);

        return box;
    }

    multiEditor(filter, field, options, commit) {
        const root = this.clone(this.tplMultiTarget);
        const button = root.querySelector('[data-part=trigger]');
        const list = root.querySelector('[data-part=list]');
        button.dataset.editor = '';
        button.setAttribute('aria-label', this.text('value', { field: field.label }));
        list.setAttribute('aria-label', field.label);

        const summary = () => {
            const labels = filter.value.map((value) => field.options[value] ?? value);
            button.textContent = 0 === labels.length ? this.text('select') : labels.length <= 2 ? labels.join(', ') : this.text('selected', { count: labels.length });
        };

        let shown = field.pageSize || options.length;
        const paint = () => {
            const query = search ? search.value.trim().toLowerCase() : '';
            const matches = options.filter(([, text]) => !query || text.toLowerCase().includes(query));
            const visible = query ? matches : matches.slice(0, shown);
            list.replaceChildren(...visible.map(([value, text]) => {
                const option = this.clone(this.tplOptionTarget);
                const box = option.querySelector('input');
                option.setAttribute('aria-selected', String(filter.value.includes(value)));
                box.checked = filter.value.includes(value);
                box.addEventListener('change', () => {
                    commit(box.checked ? [...filter.value, value] : filter.value.filter((item) => item !== value));
                    option.setAttribute('aria-selected', String(box.checked));
                    summary();
                });
                const label = option.querySelector('[data-part=text]');
                if (field.content[value]) label.replaceChildren(field.content[value].content.cloneNode(true));
                else label.textContent = text;
                label.setAttribute('aria-label', text);

                return option;
            }));
            if (!query && visible.length < matches.length) {
                const more = this.clone(this.tplMenuItemTarget);
                more.textContent = `${this.text('more')} (${matches.length - visible.length})`;
                more.addEventListener('click', () => {
                    shown += field.pageSize;
                    paint();
                });
                list.append(more);
            }
        };
        let search = null;
        if (field.searchable) {
            search = this.clone(this.tplInputTarget);
            search.className = 'mb-1 h-8 w-full rounded-md border border-input bg-transparent px-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring';
            search.type = 'search';
            search.placeholder = this.text('search');
            search.setAttribute('aria-label', this.text('search'));
            search.addEventListener('input', paint);
            list.before(search);
        }
        paint();

        // The popover is the shadcn one; the filters are applied when it closes.
        let wasOpen = false;
        const observer = new MutationObserver(() => {
            const open = 'open' === root.dataset.state;
            if (wasOpen && !open) this.changed();
            wasOpen = open;
        });
        observer.observe(root, { attributes: true, attributeFilter: ['data-state'] });
        this.observers.push(observer);
        summary();

        return root;
    }

    // --- state ------------------------------------------------------------------------------

    isActive(filter) {
        return Array.isArray(filter.value) ? filter.value.length > 0 : '' !== String(filter.value);
    }

    syncInputs() {
        const inputs = [];
        const hidden = (name, value) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value;
            inputs.push(input);
        };
        this.filters.filter((filter) => this.isActive(filter)).forEach((filter) => {
            hidden(`${filter.field}__op`, filter.operator);
            if (Array.isArray(filter.value)) filter.value.forEach((value) => hidden(`${filter.field}[]`, value));
            else hidden(filter.field, filter.value);
        });
        this.inputsTarget.replaceChildren(...inputs);
    }

    changed() {
        const active = this.filters.filter((filter) => this.isActive(filter));
        this.dispatch('change', { detail: { filters: active } });
        if (this.autoSubmitValue) this.element.requestSubmit();
    }
}

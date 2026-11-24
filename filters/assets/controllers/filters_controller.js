import { Controller } from '@hotwired/stimulus';

const OPERATORS = {
    text: [['contains', 'contains'], ['eq', 'is'], ['neq', 'is not']],
    number: [['eq', '='], ['neq', '≠'], ['gt', '>'], ['lt', '<']],
    select: [['eq', 'is'], ['neq', 'is not']],
    multiselect: [['in', 'is any of'], ['nin', 'is none of']],
    boolean: [['eq', 'is']],
    date: [['eq', 'is'], ['before', 'before'], ['after', 'after']],
};

/*
 * Filter bar. <twig:Filters:Fields> describes the available filters and <twig:Filters:Values> the active ones; the
 * controller reads that markup. The state is mirrored into hidden inputs (`<field>` and `<field>__op`) so the
 * surrounding GET form carries it in the URL. `filters:change` fires with the full list of active filters on every
 * change. The controls (select, input, buttons, popovers) are cloned from the shadcn components rendered by Twig
 * into the <template> targets; opening and closing the popovers is the shadcn Popover's job.
 */
export default class extends Controller {
    static targets = ['fields', 'values', 'chips', 'addButton', 'menuRoot', 'menu', 'clear', 'inputs', 'tplMenuItem', 'tplSelect', 'tplInput', 'tplRemove', 'tplMulti', 'tplOption'];
    static values = { labels: Object, autoSubmit: { type: Boolean, default: true } };

    connect() {
        this.fields = Array.from(this.fieldsTarget.children).filter((item) => 'LI' === item.tagName).map((item) => ({
            name: item.dataset.name,
            label: item.dataset.label,
            type: item.dataset.type || 'text',
            options: Object.fromEntries(Array.from(item.querySelectorAll(':scope > ul > li')).map((option) => [option.dataset.value, option.dataset.label])),
        }));
        this.filters = Array.from(this.valuesTarget.children)
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
        const defaults = { empty: 'No more filters', select: 'Select…', yes: 'Yes', no: 'No', selected: '{count} selected', remove: 'Remove {field} filter', operator: '{field} operator', value: '{field} value' };

        return Object.entries(replacements).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), this.labelsValue[key] ?? defaults[key]);
    }

    operatorOptions(name) {
        const type = this.field(name).type;
        const custom = this.labelsValue.operators ?? {};

        return this.operators(name).map(([value, text]) => ['number' === type ? text : (custom[value] ?? text), value]);
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

    buildMenu() {
        const available = this.fields.filter((field) => !this.filters.some((filter) => filter.field === field.name));
        this.menuTarget.replaceChildren(...available.map((field) => {
            const item = this.clone(this.tplMenuItemTarget);
            item.textContent = field.label;
            item.addEventListener('click', () => this.add(field.name));

            return item;
        }));
        if (!available.length) {
            const empty = document.createElement('p');
            empty.className = 'px-2 py-1.5 text-sm text-muted-foreground';
            empty.textContent = this.text('empty');
            this.menuTarget.replaceChildren(empty);
        }
    }

    closeMenu() {
        this.menuRootTarget.dataset.popoverOpenValue = 'false';
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
        this.chipsTarget.replaceChildren(...this.filters.map((filter) => this.chip(filter)));
        this.clearTarget.hidden = 0 === this.filters.length;
        this.buildMenu();
        this.syncInputs();
        if (focusField) this.chipsTarget.querySelector(`[data-field="${focusField}"] [data-editor]`)?.focus();
    }

    chip(filter) {
        const field = this.field(filter.field);
        const chip = document.createElement('div');
        chip.setAttribute('role', 'group');
        chip.setAttribute('aria-label', field.label);
        chip.dataset.field = filter.field;
        chip.className = 'inline-flex h-8 items-stretch divide-x divide-border overflow-hidden rounded-lg border border-border bg-background text-sm';

        const name = document.createElement('span');
        name.className = 'flex items-center px-2 font-medium';
        name.textContent = field.label;

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

        return chip;
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

        options.forEach(([value, text]) => {
            const option = this.clone(this.tplOptionTarget);
            const box = option.querySelector('input');
            option.setAttribute('aria-selected', String(filter.value.includes(value)));
            box.checked = filter.value.includes(value);
            box.addEventListener('change', () => {
                commit(box.checked ? [...filter.value, value] : filter.value.filter((item) => item !== value));
                option.setAttribute('aria-selected', String(box.checked));
                summary();
            });
            option.querySelector('[data-part=text]').textContent = text;
            list.append(option);
        });

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

import { Controller } from '@hotwired/stimulus';

const OPERATORS = {
    text: [['contains', 'contains'], ['eq', 'is'], ['neq', 'is not']],
    number: [['eq', '='], ['neq', '≠'], ['gt', '>'], ['lt', '<']],
    select: [['eq', 'is'], ['neq', 'is not']],
    multiselect: [['in', 'is any of'], ['nin', 'is none of']],
    boolean: [['eq', 'is']],
    date: [['eq', 'is'], ['before', 'before'], ['after', 'after']],
};

const CONTROL = 'h-full bg-transparent px-2 text-sm outline-none focus-visible:bg-muted';

/*
 * Filter bar. `fields` describes the available filters, `values` the active ones. The state is
 * mirrored into hidden inputs (`<field>` and `<field>__op`) so the surrounding GET form carries it
 * in the URL. `filters:change` fires with the full list of active filters on every change.
 */
export default class extends Controller {
    static targets = ['chips', 'addButton', 'menu', 'clear', 'inputs', 'removeIcon'];
    static values = { fields: Array, values: Array, autoSubmit: { type: Boolean, default: true } };

    connect() {
        this.filters = this.valuesValue
            .filter((filter) => this.field(filter.field))
            .map((filter) => ({ field: filter.field, operator: filter.operator ?? this.operators(filter.field)[0][0], value: filter.value ?? this.emptyValue(filter.field) }));
        this.onOutsideClick = (event) => {
            if (!this.element.contains(event.target)) this.closeMenu();
        };
        this.render();
    }

    disconnect() {
        document.removeEventListener('pointerdown', this.onOutsideClick);
    }

    field(name) {
        return this.fieldsValue.find((field) => field.name === name);
    }

    operators(name) {
        return OPERATORS[this.field(name).type] ?? OPERATORS.text;
    }

    emptyValue(name) {
        const type = this.field(name).type;

        return 'multiselect' === type ? [] : 'boolean' === type ? '1' : '';
    }

    // --- add menu ---------------------------------------------------------------------------

    toggleMenu() {
        this.menuTarget.hidden ? this.openMenu() : this.closeMenu();
    }

    openMenu() {
        const available = this.fieldsValue.filter((field) => !this.filters.some((filter) => filter.field === field.name));
        this.menuTarget.replaceChildren(...available.map((field) => {
            const item = document.createElement('button');
            item.type = 'button';
            item.setAttribute('role', 'menuitem');
            item.textContent = field.label;
            item.className = 'flex w-full items-center rounded-sm px-2 py-1.5 text-left outline-none hover:bg-muted focus-visible:bg-muted';
            item.addEventListener('click', () => this.add(field.name));

            return item;
        }));
        if (!available.length) {
            const empty = document.createElement('p');
            empty.className = 'px-2 py-1.5 text-muted-foreground';
            empty.textContent = 'No more filters';
            this.menuTarget.replaceChildren(empty);
        }
        this.menuTarget.hidden = false;
        this.addButtonTarget.setAttribute('aria-expanded', 'true');
        document.addEventListener('pointerdown', this.onOutsideClick);
        this.menuTarget.querySelector('button')?.focus();
    }

    closeMenu(restoreFocus = false) {
        if (this.menuTarget.hidden) return;
        this.menuTarget.hidden = true;
        this.addButtonTarget.setAttribute('aria-expanded', 'false');
        document.removeEventListener('pointerdown', this.onOutsideClick);
        if (restoreFocus) this.addButtonTarget.focus();
    }

    menuKey(event) {
        const items = [...this.menuTarget.querySelectorAll('[role=menuitem]')];
        const index = items.indexOf(document.activeElement);
        if ('ArrowDown' === event.key || 'ArrowUp' === event.key) {
            event.preventDefault();
            items[(index + ('ArrowDown' === event.key ? 1 : -1) + items.length) % items.length]?.focus();
        } else if ('Escape' === event.key) {
            event.preventDefault();
            this.closeMenu(true);
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
        this.chipsTarget.replaceChildren(...this.filters.map((filter) => this.chip(filter)));
        this.clearTarget.hidden = 0 === this.filters.length;
        this.syncInputs();
        if (focusField) this.chipsTarget.querySelector(`[data-field="${focusField}"] [data-editor]`)?.focus();
    }

    chip(filter) {
        const field = this.field(filter.field);
        const chip = document.createElement('div');
        chip.setAttribute('role', 'group');
        chip.setAttribute('aria-label', field.label);
        chip.dataset.field = filter.field;
        chip.className = 'inline-flex h-8 items-stretch divide-x divide-border overflow-hidden rounded-md border border-border bg-background text-sm';

        const name = document.createElement('span');
        name.className = 'flex items-center px-2 font-medium';
        name.textContent = field.label;

        const operators = this.operators(filter.field);
        const operator = document.createElement('select');
        operator.setAttribute('aria-label', `${field.label} operator`);
        operator.className = `${CONTROL} text-muted-foreground`;
        operators.forEach(([value, text]) => operator.append(new Option(text, value, false, value === filter.operator)));
        operator.disabled = 1 === operators.length;
        operator.addEventListener('change', () => {
            filter.operator = operator.value;
            this.syncInputs();
            this.changed();
        });

        const remove = document.createElement('button');
        remove.type = 'button';
        remove.setAttribute('aria-label', `Remove ${field.label} filter`);
        remove.className = 'flex w-7 items-center justify-center text-muted-foreground outline-none hover:bg-muted hover:text-foreground focus-visible:bg-muted';
        remove.append(this.removeIconTarget.content.cloneNode(true));
        remove.addEventListener('click', () => this.remove(filter.field));

        chip.append(name, operator, this.editor(filter, field), remove);

        return chip;
    }

    editor(filter, field) {
        const commit = (value) => {
            filter.value = value;
            this.syncInputs();
        };
        const options = Object.entries(field.options ?? {});
        let control;

        if ('select' === field.type || 'boolean' === field.type) {
            control = document.createElement('select');
            const list = 'boolean' === field.type ? [['1', 'Yes'], ['0', 'No']] : [['', 'Select…'], ...options];
            list.forEach(([value, text]) => control.append(new Option(text, value, false, String(value) === String(filter.value))));
            control.addEventListener('change', () => {
                commit(control.value);
                this.changed();
            });
        } else if ('multiselect' === field.type) {
            return this.multiEditor(filter, field, options, commit);
        } else {
            control = document.createElement('input');
            control.type = { number: 'number', date: 'date' }[field.type] ?? 'text';
            control.value = filter.value;
            control.className = 'w-32';
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
        control.setAttribute('aria-label', `${field.label} value`);
        control.classList.add(...CONTROL.split(' '));

        return control;
    }

    multiEditor(filter, field, options, commit) {
        const wrapper = document.createElement('div');
        wrapper.className = 'relative flex';
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.editor = '';
        button.setAttribute('aria-haspopup', 'listbox');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', `${field.label} value`);
        button.className = `${CONTROL} max-w-48 truncate text-left`;

        const list = document.createElement('div');
        list.setAttribute('role', 'listbox');
        list.setAttribute('aria-multiselectable', 'true');
        list.setAttribute('aria-label', field.label);
        list.hidden = true;
        list.className = 'absolute left-0 top-full z-50 mt-1 min-w-40 rounded-md border border-border bg-background p-1 shadow-md';

        const summary = () => {
            const labels = filter.value.map((value) => field.options[value] ?? value);
            button.textContent = 0 === labels.length ? 'Select…' : labels.length <= 2 ? labels.join(', ') : `${labels.length} selected`;
        };
        const outside = (event) => {
            if (!wrapper.contains(event.target)) setOpen(false);
        };
        const setOpen = (open) => {
            list.hidden = !open;
            button.setAttribute('aria-expanded', String(open));
            document[open ? 'addEventListener' : 'removeEventListener']('pointerdown', outside);
            if (!open) this.changed();
        };

        options.forEach(([value, text]) => {
            const option = document.createElement('label');
            option.setAttribute('role', 'option');
            option.setAttribute('aria-selected', String(filter.value.includes(value)));
            option.className = 'flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-muted';
            const box = document.createElement('input');
            box.type = 'checkbox';
            box.checked = filter.value.includes(value);
            box.addEventListener('change', () => {
                commit(box.checked ? [...filter.value, value] : filter.value.filter((item) => item !== value));
                option.setAttribute('aria-selected', String(box.checked));
                summary();
            });
            const span = document.createElement('span');
            span.textContent = text;
            option.append(box, span);
            list.append(option);
        });

        button.addEventListener('click', () => setOpen(list.hidden));
        wrapper.addEventListener('keydown', (event) => {
            if ('Escape' === event.key && !list.hidden) {
                event.preventDefault();
                setOpen(false);
                button.focus();
            }
        });
        summary();
        wrapper.append(button, list);

        return wrapper;
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

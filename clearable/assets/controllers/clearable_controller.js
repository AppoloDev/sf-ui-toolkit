import { Controller } from '@hotwired/stimulus';

/*
 * Shows the clear button while the field holds a value and empties the field on click.
 * Works with an input, a textarea or a shadcn `Select` (its value is reset to empty, a `select:change` is dispatched).
 * Events: `clearable:clear` (bubbles, after the field was emptied).
 */
export default class extends Controller {
    static targets = ['button'];

    connect() {
        this.toggle();
    }

    get select() {
        return this.element.querySelector('[data-controller~="select"]');
    }

    get field() {
        return this.element.querySelector('input:not([type=hidden]), textarea');
    }

    get filled() {
        const select = this.select;
        if (select) {
            return (select.getAttribute('data-select-value-value') ?? '') !== '' && select.dataset.disabled !== 'true';
        }

        const field = this.field;

        return !!field && field.value !== '' && !field.disabled && !field.readOnly;
    }

    toggle() {
        const show = this.filled;

        this.buttonTargets.forEach((button) => {
            button.hidden = !show;
        });
    }

    clear() {
        const select = this.select;
        if (select) {
            select.setAttribute('data-select-value-value', '');
            select.dispatchEvent(new CustomEvent('select:change', { bubbles: true, detail: { value: '', label: '' } }));
            select.querySelector('[data-slot=select-trigger]')?.focus();
            this.toggle();
            this.dispatch('clear', { detail: { field: select } });

            return;
        }

        const field = this.field;
        if (!field) {
            return;
        }

        field.value = '';
        field.dispatchEvent(new Event('input', { bubbles: true }));
        field.dispatchEvent(new Event('change', { bubbles: true }));
        field.focus();
        this.toggle();
        this.dispatch('clear', { detail: { field } });
    }
}

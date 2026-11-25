import { Controller } from '@hotwired/stimulus';

/*
 * Shows the clear button while the field holds a value and empties the field on click.
 * Events: `clearable:clear` (bubbles, after the field was emptied).
 */
export default class extends Controller {
    static targets = ['button'];

    connect() {
        this.toggle();
    }

    get field() {
        return this.element.querySelector('input:not([type=hidden]), textarea');
    }

    toggle() {
        const field = this.field;
        const show = !!field && field.value !== '' && !field.disabled && !field.readOnly;

        this.buttonTargets.forEach((button) => {
            button.hidden = !show;
        });
    }

    clear() {
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

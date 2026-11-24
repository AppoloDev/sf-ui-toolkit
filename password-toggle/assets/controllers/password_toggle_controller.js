import { Controller } from '@hotwired/stimulus';

/**
 * Switches a field between type="password" and type="text".
 *
 * The button carries the texts in data-show-label and data-hide-label, and an optional data-target (a selector).
 * Without a target, the field is the input of the closest input group, or else of the parent element.
 *
 * @action toggle  Reveals or hides the password, updates aria-pressed and the accessible name, keeps the focus
 *                 in the field.
 */
export default class extends Controller {
    toggle() {
        const field = this.#field();
        if (!field) {
            return;
        }

        const reveal = field.type === 'password';
        field.type = reveal ? 'text' : 'password';
        this.element.setAttribute('aria-pressed', String(reveal));
        this.element.setAttribute('aria-label', reveal ? this.element.dataset.hideLabel : this.element.dataset.showLabel);
        field.focus();
    }

    #field() {
        const selector = this.element.dataset.target;
        if (selector) {
            return document.querySelector(selector);
        }
        const scope = this.element.closest('[data-slot="input-group"]') ?? this.element.parentElement;

        return scope?.querySelector('input[type="password"], input[type="text"]') ?? null;
    }
}

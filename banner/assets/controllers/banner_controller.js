import { Controller } from '@hotwired/stimulus';

/**
 * A dismissible banner.
 *
 * @value key  When set, the dismissal is remembered in localStorage under `banner:<key>`.
 * @event banner:dismiss  The banner was dismissed.
 */
export default class extends Controller {
    static values = { key: String };

    connect() {
        if (this.hasKeyValue && this.keyValue && this.read() === '1') {
            this.element.hidden = true;
        }
    }

    read() {
        try {
            return localStorage.getItem(`banner:${this.keyValue}`);
        } catch (error) {
            return null;
        }
    }

    dismiss() {
        this.element.hidden = true;
        if (this.hasKeyValue && this.keyValue) {
            try {
                localStorage.setItem(`banner:${this.keyValue}`, '1');
            } catch (error) {
                // Storage is not available: the banner only stays hidden for this page.
            }
        }
        this.dispatch('dismiss');
    }
}

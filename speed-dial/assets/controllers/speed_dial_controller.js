import { Controller } from '@hotwired/stimulus';

/**
 * A floating button that opens a few actions. Escape and an outside click close it; arrows move between actions.
 *
 * @target trigger, menu
 * @event  speed-dial:open, speed-dial:close, speed-dial:pick (`detail.label`)
 */
export default class extends Controller {
    static targets = ['trigger', 'menu'];

    toggle() {
        this.menuTarget.hidden ? this.open() : this.close();
    }

    open() {
        this.menuTarget.hidden = false;
        this.triggerTarget.setAttribute('aria-expanded', 'true');
        this.menuTarget.querySelector('[role="menuitem"]')?.focus();
        this.dispatch('open');
        this.keys = (event) => {
            const items = [...this.menuTarget.querySelectorAll('[role="menuitem"]')];
            const at = items.indexOf(document.activeElement);
            if (['ArrowDown', 'ArrowRight'].includes(event.key)) items[(at + 1) % items.length]?.focus();
            else if (['ArrowUp', 'ArrowLeft'].includes(event.key)) items[(at - 1 + items.length) % items.length]?.focus();
            else return;
            event.preventDefault();
        };
        this.menuTarget.addEventListener('keydown', this.keys);
    }

    close() {
        if (this.menuTarget.hidden) return;
        this.menuTarget.hidden = true;
        this.triggerTarget.setAttribute('aria-expanded', 'false');
        this.menuTarget.removeEventListener('keydown', this.keys);
        this.dispatch('close');
    }

    outside(event) {
        if (!this.element.contains(event.target)) this.close();
    }

    pick(event) {
        this.dispatch('pick', { detail: { label: event.currentTarget.getAttribute('aria-label') } });
        this.close();
        this.triggerTarget.focus();
    }
}

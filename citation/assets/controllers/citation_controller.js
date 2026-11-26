import { Controller } from '@hotwired/stimulus';

/**
 * Opens the popover of an inline citation under its chip.
 *
 * @target trigger, panel
 */
export default class extends Controller {
    static targets = ['trigger', 'panel'];

    connect() {
        this.panelTarget.addEventListener('toggle', this.onToggle);
        window.addEventListener('scroll', this.place, true);
        window.addEventListener('resize', this.place);
    }

    disconnect() {
        this.panelTarget.removeEventListener('toggle', this.onToggle);
        window.removeEventListener('scroll', this.place, true);
        window.removeEventListener('resize', this.place);
    }

    toggle() {
        this.panelTarget.matches(':popover-open') ? this.panelTarget.hidePopover() : this.panelTarget.showPopover();
    }

    onToggle = (event) => {
        this.triggerTarget.setAttribute('aria-expanded', String(event.newState === 'open'));
        if (event.newState === 'open') this.place();
    };

    place = () => {
        const panel = this.panelTarget;
        if (!panel.matches(':popover-open')) return;
        const anchor = this.triggerTarget.getBoundingClientRect();
        const box = panel.getBoundingClientRect();
        panel.style.inset = 'auto';
        panel.style.left = `${Math.max(8, Math.min(anchor.left + anchor.width / 2 - box.width / 2, window.innerWidth - box.width - 8))}px`;
        const below = anchor.bottom + 6 + box.height <= window.innerHeight;
        panel.style.top = `${below ? anchor.bottom + 6 : anchor.top - 6 - box.height}px`;
    };
}

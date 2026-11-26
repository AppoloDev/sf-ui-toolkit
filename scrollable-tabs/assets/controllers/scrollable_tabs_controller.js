import { Controller } from '@hotwired/stimulus';

/**
 * Scroll arrows for a tab list wider than its container.
 *
 * @target viewport  The scrolling element around the tabs.
 * @target previous, next  The arrows (shown only when there is something to scroll).
 * @value  step  The scroll distance of an arrow, in pixels.
 */
export default class extends Controller {
    static targets = ['viewport', 'previous', 'next'];
    static values = { step: { type: Number, default: 200 } };

    connect() {
        this.update = () => {
            const view = this.viewportTarget;
            const max = view.scrollWidth - view.clientWidth;
            this.previousTarget.hidden = view.scrollLeft <= 1;
            this.nextTarget.hidden = view.scrollLeft >= max - 1;
            if (max <= 1) {
                this.previousTarget.hidden = true;
                this.nextTarget.hidden = true;
            }
        };
        this.viewportTarget.addEventListener('scroll', this.update, { passive: true });
        this.resizer = new ResizeObserver(this.update);
        this.resizer.observe(this.viewportTarget);
        this.element.addEventListener('click', this.reveal);
        this.element.addEventListener('focusin', this.reveal);
        requestAnimationFrame(() => {
            this.update();
            this.reveal();
        });
    }

    disconnect() {
        this.viewportTarget.removeEventListener('scroll', this.update);
        this.resizer?.disconnect();
        this.element.removeEventListener('click', this.reveal);
        this.element.removeEventListener('focusin', this.reveal);
    }

    reveal = () => {
        const current = this.viewportTarget.querySelector('[role="tab"][aria-selected="true"], [role="tab"][data-state="active"], [role="tab"][data-active="true"]');
        current?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
    };

    previous() {
        this.viewportTarget.scrollBy({ left: -this.stepValue, behavior: 'smooth' });
    }

    next() {
        this.viewportTarget.scrollBy({ left: this.stepValue, behavior: 'smooth' });
    }
}

import { Controller } from '@hotwired/stimulus';

/**
 * Shows the button once the page (or the `target` box) is scrolled past `threshold`, and scrolls back to the top.
 *
 * @value threshold  Pixels.
 * @value target     A CSS selector of a scrolling box (the page when empty).
 * @value smooth     Scroll smoothly.
 */
export default class extends Controller {
    static values = { threshold: { type: Number, default: 300 }, target: String, smooth: { type: Boolean, default: true } };

    connect() {
        this.scroller = this.hasTargetValue && this.targetValue ? document.querySelector(this.targetValue) : null;
        this.source = this.scroller ?? window;
        this.update = () => {
            const top = this.scroller ? this.scroller.scrollTop : window.scrollY;
            this.element.hidden = top < this.thresholdValue;
        };
        this.source.addEventListener('scroll', this.update, { passive: true });
        this.update();
    }

    disconnect() {
        this.source?.removeEventListener('scroll', this.update);
    }

    top() {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const behavior = this.smoothValue && !reduce ? 'smooth' : 'auto';
        (this.scroller ?? window).scrollTo({ top: 0, behavior });
        this.dispatch('top');
    }
}

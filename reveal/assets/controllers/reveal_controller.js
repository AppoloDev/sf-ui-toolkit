import { Controller } from '@hotwired/stimulus';

/**
 * Hides the element until it scrolls into view, then lets it appear. Without JavaScript, or for people who prefer
 * reduced motion, the content is simply visible: the hidden state is only set here.
 *
 * @value effect, once, threshold
 * @event reveal:show, reveal:hide
 */
export default class extends Controller {
    static values = { effect: { type: String, default: 'up' }, once: { type: Boolean, default: true }, threshold: { type: Number, default: 0.2 } };

    connect() {
        this.element.dataset.effect = this.effectValue;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
            this.element.dataset.reveal = 'shown';
            return;
        }
        this.element.dataset.reveal = 'pending';
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.element.dataset.reveal = 'shown';
                    this.dispatch('show');
                    if (this.onceValue) this.observer.disconnect();
                } else if (!this.onceValue) {
                    this.element.dataset.reveal = 'pending';
                    this.dispatch('hide');
                }
            });
        }, { threshold: this.thresholdValue });
        this.observer.observe(this.element);
    }

    disconnect() {
        this.observer?.disconnect();
    }
}

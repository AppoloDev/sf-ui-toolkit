import { Controller } from '@hotwired/stimulus';

/**
 * Counts a number from `from` to `value`. The server-rendered text already holds the final number, so it is
 * correct without JavaScript and for people who prefer reduced motion.
 *
 * @event count-up:end  The count reached its value.
 * @action restart  Counts again.
 */
export default class extends Controller {
    static values = { value: Number, from: Number, duration: { type: Number, default: 1500 }, decimals: Number, prefix: String, suffix: String, locale: { type: String, default: 'en' }, startOnView: { type: Boolean, default: true }, grouping: { type: Boolean, default: true } };

    valueValueChanged() {
        if (this.ready) this.restart();
    }

    connect() {
        this.ready = true;
        this.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (this.reduce) return;
        this.draw(this.fromValue);
        if (this.startOnViewValue && 'IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    this.observer.disconnect();
                    this.restart();
                }
            });
            this.observer.observe(this.element);
        } else {
            this.restart();
        }
    }

    disconnect() {
        this.observer?.disconnect();
        cancelAnimationFrame(this.frame);
    }

    draw(number) {
        const text = new Intl.NumberFormat(this.localeValue, { minimumFractionDigits: this.decimalsValue, maximumFractionDigits: this.decimalsValue, useGrouping: this.groupingValue }).format(number);
        this.element.textContent = `${this.prefixValue}${text}${this.suffixValue}`;
    }

    restart() {
        cancelAnimationFrame(this.frame);
        if (this.reduce) {
            this.draw(this.valueValue);
            return;
        }
        const start = performance.now();
        const step = (now) => {
            const t = Math.min(1, (now - start) / Math.max(1, this.durationValue));
            const eased = 1 - Math.pow(1 - t, 3);
            this.draw(this.fromValue + (this.valueValue - this.fromValue) * eased);
            if (t < 1) this.frame = requestAnimationFrame(step);
            else this.dispatch('end');
        };
        this.frame = requestAnimationFrame(step);
    }
}

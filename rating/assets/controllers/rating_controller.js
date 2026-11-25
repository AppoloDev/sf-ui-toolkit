import { Controller } from '@hotwired/stimulus';

/*
 * Hover preview and fill update for the stars.
 * The selection itself stays carried by the native radio buttons (keyboard, forms, screen readers).
 */
export default class extends Controller {
    static targets = ['fill', 'output'];
    static values = { value: Number, labels: Array };

    connect() {
        this.paint(this.valueValue);
    }

    preview(event) {
        this.paint(Number(event.currentTarget.value));
    }

    reset() {
        this.paint(this.valueValue);
    }

    sync(event) {
        this.valueValue = Number(event.currentTarget.value);
        this.paint(this.valueValue);
    }

    paint(value) {
        this.fillTargets.forEach((element, index) => {
            const percent = Math.max(0, Math.min(100, (value - index) * 100));
            element.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        });
        if (this.hasOutputTarget) this.outputTarget.textContent = this.labelsValue.length ? (this.labelsValue[Math.ceil(value) - 1] ?? '') : value.toFixed(1);
    }
}

import { Controller } from '@hotwired/stimulus';

/*
 * Numeric spinner: arrow / PageUp / PageDown / Home / End keys, press-and-hold repeat on the
 * buttons, clamping to min / max, and a cleared field reported as an empty value.
 */
export default class extends Controller {
    static targets = ['input', 'decrement', 'increment'];
    static values = { min: Number, max: Number, step: { type: Number, default: 1 } };

    connect() {
        this.stopHold = this.stopHold.bind(this);
        this.refresh();
    }

    disconnect() {
        this.stopHold();
    }

    holdDecrement(event) {
        this.startHold(event, -1);
    }

    holdIncrement(event) {
        this.startHold(event, 1);
    }

    keydown(event) {
        const big = event.shiftKey ? 10 : 1;
        const handlers = {
            ArrowUp: () => this.stepBy(this.stepValue * big),
            ArrowDown: () => this.stepBy(-this.stepValue * big),
            PageUp: () => this.stepBy(this.stepValue * 10),
            PageDown: () => this.stepBy(-this.stepValue * 10),
            Home: () => this.hasMinValue && this.write(this.minValue),
            End: () => this.hasMaxValue && this.write(this.maxValue),
        };
        if (handlers[event.key]) {
            event.preventDefault();
            handlers[event.key]();
        }
    }

    // Keeps only characters that can form a number while typing.
    sanitize() {
        const input = this.inputTarget;
        const cleaned = input.value.replace(/[^\d.,-]/g, '').replace(',', '.').replace(/(?!^)-/g, '').replace(/(\..*)\./g, '$1');
        if (cleaned !== input.value) {
            input.value = cleaned;
        }
    }

    // On blur: parse, clamp and round to the step precision (or leave empty).
    commit() {
        const parsed = this.current();
        if (null === parsed) {
            this.inputTarget.value = '';
            this.refresh();

            return;
        }
        this.write(parsed, false);
    }

    startHold(event, direction) {
        event.preventDefault();
        this.inputTarget.focus();
        this.stepBy(direction * this.stepValue);
        this.holdTimeout = setTimeout(() => {
            this.holdInterval = setInterval(() => this.stepBy(direction * this.stepValue), 60);
        }, 400);
        window.addEventListener('pointerup', this.stopHold, { once: true });
        window.addEventListener('pointercancel', this.stopHold, { once: true });
    }

    stopHold() {
        clearTimeout(this.holdTimeout);
        clearInterval(this.holdInterval);
    }

    current() {
        const parsed = parseFloat(this.inputTarget.value);

        return Number.isNaN(parsed) ? null : parsed;
    }

    stepBy(delta) {
        const base = this.current() ?? (this.hasMinValue ? this.minValue : 0);
        this.write(this.current() === null ? base : base + delta);
    }

    write(value, notify = true) {
        let next = value;
        if (this.hasMinValue) next = Math.max(this.minValue, next);
        if (this.hasMaxValue) next = Math.min(this.maxValue, next);
        const decimals = (String(this.stepValue).split('.')[1] || '').length;
        const text = next.toFixed(decimals);
        const changed = this.inputTarget.value !== text;
        this.inputTarget.value = text;
        this.refresh();
        if (changed && notify) {
            this.inputTarget.dispatchEvent(new Event('change', { bubbles: true }));
            this.dispatch('change', { detail: { value: next } });
        }
    }

    refresh() {
        const value = this.current();
        const input = this.inputTarget;
        input.setAttribute('aria-valuenow', value ?? '');
        if (this.hasMinValue) input.setAttribute('aria-valuemin', this.minValue);
        if (this.hasMaxValue) input.setAttribute('aria-valuemax', this.maxValue);
        this.decrementTarget.disabled = input.disabled || (null !== value && this.hasMinValue && value <= this.minValue);
        this.incrementTarget.disabled = input.disabled || (null !== value && this.hasMaxValue && value >= this.maxValue);
    }
}

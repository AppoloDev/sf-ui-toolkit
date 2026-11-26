import { Controller } from '@hotwired/stimulus';

/**
 * A rotary input over a 270° arc (from bottom left to bottom right).
 *
 * @target ring, text, field
 * @value  min, max, step, value, template, circumference
 * @event  knob:change  `detail.value`.
 */
export default class extends Controller {
    static targets = ['ring', 'text', 'field'];
    static values = { min: Number, max: { type: Number, default: 100 }, step: { type: Number, default: 1 }, value: Number, template: { type: String, default: '{value}' }, circumference: Number };

    get locked() {
        return this.element.getAttribute('aria-disabled') === 'true' || this.element.getAttribute('aria-readonly') === 'true';
    }

    valueValueChanged() {
        const range = this.maxValue - this.minValue || 1;
        const ratio = Math.min(1, Math.max(0, (this.valueValue - this.minValue) / range));
        if (this.hasRingTarget) this.ringTarget.setAttribute('stroke-dashoffset', String(this.circumferenceValue * 0.75 * (1 - ratio)));
        if (this.hasTextTarget) this.textTarget.textContent = this.templateValue.replace('{value}', String(this.valueValue));
        if (this.hasFieldTarget) this.fieldTarget.value = String(this.valueValue);
        this.element.setAttribute('aria-valuenow', String(this.valueValue));
    }

    set(next, notify = true) {
        const stepped = Math.round((next - this.minValue) / this.stepValue) * this.stepValue + this.minValue;
        const clamped = Math.min(this.maxValue, Math.max(this.minValue, Number(stepped.toFixed(6))));
        if (clamped === this.valueValue) return;
        this.valueValue = clamped;
        if (notify) this.dispatch('change', { detail: { value: clamped } });
    }

    keydown(event) {
        if (this.locked) return;
        const big = this.stepValue * 10;
        const keys = { ArrowUp: this.stepValue, ArrowRight: this.stepValue, ArrowDown: -this.stepValue, ArrowLeft: -this.stepValue, PageUp: big, PageDown: -big };
        if (event.key in keys) this.set(this.valueValue + keys[event.key]);
        else if (event.key === 'Home') this.set(this.minValue);
        else if (event.key === 'End') this.set(this.maxValue);
        else return;
        event.preventDefault();
    }

    wheel(event) {
        if (this.locked || document.activeElement !== this.element) return;
        event.preventDefault();
        this.set(this.valueValue + (event.deltaY < 0 ? this.stepValue : -this.stepValue));
    }

    down(event) {
        if (this.locked) return;
        this.element.focus();
        const move = (pointer) => {
            const box = this.element.getBoundingClientRect();
            let angle = (Math.atan2(pointer.clientY - (box.top + box.height / 2), pointer.clientX - (box.left + box.width / 2)) * 180) / Math.PI + 90;
            if (angle < 0) angle += 360;
            // The arc runs from 225° (bottom left) clockwise to 135° (bottom right); the gap is 135°..225°.
            const position = angle >= 225 ? angle - 225 : angle <= 135 ? angle + 135 : this.last ?? 0;
            this.last = position;
            this.set(this.minValue + (position / 270) * (this.maxValue - this.minValue));
        };
        move(event);
        const stop = () => {
            window.removeEventListener('pointermove', move);
            window.removeEventListener('pointerup', stop);
        };
        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', stop);
    }
}

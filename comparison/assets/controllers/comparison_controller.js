import { Controller } from '@hotwired/stimulus';

/**
 * A draggable divider between two panels.
 *
 * @target handle
 * @value  position (0 to 100), orientation, step
 * @event  comparison:change  `detail.position`.
 */
export default class extends Controller {
    static targets = ['handle'];
    static values = { position: { type: Number, default: 50 }, orientation: { type: String, default: 'horizontal' }, step: { type: Number, default: 5 } };

    positionValueChanged() {
        this.element.style.setProperty('--pos', `${this.positionValue}%`);
        if (this.hasHandleTarget) this.handleTarget.setAttribute('aria-valuenow', String(Math.round(this.positionValue)));
    }

    set(value) {
        this.positionValue = Math.min(100, Math.max(0, value));
        this.dispatch('change', { detail: { position: this.positionValue } });
    }

    keydown(event) {
        const horizontal = this.orientationValue === 'horizontal';
        const back = horizontal ? 'ArrowLeft' : 'ArrowUp';
        const forward = horizontal ? 'ArrowRight' : 'ArrowDown';
        if (event.key === back) this.set(this.positionValue - this.stepValue);
        else if (event.key === forward) this.set(this.positionValue + this.stepValue);
        else if (event.key === 'Home') this.set(0);
        else if (event.key === 'End') this.set(100);
        else return;
        event.preventDefault();
    }

    down(event) {
        event.preventDefault();
        this.handleTarget.focus();
        const move = (pointer) => {
            const box = this.element.getBoundingClientRect();
            const horizontal = this.orientationValue === 'horizontal';
            const ratio = horizontal ? (pointer.clientX - box.left) / box.width : (pointer.clientY - box.top) / box.height;
            this.set(ratio * 100);
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

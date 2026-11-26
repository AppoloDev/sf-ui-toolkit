import { Controller } from '@hotwired/stimulus';

/**
 * Tilts the content toward the pointer. Does nothing for people who prefer reduced motion, or on touch pointers.
 *
 * @target inner, glare
 * @value  max (degrees), scale, reverse
 */
export default class extends Controller {
    static targets = ['inner', 'glare'];
    static values = { max: { type: Number, default: 12 }, scale: { type: Number, default: 1.02 }, reverse: Boolean };

    get still() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    move(event) {
        if (this.still || event.pointerType === 'touch') return;
        const box = this.element.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width;
        const y = (event.clientY - box.top) / box.height;
        const sign = this.reverseValue ? -1 : 1;
        const rx = (0.5 - y) * 2 * this.maxValue * sign;
        const ry = (x - 0.5) * 2 * this.maxValue * sign;
        this.innerTarget.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${this.scaleValue})`;
        if (this.hasGlareTarget) {
            this.glareTarget.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`);
            this.glareTarget.style.setProperty('--gy', `${(y * 100).toFixed(1)}%`);
            this.glareTarget.style.opacity = '1';
        }
    }

    leave() {
        this.innerTarget.style.transform = '';
        if (this.hasGlareTarget) this.glareTarget.style.opacity = '0';
    }
}

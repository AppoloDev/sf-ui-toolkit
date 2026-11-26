import { Controller } from '@hotwired/stimulus';

/**
 * A wave that grows from the pointer when something inside is pressed.
 *
 * @value duration (ms), color (a Tailwind background class)
 */
export default class extends Controller {
    static values = { duration: { type: Number, default: 600 }, color: { type: String, default: 'bg-current/25' } };

    wave(event) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const box = this.element.getBoundingClientRect();
        const size = Math.max(box.width, box.height) * 2;
        const wave = document.createElement('span');
        wave.setAttribute('aria-hidden', 'true');
        wave.className = `pointer-events-none absolute rounded-full ${this.colorValue}`;
        Object.assign(wave.style, {
            width: `${size}px`,
            height: `${size}px`,
            left: `${event.clientX - box.left - size / 2}px`,
            top: `${event.clientY - box.top - size / 2}px`,
            transform: 'scale(0)',
            opacity: '1',
            transition: `transform ${this.durationValue}ms ease-out, opacity ${this.durationValue}ms ease-out`,
        });
        this.element.append(wave);
        requestAnimationFrame(() => {
            wave.style.transform = 'scale(1)';
            wave.style.opacity = '0';
        });
        setTimeout(() => wave.remove(), this.durationValue + 50);
    }
}

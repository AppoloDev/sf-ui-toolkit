import { Controller } from '@hotwired/stimulus';

/**
 * A draggable window. Drag the header, or focus it and use the arrow keys (Shift for bigger steps).
 * Open it with `floating-panel#open` from a button inside the panel's page: give the button
 * `data-action="click->floating-panel#open"` and `data-floating-panel-id-param`, or call the events below.
 *
 * @target handle, body, minimize
 * @value  open, x, y, restoreLabel, minimizeLabel
 * @action open, close, minimize, toggle
 * @event  floating-panel:open, floating-panel:close
 */
export default class extends Controller {
    static targets = ['handle', 'body', 'minimize'];
    static values = { open: Boolean, x: { type: Number, default: -1 }, y: { type: Number, default: -1 }, restoreLabel: String, minimizeLabel: String };

    connect() {
        this.element.addEventListener('floating-panel:request-open', this.open);
        this.element.addEventListener('floating-panel:request-close', this.close);
        window.addEventListener('resize', this.keepOnScreen);
    }

    disconnect() {
        this.element.removeEventListener('floating-panel:request-open', this.open);
        this.element.removeEventListener('floating-panel:request-close', this.close);
        window.removeEventListener('resize', this.keepOnScreen);
    }

    openValueChanged() {
        this.element.hidden = !this.openValue;
        if (this.openValue) {
            if (this.xValue < 0 || this.yValue < 0) {
                const box = this.element.getBoundingClientRect();
                this.place((window.innerWidth - box.width) / 2, Math.max(16, (window.innerHeight - box.height) / 3));
            } else {
                this.place(this.xValue, this.yValue);
            }
            this.dispatch('open');
        }
    }

    open = () => {
        this.openValue = true;
    };

    close = () => {
        if (!this.openValue) return;
        this.openValue = false;
        this.dispatch('close');
    };

    toggle() {
        this.openValue ? this.close() : this.open();
    }

    minimize() {
        const minimized = this.bodyTarget.hidden = !this.bodyTarget.hidden;
        this.minimizeTarget.setAttribute('aria-label', minimized ? this.restoreLabelValue : this.minimizeLabelValue);
        this.minimizeTarget.setAttribute('aria-expanded', String(!minimized));
    }

    stop(event) {
        event.stopPropagation();
    }

    place(x, y) {
        const box = this.element.getBoundingClientRect();
        this.element.style.left = `${Math.min(Math.max(0, x), Math.max(0, window.innerWidth - box.width))}px`;
        this.element.style.top = `${Math.min(Math.max(0, y), Math.max(0, window.innerHeight - 40))}px`;
    }

    keepOnScreen = () => {
        if (this.openValue) this.place(parseFloat(this.element.style.left) || 0, parseFloat(this.element.style.top) || 0);
    };

    down(event) {
        if (event.target.closest('button')) return;
        const from = { x: event.clientX - this.element.offsetLeft, y: event.clientY - this.element.offsetTop };
        const move = (pointer) => this.place(pointer.clientX - from.x, pointer.clientY - from.y);
        const stop = () => {
            window.removeEventListener('pointermove', move);
            window.removeEventListener('pointerup', stop);
        };
        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', stop);
        this.element.parentElement?.append(this.element);
    }

    keydown(event) {
        const step = event.shiftKey ? 40 : 10;
        const moves = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
        if (event.key === 'Escape') {
            this.close();
            return;
        }
        if (!(event.key in moves)) return;
        event.preventDefault();
        const [dx, dy] = moves[event.key];
        this.place(this.element.offsetLeft + dx, this.element.offsetTop + dy);
    }
}

import { Controller } from '@hotwired/stimulus';

/*
 * Signature pad on a canvas with Pointer Events. Strokes are kept as points normalized to the pad
 * (0..1), so the drawing survives resizes and exports at any size. The stroke width follows pen
 * pressure, or the drawing speed for a mouse or a finger, between minWidth and maxWidth.
 * `signature-pad:change` fires once per finished stroke, undo, redo and clear, with { empty }.
 * Ctrl/Cmd+Z undoes, Ctrl/Cmd+Shift+Z and Ctrl/Cmd+Y redo.
 */
export default class extends Controller {
    static targets = ['frame', 'canvas', 'placeholder', 'undo', 'redo', 'clear', 'field'];
    static values = {
        format: { type: String, default: 'png' },
        value: String,
        background: String,
        color: { type: String, default: '#000000' },
        minWidth: { type: Number, default: 0.8 },
        maxWidth: { type: Number, default: 2.6 },
        pointerTypes: { type: String, default: 'all' },
        inactive: Boolean,
    };

    connect() {
        this.strokes = [];
        this.redone = [];
        this.current = null;
        this.loadValue();
        this.observer = new ResizeObserver(() => this.resize());
        this.observer.observe(this.frameTarget);
        this.onReset = () => requestAnimationFrame(() => this.clear());
        this.element.closest('form')?.addEventListener('reset', this.onReset);
        this.resize();
        this.sync(false);
    }

    disconnect() {
        this.observer.disconnect();
        this.element.closest('form')?.removeEventListener('reset', this.onReset);
    }

    // --- drawing ----------------------------------------------------------------------------

    allowed(event) {
        return !this.inactiveValue && ('all' === this.pointerTypesValue || event.pointerType === this.pointerTypesValue);
    }

    point(event) {
        const rect = this.canvasTarget.getBoundingClientRect();

        return { x: (event.clientX - rect.left) / rect.width, y: (event.clientY - rect.top) / rect.height, t: event.timeStamp, p: 'pen' === event.pointerType ? event.pressure : 0 };
    }

    down(event) {
        if (!this.allowed(event) || (0 !== event.button && 'mouse' === event.pointerType)) return;
        event.preventDefault();
        this.canvasTarget.setPointerCapture(event.pointerId);
        this.canvasTarget.focus();
        this.current = [this.point(event)];
        this.strokes.push(this.current);
        this.redone = [];
        this.placeholderTarget?.classList.add('opacity-0');
        this.draw();
    }

    move(event) {
        if (!this.current) return;
        const events = event.getCoalescedEvents?.() ?? [event];
        events.forEach((item) => this.current.push(this.point(item)));
        this.draw();
    }

    up() {
        if (!this.current) return;
        this.current = null;
        this.sync(true);
    }

    keydown(event) {
        if (!(event.ctrlKey || event.metaKey)) return;
        const key = event.key.toLowerCase();
        if ('z' === key && !event.shiftKey) {
            event.preventDefault();
            this.undo();
        } else if (('z' === key && event.shiftKey) || 'y' === key) {
            event.preventDefault();
            this.redo();
        }
    }

    undo() {
        if (!this.strokes.length) return;
        this.redone.push(this.strokes.pop());
        this.draw();
        this.sync(true);
    }

    redo() {
        if (!this.redone.length) return;
        this.strokes.push(this.redone.pop());
        this.draw();
        this.sync(true);
    }

    clear() {
        if (!this.strokes.length && !this.redone.length) return;
        this.strokes = [];
        this.redone = [];
        this.draw();
        this.sync(true);
        // The button disables itself: keep keyboard focus inside the widget.
        if (!this.hasClearTarget || this.clearTarget.disabled) this.canvasTarget.focus();
    }

    // --- rendering --------------------------------------------------------------------------

    resize() {
        const rect = this.frameTarget.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;
        this.canvasTarget.width = Math.max(1, Math.round(rect.width * ratio));
        this.canvasTarget.height = Math.max(1, Math.round(rect.height * ratio));
        this.draw();
    }

    // Width of each segment: pen pressure when available, otherwise the inverse of the speed.
    widths(stroke, scale) {
        const min = this.minWidthValue * scale;
        const max = this.maxWidthValue * scale;
        let previous = (max + min) / 2;

        return stroke.slice(1).map((point, index) => {
            const last = stroke[index];
            const target = point.p > 0
                ? min + (max - min) * point.p
                : max - (max - min) * Math.min(1, Math.hypot(point.x - last.x, point.y - last.y) * 40 / Math.max(1, (point.t - last.t) / 16));
            previous = previous * 0.6 + target * 0.4;

            return previous;
        });
    }

    draw() {
        const canvas = this.canvasTarget;
        const context = canvas.getContext('2d');
        const scale = canvas.width / Math.max(1, canvas.getBoundingClientRect().width);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.lineCap = 'round';
        context.lineJoin = 'round';
        // The ink follows the text color of the pad.
        context.strokeStyle = getComputedStyle(canvas).color;
        this.strokes.forEach((stroke) => {
            if (1 === stroke.length) {
                context.beginPath();
                context.arc(stroke[0].x * canvas.width, stroke[0].y * canvas.height, this.maxWidthValue * scale / 2, 0, Math.PI * 2);
                context.fillStyle = context.strokeStyle;
                context.fill();

                return;
            }
            const widths = this.widths(stroke, scale);
            stroke.slice(1).forEach((point, index) => {
                const last = stroke[index];
                context.lineWidth = widths[index];
                context.beginPath();
                context.moveTo(last.x * canvas.width, last.y * canvas.height);
                context.lineTo(point.x * canvas.width, point.y * canvas.height);
                context.stroke();
            });
        });
    }

    // --- value / export ---------------------------------------------------------------------

    sync(notify) {
        const empty = 0 === this.strokes.length;
        this.placeholderTarget?.classList.toggle('opacity-0', !empty);
        if (this.hasUndoTarget) this.undoTarget.disabled = empty;
        if (this.hasRedoTarget) this.redoTarget.disabled = 0 === this.redone.length;
        if (this.hasClearTarget) this.clearTarget.disabled = empty && 0 === this.redone.length;
        this.fieldTarget.value = empty ? '' : this.export(this.formatValue);
        if (notify) {
            this.fieldTarget.dispatchEvent(new Event('change', { bubbles: true }));
            this.dispatch('change', { detail: { empty, value: this.fieldTarget.value } });
        }
    }

    // Public: the signature in any format ('png', 'jpeg', 'svg', 'json'), '' when empty.
    export(format = this.formatValue) {
        if (!this.strokes.length) return '';
        if ('json' === format) return JSON.stringify({ version: 1, strokes: this.strokes.map((stroke) => stroke.map(({ x, y, t, p }) => [x, y, Math.round(t), p])) });
        const rect = this.canvasTarget.getBoundingClientRect();
        const width = Math.round(rect.width);
        const height = Math.round(rect.height);
        const ink = this.colorValue;
        const background = this.backgroundValue;
        if ('svg' === format) {
            const paths = this.strokes.map((stroke) => {
                if (1 === stroke.length) {
                    return `<circle cx="${(stroke[0].x * width).toFixed(1)}" cy="${(stroke[0].y * height).toFixed(1)}" r="${this.maxWidthValue / 2}" fill="${ink}"/>`;
                }
                const widths = this.widths(stroke, 1);

                return stroke.slice(1).map((point, index) => {
                    const last = stroke[index];

                    return `<path d="M${(last.x * width).toFixed(1)} ${(last.y * height).toFixed(1)}L${(point.x * width).toFixed(1)} ${(point.y * height).toFixed(1)}" stroke-width="${widths[index].toFixed(2)}"/>`;
                }).join('');
            }).join('');

            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">${background ? `<rect width="100%" height="100%" fill="${background}"/>` : ''}<g fill="none" stroke="${ink}" stroke-linecap="round" stroke-linejoin="round">${paths}</g></svg>`;
        }
        // Raster export: redraw on an offscreen canvas with the export colors.
        const scale = 2;
        const canvas = document.createElement('canvas');
        canvas.width = width * scale;
        canvas.height = height * scale;
        const context = canvas.getContext('2d');
        if (background) {
            context.fillStyle = background;
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
        context.strokeStyle = ink;
        context.fillStyle = ink;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        this.strokes.forEach((stroke) => {
            if (1 === stroke.length) {
                context.beginPath();
                context.arc(stroke[0].x * canvas.width, stroke[0].y * canvas.height, this.maxWidthValue * scale / 2, 0, Math.PI * 2);
                context.fill();

                return;
            }
            const widths = this.widths(stroke, scale);
            stroke.slice(1).forEach((point, index) => {
                const last = stroke[index];
                context.lineWidth = widths[index];
                context.beginPath();
                context.moveTo(last.x * canvas.width, last.y * canvas.height);
                context.lineTo(point.x * canvas.width, point.y * canvas.height);
                context.stroke();
            });
        });

        return canvas.toDataURL('jpeg' === format ? 'image/jpeg' : 'image/png', 0.92);
    }

    loadValue() {
        if (!this.valueValue) return;
        try {
            const data = JSON.parse(this.valueValue);
            this.strokes = (data.strokes ?? []).map((stroke) => stroke.map(([x, y, t, p]) => ({ x, y, t, p })));
        } catch {
            // Only a `json` export can be loaded back.
        }
    }
}

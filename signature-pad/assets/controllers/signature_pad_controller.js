import { Controller } from '@hotwired/stimulus';

/*
 * Signature pad on a canvas with Pointer Events. Strokes are kept as points normalized to the pad
 * (0..1), so the drawing survives resizes and exports at any size. The stroke width follows pen
 * pressure, or the drawing speed for a mouse or a finger, between minWidth and maxWidth.
 *
 * Events: `signature-pad:change` (finished stroke, undo, redo, clear, typed name; { empty, value }),
 * `signature-pad:lock`. Ctrl/Cmd+Z undoes, Ctrl/Cmd+Shift+Z and Ctrl/Cmd+Y redo.
 *
 * Actions for your own controls inside the component: undo, redo, clear, replay, lock,
 * setColor (param `color`), setWeight (param `weight`), download (param `format`), typeName (a text input) and
 * upload (a file input: an image of a signature is placed on the pad, under the strokes).
 * Targets for your own readouts: `preview` (an <img> of the export), `size` (payload size text).
 */
export default class extends Controller {
    static targets = ['frame', 'canvas', 'placeholder', 'undo', 'redo', 'clear', 'field', 'preview', 'size', 'color', 'weight'];
    static values = {
        format: { type: String, default: 'png' },
        value: String,
        background: String,
        color: { type: String, default: '' },
        minWidth: { type: Number, default: 0.8 },
        maxWidth: { type: Number, default: 2.6 },
        pointerTypes: { type: String, default: 'all' },
        inactive: Boolean,
        typedFont: { type: String, default: 'italic 56px "Brush Script MT", "Segoe Script", cursive' },
    };

    connect() {
        this.strokes = [];
        this.redone = [];
        this.current = null;
        this.typed = '';
        this.image = null;
        this.weight = 1;
        this.ink = this.colorValue || this.colorTargets[0]?.dataset.signaturePadColorParam || null;
        this.colorTargets.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.signaturePadColorParam === this.ink)));
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
        cancelAnimationFrame(this.replayFrame);
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
        this.stopReplay();
        this.typed = '';
        this.current = { color: this.ink, weight: this.weight, points: [this.point(event)] };
        this.strokes.push(this.current);
        this.redone = [];
        this.draw();
        this.placeholderTarget?.classList.add('opacity-0');
    }

    move(event) {
        if (!this.current) return;
        (event.getCoalescedEvents?.() ?? [event]).forEach((item) => this.current.points.push(this.point(item)));
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
        if (this.inactiveValue || !this.strokes.length) return;
        this.stopReplay();
        this.redone.push(this.strokes.pop());
        this.draw();
        this.sync(true);
    }

    redo() {
        if (this.inactiveValue || !this.redone.length) return;
        this.stopReplay();
        this.strokes.push(this.redone.pop());
        this.draw();
        this.sync(true);
    }

    clear() {
        if (this.inactiveValue || (!this.strokes.length && !this.redone.length && !this.typed && !this.image)) return;
        this.stopReplay();
        this.strokes = [];
        this.redone = [];
        this.typed = '';
        this.image = null;
        this.element.querySelectorAll('input[data-action*="signature-pad#typeName"], input[data-action*="signature-pad#upload"]').forEach((input) => { input.value = ''; });
        this.draw();
        this.sync(true);
        // The button disables itself: keep keyboard focus inside the widget.
        if (!this.hasClearTarget || this.clearTarget.disabled) this.canvasTarget.focus();
    }

    // Uploaded image of a signature: kept as a data URL so it is exported with the strokes.
    upload(event) {
        const file = event.target?.files?.[0];
        if (!file || this.inactiveValue || !file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = () => this.setImage(String(reader.result));
        reader.readAsDataURL(file);
    }

    setImage(url) {
        const element = new Image();
        element.onload = () => {
            this.stopReplay();
            this.typed = '';
            this.image = { url, element };
            this.draw();
            this.sync(true);
        };
        element.src = url;
    }

    // Typed alternative for people who cannot draw: the name is rendered in a handwriting font.
    typeName(event) {
        this.stopReplay();
        this.typed = (event.target?.value ?? '').trim();
        if (this.typed) {
            this.strokes = [];
            this.redone = [];
        }
        this.draw();
        this.sync(true);
    }

    setColor(event) {
        this.ink = event.params.color;
        this.colorTargets.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.signaturePadColorParam === this.ink)));
    }

    setWeight(event) {
        this.weight = Number(event.params.weight);
        this.weightTargets.forEach((button) => button.setAttribute('aria-pressed', String(Number(button.dataset.signaturePadWeightParam) === this.weight)));
    }

    lock() {
        this.inactiveValue = true;
        this.canvasTarget.removeAttribute('tabindex');
        this.canvasTarget.classList.remove('cursor-crosshair');
        this.element.querySelectorAll('button').forEach((button) => { button.disabled = true; });
        this.dispatch('lock', { detail: { value: this.fieldTarget.value } });
    }

    download(event) {
        const format = event.params.format || this.formatValue;
        const value = this.export(format);
        if (!value) return;
        const link = document.createElement('a');
        link.download = `signature.${'jpeg' === format ? 'jpg' : format}`;
        link.href = this.toUrl(value, format);
        link.click();
    }

    replay() {
        if (!this.strokes.length) return;
        this.stopReplay();
        const all = this.strokes;
        const points = all.flatMap((stroke, index) => stroke.points.map((point) => ({ index, point })));
        const total = Math.min(2500, Math.max(600, points.length * 12));
        const start = performance.now();
        const step = (now) => {
            const shown = Math.min(points.length, Math.ceil(((now - start) / total) * points.length));
            const partial = all.map((stroke, index) => ({ ...stroke, points: points.slice(0, shown).filter((item) => item.index === index).map((item) => item.point) })).filter((stroke) => stroke.points.length);
            this.draw(partial);
            if (shown < points.length) this.replayFrame = requestAnimationFrame(step);
            else this.replayFrame = null;
        };
        this.replayFrame = requestAnimationFrame(step);
    }

    stopReplay() {
        if (this.replayFrame) {
            cancelAnimationFrame(this.replayFrame);
            this.replayFrame = null;
            this.draw();
        }
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
        const min = this.minWidthValue * scale * (stroke.weight ?? 1);
        const max = this.maxWidthValue * scale * (stroke.weight ?? 1);
        let previous = (max + min) / 2;

        return stroke.points.slice(1).map((point, index) => {
            const last = stroke.points[index];
            const target = point.p > 0
                ? min + (max - min) * point.p
                : max - (max - min) * Math.min(1, Math.hypot(point.x - last.x, point.y - last.y) * 40 / Math.max(1, (point.t - last.t) / 16));
            previous = previous * 0.6 + target * 0.4;

            return previous;
        });
    }

    paint(context, width, height, scale, inkFor, strokes = this.strokes, typedColor = null) {
        if (this.image) {
            const { element } = this.image;
            const fit = Math.min((width * 0.9) / element.naturalWidth, (height * 0.8) / element.naturalHeight);
            const w = element.naturalWidth * fit;
            const h = element.naturalHeight * fit;
            context.drawImage(element, (width - w) / 2, (height - h) / 2, w, h);
        }
        context.lineCap = 'round';
        context.lineJoin = 'round';
        strokes.forEach((stroke) => {
            const ink = inkFor(stroke);
            context.strokeStyle = ink;
            context.fillStyle = ink;
            if (1 === stroke.points.length) {
                context.beginPath();
                context.arc(stroke.points[0].x * width, stroke.points[0].y * height, this.maxWidthValue * scale * (stroke.weight ?? 1) / 2, 0, Math.PI * 2);
                context.fill();

                return;
            }
            const widths = this.widths(stroke, scale);
            stroke.points.slice(1).forEach((point, index) => {
                const last = stroke.points[index];
                context.lineWidth = widths[index];
                context.beginPath();
                context.moveTo(last.x * width, last.y * height);
                context.lineTo(point.x * width, point.y * height);
                context.stroke();
            });
        });
        if (this.typed && typedColor) {
            context.fillStyle = typedColor;
            context.font = this.typedFontValue.replace(/(\d+)px/, (_, size) => `${Math.round(size * Math.min(1, width / (400 * scale)) * scale)}px`);
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(this.typed, width / 2, height * 0.55, width * 0.9);
        }
    }

    draw(strokes = this.strokes) {
        const canvas = this.canvasTarget;
        const context = canvas.getContext('2d');
        const scale = canvas.width / Math.max(1, canvas.getBoundingClientRect().width);
        context.clearRect(0, 0, canvas.width, canvas.height);
        // The ink follows the text color of the pad unless a color was picked.
        const theme = getComputedStyle(canvas).color;
        this.paint(context, canvas.width, canvas.height, scale, (stroke) => stroke.color || theme, strokes, theme);
    }

    // --- value / export ---------------------------------------------------------------------

    isEmpty() {
        return 0 === this.strokes.length && '' === this.typed && !this.image;
    }

    sync(notify) {
        const empty = this.isEmpty();
        this.placeholderTarget?.classList.toggle('opacity-0', !empty);
        if (this.hasUndoTarget) this.undoTarget.disabled = 0 === this.strokes.length;
        if (this.hasRedoTarget) this.redoTarget.disabled = 0 === this.redone.length;
        if (this.hasClearTarget) this.clearTarget.disabled = empty && 0 === this.redone.length;
        const value = empty ? '' : this.export(this.formatValue);
        this.fieldTarget.value = value;
        if (this.hasPreviewTarget) {
            const preview = empty ? '' : this.toUrl('svg' === this.formatValue || 'json' === this.formatValue ? this.export('svg') : value, 'json' === this.formatValue ? 'svg' : this.formatValue);
            this.previewTarget.toggleAttribute('hidden', empty);
            if (preview) this.previewTarget.src = preview;
        }
        if (this.hasSizeTarget) this.sizeTarget.textContent = empty ? '0 B' : `${(new Blob([value]).size / 1024).toFixed(1)} KB`;
        if (notify) {
            this.fieldTarget.dispatchEvent(new Event('change', { bubbles: true }));
            this.dispatch('change', { detail: { empty, value } });
        }
    }

    toUrl(value, format) {
        if ('svg' === format) return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(value)}`;
        if ('json' === format) return `data:application/json;charset=utf-8,${encodeURIComponent(value)}`;

        return value;
    }

    // Public: the signature in any format ('png', 'jpeg', 'svg', 'json'), '' when empty.
    export(format = this.formatValue) {
        if (this.isEmpty()) return '';
        if ('json' === format) {
            return JSON.stringify({
                version: 2,
                typed: this.typed || undefined,
                image: this.image?.url,
                strokes: this.strokes.map((stroke) => ({ c: stroke.color || undefined, w: 1 === (stroke.weight ?? 1) ? undefined : stroke.weight, p: stroke.points.map(({ x, y, t, p }) => [x, y, Math.round(t), p]) })),
            });
        }
        const rect = this.canvasTarget.getBoundingClientRect();
        const width = Math.round(rect.width);
        const height = Math.round(rect.height);
        const fallback = '#000000';
        const background = this.backgroundValue;
        if ('svg' === format) {
            const paths = this.strokes.map((stroke) => {
                const ink = stroke.color || fallback;
                if (1 === stroke.points.length) {
                    return `<circle cx="${(stroke.points[0].x * width).toFixed(1)}" cy="${(stroke.points[0].y * height).toFixed(1)}" r="${(this.maxWidthValue * (stroke.weight ?? 1) / 2).toFixed(2)}" fill="${ink}" stroke="none"/>`;
                }
                const widths = this.widths(stroke, 1);

                return `<g stroke="${ink}">${stroke.points.slice(1).map((point, index) => {
                    const last = stroke.points[index];

                    return `<path d="M${(last.x * width).toFixed(1)} ${(last.y * height).toFixed(1)}L${(point.x * width).toFixed(1)} ${(point.y * height).toFixed(1)}" stroke-width="${widths[index].toFixed(2)}"/>`;
                }).join('')}</g>`;
            }).join('');
            const text = this.typed
                ? `<text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="${fallback}" stroke="none" font-family="Brush Script MT, Segoe Script, cursive" font-style="italic" font-size="${Math.round(56 * Math.min(1, width / 400))}">${this.typed.replace(/[<>&"]/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[char])}</text>`
                : '';

            const picture = this.image
                ? (() => {
                    const fit = Math.min((width * 0.9) / this.image.element.naturalWidth, (height * 0.8) / this.image.element.naturalHeight);
                    const w = this.image.element.naturalWidth * fit;
                    const h = this.image.element.naturalHeight * fit;

                    return `<image href="${this.image.url}" x="${((width - w) / 2).toFixed(1)}" y="${((height - h) / 2).toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}"/>`;
                })()
                : '';

            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">${background ? `<rect width="100%" height="100%" fill="${background}"/>` : ''}${picture}<g fill="none" stroke-linecap="round" stroke-linejoin="round">${paths}</g>${text}</svg>`;
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
        this.paint(context, canvas.width, canvas.height, scale, (stroke) => stroke.color || fallback, this.strokes, fallback);

        return canvas.toDataURL('jpeg' === format ? 'image/jpeg' : 'image/png', 0.92);
    }

    loadValue() {
        if (!this.valueValue) return;
        try {
            const data = JSON.parse(this.valueValue);
            this.typed = data.typed ?? '';
            if (data.image) this.setImage(data.image);
            this.strokes = (data.strokes ?? []).map((stroke) => {
                const points = (Array.isArray(stroke) ? stroke : stroke.p).map(([x, y, t, p]) => ({ x, y, t, p }));

                return Array.isArray(stroke) ? { color: null, weight: 1, points } : { color: stroke.c ?? null, weight: stroke.w ?? 1, points };
            });
        } catch {
            // Only a `json` export can be loaded back.
        }
    }
}

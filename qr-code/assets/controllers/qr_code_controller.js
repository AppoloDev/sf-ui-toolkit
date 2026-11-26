import { Controller } from '@hotwired/stimulus';

/**
 * Draws a QR code with the `qrcode` package, loaded when the first code is shown.
 *
 * @target canvas  Where the SVG is written.
 * @value  value, level, margin, foreground, background, filename
 * @action download  Downloads the code as an SVG file.
 * @event  qr-code:render  The code was drawn, with `detail.svg`.
 * @event  qr-code:error   The value could not be encoded (too long for the level), with `detail.error`.
 */
export default class extends Controller {
    static targets = ['canvas'];
    static values = {
        value: String,
        level: { type: String, default: 'M' },
        margin: { type: Number, default: 1 },
        foreground: String,
        background: String,
        filename: { type: String, default: 'qr-code.svg' },
    };

    connect() {
        this.render();
    }

    valueValueChanged() {
        if (this.element.isConnected && this.hasCanvasTarget) {
            this.render();
        }
    }

    levelValueChanged() {
        if (this.element.isConnected && this.hasCanvasTarget) {
            this.render();
        }
    }

    async render() {
        if (!this.hasCanvasTarget) {
            return;
        }
        const token = (this.token = (this.token ?? 0) + 1);
        if (this.valueValue === '') {
            this.canvasTarget.innerHTML = '';
            this.svg = '';
            return;
        }
        let svg;
        try {
            const module = await import('qrcode');
            const toString = module.toString ?? module.default?.toString;
            // Placeholders, replaced below by the colors of the theme (or the ones given).
            svg = await toString(this.valueValue, {
                type: 'svg',
                errorCorrectionLevel: this.levelValue,
                margin: this.marginValue,
                color: { dark: '#010101', light: '#fefefe' },
            });
        } catch (error) {
            if (token === this.token) {
                this.canvasTarget.innerHTML = '';
                this.dispatch('error', { detail: { error } });
            }
            return;
        }
        if (token !== this.token) {
            return;
        }
        svg = svg
            .replace(/#010101/gi, this.hasForegroundValue && this.foregroundValue ? this.foregroundValue : 'currentColor')
            .replace(/#fefefe/gi, this.hasBackgroundValue && this.backgroundValue ? this.backgroundValue : 'transparent')
            .replace('<svg ', '<svg aria-hidden="true" focusable="false" ');
        this.svg = svg;
        this.canvasTarget.innerHTML = svg;
        this.dispatch('render', { detail: { svg } });
    }

    download() {
        if (!this.svg) {
            return;
        }
        const color = getComputedStyle(this.canvasTarget).color;
        const background = getComputedStyle(this.canvasTarget.parentElement).backgroundColor;
        const file = this.svg.replace(/currentColor/g, color).replace(/fill="transparent"/, `fill="${background}"`);
        const url = URL.createObjectURL(new Blob([file], { type: 'image/svg+xml' }));
        const link = Object.assign(document.createElement('a'), { href: url, download: this.filenameValue });
        link.click();
        URL.revokeObjectURL(url);
    }
}

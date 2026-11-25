import { Controller } from '@hotwired/stimulus';

/*
 * Color picker without a color library: the state is hue / saturation / brightness / alpha,
 * the typed field accepts any CSS color the browser understands, and the submitted value is a
 * CSS string in the chosen format. `color-picker:change` fires on every move,
 * `color-picker:commit` once per interaction (release, key press, swatch, field change).
 */
export default class extends Controller {
    static targets = ['trigger', 'chip', 'text', 'hidden', 'area', 'areaThumb', 'hue', 'brightness', 'opacity', 'channel', 'channelOutput', 'field', 'eyedropper', 'recent'];
    static values = {
        value: String,
        format: { type: String, default: 'hex' },
        alpha: Boolean,
        wheel: Boolean,
        channels: String,
        recentKey: String,
        hueLabel: { type: String, default: 'Hue' },
        saturationLabel: { type: String, default: 'Saturation' },
        brightnessLabel: { type: String, default: 'Brightness' },
    };

    connect() {
        this.state = this.toState(this.valueValue) ?? { h: 217, s: 0.76, v: 0.96, a: 1 };
        if ('EyeDropper' in window && this.hasEyedropperTarget) this.eyedropperTarget.hidden = false;
        this.render();
    }

    // Opening, closing (outside click, Escape) and focus are handled by the shadcn Popover this element is.

    // --- interactions -----------------------------------------------------------------------

    areaDown(event) {
        event.preventDefault();
        this.areaTarget.focus();
        this.areaTarget.setPointerCapture(event.pointerId);
        const move = (moveEvent) => this.moveArea(moveEvent);
        const up = () => {
            this.areaTarget.removeEventListener('pointermove', move);
            this.areaTarget.removeEventListener('pointerup', up);
            this.commit();
        };
        this.areaTarget.addEventListener('pointermove', move);
        this.areaTarget.addEventListener('pointerup', up);
        this.moveArea(event);
    }

    moveArea(event) {
        const rect = this.areaTarget.getBoundingClientRect();
        if (this.wheelValue) {
            const dx = event.clientX - (rect.left + rect.width / 2);
            const dy = event.clientY - (rect.top + rect.height / 2);
            this.state.h = ((Math.atan2(dy, dx) * 180 / Math.PI) + 90 + 360) % 360;
            this.state.s = Math.min(1, Math.hypot(dx, dy) / (rect.width / 2));
            this.update();

            return;
        }
        this.state.s = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        this.state.v = 1 - Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
        this.update();
    }

    areaKey(event) {
        const step = event.shiftKey ? 0.1 : 0.01;
        if (this.wheelValue) {
            const turns = { ArrowLeft: ['h', -step * 100], ArrowRight: ['h', step * 100], ArrowUp: ['s', step], ArrowDown: ['s', -step] };
            if (!turns[event.key]) return;
            event.preventDefault();
            const [axis, change] = turns[event.key];
            this.state[axis] = 'h' === axis ? (this.state.h + change + 360) % 360 : Math.min(1, Math.max(0, this.state.s + change));
            this.update();
            this.commit();

            return;
        }
        const moves = { ArrowLeft: ['s', -step], ArrowRight: ['s', step], ArrowUp: ['v', step], ArrowDown: ['v', -step] };
        if (!moves[event.key]) return;
        event.preventDefault();
        const [key, delta] = moves[event.key];
        this.state[key] = Math.min(1, Math.max(0, this.state[key] + delta));
        this.update();
        this.commit();
    }

    hueInput() {
        this.state.h = Number(this.hueTarget.value);
        this.update();
        this.commit();
    }

    brightnessInput() {
        this.state.v = Number(this.brightnessTarget.value) / 100;
        this.update();
        this.commit();
    }

    channelInput() {
        const values = Object.fromEntries(this.channelTargets.map((input) => [input.dataset.channel, Number(input.value)]));
        const css = 'hsl' === this.channelsValue ? `hsl(${values.h} ${values.s}% ${values.l}%)` : `rgb(${values.r} ${values.g} ${values.b})`;
        const parsed = this.toState(css);
        if (!parsed) return;
        // A gray has no hue (RGB sliders): keep the previous one so the other sliders do not jump.
        const hue = 'hsl' === this.channelsValue ? values.h : (0 === parsed.s ? this.state.h : parsed.h);
        this.state = { ...parsed, h: hue, a: this.state.a };
        this.update();
        this.commit();
    }

    opacityInput() {
        this.state.a = Number(this.opacityTarget.value) / 100;
        this.update();
        this.commit();
    }

    fieldChange() {
        const parsed = this.toState(this.fieldTarget.value);
        if (parsed) {
            this.state = this.alphaValue ? parsed : { ...parsed, a: 1 };
            this.update();
            this.commit();
        } else {
            this.render();
        }
    }

    fieldKey(event) {
        if ('Enter' === event.key) {
            event.preventDefault();
            this.fieldChange();
        }
    }

    swatch(event) {
        const parsed = this.toState(event.currentTarget.dataset.color);
        if (parsed) {
            this.state = this.alphaValue ? parsed : { ...parsed, a: 1 };
            this.update();
            this.commit();
        }
    }

    async eyedrop() {
        try {
            const result = await new window.EyeDropper().open();
            const parsed = this.toState(result.sRGBHex);
            if (parsed) {
                this.state = { ...parsed, a: this.state.a };
                this.update();
                this.commit();
            }
        } catch {
            // The user cancelled the eye dropper.
        }
    }

    // --- state / output ---------------------------------------------------------------------

    update() {
        this.render();
        this.dispatch('change', { detail: { value: this.output() } });
    }

    commit() {
        this.remember();
        this.renderRecent();
        this.hiddenTarget.dispatchEvent(new Event('change', { bubbles: true }));
        this.dispatch('commit', { detail: { value: this.output() } });
    }

    render() {
        const { h, s, v, a } = this.state;
        const value = this.output();
        const [r, g, b] = this.hsvToRgb(h, s, v);
        this.hiddenTarget.value = value;
        if (this.hasTextTarget) this.textTarget.textContent = value;
        this.fieldTarget.value = value;
        if (this.hasChipTarget) this.chipTarget.style.background = `linear-gradient(${value}, ${value}), repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 0 / 8px 8px`;
        if (this.hasAreaTarget) {
            if (this.wheelValue) {
                const angle = (h - 90) * Math.PI / 180;
                this.areaTarget.style.background = `radial-gradient(circle, #fff, transparent 70%), conic-gradient(from 0deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)`;
                this.areaTarget.style.filter = `brightness(${0.15 + 0.85 * v})`;
                this.areaThumbTarget.style.left = `${50 + Math.cos(angle) * s * 50}%`;
                this.areaThumbTarget.style.top = `${50 + Math.sin(angle) * s * 50}%`;
                this.areaTarget.setAttribute('aria-valuetext', `${this.hueLabelValue} ${Math.round(h)}°, ${this.saturationLabelValue} ${Math.round(s * 100)}%`);
            } else {
                this.areaTarget.style.background = `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${h} 100% 50%))`;
                this.areaThumbTarget.style.left = `${s * 100}%`;
                this.areaThumbTarget.style.top = `${(1 - v) * 100}%`;
                this.areaTarget.setAttribute('aria-valuetext', `${this.saturationLabelValue} ${Math.round(s * 100)}%, ${this.brightnessLabelValue} ${Math.round(v * 100)}%`);
            }
            this.areaThumbTarget.style.background = `rgb(${r} ${g} ${b})`;
        }
        if (this.hasHueTarget) this.hueTarget.value = Math.round(h);
        if (this.hasBrightnessTarget) {
            this.brightnessTarget.value = Math.round(v * 100);
            this.brightnessTarget.style.background = `linear-gradient(to right, #000, hsl(${h} ${s * 100}% 50%))`;
        }
        this.renderChannels(r, g, b);
        if (this.hasOpacityTarget) {
            this.opacityTarget.value = Math.round(a * 100);
            this.opacityTarget.style.background = `linear-gradient(to right, transparent, rgb(${r} ${g} ${b})), repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 0 / 8px 8px`;
        }
        this.renderRecent();
        this.element.querySelectorAll('[data-color]').forEach((swatch) => {
            const parsed = this.toState(swatch.dataset.color);
            swatch.setAttribute('aria-selected', String(null !== parsed && this.rgbString(parsed) === this.rgbString(this.state)));
        });
    }

    renderChannels(r, g, b) {
        if (!this.hasChannelTarget) return;
        const hsl = 'hsl' === this.channelsValue;
        const [hue, sat, light] = this.rgbToHsl(r, g, b);
        const values = hsl ? { h: Math.round(this.state.h), s: sat, l: light } : { r, g, b };
        this.channelTargets.forEach((input) => {
            const key = input.dataset.channel;
            input.value = values[key];
            const stops = {
                r: `rgb(0 ${g} ${b}), rgb(255 ${g} ${b})`,
                g: `rgb(${r} 0 ${b}), rgb(${r} 255 ${b})`,
                b: `rgb(${r} ${g} 0), rgb(${r} ${g} 255)`,
                h: '#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00',
                s: `hsl(${hue} 0% ${light}%), hsl(${hue} 100% ${light}%)`,
                l: `#000, hsl(${hue} ${sat}% 50%), #fff`,
            }[key];
            input.style.background = `linear-gradient(to right, ${stops})`;
        });
        this.channelOutputTargets.forEach((output) => { output.textContent = values[output.dataset.channel]; });
    }

    // Recent colors: the last committed colors, newest first, kept in localStorage.
    remember() {
        if (!this.recentKeyValue) return;
        const value = this.output();
        const key = this.rgbString(this.state);
        const list = this.recents().filter((entry) => { const parsed = this.toState(entry); return !parsed || this.rgbString(parsed) !== key; });
        localStorage.setItem(this.recentKeyValue, JSON.stringify([value, ...list].slice(0, 8)));
    }

    recents() {
        if (!this.recentKeyValue) return [];
        try {
            return JSON.parse(localStorage.getItem(this.recentKeyValue) ?? '[]');
        } catch {
            return [];
        }
    }

    renderRecent() {
        if (!this.hasRecentTarget) return;
        this.recentTarget.replaceChildren(...this.recents().map((color) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.setAttribute('role', 'option');
            button.setAttribute('aria-selected', 'false');
            button.setAttribute('aria-label', color);
            button.title = color;
            button.dataset.color = color;
            button.dataset.action = 'color-picker#swatch';
            button.style.background = color;
            button.className = 'size-6 rounded-md border border-black/10 outline-none focus-visible:ring-2 focus-visible:ring-ring';

            return button;
        }));
    }

    rgbString(state) {
        return this.hsvToRgb(state.h, state.s, state.v).join(',');
    }

    output() {
        const { h, s, v, a } = this.state;
        const [r, g, b] = this.hsvToRgb(h, s, v);
        const alpha = this.alphaValue && a < 1 ? a : null;
        if ('rgb' === this.formatValue) {
            return alpha === null ? `rgb(${r} ${g} ${b})` : `rgb(${r} ${g} ${b} / ${Math.round(alpha * 100)}%)`;
        }
        if ('hsl' === this.formatValue) {
            const [hue, sat, light] = this.rgbToHsl(r, g, b);

            return alpha === null ? `hsl(${hue} ${sat}% ${light}%)` : `hsl(${hue} ${sat}% ${light}% / ${Math.round(alpha * 100)}%)`;
        }
        if ('oklch' === this.formatValue) {
            const [lightness, chroma, hue] = this.rgbToOklch(r, g, b);
            const text = `oklch(${(lightness * 100).toFixed(1)}% ${chroma.toFixed(3)} ${hue.toFixed(1)}`;

            return alpha === null ? `${text})` : `${text} / ${Math.round(alpha * 100)}%)`;
        }
        const hex = (number) => number.toString(16).padStart(2, '0');

        return `#${hex(r)}${hex(g)}${hex(b)}${null === alpha ? '' : hex(Math.round(alpha * 255))}`;
    }

    // Any CSS color understood by the browser (hex, rgb, hsl, oklch, names...) -> { h, s, v, a }.
    toState(css) {
        if (!css) return null;
        const probe = document.createElement('span');
        probe.style.color = css;
        if ('' === probe.style.color) return null;
        // The canvas converts any CSS color (hex, rgb, hsl, oklch, names...) to sRGB bytes.
        this.canvas ??= document.createElement('canvas');
        this.canvas.width = 1;
        this.canvas.height = 1;
        const context = this.canvas.getContext('2d', { willReadFrequently: true });
        context.clearRect(0, 0, 1, 1);
        context.fillStyle = '#000';
        context.fillStyle = css;
        context.fillRect(0, 0, 1, 1);
        const [r, g, b, alpha] = context.getImageData(0, 0, 1, 1).data;
        const a = alpha / 255;
        const [h, s, v] = this.rgbToHsv(r, g, b);

        return { h, s, v, a };
    }

    rgbToHsv(r, g, b) {
        const [rn, gn, bn] = [r, g, b].map((channel) => channel / 255);
        const max = Math.max(rn, gn, bn);
        const delta = max - Math.min(rn, gn, bn);
        let hue = 0;
        if (delta) {
            if (max === rn) hue = ((gn - bn) / delta) % 6;
            else if (max === gn) hue = (bn - rn) / delta + 2;
            else hue = (rn - gn) / delta + 4;
        }

        return [((hue * 60) + 360) % 360, 0 === max ? 0 : delta / max, max];
    }

    hsvToRgb(h, s, v) {
        const f = (n) => {
            const k = (n + h / 60) % 6;

            return Math.round((v - v * s * Math.max(0, Math.min(k, 4 - k, 1))) * 255);
        };

        return [f(5), f(3), f(1)];
    }

    // sRGB (0-255) -> OKLCH [lightness 0-1, chroma, hue in degrees] (Bjorn Ottosson's OKLab matrices).
    rgbToOklch(r, g, b) {
        const linear = [r, g, b].map((channel) => {
            const value = channel / 255;

            return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
        });
        const l = Math.cbrt(0.4122214708 * linear[0] + 0.5363325363 * linear[1] + 0.0514459929 * linear[2]);
        const m = Math.cbrt(0.2119034982 * linear[0] + 0.6806995451 * linear[1] + 0.1073969566 * linear[2]);
        const sh = Math.cbrt(0.0883024619 * linear[0] + 0.2817188376 * linear[1] + 0.6299787005 * linear[2]);
        const lab = [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * sh, 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * sh, 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * sh];
        const chroma = Math.hypot(lab[1], lab[2]);

        return [lab[0], chroma, chroma < 0.0001 ? 0 : ((Math.atan2(lab[2], lab[1]) * 180 / Math.PI) + 360) % 360];
    }

    rgbToHsl(r, g, b) {
        const [rn, gn, bn] = [r, g, b].map((channel) => channel / 255);
        const max = Math.max(rn, gn, bn);
        const min = Math.min(rn, gn, bn);
        const light = (max + min) / 2;
        const delta = max - min;
        const sat = 0 === delta ? 0 : delta / (1 - Math.abs(2 * light - 1));
        const [hue] = this.rgbToHsv(r, g, b);

        return [Math.round(hue), Math.round(sat * 100), Math.round(light * 100)];
    }
}

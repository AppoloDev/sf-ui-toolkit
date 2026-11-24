import { Controller } from '@hotwired/stimulus';

/*
 * Color picker without a color library: the state is hue / saturation / brightness / alpha,
 * the typed field accepts any CSS color the browser understands, and the submitted value is a
 * CSS string in the chosen format. `color-picker:change` fires on every move,
 * `color-picker:commit` once per interaction (release, key press, swatch, field change).
 */
export default class extends Controller {
    static targets = ['trigger', 'chip', 'text', 'hidden', 'area', 'areaThumb', 'hue', 'opacity', 'field', 'eyedropper'];
    static values = {
        value: String,
        format: { type: String, default: 'hex' },
        alpha: Boolean,
        saturationLabel: { type: String, default: 'Saturation' },
        brightnessLabel: { type: String, default: 'Brightness' },
    };

    connect() {
        this.state = this.toState(this.valueValue) ?? { h: 217, s: 0.76, v: 0.96, a: 1 };
        if ('EyeDropper' in window) this.eyedropperTarget.hidden = false;
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
        this.state.s = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        this.state.v = 1 - Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
        this.update();
    }

    areaKey(event) {
        const step = event.shiftKey ? 0.1 : 0.01;
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
        this.hiddenTarget.dispatchEvent(new Event('change', { bubbles: true }));
        this.dispatch('commit', { detail: { value: this.output() } });
    }

    render() {
        const { h, s, v, a } = this.state;
        const value = this.output();
        const [r, g, b] = this.hsvToRgb(h, s, v);
        this.hiddenTarget.value = value;
        this.textTarget.textContent = value;
        this.fieldTarget.value = value;
        this.chipTarget.style.background = `linear-gradient(${value}, ${value}), repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 0 / 8px 8px`;
        this.areaTarget.style.background = `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${h} 100% 50%))`;
        this.areaThumbTarget.style.left = `${s * 100}%`;
        this.areaThumbTarget.style.top = `${(1 - v) * 100}%`;
        this.areaThumbTarget.style.background = `rgb(${r} ${g} ${b})`;
        this.areaTarget.setAttribute('aria-valuetext', `${this.saturationLabelValue} ${Math.round(s * 100)}%, ${this.brightnessLabelValue} ${Math.round(v * 100)}%`);
        this.hueTarget.value = Math.round(h);
        if (this.hasOpacityTarget) {
            this.opacityTarget.value = Math.round(a * 100);
            this.opacityTarget.style.background = `linear-gradient(to right, transparent, rgb(${r} ${g} ${b})), repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 0 / 8px 8px`;
        }
        this.element.querySelectorAll('[data-color]').forEach((swatch) => {
            const parsed = this.toState(swatch.dataset.color);
            swatch.setAttribute('aria-selected', String(null !== parsed && this.rgbString(parsed) === this.rgbString(this.state)));
        });
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
        const hex = (number) => number.toString(16).padStart(2, '0');

        return `#${hex(r)}${hex(g)}${hex(b)}${null === alpha ? '' : hex(Math.round(alpha * 255))}`;
    }

    // Any CSS color understood by the browser (hex, rgb, hsl, oklch, names...) -> { h, s, v, a }.
    toState(css) {
        if (!css) return null;
        const probe = document.createElement('span');
        probe.style.color = css;
        if ('' === probe.style.color) return null;
        probe.style.display = 'none';
        document.body.appendChild(probe);
        const computed = getComputedStyle(probe).color;
        probe.remove();
        const numbers = (computed.match(/-?\d*\.?\d+/g) || []).map(Number);
        let [r, g, b, a = 1] = numbers;
        if (computed.startsWith('color(')) {
            [r, g, b] = [r, g, b].map((channel) => Math.round(channel * 255));
        }
        if ([r, g, b].some((channel) => Number.isNaN(channel))) return null;
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

import { Controller } from '@hotwired/stimulus';

/**
 * Mirrors the value of a slider (or of a field) into the other parts of the group.
 *
 * @target output    An element whose text is built from the value (data-format, data-steps, data-decimals);
 *                   with data-follow it also moves to the position of the value (a bubble above the thumb).
 * @target progress  A progress bar (role="progressbar") filled to the position of the value.
 * @target field     A field that shows the value; typing in it moves the slider.
 * @action sync      Reads the source and updates every part. Fired by the `input` events of the group.
 * @action stepBy    Moves the value by `data-value-sync-delta-param` (a button), clamped to the bounds.
 * @action set       Sets the value to `data-value-sync-value-param` (a preset button).
 * @action reset     Puts the value back to what it was when the page loaded.
 *
 * The root also carries the CSS custom properties `--value` and `--percent`, so a preview can follow the value
 * with plain CSS (for example `style="filter: brightness(calc(var(--value) / 100))"`).
 */
export default class extends Controller {
    static targets = ['output', 'progress', 'field'];

    connect() {
        this.initial = this._read();
        this.sync();
    }

    stepBy(event) {
        const current = this._read();
        if (null !== current) {
            this._write(current + Number(event.params.delta));
        }
    }

    set(event) {
        this._write(Number(event.params.value));
    }

    reset() {
        if (null !== this.initial) {
            this._write(this.initial);
        }
    }

    _source() {
        const slider = this.element.querySelector('[data-slot="slider"]');
        const field = this.hasFieldTarget ? this.fieldTarget : null;

        return { slider, field };
    }

    _read() {
        const { slider, field } = this._source();
        const raw = slider ? slider.querySelector('[data-slider-target="input"]')?.value : field?.value;
        const value = Number(raw);

        return undefined === raw || '' === raw || Number.isNaN(value) ? null : value;
    }

    _write(value) {
        const { slider, field } = this._source();
        const { min, max } = this._bounds(slider ? null : field, slider);
        const next = Math.min(max, Math.max(min, value));
        if (slider) {
            this._moveSlider(slider, next);
            slider.dispatchEvent(new Event('input', { bubbles: true }));
            slider.dispatchEvent(new Event('change', { bubbles: true }));
        } else if (field) {
            field.value = next;
            field.dispatchEvent(new Event('input', { bubbles: true }));
            field.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }

    sync(event) {
        const origin = event?.target ?? null;
        const slider = this.element.querySelector('[data-slot="slider"]');
        const fromField = origin && this.fieldTargets.includes(origin);
        let min = 0;
        let max = 100;
        let value;

        if (fromField) {
            ({ min, max } = this._bounds(origin, slider));
            value = Number(origin.value);
            if (origin.value === '' || Number.isNaN(value)) {
                return;
            }
            value = Math.min(max, Math.max(min, value));
            this._moveSlider(slider, value);
        } else if (slider) {
            ({ min, max } = this._bounds(null, slider));
            value = Number(slider.querySelector('[data-slider-target="input"]')?.value);
        } else if (this.hasFieldTarget) {
            ({ min, max } = this._bounds(this.fieldTarget, null));
            value = Number(this.fieldTarget.value);
        } else {
            return;
        }
        if (Number.isNaN(value)) {
            return;
        }

        const percent = max > min ? ((value - min) / (max - min)) * 100 : 0;
        this.element.style.setProperty('--value', String(value));
        this.element.style.setProperty('--percent', String(percent));
        this.outputTargets.forEach((output) => this._writeOutput(output, value, percent));
        this.progressTargets.forEach((progress) => this._writeProgress(progress, percent));
        this.fieldTargets.forEach((field) => {
            if (field !== origin) {
                field.value = value;
            }
        });
    }

    _bounds(field, slider) {
        if (slider) {
            return { min: Number(slider.dataset.sliderMinValue ?? 0), max: Number(slider.dataset.sliderMaxValue ?? 100) };
        }

        return { min: Number(field?.min || 0), max: Number(field?.max || 100) };
    }

    _moveSlider(slider, value) {
        const controller = slider && this.application.getControllerForElementAndIdentifier(slider, 'slider');
        if (!controller || !controller.inputTargets.length) {
            return;
        }
        controller.inputTargets[0].value = controller._roundToStep(value);
        controller.update();
    }

    _writeOutput(output, value, percent) {
        const decimals = output.dataset.decimals;
        const shown = '' === decimals || undefined === decimals ? String(value) : value.toFixed(Number(decimals));
        let step = '';
        if (output.dataset.steps) {
            const steps = Object.entries(JSON.parse(output.dataset.steps))
                .map(([threshold, text]) => [Number(threshold), text])
                .sort((a, b) => a[0] - b[0]);
            step = (steps.filter(([threshold]) => threshold <= value).pop() ?? steps[0] ?? [0, ''])[1];
        }
        const text = (output.dataset.format ?? '{value}')
            .replaceAll('{step}', step)
            .replaceAll('{value}', shown)
            .replaceAll('{percent}', String(Math.round(percent)));
        const anchor = output.querySelector('[aria-hidden="true"]');
        if (anchor) {
            // The bubble keeps its arrow: only the text node in front of it changes.
            let node = output.firstChild;
            while (node && node !== anchor && node.nodeType !== Node.TEXT_NODE) {
                node = node.nextSibling;
            }
            if (node && node.nodeType === Node.TEXT_NODE) {
                node.textContent = text;
            } else {
                output.insertBefore(document.createTextNode(text), anchor);
            }
        } else {
            output.textContent = text;
        }
        if (undefined !== output.dataset.follow) {
            output.style.insetInlineStart = `${percent}%`;
        }
    }

    _writeProgress(progress, percent) {
        progress.setAttribute('aria-valuenow', String(Math.round(percent)));
        const indicator = progress.querySelector('[data-slot="progress-indicator"]');
        if (indicator) {
            indicator.style.transform = `translateX(-${100 - percent}%)`;
        }
    }
}

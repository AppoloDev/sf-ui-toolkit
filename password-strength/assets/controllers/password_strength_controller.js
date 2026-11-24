import { Controller } from '@hotwired/stimulus';

/**
 * Rates the password typed in the input of the element, from 0 (empty) to 4.
 *
 * The score is the number of requirements met among four: the minimum length, both cases, a digit and a symbol.
 * Under the minimum length the level cannot go past 1. The level is on the element as data-level, which the
 * bar is styled from; the text under the bar and the requirements, if listed, follow it. A live region
 * announces the level when it changes, not on every keystroke.
 *
 * @value minLength  The minimum length.
 * @value format     The text under the bar, with {level}.
 * @value labels     The names of levels 1 to 4, as a JSON array.
 */
export default class extends Controller {
    static targets = ['text', 'status'];
    static values = {
        minLength: { type: Number, default: 8 },
        format: { type: String, default: '{level}' },
        labels: { type: Array, default: [] },
    };

    connect() {
        this.field = this.element.querySelector('input');
        if (!this.field) {
            return;
        }
        this.field.addEventListener('input', this.update);
        this.update();
    }

    disconnect() {
        this.field?.removeEventListener('input', this.update);
    }

    update = () => {
        const value = this.field.value;
        const met = {
            length: [...value].length >= this.minLengthValue,
            case: /\p{Ll}/u.test(value) && /\p{Lu}/u.test(value),
            digit: /\d/.test(value),
            symbol: /[^\p{L}\d\s]/u.test(value),
        };
        let level = value === '' ? 0 : Object.values(met).filter(Boolean).length;
        if (level > 0 && !met.length) {
            level = 1;
        }
        level = Math.max(level, value === '' ? 0 : 1);

        for (const item of this.element.querySelectorAll('[data-rule]')) {
            item.dataset.met = String(Boolean(met[item.dataset.rule]));
        }

        const label = level > 0 ? (this.labelsValue[level - 1] ?? '') : '';
        const text = level > 0 ? this.formatValue.replaceAll('{level}', label) : '';
        this.textTarget.textContent = text;
        if (level !== Number(this.element.dataset.level)) {
            this.statusTarget.textContent = text;
        }
        this.element.dataset.level = String(level);
    };
}

import { Controller } from '@hotwired/stimulus';

/*
 * Numeric spinner: arrow / PageUp / PageDown / Home / End keys, press-and-hold repeat on the
 * buttons, clamping to min / max, and a cleared field reported as an empty value.
 *
 * Formatting (optional, as soon as locale, currency, a fraction digit count, prefix or suffix is set):
 * the field shows the number formatted with Intl.NumberFormat when it is not focused and the plain number
 * (with the locale decimal separator) while it is edited; a hidden input carries the raw number.
 */
export default class extends Controller {
    static targets = ['input', 'decrement', 'increment', 'raw', 'clear'];
    static values = {
        min: Number,
        max: Number,
        step: { type: Number, default: 1 },
        locale: String,
        currency: String,
        minFractionDigits: Number,
        maxFractionDigits: Number,
        prefix: String,
        suffix: String,
    };

    connect() {
        this.stopHold = this.stopHold.bind(this);
        const initial = this.current();
        if (this.formatted && null !== initial) {
            this.write(initial, false);
        }
        this.refresh();
    }

    disconnect() {
        this.stopHold();
    }

    get formatted() {
        return (
            this.hasLocaleValue ||
            this.hasCurrencyValue ||
            this.hasMinFractionDigitsValue ||
            this.hasMaxFractionDigitsValue ||
            this.hasPrefixValue ||
            this.hasSuffixValue
        );
    }

    get formatter() {
        if (!this._formatter) {
            const options = { style: this.hasCurrencyValue ? 'currency' : 'decimal' };
            if (this.hasCurrencyValue) options.currency = this.currencyValue;
            if (this.hasMaxFractionDigitsValue) {
                options.maximumFractionDigits = this.maxFractionDigitsValue;
                options.minimumFractionDigits = this.hasMinFractionDigitsValue
                    ? this.minFractionDigitsValue
                    : Math.min(this.hasCurrencyValue ? 2 : 0, this.maxFractionDigitsValue);
            } else if (this.hasMinFractionDigitsValue) {
                options.minimumFractionDigits = this.minFractionDigitsValue;
                options.maximumFractionDigits = Math.max(this.minFractionDigitsValue, this.hasCurrencyValue ? 2 : 3);
            }
            this._formatter = new Intl.NumberFormat(this.hasLocaleValue ? this.localeValue : undefined, options);
        }

        return this._formatter;
    }

    get decimal() {
        return this.formatter.formatToParts(1.1).find((part) => 'decimal' === part.type)?.value ?? '.';
    }

    holdDecrement(event) {
        this.startHold(event, -1);
    }

    holdIncrement(event) {
        this.startHold(event, 1);
    }

    keydown(event) {
        const big = event.shiftKey ? 10 : 1;
        const handlers = {
            ArrowUp: () => this.stepBy(this.stepValue * big),
            ArrowDown: () => this.stepBy(-this.stepValue * big),
            PageUp: () => this.stepBy(this.stepValue * 10),
            PageDown: () => this.stepBy(-this.stepValue * 10),
            Home: () => this.hasMinValue && this.write(this.minValue),
            End: () => this.hasMaxValue && this.write(this.maxValue),
        };
        if (handlers[event.key]) {
            event.preventDefault();
            handlers[event.key]();
        }
    }

    // While the field is edited, the plain number replaces the formatted text.
    focus() {
        if (!this.formatted) {
            return;
        }
        const value = this.current();
        if (null !== value) {
            this.inputTarget.value = this.editText(value);
        }
    }

    // Keeps only characters that can form a number while typing.
    sanitize() {
        const input = this.inputTarget;
        let cleaned;
        if (this.formatted) {
            const decimal = this.decimal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            cleaned = input.value.replace(new RegExp(`[^\\d\\-${decimal}]`, 'g'), '').replace(/(?!^)-/g, '');
            const first = cleaned.indexOf(this.decimal);
            if (first >= 0) {
                cleaned = cleaned.slice(0, first + 1) + cleaned.slice(first + 1).split(this.decimal).join('');
            }
        } else {
            cleaned = input.value.replace(/[^\d.,-]/g, '').replace(',', '.').replace(/(?!^)-/g, '').replace(/(\..*)\./g, '$1');
        }
        if (cleaned !== input.value) {
            input.value = cleaned;
        }
        this.refresh();
    }

    // On blur: parse, clamp and round to the step precision (or leave empty).
    commit() {
        const parsed = this.current();
        if (null === parsed) {
            this.inputTarget.value = '';
            this.refresh();

            return;
        }
        this.write(parsed, false);
    }

    clear() {
        const had = '' !== this.inputTarget.value;
        this.inputTarget.value = '';
        this.refresh();
        this.inputTarget.focus();
        if (had) {
            this.inputTarget.dispatchEvent(new Event('change', { bubbles: true }));
            this.dispatch('change', { detail: { value: null } });
        }
    }

    startHold(event, direction) {
        event.preventDefault();
        this.inputTarget.focus();
        this.stepBy(direction * this.stepValue);
        this.holdTimeout = setTimeout(() => {
            this.holdInterval = setInterval(() => this.stepBy(direction * this.stepValue), 60);
        }, 400);
        window.addEventListener('pointerup', this.stopHold, { once: true });
        window.addEventListener('pointercancel', this.stopHold, { once: true });
    }

    stopHold() {
        clearTimeout(this.holdTimeout);
        clearInterval(this.holdInterval);
    }

    parse(text) {
        let plain = text;
        if (this.formatted) {
            const decimal = this.decimal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            plain = text.replace(new RegExp(`[^\\d\\-${decimal}]`, 'g'), '');
            if ('.' !== this.decimal) {
                plain = plain.replace(this.decimal, '.');
            }
        }
        const parsed = parseFloat(plain);

        return Number.isNaN(parsed) ? null : parsed;
    }

    current() {
        return this.parse(this.inputTarget.value);
    }

    editText(value) {
        return String(value).replace('.', this.decimal);
    }

    display(value) {
        return `${this.hasPrefixValue ? this.prefixValue : ''}${this.formatter.format(value)}${this.hasSuffixValue ? this.suffixValue : ''}`;
    }

    stepBy(delta) {
        const base = this.current() ?? (this.hasMinValue ? this.minValue : 0);
        this.write(this.current() === null ? base : base + delta);
    }

    write(value, notify = true) {
        let next = value;
        if (this.hasMinValue) next = Math.max(this.minValue, next);
        if (this.hasMaxValue) next = Math.min(this.maxValue, next);
        const stepDecimals = (String(this.stepValue).split('.')[1] || '').length;
        const decimals = this.formatted && this.hasMaxFractionDigitsValue ? this.maxFractionDigitsValue : stepDecimals;
        next = Number(next.toFixed(decimals));
        let text = next.toFixed(stepDecimals);
        if (this.formatted) {
            text = document.activeElement === this.inputTarget ? this.editText(next) : this.display(next);
        }
        const changed = this.inputTarget.value !== text;
        this.inputTarget.value = text;
        this.refresh();
        if (changed && notify) {
            this.inputTarget.dispatchEvent(new Event('change', { bubbles: true }));
            this.dispatch('change', { detail: { value: next } });
        }
    }

    refresh() {
        const value = this.current();
        const input = this.inputTarget;
        input.setAttribute('aria-valuenow', value ?? '');
        if (this.formatted) {
            input.setAttribute('aria-valuetext', null === value ? '' : this.display(value));
        }
        if (this.hasMinValue) input.setAttribute('aria-valuemin', this.minValue);
        if (this.hasMaxValue) input.setAttribute('aria-valuemax', this.maxValue);
        if (this.hasRawTarget) {
            this.rawTarget.value = value ?? '';
        }
        this.clearTargets.forEach((button) => {
            button.hidden = '' === input.value || input.disabled;
        });
        this.decrementTarget.disabled = input.disabled || (null !== value && this.hasMinValue && value <= this.minValue);
        this.incrementTarget.disabled = input.disabled || (null !== value && this.hasMaxValue && value >= this.maxValue);
    }
}

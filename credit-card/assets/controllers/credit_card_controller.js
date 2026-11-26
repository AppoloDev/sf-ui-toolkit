import { Controller } from '@hotwired/stimulus';

const BRANDS = [
    ['amex', /^3[47]/, 'AMEX'],
    ['visa', /^4/, 'VISA'],
    ['mastercard', /^(5[1-5]|2[2-7])/, 'MASTERCARD'],
];

/**
 * A bank card that follows the fields of a form and turns over when the security code is focused.
 * Only what the user typed in the fields is shown; nothing is sent or stored by the card.
 *
 * @target inner, number, holder, expiry, cvc, brand
 * @value  brand, flipped, numberField, holderField, expiryField, cvcField and the placeholders
 */
export default class extends Controller {
    static targets = ['inner', 'number', 'holder', 'expiry', 'cvc', 'brand'];
    static values = { brand: { type: String, default: 'auto' }, flipped: Boolean, numberField: String, holderField: String, expiryField: String, cvcField: String, numberPlaceholder: String, holderPlaceholder: String, expiryPlaceholder: String };

    connect() {
        this.cleanup = [];
        const bind = (selector, handler, events = ['input']) => {
            const field = selector ? document.querySelector(selector) : null;
            if (!field) return null;
            events.forEach((name) => field.addEventListener(name, handler));
            this.cleanup.push(() => events.forEach((name) => field.removeEventListener(name, handler)));
            return field;
        };
        const number = bind(this.numberFieldValue, () => this.showNumber(number.value));
        const holder = bind(this.holderFieldValue, () => (this.holderTarget.textContent = holder.value.trim() || this.holderPlaceholderValue));
        const expiry = bind(this.expiryFieldValue, () => (this.expiryTarget.textContent = expiry.value.trim() || this.expiryPlaceholderValue));
        const cvc = bind(this.cvcFieldValue, () => (this.cvcTarget.textContent = '•'.repeat(Math.max(3, cvc.value.length))));
        bind(this.cvcFieldValue, () => (this.flippedValue = true), ['focus']);
        bind(this.cvcFieldValue, () => (this.flippedValue = false), ['blur']);
        this.showNumber(number?.value ?? this.numberTarget.dataset.value ?? '');
    }

    disconnect() {
        this.cleanup.forEach((undo) => undo());
    }

    flippedValueChanged() {
        if (this.hasInnerTarget) this.innerTarget.dataset.flipped = String(this.flippedValue);
    }

    showNumber(raw) {
        const digits = raw.replace(/\D/g, '');
        const brand = this.brandValue === 'auto' ? (BRANDS.find(([, pattern]) => pattern.test(digits)) ?? [null, null, ''])[2] : (BRANDS.find(([key]) => key === this.brandValue) ?? [null, null, ''])[2];
        this.brandTarget.textContent = brand;
        const groups = brand === 'AMEX' ? [4, 6, 5] : [4, 4, 4, 4];
        let at = 0;
        const parts = groups.map((size) => {
            const part = digits.slice(at, at + size);
            at += size;
            return part;
        }).filter(Boolean);
        this.numberTarget.textContent = parts.length ? parts.join(' ') : this.numberPlaceholderValue;
    }
}

import { Controller } from '@hotwired/stimulus';

const PRESETS = {
    pint: /[\d]/,
    int: /[\d\-]/,
    pnum: /[\d.]/,
    money: /[\d.\s,]/,
    num: /[\d\-.]/,
    hex: /[0-9a-f]/i,
    email: /[a-z0-9_.\-@]/i,
    alpha: /[a-z_]/i,
    alphanum: /[a-z0-9_]/i,
};

/**
 * Forces a format on the input inside the element, or filters the characters it accepts.
 *
 * Mask: `9` digit, `a` letter, `*` letter or digit, `?` ends the required part, other characters are literal.
 * Key filter: a preset name or a regular expression, tested on each typed character (or on the whole value
 * with `validateOnly`).
 *
 * @target raw  Optional hidden field that receives the value without the mask.
 * @value  mask, slotChar, autoClear, keyFilter, validateOnly
 * @event  input-mask:complete  Fired when the mask becomes complete, with `detail.value` and `detail.raw`.
 */
export default class extends Controller {
    static targets = ['raw'];
    static values = {
        mask: String,
        slotChar: { type: String, default: '_' },
        autoClear: { type: Boolean, default: true },
        keyFilter: String,
        validateOnly: Boolean,
    };

    connect() {
        this.field = this.element.querySelector('input:not([type="hidden"])');
        if (!this.field) {
            return;
        }
        this.complete = false;
        if (this.hasMaskValue) {
            this.parse();
            this.field.addEventListener('beforeinput', this.maskBeforeInput);
            this.field.addEventListener('input', this.maskInput);
            this.field.addEventListener('focus', this.maskFocus);
            this.field.addEventListener('blur', this.maskBlur);
            if (this.field.value) {
                this.write(this.extract(this.field.value));
            }
        } else if (this.hasKeyFilterValue) {
            this.pattern = PRESETS[this.keyFilterValue] ?? new RegExp(this.keyFilterValue);
            this.field.addEventListener('beforeinput', this.filterBeforeInput);
        }
    }

    disconnect() {
        if (!this.field) {
            return;
        }
        this.field.removeEventListener('beforeinput', this.maskBeforeInput);
        this.field.removeEventListener('input', this.maskInput);
        this.field.removeEventListener('focus', this.maskFocus);
        this.field.removeEventListener('blur', this.maskBlur);
        this.field.removeEventListener('beforeinput', this.filterBeforeInput);
    }

    // ---- Mask ----

    parse() {
        this.slots = [];
        this.required = null;
        for (const char of this.maskValue) {
            if (char === '?') {
                this.required = this.slots.filter((slot) => slot.type).length;
                continue;
            }
            const type = char === '9' ? 'digit' : char === 'a' ? 'letter' : char === '*' ? 'alnum' : null;
            this.slots.push({ type, char });
        }
        this.slotIndexes = this.slots.flatMap((slot, index) => (slot.type ? [index] : []));
        if (this.required === null) {
            this.required = this.slotIndexes.length;
        }
    }

    accepts(type, char) {
        if (type === 'digit') return /\d/.test(char);
        if (type === 'letter') return /\p{L}/u.test(char);
        return /[\p{L}\d]/u.test(char);
    }

    /** Characters of `value` that fit the free slots, in order. */
    extract(value) {
        const raw = [];
        for (const char of value) {
            const slot = this.slots[this.slotIndexes[raw.length]];
            if (slot && this.accepts(slot.type, char)) {
                raw.push(char);
            }
        }
        return raw;
    }

    placeholder(index) {
        if (this.slotCharValue === '') {
            return '';
        }
        return this.slotCharValue.length === this.slots.length ? this.slotCharValue[index] : this.slotCharValue[0];
    }

    /** The text for the typed characters, completed with the placeholders of the required slots when `fill`. */
    format(raw, fill) {
        const show = fill && this.slotCharValue !== '';
        let text = '';
        let number = 0;
        for (let index = 0; index < this.slots.length; index++) {
            const slot = this.slots[index];
            const open = number < raw.length || (show && number < this.required);
            if (!open) {
                break;
            }
            if (slot.type) {
                text += number < raw.length ? raw[number] : this.placeholder(index);
                number++;
            } else {
                text += slot.char;
            }
        }
        return text;
    }

    /** The position in the text where the next character goes, after `count` typed characters. */
    caretFor(count) {
        let index = count === 0 ? this.slotIndexes[0] : this.slotIndexes[count - 1] + 1;
        while (index !== undefined && this.slots[index] && !this.slots[index].type) {
            index++;
        }
        return Math.min(index ?? this.field.value.length, this.field.value.length);
    }

    write(raw, caretCount = null) {
        this.raw = raw;
        const focused = document.activeElement === this.field;
        const text = raw.length === 0 && !focused ? '' : this.format(raw, focused || raw.length > 0);
        this.field.value = text;
        if (focused && caretCount !== null) {
            const caret = this.caretFor(caretCount);
            this.field.setSelectionRange(caret, caret);
        }
        const complete = raw.length >= this.required;
        if (this.hasRawTarget) {
            this.rawTarget.value = raw.join('');
        }
        this.field.dataset.state = raw.length === 0 ? 'empty' : complete ? 'complete' : 'partial';
        if (complete && !this.complete) {
            this.dispatch('complete', { detail: { value: text, raw: raw.join('') } });
        }
        this.complete = complete;
    }

    caretCount() {
        const before = this.field.value.slice(0, this.field.selectionStart ?? 0);
        return this.extract(before).length;
    }

    maskBeforeInput = (event) => {
        if (!['deleteContentBackward', 'deleteContentForward'].includes(event.inputType)) {
            return;
        }
        if (this.field.selectionStart !== this.field.selectionEnd) {
            return;
        }
        event.preventDefault();
        const raw = this.extract(this.field.value);
        const count = this.caretCount();
        const target = event.inputType === 'deleteContentBackward' ? count - 1 : count;
        if (target < 0 || target >= raw.length) {
            return;
        }
        raw.splice(target, 1);
        this.write(raw, target);
    };

    maskInput = () => {
        const count = this.caretCount();
        this.write(this.extract(this.field.value), count);
    };

    maskFocus = () => {
        const raw = this.extract(this.field.value);
        this.write(raw, raw.length);
    };

    maskBlur = () => {
        let raw = this.extract(this.field.value);
        if (this.autoClearValue && raw.length < this.required) {
            raw = [];
        }
        this.write(raw);
    };

    // ---- Key filter ----

    filterBeforeInput = (event) => {
        if (!event.inputType.startsWith('insert')) {
            return;
        }
        const data = event.data ?? event.dataTransfer?.getData('text') ?? '';
        if (data === '') {
            return;
        }
        if (this.validateOnlyValue) {
            const start = this.field.selectionStart ?? this.field.value.length;
            const end = this.field.selectionEnd ?? start;
            const next = this.field.value.slice(0, start) + data + this.field.value.slice(end);
            if (next !== '' && !this.pattern.test(next)) {
                event.preventDefault();
            }
            return;
        }
        const accepted = [...data].filter((char) => this.pattern.test(char)).join('');
        if (accepted === data) {
            return;
        }
        event.preventDefault();
        if (accepted !== '') {
            this.field.setRangeText(accepted, this.field.selectionStart, this.field.selectionEnd, 'end');
            this.field.dispatchEvent(new Event('input', { bubbles: true }));
        }
    };
}

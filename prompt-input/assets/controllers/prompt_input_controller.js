import { Controller } from '@hotwired/stimulus';

/**
 * A message box: the textarea grows with its content, Enter submits the form, Shift+Enter adds a line.
 *
 * @target field, send, stop, counter
 * @value  maxRows, busy, maxLength, counter
 * @action clear, focus
 * @event  prompt-input:submit  Before the form is submitted: `detail.value`. Cancelable (preventDefault cancels the browser submission,
 *                              for an Ajax handler); the box is cleared unless `keep` is set on the detail.
 * @event  prompt-input:stop    The stop button was used.
 */
export default class extends Controller {
    static targets = ['field', 'send', 'stop', 'counter'];
    static values = { maxRows: { type: Number, default: 8 }, busy: Boolean, maxLength: Number, counter: { type: String, default: '{count}/{max}' } };

    connect() {
        this.resize();
        this.sync();
    }

    busyValueChanged() {
        if (!this.hasSendTarget) return;
        this.sendTarget.hidden = this.busyValue;
        this.stopTarget.hidden = !this.busyValue;
    }

    input() {
        this.resize();
        this.sync();
    }

    sync() {
        const length = this.fieldTarget.value.length;
        this.sendTarget.disabled = this.fieldTarget.value.trim() === '' || this.fieldTarget.disabled;
        if (this.hasCounterTarget && this.maxLengthValue) {
            const near = length >= this.maxLengthValue * 0.8;
            this.counterTarget.hidden = !near;
            this.counterTarget.textContent = this.counterValue.replace('{count}', String(length)).replace('{max}', String(this.maxLengthValue));
        }
    }

    resize() {
        const field = this.fieldTarget;
        field.style.height = 'auto';
        const style = getComputedStyle(field);
        const line = parseFloat(style.lineHeight) || 20;
        const padding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        const max = line * this.maxRowsValue + padding;
        field.style.height = `${Math.min(field.scrollHeight, max)}px`;
        field.style.overflowY = field.scrollHeight > max ? 'auto' : 'hidden';
    }

    keydown(event) {
        if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
            event.preventDefault();
            if (!this.sendTarget.disabled && !this.busyValue) this.element.requestSubmit();
        }
    }

    submitted(event) {
        const detail = { value: this.fieldTarget.value, keep: false };
        const proceed = this.dispatch('submit', { detail, cancelable: true });
        if (proceed.defaultPrevented) event.preventDefault();
        if (!detail.keep) setTimeout(() => this.clear());
    }

    stop() {
        this.dispatch('stop');
    }

    clear() {
        this.fieldTarget.value = '';
        this.resize();
        this.sync();
    }

    focus() {
        this.fieldTarget.focus();
    }
}

import { Controller } from '@hotwired/stimulus';

/**
 * Swaps a text for an input and back.
 *
 * @action edit    Shows the input, focused, with its text selected.
 * @action save    Keeps the value in the text and shows it again.
 * @action cancel  Puts back the value the input had when the edit started.
 * @action key     Enter saves, Escape cancels.
 * @event  inline-edit:save   Dispatched on the element when the value is kept, with detail.value.
 * @event  inline-edit:cancel Dispatched when the change is dropped.
 *
 * Leaving the editor (focus goes outside of it) saves, as clicking away does in most editors.
 */
export default class extends Controller {
    static targets = ['view', 'text', 'editor', 'input'];

    connect() {
        this.render(this.inputTarget.value);
        this.element.addEventListener('focusout', this.onFocusOut);
    }

    disconnect() {
        this.element.removeEventListener('focusout', this.onFocusOut);
    }

    edit() {
        this.original = this.inputTarget.value;
        this.#show(true);
        this.inputTarget.focus();
        this.inputTarget.select();
    }

    save() {
        if (this.element.dataset.state !== 'editing') {
            return;
        }
        this.render(this.inputTarget.value);
        this.#show(false);
        this.viewTarget.focus();
        this.element.dispatchEvent(new CustomEvent('inline-edit:save', { bubbles: true, detail: { value: this.inputTarget.value } }));
    }

    cancel() {
        if (this.element.dataset.state !== 'editing') {
            return;
        }
        this.inputTarget.value = this.original ?? this.inputTarget.value;
        this.#show(false);
        this.viewTarget.focus();
        this.element.dispatchEvent(new CustomEvent('inline-edit:cancel', { bubbles: true }));
    }

    key(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.save();
        } else if (event.key === 'Escape') {
            event.preventDefault();
            this.cancel();
        }
    }

    onFocusOut = (event) => {
        if (this.element.dataset.state === 'editing' && !this.editorTarget.contains(event.relatedTarget)) {
            // Focus left to nowhere (or elsewhere): keep what was typed.
            if (event.relatedTarget !== null || document.hasFocus()) {
                this.save();
            }
        }
    };

    render(value) {
        const empty = value.trim() === '';
        this.textTarget.dataset.empty = String(empty);
        this.textTarget.textContent = empty ? (this.textTarget.dataset.placeholder ?? '') : value;
    }

    #show(editing) {
        this.element.dataset.state = editing ? 'editing' : 'viewing';
        this.viewTarget.hidden = editing;
        this.editorTarget.hidden = !editing;
    }
}

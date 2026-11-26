import { Controller } from '@hotwired/stimulus';

/**
 * A bar of actions for a selection. It opens when something is selected, either from checkboxes (`source`) or
 * from your own code (`count`).
 *
 * @target count  Where the text of the count is written.
 * @value  count          The number of selected items, when no `source` is given.
 * @value  open           Keep the bar open without a count (no `source`).
 * @value  selectedLabel  The text of the count, with {count}.
 * @value  source         A CSS selector of checkboxes to follow.
 * @action clear          Unchecks the `source` checkboxes (or just closes the bar) and fires `action-bar:clear`.
 * @event  action-bar:change  `detail.count` each time the count changes.
 * @event  action-bar:clear   When the selection is cleared from the bar.
 */
export default class extends Controller {
    static targets = ['count'];
    static values = { count: Number, open: Boolean, selectedLabel: String, source: String };

    connect() {
        document.addEventListener('change', this.onChange);
        this.render();
    }

    disconnect() {
        document.removeEventListener('change', this.onChange);
    }

    get sources() {
        return this.hasSourceValue ? [...document.querySelectorAll(this.sourceValue)] : [];
    }

    onChange = (event) => {
        if (this.hasSourceValue && event.target.matches?.(this.sourceValue)) {
            this.render();
        }
    };

    countValueChanged() {
        this.render();
    }

    clear() {
        this.sources.forEach((box) => {
            if (box.checked) {
                box.checked = false;
                box.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
        this.countValue = 0;
        this.dispatch('clear');
        this.render();
    }

    render() {
        const count = this.hasSourceValue ? this.sources.filter((box) => box.checked).length : this.countValue;
        const open = count > 0 || (!this.hasSourceValue && this.openValue);
        this.element.dataset.state = open ? 'open' : 'closed';
        this.element.toggleAttribute('inert', !open);
        if (this.hasCountTarget) {
            this.countTarget.textContent = this.selectedLabelValue.replace('{count}', String(count));
        }
        if (count !== this.lastCount) {
            this.lastCount = count;
            this.dispatch('change', { detail: { count } });
        }
    }
}

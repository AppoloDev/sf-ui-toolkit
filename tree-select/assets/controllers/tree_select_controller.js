import { Controller } from '@hotwired/stimulus';

/**
 * A select whose options are a `Tree` inside a popover.
 *
 * @target trigger  The button.
 * @target text     The text of the button.
 * @target values   Where the hidden inputs are written.
 * @target panel    The popover.
 * @target search   The search field, when there is one.
 * @value  multiple, name, placeholder, selectedLabel
 * @event  tree-select:change  The choice changed: `detail.values`, `detail.labels`.
 */
export default class extends Controller {
    static targets = ['trigger', 'text', 'values', 'panel', 'search'];
    static values = { multiple: Boolean, name: String, placeholder: String, selectedLabel: String };

    connect() {
        this.panelTarget.addEventListener('toggle', this.onToggle);
        this.panelTarget.addEventListener('click', this.onClick, true);
        window.addEventListener('resize', this.place);
        window.addEventListener('scroll', this.place, true);
        this.sync(false);
    }

    disconnect() {
        this.panelTarget.removeEventListener('toggle', this.onToggle);
        this.panelTarget.removeEventListener('click', this.onClick, true);
        window.removeEventListener('resize', this.place);
        window.removeEventListener('scroll', this.place, true);
    }

    get nodes() {
        return [...this.panelTarget.querySelectorAll('[role="treeitem"][aria-selected="true"]')];
    }

    toggle() {
        if (this.panelTarget.matches(':popover-open')) this.panelTarget.hidePopover();
        else this.panelTarget.showPopover();
    }

    changed() {
        this.sync(true);
        if (!this.multipleValue && this.panelTarget.matches(':popover-open')) {
            this.panelTarget.hidePopover();
            this.triggerTarget.focus();
        }
    }

    sync(notify) {
        const nodes = this.nodes;
        const labels = nodes.map((node) => node.getAttribute('aria-label'));
        const values = nodes.map((node) => node.dataset.value ?? node.getAttribute('aria-label'));
        this.valuesTarget.replaceChildren();
        if (this.nameValue) {
            values.forEach((value) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = this.multipleValue ? `${this.nameValue}[]` : this.nameValue;
                input.value = value;
                this.valuesTarget.append(input);
            });
        }
        const text = this.textTarget;
        text.classList.toggle('text-muted-foreground', labels.length === 0);
        text.textContent = labels.length === 0 ? this.placeholderValue : labels.length > 2 ? this.selectedLabelValue.replace('{count}', String(labels.length)) : labels.join(', ');
        if (notify) this.dispatch('change', { detail: { values, labels } });
    }

    // In a multiple select a plain click toggles a node, like a modifier click does in the tree.
    onClick = (event) => {
        if (!this.multipleValue || event.ctrlKey || event.metaKey || event.shiftKey || event.__treeSelect) return;
        const row = event.target.closest('[data-tree-row]');
        if (!row || event.target.closest('[data-tree-chevron]')) return;
        event.stopPropagation();
        const forwarded = new MouseEvent('click', { bubbles: true, cancelable: true, ctrlKey: true });
        forwarded.__treeSelect = true;
        row.dispatchEvent(forwarded);
    };

    onToggle = (event) => {
        const open = event.newState === 'open';
        this.triggerTarget.setAttribute('aria-expanded', String(open));
        if (open) {
            this.place();
            (this.hasSearchTarget ? this.searchTarget : this.panelTarget.querySelector('[role="treeitem"][aria-selected="true"], [role="treeitem"]'))?.focus();
            this.dispatch('open');
        } else {
            this.dispatch('close');
        }
    };

    place = () => {
        const panel = this.panelTarget;
        if (!panel.matches(':popover-open')) return;
        const anchor = this.triggerTarget.getBoundingClientRect();
        panel.style.inset = 'auto';
        panel.style.width = `${anchor.width}px`;
        panel.style.left = `${anchor.left}px`;
        const room = window.innerHeight - anchor.bottom - 12;
        const up = room < 200 && anchor.top > room;
        panel.style.maxHeight = `${Math.min(320, up ? anchor.top - 12 : room)}px`;
        const height = panel.getBoundingClientRect().height;
        panel.style.top = `${up ? anchor.top - 4 - height : anchor.bottom + 4}px`;
    };
}

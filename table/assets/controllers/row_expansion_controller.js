import { Controller } from '@hotwired/stimulus';

/**
 * Opens and closes the detail rows of a table. Put it on the table or on an element around it and its toolbar.
 *
 * @value single  Opens one row at a time: opening a row closes the others.
 * @event row-expansion:expand    A row was opened. detail: { toggle, row }
 * @event row-expansion:collapse  A row was closed. detail: { toggle, row }
 * @action toggle, toggleAll, expandAll, collapseAll
 */
export default class extends Controller {
    static values = { single: Boolean };

    connect() {
        // The toggle is the source of truth: the detail row follows it.
        for (const toggle of this.#toggles()) {
            this.#apply(toggle, toggle.getAttribute('aria-expanded') === 'true', false);
        }
        // A detail cell spans every column of the table, counted here since the template does not know them.
        for (const cell of this.element.querySelectorAll('[data-auto-colspan]')) {
            const table = cell.closest('table');
            const first = table?.querySelector('tr:not([data-slot="table-row-expansion"])');
            if (first) {
                cell.colSpan = [...first.children].reduce((sum, child) => sum + child.colSpan, 0);
            }
        }
        this.#syncAll();
    }

    toggle(event) {
        const toggle = event.currentTarget;
        const open = toggle.getAttribute('aria-expanded') !== 'true';
        if (open && this.singleValue) {
            for (const other of this.#toggles()) {
                if (other !== toggle && other.getAttribute('aria-expanded') === 'true') {
                    this.#apply(other, false, true);
                }
            }
        }
        this.#apply(toggle, open, true);
        this.#syncAll();
    }

    toggleAll(event) {
        const open = event.currentTarget.getAttribute('aria-expanded') !== 'true';
        open ? this.expandAll() : this.collapseAll();
    }

    expandAll() {
        // Several rows cannot be open together in single mode: keep the first.
        const toggles = this.singleValue ? this.#toggles().slice(0, 1) : this.#toggles();
        for (const toggle of toggles) {
            this.#apply(toggle, true, true);
        }
        this.#syncAll();
    }

    collapseAll() {
        for (const toggle of this.#toggles()) {
            this.#apply(toggle, false, true);
        }
        this.#syncAll();
    }

    #toggles() {
        return [...this.element.querySelectorAll('[aria-controls][data-action*="row-expansion#toggle"]')];
    }

    #apply(toggle, open, notify) {
        const row = document.getElementById(toggle.getAttribute('aria-controls'));
        const changed = toggle.getAttribute('aria-expanded') !== String(open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? toggle.dataset.collapseLabel : toggle.dataset.expandLabel);
        if (row) {
            row.hidden = !open;
            row.dataset.state = open ? 'open' : 'closed';
        }
        if (notify && changed) {
            this.dispatch(open ? 'expand' : 'collapse', { detail: { toggle, row } });
        }
    }

    // The toggles of the header follow the rows: open when every row is open.
    #syncAll() {
        const toggles = this.#toggles();
        const open = toggles.length > 0 && toggles.every((toggle) => toggle.getAttribute('aria-expanded') === 'true');
        for (const all of this.element.querySelectorAll('[data-row-expansion-all]')) {
            all.setAttribute('aria-expanded', String(open));
            all.setAttribute('aria-label', open ? all.dataset.collapseLabel : all.dataset.expandLabel);
        }
    }
}

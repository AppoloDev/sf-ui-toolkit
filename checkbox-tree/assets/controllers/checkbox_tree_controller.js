import { Controller } from '@hotwired/stimulus';

const NODE = '[data-slot="checkbox-tree-node"]';
const CHILDREN = ':scope > [data-slot="checkbox-tree-children"] > [data-slot="checkbox-tree-node"]';

/**
 * Keeps the checkboxes of a tree consistent: checking a parent checks all its descendants, and a parent is
 * checked when all its children are, mixed (indeterminate) when only some are, and unchecked when none is.
 * The state is computed again from the leaves when the tree is displayed, so that a tree that starts with
 * some boxes checked shows the right parents.
 *
 * The checkbox of a node is the first one inside it that does not belong to a nested node.
 */
export default class extends Controller {
    connect() {
        this.element.addEventListener('change', this.onChange);
        for (const node of this.element.querySelectorAll(NODE)) {
            if (!node.parentElement.closest(NODE)) {
                this.#settle(node);
            }
        }
    }

    disconnect() {
        this.element.removeEventListener('change', this.onChange);
    }

    onChange = (event) => {
        const input = event.target;
        if (!(input instanceof HTMLInputElement) || input.type !== 'checkbox') {
            return;
        }
        const node = input.closest(NODE);
        if (!node || this.#own(node) !== input) {
            return;
        }

        input.indeterminate = false;
        for (const descendant of node.querySelectorAll(NODE)) {
            const box = this.#own(descendant);
            if (box && !box.disabled) {
                box.checked = input.checked;
                box.indeterminate = false;
            }
        }

        let parent = node.parentElement.closest(NODE);
        while (parent) {
            this.#refresh(parent);
            parent = parent.parentElement.closest(NODE);
        }
    };

    #own(node) {
        return [...node.querySelectorAll('input[type="checkbox"]')].find((box) => box.closest(NODE) === node) ?? null;
    }

    #children(node) {
        return [...node.querySelectorAll(CHILDREN)];
    }

    // Computes a node from its children, children first.
    #settle(node) {
        for (const child of this.#children(node)) {
            this.#settle(child);
        }
        this.#refresh(node);
    }

    #refresh(node) {
        const children = this.#children(node);
        const box = this.#own(node);
        if (!box || children.length === 0) {
            return;
        }
        const boxes = children.map((child) => this.#own(child)).filter(Boolean);
        const all = boxes.every((child) => child.checked && !child.indeterminate);
        const some = boxes.some((child) => child.checked || child.indeterminate);
        box.checked = all;
        box.indeterminate = !all && some;
    }
}

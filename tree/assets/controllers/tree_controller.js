import { Controller } from '@hotwired/stimulus';

/*
 * WAI-ARIA tree: roving tabindex, arrow keys, Home / End, typeahead, Enter / Space.
 *  - ArrowRight expands a collapsed branch, or moves to its first child;
 *  - ArrowLeft collapses an open branch, or moves to the parent;
 *  - clicking the chevron toggles, clicking a row selects.
 */
export default class extends Controller {
    static targets = ['item'];

    connect() {
        if ('true' === this.element.dataset.treeLines) {
            this.element.querySelectorAll('[role="group"]').forEach((group) => group.classList.add('ml-2', 'border-l', 'border-border'));
        }
        const start = this.itemTargets.find((item) => 'true' === item.getAttribute('aria-selected')) ?? this.visibleItems()[0];
        this.itemTargets.forEach((item) => { item.tabIndex = item === start ? 0 : -1; });
    }

    click(event) {
        const item = event.currentTarget.closest('[role="treeitem"]');
        this.focusItem(item);
        if (event.target.closest('[data-tree-chevron]')) {
            this.toggle(item);

            return;
        }
        this.select(item);
    }

    keydown(event) {
        const item = event.target.closest('[role="treeitem"]');
        if (!item || event.altKey || event.ctrlKey || event.metaKey) return;
        const visible = this.visibleItems();
        const index = visible.indexOf(item);
        let target = null;
        switch (event.key) {
            case 'ArrowDown': target = visible[index + 1]; break;
            case 'ArrowUp': target = visible[index - 1]; break;
            case 'Home': target = visible[0]; break;
            case 'End': target = visible[visible.length - 1]; break;
            case 'ArrowRight':
                if (this.isBranch(item)) {
                    if ('true' !== item.getAttribute('aria-expanded')) this.toggle(item, true);
                    else target = item.querySelector('[role="treeitem"]');
                }
                break;
            case 'ArrowLeft':
                if (this.isBranch(item) && 'true' === item.getAttribute('aria-expanded')) this.toggle(item, false);
                else target = item.parentElement.closest('[role="treeitem"]');
                break;
            case 'Enter':
            case ' ':
                if (this.isBranch(item)) this.toggle(item);
                this.select(item);
                break;
            default:
                if (1 === event.key.length && /\S/.test(event.key)) {
                    this.typeahead(event.key.toLowerCase(), visible, index);
                    event.preventDefault();
                }

                return;
        }
        event.preventDefault();
        if (target) this.focusItem(target);
    }

    typeahead(character, visible, index) {
        this.buffer = (Date.now() - (this.bufferTime ?? 0) < 500 ? this.buffer : '') + character;
        this.bufferTime = Date.now();
        const ordered = [...visible.slice(index + (1 === this.buffer.length ? 1 : 0)), ...visible.slice(0, index + 1)];
        const match = ordered.find((item) => item.getAttribute('aria-label').toLowerCase().startsWith(this.buffer));
        if (match) this.focusItem(match);
    }

    isBranch(item) {
        return item.hasAttribute('aria-expanded');
    }

    visibleItems() {
        return this.itemTargets.filter((item) => {
            let parent = item.parentElement.closest('[role="treeitem"]');
            while (parent) {
                if ('true' !== parent.getAttribute('aria-expanded')) return false;
                parent = parent.parentElement.closest('[role="treeitem"]');
            }

            return true;
        });
    }

    focusItem(item) {
        this.itemTargets.forEach((other) => { other.tabIndex = -1; });
        item.tabIndex = 0;
        item.focus();
    }

    toggle(item, open) {
        const expand = open ?? 'true' !== item.getAttribute('aria-expanded');
        item.setAttribute('aria-expanded', String(expand));
        item.querySelector(':scope > [data-tree-group]').hidden = !expand;
        item.querySelector(':scope > [data-tree-row]').dataset.expanded = String(expand);
        this.dispatch('toggle', { detail: { label: item.getAttribute('aria-label'), expanded: expand } });
    }

    select(item) {
        this.itemTargets.forEach((other) => {
            other.setAttribute('aria-selected', String(other === item));
            other.querySelector(':scope > [data-tree-row]').dataset.selected = String(other === item);
        });
        this.dispatch('select', { detail: { label: item.getAttribute('aria-label') } });
    }
}

import { Controller } from '@hotwired/stimulus';

/*
 * WAI-ARIA tree: roving tabindex, arrow keys, Home / End, typeahead, Enter / Space.
 *  - ArrowRight expands a collapsed branch, or moves to its first child;
 *  - ArrowLeft collapses an open branch, or moves to the parent;
 *  - clicking the chevron toggles, clicking a row selects;
 *  - `multiple`: Ctrl/Cmd+click toggles a node, Shift+click selects a range;
 *  - `draggable`: nodes are moved by drag and drop (event `tree:move`);
 *  - lazy branches dispatch `tree:load` on first open; `search` filters the nodes; `controls` wires external buttons.
 */
export default class extends Controller {
    static targets = ['item'];

    connect() {
        if ('true' === this.element.dataset.treeLines) {
            this.element.querySelectorAll('[role="group"]').forEach((group) => group.classList.add('ml-2', 'border-l', 'border-border'));
        }
        this.multiple = 'true' === this.element.dataset.treeMultiple;
        this.draggable = 'true' === this.element.dataset.treeDraggable;
        this.saved = null;
        this.cleanups = [];
        this.setupSearch();
        this.setupControls();
        this.setupDrag();
        const start = this.itemTargets.find((item) => 'true' === item.getAttribute('aria-selected')) ?? this.visibleItems()[0];
        this.itemTargets.forEach((item) => { item.tabIndex = item === start ? 0 : -1; });
    }

    disconnect() {
        this.cleanups.forEach((cleanup) => cleanup());
    }

    listen(target, type, handler) {
        target.addEventListener(type, handler);
        this.cleanups.push(() => target.removeEventListener(type, handler));
    }

    // ---- search ----

    setupSearch() {
        const selector = this.element.dataset.treeSearch;
        const input = selector ? document.querySelector(selector) : null;
        if (!input) return;
        this.listen(input, 'input', () => this.filter(input.value));
    }

    filter(value) {
        const query = value.trim().toLowerCase();
        const items = this.itemTargets;
        if (!query) {
            items.forEach((item) => { item.hidden = false; });
            if (this.saved) this.saved.forEach((open, item) => this.toggle(item, open, true));
            this.saved = null;
            this.showEmpty(false);
            return;
        }
        if (!this.saved) this.saved = new Map(items.filter((item) => this.isBranch(item)).map((item) => [item, 'true' === item.getAttribute('aria-expanded')]));
        const keep = new Set();
        items.filter((item) => item.getAttribute('aria-label').toLowerCase().includes(query)).forEach((item) => {
            for (let node = item; node; node = node.parentElement.closest('[role="treeitem"]')) keep.add(node);
        });
        items.forEach((item) => {
            item.hidden = !keep.has(item);
            if (this.isBranch(item)) this.toggle(item, keep.has(item) && [...item.querySelectorAll('[role="treeitem"]')].some((child) => keep.has(child)), true);
        });
        this.showEmpty(0 === keep.size);
        this.dispatch('filter', { detail: { query: value, matches: keep.size } });
    }

    showEmpty(show) {
        const empty = this.element.querySelector(':scope > [data-tree-empty]');
        if (empty) empty.hidden = !show;
    }

    // ---- external controls ----

    setupControls() {
        const selector = this.element.dataset.treeControls;
        const root = selector ? document.querySelector(selector) : null;
        if (!root) return;
        this.listen(root, 'click', (event) => {
            const button = event.target.closest('[data-tree-command]');
            if (!button || !root.contains(button)) return;
            const command = button.dataset.treeCommand;
            if ('expandAll' === command) this.setAll(true);
            else if ('collapseAll' === command) this.setAll(false);
            else if ('reveal' === command) this.reveal(button.dataset.treeLabel);
        });
    }

    setAll(open) {
        this.itemTargets.filter((item) => this.isBranch(item)).forEach((item) => this.toggle(item, open));
    }

    reveal(label) {
        const item = this.itemTargets.find((node) => node.getAttribute('aria-label') === label);
        if (!item) return;
        for (let parent = item.parentElement.closest('[role="treeitem"]'); parent; parent = parent.parentElement.closest('[role="treeitem"]')) this.toggle(parent, true);
        this.focusItem(item);
        this.select(item);
        item.scrollIntoView({ block: 'nearest' });
    }

    // ---- lazy branches ----

    load(item) {
        if ('true' !== item.dataset.treeLazy || item.dataset.treeLoading) return;
        item.dataset.treeLoading = 'true';
        item.setAttribute('aria-busy', 'true');
        const group = item.querySelector(':scope > [data-tree-group]');
        const finish = () => {
            delete item.dataset.treeLoading;
            item.removeAttribute('aria-busy');
        };
        this.dispatch('load', {
            detail: {
                label: item.getAttribute('aria-label'),
                item,
                // Call with a list of { label, lazy? }: builds the children of the branch.
                render: (definitions) => {
                    definitions.forEach((definition) => group.append(this.buildItem(definition)));
                    delete item.dataset.treeLazy;
                    finish();
                    if (!definitions.length) item.removeAttribute('aria-expanded');
                },
                // Allows a new attempt the next time the branch is opened.
                fail: finish,
            },
        });
    }

    buildItem(definition) {
        const model = this.element.querySelector('[data-tree-row]');
        const lazy = Boolean(definition.lazy);
        const branch = lazy || (definition.children ?? []).length > 0;
        const li = document.createElement('li');
        li.setAttribute('role', 'treeitem');
        li.setAttribute('aria-label', definition.label);
        li.setAttribute('aria-selected', 'false');
        li.tabIndex = -1;
        li.className = 'outline-none';
        li.dataset.treeTarget = 'item';
        const row = document.createElement('div');
        row.className = model.className;
        row.dataset.treeRow = '';
        row.dataset.selected = 'false';
        row.dataset.expanded = 'false';
        row.dataset.action = 'click->tree#click';
        if (this.draggable) row.draggable = true;
        if (branch) {
            li.setAttribute('aria-expanded', 'false');
            if (lazy) li.dataset.treeLazy = 'true';
            const source = this.element.querySelectorAll('[data-tree-row] > [data-tree-chevron]');
            source.forEach((chevron, index) => { if (index < 3) row.append(chevron.cloneNode(true)); });
        } else {
            const spacer = document.createElement('span');
            spacer.className = 'size-4 shrink-0';
            spacer.setAttribute('aria-hidden', 'true');
            row.append(spacer);
        }
        const text = document.createElement('span');
        text.className = 'min-w-0 flex-1 truncate';
        text.textContent = definition.label;
        row.append(text);
        li.append(row);
        if (branch) {
            const group = document.createElement('ul');
            group.setAttribute('role', 'group');
            group.className = 'm-0 list-none p-0 pl-4' + ('true' === this.element.dataset.treeLines ? ' ml-2 border-l border-border' : '');
            group.dataset.treeGroup = '';
            group.hidden = true;
            (definition.children ?? []).forEach((child) => group.append(this.buildItem(child)));
            li.append(group);
        }

        return li;
    }

    // ---- drag and drop ----

    setupDrag() {
        if (!this.draggable) return;
        this.element.querySelectorAll('[data-tree-row]').forEach((row) => { row.draggable = true; });
        this.dragged = null;
        this.listen(this.element, 'dragstart', (event) => this.dragStart(event));
        this.listen(this.element, 'dragover', (event) => this.dragOver(event));
        this.listen(this.element, 'dragleave', (event) => {
            if (!this.element.contains(event.relatedTarget)) this.clearDrop();
        });
        this.listen(this.element, 'drop', (event) => this.drop(event));
        this.listen(this.element, 'dragend', () => this.dragEnd());
    }

    dragStart(event) {
        const row = event.target.closest?.('[data-tree-row]');
        if (!row) return;
        const item = row.closest('[role="treeitem"]');
        let nodes = this.multiple && 'true' === item.getAttribute('aria-selected')
            ? this.itemTargets.filter((node) => 'true' === node.getAttribute('aria-selected'))
            : [item];
        // A node already carried by one of its ancestors is not moved twice.
        nodes = nodes.filter((node) => !nodes.some((other) => other !== node && other.contains(node)));
        this.dragged = nodes;
        nodes.forEach((node) => { node.querySelector(':scope > [data-tree-row]').dataset.dragging = 'true'; });
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', nodes.map((node) => node.getAttribute('aria-label')).join(', '));
    }

    dropTarget(event) {
        if (!this.dragged) return null;
        const row = event.target.closest?.('[data-tree-row]');
        if (!row) return null;
        const item = row.closest('[role="treeitem"]');
        if (this.dragged.some((node) => node === item || node.contains(item))) return null;
        const box = row.getBoundingClientRect();
        const ratio = (event.clientY - box.top) / (box.height || 1);
        let position;
        if (this.isBranch(item)) position = ratio < 0.25 ? 'before' : ratio > 0.75 ? 'after' : 'inside';
        else position = ratio < 0.5 ? 'before' : 'after';

        return { item, row, position };
    }

    dragOver(event) {
        const target = this.dropTarget(event);
        if (!target) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        this.clearDrop();
        target.row.dataset.drop = target.position;
    }

    clearDrop() {
        this.element.querySelectorAll('[data-drop]').forEach((row) => { delete row.dataset.drop; });
    }

    drop(event) {
        const target = this.dropTarget(event);
        if (!target) return;
        event.preventDefault();
        const { item, position } = target;
        const labels = this.dragged.map((node) => node.getAttribute('aria-label'));
        if ('inside' === position) {
            const group = item.querySelector(':scope > [data-tree-group]');
            this.dragged.forEach((node) => group.append(node));
            this.toggle(item, true, true);
        } else {
            let reference = item;
            this.dragged.forEach((node) => {
                if ('before' === position) item.before(node);
                else { reference.after(node); reference = node; }
            });
        }
        this.dragEnd();
        this.dispatch('move', { detail: { labels, target: item.getAttribute('aria-label'), position } });
    }

    dragEnd() {
        this.clearDrop();
        this.element.querySelectorAll('[data-dragging]').forEach((row) => { delete row.dataset.dragging; });
        this.dragged = null;
    }

    click(event) {
        // A checkbox in the row keeps its own click: it must not select the row.
        if (event.target.closest('[data-tree-checkbox]')) return;
        const item = event.currentTarget.closest('[role="treeitem"]');
        this.focusItem(item);
        if (event.target.closest('[data-tree-chevron]')) {
            this.toggle(item);

            return;
        }
        this.select(item, { additive: this.multiple && (event.ctrlKey || event.metaKey), range: this.multiple && event.shiftKey });
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
            case ' ': {
                // On a row with a checkbox, Space checks it; the row is still selected with Enter.
                const box = item.querySelector(':scope > [data-tree-row] [data-tree-checkbox] input');
                if (box) {
                    box.click();
                    break;
                }
            }
            // falls through
            case 'Enter':
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
            if (item.hidden) return false;
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

    toggle(item, open, silent = false) {
        const expand = open ?? 'true' !== item.getAttribute('aria-expanded');
        if (!this.isBranch(item) || expand === ('true' === item.getAttribute('aria-expanded'))) return;
        item.setAttribute('aria-expanded', String(expand));
        item.querySelector(':scope > [data-tree-group]').hidden = !expand;
        item.querySelector(':scope > [data-tree-row]').dataset.expanded = String(expand);
        if (expand) this.load(item);
        if (!silent) this.dispatch('toggle', { detail: { label: item.getAttribute('aria-label'), expanded: expand } });
    }

    select(item, { additive = false, range = false } = {}) {
        let chosen = [item];
        if (additive) {
            const current = this.itemTargets.filter((node) => 'true' === node.getAttribute('aria-selected'));
            chosen = current.includes(item) ? current.filter((node) => node !== item) : [...current, item];
            this.anchor = item;
        } else if (range && this.anchor) {
            const visible = this.visibleItems();
            const from = visible.indexOf(this.anchor);
            const to = visible.indexOf(item);
            if (-1 !== from && -1 !== to) chosen = visible.slice(Math.min(from, to), Math.max(from, to) + 1);
        } else {
            this.anchor = item;
        }
        this.itemTargets.forEach((other) => {
            const on = chosen.includes(other);
            other.setAttribute('aria-selected', String(on));
            other.querySelector(':scope > [data-tree-row]').dataset.selected = String(on);
        });
        this.dispatch('select', { detail: { label: item.getAttribute('aria-label'), labels: chosen.map((node) => node.getAttribute('aria-label')) } });
    }
}

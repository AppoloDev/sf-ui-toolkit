import { Controller } from '@hotwired/stimulus';

/*
 * Cascader: columns (or drill-down) over a hierarchy, with global search, single or multiple choice.
 * Keys: Up/Down move in a level, Right opens the branch, Left (or Backspace on an empty search) goes
 * back, Enter chooses or opens, Escape closes. `cascader:change` fires with { values }.
 */
const VIRTUAL_FROM = 150;
const ROW = 32;

export default class extends Controller {
    static targets = ['trigger', 'display', 'search', 'columns', 'status', 'inputs', 'validity', 'source', 'icon', 'footer', 'chips'];
    static values = {
        selected: Array,
        name: String,
        multiple: Boolean,
        max: Number,
        selectable: { type: String, default: 'leaf' },
        cascade: Boolean,
        mode: { type: String, default: 'columns' },
        separator: { type: String, default: ' / ' },
        placeholder: { type: String, default: 'Select…' },
        emptyLabel: { type: String, default: 'No results.' },
        backLabel: { type: String, default: 'Back' },
        selectedLabel: { type: String, default: '{count} selected' },
        loadingLabel: { type: String, default: 'Loading…' },
        removeLabel: { type: String, default: 'Remove {label}' },
        inline: Boolean,
        chips: Boolean,
        items: Array,
    };

    connect() {
        this.index = new Map();
        const walk = (nodes, trail) => nodes.forEach((node) => {
            const path = [...trail, node];
            this.index.set(String(node.value), { node, path });
            if (node.children?.length) walk(node.children, path);
        });
        const icon = this.sourceTarget.querySelector(':scope > template[data-cascader-icon]');
        if (icon && this.hasIconTarget) this.iconTarget.replaceChildren(icon.content.cloneNode(true));
        const footer = this.sourceTarget.querySelector(':scope > template[data-cascader-footer]');
        if (footer && this.hasFooterTarget) this.footerTarget.replaceChildren(footer.content.cloneNode(true));
        this.options = this.itemsValue.length ? this.tree(this.itemsValue) : this.read(this.sourceTarget);
        walk(this.options, []);
        this.expanded = new Set();
        this.chosen = new Set(this.selectedValue.map(String).filter((value) => this.index.has(value)));
        this.trail = [];
        this.columnsTarget.addEventListener('click', (event) => event.stopPropagation());
        if (this.inlineValue) {
            this.sync(false);
            this.render();

            return;
        }
        // The panel is a shadcn Popover on the same element: react to its open state.
        this.narrow = window.matchMedia('(max-width: 639px)');
        this.onNarrowChange = () => {
            if (this.isOpen) this.render();
        };
        this.narrow.addEventListener('change', this.onNarrowChange);
        this.wasOpen = this.isOpen;
        this.observer = new MutationObserver(() => {
            if (this.isOpen === this.wasOpen) return;
            this.wasOpen = this.isOpen;
            if (this.isOpen) this.opened();
        });
        this.observer.observe(this.element, { attributes: true, attributeFilter: ['data-state'] });
        this.triggerTarget.addEventListener('keydown', this.triggerKey);
        // A click re-renders the columns, so the clicked row is detached before the event reaches the window, where the
        // Popover would take it for a click outside and close: the listener above stops it here.
        this.sync(false);
    }

    selectedValueChanged() {
        if (!this.index) return;
        this.chosen = new Set(this.selectedValue.map(String).filter((value) => this.index.has(value)));
        this.sync(false);
        if (this.isOpen) this.render();
    }

    // Builds the tree from a flat list of { value, label, parent, disabled, lazy }.
    tree(items) {
        const nodes = new Map(items.map((item) => [String(item.value), { value: String(item.value), label: item.label, disabled: Boolean(item.disabled), lazy: Boolean(item.lazy), children: [] }]));
        const roots = [];
        items.forEach((item) => {
            const node = nodes.get(String(item.value));
            const parent = null === (item.parent ?? null) ? null : nodes.get(String(item.parent));
            (parent ? parent.children : roots).push(node);
        });

        return roots;
    }

    // Builds the tree from the <li data-value data-label> markup rendered by <twig:Cascader:Option>.
    read(list) {
        return Array.from(list.children).filter((item) => 'LI' === item.tagName).map((item) => ({
            value: item.dataset.value,
            label: item.dataset.label,
            disabled: 'disabled' in item.dataset,
            lazy: 'lazy' in item.dataset,
            content: item.querySelector(':scope > template[data-cascader-content], :scope > ul > template[data-cascader-content]'),
            children: this.read(item.querySelector(':scope > ul') ?? document.createElement('ul')),
        }));
    }

    disconnect() {
        this.observer?.disconnect();
        this.narrow?.removeEventListener('change', this.onNarrowChange);
        if (this.hasTriggerTarget) this.triggerTarget.removeEventListener('keydown', this.triggerKey);
    }

    // --- helpers ----------------------------------------------------------------------------

    isBranch(node) {
        return Boolean(node.children?.length) || Boolean(node.lazy && !node.loaded);
    }

    canChoose(node) {
        return !node.disabled && ('any' === this.selectableValue || !this.isBranch(node));
    }

    leaves(node) {
        if (node.children?.length) return node.children.flatMap((child) => this.leaves(child));

        return this.isBranch(node) ? [] : [node];
    }

    pathText(value) {
        return this.index.get(String(value)).path.map((node) => node.label).join(this.separatorValue);
    }

    state(node) {
        if (this.multiple && this.cascadeValue && this.isBranch(node)) {
            const leaves = this.leaves(node).filter((leaf) => !leaf.disabled);
            const count = leaves.filter((leaf) => this.chosen.has(String(leaf.value))).length;

            return 0 === count ? 'false' : count === leaves.length ? 'true' : 'mixed';
        }

        return this.chosen.has(String(node.value)) ? 'true' : 'false';
    }

    get multiple() {
        return this.multipleValue;
    }

    // --- popover ----------------------------------------------------------------------------

    // Columns fall back to drill-down on narrow screens, where several columns do not fit.
    get mode() {
        if ('tree' === this.modeValue) return 'tree';

        return 'columns' === this.modeValue && this.narrow?.matches ? 'drill' : this.modeValue;
    }

    get isOpen() {
        return this.inlineValue || 'open' === this.element.dataset.state;
    }

    setOpen(open) {
        this.element.dataset.popoverOpenValue = open ? 'true' : 'false';
    }

    // Called once the popover has opened: start from the chosen branch, with an empty search.
    opened() {
        const first = [...this.chosen][0];
        this.trail = first ? this.index.get(first).path.slice(0, -1).map((node) => String(node.value)) : [];
        this.searchTarget.value = '';
        this.render();
    }

    dismiss() {
        this.close(true);
    }

    clear() {
        this.chosen = new Set();
        this.sync(true);
        if (this.isOpen) this.render();
    }

    // Sets the value from outside: <button data-action="cascader#setValue" data-cascader-value-param="a">.
    setValue(event) {
        const value = event.params?.value;
        const values = Array.isArray(value) ? value : (null == value || '' === value ? [] : [value]);
        this.chosen = new Set(values.map(String).filter((entry) => this.index.has(entry)));
        this.sync(true);
        if (this.isOpen) this.render();
    }

    close(restoreFocus = false) {
        if (this.inlineValue || !this.isOpen) return;
        this.setOpen(false);
        if (restoreFocus) this.triggerTarget.focus();
    }

    triggerKey = (event) => {
        if ('ArrowDown' === event.key && !this.isOpen) {
            event.preventDefault();
            this.setOpen(true);
        }
    };

    search() {
        this.render();
    }

    // --- rendering --------------------------------------------------------------------------

    levels() {
        const levels = [{ nodes: this.options, parent: null }];
        this.trail.forEach((value) => {
            const node = this.index.get(value)?.node;
            if (node && this.isBranch(node)) levels.push({ nodes: node.children ?? [], parent: node, loading: Boolean(node.loading) });
        });

        return levels;
    }

    render(focus = null) {
        const query = this.searchTarget.value.trim().toLowerCase();
        const columns = [];
        if (query) {
            const matches = [...this.index.values()].filter(({ node, path }) => this.canChoose(node) && path.map((item) => item.label).join(' ').toLowerCase().includes(query));
            columns.push(this.column(matches.map(({ node }) => node), null, true));
            this.statusTarget.textContent = matches.length ? '' : this.emptyLabelValue;
        } else if ('tree' === this.mode) {
            columns.push(this.treeColumn());
        } else {
            const levels = this.levels();
            const shown = 'drill' === this.mode ? levels.slice(-1) : levels;
            shown.forEach((level) => columns.push(this.column(level.nodes, level.parent, false, 'drill' === this.mode && this.trail.length > 0, level.loading)));
        }
        this.columnsTarget.replaceChildren(...columns);
        if (focus) this.focusValue(focus);
    }

    column(nodes, parent, flat, withBack = false, loading = false) {
        const list = document.createElement('div');
        list.className = 'max-h-64 min-w-48 flex-1 overflow-y-auto p-1';
        list.setAttribute('role', 'listbox');
        list.setAttribute('aria-label', parent ? parent.label : '');
        if (this.multiple) list.setAttribute('aria-multiselectable', 'true');
        if (withBack) {
            const back = document.createElement('button');
            back.type = 'button';
            back.className = 'mb-1 flex w-full items-center gap-1 rounded-sm px-2 py-1.5 text-left text-sm text-muted-foreground outline-none hover:bg-muted focus-visible:bg-muted';
            back.textContent = `‹ ${this.backLabelValue}`;
            back.addEventListener('click', () => this.back());
            list.append(back);
        }
        if (!nodes.length) {
            const empty = document.createElement('p');
            empty.className = 'px-2 py-3 text-center text-sm text-muted-foreground';
            empty.textContent = loading ? this.loadingLabelValue : this.emptyLabelValue;
            list.append(empty);
        }
        if (nodes.length > VIRTUAL_FROM) this.virtualize(list, nodes, flat);
        else nodes.forEach((node) => list.append(this.item(node, flat)));

        return list;
    }

    // One flat column for the tree mode: the expanded branches are unfolded in place, indented by depth.
    treeColumn() {
        const list = document.createElement('div');
        list.className = 'max-h-64 min-w-64 flex-1 overflow-y-auto p-1';
        list.setAttribute('role', 'tree');
        if (this.multiple) list.setAttribute('aria-multiselectable', 'true');
        const walk = (nodes, depth) => nodes.forEach((node) => {
            list.append(this.item(node, false, depth));
            if (!this.expanded.has(String(node.value)) || !this.isBranch(node)) return;
            if (node.loading) {
                const loading = document.createElement('p');
                loading.className = 'py-1.5 text-sm text-muted-foreground';
                loading.style.paddingLeft = `${0.5 + (depth + 1) * 1.25 + 1.5}rem`;
                loading.textContent = this.loadingLabelValue;
                list.append(loading);
            } else if (node.children) {
                walk(node.children, depth + 1);
            }
        });
        walk(this.options, 0);

        return list;
    }

    // Long lists: only the rows near the viewport are in the DOM (fixed row height).
    virtualize(list, nodes, flat) {
        const spacer = document.createElement('div');
        spacer.className = 'relative';
        spacer.style.height = `${nodes.length * ROW}px`;
        list.dataset.virtual = 'true';
        list.virtualNodes = nodes;
        list.paint = () => {
            const height = list.clientHeight || 256;
            const first = Math.max(0, Math.floor(list.scrollTop / ROW) - 6);
            const last = Math.min(nodes.length, Math.ceil((list.scrollTop + height) / ROW) + 6);
            spacer.replaceChildren(...nodes.slice(first, last).map((node, offset) => {
                const row = this.item(node, flat);
                row.style.cssText = `position:absolute;left:0;right:0;top:${(first + offset) * ROW}px;height:${ROW}px`;
                row.setAttribute('aria-setsize', String(nodes.length));
                row.setAttribute('aria-posinset', String(first + offset + 1));

                return row;
            }));
        };
        list.addEventListener('scroll', () => list.paint());
        list.append(spacer);
        list.paint();
        requestAnimationFrame(() => list.paint());
    }

    // Focuses the row of a value, scrolling a virtualized column to it first.
    focusValue(value) {
        for (const list of this.columnsTarget.querySelectorAll('[data-virtual]')) {
            const at = list.virtualNodes.findIndex((node) => String(node.value) === value);
            if (at < 0) continue;
            this.scrollTo(list, at);
        }
        this.columnsTarget.querySelector(`[data-value="${CSS.escape(value)}"]`)?.focus();
    }

    scrollTo(list, at) {
        const height = list.clientHeight || 256;
        if (at * ROW < list.scrollTop) list.scrollTop = at * ROW;
        else if ((at + 1) * ROW > list.scrollTop + height) list.scrollTop = (at + 1) * ROW - height;
        list.paint();
    }

    item(node, flat, depth = 0) {
        const branch = this.isBranch(node) && !flat;
        const state = this.state(node);
        const row = document.createElement('div');
        row.setAttribute('role', 'option');
        row.tabIndex = -1;
        row.dataset.value = node.value;
        row.dataset.branch = String(branch);
        row.setAttribute('aria-selected', String('true' === state));
        if (this.multiple && this.canChoose(node) || (this.multiple && this.cascadeValue)) row.setAttribute('aria-checked', state);
        if (node.disabled) row.setAttribute('aria-disabled', 'true');
        if (branch && 'tree' !== this.mode) row.setAttribute('aria-expanded', String(this.trail.includes(String(node.value))));
        const tree = 'tree' === this.mode && !flat;
        const open = tree ? false : this.trail.includes(String(node.value));
        if (tree) {
            row.setAttribute('role', 'treeitem');
            row.setAttribute('aria-level', String(depth + 1));
            if (branch) row.setAttribute('aria-expanded', String(this.expanded.has(String(node.value))));
            row.style.paddingLeft = `${0.5 + depth * 1.25}rem`;
        }
        row.className = `flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-muted focus-visible:bg-muted ${open ? 'bg-muted' : ''}`;
        if (tree) {
            const toggle = document.createElement('span');
            toggle.className = 'flex size-4 shrink-0 items-center justify-center text-muted-foreground';
            toggle.textContent = branch ? (this.expanded.has(String(node.value)) ? '⌄' : '›') : '';
            toggle.addEventListener('click', (event) => {
                event.stopPropagation();
                if (branch) this.toggleNode(node);
            });
            row.append(toggle);
        }
        if (this.multiple && (this.canChoose(node) || this.cascadeValue)) {
            const box = document.createElement('span');
            box.className = 'flex size-4 shrink-0 items-center justify-center rounded border border-border text-[10px] leading-none ' + ('false' === state ? '' : 'bg-primary text-primary-foreground');
            box.textContent = 'true' === state ? '✓' : 'mixed' === state ? '–' : '';
            row.append(box);
        }
        const text = document.createElement('span');
        text.className = 'flex-1 truncate';
        if (node.content && !flat) {
            text.className = 'min-w-0 flex-1';
            text.replaceChildren(node.content.content.cloneNode(true));
        } else {
            text.textContent = flat ? this.pathText(node.value) : node.label;
        }
        row.append(text);
        if (!this.multiple && 'true' === state) {
            const check = document.createElement('span');
            check.textContent = '✓';
            row.append(check);
        }
        if (branch && !tree) {
            const arrow = document.createElement('span');
            arrow.className = 'text-muted-foreground';
            arrow.textContent = '›';
            row.append(arrow);
        }
        row.addEventListener('click', () => this.activate(node, flat));
        row.addEventListener('mouseenter', () => { if (branch && 'columns' === this.mode && !node.disabled) this.openBranch(node, false); });

        return row;
    }

    // --- actions ----------------------------------------------------------------------------

    async openBranch(node, focus = true) {
        if ('tree' === this.mode) {
            if (!this.expanded.has(String(node.value))) await this.toggleNode(node);
            else if (node.children?.length) this.focusValue(String(node.children[0].value));

            return;
        }
        this.trail = this.index.get(String(node.value)).path.map((item) => String(item.value));
        if (node.lazy && !node.loaded) {
            node.loading = true;
            this.render();
            this.statusTarget.textContent = this.loadingLabelValue;
            await this.load(node);
            node.loading = false;
        }
        this.render(focus && node.children?.length ? String(node.children[0].value) : null);
        this.statusTarget.textContent = node.label;
    }

    async toggleNode(node) {
        const value = String(node.value);
        if (this.expanded.has(value)) {
            this.expanded.delete(value);
            this.render(value);

            return;
        }
        this.expanded.add(value);
        if (node.lazy && !node.loaded) {
            node.loading = true;
            this.render(value);
            await this.load(node);
            node.loading = false;
        }
        this.render(value);
    }

    // Children of a `lazy` branch: the page answers the `cascader:load` event by calling `detail.resolve(items)` with
    // a list of { value, label, disabled, lazy }.
    load(node) {
        return new Promise((resolve) => {
            this.dispatch('load', {
                detail: {
                    value: String(node.value),
                    resolve: (items) => {
                        const path = this.index.get(String(node.value)).path;
                        node.children = (items ?? []).map((item) => ({ value: String(item.value), label: item.label, disabled: Boolean(item.disabled), lazy: Boolean(item.lazy), children: [] }));
                        node.children.forEach((child) => this.index.set(child.value, { node: child, path: [...path, child] }));
                        node.loaded = true;
                        resolve();
                    },
                },
            });
        });
    }

    back() {
        const closed = this.trail.pop();
        this.render(closed);
    }

    activate(node, flat) {
        if (node.disabled) return;
        if (this.isBranch(node) && !flat) {
            if (this.multiple && this.cascadeValue) this.toggleBranch(node);
            else if (this.canChoose(node)) this.choose(node);
            else if ('tree' === this.mode) this.toggleNode(node);
            else this.openBranch(node);

            return;
        }
        this.choose(node);
    }

    choose(node) {
        const value = String(node.value);
        if (this.multiple) {
            if (this.chosen.has(value)) this.chosen.delete(value);
            else if (!this.maxValue || this.chosen.size < this.maxValue) this.chosen.add(value);
            this.sync(true);
            this.render(value);

            return;
        }
        this.chosen = new Set([value]);
        this.sync(true);
        this.close(true);
    }

    toggleBranch(node) {
        const leaves = this.leaves(node).filter((leaf) => !leaf.disabled).map((leaf) => String(leaf.value));
        const all = leaves.every((value) => this.chosen.has(value));
        leaves.forEach((value) => {
            if (all) this.chosen.delete(value);
            else if (!this.maxValue || this.chosen.size < this.maxValue) this.chosen.add(value);
        });
        this.sync(true);
        this.render(String(node.value));
    }

    // --- keyboard ---------------------------------------------------------------------------

    panelKey(event) {
        const target = document.activeElement;
        const isSearch = target === this.searchTarget;
        const searching = '' !== this.searchTarget.value.trim();
        if (isSearch) {
            if ('ArrowDown' === event.key) {
                event.preventDefault();
                this.columnsTarget.querySelector('[role=option]:not([aria-disabled]), [role=treeitem]:not([aria-disabled])')?.focus();
            } else if ('Backspace' === event.key && !this.searchTarget.value && this.trail.length) {
                event.preventDefault();
                this.back();
                this.searchTarget.focus();
            }

            return;
        }
        const row = target.closest?.('[role=option], [role=treeitem]');
        if (!row) return;
        const list = row.closest('[role=listbox], [role=tree]');
        const node = this.index.get(row.dataset.value)?.node;
        const virtual = Boolean(list.dataset.virtual);
        const enabled = virtual ? list.virtualNodes.filter((entry) => !entry.disabled) : [...list.querySelectorAll('[role=option], [role=treeitem]')].filter((entry) => !entry.hasAttribute('aria-disabled'));
        const at = virtual ? enabled.indexOf(node) : enabled.indexOf(row);
        const focusAt = (index) => {
            if (virtual) this.focusValue(String(enabled[index].value));
            else enabled[index]?.focus();
        };
        if ('ArrowDown' === event.key) {
            event.preventDefault();
            focusAt(Math.min(enabled.length - 1, at + 1));
        } else if ('ArrowUp' === event.key) {
            event.preventDefault();
            if (0 === at) this.searchTarget.focus();
            else focusAt(at - 1);
        } else if ('ArrowRight' === event.key && 'true' === row.dataset.branch) {
            event.preventDefault();
            this.openBranch(node);
        } else if ('ArrowLeft' === event.key && 'tree' === this.mode && !searching) {
            event.preventDefault();
            if (this.expanded.has(String(node.value))) this.toggleNode(node);
            else if (this.index.get(String(node.value)).path.length > 1) this.focusValue(String(this.index.get(String(node.value)).path.at(-2).value));
        } else if ('ArrowLeft' === event.key && this.trail.length && !searching) {
            event.preventDefault();
            this.back();
        } else if ('Enter' === event.key || ' ' === event.key) {
            event.preventDefault();
            this.activate(node, searching);
        }
    }

    // --- value ------------------------------------------------------------------------------

    // Removable chips (`chips` prop): one per chosen value, under the trigger.
    renderChips(values) {
        this.chipsTarget.replaceChildren(...values.map((value) => {
            const text = this.pathText(value);
            const chip = document.createElement('span');
            chip.className = 'inline-flex items-center gap-1 rounded-md bg-secondary py-0.5 pl-2 pr-1 text-xs font-medium text-secondary-foreground';
            chip.append(text);
            const remove = document.createElement('button');
            remove.type = 'button';
            remove.setAttribute('aria-label', this.removeLabelValue.replace('{label}', text));
            remove.className = 'flex size-4 items-center justify-center rounded-sm outline-none hover:bg-black/10 focus-visible:ring-2 focus-visible:ring-ring';
            remove.textContent = '×';
            remove.addEventListener('click', () => {
                this.chosen.delete(String(value));
                this.sync(true);
                if (this.isOpen) this.render();
            });
            chip.append(remove);

            return chip;
        }));
    }

    sync(notify) {
        const values = [...this.chosen];
        if (this.hasDisplayTarget) {
            this.displayTarget.textContent = 0 === values.length
                ? this.placeholderValue
                : (this.multiple && values.length > 1 ? this.selectedLabelValue.replace('{count}', values.length) : this.pathText(values[0]));
            this.displayTarget.classList.toggle('text-muted-foreground', 0 === values.length);
        }
        if (this.hasChipsTarget) this.renderChips(values);
        this.inputsTarget.replaceChildren(...values.map((value) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = this.nameValue ? (this.multiple ? `${this.nameValue}[]` : this.nameValue) : '';
            input.value = value;

            return input;
        }));
        this.validityTarget.value = values.length ? '1' : '';
        if (notify) {
            this.dispatch('change', { detail: { values } });
            this.element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }
}

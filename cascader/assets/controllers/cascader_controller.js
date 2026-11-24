import { Controller } from '@hotwired/stimulus';

/*
 * Cascader: columns (or drill-down) over a hierarchy, with global search, single or multiple choice.
 * Keys: Up/Down move in a level, Right opens the branch, Left (or Backspace on an empty search) goes
 * back, Enter chooses or opens, Escape closes. `cascader:change` fires with { values }.
 */
export default class extends Controller {
    static targets = ['trigger', 'display', 'search', 'columns', 'status', 'inputs', 'validity', 'source', 'icon'];
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
        this.options = this.read(this.sourceTarget);
        walk(this.options, []);
        this.chosen = new Set(this.selectedValue.map(String).filter((value) => this.index.has(value)));
        this.trail = [];
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
        // Popover would take it for a click outside and close. Stop it here.
        this.columnsTarget.addEventListener('click', (event) => event.stopPropagation());
        this.sync(false);
    }

    // Builds the tree from the <li data-value data-label> markup rendered by <twig:Cascader:Option>.
    read(list) {
        return Array.from(list.children).filter((item) => 'LI' === item.tagName).map((item) => ({
            value: item.dataset.value,
            label: item.dataset.label,
            disabled: 'disabled' in item.dataset,
            children: this.read(item.querySelector(':scope > ul') ?? document.createElement('ul')),
        }));
    }

    disconnect() {
        this.observer?.disconnect();
        this.narrow?.removeEventListener('change', this.onNarrowChange);
        this.triggerTarget.removeEventListener('keydown', this.triggerKey);
    }

    // --- helpers ----------------------------------------------------------------------------

    isBranch(node) {
        return Boolean(node.children?.length);
    }

    canChoose(node) {
        return !node.disabled && ('any' === this.selectableValue || !this.isBranch(node));
    }

    leaves(node) {
        return this.isBranch(node) ? node.children.flatMap((child) => this.leaves(child)) : [node];
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
        return 'columns' === this.modeValue && this.narrow?.matches ? 'drill' : this.modeValue;
    }

    get isOpen() {
        return 'open' === this.element.dataset.state;
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

    close(restoreFocus = false) {
        if (!this.isOpen) return;
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
            if (node && this.isBranch(node)) levels.push({ nodes: node.children, parent: node });
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
        } else {
            const levels = this.levels();
            const shown = 'drill' === this.mode ? levels.slice(-1) : levels;
            shown.forEach((level) => columns.push(this.column(level.nodes, level.parent, false, 'drill' === this.mode && this.trail.length > 0)));
        }
        this.columnsTarget.replaceChildren(...columns);
        if (focus) this.columnsTarget.querySelector(`[data-value="${CSS.escape(focus)}"]`)?.focus();
    }

    column(nodes, parent, flat, withBack = false) {
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
            empty.textContent = this.emptyLabelValue;
            list.append(empty);
        }
        nodes.forEach((node) => list.append(this.item(node, flat)));

        return list;
    }

    item(node, flat) {
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
        if (branch) row.setAttribute('aria-expanded', String(this.trail.includes(String(node.value))));
        const open = this.trail.includes(String(node.value));
        row.className = `flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-muted focus-visible:bg-muted ${open ? 'bg-muted' : ''}`;
        if (this.multiple && (this.canChoose(node) || this.cascadeValue)) {
            const box = document.createElement('span');
            box.className = 'flex size-4 shrink-0 items-center justify-center rounded border border-border text-[10px] leading-none ' + ('false' === state ? '' : 'bg-primary text-primary-foreground');
            box.textContent = 'true' === state ? '✓' : 'mixed' === state ? '–' : '';
            row.append(box);
        }
        const text = document.createElement('span');
        text.className = 'flex-1 truncate';
        text.textContent = flat ? this.pathText(node.value) : node.label;
        row.append(text);
        if (!this.multiple && 'true' === state) {
            const check = document.createElement('span');
            check.textContent = '✓';
            row.append(check);
        }
        if (branch) {
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

    openBranch(node, focus = true) {
        const trail = this.index.get(String(node.value)).path.map((item) => String(item.value));
        this.trail = trail;
        this.render(focus ? String(node.children[0].value) : null);
        this.statusTarget.textContent = node.label;
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
                this.columnsTarget.querySelector('[role=option]:not([aria-disabled])')?.focus();
            } else if ('Backspace' === event.key && !this.searchTarget.value && this.trail.length) {
                event.preventDefault();
                this.back();
                this.searchTarget.focus();
            }

            return;
        }
        const row = target.closest?.('[role=option]');
        if (!row) return;
        const rows = [...row.parentElement.querySelectorAll('[role=option]:not([aria-disabled])')];
        const at = rows.indexOf(row);
        const node = this.index.get(row.dataset.value)?.node;
        if ('ArrowDown' === event.key) {
            event.preventDefault();
            rows[Math.min(rows.length - 1, at + 1)]?.focus();
        } else if ('ArrowUp' === event.key) {
            event.preventDefault();
            if (0 === at) this.searchTarget.focus();
            else rows[at - 1]?.focus();
        } else if ('ArrowRight' === event.key && 'true' === row.dataset.branch) {
            event.preventDefault();
            this.openBranch(node);
        } else if ('ArrowLeft' === event.key && this.trail.length && !searching) {
            event.preventDefault();
            this.back();
        } else if ('Enter' === event.key || ' ' === event.key) {
            event.preventDefault();
            this.activate(node, searching);
        }
    }

    // --- value ------------------------------------------------------------------------------

    sync(notify) {
        const values = [...this.chosen];
        this.displayTarget.textContent = 0 === values.length
            ? this.placeholderValue
            : (this.multiple && values.length > 1 ? this.selectedLabelValue.replace('{count}', values.length) : this.pathText(values[0]));
        this.displayTarget.classList.toggle('text-muted-foreground', 0 === values.length);
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

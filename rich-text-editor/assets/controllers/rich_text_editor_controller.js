import { Controller } from '@hotwired/stimulus';

// Built-in tools. A tool is { run(chain, editor), active(editor), can(editor) }; `run` receives a focused chain and returns it.
// TipTap is loaded on first use, so pages without an editor never download it.
export const TOOLS = {
    bold: { run: (chain) => chain.toggleBold(), active: (editor) => editor.isActive('bold'), can: (editor) => editor.can().toggleBold() },
    italic: { run: (chain) => chain.toggleItalic(), active: (editor) => editor.isActive('italic'), can: (editor) => editor.can().toggleItalic() },
    underline: { run: (chain) => chain.toggleUnderline(), active: (editor) => editor.isActive('underline'), can: (editor) => editor.can().toggleUnderline() },
    strike: { run: (chain) => chain.toggleStrike(), active: (editor) => editor.isActive('strike'), can: (editor) => editor.can().toggleStrike() },
    heading2: { run: (chain) => chain.toggleHeading({ level: 2 }), active: (editor) => editor.isActive('heading', { level: 2 }), can: (editor) => editor.can().toggleHeading({ level: 2 }) },
    heading3: { run: (chain) => chain.toggleHeading({ level: 3 }), active: (editor) => editor.isActive('heading', { level: 3 }), can: (editor) => editor.can().toggleHeading({ level: 3 }) },
    bulletList: { run: (chain) => chain.toggleBulletList(), active: (editor) => editor.isActive('bulletList'), can: (editor) => editor.can().toggleBulletList() },
    orderedList: { run: (chain) => chain.toggleOrderedList(), active: (editor) => editor.isActive('orderedList'), can: (editor) => editor.can().toggleOrderedList() },
    blockquote: { run: (chain) => chain.toggleBlockquote(), active: (editor) => editor.isActive('blockquote'), can: (editor) => editor.can().toggleBlockquote() },
    code: { run: (chain) => chain.toggleCode(), active: (editor) => editor.isActive('code'), can: (editor) => editor.can().toggleCode() },
    codeBlock: { run: (chain) => chain.toggleCodeBlock(), active: (editor) => editor.isActive('codeBlock'), can: (editor) => editor.can().toggleCodeBlock() },
    undo: { run: (chain) => chain.undo(), active: () => false, can: (editor) => editor.can().undo() },
    redo: { run: (chain) => chain.redo(), active: () => false, can: (editor) => editor.can().redo() },
    link: { active: (editor) => editor.isActive('link'), can: () => true },
    // Table tools: they need `@tiptap/extension-table`, which the controller loads when the toolbar has one of them.
    table: { run: (chain) => chain.insertTable({ rows: 3, cols: 3, withHeaderRow: true }), active: (editor) => editor.isActive('table'), can: (editor) => Boolean(editor.can().insertTable?.({ rows: 3, cols: 3 })) },
    tableAddColumn: { run: (chain) => chain.addColumnAfter(), active: () => false, can: (editor) => Boolean(editor.can().addColumnAfter?.()) },
    tableAddRow: { run: (chain) => chain.addRowAfter(), active: () => false, can: (editor) => Boolean(editor.can().addRowAfter?.()) },
    tableDelete: { run: (chain) => chain.deleteTable(), active: () => false, can: (editor) => Boolean(editor.can().deleteTable?.()) },
};

/*
 * Rich text editor on TipTap. The hidden field holds the HTML; `rich-text-editor:change` fires on every
 * edit with { html, empty }. The HTML must be sanitized on the server.
 * `rich-text-editor:configure` fires before the editor is created: listeners push TipTap extensions into
 * detail.extensions, add tools to detail.tools and StarterKit options to detail.starterKit.
 * Toolbar: Left/Right/Home/End move between the tools (roving tabindex).
 * Optional parts: a character `limit` with a counter, a `bubble` toolbar over the selection, a `/` command menu (`slash`).
 */
export default class extends Controller {
    static targets = ['toolbar', 'tool', 'editor', 'field', 'placeholder', 'linkInput', 'counter', 'bubble', 'slash', 'slashItem', 'slashEmpty'];
    static values = {
        value: String,
        editable: { type: Boolean, default: true },
        label: String,
        id: String,
        limit: { type: Number, default: 0 },
        limitLabel: { type: String, default: '{count} / {max}' },
    };

    async connect() {
        this.fieldTarget.value = this.valueValue;
        const wantsTable = this.toolTargets.some((button) => /^table/.test(button.dataset.tool));
        const [{ Editor }, { default: StarterKit }, tableModule] = await Promise.all([
            import('@tiptap/core'),
            import('@tiptap/starter-kit'),
            wantsTable ? import('@tiptap/extension-table') : null,
        ]);
        if (!this.element.isConnected) return;
        // Extension point: listeners add TipTap extensions, tools and StarterKit options (see the docs, "Extending").
        const config = { extensions: [], tools: {}, starterKit: {} };
        if (tableModule) config.extensions.push(tableModule.Table, tableModule.TableRow, tableModule.TableHeader, tableModule.TableCell);
        this.dispatch('configure', { detail: config });
        this.tools = this.defineTools(config.tools);
        this.editor = new Editor(this.editorOptions(StarterKit, config));
        // The hidden field carries the native validation: send the user to the editor instead of a 1px input.
        this.onInvalid = () => {
            this.element.dataset.invalid = '';
            this.editor.commands.focus();
        };
        this.fieldTarget.addEventListener('invalid', this.onInvalid);
        this.form = this.element.closest('form');
        this.onReset = () => requestAnimationFrame(() => {
            this.editor.commands.setContent(this.valueValue, { emitUpdate: false });
            this.changed(false);
        });
        this.form?.addEventListener('reset', this.onReset);
        this.changed(false);
        this.refresh();
        this.watchLinkPanel();
        this.slashItemTargets.forEach((item, index) => { item.id ||= `${this.element.id || 'rte'}-slash-${index}-${Math.random().toString(36).slice(2, 7)}`; });
    }

    // Hooks for subclasses: both can be overridden (call super to keep the defaults).

    // Tools available to the toolbar, by name.
    defineTools(extra) {
        return { ...TOOLS, ...extra };
    }

    // Options passed to the TipTap Editor.
    editorOptions(StarterKit, config) {
        return {
            element: this.editorTarget,
            extensions: [StarterKit.configure({ link: { openOnClick: false, autolink: true }, ...config.starterKit }), ...config.extensions],
            content: this.valueValue,
            editable: this.editableValue,
            editorProps: {
                attributes: {
                    role: 'textbox',
                    'aria-multiline': 'true',
                    ...(this.fieldTarget.required ? { 'aria-required': 'true' } : {}),
                    'aria-label': this.labelValue,
                    ...(this.idValue ? { id: this.idValue } : {}),
                },
                // A limit blocks typing and pasting that would go over it.
                handleTextInput: (view, from, to, text) => this.exceeds(view.state.doc.textContent.length - (to - from) + text.length),
                handlePaste: (view, event, slice) => this.exceeds(view.state.doc.textContent.length - (view.state.selection.to - view.state.selection.from) + slice.content.textBetween(0, slice.content.size, ' ').length),
                handleKeyDown: (view, event) => this.slashKey(event),
            },
            onUpdate: () => this.changed(true),
            onTransaction: () => this.refresh(),
        };
    }

    disconnect() {
        this.form?.removeEventListener('reset', this.onReset);
        this.fieldTarget.removeEventListener('invalid', this.onInvalid);
        this.linkObserver?.disconnect();
        this.editor?.destroy();
    }

    // --- toolbar ----------------------------------------------------------------------------

    command(event) {
        if (!this.editor) return;
        const tool = event.params.tool;
        this.tools[tool]?.run(this.editor.chain().focus(), this.editor).run();
    }

    // The link tool opens a Popover (shadcn) around the form: fill and focus the field when it opens.
    watchLinkPanel() {
        this.linkObserver?.disconnect();
        this.linkObserver = new MutationObserver((records) => {
            records.forEach((record) => {
                const popover = record.target;
                if ('open' !== popover.dataset.state || !popover.contains(this.hasLinkInputTarget ? this.linkInputTarget : null)) return;
                this.linkInputTarget.value = this.editor.getAttributes('link').href ?? '';
                requestAnimationFrame(() => this.linkInputTarget.focus());
            });
        });
        this.element.querySelectorAll('[data-slot=popover]').forEach((popover) => this.linkObserver.observe(popover, { attributes: true, attributeFilter: ['data-state'] }));
    }

    closeLinkForm() {
        const popover = this.linkInputTarget.closest('[data-slot=popover]');
        if (popover) popover.dataset.popoverOpenValue = 'false';
        this.editor.commands.focus();
    }

    applyLink(event) {
        event.preventDefault();
        const href = this.linkInputTarget.value.trim();
        if (!href) return this.removeLink();
        this.editor.chain().focus().extendMarkRange('link').setLink({ href }).run();
        this.closeLinkForm();
    }

    removeLink() {
        this.editor.chain().focus().extendMarkRange('link').unsetLink().run();
        this.closeLinkForm();
    }

    linkKey(event) {
        if ('Escape' === event.key) {
            event.preventDefault();
            this.closeLinkForm();
        }
    }

    toolbarKey(event) {
        const tools = this.toolTargets.filter((tool) => !tool.disabled && !tool.closest('[data-bubble]'));
        const at = tools.indexOf(document.activeElement);
        const next = { ArrowRight: at + 1, ArrowLeft: at - 1, Home: 0, End: tools.length - 1 }[event.key];
        if (undefined === next || at < 0) return;
        event.preventDefault();
        tools[(next + tools.length) % tools.length].focus();
    }

    // --- state ------------------------------------------------------------------------------

    refresh() {
        if (!this.editor) return;
        this.updateBubble();
        this.updateSlash();
        if (!this.hasToolbarTarget) return;
        let focusable = null;
        // The tools of the bubble toolbar are used with the pointer: they stay out of the tab order.
        const main = this.toolTargets.filter((button) => !button.closest('[data-bubble]'));
        this.toolTargets.forEach((button) => {
            const tool = this.tools[button.dataset.tool];
            button.disabled = !tool || !(tool.can?.(this.editor) ?? true);
            button.setAttribute('aria-pressed', String(Boolean(tool?.active?.(this.editor))));
            if (!main.includes(button)) button.setAttribute('tabindex', '-1');
            else if (!button.disabled && !focusable) focusable = button;
        });
        // Roving tabindex: one tool in the tab order, the focused one when the focus is in the toolbar.
        const current = main.includes(document.activeElement) ? document.activeElement : (main.find((button) => '0' === button.getAttribute('tabindex') && !button.disabled) ?? focusable);
        main.forEach((button) => button.setAttribute('tabindex', button === current ? '0' : '-1'));
    }

    // --- character limit --------------------------------------------------------------------

    exceeds(length) {
        return this.limitValue > 0 && length > this.limitValue;
    }

    updateCounter() {
        if (!this.hasCounterTarget || !this.limitValue) return;
        const count = this.editor.state.doc.textContent.length;
        this.counterTarget.textContent = this.limitLabelValue.replace('{count}', count).replace('{max}', this.limitValue);
        this.counterTarget.dataset.full = String(count >= this.limitValue);
    }

    // --- bubble toolbar ---------------------------------------------------------------------

    keepSelection(event) {
        // A click on the bubble must not take the focus (and the selection) away from the editor.
        event.preventDefault();
    }

    updateBubble() {
        if (!this.hasBubbleTarget) return;
        const { from, to, empty } = this.editor.state.selection;
        if (empty || !this.editor.isEditable || !this.editor.isFocused) {
            this.bubbleTarget.hidden = true;
            return;
        }
        const view = this.editor.view;
        const start = view.coordsAtPos(from);
        const end = view.coordsAtPos(to);
        const host = this.element.getBoundingClientRect();
        this.bubbleTarget.hidden = false;
        const width = this.bubbleTarget.offsetWidth;
        const height = this.bubbleTarget.offsetHeight;
        const middle = start.top === end.top ? (start.left + end.right) / 2 : start.left;
        const left = Math.max(4, Math.min(middle - host.left - width / 2, host.width - width - 4));
        let top = start.top - host.top - height - 8;
        if (top < 4) top = end.bottom - host.top + 8;
        this.bubbleTarget.style.left = `${left}px`;
        this.bubbleTarget.style.top = `${top}px`;
    }

    // --- slash menu -------------------------------------------------------------------------

    updateSlash() {
        if (!this.hasSlashTarget) return;
        const { $from, empty } = this.editor.state.selection;
        const before = empty && this.editor.isFocused ? $from.parent.textBetween(0, $from.parentOffset, null, '\ufffc') : '';
        const found = /(?:^|\s)\/([\w-]*)$/.exec(before);
        if (!found || (this.slashDismissed === $from.pos - found[1].length - 1)) {
            if (!found) this.slashDismissed = null;
            this.closeSlash();
            return;
        }
        const query = found[1].toLowerCase();
        const match = { query, from: $from.pos - found[1].length - 1, to: $from.pos };
        const visible = this.slashItemTargets.filter((item) => {
            const show = (item.dataset.slashText ?? '').toLowerCase().includes(query);
            item.hidden = !show;
            return show;
        });
        if (this.slashMatch?.query !== query) this.slashIndex = 0;
        this.slashMatch = match;
        this.slashVisible = visible;
        this.slashIndex = Math.min(this.slashIndex ?? 0, Math.max(visible.length - 1, 0));
        visible.forEach((item, index) => item.setAttribute('aria-selected', String(index === this.slashIndex)));
        if (this.hasSlashEmptyTarget) this.slashEmptyTarget.hidden = visible.length > 0;
        const host = this.element.getBoundingClientRect();
        const caret = this.editor.view.coordsAtPos($from.pos);
        this.slashTarget.hidden = false;
        const left = Math.max(4, Math.min(caret.left - host.left, host.width - this.slashTarget.offsetWidth - 4));
        this.slashTarget.style.left = `${left}px`;
        this.slashTarget.style.top = `${caret.bottom - host.top + 6}px`;
        const dom = this.editor.view.dom;
        dom.setAttribute('aria-haspopup', 'listbox');
        dom.setAttribute('aria-controls', this.slashTarget.id);
        if (visible[this.slashIndex]) dom.setAttribute('aria-activedescendant', visible[this.slashIndex].id);
        else dom.removeAttribute('aria-activedescendant');
        visible[this.slashIndex]?.scrollIntoView({ block: 'nearest' });
    }

    closeSlash() {
        if (!this.hasSlashTarget) return;
        this.slashMatch = null;
        this.slashTarget.hidden = true;
        this.editor?.view.dom.removeAttribute('aria-activedescendant');
    }

    slashKey(event) {
        if (!this.slashMatch || this.slashTarget.hidden) return false;
        const count = this.slashVisible.length;
        if ('ArrowDown' === event.key || 'ArrowUp' === event.key) {
            if (count) this.slashIndex = (this.slashIndex + ('ArrowDown' === event.key ? 1 : count - 1)) % count;
            this.updateSlash();
        } else if ('Enter' === event.key || 'Tab' === event.key) {
            if (!count) return false;
            this.runSlash(this.slashVisible[this.slashIndex]);
        } else if ('Escape' === event.key) {
            this.slashDismissed = this.slashMatch.from;
            this.closeSlash();
        } else {
            return false;
        }
        event.preventDefault();

        return true;
    }

    slashPick(event) {
        event.preventDefault();
        const item = event.currentTarget;
        if (this.slashMatch) this.runSlash(item);
    }

    runSlash(item) {
        const { from, to } = this.slashMatch;
        const tool = this.tools[item.dataset.slashTool];
        this.closeSlash();
        tool?.run(this.editor.chain().focus().deleteRange({ from, to }), this.editor).run();
    }

    changed(notify) {
        const empty = this.editor.isEmpty;
        const html = empty ? '' : this.editor.getHTML();
        this.fieldTarget.value = html;
        if (!empty) delete this.element.dataset.invalid;
        if (this.hasPlaceholderTarget) this.placeholderTarget.hidden = !empty;
        this.updateCounter();
        if (notify) {
            this.fieldTarget.dispatchEvent(new Event('change', { bubbles: true }));
            this.dispatch('change', { detail: { html, empty } });
        }
    }
}

import { Controller } from '@hotwired/stimulus';

// TipTap is loaded on first use, so pages without an editor never download it.
const TOOLS = {
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
};

/*
 * Rich text editor on TipTap. The hidden field holds the HTML; `rich-text-editor:change` fires on every
 * edit with { html, empty }. The HTML must be sanitized on the server.
 * Toolbar: Left/Right/Home/End move between the tools (roving tabindex).
 */
export default class extends Controller {
    static targets = ['toolbar', 'tool', 'editor', 'field', 'placeholder', 'linkForm', 'linkInput'];
    static values = { value: String, editable: { type: Boolean, default: true }, label: String, id: String };

    async connect() {
        this.fieldTarget.value = this.valueValue;
        const [{ Editor }, { default: StarterKit }] = await Promise.all([import('@tiptap/core'), import('@tiptap/starter-kit')]);
        if (!this.element.isConnected) return;
        this.editor = new Editor({
            element: this.editorTarget,
            extensions: [StarterKit.configure({ link: { openOnClick: false, autolink: true } })],
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
            },
            onUpdate: () => this.changed(true),
            onTransaction: () => this.refresh(),
        });
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
    }

    disconnect() {
        this.form?.removeEventListener('reset', this.onReset);
        this.fieldTarget.removeEventListener('invalid', this.onInvalid);
        this.editor?.destroy();
    }

    // --- toolbar ----------------------------------------------------------------------------

    command(event) {
        if (!this.editor) return;
        const tool = event.params.tool;
        if ('link' === tool) {
            this.toggleLinkForm();

            return;
        }
        TOOLS[tool].run(this.editor.chain().focus()).run();
    }

    toggleLinkForm() {
        if (!this.linkFormTarget.hidden) {
            this.closeLinkForm();

            return;
        }
        this.linkFormTarget.hidden = false;
        this.linkInputTarget.value = this.editor.getAttributes('link').href ?? '';
        this.linkInputTarget.focus();
    }

    closeLinkForm() {
        this.linkFormTarget.hidden = true;
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
        const tools = this.toolTargets.filter((tool) => !tool.disabled);
        const at = tools.indexOf(document.activeElement);
        const next = { ArrowRight: at + 1, ArrowLeft: at - 1, Home: 0, End: tools.length - 1 }[event.key];
        if (undefined === next || at < 0) return;
        event.preventDefault();
        tools[(next + tools.length) % tools.length].focus();
    }

    // --- state ------------------------------------------------------------------------------

    refresh() {
        if (!this.editor || !this.hasToolbarTarget) return;
        let focusable = null;
        this.toolTargets.forEach((button) => {
            const tool = TOOLS[button.dataset.tool];
            button.disabled = !tool.can(this.editor);
            button.setAttribute('aria-pressed', String(tool.active(this.editor)));
            if (!button.disabled && !focusable) focusable = button;
        });
        // Roving tabindex: one tool in the tab order, the focused one when the focus is in the toolbar.
        const current = this.toolTargets.includes(document.activeElement) ? document.activeElement : (this.toolTargets.find((button) => '0' === button.getAttribute('tabindex') && !button.disabled) ?? focusable);
        this.toolTargets.forEach((button) => button.setAttribute('tabindex', button === current ? '0' : '-1'));
    }

    changed(notify) {
        const empty = this.editor.isEmpty;
        const html = empty ? '' : this.editor.getHTML();
        this.fieldTarget.value = html;
        if (!empty) delete this.element.dataset.invalid;
        if (this.hasPlaceholderTarget) this.placeholderTarget.hidden = !empty;
        if (notify) {
            this.fieldTarget.dispatchEvent(new Event('change', { bubbles: true }));
            this.dispatch('change', { detail: { html, empty } });
        }
    }
}

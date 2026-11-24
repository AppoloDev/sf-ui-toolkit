# Rich Text Editor

> Rich text field built on TipTap with a configurable toolbar, links and an HTML value for the form.

## Installation

- button
- input
- popover

## Usage

The toolbar is the slot: one `RichTextEditor:Tool` per button, in order, and `RichTextEditor:Separator` between groups. Without any tool there is no toolbar. Each tool needs a `label` (its accessible name and tooltip), so the texts are yours to translate. The submitted value is HTML: sanitize it on the server.

```twig
<twig:RichTextEditor name="body" value="<p>Hello</p>">
    <twig:RichTextEditor:Tool name="bold" label="Bold" />
    <twig:RichTextEditor:Tool name="italic" label="Italic" />
</twig:RichTextEditor>
```

## Examples

### Basic

This toolbar has bold, italic, underline, strikethrough, two heading levels, lists, quote, code block, link, undo and redo. The usual shortcuts work (`Ctrl`/`Cmd` + `B`, `I`, `U`, `Z`).

```twig
<twig:RichTextEditor name="body" placeholder="Write something…" value="<h2>Release notes</h2><p>The editor supports <strong>bold</strong>, <em>italic</em> and <a href='https://symfony.com'>links</a>.</p><ul><li>Lists</li><li>Quotes</li></ul>">
    <twig:RichTextEditor:Tool name="bold" label="Bold" />
    <twig:RichTextEditor:Tool name="italic" label="Italic" />
    <twig:RichTextEditor:Tool name="underline" label="Underline" />
    <twig:RichTextEditor:Tool name="strike" label="Strikethrough" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="heading2" label="Heading 2" />
    <twig:RichTextEditor:Tool name="heading3" label="Heading 3" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="bulletList" label="Bulleted list" />
    <twig:RichTextEditor:Tool name="orderedList" label="Numbered list" />
    <twig:RichTextEditor:Tool name="blockquote" label="Quote" />
    <twig:RichTextEditor:Tool name="codeBlock" label="Code block" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="link" label="Link">
        <twig:RichTextEditor:LinkForm />
    </twig:RichTextEditor:Tool>
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="undo" label="Undo" />
    <twig:RichTextEditor:Tool name="redo" label="Redo" />
</twig:RichTextEditor>
```

### Custom toolbar

Put `RichTextEditor:Tool` elements in the slot to set the buttons in order, and `RichTextEditor:Separator` between groups (without any, there is no toolbar). Built-in tools: `bold`, `italic`, `underline`, `strike`, `heading2`, `heading3`, `bulletList`, `orderedList`, `blockquote`, `code`, `codeBlock`, `link`, `undo`, `redo`.

```twig
<twig:RichTextEditor name="comment" minHeight="min-h-24" placeholder="Add a comment…">
    <twig:RichTextEditor:Tool name="bold" label="Bold" />
    <twig:RichTextEditor:Tool name="italic" label="Italic" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="bulletList" label="Bulleted list" />
    <twig:RichTextEditor:Tool name="orderedList" label="Numbered list" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="link" label="Link">
        <twig:RichTextEditor:LinkForm />
    </twig:RichTextEditor:Tool>
</twig:RichTextEditor>
```

### Links

The `link` tool takes a `RichTextEditor:LinkForm` in its slot: the button then opens a popover with a URL field to set or remove the link of the selection (`Enter` applies, `Esc` closes). Any tool can hold a panel the same way.

```twig
<twig:RichTextEditor name="links" value="<p>Select a word and use the link button.</p>" minHeight="min-h-20">
    <twig:RichTextEditor:Tool name="bold" label="Bold" />
    <twig:RichTextEditor:Tool name="link" label="Link">
        <twig:RichTextEditor:LinkForm />
    </twig:RichTextEditor:Tool>
</twig:RichTextEditor>
```

### Required, with a form

`required` blocks the submission while the editor is empty (the editor is focused and outlined), and a form `reset` restores the initial value.

```twig
<form class="grid gap-3" onsubmit="event.preventDefault(); this.querySelector('output').textContent = this.body.value">
    <twig:RichTextEditor name="body" required placeholder="Required" minHeight="min-h-24">
    <twig:RichTextEditor:Tool name="bold" label="Bold" />
    <twig:RichTextEditor:Tool name="italic" label="Italic" />
    <twig:RichTextEditor:Tool name="underline" label="Underline" />
    <twig:RichTextEditor:Tool name="strike" label="Strikethrough" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="heading2" label="Heading 2" />
    <twig:RichTextEditor:Tool name="heading3" label="Heading 3" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="bulletList" label="Bulleted list" />
    <twig:RichTextEditor:Tool name="orderedList" label="Numbered list" />
    <twig:RichTextEditor:Tool name="blockquote" label="Quote" />
    <twig:RichTextEditor:Tool name="codeBlock" label="Code block" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="link" label="Link">
        <twig:RichTextEditor:LinkForm />
    </twig:RichTextEditor:Tool>
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="undo" label="Undo" />
    <twig:RichTextEditor:Tool name="redo" label="Redo" />
</twig:RichTextEditor>
    <div class="flex items-center gap-2">
        <twig:Button type="submit">Submit</twig:Button>
        <twig:Button type="reset" variant="outline">Reset</twig:Button>
    </div>
    <output class="break-all font-mono text-xs text-muted-foreground"></output>
</form>
```

### Read only and disabled

`readonly` shows the content without toolbar or editing; `disabled` also dims it.

```twig
<div class="grid gap-3">
    <twig:RichTextEditor readonly value="<p>Read only: <strong>content</strong> cannot be edited.</p>" minHeight="min-h-12" />
    <twig:RichTextEditor disabled value="<p>Disabled.</p>" minHeight="min-h-12" />
</div>
```

### Custom tools

A tool is added in two places: the toolbar entry (`name`, `icon`, `label`) and its behavior, registered in JavaScript when the editor announces itself. This live example adds a horizontal rule and a "clear formatting" button using commands that StarterKit already provides; see "Extending" below for adding a TipTap extension.

```twig
<script>
    document.addEventListener('rich-text-editor:configure', (event) => {
        if (!event.target.matches('[data-example="custom-tools"]')) return;
        event.detail.tools.horizontalRule = {
            run: (chain) => chain.setHorizontalRule(),
            can: (editor) => editor.can().setHorizontalRule(),
        };
        event.detail.tools.clearFormat = {
            run: (chain) => chain.unsetAllMarks().clearNodes(),
        };
    });
</script>
<twig:RichTextEditor data-example="custom-tools" name="custom" minHeight="min-h-24" value="<p>Select some <strong>formatted</strong> text, then clear it.</p>">
    <twig:RichTextEditor:Tool name="bold" label="Bold" />
    <twig:RichTextEditor:Tool name="italic" label="Italic" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="horizontalRule" icon="lucide:minus" label="Horizontal rule" />
    <twig:RichTextEditor:Tool name="clearFormat" icon="lucide:remove-formatting" label="Clear formatting" />
</twig:RichTextEditor>
```

### Translated texts

Every text is a prop: `label` on each tool, and the three texts of the link form.

```twig
<twig:RichTextEditor name="texte" label="Contenu" toolbarLabel="Mise en forme" placeholder="Écrivez ici…" minHeight="min-h-24">
    <twig:RichTextEditor:Tool name="bold" label="Gras" />
    <twig:RichTextEditor:Tool name="italic" label="Italique" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="link" label="Lien">
        <twig:RichTextEditor:LinkForm urlLabel="Adresse du lien" applyLabel="Appliquer" removeLabel="Retirer le lien" />
    </twig:RichTextEditor:Tool>
</twig:RichTextEditor>
```

## Extending

There are two ways to extend the editor, and every example below shows both. With **Vanilla** JavaScript, the editor announces itself with a `rich-text-editor:configure` event before TipTap creates it; the event bubbles from the editor element and carries a `detail` object that listeners fill in: `detail.extensions` (TipTap extensions to add), `detail.tools` (toolbar behaviors, keyed by tool name) and `detail.starterKit` (options merged into `StarterKit.configure()`). Register the listener before the controller connects, for example at the top of `assets/app.js`, and use `event.target` to target a given editor. With **Stimulus**, you subclass the controller in your app, register it under its own name and point the component at it with the `controller` prop: targets, values and actions are inherited, and the component writes its `data-*` attributes with the identifier you give.

A tool is an object with `run(chain, editor)`, which receives a focused TipTap command chain and returns it, plus the optional `active(editor)` (drives `aria-pressed`) and `can(editor)` (disables the button when it returns `false`). The toolbar entry is a mapping in the `tools` prop: `{name, icon, label}`, where `icon` is any Symfony UX Icons name. Entries without a registered tool render disabled.

### Adding a TipTap extension

Install the extension (`php bin/console importmap:require @tiptap/extension-highlight@3.35.0`), then register the extension and its tool. In the Stimulus version, the file is `assets/controllers/rich_text_highlight_controller.js`, registered as `rich-text-highlight`.

```js Vanilla
import Highlight from '@tiptap/extension-highlight';

document.addEventListener('rich-text-editor:configure', (event) => {
    event.detail.extensions.push(Highlight);
    event.detail.tools.highlight = {
        run: (chain) => chain.toggleHighlight(),
        active: (editor) => editor.isActive('highlight'),
        can: (editor) => editor.can().toggleHighlight(),
    };
});
```

```twig Vanilla
<twig:RichTextEditor name="body">
    <twig:RichTextEditor:Tool name="bold" label="Bold" />
    <twig:RichTextEditor:Tool name="italic" label="Italic" />
    <twig:RichTextEditor:Tool name="highlight" icon="lucide:highlighter" label="Highlight" />
</twig:RichTextEditor>
```

```js Stimulus
import Highlight from '@tiptap/extension-highlight';
import RichTextEditor from './rich_text_editor_controller.js';

export default class extends RichTextEditor {
    defineTools(extra) {
        return {
            ...super.defineTools(extra),
            highlight: {
                run: (chain) => chain.toggleHighlight(),
                active: (editor) => editor.isActive('highlight'),
                can: (editor) => editor.can().toggleHighlight(),
            },
        };
    }

    editorOptions(StarterKit, config) {
        const options = super.editorOptions(StarterKit, config);
        options.extensions.push(Highlight);

        return options;
    }
}
```

```twig Stimulus
<twig:RichTextEditor name="body" controller="rich-text-highlight">
    <twig:RichTextEditor:Tool name="bold" label="Bold" />
    <twig:RichTextEditor:Tool name="italic" label="Italic" />
    <twig:RichTextEditor:Tool name="highlight" icon="lucide:highlighter" label="Highlight" />
</twig:RichTextEditor>
```

Extensions add their own HTML (here `<mark>`): style it in your CSS, and allow it in your server-side HTML sanitizer.

### Adding an image

Same pattern with `@tiptap/extension-image` (`php bin/console importmap:require @tiptap/extension-image@3.35.0`). The tool below asks for a URL with a native prompt to stay short; swap it for your own dialog, or for an upload that returns the stored file URL. The prompt text is user-visible, so translate it like any other text.

```js Vanilla
import Image from '@tiptap/extension-image';

document.addEventListener('rich-text-editor:configure', (event) => {
    event.detail.extensions.push(Image.configure({ inline: false }));
    event.detail.tools.image = {
        run: (chain) => {
            const src = window.prompt('Image URL');

            return src ? chain.setImage({ src }) : chain;
        },
        can: (editor) => editor.can().setImage({ src: 'https://' }),
    };
});
```

```twig Vanilla
<twig:RichTextEditor name="body">
    <twig:RichTextEditor:Tool name="bold" label="Bold" />
    <twig:RichTextEditor:Tool name="italic" label="Italic" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="image" icon="lucide:image" label="Image" />
</twig:RichTextEditor>
```

```js Stimulus
import Image from '@tiptap/extension-image';
import RichTextEditor from './rich_text_editor_controller.js';

export default class extends RichTextEditor {
    defineTools(extra) {
        return {
            ...super.defineTools(extra),
            image: {
                run: (chain) => {
                    const src = window.prompt('Image URL');

                    return src ? chain.setImage({ src }) : chain;
                },
                can: (editor) => editor.can().setImage({ src: 'https://' }),
            },
        };
    }

    editorOptions(StarterKit, config) {
        const options = super.editorOptions(StarterKit, config);
        options.extensions.push(Image.configure({ inline: false }));

        return options;
    }
}
```

```twig Stimulus
<twig:RichTextEditor name="body" controller="rich-text-image">
    <twig:RichTextEditor:Tool name="bold" label="Bold" />
    <twig:RichTextEditor:Tool name="italic" label="Italic" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="image" icon="lucide:image" label="Image" />
</twig:RichTextEditor>
```

Style the images in your CSS (for example `max-width: 100%`) and allow `img` with `src` and `alt` in your server-side HTML sanitizer. Do not enable `allowBase64` unless you accept large inline data in the stored HTML.

### Changing the built-in behavior

StarterKit options can tune or switch off built-in features, for example headings limited to one level, or code blocks removed. Removing a feature does not remove its toolbar button: drop it from the `tools` prop too. To replace a built-in tool, register a tool with the same name.

```js Vanilla
document.addEventListener('rich-text-editor:configure', (event) => {
    event.detail.starterKit.heading = { levels: [2] };
    event.detail.starterKit.codeBlock = false;
});
```

```js Stimulus
import RichTextEditor from './rich_text_editor_controller.js';

export default class extends RichTextEditor {
    editorOptions(StarterKit, config) {
        config.starterKit.heading = { levels: [2] };
        config.starterKit.codeBlock = false;

        return super.editorOptions(StarterKit, config);
    }
}
```

### Beyond tools: controller behavior

Behavior that is not a tool, such as a counter or autosave, is a Stimulus-only extension. The controller exports `TOOLS` (the built-in tools) and exposes the hooks `defineTools(extra)` and `editorOptions(StarterKit, config)`, plus the methods `changed(notify)` and `refresh()`; override them and call `super` to keep the default behavior. This example adds a live word counter.

```js
import RichTextEditor from './rich_text_editor_controller.js';

export default class extends RichTextEditor {
    static values = { wordsLabel: { type: String, default: '{count} words' } };

    async connect() {
        await super.connect();
        this.counter = document.createElement('p');
        this.counter.className = 'px-3 pb-2 text-xs text-muted-foreground';
        this.element.append(this.counter);
        this.count();
    }

    changed(notify) {
        super.changed(notify);
        this.count();
    }

    count() {
        if (!this.counter) return;
        const words = this.editor.getText().split(/\s+/).filter(Boolean).length;
        this.counter.textContent = this.wordsLabelValue.replace('{count}', words);
    }
}
```

```twig
<twig:RichTextEditor name="body" controller="rich-text-counter" data-rich-text-counter-words-label-value="{count} mots">
    <twig:RichTextEditor:Tool name="bold" label="Bold" />
    <twig:RichTextEditor:Tool name="italic" label="Italic" />
    <twig:RichTextEditor:Tool name="underline" label="Underline" />
    <twig:RichTextEditor:Tool name="strike" label="Strikethrough" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="heading2" label="Heading 2" />
    <twig:RichTextEditor:Tool name="heading3" label="Heading 3" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="bulletList" label="Bulleted list" />
    <twig:RichTextEditor:Tool name="orderedList" label="Numbered list" />
    <twig:RichTextEditor:Tool name="blockquote" label="Quote" />
    <twig:RichTextEditor:Tool name="codeBlock" label="Code block" />
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="link" label="Link">
        <twig:RichTextEditor:LinkForm />
    </twig:RichTextEditor:Tool>
    <twig:RichTextEditor:Separator />
    <twig:RichTextEditor:Tool name="undo" label="Undo" />
    <twig:RichTextEditor:Tool name="redo" label="Redo" />
</twig:RichTextEditor>
```

The events are named after the controller identifier: with a controller registered as `rich-text-counter`, they are `rich-text-counter:change` and `rich-text-counter:configure`.

## Accessibility

- The writing area is a `textbox` (`aria-multiline`) named by `label`; the toolbar is a `toolbar` named by `toolbarLabel`, with a roving tabindex: `Tab` enters it, `←` / `→` / `Home` / `End` move between tools.
- Toggle tools expose `aria-pressed`, and tools that do not apply to the current selection are disabled.
- The link field is a labelled `url` input in a popover; `Esc` closes it and returns focus to the editor.
- `readonly` and `disabled` editors are not editable.
- TipTap is loaded on first use through a dynamic `import()`, so pages without an editor never download it.
- Events: `rich-text-editor:change` fires on every edit with `detail.html` and `detail.empty`; `rich-text-editor:configure` is the extension point (see Extending).

## API

### `<twig:RichTextEditor>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name. The value is the HTML of the document (empty when the editor is empty). |
| `value` | string | `''` | Initial HTML. |
| `placeholder` | string | `''` | Text shown while the editor is empty. |
| `required` | bool | `false` | The form cannot be submitted while the editor is empty. |
| `readonly` | bool | `false` | Shows the content without editing or toolbar. |
| `disabled` | bool | `false` | Dims the editor and disables it. |
| `minHeight` | string | `min-h-40` | Tailwind class for the minimum height of the writing area. |
| `label` | string | `Content` | Accessible name of the writing area. |
| `toolbarLabel` | string | `Formatting` | Accessible name of the toolbar. |
| `id` | string | `null` | Id of the writing area, for an external `<label for>`. |
| `controller` | string | `rich-text-editor` | Stimulus identifier. Set it to use a controller that extends this one (see Extending). |

### `<twig:RichTextEditor:Tool>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | | Built-in tool (`bold`, `italic`, `underline`, `strike`, `heading2`, `heading3`, `bulletList`, `orderedList`, `blockquote`, `code`, `codeBlock`, `link`, `undo`, `redo`) or the name of a tool registered in JavaScript. |
| `icon` | string | `null` | Symfony UX Icon name. Built-in tools have one; a custom tool needs it. |
| `label` | string | | Accessible name and tooltip. |

### `<twig:RichTextEditor:Separator>`

No prop. A vertical line between groups of tools.

The default slot is optional: when it has content, the button opens a popover holding it.

### `<twig:RichTextEditor:LinkForm>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `urlLabel` | string | `Link URL` | Accessible name of the URL field. |
| `applyLabel` | string | `Apply` | Text of the apply button. |
| `removeLabel` | string | `Remove link` | Text of the remove button. |

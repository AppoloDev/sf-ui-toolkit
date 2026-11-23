# Rich Text Editor

> Rich text field built on TipTap with a configurable toolbar, links and an HTML value for the form.

## Usage

The editor needs two JavaScript packages: with AssetMapper, run `php bin/console importmap:require @tiptap/core@3.35.0 @tiptap/starter-kit@3.35.0`. Then use it like any form field. The submitted value is the HTML of the document: sanitize it on the server (for example with `symfony/html-sanitizer`) before storing or displaying it.

```twig
<twig:RichTextEditor name="body" value="<p>Hello</p>" />
```

## Examples

### Basic

The default toolbar has bold, italic, underline, strikethrough, two heading levels, lists, quote, code block, link, undo and redo. The usual shortcuts work (`Ctrl`/`Cmd` + `B`, `I`, `U`, `Z`).

```twig
<twig:RichTextEditor name="body" placeholder="Write something…" value="<h2>Release notes</h2><p>The editor supports <strong>bold</strong>, <em>italic</em> and <a href='https://symfony.com'>links</a>.</p><ul><li>Lists</li><li>Quotes</li></ul>" />
```

### Custom toolbar

`tools` sets the buttons in order; `|` separates groups. Available tools: `bold`, `italic`, `underline`, `strike`, `heading2`, `heading3`, `bulletList`, `orderedList`, `blockquote`, `code`, `codeBlock`, `link`, `undo`, `redo`.

```twig
<twig:RichTextEditor name="comment" :tools="['bold', 'italic', '|', 'bulletList', 'orderedList', '|', 'link']" minHeight="min-h-24" placeholder="Add a comment…" />
```

### Links

The link button opens a small field under the toolbar to set or remove the link of the selection (`Enter` applies, `Esc` closes).

```twig
<twig:RichTextEditor name="links" :tools="['bold', 'link']" value="<p>Select a word and use the link button.</p>" minHeight="min-h-20" />
```

### Required, with a form

`required` blocks the submission while the editor is empty (the editor is focused and outlined), and a form `reset` restores the initial value.

```twig
<form class="grid gap-3" onsubmit="event.preventDefault(); this.querySelector('output').textContent = this.body.value">
    <twig:RichTextEditor name="body" required placeholder="Required" minHeight="min-h-24" />
    <div class="flex items-center gap-2">
        <button type="submit" class="h-9 rounded-md bg-primary px-4 text-sm text-primary-foreground">Submit</button>
        <button type="reset" class="h-9 rounded-md border border-border px-4 text-sm">Reset</button>
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
<twig:RichTextEditor data-example="custom-tools" name="custom" minHeight="min-h-24" value="<p>Select some <strong>formatted</strong> text, then clear it.</p>"
    :tools="['bold', 'italic', '|', {name: 'horizontalRule', icon: 'lucide:minus', label: 'Horizontal rule'}, {name: 'clearFormat', icon: 'lucide:remove-formatting', label: 'Clear formatting'}]" />
```

### Translated texts

The accessible names of the tools come from `toolLabels` (the tool names, plus `linkUrl`, `linkApply` and `linkRemove`); only the keys you pass are replaced.

```twig
<twig:RichTextEditor name="texte" label="Contenu" toolbarLabel="Mise en forme" placeholder="Écrivez ici…" minHeight="min-h-24"
    :tools="['bold', 'italic', '|', 'link']"
    :toolLabels="{bold: 'Gras', italic: 'Italique', link: 'Lien', linkUrl: 'Adresse du lien', linkApply: 'Appliquer', linkRemove: 'Retirer le lien'}" />
```

## Extending

The editor announces itself with a `rich-text-editor:configure` event before TipTap creates it. The event bubbles from the editor element and carries a `detail` object that listeners fill in: `detail.extensions` (TipTap extensions to add), `detail.tools` (toolbar behaviors, keyed by tool name) and `detail.starterKit` (options merged into `StarterKit.configure()`). Register the listener before the controller connects, for example at the top of `assets/app.js`. Use `event.target` to target a given editor (a `data-` attribute works well).

A tool is an object with `run(chain, editor)`, which receives a focused TipTap command chain and returns it, plus the optional `active(editor)` (drives `aria-pressed`) and `can(editor)` (disables the button when it returns `false`). The toolbar entry is a mapping in the `tools` prop: `{name, icon, label}`, where `icon` is any Symfony UX Icons name. Entries without a registered tool render disabled.

### Adding a TipTap extension

Install the extension (`php bin/console importmap:require @tiptap/extension-highlight@3.35.0`), then register the extension and its tool:

```js
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

```twig
<twig:RichTextEditor name="body" :tools="['bold', 'italic', {name: 'highlight', icon: 'lucide:highlighter', label: 'Highlight'}]" />
```

Extensions add their own HTML (here `<mark>`): style it in your CSS, and allow it in your server-side HTML sanitizer.

### Adding an image

Same pattern with `@tiptap/extension-image` (`php bin/console importmap:require @tiptap/extension-image@3.35.0`). The tool below asks for a URL with a native prompt to stay short; swap it for your own dialog, or for an upload that returns the stored file URL. The prompt text is user-visible, so translate it like any other text.

```js
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

```twig
<twig:RichTextEditor name="body" :tools="['bold', 'italic', '|', {name: 'image', icon: 'lucide:image', label: 'Image'}]" />
```

Style the images in your CSS (for example `max-width: 100%`) and allow `img` with `src` and `alt` in your server-side HTML sanitizer. Do not enable `allowBase64` unless you accept large inline data in the stored HTML.

### Extending the Stimulus controller

For behavior that is more than a tool, subclass the controller in your app. Create `assets/controllers/rich_text_counter_controller.js` (it is registered as `rich-text-counter` by the Stimulus bundle) and point the component at it with the `controller` prop. Targets, values and actions are inherited, and the component writes its `data-*` attributes with the identifier you give.

The controller exports `TOOLS` (the built-in tools) and exposes two hooks, `defineTools(extra)` and `editorOptions(StarterKit, config)`, plus the methods `changed(notify)` and `refresh()`; override them and call `super` to keep the default behavior. This example adds a live word counter and a tool of its own:

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

    defineTools(extra) {
        return { ...super.defineTools(extra), clearFormat: { run: (chain) => chain.unsetAllMarks().clearNodes() } };
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
<twig:RichTextEditor name="body" controller="rich-text-counter" data-rich-text-counter-words-label-value="{count} mots"
    :tools="['bold', 'italic', {name: 'clearFormat', icon: 'lucide:remove-formatting', label: 'Clear formatting'}]" />
```

The events are named after the controller identifier: with the example above they are `rich-text-counter:change` and `rich-text-counter:configure`.

### Changing the built-in behavior

`detail.starterKit` is passed to `StarterKit.configure()`, so built-in features can be tuned or switched off, for example headings limited to one level, or code blocks removed:

```js
document.addEventListener('rich-text-editor:configure', (event) => {
    event.detail.starterKit.heading = { levels: [2] };
    event.detail.starterKit.codeBlock = false;
});
```

Removing a feature does not remove its toolbar button: drop it from the `tools` prop too. To replace a built-in tool, register a tool with the same name in `detail.tools`.

## Accessibility

- The writing area is a `textbox` (`aria-multiline`) named by `label`; the toolbar is a `toolbar` named by `toolbarLabel`, with a roving tabindex: `Tab` enters it, `←` / `→` / `Home` / `End` move between tools.
- Toggle tools expose `aria-pressed`, and tools that do not apply to the current selection are disabled.
- The link field is a labelled `url` input; `Esc` closes it and returns focus to the editor.
- `readonly` and `disabled` editors are not editable.
- TipTap is loaded on first use through a dynamic `import()`, so pages without an editor never download it.
- Events: `rich-text-editor:change` fires on every edit with `detail.html` and `detail.empty`; `rich-text-editor:configure` is the extension point (see Extending).

## API

### `<twig:RichTextEditor>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name. The value is the HTML of the document (empty when the editor is empty). |
| `value` | string | `''` | Initial HTML. |
| `tools` | array | bold, italic, underline, strike, heading2, heading3, lists, blockquote, codeBlock, link, undo, redo | Toolbar, in order. A vertical bar entry splits the groups; a mapping `{name, icon, label}` adds a custom tool (see Extending). |
| `placeholder` | string | `''` | Text shown while the editor is empty. |
| `required` | bool | `false` | The form cannot be submitted while the editor is empty. |
| `readonly` | bool | `false` | Shows the content without editing or toolbar. |
| `disabled` | bool | `false` | Dims the editor and disables it. |
| `minHeight` | string | `min-h-40` | Tailwind class for the minimum height of the writing area. |
| `label` | string | `Content` | Accessible name of the writing area. |
| `toolbarLabel` | string | `Formatting` | Accessible name of the toolbar. |
| `toolLabels` | object | `{}` | Accessible names of the tools, keyed by tool name, plus `linkUrl`, `linkApply` and `linkRemove`. |
| `id` | string | `null` | Id of the writing area, for an external `<label for>`. |
| `controller` | string | `rich-text-editor` | Stimulus identifier. Set it to use a controller that extends this one (see Extending). |

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

`required` blocks the submission while the editor is empty, and a form `reset` restores the initial value.

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

### Translated texts

The accessible names of the tools come from `toolLabels` (the tool names, plus `linkUrl`, `linkApply` and `linkRemove`); only the keys you pass are replaced.

```twig
<twig:RichTextEditor name="texte" label="Contenu" toolbarLabel="Mise en forme" placeholder="Écrivez ici…" minHeight="min-h-24"
    :tools="['bold', 'italic', '|', 'link']"
    :toolLabels="{bold: 'Gras', italic: 'Italique', link: 'Lien', linkUrl: 'Adresse du lien', linkApply: 'Appliquer', linkRemove: 'Retirer le lien'}" />
```

## Accessibility

- The writing area is a `textbox` (`aria-multiline`) named by `label`; the toolbar is a `toolbar` named by `toolbarLabel`, with a roving tabindex: `Tab` enters it, `←` / `→` / `Home` / `End` move between tools.
- Toggle tools expose `aria-pressed`, and tools that do not apply to the current selection are disabled.
- The link field is a labelled `url` input; `Esc` closes it and returns focus to the editor.
- `readonly` and `disabled` editors are not editable.
- TipTap is loaded on first use through a dynamic `import()`, so pages without an editor never download it.
- Event: `rich-text-editor:change` fires on every edit with `detail.html` and `detail.empty`.

## API

### `<twig:RichTextEditor>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name. The value is the HTML of the document (empty when the editor is empty). |
| `value` | string | `''` | Initial HTML. |
| `tools` | array | bold, italic, underline, strike, heading2, heading3, lists, blockquote, codeBlock, link, undo, redo | Toolbar, in order. A vertical bar entry splits the groups (see the examples). |
| `placeholder` | string | `''` | Text shown while the editor is empty. |
| `required` | bool | `false` | The form cannot be submitted while the editor is empty. |
| `readonly` | bool | `false` | Shows the content without editing or toolbar. |
| `disabled` | bool | `false` | Dims the editor and disables it. |
| `minHeight` | string | `min-h-40` | Tailwind class for the minimum height of the writing area. |
| `label` | string | `Content` | Accessible name of the writing area. |
| `toolbarLabel` | string | `Formatting` | Accessible name of the toolbar. |
| `toolLabels` | object | `{}` | Accessible names of the tools, keyed by tool name, plus `linkUrl`, `linkApply` and `linkRemove`. |
| `id` | string | `null` | Id of the writing area, for an external `<label for>`. |

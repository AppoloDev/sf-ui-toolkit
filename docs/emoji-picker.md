# Emoji Picker

> Searchable emoji grid in a popover or inline, with categories, skin tones and recents.

## Usage

```twig
<twig:EmojiPicker name="reaction" />
```

## Examples

### Popover

The trigger shows the chosen emoji. Search ranks by name, tag and shortcode; `↓` goes from the search field into the grid and `Enter` picks. The emoji data (emojibase, MIT) is loaded once per page the first time a picker opens.

<!-- height: 460 -->

```twig
<twig:EmojiPicker name="reaction" value="👍" />
```

### Inline

`inline` renders the picker in place, for example in a card or a side panel.

```twig
<twig:EmojiPicker inline name="status_emoji" />
```

### Language

`locale` sets the language of the names and the search (an emojibase locale: `fr`, `de`, `es`, `ja`...). Pass the texts of the picker in the same language.

<!-- height: 460 -->

```twig
<twig:EmojiPicker name="humeur" locale="fr" placeholder="Choisir un emoji" searchLabel="Rechercher un emoji" emptyLabel="Aucun emoji trouvé." categoriesLabel="Catégories" skinToneLabel="Teinte de peau" recentLabel="Récents" clearLabel="Retirer" label="Sélecteur d'emoji" />
```

### Wider grid and disabled

```twig
<div class="flex gap-3">
    <twig:EmojiPicker name="wide" :columns="10" />
    <twig:EmojiPicker name="locked" value="🔒" disabled />
</div>
```

## Accessibility

- The trigger is a button with `aria-haspopup` and `aria-expanded`; the picker is a dialog (a group when `inline`). `Esc` closes it and returns focus to the trigger.
- The search field drives a `listbox` of emoji buttons, each named by its annotation; `Enter` in the search field picks the top result and result counts are announced through a polite live region.
- Category tabs form a `tablist` with roving focus (`←` / `→`, `Home`, `End`); the skin tone is a native `select`.
- Emoji hidden behind a skin tone follow the chosen tone, saved in `localStorage` and shared by the pickers of the page.
- The emoji files come from a CDN by default (`dataUrl`): for a strict CSP or an offline app, serve the `emojibase-data` files yourself.
- Event: `emoji-picker:select` fires with `detail.emoji` and `detail.name` (empty when removed).

## API

### `<twig:EmojiPicker>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name; the submitted value is the emoji character. |
| `value` | string | `''` | Initial emoji. |
| `locale` | string | `en` | Emojibase locale for names and search. |
| `dataUrl` | string | `https://cdn.jsdelivr.net/npm/emojibase-data@16` | Base URL of the `emojibase-data` files (`<dataUrl>/<locale>/compact.json` and `messages.json`). |
| `inline` | bool | `false` | Render in place instead of a popover. |
| `columns` | int | `8` | Emojis per row. |
| `disabled` | bool | `false` | Disables the trigger. |
| `id` | string | `null` | Id of the trigger, for an external `<label for>`. |
| `recentKey` | string | `emoji-picker-recent` | `localStorage` key of the recents; empty disables them. |
| `placeholder` | string | `Pick an emoji` | Trigger text without a value. |
| `label` | string | `Emoji picker` | Accessible name of the trigger and the picker. |
| `searchLabel` | string | `Search emoji` | Label and placeholder of the search field. |
| `emptyLabel` | string | `No emoji found.` | Text when nothing matches. |
| `categoriesLabel` | string | `Categories` | Accessible name of the category tabs. |
| `skinToneLabel` | string | `Skin tone` | Accessible name of the skin tone select. |
| `recentLabel` | string | `Recent` | Name of the recents tab. |
| `clearLabel` | string | `Remove` | Text of the button that removes the chosen emoji. |

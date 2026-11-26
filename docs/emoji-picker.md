# Emoji Picker

> Searchable emoji grid in a popover or inline, with categories, skin tones and recents.

## Installation

- popover
- button
- input
- native-select

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

### With an external label

`label` is the accessible name of the trigger and is not displayed. For a visible label, compose the picker with the shadcn `Field` and point the label at `id`.

<!-- height: 480 -->

```twig
<twig:Field class="w-fit">
    <twig:Field:Label for="mood">
        Mood
    </twig:Field:Label>
    <twig:EmojiPicker id="mood" name="mood" label="Mood" />
</twig:Field>
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

`columns` sets the number of emojis per row.

<!-- height: 460 -->

```twig
<div class="flex gap-3">
    <twig:EmojiPicker name="wide" :columns="10" />
    <twig:EmojiPicker name="locked" value="🔒" disabled />
</div>
```

### Chat Composer

A message field with the picker in its footer. The `emoji-picker:select` event carries the chosen emoji, which a small script inserts at the cursor.

<!-- height: 480 -->

```twig
<div id="chat-composer" class="max-w-md">
    <twig:InputGroup>
        <twig:InputGroup:Textarea placeholder="Write a message..." data-composer-input />
        <twig:InputGroup:Addon align="block-end">
            <twig:EmojiPicker label="Add an emoji" placeholder="🙂" recentKey="" />
            <twig:InputGroup:Button variant="default" size="sm" class="ms-auto">
                Send
            </twig:InputGroup:Button>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
<script>
    const composer = document.getElementById('chat-composer');
    composer.addEventListener('emoji-picker:select', (event) => {
        const input = composer.querySelector('[data-composer-input]');
        if (!event.detail.emoji) return;
        const start = input.selectionStart ?? input.value.length;
        input.setRangeText(event.detail.emoji, start, input.selectionEnd ?? start, 'end');
        input.focus();
    });
</script>
```

### Message Reactions

Pick a reaction under a message: the first pick adds a chip, picking the same emoji again adds to its count.

<!-- height: 480 -->

```twig
<div id="reactions" class="flex max-w-sm flex-col gap-2">
    <div class="rounded-2xl rounded-bl-sm bg-muted px-4 py-3 text-sm">
        The release is out. Thanks everyone for the late nights!
    </div>
    <div class="flex flex-wrap items-center gap-1.5" data-reaction-list>
        <twig:EmojiPicker label="Add a reaction" placeholder="🙂+" recentKey="" />
    </div>
</div>
<script>
    const reactions = document.getElementById('reactions');
    reactions.addEventListener('emoji-picker:select', (event) => {
        const emoji = event.detail.emoji;
        if (!emoji) return;
        const list = reactions.querySelector('[data-reaction-list]');
        let chip = [...list.querySelectorAll('[data-reaction]')].find((item) => item.dataset.reaction === emoji);
        if (!chip) {
            chip = document.createElement('span');
            chip.dataset.reaction = emoji;
            chip.dataset.count = '0';
            chip.className = 'inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-0.5 text-sm';
            list.prepend(chip);
        }
        chip.dataset.count = String(Number(chip.dataset.count) + 1);
        chip.textContent = emoji + ' ' + chip.dataset.count;
    });
</script>
```

### Page Icon

An emoji as the icon of a page, next to its title: the page header follows the choice.

<!-- height: 480 -->

```twig
<div id="page-icon" class="flex max-w-md flex-col gap-4">
    <div class="flex items-center gap-2">
        <twig:EmojiPicker name="icon" value="📘" label="Page icon" recentKey="" />
        <twig:Input name="title" value="Product handbook" aria-label="Page title" />
    </div>
    <div class="flex items-center gap-2 border-t border-border pt-3 text-lg font-semibold">
        <span data-page-icon>📘</span>
        <span>Product handbook</span>
    </div>
</div>
<script>
    const pageIcon = document.getElementById('page-icon');
    pageIcon.addEventListener('emoji-picker:select', (event) => {
        pageIcon.querySelector('[data-page-icon]').textContent = event.detail.emoji || '📄';
    });
</script>
```

### Custom Team Emoji

The `custom` prop adds a category of your own images. Their value is a shortcode such as `:lgtm:`, and the picker shows the image in its trigger.

<!-- height: 480 -->

```twig
<twig:EmojiPicker
    name="reaction"
    value=":lgtm:"
    customLabel="Team"
    recentKey=""
    :custom="[{name: 'lgtm', url: 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Crect width=%2732%27 height=%2732%27 rx=%278%27 fill=%27%2316a34a%27/%3E%3Ctext x=%2716%27 y=%2721%27 text-anchor=%27middle%27 font-family=%27sans-serif%27 font-size=%2711%27 font-weight=%27700%27 fill=%27white%27%3EOK%3C/text%3E%3C/svg%3E'}, {name: 'wip', url: 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Crect width=%2732%27 height=%2732%27 rx=%278%27 fill=%27%23f59e0b%27/%3E%3Ctext x=%2716%27 y=%2721%27 text-anchor=%27middle%27 font-family=%27sans-serif%27 font-size=%2711%27 font-weight=%27700%27 fill=%27white%27%3EWIP%3C/text%3E%3C/svg%3E'}, {name: 'ship', url: 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Crect width=%2732%27 height=%2732%27 rx=%278%27 fill=%27%232563eb%27/%3E%3Ctext x=%2716%27 y=%2721%27 text-anchor=%27middle%27 font-family=%27sans-serif%27 font-size=%2711%27 font-weight=%27700%27 fill=%27white%27%3EGO%3C/text%3E%3C/svg%3E'}, {name: 'bug', url: 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Crect width=%2732%27 height=%2732%27 rx=%278%27 fill=%27%23dc2626%27/%3E%3Ctext x=%2716%27 y=%2721%27 text-anchor=%27middle%27 font-family=%27sans-serif%27 font-size=%2711%27 font-weight=%27700%27 fill=%27white%27%3EBUG%3C/text%3E%3C/svg%3E'}]"
/>
```

### Shortcode Suggestions

The search field also understands shortcodes: type `:tada`, `:fire` or `thumbs` and the matching emoji come first. Open the picker and try it.

<!-- height: 480 -->

```twig
<div class="flex max-w-xs flex-col gap-2">
    <twig:EmojiPicker label="Emoji by shortcode" placeholder="Type :tada: in the search" searchLabel="Search or type :shortcode:" recentKey="" />
    <p class="text-sm text-muted-foreground">
        Try <code>:tada</code>, <code>:fire</code> or <code>:rocket</code> in the search field.
    </p>
</div>
```

### Workplace-Safe Set

A smaller set for a professional tool: only a few categories, and a list of emoji removed from them.

<!-- height: 480 -->

```twig
<twig:EmojiPicker
    name="reaction"
    placeholder="Pick a reaction"
    recentKey=""
    :groups="['smileys-emotion', 'people-body', 'objects', 'symbols']"
    :exclude="['🍺', '🔫', '💣', '🔪', '🍆', '🍑', '🚬', '💊', '🖕', '😈', '👿', '💩']"
/>
```

### In Form

The picker submits the emoji character under its `name`, like any other field.

<!-- height: 480 -->

```twig
<form class="grid w-full max-w-sm gap-4" onsubmit="event.preventDefault(); document.getElementById('emoji-form-out').textContent = 'Submitted: ' + new FormData(this).get('mood');">
    <twig:Field>
        <twig:Field:Label for="emoji-form-mood">
            How do you feel today?
        </twig:Field:Label>
        <twig:EmojiPicker id="emoji-form-mood" name="mood" label="Mood" recentKey="" />
        <twig:Field:Description>
            Pick the emoji that fits your mood.
        </twig:Field:Description>
    </twig:Field>
    <div class="flex items-center gap-3">
        <twig:Button type="submit">
            Save
        </twig:Button>
        <span id="emoji-form-out" class="text-sm text-muted-foreground"></span>
    </div>
</form>
```

### Text Trigger

Without a value, `placeholder` is the text of the trigger.

<!-- height: 480 -->

```twig
<twig:EmojiPicker name="reaction" placeholder="Add an emoji" label="Add an emoji" recentKey="" />
```

### With Display

The chosen emoji and its name are shown next to the picker, read from the `emoji-picker:select` event.

<!-- height: 480 -->

```twig
<div id="emoji-display" class="flex items-center gap-4">
    <twig:EmojiPicker name="icon" label="Choose an emoji" recentKey="" />
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media>
            <span class="text-3xl" data-display-emoji>
                ❔
            </span>
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title data-display-name>
                Nothing chosen
            </twig:Item:Title>
        </twig:Item:Content>
    </twig:Item>
</div>
<script>
    document.getElementById('emoji-display').addEventListener('emoji-picker:select', (event) => {
        document.querySelector('#emoji-display [data-display-emoji]').textContent = event.detail.emoji || '❔';
        document.querySelector('#emoji-display [data-display-name]').textContent = event.detail.name || 'Nothing chosen';
    });
</script>
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
| `groups` | list | `[]` | Emojibase group keys to keep (`smileys-emotion`, `people-body`, `animals-nature`, `food-drink`, `travel-places`, `activities`, `objects`, `symbols`, `flags`). Empty keeps all. |
| `exclude` | list | `[]` | Emoji characters to hide. |
| `custom` | list | `[]` | Images added as an extra category, each as an object with `name` and `url`. The submitted value of a custom emoji is `:name:`. |
| `customLabel` | string | `Custom` | Name of the custom category. |
| `placeholder` | string | `Pick an emoji` | Trigger text without a value. |
| `label` | string | `Emoji picker` | Accessible name of the trigger and the picker. |
| `searchLabel` | string | `Search emoji` | Label and placeholder of the search field. |
| `emptyLabel` | string | `No emoji found.` | Text when nothing matches. |
| `categoriesLabel` | string | `Categories` | Accessible name of the category tabs. |
| `skinToneLabel` | string | `Skin tone` | Accessible name of the skin tone select. |
| `recentLabel` | string | `Recent` | Name of the recents tab. |
| `clearLabel` | string | `Remove` | Text of the button that removes the chosen emoji. |

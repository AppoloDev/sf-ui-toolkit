# Speed Dial

> A floating action button that fans out a few actions: direction up, down, left or right, icons with labels, closes on Escape or an outside click, and can be fixed to a corner of the page.

## Usage

```twig
<twig:SpeedDial :fixed="true">
    <twig:SpeedDial:Action label="Add" icon="lucide:plus" />
    <twig:SpeedDial:Action label="Share" icon="lucide:share-2" href="/share" />
</twig:SpeedDial>
```

## Examples

### Basic

Click the button: the actions open above it. Escape, an outside click or a choice closes it.

<!-- height: 300 -->

```twig
<div class="flex h-64 items-center justify-center">
<twig:SpeedDial class="mt-40">
    <twig:SpeedDial:Action label="Add" icon="lucide:plus" />
    <twig:SpeedDial:Action label="Edit" icon="lucide:pencil" />
    <twig:SpeedDial:Action label="Share" icon="lucide:share-2" />
    <twig:SpeedDial:Action label="Delete" icon="lucide:trash-2" />
</twig:SpeedDial>
</div>
```

### Directions

`direction`: up, down, left or right.

<!-- height: 340 -->

```twig
<div class="grid h-72 grid-cols-4 place-items-center">
    <twig:SpeedDial direction="up" class="mt-40">
        <twig:SpeedDial:Action label="Add" icon="lucide:plus" />
        <twig:SpeedDial:Action label="Edit" icon="lucide:pencil" />
        <twig:SpeedDial:Action label="Share" icon="lucide:share-2" />
        <twig:SpeedDial:Action label="Delete" icon="lucide:trash-2" />
    </twig:SpeedDial>
    <twig:SpeedDial direction="down">
        <twig:SpeedDial:Action label="Add" icon="lucide:plus" />
        <twig:SpeedDial:Action label="Edit" icon="lucide:pencil" />
        <twig:SpeedDial:Action label="Share" icon="lucide:share-2" />
        <twig:SpeedDial:Action label="Delete" icon="lucide:trash-2" />
    </twig:SpeedDial>
    <twig:SpeedDial direction="left">
        <twig:SpeedDial:Action label="Add" icon="lucide:plus" />
        <twig:SpeedDial:Action label="Edit" icon="lucide:pencil" />
        <twig:SpeedDial:Action label="Share" icon="lucide:share-2" />
        <twig:SpeedDial:Action label="Delete" icon="lucide:trash-2" />
    </twig:SpeedDial>
    <twig:SpeedDial direction="right">
        <twig:SpeedDial:Action label="Add" icon="lucide:plus" />
        <twig:SpeedDial:Action label="Edit" icon="lucide:pencil" />
        <twig:SpeedDial:Action label="Share" icon="lucide:share-2" />
        <twig:SpeedDial:Action label="Delete" icon="lucide:trash-2" />
    </twig:SpeedDial>
</div>
```

### Links

An action with `href` is a link.

<!-- height: 300 -->

```twig
<div class="flex h-64 items-center justify-center">
    <twig:SpeedDial class="mt-40">
        <twig:SpeedDial:Action label="Documentation" icon="lucide:book-open" href="#docs" />
        <twig:SpeedDial:Action label="Support" icon="lucide:life-buoy" href="#support" />
    </twig:SpeedDial>
</div>
```

### Custom Icons

`icon` and `openIcon` change the button.

<!-- height: 300 -->

```twig
<div class="flex h-64 items-center justify-center">
    <twig:SpeedDial icon="lucide:sparkles" openIcon="lucide:chevron-down" class="mt-40">
        <twig:SpeedDial:Action label="Magic" icon="lucide:wand-sparkles" />
        <twig:SpeedDial:Action label="Idea" icon="lucide:lightbulb" />
    </twig:SpeedDial>
</div>
```

### Fixed To A Corner

`fixed` pins it to a corner of the page; `position` chooses which. In a docs preview the page is the preview itself.

<!-- height: 300 -->

```twig
<twig:SpeedDial :fixed="true" position="bottom-right">
    <twig:SpeedDial:Action label="Add" icon="lucide:plus" />
    <twig:SpeedDial:Action label="Edit" icon="lucide:pencil" />
    <twig:SpeedDial:Action label="Share" icon="lucide:share-2" />
    <twig:SpeedDial:Action label="Delete" icon="lucide:trash-2" />
</twig:SpeedDial>
```

### Listening To Choices

`speed-dial:pick` carries the label of the action.

<!-- height: 320 -->

```twig
<div id="sd-events" class="flex h-64 items-center justify-center gap-6">
    <twig:SpeedDial class="mt-40">
        <twig:SpeedDial:Action label="Add" icon="lucide:plus" />
        <twig:SpeedDial:Action label="Edit" icon="lucide:pencil" />
        <twig:SpeedDial:Action label="Share" icon="lucide:share-2" />
        <twig:SpeedDial:Action label="Delete" icon="lucide:trash-2" />
    </twig:SpeedDial>
    <p class="text-sm text-muted-foreground">
        Last action: <code id="sd-events-out">none</code>
    </p>
</div>
<script>
    document.getElementById('sd-events').addEventListener('speed-dial:pick', (event) => {
        document.getElementById('sd-events-out').textContent = event.detail.label;
    });
</script>
```

## Accessibility

- The button has an accessible name and announces `aria-expanded`; the actions are a menu: arrow keys move between them, Escape closes and returns the focus to the button.
- Every action has an `aria-label` and a `title`; give clear names.
- Keep it to a few actions, and keep important actions reachable elsewhere too.

## Extending

- `speed-dial:open` and `speed-dial:close`.
- `speed-dial:pick` when an action is used: `detail.label`.

## API

### `<twig:SpeedDial>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `up`, `down`, `left`, `right` | `up` | Where the actions open. |
| `icon` | string | `lucide:plus` | The icon of the button. |
| `openIcon` | string | `lucide:x` | The icon while open. |
| `label` | string | `Actions` | The accessible name of the button. |
| `position` | `bottom-right`, `bottom-left`, `top-right`, `top-left` | `bottom-right` | The corner used with `fixed`. |
| `fixed` | bool | `false` | Pin the button to a corner of the page. |

| Block | Description |
| --- | --- |
| `default` | The `SpeedDial:Action` elements. |

### `<twig:SpeedDial:Action>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | string | | The name of the action. |
| `icon` | string | | A Symfony UX Icons name. |
| `href` | string or null | `null` | A link. Without it, a button. |

| Block | Description |
| --- | --- |
| `default` | Not used. |

# Sortable

> Reorderable list or grid: drag and drop on a handle, full keyboard reordering, and the order submitted with the form.

## Usage

```twig
<twig:Sortable name="priorities" class="flex flex-col gap-2">
    <twig:Sortable:Item value="design">
        <twig:Sortable:Handle />
        Design
    </twig:Sortable:Item>
    <twig:Sortable:Item value="build">
        <twig:Sortable:Handle />
        Build
    </twig:Sortable:Item>
</twig:Sortable>
```

## Examples

### Vertical list

Drag an item by its handle. The order is reported by the `sortable:change` event, which fires once per drop.

```twig
<twig:Sortable class="flex max-w-sm flex-col gap-2" id="vertical-list">
    <twig:Sortable:Item value="design">
        <twig:Sortable:Handle />
        Design the schema
    </twig:Sortable:Item>
    <twig:Sortable:Item value="build">
        <twig:Sortable:Handle />
        Build the API
    </twig:Sortable:Item>
    <twig:Sortable:Item value="test">
        <twig:Sortable:Handle />
        Write the tests
    </twig:Sortable:Item>
    <twig:Sortable:Item value="ship">
        <twig:Sortable:Handle />
        Ship it
    </twig:Sortable:Item>
</twig:Sortable>
<p class="mt-3 text-sm text-muted-foreground">
    Order:
    <code id="vertical-order">
        design, build, test, ship
    </code>
</p>
<script>
    document.getElementById('vertical-list').addEventListener('sortable:change', (event) => {
        document.getElementById('vertical-order').textContent = event.detail.order.join(', ');
    });
</script>
```

### Grid

The drag logic does not depend on the layout: switching from a list to a grid is only a class change.

```twig
<twig:Sortable class="grid max-w-md grid-cols-3 gap-2">
    <twig:Sortable:Item value="1" class="justify-between">
        <span>
            One
        </span>
        <twig:Sortable:Handle />
    </twig:Sortable:Item>
    <twig:Sortable:Item value="2" class="justify-between">
        <span>
            Two
        </span>
        <twig:Sortable:Handle />
    </twig:Sortable:Item>
    <twig:Sortable:Item value="3" class="justify-between">
        <span>
            Three
        </span>
        <twig:Sortable:Handle />
    </twig:Sortable:Item>
    <twig:Sortable:Item value="4" class="justify-between">
        <span>
            Four
        </span>
        <twig:Sortable:Handle />
    </twig:Sortable:Item>
    <twig:Sortable:Item value="5" class="justify-between">
        <span>
            Five
        </span>
        <twig:Sortable:Handle />
    </twig:Sortable:Item>
    <twig:Sortable:Item value="6" class="justify-between">
        <span>
            Six
        </span>
        <twig:Sortable:Handle />
    </twig:Sortable:Item>
</twig:Sortable>
```

### Submitted with a form

With a `name`, the order is submitted as hidden inputs `priorities[]`, in the displayed order.

```twig
<form method="post" class="max-w-sm space-y-3" onsubmit="event.preventDefault(); this.querySelector('output').textContent = new URLSearchParams(new FormData(this)).toString();">
    <twig:Sortable name="priorities" class="flex flex-col gap-2">
        <twig:Sortable:Item value="speed">
            <twig:Sortable:Handle />
            Speed
        </twig:Sortable:Item>
        <twig:Sortable:Item value="cost">
            <twig:Sortable:Handle />
            Cost
        </twig:Sortable:Item>
        <twig:Sortable:Item value="quality">
            <twig:Sortable:Handle />
            Quality
        </twig:Sortable:Item>
    </twig:Sortable>
    <twig:Button type="submit">
        Submit
    </twig:Button>
    <output class="block break-all text-xs text-muted-foreground">
    </output>
</form>
```

### Nested layout

Lists can be nested: each list moves its own items only, so sections reorder among themselves and the tasks reorder inside their section.

<!-- height: 460 -->
```twig
<twig:Sortable class="flex max-w-md flex-col gap-3" name="sections">
    <twig:Sortable:Item value="backlog" class="block! p-3">
        <div class="mb-2 flex items-center gap-2 font-medium">
            <twig:Sortable:Handle label="Reorder section" />
            Backlog
        </div>
        <twig:Sortable class="flex flex-col gap-2">
            <twig:Sortable:Item value="backlog-1">
                <twig:Sortable:Handle label="Reorder task" />
                Draft the roadmap
            </twig:Sortable:Item>
            <twig:Sortable:Item value="backlog-2">
                <twig:Sortable:Handle label="Reorder task" />
                Interview five customers
            </twig:Sortable:Item>
        </twig:Sortable>
    </twig:Sortable:Item>
    <twig:Sortable:Item value="doing" class="block! p-3">
        <div class="mb-2 flex items-center gap-2 font-medium">
            <twig:Sortable:Handle label="Reorder section" />
            In progress
        </div>
        <twig:Sortable class="flex flex-col gap-2">
            <twig:Sortable:Item value="doing-1">
                <twig:Sortable:Handle label="Reorder task" />
                Build the settings page
            </twig:Sortable:Item>
            <twig:Sortable:Item value="doing-2">
                <twig:Sortable:Handle label="Reorder task" />
                Review the pull request
            </twig:Sortable:Item>
            <twig:Sortable:Item value="doing-3">
                <twig:Sortable:Handle label="Reorder task" />
                Fix the login redirect
            </twig:Sortable:Item>
        </twig:Sortable>
    </twig:Sortable:Item>
    <twig:Sortable:Item value="done" class="block! p-3">
        <div class="mb-2 flex items-center gap-2 font-medium">
            <twig:Sortable:Handle label="Reorder section" />
            Done
        </div>
        <twig:Sortable class="flex flex-col gap-2">
            <twig:Sortable:Item value="done-1">
                <twig:Sortable:Handle label="Reorder task" />
                Set up the repository
            </twig:Sortable:Item>
        </twig:Sortable>
    </twig:Sortable:Item>
</twig:Sortable>
```

### Playlist

An element with `data-sortable-position` shows the position of its item and follows every move.

```twig
<twig:Sortable class="flex max-w-md flex-col gap-1">
    <twig:Sortable:Item value="one" class="border-transparent p-1.5">
        <twig:Sortable:Handle />
        <span class="w-5 text-center text-xs tabular-nums text-muted-foreground" data-sortable-position>1</span>
        <span class="grow">
            Morning Light
            <span class="block text-xs text-muted-foreground">
                The Harbor Lights
            </span>
        </span>
        <span class="text-xs tabular-nums text-muted-foreground">3:42</span>
    </twig:Sortable:Item>
    <twig:Sortable:Item value="two" class="border-transparent p-1.5">
        <twig:Sortable:Handle />
        <span class="w-5 text-center text-xs tabular-nums text-muted-foreground" data-sortable-position>2</span>
        <span class="grow">
            Paper Boats
            <span class="block text-xs text-muted-foreground">
                Mira Vale
            </span>
        </span>
        <span class="text-xs tabular-nums text-muted-foreground">4:05</span>
    </twig:Sortable:Item>
    <twig:Sortable:Item value="three" class="border-transparent p-1.5">
        <twig:Sortable:Handle />
        <span class="w-5 text-center text-xs tabular-nums text-muted-foreground" data-sortable-position>3</span>
        <span class="grow">
            Slow Tide
            <span class="block text-xs text-muted-foreground">
                Oak and Ember
            </span>
        </span>
        <span class="text-xs tabular-nums text-muted-foreground">2:58</span>
    </twig:Sortable:Item>
    <twig:Sortable:Item value="four" class="border-transparent p-1.5">
        <twig:Sortable:Handle />
        <span class="w-5 text-center text-xs tabular-nums text-muted-foreground" data-sortable-position>4</span>
        <span class="grow">
            Night Train
            <span class="block text-xs text-muted-foreground">
                Mira Vale
            </span>
        </span>
        <span class="text-xs tabular-nums text-muted-foreground">5:11</span>
    </twig:Sortable:Item>
</twig:Sortable>
```

### Settings priority

The order is the priority. Each item shows its rank in a `Badge`, and the form submits the order with `name`.

```twig
<form class="grid max-w-md gap-3" onsubmit="event.preventDefault(); this.querySelector('output').textContent = new FormData(this).getAll('priority[]').join(' > ')">
    <twig:Sortable name="priority" class="flex flex-col gap-2">
        <twig:Sortable:Item value="email">
            <twig:Sortable:Handle />
            <twig:Badge variant="secondary" data-sortable-position>1</twig:Badge>
            <span class="grow">Email</span>
            <twig:ux:icon name="lucide:mail" class="size-4 text-muted-foreground" aria-hidden="true" />
        </twig:Sortable:Item>
        <twig:Sortable:Item value="sms">
            <twig:Sortable:Handle />
            <twig:Badge variant="secondary" data-sortable-position>2</twig:Badge>
            <span class="grow">SMS</span>
            <twig:ux:icon name="lucide:message-square" class="size-4 text-muted-foreground" aria-hidden="true" />
        </twig:Sortable:Item>
        <twig:Sortable:Item value="push">
            <twig:Sortable:Handle />
            <twig:Badge variant="secondary" data-sortable-position>3</twig:Badge>
            <span class="grow">Push notification</span>
            <twig:ux:icon name="lucide:bell" class="size-4 text-muted-foreground" aria-hidden="true" />
        </twig:Sortable:Item>
    </twig:Sortable>
    <div class="flex items-center gap-3">
        <twig:Button type="submit">
            Save priority
        </twig:Button>
        <output class="text-sm text-muted-foreground"></output>
    </div>
</form>
```

### Sidebar navigation

A navigation the user can reorder. The links keep working because only the handle starts a drag.

```twig
<nav aria-label="Main" class="w-56">
    <twig:Sortable class="flex flex-col gap-1">
        <twig:Sortable:Item value="home" class="border-transparent p-1">
            <twig:Sortable:Handle class="opacity-0 focus-visible:opacity-100 [[data-sortable-target]:hover_&]:opacity-100" />
            <a href="#" class="flex grow items-center gap-2">
                <twig:ux:icon name="lucide:house" class="size-4" aria-hidden="true" />
                Home
            </a>
        </twig:Sortable:Item>
        <twig:Sortable:Item value="projects" class="border-transparent p-1">
            <twig:Sortable:Handle class="opacity-0 focus-visible:opacity-100 [[data-sortable-target]:hover_&]:opacity-100" />
            <a href="#" class="flex grow items-center gap-2">
                <twig:ux:icon name="lucide:folder" class="size-4" aria-hidden="true" />
                Projects
            </a>
        </twig:Sortable:Item>
        <twig:Sortable:Item value="reports" class="border-transparent p-1">
            <twig:Sortable:Handle class="opacity-0 focus-visible:opacity-100 [[data-sortable-target]:hover_&]:opacity-100" />
            <a href="#" class="flex grow items-center gap-2">
                <twig:ux:icon name="lucide:chart-column" class="size-4" aria-hidden="true" />
                Reports
            </a>
        </twig:Sortable:Item>
        <twig:Sortable:Item value="settings" class="border-transparent p-1">
            <twig:Sortable:Handle class="opacity-0 focus-visible:opacity-100 [[data-sortable-target]:hover_&]:opacity-100" />
            <a href="#" class="flex grow items-center gap-2">
                <twig:ux:icon name="lucide:settings" class="size-4" aria-hidden="true" />
                Settings
            </a>
        </twig:Sortable:Item>
    </twig:Sortable>
</nav>
```

### Image gallery

A grid of tiles with the handle pinned over each one, shown on hover or focus.

```twig
<twig:Sortable class="grid max-w-md grid-cols-3 gap-2">
    <twig:Sortable:Item value="a" class="relative block! aspect-square overflow-hidden bg-linear-to-br from-sky-400 to-indigo-500 p-0">
        <twig:Sortable:Handle class="absolute left-1 top-1 bg-background/80 opacity-0 focus-visible:opacity-100 [[data-sortable-target]:hover_&]:opacity-100" />
    </twig:Sortable:Item>
    <twig:Sortable:Item value="b" class="relative block! aspect-square overflow-hidden bg-linear-to-br from-amber-300 to-rose-500 p-0">
        <twig:Sortable:Handle class="absolute left-1 top-1 bg-background/80 opacity-0 focus-visible:opacity-100 [[data-sortable-target]:hover_&]:opacity-100" />
    </twig:Sortable:Item>
    <twig:Sortable:Item value="c" class="relative block! aspect-square overflow-hidden bg-linear-to-br from-emerald-300 to-teal-600 p-0">
        <twig:Sortable:Handle class="absolute left-1 top-1 bg-background/80 opacity-0 focus-visible:opacity-100 [[data-sortable-target]:hover_&]:opacity-100" />
    </twig:Sortable:Item>
    <twig:Sortable:Item value="d" class="relative block! aspect-square overflow-hidden bg-linear-to-br from-fuchsia-400 to-purple-600 p-0">
        <twig:Sortable:Handle class="absolute left-1 top-1 bg-background/80 opacity-0 focus-visible:opacity-100 [[data-sortable-target]:hover_&]:opacity-100" />
    </twig:Sortable:Item>
    <twig:Sortable:Item value="e" class="relative block! aspect-square overflow-hidden bg-linear-to-br from-orange-300 to-red-500 p-0">
        <twig:Sortable:Handle class="absolute left-1 top-1 bg-background/80 opacity-0 focus-visible:opacity-100 [[data-sortable-target]:hover_&]:opacity-100" />
    </twig:Sortable:Item>
    <twig:Sortable:Item value="f" class="relative block! aspect-square overflow-hidden bg-linear-to-br from-slate-300 to-slate-600 p-0">
        <twig:Sortable:Handle class="absolute left-1 top-1 bg-background/80 opacity-0 focus-visible:opacity-100 [[data-sortable-target]:hover_&]:opacity-100" />
    </twig:Sortable:Item>
</twig:Sortable>
```

## Accessibility

- Only the handle starts a drag, so buttons, links and inputs inside an item keep working normally.
- Keyboard: on a handle, `Space` or `Enter` picks the item up (`aria-pressed="true"`), the arrow keys move it, `Space` or `Enter` drops it, `Esc` cancels and restores the original order.
- Every move is announced through an `aria-live` region: position, total, pick-up, drop and cancel.
- Touch screens: HTML5 drag and drop does not fire on touch, so use the keyboard flow or add a touch polyfill if you need finger dragging.

## API

### `<twig:Sortable>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | When set, the order is submitted as hidden inputs `name[]`. |
| `pickedUpLabel` | string | `{item} picked up, position {position} of {total}. Use the arrow keys to move it.` | Announced when an item is picked up with the keyboard. |
| `movedLabel` | string | `{item} moved to position {position} of {total}.` | Announced after each keyboard move. |
| `droppedLabel` | string | `{item} dropped at position {position} of {total}.` | Announced when the item is dropped. |
| `cancelledLabel` | string | `{item}: reordering cancelled.` | Announced when `Esc` cancels the reorder. |

`{item}`, `{position}` and `{total}` are replaced with the item name, its position and the item count.

| Block | Description |
|---|---|
| `default` | `Sortable:Item` elements. |

### `<twig:Sortable:Item>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | string | required | Identifier of the item, reported in the order and submitted with the form. |
| `label` | string | `null` | Spoken name of the item for the keyboard announcements. Defaults to its text. |

| Block | Description |
|---|---|
| `default` | The content of the item, with a `Sortable:Handle`. |

### `<twig:Sortable:Handle>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | `Reorder` | Accessible name of the handle. |

Lists can be nested: each list only handles its own items. An element with `data-sortable-position` inside an item shows the 1-based position of the item and follows every move.

The `sortable:change` event has `detail.order` (the new list of values) and `detail.previous`.

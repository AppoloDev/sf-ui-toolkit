# Sortable

> Reorderable list or grid: drag and drop on a handle, full keyboard reordering, and the order submitted with the form.

## Usage

```twig
<twig:Sortable name="priorities" class="flex flex-col gap-2">
    <twig:Sortable:Item value="design">
        <twig:Sortable:Handle /> Design
    </twig:Sortable:Item>
    <twig:Sortable:Item value="build">
        <twig:Sortable:Handle /> Build
    </twig:Sortable:Item>
</twig:Sortable>
```

## Examples

### Vertical list

Drag an item by its handle. The order is reported by the `sortable:change` event, which fires once per drop.

```twig
<twig:Sortable class="flex max-w-sm flex-col gap-2" id="vertical-list">
    <twig:Sortable:Item value="design"><twig:Sortable:Handle /> Design the schema</twig:Sortable:Item>
    <twig:Sortable:Item value="build"><twig:Sortable:Handle /> Build the API</twig:Sortable:Item>
    <twig:Sortable:Item value="test"><twig:Sortable:Handle /> Write the tests</twig:Sortable:Item>
    <twig:Sortable:Item value="ship"><twig:Sortable:Handle /> Ship it</twig:Sortable:Item>
</twig:Sortable>
<p class="mt-3 text-sm text-muted-foreground">Order: <code id="vertical-order">design, build, test, ship</code></p>

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
    <twig:Sortable:Item value="1" class="justify-between"><span>One</span><twig:Sortable:Handle /></twig:Sortable:Item>
    <twig:Sortable:Item value="2" class="justify-between"><span>Two</span><twig:Sortable:Handle /></twig:Sortable:Item>
    <twig:Sortable:Item value="3" class="justify-between"><span>Three</span><twig:Sortable:Handle /></twig:Sortable:Item>
    <twig:Sortable:Item value="4" class="justify-between"><span>Four</span><twig:Sortable:Handle /></twig:Sortable:Item>
    <twig:Sortable:Item value="5" class="justify-between"><span>Five</span><twig:Sortable:Handle /></twig:Sortable:Item>
    <twig:Sortable:Item value="6" class="justify-between"><span>Six</span><twig:Sortable:Handle /></twig:Sortable:Item>
</twig:Sortable>
```

### Submitted with a form

With a `name`, the order is submitted as hidden inputs `priorities[]`, in the displayed order.

```twig
<form method="post" class="max-w-sm space-y-3" onsubmit="event.preventDefault(); this.querySelector('output').textContent = new URLSearchParams(new FormData(this)).toString();">
    <twig:Sortable name="priorities" class="flex flex-col gap-2">
        <twig:Sortable:Item value="speed"><twig:Sortable:Handle /> Speed</twig:Sortable:Item>
        <twig:Sortable:Item value="cost"><twig:Sortable:Handle /> Cost</twig:Sortable:Item>
        <twig:Sortable:Item value="quality"><twig:Sortable:Handle /> Quality</twig:Sortable:Item>
    </twig:Sortable>
    <button type="submit" class="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground">Submit</button>
    <output class="block break-all text-xs text-muted-foreground"></output>
</form>
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

### `<twig:Sortable:Item>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | string | required | Identifier of the item, reported in the order and submitted with the form. |
| `label` | string | `null` | Spoken name of the item for the keyboard announcements. Defaults to its text. |

### `<twig:Sortable:Handle>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | `Reorder` | Accessible name of the handle. |

The `sortable:change` event has `detail.order` (the new list of values) and `detail.previous`.

# Pick List

> Two lists to move items between: available on the left, chosen on the right, buttons to move the selection or everything, optional up and down buttons to order the chosen ones, and hidden inputs for a form.

## Installation

- button (only for the examples)

## Usage

Give the `source` and `target` blocks their `PickList:Item`. The items of the `target` block are the chosen ones.

```twig
<twig:PickList name="languages" :orderable="true">
    <twig:block name="source">
        <twig:PickList:Item value="php" label="PHP" />
        <twig:PickList:Item value="js" label="JavaScript" />
    </twig:block>
    <twig:block name="target">
        <twig:PickList:Item value="go" label="Go" />
    </twig:block>
</twig:PickList>
```

## Examples

### Basic

Click to select (Shift extends the selection), then use the arrows; double-click moves a single item.

<!-- height: 280 -->

```twig
<twig:PickList >
    <twig:block name="source">
        <twig:PickList:Item value="php" label="PHP" />
        <twig:PickList:Item value="js" label="JavaScript" />
        <twig:PickList:Item value="py" label="Python" />
        <twig:PickList:Item value="go" label="Go" />
    </twig:block>
    <twig:block name="target">
        <twig:PickList:Item value="rs" label="Rust" />
        <twig:PickList:Item value="rb" label="Ruby" />
    </twig:block>
</twig:PickList>
```

### Orderable

`orderable` adds up and down buttons to order the chosen items.

<!-- height: 300 -->

```twig
<twig:PickList :orderable="true">
    <twig:block name="source">
        <twig:PickList:Item value="php" label="PHP" />
        <twig:PickList:Item value="js" label="JavaScript" />
    </twig:block>
    <twig:block name="target">
        <twig:PickList:Item value="py" label="Python" />
        <twig:PickList:Item value="go" label="Go" />
        <twig:PickList:Item value="rs" label="Rust" />
        <twig:PickList:Item value="rb" label="Ruby" />
    </twig:block>
</twig:PickList>
```

### Everything In One List

All the items start in the available list.

<!-- height: 300 -->

```twig
<twig:PickList >
    <twig:block name="source">
        <twig:PickList:Item value="php" label="PHP" />
        <twig:PickList:Item value="js" label="JavaScript" />
        <twig:PickList:Item value="py" label="Python" />
        <twig:PickList:Item value="go" label="Go" />
        <twig:PickList:Item value="rs" label="Rust" />
        <twig:PickList:Item value="rb" label="Ruby" />
    </twig:block>
    <twig:block name="target">

    </twig:block>
</twig:PickList>
```

### Disabled Items

A disabled item cannot be moved.

<!-- height: 280 -->

```twig
<twig:PickList>
    <twig:block name="source">
        <twig:PickList:Item value="a" label="Editable" />
        <twig:PickList:Item value="b" label="Locked by an administrator" :disabled="true" />
        <twig:PickList:Item value="c" label="Another editable one" />
    </twig:block>
    <twig:block name="target">
    </twig:block>
</twig:PickList>
```

### In A Form

With `name`, the chosen values are sent as `name[]`, in their order.

<!-- height: 420 -->

```twig
<form id="pl-form" class="grid gap-3">
    <twig:PickList name="languages" :orderable="true">
        <twig:block name="source">
            <twig:PickList:Item value="php" label="PHP" />
            <twig:PickList:Item value="js" label="JavaScript" />
            <twig:PickList:Item value="py" label="Python" />
        </twig:block>
        <twig:block name="target">
            <twig:PickList:Item value="go" label="Go" />
        </twig:block>
    </twig:PickList>
    <div>
        <twig:Button type="submit" size="sm">
            Save
        </twig:Button>
    </div>
    <p class="text-sm text-muted-foreground">
        Sent: <code id="pl-form-out">nothing yet</code>
    </p>
</form>
<script>
    document.getElementById('pl-form').addEventListener('submit', (event) => {
        event.preventDefault();
        document.getElementById('pl-form-out').textContent = new URLSearchParams(new FormData(event.target)).toString() || 'nothing';
    });
</script>
```

### Another Language

Titles and button names are props.

<!-- height: 280 -->

```twig
<twig:PickList sourceLabel="Disponibles" targetLabel="Choisis" moveRightLabel="Déplacer la sélection" moveAllRightLabel="Tout déplacer" moveLeftLabel="Retirer la sélection" moveAllLeftLabel="Tout retirer" label="Liste de choix">
    <twig:block name="source">
        <twig:PickList:Item value="php" label="PHP" />
        <twig:PickList:Item value="js" label="JavaScript" />
        <twig:PickList:Item value="py" label="Python" />
    </twig:block>
    <twig:block name="target">
        <twig:PickList:Item value="go" label="Go" />
        <twig:PickList:Item value="rs" label="Rust" />
        <twig:PickList:Item value="rb" label="Ruby" />
    </twig:block>
</twig:PickList>
```

### Listening To Changes

`pick-list:change` carries the chosen values in order and what was just moved.

<!-- height: 360 -->

```twig
<div class="grid gap-2" id="pl-events">
    <twig:PickList>
        <twig:block name="source">
            <twig:PickList:Item value="red" label="Red" />
            <twig:PickList:Item value="green" label="Green" />
            <twig:PickList:Item value="blue" label="Blue" />
        </twig:block>
        <twig:block name="target">
        </twig:block>
    </twig:PickList>
    <p class="text-sm text-muted-foreground">
        Chosen: <code id="pl-events-out">none</code>
    </p>
</div>
<script>
    document.getElementById('pl-events').addEventListener('pick-list:change', (event) => {
        document.getElementById('pl-events-out').textContent = event.detail.values.join(', ') || 'none';
    });
</script>
```

## Accessibility

- Both lists are multi-select listboxes with an accessible name; arrows, Home and End move the active item, Space toggles it, Shift+arrows extends, Enter moves the selection to the other list.
- The buttons have accessible names (props).
- Moving an item with the mouse needs no drag: click and a button, or a double-click.

## Extending

- `pick-list:change` when items move or are ordered: `detail.values` (the chosen values in order) and `detail.moved`.

## API

### `<twig:PickList>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string or null | `null` | The name of the hidden inputs for the chosen items (`name[]`). |
| `orderable` | bool | `false` | Show up and down buttons to order the chosen items. |
| `sourceLabel` | string | `Available` | The title of the available list. |
| `targetLabel` | string | `Chosen` | The title of the chosen list. |
| `moveRightLabel` | string | `Move selected to chosen` | The name of the button that moves the selection to the chosen list. |
| `moveAllRightLabel` | string | `Move all to chosen` | The name of the button that moves everything to the chosen list. |
| `moveLeftLabel` | string | `Move selected back` | The name of the button that moves the selection back. |
| `moveAllLeftLabel` | string | `Move all back` | The name of the button that moves everything back. |
| `moveUpLabel` | string | `Move up` | The name of the move up button. |
| `moveDownLabel` | string | `Move down` | The name of the move down button. |
| `label` | string | `Pick list` | The accessible name of the control. |

| Block | Description |
| --- | --- |
| `source` | The `PickList:Item` of the available list. |
| `target` | The `PickList:Item` of the chosen list. |

### `<twig:PickList:Item>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | string or null | `null` | The value sent with the form; the label when empty. |
| `label` | string | | The text of the item. |
| `disabled` | bool | `false` | The item cannot be moved. |

| Block | Description |
| --- | --- |
| `default` | Not used. |

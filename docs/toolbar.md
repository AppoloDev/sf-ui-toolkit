# Toolbar

> A bar of actions with start, center and end areas and arrow-key navigation (Toolbar), and a floating bar that appears with the number of selected rows and their actions (ActionBar).

## Installation

- button
- input
- toggle-group
- dropdown-menu
- avatar
- table
- checkbox

Only the recipes of the controls you put in the bars are needed.

## Usage

`Toolbar` groups controls in a bar. Put them in the `start`, `center` and `end` blocks, or directly in the default block.

```twig
<twig:Toolbar label="Documents">
    <twig:block name="start">
        <twig:Button size="sm">New</twig:Button>
    </twig:block>
    <twig:block name="end">
        <twig:Button variant="ghost" size="sm">Settings</twig:Button>
    </twig:block>
</twig:Toolbar>
```

`ActionBar` is a floating bar for a selection. With `source`, the selector of the checkboxes, it opens when one is checked.

```twig
<twig:ActionBar source="[name='rows[]']">
    <twig:Button variant="destructive" size="sm">Delete</twig:Button>
</twig:ActionBar>
```

## Examples

### Toolbar: Basic

Actions on the start side, the account on the end side. Tab enters the toolbar once; the arrow keys move between the controls.

<!-- height: 120 -->

```twig
<twig:Toolbar label="Documents">
    <twig:block name="start">
        <twig:Button size="sm">
            <twig:ux:icon name="lucide:plus" />
            New
        </twig:Button>
        <twig:Button variant="outline" size="sm">
            <twig:ux:icon name="lucide:upload" />
            Upload
        </twig:Button>
    </twig:block>
    <twig:block name="end">
        <twig:Button variant="ghost" size="icon-sm" aria-label="Settings">
            <twig:ux:icon name="lucide:settings" />
        </twig:Button>
        <twig:Avatar class="size-7">
            <twig:Avatar:Fallback>AL</twig:Avatar:Fallback>
        </twig:Avatar>
    </twig:block>
</twig:Toolbar>
```

### Toolbar: Start, Center and End

The three areas of the PrimeVue toolbar: the center area takes the free space.

<!-- height: 120 -->

```twig
<twig:Toolbar label="Editor">
    <twig:block name="start">
        <twig:Button variant="outline" size="sm">
            <twig:ux:icon name="lucide:save" />
            Save
        </twig:Button>
    </twig:block>
    <twig:block name="center">
        <twig:Input type="search" placeholder="Search…" aria-label="Search" class="h-8 max-w-xs" />
    </twig:block>
    <twig:block name="end">
        <twig:Button variant="ghost" size="icon-sm" aria-label="Share">
            <twig:ux:icon name="lucide:share-2" />
        </twig:Button>
    </twig:block>
</twig:Toolbar>
```

### Toolbar: Text Formatting

Groups of toggles separated by `Toolbar:Separator`, like a text editor.

<!-- height: 120 -->

```twig
<twig:Toolbar label="Text formatting">
    <twig:ToggleGroup type="multiple" size="sm">
        <twig:ToggleGroup:Item value="bold" aria-label="Bold">
            <twig:ux:icon name="lucide:bold" />
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="italic" aria-label="Italic">
            <twig:ux:icon name="lucide:italic" />
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="underline" aria-label="Underline">
            <twig:ux:icon name="lucide:underline" />
        </twig:ToggleGroup:Item>
    </twig:ToggleGroup>
    <twig:Toolbar:Separator />
    <twig:ToggleGroup type="single" size="sm" value="left">
        <twig:ToggleGroup:Item value="left" aria-label="Align left">
            <twig:ux:icon name="lucide:align-left" />
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="center" aria-label="Align center">
            <twig:ux:icon name="lucide:align-center" />
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="right" aria-label="Align right">
            <twig:ux:icon name="lucide:align-right" />
        </twig:ToggleGroup:Item>
    </twig:ToggleGroup>
</twig:Toolbar>
```

### Toolbar: Table Actions

A toolbar over a table: search, filter and the actions of the page.

<!-- height: 120 -->

```twig
<twig:Toolbar label="Table actions" variant="plain" class="mb-2">
    <twig:block name="start">
        <twig:Input type="search" placeholder="Filter invoices…" aria-label="Filter invoices" class="h-8 w-56" />
        <twig:Button variant="outline" size="sm">
            <twig:ux:icon name="lucide:list-filter" />
            Status
        </twig:Button>
    </twig:block>
    <twig:block name="end">
        <twig:Button variant="outline" size="sm">
            <twig:ux:icon name="lucide:download" />
            Export
        </twig:Button>
        <twig:Button size="sm">
            <twig:ux:icon name="lucide:plus" />
            New invoice
        </twig:Button>
    </twig:block>
</twig:Toolbar>
```

### Toolbar: Vertical

`orientation="vertical"`: the arrows are Up and Down.

<!-- height: 200 -->

```twig
<twig:Toolbar label="Tools" orientation="vertical" class="w-fit">
    <twig:Button variant="ghost" size="icon-sm" aria-label="Select">
        <twig:ux:icon name="lucide:mouse-pointer-2" />
    </twig:Button>
    <twig:Button variant="ghost" size="icon-sm" aria-label="Draw">
        <twig:ux:icon name="lucide:pencil" />
    </twig:Button>
    <twig:Button variant="ghost" size="icon-sm" aria-label="Erase">
        <twig:ux:icon name="lucide:eraser" />
    </twig:Button>
</twig:Toolbar>
```

### Toolbar: With A Menu

A dropdown in the end area for the less frequent actions.

<!-- height: 260 -->

```twig
<div style="min-height: 220px">
    <twig:Toolbar label="Page actions">
        <twig:block name="start">
            <twig:Button size="sm">
                Publish
            </twig:Button>
        </twig:block>
        <twig:block name="end">
            <twig:DropdownMenu id="toolbar-more">
                <twig:DropdownMenu:Trigger>
                    <twig:Button variant="outline" size="icon-sm" aria-label="More actions" {{ ...dropdown_menu_trigger_attrs }}>
                        <twig:ux:icon name="lucide:ellipsis" />
                    </twig:Button>
                </twig:DropdownMenu:Trigger>
                <twig:DropdownMenu:Content class="w-40">
                    <twig:DropdownMenu:Item>
                        Duplicate
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        Archive
                    </twig:DropdownMenu:Item>
                </twig:DropdownMenu:Content>
            </twig:DropdownMenu>
        </twig:block>
    </twig:Toolbar>
</div>
```

### Action Bar: Basic

An action bar kept open, with the count and the actions that apply to the items.

<!-- height: 140 -->

```twig
<div class="relative h-24">
    <twig:ActionBar :open="true" :count="3">
        <twig:Button variant="ghost" size="sm">
            <twig:ux:icon name="lucide:copy" />
            Duplicate
        </twig:Button>
        <twig:Button variant="ghost" size="sm">
            <twig:ux:icon name="lucide:archive" />
            Archive
        </twig:Button>
        <twig:Button variant="destructive" size="sm">
            <twig:ux:icon name="lucide:trash-2" />
            Delete
        </twig:Button>
    </twig:ActionBar>
</div>
```

### Action Bar: From A Table

`source` is the selector of the checkboxes: the bar opens when one is checked, counts the checked ones, and the clear button unchecks them.

<!-- height: 300 -->

```twig
<div class="relative">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head class="w-8"></twig:Table:Head>
                <twig:Table:Head>
                    Invoice
                </twig:Table:Head>
                <twig:Table:Head>
                    Status
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="w-8">
                    <twig:Checkbox name="rows[]" value="1" aria-label="Select row 1" />
                </twig:Table:Cell>
                <twig:Table:Cell class="font-medium">
                    INV001
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Pending
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="w-8">
                    <twig:Checkbox name="rows[]" value="2" aria-label="Select row 2" />
                </twig:Table:Cell>
                <twig:Table:Cell class="font-medium">
                    INV002
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Unpaid
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="w-8">
                    <twig:Checkbox name="rows[]" value="3" aria-label="Select row 3" />
                </twig:Table:Cell>
                <twig:Table:Cell class="font-medium">
                    INV003
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Paid
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="w-8">
                    <twig:Checkbox name="rows[]" value="4" aria-label="Select row 4" />
                </twig:Table:Cell>
                <twig:Table:Cell class="font-medium">
                    INV004
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Paid
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
    <twig:ActionBar source="[name='rows[]']" class="bottom-2!">
        <twig:Button variant="ghost" size="sm">
            <twig:ux:icon name="lucide:download" />
            Export
        </twig:Button>
        <twig:Button variant="destructive" size="sm">
            <twig:ux:icon name="lucide:trash-2" />
            Delete
        </twig:Button>
    </twig:ActionBar>
</div>
```

### Action Bar: Top

`position="top"` brings the bar from above.

<!-- height: 140 -->

```twig
<div class="relative h-24">
    <twig:ActionBar position="top" :open="true" :count="2">
        <twig:Button variant="ghost" size="sm">
            Mark as read
        </twig:Button>
    </twig:ActionBar>
</div>
```

### Action Bar: Count Texts

`selectedLabel` and `clearLabel` are props, for another language.

<!-- height: 140 -->

```twig
<div class="relative h-24">
    <twig:ActionBar :open="true" :count="5" selectedLabel="{count} éléments sélectionnés" clearLabel="Vider la sélection">
        <twig:Button variant="ghost" size="sm">
            Archiver
        </twig:Button>
    </twig:ActionBar>
</div>
```

### Action Bar: Driven By Your Code

Without `source`, set the `data-action-bar-count-value` of the bar: the bar follows it.

<!-- height: 160 -->

```twig
<div class="relative h-28">
    <div class="flex gap-2">
        <twig:Button variant="outline" size="sm" id="ab-add">
            Select one more
        </twig:Button>
        <twig:Button variant="outline" size="sm" id="ab-reset">
            Reset
        </twig:Button>
    </div>
    <twig:ActionBar id="ab-driven" class="bottom-1!">
        <twig:Button variant="ghost" size="sm">
            Share
        </twig:Button>
    </twig:ActionBar>
</div>
<script>
    const bar = document.getElementById('ab-driven');
    const set = (count) => bar.setAttribute('data-action-bar-count-value', String(count));
    document.getElementById('ab-add').addEventListener('click', () => set(Number(bar.dataset.actionBarCountValue || 0) + 1));
    document.getElementById('ab-reset').addEventListener('click', () => set(0));
    bar.addEventListener('action-bar:clear', () => set(0));
</script>
```

## Accessibility

- `Toolbar` follows the WAI-ARIA toolbar pattern: `role="toolbar"` with a name (`label`), a single control in the tab order, and the arrow keys (Left and Right, or Up and Down when vertical), Home and End to move between the controls. A text field keeps its own arrow keys.
- `ActionBar` is a toolbar too. The count is a polite live region, so a screen reader hears the selection change. The bar is `inert` while it is closed, so its buttons are not reachable.
- The clear button has an accessible name (`clearLabel`); all texts are props.

## Extending

`ActionBar` dispatches `action-bar:change` with `detail.count` each time the count changes, and `action-bar:clear` when the clear button is used. Without a `source`, the count follows the `data-action-bar-count-value` attribute of the bar.

## API

### `<twig:Toolbar>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | string | `Toolbar` | The accessible name of the toolbar. |
| `orientation` | `horizontal`, `vertical` | `horizontal` | The direction of the arrow keys. |
| `variant` | `default`, `plain` | `default` | A bordered bar, or no border and no background. |

| Block | Description |
| --- | --- |
| `start` | Controls on the start side. |
| `center` | Controls in the middle, taking the free space. |
| `end` | Controls on the end side. |
| `default` | Controls between the center and the end, when no area is needed. |

### `<twig:Toolbar:Separator>`

A thin vertical line between two groups of controls. No props.

### `<twig:ActionBar>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | bool | `false` | Show the bar without a count (no `source`). |
| `count` | integer | `0` | The number of selected items when the bar is driven by your code. |
| `source` | string or null | `null` | A CSS selector of checkboxes: the bar opens when one is checked and counts the checked ones. |
| `position` | `bottom`, `top` | `bottom` | Where the bar sits. |
| `fixed` | bool | `false` | Pin the bar to the viewport instead of the nearest positioned ancestor. |
| `selectedLabel` | string | `{count} selected` | The text of the count. |
| `clearLabel` | string | `Clear selection` | The accessible name of the clear button. |
| `label` | string | `Selection actions` | The accessible name of the bar. |

| Block | Description |
| --- | --- |
| `default` | The actions: buttons. |

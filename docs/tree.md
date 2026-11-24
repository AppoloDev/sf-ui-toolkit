# Tree

> Expandable hierarchy with WAI-ARIA tree keyboard navigation (arrows, Home/End, typeahead), selection and optional guide lines.

## Usage

```twig
<twig:Tree label="Project files">
    <twig:Tree:Item label="src" :expanded="true">
        <twig:Tree:Item label="Kernel.php" />
    </twig:Tree:Item>
    <twig:Tree:Item label="composer.json" />
</twig:Tree>
```

## Examples

### Basic

Nest `Tree:Item` inside `Tree:Item` to build branches. Click the chevron to toggle a branch, click a row to select it.

```twig
<twig:Tree label="Project files" class="w-64">
    <twig:Tree:Item label="src" :expanded="true">
        <twig:Tree:Item label="Controller" :expanded="true">
            <twig:Tree:Item label="HomeController.php" />
            <twig:Tree:Item label="SecurityController.php" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Entity">
            <twig:Tree:Item label="User.php" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Kernel.php" />
    </twig:Tree:Item>
    <twig:Tree:Item label="templates">
        <twig:Tree:Item label="base.html.twig" />
    </twig:Tree:Item>
    <twig:Tree:Item label="composer.json" />
</twig:Tree>
```

### Guide lines

`lines` draws vertical guide lines to show depth in deep trees.

```twig
<twig:Tree label="Organization" :lines="true" class="w-64">
    <twig:Tree:Item label="Company" :expanded="true">
        <twig:Tree:Item label="Engineering" :expanded="true">
            <twig:Tree:Item label="Platform" :expanded="true">
                <twig:Tree:Item label="Alice" />
                <twig:Tree:Item label="Bob" />
            </twig:Tree:Item>
            <twig:Tree:Item label="Product" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Sales" />
    </twig:Tree:Item>
</twig:Tree>
```

### Links and default selection

`href` turns a node into a link; `selected` marks the current node.

```twig
<twig:Tree label="Documentation" class="w-64">
    <twig:Tree:Item label="Guide" :expanded="true">
        <twig:Tree:Item label="Installation" href="#installation" />
        <twig:Tree:Item label="Configuration" href="#configuration" :selected="true" />
    </twig:Tree:Item>
    <twig:Tree:Item label="Reference" href="#reference" />
</twig:Tree>
```

### Checkboxes

`checkbox` adds a checkbox to the row. Inside a `CheckboxTree`, a parent checks and unchecks its children, and is mixed when only some of them are checked. Clicking the box does not select the row.

```twig
<twig:CheckboxTree>
    <twig:Tree label="Files to back up" class="w-64">
        <twig:Tree:Item label="Documents" name="folders[]" value="documents" :checkbox="true" :expanded="true">
            <twig:Tree:Item label="Invoices" name="folders[]" value="invoices" :checkbox="true" :checked="true" />
            <twig:Tree:Item label="Contracts" name="folders[]" value="contracts" :checkbox="true" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Photos" name="folders[]" value="photos" :checkbox="true" />
    </twig:Tree>
</twig:CheckboxTree>
```

## Accessibility

- The component implements the WAI-ARIA `tree` / `treeitem` / `group` roles, with `aria-expanded` on branches and `aria-selected` on the selected node. A single node is in the tab order (roving tabindex).
- Keyboard: `↓` / `↑` move between visible nodes; `→` expands a branch, or moves to its first child; `←` collapses an open branch, or moves to the parent; `Home` / `End` jump to the first and last visible node; `Enter` toggles a branch and selects the node, and `Space` does the same, except on a node with a checkbox, where it checks the box; typing a character jumps to the next node whose name starts with it.
- Each node has an `aria-label` equal to its `label`.
- The controller dispatches `tree:select` and `tree:toggle` events.

## API

### `<twig:Tree>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | `null` | Accessible name of the tree. |
| `lines` | bool | `false` | Draws vertical guide lines for nested levels. |

| Block | Description |
|---|---|
| `default` | `Tree:Item` elements. |

### `<twig:Tree:Item>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | required | Text and accessible name of the node. |
| `expanded` | bool | `false` | Branch open by default. |
| `selected` | bool | `false` | Node selected by default. |
| `href` | string | `null` | Makes the node a link. |
| `checkbox` | bool | `false` | Adds a checkbox to the row. Wrap the tree in a `CheckboxTree` to have a parent check its children. |
| `name` | string | `null` | Name of the checkbox. |
| `value` | string | `1` | Value of the checkbox. |
| `checked` | bool | `false` | Checkbox checked by default. |

| Block | Description |
|---|---|
| `default` | Nested `Tree:Item` elements; a node without children is a leaf. |


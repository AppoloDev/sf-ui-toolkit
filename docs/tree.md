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

### Folder and file icons

`icon` sets the icon of a node and `expandedIcon` replaces it while a branch is open.

```twig
<twig:Tree label="Project files" class="w-64">
    <twig:Tree:Item label="src" icon="lucide:folder" expandedIcon="lucide:folder-open" :expanded="true">
        <twig:Tree:Item label="components" icon="lucide:folder" expandedIcon="lucide:folder-open" :expanded="true">
            <twig:Tree:Item label="Button.twig" icon="lucide:file-code" />
            <twig:Tree:Item label="Card.twig" icon="lucide:file-code" />
        </twig:Tree:Item>
        <twig:Tree:Item label="assets" icon="lucide:folder" expandedIcon="lucide:folder-open">
            <twig:Tree:Item label="logo.png" icon="lucide:file-image" />
            <twig:Tree:Item label="intro.mp4" icon="lucide:file-video" />
        </twig:Tree:Item>
        <twig:Tree:Item label="README.md" icon="lucide:file-text" />
    </twig:Tree:Item>
    <twig:Tree:Item label="package.json" icon="lucide:file-json" />
</twig:Tree>
```

### Plus and minus toggles

`indicator="plusminus"` swaps the chevron for a plus or minus square.

```twig
<twig:Tree label="Departments" indicator="plusminus" class="w-64">
    <twig:Tree:Item label="Engineering" :expanded="true">
        <twig:Tree:Item label="Platform" />
        <twig:Tree:Item label="Mobile">
            <twig:Tree:Item label="iOS" />
            <twig:Tree:Item label="Android" />
        </twig:Tree:Item>
    </twig:Tree:Item>
    <twig:Tree:Item label="Design">
        <twig:Tree:Item label="Brand" />
        <twig:Tree:Item label="Product" />
    </twig:Tree:Item>
    <twig:Tree:Item label="Support" />
</twig:Tree>
```

### File explorer

The `row` block holds your own row content, here a `Badge` with the Git status of each file.

```twig
<twig:Card class="w-72">
    <twig:Card:Header>
        <twig:Card:Title>
            Explorer
        </twig:Card:Title>
        <twig:Card:Description>
            2 files changed
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content>
        <twig:Tree label="Changed files" lines>
            <twig:Tree:Item label="src" icon="lucide:folder" expandedIcon="lucide:folder-open" :expanded="true">
                <twig:Tree:Item label="Kernel.php" icon="lucide:file-code" :selected="true">
                    <twig:block name="row">
                        <span class="truncate">Kernel.php</span>
                        <twig:Badge variant="secondary" class="ml-auto">
                            M
                        </twig:Badge>
                    </twig:block>
                </twig:Tree:Item>
                <twig:Tree:Item label="Mailer.php" icon="lucide:file-code">
                    <twig:block name="row">
                        <span class="truncate">Mailer.php</span>
                        <twig:Badge class="ml-auto">
                            A
                        </twig:Badge>
                    </twig:block>
                </twig:Tree:Item>
                <twig:Tree:Item label="Entity.php" icon="lucide:file-code" />
            </twig:Tree:Item>
            <twig:Tree:Item label="composer.json" icon="lucide:file-json" />
        </twig:Tree>
    </twig:Card:Content>
</twig:Card>
```

### Org chart

Each node shows an `Avatar`, a name and a role. The guide lines draw the reporting lines.

```twig
<twig:Tree label="Organization" lines class="w-72">
    <twig:Tree:Item label="Ana Silva" :expanded="true">
        <twig:block name="row">
            <twig:Avatar class="size-6">
                <twig:Avatar:Fallback>AS</twig:Avatar:Fallback>
            </twig:Avatar>
            <span class="truncate">Ana Silva</span>
            <span class="ml-auto text-xs text-muted-foreground">CEO</span>
        </twig:block>
        <twig:Tree:Item label="Marc Dubois" :expanded="true">
            <twig:block name="row">
                <twig:Avatar class="size-6">
                    <twig:Avatar:Fallback>MD</twig:Avatar:Fallback>
                </twig:Avatar>
                <span class="truncate">Marc Dubois</span>
                <span class="ml-auto text-xs text-muted-foreground">CTO</span>
            </twig:block>
            <twig:Tree:Item label="Lena Kraus">
                <twig:block name="row">
                    <twig:Avatar class="size-6">
                        <twig:Avatar:Fallback>LK</twig:Avatar:Fallback>
                    </twig:Avatar>
                    <span class="truncate">Lena Kraus</span>
                    <span class="ml-auto text-xs text-muted-foreground">Engineer</span>
                </twig:block>
            </twig:Tree:Item>
            <twig:Tree:Item label="Tom Reed">
                <twig:block name="row">
                    <twig:Avatar class="size-6">
                        <twig:Avatar:Fallback>TR</twig:Avatar:Fallback>
                    </twig:Avatar>
                    <span class="truncate">Tom Reed</span>
                    <span class="ml-auto text-xs text-muted-foreground">Engineer</span>
                </twig:block>
            </twig:Tree:Item>
        </twig:Tree:Item>
        <twig:Tree:Item label="Sofia Rossi">
            <twig:block name="row">
                <twig:Avatar class="size-6">
                    <twig:Avatar:Fallback>SR</twig:Avatar:Fallback>
                </twig:Avatar>
                <span class="truncate">Sofia Rossi</span>
                <span class="ml-auto text-xs text-muted-foreground">CFO</span>
            </twig:block>
        </twig:Tree:Item>
    </twig:Tree:Item>
</twig:Tree>
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
| `indicator` | `chevron`, `plusminus` | `chevron` | Toggle shown on branches: a chevron, or a plus and minus square. |

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
| `icon` | string | `null` | Icon name (for example `lucide:folder`) shown before the label. |
| `expandedIcon` | string | `null` | Icon used instead of `icon` while a branch is open. |

| Block | Description |
|---|---|
| `default` | Nested `Tree:Item` elements; a node without children is a leaf. |
| `row` | Your own content for the row (avatar, badge...) in place of the label text. `label` stays the accessible name. |


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

### Multiple selection

`multiple` allows several selected nodes: Ctrl or Cmd plus click toggles a node, Shift plus click selects the range from the last clicked node. `tree:select` carries the whole selection in `detail.labels`.

```twig
<div class="grid w-64 gap-3">
    <twig:Tree label="Project files" :multiple="true" id="tree-multiple">
        <twig:Tree:Item label="src" icon="lucide:folder" expandedIcon="lucide:folder-open" :expanded="true">
            <twig:Tree:Item label="Kernel.php" icon="lucide:file-code" />
            <twig:Tree:Item label="Controller.php" icon="lucide:file-code" />
            <twig:Tree:Item label="Entity.php" icon="lucide:file-code" />
        </twig:Tree:Item>
        <twig:Tree:Item label="composer.json" icon="lucide:file-json" />
        <twig:Tree:Item label="README.md" icon="lucide:file-text" />
    </twig:Tree>
    <p class="text-xs text-muted-foreground" id="tree-multiple-out">
        Nothing selected
    </p>
</div>
<script>
    document.getElementById('tree-multiple').addEventListener('tree:select', (event) => {
        document.getElementById('tree-multiple-out').textContent = event.detail.labels.length ? event.detail.labels.join(', ') : 'Nothing selected';
    });
</script>
```

### Search the tree

`search` takes the selector of a text field. Typing keeps the matching nodes and their ancestors, opens the branches that lead to them and shows `emptyLabel` when nothing matches. Clearing the field restores the previous state.

```twig
<div class="grid w-64 gap-3">
    <twig:Input id="tree-search" type="search" placeholder="Search files..." />
    <twig:Tree label="Project files" search="#tree-search" emptyLabel="No file matches">
        <twig:Tree:Item label="src" icon="lucide:folder" expandedIcon="lucide:folder-open">
            <twig:Tree:Item label="components" icon="lucide:folder" expandedIcon="lucide:folder-open">
                <twig:Tree:Item label="Button.twig" icon="lucide:file-code" />
                <twig:Tree:Item label="Card.twig" icon="lucide:file-code" />
                <twig:Tree:Item label="Table.twig" icon="lucide:file-code" />
            </twig:Tree:Item>
            <twig:Tree:Item label="Kernel.php" icon="lucide:file-code" />
        </twig:Tree:Item>
        <twig:Tree:Item label="docs" icon="lucide:folder" expandedIcon="lucide:folder-open">
            <twig:Tree:Item label="button.md" icon="lucide:file-text" />
            <twig:Tree:Item label="table.md" icon="lucide:file-text" />
        </twig:Tree:Item>
        <twig:Tree:Item label="README.md" icon="lucide:file-text" />
    </twig:Tree>
</div>
```

### Controlled expansion

`controls` takes the selector of an element holding buttons with a `data-tree-command`: `expandAll`, `collapseAll`, or `reveal` with a `data-tree-label` (opens the ancestors, then focuses and selects that node).

```twig
<div class="grid w-72 gap-3">
    <div class="flex flex-wrap gap-2" id="tree-controls">
        <twig:Button variant="outline" size="sm" type="button" data-tree-command="expandAll">
            Expand all
        </twig:Button>
        <twig:Button variant="outline" size="sm" type="button" data-tree-command="collapseAll">
            Collapse all
        </twig:Button>
        <twig:Button variant="outline" size="sm" type="button" data-tree-command="reveal" data-tree-label="Controller.php">
            Reveal Controller.php
        </twig:Button>
    </div>
    <twig:Tree label="Project files" controls="#tree-controls">
        <twig:Tree:Item label="src" icon="lucide:folder" expandedIcon="lucide:folder-open">
            <twig:Tree:Item label="Http" icon="lucide:folder" expandedIcon="lucide:folder-open">
                <twig:Tree:Item label="Controller.php" icon="lucide:file-code" />
                <twig:Tree:Item label="Request.php" icon="lucide:file-code" />
            </twig:Tree:Item>
            <twig:Tree:Item label="Kernel.php" icon="lucide:file-code" />
        </twig:Tree:Item>
        <twig:Tree:Item label="tests" icon="lucide:folder" expandedIcon="lucide:folder-open">
            <twig:Tree:Item label="KernelTest.php" icon="lucide:file-code" />
        </twig:Tree:Item>
    </twig:Tree>
</div>
```

### Lazy loading

A `lazy` node has no children in the markup: they are requested when the branch first opens. The page answers `tree:load` with `detail.render(items)`, here after a short delay as a request would. `detail.fail()` allows a new attempt.

```twig
<twig:Tree label="Remote folders" id="tree-lazy" class="w-64">
    <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" :lazy="true" />
    <twig:Tree:Item label="Pictures" icon="lucide:folder" expandedIcon="lucide:folder-open" :lazy="true" />
    <twig:Tree:Item label="notes.txt" icon="lucide:file-text" />
</twig:Tree>
<script>
    const remote = {
        Documents: [{ label: 'Contracts', lazy: true }, { label: 'Invoices', lazy: true }, { label: 'cv.pdf' }],
        Pictures: [{ label: 'Holidays.jpg' }, { label: 'Family.jpg' }],
        Contracts: [{ label: 'lease.pdf' }, { label: 'insurance.pdf' }],
        Invoices: [{ label: 'january.pdf' }, { label: 'february.pdf' }],
    };
    document.getElementById('tree-lazy').addEventListener('tree:load', (event) => {
        setTimeout(() => event.detail.render(remote[event.detail.label] ?? []), 600);
    });
</script>
```

### Drag and drop

`draggable` lets a node be dropped on another one: in the middle of a branch it goes inside, near the top or bottom edge it goes before or after. With `multiple`, dragging a selected node carries the whole selection. `tree:move` reports `detail.labels`, `detail.target` and `detail.position`.

```twig
<div class="grid w-64 gap-3">
    <twig:Tree label="Project files" :draggable="true" :multiple="true" id="tree-drag">
        <twig:Tree:Item label="src" icon="lucide:folder" expandedIcon="lucide:folder-open" :expanded="true">
            <twig:Tree:Item label="Kernel.php" icon="lucide:file-code" />
            <twig:Tree:Item label="Entity.php" icon="lucide:file-code" />
        </twig:Tree:Item>
        <twig:Tree:Item label="docs" icon="lucide:folder" expandedIcon="lucide:folder-open" :expanded="true">
            <twig:Tree:Item label="README.md" icon="lucide:file-text" />
        </twig:Tree:Item>
        <twig:Tree:Item label="archive" icon="lucide:folder" expandedIcon="lucide:folder-open">
            <twig:Tree:Item label="old.txt" icon="lucide:file-text" />
        </twig:Tree:Item>
    </twig:Tree>
    <p class="text-xs text-muted-foreground" id="tree-drag-out">
        Drag a node onto another one
    </p>
</div>
<script>
    document.getElementById('tree-drag').addEventListener('tree:move', (event) => {
        document.getElementById('tree-drag-out').textContent = event.detail.labels.join(', ') + ' moved ' + event.detail.position + ' ' + event.detail.target;
    });
</script>
```

### Events

The controller dispatches `tree:select`, `tree:toggle`, `tree:load`, `tree:move` and `tree:filter`; the page can listen to any of them.

```twig
<div class="grid w-72 gap-3">
    <twig:Tree label="Departments" id="tree-events">
        <twig:Tree:Item label="Engineering" :expanded="true">
            <twig:Tree:Item label="Platform" />
            <twig:Tree:Item label="Mobile" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Design">
            <twig:Tree:Item label="Brand" />
        </twig:Tree:Item>
    </twig:Tree>
    <twig:Card>
        <twig:Card:Content class="text-xs">
            <output id="tree-events-out" class="block min-h-12 whitespace-pre-line">
                Click or open a node
            </output>
        </twig:Card:Content>
    </twig:Card>
</div>
<script>
    (() => {
        const tree = document.getElementById('tree-events');
        const out = document.getElementById('tree-events-out');
        const lines = [];
        ['select', 'toggle'].forEach((name) => tree.addEventListener('tree:' + name, (event) => {
            lines.unshift('tree:' + name + ' ' + event.detail.label + (undefined !== event.detail.expanded ? ' (' + (event.detail.expanded ? 'open' : 'closed') + ')' : ''));
            out.textContent = lines.slice(0, 4).join('\n');
        }));
    })();
</script>
```

### JSON viewer

The `row` block shows each key with a typed value, so a tree can browse structured data.

```twig
<twig:Tree label="JSON document" class="w-80 font-mono text-xs">
    <twig:Tree:Item label="user" :expanded="true">
        <twig:Tree:Item label="id">
            <twig:block name="row">
                <span>id:</span>
                <span class="text-sky-600 dark:text-sky-400">1042</span>
            </twig:block>
        </twig:Tree:Item>
        <twig:Tree:Item label="name">
            <twig:block name="row">
                <span>name:</span>
                <span class="text-emerald-600 dark:text-emerald-400">"Ada Lovelace"</span>
            </twig:block>
        </twig:Tree:Item>
        <twig:Tree:Item label="active">
            <twig:block name="row">
                <span>active:</span>
                <twig:Badge variant="secondary">
                    true
                </twig:Badge>
            </twig:block>
        </twig:Tree:Item>
        <twig:Tree:Item label="roles" :expanded="true">
            <twig:block name="row">
                <span>roles:</span>
                <span class="text-muted-foreground">Array(2)</span>
            </twig:block>
            <twig:Tree:Item label="0">
                <twig:block name="row">
                    <span>0:</span>
                    <span class="text-emerald-600 dark:text-emerald-400">"admin"</span>
                </twig:block>
            </twig:Tree:Item>
            <twig:Tree:Item label="1">
                <twig:block name="row">
                    <span>1:</span>
                    <span class="text-emerald-600 dark:text-emerald-400">"editor"</span>
                </twig:block>
            </twig:Tree:Item>
        </twig:Tree:Item>
        <twig:Tree:Item label="address">
            <twig:block name="row">
                <span>address:</span>
                <span class="text-muted-foreground">Object</span>
            </twig:block>
            <twig:Tree:Item label="city">
                <twig:block name="row">
                    <span>city:</span>
                    <span class="text-emerald-600 dark:text-emerald-400">"London"</span>
                </twig:block>
            </twig:Tree:Item>
            <twig:Tree:Item label="zip">
                <twig:block name="row">
                    <span>zip:</span>
                    <span class="text-muted-foreground">null</span>
                </twig:block>
            </twig:Tree:Item>
        </twig:Tree:Item>
    </twig:Tree:Item>
</twig:Tree>
```

## Extending

- `tree:select`: `detail.label` is the node just chosen, `detail.labels` the whole selection (several with `multiple`).
- `tree:toggle`: `detail.label` and `detail.expanded`, when a branch opens or closes by the user or a command.
- `tree:load`: a `lazy` branch opened for the first time; call `detail.render(items)` with a list of `{label, lazy?, children?}`, or `detail.fail()` to allow a new attempt.
- `tree:move`: after a drop, with `detail.labels`, `detail.target` and `detail.position` (`inside`, `before` or `after`).
- `tree:filter`: after the search field changes, with `detail.query` and `detail.matches`.

## Accessibility

- The component implements the WAI-ARIA `tree` / `treeitem` / `group` roles, with `aria-expanded` on branches and `aria-selected` on the selected node. A single node is in the tab order (roving tabindex).
- Keyboard: `↓` / `↑` move between visible nodes; `→` expands a branch, or moves to its first child; `←` collapses an open branch, or moves to the parent; `Home` / `End` jump to the first and last visible node; `Enter` toggles a branch and selects the node, and `Space` does the same, except on a node with a checkbox, where it checks the box; typing a character jumps to the next node whose name starts with it.
- Each node has an `aria-label` equal to its `label`.
- With `multiple` the tree has `aria-multiselectable`; Ctrl or Cmd plus click toggles a node and Shift plus click selects a range. A branch being loaded has `aria-busy`.
- Drag and drop works with a pointer only: offer another way to move nodes (a menu, for example) when it matters.
- The controller dispatches `tree:select`, `tree:toggle`, `tree:load`, `tree:move` and `tree:filter` events.

## API

### `<twig:Tree>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | `null` | Accessible name of the tree. |
| `lines` | bool | `false` | Draws vertical guide lines for nested levels. |
| `indicator` | `chevron`, `plusminus` | `chevron` | Toggle shown on branches: a chevron, or a plus and minus square. |
| `multiple` | bool | `false` | Several nodes can be selected (Ctrl or Cmd plus click, Shift plus click). |
| `draggable` | bool | `false` | Nodes can be dragged inside a branch, before or after another node. |
| `search` | string | `null` | CSS selector of a text field that filters the tree while typing. |
| `emptyLabel` | string | `No results` | Text shown when the search matches no node. |
| `controls` | string | `null` | CSS selector of an element holding buttons with `data-tree-command` (`expandAll`, `collapseAll`, `reveal`). |

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
| `lazy` | bool | `false` | Branch whose children are loaded on first open through the `tree:load` event. |

| Block | Description |
|---|---|
| `default` | Nested `Tree:Item` elements; a node without children is a leaf. |
| `row` | Your own content for the row (avatar, badge...) in place of the label text. `label` stays the accessible name. |


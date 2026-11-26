# Tree Select

> A select whose options are a tree: a button that opens a popup with the Tree, one or several nodes chosen, hidden inputs for the form, and an optional search field.

## Installation

- Install the `tree` recipe of this kit first: TreeSelect renders it.
- button, field (only for the examples)

## Usage

Put the nodes inside `TreeSelect`, as `Tree:Item`. The value of a node is its `data-value` attribute, or its label.

```twig
<twig:TreeSelect name="folder" label="Folder" placeholder="Select a folder">
    <twig:Tree:Item label="Documents" data-value="documents">
        <twig:Tree:Item label="Reports" data-value="reports" />
    </twig:Tree:Item>
    <twig:Tree:Item label="Desktop" data-value="desktop" />
</twig:TreeSelect>
```

Any node can be chosen, branches included. A node with `selected` is chosen on load. In a form, `name` writes one hidden input, or `name[]` when `multiple`.

## Examples

### Basic

A button that opens the tree. Choosing a node closes the popup and shows its label.

<!-- height: 300 -->

```twig
<twig:TreeSelect label="Folder" placeholder="Select a folder">
    <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
        <twig:Tree:Item label="Work" data-value="work">
            <twig:Tree:Item label="Reports" data-value="reports" />
            <twig:Tree:Item label="Invoices" data-value="invoices" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Personal" data-value="personal">
            <twig:Tree:Item label="Photos" data-value="photos" />
            <twig:Tree:Item label="Letters" data-value="letters" />
        </twig:Tree:Item>
    </twig:Tree:Item>
    <twig:Tree:Item label="Downloads" data-value="downloads">
        <twig:Tree:Item label="Installers" data-value="installers" />
        <twig:Tree:Item label="Archives" data-value="archives" />
    </twig:Tree:Item>
    <twig:Tree:Item label="Desktop" data-value="desktop" />
</twig:TreeSelect>
```

### Preselected

A node with `selected` is chosen when the page loads.

<!-- height: 300 -->

```twig
<twig:TreeSelect label="Folder">
    <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
        <twig:Tree:Item label="Work" data-value="work">
            <twig:Tree:Item label="Reports" data-value="reports" :selected="true" />
            <twig:Tree:Item label="Invoices" data-value="invoices" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Personal" data-value="personal">
            <twig:Tree:Item label="Photos" data-value="photos" />
            <twig:Tree:Item label="Letters" data-value="letters" />
        </twig:Tree:Item>
    </twig:Tree:Item>
    <twig:Tree:Item label="Downloads" data-value="downloads">
        <twig:Tree:Item label="Installers" data-value="installers" />
        <twig:Tree:Item label="Archives" data-value="archives" />
    </twig:Tree:Item>
    <twig:Tree:Item label="Desktop" data-value="desktop" />
</twig:TreeSelect>
```

### Multiple

`multiple`: a plain click toggles a node, Shift extends the choice. The button lists up to two labels, then a count.

<!-- height: 340 -->

```twig
<twig:TreeSelect label="Folders" :multiple="true" placeholder="Select folders">
    <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
        <twig:Tree:Item label="Work" data-value="work">
            <twig:Tree:Item label="Reports" data-value="reports" />
            <twig:Tree:Item label="Invoices" data-value="invoices" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Personal" data-value="personal">
            <twig:Tree:Item label="Photos" data-value="photos" />
            <twig:Tree:Item label="Letters" data-value="letters" />
        </twig:Tree:Item>
    </twig:Tree:Item>
    <twig:Tree:Item label="Downloads" data-value="downloads">
        <twig:Tree:Item label="Installers" data-value="installers" />
        <twig:Tree:Item label="Archives" data-value="archives" />
    </twig:Tree:Item>
    <twig:Tree:Item label="Desktop" data-value="desktop" />
</twig:TreeSelect>
```

### Searchable

`searchable` adds a field that filters the tree while typing; the branches that contain a match stay open.

<!-- height: 380 -->

```twig
<twig:TreeSelect label="Folder" :searchable="true" placeholder="Select a folder">
    <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
        <twig:Tree:Item label="Work" data-value="work">
            <twig:Tree:Item label="Reports" data-value="reports" />
            <twig:Tree:Item label="Invoices" data-value="invoices" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Personal" data-value="personal">
            <twig:Tree:Item label="Photos" data-value="photos" />
            <twig:Tree:Item label="Letters" data-value="letters" />
        </twig:Tree:Item>
    </twig:Tree:Item>
    <twig:Tree:Item label="Downloads" data-value="downloads">
        <twig:Tree:Item label="Installers" data-value="installers" />
        <twig:Tree:Item label="Archives" data-value="archives" />
    </twig:Tree:Item>
    <twig:Tree:Item label="Desktop" data-value="desktop" />
</twig:TreeSelect>
```

### Guide Lines

`lines` draws the depth guides of the tree.

<!-- height: 300 -->

```twig
<twig:TreeSelect label="Folder" :lines="true">
    <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
        <twig:Tree:Item label="Work" data-value="work">
            <twig:Tree:Item label="Reports" data-value="reports" />
            <twig:Tree:Item label="Invoices" data-value="invoices" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Personal" data-value="personal">
            <twig:Tree:Item label="Photos" data-value="photos" />
            <twig:Tree:Item label="Letters" data-value="letters" />
        </twig:Tree:Item>
    </twig:Tree:Item>
    <twig:Tree:Item label="Downloads" data-value="downloads">
        <twig:Tree:Item label="Installers" data-value="installers" />
        <twig:Tree:Item label="Archives" data-value="archives" />
    </twig:Tree:Item>
    <twig:Tree:Item label="Desktop" data-value="desktop" />
</twig:TreeSelect>
```

### Invalid

`invalid` sets `aria-invalid` and the destructive border.

<!-- height: 200 -->

```twig
<twig:TreeSelect label="Folder" :invalid="true">
    <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
        <twig:Tree:Item label="Work" data-value="work">
            <twig:Tree:Item label="Reports" data-value="reports" />
            <twig:Tree:Item label="Invoices" data-value="invoices" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Personal" data-value="personal">
            <twig:Tree:Item label="Photos" data-value="photos" />
            <twig:Tree:Item label="Letters" data-value="letters" />
        </twig:Tree:Item>
    </twig:Tree:Item>
    <twig:Tree:Item label="Downloads" data-value="downloads">
        <twig:Tree:Item label="Installers" data-value="installers" />
        <twig:Tree:Item label="Archives" data-value="archives" />
    </twig:Tree:Item>
    <twig:Tree:Item label="Desktop" data-value="desktop" />
</twig:TreeSelect>
```

### Disabled

A disabled select cannot be opened.

<!-- height: 160 -->

```twig
<twig:TreeSelect label="Folder" :disabled="true">
    <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
        <twig:Tree:Item label="Work" data-value="work">
            <twig:Tree:Item label="Reports" data-value="reports" />
            <twig:Tree:Item label="Invoices" data-value="invoices" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Personal" data-value="personal">
            <twig:Tree:Item label="Photos" data-value="photos" :selected="true" />
            <twig:Tree:Item label="Letters" data-value="letters" />
        </twig:Tree:Item>
    </twig:Tree:Item>
    <twig:Tree:Item label="Downloads" data-value="downloads">
        <twig:Tree:Item label="Installers" data-value="installers" />
        <twig:Tree:Item label="Archives" data-value="archives" />
    </twig:Tree:Item>
    <twig:Tree:Item label="Desktop" data-value="desktop" />
</twig:TreeSelect>
```

### With A Label

A `Field` with its label and a hint, the label pointing to the button through `id`.

<!-- height: 320 -->

```twig
<twig:Field>
    <twig:Field:Label for="ts-parent">
        Parent folder
    </twig:Field:Label>
    <twig:TreeSelect id="ts-parent" label="Parent folder" placeholder="Root">
        <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
            <twig:Tree:Item label="Work" data-value="work">
                <twig:Tree:Item label="Reports" data-value="reports" />
                <twig:Tree:Item label="Invoices" data-value="invoices" />
            </twig:Tree:Item>
            <twig:Tree:Item label="Personal" data-value="personal">
                <twig:Tree:Item label="Photos" data-value="photos" />
                <twig:Tree:Item label="Letters" data-value="letters" />
            </twig:Tree:Item>
        </twig:Tree:Item>
        <twig:Tree:Item label="Downloads" data-value="downloads">
            <twig:Tree:Item label="Installers" data-value="installers" />
            <twig:Tree:Item label="Archives" data-value="archives" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Desktop" data-value="desktop" />
    </twig:TreeSelect>
    <twig:Field:Description>
        The new folder is created inside it.
    </twig:Field:Description>
</twig:Field>
```

### Listening To Changes

`tree-select:change` carries the values (`data-value` of each node, or its label) and the labels.

<!-- height: 360 -->

```twig
<div class="grid gap-2">
    <twig:TreeSelect id="ts-events" label="Folders" :multiple="true">
        <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
            <twig:Tree:Item label="Work" data-value="work">
                <twig:Tree:Item label="Reports" data-value="reports" />
                <twig:Tree:Item label="Invoices" data-value="invoices" />
            </twig:Tree:Item>
            <twig:Tree:Item label="Personal" data-value="personal">
                <twig:Tree:Item label="Photos" data-value="photos" />
                <twig:Tree:Item label="Letters" data-value="letters" />
            </twig:Tree:Item>
        </twig:Tree:Item>
        <twig:Tree:Item label="Downloads" data-value="downloads">
            <twig:Tree:Item label="Installers" data-value="installers" />
            <twig:Tree:Item label="Archives" data-value="archives" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Desktop" data-value="desktop" />
    </twig:TreeSelect>
    <p class="text-sm text-muted-foreground">
        Values: <code id="ts-events-out">none</code>
    </p>
</div>
<script>
    document.getElementById('ts-events').closest('[data-controller="tree-select"]').addEventListener('tree-select:change', (event) => {
        document.getElementById('ts-events-out').textContent = event.detail.values.join(', ') || 'none';
    });
</script>
```

### In A Form

With `name`, the choice is sent with the form: one hidden input, or `name[]` for several. Submit to see what is sent.

<!-- height: 420 -->

```twig
<form id="ts-form" class="grid gap-3">
    <twig:TreeSelect label="Folder" name="folder" placeholder="Select a folder">
        <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
            <twig:Tree:Item label="Work" data-value="work">
                <twig:Tree:Item label="Reports" data-value="reports" />
                <twig:Tree:Item label="Invoices" data-value="invoices" />
            </twig:Tree:Item>
            <twig:Tree:Item label="Personal" data-value="personal">
                <twig:Tree:Item label="Photos" data-value="photos" />
                <twig:Tree:Item label="Letters" data-value="letters" />
            </twig:Tree:Item>
        </twig:Tree:Item>
        <twig:Tree:Item label="Downloads" data-value="downloads">
            <twig:Tree:Item label="Installers" data-value="installers" />
            <twig:Tree:Item label="Archives" data-value="archives" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Desktop" data-value="desktop" />
    </twig:TreeSelect>
    <twig:TreeSelect label="Shared with" name="shared" :multiple="true" placeholder="Select folders">
        <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
            <twig:Tree:Item label="Work" data-value="work">
                <twig:Tree:Item label="Reports" data-value="reports" />
                <twig:Tree:Item label="Invoices" data-value="invoices" />
            </twig:Tree:Item>
            <twig:Tree:Item label="Personal" data-value="personal">
                <twig:Tree:Item label="Photos" data-value="photos" />
                <twig:Tree:Item label="Letters" data-value="letters" />
            </twig:Tree:Item>
        </twig:Tree:Item>
        <twig:Tree:Item label="Downloads" data-value="downloads">
            <twig:Tree:Item label="Installers" data-value="installers" />
            <twig:Tree:Item label="Archives" data-value="archives" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Desktop" data-value="desktop" />
    </twig:TreeSelect>
    <div>
        <twig:Button type="submit" size="sm">
            Save
        </twig:Button>
    </div>
    <p class="text-sm text-muted-foreground">
        Sent: <code id="ts-form-out">nothing yet</code>
    </p>
</form>
<script>
    document.getElementById('ts-form').addEventListener('submit', (event) => {
        event.preventDefault();
        document.getElementById('ts-form-out').textContent = new URLSearchParams(new FormData(event.target)).toString() || 'nothing';
    });
</script>
```

### Another Language

The texts of the button, the search field and the empty result are props.

<!-- height: 380 -->

```twig
<twig:TreeSelect label="Dossier" :searchable="true" :multiple="true" placeholder="Choisir un dossier" searchPlaceholder="Rechercher…" searchLabel="Rechercher" emptyLabel="Aucun résultat" selectedLabel="{count} sélectionnés">
    <twig:Tree:Item label="Documents" icon="lucide:folder" expandedIcon="lucide:folder-open" data-value="documents" :expanded="true">
        <twig:Tree:Item label="Work" data-value="work">
            <twig:Tree:Item label="Reports" data-value="reports" />
            <twig:Tree:Item label="Invoices" data-value="invoices" />
        </twig:Tree:Item>
        <twig:Tree:Item label="Personal" data-value="personal">
            <twig:Tree:Item label="Photos" data-value="photos" />
            <twig:Tree:Item label="Letters" data-value="letters" />
        </twig:Tree:Item>
    </twig:Tree:Item>
    <twig:Tree:Item label="Downloads" data-value="downloads">
        <twig:Tree:Item label="Installers" data-value="installers" />
        <twig:Tree:Item label="Archives" data-value="archives" />
    </twig:Tree:Item>
    <twig:Tree:Item label="Desktop" data-value="desktop" />
</twig:TreeSelect>
```

## Accessibility

- The button announces a popup tree (`aria-haspopup="tree"`, `aria-expanded`); Enter or Space opens it and focus moves to the search field or to the tree. The tree keeps its own keyboard support: arrows, Home and End, typeahead, Enter to choose.
- Escape closes the popup and gives the focus back to the button.
- Pass `label` so the button and the tree have an accessible name.

## Extending

- `tree-select:change` when the choice changes: `detail.values` and `detail.labels`.
- `tree-select:open` and `tree-select:close` when the popup opens and closes.
- The tree inside is the `tree` recipe: its events (`tree:select`, `tree:toggle`, `tree:load` for lazy branches) bubble to the select.

## API

### `<twig:TreeSelect>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string or null | `null` | The name of the hidden input(s) sent with the form. Several nodes are sent as `name[]`. |
| `placeholder` | string | `Select…` | The text shown while nothing is chosen. |
| `multiple` | bool | `false` | Several nodes can be chosen: a plain click toggles a node, Shift extends the choice. |
| `searchable` | bool | `false` | Show a search field above the tree. |
| `searchPlaceholder` | string | `Search…` | The placeholder of the search field. |
| `searchLabel` | string | `Search` | The accessible name of the search field. |
| `emptyLabel` | string | `No results` | The text shown when the search matches nothing. |
| `selectedLabel` | string | `{count} selected` | The text of the button when more than two nodes are chosen. |
| `label` | string or null | `null` | The accessible name of the select and of its tree. |
| `lines` | bool | `false` | Draw guide lines in the tree. |
| `disabled` | bool | `false` | Disable the select. |
| `invalid` | bool | `false` | Mark the select as invalid. |
| `id` | string or null | `null` | The id of the button, so a label can point to it. |

| Block | Description |
| --- | --- |
| `default` | The nodes, as `Tree:Item`. |

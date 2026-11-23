# Cascader

> Pick a value in a hierarchy through columns or one level at a time, with search, single or multiple choice.

## Usage

```twig
<twig:Cascader name="category" :options="[
    {value: 'fruit', label: 'Fruit', children: [{value: 'apple', label: 'Apple'}, {value: 'pear', label: 'Pear'}]},
    {value: 'veg', label: 'Vegetables', children: [{value: 'leek', label: 'Leek'}]},
]" />
```

## Examples

### Columns

Each level opens in a new column; the trigger shows the full path of the choice. Type in the search field to look through every level at once: results show their path.

<!-- height: 340 -->

```twig
<twig:Cascader name="region" :options="[
    {value: 'eu', label: 'Europe', children: [
        {value: 'fr', label: 'France', children: [{value: 'idf', label: 'Île-de-France'}, {value: 'occ', label: 'Occitanie'}]},
        {value: 'de', label: 'Germany', children: [{value: 'by', label: 'Bavaria'}, {value: 'be', label: 'Berlin'}]},
    ]},
    {value: 'am', label: 'Americas', children: [
        {value: 'us', label: 'United States', children: [{value: 'ca', label: 'California'}, {value: 'ny', label: 'New York'}]},
    ]},
]" value="occ" />
```

### Drill down

`mode="drill"` replaces the level as you go deeper, with a back row: better in narrow spaces.

<!-- height: 340 -->

```twig
<twig:Cascader mode="drill" name="topic" separator=" › " :options="[
    {value: 'dev', label: 'Development', children: [{value: 'php', label: 'PHP'}, {value: 'js', label: 'JavaScript'}]},
    {value: 'ops', label: 'Operations', children: [{value: 'ci', label: 'CI'}, {value: 'monitoring', label: 'Monitoring', disabled: true}]},
]" />
```

### Multiple, with a cap

`multiple` turns rows into checkboxes and keeps the popover open; `max` caps the selection. The field is submitted as `name[]`.

<!-- height: 340 -->

```twig
<twig:Cascader name="permissions" multiple :max="3" placeholder="Permissions" :options="[
    {value: 'users', label: 'Users', children: [{value: 'users.read', label: 'Read'}, {value: 'users.write', label: 'Write'}]},
    {value: 'billing', label: 'Billing', children: [{value: 'billing.read', label: 'Read'}, {value: 'billing.write', label: 'Write'}]},
]" :value="['users.read']" />
```

### Cascading selection

With `cascade`, choosing a branch chooses all of its leaves, and a partly chosen branch is mixed.

<!-- height: 340 -->

```twig
<twig:Cascader name="scopes" multiple cascade placeholder="Scopes" :options="[
    {value: 'projects', label: 'Projects', children: [{value: 'p.read', label: 'Read'}, {value: 'p.write', label: 'Write'}, {value: 'p.delete', label: 'Delete'}]},
    {value: 'teams', label: 'Teams', children: [{value: 't.read', label: 'Read'}, {value: 't.write', label: 'Write'}]},
]" :value="['p.read']" />
```

### Branches are selectable

`selectable="any"` lets a branch be chosen: a click chooses it, and the right arrow (or hovering, in columns mode) opens it.

<!-- height: 340 -->

```twig
<twig:Cascader name="folder" selectable="any" placeholder="Choose a folder" :options="[
    {value: 'docs', label: 'Documents', children: [{value: 'docs/contracts', label: 'Contracts'}, {value: 'docs/invoices', label: 'Invoices'}]},
    {value: 'media', label: 'Media'},
]" />
```

### Required and disabled

```twig
<div class="flex flex-wrap gap-3">
    <twig:Cascader name="needed" required :options="[{value: 'a', label: 'Option A'}]" />
    <twig:Cascader name="locked" disabled :options="[{value: 'a', label: 'Option A'}]" value="a" />
</div>
```

## Accessibility

- The trigger announces `aria-expanded`; the popover is a dialog with a search field and one `listbox` per level, with `aria-multiselectable`, `aria-selected`, `aria-expanded` on branches and `aria-checked="mixed"` for partly chosen branches.
- Keys: `↓` from the search field enters the list, `↑` / `↓` move in a level, `→` opens the highlighted branch, `←` (or `Backspace` on an empty search) goes back, `Enter` or `Space` chooses or opens, `Esc` closes and returns focus to the trigger.
- Level changes are announced through a polite live region.
- `required` blocks the form submission while nothing is chosen.
- Tree layouts are better served by the Tree component; this one is a picker.
- Event: `cascader:change` fires with `detail.values` (the chosen values).

## API

### `<twig:Cascader>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | array | `[]` | Nested `{value, label, children?, disabled?}`. Every `value` must be unique across the tree. |
| `name` | string | `null` | Field name; `name[]` when `multiple`. |
| `value` | string, array | `null` | Chosen value (a list when `multiple`). |
| `multiple` | bool | `false` | Checkbox rows; the popover stays open. |
| `max` | int | `null` | Maximum number of choices (`multiple`). |
| `selectable` | `leaf`, `any` | `leaf` | Whether branches can be chosen. |
| `cascade` | bool | `false` | `multiple` only: choosing a branch chooses its leaves; partial branches are mixed. |
| `mode` | `columns`, `drill` | `columns` | Miller columns, or one level at a time. |
| `separator` | string | ` / ` | Text between the levels of a displayed path. |
| `required` | bool | `false` | The form cannot be submitted while empty. |
| `disabled` | bool | `false` | Disables the field. |
| `id` | string | `null` | Id of the trigger, for an external `<label for>`. |
| `placeholder` | string | `Select…` | Text of an empty trigger. |
| `searchLabel` | string | `Search` | Label and placeholder of the search field. |
| `emptyLabel` | string | `No results.` | Text when a level or a search is empty. |
| `backLabel` | string | `Back` | Text of the back row in `drill` mode. |
| `selectedLabel` | string | `{count} selected` | Trigger text with several choices (`{count}` is replaced). |
| `label` | string | `Options` | Accessible name of the popover. |

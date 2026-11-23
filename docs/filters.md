# Filters

> Schema-driven filter bar: chips with operator and value editors, add and clear, state carried in the URL query.

## Usage

```twig
<twig:Filters
    :fields="[
        {name: 'status', label: 'Status', type: 'select', options: {open: 'Open', closed: 'Closed'}},
        {name: 'title', label: 'Title', type: 'text'},
    ]"
    :values="[{field: 'status', operator: 'eq', value: 'open'}]"
/>
```

## Examples

### Field types

Each field has a `type`: `text`, `number`, `select`, `multiselect`, `boolean` or `date`. A type sets the available operators and the value editor. Here `autoSubmit` is off so the preview does not navigate.

<!-- height: 300 -->

```twig
<twig:Filters
    :autoSubmit="false"
    :fields="[
        {name: 'title', label: 'Title', type: 'text'},
        {name: 'status', label: 'Status', type: 'select', options: {open: 'Open', closed: 'Closed', draft: 'Draft'}},
        {name: 'tags', label: 'Tags', type: 'multiselect', options: {bug: 'Bug', feature: 'Feature', docs: 'Docs'}},
        {name: 'votes', label: 'Votes', type: 'number'},
        {name: 'archived', label: 'Archived', type: 'boolean'},
        {name: 'created', label: 'Created', type: 'date'},
    ]"
    :values="[
        {field: 'status', operator: 'eq', value: 'open'},
        {field: 'tags', operator: 'in', value: ['bug', 'docs']},
    ]"
/>
```

### Reading the filters on the server

The component lives in a `GET` form. Each active filter submits its value as `<field>` (`<field>[]` for `multiselect`) and its operator as `<field>__op`, so a request looks like `?status=open&status__op=eq&tags[]=bug&tags__op=in`. Read these from the query and pass the same list back through `values` to restore the chips.

```twig
<twig:Filters
    :autoSubmit="false"
    :fields="[{name: 'status', label: 'Status', type: 'select', options: {open: 'Open', closed: 'Closed'}}]"
    :values="[{field: 'status', operator: 'eq', value: 'open'}]"
/>
```

### Without auto-submit

With `:autoSubmit="false"`, changing a filter only updates the hidden inputs and fires `filters:change`; a surrounding form button can submit when the user is ready.

```twig
<twig:Filters :autoSubmit="false" :fields="[{name: 'q', label: 'Search', type: 'text'}]" />
```

## Accessibility

- The bar is a `group` labelled by `label`; each chip is a `group` named after its field.
- Operators and values are native `select` and `input` elements with accessible names; the multiselect is a `listbox` with checkboxes.
- The "Add filter" menu supports `↑` / `↓` and `Esc`; adding a filter moves focus to its value editor, and removing one returns focus to "Add filter".
- Without JavaScript the bar renders no chips; filters then have to come from your own form.
- Event: `filters:change` fires after every change with `detail.filters` (the active filters).

## API

### `<twig:Filters>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `fields` | array | `[]` | Available filters: `{name, label, type, options?}`. `options` is a `{value: label}` map for `select` and `multiselect`. |
| `values` | array | `[]` | Active filters: `{field, operator, value}` (`value` is an array for `multiselect`). |
| `action` | string | `null` | Form action (defaults to the current URL). |
| `autoSubmit` | bool | `true` | Submit the form whenever a filter changes. |
| `label` | string | `Filters` | Accessible label of the bar. |
| `addLabel` | string | `Add filter` | Text of the add button. |
| `clearLabel` | string | `Clear` | Text of the clear button. |
| `applyLabel` | string | `Apply` | Text of the submit button shown without JavaScript. |
| `emptyLabel` | string | `No more filters` | Text of the add menu when every filter is already active. |
| `selectLabel` | string | `Select…` | Placeholder of the select and multiselect editors. |
| `yesLabel`, `noLabel` | string | `Yes`, `No` | Options of `boolean` fields. |
| `selectedLabel` | string | `{count} selected` | Summary of a multiselect with three or more values. |
| `removeLabel` | string | `Remove {field} filter` | Accessible name of a chip's remove button. |
| `operatorLabel` | string | `{field} operator` | Accessible name of a chip's operator select. |
| `valueLabel` | string | `{field} value` | Accessible name of a chip's value editor. |
| `operatorLabels` | object | `{}` | Operator texts keyed by operator, for example `{eq: 'is', contains: 'contains'}`. The `number` type always shows symbols. |

`{count}` and `{field}` are replaced with the number of values and the field label.

Operators by type: `text` (`contains`, `eq`, `neq`), `number` (`eq`, `neq`, `gt`, `lt`), `select` (`eq`, `neq`), `multiselect` (`in`, `nin`), `boolean` (`eq`), `date` (`eq`, `before`, `after`).

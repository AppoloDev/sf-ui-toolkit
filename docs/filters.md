# Filters

> Schema-driven filter bar: chips with operator and value editors, add and clear, state carried in the URL query.

## Installation

- popover
- button
- input
- native-select
- checkbox

## Usage

```twig
<twig:Filters>
    <twig:Filters:Fields>
        <twig:Filters:Field name="status" label="Status" type="select">
            <twig:Filters:Option value="open" label="Open" />
            <twig:Filters:Option value="closed" label="Closed" />
        </twig:Filters:Field>
        <twig:Filters:Field name="title" label="Title" type="text" />
    </twig:Filters:Fields>
    <twig:Filters:Values>
        <twig:Filters:Value field="status" operator="eq" value="open" />
    </twig:Filters:Values>
</twig:Filters>
```

## Examples

### Field types

Each field has a `type`: `text`, `number`, `select`, `multiselect`, `boolean` or `date`. A type sets the available operators and the value editor. Here `autoSubmit` is off so the preview does not navigate.

<!-- height: 300 -->

```twig
<twig:Filters :autoSubmit="false">
    <twig:Filters:Fields>
        <twig:Filters:Field name="title" label="Title" type="text" />
        <twig:Filters:Field name="status" label="Status" type="select">
            <twig:Filters:Option value="open" label="Open" />
            <twig:Filters:Option value="closed" label="Closed" />
            <twig:Filters:Option value="draft" label="Draft" />
        </twig:Filters:Field>
        <twig:Filters:Field name="tags" label="Tags" type="multiselect">
            <twig:Filters:Option value="bug" label="Bug" />
            <twig:Filters:Option value="feature" label="Feature" />
            <twig:Filters:Option value="docs" label="Docs" />
        </twig:Filters:Field>
        <twig:Filters:Field name="votes" label="Votes" type="number" />
        <twig:Filters:Field name="archived" label="Archived" type="boolean" />
        <twig:Filters:Field name="created" label="Created" type="date" />
    </twig:Filters:Fields>
    <twig:Filters:Values>
        <twig:Filters:Value field="status" operator="eq" value="open" />
        <twig:Filters:Value field="tags" operator="in" :value="['bug', 'docs']" />
    </twig:Filters:Values>
</twig:Filters>
```

### Reading the filters on the server

The component lives in a `GET` form. Each active filter submits its value as `<field>` (`<field>[]` for `multiselect`) and its operator as `<field>__op`, so a request looks like `?status=open&status__op=eq&tags[]=bug&tags__op=in`. Read these from the query and render one `Filters:Value` per active filter to restore the chips; options can come from a Twig loop.

<!-- height: 300 -->

```twig
<twig:Filters :autoSubmit="false">
    <twig:Filters:Fields>
        <twig:Filters:Field name="status" label="Status" type="select">
            <twig:Filters:Option :value="value" :label="label" />
            <twig:Filters:Option :value="value" :label="label" />
        </twig:Filters:Field>
    </twig:Filters:Fields>
    <twig:Filters:Values>
        <twig:Filters:Value field="status" operator="eq" value="open" />
    </twig:Filters:Values>
</twig:Filters>
```

### Without auto-submit

With `:autoSubmit="false"`, changing a filter only updates the hidden inputs and fires `filters:change`; a surrounding form button can submit when the user is ready.

<!-- height: 300 -->

```twig
<twig:Filters :autoSubmit="false">
    <twig:Filters:Fields>
        <twig:Filters:Field name="q" label="Search" type="text" />
    </twig:Filters:Fields>
</twig:Filters>
```

## Accessibility

- The bar is a `group` labelled by `label`; each chip is a `group` named after its field.
- Operators and values are native `select` and `input` elements with accessible names; the multiselect is a `listbox` with checkboxes in a shadcn `Popover`.
- The "Add filter" menu supports `↑` / `↓`, and `Esc` closes it (handled by the `Popover`); adding a filter moves focus to its value editor, and removing one returns focus to "Add filter".
- Without JavaScript the bar renders no chips; filters then have to come from your own form.
- Event: `filters:change` fires after every change with `detail.filters` (the active filters).

## API

### `<twig:Filters>`

| Prop | Type | Default | Description |
|---|---|---|---|
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

| Block | Description |
|---|---|
| `default` | One `Filters:Fields` and optionally one `Filters:Values`. |

### `<twig:Filters:Field>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | | Field name, submitted as the query parameter. |
| `label` | string | | Displayed name. |
| `type` | string | `text` | One of `text`, `number`, `select`, `multiselect`, `boolean`, `date`. |

| Block | Description |
|---|---|
| `default` | `Filters:Option` elements (`select` and `multiselect` only). |

### `<twig:Filters:Option>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | string | | Submitted value. |
| `label` | string | | Displayed text. |

### `<twig:Filters:Value>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `field` | string | | Name of a `Filters:Field`. |
| `operator` | string | `null` | Operator; defaults to the first one of the field type. |
| `value` | string, array | `''` | Value; a list for `multiselect`. |

`{count}` and `{field}` are replaced with the number of values and the field label.

Operators by type: `text` (`contains`, `eq`, `neq`), `number` (`eq`, `neq`, `gt`, `lt`), `select` (`eq`, `neq`), `multiselect` (`in`, `nin`), `boolean` (`eq`), `date` (`eq`, `before`, `after`).

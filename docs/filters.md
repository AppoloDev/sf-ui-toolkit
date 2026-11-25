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
            <twig:Filters:Option value="open" label="Open" />
            <twig:Filters:Option value="closed" label="Closed" />
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

### Full Filter Bar

Every field type in one bar, with several filters already active.

<!-- height: 320 -->

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
            <twig:Filters:Option value="chore" label="Chore" />
        </twig:Filters:Field>
        <twig:Filters:Field name="votes" label="Votes" type="number" />
        <twig:Filters:Field name="archived" label="Archived" type="boolean" />
        <twig:Filters:Field name="created" label="Created" type="date" />
    </twig:Filters:Fields>
    <twig:Filters:Values>
        <twig:Filters:Value field="title" operator="contains" value="export" />
        <twig:Filters:Value field="status" operator="neq" value="closed" />
        <twig:Filters:Value field="tags" operator="in" :value="['bug', 'feature', 'docs']" />
        <twig:Filters:Value field="votes" operator="gt" value="10" />
        <twig:Filters:Value field="archived" operator="eq" value="0" />
        <twig:Filters:Value field="created" operator="after" value="2026-01-01" />
    </twig:Filters:Values>
</twig:Filters>
```

### Typed Inputs

The value editor follows the type: a text field, a number field and a date field.

<!-- height: 260 -->

```twig
<twig:Filters :autoSubmit="false">
    <twig:Filters:Fields>
        <twig:Filters:Field name="name" label="Name" type="text" />
        <twig:Filters:Field name="age" label="Age" type="number" />
        <twig:Filters:Field name="joined" label="Joined" type="date" />
    </twig:Filters:Fields>
    <twig:Filters:Values>
        <twig:Filters:Value field="name" operator="contains" value="Martin" />
        <twig:Filters:Value field="age" operator="gt" value="30" />
        <twig:Filters:Value field="joined" operator="before" value="2026-06-01" />
    </twig:Filters:Values>
</twig:Filters>
```

### Choice Controls

A select, a multiselect with checkboxes and a yes or no choice.

<!-- height: 320 -->

```twig
<twig:Filters :autoSubmit="false">
    <twig:Filters:Fields>
        <twig:Filters:Field name="plan" label="Plan" type="select">
            <twig:Filters:Option value="free" label="Free" />
            <twig:Filters:Option value="pro" label="Pro" />
            <twig:Filters:Option value="team" label="Team" />
        </twig:Filters:Field>
        <twig:Filters:Field name="regions" label="Regions" type="multiselect">
            <twig:Filters:Option value="eu" label="Europe" />
            <twig:Filters:Option value="us" label="United States" />
            <twig:Filters:Option value="asia" label="Asia" />
        </twig:Filters:Field>
        <twig:Filters:Field name="verified" label="Verified" type="boolean" />
    </twig:Filters:Fields>
    <twig:Filters:Values>
        <twig:Filters:Value field="plan" operator="eq" value="pro" />
        <twig:Filters:Value field="regions" operator="in" :value="['eu', 'asia']" />
        <twig:Filters:Value field="verified" operator="eq" value="1" />
    </twig:Filters:Values>
</twig:Filters>
```

### Date Editors

The three date operators: on a day, before it, after it.

<!-- height: 220 -->

```twig
<twig:Filters :autoSubmit="false">
    <twig:Filters:Fields>
        <twig:Filters:Field name="created" label="Created" type="date" />
        <twig:Filters:Field name="due" label="Due" type="date" />
        <twig:Filters:Field name="closed" label="Closed" type="date" />
    </twig:Filters:Fields>
    <twig:Filters:Values>
        <twig:Filters:Value field="created" operator="after" value="2026-01-01" />
        <twig:Filters:Value field="due" operator="before" value="2026-12-31" />
        <twig:Filters:Value field="closed" operator="eq" value="2026-11-25" />
    </twig:Filters:Values>
</twig:Filters>
```

### Table Filtering

A table listens to `filters:change` and hides the rows that do not match. Pick a status or type a title.

<!-- height: 420 -->

```twig
<div id="filtered-table" class="flex max-w-xl flex-col gap-3">
    <twig:Filters :autoSubmit="false">
        <twig:Filters:Fields>
            <twig:Filters:Field name="title" label="Title" type="text" />
            <twig:Filters:Field name="status" label="Status" type="select">
                <twig:Filters:Option value="open" label="Open" />
                <twig:Filters:Option value="closed" label="Closed" />
            </twig:Filters:Field>
        </twig:Filters:Fields>
    </twig:Filters>
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Title
                </twig:Table:Head>
                <twig:Table:Head>
                    Status
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row data-title="Fix the export" data-status="open">
                <twig:Table:Cell>
                    Fix the export
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Open
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row data-title="Add dark mode" data-status="closed">
                <twig:Table:Cell>
                    Add dark mode
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Closed
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row data-title="Speed up the search" data-status="open">
                <twig:Table:Cell>
                    Speed up the search
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Open
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row data-title="Update the docs" data-status="closed">
                <twig:Table:Cell>
                    Update the docs
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Closed
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</div>
<script>
    const table = document.getElementById('filtered-table');
    table.addEventListener('filters:change', (event) => {
        const filters = event.detail.filters;
        table.querySelectorAll('tbody tr').forEach((row) => {
            row.hidden = !filters.every((filter) => {
                const actual = row.dataset[filter.field].toLowerCase();
                const wanted = String(filter.value).toLowerCase();
                if ('contains' === filter.operator) return actual.includes(wanted);
                if ('neq' === filter.operator) return actual !== wanted;
                return actual === wanted;
            });
        });
    });
</script>
```

### Controlled & Translated

All the texts of the bar in French, the operators included, and the state mirrored from the `filters:change` event.

<!-- height: 360 -->

```twig
<div id="filters-controlled" class="flex flex-col gap-3">
    <twig:Filters
        :autoSubmit="false"
        label="Filtres"
        addLabel="Ajouter un filtre"
        clearLabel="Effacer"
        applyLabel="Appliquer"
        emptyLabel="Plus de filtres"
        selectLabel="Choisir…"
        yesLabel="Oui"
        noLabel="Non"
        selectedLabel="{count} choisis"
        removeLabel="Retirer le filtre {field}"
        operatorLabel="Opérateur de {field}"
        valueLabel="Valeur de {field}"
        :operatorLabels="{eq: 'est', neq: 'n’est pas', contains: 'contient', in: 'parmi', nin: 'hors de', before: 'avant', after: 'après'}"
    >
        <twig:Filters:Fields>
            <twig:Filters:Field name="statut" label="Statut" type="select">
                <twig:Filters:Option value="ouvert" label="Ouvert" />
                <twig:Filters:Option value="ferme" label="Fermé" />
            </twig:Filters:Field>
            <twig:Filters:Field name="titre" label="Titre" type="text" />
            <twig:Filters:Field name="cree" label="Créé" type="date" />
        </twig:Filters:Fields>
    </twig:Filters>
    <p class="text-sm text-muted-foreground">
        Filtres actifs : <code data-filters-output>aucun</code>
    </p>
</div>
<script>
    const bar = document.getElementById('filters-controlled');
    bar.addEventListener('filters:change', (event) => {
        const text = event.detail.filters.map((filter) => filter.field + ' ' + filter.operator + ' ' + filter.value).join(' · ');
        bar.querySelector('[data-filters-output]').textContent = text || 'aucun';
    });
</script>
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

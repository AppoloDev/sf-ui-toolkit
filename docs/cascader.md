# Cascader

> Pick a value in a hierarchy through columns or one level at a time, with search, single or multiple choice.

## Installation

- popover
- button
- input

## Usage

```twig
<twig:Cascader name="category">
    <twig:Cascader:Option value="fruit" label="Fruit">
        <twig:Cascader:Option value="apple" label="Apple" />
        <twig:Cascader:Option value="pear" label="Pear" />
    </twig:Cascader:Option>
    <twig:Cascader:Option value="veg" label="Vegetables">
        <twig:Cascader:Option value="leek" label="Leek" />
    </twig:Cascader:Option>
</twig:Cascader>
```

## Examples

### Columns

Each level opens in a new column; the trigger shows the full path of the choice. Type in the search field to look through every level at once: results show their path.

<!-- height: 340 -->

```twig
<twig:Cascader name="region" value="occ">
    <twig:Cascader:Option value="eu" label="Europe">
        <twig:Cascader:Option value="fr" label="France">
            <twig:Cascader:Option value="idf" label="Île-de-France" />
            <twig:Cascader:Option value="occ" label="Occitanie" />
        </twig:Cascader:Option>
        <twig:Cascader:Option value="de" label="Germany">
            <twig:Cascader:Option value="by" label="Bavaria" />
            <twig:Cascader:Option value="be" label="Berlin" />
        </twig:Cascader:Option>
    </twig:Cascader:Option>
    <twig:Cascader:Option value="am" label="Americas">
        <twig:Cascader:Option value="us" label="United States">
            <twig:Cascader:Option value="ca" label="California" />
            <twig:Cascader:Option value="ny" label="New York" />
        </twig:Cascader:Option>
    </twig:Cascader:Option>
</twig:Cascader>
```

### Drill down

`mode="drill"` replaces the level as you go deeper, with a back row: better in narrow spaces. The default `columns` mode switches to drill-down by itself on screens narrower than 640px.

<!-- height: 340 -->

```twig
<twig:Cascader mode="drill" name="topic" separator=" › ">
    <twig:Cascader:Option value="dev" label="Development">
        <twig:Cascader:Option value="php" label="PHP" />
        <twig:Cascader:Option value="js" label="JavaScript" />
    </twig:Cascader:Option>
    <twig:Cascader:Option value="ops" label="Operations">
        <twig:Cascader:Option value="ci" label="CI" />
        <twig:Cascader:Option value="monitoring" label="Monitoring" disabled />
    </twig:Cascader:Option>
</twig:Cascader>
```

### Multiple, with a cap

`multiple` turns rows into checkboxes and keeps the popover open; `max` caps the selection. The field is submitted as `name[]`.

<!-- height: 340 -->

```twig
<twig:Cascader name="permissions" multiple :max="3" placeholder="Permissions" :value="['users.read']">
    <twig:Cascader:Option value="users" label="Users">
        <twig:Cascader:Option value="users.read" label="Read" />
        <twig:Cascader:Option value="users.write" label="Write" />
    </twig:Cascader:Option>
    <twig:Cascader:Option value="billing" label="Billing">
        <twig:Cascader:Option value="billing.read" label="Read" />
        <twig:Cascader:Option value="billing.write" label="Write" />
    </twig:Cascader:Option>
</twig:Cascader>
```

### Cascading selection

With `cascade`, choosing a branch chooses all of its leaves, and a partly chosen branch is mixed.

<!-- height: 340 -->

```twig
<twig:Cascader name="scopes" multiple cascade placeholder="Scopes" :value="['p.read']">
    <twig:Cascader:Option value="projects" label="Projects">
        <twig:Cascader:Option value="p.read" label="Read" />
        <twig:Cascader:Option value="p.write" label="Write" />
        <twig:Cascader:Option value="p.delete" label="Delete" />
    </twig:Cascader:Option>
    <twig:Cascader:Option value="teams" label="Teams">
        <twig:Cascader:Option value="t.read" label="Read" />
        <twig:Cascader:Option value="t.write" label="Write" />
    </twig:Cascader:Option>
</twig:Cascader>
```

### Branches are selectable

`selectable="any"` lets a branch be chosen: a click chooses it, and the right arrow (or hovering, in columns mode) opens it.

<!-- height: 340 -->

```twig
<twig:Cascader name="folder" selectable="any" placeholder="Choose a folder">
    <twig:Cascader:Option value="docs" label="Documents">
        <twig:Cascader:Option value="docs/contracts" label="Contracts" />
        <twig:Cascader:Option value="docs/invoices" label="Invoices" />
    </twig:Cascader:Option>
    <twig:Cascader:Option value="media" label="Media" />
</twig:Cascader>
```

### Custom icon

`Cascader:Icon` replaces the chevron of the trigger; put any Symfony UX Icon in it.

<!-- height: 340 -->

```twig
<twig:Cascader name="folder" placeholder="Choose a folder">
    <twig:Cascader:Icon>
        <twig:ux:icon name="lucide:folder" />
    </twig:Cascader:Icon>
    <twig:Cascader:Option value="docs" label="Documents" />
    <twig:Cascader:Option value="media" label="Media" />
</twig:Cascader>
```

### Required and disabled

<!-- height: 340 -->

```twig
<div class="flex flex-wrap gap-3">
    <twig:Cascader name="needed" required>
        <twig:Cascader:Option value="a" label="Option A" />
    </twig:Cascader>
    <twig:Cascader name="locked" disabled value="a">
        <twig:Cascader:Option value="a" label="Option A" />
    </twig:Cascader>
</div>
```

### Attribute Picker

Pick a product attribute in a three-level tree: category, attribute, then value. Choose several, up to four.

<!-- height: 360 -->

```twig
<twig:Cascader name="attributes" multiple max="4" placeholder="Choose attributes" selectedLabel="{count} attributes">
    <twig:Cascader:Option value="size" label="Size">
        <twig:Cascader:Option value="size-s" label="Small" />
        <twig:Cascader:Option value="size-m" label="Medium" />
        <twig:Cascader:Option value="size-l" label="Large" />
    </twig:Cascader:Option>
    <twig:Cascader:Option value="color" label="Color">
        <twig:Cascader:Option value="color-neutral" label="Neutral">
            <twig:Cascader:Option value="color-black" label="Black" />
            <twig:Cascader:Option value="color-white" label="White" />
            <twig:Cascader:Option value="color-grey" label="Grey" />
        </twig:Cascader:Option>
        <twig:Cascader:Option value="color-bright" label="Bright">
            <twig:Cascader:Option value="color-red" label="Red" />
            <twig:Cascader:Option value="color-blue" label="Blue" />
            <twig:Cascader:Option value="color-green" label="Green" />
        </twig:Cascader:Option>
    </twig:Cascader:Option>
    <twig:Cascader:Option value="material" label="Material">
        <twig:Cascader:Option value="material-cotton" label="Cotton" />
        <twig:Cascader:Option value="material-wool" label="Wool" />
        <twig:Cascader:Option value="material-linen" label="Linen" />
    </twig:Cascader:Option>
</twig:Cascader>
```

### Global Search

The search field looks through every level at once, whichever column is open, and each result shows its full path.

<!-- height: 360 -->

```twig
<twig:Cascader name="place" placeholder="Search a place">
    <twig:Cascader:Option value="fr" label="France">
        <twig:Cascader:Option value="fr-idf" label="Île-de-France">
            <twig:Cascader:Option value="paris" label="Paris" />
            <twig:Cascader:Option value="versailles" label="Versailles" />
        </twig:Cascader:Option>
        <twig:Cascader:Option value="fr-occ" label="Occitanie">
            <twig:Cascader:Option value="toulouse" label="Toulouse" />
            <twig:Cascader:Option value="montpellier" label="Montpellier" />
        </twig:Cascader:Option>
    </twig:Cascader:Option>
    <twig:Cascader:Option value="jp" label="Japan">
        <twig:Cascader:Option value="jp-kanto" label="Kantō">
            <twig:Cascader:Option value="tokyo" label="Tokyo" />
            <twig:Cascader:Option value="yokohama" label="Yokohama" />
        </twig:Cascader:Option>
        <twig:Cascader:Option value="jp-kansai" label="Kansai">
            <twig:Cascader:Option value="osaka" label="Osaka" />
            <twig:Cascader:Option value="kyoto" label="Kyoto" />
        </twig:Cascader:Option>
    </twig:Cascader:Option>
</twig:Cascader>
```

### Deep Search

A tree five levels deep: a search for a leaf lists it with its whole path, so nobody has to open each column to find it.

<!-- height: 360 -->

```twig
<twig:Cascader name="department" placeholder="Search a team" separator=" › ">
    <twig:Cascader:Option value="eng" label="Engineering">
        <twig:Cascader:Option value="eng-platform" label="Platform">
            <twig:Cascader:Option value="eng-infra" label="Infrastructure">
                <twig:Cascader:Option value="eng-infra-net" label="Networking" />
                <twig:Cascader:Option value="eng-infra-db" label="Databases" />
            </twig:Cascader:Option>
            <twig:Cascader:Option value="eng-sec" label="Security">
                <twig:Cascader:Option value="eng-sec-iam" label="Identity" />
                <twig:Cascader:Option value="eng-sec-ops" label="Security operations" />
            </twig:Cascader:Option>
        </twig:Cascader:Option>
        <twig:Cascader:Option value="eng-product" label="Product engineering">
            <twig:Cascader:Option value="eng-web" label="Web">
                <twig:Cascader:Option value="eng-web-front" label="Front end" />
                <twig:Cascader:Option value="eng-web-back" label="Back end" />
            </twig:Cascader:Option>
        </twig:Cascader:Option>
    </twig:Cascader:Option>
    <twig:Cascader:Option value="ops" label="Operations">
        <twig:Cascader:Option value="ops-support" label="Support">
            <twig:Cascader:Option value="ops-support-t1" label="Tier 1" />
            <twig:Cascader:Option value="ops-support-t2" label="Tier 2" />
        </twig:Cascader:Option>
    </twig:Cascader:Option>
</twig:Cascader>
```

### Path Formatting

The `separator` prop sets the text between the levels of the path shown in the trigger and in the search results.

<!-- height: 340 -->

```twig
<div class="flex flex-wrap gap-3">
    <twig:Cascader name="path_arrow" value="mac" separator=" › ">
        <twig:Cascader:Option value="hw" label="Hardware">
            <twig:Cascader:Option value="mac" label="Laptops" />
            <twig:Cascader:Option value="phone" label="Phones" />
        </twig:Cascader:Option>
    </twig:Cascader>
    <twig:Cascader name="path_slash" value="mac" separator="/">
        <twig:Cascader:Option value="hw" label="Hardware">
            <twig:Cascader:Option value="mac" label="Laptops" />
            <twig:Cascader:Option value="phone" label="Phones" />
        </twig:Cascader:Option>
    </twig:Cascader>
    <twig:Cascader name="path_dot" value="mac" separator=" · ">
        <twig:Cascader:Option value="hw" label="Hardware">
            <twig:Cascader:Option value="mac" label="Laptops" />
            <twig:Cascader:Option value="phone" label="Phones" />
        </twig:Cascader:Option>
    </twig:Cascader>
</div>
```

### Translated Labels

Every text is a prop: here the whole picker in French.

<!-- height: 360 -->

```twig
<twig:Cascader
    name="ville"
    multiple
    placeholder="Choisir une ville"
    searchLabel="Rechercher"
    emptyLabel="Aucun résultat."
    backLabel="Retour"
    selectedLabel="{count} sélectionnées"
    label="Villes"
>
    <twig:Cascader:Option value="fr" label="France">
        <twig:Cascader:Option value="paris" label="Paris" />
        <twig:Cascader:Option value="lyon" label="Lyon" />
        <twig:Cascader:Option value="nantes" label="Nantes" />
    </twig:Cascader:Option>
    <twig:Cascader:Option value="be" label="Belgique">
        <twig:Cascader:Option value="bruxelles" label="Bruxelles" />
        <twig:Cascader:Option value="liege" label="Liège" />
    </twig:Cascader:Option>
</twig:Cascader>
```

### Controlled State

The state is read from outside through the `cascader:change` event, which carries the chosen values.

<!-- height: 380 -->

```twig
<div class="flex flex-col gap-3" id="cascader-state">
    <twig:Cascader name="topics" multiple placeholder="Choose topics">
        <twig:Cascader:Option value="news" label="News">
            <twig:Cascader:Option value="news-world" label="World" />
            <twig:Cascader:Option value="news-local" label="Local" />
        </twig:Cascader:Option>
        <twig:Cascader:Option value="sport" label="Sport">
            <twig:Cascader:Option value="sport-football" label="Football" />
            <twig:Cascader:Option value="sport-tennis" label="Tennis" />
        </twig:Cascader:Option>
    </twig:Cascader>
    <p class="text-sm text-muted-foreground">
        Chosen values: <code data-state-output>none</code>
    </p>
</div>
<script>
    const root = document.getElementById('cascader-state');
    root.addEventListener('cascader:change', (event) => {
        root.querySelector('[data-state-output]').textContent = event.detail.values.join(', ') || 'none';
    });
</script>
```

## Accessibility

- The trigger announces `aria-expanded` (kept by the shadcn `Popover`); the panel is a dialog with a search field and one `listbox` per level, with `aria-multiselectable`, `aria-selected`, `aria-expanded` on branches and `aria-checked="mixed"` for partly chosen branches.
- Keys: `↓` from the search field enters the list, `↑` / `↓` move in a level, `→` opens the highlighted branch, `←` (or `Backspace` on an empty search) goes back, `Enter` or `Space` chooses or opens, `Esc` closes and returns focus to the trigger (handled by the `Popover`); `↓` on the closed trigger opens the panel.
- Level changes are announced through a polite live region.
- `required` blocks the form submission while nothing is chosen.
- Tree layouts are better served by the Tree component; this one is a picker.
- Event: `cascader:change` fires with `detail.values` (the chosen values).

## API

### `<twig:Cascader>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name; `name[]` when `multiple`. |
| `value` | string, array | `null` | Chosen value (a list when `multiple`). |
| `multiple` | bool | `false` | Checkbox rows; the popover stays open. |
| `max` | int | `null` | Maximum number of choices (`multiple`). |
| `selectable` | `leaf`, `any` | `leaf` | Whether branches can be chosen. |
| `cascade` | bool | `false` | `multiple` only: choosing a branch chooses its leaves; partial branches are mixed. |
| `mode` | `columns`, `drill` | `columns` | Miller columns (drill-down below 640px), or one level at a time. |
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

| Block | Description |
|---|---|
| `default` | `Cascader:Option` elements (nested for children), and an optional `Cascader:Icon`. |

### `<twig:Cascader:Option>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | string | | Value of the entry; unique across the whole tree. |
| `label` | string | | Displayed text. |
| `disabled` | bool | `false` | The entry cannot be chosen. |

| Block | Description |
|---|---|
| `default` | Nested `Cascader:Option` elements: they make the entry a branch. |

### `<twig:Cascader:Icon>`

| Block | Description |
|---|---|
| `default` | The icon shown in the trigger in place of the chevron. |


# Cascader

> Pick a value in a hierarchy through columns, one level at a time or as a tree, with search, rich rows, lazy loading, single or multiple choice.

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

The state is read from outside through the `cascader:change` event, and it can be written from outside by changing the `data-cascader-selected-value` attribute of the cascader (a JSON list of values).

<!-- height: 400 -->

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
    <div class="flex flex-wrap gap-2">
        <twig:Button variant="outline" size="sm" data-preset='["news-world","news-local"]'>
            All news
        </twig:Button>
        <twig:Button variant="outline" size="sm" data-preset='["sport-tennis"]'>
            Tennis only
        </twig:Button>
        <twig:Button variant="ghost" size="sm" data-preset="[]">
            Reset
        </twig:Button>
    </div>
    <p class="text-sm text-muted-foreground">
        Chosen values: <code data-state-output>none</code>
    </p>
</div>
<script>
    const root = document.getElementById('cascader-state');
    root.addEventListener('cascader:change', (event) => {
        root.querySelector('[data-state-output]').textContent = event.detail.values.join(', ') || 'none';
    });
    root.querySelectorAll('[data-preset]').forEach((button) => button.addEventListener('click', () => {
        const values = button.dataset.preset;
        root.querySelector('[data-controller="cascader"]').setAttribute('data-cascader-selected-value', values);
        root.querySelector('[data-state-output]').textContent = JSON.parse(values).join(', ') || 'none';
    }));
</script>
```

### Avatar Rows

`Cascader:Content` replaces the text of a row with your own markup, here an avatar and a name. The `label` of the option stays the text of the trigger and of the search results.

<!-- height: 380 -->

```twig
<twig:Cascader name="assignee" placeholder="Assign to…">
    <twig:Cascader:Option value="design" label="Design">
        <twig:Cascader:Option value="ana" label="Design / Ana Silva">
            <twig:Cascader:Content>
                <span class="flex items-center gap-2">
                    <twig:Avatar class="size-6">
                        <twig:Avatar:Fallback>AS</twig:Avatar:Fallback>
                    </twig:Avatar>
                    <span>Ana Silva</span>
                </span>
            </twig:Cascader:Content>
        </twig:Cascader:Option>
        <twig:Cascader:Option value="marc" label="Design / Marc Dupont">
            <twig:Cascader:Content>
                <span class="flex items-center gap-2">
                    <twig:Avatar class="size-6">
                        <twig:Avatar:Fallback>MD</twig:Avatar:Fallback>
                    </twig:Avatar>
                    <span>Marc Dupont</span>
                </span>
            </twig:Cascader:Content>
        </twig:Cascader:Option>
    </twig:Cascader:Option>
    <twig:Cascader:Option value="eng" label="Engineering">
        <twig:Cascader:Option value="lea" label="Engineering / Léa Martin">
            <twig:Cascader:Content>
                <span class="flex items-center gap-2">
                    <twig:Avatar class="size-6">
                        <twig:Avatar:Fallback>LM</twig:Avatar:Fallback>
                    </twig:Avatar>
                    <span>Léa Martin</span>
                </span>
            </twig:Cascader:Content>
        </twig:Cascader:Option>
        <twig:Cascader:Option value="omar" label="Engineering / Omar Haddad">
            <twig:Cascader:Content>
                <span class="flex items-center gap-2">
                    <twig:Avatar class="size-6">
                        <twig:Avatar:Fallback>OH</twig:Avatar:Fallback>
                    </twig:Avatar>
                    <span>Omar Haddad</span>
                </span>
            </twig:Cascader:Content>
        </twig:Cascader:Option>
    </twig:Cascader:Option>
</twig:Cascader>
```

### Two-Line Rows

A title and a muted description on each row.

<!-- height: 380 -->

```twig
<twig:Cascader name="plan" placeholder="Choose a plan…">
    <twig:Cascader:Option value="personal" label="Personal">
        <twig:Cascader:Option value="free" label="Free">
            <twig:Cascader:Content>
                <span class="flex flex-col">
                    <span class="font-medium">Free</span>
                    <span class="text-xs text-muted-foreground">One project, community support</span>
                </span>
            </twig:Cascader:Content>
        </twig:Cascader:Option>
        <twig:Cascader:Option value="pro" label="Pro">
            <twig:Cascader:Content>
                <span class="flex flex-col">
                    <span class="font-medium">Pro</span>
                    <span class="text-xs text-muted-foreground">Unlimited projects, email support</span>
                </span>
            </twig:Cascader:Content>
        </twig:Cascader:Option>
    </twig:Cascader:Option>
    <twig:Cascader:Option value="team" label="Team">
        <twig:Cascader:Option value="business" label="Business">
            <twig:Cascader:Content>
                <span class="flex flex-col">
                    <span class="font-medium">Business</span>
                    <span class="text-xs text-muted-foreground">Shared workspace, SSO</span>
                </span>
            </twig:Cascader:Content>
        </twig:Cascader:Option>
    </twig:Cascader:Option>
</twig:Cascader>
```

### Color Dots

A colored dot in front of each label.

<!-- height: 380 -->

```twig
<twig:Cascader name="label" placeholder="Pick a label…">
    <twig:Cascader:Option value="bug" label="Bug">
        <twig:Cascader:Content>
            <span class="flex items-center gap-2">
                <span class="size-2.5 rounded-full bg-red-500"></span>
                <span>Bug</span>
            </span>
        </twig:Cascader:Content>
    </twig:Cascader:Option>
    <twig:Cascader:Option value="feature" label="Feature">
        <twig:Cascader:Content>
            <span class="flex items-center gap-2">
                <span class="size-2.5 rounded-full bg-emerald-500"></span>
                <span>Feature</span>
            </span>
        </twig:Cascader:Content>
    </twig:Cascader:Option>
    <twig:Cascader:Option value="chore" label="Chore">
        <twig:Cascader:Content>
            <span class="flex items-center gap-2">
                <span class="size-2.5 rounded-full bg-sky-500"></span>
                <span>Chore</span>
            </span>
        </twig:Cascader:Content>
    </twig:Cascader:Option>
</twig:Cascader>
```

### Inherited Colors

Children use the color of their branch, so a color family reads at a glance.

<!-- height: 380 -->

```twig
<twig:Cascader name="tone" placeholder="Pick a tone…">
    <twig:Cascader:Option value="warm" label="Warm">
        <twig:Cascader:Content>
            <span class="flex items-center gap-2">
                <span class="size-2.5 rounded-full bg-orange-500"></span>
                <span>Warm</span>
            </span>
        </twig:Cascader:Content>
        <twig:Cascader:Option value="amber" label="Amber">
            <twig:Cascader:Content>
                <span class="flex items-center gap-2">
                    <span class="size-2.5 rounded-full bg-orange-400"></span>
                    <span>Amber</span>
                </span>
            </twig:Cascader:Content>
        </twig:Cascader:Option>
        <twig:Cascader:Option value="coral" label="Coral">
            <twig:Cascader:Content>
                <span class="flex items-center gap-2">
                    <span class="size-2.5 rounded-full bg-orange-600"></span>
                    <span>Coral</span>
                </span>
            </twig:Cascader:Content>
        </twig:Cascader:Option>
    </twig:Cascader:Option>
    <twig:Cascader:Option value="cool" label="Cool">
        <twig:Cascader:Content>
            <span class="flex items-center gap-2">
                <span class="size-2.5 rounded-full bg-sky-500"></span>
                <span>Cool</span>
            </span>
        </twig:Cascader:Content>
        <twig:Cascader:Option value="sky" label="Sky">
            <twig:Cascader:Content>
                <span class="flex items-center gap-2">
                    <span class="size-2.5 rounded-full bg-sky-400"></span>
                    <span>Sky</span>
                </span>
            </twig:Cascader:Content>
        </twig:Cascader:Option>
        <twig:Cascader:Option value="indigo" label="Indigo">
            <twig:Cascader:Content>
                <span class="flex items-center gap-2">
                    <span class="size-2.5 rounded-full bg-sky-700"></span>
                    <span>Indigo</span>
                </span>
            </twig:Cascader:Content>
        </twig:Cascader:Option>
    </twig:Cascader:Option>
</twig:Cascader>
```

### Footer Flyout

`Cascader:Footer` adds a bar under the columns. `cascader#clear` empties the choice and `cascader#dismiss` closes the popover.

<!-- height: 420 -->

```twig
<twig:Cascader name="regions" multiple cascade placeholder="Choose regions…">
    <twig:Cascader:Footer>
        <div class="flex items-center justify-between border-t border-border p-2">
            <twig:Button variant="ghost" size="sm" data-action="click->cascader#clear">
                Clear
            </twig:Button>
            <twig:Button size="sm" data-action="click->cascader#dismiss">
                Apply
            </twig:Button>
        </div>
    </twig:Cascader:Footer>
    <twig:Cascader:Option value="eu" label="Europe">
        <twig:Cascader:Option value="fr" label="France" />
        <twig:Cascader:Option value="de" label="Germany" />
        <twig:Cascader:Option value="es" label="Spain" />
    </twig:Cascader:Option>
    <twig:Cascader:Option value="am" label="Americas">
        <twig:Cascader:Option value="us" label="United States" />
        <twig:Cascader:Option value="br" label="Brazil" />
    </twig:Cascader:Option>
</twig:Cascader>
```

### Embedded Panel

`inline` renders the panel in place, with no trigger and no popover, to embed it in a page or a card.

<!-- height: 420 -->

```twig
<div id="cascader-embedded" class="flex flex-wrap items-start gap-6">
    <twig:Cascader inline name="category">
        <twig:Cascader:Option value="fruit" label="Fruit">
            <twig:Cascader:Option value="apple" label="Apple" />
            <twig:Cascader:Option value="pear" label="Pear" />
        </twig:Cascader:Option>
        <twig:Cascader:Option value="veg" label="Vegetables">
            <twig:Cascader:Option value="carrot" label="Carrot" />
            <twig:Cascader:Option value="leek" label="Leek" />
        </twig:Cascader:Option>
    </twig:Cascader>
    <twig:Badge variant="secondary" data-embedded-output>
        Nothing chosen
    </twig:Badge>
</div>
<script>
    const embedded = document.getElementById('cascader-embedded');
    embedded.addEventListener('cascader:change', (event) => {
        embedded.querySelector('[data-embedded-output]').textContent = event.detail.values.join(', ') || 'Nothing chosen';
    });
</script>
```

### Removable Chips

With `chips`, each chosen value is shown as a chip under the trigger, with a button to remove it.

<!-- height: 380 -->

```twig
<twig:Cascader name="skills" multiple chips placeholder="Add skills…" :value="['php', 'css']">
    <twig:Cascader:Option value="backend" label="Backend">
        <twig:Cascader:Option value="php" label="PHP" />
        <twig:Cascader:Option value="sql" label="SQL" />
    </twig:Cascader:Option>
    <twig:Cascader:Option value="frontend" label="Frontend">
        <twig:Cascader:Option value="css" label="CSS" />
        <twig:Cascader:Option value="js" label="JavaScript" />
    </twig:Cascader:Option>
</twig:Cascader>
```

### Async Loading

A `lazy` option has no children in the markup: they are requested when its branch opens. The page answers the `cascader:load` event with `detail.resolve(items)`; here after a short delay, as a request would.

<!-- height: 380 -->

```twig
<div id="cascader-async">
    <twig:Cascader name="place" placeholder="Pick a city…" loadingLabel="Loading…">
        <twig:Cascader:Option value="europe" label="Europe" lazy />
        <twig:Cascader:Option value="asia" label="Asia" lazy />
    </twig:Cascader>
</div>
<script>
    const cities = {
        europe: [{ value: 'paris', label: 'Paris' }, { value: 'rome', label: 'Rome' }, { value: 'oslo', label: 'Oslo' }],
        asia: [{ value: 'tokyo', label: 'Tokyo' }, { value: 'seoul', label: 'Seoul' }],
    };
    document.getElementById('cascader-async').addEventListener('cascader:load', (event) => {
        setTimeout(() => event.detail.resolve(cities[event.detail.value] ?? []), 700);
    });
</script>
```

### Virtualized List

Columns of more than 150 rows only render the rows around the viewport, so a list of 5,000 entries stays fast. Scrolling, search and the arrow keys work as usual.

<!-- height: 380 -->

```twig
<twig:Cascader
    name="record"
    placeholder="Pick one of 5,000…"
    :items="range(1, 5000)|map(number => {value: 'record-' ~ number, label: 'Record ' ~ number})"
/>
```

### Flat Data

`items` takes a flat list where each entry names its `parent`, as a database returns it, instead of nested options.

<!-- height: 380 -->

```twig
<twig:Cascader
    name="folder"
    placeholder="Pick a folder…"
    :items="[
        {value: 'docs', label: 'Documents', parent: null},
        {value: 'invoices', label: 'Invoices', parent: 'docs'},
        {value: 'invoices-2026', label: '2026', parent: 'invoices'},
        {value: 'invoices-2025', label: '2025', parent: 'invoices'},
        {value: 'contracts', label: 'Contracts', parent: 'docs'},
        {value: 'media', label: 'Media', parent: null},
        {value: 'photos', label: 'Photos', parent: 'media'},
        {value: 'videos', label: 'Videos', parent: 'media'},
    ]"
/>
```

### Tree Mode

`mode="tree"` unfolds the branches in a single indented column, like a file tree. The chevron (or the Right and Left arrow keys) opens and closes a branch.

<!-- height: 420 -->

```twig
<twig:Cascader name="paths" mode="tree" multiple cascade placeholder="Choose files…">
    <twig:Cascader:Option value="src" label="src">
        <twig:Cascader:Option value="components" label="components">
            <twig:Cascader:Option value="button" label="Button.twig" />
            <twig:Cascader:Option value="card" label="Card.twig" />
        </twig:Cascader:Option>
        <twig:Cascader:Option value="index" label="index.js" />
    </twig:Cascader:Option>
    <twig:Cascader:Option value="docs" label="docs">
        <twig:Cascader:Option value="readme" label="README.md" />
    </twig:Cascader:Option>
    <twig:Cascader:Option value="license" label="LICENSE" />
</twig:Cascader>
```

## Extending

- `cascader:load`: dispatched when a `lazy` branch opens; call `event.detail.resolve(items)` with a list of `{value, label, disabled, lazy}` (`event.detail.value` is the branch value).
- `cascader:change`: dispatched with `detail.values` whenever the choice changes.
- Set `data-cascader-selected-value` (a JSON list of values) on the cascader to change the choice from outside, without a `cascader:change` event.
- Actions for markup placed inside the cascader (a footer, for example): `cascader#clear` empties the choice, `cascader#dismiss` closes the popover.
- Lists of more than 150 rows in a column are virtualized: only the rows near the viewport are rendered.

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
| `mode` | `columns`, `drill`, `tree` | `columns` | Miller columns (drill-down below 640px), one level at a time, or one indented column with unfoldable branches. |
| `inline` | bool | `false` | Renders the panel in place, without a popover or a trigger. |
| `chips` | bool | `false` | `multiple` only: shows each chosen value as a removable chip under the trigger. |
| `items` | list | `[]` | Flat list of entries (`value`, `label`, `parent`, `disabled`, `lazy`) used instead of nested options. |
| `separator` | string | ` / ` | Text between the levels of a displayed path. |
| `required` | bool | `false` | The form cannot be submitted while empty. |
| `disabled` | bool | `false` | Disables the field. |
| `id` | string | `null` | Id of the trigger, for an external `<label for>`. |
| `placeholder` | string | `Select…` | Text of an empty trigger. |
| `searchLabel` | string | `Search` | Label and placeholder of the search field. |
| `emptyLabel` | string | `No results.` | Text when a level or a search is empty. |
| `backLabel` | string | `Back` | Text of the back row in `drill` mode. |
| `selectedLabel` | string | `{count} selected` | Trigger text with several choices (`{count}` is replaced). |
| `loadingLabel` | string | `Loading…` | Text shown while the children of a `lazy` branch load. |
| `removeLabel` | string | `Remove {label}` | Accessible name of a chip's remove button (`{label}` is replaced). |
| `label` | string | `Options` | Accessible name of the popover. |

| Block | Description |
|---|---|
| `default` | `Cascader:Option` elements (nested for children), an optional `Cascader:Icon` and an optional `Cascader:Footer`. |

### `<twig:Cascader:Option>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | string | | Value of the entry; unique across the whole tree. |
| `label` | string | | Displayed text. |
| `disabled` | bool | `false` | The entry cannot be chosen. |
| `lazy` | bool | `false` | The entry is a branch whose children are loaded when it opens, through the `cascader:load` event. |

| Block | Description |
|---|---|
| `default` | An optional `Cascader:Content`, then nested `Cascader:Option` elements: they make the entry a branch. |

### `<twig:Cascader:Icon>`

| Block | Description |
|---|---|
| `default` | The icon shown in the trigger in place of the chevron. |


### `<twig:Cascader:Content>`

| Block | Description |
|---|---|
| `default` | Custom content of the row of the parent option. The option's `label` is still used in the trigger, the chips and the search. |

### `<twig:Cascader:Footer>`

| Block | Description |
|---|---|
| `default` | Content shown under the columns. `cascader#clear` and `cascader#dismiss` actions are available to its buttons. |

# Stats

> KPI cards in a responsive grid: label, value, trend badge, comparison line, optional icon and progress meter.

## Usage

Figures and deltas are passed already formatted, so the component never guesses a locale or a currency.

```twig
<twig:Stats>
    <twig:Stats:Card label="Revenue" value="$48,200" delta="+12.5%" comparison="vs last month" />
    <twig:Stats:Card label="Churn" value="2.4%" delta="-0.3%" invert comparison="vs last month" />
</twig:Stats>
```

## Examples

### Overview

The trend badge is green for an increase and red for a decrease; its direction is guessed from a leading `-`, or set with `trend`.

```twig
<twig:Stats>
    <twig:Stats:Card label="Total revenue" value="$48,200" delta="+12.5%" comparison="vs last month" icon="lucide:dollar-sign" />
    <twig:Stats:Card label="New customers" value="1,284" delta="+8.1%" comparison="vs last month" icon="lucide:users" />
    <twig:Stats:Card label="Refunds" value="$1,920" delta="-4.2%" comparison="vs last month" icon="lucide:undo-2" />
    <twig:Stats:Card label="Active now" value="573" delta="0%" trend="neutral" comparison="no change" icon="lucide:activity" />
</twig:Stats>
```

### When a decrease is good

`invert` swaps the colors for metrics where lower is better.

```twig
<twig:Stats :columns="2">
    <twig:Stats:Card label="Churn rate" value="2.4%" delta="-0.3%" invert comparison="vs last quarter" />
    <twig:Stats:Card label="Error rate" value="0.8%" delta="+0.2%" invert comparison="vs last quarter" />
</twig:Stats>
```

### Divided panel

`divided` joins the cards into one bordered panel separated by thin rules.

```twig
<twig:Stats divided :columns="3">
    <twig:Stats:Card label="Sales" value="$12,480" delta="+6.3%" comparison="this week" />
    <twig:Stats:Card label="Orders" value="342" delta="+2.1%" comparison="this week" />
    <twig:Stats:Card label="Returns" value="18" delta="-9%" invert comparison="this week" />
</twig:Stats>
```

### Progress meter

`progress` (0 to 100) adds a meter, and the slot holds extra content under the figure.

```twig
<twig:Stats :columns="2">
    <twig:Stats:Card label="API quota" value="7,420 / 10,000" progress="74" progressLabel="Quota used" />
    <twig:Stats:Card label="Storage" value="38 GB" progress="38" progressLabel="Storage used" comparison="of 100 GB">
        <p class="text-xs text-muted-foreground">Next cleanup on Monday.</p>
    </twig:Stats:Card>
</twig:Stats>
```

### Translated texts

The words spoken to screen readers are props.

```twig
<twig:Stats :columns="2">
    <twig:Stats:Card label="Chiffre d'affaires" value="48 200 €" delta="+12,5 %" comparison="vs mois dernier" increaseLabel="Hausse" decreaseLabel="Baisse" neutralLabel="Stable" />
    <twig:Stats:Card label="Quota" value="74 %" progress="74" progressLabel="Quota utilisé" />
</twig:Stats>
```

## Accessibility

- Each card is a description list: the label is the term and the figure its description.
- The trend is not conveyed by color alone: the arrow is decorative, and the direction is spoken before the delta (`increaseLabel`, `decreaseLabel`, `neutralLabel`).
- The meter is a `progressbar` with `aria-valuemin`, `aria-valuemax` and `aria-valuenow`, named by `progressLabel`.

## API

### `<twig:Stats>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `1`, `2`, `3`, `4` | `4` | Columns from the large breakpoint up (fewer on small screens). |
| `divided` | bool | `false` | One bordered panel with thin rules instead of separate cards. |

| Block | Description |
|---|---|
| `default` | `Stats:Card` elements. |

### `<twig:Stats:Card>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | required | What is measured. |
| `value` | string | required | The figure, already formatted. |
| `delta` | string | `null` | Change, already formatted; a leading `-` means a decrease. |
| `trend` | `up`, `down`, `neutral` | `null` | Overrides the direction guessed from `delta`. |
| `invert` | bool | `false` | A decrease is good news: swaps the colors. |
| `comparison` | string | `null` | Text next to the delta, such as `vs last month`. |
| `icon` | string | `null` | Symfony UX Icons name shown in a tile. |
| `progress` | number | `null` | 0 to 100: shows a meter under the figure. |
| `progressLabel` | string | `Progress` | Accessible name of the meter. |
| `increaseLabel` | string | `Increase` | Spoken before the delta when it is an increase. |
| `decreaseLabel` | string | `Decrease` | Spoken before the delta when it is a decrease. |
| `neutralLabel` | string | `No change` | Spoken before the delta when nothing changed. |

| Block | Description |
|---|---|
| `default` | Extra content under the figure: a list, a sparkline, a footer. |


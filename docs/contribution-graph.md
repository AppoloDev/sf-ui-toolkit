# Contribution Graph

> A calendar heatmap like the contribution graph of a code host: one square per day over a year, intensity levels, month labels, a legend, and a tooltip text for every day. Twig and CSS only.

## Installation

- card (only for one example)

## Usage

```twig
<twig:ContributionGraph :values="{'2026-11-20': 4, '2026-11-21': 9}" />
```

`values` is a map of dates to counts, or a list of `{date, count}`. Days that are not given count as zero.

## Examples

### Basic

A year of days, in columns of weeks. Each square carries a tooltip.

<!-- height: 200 -->

```twig
<twig:ContributionGraph :values="range(0, 364)|map(i => {date: ('now -' ~ i ~ ' days')|date('Y-m-d'), count: (i * 7919 + 13) % 11 > 6 ? (i * 31) % 13 : (i * 17) % 3})" />
```

### Few Days

Only the days with a count are given; the others are empty.

<!-- height: 200 -->

```twig
<twig:ContributionGraph :weeks="20" :values="{'now'|date('Y-m-d'): 4, ('now -3 days')|date('Y-m-d'): 12, ('now -10 days')|date('Y-m-d'): 2}" />
```

### Sunday First

`weekStart="0"` starts the columns on Sunday.

<!-- height: 200 -->

```twig
<twig:ContributionGraph :weekStart="0" :weeks="26" :values="range(0, 364)|map(i => {date: ('now -' ~ i ~ ' days')|date('Y-m-d'), count: (i * 7919 + 13) % 11 > 6 ? (i * 31) % 13 : (i * 17) % 3})" />
```

### Thresholds

`thresholds` sets where each of the four levels starts.

<!-- height: 200 -->

```twig
<twig:ContributionGraph :weeks="26" :thresholds="[1, 5, 10, 20]" :values="range(0, 364)|map(i => {date: ('now -' ~ i ~ ' days')|date('Y-m-d'), count: (i * 7919 + 13) % 11 > 6 ? (i * 31) % 13 : (i * 17) % 3})" />
```

### Another Language

Month and day names follow `locale`; the other texts are props.

<!-- height: 200 -->

```twig
<twig:ContributionGraph locale="fr" :weeks="26" tooltip="{count} contributions le {date}" lessLabel="Moins" moreLabel="Plus" label="Contributions" :values="range(0, 364)|map(i => {date: ('now -' ~ i ~ ' days')|date('Y-m-d'), count: (i * 7919 + 13) % 11 > 6 ? (i * 31) % 13 : (i * 17) % 3})" />
```

### In A Card

Inside the official `Card`.

<!-- height: 300 -->

```twig
<twig:Card class="w-fit max-w-full">
    <twig:Card:Header>
        <twig:Card:Title>
            Activity
        </twig:Card:Title>
        <twig:Card:Description>
            The last six months
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content>
        <twig:ContributionGraph :weeks="26" :values="range(0, 364)|map(i => {date: ('now -' ~ i ~ ' days')|date('Y-m-d'), count: (i * 7919 + 13) % 11 > 6 ? (i * 31) % 13 : (i * 17) % 3})" />
    </twig:Card:Content>
</twig:Card>
```

## Accessibility

- The graph is a group with an accessible name, and every square has a `title` with its date and count.
- The levels are also given as `data-level` (0 to 4); do not rely on the color alone when the numbers matter: show the totals next to the graph.

## API

### `<twig:ContributionGraph>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | array | `[]` | A map of dates to counts, or a list of `date` and `count` items. |
| `end` | string or null | `null` | The last day shown. Without it, today. |
| `weeks` | integer | `53` | The number of weeks shown. |
| `weekStart` | integer | `1` | The first day of the week: 0 is Sunday, 1 is Monday. |
| `thresholds` | array | `1, 3, 6, 10` | The counts from which levels 1 to 4 start. |
| `locale` | string | `en` | The locale of the month and day names. |
| `tooltip` | string | `{count} contributions on {date}` | The text of a day. |
| `lessLabel` | string | `Less` | The text before the legend. |
| `moreLabel` | string | `More` | The text after the legend. |
| `label` | string | `Contribution graph` | The accessible name. |
| `showLegend` | bool | `true` | Show the legend. |
| `showWeekdays` | bool | `true` | Show some weekday names. |

| Block | Description |
| --- | --- |
| `default` | Not used. |

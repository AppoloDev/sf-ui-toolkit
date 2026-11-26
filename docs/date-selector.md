# Date Selector

> One control to pick a day, a week, a month, a year or a custom period: previous and next arrows, a mode switcher, a readable label, and hidden start and end dates for a form.

## Installation

- button, card (only for the examples)

## Usage

Place the selector where the period is chosen. It writes `name_start` and `name_end` for a form and fires `date-selector:change` for your own code.

```twig
<twig:DateSelector name="period" mode="month" />
```

## Examples

### Basic

Arrows move by the length of the mode; the label says what is shown. The mode switcher changes between a day, a week, a month, a year and a custom period.

```twig
<twig:DateSelector />
```

### Day Only

One mode: no switcher.

```twig
<twig:DateSelector mode="day" :modes="['day']" />
```

### Week And Month

Only two modes, weeks starting on Sunday.

```twig
<twig:DateSelector mode="week" :modes="['week', 'month']" :weekStart="0" />
```

### Custom Period

The range mode shows two date fields; the arrows move the whole period by its length.

```twig
<twig:DateSelector mode="range" date="2026-11-01" end="2026-11-15" />
```

### Limits

`min` and `max` disable the arrows at the edges.

```twig
<twig:DateSelector mode="month" date="2026-11-10" min="2026-09-01" max="2026-12-31" />
```

### Another Language

`locale` for the label, a prop for each text.

```twig
<twig:DateSelector locale="fr" todayLabel="Aujourd'hui" previousLabel="Précédent" nextLabel="Suivant" dayLabel="Jour" weekLabel="Semaine" monthLabel="Mois" yearLabel="Année" rangeLabel="Période" fromLabel="Du" toLabel="Au" label="Date" />
```

### In A Form

With `name`, `name_start` and `name_end` are sent with the form. Submit to see them.

<!-- height: 260 -->

```twig
<form id="ds-form" class="grid gap-3">
    <twig:DateSelector name="period" />
    <div>
        <twig:Button type="submit" size="sm">
            Filter
        </twig:Button>
    </div>
    <p class="text-sm text-muted-foreground">
        Sent: <code id="ds-form-out">nothing yet</code>
    </p>
</form>
<script>
    document.getElementById('ds-form').addEventListener('submit', (event) => {
        event.preventDefault();
        document.getElementById('ds-form-out').textContent = new URLSearchParams(new FormData(event.target)).toString();
    });
</script>
```

### Filtering A List

`date-selector:change` carries the mode and the period: here it drives a card that shows what a report would be asked for.

<!-- height: 260 -->

```twig
<div class="grid gap-3">
    <twig:DateSelector id="ds-report" mode="week" />
    <twig:Card>
        <twig:Card:Header>
            <twig:Card:Title>
                Sales report
            </twig:Card:Title>
            <twig:Card:Description id="ds-report-out">
                Choose a period.
            </twig:Card:Description>
        </twig:Card:Header>
    </twig:Card>
</div>
<script>
    const selector = document.getElementById('ds-report');
    selector.addEventListener('date-selector:change', (event) => {
        document.getElementById('ds-report-out').textContent = event.detail.mode + ': ' + event.detail.start + ' to ' + event.detail.end;
    });
</script>
```

## Accessibility

- The selector is a group with an accessible name; the arrows have names, the label is a polite live region, and the mode buttons use `aria-pressed`.
- All texts are props and the label follows `locale`.
- In the range mode the two date fields are native and keyboard friendly.

## Extending

- `date-selector:change` when the period or the mode changes: `detail.mode`, `detail.start`, `detail.end` (`YYYY-MM-DD`).

## API

### `<twig:DateSelector>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string or null | `null` | The name of the form fields: `name_start` and `name_end` are written. |
| `mode` | `day`, `week`, `month`, `year`, `range` | `month` | The mode shown. |
| `modes` | array | all five | The modes the user can switch to. |
| `date` | string or null | `null` | The date shown (`YYYY-MM-DD`), or the start of a range. Without it, today. |
| `end` | string or null | `null` | The end of a range. |
| `weekStart` | integer | `1` | The first day of the week: 0 is Sunday, 1 is Monday. |
| `locale` | string | `en` | The locale of the label. |
| `min` | string or null | `null` | The earliest date that can be reached. |
| `max` | string or null | `null` | The latest date that can be reached. |
| `todayLabel` | string | `Today` | The text of the today button. |
| `previousLabel` | string | `Previous` | The accessible name of the previous arrow. |
| `nextLabel` | string | `Next` | The accessible name of the next arrow. |
| `dayLabel` | string | `Day` | The name of the day mode. |
| `weekLabel` | string | `Week` | The name of the week mode. |
| `monthLabel` | string | `Month` | The name of the month mode. |
| `yearLabel` | string | `Year` | The name of the year mode. |
| `rangeLabel` | string | `Period` | The name of the range mode. |
| `fromLabel` | string | `From` | The label of the start field of a range. |
| `toLabel` | string | `To` | The label of the end field of a range. |
| `label` | string | `Date` | The accessible name of the selector. |

| Block | Description |
| --- | --- |
| `default` | Not used. |

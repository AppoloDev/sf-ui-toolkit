# Mini Calendar

> A strip of consecutive days to pick a date: five or seven days around the chosen one, arrows to page, today and event counts, min and max dates, and a value for the form.

## Installation

- button (only for the form example)
- card and separator (only for the composition example)

## Usage

```twig
<twig:MiniCalendar :days="7" name="day" />
```

The strip starts around the selected date (or today). The arrows page by as many days as it shows. For a full month grid, use the official `Calendar`; the strip is the light alternative for a dashboard, a sidebar or a booking form.

## Examples

### Standard

Five days around today, each a button. Choose one, then page with the arrows (or the Left and Right keys at the edges).

<!-- height: 130 -->

```twig
<twig:MiniCalendar class="max-w-sm" />
```

### Seven Days

`days` sets how many days are shown.

<!-- height: 130 -->

```twig
<twig:MiniCalendar :days="7" class="max-w-md" />
```

### Without Arrows

`navigation` off: a fixed strip, for a week that your own code moves.

<!-- height: 130 -->

```twig
<twig:MiniCalendar :days="7" :navigation="false" class="max-w-md" />
```

### Selected Date

`value` is the date already chosen, as `YYYY-MM-DD`; the strip is centered on it.

<!-- height: 130 -->

```twig
<twig:MiniCalendar :value="'now'|date_modify('+2 days')|date('Y-m-d')" class="max-w-sm" />
```

### Month Caption

`showMonth` adds the month and the year above the strip; it follows the paging.

<!-- height: 160 -->

```twig
<twig:MiniCalendar :days="7" :showMonth="true" class="max-w-md" />
```

### Event Counts

`events` maps dates to a number: it is shown as a badge on the day and read by screen readers (`eventsLabel`).

<!-- height: 130 -->

```twig
<twig:MiniCalendar :days="7" :events="{ ('now'|date_modify('+1 days')|date('Y-m-d')): 2, ('now'|date_modify('+3 days')|date('Y-m-d')): 1, ('now'|date_modify('+4 days')|date('Y-m-d')): 5 }" class="max-w-md" />
```

### Minimum And Maximum

Days outside `min` and `max` cannot be chosen.

<!-- height: 130 -->

```twig
<twig:MiniCalendar :days="7" :min="'now'|date_modify('-1 days')|date('Y-m-d')" :max="'now'|date_modify('+4 days')|date('Y-m-d')" class="max-w-md" />
```

### Another Language

`locale` for the weekday and month names, `previousLabel`, `nextLabel` and `label` for the rest.

<!-- height: 160 -->

```twig
<twig:MiniCalendar :days="7" locale="fr" :showMonth="true" previousLabel="Jours précédents" nextLabel="Jours suivants" label="Choisir une date" class="max-w-md" />
```

### In A Form

`name` adds a hidden field that carries the date to the form.

<!-- height: 200 -->

```twig
<form class="grid max-w-md gap-3" onsubmit="event.preventDefault(); this.querySelector('output').textContent = new URLSearchParams(new FormData(this)).toString();">
    <twig:MiniCalendar :days="7" name="day" :value="'now'|date_modify('+1 days')|date('Y-m-d')" />
    <div class="flex items-center gap-3">
        <twig:Button type="submit" variant="outline" size="sm">
            Book
        </twig:Button>
        <output class="font-mono text-xs text-muted-foreground"></output>
    </div>
</form>
```

### Selection Event

`mini-calendar:select` carries the chosen date.

<!-- height: 180 -->

```twig
<div class="grid max-w-md gap-2">
    <twig:MiniCalendar id="mini-event" :days="7" />
    <p class="text-sm text-muted-foreground">
        Chosen: <code id="mini-event-value">none</code>
    </p>
</div>
<script>
    document.getElementById('mini-event').addEventListener('mini-calendar:select', (event) => {
        document.getElementById('mini-event-value').textContent = event.detail.value;
    });
</script>
```

### Composition

A card with a title, the strip, the month, and the agenda of the chosen day below.

<!-- height: 360 -->

```twig
<twig:Card class="w-full max-w-md">
    <twig:Card:Header>
        <twig:Card:Title>
            Schedule
        </twig:Card:Title>
        <twig:Card:Description id="mini-comp-text">
            Pick a day to see its agenda.
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="grid gap-4">
        <twig:MiniCalendar id="mini-comp" :days="7" :showMonth="true" :value="'now'|date_modify('+0 days')|date('Y-m-d')" :events="{ ('now'|date_modify('+0 days')|date('Y-m-d')): 2, ('now'|date_modify('+2 days')|date('Y-m-d')): 1 }" />
        <twig:Separator />
        <ul class="grid gap-2 text-sm">
            <li class="flex justify-between"><span>Stand-up</span><span class="text-muted-foreground">9:30</span></li>
            <li class="flex justify-between"><span>Review</span><span class="text-muted-foreground">14:00</span></li>
        </ul>
    </twig:Card:Content>
</twig:Card>
<script>
    document.getElementById('mini-comp').addEventListener('mini-calendar:select', (event) => {
        document.getElementById('mini-comp-text').textContent = 'Agenda of ' + event.detail.value;
    });
</script>
```

### Sidebar Widget

A narrow strip in a sidebar, with five days.

<!-- height: 160 -->

```twig
<div class="w-64 rounded-lg border p-3">
    <p class="mb-2 text-xs font-medium uppercase text-muted-foreground">
        This week
    </p>
    <twig:MiniCalendar :navigation="false" />
</div>
```

## Accessibility

- The days are buttons in a labeled group. The chosen day has `aria-pressed`, today has `aria-current="date"`, and each button is named with the full date (and the number of events).
- Left and Right move between the days; past the edge the strip pages. Days outside `min` and `max` are disabled.
- The month caption is a polite live region.
- All texts are props: the arrows, the event count, the group name; the names of days and months follow `locale`.

## Extending

`mini-calendar:select` (with `detail.value`) and `mini-calendar:page` (with `detail.start`) are dispatched on the element. Set `data-mini-calendar-value-value` or `data-mini-calendar-events-value` to change the selection or the events from your code.

## API

### `<twig:MiniCalendar>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | string or null | `null` | The selected date, as `YYYY-MM-DD`. |
| `days` | integer | `5` | How many days are shown. |
| `min` | string or null | `null` | The first date that can be chosen. |
| `max` | string or null | `null` | The last date that can be chosen. |
| `locale` | string | `en` | The locale of the weekday and month names. |
| `name` | string or null | `null` | The name of a hidden field that carries the selected date to a form. |
| `events` | array | `[]` | A map of dates to a number of events, shown on the day. |
| `navigation` | bool | `true` | Show the arrows. |
| `showMonth` | bool | `false` | Show the month and the year above the strip. |
| `previousLabel` | string | `Previous days` | The accessible name of the previous arrow. |
| `nextLabel` | string | `Next days` | The accessible name of the next arrow. |
| `eventsLabel` | string | `{count} events` | The spoken text for the events of a day. |
| `label` | string | `Choose a date` | The accessible name of the strip. |

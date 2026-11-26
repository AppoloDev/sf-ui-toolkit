# Event Calendar

> A calendar of events with month, week, day and agenda views, rooms as columns, drag and drop to reschedule, drag to book a slot, and custom event chips.

## Installation

- button
- dialog, field and input (only for the form example)
- card (only for the details example)

## Usage

Give the events, with dates as `YYYY-MM-DDTHH:mm` (or `YYYY-MM-DD` for an event of the whole day).

```twig
<twig:EventCalendar
    :events="[
        {id: 1, title: 'Stand-up', start: '2026-11-26T09:00', end: '2026-11-26T09:30', color: 'blue'},
        {id: 2, title: 'Offsite', start: '2026-11-27', end: '2026-11-27'}
    ]"
    view="week"
    :editable="true"
/>
```

The calendar draws itself in the browser from the `events` value. To change the events after the page has loaded, write the `data-event-calendar-events-value` attribute (a JSON array): the calendar redraws.

## Examples

### All Views

Month, week, day and agenda, with the switcher. Overlapping events share the width of their column; the "+N more" link of a crowded day opens it. Click an event to fire `event-calendar:select`.

<!-- height: 560 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<twig:EventCalendar :events="[
    {id: 1, title: 'Stand-up', start: w0 ~ 'T09:00', end: w0 ~ 'T09:30', color: 'blue'},
    {id: 2, title: 'Design review', start: w1 ~ 'T10:00', end: w1 ~ 'T11:30', color: 'violet'},
    {id: 3, title: 'Lunch with Ada', start: w2 ~ 'T12:00', end: w2 ~ 'T13:00', color: 'green'},
    {id: 4, title: 'Planning', start: w2 ~ 'T14:00', end: w2 ~ 'T16:00', color: 'amber'},
    {id: 5, title: 'Retro', start: w2 ~ 'T14:30', end: w2 ~ 'T15:30', color: 'blue'},
    {id: 6, title: 'Release', start: w3 ~ 'T15:00', end: w3 ~ 'T16:00', color: 'red'},
    {id: 7, title: 'Offsite', start: w4, end: w4, color: 'slate'},
    {id: 8, title: 'Call', start: today ~ 'T11:00', end: today ~ 'T11:45', color: 'green'}
]" />
```

### Month

Only the month view.

<!-- height: 460 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<twig:EventCalendar :events="[
    {id: 1, title: 'Stand-up', start: w0 ~ 'T09:00', end: w0 ~ 'T09:30', color: 'blue'},
    {id: 2, title: 'Design review', start: w1 ~ 'T10:00', end: w1 ~ 'T11:30', color: 'violet'},
    {id: 3, title: 'Lunch with Ada', start: w2 ~ 'T12:00', end: w2 ~ 'T13:00', color: 'green'},
    {id: 4, title: 'Planning', start: w2 ~ 'T14:00', end: w2 ~ 'T16:00', color: 'amber'},
    {id: 5, title: 'Retro', start: w2 ~ 'T14:30', end: w2 ~ 'T15:30', color: 'blue'},
    {id: 6, title: 'Release', start: w3 ~ 'T15:00', end: w3 ~ 'T16:00', color: 'red'},
    {id: 7, title: 'Offsite', start: w4, end: w4, color: 'slate'},
    {id: 8, title: 'Call', start: today ~ 'T11:00', end: today ~ 'T11:45', color: 'green'}
]" view="month" :views="['month']" />
```

### Week

Seven columns and a time grid; all-day events sit in the row above it.

<!-- height: 560 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<twig:EventCalendar :events="[
    {id: 1, title: 'Stand-up', start: w0 ~ 'T09:00', end: w0 ~ 'T09:30', color: 'blue'},
    {id: 2, title: 'Design review', start: w1 ~ 'T10:00', end: w1 ~ 'T11:30', color: 'violet'},
    {id: 3, title: 'Lunch with Ada', start: w2 ~ 'T12:00', end: w2 ~ 'T13:00', color: 'green'},
    {id: 4, title: 'Planning', start: w2 ~ 'T14:00', end: w2 ~ 'T16:00', color: 'amber'},
    {id: 5, title: 'Retro', start: w2 ~ 'T14:30', end: w2 ~ 'T15:30', color: 'blue'},
    {id: 6, title: 'Release', start: w3 ~ 'T15:00', end: w3 ~ 'T16:00', color: 'red'},
    {id: 7, title: 'Offsite', start: w4, end: w4, color: 'slate'},
    {id: 8, title: 'Call', start: today ~ 'T11:00', end: today ~ 'T11:45', color: 'green'}
]" view="week" :views="['week']" />
```

### Day

One column for the day.

<!-- height: 520 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<twig:EventCalendar :events="[
    {id: 1, title: 'Stand-up', start: w0 ~ 'T09:00', end: w0 ~ 'T09:30', color: 'blue'},
    {id: 2, title: 'Design review', start: w1 ~ 'T10:00', end: w1 ~ 'T11:30', color: 'violet'},
    {id: 3, title: 'Lunch with Ada', start: w2 ~ 'T12:00', end: w2 ~ 'T13:00', color: 'green'},
    {id: 4, title: 'Planning', start: w2 ~ 'T14:00', end: w2 ~ 'T16:00', color: 'amber'},
    {id: 5, title: 'Retro', start: w2 ~ 'T14:30', end: w2 ~ 'T15:30', color: 'blue'},
    {id: 6, title: 'Release', start: w3 ~ 'T15:00', end: w3 ~ 'T16:00', color: 'red'},
    {id: 7, title: 'Offsite', start: w4, end: w4, color: 'slate'},
    {id: 8, title: 'Call', start: today ~ 'T11:00', end: today ~ 'T11:45', color: 'green'}
]" view="day" :views="['day']" />
```

### Agenda

The events of the month as a list, grouped by day.

<!-- height: 460 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<twig:EventCalendar :events="[
    {id: 1, title: 'Stand-up', start: w0 ~ 'T09:00', end: w0 ~ 'T09:30', color: 'blue'},
    {id: 2, title: 'Design review', start: w1 ~ 'T10:00', end: w1 ~ 'T11:30', color: 'violet'},
    {id: 3, title: 'Lunch with Ada', start: w2 ~ 'T12:00', end: w2 ~ 'T13:00', color: 'green'},
    {id: 4, title: 'Planning', start: w2 ~ 'T14:00', end: w2 ~ 'T16:00', color: 'amber'},
    {id: 5, title: 'Retro', start: w2 ~ 'T14:30', end: w2 ~ 'T15:30', color: 'blue'},
    {id: 6, title: 'Release', start: w3 ~ 'T15:00', end: w3 ~ 'T16:00', color: 'red'},
    {id: 7, title: 'Offsite', start: w4, end: w4, color: 'slate'},
    {id: 8, title: 'Call', start: today ~ 'T11:00', end: today ~ 'T11:45', color: 'green'}
]" view="agenda" :views="['agenda']" />
```

### Room Bookings

With `resources`, the day view has one column per room; each event refers to its room with `resource`.

<!-- height: 540 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
<twig:EventCalendar view="day" :views="['day']" :resources="[{id: 'a', title: 'Room A'}, {id: 'b', title: 'Room B'}, {id: 'c', title: 'Room C'}]" :events="[
    {id: 1, title: 'Board meeting', start: today ~ 'T09:00', end: today ~ 'T10:30', resource: 'a', color: 'violet'},
    {id: 2, title: 'Interviews', start: today ~ 'T10:00', end: today ~ 'T12:00', resource: 'b', color: 'green'},
    {id: 3, title: 'Training', start: today ~ 'T13:00', end: today ~ 'T16:00', resource: 'c', color: 'amber'},
    {id: 4, title: 'Sync', start: today ~ 'T14:00', end: today ~ 'T14:30', resource: 'a', color: 'blue'}
]" />
```

### Drag To Reschedule

`editable` lets events be dragged to another day (month) or another time and column (week, day). `event-calendar:move` is fired first and can be cancelled; the new dates are in its detail.

<!-- height: 640 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<div class="grid gap-2">
    <twig:EventCalendar id="ec-drag" view="week" :views="['week', 'month']" :editable="true" :events="[
    {id: 1, title: 'Stand-up', start: w0 ~ 'T09:00', end: w0 ~ 'T09:30', color: 'blue'},
    {id: 2, title: 'Design review', start: w1 ~ 'T10:00', end: w1 ~ 'T11:30', color: 'violet'},
    {id: 3, title: 'Lunch with Ada', start: w2 ~ 'T12:00', end: w2 ~ 'T13:00', color: 'green'},
    {id: 4, title: 'Planning', start: w2 ~ 'T14:00', end: w2 ~ 'T16:00', color: 'amber'},
    {id: 5, title: 'Retro', start: w2 ~ 'T14:30', end: w2 ~ 'T15:30', color: 'blue'},
    {id: 6, title: 'Release', start: w3 ~ 'T15:00', end: w3 ~ 'T16:00', color: 'red'},
    {id: 7, title: 'Offsite', start: w4, end: w4, color: 'slate'},
    {id: 8, title: 'Call', start: today ~ 'T11:00', end: today ~ 'T11:45', color: 'green'}
]" />
    <p class="text-sm text-muted-foreground">
        Last move: <code id="ec-drag-out">none</code>
    </p>
</div>
<script>
    document.getElementById('ec-drag').addEventListener('event-calendar:move', (event) => {
        document.getElementById('ec-drag-out').textContent = event.detail.event.title + ' → ' + event.detail.start + ' / ' + event.detail.end;
    });
</script>
```

### Drag To Book

`creatable`: drag over free time in a room column to choose a slot. `event-calendar:create` carries the slot and the room; here a script adds the booking by writing the events attribute.

<!-- height: 540 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
<twig:EventCalendar id="ec-book" view="day" :views="['day']" :resources="[{id: 'a', title: 'Room A'}, {id: 'b', title: 'Room B'}, {id: 'c', title: 'Room C'}]" :creatable="true" :editable="true" :events="[
    {id: 1, title: 'Board meeting', start: today ~ 'T09:00', end: today ~ 'T10:30', resource: 'a', color: 'violet'},
    {id: 2, title: 'Interviews', start: today ~ 'T10:00', end: today ~ 'T12:00', resource: 'b', color: 'green'}
]" />
<script>
    const book = document.getElementById('ec-book');
    book.addEventListener('event-calendar:create', (event) => {
        const events = JSON.parse(book.dataset.eventCalendarEventsValue);
        events.push({ id: Date.now(), title: 'New booking', start: event.detail.start, end: event.detail.end, resource: event.detail.resource, color: 'blue' });
        book.setAttribute('data-event-calendar-events-value', JSON.stringify(events));
    });
</script>
```

### Event Form Dialog

Creating an event opens a `Dialog` with a form: the slot that was dragged fills the dates, and the form adds the event.

<!-- height: 600 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
<twig:EventCalendar id="ec-form" view="week" :views="['week']" :creatable="true" :events="[
    {id: 1, title: 'Stand-up', start: today ~ 'T09:00', end: today ~ 'T09:30', color: 'blue'}
]" />
<twig:Dialog id="ec-form-dialog">
    <twig:Dialog:Content>
        <form id="ec-form-fields" class="grid gap-4">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    New event
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    The slot you chose is already filled in.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <twig:Field>
                <twig:Field:Label for="ec-title">
                    Title
                </twig:Field:Label>
                <twig:Input id="ec-title" name="title" required />
            </twig:Field>
            <div class="grid grid-cols-2 gap-3">
                <twig:Field>
                    <twig:Field:Label for="ec-start">
                        Start
                    </twig:Field:Label>
                    <twig:Input id="ec-start" name="start" type="datetime-local" required />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="ec-end">
                        End
                    </twig:Field:Label>
                    <twig:Input id="ec-end" name="end" type="datetime-local" required />
                </twig:Field>
            </div>
            <twig:Dialog:Footer>
                <twig:Button type="submit">
                    Add event
                </twig:Button>
            </twig:Dialog:Footer>
        </form>
    </twig:Dialog:Content>
</twig:Dialog>
<script>
    const calendar = document.getElementById('ec-form');
    const form = document.getElementById('ec-form-fields');
    calendar.addEventListener('event-calendar:create', (event) => {
        form.elements.start.value = event.detail.start;
        form.elements.end.value = event.detail.end;
        document.getElementById('dialog-ec-form-dialog').showModal();
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const events = JSON.parse(calendar.dataset.eventCalendarEventsValue);
        events.push({ id: Date.now(), title: form.elements.title.value, start: form.elements.start.value, end: form.elements.end.value, color: 'violet' });
        calendar.setAttribute('data-event-calendar-events-value', JSON.stringify(events));
        form.reset();
        document.getElementById('dialog-ec-form-dialog').close();
    });
</script>
```

### Custom Event Chips

The `chip` block is the content of every chip, with `{title}`, `{time}`, `{color}`, `{resource}` and any key of the event.

<!-- height: 480 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<twig:EventCalendar view="month" :views="['month']" :events="[
    {id: 1, title: 'Stand-up', start: w0 ~ 'T09:00', end: w0 ~ 'T09:30', color: 'blue'},
    {id: 2, title: 'Design review', start: w1 ~ 'T10:00', end: w1 ~ 'T11:30', color: 'violet'},
    {id: 3, title: 'Lunch with Ada', start: w2 ~ 'T12:00', end: w2 ~ 'T13:00', color: 'green'},
    {id: 4, title: 'Planning', start: w2 ~ 'T14:00', end: w2 ~ 'T16:00', color: 'amber'},
    {id: 5, title: 'Retro', start: w2 ~ 'T14:30', end: w2 ~ 'T15:30', color: 'blue'},
    {id: 6, title: 'Release', start: w3 ~ 'T15:00', end: w3 ~ 'T16:00', color: 'red'},
    {id: 7, title: 'Offsite', start: w4, end: w4, color: 'slate'},
    {id: 8, title: 'Call', start: today ~ 'T11:00', end: today ~ 'T11:45', color: 'green'}
]">
    <twig:block name="chip">
        <span class="flex items-center gap-1">
            <span class="size-1.5 shrink-0 rounded-full bg-current"></span>
            <span class="truncate font-medium">{title}</span>
            <span class="ml-auto shrink-0 opacity-70">{time}</span>
        </span>
    </twig:block>
</twig:EventCalendar>
```

### Colors

Six colors for the events, matched to the theme in light and dark.

<!-- height: 440 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
<twig:EventCalendar view="agenda" :views="['agenda']" :events="[
    {id: 1, title: 'Blue', start: today ~ 'T09:00', end: today ~ 'T10:00', color: 'blue'},
    {id: 2, title: 'Green', start: today ~ 'T10:00', end: today ~ 'T11:00', color: 'green'},
    {id: 3, title: 'Red', start: today ~ 'T11:00', end: today ~ 'T12:00', color: 'red'},
    {id: 4, title: 'Amber', start: today ~ 'T12:00', end: today ~ 'T13:00', color: 'amber'},
    {id: 5, title: 'Violet', start: today ~ 'T13:00', end: today ~ 'T14:00', color: 'violet'},
    {id: 6, title: 'Slate', start: today ~ 'T14:00', end: today ~ 'T15:00', color: 'slate'}
]" />
```

### Another Language

`locale` for the names of days and months, and a label prop for each text.

<!-- height: 560 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<twig:EventCalendar :events="[
    {id: 1, title: 'Stand-up', start: w0 ~ 'T09:00', end: w0 ~ 'T09:30', color: 'blue'},
    {id: 2, title: 'Design review', start: w1 ~ 'T10:00', end: w1 ~ 'T11:30', color: 'violet'},
    {id: 3, title: 'Lunch with Ada', start: w2 ~ 'T12:00', end: w2 ~ 'T13:00', color: 'green'},
    {id: 4, title: 'Planning', start: w2 ~ 'T14:00', end: w2 ~ 'T16:00', color: 'amber'},
    {id: 5, title: 'Retro', start: w2 ~ 'T14:30', end: w2 ~ 'T15:30', color: 'blue'},
    {id: 6, title: 'Release', start: w3 ~ 'T15:00', end: w3 ~ 'T16:00', color: 'red'},
    {id: 7, title: 'Offsite', start: w4, end: w4, color: 'slate'},
    {id: 8, title: 'Call', start: today ~ 'T11:00', end: today ~ 'T11:45', color: 'green'}
]" locale="fr" todayLabel="Aujourd'hui" previousLabel="Précédent" nextLabel="Suivant" monthLabel="Mois" weekLabel="Semaine" dayLabel="Jour" agendaLabel="Agenda" allDayLabel="Journée" noEventsLabel="Aucun événement" moreLabel="+{count} de plus" label="Calendrier" />
```

### Sunday First

`weekStart="0"` starts the weeks on Sunday.

<!-- height: 560 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<twig:EventCalendar :events="[
    {id: 1, title: 'Stand-up', start: w0 ~ 'T09:00', end: w0 ~ 'T09:30', color: 'blue'},
    {id: 2, title: 'Design review', start: w1 ~ 'T10:00', end: w1 ~ 'T11:30', color: 'violet'},
    {id: 3, title: 'Lunch with Ada', start: w2 ~ 'T12:00', end: w2 ~ 'T13:00', color: 'green'},
    {id: 4, title: 'Planning', start: w2 ~ 'T14:00', end: w2 ~ 'T16:00', color: 'amber'},
    {id: 5, title: 'Retro', start: w2 ~ 'T14:30', end: w2 ~ 'T15:30', color: 'blue'},
    {id: 6, title: 'Release', start: w3 ~ 'T15:00', end: w3 ~ 'T16:00', color: 'red'},
    {id: 7, title: 'Offsite', start: w4, end: w4, color: 'slate'},
    {id: 8, title: 'Call', start: today ~ 'T11:00', end: today ~ 'T11:45', color: 'green'}
]" weekStart="0" view="week" :views="['month', 'week']" />
```

### Business Hours

The time grid shows only 8:00 to 18:00, in steps of 15 minutes, with taller hours.

<!-- height: 620 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<twig:EventCalendar :events="[
    {id: 1, title: 'Stand-up', start: w0 ~ 'T09:00', end: w0 ~ 'T09:30', color: 'blue'},
    {id: 2, title: 'Design review', start: w1 ~ 'T10:00', end: w1 ~ 'T11:30', color: 'violet'},
    {id: 3, title: 'Lunch with Ada', start: w2 ~ 'T12:00', end: w2 ~ 'T13:00', color: 'green'},
    {id: 4, title: 'Planning', start: w2 ~ 'T14:00', end: w2 ~ 'T16:00', color: 'amber'},
    {id: 5, title: 'Retro', start: w2 ~ 'T14:30', end: w2 ~ 'T15:30', color: 'blue'},
    {id: 6, title: 'Release', start: w3 ~ 'T15:00', end: w3 ~ 'T16:00', color: 'red'},
    {id: 7, title: 'Offsite', start: w4, end: w4, color: 'slate'},
    {id: 8, title: 'Call', start: today ~ 'T11:00', end: today ~ 'T11:45', color: 'green'}
]" view="week" :views="['week']" :startHour="8" :endHour="18" :slotMinutes="15" :hourHeight="64" :editable="true" :creatable="true" />
```

### Events From Your Code

The `events` value is the source of truth: write `data-event-calendar-events-value` to add, change or remove events.

<!-- height: 620 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<div class="grid gap-2">
    <div class="flex gap-2">
        <twig:Button variant="outline" size="sm" id="ec-add">
            Add an event
        </twig:Button>
        <twig:Button variant="outline" size="sm" id="ec-clear">
            Remove all
        </twig:Button>
    </div>
    <twig:EventCalendar id="ec-code" view="week" :views="['week']" :events="[]" />
</div>
<script>
    const code = document.getElementById('ec-code');
    document.getElementById('ec-add').addEventListener('click', () => {
        const events = JSON.parse(code.dataset.eventCalendarEventsValue || '[]');
        const hour = 9 + events.length % 8;
        const day = new Date();
        const iso = day.getFullYear() + '-' + String(day.getMonth() + 1).padStart(2, '0') + '-' + String(day.getDate()).padStart(2, '0');
        events.push({ id: events.length + 1, title: 'Event ' + (events.length + 1), start: iso + 'T' + String(hour).padStart(2, '0') + ':00', end: iso + 'T' + String(hour).padStart(2, '0') + ':45', color: ['blue', 'green', 'amber', 'violet'][events.length % 4] });
        code.setAttribute('data-event-calendar-events-value', JSON.stringify(events));
    });
    document.getElementById('ec-clear').addEventListener('click', () => code.setAttribute('data-event-calendar-events-value', '[]'));
</script>
```

### Event Details

Selecting an event shows its details next to the calendar.

<!-- height: 520 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<div class="grid gap-3 md:grid-cols-[1fr_14rem]">
    <twig:EventCalendar id="ec-select" view="agenda" :views="['agenda']" :events="[
    {id: 1, title: 'Stand-up', start: w0 ~ 'T09:00', end: w0 ~ 'T09:30', color: 'blue'},
    {id: 2, title: 'Design review', start: w1 ~ 'T10:00', end: w1 ~ 'T11:30', color: 'violet'},
    {id: 3, title: 'Lunch with Ada', start: w2 ~ 'T12:00', end: w2 ~ 'T13:00', color: 'green'},
    {id: 4, title: 'Planning', start: w2 ~ 'T14:00', end: w2 ~ 'T16:00', color: 'amber'},
    {id: 5, title: 'Retro', start: w2 ~ 'T14:30', end: w2 ~ 'T15:30', color: 'blue'},
    {id: 6, title: 'Release', start: w3 ~ 'T15:00', end: w3 ~ 'T16:00', color: 'red'},
    {id: 7, title: 'Offsite', start: w4, end: w4, color: 'slate'},
    {id: 8, title: 'Call', start: today ~ 'T11:00', end: today ~ 'T11:45', color: 'green'}
]" />
    <twig:Card>
        <twig:Card:Header>
            <twig:Card:Title id="ec-select-title">
                Select an event
            </twig:Card:Title>
            <twig:Card:Description id="ec-select-text">
                Its details appear here.
            </twig:Card:Description>
        </twig:Card:Header>
    </twig:Card>
</div>
<script>
    document.getElementById('ec-select').addEventListener('event-calendar:select', (event) => {
        document.getElementById('ec-select-title').textContent = event.detail.event.title;
        document.getElementById('ec-select-text').textContent = event.detail.event.start + ' → ' + event.detail.event.end;
    });
</script>
```

## Accessibility

- Events are buttons named by their title and time, reachable with the keyboard; Enter fires `event-calendar:select`. The title of the period is a polite live region, so a screen reader announces the new period after the arrows are used.
- The view switcher is a group of buttons with `aria-pressed`.
- Drag and drop (`editable`) and drag to book (`creatable`) are pointer features. For keyboard users, offer a form: fire the same action from a button of your own, and update the events value from the `event-calendar:select` handler.
- All texts are props, and the names of days and months follow `locale`.

## Extending

- `event-calendar:select` (`detail.event`) when an event is chosen.
- `event-calendar:move` (cancelable) when an event is dropped: `detail.event`, `detail.start`, `detail.end`, `detail.resource`. Call `preventDefault()` to refuse the move (for example when a room is already taken). Without it the calendar updates its events.
- `event-calendar:create` when a free slot is chosen: `detail.start`, `detail.end`, `detail.allDay`, `detail.resource`. The calendar does not add anything by itself: open a form, then write the events value.
- `event-calendar:change` when the view or the period changes: `detail.view`, `detail.date`.

The colors of the chips are Tailwind classes written in the controller: make sure your Tailwind build scans the controllers, or set your own with the `chip` block.

## API

### `<twig:EventCalendar>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | array | `[]` | The events: `id`, `title`, `start`, `end`, and optionally `color` and `resource`. |
| `view` | `month`, `week`, `day`, `agenda` | `month` | The view shown. |
| `views` | array | `month, week, day, agenda` | The views the user can switch to. |
| `date` | string or null | `null` | The date shown, as `YYYY-MM-DD`. Without it, today. |
| `weekStart` | integer | `1` | The first day of the week: 0 is Sunday, 1 is Monday. |
| `locale` | string | `en` | The locale of the day and month names. |
| `resources` | array | `[]` | Rooms or people as columns of the day view: `id` and `title`. |
| `editable` | bool | `false` | Events can be dragged to another day or time. |
| `creatable` | bool | `false` | Dragging over free time, or clicking a day of the month, fires `event-calendar:create`. |
| `startHour` | integer | `7` | The first hour of the time grid. |
| `endHour` | integer | `20` | The end of the last hour of the time grid. |
| `slotMinutes` | integer | `30` | The step of the drag, in minutes. |
| `hourHeight` | integer | `48` | The height of one hour, in pixels. |
| `showToolbar` | bool | `true` | Show the bar with the arrows, today, the title and the view switcher. |
| `todayLabel` | string | `Today` | The text of the today button. |
| `previousLabel` | string | `Previous` | The accessible name of the previous arrow. |
| `nextLabel` | string | `Next` | The accessible name of the next arrow. |
| `monthLabel` | string | `Month` | The name of the month view. |
| `weekLabel` | string | `Week` | The name of the week view. |
| `dayLabel` | string | `Day` | The name of the day view. |
| `agendaLabel` | string | `Agenda` | The name of the agenda view. |
| `allDayLabel` | string | `All day` | The label of the all-day row. |
| `noEventsLabel` | string | `No events` | The text of an empty agenda. |
| `moreLabel` | string | `+{count} more` | The link to the events that do not fit a day of the month. |
| `label` | string | `Calendar` | The accessible name of the calendar. |

| Block | Description |
| --- | --- |
| `chip` | The content of an event chip, with `{title}`, `{time}`, `{color}`, `{resource}` and the keys of the event. |

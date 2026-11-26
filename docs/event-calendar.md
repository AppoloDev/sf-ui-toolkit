# Event Calendar

> A calendar of events with month, week, day and agenda views, rooms as columns, drag and drop to reschedule, drag to book a slot, and custom event chips.

## Installation

- button
- dialog, field and input (only for the form example)
- card (only for the details example)

## Usage

Put one `EventCalendar:Item` per event inside the calendar, with dates as `YYYY-MM-DDTHH:mm` (or `YYYY-MM-DD` for an event of the whole day).

```twig
<twig:EventCalendar view="week" :editable="true">
    <twig:EventCalendar:Item title="Stand-up" start="2026-11-26T09:00" end="2026-11-26T09:30" color="blue" />
    <twig:EventCalendar:Item title="Offsite" start="2026-11-27" color="slate" />
</twig:EventCalendar>
```

The calendar draws itself in the browser from its items. An item is a hidden element: add, change or remove one (for example from a script, or after a Turbo or Live Component update) and the calendar redraws. Dropping an event writes its new dates to the item.

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
<twig:EventCalendar>
    <twig:EventCalendar:Item title="Stand-up" :start="w0 ~ 'T09:00'" :end="w0 ~ 'T09:30'" color="blue" />
    <twig:EventCalendar:Item title="Design review" :start="w1 ~ 'T10:00'" :end="w1 ~ 'T11:30'" color="violet" />
    <twig:EventCalendar:Item title="Lunch with Ada" :start="w2 ~ 'T12:00'" :end="w2 ~ 'T13:00'" color="green" />
    <twig:EventCalendar:Item title="Planning" :start="w2 ~ 'T14:00'" :end="w2 ~ 'T16:00'" color="amber" />
    <twig:EventCalendar:Item title="Retro" :start="w2 ~ 'T14:30'" :end="w2 ~ 'T15:30'" color="blue" />
    <twig:EventCalendar:Item title="Release" :start="w3 ~ 'T15:00'" :end="w3 ~ 'T16:00'" color="red" />
    <twig:EventCalendar:Item title="Offsite" :start="w4" :end="w4" color="slate" />
    <twig:EventCalendar:Item title="Call" :start="today ~ 'T11:00'" :end="today ~ 'T11:45'" color="green" />
</twig:EventCalendar>
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
<twig:EventCalendar view="month" :views="['month']">
    <twig:EventCalendar:Item title="Stand-up" :start="w0 ~ 'T09:00'" :end="w0 ~ 'T09:30'" color="blue" />
    <twig:EventCalendar:Item title="Design review" :start="w1 ~ 'T10:00'" :end="w1 ~ 'T11:30'" color="violet" />
    <twig:EventCalendar:Item title="Lunch with Ada" :start="w2 ~ 'T12:00'" :end="w2 ~ 'T13:00'" color="green" />
    <twig:EventCalendar:Item title="Planning" :start="w2 ~ 'T14:00'" :end="w2 ~ 'T16:00'" color="amber" />
    <twig:EventCalendar:Item title="Retro" :start="w2 ~ 'T14:30'" :end="w2 ~ 'T15:30'" color="blue" />
    <twig:EventCalendar:Item title="Release" :start="w3 ~ 'T15:00'" :end="w3 ~ 'T16:00'" color="red" />
    <twig:EventCalendar:Item title="Offsite" :start="w4" :end="w4" color="slate" />
    <twig:EventCalendar:Item title="Call" :start="today ~ 'T11:00'" :end="today ~ 'T11:45'" color="green" />
</twig:EventCalendar>
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
<twig:EventCalendar view="week" :views="['week']">
    <twig:EventCalendar:Item title="Stand-up" :start="w0 ~ 'T09:00'" :end="w0 ~ 'T09:30'" color="blue" />
    <twig:EventCalendar:Item title="Design review" :start="w1 ~ 'T10:00'" :end="w1 ~ 'T11:30'" color="violet" />
    <twig:EventCalendar:Item title="Lunch with Ada" :start="w2 ~ 'T12:00'" :end="w2 ~ 'T13:00'" color="green" />
    <twig:EventCalendar:Item title="Planning" :start="w2 ~ 'T14:00'" :end="w2 ~ 'T16:00'" color="amber" />
    <twig:EventCalendar:Item title="Retro" :start="w2 ~ 'T14:30'" :end="w2 ~ 'T15:30'" color="blue" />
    <twig:EventCalendar:Item title="Release" :start="w3 ~ 'T15:00'" :end="w3 ~ 'T16:00'" color="red" />
    <twig:EventCalendar:Item title="Offsite" :start="w4" :end="w4" color="slate" />
    <twig:EventCalendar:Item title="Call" :start="today ~ 'T11:00'" :end="today ~ 'T11:45'" color="green" />
</twig:EventCalendar>
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
<twig:EventCalendar view="day" :views="['day']">
    <twig:EventCalendar:Item title="Stand-up" :start="w0 ~ 'T09:00'" :end="w0 ~ 'T09:30'" color="blue" />
    <twig:EventCalendar:Item title="Design review" :start="w1 ~ 'T10:00'" :end="w1 ~ 'T11:30'" color="violet" />
    <twig:EventCalendar:Item title="Lunch with Ada" :start="w2 ~ 'T12:00'" :end="w2 ~ 'T13:00'" color="green" />
    <twig:EventCalendar:Item title="Planning" :start="w2 ~ 'T14:00'" :end="w2 ~ 'T16:00'" color="amber" />
    <twig:EventCalendar:Item title="Retro" :start="w2 ~ 'T14:30'" :end="w2 ~ 'T15:30'" color="blue" />
    <twig:EventCalendar:Item title="Release" :start="w3 ~ 'T15:00'" :end="w3 ~ 'T16:00'" color="red" />
    <twig:EventCalendar:Item title="Offsite" :start="w4" :end="w4" color="slate" />
    <twig:EventCalendar:Item title="Call" :start="today ~ 'T11:00'" :end="today ~ 'T11:45'" color="green" />
</twig:EventCalendar>
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
<twig:EventCalendar view="agenda" :views="['agenda']">
    <twig:EventCalendar:Item title="Stand-up" :start="w0 ~ 'T09:00'" :end="w0 ~ 'T09:30'" color="blue" />
    <twig:EventCalendar:Item title="Design review" :start="w1 ~ 'T10:00'" :end="w1 ~ 'T11:30'" color="violet" />
    <twig:EventCalendar:Item title="Lunch with Ada" :start="w2 ~ 'T12:00'" :end="w2 ~ 'T13:00'" color="green" />
    <twig:EventCalendar:Item title="Planning" :start="w2 ~ 'T14:00'" :end="w2 ~ 'T16:00'" color="amber" />
    <twig:EventCalendar:Item title="Retro" :start="w2 ~ 'T14:30'" :end="w2 ~ 'T15:30'" color="blue" />
    <twig:EventCalendar:Item title="Release" :start="w3 ~ 'T15:00'" :end="w3 ~ 'T16:00'" color="red" />
    <twig:EventCalendar:Item title="Offsite" :start="w4" :end="w4" color="slate" />
    <twig:EventCalendar:Item title="Call" :start="today ~ 'T11:00'" :end="today ~ 'T11:45'" color="green" />
</twig:EventCalendar>
```

### Room Bookings

With `resources`, the day view has one column per room; each item refers to its room with `resource`.

<!-- height: 540 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
<twig:EventCalendar view="day" :views="['day']" :resources="[{id: 'a', title: 'Room A'}, {id: 'b', title: 'Room B'}, {id: 'c', title: 'Room C'}]">
    <twig:EventCalendar:Item title="Board meeting" :start="today ~ 'T09:00'" :end="today ~ 'T10:30'" color="violet" resource="a" />
    <twig:EventCalendar:Item title="Interviews" :start="today ~ 'T10:00'" :end="today ~ 'T12:00'" color="green" resource="b" />
    <twig:EventCalendar:Item title="Training" :start="today ~ 'T13:00'" :end="today ~ 'T16:00'" color="amber" resource="c" />
    <twig:EventCalendar:Item title="Sync" :start="today ~ 'T14:00'" :end="today ~ 'T14:30'" color="blue" resource="a" />
</twig:EventCalendar>
```

### Drag To Reschedule

`editable` lets events be dragged to another day (month) or another time and column (week, day). `event-calendar:move` is fired first and can be cancelled; the new dates are in its detail, and the item's `data-start` and `data-end` are updated.

<!-- height: 640 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<div class="grid gap-2">
    <twig:EventCalendar id="ec-drag" view="week" :views="['week', 'month']" :editable="true">
        <twig:EventCalendar:Item title="Stand-up" :start="w0 ~ 'T09:00'" :end="w0 ~ 'T09:30'" color="blue" />
        <twig:EventCalendar:Item title="Design review" :start="w1 ~ 'T10:00'" :end="w1 ~ 'T11:30'" color="violet" />
        <twig:EventCalendar:Item title="Lunch with Ada" :start="w2 ~ 'T12:00'" :end="w2 ~ 'T13:00'" color="green" />
        <twig:EventCalendar:Item title="Planning" :start="w2 ~ 'T14:00'" :end="w2 ~ 'T16:00'" color="amber" />
        <twig:EventCalendar:Item title="Retro" :start="w2 ~ 'T14:30'" :end="w2 ~ 'T15:30'" color="blue" />
        <twig:EventCalendar:Item title="Release" :start="w3 ~ 'T15:00'" :end="w3 ~ 'T16:00'" color="red" />
        <twig:EventCalendar:Item title="Offsite" :start="w4" :end="w4" color="slate" />
        <twig:EventCalendar:Item title="Call" :start="today ~ 'T11:00'" :end="today ~ 'T11:45'" color="green" />
    </twig:EventCalendar>
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

`creatable`: drag over free time in a room column to choose a slot. `event-calendar:create` carries the slot and the room; the script adds the booking by appending an item (a `div` with `data-event-calendar-target="item"` and the `data-title`, `data-start`, `data-end`, `data-color`, `data-resource` attributes) to the hidden `items` container.

<!-- height: 540 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
<twig:EventCalendar id="ec-book" view="day" :views="['day']" :resources="[{id: 'a', title: 'Room A'}, {id: 'b', title: 'Room B'}, {id: 'c', title: 'Room C'}]" :creatable="true" :editable="true">
    <twig:EventCalendar:Item title="Board meeting" :start="today ~ 'T09:00'" :end="today ~ 'T10:30'" color="violet" resource="a" />
    <twig:EventCalendar:Item title="Interviews" :start="today ~ 'T10:00'" :end="today ~ 'T12:00'" color="green" resource="b" />
</twig:EventCalendar>
<script>
    const add = (calendar, event) => {
        const item = document.createElement('div');
        item.dataset.eventCalendarTarget = 'item';
        Object.assign(item.dataset, event);
        calendar.querySelector('[data-event-calendar-target="items"]').append(item);
    };
    const book = document.getElementById('ec-book');
    book.addEventListener('event-calendar:create', (event) => {
        add(book, { title: 'New booking', start: event.detail.start, end: event.detail.end, resource: event.detail.resource, color: 'blue' });
    });
</script>
```

### Event Form Dialog

Creating an event opens a `Dialog` with a form: the slot that was dragged fills the dates, and the form adds the item.

<!-- height: 600 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
<twig:EventCalendar id="ec-form" view="week" :views="['week']" :creatable="true">
    <twig:EventCalendar:Item title="Stand-up" :start="today ~ 'T09:00'" :end="today ~ 'T09:30'" color="blue" />
</twig:EventCalendar>
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
    const add = (calendar, event) => {
        const item = document.createElement('div');
        item.dataset.eventCalendarTarget = 'item';
        Object.assign(item.dataset, event);
        calendar.querySelector('[data-event-calendar-target="items"]').append(item);
    };
    const calendar = document.getElementById('ec-form');
    const form = document.getElementById('ec-form-fields');
    calendar.addEventListener('event-calendar:create', (event) => {
        form.elements.start.value = event.detail.start;
        form.elements.end.value = event.detail.end;
        document.getElementById('dialog-ec-form-dialog').showModal();
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        add(calendar, { title: form.elements.title.value, start: form.elements.start.value, end: form.elements.end.value, color: 'violet' });
        form.reset();
        document.getElementById('dialog-ec-form-dialog').close();
    });
</script>
```

### Custom Event Chips

The `chip` block is the content of every chip, with `{title}`, `{time}`, `{color}`, `{resource}` and any key of the item's `data`.

<!-- height: 480 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
{% set w0 = 'monday this week'|date('Y-m-d') %}
{% set w1 = 'monday this week'|date_modify('+1 day')|date('Y-m-d') %}
{% set w2 = 'monday this week'|date_modify('+2 days')|date('Y-m-d') %}
{% set w3 = 'monday this week'|date_modify('+3 days')|date('Y-m-d') %}
{% set w4 = 'monday this week'|date_modify('+4 days')|date('Y-m-d') %}
<twig:EventCalendar view="month" :views="['month']">
    <twig:EventCalendar:Item title="Stand-up" :start="w0 ~ 'T09:00'" :end="w0 ~ 'T09:30'" color="blue" />
    <twig:EventCalendar:Item title="Design review" :start="w1 ~ 'T10:00'" :end="w1 ~ 'T11:30'" color="violet" />
    <twig:EventCalendar:Item title="Lunch with Ada" :start="w2 ~ 'T12:00'" :end="w2 ~ 'T13:00'" color="green" />
    <twig:EventCalendar:Item title="Planning" :start="w2 ~ 'T14:00'" :end="w2 ~ 'T16:00'" color="amber" />
    <twig:EventCalendar:Item title="Retro" :start="w2 ~ 'T14:30'" :end="w2 ~ 'T15:30'" color="blue" />
    <twig:EventCalendar:Item title="Release" :start="w3 ~ 'T15:00'" :end="w3 ~ 'T16:00'" color="red" />
    <twig:EventCalendar:Item title="Offsite" :start="w4" :end="w4" color="slate" />
    <twig:EventCalendar:Item title="Call" :start="today ~ 'T11:00'" :end="today ~ 'T11:45'" color="green" />
    <twig:block name="chip">
        <span class="flex items-center gap-1">
            <span class="size-1.5 shrink-0 rounded-full bg-current"></span>
            <span class="truncate font-medium">{title}</span>
            <span class="ml-auto shrink-0 opacity-70">{time}</span>
        </span>
    </twig:block>
</twig:EventCalendar>
```

### Item Data

`data` carries extra keys on an item; the `chip` block shows them as `{key}`, and they come back in the events of the calendar.

<!-- height: 420 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
<twig:EventCalendar view="agenda" :views="['agenda']">
    <twig:EventCalendar:Item title="Kick-off" :start="today ~ 'T09:00'" :end="today ~ 'T10:00'" color="violet" :data="{owner: 'Ada', room: 'Atrium'}" />
    <twig:EventCalendar:Item title="Review" :start="today ~ 'T11:00'" :end="today ~ 'T12:00'" color="green" :data="{owner: 'Grace', room: 'Studio'}" />
    <twig:block name="chip">
        <span class="flex items-center gap-2">
            <span class="font-medium">{title}</span>
            <span class="opacity-70">{owner} · {room}</span>
        </span>
    </twig:block>
</twig:EventCalendar>
```

### Colors

Six colors for the events, matched to the theme in light and dark.

<!-- height: 440 -->

```twig
{% set today = 'now'|date('Y-m-d') %}
<twig:EventCalendar view="agenda" :views="['agenda']">
    <twig:EventCalendar:Item title="Blue" :start="today ~ 'T9:00'" :end="today ~ 'T10:00'" color="blue" />
    <twig:EventCalendar:Item title="Green" :start="today ~ 'T10:00'" :end="today ~ 'T11:00'" color="green" />
    <twig:EventCalendar:Item title="Red" :start="today ~ 'T11:00'" :end="today ~ 'T12:00'" color="red" />
    <twig:EventCalendar:Item title="Amber" :start="today ~ 'T12:00'" :end="today ~ 'T13:00'" color="amber" />
    <twig:EventCalendar:Item title="Violet" :start="today ~ 'T13:00'" :end="today ~ 'T14:00'" color="violet" />
    <twig:EventCalendar:Item title="Slate" :start="today ~ 'T14:00'" :end="today ~ 'T15:00'" color="slate" />
</twig:EventCalendar>
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
<twig:EventCalendar locale="fr" todayLabel="Aujourd'hui" previousLabel="Précédent" nextLabel="Suivant" monthLabel="Mois" weekLabel="Semaine" dayLabel="Jour" agendaLabel="Agenda" allDayLabel="Journée" noEventsLabel="Aucun événement" moreLabel="+{count} de plus" label="Calendrier">
    <twig:EventCalendar:Item title="Stand-up" :start="w0 ~ 'T09:00'" :end="w0 ~ 'T09:30'" color="blue" />
    <twig:EventCalendar:Item title="Design review" :start="w1 ~ 'T10:00'" :end="w1 ~ 'T11:30'" color="violet" />
    <twig:EventCalendar:Item title="Lunch with Ada" :start="w2 ~ 'T12:00'" :end="w2 ~ 'T13:00'" color="green" />
    <twig:EventCalendar:Item title="Planning" :start="w2 ~ 'T14:00'" :end="w2 ~ 'T16:00'" color="amber" />
    <twig:EventCalendar:Item title="Retro" :start="w2 ~ 'T14:30'" :end="w2 ~ 'T15:30'" color="blue" />
    <twig:EventCalendar:Item title="Release" :start="w3 ~ 'T15:00'" :end="w3 ~ 'T16:00'" color="red" />
    <twig:EventCalendar:Item title="Offsite" :start="w4" :end="w4" color="slate" />
    <twig:EventCalendar:Item title="Call" :start="today ~ 'T11:00'" :end="today ~ 'T11:45'" color="green" />
</twig:EventCalendar>
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
<twig:EventCalendar weekStart="0" view="week" :views="['month', 'week']">
    <twig:EventCalendar:Item title="Stand-up" :start="w0 ~ 'T09:00'" :end="w0 ~ 'T09:30'" color="blue" />
    <twig:EventCalendar:Item title="Design review" :start="w1 ~ 'T10:00'" :end="w1 ~ 'T11:30'" color="violet" />
    <twig:EventCalendar:Item title="Lunch with Ada" :start="w2 ~ 'T12:00'" :end="w2 ~ 'T13:00'" color="green" />
    <twig:EventCalendar:Item title="Planning" :start="w2 ~ 'T14:00'" :end="w2 ~ 'T16:00'" color="amber" />
    <twig:EventCalendar:Item title="Retro" :start="w2 ~ 'T14:30'" :end="w2 ~ 'T15:30'" color="blue" />
    <twig:EventCalendar:Item title="Release" :start="w3 ~ 'T15:00'" :end="w3 ~ 'T16:00'" color="red" />
    <twig:EventCalendar:Item title="Offsite" :start="w4" :end="w4" color="slate" />
    <twig:EventCalendar:Item title="Call" :start="today ~ 'T11:00'" :end="today ~ 'T11:45'" color="green" />
</twig:EventCalendar>
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
<twig:EventCalendar view="week" :views="['week']" :startHour="8" :endHour="18" :slotMinutes="15" :hourHeight="64" :editable="true" :creatable="true">
    <twig:EventCalendar:Item title="Stand-up" :start="w0 ~ 'T09:00'" :end="w0 ~ 'T09:30'" color="blue" />
    <twig:EventCalendar:Item title="Design review" :start="w1 ~ 'T10:00'" :end="w1 ~ 'T11:30'" color="violet" />
    <twig:EventCalendar:Item title="Lunch with Ada" :start="w2 ~ 'T12:00'" :end="w2 ~ 'T13:00'" color="green" />
    <twig:EventCalendar:Item title="Planning" :start="w2 ~ 'T14:00'" :end="w2 ~ 'T16:00'" color="amber" />
    <twig:EventCalendar:Item title="Retro" :start="w2 ~ 'T14:30'" :end="w2 ~ 'T15:30'" color="blue" />
    <twig:EventCalendar:Item title="Release" :start="w3 ~ 'T15:00'" :end="w3 ~ 'T16:00'" color="red" />
    <twig:EventCalendar:Item title="Offsite" :start="w4" :end="w4" color="slate" />
    <twig:EventCalendar:Item title="Call" :start="today ~ 'T11:00'" :end="today ~ 'T11:45'" color="green" />
</twig:EventCalendar>
```

### Events From Your Code

Items are plain elements: append one to the hidden `items` container, change its `data-` attributes or remove it, and the calendar redraws.

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
    <twig:EventCalendar id="ec-code" view="week" :views="['week']" />
</div>
<script>
    const code = document.getElementById('ec-code');
    const items = code.querySelector('[data-event-calendar-target="items"]');
    document.getElementById('ec-add').addEventListener('click', () => {
        const count = items.children.length;
        const hour = String(9 + count % 8).padStart(2, '0');
        const day = new Date();
        const iso = day.getFullYear() + '-' + String(day.getMonth() + 1).padStart(2, '0') + '-' + String(day.getDate()).padStart(2, '0');
        const item = document.createElement('div');
        item.dataset.eventCalendarTarget = 'item';
        Object.assign(item.dataset, { title: 'Event ' + (count + 1), start: iso + 'T' + hour + ':00', end: iso + 'T' + hour + ':45', color: ['blue', 'green', 'amber', 'violet'][count % 4] });
        items.append(item);
    });
    document.getElementById('ec-clear').addEventListener('click', () => items.replaceChildren());
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
    <twig:EventCalendar id="ec-select" view="agenda" :views="['agenda']">
        <twig:EventCalendar:Item title="Stand-up" :start="w0 ~ 'T09:00'" :end="w0 ~ 'T09:30'" color="blue" />
        <twig:EventCalendar:Item title="Design review" :start="w1 ~ 'T10:00'" :end="w1 ~ 'T11:30'" color="violet" />
        <twig:EventCalendar:Item title="Lunch with Ada" :start="w2 ~ 'T12:00'" :end="w2 ~ 'T13:00'" color="green" />
        <twig:EventCalendar:Item title="Planning" :start="w2 ~ 'T14:00'" :end="w2 ~ 'T16:00'" color="amber" />
        <twig:EventCalendar:Item title="Retro" :start="w2 ~ 'T14:30'" :end="w2 ~ 'T15:30'" color="blue" />
        <twig:EventCalendar:Item title="Release" :start="w3 ~ 'T15:00'" :end="w3 ~ 'T16:00'" color="red" />
        <twig:EventCalendar:Item title="Offsite" :start="w4" :end="w4" color="slate" />
        <twig:EventCalendar:Item title="Call" :start="today ~ 'T11:00'" :end="today ~ 'T11:45'" color="green" />
    </twig:EventCalendar>
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
- Drag and drop (`editable`) and drag to book (`creatable`) are pointer features. For keyboard users, offer a form: fire the same action from a button of your own, and change the item from the `event-calendar:select` handler.
- All texts are props, and the names of days and months follow `locale`.

## Extending

- `event-calendar:select` (`detail.event`) when an event is chosen.
- `event-calendar:move` (cancelable) when an event is dropped: `detail.event`, `detail.start`, `detail.end`, `detail.resource`. Call `preventDefault()` to refuse the move (for example when a room is already taken). Without it the calendar updates the `data-start`, `data-end` and `data-resource` of the item.
- `event-calendar:create` when a free slot is chosen: `detail.start`, `detail.end`, `detail.allDay`, `detail.resource`. The calendar does not add anything by itself: open a form, then add an item.
- `event-calendar:change` when the view or the period changes: `detail.view`, `detail.date`.

The colors of the chips are Tailwind classes written in the controller: make sure your Tailwind build scans the controllers, or set your own with the `chip` block.

## API

### `<twig:EventCalendar>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
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
| `default` | The events, one `EventCalendar:Item` each. |
| `chip` | The content of an event chip, with `{title}`, `{time}`, `{color}`, `{resource}` and the keys of the item's `data`. |

### `<twig:EventCalendar:Item>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | string | | The title of the event. |
| `start` | string | | The start: `YYYY-MM-DDTHH:mm`, or `YYYY-MM-DD` for an event of the whole day. |
| `end` | string or null | `null` | The end, in the same format. Without it, a timed event lasts one hour. |
| `id` | string or null | `null` | An identifier, returned in the events of the calendar. |
| `color` | `blue`, `green`, `red`, `amber`, `violet`, `slate` | `slate` | The color of the chip. |
| `resource` | string or null | `null` | The `id` of the resource (room, person) the event belongs to. |
| `data` | array | `{}` | Extra keys, available to the `chip` block as `{key}` and in the events of the calendar. |

| Block | Description |
| --- | --- |
| `default` | Not used: an item draws nothing itself. |

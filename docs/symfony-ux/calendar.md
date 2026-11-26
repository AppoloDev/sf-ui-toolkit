# Calendar

## Examples

### Disabled Dates

```twig
<twig:Card class="w-fit py-0">
    <twig:Card:Content class="p-2">
        <twig:Calendar mode="range" name="range" month="2026-11-01" today="2026-11-24" selected="{{ ['2026-11-26', '2026-11-30'] }}" min="2026-11-24" />
    </twig:Card:Content>
</twig:Card>
```

### Multiple Days

```twig
<twig:Card class="w-fit py-0">
    <twig:Card:Content class="p-2">
        <twig:Calendar mode="multiple" name="days" month="2026-11-01" today="2026-11-24" selected="{{ ['2026-11-20', '2026-11-24', '2026-11-26', '2026-11-27'] }}" />
    </twig:Card:Content>
</twig:Card>
```

### Circular Days

```twig
<twig:Card class="w-fit py-0">
    <twig:Card:Content class="p-2">
        <twig:Calendar mode="single" name="round" month="2026-11-01" today="2026-11-24" selected="2026-11-24" class="[&_button]:rounded-full" />
    </twig:Card:Content>
</twig:Card>
```

### Month Year Select

```twig
<twig:Card class="w-fit py-0">
    <twig:Card:Content class="p-2">
        <twig:Calendar mode="single" name="dropdown" month="2026-11-01" today="2026-11-24" captionLayout="dropdown" />
    </twig:Card:Content>
</twig:Card>
```

### Week Numbers

```twig
<twig:Card class="w-fit py-0">
    <twig:Card:Content class="p-2">
        <twig:Calendar mode="single" name="weeks" month="2026-11-01" today="2026-11-24" showWeekNumber fixedWeeks />
    </twig:Card:Content>
</twig:Card>
```

### Two Months

```twig
<twig:Card class="w-fit py-0">
    <twig:Card:Content class="p-2">
        <twig:Calendar mode="single" name="two" month="2026-11-01" today="2026-11-24" numberOfMonths="2" />
    </twig:Card:Content>
</twig:Card>
```

### Two Month Range

```twig
<twig:Card class="w-fit py-0">
    <twig:Card:Content class="p-2">
        <twig:Calendar mode="range" name="two-range" month="2026-11-01" today="2026-11-24" numberOfMonths="2" selected="{{ ['2026-11-06', '2026-11-18'] }}" />
    </twig:Card:Content>
</twig:Card>
```

### Event List

```twig
<twig:Card class="w-fit py-0">
    <twig:Card:Content class="p-2">
        <twig:Calendar mode="single" name="events" month="2026-11-01" today="2026-11-24" selected="2026-11-24" />
    </twig:Card:Content>
    <twig:Card:Footer class="flex-col items-stretch gap-3 border-t px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
            <span class="h-8 w-1 rounded-full bg-primary">
            </span>
            <div>
                <p class="font-medium">
                    Design review
                </p>
                <p class="text-xs text-muted-foreground">
                    10:00 - 11:00
                </p>
            </div>
        </div>
        <div class="flex items-center gap-2 text-sm">
            <span class="h-8 w-1 rounded-full bg-primary">
            </span>
            <div>
                <p class="font-medium">
                    Team lunch
                </p>
                <p class="text-xs text-muted-foreground">
                    12:30 - 13:30
                </p>
            </div>
        </div>
        <twig:Button variant="outline" size="sm">
            Add Event
        </twig:Button>
    </twig:Card:Footer>
</twig:Card>
```

### Date Picker

```twig
<div style="min-height: 440px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" class="w-56 justify-start font-normal" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:calendar" data-icon="inline-start" />
                Pick a date
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content align="start" class="w-auto p-0">
            <twig:Calendar mode="single" name="picker" month="2026-11-01" today="2026-11-24" />
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Date Range Picker

```twig
<div style="min-height: 440px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" class="w-64 justify-start font-normal" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:calendar" data-icon="inline-start" />
                Pick a date range
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content align="start" class="w-auto p-0">
            <twig:Calendar mode="range" name="picker-range" month="2026-11-01" today="2026-11-24" numberOfMonths="2" />
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Appointment Picker

The calendar picks the day, the buttons next to it pick the time; a script keeps one slot pressed.

```twig
<twig:Card class="w-fit gap-0 p-0">
    <twig:Card:Content class="flex flex-wrap gap-0 p-0">
        <div class="p-3">
            <twig:Calendar mode="single" name="day" month="2026-11-01" today="2026-11-24" selected="2026-11-26" min="2026-11-24" />
        </div>
        <div class="grid w-44 content-start gap-2 border-s p-3" id="slots">
            <twig:Field:Label>
                Thursday, November 26
            </twig:Field:Label>
            <twig:Button variant="outline" size="sm" type="button" aria-pressed="false" data-slot-time="09:00">
                9:00 AM
            </twig:Button>
            <twig:Button variant="outline" size="sm" type="button" aria-pressed="true" data-slot-time="10:30" class="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground">
                10:30 AM
            </twig:Button>
            <twig:Button variant="outline" size="sm" type="button" aria-pressed="false" data-slot-time="13:00">
                1:00 PM
            </twig:Button>
            <twig:Button variant="outline" size="sm" type="button" aria-pressed="false" data-slot-time="15:30" disabled>
                3:30 PM
            </twig:Button>
        </div>
    </twig:Card:Content>
</twig:Card>
<script>
    document.getElementById('slots').addEventListener('click', (event) => {
        const slot = event.target.closest('[data-slot-time]');
        if (!slot) return;
        document.querySelectorAll('#slots [data-slot-time]').forEach((button) => {
            const on = button === slot;
            button.setAttribute('aria-pressed', String(on));
            button.classList.toggle('bg-primary', on);
            button.classList.toggle('text-primary-foreground', on);
        });
    });
</script>
```

### Single Date In A Dialog

The calendar sits in the body of a `Dialog`, with the usual footer actions.

```twig
<div style="min-height: 120px">
    <twig:Dialog id="cal-dlg-single">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Single Date
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-fit">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Choose a date
                </twig:Dialog:Title>
            </twig:Dialog:Header>
            <twig:Calendar mode="single" name="dlg-day" month="2026-11-01" today="2026-11-24" selected="2026-11-26" />
            <twig:Dialog:Footer>
                <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                    Cancel
                </twig:Button>
                <twig:Button {{ ...dialog_close_attrs }}>
                    Confirm
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Date Range In A Dialog

The range mode in a dialog.

```twig
<div style="min-height: 120px">
    <twig:Dialog id="cal-dlg-range">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Date Range
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-fit">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Choose a date
                </twig:Dialog:Title>
            </twig:Dialog:Header>
            <twig:Calendar mode="range" name="dlg-range" month="2026-11-01" today="2026-11-24" :selected="['2026-11-26', '2026-11-30']" />
            <twig:Dialog:Footer>
                <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                    Cancel
                </twig:Button>
                <twig:Button {{ ...dialog_close_attrs }}>
                    Confirm
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

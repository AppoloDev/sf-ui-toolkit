# Calendar

## Examples

### Disabled Dates

```twig
<twig:Card class="w-fit py-0"><twig:Card:Content class="p-2">
    <twig:Calendar mode="range" name="range" month="2026-11-01" today="2026-11-24" selected="{{ ['2026-11-26', '2026-11-30'] }}" min="2026-11-24" />
</twig:Card:Content></twig:Card>
```

### Multiple Days

```twig
<twig:Card class="w-fit py-0"><twig:Card:Content class="p-2">
    <twig:Calendar mode="multiple" name="days" month="2026-11-01" today="2026-11-24" selected="{{ ['2026-11-20', '2026-11-24', '2026-11-26', '2026-11-27'] }}" />
</twig:Card:Content></twig:Card>
```

### Circular Days

```twig
<twig:Card class="w-fit py-0"><twig:Card:Content class="p-2">
    <twig:Calendar mode="single" name="round" month="2026-11-01" today="2026-11-24" selected="2026-11-24" class="[&_button]:rounded-full" />
</twig:Card:Content></twig:Card>
```

### Month Year Select

```twig
<twig:Card class="w-fit py-0"><twig:Card:Content class="p-2">
    <twig:Calendar mode="single" name="dropdown" month="2026-11-01" today="2026-11-24" captionLayout="dropdown" />
</twig:Card:Content></twig:Card>
```

### Week Numbers

```twig
<twig:Card class="w-fit py-0"><twig:Card:Content class="p-2">
    <twig:Calendar mode="single" name="weeks" month="2026-11-01" today="2026-11-24" showWeekNumber fixedWeeks />
</twig:Card:Content></twig:Card>
```

### Two Months

```twig
<twig:Card class="w-fit py-0"><twig:Card:Content class="p-2">
    <twig:Calendar mode="single" name="two" month="2026-11-01" today="2026-11-24" numberOfMonths="2" />
</twig:Card:Content></twig:Card>
```

### Two Month Range

```twig
<twig:Card class="w-fit py-0"><twig:Card:Content class="p-2">
    <twig:Calendar mode="range" name="two-range" month="2026-11-01" today="2026-11-24" numberOfMonths="2" selected="{{ ['2026-11-06', '2026-11-18'] }}" />
</twig:Card:Content></twig:Card>
```

### Event List

```twig
<twig:Card class="w-fit py-0">
    <twig:Card:Content class="p-2"><twig:Calendar mode="single" name="events" month="2026-11-01" today="2026-11-24" selected="2026-11-24" /></twig:Card:Content>
    <twig:Card:Footer class="flex-col items-stretch gap-3 border-t px-4 py-3">
        {% for e, t in {'Design review': '10:00 - 11:00', 'Team lunch': '12:30 - 13:30'} %}
            <div class="flex items-center gap-2 text-sm"><span class="h-8 w-1 rounded-full bg-primary"></span><div><p class="font-medium">{{ e }}</p><p class="text-xs text-muted-foreground">{{ t }}</p></div></div>
        {% endfor %}
        <twig:Button variant="outline" size="sm">Add Event</twig:Button>
    </twig:Card:Footer>
</twig:Card>
```

### Date Picker

```twig
<div style="min-height: 440px">
    <twig:Popover>
        <twig:Popover:Trigger><twig:Button variant="outline" class="w-56 justify-start font-normal" {{ ...popover_trigger_attrs }}><twig:ux:icon name="lucide:calendar" data-icon="inline-start" /> Pick a date</twig:Button></twig:Popover:Trigger>
        <twig:Popover:Content align="start" class="w-auto p-0"><twig:Calendar mode="single" name="picker" month="2026-11-01" today="2026-11-24" /></twig:Popover:Content>
    </twig:Popover>
</div>
```

### Date Range Picker

```twig
<div style="min-height: 440px">
    <twig:Popover>
        <twig:Popover:Trigger><twig:Button variant="outline" class="w-64 justify-start font-normal" {{ ...popover_trigger_attrs }}><twig:ux:icon name="lucide:calendar" data-icon="inline-start" /> Pick a date range</twig:Button></twig:Popover:Trigger>
        <twig:Popover:Content align="start" class="w-auto p-0"><twig:Calendar mode="range" name="picker-range" month="2026-11-01" today="2026-11-24" numberOfMonths="2" /></twig:Popover:Content>
    </twig:Popover>
</div>
```

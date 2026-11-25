# Date Picker

## Examples

### Disabled Dates

Days listed in `disabled` cannot be selected.

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 440px">
    <twig:DatePicker>
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-56 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:ux:icon name="lucide:calendar" data-icon="inline-start" />
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" :disabled="['2026-11-25', '2026-11-26', '2026-11-27']" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
</div>
```

### Disabled Weekends

Pass the weekend days of the month as the `disabled` list.

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 440px">
    <twig:DatePicker>
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-56 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:ux:icon name="lucide:calendar" data-icon="inline-start" />
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" :disabled="['2026-11-01', '2026-11-07', '2026-11-08', '2026-11-14', '2026-11-15', '2026-11-21', '2026-11-22', '2026-11-28', '2026-11-29']" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
</div>
```

### Min And Max Dates

Only dates between `minDate` and `maxDate` can be picked.

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 440px">
    <twig:DatePicker>
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-56 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:ux:icon name="lucide:calendar" data-icon="inline-start" />
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" minDate="2026-11-10" maxDate="2026-11-30" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
</div>
```

### Custom Day Style

`modifiers` flag days with `data-<name>`, which the classes below style.

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 440px">
    <twig:DatePicker>
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-56 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:ux:icon name="lucide:calendar" data-icon="inline-start" />
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" :modifiers="{holiday: ['2026-11-11', '2026-11-26'], booked: ['2026-11-17', '2026-11-18']}" class="[&_[data-holiday=true]_button]:text-rose-600 [&_[data-holiday=true]_button]:font-semibold [&_[data-booked=true]_button]:line-through [&_[data-booked=true]_button]:opacity-50" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
</div>
```

### Multiple Selection

Keep the popover open while picking several days.

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 440px">
    <twig:DatePicker dateStyle="short" separator=", " :selected="['2026-11-20', '2026-11-24']" :closeOnSelect="false">
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-72 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:ux:icon name="lucide:calendar" data-icon="inline-start" />
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="multiple" month="2026-11-01" today="2026-11-24" :selected="['2026-11-20', '2026-11-24']" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
</div>
```

### Date Styles

```twig
<div class="flex flex-wrap items-start justify-center gap-3 pt-6" style="min-height: 440px">
    <twig:DatePicker dateStyle="short" selected="2026-11-24">
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-60 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" selected="2026-11-24" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
    <twig:DatePicker dateStyle="medium" selected="2026-11-24">
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-60 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" selected="2026-11-24" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
    <twig:DatePicker dateStyle="long" selected="2026-11-24">
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-60 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" selected="2026-11-24" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
    <twig:DatePicker dateStyle="full" selected="2026-11-24">
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-60 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" selected="2026-11-24" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
</div>
```

### Locales

Pass the same `locale` to the `DatePicker` and the `Calendar`.

```twig
<div class="flex flex-wrap items-start justify-center gap-3 pt-6" style="min-height: 440px">
    <twig:DatePicker locale="fr" selected="2026-11-24">
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-60 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" selected="2026-11-24" locale="fr" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
    <twig:DatePicker locale="de" selected="2026-11-24">
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-60 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" selected="2026-11-24" locale="de" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
    <twig:DatePicker locale="es" selected="2026-11-24">
        <twig:DatePicker:Trigger>
            <twig:Button variant="outline" class="w-60 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                <twig:DatePicker:Value placeholder="Pick a date" />
            </twig:Button>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" selected="2026-11-24" locale="es" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
</div>
```

### Icon In The Field

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 440px">
    <twig:DatePicker>
        <twig:DatePicker:Trigger>
            <twig:InputGroup class="w-60">
                <twig:InputGroup:Addon>
                    <twig:ux:icon name="lucide:calendar" />
                </twig:InputGroup:Addon>
                <twig:InputGroup:Input readonly placeholder="Pick a date" aria-label="Date" {{ ...date_picker_trigger_attrs }} />
            </twig:InputGroup>
        </twig:DatePicker:Trigger>
        <twig:DatePicker:Content>
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" />
        </twig:DatePicker:Content>
    </twig:DatePicker>
</div>
```

### Appointment Picker

Pick a day, then one of the available time slots.

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 440px">
    <twig:Card class="w-fit py-0">
        <twig:Card:Content class="flex gap-4 p-2">
            <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" name="day" selected="2026-11-26" />
            <div class="grid content-start gap-2 border-s ps-4 pe-2 pt-2">
                <span class="text-sm font-medium">
                    Thursday, Nov 26
                </span>
                <twig:ToggleGroup type="single" variant="outline" size="sm" spacing="2" orientation="vertical" class="w-full">
                    <twig:ToggleGroup:Item value="09:00" aria-label="09:00" class="w-full">
                        09:00
                    </twig:ToggleGroup:Item>
                    <twig:ToggleGroup:Item value="09:30" aria-label="09:30" class="w-full">
                        09:30
                    </twig:ToggleGroup:Item>
                    <twig:ToggleGroup:Item value="10:00" aria-label="10:00" class="w-full">
                        10:00
                    </twig:ToggleGroup:Item>
                    <twig:ToggleGroup:Item value="10:30" aria-label="10:30" class="w-full">
                        10:30
                    </twig:ToggleGroup:Item>
                    <twig:ToggleGroup:Item value="11:00" aria-label="11:00" class="w-full">
                        11:00
                    </twig:ToggleGroup:Item>
                    <twig:ToggleGroup:Item value="14:00" aria-label="14:00" class="w-full">
                        14:00
                    </twig:ToggleGroup:Item>
                    <twig:ToggleGroup:Item value="14:30" aria-label="14:30" class="w-full">
                        14:30
                    </twig:ToggleGroup:Item>
                    <twig:ToggleGroup:Item value="15:00" aria-label="15:00" class="w-full">
                        15:00
                    </twig:ToggleGroup:Item>
                </twig:ToggleGroup>
            </div>
        </twig:Card:Content>
    </twig:Card>
</div>
```

### Date And Time

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 440px">
    <twig:Field orientation="horizontal" class="w-auto items-start gap-4">
        <twig:Field class="w-44">
            <twig:Field:Label>
                Date
            </twig:Field:Label>
            <twig:DatePicker dateStyle="medium">
                <twig:DatePicker:Trigger>
                    <twig:Button variant="outline" class="w-full justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                        <twig:DatePicker:Value placeholder="Select date" />
                    </twig:Button>
                </twig:DatePicker:Trigger>
                <twig:DatePicker:Content>
                    <twig:Calendar mode="single" month="2026-11-01" today="2026-11-24" />
                </twig:DatePicker:Content>
            </twig:DatePicker>
        </twig:Field>
        <twig:Field class="w-32">
            <twig:Field:Label for="dp-time">
                Time
            </twig:Field:Label>
            <twig:TimePicker id="dp-time" name="time" value="10:30" label="Time" />
        </twig:Field>
    </twig:Field>
</div>
```

### String Output In A Form

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 440px">
    <twig:Form class="grid gap-3">
        <twig:Form:Item>
            <twig:Form:Label>
                Date of birth
            </twig:Form:Label>
            <twig:DatePicker dateStyle="medium">
                <twig:DatePicker:Trigger>
                    <twig:Button variant="outline" class="w-56 justify-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                        <twig:DatePicker:Value placeholder="Select date" />
                    </twig:Button>
                </twig:DatePicker:Trigger>
                <twig:DatePicker:Content>
                    <twig:Calendar mode="single" name="birthday" captionLayout="dropdown" startMonth="1926-01-01" endMonth="2026-12-01" today="2026-11-24" />
                </twig:DatePicker:Content>
            </twig:DatePicker>
            <twig:Form:Description>
                Submitted as a Y-m-d string in the `birthday` field.
            </twig:Form:Description>
        </twig:Form:Item>
        <twig:Button type="submit" class="w-fit">
            Save
        </twig:Button>
    </twig:Form>
</div>
```

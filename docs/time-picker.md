# Time Picker

> Typed time field with a popover of scrollable columns (hours, minutes, seconds, AM/PM), steps, min/max and 12/24h display.

## Installation

- popover
- input-group
- button

## Usage

```twig
<twig:TimePicker name="starts_at" value="09:30" label="Start time" />
```

## Examples

### Basic

The field accepts typed times such as `1430`, `14:30`, `14h30` or `2:30pm`, parsed on blur or `Enter`. The clock button opens the columns.

<!-- height: 360 -->

```twig
<twig:TimePicker name="starts_at" value="09:30" label="Start time" />
```

### 12-hour display

`hourCycle` only changes the display: the submitted value stays 24-hour (`HH:mm`).

<!-- height: 360 -->

```twig
<twig:TimePicker name="meeting" value="14:30" :hourCycle="12" label="Meeting time" />
```

### Steps

`minuteStep` thins the minutes column, for example to 15-minute intervals.

<!-- height: 360 -->

```twig
<twig:TimePicker name="slot" value="10:15" :minuteStep="15" label="Appointment slot" />
```

### With seconds

<!-- height: 360 -->

```twig
<twig:TimePicker name="precise" value="08:05:30" seconds label="Precise time" />
```

### Opening hours (min and max)

`min` and `max` are inclusive. Typed times, picks and "Now" snap to the nearest allowed time.

<!-- height: 360 -->

```twig
<twig:TimePicker name="visit" value="09:00" min="09:00" max="17:30" :minuteStep="30" label="Visit time" />
```

### Confirm before applying

With `requireConfirm`, changes are held as a draft until OK is pressed; closing the popover discards them.

<!-- height: 360 -->

```twig
<twig:TimePicker name="reminder" value="07:00" requireConfirm label="Reminder" />
```

### Disabled

```twig
<twig:TimePicker name="locked" value="12:00" disabled label="Locked" />
```

### Typable Input

The field is a text input first: type a time in any of the accepted forms and it is parsed on blur or `Enter`.

<!-- height: 160 -->

```twig
<div class="flex max-w-xs flex-col gap-3">
    <twig:TimePicker name="typed_at" placeholder="Type 1430, 14h30 or 2:30pm" label="Time" />
    <p class="text-sm text-muted-foreground">
        Try <code>1430</code>, <code>14:30</code>, <code>14h30</code> or <code>2:30pm</code>.
    </p>
</div>
```

### Hour Only

A minute step of 60 leaves a single minute value, so only the hour matters.

<!-- height: 360 -->

```twig
<twig:TimePicker name="hour_at" value="09:00" minuteStep="60" label="Hour" />
```

### Start & End

Two pickers for a time range, both limited to the working day.

<!-- height: 380 -->

```twig
<div class="flex flex-wrap items-end gap-4">
    <twig:Field class="w-auto">
        <twig:Field:Label for="range-start">
            Start
        </twig:Field:Label>
        <twig:TimePicker id="range-start" name="start" value="09:00" min="08:00" max="18:00" minuteStep="15" />
    </twig:Field>
    <twig:Field class="w-auto">
        <twig:Field:Label for="range-end">
            End
        </twig:Field:Label>
        <twig:TimePicker id="range-end" name="end" value="17:30" min="08:00" max="18:00" minuteStep="15" />
    </twig:Field>
</div>
```

### Time Zone

A native select next to the picker holds the time zone, which is submitted as a second field.

<!-- height: 380 -->

```twig
<div class="flex flex-wrap items-end gap-4">
    <twig:Field class="w-auto">
        <twig:Field:Label for="zone-time">
            Time
        </twig:Field:Label>
        <twig:TimePicker id="zone-time" name="time" value="14:30" />
    </twig:Field>
    <twig:Field class="w-auto">
        <twig:Field:Label for="zone-select">
            Time zone
        </twig:Field:Label>
        <twig:NativeSelect id="zone-select" name="zone">
            <twig:NativeSelect:Option value="Europe/Paris" selected>
                Paris (UTC+1)
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="Europe/London">
                London (UTC+0)
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="America/New_York">
                New York (UTC-5)
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="Asia/Tokyo">
                Tokyo (UTC+9)
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Field>
</div>
```

### Localized

Every text of the picker is a prop, so it can be translated: here in French, with a 24-hour display.

<!-- height: 380 -->

```twig
<twig:TimePicker
    name="heure"
    value="14:30"
    placeholder="hh:mm"
    label="Heure du rendez-vous"
    openLabel="Ouvrir le sélecteur d'heure"
    dialogLabel="Choisir une heure"
    nowLabel="Maintenant"
    clearLabel="Effacer"
    confirmLabel="Valider"
    hoursLabel="Heures"
    minutesLabel="Minutes"
    requireConfirm
/>
```

### Form Validation

Inside a `Field`, with its label, a description and an error message. The error state is drawn by the `Field`, from the server's validation.

<!-- height: 420 -->

```twig
<twig:Field data-invalid="true" class="max-w-xs">
    <twig:Field:Label for="form-time">
        Pickup time
    </twig:Field:Label>
    <twig:TimePicker id="form-time" name="pickup" value="19:30" max="18:00" aria-invalid="true" />
    <twig:Field:Description>
        Pickups run until 18:00.
    </twig:Field:Description>
    <twig:Field:Error>
        Choose a time before 18:00.
    </twig:Field:Error>
</twig:Field>
```

### Date & Time

A date picker and a time picker side by side, for a single moment.

<!-- height: 420 -->

```twig
<div class="flex flex-wrap items-end gap-4">
    <twig:Field class="w-auto">
        <twig:Field:Label>
            Date
        </twig:Field:Label>
        <twig:DatePicker>
            <twig:DatePicker:Trigger>
                <twig:Button variant="outline" class="w-48 justify-between text-start font-normal data-[empty=true]:text-muted-foreground" {{ ...date_picker_trigger_attrs }}>
                    <twig:DatePicker:Value placeholder="Pick a date" />
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:DatePicker:Trigger>
            <twig:DatePicker:Content>
                <twig:Calendar mode="single" name="date" />
            </twig:DatePicker:Content>
        </twig:DatePicker>
    </twig:Field>
    <twig:Field class="w-auto">
        <twig:Field:Label for="datetime-time">
            Time
        </twig:Field:Label>
        <twig:TimePicker id="datetime-time" name="time" value="10:00" />
    </twig:Field>
</div>
```

## Accessibility

- Each column is a `listbox` named by its header (Hours, Minutes, Seconds, AM/PM), and the options carry `aria-selected` / `aria-disabled`.
- In a column: `↑` / `↓` change the selection, `Home` / `End` jump to the first and last value, `Page Up` / `Page Down` move by five, typing digits jumps to a matching value, `←` / `→` switch columns.
- `Esc` closes the popover and returns focus to the clock button; a click outside closes it too (both handled by the shadcn `Popover`).
- In the typed field, `↑` / `↓` move to the previous or next allowed time.
- Give the field a visible `<label for>` (with `id`) or pass `label`.

## API

### `<twig:TimePicker>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name. The submitted value is `HH:mm` or `HH:mm:ss` (24-hour), like a native time input. |
| `value` | string | `null` | Initial value (`HH:mm` or `HH:mm:ss`). |
| `hourCycle` | 24 or 12 | `24` | Display cycle. 12 adds the AM/PM column. |
| `hourStep` | int | `1` | Step of the hours column. |
| `minuteStep` | int | `1` | Step of the minutes column. |
| `secondStep` | int | `1` | Step of the seconds column. |
| `seconds` | bool | `false` | Shows the seconds column. |
| `min` | string | `null` | Inclusive lower bound. The window wraps overnight when `min` is later than `max`. |
| `max` | string | `null` | Inclusive upper bound. |
| `requireConfirm` | bool | `false` | Holds changes as a draft until OK is pressed. |
| `placeholder` | string | `''` | Placeholder of the typed field. |
| `disabled` | bool | `false` | Disables the field and the button. |
| `label` | string | `null` | Accessible label of the typed field. |
| `id` | string | `null` | Id of the typed field, for an external `<label for>`. |
| `openLabel` | string | `Open the time picker` | Accessible name of the trigger button. |
| `dialogLabel` | string | `Choose a time` | Accessible name of the popover. |
| `nowLabel` | string | `Now` | Text of the "now" button. |
| `clearLabel` | string | `Clear` | Text of the clear button. |
| `confirmLabel` | string | `OK` | Text of the confirm button. |
| `hoursLabel` | string | `Hours` | Accessible name of the hours column. |
| `minutesLabel` | string | `Minutes` | Accessible name of the minutes column. |
| `secondsLabel` | string | `Seconds` | Accessible name of the seconds column. |
| `periodLabel` | string | `AM/PM` | Accessible name of the period column. |

The controller dispatches a `time-picker:change` event with `detail.value` (`null` when cleared).

# Time Picker

> Typed time field with a popover of scrollable columns (hours, minutes, seconds, AM/PM), steps, min/max and 12/24h display.

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

## Accessibility

- Each column is a `listbox` named by its header (Hours, Minutes, Seconds, AM/PM), and the options carry `aria-selected` / `aria-disabled`.
- In a column: `↑` / `↓` change the selection, `Home` / `End` jump to the first and last value, `Page Up` / `Page Down` move by five, typing digits jumps to a matching value, `←` / `→` switch columns.
- `Esc` closes the popover and returns focus to the clock button; a click outside closes it too.
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

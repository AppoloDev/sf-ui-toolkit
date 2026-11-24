# Number Field

> Numeric input with decrement and increment buttons, keyboard steps, press-and-hold repeat and min/max clamping.

## Installation

- input-group
- button

## Usage

```twig
<twig:NumberField name="quantity" :value="1" :min="0" :max="10" label="Quantity" />
```

## Examples

### Basic

```twig
<twig:NumberField name="quantity" :value="1" :min="0" :max="10" label="Quantity" />
```

### Step

The buttons and the arrow keys move by `step`; Page Up / Page Down move by ten steps. A decimal step (for example `0.01` for currency) keeps the matching number of decimals.

```twig
<div class="flex flex-wrap items-center gap-4">
    <twig:NumberField name="by_five" :value="10" :step="5" label="Step of 5" />
    <twig:NumberField name="price" :value="9.99" :step="0.01" :min="0" label="Price" />
</div>
```

### Empty value

An empty field stays empty until you type or press a button; the first press starts from `min` (or 0).

```twig
<twig:NumberField name="age" :min="0" :max="120" placeholder="Age" label="Age" />
```

### Disabled

```twig
<twig:NumberField name="locked" :value="3" disabled label="Locked" />
```

### With an external label

Compose it with the shadcn `Field` and `Field:Label`; the label points at the `id` of the field.

```twig
<twig:Field class="w-fit">
    <twig:Field:Label for="seats">Seats</twig:Field:Label>
    <twig:NumberField id="seats" name="seats" :value="2" :min="1" :max="8" />
    <twig:Field:Description>Between 1 and 8.</twig:Field:Description>
</twig:Field>
```

## Accessibility

- The inner `input` has `role="spinbutton"` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax` kept in sync.
- Keyboard: `↑` / `↓` change the value by one step (`Shift` by ten), `Page Up` / `Page Down` by ten steps, `Home` / `End` jump to `min` / `max`.
- The buttons are out of the tab order (the input carries the semantics) and become disabled at the bounds.
- Provide a visible `<label for>` pointing at `id`, or pass `label` for an `aria-label`.

## API

### `<twig:NumberField>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name. |
| `value` | number | `null` | Initial value; `null` leaves the field empty. |
| `min` | number | `null` | Inclusive lower bound. |
| `max` | number | `null` | Inclusive upper bound. |
| `step` | number | `1` | Increment of the buttons and arrow keys. |
| `placeholder` | string | `''` | Placeholder text. |
| `disabled` | bool | `false` | Disables the field and the buttons. |
| `label` | string | `null` | Accessible label (`aria-label`). |
| `id` | string | `null` | Id of the inner input, for an external `<label for>`. |
| `decreaseLabel` | string | `Decrease` | Accessible name of the decrement button. |
| `increaseLabel` | string | `Increase` | Accessible name of the increment button. |

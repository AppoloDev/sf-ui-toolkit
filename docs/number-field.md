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
    <twig:Field:Label for="seats">
        Seats
    </twig:Field:Label>
    <twig:NumberField id="seats" name="seats" :value="2" :min="1" :max="8" />
    <twig:Field:Description>
        Between 1 and 8.
    </twig:Field:Description>
</twig:Field>
```

### Small Size

`size="sm"` for dense toolbars and tables.

```twig
<twig:NumberField name="qty_sm" size="sm" :value="2" :min="0" :max="10" label="Quantity" />
```

### Large Size

`size="lg"` for touch screens and prominent forms.

```twig
<twig:NumberField name="qty_lg" size="lg" :value="2" :min="0" :max="10" label="Quantity" />
```

### Buttons on Right

`buttons="right"` groups minus and plus after the value.

```twig
<twig:NumberField name="qty_right" buttons="right" :value="4" :min="0" :max="20" label="Quantity" />
```

### Spinner Buttons

`buttons="spinner"` shows small stacked arrows, like a native number input.

```twig
<twig:NumberField name="qty_spinner" buttons="spinner" :value="4" :min="0" :max="20" label="Quantity" />
```

### Form Validation

`invalid` marks the field with `aria-invalid`; compose it with `Field` and `Field:Error`. The script validates when the value changes.

<!-- height: 260 -->

```twig
<div id="number-validation">
    <twig:Field class="w-fit" data-invalid="true">
        <twig:Field:Label for="guests">
            Guests
        </twig:Field:Label>
        <twig:NumberField id="guests" name="guests" :value="12" :min="0" :max="30" invalid />
        <twig:Field:Description>
            A table seats 2 to 10 guests.
        </twig:Field:Description>
        <twig:Field:Error data-error>
            Choose between 2 and 10 guests.
        </twig:Field:Error>
    </twig:Field>
</div>
<script>
    const numberValidation = document.getElementById('number-validation');
    numberValidation.addEventListener('number-field:change', (event) => {
        const valid = event.detail.value >= 2 && event.detail.value <= 10;
        numberValidation.querySelector('[data-slot=field]').dataset.invalid = String(!valid);
        numberValidation.querySelector('input').setAttribute('aria-invalid', String(!valid));
        numberValidation.querySelector('[data-error]').hidden = valid;
    });
</script>
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
| `size` | `sm`, `default`, `lg` | `default` | Height and text size. |
| `buttons` | `sides`, `right`, `spinner` | `sides` | Minus and plus around the value, both on the right, or small stacked arrows on the right. |
| `invalid` | bool | `false` | Marks the field as invalid (`aria-invalid`). |
| `label` | string | `null` | Accessible label (`aria-label`). |
| `id` | string | `null` | Id of the inner input, for an external `<label for>`. |
| `decreaseLabel` | string | `Decrease` | Accessible name of the decrement button. |
| `increaseLabel` | string | `Increase` | Accessible name of the increment button. |

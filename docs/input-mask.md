# Input Mask

> Wraps an input to force a format as the user types (phone, date, serial number, with optional parts), or to filter the characters it accepts (digits, letters, hexadecimal, a custom pattern).

## Installation

- input
- label
- button (only for the unmask example)

## Usage

Wrap the field in `InputMask` and give it a `mask`: `9` is a digit, `a` a letter, `*` a letter or a digit, `?` makes the rest optional, any other character is written as it is. The field is formatted as the user types, when a value is pasted, and when it is filled by the server.

```twig
<twig:InputMask mask="(999) 999-9999">
    <twig:Input name="phone" type="tel" />
</twig:InputMask>
```

Without a `mask`, `keyFilter` limits the characters that can be typed or pasted.

```twig
<twig:InputMask keyFilter="pint">
    <twig:Input name="quantity" inputmode="numeric" />
</twig:InputMask>
```

## Examples

### Basic

A date: `9` is a digit, the rest is written as it is. The empty slots are shown while the field has the focus.

```twig
<twig:InputMask mask="99/99/9999" class="block max-w-xs">
    <twig:Label for="mask-date" class="text-sm font-medium">
        Date
    </twig:Label>
    <twig:Input id="mask-date" name="date" />
</twig:InputMask>
```

### Social Security Number

Digits and dashes.

```twig
<twig:InputMask mask="999-99-9999" class="block max-w-xs">
    <twig:Label for="mask-ssn" class="text-sm font-medium">
        Social security number
    </twig:Label>
    <twig:Input id="mask-ssn" name="ssn" />
</twig:InputMask>
```

### Phone

Parentheses and a space are part of the mask: typing `5551234567` gives `(555) 123-4567`, and a pasted number is reformatted.

```twig
<twig:InputMask mask="(999) 999-9999" class="block max-w-xs">
    <twig:Label for="mask-phone" class="text-sm font-medium">
        Phone
    </twig:Label>
    <twig:Input id="mask-phone" name="phone" type="tel" inputmode="tel" />
</twig:InputMask>
```

### Serial Number

`a` is a letter and `*` a letter or a digit.

```twig
<twig:InputMask mask="a*-999-a999" class="block max-w-xs">
    <twig:Label for="mask-serial" class="text-sm font-medium">
        Serial number
    </twig:Label>
    <twig:Input id="mask-serial" name="serial" />
</twig:InputMask>
```

### Optional

Everything after `?` is optional: the field is complete after 5 digits, and the last two stay free.

```twig
<twig:InputMask mask="99-999?-99" class="block max-w-xs">
    <twig:Label for="mask-optional" class="text-sm font-medium">
        Code
    </twig:Label>
    <twig:Input id="mask-optional" name="code" />
</twig:InputMask>
```

### Slot Character

`slotChar` is shown for the empty slots. A text as long as the mask gives a hint for each slot.

```twig
<twig:InputMask mask="99/99/9999" slotChar="dd/mm/yyyy" class="block max-w-xs">
    <twig:Label for="mask-slot" class="text-sm font-medium">
        Date
    </twig:Label>
    <twig:Input id="mask-slot" name="slot" />
</twig:InputMask>
```

### No Placeholder

An empty `slotChar` shows only what was typed, and the literals that come before the next character.

```twig
<twig:InputMask mask="(999) 999-9999" slotChar="" class="block max-w-xs">
    <twig:Label for="mask-bare" class="text-sm font-medium">
        Phone
    </twig:Label>
    <twig:Input id="mask-bare" name="bare" />
</twig:InputMask>
```

### Keep Incomplete Values

With `autoClear` off, an incomplete value stays in the field on blur instead of being emptied. `data-state` on the field is `empty`, `partial` or `complete`.

```twig
<twig:InputMask :autoClear="false" mask="999-999" class="block max-w-xs">
    <twig:Label for="mask-keep" class="text-sm font-medium">
        Reference
    </twig:Label>
    <twig:Input id="mask-keep" name="keep" />
</twig:InputMask>
```

### Floating Label

The mask works with `FloatLabel` (the field keeps `placeholder=" "`).

```twig
<twig:InputMask mask="(999) 999-9999" class="block max-w-xs">
    <twig:FloatLabel label="Phone" fieldId="mask-float" class="max-w-xs">
        <twig:Input id="mask-float" name="float" placeholder=" " />
    </twig:FloatLabel>
</twig:InputMask>
```

### Ifta Label

The `ifta` label style.

```twig
<twig:InputMask mask="99/99/9999" class="block max-w-xs">
    <twig:FloatLabel label="Date" fieldId="mask-ifta" variant="ifta" class="max-w-xs">
        <twig:Input id="mask-ifta" name="ifta" placeholder=" " />
    </twig:FloatLabel>
</twig:InputMask>
```

### Sizes

The mask follows the size of the field.

```twig
<div class="grid max-w-xs gap-3">
    <twig:InputMask mask="999-999">
        <twig:Input name="small" class="h-7 text-xs" aria-label="Small" />
    </twig:InputMask>
    <twig:InputMask mask="999-999">
        <twig:Input name="default" aria-label="Default" />
    </twig:InputMask>
    <twig:InputMask mask="999-999">
        <twig:Input name="large" class="h-11 text-base" aria-label="Large" />
    </twig:InputMask>
</div>
```

### Disabled

```twig
<twig:InputMask mask="99/99/9999" class="block max-w-xs">
    <twig:Label for="mask-disabled" class="text-sm font-medium">
        Date
    </twig:Label>
    <twig:Input id="mask-disabled" name="disabled" value="12/05/2026" disabled />
</twig:InputMask>
```

### Invalid

Set `aria-invalid` on the field for the error style.

```twig
<twig:InputMask mask="99/99/9999" class="block max-w-xs">
    <twig:Label for="mask-invalid" class="text-sm font-medium">
        Date
    </twig:Label>
    <twig:Input id="mask-invalid" name="invalid" aria-invalid="true" value="12/05" />
</twig:InputMask>
```

### Value Without the Mask

`unmaskName` adds a hidden field that receives the characters without the mask, for a server that stores `5551234567` and not `(555) 123-4567`. The text below shows it.

```twig
<form class="grid max-w-xs gap-2" onsubmit="event.preventDefault(); this.querySelector('output').textContent = new URLSearchParams(new FormData(this)).toString();">
    <twig:InputMask mask="(999) 999-9999" unmaskName="phone_raw">
        <twig:Label for="mask-unmask" class="text-sm font-medium">
            Phone
        </twig:Label>
        <twig:Input id="mask-unmask" name="phone" />
    </twig:InputMask>
    <twig:Button type="submit" variant="outline" class="w-fit">
        Submit
    </twig:Button>
    <output class="font-mono text-xs text-muted-foreground"></output>
</form>
```

### Complete Event

`input-mask:complete` fires once the required part is filled. Here it moves the focus to the next field.

```twig
<div class="grid max-w-xs gap-3">
    <twig:InputMask mask="9999">
        <twig:Label for="mask-pin" class="text-sm font-medium">
            Year
        </twig:Label>
        <twig:Input id="mask-pin" name="year" />
    </twig:InputMask>
    <twig:Input id="mask-after" name="after" placeholder="Focus lands here" aria-label="Next field" />
</div>
<script>
    document.querySelector('[data-controller="input-mask"]').addEventListener('input-mask:complete', () => {
        document.getElementById('mask-after').focus();
    });
</script>
```

### Key Filter: Presets

Without a mask, `keyFilter` limits the characters: a preset (`int`, `pint`, `num`, `pnum`, `money`, `hex`, `alpha`, `alphanum`, `email`).

```twig
<div class="grid max-w-xs gap-3">
    <twig:InputMask keyFilter="pint">
        <twig:Label for="kf-int" class="text-sm font-medium">
            Digits only (pint)
        </twig:Label>
        <twig:Input id="kf-int" name="int" />
    </twig:InputMask>
    <twig:InputMask keyFilter="pnum">
        <twig:Label for="kf-num" class="text-sm font-medium">
            Positive number (pnum)
        </twig:Label>
        <twig:Input id="kf-num" name="num" />
    </twig:InputMask>
    <twig:InputMask keyFilter="hex">
        <twig:Label for="kf-hex" class="text-sm font-medium">
            Hexadecimal (hex)
        </twig:Label>
        <twig:Input id="kf-hex" name="hex" />
    </twig:InputMask>
    <twig:InputMask keyFilter="alpha">
        <twig:Label for="kf-alpha" class="text-sm font-medium">
            Letters (alpha)
        </twig:Label>
        <twig:Input id="kf-alpha" name="alpha" />
    </twig:InputMask>
    <twig:InputMask keyFilter="alphanum">
        <twig:Label for="kf-alnum" class="text-sm font-medium">
            Letters and digits (alphanum)
        </twig:Label>
        <twig:Input id="kf-alnum" name="alnum" />
    </twig:InputMask>
</div>
```

### Key Filter: Regular Expression

`keyFilter` also takes a regular expression, tested on each typed or pasted character. Here only the characters of a licence plate.

```twig
<twig:InputMask keyFilter="[A-Za-z0-9\-]" class="block max-w-xs">
    <twig:Label for="kf-regex" class="text-sm font-medium">
        Licence plate
    </twig:Label>
    <twig:Input id="kf-regex" name="plate" />
</twig:InputMask>
```

### Key Filter: Validate Only

With `validateOnly`, the expression is tested on the whole value: a character is refused when the result would not match. Here, at most three digits then an optional letter.

```twig
<twig:InputMask keyFilter="^\d{0,3}[A-Z]?$" :validateOnly="true" class="block max-w-xs">
    <twig:Label for="kf-validate" class="text-sm font-medium">
        Code
    </twig:Label>
    <twig:Input id="kf-validate" name="validate" />
</twig:InputMask>
```

## Accessibility

- The mask is a help to type, not a validation: it does not replace the checks of the server, and the field keeps its own `type`, `inputmode`, label and `aria-invalid`.
- Placeholders such as `_` are part of the value shown while the field has the focus; they are removed on blur when the mask is incomplete and `autoClear` is on. Give the field a visible label or an `aria-label` that tells the expected format.
- `data-state` on the field is `empty`, `partial` or `complete`, which a style or a script can use.

## Extending

The controller dispatches `input-mask:complete` on the wrapper when the required part of the mask is filled, with `detail.value` (the text) and `detail.raw` (the characters without the mask).

## API

### `<twig:InputMask>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `mask` | string or null | `null` | The format: `9` is a digit, `a` a letter, `*` a letter or a digit, `?` makes the rest optional, other characters are literal. |
| `slotChar` | string | `_` | The character shown for an empty slot. A text as long as the mask gives one character per slot. Empty hides the placeholders. |
| `autoClear` | bool | `true` | Empty the field on blur when the mask is not complete. |
| `keyFilter` | string or null | `null` | Without a mask: a preset (`int`, `pint`, `num`, `pnum`, `money`, `hex`, `alpha`, `alphanum`, `email`) or a regular expression for one character. |
| `validateOnly` | bool | `false` | With `keyFilter`: test the whole value against the expression instead of each character. |
| `unmaskName` | string or null | `null` | Name of a hidden field that receives the value without the mask. |

| Block | Description |
| --- | --- |
| `default` | The field: an `Input` or any `<input>`. |

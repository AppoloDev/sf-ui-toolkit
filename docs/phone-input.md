# Phone Input

> International phone field with a searchable country selector and an E.164 value.

## Installation

- popover
- input-group
- button

## Usage

```twig
<twig:PhoneInput name="phone" defaultCountry="FR" />
```

## Examples

### Default country

The submitted value is the E.164 number built from the selected country and the digits typed (a leading national `0` is dropped).

<!-- height: 380 -->

```twig
<twig:PhoneInput name="phone" defaultCountry="FR" placeholder="6 12 34 56 78" />
```

### Initial value

An E.164 `value` selects the country from its dial code and fills the national number.

<!-- height: 380 -->

```twig
<twig:PhoneInput name="phone" value="+14155550123" defaultCountry="US" />
```

### Sizes

```twig
<div class="grid w-fit gap-3">
    <twig:PhoneInput name="phone_sm" size="sm" />
    <twig:PhoneInput name="phone_md" />
    <twig:PhoneInput name="phone_lg" size="lg" />
</div>
```

### With an external label

```twig
<twig:Field class="w-fit">
    <twig:Field:Label for="mobile">
        Mobile
    </twig:Field:Label>
    <twig:PhoneInput id="mobile" name="mobile" defaultCountry="GB" />
</twig:Field>
```

### Disabled

```twig
<twig:PhoneInput name="locked" value="+33612345678" disabled />
```

## Accessibility

- The country button is a `listbox` trigger (`aria-haspopup`, `aria-expanded`) and its label announces the selected country and dial code.
- The search field drives the list like a combobox: `↓` / `↑` move the active option (`aria-activedescendant`), `Enter` selects it, `Esc` closes and returns focus to the button.
- Search matches the country name, its ISO code or its dial code (`+44`).
- The national number is a native `tel` input with an accessible name (`label`, or an external `<label for>` through `id`).
- Country names are localized by the browser in the page language (or `locale`), and the list is sorted accordingly.
- Flags are emoji and hidden from assistive technologies; Windows does not render flag emoji, it shows the ISO letters instead.
- The number is not formatted or validated per country: validate the E.164 value on the server (for example with `giggsey/libphonenumber-for-php`).
- Event: `phone-input:change` fires on blur and on country change, with `detail.value` and `detail.country`.

## API

### `<twig:PhoneInput>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name. The submitted value is the E.164 number (`+33612345678`) or empty. |
| `value` | string | `''` | Initial E.164 number; the country is detected from its dial code. |
| `defaultCountry` | string | `FR` | ISO 3166-1 alpha-2 code used when `value` has no dial code. |
| `placeholder` | string | `''` | Placeholder of the national number field. |
| `size` | `sm`, `default`, `lg` | `default` | Field height. |
| `label` | string | `Phone number` | Accessible label of the number field. |
| `id` | string | `null` | Id of the national number input (for an external `<label for>`). |
| `locale` | string | `''` | Language of the country names. Defaults to the page language (`<html lang>`), through the browser's `Intl.DisplayNames`. |
| `countryLabel` | string | `Country` | Accessible name of the country button. |
| `searchLabel` | string | `Search a country` | Label and placeholder of the search field. |
| `listLabel` | string | `Countries` | Accessible name of the country list. |
| `emptyLabel` | string | `No country found.` | Text shown when the search has no result. |
| `disabled` | bool | `false` | Disables the field. |

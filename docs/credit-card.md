# Credit Card

> A bank card illustration: number, holder, expiry and brand detected from the number, a flip to the back for the CVC, and optional live binding to the fields of a payment form.

## Installation

- field, input (only for one example)

## Usage

```twig
<twig:CreditCard numberField="#number" holderField="#holder" expiryField="#expiry" cvcField="#cvc" />
```

The card is an illustration. It shows what the user types in the fields you point it to, and it never sends or stores anything: the real payment fields stay yours (or your payment provider's).

## Examples

### Basic

Example values: this is an illustration, not a real card.

<!-- height: 240 -->

```twig
<twig:CreditCard number="4242424242424242" holder="Ada Lovelace" expiry="09/29" />
```

### Brands

The brand is detected from the first digits: Visa, Mastercard, American Express.

<!-- height: 560 -->

```twig
<div class="flex flex-wrap gap-4">
    <twig:CreditCard number="4111111111111111" holder="Visa" expiry="01/30" />
    <twig:CreditCard number="5555555555554444" holder="Mastercard" expiry="01/30" />
    <twig:CreditCard number="378282246310005" holder="Amex" expiry="01/30" />
</div>
```

### Back

`flipped` shows the back, with the security code.

<!-- height: 240 -->

```twig
<twig:CreditCard number="4242424242424242" holder="Ada Lovelace" expiry="09/29" cvc="123" :flipped="true" />
```

### Empty

Without values, the placeholders show.

<!-- height: 240 -->

```twig
<twig:CreditCard />
```

### Live Form

The card follows the fields as they are typed and turns over when the security code is focused. Use the test number 4242 4242 4242 4242: never type a real card in a demo.

<!-- height: 340 -->

```twig
<div class="grid gap-4 sm:grid-cols-[auto_1fr]">
    <twig:CreditCard numberField="#cc-number" holderField="#cc-holder" expiryField="#cc-expiry" cvcField="#cc-cvc" />
    <form class="grid max-w-xs gap-3" autocomplete="off">
        <twig:Field>
            <twig:Field:Label for="cc-number">
                Number
            </twig:Field:Label>
            <twig:Input id="cc-number" inputmode="numeric" placeholder="4242 4242 4242 4242" maxlength="19" />
        </twig:Field>
        <twig:Field>
            <twig:Field:Label for="cc-holder">
                Name on the card
            </twig:Field:Label>
            <twig:Input id="cc-holder" placeholder="Ada Lovelace" />
        </twig:Field>
        <div class="grid grid-cols-2 gap-3">
            <twig:Field>
                <twig:Field:Label for="cc-expiry">
                    Expiry
                </twig:Field:Label>
                <twig:Input id="cc-expiry" placeholder="09/29" maxlength="5" />
            </twig:Field>
            <twig:Field>
                <twig:Field:Label for="cc-cvc">
                    CVC
                </twig:Field:Label>
                <twig:Input id="cc-cvc" inputmode="numeric" placeholder="123" maxlength="4" />
            </twig:Field>
        </div>
    </form>
</div>
```

### Another Language

All texts are props.

<!-- height: 240 -->

```twig
<twig:CreditCard number="4242424242424242" holder="Ada Lovelace" expiry="09/29" holderLabel="Titulaire" expiryLabel="Expire" cvcLabel="Cryptogramme" label="Carte bancaire" />
```

## Accessibility

- The illustration is an image with an accessible name; it is not a form control and the real fields keep their own labels.
- The flip is a transition that is switched off for people who prefer reduced motion.
- Never show a real card number in documentation or screenshots; use a test number.

## API

### `<twig:CreditCard>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `number` | string | | The card number, shown grouped. |
| `holder` | string | | The name on the card. |
| `expiry` | string | | The expiry, `MM/YY`. |
| `cvc` | string | | The security code, shown on the back. |
| `brand` | `auto`, `visa`, `mastercard`, `amex`, `generic` | `auto` | The brand, from the number when `auto`. |
| `flipped` | bool | `false` | Show the back. |
| `numberField` | string or null | `null` | A CSS selector of the number field to follow. |
| `holderField` | string or null | `null` | A CSS selector of the holder field. |
| `expiryField` | string or null | `null` | A CSS selector of the expiry field. |
| `cvcField` | string or null | `null` | A CSS selector of the CVC field (focus turns the card over). |
| `numberPlaceholder` | string | `•••• •••• •••• ••••` | The number shown while empty. |
| `holderPlaceholder` | string | `FULL NAME` | The holder shown while empty. |
| `expiryPlaceholder` | string | `MM/YY` | The expiry shown while empty. |
| `holderLabel` | string | `Card holder` | The label above the holder. |
| `expiryLabel` | string | `Expires` | The label above the expiry. |
| `cvcLabel` | string | `CVC` | The label of the security code. |
| `label` | string | `Bank card` | The accessible name. |

| Block | Description |
| --- | --- |
| `default` | Not used. |

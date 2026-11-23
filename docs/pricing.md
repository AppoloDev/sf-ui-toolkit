# Pricing

> Pricing plan cards in a responsive grid: price, period, included and excluded features, badge, highlighted plan and a call-to-action slot.

<!-- kind: block -->

## Usage

Prices are passed already formatted, so the component never guesses a currency or a locale. The call-to-action is the slot of each plan: use your own `Button` components (the examples use plain links so they work anywhere).

```twig
<twig:Pricing :columns="2">
    <twig:Pricing:Plan name="Free" price="$0" period="/month" :features="['3 projects', 'Community support']">
        <a href="#" class="inline-flex h-10 items-center justify-center rounded-md border border-border text-sm font-medium">Start free</a>
    </twig:Pricing:Plan>
    <twig:Pricing:Plan name="Pro" price="$29" period="/month" highlighted badge="Best value" :features="['Unlimited projects', 'Priority support']">
        <a href="#" class="inline-flex h-10 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground">Go Pro</a>
    </twig:Pricing:Plan>
</twig:Pricing>
```

## Examples

### Three plans

`highlighted` emphasizes the recommended plan, and `badge` straddles its top edge. Buttons stay aligned at the bottom of the cards.

```twig
<twig:Pricing>
    <twig:Pricing:Plan name="Starter" price="$0" period="/month" description="For side projects." :features="['3 projects', '1 GB storage', 'Community support']">
        <a href="#" class="inline-flex h-10 items-center justify-center rounded-md border border-border text-sm font-medium hover:bg-muted">Start free</a>
    </twig:Pricing:Plan>
    <twig:Pricing:Plan name="Business" price="$29" period="/month" description="For growing teams." highlighted badge="Best value" :features="['Unlimited projects', '100 GB storage', 'Priority support', 'Advanced permissions']">
        <a href="#" class="inline-flex h-10 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground">Choose Business</a>
    </twig:Pricing:Plan>
    <twig:Pricing:Plan name="Enterprise" price="Custom" description="For large organizations." :features="['Everything in Business', 'SSO and audit log', 'Dedicated manager']">
        <a href="#" class="inline-flex h-10 items-center justify-center rounded-md border border-border text-sm font-medium hover:bg-muted">Contact sales</a>
    </twig:Pricing:Plan>
</twig:Pricing>
```

### Included and excluded features

A feature `{label, included: false}` shows a minus and reads as "not included" to screen readers.

```twig
<twig:Pricing :columns="2">
    <twig:Pricing:Plan name="Basic" price="$9" period="/month" :features="[
        'Up to 5 members',
        {label: 'Custom domain', included: false},
        {label: 'Priority support', included: false},
    ]">
        <a href="#" class="inline-flex h-10 items-center justify-center rounded-md border border-border text-sm font-medium hover:bg-muted">Choose Basic</a>
    </twig:Pricing:Plan>
    <twig:Pricing:Plan name="Plus" price="$19" period="/month" highlighted :features="[
        'Up to 25 members',
        'Custom domain',
        {label: 'Priority support', included: false},
    ]">
        <a href="#" class="inline-flex h-10 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground">Choose Plus</a>
    </twig:Pricing:Plan>
</twig:Pricing>
```

### Translated texts

The words spoken to screen readers are props.

```twig
<twig:Pricing :columns="2">
    <twig:Pricing:Plan name="Gratuit" price="0 €" period="/mois" includedLabel="Inclus" notIncludedLabel="Non inclus" :features="['3 projets', {label: 'Support prioritaire', included: false}]" />
    <twig:Pricing:Plan name="Pro" price="29 €" period="/mois" highlighted badge="Meilleur choix" includedLabel="Inclus" notIncludedLabel="Non inclus" :features="['Projets illimités', 'Support prioritaire']" />
</twig:Pricing>
```

## Accessibility

- Each plan name is a heading (`nameTag`); the badge is repeated in words after the name for screen readers, and its visual copy is hidden from them.
- Feature rows are a list; the check and minus icons are decorative and each row is prefixed by a spoken "Included" or "Not included" (`includedLabel`, `notIncludedLabel`).
- The highlighted plan is not conveyed by the border alone: use `badge` to name it.

## API

### `<twig:Pricing>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `1`, `2`, `3`, `4` | `3` | Columns from the medium breakpoint up (fewer on small screens). |

### `<twig:Pricing:Plan>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | required | Plan name. |
| `price` | string | required | Price, already formatted (`$29`, `Free`, `Contact us`). |
| `period` | string | `null` | Text after the price, such as `/month`. |
| `description` | string | `null` | Short pitch under the name. |
| `features` | array | `[]` | Strings, or `{label, included}` objects (`included` defaults to `true`). |
| `badge` | string | `null` | Label straddling the top edge, also spoken after the plan name. |
| `highlighted` | bool | `false` | Emphasized border and ring: the recommended plan. |
| `includedLabel` | string | `Included` | Spoken for an included feature. |
| `notIncludedLabel` | string | `Not included` | Spoken for a feature that is not included. |
| `nameTag` | string | `h3` | Element of the plan name: `h2`, `h3` or `h4`. |

The default slot is the call-to-action at the bottom of the card.

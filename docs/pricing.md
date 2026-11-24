# Pricing

> Pricing plan cards in a responsive grid: price, period, included and excluded features, badge, highlighted plan and a call-to-action slot.

## Installation

- card
- badge

## Usage

Prices are passed already formatted, so the component never guesses a currency or a locale. Features are `Pricing:Feature` children, and the call-to-action goes in the `action` block of each plan.

```twig
<twig:Pricing :columns="2">
    <twig:Pricing:Plan name="Free" price="$0" period="/month">
        <twig:Pricing:Feature>3 projects</twig:Pricing:Feature>
        <twig:Pricing:Feature>Community support</twig:Pricing:Feature>
        <twig:block name="action">
            <twig:Button as="a" href="#" variant="outline">Start free</twig:Button>
        </twig:block>
    </twig:Pricing:Plan>
    <twig:Pricing:Plan name="Pro" price="$29" period="/month" highlighted badge="Best value">
        <twig:Pricing:Feature>Unlimited projects</twig:Pricing:Feature>
        <twig:Pricing:Feature>Priority support</twig:Pricing:Feature>
        <twig:block name="action">
            <twig:Button as="a" href="#">Go Pro</twig:Button>
        </twig:block>
    </twig:Pricing:Plan>
</twig:Pricing>
```

## Examples

### Three plans

`highlighted` emphasizes the recommended plan, and `badge` straddles its top edge. Buttons stay aligned at the bottom of the cards.

```twig
<twig:Pricing>
    <twig:Pricing:Plan name="Starter" price="$0" period="/month" description="For side projects.">
        <twig:Pricing:Feature>3 projects</twig:Pricing:Feature>
        <twig:Pricing:Feature>1 GB storage</twig:Pricing:Feature>
        <twig:Pricing:Feature>Community support</twig:Pricing:Feature>
        <twig:block name="action">
            <twig:Button as="a" href="#" variant="outline">Start free</twig:Button>
        </twig:block>
    </twig:Pricing:Plan>
    <twig:Pricing:Plan name="Business" price="$29" period="/month" description="For growing teams." highlighted badge="Best value">
        <twig:Pricing:Feature>Unlimited projects</twig:Pricing:Feature>
        <twig:Pricing:Feature>100 GB storage</twig:Pricing:Feature>
        <twig:Pricing:Feature>Priority support</twig:Pricing:Feature>
        <twig:Pricing:Feature>Advanced permissions</twig:Pricing:Feature>
        <twig:block name="action">
            <twig:Button as="a" href="#">Choose Business</twig:Button>
        </twig:block>
    </twig:Pricing:Plan>
    <twig:Pricing:Plan name="Enterprise" price="Custom" description="For large organizations.">
        <twig:Pricing:Feature>Everything in Business</twig:Pricing:Feature>
        <twig:Pricing:Feature>SSO and audit log</twig:Pricing:Feature>
        <twig:Pricing:Feature>Dedicated manager</twig:Pricing:Feature>
        <twig:block name="action">
            <twig:Button as="a" href="#" variant="outline">Contact sales</twig:Button>
        </twig:block>
    </twig:Pricing:Plan>
</twig:Pricing>
```

### Included and excluded features

`included` set to `false` on a feature shows a minus and reads as "not included" to screen readers.

```twig
<twig:Pricing :columns="2">
    <twig:Pricing:Plan name="Basic" price="$9" period="/month">
        <twig:Pricing:Feature>Up to 5 members</twig:Pricing:Feature>
        <twig:Pricing:Feature :included="false">Custom domain</twig:Pricing:Feature>
        <twig:Pricing:Feature :included="false">Priority support</twig:Pricing:Feature>
        <twig:block name="action">
            <twig:Button as="a" href="#" variant="outline">Choose Basic</twig:Button>
        </twig:block>
    </twig:Pricing:Plan>
    <twig:Pricing:Plan name="Plus" price="$19" period="/month" highlighted>
        <twig:Pricing:Feature>Up to 25 members</twig:Pricing:Feature>
        <twig:Pricing:Feature>Custom domain</twig:Pricing:Feature>
        <twig:Pricing:Feature :included="false">Priority support</twig:Pricing:Feature>
        <twig:block name="action">
            <twig:Button as="a" href="#">Choose Plus</twig:Button>
        </twig:block>
    </twig:Pricing:Plan>
</twig:Pricing>
```

### Translated texts

The words spoken to screen readers are props.

```twig
<twig:Pricing :columns="2">
    <twig:Pricing:Plan name="Gratuit" price="0 €" period="/mois" includedLabel="Inclus" notIncludedLabel="Non inclus">
        <twig:Pricing:Feature>3 projets</twig:Pricing:Feature>
        <twig:Pricing:Feature :included="false">Support prioritaire</twig:Pricing:Feature>
    </twig:Pricing:Plan>
    <twig:Pricing:Plan name="Pro" price="29 €" period="/mois" highlighted badge="Meilleur choix" includedLabel="Inclus" notIncludedLabel="Non inclus">
        <twig:Pricing:Feature>Projets illimités</twig:Pricing:Feature>
        <twig:Pricing:Feature>Support prioritaire</twig:Pricing:Feature>
    </twig:Pricing:Plan>
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
| `badge` | string | `null` | Label straddling the top edge, also spoken after the plan name. |
| `highlighted` | bool | `false` | Emphasized border and ring: the recommended plan. |
| `includedLabel` | string | `Included` | Spoken for an included feature. |
| `notIncludedLabel` | string | `Not included` | Spoken for a feature that is not included. |
| `nameTag` | string | `h3` | Element of the plan name: `h2`, `h3` or `h4`. |

The default slot holds the `Pricing:Feature` elements; the `action` block is the call-to-action at the bottom of the card.

### `<twig:Pricing:Feature>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `included` | bool | `true` | `false` shows a minus and is spoken as not included. |

The default slot is the text of the feature.

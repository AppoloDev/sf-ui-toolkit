# FAQ

> Frequently asked questions as a native accordion: single or split layout, multiple or exclusive answers, optional FAQPage structured data.

## Usage

Questions are plain data. The accordion is built on `<details>`, so it works without JavaScript.

```twig
<twig:Faq title="Frequently asked questions" :items="[
    {question: 'Can I cancel at any time?', answer: 'Yes, from your account settings.'},
    {question: 'Do you offer refunds?', answer: 'Within 30 days of the purchase.'},
]" />
```

## Examples

### Basic

Several answers can be open at once. `open` on an item opens it from the start.

```twig
<twig:Faq title="Frequently asked questions" description="Everything you need to know before you start." :items="[
    {question: 'Can I cancel at any time?', answer: 'Yes. You can cancel from your account settings and keep access until the end of the billing period.', open: true},
    {question: 'Do you offer refunds?', answer: 'We refund any purchase within 30 days, no questions asked.'},
    {question: 'Can I change my plan later?', answer: 'You can upgrade or downgrade whenever you want; the difference is prorated.'},
    {question: 'Is my data safe?', answer: 'Data is encrypted in transit and at rest, and backed up every night.'},
]" />
```

### One answer at a time

`multiple` set to `false` groups the items (same-name `<details>`): opening one closes the others. Give a `name` when several FAQs share a page, or let a random one be generated.

```twig
<twig:Faq :multiple="false" name="faq-exclusive" title="Billing" :items="[
    {question: 'When am I charged?', answer: 'On the same day each month, starting with your first purchase.'},
    {question: 'Which payment methods do you accept?', answer: 'Credit cards and SEPA direct debit.'},
    {question: 'Where can I find my invoices?', answer: 'In Settings, under Billing.'},
]" />
```

### Split layout with support

The intro sits on the left and stays in view while the list scrolls; the slot (here a support call) goes under the intro.

```twig
<twig:Faq layout="split" title="Questions? Answers." description="Can't find what you are looking for?" :items="[
    {question: 'How do I get started?', answer: 'Create an account and follow the three-step checklist.'},
    {question: 'Can I invite my team?', answer: 'Yes, unlimited members on every paid plan.'},
    {question: 'Is there an API?', answer: 'A REST API is included on all plans.'},
]">
    <a href="#" class="inline-flex h-9 items-center rounded-md border border-border px-4 text-sm font-medium hover:bg-muted">Contact support</a>
</twig:Faq>
```

### Structured data

`structuredData` adds the schema.org `FAQPage` JSON-LD built from the same list, so search engines can show the questions.

```twig
<twig:Faq structuredData :items="[
    {question: 'Is there a free plan?', answer: 'Yes, up to three projects.'},
]" />
```

## Accessibility

- Built on `<details>` and `<summary>`: the browser provides the button role, the expanded state, `Enter` and `Space`, and find in page opens matching answers.
- The chevron is decorative; the summary shows a focus ring.
- `titleTag` (`h2`, `h3` or `h4`) lets the heading fit the page outline.
- Exclusive mode uses the native `name` grouping of `<details>`, supported by current browsers; older ones simply let several answers stay open.

## API

### `<twig:Faq>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | array | `[]` | List of `{question, answer, open?}`. Answers are escaped: pass markup marked safe with `\|raw` for rich text. |
| `title` | string | `null` | Heading of the section. |
| `description` | string | `null` | Text under the heading. |
| `layout` | `single` \| `split` | `single` | Centered column, or intro on the left and list on the right. |
| `multiple` | bool | `true` | Several answers can be open at once; `false` closes the others. |
| `name` | string | `null` | Group name used when `multiple` is `false`; random when omitted. |
| `structuredData` | bool | `false` | Adds the schema.org `FAQPage` JSON-LD. |
| `titleTag` | string | `h2` | Element of the heading: `h2`, `h3` or `h4`. |

The default slot is shown under the list (single layout) or under the intro (split layout).

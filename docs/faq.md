# FAQ

> Frequently asked questions built on the shadcn Accordion: single or split layout, multiple or exclusive answers, optional FAQPage microdata.

## Installation

- accordion

## Usage

Each question is a `Faq:Item`; its slot is the answer, so it can hold any markup.

```twig
<twig:Faq title="Frequently asked questions">
    <twig:Faq:Item question="Can I cancel at any time?">
        Yes, from your account settings.
    </twig:Faq:Item>
    <twig:Faq:Item question="Do you offer refunds?">
        Within 30 days of the purchase.
    </twig:Faq:Item>
</twig:Faq>
```

## Examples

### Basic

Several answers can be open at once. `open` on an item opens it from the start.

```twig
<twig:Faq title="Frequently asked questions" description="Everything you need to know before you start.">
    <twig:Faq:Item question="Can I cancel at any time?" open>
        Yes. You can cancel from your account settings and keep access until the end of the billing period.
    </twig:Faq:Item>
    <twig:Faq:Item question="Do you offer refunds?">
        We refund any purchase within 30 days, no questions asked.
    </twig:Faq:Item>
    <twig:Faq:Item question="Can I change my plan later?">
        You can upgrade or downgrade whenever you want; the difference is prorated.
    </twig:Faq:Item>
    <twig:Faq:Item question="Is my data safe?">
        Data is encrypted in transit and at rest, and backed up every night.
    </twig:Faq:Item>
</twig:Faq>
```

### One answer at a time

`multiple` set to `false` closes the other answers when one opens.

```twig
<twig:Faq :multiple="false" title="Billing">
    <twig:Faq:Item question="When am I charged?">
        On the same day each month, starting with your first purchase.
    </twig:Faq:Item>
    <twig:Faq:Item question="Which payment methods do you accept?">
        Credit cards and SEPA direct debit.
    </twig:Faq:Item>
    <twig:Faq:Item question="Where can I find my invoices?">
        In
        <strong>
            Settings
        </strong>,
        under Billing.
    </twig:Faq:Item>
</twig:Faq>
```

### Split layout with support

The intro sits on the left and stays in view while the list scrolls; the `footer` block (here a support call) goes under the intro.

```twig
<twig:Faq layout="split" title="Questions? Answers." description="Can't find what you are looking for?">
    <twig:Faq:Item question="How do I get started?">
        Create an account and follow the three-step checklist.
    </twig:Faq:Item>
    <twig:Faq:Item question="Can I invite my team?">
        Yes, unlimited members on every paid plan.
    </twig:Faq:Item>
    <twig:Faq:Item question="Is there an API?">
        A REST API is included on all plans.
    </twig:Faq:Item>
    <twig:block name="footer">
        <twig:Button as="a" href="#" variant="outline">
            Contact support
        </twig:Button>
    </twig:block>
</twig:Faq>
```

### Structured data

`structuredData` marks the questions and answers up with schema.org `FAQPage` microdata, so search engines can show them.

```twig
<twig:Faq structuredData>
    <twig:Faq:Item question="Is there a free plan?">
        Yes, up to three projects.
    </twig:Faq:Item>
</twig:Faq>
```

## Accessibility

- The accordion comes from the shadcn kit: each question is a button with `aria-expanded` and `aria-controls`, the answer is a labelled region, and arrow keys, `Home` and `End` move between questions. Closed answers stay findable by the browser's find in page.
- `titleTag` (`h2`, `h3` or `h4`) lets the heading fit the page outline.
- The questions are headings inside the accordion (level 3), so prefer `h2` for the title.

## API

### `<twig:Faq>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | string | `null` | Heading of the section. |
| `description` | string | `null` | Text under the heading. |
| `layout` | `single`, `split` | `single` | Centered column, or intro on the left and list on the right. |
| `multiple` | bool | `true` | Several answers can be open at once; `false` closes the others. |
| `id` | string | `null` | Id of the accordion; random when omitted, unique per page. |
| `structuredData` | bool | `false` | Adds the schema.org `FAQPage` microdata. |
| `titleTag` | string | `h2` | Element of the heading: `h2`, `h3` or `h4`. |

| Block | Description |
|---|---|
| `default` | `Faq:Item` elements. |
| `footer` | Under the list (single layout) or under the intro (split layout): a support call-to-action. |

### `<twig:Faq:Item>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `question` | string | | Text of the question. |
| `value` | string | `null` | Identifier of the item; derived from the question when omitted, unique within the FAQ. |
| `open` | bool | `false` | Open from the start. |

| Block | Description |
|---|---|
| `default` | The answer. |


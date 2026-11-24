# Timeline

> Chronological list of events (activity feed, milestones, roadmap), vertical or horizontal, with completed and active states.

## Usage

```twig
<twig:Timeline>
    <twig:Timeline:Item title="Order placed" date="Mon, 9:41" :completed="true">
        Payment received.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Shipped" date="Tue, 14:05" :active="true" />
</twig:Timeline>
```

## Examples

### Vertical

Events stack top to bottom: the best layout for chronological streams, and it scales well on mobile.

```twig
<twig:Timeline class="max-w-md">
    <twig:Timeline:Item title="Order placed" date="Mon, 9:41 AM" datetime="2026-11-23T09:41" :completed="true">
        Payment received.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Packed" date="Mon, 4:10 PM" :completed="true">
        Your parcel left the warehouse.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="In transit" date="Tue, 8:30 AM" :active="true">
        Expected tomorrow.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Delivered" date="Pending" />
</twig:Timeline>
```

### Horizontal

Suited to milestones and pipeline steps.

```twig
<twig:Timeline orientation="horizontal" class="w-full">
    <twig:Timeline:Item title="Kick-off" date="Q1" :completed="true">Scope agreed</twig:Timeline:Item>
    <twig:Timeline:Item title="Beta" date="Q2" :active="true">In progress</twig:Timeline:Item>
    <twig:Timeline:Item title="Launch" date="Q3">Planned</twig:Timeline:Item>
    <twig:Timeline:Item title="Review" date="Q4" />
</twig:Timeline>
```

### Activity feed

The slot accepts any markup.

```twig
<twig:Timeline class="max-w-md">
    <twig:Timeline:Item title="Alice commented" date="2 hours ago" :completed="true">
        <blockquote class="border-l-2 border-border pl-3 italic">Looks good to me.</blockquote>
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Bob pushed 3 commits" date="Yesterday" :completed="true">
        <code class="rounded bg-muted px-1.5 py-0.5 text-xs">main</code>
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Pull request opened" date="2 days ago" />
</twig:Timeline>
```

## Accessibility

- The component is an ordered list (`ol` / `li`), so screen readers announce the number of events and their order.
- The current event carries `aria-current="step"`.
- Indicators and connectors are decorative (`aria-hidden`).
- Dates use a `time` element; pass `datetime` to give it a machine-readable value.

## API

### `<twig:Timeline>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `vertical`, `horizontal` | `vertical` | Direction of the list. |

| Block | Description |
|---|---|
| `default` | `Timeline:Item` elements, as direct children. |

### `<twig:Timeline:Item>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | string | `null` | Event title. |
| `date` | string | `null` | Displayed date or time. |
| `datetime` | string | `null` | Machine-readable value of the `time` element. |
| `completed` | bool | `false` | The event is done (indicator and connector use the primary color). |
| `active` | bool | `false` | The current event. |

| Block | Description |
|---|---|
| `default` | The body of the event: description, metadata, actions. |


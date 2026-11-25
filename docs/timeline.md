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
    <twig:Timeline:Item title="Kick-off" date="Q1" :completed="true">
        Scope agreed
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Beta" date="Q2" :active="true">
        In progress
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Launch" date="Q3">
        Planned
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Review" date="Q4" />
</twig:Timeline>
```

### Activity feed

The slot accepts any markup.

```twig
<twig:Timeline class="max-w-md">
    <twig:Timeline:Item title="Alice commented" date="2 hours ago" :completed="true">
        <blockquote class="border-l-2 border-border pl-3 italic">
            Looks good to me.
        </blockquote>
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Bob pushed 3 commits" date="Yesterday" :completed="true">
        <code class="rounded bg-muted px-1.5 py-0.5 text-xs">
            main
        </code>
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Pull request opened" date="2 days ago" />
</twig:Timeline>
```

### Roadmap

Quarters as titles, with a badge for the status of each one.

```twig
<twig:Timeline class="max-w-md">
    <twig:Timeline:Item title="Q3 2026" date="Shipped" :completed="true">
        <twig:Badge variant="secondary">
            Released
        </twig:Badge>
        Public API and webhooks.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Q4 2026" date="In progress" :active="true">
        <twig:Badge>
            In progress
        </twig:Badge>
        Roles and audit log.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Q1 2027" date="Planned">
        <twig:Badge variant="outline">
            Planned
        </twig:Badge>
        Single sign-on and SCIM.
    </twig:Timeline:Item>
</twig:Timeline>
```

### Order Status

Each event of an order, with the carrier's note under the title.

```twig
<twig:Timeline class="max-w-md">
    <twig:Timeline:Item title="Order confirmed" date="12 Nov, 09:14" :completed="true">
        We received your payment of €84.00.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Shipped" date="13 Nov, 16:40" :completed="true">
        Handed over to the carrier. Tracking 7H42-91XZ.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Out for delivery" date="14 Nov, 07:55" :active="true">
        The driver is on the way.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Delivered" date="Expected 14 Nov" />
</twig:Timeline>
```

### Git Activity

Commits with their hash and author, in a monospace font.

```twig
<twig:Timeline class="max-w-md">
    <twig:Timeline:Item title="Fix the date parsing" date="2 hours ago" :completed="true">
        <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            a3f9c21
        </code>
        by Lea Martin
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Add the export button" date="Yesterday" :completed="true">
        <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            9be04d7
        </code>
        by Sam Okafor
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Merge pull request #218" date="Mon, 10 Nov" :completed="true">
        <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            1c70b5e
        </code>
        by Noah Carter
    </twig:Timeline:Item>
</twig:Timeline>
```

### Milestones

A horizontal timeline with a date and a short note for each milestone.

```twig
<twig:Timeline orientation="horizontal" class="max-w-3xl">
    <twig:Timeline:Item title="Kickoff" date="Jan 2026" :completed="true">
        Team and scope defined.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Beta" date="Apr 2026" :completed="true">
        50 pilot customers.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Launch" date="Sep 2026" :active="true">
        General availability.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Scale" date="2027">
        New regions.
    </twig:Timeline:Item>
</twig:Timeline>
```

### Pipeline Steps

The steps of a build, with the duration of each one; the running step is the active one.

```twig
<twig:Timeline orientation="horizontal" class="max-w-3xl">
    <twig:Timeline:Item title="Checkout" date="4 s" :completed="true" />
    <twig:Timeline:Item title="Install" date="38 s" :completed="true" />
    <twig:Timeline:Item title="Test" date="Running" :active="true">
        214 of 380 tests.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Build" date="Waiting" />
    <twig:Timeline:Item title="Deploy" date="Waiting" />
</twig:Timeline>
```

### Roadmap Items

The features of a release, grouped under their milestone, with a badge for each one.

```twig
<twig:Timeline class="max-w-md">
    <twig:Timeline:Item title="Version 2.0" date="December" :active="true">
        <ul class="space-y-2">
            <li class="flex items-center justify-between gap-3">
                New dashboard
                <twig:Badge variant="secondary">
                    Done
                </twig:Badge>
            </li>
            <li class="flex items-center justify-between gap-3">
                Team permissions
                <twig:Badge>
                    In progress
                </twig:Badge>
            </li>
            <li class="flex items-center justify-between gap-3">
                Mobile app
                <twig:Badge variant="outline">
                    Planned
                </twig:Badge>
            </li>
        </ul>
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Version 2.1" date="February">
        <ul class="space-y-2">
            <li class="flex items-center justify-between gap-3">
                Offline mode
                <twig:Badge variant="outline">
                    Planned
                </twig:Badge>
            </li>
            <li class="flex items-center justify-between gap-3">
                API v2
                <twig:Badge variant="outline">
                    Planned
                </twig:Badge>
            </li>
        </ul>
    </twig:Timeline:Item>
</twig:Timeline>
```

### Leading Labels

The date comes before the line, on the left, and the text follows on the right. Reverse the row of each item and align the text to the right.

```twig
<twig:Timeline class="max-w-md">
    <twig:Timeline:Item title="Project created" date="Jan 12" :completed="true" class="flex-row-reverse! text-right">
        Repository and CI set up.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="First release" date="Mar 3" :completed="true" class="flex-row-reverse! text-right">
        Version 0.1 published.
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Public beta" date="Jun 20" :active="true" class="flex-row-reverse! text-right">
        Open to everyone.
    </twig:Timeline:Item>
</twig:Timeline>
```

### Deployment Log

A log of deployments: environment, version and result.

```twig
<twig:Timeline class="max-w-md">
    <twig:Timeline:Item title="Deployed to production" date="14:32" :completed="true">
        <span class="font-mono text-xs">
            v2.4.1 · 52 s
        </span>
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Deployed to staging" date="14:05" :completed="true">
        <span class="font-mono text-xs">
            v2.4.1 · 48 s
        </span>
    </twig:Timeline:Item>
    <twig:Timeline:Item title="Build started" date="13:58" :completed="true">
        <span class="font-mono text-xs">
            commit a3f9c21
        </span>
    </twig:Timeline:Item>
</twig:Timeline>
```

### Compact Milestones

A small horizontal timeline without descriptions, for a card or a header.

```twig
<twig:Timeline orientation="horizontal" class="max-w-md text-xs">
    <twig:Timeline:Item title="Draft" date="1 Nov" :completed="true" />
    <twig:Timeline:Item title="Review" date="8 Nov" :completed="true" />
    <twig:Timeline:Item title="Publish" date="15 Nov" :active="true" />
    <twig:Timeline:Item title="Archive" date="30 Nov" />
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


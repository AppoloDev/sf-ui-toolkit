# Stepper

> Multi-step navigation with indicators, states, vertical layout, panels and cancelable step changes (per-step validation).

## Usage

```twig
<twig:Stepper :value="1">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Account
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Profile
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
    <twig:Stepper:Content step="1">
        Account form…
    </twig:Stepper:Content>
    <twig:Stepper:Content step="2">
        Profile form…
    </twig:Stepper:Content>
</twig:Stepper>
```

## Examples

### With panels and navigation buttons

Steps before the current one are completed automatically. Panels stay in the DOM (hidden when inactive), so the values typed in a form survive step changes.

<!-- height: 260 -->

```twig
<twig:Stepper :value="2" class="max-w-xl">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Account
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Profile
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Confirm
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
    <twig:Stepper:Content step="1" class="rounded-md border border-border p-4 text-sm">
        Account details.
    </twig:Stepper:Content>
    <twig:Stepper:Content step="2" class="rounded-md border border-border p-4 text-sm">
        Profile details.
    </twig:Stepper:Content>
    <twig:Stepper:Content step="3" class="rounded-md border border-border p-4 text-sm">
        Review and confirm.
    </twig:Stepper:Content>
    <div class="flex justify-between">
        <twig:Button variant="outline" data-stepper-target="prev" data-action="click->stepper#prev">
            Previous
        </twig:Button>
        <twig:Button data-stepper-target="next" data-action="click->stepper#next">
            Next
        </twig:Button>
    </div>
</twig:Stepper>
```

### Descriptions

```twig
<twig:Stepper :value="2" class="max-w-2xl">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Order placed
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Payment received
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Shipped
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        On its way
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Delivered
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Not yet
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Vertical

```twig
<twig:Stepper :value="2" orientation="vertical">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Create the project
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Invite the team
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Launch
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Loading

`loading` only affects the active step: a spinner replaces its marker.

```twig
<twig:Stepper :value="2" class="max-w-xl">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Upload
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" loading>
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Processing
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Done
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Non-linear and disabled steps

`completed` marks a later step as done; `disabled` blocks a step that is not reachable yet.

```twig
<twig:Stepper :value="1" class="max-w-xl">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Details
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" :completed="true">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Optional
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" disabled>
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Locked
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Per-step validation

The `stepper:change` event is cancelable: call `preventDefault()` to refuse the change. Here the first step cannot be left while its field is empty.

```twig
<twig:Stepper :value="1" class="max-w-xl" id="validated-stepper">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Name
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Done
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
    <twig:Stepper:Content step="1">
        <twig:Input name="name" required placeholder="Required to continue" />
    </twig:Stepper:Content>
    <twig:Stepper:Content step="2" class="text-sm">
        Thanks!
    </twig:Stepper:Content>
</twig:Stepper>
<script>
    document.getElementById('validated-stepper').addEventListener('stepper:change', (event) => {
        const name = event.currentTarget.querySelector('[name=name]');
        if (event.detail.to > event.detail.from && !name.value) {
            event.preventDefault();
            name.focus();
        }
    });
</script>
```

### Completed State

When every step is done, mark the last one with `completed`: its indicator turns into a check mark like the others.

```twig
<twig:Stepper :value="4" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Cart
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Shipping
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Payment
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" completed>
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    4
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Done
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Labels Below

The title sits under the indicator. Classes on `Stepper:Trigger` stack its content.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="items-start!">
            <twig:Stepper:Trigger class="flex-col! gap-2!">
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Account
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mt-4! self-start!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="items-start!">
            <twig:Stepper:Trigger class="flex-col! gap-2!">
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Profile
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mt-4! self-start!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="items-start!">
            <twig:Stepper:Trigger class="flex-col! gap-2!">
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Billing
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mt-4! self-start!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="items-start!">
            <twig:Stepper:Trigger class="flex-col! gap-2!">
                <twig:Stepper:Indicator>
                    4
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Review
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mt-4! self-start!" />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Icons & Badges

Icons replace the numbers and a badge flags an optional step. The check mark still replaces the icon once a step is completed.

```twig
<twig:Stepper :value="2" class="max-w-3xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:user" class="size-4!" />
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Account
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:building-2" class="size-4!" />
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Company
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:credit-card" class="size-4!" />
                </twig:Stepper:Indicator>
                <span class="flex items-center gap-2">
                    <twig:Stepper:Title>
                        Billing
                    </twig:Stepper:Title>
                    <twig:Badge variant="secondary">
                        Optional
                    </twig:Badge>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:circle-check" class="size-4!" />
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Review
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Bar With Titles

Each step is a bar above its title. Completed and current bars are filled.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="items-stretch! gap-2!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-stretch! gap-0!">
                <span class="block">
                    <span class="mb-2 block h-1 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                    </span>
                    <twig:Stepper:Title>
                        Details
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="items-stretch! gap-2!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-stretch! gap-0!">
                <span class="block">
                    <span class="mb-2 block h-1 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                    </span>
                    <twig:Stepper:Title>
                        Delivery
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="items-stretch! gap-2!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-stretch! gap-0!">
                <span class="block">
                    <span class="mb-2 block h-1 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                    </span>
                    <twig:Stepper:Title>
                        Payment
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="items-stretch! gap-2!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-stretch! gap-0!">
                <span class="block">
                    <span class="mb-2 block h-1 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                    </span>
                    <twig:Stepper:Title>
                        Confirm
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Segmented Bar

A bar split in segments, one per step, with no labels. The triggers keep their button role, so give each one an accessible name.

```twig
<twig:Stepper :value="3" class="max-w-md!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="flex-1! px-0.5!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="sr-only">
                    Step 1
                </span>
                <span class="block h-1.5 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-1! px-0.5!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="sr-only">
                    Step 2
                </span>
                <span class="block h-1.5 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-1! px-0.5!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="sr-only">
                    Step 3
                </span>
                <span class="block h-1.5 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-1! px-0.5!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="sr-only">
                    Step 4
                </span>
                <span class="block h-1.5 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="5" class="flex-1! px-0.5!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="sr-only">
                    Step 5
                </span>
                <span class="block h-1.5 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Vertical Descriptions

A vertical stepper with a description under each title.

<!-- height: 380 -->

```twig
<twig:Stepper :value="3" orientation="vertical" class="max-w-sm!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Order placed
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Payment received on 12 Nov
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Packed
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        The warehouse prepared your parcel
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Shipped
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Tracking number sent by email
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    4
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Delivered
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Not yet
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Dotted Progress

Small dots joined by a line. Pair it with a caption that tells the current step.

```twig
<twig:Stepper :value="3" class="max-w-xs!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger class="gap-0!">
                <twig:Stepper:Indicator class="size-3! border-2! text-[0px]! [&_svg]:hidden!">
                    
                </twig:Stepper:Indicator>
                <span class="sr-only">
                    Step 1
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger class="gap-0!">
                <twig:Stepper:Indicator class="size-3! border-2! text-[0px]! [&_svg]:hidden!">
                    
                </twig:Stepper:Indicator>
                <span class="sr-only">
                    Step 2
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger class="gap-0!">
                <twig:Stepper:Indicator class="size-3! border-2! text-[0px]! [&_svg]:hidden!">
                    
                </twig:Stepper:Indicator>
                <span class="sr-only">
                    Step 3
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger class="gap-0!">
                <twig:Stepper:Indicator class="size-3! border-2! text-[0px]! [&_svg]:hidden!">
                    
                </twig:Stepper:Indicator>
                <span class="sr-only">
                    Step 4
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="5">
            <twig:Stepper:Trigger class="gap-0!">
                <twig:Stepper:Indicator class="size-3! border-2! text-[0px]! [&_svg]:hidden!">
                    
                </twig:Stepper:Indicator>
                <span class="sr-only">
                    Step 5
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Top Color Bars

Green bars for completed steps, amber for the current one, with the title below.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="flex-1! gap-1!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="block w-full text-left">
                    <span class="block h-1.5 w-full rounded-full bg-muted group-data-[state=active]/step:bg-amber-500 group-data-[state=completed]/step:bg-emerald-500">
                    </span>
                    <twig:Stepper:Title class="mt-2!">
                        Quote
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-1! gap-1!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="block w-full text-left">
                    <span class="block h-1.5 w-full rounded-full bg-muted group-data-[state=active]/step:bg-amber-500 group-data-[state=completed]/step:bg-emerald-500">
                    </span>
                    <twig:Stepper:Title class="mt-2!">
                        Review
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-1! gap-1!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="block w-full text-left">
                    <span class="block h-1.5 w-full rounded-full bg-muted group-data-[state=active]/step:bg-amber-500 group-data-[state=completed]/step:bg-emerald-500">
                    </span>
                    <twig:Stepper:Title class="mt-2!">
                        Approval
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-1! gap-1!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="block w-full text-left">
                    <span class="block h-1.5 w-full rounded-full bg-muted group-data-[state=active]/step:bg-amber-500 group-data-[state=completed]/step:bg-emerald-500">
                    </span>
                    <twig:Stepper:Title class="mt-2!">
                        Contract
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Bottom Color Bars

The same bars under the titles.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="flex-1! gap-1!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="block w-full text-left">
                    <twig:Stepper:Title class="mb-2!">
                        Quote
                    </twig:Stepper:Title>
                    <span class="block h-1.5 w-full rounded-full bg-muted group-data-[state=active]/step:bg-amber-500 group-data-[state=completed]/step:bg-emerald-500">
                    </span>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-1! gap-1!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="block w-full text-left">
                    <twig:Stepper:Title class="mb-2!">
                        Review
                    </twig:Stepper:Title>
                    <span class="block h-1.5 w-full rounded-full bg-muted group-data-[state=active]/step:bg-amber-500 group-data-[state=completed]/step:bg-emerald-500">
                    </span>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-1! gap-1!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="block w-full text-left">
                    <twig:Stepper:Title class="mb-2!">
                        Approval
                    </twig:Stepper:Title>
                    <span class="block h-1.5 w-full rounded-full bg-muted group-data-[state=active]/step:bg-amber-500 group-data-[state=completed]/step:bg-emerald-500">
                    </span>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-1! gap-1!">
            <twig:Stepper:Trigger class="w-full!">
                <span class="block w-full text-left">
                    <twig:Stepper:Title class="mb-2!">
                        Contract
                    </twig:Stepper:Title>
                    <span class="block h-1.5 w-full rounded-full bg-muted group-data-[state=active]/step:bg-amber-500 group-data-[state=completed]/step:bg-emerald-500">
                    </span>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Icon Tile Rows

Each row has an icon tile instead of a round indicator. The tile fills for the current step.

<!-- height: 400 -->

```twig
<twig:Stepper :value="2" orientation="vertical" class="max-w-sm!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator class="rounded-lg!">
                    <twig:ux:icon name="lucide:folder-plus" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Create the workspace
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Name it and pick a region
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator class="rounded-lg!">
                    <twig:ux:icon name="lucide:users" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Invite your team
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Send up to 10 invitations
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator class="rounded-lg!">
                    <twig:ux:icon name="lucide:plug" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Connect a source
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Link a database or an API
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator class="rounded-lg!">
                    <twig:ux:icon name="lucide:rocket" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Go live
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Publish the first dashboard
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Numbered Chevrons

Arrow-shaped steps cut with a `clip-path`; the number comes first.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! gap-2! bg-muted! px-6! text-sm! text-muted-foreground! group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15! group-data-[state=completed]/step:text-foreground! rounded-none! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%)]">
                <span class="text-xs font-semibold tabular-nums">
                    1
                </span>
                <twig:Stepper:Title class="group-data-[state=inactive]/step:text-muted-foreground!">
                    Cart
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! gap-2! bg-muted! px-6! text-sm! text-muted-foreground! group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15! group-data-[state=completed]/step:text-foreground! rounded-none! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)]">
                <span class="text-xs font-semibold tabular-nums">
                    2
                </span>
                <twig:Stepper:Title class="group-data-[state=inactive]/step:text-muted-foreground!">
                    Address
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! gap-2! bg-muted! px-6! text-sm! text-muted-foreground! group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15! group-data-[state=completed]/step:text-foreground! rounded-none! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)]">
                <span class="text-xs font-semibold tabular-nums">
                    3
                </span>
                <twig:Stepper:Title class="group-data-[state=inactive]/step:text-muted-foreground!">
                    Payment
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! gap-2! bg-muted! px-6! text-sm! text-muted-foreground! group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15! group-data-[state=completed]/step:text-foreground! rounded-none! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)]">
                <span class="text-xs font-semibold tabular-nums">
                    4
                </span>
                <twig:Stepper:Title class="group-data-[state=inactive]/step:text-muted-foreground!">
                    Review
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Filled Chevrons

The same arrows, titles only.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! gap-2! bg-muted! px-6! text-sm! text-muted-foreground! group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15! group-data-[state=completed]/step:text-foreground! rounded-none! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%)]">
                <twig:Stepper:Title class="group-data-[state=inactive]/step:text-muted-foreground!">
                    Cart
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! gap-2! bg-muted! px-6! text-sm! text-muted-foreground! group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15! group-data-[state=completed]/step:text-foreground! rounded-none! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)]">
                <twig:Stepper:Title class="group-data-[state=inactive]/step:text-muted-foreground!">
                    Address
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! gap-2! bg-muted! px-6! text-sm! text-muted-foreground! group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15! group-data-[state=completed]/step:text-foreground! rounded-none! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)]">
                <twig:Stepper:Title class="group-data-[state=inactive]/step:text-muted-foreground!">
                    Payment
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! gap-2! bg-muted! px-6! text-sm! text-muted-foreground! group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15! group-data-[state=completed]/step:text-foreground! rounded-none! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)]">
                <twig:Stepper:Title class="group-data-[state=inactive]/step:text-muted-foreground!">
                    Review
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Breadcrumb Steps

Steps read as a breadcrumb: chevrons instead of connecting lines, and the current step is bold.

```twig
<twig:Stepper :value="2" class="max-w-xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="flex-none! gap-1!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Title class="group-data-[state=active]/step:font-semibold! group-data-[state=active]/step:text-foreground!">
                    Cart
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:ux:icon name="lucide:chevron-right" class="size-4! text-muted-foreground! group-last/step:hidden!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-none! gap-1!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Title class="group-data-[state=active]/step:font-semibold! group-data-[state=active]/step:text-foreground!">
                    Shipping
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:ux:icon name="lucide:chevron-right" class="size-4! text-muted-foreground! group-last/step:hidden!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-none! gap-1!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Title class="group-data-[state=active]/step:font-semibold! group-data-[state=active]/step:text-foreground!">
                    Payment
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:ux:icon name="lucide:chevron-right" class="size-4! text-muted-foreground! group-last/step:hidden!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-none! gap-1!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Title class="group-data-[state=active]/step:font-semibold! group-data-[state=active]/step:text-foreground!">
                    Confirmation
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:ux:icon name="lucide:chevron-right" class="size-4! text-muted-foreground! group-last/step:hidden!" />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Compact Inline

Small indicators and `text-xs` titles for a toolbar or a dialog header.

```twig
<twig:Stepper :value="2" class="max-w-sm!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger class="gap-2!">
                <twig:Stepper:Indicator class="size-5! text-xs!">
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title class="text-xs!">
                    Upload
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="min-w-4!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger class="gap-2!">
                <twig:Stepper:Indicator class="size-5! text-xs!">
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title class="text-xs!">
                    Map columns
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="min-w-4!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger class="gap-2!">
                <twig:Stepper:Indicator class="size-5! text-xs!">
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title class="text-xs!">
                    Import
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="min-w-4!" />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Status List

A vertical list where each step ends with a status badge. The separators are left out.

<!-- height: 320 -->

```twig
<twig:Stepper :value="3" orientation="vertical" class="max-w-sm!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="w-full! flex-row! items-center! gap-3! py-2!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Build
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Badge variant="secondary" class="ml-auto">
                Done
            </twig:Badge>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="w-full! flex-row! items-center! gap-3! py-2!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Tests
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Badge variant="secondary" class="ml-auto">
                Done
            </twig:Badge>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="w-full! flex-row! items-center! gap-3! py-2!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Deploy
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Badge variant="default" class="ml-auto">
                Running
            </twig:Badge>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="w-full! flex-row! items-center! gap-3! py-2!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    4
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Smoke tests
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Badge variant="outline" class="ml-auto">
                Waiting
            </twig:Badge>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Side Rail Icons

Icons on a left rail joined by a vertical line, with the titles on the right.

<!-- height: 380 -->

```twig
<twig:Stepper :value="2" orientation="vertical" class="max-w-xs!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:clipboard-list" class="size-4!" />
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Brief
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:pen-tool" class="size-4!" />
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Design
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:code" class="size-4!" />
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Build
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:circle-check" class="size-4!" />
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Launch
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Horizontal Step Cards

Each step is a card; the current one is outlined with the primary color.

<!-- height: 200 -->

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav class="items-stretch! gap-3!">
        <twig:Stepper:Item step="1" class="w-full! flex-1! gap-0!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-start! gap-1! rounded-lg! border! border-border! p-3! group-data-[state=active]/step:border-primary! group-data-[state=active]/step:bg-primary/5! group-data-[state=completed]/step:border-primary/40!">
                <span class="text-xs text-muted-foreground">
                    Step 1
                </span>
                <twig:Stepper:Title>
                    Plan
                </twig:Stepper:Title>
                <twig:Stepper:Description>
                    Pick a plan
                </twig:Stepper:Description>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="w-full! flex-1! gap-0!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-start! gap-1! rounded-lg! border! border-border! p-3! group-data-[state=active]/step:border-primary! group-data-[state=active]/step:bg-primary/5! group-data-[state=completed]/step:border-primary/40!">
                <span class="text-xs text-muted-foreground">
                    Step 2
                </span>
                <twig:Stepper:Title>
                    Details
                </twig:Stepper:Title>
                <twig:Stepper:Description>
                    Company and VAT
                </twig:Stepper:Description>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="w-full! flex-1! gap-0!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-start! gap-1! rounded-lg! border! border-border! p-3! group-data-[state=active]/step:border-primary! group-data-[state=active]/step:bg-primary/5! group-data-[state=completed]/step:border-primary/40!">
                <span class="text-xs text-muted-foreground">
                    Step 3
                </span>
                <twig:Stepper:Title>
                    Payment
                </twig:Stepper:Title>
                <twig:Stepper:Description>
                    Card or transfer
                </twig:Stepper:Description>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Vertical Step Cards

Cards stacked in a column.

<!-- height: 420 -->

```twig
<twig:Stepper :value="2" orientation="vertical" class="max-w-xs!">
    <twig:Stepper:Nav class="w-full! gap-3!">
        <twig:Stepper:Item step="1" class="w-full! gap-0!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-start! gap-1! rounded-lg! border! border-border! p-3! group-data-[state=active]/step:border-primary! group-data-[state=active]/step:bg-primary/5! group-data-[state=completed]/step:border-primary/40!">
                <span class="text-xs text-muted-foreground">
                    Step 1
                </span>
                <twig:Stepper:Title>
                    Plan
                </twig:Stepper:Title>
                <twig:Stepper:Description>
                    Pick a plan
                </twig:Stepper:Description>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="w-full! gap-0!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-start! gap-1! rounded-lg! border! border-border! p-3! group-data-[state=active]/step:border-primary! group-data-[state=active]/step:bg-primary/5! group-data-[state=completed]/step:border-primary/40!">
                <span class="text-xs text-muted-foreground">
                    Step 2
                </span>
                <twig:Stepper:Title>
                    Details
                </twig:Stepper:Title>
                <twig:Stepper:Description>
                    Company and VAT
                </twig:Stepper:Description>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="w-full! gap-0!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-start! gap-1! rounded-lg! border! border-border! p-3! group-data-[state=active]/step:border-primary! group-data-[state=active]/step:bg-primary/5! group-data-[state=completed]/step:border-primary/40!">
                <span class="text-xs text-muted-foreground">
                    Step 3
                </span>
                <twig:Stepper:Title>
                    Payment
                </twig:Stepper:Title>
                <twig:Stepper:Description>
                    Card or transfer
                </twig:Stepper:Description>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Timestamped Checkpoints

A description holds the time of each checkpoint.

<!-- height: 380 -->

```twig
<twig:Stepper :value="3" orientation="vertical" class="max-w-sm!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Picked up
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Mon 12 Nov, 09:14
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        At the sorting center
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Tue 13 Nov, 02:40
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Out for delivery
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Wed 14 Nov, 08:05
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    4
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Delivered
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Expected Wed 14 Nov
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Transit Arrow

An arrow icon replaces the connecting line, for steps that describe a journey.

```twig
<twig:Stepper :value="2" class="max-w-md!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="flex-none! gap-1!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Paris
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:ux:icon name="lucide:arrow-right" class="size-4! text-muted-foreground! group-last/step:hidden! mx-2!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-none! gap-1!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Lyon
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:ux:icon name="lucide:arrow-right" class="size-4! text-muted-foreground! group-last/step:hidden! mx-2!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-none! gap-1!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Marseille
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:ux:icon name="lucide:arrow-right" class="size-4! text-muted-foreground! group-last/step:hidden! mx-2!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-none! gap-1!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    4
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Nice
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:ux:icon name="lucide:arrow-right" class="size-4! text-muted-foreground! group-last/step:hidden! mx-2!" />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

## Accessibility

- `Stepper:Nav` is a `tablist` and each `Stepper:Trigger` a `tab`; the active tab has `aria-selected="true"` and roving focus keeps a single tab stop in the list.
- Keyboard: `→` / `↓` and `←` / `↑` move between steps and wrap at the ends, `Home` / `End` jump to the first and last step, `Enter` / `Space` select the focused step.
- `Stepper:Content` is a `tabpanel`, hidden while its step is inactive.
- Disabled steps cannot be focused or selected.

## API

### `<twig:Stepper>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | int | `1` | Current step (1-based). |
| `orientation` | `horizontal`, `vertical` | `horizontal` | Layout of the navigation. |

| Block | Description |
|---|---|
| `default` | A `Stepper:Nav` and the `Stepper:Content` panels. |

### `<twig:Stepper:Item>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `step` | int | required | Step number (1-based). |
| `completed` | bool | `false` | Forces the completed state (non-linear flows). |
| `disabled` | bool | `false` | The step is not reachable yet. |
| `loading` | bool | `false` | Shows a spinner while the step is active. |

| Block | Description |
|---|---|
| `default` | A `Stepper:Trigger` with its indicator, title and description. |

### `<twig:Stepper:Content>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `step` | int | required | Step shown by this panel. |

| Block | Description |
|---|---|
| `default` | The panel of the step. |

### Other parts

| Prop | Type | Default | Description |
|---|---|---|---|
| `Stepper:Nav` | slot | - | Tab list wrapping the items. |
| `Stepper:Trigger` | slot | - | Clickable step control (contains the indicator and labels). |
| `Stepper:Indicator` | slot | - | Marker of the step; the check mark and the spinner are drawn by the component. |
| `Stepper:Title` | slot | - | Label of the step. |
| `Stepper:Description` | slot | - | Secondary text of the step. |
| `Stepper:Separator` | - | - | Connector to the next step (hidden on the last one). |

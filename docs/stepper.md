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

### Left Aligned Titles

The title and its description sit left-aligned under the indicator, with the line running above them.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="items-start!">
            <twig:Stepper:Trigger class="flex-col! items-start! gap-2!">
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Account
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Your details
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mt-4! self-start!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="items-start!">
            <twig:Stepper:Trigger class="flex-col! items-start! gap-2!">
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Company
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Legal information
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mt-4! self-start!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="items-start!">
            <twig:Stepper:Trigger class="flex-col! items-start! gap-2!">
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Billing
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Payment method
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mt-4! self-start!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="items-start!">
            <twig:Stepper:Trigger class="flex-col! items-start! gap-2!">
                <twig:Stepper:Indicator>
                    4
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Review
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Check and send
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mt-4! self-start!" />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Inline Titles

No indicator: the title is part of the line, so the stepper reads like a sentence.

```twig
<twig:Stepper :value="2" class="max-w-xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Title>
                    Draft
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mx-2!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Title>
                    Review
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mx-2!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Title>
                    Approve
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mx-2!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger>
                <twig:Stepper:Title>
                    Publish
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="mx-2!" />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Title & Caption

A small uppercase caption above the title replaces the description.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Description class="text-[10px]! uppercase! tracking-wide!">
                        Step 1
                    </twig:Stepper:Description>
                    <twig:Stepper:Title>
                        Account
                    </twig:Stepper:Title>
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
                    <twig:Stepper:Description class="text-[10px]! uppercase! tracking-wide!">
                        Step 2
                    </twig:Stepper:Description>
                    <twig:Stepper:Title>
                        Profile
                    </twig:Stepper:Title>
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
                    <twig:Stepper:Description class="text-[10px]! uppercase! tracking-wide!">
                        Step 3
                    </twig:Stepper:Description>
                    <twig:Stepper:Title>
                        Review
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Vertical Titles

A compact vertical stepper with small dots and titles only.

<!-- height: 280 -->

```twig
<twig:Stepper :value="2" orientation="vertical" class="max-w-xs!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger class="gap-3!">
                <twig:Stepper:Indicator class="size-3! border-2! text-[0px]! [&_svg]:hidden!">
                    
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Create the project
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="ml-1.5! h-6!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger class="gap-3!">
                <twig:Stepper:Indicator class="size-3! border-2! text-[0px]! [&_svg]:hidden!">
                    
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Invite the team
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="ml-1.5! h-6!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger class="gap-3!">
                <twig:Stepper:Indicator class="size-3! border-2! text-[0px]! [&_svg]:hidden!">
                    
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Connect a source
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="ml-1.5! h-6!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger class="gap-3!">
                <twig:Stepper:Indicator class="size-3! border-2! text-[0px]! [&_svg]:hidden!">
                    
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Publish
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="ml-1.5! h-6!" />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Controlled

Buttons outside the navigation move the stepper: a button with `data-step` and `stepper#select` jumps to that step.

<!-- height: 260 -->

```twig
<twig:Stepper :value="1" class="max-w-xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Plan
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
                    Build
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
                    Ship
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
    <twig:Stepper:Content step="1" class="rounded-md border border-border p-4 text-sm">
        Plan the work.
    </twig:Stepper:Content>
    <twig:Stepper:Content step="2" class="rounded-md border border-border p-4 text-sm">
        Build it.
    </twig:Stepper:Content>
    <twig:Stepper:Content step="3" class="rounded-md border border-border p-4 text-sm">
        Ship it.
    </twig:Stepper:Content>
    <div class="flex gap-2">
        <twig:Button variant="outline" size="sm" data-step="1" data-action="click->stepper#select">
            Jump to step 1
        </twig:Button>
        <twig:Button variant="outline" size="sm" data-step="2" data-action="click->stepper#select">
            Jump to step 2
        </twig:Button>
        <twig:Button variant="outline" size="sm" data-step="3" data-action="click->stepper#select">
            Jump to step 3
        </twig:Button>
    </div>
</twig:Stepper>
```

### Delivery Stops

Each stop has an icon, a place and the time it was reached, aligned on the right.

<!-- height: 400 -->

```twig
<twig:Stepper :value="3" orientation="vertical" class="max-w-sm!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="w-full!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:warehouse" class="size-4!" />
                </twig:Stepper:Indicator>
                <span class="flex flex-1 flex-col">
                    <twig:Stepper:Title>
                        Warehouse
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Lyon
                    </twig:Stepper:Description>
                </span>
                <span class="ml-auto text-xs text-muted-foreground tabular-nums">
                    08:10
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="w-full!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:package-open" class="size-4!" />
                </twig:Stepper:Indicator>
                <span class="flex flex-1 flex-col">
                    <twig:Stepper:Title>
                        Sorting hub
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Dijon
                    </twig:Stepper:Description>
                </span>
                <span class="ml-auto text-xs text-muted-foreground tabular-nums">
                    10:45
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="w-full!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:truck" class="size-4!" />
                </twig:Stepper:Indicator>
                <span class="flex flex-1 flex-col">
                    <twig:Stepper:Title>
                        Local depot
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Paris
                    </twig:Stepper:Description>
                </span>
                <span class="ml-auto text-xs text-muted-foreground tabular-nums">
                    13:20
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="w-full!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:house" class="size-4!" />
                </twig:Stepper:Indicator>
                <span class="flex flex-1 flex-col">
                    <twig:Stepper:Title>
                        Customer
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        12 rue des Lilas
                    </twig:Stepper:Description>
                </span>
                <span class="ml-auto text-xs text-muted-foreground tabular-nums">
                    Est. 15:30
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Stage Details

The panel under the stepper shows the details of the selected stage.

<!-- height: 260 -->

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Qualify
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
                    Proposal
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
                    Negotiation
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    4
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Closed
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
    <twig:Stepper:Content step="1" class="rounded-lg border border-border bg-muted/30 p-4 text-sm">
        <span class="block font-medium">
            Qualify
        </span>
        <span class="text-muted-foreground">
            Owner: Lea. Budget confirmed.
        </span>
    </twig:Stepper:Content>
    <twig:Stepper:Content step="2" class="rounded-lg border border-border bg-muted/30 p-4 text-sm">
        <span class="block font-medium">
            Proposal
        </span>
        <span class="text-muted-foreground">
            Owner: Sam. Quote sent on 12 Nov.
        </span>
    </twig:Stepper:Content>
    <twig:Stepper:Content step="3" class="rounded-lg border border-border bg-muted/30 p-4 text-sm">
        <span class="block font-medium">
            Negotiation
        </span>
        <span class="text-muted-foreground">
            Owner: Noah. Waiting for legal review.
        </span>
    </twig:Stepper:Content>
    <twig:Stepper:Content step="4" class="rounded-lg border border-border bg-muted/30 p-4 text-sm">
        <span class="block font-medium">
            Closed
        </span>
        <span class="text-muted-foreground">
            Not reached yet.
        </span>
    </twig:Stepper:Content>
</twig:Stepper>
```

### Frame Icon Tiles

The steps live in the `Frame` component of this kit; each one is an icon tile that lifts when current.

```twig
<twig:Stepper :value="2" class="max-w-xl!">
    <twig:Frame spacing="sm">
        <twig:Stepper:Nav class="gap-1!">
            <twig:Stepper:Item step="1" class="flex-1! gap-0!">
                <twig:Stepper:Trigger class="w-full! flex-col! gap-2! rounded-lg! p-3! group-data-[state=active]/step:bg-background! group-data-[state=active]/step:shadow-sm!">
                    <twig:Stepper:Indicator class="size-9! rounded-lg!">
                        <twig:ux:icon name="lucide:user" class="size-4!" />
                    </twig:Stepper:Indicator>
                    <twig:Stepper:Title>
                        Account
                    </twig:Stepper:Title>
                </twig:Stepper:Trigger>
            </twig:Stepper:Item>
            <twig:Stepper:Item step="2" class="flex-1! gap-0!">
                <twig:Stepper:Trigger class="w-full! flex-col! gap-2! rounded-lg! p-3! group-data-[state=active]/step:bg-background! group-data-[state=active]/step:shadow-sm!">
                    <twig:Stepper:Indicator class="size-9! rounded-lg!">
                        <twig:ux:icon name="lucide:building-2" class="size-4!" />
                    </twig:Stepper:Indicator>
                    <twig:Stepper:Title>
                        Company
                    </twig:Stepper:Title>
                </twig:Stepper:Trigger>
            </twig:Stepper:Item>
            <twig:Stepper:Item step="3" class="flex-1! gap-0!">
                <twig:Stepper:Trigger class="w-full! flex-col! gap-2! rounded-lg! p-3! group-data-[state=active]/step:bg-background! group-data-[state=active]/step:shadow-sm!">
                    <twig:Stepper:Indicator class="size-9! rounded-lg!">
                        <twig:ux:icon name="lucide:credit-card" class="size-4!" />
                    </twig:Stepper:Indicator>
                    <twig:Stepper:Title>
                        Billing
                    </twig:Stepper:Title>
                </twig:Stepper:Trigger>
            </twig:Stepper:Item>
            <twig:Stepper:Item step="4" class="flex-1! gap-0!">
                <twig:Stepper:Trigger class="w-full! flex-col! gap-2! rounded-lg! p-3! group-data-[state=active]/step:bg-background! group-data-[state=active]/step:shadow-sm!">
                    <twig:Stepper:Indicator class="size-9! rounded-lg!">
                        <twig:ux:icon name="lucide:circle-check" class="size-4!" />
                    </twig:Stepper:Indicator>
                    <twig:Stepper:Title>
                        Review
                    </twig:Stepper:Title>
                </twig:Stepper:Trigger>
            </twig:Stepper:Item>
        </twig:Stepper:Nav>
    </twig:Frame>
</twig:Stepper>
```

### Purchase Orders

A vertical list of purchase orders, each with its reference, the last event and the amount.

<!-- height: 400 -->

```twig
<twig:Stepper :value="3" orientation="vertical" class="max-w-md!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="w-full!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <span class="flex flex-1 flex-col">
                    <twig:Stepper:Title>
                        PO-1042 · Acme Supplies
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Raised 4 Nov by Lea
                    </twig:Stepper:Description>
                </span>
                <span class="ml-auto text-sm font-medium tabular-nums">
                    €1,240.00
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="w-full!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <span class="flex flex-1 flex-col">
                    <twig:Stepper:Title>
                        PO-1043 · Northwind
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Approved 6 Nov by Sam
                    </twig:Stepper:Description>
                </span>
                <span class="ml-auto text-sm font-medium tabular-nums">
                    €860.50
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="w-full!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <span class="flex flex-1 flex-col">
                    <twig:Stepper:Title>
                        PO-1044 · Globex
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Waiting for approval
                    </twig:Stepper:Description>
                </span>
                <span class="ml-auto text-sm font-medium tabular-nums">
                    €2,310.00
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="w-full!">
            <twig:Stepper:Trigger class="w-full!">
                <twig:Stepper:Indicator>
                    4
                </twig:Stepper:Indicator>
                <span class="flex flex-1 flex-col">
                    <twig:Stepper:Title>
                        PO-1045 · Initech
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Draft
                    </twig:Stepper:Description>
                </span>
                <span class="ml-auto text-sm font-medium tabular-nums">
                    €430.00
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Security Checks

Icons for each check and a result under the title; the one that needs attention is flagged in amber.

<!-- height: 380 -->

```twig
<twig:Stepper :value="3" orientation="vertical" class="max-w-xs!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:shield-check" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Password strength
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Passed
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:key-round" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Two-factor authentication
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Passed
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:smartphone" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Trusted devices
                    </twig:Stepper:Title>
                    <twig:Stepper:Description class="text-amber-600!">
                        Needs review
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:mail" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Recovery email
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Not started
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Phase Track

A pill-shaped track: the current phase is raised, the others stay flat.

```twig
<twig:Stepper :value="2" class="max-w-md!">
    <twig:Stepper:Nav class="w-full! gap-1! rounded-full! bg-muted! p-1!">
        <twig:Stepper:Item step="1" class="flex-1! gap-0!">
            <twig:Stepper:Trigger class="w-full! justify-center! rounded-full! px-4! py-1.5! group-data-[state=active]/step:bg-background! group-data-[state=active]/step:shadow-sm!">
                <twig:Stepper:Title>
                    Discover
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-1! gap-0!">
            <twig:Stepper:Trigger class="w-full! justify-center! rounded-full! px-4! py-1.5! group-data-[state=active]/step:bg-background! group-data-[state=active]/step:shadow-sm!">
                <twig:Stepper:Title>
                    Design
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-1! gap-0!">
            <twig:Stepper:Trigger class="w-full! justify-center! rounded-full! px-4! py-1.5! group-data-[state=active]/step:bg-background! group-data-[state=active]/step:shadow-sm!">
                <twig:Stepper:Title>
                    Build
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-1! gap-0!">
            <twig:Stepper:Trigger class="w-full! justify-center! rounded-full! px-4! py-1.5! group-data-[state=active]/step:bg-background! group-data-[state=active]/step:shadow-sm!">
                <twig:Stepper:Title>
                    Launch
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Truck Route

Pins joined by a dashed route; the truck marks the current stop.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:map-pin" class="size-4! group-data-[state=active]/step:hidden!" />
                    <twig:ux:icon name="lucide:truck" class="hidden! size-4! group-data-[state=active]/step:block!" />
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Paris
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="h-0! min-w-8! border-t-2! border-dashed! border-border! bg-transparent! group-data-[state=completed]/step:border-primary!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:map-pin" class="size-4! group-data-[state=active]/step:hidden!" />
                    <twig:ux:icon name="lucide:truck" class="hidden! size-4! group-data-[state=active]/step:block!" />
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Lyon
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="h-0! min-w-8! border-t-2! border-dashed! border-border! bg-transparent! group-data-[state=completed]/step:border-primary!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:map-pin" class="size-4! group-data-[state=active]/step:hidden!" />
                    <twig:ux:icon name="lucide:truck" class="hidden! size-4! group-data-[state=active]/step:block!" />
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Marseille
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="h-0! min-w-8! border-t-2! border-dashed! border-border! bg-transparent! group-data-[state=completed]/step:border-primary!" />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:map-pin" class="size-4! group-data-[state=active]/step:hidden!" />
                    <twig:ux:icon name="lucide:truck" class="hidden! size-4! group-data-[state=active]/step:block!" />
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Nice
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator class="h-0! min-w-8! border-t-2! border-dashed! border-border! bg-transparent! group-data-[state=completed]/step:border-primary!" />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Outlined Chevrons

Arrows with a thin outline (drawn with stacked drop shadows, since a `clip-path` cuts borders); the current step is outlined with the primary color.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="flex-1! -ml-2! first:ml-0! [filter:drop-shadow(1px_0_0_var(--border))_drop-shadow(-1px_0_0_var(--border))_drop-shadow(0_1px_0_var(--border))_drop-shadow(0_-1px_0_var(--border))]! data-[state=active]:[filter:drop-shadow(1px_0_0_var(--primary))_drop-shadow(-1px_0_0_var(--primary))_drop-shadow(0_1px_0_var(--primary))_drop-shadow(0_-1px_0_var(--primary))]!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! rounded-none! bg-background! px-6! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%)] group-data-[state=active]/step:font-semibold!">
                <twig:Stepper:Title>
                    Cart
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-1! -ml-2! first:ml-0! [filter:drop-shadow(1px_0_0_var(--border))_drop-shadow(-1px_0_0_var(--border))_drop-shadow(0_1px_0_var(--border))_drop-shadow(0_-1px_0_var(--border))]! data-[state=active]:[filter:drop-shadow(1px_0_0_var(--primary))_drop-shadow(-1px_0_0_var(--primary))_drop-shadow(0_1px_0_var(--primary))_drop-shadow(0_-1px_0_var(--primary))]!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! rounded-none! bg-background! px-6! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)] group-data-[state=active]/step:font-semibold!">
                <twig:Stepper:Title>
                    Address
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-1! -ml-2! first:ml-0! [filter:drop-shadow(1px_0_0_var(--border))_drop-shadow(-1px_0_0_var(--border))_drop-shadow(0_1px_0_var(--border))_drop-shadow(0_-1px_0_var(--border))]! data-[state=active]:[filter:drop-shadow(1px_0_0_var(--primary))_drop-shadow(-1px_0_0_var(--primary))_drop-shadow(0_1px_0_var(--primary))_drop-shadow(0_-1px_0_var(--primary))]!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! rounded-none! bg-background! px-6! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)] group-data-[state=active]/step:font-semibold!">
                <twig:Stepper:Title>
                    Payment
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-1! -ml-2! first:ml-0! [filter:drop-shadow(1px_0_0_var(--border))_drop-shadow(-1px_0_0_var(--border))_drop-shadow(0_1px_0_var(--border))_drop-shadow(0_-1px_0_var(--border))]! data-[state=active]:[filter:drop-shadow(1px_0_0_var(--primary))_drop-shadow(-1px_0_0_var(--primary))_drop-shadow(0_1px_0_var(--primary))_drop-shadow(0_-1px_0_var(--primary))]!">
            <twig:Stepper:Trigger class="h-10! w-full! justify-center! rounded-none! bg-background! px-6! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)] group-data-[state=active]/step:font-semibold!">
                <twig:Stepper:Title>
                    Review
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Flat Chevrons

Shallow arrows in a single tone, with an icon in front of each title.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="flex-1! -ml-1! first:ml-0!">
            <twig:Stepper:Trigger class="h-9! w-full! justify-start! gap-2! rounded-none! bg-muted/60! px-5! [clip-path:polygon(0_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,0_100%)] group-data-[state=active]/step:bg-muted! group-data-[state=completed]/step:bg-muted!">
                <twig:ux:icon name="lucide:shopping-cart" class="size-4! shrink-0!" />
                <twig:Stepper:Title>
                    Cart
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-1! -ml-1! first:ml-0!">
            <twig:Stepper:Trigger class="h-9! w-full! justify-start! gap-2! rounded-none! bg-muted/60! px-5! [clip-path:polygon(0_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,0_100%,8px_50%)] group-data-[state=active]/step:bg-muted! group-data-[state=completed]/step:bg-muted!">
                <twig:ux:icon name="lucide:map-pin" class="size-4! shrink-0!" />
                <twig:Stepper:Title>
                    Address
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-1! -ml-1! first:ml-0!">
            <twig:Stepper:Trigger class="h-9! w-full! justify-start! gap-2! rounded-none! bg-muted/60! px-5! [clip-path:polygon(0_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,0_100%,8px_50%)] group-data-[state=active]/step:bg-muted! group-data-[state=completed]/step:bg-muted!">
                <twig:ux:icon name="lucide:credit-card" class="size-4! shrink-0!" />
                <twig:Stepper:Title>
                    Payment
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-1! -ml-1! first:ml-0!">
            <twig:Stepper:Trigger class="h-9! w-full! justify-start! gap-2! rounded-none! bg-muted/60! px-5! [clip-path:polygon(0_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,0_100%,8px_50%)] group-data-[state=active]/step:bg-muted! group-data-[state=completed]/step:bg-muted!">
                <twig:ux:icon name="lucide:circle-check" class="size-4! shrink-0!" />
                <twig:Stepper:Title>
                    Review
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Chevron Icon Tiles

Filled arrows with a small icon tile in front of each title.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-11! w-full! justify-start! gap-2! rounded-none! bg-muted! px-6! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%)] group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15!">
                <span class="flex size-6 items-center justify-center rounded-md bg-background/80 text-foreground">
                    <twig:ux:icon name="lucide:shopping-cart" class="size-3.5!" />
                </span>
                <twig:Stepper:Title class="group-data-[state=active]/step:text-primary-foreground!">
                    Cart
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-11! w-full! justify-start! gap-2! rounded-none! bg-muted! px-6! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)] group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15!">
                <span class="flex size-6 items-center justify-center rounded-md bg-background/80 text-foreground">
                    <twig:ux:icon name="lucide:map-pin" class="size-3.5!" />
                </span>
                <twig:Stepper:Title class="group-data-[state=active]/step:text-primary-foreground!">
                    Address
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-11! w-full! justify-start! gap-2! rounded-none! bg-muted! px-6! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)] group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15!">
                <span class="flex size-6 items-center justify-center rounded-md bg-background/80 text-foreground">
                    <twig:ux:icon name="lucide:credit-card" class="size-3.5!" />
                </span>
                <twig:Stepper:Title class="group-data-[state=active]/step:text-primary-foreground!">
                    Payment
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-1! -ml-2! first:ml-0!">
            <twig:Stepper:Trigger class="h-11! w-full! justify-start! gap-2! rounded-none! bg-muted! px-6! [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%,14px_50%)] group-data-[state=active]/step:bg-primary! group-data-[state=active]/step:text-primary-foreground! group-data-[state=completed]/step:bg-primary/15!">
                <span class="flex size-6 items-center justify-center rounded-md bg-background/80 text-foreground">
                    <twig:ux:icon name="lucide:circle-check" class="size-3.5!" />
                </span>
                <twig:Stepper:Title class="group-data-[state=active]/step:text-primary-foreground!">
                    Review
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Shipping Route

Icons for the mode of transport and an estimated date under each stage.

```twig
<twig:Stepper :value="2" class="max-w-2xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:package-open" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Packed
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        12 Nov
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:ship" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        At sea
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        14 Nov
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:warehouse" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Customs
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        21 Nov
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    <twig:ux:icon name="lucide:house" class="size-4!" />
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Delivered
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Est. 24 Nov
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Shipment Progress

A header with the tracking number and a status badge, then one bar per stage.

```twig
<twig:Stepper :value="3" class="max-w-xl!">
    <div class="flex items-center justify-between text-sm">
        <span class="font-medium">
            Parcel 7H42-91XZ
        </span>
        <twig:Badge variant="secondary">
            In transit
        </twig:Badge>
    </div>
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="flex-1! items-stretch! gap-1!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-stretch! gap-0!">
                <span class="block w-full text-left">
                    <span class="mb-2 block h-1.5 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                        
                    </span>
                    <twig:Stepper:Title class="text-xs!">
                        Label created
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="flex-1! items-stretch! gap-1!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-stretch! gap-0!">
                <span class="block w-full text-left">
                    <span class="mb-2 block h-1.5 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                        
                    </span>
                    <twig:Stepper:Title class="text-xs!">
                        Picked up
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="flex-1! items-stretch! gap-1!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-stretch! gap-0!">
                <span class="block w-full text-left">
                    <span class="mb-2 block h-1.5 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                        
                    </span>
                    <twig:Stepper:Title class="text-xs!">
                        In transit
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="flex-1! items-stretch! gap-1!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-stretch! gap-0!">
                <span class="block w-full text-left">
                    <span class="mb-2 block h-1.5 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                        
                    </span>
                    <twig:Stepper:Title class="text-xs!">
                        Out for delivery
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="5" class="flex-1! items-stretch! gap-1!">
            <twig:Stepper:Trigger class="w-full! flex-col! items-stretch! gap-0!">
                <span class="block w-full text-left">
                    <span class="mb-2 block h-1.5 w-full rounded-full bg-primary group-data-[state=inactive]/step:bg-muted">
                        
                    </span>
                    <twig:Stepper:Title class="text-xs!">
                        Delivered
                    </twig:Stepper:Title>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Collapsible Sub-Steps

Each step has a collapsible list of sub-steps, built with a native `details`.

<!-- height: 460 -->

```twig
<twig:Stepper :value="2" orientation="vertical" class="max-w-sm!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="w-full!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Prepare
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <details class="ml-11 text-sm text-muted-foreground">
                <summary class="cursor-pointer select-none py-1">
                    Sub-steps
                </summary>
                <ul class="space-y-1 pb-2 pt-1">
                    <li class="flex items-center gap-2">
                        <twig:ux:icon name="lucide:circle-check" class="size-3.5! text-emerald-600!" />
                        Connect the repository
                    </li>
                    <li class="flex items-center gap-2">
                        <twig:ux:icon name="lucide:circle-check" class="size-3.5! text-emerald-600!" />
                        Choose a branch
                    </li>
                </ul>
            </details>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="w-full!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Configure
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <details open class="ml-11 text-sm text-muted-foreground">
                <summary class="cursor-pointer select-none py-1">
                    Sub-steps
                </summary>
                <ul class="space-y-1 pb-2 pt-1">
                    <li class="flex items-center gap-2">
                        <twig:ux:icon name="lucide:circle-check" class="size-3.5! text-emerald-600!" />
                        Set the variables
                    </li>
                    <li class="flex items-center gap-2">
                        <twig:ux:icon name="lucide:circle" class="size-3.5! text-muted-foreground!" />
                        Add a domain
                    </li>
                    <li class="flex items-center gap-2">
                        <twig:ux:icon name="lucide:circle" class="size-3.5! text-muted-foreground!" />
                        Enable previews
                    </li>
                </ul>
            </details>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="w-full!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Release
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <details class="ml-11 text-sm text-muted-foreground">
                <summary class="cursor-pointer select-none py-1">
                    Sub-steps
                </summary>
                <ul class="space-y-1 pb-2 pt-1">
                    <li class="flex items-center gap-2">
                        <twig:ux:icon name="lucide:circle" class="size-3.5! text-muted-foreground!" />
                        Run the checks
                    </li>
                    <li class="flex items-center gap-2">
                        <twig:ux:icon name="lucide:circle" class="size-3.5! text-muted-foreground!" />
                        Publish
                    </li>
                </ul>
            </details>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Right-Aligned Sub-Steps

Sub-steps under each step, with their status aligned on the right.

<!-- height: 460 -->

```twig
<twig:Stepper :value="2" orientation="vertical" class="max-w-sm!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1" class="w-full!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Prepare
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <ul class="ml-11 w-[calc(100%-2.75rem)] space-y-1 pb-3 pt-1 text-sm">
                <li class="flex items-center justify-between gap-4 text-muted-foreground">
                    Connect the repository
                    <span class="text-xs">
                        Done
                    </span>
                </li>
                <li class="flex items-center justify-between gap-4 text-muted-foreground">
                    Choose a branch
                    <span class="text-xs">
                        Done
                    </span>
                </li>
            </ul>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="w-full!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Configure
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <ul class="ml-11 w-[calc(100%-2.75rem)] space-y-1 pb-3 pt-1 text-sm">
                <li class="flex items-center justify-between gap-4 text-muted-foreground">
                    Set the variables
                    <span class="text-xs">
                        Done
                    </span>
                </li>
                <li class="flex items-center justify-between gap-4 text-muted-foreground">
                    Add a domain
                    <span class="text-xs">
                        In progress
                    </span>
                </li>
                <li class="flex items-center justify-between gap-4 text-muted-foreground">
                    Enable previews
                    <span class="text-xs">
                        Waiting
                    </span>
                </li>
            </ul>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="w-full!">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Release
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <ul class="ml-11 w-[calc(100%-2.75rem)] space-y-1 pb-3 pt-1 text-sm">
                <li class="flex items-center justify-between gap-4 text-muted-foreground">
                    Run the checks
                    <span class="text-xs">
                        Waiting
                    </span>
                </li>
                <li class="flex items-center justify-between gap-4 text-muted-foreground">
                    Publish
                    <span class="text-xs">
                        Waiting
                    </span>
                </li>
            </ul>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Vertical Status Bars

A colored bar on the left of each step: green when done, amber for the current one.

<!-- height: 340 -->

```twig
<twig:Stepper :value="3" orientation="vertical" class="max-w-xs!">
    <twig:Stepper:Nav class="gap-2!">
        <twig:Stepper:Item step="1" class="w-full!">
            <twig:Stepper:Trigger class="w-full! rounded-md! border-l-4! border-border! py-2! pl-3! group-data-[state=completed]/step:border-emerald-500! group-data-[state=active]/step:border-amber-500!">
                <span>
                    <twig:Stepper:Title>
                        Application received
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        12 Nov
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" class="w-full!">
            <twig:Stepper:Trigger class="w-full! rounded-md! border-l-4! border-border! py-2! pl-3! group-data-[state=completed]/step:border-emerald-500! group-data-[state=active]/step:border-amber-500!">
                <span>
                    <twig:Stepper:Title>
                        Documents verified
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        13 Nov
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" class="w-full!">
            <twig:Stepper:Trigger class="w-full! rounded-md! border-l-4! border-border! py-2! pl-3! group-data-[state=completed]/step:border-emerald-500! group-data-[state=active]/step:border-amber-500!">
                <span>
                    <twig:Stepper:Title>
                        Interview scheduled
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Waiting for a date
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
        <twig:Stepper:Item step="4" class="w-full!">
            <twig:Stepper:Trigger class="w-full! rounded-md! border-l-4! border-border! py-2! pl-3! group-data-[state=completed]/step:border-emerald-500! group-data-[state=active]/step:border-amber-500!">
                <span>
                    <twig:Stepper:Title>
                        Decision
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Not started
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Loop

The next button wraps from the last step to the first: the script writes the stepper value, which the controller follows.

```twig
<twig:Stepper :value="1" id="stepper-loop" class="max-w-xl!">
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
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Review
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
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
    <twig:Stepper:Content step="1" class="rounded-md border border-border p-4 text-sm">
        Step one: gather the details.
    </twig:Stepper:Content>
    <twig:Stepper:Content step="2" class="rounded-md border border-border p-4 text-sm">
        Step two: review them.
    </twig:Stepper:Content>
    <twig:Stepper:Content step="3" class="rounded-md border border-border p-4 text-sm">
        Step three: confirm.
    </twig:Stepper:Content>
    <div>
        <twig:Button size="sm" type="button" id="stepper-loop-next">
            Next, then start over
        </twig:Button>
    </div>
</twig:Stepper>
<script>
    document.getElementById('stepper-loop-next').addEventListener('click', () => {
        const stepper = document.getElementById('stepper-loop');
        stepper.dataset.stepperValueValue = String(Number(stepper.dataset.stepperValueValue) % 3 + 1);
    });
</script>
```

### Manual

The triggers are disabled: only the buttons move the stepper, so the user cannot skip a step.

```twig
<twig:Stepper :value="1" class="max-w-xl!">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger disabled>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Details
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger disabled>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Review
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger disabled>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Confirm
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
    <twig:Stepper:Content step="1" class="rounded-md border border-border p-4 text-sm">
        Step one: gather the details.
    </twig:Stepper:Content>
    <twig:Stepper:Content step="2" class="rounded-md border border-border p-4 text-sm">
        Step two: review them.
    </twig:Stepper:Content>
    <twig:Stepper:Content step="3" class="rounded-md border border-border p-4 text-sm">
        Step three: confirm.
    </twig:Stepper:Content>
    <div class="flex gap-2">
        <twig:Button variant="outline" size="sm" type="button" data-action="click->stepper#prev">
            Back
        </twig:Button>
        <twig:Button size="sm" type="button" data-action="click->stepper#next">
            Next
        </twig:Button>
    </div>
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

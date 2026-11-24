# Accordion

## Examples

### Single Expand

```twig
<twig:Accordion id="acc-single" defaultValue="item-1" class="max-w-md">
    <twig:Accordion:Item value="item-1">
        <twig:Accordion:Trigger>
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can reach out any time and we will get back to you within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="item-2">
        <twig:Accordion:Trigger>
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can reach out any time and we will get back to you within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="item-3">
        <twig:Accordion:Trigger>
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can reach out any time and we will get back to you within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Bordered Rounded

```twig
<twig:Accordion id="acc-rounded" defaultValue="a" class="max-w-md space-y-2">
    <twig:Accordion:Item value="a" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger>
            Is it accessible?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Yes, it follows the WAI-ARIA design pattern.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger>
            Is it styled?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Yes, it follows the WAI-ARIA design pattern.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="c" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger>
            Is it animated?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Yes, it follows the WAI-ARIA design pattern.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### In Card

```twig
<twig:Card class="max-w-md">
    <twig:Card:Header>
        <twig:Card:Title>
            Account questions
        </twig:Card:Title>
    </twig:Card:Header>
    <twig:Card:Content>
        <twig:Accordion id="acc-card" multiple>
            <twig:Accordion:Item value="plan">
                <twig:Accordion:Trigger>
                    Plan
                </twig:Accordion:Trigger>
                <twig:Accordion:Content>
                    Everything about plan in one place.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
            <twig:Accordion:Item value="billing">
                <twig:Accordion:Trigger>
                    Billing
                </twig:Accordion:Trigger>
                <twig:Accordion:Content>
                    Everything about billing in one place.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
            <twig:Accordion:Item value="security">
                <twig:Accordion:Trigger>
                    Security
                </twig:Accordion:Trigger>
                <twig:Accordion:Content>
                    Everything about security in one place.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
        </twig:Accordion>
    </twig:Card:Content>
</twig:Card>
```

### Icons and Badges

```twig
<twig:Accordion id="acc-icons" defaultValue="ai" class="max-w-md space-y-2">
    <twig:Accordion:Item value="ai" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-3">
                <span class="flex size-8 items-center justify-center rounded-md bg-muted">
                    <twig:ux:icon name="lucide:sparkles" class="size-4" />
                </span>
                AI assistant
                <twig:Badge>
                    New
                </twig:Badge>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-11 text-muted-foreground">
            Ask questions and get answers from your data.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="sync" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-3">
                <span class="flex size-8 items-center justify-center rounded-md bg-muted">
                    <twig:ux:icon name="lucide:refresh-cw" class="size-4" />
                </span>
                Sync
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-11 text-muted-foreground">
            Keep your devices up to date.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Nested

```twig
<twig:Accordion id="acc-nested" defaultValue="details" class="max-w-md">
    <twig:Accordion:Item value="details">
        <twig:Accordion:Trigger>
            Product details
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Accordion id="acc-nested-inner" defaultValue="shipping">
                <twig:Accordion:Item value="shipping">
                    <twig:Accordion:Trigger>
                        Shipping
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content>
                        Ships in 2-3 days.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="returns">
                    <twig:Accordion:Trigger>
                        Returns
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content>
                        Free returns within 30 days.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
            </twig:Accordion>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### User List

```twig
<twig:Accordion id="acc-users" class="max-w-md">
    <twig:Accordion:Item value="shadcn">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-3">
                <twig:Avatar size="sm">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        S
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                shadcn
                <twig:Badge variant="secondary">
                    Admin
                </twig:Badge>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Admin access to projects and settings.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="maxleiter">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-3">
                <twig:Avatar size="sm">
                    <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
                    <twig:Avatar:Fallback>
                        M
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                maxleiter
                <twig:Badge variant="secondary">
                    Editor
                </twig:Badge>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Editor access to projects and settings.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="evilrabbit">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-3">
                <twig:Avatar size="sm">
                    <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
                    <twig:Avatar:Fallback>
                        E
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                evilrabbit
                <twig:Badge variant="secondary">
                    Viewer
                </twig:Badge>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Viewer access to projects and settings.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Setup Steps

```twig
<twig:Accordion id="acc-steps" defaultValue="step-2" class="max-w-md">
    <twig:Accordion:Item value="step-1">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:circle-check" class="size-4 text-green-600" />
                Create an account
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Done.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="step-2">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:loader" class="size-4 text-primary" />
                Verify your email
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Field>
                <twig:Field:Label for="acc-email">
                    Email
                </twig:Field:Label>
                <twig:Input id="acc-email" type="email" placeholder="you@example.com" />
            </twig:Field>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="step-3">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:circle" class="size-4 text-muted-foreground" />
                Invite your team
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Add people once your email is verified.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```


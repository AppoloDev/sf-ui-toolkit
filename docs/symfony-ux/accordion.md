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


### Form In Sections

```twig
<twig:Accordion id="acc-form1" class="max-w-md space-y-2">
    <twig:Accordion:Item value="account" open class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:user" class="size-4" />
                Account
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="px-1">
            <twig:Field:Group class="pt-1">
                <twig:Field>
                    <twig:Field:Label for="f-name">
                        Name
                    </twig:Field:Label>
                    <twig:Input id="f-name" placeholder="Jane Doe" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="f-email">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="f-email" placeholder="jane@example.com" />
                </twig:Field>
            </twig:Field:Group>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="billing" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:credit-card" class="size-4" />
                Billing
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="px-1">
            <twig:Field:Group class="pt-1">
                <twig:Field>
                    <twig:Field:Label for="f-card-holder">
                        Card holder
                    </twig:Field:Label>
                    <twig:Input id="f-card-holder" placeholder="Jane Doe" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="f-billing-email">
                        Billing email
                    </twig:Field:Label>
                    <twig:Input id="f-billing-email" placeholder="billing@example.com" />
                </twig:Field>
            </twig:Field:Group>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Form With Plus Minus

```twig
<twig:Accordion id="acc-form2" class="max-w-md space-y-2">
    <twig:Accordion:Item value="account" open class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:user" class="size-4" />
                Account
            </span>
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="px-1">
            <twig:Field:Group class="pt-1">
                <twig:Field>
                    <twig:Field:Label for="f-name">
                        Name
                    </twig:Field:Label>
                    <twig:Input id="f-name" placeholder="Jane Doe" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="f-email">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="f-email" placeholder="jane@example.com" />
                </twig:Field>
            </twig:Field:Group>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="billing" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:credit-card" class="size-4" />
                Billing
            </span>
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="px-1">
            <twig:Field:Group class="pt-1">
                <twig:Field>
                    <twig:Field:Label for="f-card-holder">
                        Card holder
                    </twig:Field:Label>
                    <twig:Input id="f-card-holder" placeholder="Jane Doe" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="f-billing-email">
                        Billing email
                    </twig:Field:Label>
                    <twig:Input id="f-billing-email" placeholder="billing@example.com" />
                </twig:Field>
            </twig:Field:Group>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Multi Level

```twig
<twig:Accordion id="acc-ml1" class="max-w-md">
    <twig:Accordion:Item value="product" open>
        <twig:Accordion:Trigger>
            Product
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Accordion id="acc-ml1-product" class="ps-4">
                <twig:Accordion:Item value="product0">
                    <twig:Accordion:Trigger class="py-2 ">
                        <span class="text-sm">
                            Overview
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about overview.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="product1">
                    <twig:Accordion:Trigger class="py-2 ">
                        <span class="text-sm">
                            Pricing
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about pricing.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="product2">
                    <twig:Accordion:Trigger class="py-2 ">
                        <span class="text-sm">
                            Roadmap
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about roadmap.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
            </twig:Accordion>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="company">
        <twig:Accordion:Trigger>
            Company
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Accordion id="acc-ml1-company" class="ps-4">
                <twig:Accordion:Item value="company0">
                    <twig:Accordion:Trigger class="py-2 ">
                        <span class="text-sm">
                            About
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about about.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="company1">
                    <twig:Accordion:Trigger class="py-2 ">
                        <span class="text-sm">
                            Careers
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about careers.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
            </twig:Accordion>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Multi Level With Icons

```twig
<twig:Accordion id="acc-ml2" class="max-w-md">
    <twig:Accordion:Item value="product" open>
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:package" class="size-4" />
                Product
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Accordion id="acc-ml2-product" class="ps-4">
                <twig:Accordion:Item value="product0">
                    <twig:Accordion:Trigger class="py-2 ">
                        <span class="text-sm">
                            Overview
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about overview.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="product1">
                    <twig:Accordion:Trigger class="py-2 ">
                        <span class="text-sm">
                            Pricing
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about pricing.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="product2">
                    <twig:Accordion:Trigger class="py-2 ">
                        <span class="text-sm">
                            Roadmap
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about roadmap.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
            </twig:Accordion>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="company">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:building-2" class="size-4" />
                Company
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Accordion id="acc-ml2-company" class="ps-4">
                <twig:Accordion:Item value="company0">
                    <twig:Accordion:Trigger class="py-2 ">
                        <span class="text-sm">
                            About
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about about.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="company1">
                    <twig:Accordion:Trigger class="py-2 ">
                        <span class="text-sm">
                            Careers
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about careers.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
            </twig:Accordion>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Multi Level With Plus Minus

```twig
<twig:Accordion id="acc-ml3" class="max-w-md">
    <twig:Accordion:Item value="product" open>
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            Product
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Accordion id="acc-ml3-product" class="ps-4">
                <twig:Accordion:Item value="product0">
                    <twig:Accordion:Trigger class="py-2 [&>[data-slot=accordion-trigger-icon]]:hidden">
                        <span class="text-sm">
                            Overview
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about overview.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="product1">
                    <twig:Accordion:Trigger class="py-2 [&>[data-slot=accordion-trigger-icon]]:hidden">
                        <span class="text-sm">
                            Pricing
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about pricing.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="product2">
                    <twig:Accordion:Trigger class="py-2 [&>[data-slot=accordion-trigger-icon]]:hidden">
                        <span class="text-sm">
                            Roadmap
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about roadmap.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
            </twig:Accordion>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="company">
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            Company
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Accordion id="acc-ml3-company" class="ps-4">
                <twig:Accordion:Item value="company0">
                    <twig:Accordion:Trigger class="py-2 [&>[data-slot=accordion-trigger-icon]]:hidden">
                        <span class="text-sm">
                            About
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about about.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="company1">
                    <twig:Accordion:Trigger class="py-2 [&>[data-slot=accordion-trigger-icon]]:hidden">
                        <span class="text-sm">
                            Careers
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about careers.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
            </twig:Accordion>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Multi Level Left Plus Minus

```twig
<twig:Accordion id="acc-ml4" class="max-w-md">
    <twig:Accordion:Item value="product" open>
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
                <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
                Product
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Accordion id="acc-ml4-product" class="ps-4">
                <twig:Accordion:Item value="product0">
                    <twig:Accordion:Trigger class="py-2 [&>[data-slot=accordion-trigger-icon]]:hidden">
                        <span class="text-sm">
                            Overview
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about overview.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="product1">
                    <twig:Accordion:Trigger class="py-2 [&>[data-slot=accordion-trigger-icon]]:hidden">
                        <span class="text-sm">
                            Pricing
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about pricing.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="product2">
                    <twig:Accordion:Trigger class="py-2 [&>[data-slot=accordion-trigger-icon]]:hidden">
                        <span class="text-sm">
                            Roadmap
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about roadmap.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
            </twig:Accordion>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="company">
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
                <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
                Company
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Accordion id="acc-ml4-company" class="ps-4">
                <twig:Accordion:Item value="company0">
                    <twig:Accordion:Trigger class="py-2 [&>[data-slot=accordion-trigger-icon]]:hidden">
                        <span class="text-sm">
                            About
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about about.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="company1">
                    <twig:Accordion:Trigger class="py-2 [&>[data-slot=accordion-trigger-icon]]:hidden">
                        <span class="text-sm">
                            Careers
                        </span>
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content class="text-muted-foreground">
                        Details about careers.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
            </twig:Accordion>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Chevron On The Left

```twig
<twig:Accordion id="acc-std2" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:chevron-right" class="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
                What is your refund policy?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:chevron-right" class="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
                Can I change my plan?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:chevron-right" class="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
                How do I contact support?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Plus Minus Icons

```twig
<twig:Accordion id="acc-std3" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            What is your refund policy?
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            Can I change my plan?
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            How do I contact support?
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Plus Minus On The Left

```twig
<twig:Accordion id="acc-std4" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
                <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
                What is your refund policy?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
                <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
                Can I change my plan?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="[&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
                <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
                How do I contact support?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Icon Next To Title

```twig
<twig:Accordion id="acc-std5" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:credit-card" class="size-4" />
                What is your refund policy?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:repeat" class="size-4" />
                Can I change my plan?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:life-buoy" class="size-4" />
                How do I contact support?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Icons And Plus Minus

```twig
<twig:Accordion id="acc-std6" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:credit-card" class="size-4" />
                What is your refund policy?
            </span>
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:repeat" class="size-4" />
                Can I change my plan?
            </span>
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:life-buoy" class="size-4" />
                How do I contact support?
            </span>
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Icons Subtitles And Plus Minus

```twig
<twig:Accordion id="acc-std7" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-3">
                <twig:ux:icon name="lucide:credit-card" class="size-5 shrink-0 text-muted-foreground" />
                <span class="flex flex-col gap-0.5">
                    <span>
                        What is your refund policy?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Refunds and returns
                    </span>
                </span>
            </span>
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-3">
                <twig:ux:icon name="lucide:repeat" class="size-5 shrink-0 text-muted-foreground" />
                <span class="flex flex-col gap-0.5">
                    <span>
                        Can I change my plan?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Upgrades and downgrades
                    </span>
                </span>
            </span>
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-3">
                <twig:ux:icon name="lucide:life-buoy" class="size-5 shrink-0 text-muted-foreground" />
                <span class="flex flex-col gap-0.5">
                    <span>
                        How do I contact support?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Help and contact
                    </span>
                </span>
            </span>
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Subtitle

```twig
<twig:Accordion id="acc-sub1" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-3">
                <span class="flex flex-col gap-0.5">
                    <span>
                        What is your refund policy?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Refunds and returns
                    </span>
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-3">
                <span class="flex flex-col gap-0.5">
                    <span>
                        Can I change my plan?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Upgrades and downgrades
                    </span>
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-3">
                <span class="flex flex-col gap-0.5">
                    <span>
                        How do I contact support?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Help and contact
                    </span>
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Subtitle With Icons

```twig
<twig:Accordion id="acc-sub2" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-3">
                <twig:ux:icon name="lucide:credit-card" class="size-5 shrink-0 text-muted-foreground" />
                <span class="flex flex-col gap-0.5">
                    <span>
                        What is your refund policy?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Refunds and returns
                    </span>
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-3">
                <twig:ux:icon name="lucide:repeat" class="size-5 shrink-0 text-muted-foreground" />
                <span class="flex flex-col gap-0.5">
                    <span>
                        Can I change my plan?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Upgrades and downgrades
                    </span>
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger>
            <span class="flex items-center gap-3">
                <twig:ux:icon name="lucide:life-buoy" class="size-5 shrink-0 text-muted-foreground" />
                <span class="flex flex-col gap-0.5">
                    <span>
                        How do I contact support?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Help and contact
                    </span>
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Subtitle With Plus Minus

```twig
<twig:Accordion id="acc-sub3" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-3">
                <span class="flex flex-col gap-0.5">
                    <span>
                        What is your refund policy?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Refunds and returns
                    </span>
                </span>
            </span>
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-3">
                <span class="flex flex-col gap-0.5">
                    <span>
                        Can I change my plan?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Upgrades and downgrades
                    </span>
                </span>
            </span>
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-3">
                <span class="flex flex-col gap-0.5">
                    <span>
                        How do I contact support?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Help and contact
                    </span>
                </span>
            </span>
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Subtitle Icons And Chevron

```twig
<twig:Accordion id="acc-sub4" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <twig:ux:icon name="lucide:credit-card" class="size-5 shrink-0 text-muted-foreground" />
                <span class="flex flex-col gap-0.5">
                    <span>
                        What is your refund policy?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Refunds and returns
                    </span>
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <twig:ux:icon name="lucide:repeat" class="size-5 shrink-0 text-muted-foreground" />
                <span class="flex flex-col gap-0.5">
                    <span>
                        Can I change my plan?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Upgrades and downgrades
                    </span>
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <twig:ux:icon name="lucide:life-buoy" class="size-5 shrink-0 text-muted-foreground" />
                <span class="flex flex-col gap-0.5">
                    <span>
                        How do I contact support?
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        Help and contact
                    </span>
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Tabs With Left Plus Minus

```twig
<twig:Accordion id="acc-tabs1" class="max-w-md gap-0">
    <twig:Accordion:Item value="refund" :open="true" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
                <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
                What is your refund policy?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
                <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
                Can I change my plan?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
                <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
                How do I contact support?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Tabs With Chevron

```twig
<twig:Accordion id="acc-tabs2" class="max-w-md gap-0">
    <twig:Accordion:Item value="refund" :open="true" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Tabs With Plus Minus

```twig
<twig:Accordion id="acc-tabs3" class="max-w-md gap-0">
    <twig:Accordion:Item value="refund" :open="true" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            What is your refund policy?
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            Can I change my plan?
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            How do I contact support?
            <twig:ux:icon name="lucide:plus" class="size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <twig:ux:icon name="lucide:minus" class="hidden size-4 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Tabs With Left Chevron

```twig
<twig:Accordion id="acc-tabs4" class="max-w-md gap-0">
    <twig:Accordion:Item value="refund" :open="true" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:chevron-right" class="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
                What is your refund policy?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:chevron-right" class="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
                Can I change my plan?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="border bg-muted/40 px-4 first:rounded-t-lg last:rounded-b-lg data-[open=true]:bg-background not-last:border-b-0 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:chevron-right" class="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
                How do I contact support?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Card Plus Morphing To Minus

```twig
<twig:Accordion id="acc-card1" class="max-w-md space-y-2">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            What is your refund policy?
            <span class="relative size-4 shrink-0">
                <twig:ux:icon name="lucide:plus" class="absolute inset-0 size-4 transition-all group-aria-expanded/accordion-trigger:rotate-90 group-aria-expanded/accordion-trigger:opacity-0" />
                <twig:ux:icon name="lucide:minus" class="absolute inset-0 size-4 -rotate-90 opacity-0 transition-all group-aria-expanded/accordion-trigger:rotate-0 group-aria-expanded/accordion-trigger:opacity-100" />
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            Can I change my plan?
            <span class="relative size-4 shrink-0">
                <twig:ux:icon name="lucide:plus" class="absolute inset-0 size-4 transition-all group-aria-expanded/accordion-trigger:rotate-90 group-aria-expanded/accordion-trigger:opacity-0" />
                <twig:ux:icon name="lucide:minus" class="absolute inset-0 size-4 -rotate-90 opacity-0 transition-all group-aria-expanded/accordion-trigger:rotate-0 group-aria-expanded/accordion-trigger:opacity-100" />
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            How do I contact support?
            <span class="relative size-4 shrink-0">
                <twig:ux:icon name="lucide:plus" class="absolute inset-0 size-4 transition-all group-aria-expanded/accordion-trigger:rotate-90 group-aria-expanded/accordion-trigger:opacity-0" />
                <twig:ux:icon name="lucide:minus" class="absolute inset-0 size-4 -rotate-90 opacity-0 transition-all group-aria-expanded/accordion-trigger:rotate-0 group-aria-expanded/accordion-trigger:opacity-100" />
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Card Flat Muted

```twig
<twig:Accordion id="acc-card2" class="max-w-md space-y-2">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-lg border border-transparent bg-muted/50 px-4 transition-all data-[open=true]:border-border data-[open=true]:bg-background data-[open=true]:shadow-sm last:border-b">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-lg border border-transparent bg-muted/50 px-4 transition-all data-[open=true]:border-border data-[open=true]:bg-background data-[open=true]:shadow-sm last:border-b">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-lg border border-transparent bg-muted/50 px-4 transition-all data-[open=true]:border-border data-[open=true]:bg-background data-[open=true]:shadow-sm last:border-b">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Card Ghost

```twig
<twig:Accordion id="acc-card3" class="max-w-md space-y-1">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-lg border-0 px-4 transition-colors hover:bg-muted/50 data-[open=true]:bg-muted">
        <twig:Accordion:Trigger class="items-center hover:no-underline">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-lg border-0 px-4 transition-colors hover:bg-muted/50 data-[open=true]:bg-muted">
        <twig:Accordion:Trigger class="items-center hover:no-underline">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-lg border-0 px-4 transition-colors hover:bg-muted/50 data-[open=true]:bg-muted">
        <twig:Accordion:Trigger class="items-center hover:no-underline">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Card Single Container

```twig
<twig:Accordion id="acc-card4" class="max-w-md overflow-hidden rounded-lg border">
    <twig:Accordion:Item value="refund" :open="true" class="px-4 data-[open=true]:bg-muted/40">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="px-4 data-[open=true]:bg-muted/40">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="px-4 data-[open=true]:bg-muted/40">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Card Icon Tile

```twig
<twig:Accordion id="acc-card5" class="max-w-md space-y-2">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="flex size-8 items-center justify-center rounded-md bg-muted transition-colors group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:text-primary-foreground">
                    <twig:ux:icon name="lucide:credit-card" class="size-4" />
                </span>
                What is your refund policy?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-11 text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="flex size-8 items-center justify-center rounded-md bg-muted transition-colors group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:text-primary-foreground">
                    <twig:ux:icon name="lucide:repeat" class="size-4" />
                </span>
                Can I change my plan?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-11 text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="flex size-8 items-center justify-center rounded-md bg-muted transition-colors group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:text-primary-foreground">
                    <twig:ux:icon name="lucide:life-buoy" class="size-4" />
                </span>
                How do I contact support?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-11 text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Card With Helpful Row

```twig
<twig:Accordion id="acc-card6" class="max-w-md space-y-2">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
            <div class="flex items-center gap-2 pt-3 text-xs text-muted-foreground">
                Was this helpful?
                <twig:Button variant="outline" size="xs">
                    Yes
                </twig:Button>
                <twig:Button variant="outline" size="xs">
                    No
                </twig:Button>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
            <div class="flex items-center gap-2 pt-3 text-xs text-muted-foreground">
                Was this helpful?
                <twig:Button variant="outline" size="xs">
                    Yes
                </twig:Button>
                <twig:Button variant="outline" size="xs">
                    No
                </twig:Button>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
            <div class="flex items-center gap-2 pt-3 text-xs text-muted-foreground">
                Was this helpful?
                <twig:Button variant="outline" size="xs">
                    Yes
                </twig:Button>
                <twig:Button variant="outline" size="xs">
                    No
                </twig:Button>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Card Dashed

```twig
<twig:Accordion id="acc-card7" class="max-w-md space-y-2">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-lg border border-dashed px-4 data-[open=true]:border-solid last:border-b">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-lg border border-dashed px-4 data-[open=true]:border-solid last:border-b">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-lg border border-dashed px-4 data-[open=true]:border-solid last:border-b">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Chat Answers

```twig
<twig:Accordion id="acc-chat1" class="max-w-md space-y-2">
    <twig:Accordion:Item value="refund" :open="true">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="flex items-start gap-2">
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                    Refunds are available within 30 days of purchase.
                </div>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="flex items-start gap-2">
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                    You can upgrade or downgrade at any time from your account.
                </div>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="flex items-start gap-2">
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                    Write to us any time, we reply within a day.
                </div>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Chat Typing Dots

```twig
<twig:Accordion id="acc-chat2" class="max-w-md space-y-2">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="relative">
                <div class="flex items-start gap-2 opacity-0 transition-opacity duration-300 group-data-[open=true]:opacity-100 group-data-[open=true]:delay-[1000ms]">
                    <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                    <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                        Refunds are available within 30 days of purchase.
                    </div>
                </div>
                <div class="absolute start-9 top-0 flex w-fit items-center gap-1 rounded-2xl bg-muted px-3 py-2 opacity-100 transition-opacity duration-200 group-data-[open=true]:opacity-0 group-data-[open=true]:delay-[900ms]">
                    <span class="size-1.5 animate-bounce rounded-full bg-muted-foreground" style="animation-delay: 0ms"></span>
                    <span class="size-1.5 animate-bounce rounded-full bg-muted-foreground" style="animation-delay: 150ms"></span>
                    <span class="size-1.5 animate-bounce rounded-full bg-muted-foreground" style="animation-delay: 300ms"></span>
                </div>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="relative">
                <div class="flex items-start gap-2 opacity-0 transition-opacity duration-300 group-data-[open=true]:opacity-100 group-data-[open=true]:delay-[1000ms]">
                    <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                    <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                        You can upgrade or downgrade at any time from your account.
                    </div>
                </div>
                <div class="absolute start-9 top-0 flex w-fit items-center gap-1 rounded-2xl bg-muted px-3 py-2 opacity-100 transition-opacity duration-200 group-data-[open=true]:opacity-0 group-data-[open=true]:delay-[900ms]">
                    <span class="size-1.5 animate-bounce rounded-full bg-muted-foreground" style="animation-delay: 0ms"></span>
                    <span class="size-1.5 animate-bounce rounded-full bg-muted-foreground" style="animation-delay: 150ms"></span>
                    <span class="size-1.5 animate-bounce rounded-full bg-muted-foreground" style="animation-delay: 300ms"></span>
                </div>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="relative">
                <div class="flex items-start gap-2 opacity-0 transition-opacity duration-300 group-data-[open=true]:opacity-100 group-data-[open=true]:delay-[1000ms]">
                    <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                    <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                        Write to us any time, we reply within a day.
                    </div>
                </div>
                <div class="absolute start-9 top-0 flex w-fit items-center gap-1 rounded-2xl bg-muted px-3 py-2 opacity-100 transition-opacity duration-200 group-data-[open=true]:opacity-0 group-data-[open=true]:delay-[900ms]">
                    <span class="size-1.5 animate-bounce rounded-full bg-muted-foreground" style="animation-delay: 0ms"></span>
                    <span class="size-1.5 animate-bounce rounded-full bg-muted-foreground" style="animation-delay: 150ms"></span>
                    <span class="size-1.5 animate-bounce rounded-full bg-muted-foreground" style="animation-delay: 300ms"></span>
                </div>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Chat User Bubbles

```twig
<twig:Accordion id="acc-chat3" class="max-w-md space-y-2">
    <twig:Accordion:Item value="refund" :open="true">
        <twig:Accordion:Trigger class="hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="ms-auto rounded-2xl rounded-ee-sm bg-primary px-3 py-1.5 text-primary-foreground">
                What is your refund policy?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="flex items-start gap-2">
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                    Refunds are available within 30 days of purchase.
                </div>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="ms-auto rounded-2xl rounded-ee-sm bg-primary px-3 py-1.5 text-primary-foreground">
                Can I change my plan?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="flex items-start gap-2">
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                    You can upgrade or downgrade at any time from your account.
                </div>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="ms-auto rounded-2xl rounded-ee-sm bg-primary px-3 py-1.5 text-primary-foreground">
                How do I contact support?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="flex items-start gap-2">
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                    Write to us any time, we reply within a day.
                </div>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Chat With Feedback Toggles

```twig
<twig:Accordion id="acc-chat4" class="max-w-md space-y-2">
    <twig:Accordion:Item value="refund" :open="true">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="flex items-start gap-2">
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                    Refunds are available within 30 days of purchase.
                </div>
            </div>
            <twig:ToggleGroup type="single" variant="outline" size="sm" spacing="1" class="mt-2 ms-9">
                <twig:ToggleGroup:Item value="up" aria-label="Helpful">
                    <twig:ux:icon name="lucide:thumbs-up" class="size-4" />
                </twig:ToggleGroup:Item>
                <twig:ToggleGroup:Item value="down" aria-label="Not helpful">
                    <twig:ux:icon name="lucide:thumbs-down" class="size-4" />
                </twig:ToggleGroup:Item>
            </twig:ToggleGroup>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="flex items-start gap-2">
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                    You can upgrade or downgrade at any time from your account.
                </div>
            </div>
            <twig:ToggleGroup type="single" variant="outline" size="sm" spacing="1" class="mt-2 ms-9">
                <twig:ToggleGroup:Item value="up" aria-label="Helpful">
                    <twig:ux:icon name="lucide:thumbs-up" class="size-4" />
                </twig:ToggleGroup:Item>
                <twig:ToggleGroup:Item value="down" aria-label="Not helpful">
                    <twig:ux:icon name="lucide:thumbs-down" class="size-4" />
                </twig:ToggleGroup:Item>
            </twig:ToggleGroup>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="flex items-start gap-2">
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        SU
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="rounded-2xl rounded-ss-sm bg-muted px-3 py-2 text-sm">
                    Write to us any time, we reply within a day.
                </div>
            </div>
            <twig:ToggleGroup type="single" variant="outline" size="sm" spacing="1" class="mt-2 ms-9">
                <twig:ToggleGroup:Item value="up" aria-label="Helpful">
                    <twig:ux:icon name="lucide:thumbs-up" class="size-4" />
                </twig:ToggleGroup:Item>
                <twig:ToggleGroup:Item value="down" aria-label="Not helpful">
                    <twig:ux:icon name="lucide:thumbs-down" class="size-4" />
                </twig:ToggleGroup:Item>
            </twig:ToggleGroup>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Labelled Groups

```twig
<twig:Accordion id="acc-grp1" class="max-w-md">
    <div class="flex items-center gap-2 px-1 pb-1 pt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Billing
    </div>
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger>
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger>
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <div class="flex items-center gap-2 px-1 pb-1 pt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Product
    </div>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger>
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="data">
        <twig:Accordion:Trigger>
            Where is my data stored?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Data is stored in the region you pick at sign-up.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Group Count Badges

```twig
<twig:Accordion id="acc-grp4" class="max-w-md">
    <div class="flex items-center gap-2 px-1 pb-1 pt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Billing
        <twig:Badge variant="secondary">
            2
        </twig:Badge>
    </div>
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger>
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger>
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <div class="flex items-center gap-2 px-1 pb-1 pt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Product
        <twig:Badge variant="secondary">
            2
        </twig:Badge>
    </div>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger>
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="data">
        <twig:Accordion:Trigger>
            Where is my data stored?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Data is stored in the region you pick at sign-up.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Motion Fade And Slide

```twig
<twig:Accordion id="acc-mo1" class="max-w-md">
    <twig:Accordion:Item value="refund" :open="true">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="translate-y-2 opacity-0 transition-all duration-300 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100">
                Refunds are available within 30 days of purchase.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="translate-y-2 opacity-0 transition-all duration-300 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100">
                You can upgrade or downgrade at any time from your account.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="translate-y-2 opacity-0 transition-all duration-300 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100">
                Write to us any time, we reply within a day.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Motion Spring

```twig
<twig:Accordion id="acc-mo2" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="origin-top scale-95 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-data-[open=true]:scale-100 group-data-[open=true]:opacity-100">
                Refunds are available within 30 days of purchase.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="origin-top scale-95 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-data-[open=true]:scale-100 group-data-[open=true]:opacity-100">
                You can upgrade or downgrade at any time from your account.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="origin-top scale-95 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-data-[open=true]:scale-100 group-data-[open=true]:opacity-100">
                Write to us any time, we reply within a day.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Motion Staggered List

```twig
<twig:Accordion id="acc-mo3" class="max-w-md">
    <twig:Accordion:Item value="features" :open="true">
        <twig:Accordion:Trigger class="items-center">
            Features
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <ul class="grid gap-1 ps-4 list-disc">
                <li class="translate-y-1 opacity-0 transition-all duration-300 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100" style="transition-delay: 0ms">
                    Export to CSV
                </li>
                <li class="translate-y-1 opacity-0 transition-all duration-300 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100" style="transition-delay: 150ms">
                    Share by link
                </li>
                <li class="translate-y-1 opacity-0 transition-all duration-300 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100" style="transition-delay: 300ms">
                    Schedule reports
                </li>
                <li class="translate-y-1 opacity-0 transition-all duration-300 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100" style="transition-delay: 450ms">
                    Invite your team
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="limits">
        <twig:Accordion:Trigger class="items-center">
            Limits
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <ul class="grid gap-1 ps-4 list-disc">
                <li class="translate-y-1 opacity-0 transition-all duration-300 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100" style="transition-delay: 0ms">
                    Export to CSV
                </li>
                <li class="translate-y-1 opacity-0 transition-all duration-300 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100" style="transition-delay: 150ms">
                    Share by link
                </li>
                <li class="translate-y-1 opacity-0 transition-all duration-300 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100" style="transition-delay: 300ms">
                    Schedule reports
                </li>
                <li class="translate-y-1 opacity-0 transition-all duration-300 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100" style="transition-delay: 450ms">
                    Invite your team
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Motion Blur In

```twig
<twig:Accordion id="acc-mo4" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="blur-sm opacity-0 transition-all duration-500 group-data-[open=true]:blur-0 group-data-[open=true]:opacity-100">
                Refunds are available within 30 days of purchase.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="blur-sm opacity-0 transition-all duration-500 group-data-[open=true]:blur-0 group-data-[open=true]:opacity-100">
                You can upgrade or downgrade at any time from your account.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="blur-sm opacity-0 transition-all duration-500 group-data-[open=true]:blur-0 group-data-[open=true]:opacity-100">
                Write to us any time, we reply within a day.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Motion Scale In With Prices

```twig
<twig:Accordion id="acc-mo5" class="max-w-md">
    <twig:Accordion:Item value="free">
        <twig:Accordion:Trigger class="items-center">
            Free
            <span class="ms-auto me-3 text-muted-foreground">
                $0
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="origin-top scale-95 opacity-0 transition-all duration-300 group-data-[open=true]:scale-100 group-data-[open=true]:opacity-100">
                Up to 3 projects.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="pro">
        <twig:Accordion:Trigger class="items-center">
            Pro
            <span class="ms-auto me-3 text-muted-foreground">
                $12
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="origin-top scale-95 opacity-0 transition-all duration-300 group-data-[open=true]:scale-100 group-data-[open=true]:opacity-100">
                Unlimited projects and priority support.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="team">
        <twig:Accordion:Trigger class="items-center">
            Team
            <span class="ms-auto me-3 text-muted-foreground">
                $29
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="origin-top scale-95 opacity-0 transition-all duration-300 group-data-[open=true]:scale-100 group-data-[open=true]:opacity-100">
                Shared workspaces and roles.
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Numbered Zero Padded

```twig
<twig:Accordion id="acc-num1" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="font-mono text-xs text-muted-foreground">
                    01
                </span>
                What is your refund policy?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="font-mono text-xs text-muted-foreground">
                    02
                </span>
                Can I change my plan?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="font-mono text-xs text-muted-foreground">
                    03
                </span>
                How do I contact support?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-8">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Numbered Large Index

```twig
<twig:Accordion id="acc-num2" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center hover:no-underline">
            <span class="flex items-center gap-3">
                <span class="w-10 text-2xl font-light text-muted-foreground/50 transition-colors group-hover/accordion-trigger:text-foreground group-aria-expanded/accordion-trigger:text-foreground">
                    01
                </span>
                What is your refund policy?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-14">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center hover:no-underline">
            <span class="flex items-center gap-3">
                <span class="w-10 text-2xl font-light text-muted-foreground/50 transition-colors group-hover/accordion-trigger:text-foreground group-aria-expanded/accordion-trigger:text-foreground">
                    02
                </span>
                Can I change my plan?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-14">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center hover:no-underline">
            <span class="flex items-center gap-3">
                <span class="w-10 text-2xl font-light text-muted-foreground/50 transition-colors group-hover/accordion-trigger:text-foreground group-aria-expanded/accordion-trigger:text-foreground">
                    03
                </span>
                How do I contact support?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-14">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Numbered Circles

```twig
<twig:Accordion id="acc-num3" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="flex size-6 items-center justify-center rounded-full border text-xs transition-colors group-aria-expanded/accordion-trigger:border-primary group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:text-primary-foreground">
                    1
                </span>
                What is your refund policy?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-9">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="flex size-6 items-center justify-center rounded-full border text-xs transition-colors group-aria-expanded/accordion-trigger:border-primary group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:text-primary-foreground">
                    2
                </span>
                Can I change my plan?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-9">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="flex size-6 items-center justify-center rounded-full border text-xs transition-colors group-aria-expanded/accordion-trigger:border-primary group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:text-primary-foreground">
                    3
                </span>
                How do I contact support?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-9">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Lettered Tiles

```twig
<twig:Accordion id="acc-num4" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="flex size-7 items-center justify-center rounded-md bg-muted text-xs font-medium text-foreground">
                    A
                </span>
                What is your refund policy?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-10">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="flex size-7 items-center justify-center rounded-md bg-muted text-xs font-medium text-foreground">
                    B
                </span>
                Can I change my plan?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-10">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="flex size-7 items-center justify-center rounded-md bg-muted text-xs font-medium text-foreground">
                    C
                </span>
                How do I contact support?
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-10">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Numbered Counter

```twig
<twig:Accordion id="acc-num5" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
            <span class="ms-auto me-3 text-xs tabular-nums text-muted-foreground">
                1 / 3
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
            <span class="ms-auto me-3 text-xs tabular-nums text-muted-foreground">
                2 / 3
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
            <span class="ms-auto me-3 text-xs tabular-nums text-muted-foreground">
                3 / 3
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Rail Left Border

```twig
<twig:Accordion id="acc-rail1" class="max-w-md gap-2">
    <twig:Accordion:Item value="refund" :open="true" class="border-s-2 ps-4 transition-colors data-[open=true]:border-foreground">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="border-s-2 ps-4 transition-colors data-[open=true]:border-foreground">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="border-s-2 ps-4 transition-colors data-[open=true]:border-foreground">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Rail Growing Line

```twig
<twig:Accordion id="acc-rail2" class="max-w-md gap-2">
    <twig:Accordion:Item value="refund" :open="true" class="relative ps-4 before:absolute before:inset-y-0 before:start-0 before:w-0.5 before:origin-top before:scale-y-0 before:bg-foreground before:transition-transform data-[open=true]:before:scale-y-100 after:absolute after:inset-y-0 after:start-0 after:w-0.5 after:bg-border after:-z-10">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="relative ps-4 before:absolute before:inset-y-0 before:start-0 before:w-0.5 before:origin-top before:scale-y-0 before:bg-foreground before:transition-transform data-[open=true]:before:scale-y-100 after:absolute after:inset-y-0 after:start-0 after:w-0.5 after:bg-border after:-z-10">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="relative ps-4 before:absolute before:inset-y-0 before:start-0 before:w-0.5 before:origin-top before:scale-y-0 before:bg-foreground before:transition-transform data-[open=true]:before:scale-y-100 after:absolute after:inset-y-0 after:start-0 after:w-0.5 after:bg-border after:-z-10">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Rail With Dots

```twig
<twig:Accordion id="acc-rail3" class="max-w-md border-s ps-5">
    <twig:Accordion:Item value="refund" :open="true" class="relative">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
            <span class="absolute -start-[5px] top-4 size-2 rounded-full border bg-background transition-colors group-data-[open=true]:border-foreground group-data-[open=true]:bg-foreground"></span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="relative">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
            <span class="absolute -start-[5px] top-4 size-2 rounded-full border bg-background transition-colors group-data-[open=true]:border-foreground group-data-[open=true]:bg-foreground"></span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="relative">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
            <span class="absolute -start-[5px] top-4 size-2 rounded-full border bg-background transition-colors group-data-[open=true]:border-foreground group-data-[open=true]:bg-foreground"></span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Rail On The Right

```twig
<twig:Accordion id="acc-rail4" class="max-w-md gap-2">
    <twig:Accordion:Item value="refund" :open="true" class="pe-4 border-e-2 transition-colors data-[open=true]:border-foreground">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex w-full items-center justify-between">
                What is your refund policy?
                <twig:ux:icon name="lucide:chevron-right" class="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="pe-4 border-e-2 transition-colors data-[open=true]:border-foreground">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex w-full items-center justify-between">
                Can I change my plan?
                <twig:ux:icon name="lucide:chevron-right" class="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="pe-4 border-e-2 transition-colors data-[open=true]:border-foreground">
        <twig:Accordion:Trigger class="items-center [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span class="flex w-full items-center justify-between">
                How do I contact support?
                <twig:ux:icon name="lucide:chevron-right" class="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Rail Stepper Nodes

```twig
<twig:Accordion id="acc-rail5" class="max-w-md border-s ms-3 ps-8">
    <twig:Accordion:Item value="refund" :open="true" class="relative">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
            <span class="absolute -start-[34px] top-2 flex size-6 items-center justify-center rounded-full border bg-background text-xs transition-colors group-data-[open=true]:border-primary group-data-[open=true]:bg-primary group-data-[open=true]:text-primary-foreground">
                1
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="relative">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
            <span class="absolute -start-[34px] top-2 flex size-6 items-center justify-center rounded-full border bg-background text-xs transition-colors group-data-[open=true]:border-primary group-data-[open=true]:bg-primary group-data-[open=true]:text-primary-foreground">
                2
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="relative">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
            <span class="absolute -start-[34px] top-2 flex size-6 items-center justify-center rounded-full border bg-background text-xs transition-colors group-data-[open=true]:border-primary group-data-[open=true]:bg-primary group-data-[open=true]:text-primary-foreground">
                3
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Table Rows With Header

```twig
<div class="max-w-lg">
    <div class="grid grid-cols-[1fr_6rem_5rem] gap-3 border-b pb-2 pe-7 text-xs font-medium uppercase text-muted-foreground">
        <span>
            Invoice
        </span>
        <span>
            Status
        </span>
        <span>
            Total
        </span>
    </div>
    <twig:Accordion id="acc-tab1" class="w-full">
        <twig:Accordion:Item value="inv1">
            <twig:Accordion:Trigger class="items-center">
                <span class="grid flex-1 grid-cols-[1fr_6rem_5rem] items-center gap-3">
                    <span>
                        Invoice #1042
                    </span>
                    <twig:Badge variant="outline">
                        Paid
                    </twig:Badge>
                    <span class="text-end tabular-nums">
                        $128.00
                    </span>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content class="text-muted-foreground">
                Issued Nov 25, 2026. Paid by card.
            </twig:Accordion:Content>
        </twig:Accordion:Item>
        <twig:Accordion:Item value="inv2">
            <twig:Accordion:Trigger class="items-center">
                <span class="grid flex-1 grid-cols-[1fr_6rem_5rem] items-center gap-3">
                    <span>
                        Invoice #1043
                    </span>
                    <twig:Badge variant="outline">
                        Pending
                    </twig:Badge>
                    <span class="text-end tabular-nums">
                        $64.00
                    </span>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content class="text-muted-foreground">
                Issued Nov 24, 2026. Due in 14 days.
            </twig:Accordion:Content>
        </twig:Accordion:Item>
        <twig:Accordion:Item value="inv3">
            <twig:Accordion:Trigger class="items-center">
                <span class="grid flex-1 grid-cols-[1fr_6rem_5rem] items-center gap-3">
                    <span>
                        Invoice #1044
                    </span>
                    <twig:Badge variant="outline">
                        Overdue
                    </twig:Badge>
                    <span class="text-end tabular-nums">
                        $310.00
                    </span>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content class="text-muted-foreground">
                Issued Oct 30, 2026. Reminder sent.
            </twig:Accordion:Content>
        </twig:Accordion:Item>
    </twig:Accordion>
</div>
```

### Table Order Line Items

```twig
<div class="max-w-lg">
    <div class="grid grid-cols-[1fr_6rem_5rem] gap-3 border-b pb-2 pe-7 text-xs font-medium uppercase text-muted-foreground">
        <span>
            Order
        </span>
        <span>
            Status
        </span>
        <span>
            Total
        </span>
    </div>
    <twig:Accordion id="acc-tab2" class="w-full">
        <twig:Accordion:Item value="inv1">
            <twig:Accordion:Trigger class="items-center">
                <span class="grid flex-1 grid-cols-[1fr_6rem_5rem] items-center gap-3">
                    <span>
                        Order #1042
                    </span>
                    <twig:Badge variant="outline">
                        Paid
                    </twig:Badge>
                    <span class="text-end tabular-nums">
                        $128.00
                    </span>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content>
                <div class="grid gap-1 text-sm">
                    <div class="flex justify-between">
                        <span>
                            Design review
                        </span>
                        <span class="tabular-nums">
                            $80.00
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span>
                            Hosting
                        </span>
                        <span class="tabular-nums">
                            $32.00
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span>
                            Support
                        </span>
                        <span class="tabular-nums">
                            $16.00
                        </span>
                    </div>
                </div>
            </twig:Accordion:Content>
        </twig:Accordion:Item>
        <twig:Accordion:Item value="inv2">
            <twig:Accordion:Trigger class="items-center">
                <span class="grid flex-1 grid-cols-[1fr_6rem_5rem] items-center gap-3">
                    <span>
                        Order #1043
                    </span>
                    <twig:Badge variant="outline">
                        Pending
                    </twig:Badge>
                    <span class="text-end tabular-nums">
                        $64.00
                    </span>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content>
                <div class="grid gap-1 text-sm">
                    <div class="flex justify-between">
                        <span>
                            Design review
                        </span>
                        <span class="tabular-nums">
                            $80.00
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span>
                            Hosting
                        </span>
                        <span class="tabular-nums">
                            $32.00
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span>
                            Support
                        </span>
                        <span class="tabular-nums">
                            $16.00
                        </span>
                    </div>
                </div>
            </twig:Accordion:Content>
        </twig:Accordion:Item>
        <twig:Accordion:Item value="inv3">
            <twig:Accordion:Trigger class="items-center">
                <span class="grid flex-1 grid-cols-[1fr_6rem_5rem] items-center gap-3">
                    <span>
                        Order #1044
                    </span>
                    <twig:Badge variant="outline">
                        Overdue
                    </twig:Badge>
                    <span class="text-end tabular-nums">
                        $310.00
                    </span>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content>
                <div class="grid gap-1 text-sm">
                    <div class="flex justify-between">
                        <span>
                            Design review
                        </span>
                        <span class="tabular-nums">
                            $80.00
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span>
                            Hosting
                        </span>
                        <span class="tabular-nums">
                            $32.00
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span>
                            Support
                        </span>
                        <span class="tabular-nums">
                            $16.00
                        </span>
                    </div>
                </div>
            </twig:Accordion:Content>
        </twig:Accordion:Item>
    </twig:Accordion>
</div>
```

### Table Parent And Child Rows

```twig
<div class="max-w-lg">
    <div class="grid grid-cols-[1fr_6rem_5rem] gap-3 border-b pb-2 pe-7 text-xs font-medium uppercase text-muted-foreground">
        <span>
            Region
        </span>
        <span>
            Stores
        </span>
        <span>
            Revenue
        </span>
    </div>
    <twig:Accordion id="acc-tab3" class="w-full">
        <twig:Accordion:Item value="eu">
            <twig:Accordion:Trigger class="items-center">
                <span class="grid flex-1 grid-cols-[1fr_6rem_5rem] items-center gap-3">
                    <span class="font-medium">
                        Europe
                    </span>
                    <span>
                        24
                    </span>
                    <span class="text-end tabular-nums">
                        $1.2M
                    </span>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content class="px-0">
                <div class="flex justify-between border-t py-2 ps-4 text-sm text-muted-foreground">
                    <span>
                        France
                    </span>
                    <span>
                        $480K
                    </span>
                </div>
                <div class="flex justify-between border-t py-2 ps-4 text-sm text-muted-foreground">
                    <span>
                        Germany
                    </span>
                    <span>
                        $520K
                    </span>
                </div>
                <div class="flex justify-between border-t py-2 ps-4 text-sm text-muted-foreground">
                    <span>
                        Spain
                    </span>
                    <span>
                        $200K
                    </span>
                </div>
            </twig:Accordion:Content>
        </twig:Accordion:Item>
        <twig:Accordion:Item value="na">
            <twig:Accordion:Trigger class="items-center">
                <span class="grid flex-1 grid-cols-[1fr_6rem_5rem] items-center gap-3">
                    <span class="font-medium">
                        North America
                    </span>
                    <span>
                        31
                    </span>
                    <span class="text-end tabular-nums">
                        $2.4M
                    </span>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content class="px-0">
                <div class="flex justify-between border-t py-2 ps-4 text-sm text-muted-foreground">
                    <span>
                        USA
                    </span>
                    <span>
                        $2.1M
                    </span>
                </div>
                <div class="flex justify-between border-t py-2 ps-4 text-sm text-muted-foreground">
                    <span>
                        Canada
                    </span>
                    <span>
                        $300K
                    </span>
                </div>
            </twig:Accordion:Content>
        </twig:Accordion:Item>
    </twig:Accordion>
</div>
```

### Table Specification Groups

```twig
<twig:Accordion id="acc-tab4" multiple class="max-w-md">
    <twig:Accordion:Item value="size" :open="true">
        <twig:Accordion:Trigger>
            Dimensions
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="flex justify-between py-1.5 text-sm">
                <span class="text-muted-foreground">
                    Width
                </span>
                <span>
                    24 cm
                </span>
            </div>
            <div class="flex justify-between py-1.5 text-sm">
                <span class="text-muted-foreground">
                    Height
                </span>
                <span>
                    12 cm
                </span>
            </div>
            <div class="flex justify-between py-1.5 text-sm">
                <span class="text-muted-foreground">
                    Weight
                </span>
                <span>
                    1.2 kg
                </span>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="power" :open="true">
        <twig:Accordion:Trigger>
            Power
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="flex justify-between py-1.5 text-sm">
                <span class="text-muted-foreground">
                    Battery
                </span>
                <span>
                    5000 mAh
                </span>
            </div>
            <div class="flex justify-between py-1.5 text-sm">
                <span class="text-muted-foreground">
                    Charging
                </span>
                <span>
                    USB-C, 30 W
                </span>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Table Plan Comparison

```twig
<div class="max-w-lg">
    <div class="grid grid-cols-[1fr_4rem_4rem] gap-3 border-b pb-2 pe-7 text-xs font-medium uppercase text-muted-foreground">
        <span>
            Feature
        </span>
        <span>
            Free
        </span>
        <span>
            Pro
        </span>
    </div>
    <twig:Accordion id="acc-tab5" class="w-full">
        <twig:Accordion:Item value="f1">
            <twig:Accordion:Trigger class="items-center">
                <span class="grid flex-1 grid-cols-[1fr_4rem_4rem] items-center gap-3">
                    <span>
                        Projects
                    </span>
                    <span>
                        <twig:ux:icon name="lucide:minus" class="size-4 text-muted-foreground" />
                    </span>
                    <span>
                        <twig:ux:icon name="lucide:check" class="size-4 text-emerald-600" />
                    </span>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content class="text-muted-foreground">
                Unlimited projects on the Pro plan.
            </twig:Accordion:Content>
        </twig:Accordion:Item>
        <twig:Accordion:Item value="f2">
            <twig:Accordion:Trigger class="items-center">
                <span class="grid flex-1 grid-cols-[1fr_4rem_4rem] items-center gap-3">
                    <span>
                        Exports
                    </span>
                    <span>
                        <twig:ux:icon name="lucide:check" class="size-4 text-emerald-600" />
                    </span>
                    <span>
                        <twig:ux:icon name="lucide:check" class="size-4 text-emerald-600" />
                    </span>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content class="text-muted-foreground">
                CSV and JSON exports.
            </twig:Accordion:Content>
        </twig:Accordion:Item>
        <twig:Accordion:Item value="f3">
            <twig:Accordion:Trigger class="items-center">
                <span class="grid flex-1 grid-cols-[1fr_4rem_4rem] items-center gap-3">
                    <span>
                        SSO
                    </span>
                    <span>
                        <twig:ux:icon name="lucide:minus" class="size-4 text-muted-foreground" />
                    </span>
                    <span>
                        <twig:ux:icon name="lucide:check" class="size-4 text-emerald-600" />
                    </span>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content class="text-muted-foreground">
                SAML and OIDC single sign-on.
            </twig:Accordion:Content>
        </twig:Accordion:Item>
    </twig:Accordion>
</div>
```

### Changelog Releases

```twig
<twig:Accordion id="acc-cl1" class="max-w-md">
    <twig:Accordion:Item value="v21" :open="true">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-baseline gap-3">
                <span class="font-mono">
                    2.1.0
                </span>
                <span class="text-xs font-normal text-muted-foreground">
                    Nov 20, 2026
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            <ul class="list-disc ps-5">
                <li>
                    New dashboard widgets
                </li>
                <li>
                    Faster exports
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="v20">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-baseline gap-3">
                <span class="font-mono">
                    2.0.0
                </span>
                <span class="text-xs font-normal text-muted-foreground">
                    Oct 2, 2026
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            <ul class="list-disc ps-5">
                <li>
                    Rebuilt navigation
                </li>
                <li>
                    Dark mode
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Changelog Typed Changes

```twig
<twig:Accordion id="acc-cl2" class="max-w-md">
    <twig:Accordion:Item value="v21" :open="true">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="font-mono">
                    2.1.0
                </span>
                <twig:Badge variant="default">
                Latest
            </twig:Badge>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            <ul class="grid gap-2">
                <li class="flex items-center gap-2">
                    <twig:Badge variant="secondary">
                    Added
                </twig:Badge>
                    New dashboard widgets
                </li>
                <li class="flex items-center gap-2">
                    <twig:Badge variant="outline">
                    Fixed
                </twig:Badge>
                    Faster exports
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="v20">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <span class="font-mono">
                    2.0.0
                </span>
                <span class="text-xs font-normal text-muted-foreground">
                Oct 2, 2026
            </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            <ul class="grid gap-2">
                <li class="flex items-center gap-2">
                    <twig:Badge variant="secondary">
                    Added
                </twig:Badge>
                    Rebuilt navigation
                </li>
                <li class="flex items-center gap-2">
                    <twig:Badge variant="outline">
                    Fixed
                </twig:Badge>
                    Dark mode
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Checklist With Count

```twig
<twig:Accordion id="acc-chk1" class="max-w-md">
    <div class="flex items-center justify-between pb-2 text-sm">
        <span class="font-medium">
            Setup guide
        </span>
        <span class="text-muted-foreground">
            2 of 3 done
        </span>
    </div>
    <twig:Accordion:Item value="s1">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2 text-muted-foreground line-through">
                <twig:ux:icon name="lucide:circle-check" class="size-4 text-emerald-600" />
                Create a project
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6 text-muted-foreground">
            Steps to complete: create a project.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="s2">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2 text-muted-foreground line-through">
                <twig:ux:icon name="lucide:circle-check" class="size-4 text-emerald-600" />
                Invite your team
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6 text-muted-foreground">
            Steps to complete: invite your team.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="s3">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2 ">
                <twig:ux:icon name="lucide:circle" class="size-4 text-muted-foreground" />
                Connect a domain
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6 text-muted-foreground">
            Steps to complete: connect a domain.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Checklist With Progress

```twig
<twig:Accordion id="acc-chk2" class="max-w-md">
    <twig:Progress value="66" class="mb-3" />
    <twig:Accordion:Item value="s1">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:circle-check" class="size-4 text-emerald-600" />
                Create a project
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6 text-muted-foreground">
            Steps to complete: create a project.
            <twig:Button variant="outline" size="sm" class="mt-2">
                Completed
            </twig:Button>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="s2">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:circle-check" class="size-4 text-emerald-600" />
                Invite your team
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6 text-muted-foreground">
            Steps to complete: invite your team.
            <twig:Button variant="outline" size="sm" class="mt-2">
                Completed
            </twig:Button>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="s3">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:circle" class="size-4 text-muted-foreground" />
                Connect a domain
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6 text-muted-foreground">
            Steps to complete: connect a domain.
            <twig:Button variant="outline" size="sm" class="mt-2">
                Mark complete
            </twig:Button>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Disabled Item

```twig
<twig:Accordion id="acc-dis1" class="max-w-md">
    <twig:Accordion:Item value="a">
        <twig:Accordion:Trigger>
            Available section
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can open this one.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b" :disabled="true">
        <twig:Accordion:Trigger>
            Disabled section
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Hidden.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="c">
        <twig:Accordion:Trigger>
            Another section
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can open this one too.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Disabled With Upgrade Hint

```twig
<twig:Accordion id="acc-dis2" class="max-w-md">
    <twig:Accordion:Item value="a">
        <twig:Accordion:Trigger>
            Basic reports
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Included in every plan.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b" :disabled="true">
        <twig:Accordion:Trigger>
            <span class="flex w-full items-center gap-2">
                <twig:ux:icon name="lucide:lock" class="size-4 text-muted-foreground" />
                Custom dashboards
                <span class="ms-auto me-3 text-xs font-normal text-muted-foreground">
                    Upgrade to Pro
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Hidden.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="c" :disabled="true">
        <twig:Accordion:Trigger>
            <span class="flex w-full items-center gap-2">
                <twig:ux:icon name="lucide:lock" class="size-4 text-muted-foreground" />
                Audit log
                <span class="ms-auto me-3 text-xs font-normal text-muted-foreground">
                    Upgrade to Team
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Hidden.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Highlight Open Item

```twig
<twig:Accordion id="acc-hl1" class="max-w-md gap-1">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-lg border border-transparent px-4 transition-colors data-[open=true]:border-border data-[open=true]:bg-muted/50 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-lg border border-transparent px-4 transition-colors data-[open=true]:border-border data-[open=true]:bg-muted/50 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-lg border border-transparent px-4 transition-colors data-[open=true]:border-border data-[open=true]:bg-muted/50 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Highlight Pulled Out

```twig
<twig:Accordion id="acc-hl2" class="max-w-md">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-xl px-4 transition-all data-[open=true]:my-2 data-[open=true]:bg-muted data-[open=true]:shadow-sm">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-xl px-4 transition-all data-[open=true]:my-2 data-[open=true]:bg-muted data-[open=true]:shadow-sm">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-xl px-4 transition-all data-[open=true]:my-2 data-[open=true]:bg-muted data-[open=true]:shadow-sm">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### List Team Members

```twig
<twig:Accordion id="acc-li1" class="max-w-md">
    <twig:Accordion:Item value="jd">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <twig:Avatar>
                    <twig:Avatar:Fallback>
                        JD
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <span class="flex flex-col">
                    <span>
                        Jane Doe
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        jane@example.com
                    </span>
                </span>
            </span>
            <twig:Badge class="ms-auto me-3" variant="outline">
                Admin
            </twig:Badge>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-12">
            <ul class="grid gap-1 text-muted-foreground">
                <li class="flex items-center gap-2">
                    <twig:ux:icon name="lucide:check" class="size-3.5" />
                    Manage billing
                </li>
                <li class="flex items-center gap-2">
                    <twig:ux:icon name="lucide:check" class="size-3.5" />
                    Invite members
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="sm">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <twig:Avatar>
                    <twig:Avatar:Fallback>
                        SM
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <span class="flex flex-col">
                    <span>
                        Sam Miller
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        sam@example.com
                    </span>
                </span>
            </span>
            <twig:Badge class="ms-auto me-3" variant="outline">
                Editor
            </twig:Badge>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-12">
            <ul class="grid gap-1 text-muted-foreground">
                <li class="flex items-center gap-2">
                    <twig:ux:icon name="lucide:check" class="size-3.5" />
                    Edit content
                </li>
                <li class="flex items-center gap-2">
                    <twig:ux:icon name="lucide:check" class="size-3.5" />
                    Publish
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### List Regions And Countries

```twig
<twig:Accordion id="acc-li2" class="max-w-md">
    <twig:Accordion:Item value="eu">
        <twig:Accordion:Trigger class="items-center">
            Europe
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="px-0">
            <div class="flex justify-between border-t py-2 ps-4 text-sm">
                <span>
                    France
                </span>
                <span class="text-muted-foreground">
                    2 days, Free
                </span>
            </div>
            <div class="flex justify-between border-t py-2 ps-4 text-sm">
                <span>
                    Germany
                </span>
                <span class="text-muted-foreground">
                    3 days, $5
                </span>
            </div>
            <div class="flex justify-between border-t py-2 ps-4 text-sm">
                <span>
                    Spain
                </span>
                <span class="text-muted-foreground">
                    3 days, $5
                </span>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="as">
        <twig:Accordion:Trigger class="items-center">
            Asia
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="px-0">
            <div class="flex justify-between border-t py-2 ps-4 text-sm">
                <span>
                    Japan
                </span>
                <span class="text-muted-foreground">
                    6 days, $12
                </span>
            </div>
            <div class="flex justify-between border-t py-2 ps-4 text-sm">
                <span>
                    India
                </span>
                <span class="text-muted-foreground">
                    7 days, $12
                </span>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### List Settings Sidebar

```twig
<twig:Accordion id="acc-li3" multiple class="max-w-xs">
    <twig:Accordion:Item value="acc">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:user" class="size-4" />
                Account
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <ul class="grid gap-1 ps-6">
                <li>
                    <a href="#" class="text-muted-foreground hover:text-foreground">
                        Profile
                    </a>
                </li>
                <li>
                    <a href="#" class="text-muted-foreground hover:text-foreground">
                        Security
                    </a>
                </li>
                <li>
                    <a href="#" class="text-muted-foreground hover:text-foreground">
                        Sessions
                    </a>
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="ntf">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:bell" class="size-4" />
                Notifications
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <ul class="grid gap-1 ps-6">
                <li>
                    <a href="#" class="text-muted-foreground hover:text-foreground">
                        Email
                    </a>
                </li>
                <li>
                    <a href="#" class="text-muted-foreground hover:text-foreground">
                        Push
                    </a>
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="bil">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:credit-card" class="size-4" />
                Billing
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <ul class="grid gap-1 ps-6">
                <li>
                    <a href="#" class="text-muted-foreground hover:text-foreground">
                        Plan
                    </a>
                </li>
                <li>
                    <a href="#" class="text-muted-foreground hover:text-foreground">
                        Invoices
                    </a>
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Media Description Above Image

```twig
<twig:Accordion id="acc-me1" class="max-w-md">
    <twig:Accordion:Item value="a" :open="true">
        <twig:Accordion:Trigger class="items-center">
            Mountain trail
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="grid gap-2">
            <p>
                A three-hour hike with a view of the valley.
            </p>
            <twig:Skeleton class="aspect-video w-full animate-none" />
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b">
        <twig:Accordion:Trigger class="items-center">
            Coastal path
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="grid gap-2">
            <p>
                Cliffs and beaches along the sea.
            </p>
            <twig:Skeleton class="aspect-video w-full animate-none" />
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Media Thumbnail Rows

```twig
<twig:Accordion id="acc-me2" class="max-w-md">
    <twig:Accordion:Item value="a">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <twig:Skeleton class="size-12 shrink-0 animate-none rounded-md" />
                <span class="flex flex-col">
                    <span>
                        Mountain trail
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        12 km, 3 h
                    </span>
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-15 text-muted-foreground">
            A three-hour hike with a view of the valley.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-3">
                <twig:Skeleton class="size-12 shrink-0 animate-none rounded-md" />
                <span class="flex flex-col">
                    <span>
                        Coastal path
                    </span>
                    <span class="text-xs font-normal text-muted-foreground">
                        8 km, 2 h
                    </span>
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-15 text-muted-foreground">
            Cliffs and beaches along the sea.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Meta Reading Time

```twig
<twig:Accordion id="acc-mt1" class="max-w-md">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
            <span class="ms-auto me-3 text-xs font-normal text-muted-foreground">
                3 min read
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
            <span class="ms-auto me-3 text-xs font-normal text-muted-foreground">
                5 min read
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
            <span class="ms-auto me-3 text-xs font-normal text-muted-foreground">
                2 min read
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Meta Count Badge

```twig
<twig:Accordion id="acc-mt2" class="max-w-md">
    <twig:Accordion:Item value="t1" :open="true">
        <twig:Accordion:Trigger class="items-center">
            Today
            <twig:Badge class="ms-2" variant="secondary">
                2
            </twig:Badge>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <ul class="grid gap-1.5">
                <li class="flex items-center gap-2">
                    <twig:Checkbox id="mt-t1-1" />
                    <twig:Field:Label for="mt-t1-1" class="font-normal">
                        Task 1
                    </twig:Field:Label>
                </li>
                <li class="flex items-center gap-2">
                    <twig:Checkbox id="mt-t1-2" />
                    <twig:Field:Label for="mt-t1-2" class="font-normal">
                        Task 2
                    </twig:Field:Label>
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="t2">
        <twig:Accordion:Trigger class="items-center">
            This week
            <twig:Badge class="ms-2" variant="secondary">
                5
            </twig:Badge>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <ul class="grid gap-1.5">
                <li class="flex items-center gap-2">
                    <twig:Checkbox id="mt-t2-1" />
                    <twig:Field:Label for="mt-t2-1" class="font-normal">
                        Task 1
                    </twig:Field:Label>
                </li>
                <li class="flex items-center gap-2">
                    <twig:Checkbox id="mt-t2-2" />
                    <twig:Field:Label for="mt-t2-2" class="font-normal">
                        Task 2
                    </twig:Field:Label>
                </li>
            </ul>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Meta Avatar Stack

```twig
<twig:Accordion id="acc-mt3" class="max-w-md">
    <twig:Accordion:Item value="a">
        <twig:Accordion:Trigger class="items-center">
            Design team
            <twig:Avatar:Group class="ms-auto me-3">
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        AB
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        CD
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        EF
                    </twig:Avatar:Fallback>
                </twig:Avatar>
            </twig:Avatar:Group>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Three people are working on this.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b">
        <twig:Accordion:Trigger class="items-center">
            Platform team
            <twig:Avatar:Group class="ms-auto me-3">
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        AB
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        CD
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        EF
                    </twig:Avatar:Fallback>
                </twig:Avatar>
            </twig:Avatar:Group>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Three people are working on this.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Meta Status Dot

```twig
<twig:Accordion id="acc-mt4" class="max-w-md">
    <twig:Accordion:Item value="a">
        <twig:Accordion:Trigger class="items-center">
            API
            <span class="ms-auto me-3 flex items-center gap-1.5 text-xs font-normal text-muted-foreground">
                <span class="size-2 rounded-full bg-emerald-500"></span>
                Operational
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            All systems normal.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b">
        <twig:Accordion:Trigger class="items-center">
            Dashboard
            <span class="ms-auto me-3 flex items-center gap-1.5 text-xs font-normal text-muted-foreground">
                <span class="size-2 rounded-full bg-amber-500"></span>
                Degraded
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Slower than usual.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="c">
        <twig:Accordion:Trigger class="items-center">
            Webhooks
            <span class="ms-auto me-3 flex items-center gap-1.5 text-xs font-normal text-muted-foreground">
                <span class="size-2 rounded-full bg-red-500"></span>
                Down
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            We are investigating.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Multiple Open By Default

```twig
<twig:Accordion id="acc-mu1" multiple class="max-w-md">
    <twig:Accordion:Item value="refund" :open="true">
        <twig:Accordion:Trigger>
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" :open="true">
        <twig:Accordion:Trigger>
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger>
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Multiple Separate Cards

```twig
<twig:Accordion id="acc-mu2" multiple class="max-w-md space-y-2">
    <twig:Accordion:Item value="refund" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
            <twig:Badge class="ms-2" variant="default">
                New
            </twig:Badge>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
            <twig:Badge class="ms-2" variant="default">
                New
            </twig:Badge>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Nested In A Card

```twig
<twig:Accordion id="acc-ne1" class="max-w-md space-y-2">
    <twig:Accordion:Item value="a" :open="true" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            Account
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Manage your account.
            <twig:Accordion id="acc-ne1-in" class="ps-2">
                <twig:Accordion:Item value="i1">
                    <twig:Accordion:Trigger class="py-2">
                        Billing details
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content>
                        Update your card and invoices.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
                <twig:Accordion:Item value="i2">
                    <twig:Accordion:Trigger class="py-2">
                        Tax settings
                    </twig:Accordion:Trigger>
                    <twig:Accordion:Content>
                        Set your tax ID and region.
                    </twig:Accordion:Content>
                </twig:Accordion:Item>
            </twig:Accordion>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger class="items-center">
            Security
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Passwords and sessions.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Nested With Branch Connectors

```twig
<twig:Accordion id="acc-ne2" class="max-w-md">
    <twig:Accordion:Item value="a" :open="true">
        <twig:Accordion:Trigger class="items-center">
            Workspace
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="ms-2 grid gap-1 border-s ps-4">
                <div class="relative py-1 text-muted-foreground before:absolute before:-start-4 before:top-1/2 before:h-px before:w-3 before:bg-border">
                    Members
                </div>
                <div class="relative py-1 text-muted-foreground before:absolute before:-start-4 before:top-1/2 before:h-px before:w-3 before:bg-border">
                    Roles
                </div>
                <div class="relative py-1 text-muted-foreground before:absolute before:-start-4 before:top-1/2 before:h-px before:w-3 before:bg-border">
                    Billing
                </div>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b">
        <twig:Accordion:Trigger class="items-center">
            Integrations
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Slack, GitHub and more.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Proximity Dim Others

```twig
<twig:Accordion id="acc-px1" class="group/list max-w-md">
    <twig:Accordion:Item value="refund" class="transition-opacity group-hover/list:opacity-50 hover:opacity-100 data-[open=true]:opacity-100">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="transition-opacity group-hover/list:opacity-50 hover:opacity-100 data-[open=true]:opacity-100">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="transition-opacity group-hover/list:opacity-50 hover:opacity-100 data-[open=true]:opacity-100">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="data" class="transition-opacity group-hover/list:opacity-50 hover:opacity-100 data-[open=true]:opacity-100">
        <twig:Accordion:Trigger class="items-center">
            Where is my data stored?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Data is stored in the region you pick at sign-up.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Size Compact

```twig
<twig:Accordion id="acc-sz1" class="max-w-sm">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="py-1.5 text-xs">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-xs pb-1.5">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="py-1.5 text-xs">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-xs pb-1.5">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="py-1.5 text-xs">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-xs pb-1.5">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Size Large

```twig
<twig:Accordion id="acc-sz2" class="max-w-lg">
    <twig:Accordion:Item value="refund">
        <twig:Accordion:Trigger class="items-center py-5 text-lg [&>[data-slot=accordion-trigger-icon]]:hidden">
            What is your refund policy?
            <span class="flex size-7 shrink-0 items-center justify-center rounded-full border">
                <twig:ux:icon name="lucide:chevron-down" class="size-4 transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="pb-5 text-base text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan">
        <twig:Accordion:Trigger class="items-center py-5 text-lg [&>[data-slot=accordion-trigger-icon]]:hidden">
            Can I change my plan?
            <span class="flex size-7 shrink-0 items-center justify-center rounded-full border">
                <twig:ux:icon name="lucide:chevron-down" class="size-4 transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="pb-5 text-base text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support">
        <twig:Accordion:Trigger class="items-center py-5 text-lg [&>[data-slot=accordion-trigger-icon]]:hidden">
            How do I contact support?
            <span class="flex size-7 shrink-0 items-center justify-center rounded-full border">
                <twig:ux:icon name="lucide:chevron-down" class="size-4 transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="pb-5 text-base text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Settings With Radio Groups

```twig
<twig:Accordion id="acc-se1" class="max-w-md">
    <twig:Accordion:Item value="theme">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex w-full items-center justify-between pe-3">
                <span>
                    Theme
                </span>
                <span class="font-normal text-muted-foreground">
                    System
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:RadioGroup>
                <twig:Field orientation="horizontal">
                    <twig:RadioGroup:Item id="st-theme-0" name="st-theme" value="Light" checked="" />
                    <twig:Field:Label for="st-theme-0" class="font-normal">
                        Light
                    </twig:Field:Label>
                </twig:Field>
                <twig:Field orientation="horizontal">
                    <twig:RadioGroup:Item id="st-theme-1" name="st-theme" value="Dark" checked="" />
                    <twig:Field:Label for="st-theme-1" class="font-normal">
                        Dark
                    </twig:Field:Label>
                </twig:Field>
                <twig:Field orientation="horizontal">
                    <twig:RadioGroup:Item id="st-theme-2" name="st-theme" value="System" checked="1" />
                    <twig:Field:Label for="st-theme-2" class="font-normal">
                        System
                    </twig:Field:Label>
                </twig:Field>
            </twig:RadioGroup>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="lang">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex w-full items-center justify-between pe-3">
                <span>
                    Language
                </span>
                <span class="font-normal text-muted-foreground">
                    English
                </span>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:RadioGroup>
                <twig:Field orientation="horizontal">
                    <twig:RadioGroup:Item id="st-lang-0" name="st-lang" value="English" checked="1" />
                    <twig:Field:Label for="st-lang-0" class="font-normal">
                        English
                    </twig:Field:Label>
                </twig:Field>
                <twig:Field orientation="horizontal">
                    <twig:RadioGroup:Item id="st-lang-1" name="st-lang" value="French" checked="" />
                    <twig:Field:Label for="st-lang-1" class="font-normal">
                        French
                    </twig:Field:Label>
                </twig:Field>
                <twig:Field orientation="horizontal">
                    <twig:RadioGroup:Item id="st-lang-2" name="st-lang" value="German" checked="" />
                    <twig:Field:Label for="st-lang-2" class="font-normal">
                        German
                    </twig:Field:Label>
                </twig:Field>
            </twig:RadioGroup>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Status Jobs

```twig
<twig:Accordion id="acc-ss1" class="max-w-md">
    <twig:Accordion:Item value="a">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:circle-check" class="size-4 text-emerald-600" />
                Build
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6 text-muted-foreground">
            Finished in 42 seconds.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:loader-circle" class="size-4 animate-spin" />
                Tests
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6 text-muted-foreground">
            Running 128 of 240 tests.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="c">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:circle-dashed" class="size-4 text-muted-foreground" />
                Deploy
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-6 text-muted-foreground">
            Waiting for the tests.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Status Reasoning Trace

```twig
<twig:Accordion id="acc-ss2" class="max-w-md">
    <twig:Accordion:Item value="r">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2 text-muted-foreground">
                <twig:ux:icon name="lucide:brain" class="size-4" />
                Thought for 12 seconds
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <p class="text-muted-foreground">
                I compared both options, checked the constraints and picked the cheaper one.
            </p>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Status Tool Calls

```twig
<twig:Accordion id="acc-ss3" class="max-w-md">
    <twig:Accordion:Item value="t" :open="true">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <span class="font-mono text-xs">
                    search_docs
                </span>
                <twig:Badge variant="outline">
                Done
            </twig:Badge>
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="grid gap-2">
                <twig:CodeBlock size="sm">
                    <twig:CodeBlock:Header>
                        <twig:CodeBlock:Title>
                            Input
                        </twig:CodeBlock:Title>
                    </twig:CodeBlock:Header>
                    <twig:CodeBlock:Content code='{"query": "refund policy"}' />
                </twig:CodeBlock>
                <twig:CodeBlock size="sm">
                    <twig:CodeBlock:Header>
                        <twig:CodeBlock:Title>
                            Output
                        </twig:CodeBlock:Title>
                    </twig:CodeBlock:Header>
                    <twig:CodeBlock:Content code='{"results": 3}' />
                </twig:CodeBlock>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Status Incident Timeline

```twig
<twig:Accordion id="acc-ss4" class="max-w-md">
    <twig:Accordion:Item value="a">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <span class="size-2 rounded-full bg-emerald-500"></span>
                Resolved
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="grid gap-1 text-muted-foreground">
                <span class="text-xs">
                    Nov 25, 14:05 UTC
                </span>
                <p>
                    Everything is back to normal.
                </p>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <span class="size-2 rounded-full bg-sky-500"></span>
                Monitoring
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="grid gap-1 text-muted-foreground">
                <span class="text-xs">
                    Nov 25, 13:40 UTC
                </span>
                <p>
                    A fix was deployed.
                </p>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="c">
        <twig:Accordion:Trigger class="items-center">
            <span class="flex items-center gap-2">
                <span class="size-2 rounded-full bg-amber-500"></span>
                Investigating
            </span>
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <div class="grid gap-1 text-muted-foreground">
                <span class="text-xs">
                    Nov 25, 13:10 UTC
                </span>
                <p>
                    We are looking into slow requests.
                </p>
            </div>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Sticky Trigger

```twig
<twig:Accordion id="acc-sk1" class="max-w-md h-64 overflow-y-auto rounded-lg border px-4">
    <twig:Accordion:Item value="a" :open="true" class="border-b">
        <twig:Accordion:Trigger class="sticky top-0 z-10 bg-background">
            Terms of service
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <p>
                Paragraph 1 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 2 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 3 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 4 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 5 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 6 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 7 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 8 of a long answer that scrolls inside the panel.
            </p>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b">
        <twig:Accordion:Trigger>
            Privacy policy
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Short.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Sticky Trigger With Fade

```twig
<twig:Accordion id="acc-sk2" class="max-w-md h-64 overflow-y-auto rounded-lg border px-4">
    <twig:Accordion:Item value="a" :open="true" class="border-b">
        <twig:Accordion:Trigger class="sticky top-0 z-10 bg-background shadow-[0_8px_8px_-8px_hsl(0_0%_0%/0.15)]">
            Terms of service
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <p>
                Paragraph 1 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 2 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 3 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 4 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 5 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 6 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 7 of a long answer that scrolls inside the panel.
            </p>
            <p>
                Paragraph 8 of a long answer that scrolls inside the panel.
            </p>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="b">
        <twig:Accordion:Trigger>
            Privacy policy
        </twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Short.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Style Soft Tray

```twig
<twig:Accordion id="acc-sy1" class="max-w-md gap-1 rounded-xl bg-muted p-1">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-lg px-4 transition-all data-[open=true]:bg-background data-[open=true]:shadow-sm">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-lg px-4 transition-all data-[open=true]:bg-background data-[open=true]:shadow-sm">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-lg px-4 transition-all data-[open=true]:bg-background data-[open=true]:shadow-sm">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Style Hard Shadow

```twig
<twig:Accordion id="acc-sy2" class="max-w-md gap-4 pe-1">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-lg border-2 border-foreground bg-background px-4 shadow-[4px_4px_0_0_var(--foreground)] transition-all data-[open=true]:translate-x-1 data-[open=true]:translate-y-1 data-[open=true]:shadow-none last:border-b-2">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-lg border-2 border-foreground bg-background px-4 shadow-[4px_4px_0_0_var(--foreground)] transition-all data-[open=true]:translate-x-1 data-[open=true]:translate-y-1 data-[open=true]:shadow-none last:border-b-2">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-lg border-2 border-foreground bg-background px-4 shadow-[4px_4px_0_0_var(--foreground)] transition-all data-[open=true]:translate-x-1 data-[open=true]:translate-y-1 data-[open=true]:shadow-none last:border-b-2">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Style Chunky Dashed

```twig
<twig:Accordion id="acc-sy3" class="max-w-md space-y-3">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-xl border-2 border-dashed px-4 transition-colors data-[open=true]:border-solid data-[open=true]:border-foreground last:border-b-2">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-xl border-2 border-dashed px-4 transition-colors data-[open=true]:border-solid data-[open=true]:border-foreground last:border-b-2">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-xl border-2 border-dashed px-4 transition-colors data-[open=true]:border-solid data-[open=true]:border-foreground last:border-b-2">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Style Glass

```twig
<twig:Accordion id="acc-sy4" class="max-w-md space-y-2 rounded-2xl bg-[radial-gradient(var(--border)_1px,transparent_1px)] p-4 [background-size:12px_12px]">
    <twig:Accordion:Item value="refund" :open="true" class="rounded-xl border bg-background/60 px-4 backdrop-blur-md last:border-b">
        <twig:Accordion:Trigger class="items-center">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="rounded-xl border bg-background/60 px-4 backdrop-blur-md last:border-b">
        <twig:Accordion:Trigger class="items-center">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="rounded-xl border bg-background/60 px-4 backdrop-blur-md last:border-b">
        <twig:Accordion:Trigger class="items-center">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Underline Solid

```twig
<twig:Accordion id="acc-un1" class="max-w-md">
    <twig:Accordion:Item value="refund" :open="true" class="border-b-0">
        <twig:Accordion:Trigger class="items-center border-b-2 border-transparent rounded-none hover:no-underline group-data-[open=true]:border-foreground">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="border-b-0">
        <twig:Accordion:Trigger class="items-center border-b-2 border-transparent rounded-none hover:no-underline group-data-[open=true]:border-foreground">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="border-b-0">
        <twig:Accordion:Trigger class="items-center border-b-2 border-transparent rounded-none hover:no-underline group-data-[open=true]:border-foreground">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Underline Sweeping

```twig
<twig:Accordion id="acc-un2" class="max-w-md">
    <twig:Accordion:Item value="refund" :open="true" class="border-b-0">
        <twig:Accordion:Trigger class="items-center rounded-none hover:no-underline after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 group-data-[open=true]:after:scale-x-100">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="border-b-0">
        <twig:Accordion:Trigger class="items-center rounded-none hover:no-underline after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 group-data-[open=true]:after:scale-x-100">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="border-b-0">
        <twig:Accordion:Trigger class="items-center rounded-none hover:no-underline after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 group-data-[open=true]:after:scale-x-100">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Underline From Centre

```twig
<twig:Accordion id="acc-un3" class="max-w-md">
    <twig:Accordion:Item value="refund" :open="true" class="border-b-0">
        <twig:Accordion:Trigger class="items-center rounded-none hover:no-underline after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 group-data-[open=true]:after:scale-x-100">
            What is your refund policy?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Refunds are available within 30 days of purchase.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="plan" class="border-b-0">
        <twig:Accordion:Trigger class="items-center rounded-none hover:no-underline after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 group-data-[open=true]:after:scale-x-100">
            Can I change my plan?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            You can upgrade or downgrade at any time from your account.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="support" class="border-b-0">
        <twig:Accordion:Trigger class="items-center rounded-none hover:no-underline after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 group-data-[open=true]:after:scale-x-100">
            How do I contact support?
        </twig:Accordion:Trigger>
        <twig:Accordion:Content class="text-muted-foreground">
            Write to us any time, we reply within a day.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Group Tabs Switch Question Sets

```twig
<twig:Tabs defaultValue="billing" class="max-w-md">
    <twig:Tabs:List>
        <twig:Tabs:Trigger value="billing">
            Billing
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="product">
            Product
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="billing">
        <twig:Accordion id="acc-gt1" class="w-full">
            <twig:Accordion:Item value="refund">
                <twig:Accordion:Trigger>
                    What is your refund policy?
                </twig:Accordion:Trigger>
                <twig:Accordion:Content>
                    Refunds are available within 30 days of purchase.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
            <twig:Accordion:Item value="plan">
                <twig:Accordion:Trigger>
                    Can I change my plan?
                </twig:Accordion:Trigger>
                <twig:Accordion:Content>
                    You can upgrade or downgrade at any time from your account.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
        </twig:Accordion>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="product">
        <twig:Accordion id="acc-gt2" class="w-full">
            <twig:Accordion:Item value="support">
                <twig:Accordion:Trigger>
                    How do I contact support?
                </twig:Accordion:Trigger>
                <twig:Accordion:Content>
                    Write to us any time, we reply within a day.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
            <twig:Accordion:Item value="data">
                <twig:Accordion:Trigger>
                    Where is my data stored?
                </twig:Accordion:Trigger>
                <twig:Accordion:Content>
                    Data is stored in the region you pick at sign-up.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
        </twig:Accordion>
    </twig:Tabs:Content>
</twig:Tabs>
```

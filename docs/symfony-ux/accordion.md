# Accordion

## Examples

### Single Expand

```twig
<twig:Accordion id="acc-single" defaultValue="item-1" class="max-w-md">
    {% for k, q in {'item-1': 'What is your refund policy?', 'item-2': 'Can I change my plan?', 'item-3': 'How do I contact support?'} %}
        <twig:Accordion:Item value="{{ k }}">
            <twig:Accordion:Trigger>{{ q }}</twig:Accordion:Trigger>
            <twig:Accordion:Content>You can reach out any time and we will get back to you within a day.</twig:Accordion:Content>
        </twig:Accordion:Item>
    {% endfor %}
</twig:Accordion>
```

### Bordered Rounded

```twig
<twig:Accordion id="acc-rounded" defaultValue="a" class="max-w-md space-y-2">
    {% for k, q in {a: 'Is it accessible?', b: 'Is it styled?', c: 'Is it animated?'} %}
        <twig:Accordion:Item value="{{ k }}" class="rounded-lg border px-4 last:border-b">
            <twig:Accordion:Trigger>{{ q }}</twig:Accordion:Trigger>
            <twig:Accordion:Content class="text-muted-foreground">Yes, it follows the WAI-ARIA design pattern.</twig:Accordion:Content>
        </twig:Accordion:Item>
    {% endfor %}
</twig:Accordion>
```

### In Card

```twig
<twig:Card class="max-w-md">
    <twig:Card:Header><twig:Card:Title>Account questions</twig:Card:Title></twig:Card:Header>
    <twig:Card:Content>
        <twig:Accordion id="acc-card" multiple>
            {% for k, q in {plan: 'Plan', billing: 'Billing', security: 'Security'} %}
                <twig:Accordion:Item value="{{ k }}">
                    <twig:Accordion:Trigger>{{ q }}</twig:Accordion:Trigger>
                    <twig:Accordion:Content>Everything about {{ q|lower }} in one place.</twig:Accordion:Content>
                </twig:Accordion:Item>
            {% endfor %}
        </twig:Accordion>
    </twig:Card:Content>
</twig:Card>
```

### Icons and Badges

```twig
<twig:Accordion id="acc-icons" defaultValue="ai" class="max-w-md space-y-2">
    <twig:Accordion:Item value="ai" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger><span class="flex items-center gap-3"><span class="flex size-8 items-center justify-center rounded-md bg-muted"><twig:ux:icon name="lucide:sparkles" class="size-4" /></span> AI assistant <twig:Badge>New</twig:Badge></span></twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-11 text-muted-foreground">Ask questions and get answers from your data.</twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="sync" class="rounded-lg border px-4 last:border-b">
        <twig:Accordion:Trigger><span class="flex items-center gap-3"><span class="flex size-8 items-center justify-center rounded-md bg-muted"><twig:ux:icon name="lucide:refresh-cw" class="size-4" /></span> Sync</span></twig:Accordion:Trigger>
        <twig:Accordion:Content class="ps-11 text-muted-foreground">Keep your devices up to date.</twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### Nested

```twig
<twig:Accordion id="acc-nested" defaultValue="details" class="max-w-md">
    <twig:Accordion:Item value="details">
        <twig:Accordion:Trigger>Product details</twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Accordion id="acc-nested-inner" defaultValue="shipping">
                <twig:Accordion:Item value="shipping"><twig:Accordion:Trigger>Shipping</twig:Accordion:Trigger><twig:Accordion:Content>Ships in 2-3 days.</twig:Accordion:Content></twig:Accordion:Item>
                <twig:Accordion:Item value="returns"><twig:Accordion:Trigger>Returns</twig:Accordion:Trigger><twig:Accordion:Content>Free returns within 30 days.</twig:Accordion:Content></twig:Accordion:Item>
            </twig:Accordion>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

### User List

```twig
<twig:Accordion id="acc-users" class="max-w-md">
    {% for u, r in {shadcn: 'Admin', maxleiter: 'Editor', evilrabbit: 'Viewer'} %}
        <twig:Accordion:Item value="{{ u }}">
            <twig:Accordion:Trigger>
                <span class="flex items-center gap-3">
                    <twig:Avatar size="sm"><twig:Avatar:Image src="https://github.com/{{ u }}.png" alt="{{ u }}" /><twig:Avatar:Fallback>{{ u|first|upper }}</twig:Avatar:Fallback></twig:Avatar>
                    {{ u }} <twig:Badge variant="secondary">{{ r }}</twig:Badge>
                </span>
            </twig:Accordion:Trigger>
            <twig:Accordion:Content class="text-muted-foreground">{{ r }} access to projects and settings.</twig:Accordion:Content>
        </twig:Accordion:Item>
    {% endfor %}
</twig:Accordion>
```

### Setup Steps

```twig
<twig:Accordion id="acc-steps" defaultValue="step-2" class="max-w-md">
    <twig:Accordion:Item value="step-1">
        <twig:Accordion:Trigger><span class="flex items-center gap-2"><twig:ux:icon name="lucide:circle-check" class="size-4 text-green-600" /> Create an account</span></twig:Accordion:Trigger>
        <twig:Accordion:Content>Done.</twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="step-2">
        <twig:Accordion:Trigger><span class="flex items-center gap-2"><twig:ux:icon name="lucide:loader" class="size-4 text-primary" /> Verify your email</span></twig:Accordion:Trigger>
        <twig:Accordion:Content>
            <twig:Field><twig:Field:Label for="acc-email">Email</twig:Field:Label><twig:Input id="acc-email" type="email" placeholder="you@example.com" /></twig:Field>
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="step-3">
        <twig:Accordion:Trigger><span class="flex items-center gap-2"><twig:ux:icon name="lucide:circle" class="size-4 text-muted-foreground" /> Invite your team</span></twig:Accordion:Trigger>
        <twig:Accordion:Content>Add people once your email is verified.</twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

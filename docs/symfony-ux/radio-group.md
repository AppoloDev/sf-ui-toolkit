# Radio Group

## Examples

### Basic

```twig
<twig:RadioGroup class="w-fit">
    {% for v, label in {default: 'Default', comfortable: 'Comfortable', compact: 'Compact'} %}
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="rg-basic-{{ v }}" name="rg-basic" value="{{ v }}" checked="{{ v == 'comfortable' }}" />
            <twig:Field:Label for="rg-basic-{{ v }}" class="font-normal">{{ label }}</twig:Field:Label>
        </twig:Field>
    {% endfor %}
</twig:RadioGroup>
```

### Colored

```twig
<twig:RadioGroup class="w-fit">
    {% for v, cls in {blue: 'border-blue-600 checked:bg-blue-600', green: 'border-green-600 checked:bg-green-600', yellow: 'border-yellow-500 checked:bg-yellow-500'} %}
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="rg-color-{{ v }}" name="rg-color" value="{{ v }}" class="{{ cls }}" />
            <twig:Field:Label for="rg-color-{{ v }}" class="font-normal capitalize">{{ v }}</twig:Field:Label>
        </twig:Field>
    {% endfor %}
</twig:RadioGroup>
```

### Legend and Description

```twig
<twig:Field:Set class="max-w-xs">
    <twig:Field:Legend variant="label">Battery level</twig:Field:Legend>
    <twig:Field:Description>Choose how aggressively the device saves power.</twig:Field:Description>
    <twig:RadioGroup>
        {% for v in ['low', 'medium', 'high'] %}
            <twig:Field orientation="horizontal">
                <twig:RadioGroup:Item id="rg-battery-{{ v }}" name="rg-battery" value="{{ v }}" checked="{{ v == 'medium' }}" />
                <twig:Field:Label for="rg-battery-{{ v }}" class="font-normal capitalize">{{ v }}</twig:Field:Label>
            </twig:Field>
        {% endfor %}
    </twig:RadioGroup>
</twig:Field:Set>
```

### Descriptive Cards

```twig
<twig:RadioGroup class="max-w-sm">
    {% for v, plan in {plus: {t: 'Plus', d: 'For individuals and small teams.'}, pro: {t: 'Pro', d: 'For growing businesses.'}} %}
        <twig:Field:Label for="rg-plan-{{ v }}">
            <twig:Field orientation="horizontal" class="rounded-lg border p-4 has-checked:border-primary has-checked:bg-primary/5">
                <twig:Field:Content>
                    <twig:Field:Title>{{ plan.t }}</twig:Field:Title>
                    <twig:Field:Description>{{ plan.d }}</twig:Field:Description>
                </twig:Field:Content>
                <twig:RadioGroup:Item id="rg-plan-{{ v }}" name="rg-plan" value="{{ v }}" checked="{{ v == 'plus' }}" />
            </twig:Field>
        </twig:Field:Label>
    {% endfor %}
</twig:RadioGroup>
```

### Card Separators

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    <twig:RadioGroup class="gap-0">
        {% for v, label in {standard: 'Standard (5-7 days)', express: 'Express (2-3 days)', overnight: 'Overnight'} %}
            {% if v != 'standard' %}<twig:Separator />{% endif %}
            <twig:Field:Label for="rg-ship-{{ v }}" class="flex cursor-pointer items-center gap-3 px-4 py-3">
                <twig:RadioGroup:Item id="rg-ship-{{ v }}" name="rg-ship" value="{{ v }}" checked="{{ v == 'standard' }}" />
                <span class="font-normal">{{ label }}</span>
            </twig:Field:Label>
        {% endfor %}
    </twig:RadioGroup>
</twig:Card>
```

### Card Icons

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    <twig:RadioGroup class="gap-0">
        {% for v, c in {email: {l: 'Email', i: 'mail'}, phone: {l: 'Phone', i: 'phone'}, chat: {l: 'Chat', i: 'message-circle'}} %}
            {% if v != 'email' %}<twig:Separator />{% endif %}
            <twig:Field:Label for="rg-contact-{{ v }}" class="flex cursor-pointer items-center gap-3 px-4 py-3">
                <twig:ux:icon name="lucide:{{ c.i }}" class="size-4 text-muted-foreground" />
                <span class="flex-1 font-normal">{{ c.l }}</span>
                <twig:RadioGroup:Item id="rg-contact-{{ v }}" name="rg-contact" value="{{ v }}" checked="{{ v == 'email' }}" />
            </twig:Field:Label>
        {% endfor %}
    </twig:RadioGroup>
</twig:Card>
```

### Grid Layout

```twig
<twig:RadioGroup class="grid max-w-md grid-cols-2 gap-3">
    {% for v, a in {analytics: {t: 'Analytics', d: 'Track usage', i: 'chart-column'}, billing: {t: 'Billing', d: 'Manage plans', i: 'credit-card'}, security: {t: 'Security', d: 'Protect data', i: 'shield'}, support: {t: 'Support', d: 'Get help', i: 'life-buoy'}} %}
        <twig:Field:Label for="rg-area-{{ v }}">
            <twig:Field class="relative rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
                <span class="flex size-8 items-center justify-center rounded-md bg-muted"><twig:ux:icon name="lucide:{{ a.i }}" class="size-4" /></span>
                <twig:Field:Title>{{ a.t }}</twig:Field:Title>
                <twig:Field:Description>{{ a.d }}</twig:Field:Description>
                <twig:RadioGroup:Item id="rg-area-{{ v }}" name="rg-area" value="{{ v }}" class="absolute end-3 top-3" />
            </twig:Field>
        </twig:Field:Label>
    {% endfor %}
</twig:RadioGroup>
```

### Avatar Cards

```twig
<twig:RadioGroup class="grid max-w-md grid-cols-2 gap-3">
    {% for u in ['shadcn', 'maxleiter'] %}
        <twig:Field:Label for="rg-user-{{ u }}">
            <twig:Field orientation="horizontal" class="items-center rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
                <twig:Avatar><twig:Avatar:Image src="https://github.com/{{ u }}.png" alt="{{ u }}" /><twig:Avatar:Fallback>{{ u|first|upper }}</twig:Avatar:Fallback></twig:Avatar>
                <twig:Field:Content class="flex-1"><twig:Field:Title>{{ u }}</twig:Field:Title><twig:Field:Description>@{{ u }}</twig:Field:Description></twig:Field:Content>
                <twig:RadioGroup:Item id="rg-user-{{ u }}" name="rg-user" value="{{ u }}" />
            </twig:Field>
        </twig:Field:Label>
    {% endfor %}
</twig:RadioGroup>
```

### Badges

```twig
<twig:RadioGroup class="w-fit">
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-ch-stable" name="rg-ch" value="stable" checked />
        <twig:Field:Label for="rg-ch-stable" class="font-normal">Stable <twig:Badge variant="secondary">Recommended</twig:Badge></twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-ch-beta" name="rg-ch" value="beta" />
        <twig:Field:Label for="rg-ch-beta" class="font-normal">Beta <twig:Badge>New</twig:Badge></twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-ch-canary" name="rg-ch" value="canary" />
        <twig:Field:Label for="rg-ch-canary" class="font-normal">Canary</twig:Field:Label>
    </twig:Field>
</twig:RadioGroup>
```

### Inline Horizontal

```twig
<twig:RadioGroup class="flex flex-wrap gap-6">
    {% for v in ['admin', 'editor', 'viewer'] %}
        <twig:Field orientation="horizontal" class="w-auto">
            <twig:RadioGroup:Item id="rg-role-{{ v }}" name="rg-role" value="{{ v }}" checked="{{ v == 'viewer' }}" />
            <twig:Field:Label for="rg-role-{{ v }}" class="font-normal capitalize">{{ v }}</twig:Field:Label>
        </twig:Field>
    {% endfor %}
</twig:RadioGroup>
```

### Pricing Tiers

```twig
<twig:RadioGroup class="max-w-sm">
    {% for v, t in {free: {n: 'Free', p: '$0'}, pro: {n: 'Pro', p: '$19'}, enterprise: {n: 'Enterprise', p: '$99'}} %}
        <twig:Field:Label for="rg-tier-{{ v }}">
            <twig:Field orientation="horizontal" class="items-center rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
                <twig:RadioGroup:Item id="rg-tier-{{ v }}" name="rg-tier" value="{{ v }}" checked="{{ v == 'pro' }}" />
                <span class="flex-1 font-medium">{{ t.n }}</span>
                <span class="text-sm text-muted-foreground">{{ t.p }} / month</span>
            </twig:Field>
        </twig:Field:Label>
    {% endfor %}
</twig:RadioGroup>
```


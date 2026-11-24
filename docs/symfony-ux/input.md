# Input

## Examples

### Basic

```twig
<twig:Input placeholder="Type here" class="max-w-xs" />
```

### With Label and Description

```twig
<twig:Field class="max-w-xs">
    <twig:Field:Label for="in-username">Username</twig:Field:Label>
    <twig:Input id="in-username" placeholder="shadcn" />
    <twig:Field:Description>This is your public display name.</twig:Field:Description>
</twig:Field>
```

### Error Message

```twig
<twig:Field data-invalid="true" class="max-w-xs">
    <twig:Field:Label for="in-error">Email</twig:Field:Label>
    <twig:Input id="in-error" type="email" value="not-an-email" aria-invalid="true" />
    <twig:Field:Error>Please enter a valid email address.</twig:Field:Error>
</twig:Field>
```

### Input Types

Password, phone, URL, number, date, time, color and range.

```twig
<div class="grid max-w-xs gap-4">
    <twig:Input type="password" placeholder="Password" />
    <twig:Input type="tel" placeholder="+1 (555) 000-0000" />
    <twig:Input type="url" placeholder="https://example.com" />
    <twig:Input type="number" placeholder="0" />
    <twig:Input type="date" />
    <twig:Input type="time" />
    <twig:Input type="color" value="#3b82f6" class="h-10 w-20 p-1" />
    <twig:Input type="range" min="0" max="100" value="40" class="h-auto border-0 bg-transparent p-0 shadow-none" />
</div>
```

### Required Indicator

```twig
<twig:Field class="max-w-xs">
    <twig:Field:Label for="in-company">Company <span class="text-destructive" aria-hidden="true">*</span></twig:Field:Label>
    <twig:Input id="in-company" required />
</twig:Field>
```

### Optional Badge

```twig
<twig:Field class="max-w-xs">
    <div class="flex items-center justify-between">
        <twig:Field:Label for="in-middle">Middle name</twig:Field:Label>
        <twig:Badge variant="outline">Optional</twig:Badge>
    </div>
    <twig:Input id="in-middle" />
</twig:Field>
```

### Label Badge

```twig
<twig:Field class="max-w-xs">
    <twig:Field:Label for="in-key">API key <twig:Badge>New</twig:Badge></twig:Field:Label>
    <twig:Input id="in-key" />
</twig:Field>
```

### Horizontal

```twig
<twig:Field orientation="horizontal" class="max-w-sm">
    <twig:Field:Label for="in-name" class="w-20">Name</twig:Field:Label>
    <twig:Input id="in-name" placeholder="Evil Rabbit" />
</twig:Field>
```

### Contact Form

```twig
<twig:Card class="max-w-md">
    <twig:Card:Content>
        <twig:Field:Group>
            <div class="grid grid-cols-2 gap-4">
                <twig:Field><twig:Field:Label for="cf-phone">Phone</twig:Field:Label><twig:Input id="cf-phone" type="tel" placeholder="+1 555 0100" /></twig:Field>
                <twig:Field><twig:Field:Label for="cf-country">Country</twig:Field:Label><twig:Input id="cf-country" placeholder="United States" /></twig:Field>
            </div>
            <twig:Field><twig:Field:Label for="cf-address">Address</twig:Field:Label><twig:Input id="cf-address" placeholder="123 Main St" /></twig:Field>
            <twig:Field orientation="horizontal" class="justify-end">
                <twig:Button variant="outline" type="button">Cancel</twig:Button>
                <twig:Button type="submit">Submit</twig:Button>
            </twig:Field>
        </twig:Field:Group>
    </twig:Card:Content>
</twig:Card>
```

### Multiple Errors

```twig
<twig:Field data-invalid="true" class="max-w-xs">
    <twig:Field:Label for="in-code">Security code</twig:Field:Label>
    <twig:Input id="in-code" value="12" aria-invalid="true" />
    <ul class="flex flex-col gap-1 text-sm text-destructive">
        {% for e in ['Must be 6 digits', 'Must not start with 0', 'Must not repeat the same digit'] %}
            <li class="flex items-center gap-1.5"><twig:ux:icon name="lucide:circle-alert" class="size-3.5" /> {{ e }}</li>
        {% endfor %}
    </ul>
</twig:Field>
```

### Custom Focus Ring

```twig
<twig:Input placeholder="Focus me" class="max-w-xs focus-visible:border-emerald-500 focus-visible:ring-emerald-500/30" />
```

### Subtle Background

```twig
<twig:Input placeholder="Muted background" class="max-w-xs border-transparent bg-muted shadow-none hover:bg-muted focus-visible:bg-muted dark:bg-muted" />
```

### Bottom Border

```twig
<twig:Input placeholder="Underline style" class="max-w-xs rounded-none border-0 border-b-2 bg-transparent px-0 shadow-none focus-visible:border-primary focus-visible:ring-0 dark:bg-transparent" />
```

### Pill Shape

```twig
<twig:Input type="search" placeholder="Search..." class="max-w-xs rounded-full px-4" />
```

### Borderless

```twig
<twig:Input placeholder="Borderless" class="max-w-xs border-0 bg-transparent px-0 shadow-none focus-visible:ring-0 dark:bg-transparent" />
```

### Character Counter

```twig
<twig:Field class="max-w-sm">
    <div class="flex items-center justify-between">
        <twig:Field:Label for="in-desc">Project description</twig:Field:Label>
        <span class="text-xs text-muted-foreground">0 / 50</span>
    </div>
    <twig:Input id="in-desc" maxlength="50" />
</twig:Field>
```

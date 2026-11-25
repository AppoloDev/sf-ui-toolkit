# Input

## Examples

### Basic

```twig
<twig:Input placeholder="Type here" class="max-w-xs" />
```

### With Label and Description

```twig
<twig:Field class="max-w-xs">
    <twig:Field:Label for="in-username">
        Username
    </twig:Field:Label>
    <twig:Input id="in-username" placeholder="shadcn" />
    <twig:Field:Description>
        This is your public display name.
    </twig:Field:Description>
</twig:Field>
```

### Error Message

```twig
<twig:Field data-invalid="true" class="max-w-xs">
    <twig:Field:Label for="in-error">
        Email
    </twig:Field:Label>
    <twig:Input id="in-error" type="email" value="not-an-email" aria-invalid="true" />
    <twig:Field:Error>
        Please enter a valid email address.
    </twig:Field:Error>
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
    <twig:Field:Label for="in-company">
        Company
        <span class="text-destructive" aria-hidden="true">
            *
        </span>
    </twig:Field:Label>
    <twig:Input id="in-company" required />
</twig:Field>
```

### Optional Badge

```twig
<twig:Field class="max-w-xs">
    <div class="flex items-center justify-between">
        <twig:Field:Label for="in-middle">
            Middle name
        </twig:Field:Label>
        <twig:Badge variant="outline">
            Optional
        </twig:Badge>
    </div>
    <twig:Input id="in-middle" />
</twig:Field>
```

### Label Badge

```twig
<twig:Field class="max-w-xs">
    <twig:Field:Label for="in-key">
        API key
        <twig:Badge>
            New
        </twig:Badge>
    </twig:Field:Label>
    <twig:Input id="in-key" />
</twig:Field>
```

### Horizontal

```twig
<twig:Field orientation="horizontal" class="max-w-sm">
    <twig:Field:Label for="in-name" class="w-20">
        Name
    </twig:Field:Label>
    <twig:Input id="in-name" placeholder="Evil Rabbit" />
</twig:Field>
```

### Contact Form

```twig
<twig:Card class="max-w-md">
    <twig:Card:Content>
        <twig:Field:Group>
            <div class="grid grid-cols-2 gap-4">
                <twig:Field>
                    <twig:Field:Label for="cf-phone">
                        Phone
                    </twig:Field:Label>
                    <twig:Input id="cf-phone" type="tel" placeholder="+1 555 0100" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="cf-country">
                        Country
                    </twig:Field:Label>
                    <twig:Input id="cf-country" placeholder="United States" />
                </twig:Field>
            </div>
            <twig:Field>
                <twig:Field:Label for="cf-address">
                    Address
                </twig:Field:Label>
                <twig:Input id="cf-address" placeholder="123 Main St" />
            </twig:Field>
            <twig:Field orientation="horizontal" class="justify-end">
                <twig:Button variant="outline" type="button">
                    Cancel
                </twig:Button>
                <twig:Button type="submit">
                    Submit
                </twig:Button>
            </twig:Field>
        </twig:Field:Group>
    </twig:Card:Content>
</twig:Card>
```

### Multiple Errors

```twig
<twig:Field data-invalid="true" class="max-w-xs">
    <twig:Field:Label for="in-code">
        Security code
    </twig:Field:Label>
    <twig:Input id="in-code" value="12" aria-invalid="true" />
    <ul class="flex flex-col gap-1 text-sm text-destructive">
        <li class="flex items-center gap-1.5">
            <twig:ux:icon name="lucide:circle-alert" class="size-3.5" />
            Must be 6 digits
        </li>
        <li class="flex items-center gap-1.5">
            <twig:ux:icon name="lucide:circle-alert" class="size-3.5" />
            Must not start with 0
        </li>
        <li class="flex items-center gap-1.5">
            <twig:ux:icon name="lucide:circle-alert" class="size-3.5" />
            Must not repeat the same digit
        </li>
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
        <twig:Field:Label for="in-desc">
            Project description
        </twig:Field:Label>
        <span class="text-xs text-muted-foreground">
            0 / 50
        </span>
    </div>
    <twig:Input id="in-desc" maxlength="50" />
</twig:Field>
```

### Success State

```twig
<twig:Field class="max-w-xs">
    <twig:Field:Label for="in-success">
        Username
    </twig:Field:Label>
    <twig:InputGroup class="border-green-600 has-[[data-slot=input-group-control]:focus-visible]:border-green-600 has-[[data-slot=input-group-control]:focus-visible]:ring-green-600/30">
        <twig:InputGroup:Input id="in-success" value="shadcn" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:ux:icon name="lucide:circle-check" class="text-green-600" />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
    <twig:Field:Description class="text-green-700 dark:text-green-500">
        This username is available.
    </twig:Field:Description>
</twig:Field>
```

### Warning State

```twig
<twig:Field class="max-w-xs">
    <twig:Field:Label for="in-warning">
        Password
    </twig:Field:Label>
    <twig:InputGroup class="border-amber-500 has-[[data-slot=input-group-control]:focus-visible]:border-amber-500 has-[[data-slot=input-group-control]:focus-visible]:ring-amber-500/30">
        <twig:InputGroup:Input id="in-warning" type="password" value="password1" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:ux:icon name="lucide:triangle-alert" class="text-amber-500" />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
    <twig:Field:Description class="text-amber-700 dark:text-amber-500">
        This password is easy to guess.
    </twig:Field:Description>
</twig:Field>
```

### Live Validation

The browser validates while typing, once the field was touched (`:user-invalid`): no JavaScript.

```twig
<twig:Field class="max-w-xs">
    <twig:Field:Label for="in-live">
        Username
    </twig:Field:Label>
    <twig:Input id="in-live" required minlength="3" pattern="[a-z0-9_]+" placeholder="lowercase letters, digits, _" class="peer user-invalid:border-destructive user-invalid:ring-3 user-invalid:ring-destructive/20" />
    <twig:Field:Description class="hidden peer-user-invalid:block text-destructive">
        At least 3 characters: lowercase letters, digits or underscore.
    </twig:Field:Description>
</twig:Field>
```

### Inline Label

```twig
<twig:InputGroup class="max-w-xs">
    <twig:InputGroup:Addon>
        <twig:Field:Label for="in-inline">
            Website
        </twig:Field:Label>
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input id="in-inline" type="url" placeholder="https://example.com" />
</twig:InputGroup>
```

### Sizes

```twig
<div class="grid max-w-xs gap-4">
    <twig:Input placeholder="Small" class="h-7 text-xs" />
    <twig:Input placeholder="Default" />
    <twig:Input placeholder="Large" class="h-10 text-base" />
    <twig:Input placeholder="Extra large" class="h-12 px-3.5 text-lg" />
</div>
```

### Search

```twig
<twig:InputGroup class="max-w-xs">
    <twig:InputGroup:Addon>
        <twig:ux:icon name="lucide:search" />
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input type="search" placeholder="Search..." />
</twig:InputGroup>
```

### Loading State

```twig
<twig:InputGroup class="max-w-xs">
    <twig:InputGroup:Input value="symfony/ux-toolkit" aria-busy="true" readonly />
    <twig:InputGroup:Addon align="inline-end">
        <twig:Spinner />
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Clear Button

Needs the `clearable` recipe.

```twig
<twig:Clearable>
    <twig:InputGroup class="max-w-xs">
        <twig:InputGroup:Input placeholder="Type, then clear" value="Hello" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:Clearable:Button />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</twig:Clearable>
```

### Floating Label

Needs the `float-label` recipe.

```twig
<div class="grid max-w-xs gap-6">
    <twig:FloatLabel label="Username" fieldId="in-float-over">
        <twig:Input id="in-float-over" placeholder=" " />
    </twig:FloatLabel>
    <twig:FloatLabel label="Username" fieldId="in-float-in" variant="in">
        <twig:Input id="in-float-in" placeholder=" " />
    </twig:FloatLabel>
    <twig:FloatLabel label="Username" fieldId="in-float-on" variant="on">
        <twig:Input id="in-float-on" placeholder=" " />
    </twig:FloatLabel>
    <twig:FloatLabel label="Username" fieldId="in-float-ifta" variant="ifta">
        <twig:Input id="in-float-ifta" placeholder=" " />
    </twig:FloatLabel>
</div>
```

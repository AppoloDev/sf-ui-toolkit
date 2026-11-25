# Separator

## Examples

### Grouped Menu Items

```twig
<div class="flex h-12 items-center gap-4 text-sm">
    <div class="flex flex-col">
        <span class="font-medium">
            Dashboard
        </span>
        <span class="text-xs text-muted-foreground">
            Overview
        </span>
    </div>
    <twig:Separator orientation="vertical" class="h-8" />
    <div class="flex flex-col">
        <span class="font-medium">
            Projects
        </span>
        <span class="text-xs text-muted-foreground">
            All projects
        </span>
    </div>
    <twig:Separator orientation="vertical" class="h-8" />
    <div class="flex flex-col">
        <span class="font-medium">
            Team
        </span>
        <span class="text-xs text-muted-foreground">
            Members
        </span>
    </div>
</div>
```

### List Rows

```twig
<div class="w-full max-w-sm text-sm">
    <div class="flex justify-between">
        <span>
            Plan
        </span>
        <span class="text-muted-foreground">
            Pro
        </span>
    </div>
    <twig:Separator class="my-2" />
    <div class="flex justify-between">
        <span>
            Seats
        </span>
        <span class="text-muted-foreground">
            12
        </span>
    </div>
    <twig:Separator class="my-2" />
    <div class="flex justify-between">
        <span>
            Renewal
        </span>
        <span class="text-muted-foreground">
            Dec 12, 2026
        </span>
    </div>
</div>
```

### Centered Label

```twig
<div class="relative w-full max-w-sm">
    <twig:Separator />
    <span class="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
        or continue with
    </span>
</div>
```

### Order Summary

```twig
<div class="w-full max-w-sm text-sm">
    <h3 class="font-medium">
        Order summary
    </h3>
    <twig:Separator class="my-3" />
    <div class="grid gap-2">
        <div class="flex justify-between">
            <span class="text-muted-foreground">
                Subtotal
            </span>
            <span>
                $120.00
            </span>
        </div>
        <div class="flex justify-between">
            <span class="text-muted-foreground">
                Discount
            </span>
            <span>
                -$12.00
            </span>
        </div>
        <div class="flex justify-between">
            <span class="text-muted-foreground">
                Tax
            </span>
            <span>
                $8.64
            </span>
        </div>
    </div>
    <twig:Separator class="my-3" />
    <div class="flex justify-between font-medium">
        <span>
            Total
        </span>
        <span>
            $116.64
        </span>
    </div>
</div>
```

### Horizontal

```twig
<div class="grid w-64 gap-2">
    <p class="text-sm font-medium">
        Account
    </p>
    <twig:Separator />
    <p class="text-sm text-muted-foreground">
        Manage your profile and preferences.
    </p>
</div>
```

### Vertical

```twig
<div class="flex h-5 items-center gap-3 text-sm">
    <span>
        Docs
    </span>
    <twig:Separator orientation="vertical" />
    <span>
        Blog
    </span>
    <twig:Separator orientation="vertical" />
    <span>
        Source
    </span>
</div>
```

### In A Navigation

```twig
<nav class="flex items-center gap-3 text-sm">
    <a href="#" class="font-medium">
        Home
    </a>
    <twig:Separator orientation="vertical" class="h-4" />
    <a href="#" class="text-muted-foreground hover:text-foreground">
        Products
    </a>
    <twig:Separator orientation="vertical" class="h-4" />
    <a href="#" class="text-muted-foreground hover:text-foreground">
        Pricing
    </a>
    <twig:Separator orientation="vertical" class="h-4" />
    <a href="#" class="text-muted-foreground hover:text-foreground">
        Contact
    </a>
</nav>
```

### Section Divider

```twig
<div class="grid w-full max-w-md gap-6">
    <section class="grid gap-1">
        <h4 class="font-medium">
            Overview
        </h4>
        <p class="text-sm text-muted-foreground">
            A summary of the project.
        </p>
    </section>
    <twig:Separator />
    <section class="grid gap-1">
        <h4 class="font-medium">
            Details
        </h4>
        <p class="text-sm text-muted-foreground">
            Scope, timeline and owners.
        </p>
    </section>
</div>
```

### Plain Line

```twig
<twig:Separator class="w-64" />
```

### Tight Spacing

```twig
<div class="w-64 text-sm">
    <p>
        First block
    </p>
    <twig:Separator class="my-1" />
    <p>
        Second block
    </p>
</div>
```

### Default Spacing

```twig
<div class="w-64 text-sm">
    <p>
        First block
    </p>
    <twig:Separator class="my-3" />
    <p>
        Second block
    </p>
</div>
```

### Wide Spacing

```twig
<div class="w-64 text-sm">
    <p>
        First block
    </p>
    <twig:Separator class="my-8" />
    <p>
        Second block
    </p>
</div>
```

### With Margins

```twig
<div class="w-64 rounded-lg border p-4 text-sm">
    <p>
        First block
    </p>
    <twig:Separator class="-mx-4 my-4 w-auto" />
    <p>
        Second block
    </p>
</div>
```

### Inset

```twig
<div class="w-72 text-sm">
    <p class="px-4 py-2">
        Inbox
    </p>
    <twig:Separator class="ms-4 w-auto" />
    <p class="px-4 py-2">
        Drafts
    </p>
    <twig:Separator class="ms-4 w-auto" />
    <p class="px-4 py-2">
        Sent
    </p>
</div>
```

### Thick

```twig
<twig:Separator class="w-64 data-[orientation=horizontal]:h-1 rounded-full" />
```

### Dashed

```twig
<div class="w-64 border-t border-dashed"></div>
```

### Dotted

```twig
<div class="w-64 border-t-2 border-dotted"></div>
```

### Gradient

```twig
<twig:Separator class="w-64 bg-gradient-to-r from-transparent via-foreground/40 to-transparent" />
```

### Double Line

```twig
<div class="grid w-64 gap-1">
    <twig:Separator />
    <twig:Separator />
</div>
```

### Dots

```twig
<div class="flex w-64 items-center justify-center gap-2 text-muted-foreground">
    <span class="size-1 rounded-full bg-current"></span>
    <span class="size-1 rounded-full bg-current"></span>
    <span class="size-1 rounded-full bg-current"></span>
</div>
```

### Text On The Left

```twig
<div class="relative w-full max-w-sm">
    <twig:Separator />
    <span class="absolute start-4 top-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
        Section
    </span>
</div>
```

### Text On The Right

```twig
<div class="relative w-full max-w-sm">
    <twig:Separator />
    <span class="absolute end-4 top-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
        Section
    </span>
</div>
```

### Text With Icon

```twig
<div class="relative w-full max-w-sm">
    <twig:Separator />
    <span class="absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 bg-background px-2 text-xs text-muted-foreground">
        <twig:ux:icon name="lucide:star" class="size-3" />
        Featured
    </span>
</div>
```

### Semantic Role

```twig
<div class="grid w-64 gap-2 text-sm">
    <span>
        Above
    </span>
    <twig:Separator :decorative="false" />
    <span>
        Below
    </span>
</div>
```

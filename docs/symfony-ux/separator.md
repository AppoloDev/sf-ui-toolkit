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

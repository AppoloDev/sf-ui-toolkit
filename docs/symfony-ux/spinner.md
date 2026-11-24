# Spinner

## Examples

### In Input Group

```twig
<twig:Field class="max-w-xs">
    <twig:Field:Label for="sp-search">
        Searching
    </twig:Field:Label>
    <twig:InputGroup>
        <twig:InputGroup:Addon>
            <twig:Spinner />
        </twig:InputGroup:Addon>
        <twig:InputGroup:Input id="sp-search" placeholder="Type to search..." />
    </twig:InputGroup>
</twig:Field>
```

### Pending Buttons

```twig
<div class="flex flex-wrap gap-2">
    <twig:Button disabled>
        <twig:Spinner />
        Saving
    </twig:Button>
    <twig:Button variant="outline" disabled>
        <twig:Spinner />
        Loading
    </twig:Button>
    <twig:Button variant="secondary" disabled>
        <twig:Spinner />
        Processing
    </twig:Button>
</div>
```

### In Badges

```twig
<div class="flex flex-wrap gap-2">
    <twig:Badge>
        <twig:Spinner class="size-3" />
        Syncing
    </twig:Badge>
    <twig:Badge variant="secondary">
        <twig:Spinner class="size-3" />
        Pending
    </twig:Badge>
    <twig:Badge variant="outline">
        <twig:Spinner class="size-3" />
        Processing
    </twig:Badge>
</div>
```

### Inline Text

```twig
<div class="flex flex-col gap-2 text-sm">
    <p class="flex items-center gap-2">
        <twig:Spinner class="size-3.5" />
        Loading data...
    </p>
    <p class="flex items-center gap-2 text-green-600">
        <twig:Spinner class="size-3.5" />
        Connected
    </p>
    <p class="flex items-center gap-2 text-amber-600">
        <twig:Spinner class="size-3.5" />
        Reconnecting...
    </p>
</div>
```

### Color Variants

```twig
<div class="flex items-center gap-4">
    <twig:Spinner class="text-blue-500" />
    <twig:Spinner class="text-green-500" />
    <twig:Spinner class="text-red-500" />
    <twig:Spinner class="text-yellow-500" />
    <twig:Spinner class="text-purple-500" />
</div>
```

### Loading Dots

```twig
<div class="flex items-center gap-1" role="status" aria-label="Loading">
    <span class="size-2 animate-bounce rounded-full bg-primary" style="animation-delay: 0ms">
    </span>
    <span class="size-2 animate-bounce rounded-full bg-primary" style="animation-delay: 150ms">
    </span>
    <span class="size-2 animate-bounce rounded-full bg-primary" style="animation-delay: 300ms">
    </span>
</div>
```

### Card Overlay

```twig
<twig:Card class="relative max-w-xs overflow-hidden">
    <twig:Card:Header>
        <twig:Card:Title>
            Monthly report
        </twig:Card:Title>
        <twig:Card:Description>
            $12,450 revenue
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="text-sm text-muted-foreground">
        Up 12% from last month.
    </twig:Card:Content>
    <div class="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
        <twig:Spinner class="size-6" />
    </div>
</twig:Card>
```

### Overlay With Caption

```twig
<twig:Card class="relative max-w-xs overflow-hidden">
    <twig:Card:Header>
        <twig:Card:Title>
            Monthly report
        </twig:Card:Title>
        <twig:Card:Description>
            $12,450 revenue
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="text-sm text-muted-foreground">
        Up 12% from last month.
    </twig:Card:Content>
    <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/60 backdrop-blur-sm">
        <twig:Spinner class="size-5" />
        <span class="text-sm">
            Refreshing data
        </span>
    </div>
</twig:Card>
```

### Full Page

```twig
<twig:Card class="max-w-xs items-center py-8 text-center">
    <twig:Spinner class="size-8 opacity-60" />
    <p class="font-medium">
        Setting up your workspace
    </p>
    <p class="text-sm text-muted-foreground">
        This usually takes a few seconds.
    </p>
</twig:Card>
```

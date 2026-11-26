# Badge

## Examples

### Dismiss Button

A removable tag.

```twig
<twig:Badge variant="outline" class="gap-0.5 pe-0.5">
    Design
    <twig:Button variant="ghost" size="icon-xs" class="size-4 hover:bg-transparent" aria-label="Remove Design">
        <twig:ux:icon name="lucide:x" class="size-3" />
    </twig:Button>
</twig:Badge>
```

### Status Dot

```twig
<twig:Badge variant="outline" class="gap-1.5">
    <span class="size-1.5 rounded-full bg-green-500">
    </span>
    Live
</twig:Badge>
```

### As Link

```twig
<twig:Badge as="a" href="#" variant="outline">
    Documentation
</twig:Badge>
```

### With Avatar

```twig
<twig:Badge variant="outline" class="h-6 gap-1.5 ps-1">
    <twig:Avatar class="size-4">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    Alex
    <twig:Button variant="ghost" size="icon-xs" class="size-4 hover:bg-transparent" aria-label="Remove Alex">
        <twig:ux:icon name="lucide:x" class="size-3" />
    </twig:Button>
</twig:Badge>
```

### With Flag

```twig
<twig:Badge variant="outline" class="gap-1.5">
    <span aria-hidden="true">
        🇺🇸
    </span>
    USA
</twig:Badge>
```

### Default Text

```twig
<twig:Badge>
    Default
</twig:Badge>
```

### Default Link

```twig
<twig:Badge as="a" href="#">
    Default link
</twig:Badge>
```

### Default Icon Left

```twig
<twig:Badge>
    <twig:ux:icon name="lucide:circle-check" />
    Default
</twig:Badge>
```

### Default Icon Right

```twig
<twig:Badge>
    Default
    <twig:ux:icon name="lucide:arrow-right" />
</twig:Badge>
```

### Default Circular Count

```twig
<twig:Badge class="size-5 justify-center rounded-full px-0 tabular-nums">
    8
</twig:Badge>
```

### Secondary Text

```twig
<twig:Badge variant="secondary">
    Secondary
</twig:Badge>
```

### Secondary Link

```twig
<twig:Badge as="a" href="#" variant="secondary">
    Secondary link
</twig:Badge>
```

### Secondary Icon Left

```twig
<twig:Badge variant="secondary">
    <twig:ux:icon name="lucide:circle-check" />
    Secondary
</twig:Badge>
```

### Secondary Icon Right

```twig
<twig:Badge variant="secondary">
    Secondary
    <twig:ux:icon name="lucide:arrow-right" />
</twig:Badge>
```

### Secondary Circular Count

```twig
<twig:Badge variant="secondary" class="size-5 justify-center rounded-full px-0 tabular-nums">
    8
</twig:Badge>
```

### Destructive Text

```twig
<twig:Badge variant="destructive">
    Destructive
</twig:Badge>
```

### Destructive Link

```twig
<twig:Badge as="a" href="#" variant="destructive">
    Destructive link
</twig:Badge>
```

### Destructive Icon Left

```twig
<twig:Badge variant="destructive">
    <twig:ux:icon name="lucide:circle-check" />
    Destructive
</twig:Badge>
```

### Destructive Icon Right

```twig
<twig:Badge variant="destructive">
    Destructive
    <twig:ux:icon name="lucide:arrow-right" />
</twig:Badge>
```

### Destructive Circular Count

```twig
<twig:Badge variant="destructive" class="size-5 justify-center rounded-full px-0 tabular-nums">
    8
</twig:Badge>
```

### Outline Text

```twig
<twig:Badge variant="outline">
    Outline
</twig:Badge>
```

### Outline Link

```twig
<twig:Badge as="a" href="#" variant="outline">
    Outline link
</twig:Badge>
```

### Outline Icon Left

```twig
<twig:Badge variant="outline">
    <twig:ux:icon name="lucide:circle-check" />
    Outline
</twig:Badge>
```

### Outline Icon Right

```twig
<twig:Badge variant="outline">
    Outline
    <twig:ux:icon name="lucide:arrow-right" />
</twig:Badge>
```

### Outline Circular Count

```twig
<twig:Badge variant="outline" class="size-5 justify-center rounded-full px-0 tabular-nums">
    8
</twig:Badge>
```

### Customer Status

```twig
<div class="flex flex-wrap gap-2">
    <twig:Badge variant="success" appearance="light">
        <twig:ux:icon name="lucide:circle-check" />
        Active
    </twig:Badge>
    <twig:Badge variant="info" appearance="light">
        <twig:ux:icon name="lucide:star" />
        Featured
    </twig:Badge>
    <twig:Badge variant="warning" appearance="light">
        <twig:ux:icon name="lucide:triangle-alert" />
        At risk
    </twig:Badge>
</div>
```

### Order Status

```twig
<div class="flex flex-wrap gap-2">
    <twig:Badge variant="success" appearance="light">
        <twig:ux:icon name="lucide:check" />
        Paid
    </twig:Badge>
    <twig:Badge variant="warning" appearance="light">
        <twig:ux:icon name="lucide:clock" />
        Pending
    </twig:Badge>
    <twig:Badge variant="destructive" appearance="light">
        <twig:ux:icon name="lucide:x" />
        Canceled
    </twig:Badge>
</div>
```

### Chip With Image

A `Badge` holding an `Avatar` is a chip with a picture.

```twig
<div class="flex flex-wrap gap-2">
    <twig:Badge variant="secondary" size="lg" class="gap-2 ps-1">
        <twig:Avatar class="size-5">
            <twig:Avatar:Fallback>AL</twig:Avatar:Fallback>
        </twig:Avatar>
        Ada Lovelace
    </twig:Badge>
    <twig:Badge variant="outline" size="lg" class="gap-2 ps-1">
        <twig:Avatar class="size-5">
            <twig:Avatar:Fallback>GH</twig:Avatar:Fallback>
        </twig:Avatar>
        Grace Hopper
    </twig:Badge>
</div>
```

### Removable Chips

A button inside the badge removes the chip.

```twig
<div id="chips" class="flex flex-wrap gap-2">
    <twig:Badge variant="secondary" size="lg" class="gap-1 pe-1">
        Symfony
        <twig:Button variant="ghost" size="icon-xs" type="button" aria-label="Remove Symfony" data-remove-chip class="size-4 rounded-full">
            <twig:ux:icon name="lucide:x" class="size-3" />
        </twig:Button>
    </twig:Badge>
    <twig:Badge variant="secondary" size="lg" class="gap-1 pe-1">
        Twig
        <twig:Button variant="ghost" size="icon-xs" type="button" aria-label="Remove Twig" data-remove-chip class="size-4 rounded-full">
            <twig:ux:icon name="lucide:x" class="size-3" />
        </twig:Button>
    </twig:Badge>
    <twig:Badge variant="secondary" size="lg" class="gap-1 pe-1">
        Stimulus
        <twig:Button variant="ghost" size="icon-xs" type="button" aria-label="Remove Stimulus" data-remove-chip class="size-4 rounded-full">
            <twig:ux:icon name="lucide:x" class="size-3" />
        </twig:Button>
    </twig:Badge>
</div>
<script>
    document.getElementById('chips').addEventListener('click', (event) => {
        event.target.closest('[data-remove-chip]')?.closest('[data-slot=badge]').remove();
    });
</script>
```

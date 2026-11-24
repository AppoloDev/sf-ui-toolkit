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

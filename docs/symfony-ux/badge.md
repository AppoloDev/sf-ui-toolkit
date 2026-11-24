# Badge

## Examples

### Sizes

```twig
<div class="flex items-center gap-2.5">
    <twig:Badge class="h-4 px-1.5 text-[10px]">Small</twig:Badge>
    <twig:Badge>Default</twig:Badge>
    <twig:Badge class="h-6 px-2.5 text-sm">Large</twig:Badge>
</div>
```

### Tinted Variants

Soft and outlined status colors built with utility classes.

```twig
<div class="flex flex-wrap items-center gap-2">
    <twig:Badge class="border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400">Success</twig:Badge>
    <twig:Badge class="border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400">Info</twig:Badge>
    <twig:Badge class="border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400">Warning</twig:Badge>
    <twig:Badge class="border-destructive/30 bg-destructive/10 text-destructive">Destructive</twig:Badge>
    <twig:Badge variant="outline" class="text-green-700 dark:text-green-400">Success</twig:Badge>
    <twig:Badge variant="outline" class="text-blue-700 dark:text-blue-400">Info</twig:Badge>
    <twig:Badge variant="outline" class="text-amber-700 dark:text-amber-400">Warning</twig:Badge>
    <twig:Badge variant="outline" class="text-destructive">Destructive</twig:Badge>
</div>
```

### Solid Colors

```twig
<div class="flex flex-wrap items-center gap-2">
    <twig:Badge class="bg-green-600 text-white">Success</twig:Badge>
    <twig:Badge class="bg-blue-600 text-white">Info</twig:Badge>
    <twig:Badge class="bg-amber-500 text-white">Warning</twig:Badge>
</div>
```

### Full Radius Counts

```twig
<div class="flex items-center gap-2.5">
    <twig:Badge class="min-w-5 justify-center rounded-full px-1.5">3</twig:Badge>
    <twig:Badge variant="secondary" class="rounded-full">New</twig:Badge>
    <twig:Badge variant="outline" class="rounded-full">New</twig:Badge>
</div>
```

### Dismiss Button

A removable tag.

```twig
<twig:Badge variant="outline" class="gap-0.5 pe-0.5">
    Design
    <twig:Button variant="ghost" size="icon-xs" class="size-4 hover:bg-transparent" aria-label="Remove Design"><twig:ux:icon name="lucide:x" class="size-3" /></twig:Button>
</twig:Badge>
```

### Status Dot

```twig
<twig:Badge variant="outline" class="gap-1.5">
    <span class="size-1.5 rounded-full bg-green-500"></span> Live
</twig:Badge>
```

### As Link

```twig
<twig:Badge as="a" href="#" variant="outline">Documentation</twig:Badge>
```

### With Avatar

```twig
<twig:Badge variant="outline" class="h-6 gap-1.5 ps-1">
    <twig:Avatar class="size-4"><twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" /><twig:Avatar:Fallback>CN</twig:Avatar:Fallback></twig:Avatar>
    Alex
    <twig:Button variant="ghost" size="icon-xs" class="size-4 hover:bg-transparent" aria-label="Remove Alex"><twig:ux:icon name="lucide:x" class="size-3" /></twig:Button>
</twig:Badge>
```

### With Flag

```twig
<twig:Badge variant="outline" class="gap-1.5"><span aria-hidden="true">🇺🇸</span> USA</twig:Badge>
```

# Aspect Ratio

## Examples

### Ratios

Common ratios from widescreen to portrait.

```twig
<div class="grid w-full max-w-2xl grid-cols-2 gap-4">
    <div class="flex flex-col gap-1">
        <twig:AspectRatio ratio="16 / 9" class="flex items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
            Widescreen 16:9
        </twig:AspectRatio>
    </div>
    <div class="flex flex-col gap-1">
        <twig:AspectRatio ratio="4 / 3" class="flex items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
            Standard 4:3
        </twig:AspectRatio>
    </div>
    <div class="flex flex-col gap-1">
        <twig:AspectRatio ratio="1 / 1" class="flex items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
            Square 1:1
        </twig:AspectRatio>
    </div>
    <div class="flex flex-col gap-1">
        <twig:AspectRatio ratio="21 / 9" class="flex items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
            Ultrawide 21:9
        </twig:AspectRatio>
    </div>
    <div class="flex flex-col gap-1">
        <twig:AspectRatio ratio="3 / 2" class="flex items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
            Classic photo 3:2
        </twig:AspectRatio>
    </div>
    <div class="flex flex-col gap-1">
        <twig:AspectRatio ratio="4 / 5" class="flex items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
            Social portrait 4:5
        </twig:AspectRatio>
    </div>
    <div class="flex flex-col gap-1">
        <twig:AspectRatio ratio="16 / 10" class="flex items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
            Monitor 16:10
        </twig:AspectRatio>
    </div>
    <div class="flex flex-col gap-1">
        <twig:AspectRatio ratio="9 / 16" class="flex items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
            Tall portrait 9:16
        </twig:AspectRatio>
    </div>
</div>
```

### Vertical Mobile

```twig
<div class="w-full max-w-xs">
    <twig:AspectRatio ratio="9 / 16" class="flex items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
        9 / 16
    </twig:AspectRatio>
</div>
```

### Panoramic

```twig
<div class="w-full max-w-xs">
    <twig:AspectRatio ratio="2 / 1" class="flex items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
        2 / 1
    </twig:AspectRatio>
</div>
```

### Image Cover

```twig
<div class="w-full max-w-sm">
    <twig:AspectRatio ratio="4 / 3" class="overflow-hidden rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600" alt="Mountain lake" class="size-full object-cover" />
    </twig:AspectRatio>
</div>
```

### Video Placeholder

```twig
<div class="w-full max-w-sm">
    <twig:AspectRatio ratio="16 / 9" class="flex items-center justify-center rounded-lg bg-black text-white">
        <twig:ux:icon name="lucide:play" class="size-8" />
    </twig:AspectRatio>
</div>
```

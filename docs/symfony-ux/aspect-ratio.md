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

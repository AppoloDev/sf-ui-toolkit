# Toggle

## Examples

### Basic

```twig
<div class="flex items-center gap-1">
    <twig:Toggle pressed aria-label="Bold">
        <twig:ux:icon name="lucide:bold" />
    </twig:Toggle>
    <twig:Toggle aria-label="Italic">
        <twig:ux:icon name="lucide:italic" />
    </twig:Toggle>
    <twig:Toggle aria-label="Underline">
        <twig:ux:icon name="lucide:underline" />
    </twig:Toggle>
</div>
```

### Text Sizes

```twig
<div class="flex items-center gap-2">
    <twig:Toggle variant="outline" size="sm">
        Small
    </twig:Toggle>
    <twig:Toggle variant="outline">
        Default
    </twig:Toggle>
    <twig:Toggle variant="outline" size="lg">
        Large
    </twig:Toggle>
</div>
```

### Icon and Label

```twig
<twig:Toggle variant="outline">
    <twig:ux:icon name="lucide:bookmark" />
    Bookmark
</twig:Toggle>
```

### Icon Sizes

```twig
<div class="flex items-center gap-2">
    <twig:Toggle size="sm" aria-label="Star small">
        <twig:ux:icon name="lucide:star" />
    </twig:Toggle>
    <twig:Toggle aria-label="Star">
        <twig:ux:icon name="lucide:star" />
    </twig:Toggle>
    <twig:Toggle size="lg" aria-label="Star large">
        <twig:ux:icon name="lucide:star" />
    </twig:Toggle>
</div>
```

### Icon Swap

An icon that fills in while pressed.

```twig
<twig:Toggle aria-label="Like" class="data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 aria-pressed:*:[svg]:fill-red-500 aria-pressed:*:[svg]:stroke-red-500">
    <twig:ux:icon name="lucide:heart" />
</twig:Toggle>
```

### Disabled Icons

```twig
<div class="flex items-center gap-1">
    <twig:Toggle aria-label="Bold">
        <twig:ux:icon name="lucide:bold" />
    </twig:Toggle>
    <twig:Toggle aria-label="Italic">
        <twig:ux:icon name="lucide:italic" />
    </twig:Toggle>
    <twig:Toggle aria-label="Underline" disabled>
        <twig:ux:icon name="lucide:underline" />
    </twig:Toggle>
    <twig:Toggle aria-label="Strikethrough" disabled>
        <twig:ux:icon name="lucide:strikethrough" />
    </twig:Toggle>
</div>
```

### Tooltip

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:Tooltip id="toggle-pin">
        <twig:Tooltip:Trigger>
            <twig:Button variant="outline" size="icon" aria-label="Pin to sidebar" {{ ...tooltip_trigger_attrs }}>
                <twig:Toggle variant="outline" class="pointer-events-none size-full border-0" tabindex="-1" aria-hidden="true">
                    <twig:ux:icon name="lucide:pin" />
                </twig:Toggle>
            </twig:Button>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content>
            Pin to sidebar
        </twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

### Button Comparison

```twig
<div class="flex items-center gap-2">
    <twig:Button variant="outline" size="sm">
        Button
    </twig:Button>
    <twig:Toggle variant="outline" size="sm">
        Toggle
    </twig:Toggle>
</div>
```

### Count Badge

```twig
<twig:Toggle variant="outline" aria-label="Like">
    <twig:ux:icon name="lucide:heart" />
    Like
    <twig:Badge variant="secondary" class="ms-1">
        24
    </twig:Badge>
</twig:Toggle>
```

### Disabled Text

```twig
<div class="flex gap-2">
    <twig:Toggle variant="outline" disabled>
        Disabled
    </twig:Toggle>
    <twig:Toggle variant="outline" pressed disabled>
        Pressed disabled
    </twig:Toggle>
</div>
```

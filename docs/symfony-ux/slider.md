# Slider

## Examples

### Disabled

```twig
<twig:Slider name="locked" value="50" disabled class="max-w-xs" />
```

### Multiple Thumbs

```twig
<twig:Slider name="thumbs" value="10,40,80" step="10" class="max-w-xs" />
```

### Vertical

```twig
<div class="flex h-40 gap-8">
    <twig:Slider name="v1" value="50" orientation="vertical" />
    <twig:Slider name="v2" value="20,70" step="5" orientation="vertical" />
</div>
```

### Range

```twig
<twig:Slider name="range" value="25,75" step="5" class="max-w-xs" />
```

### Reference Labels

```twig
<div class="max-w-xs">
    <twig:Slider name="storage" min="5" max="35" value="20" aria-label="Storage" />
    <div class="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>
            5 GB
        </span>
        <span>
            20 GB
        </span>
        <span>
            35 GB
        </span>
    </div>
</div>
```

### Tick Marks

```twig
<div class="max-w-xs">
    <twig:Slider name="months" min="0" max="12" value="6" aria-label="Duration in months" />
    <div class="mt-2 flex justify-between text-xs text-muted-foreground">
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
            <span class="mt-1">
                0
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
            <span class="mt-1">
                2
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
            <span class="mt-1">
                4
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
            <span class="mt-1">
                6
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
            <span class="mt-1">
                8
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
            <span class="mt-1">
                10
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
        </span>
        <span class="flex w-0 flex-col items-center">
            <span class="h-1.5 w-px bg-border">
            </span>
            <span class="mt-1">
                12
            </span>
        </span>
    </div>
</div>
```

### Color Temperature

```twig
<div class="max-w-xs">
    <div class="mb-3 h-2 rounded-full" style="background: linear-gradient(to right, #ffb36b, #fff, #9ec5ff)">
    </div>
    <twig:Slider name="kelvin" min="2700" max="6500" step="100" value="4500" aria-label="Color temperature" />
    <div class="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>
            Warm 2700K
        </span>
        <span>
            Cool 6500K
        </span>
    </div>
</div>
```

### Controlled Value

The official `slider-display` controller writes the current values of the slider into its `output` target as the thumbs move; `separator` joins the values of a range.

```twig
<div class="grid w-full max-w-sm gap-4" data-controller="slider-display" data-slider-display-separator-value=" – ">
    <div class="flex items-center justify-between gap-2">
        <twig:Label for="slider-controlled-range" class="text-sm font-medium">
            Controlled Range
        </twig:Label>
        <span class="text-xs font-semibold text-secondary-foreground" data-slider-display-target="output">
            0.3 – 0.7
        </span>
    </div>
    <twig:Slider id="slider-controlled-range" name="range" min="0" max="1" step="0.1" value="0.3,0.7" data-action="input->slider-display#update" />
</div>
```

### Value Display

Needs the `value-sync` recipe, like the examples below that show or change a value.

```twig
<twig:ValueSync class="grid w-full max-w-sm gap-3">
    <div class="flex items-center justify-between">
        <twig:Label for="sl-display" class="text-sm font-medium">
            Opacity
        </twig:Label>
        <twig:ValueSync:Output class="text-sm tabular-nums text-muted-foreground">
            40
        </twig:ValueSync:Output>
    </div>
    <twig:Slider id="sl-display" name="opacity" value="40" />
</twig:ValueSync>
```

### Percentage

```twig
<twig:ValueSync class="grid w-full max-w-sm gap-3">
    <div class="flex items-center justify-between">
        <twig:Label for="sl-percent" class="text-sm font-medium">
            Progress
        </twig:Label>
        <twig:ValueSync:Output format="{percent}%" class="text-sm tabular-nums text-muted-foreground">
            25%
        </twig:ValueSync:Output>
    </div>
    <twig:Slider id="sl-percent" name="progress" value="25" />
</twig:ValueSync>
```

### Price

```twig
<twig:ValueSync class="grid w-full max-w-sm gap-3">
    <div class="flex items-center justify-between">
        <twig:Label for="sl-price" class="text-sm font-medium">
            Maximum price
        </twig:Label>
        <twig:ValueSync:Output format="${value}" class="text-sm font-medium tabular-nums">
            $250
        </twig:ValueSync:Output>
    </div>
    <twig:Slider id="sl-price" name="price" value="250" min="0" max="1000" step="10" />
</twig:ValueSync>
```

### Temperature

```twig
<twig:ValueSync class="grid w-full max-w-sm gap-3">
    <div class="flex items-center justify-between">
        <twig:Label for="sl-temp" class="flex items-center gap-1.5 text-sm font-medium">
            <twig:ux:icon name="lucide:thermometer" class="size-4" />
            Thermostat
        </twig:Label>
        <twig:ValueSync:Output format="{value}°C" class="text-sm tabular-nums text-muted-foreground">
            21°C
        </twig:ValueSync:Output>
    </div>
    <twig:Slider id="sl-temp" name="temperature" value="21" min="10" max="30" step="0.5" />
</twig:ValueSync>
```

### Volume

```twig
<twig:ValueSync class="flex w-full max-w-sm items-center gap-3">
    <twig:ux:icon name="lucide:volume-1" class="size-4 shrink-0 text-muted-foreground" />
    <twig:Slider name="volume" value="60" aria-label="Volume" />
    <twig:ux:icon name="lucide:volume-2" class="size-4 shrink-0 text-muted-foreground" />
    <twig:ValueSync:Output format="{value}%" class="w-10 text-end text-sm tabular-nums text-muted-foreground">
        60%
    </twig:ValueSync:Output>
</twig:ValueSync>
```

### Speed

```twig
<twig:ValueSync class="grid w-full max-w-sm gap-3">
    <div class="flex items-center justify-between">
        <twig:Label for="sl-speed" class="text-sm font-medium">
            Playback speed
        </twig:Label>
        <twig:ValueSync:Output format="{value}x" decimals="2" class="text-sm tabular-nums text-muted-foreground">
            1.00x
        </twig:ValueSync:Output>
    </div>
    <twig:Slider id="sl-speed" name="speed" value="1" min="0.5" max="2" step="0.25" />
</twig:ValueSync>
```

### Min and Max Labels

```twig
<div class="grid w-full max-w-sm gap-2">
    <twig:Slider name="range-labels" value="50" aria-label="Range" />
    <div class="flex justify-between text-xs text-muted-foreground">
        <span>
            0
        </span>
        <span>
            100
        </span>
    </div>
</div>
```

### Label

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="sl-label">
        Font size
    </twig:Field:Label>
    <twig:Slider id="sl-label" name="font" value="16" min="8" max="32" />
    <twig:Field:Description>
        Between 8 and 32 pixels.
    </twig:Field:Description>
</twig:Field>
```

### Vertical With Labels

```twig
<div class="flex h-48 items-stretch gap-3">
    <div class="flex flex-col justify-between py-0.5 text-xs text-muted-foreground">
        <span>
            High
        </span>
        <span>
            Mid
        </span>
        <span>
            Low
        </span>
    </div>
    <twig:Slider name="level" value="50" orientation="vertical" class="h-full" aria-label="Level" />
</div>
```

### Minimal

```twig
<twig:Slider name="minimal" value="40" aria-label="Minimal" class="max-w-xs [&_[data-slot=slider-thumb]]:size-2.5 [&_[data-slot=slider-thumb]]:border-0 [&_[data-slot=slider-thumb]]:bg-primary [&_[data-slot=slider-track]]:h-0.5" />
```

### Thick

```twig
<twig:Slider name="thick" value="60" aria-label="Thick" class="h-6 max-w-xs [&_[data-slot=slider-track]]:h-3 [&_[data-slot=slider-thumb]]:size-5" />
```

### Track Heights

```twig
<div class="grid max-w-xs gap-6">
    <twig:Slider name="h1" value="30" aria-label="Thin" class="[&_[data-slot=slider-track]]:h-px" />
    <twig:Slider name="h2" value="50" aria-label="Default" />
    <twig:Slider name="h3" value="70" aria-label="Tall" class="h-5 [&_[data-slot=slider-track]]:h-2.5" />
    <twig:Slider name="h4" value="90" aria-label="Extra tall" class="h-7 [&_[data-slot=slider-track]]:h-4" />
</div>
```

### Colored

```twig
<div class="grid max-w-xs gap-6">
    <twig:Slider name="c1" value="70" aria-label="Success" class="[&_[data-slot=slider-range]]:bg-emerald-500 [&_[data-slot=slider-thumb]]:border-emerald-500" />
    <twig:Slider name="c2" value="50" aria-label="Warning" class="[&_[data-slot=slider-range]]:bg-amber-500 [&_[data-slot=slider-thumb]]:border-amber-500" />
    <twig:Slider name="c3" value="30" aria-label="Danger" class="[&_[data-slot=slider-range]]:bg-red-500 [&_[data-slot=slider-thumb]]:border-red-500" />
</div>
```

### Gradient Track

```twig
<twig:Slider name="gradient" value="50" aria-label="Hue" class="max-w-xs [&_[data-slot=slider-track]]:h-2 [&_[data-slot=slider-track]]:bg-linear-to-r [&_[data-slot=slider-track]]:from-sky-400 [&_[data-slot=slider-track]]:via-violet-500 [&_[data-slot=slider-track]]:to-rose-500 [&_[data-slot=slider-range]]:bg-transparent" />
```

### Value Tooltip

```twig
<twig:ValueSync class="grid w-full max-w-sm gap-2">
    <div class="relative pt-7">
        <twig:ValueSync:Tooltip format="{value}%">
            50%
        </twig:ValueSync:Tooltip>
        <twig:Slider name="tooltip" value="50" aria-label="Amount" />
    </div>
</twig:ValueSync>
```

### Plus and Minus Buttons

The buttons call `value-sync#stepBy` with a `delta` parameter; the value stays between the bounds.

```twig
<twig:ValueSync class="flex w-full max-w-sm items-center gap-3">
    <twig:Button variant="outline" size="icon-sm" type="button" aria-label="Decrease" data-action="value-sync#stepBy" data-value-sync-delta-param="-5">
        <twig:ux:icon name="lucide:minus" />
    </twig:Button>
    <twig:Slider name="steps" value="50" step="5" aria-label="Amount" />
    <twig:Button variant="outline" size="icon-sm" type="button" aria-label="Increase" data-action="value-sync#stepBy" data-value-sync-delta-param="5">
        <twig:ux:icon name="lucide:plus" />
    </twig:Button>
    <twig:ValueSync:Output class="w-8 text-end text-sm tabular-nums">
        50
    </twig:ValueSync:Output>
</twig:ValueSync>
```

### Reset

`value-sync#reset` puts the slider back to the value it had when the page loaded.

```twig
<twig:ValueSync class="grid w-full max-w-sm gap-3">
    <div class="flex items-center justify-between">
        <twig:Label class="text-sm font-medium">
            Contrast
        </twig:Label>
        <div class="flex items-center gap-2">
            <twig:ValueSync:Output class="text-sm tabular-nums text-muted-foreground">
                30
            </twig:ValueSync:Output>
            <twig:Button variant="ghost" size="xs" type="button" data-action="value-sync#reset">
                <twig:ux:icon name="lucide:rotate-ccw" />
                Reset
            </twig:Button>
        </div>
    </div>
    <twig:Slider name="contrast" value="30" aria-label="Contrast" />
</twig:ValueSync>
```

### Presets

`value-sync#set` jumps to the `value` parameter of the button.

```twig
<twig:ValueSync class="grid w-full max-w-sm gap-3">
    <div class="flex items-center justify-between">
        <twig:Label class="text-sm font-medium">
            Zoom
        </twig:Label>
        <twig:ValueSync:Output format="{value}%" class="text-sm tabular-nums text-muted-foreground">
            100%
        </twig:ValueSync:Output>
    </div>
    <twig:Slider name="zoom" value="100" min="25" max="200" step="25" aria-label="Zoom" />
    <div class="flex gap-2">
        <twig:Button variant="outline" size="sm" type="button" data-action="value-sync#set" data-value-sync-value-param="50">
            50%
        </twig:Button>
        <twig:Button variant="outline" size="sm" type="button" data-action="value-sync#set" data-value-sync-value-param="100">
            100%
        </twig:Button>
        <twig:Button variant="outline" size="sm" type="button" data-action="value-sync#set" data-value-sync-value-param="200">
            200%
        </twig:Button>
    </div>
</twig:ValueSync>
```

### Linked Field

```twig
<twig:ValueSync class="grid w-full max-w-sm gap-4">
    <div class="flex items-center justify-between">
        <twig:Label for="sl-linked" class="text-sm font-medium">
            Quantity
        </twig:Label>
        <twig:ValueSync:Field id="sl-linked" min="0" max="100" step="1" value="20" class="h-8 w-16! text-center text-sm tabular-nums" />
    </div>
    <twig:Slider name="quantity" value="20" aria-label="Quantity" />
</twig:ValueSync>
```

### Live Preview

The group exposes `--value` and `--percent` as CSS custom properties: the preview follows with plain CSS.

```twig
<twig:ValueSync class="grid w-full max-w-sm gap-4">
    <div class="flex items-center justify-between">
        <twig:Label class="text-sm font-medium">
            Brightness
        </twig:Label>
        <twig:ValueSync:Output format="{value}%" class="text-sm tabular-nums text-muted-foreground">
            100%
        </twig:ValueSync:Output>
    </div>
    <div class="grid h-24 place-items-center rounded-lg bg-linear-to-br from-amber-300 to-rose-400 text-lg font-semibold text-white" style="filter: brightness(calc(var(--value, 100) / 100));">
        Preview
    </div>
    <twig:Slider name="brightness" value="100" min="20" max="150" aria-label="Brightness" />
</twig:ValueSync>
```

### Font Size Preview

```twig
<twig:ValueSync class="grid w-full max-w-sm gap-4">
    <div class="flex items-center justify-between">
        <twig:Label class="text-sm font-medium">
            Font size
        </twig:Label>
        <twig:ValueSync:Output format="{value}px" class="text-sm tabular-nums text-muted-foreground">
            16px
        </twig:ValueSync:Output>
    </div>
    <p class="h-12 leading-none font-medium" style="font-size: calc(var(--value, 16) * 1px);">
        The quick brown fox
    </p>
    <twig:Slider name="font-size" value="16" min="10" max="40" aria-label="Font size" />
</twig:ValueSync>
```

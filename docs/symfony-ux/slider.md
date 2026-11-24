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

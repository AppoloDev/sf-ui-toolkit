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
    <div class="mt-2 flex justify-between text-xs text-muted-foreground"><span>5 GB</span><span>20 GB</span><span>35 GB</span></div>
</div>
```

### Tick Marks

```twig
<div class="max-w-xs">
    <twig:Slider name="months" min="0" max="12" value="6" aria-label="Duration in months" />
    <div class="mt-2 flex justify-between text-xs text-muted-foreground">
        {% for m in 0..12 %}<span class="flex w-0 flex-col items-center"><span class="h-1.5 w-px bg-border"></span>{% if m is even %}<span class="mt-1">{{ m }}</span>{% endif %}</span>{% endfor %}
    </div>
</div>
```

### Color Temperature

```twig
<div class="max-w-xs">
    <div class="mb-3 h-2 rounded-full" style="background: linear-gradient(to right, #ffb36b, #fff, #9ec5ff)"></div>
    <twig:Slider name="kelvin" min="2700" max="6500" step="100" value="4500" aria-label="Color temperature" />
    <div class="mt-2 flex justify-between text-xs text-muted-foreground"><span>Warm 2700K</span><span>Cool 6500K</span></div>
</div>
```

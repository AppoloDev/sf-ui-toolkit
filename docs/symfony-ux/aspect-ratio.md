# Aspect Ratio

## Examples

### Ratios

Common ratios from widescreen to portrait.

```twig
<div class="grid w-full max-w-2xl grid-cols-2 gap-4">
    {% for label, ratio in {'Widescreen 16:9': '16 / 9', 'Standard 4:3': '4 / 3', 'Square 1:1': '1 / 1', 'Ultrawide 21:9': '21 / 9', 'Classic photo 3:2': '3 / 2', 'Social portrait 4:5': '4 / 5', 'Monitor 16:10': '16 / 10', 'Tall portrait 9:16': '9 / 16'} %}
        <div class="flex flex-col gap-1">
            <twig:AspectRatio ratio="{{ ratio }}" class="flex items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">{{ label }}</twig:AspectRatio>
        </div>
    {% endfor %}
</div>
```

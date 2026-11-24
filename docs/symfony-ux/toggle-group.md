# Toggle Group

## Examples

### Custom

A font weight selector built from custom toggle group items.

```twig
<twig:Field>
    <twig:Field:Label>Font Weight</twig:Field:Label>
    <twig:ToggleGroup type="single" variant="outline" spacing="2" size="lg">
        {% for weight in [
            {value: 'light', label: 'Light', class: 'font-light'},
            {value: 'normal', label: 'Normal', class: 'font-normal'},
            {value: 'medium', label: 'Medium', class: 'font-medium'},
            {value: 'bold', label: 'Bold', class: 'font-bold'},
        ] %}
            <twig:ToggleGroup:Item value="{{ weight.value }}" aria-label="{{ weight.label }}" class="flex size-16 flex-col items-center justify-center rounded-xl">
                <span class="text-2xl leading-none {{ weight.class }}">Aa</span>
                <span class="text-xs text-muted-foreground">{{ weight.label }}</span>
            </twig:ToggleGroup:Item>
        {% endfor %}
    </twig:ToggleGroup>
</twig:Field>
```

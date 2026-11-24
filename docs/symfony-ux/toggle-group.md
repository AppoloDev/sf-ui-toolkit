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

### Basic

```twig
<twig:ToggleGroup variant="default" aria-label="Text formatting">
    <twig:ToggleGroup:Item value="bold" aria-label="Bold"><twig:ux:icon name="lucide:bold" /></twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="italic" aria-label="Italic"><twig:ux:icon name="lucide:italic" /></twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="underline" aria-label="Underline"><twig:ux:icon name="lucide:underline" /></twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Sizes

```twig
<div class="grid gap-3">
    <twig:ToggleGroup type="single" variant="outline" size="sm">
        <twig:ToggleGroup:Item value="top" pressed>Top</twig:ToggleGroup:Item><twig:ToggleGroup:Item value="bottom">Bottom</twig:ToggleGroup:Item>
    </twig:ToggleGroup>
    <twig:ToggleGroup type="single" variant="outline">
        <twig:ToggleGroup:Item value="top" pressed>Top</twig:ToggleGroup:Item><twig:ToggleGroup:Item value="bottom">Bottom</twig:ToggleGroup:Item>
    </twig:ToggleGroup>
</div>
```

### Custom Spacing

```twig
<twig:ToggleGroup type="single" variant="outline" spacing="2">
    {% for v in ['Day', 'Week', 'Month'] %}<twig:ToggleGroup:Item value="{{ v|lower }}" pressed="{{ v == 'Week' }}">{{ v }}</twig:ToggleGroup:Item>{% endfor %}
</twig:ToggleGroup>
```

### Filter Control

```twig
<twig:ToggleGroup type="single" variant="outline" size="sm">
    {% for v in ['All', 'Active', 'Completed', 'Archived'] %}<twig:ToggleGroup:Item value="{{ v|lower }}" pressed="{{ v == 'Active' }}">{{ v }}</twig:ToggleGroup:Item>{% endfor %}
</twig:ToggleGroup>
```

### Text Alignment

```twig
<twig:ToggleGroup type="single">
    {% for a in ['left', 'center', 'right', 'justify'] %}<twig:ToggleGroup:Item value="{{ a }}" pressed="{{ a == 'left' }}" aria-label="Align {{ a }}"><twig:ux:icon name="lucide:align-{{ a }}" /></twig:ToggleGroup:Item>{% endfor %}
</twig:ToggleGroup>
```

### View Mode

```twig
<twig:ToggleGroup type="single" variant="outline">
    <twig:ToggleGroup:Item value="list" pressed aria-label="List view"><twig:ux:icon name="lucide:list" /></twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="grid" aria-label="Grid view"><twig:ux:icon name="lucide:layout-grid" /></twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="kanban" aria-label="Kanban view"><twig:ux:icon name="lucide:kanban" /></twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Vertical Settings

```twig
<twig:ToggleGroup orientation="vertical" spacing="1" class="w-40 items-stretch">
    {% for v, i in {'Wi-Fi': 'wifi', 'Bluetooth': 'bluetooth', 'Airplane Mode': 'plane', 'Location': 'map-pin'} %}
        <twig:ToggleGroup:Item value="{{ v|lower }}" class="justify-start"><twig:ux:icon name="lucide:{{ i }}" /> {{ v }}</twig:ToggleGroup:Item>
    {% endfor %}
</twig:ToggleGroup>
```

### Color Theme

```twig
<twig:ToggleGroup type="single" variant="outline">
    {% for v, i in {Light: 'sun', Dark: 'moon', System: 'monitor'} %}<twig:ToggleGroup:Item value="{{ v|lower }}" pressed="{{ v == 'Light' }}"><twig:ux:icon name="lucide:{{ i }}" /> {{ v }}</twig:ToggleGroup:Item>{% endfor %}
</twig:ToggleGroup>
```

### Font Size

```twig
<twig:ToggleGroup type="single" variant="outline" size="sm">
    {% for v in ['S', 'M', 'L', 'XL'] %}<twig:ToggleGroup:Item value="{{ v|lower }}" pressed="{{ v == 'M' }}">{{ v }}</twig:ToggleGroup:Item>{% endfor %}
</twig:ToggleGroup>
```

### Time Range

```twig
<twig:ToggleGroup type="single" variant="outline" size="sm">
    {% for v in ['1H', '6H', '24H', '7D', '30D', 'All'] %}<twig:ToggleGroup:Item value="{{ v|lower }}" pressed="{{ v == '24H' }}">{{ v }}</twig:ToggleGroup:Item>{% endfor %}
</twig:ToggleGroup>
```

### Notification Channels

```twig
<twig:ToggleGroup type="multiple" variant="outline">
    {% for v, i in {Email: 'mail', SMS: 'smartphone', Push: 'bell', Slack: 'slack'} %}<twig:ToggleGroup:Item value="{{ v|lower }}" pressed="{{ v in ['Email', 'Push'] }}"><twig:ux:icon name="lucide:{{ i }}" /> {{ v }}</twig:ToggleGroup:Item>{% endfor %}
</twig:ToggleGroup>
```

### Layout Columns

```twig
<twig:ToggleGroup type="single" variant="outline">
    {% for n in 1..4 %}<twig:ToggleGroup:Item value="{{ n }}" pressed="{{ n == 2 }}" aria-label="{{ n }} columns"><twig:ux:icon name="lucide:columns-{{ n }}" /></twig:ToggleGroup:Item>{% endfor %}
</twig:ToggleGroup>
```

### Sort Direction

```twig
<twig:ToggleGroup type="single" variant="outline" size="sm">
    <twig:ToggleGroup:Item value="asc" pressed><twig:ux:icon name="lucide:arrow-up" /> Ascending</twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="desc"><twig:ux:icon name="lucide:arrow-down" /> Descending</twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Pricing Tier

```twig
<twig:ToggleGroup type="single" variant="outline" size="lg">
    <twig:ToggleGroup:Item value="monthly" pressed>Monthly</twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="yearly">Yearly <twig:Badge class="ms-1">Save 20%</twig:Badge></twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

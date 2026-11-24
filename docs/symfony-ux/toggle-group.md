# Toggle Group

## Examples

### Custom

A font weight selector built from custom toggle group items.

```twig
<twig:Field>
    <twig:Field:Label>
        Font Weight
    </twig:Field:Label>
    <twig:ToggleGroup type="single" variant="outline" spacing="2" size="lg">
        <twig:ToggleGroup:Item value="light" aria-label="Light" class="flex size-16 flex-col items-center justify-center rounded-xl">
            <span class="text-2xl leading-none font-light">
                Aa
            </span>
            <span class="text-xs text-muted-foreground">
                Light
            </span>
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="normal" aria-label="Normal" class="flex size-16 flex-col items-center justify-center rounded-xl">
            <span class="text-2xl leading-none font-normal">
                Aa
            </span>
            <span class="text-xs text-muted-foreground">
                Normal
            </span>
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="medium" aria-label="Medium" class="flex size-16 flex-col items-center justify-center rounded-xl">
            <span class="text-2xl leading-none font-medium">
                Aa
            </span>
            <span class="text-xs text-muted-foreground">
                Medium
            </span>
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="bold" aria-label="Bold" class="flex size-16 flex-col items-center justify-center rounded-xl">
            <span class="text-2xl leading-none font-bold">
                Aa
            </span>
            <span class="text-xs text-muted-foreground">
                Bold
            </span>
        </twig:ToggleGroup:Item>
    </twig:ToggleGroup>
</twig:Field>
```

### Basic

```twig
<twig:ToggleGroup variant="default" aria-label="Text formatting">
    <twig:ToggleGroup:Item value="bold" aria-label="Bold">
        <twig:ux:icon name="lucide:bold" />
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="italic" aria-label="Italic">
        <twig:ux:icon name="lucide:italic" />
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="underline" aria-label="Underline">
        <twig:ux:icon name="lucide:underline" />
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Sizes

```twig
<div class="grid gap-3">
    <twig:ToggleGroup type="single" variant="outline" size="sm">
        <twig:ToggleGroup:Item value="top" pressed>
            Top
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="bottom">
            Bottom
        </twig:ToggleGroup:Item>
    </twig:ToggleGroup>
    <twig:ToggleGroup type="single" variant="outline">
        <twig:ToggleGroup:Item value="top" pressed>
            Top
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="bottom">
            Bottom
        </twig:ToggleGroup:Item>
    </twig:ToggleGroup>
</div>
```

### Custom Spacing

```twig
<twig:ToggleGroup type="single" variant="outline" spacing="2">
    <twig:ToggleGroup:Item value="day" pressed="">
        Day
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="week" pressed="1">
        Week
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="month" pressed="">
        Month
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Filter Control

```twig
<twig:ToggleGroup type="single" variant="outline" size="sm">
    <twig:ToggleGroup:Item value="all" pressed="">
        All
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="active" pressed="1">
        Active
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="completed" pressed="">
        Completed
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="archived" pressed="">
        Archived
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Text Alignment

```twig
<twig:ToggleGroup type="single">
    <twig:ToggleGroup:Item value="left" pressed="1" aria-label="Align left">
        <twig:ux:icon name="lucide:align-left" />
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="center" pressed="" aria-label="Align center">
        <twig:ux:icon name="lucide:align-center" />
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="right" pressed="" aria-label="Align right">
        <twig:ux:icon name="lucide:align-right" />
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="justify" pressed="" aria-label="Align justify">
        <twig:ux:icon name="lucide:align-justify" />
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### View Mode

```twig
<twig:ToggleGroup type="single" variant="outline">
    <twig:ToggleGroup:Item value="list" pressed aria-label="List view">
        <twig:ux:icon name="lucide:list" />
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="grid" aria-label="Grid view">
        <twig:ux:icon name="lucide:layout-grid" />
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="kanban" aria-label="Kanban view">
        <twig:ux:icon name="lucide:kanban" />
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Vertical Settings

```twig
<twig:ToggleGroup orientation="vertical" spacing="1" class="w-40 items-stretch">
    <twig:ToggleGroup:Item value="wi-fi" class="justify-start">
        <twig:ux:icon name="lucide:wifi" />
        Wi-Fi
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="bluetooth" class="justify-start">
        <twig:ux:icon name="lucide:bluetooth" />
        Bluetooth
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="airplane mode" class="justify-start">
        <twig:ux:icon name="lucide:plane" />
        Airplane Mode
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="location" class="justify-start">
        <twig:ux:icon name="lucide:map-pin" />
        Location
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Color Theme

```twig
<twig:ToggleGroup type="single" variant="outline">
    <twig:ToggleGroup:Item value="light" pressed="1">
        <twig:ux:icon name="lucide:sun" />
        Light
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="dark" pressed="">
        <twig:ux:icon name="lucide:moon" />
        Dark
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="system" pressed="">
        <twig:ux:icon name="lucide:monitor" />
        System
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Font Size

```twig
<twig:ToggleGroup type="single" variant="outline" size="sm">
    <twig:ToggleGroup:Item value="s" pressed="">
        S
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="m" pressed="1">
        M
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="l" pressed="">
        L
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="xl" pressed="">
        XL
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Time Range

```twig
<twig:ToggleGroup type="single" variant="outline" size="sm">
    <twig:ToggleGroup:Item value="1h" pressed="">
        1H
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="6h" pressed="">
        6H
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="24h" pressed="1">
        24H
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="7d" pressed="">
        7D
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="30d" pressed="">
        30D
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="all" pressed="">
        All
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Notification Channels

```twig
<twig:ToggleGroup type="multiple" variant="outline">
    <twig:ToggleGroup:Item value="email" pressed="1">
        <twig:ux:icon name="lucide:mail" />
        Email
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="sms" pressed="">
        <twig:ux:icon name="lucide:smartphone" />
        SMS
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="push" pressed="1">
        <twig:ux:icon name="lucide:bell" />
        Push
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="slack" pressed="">
        <twig:ux:icon name="lucide:slack" />
        Slack
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Layout Columns

```twig
<twig:ToggleGroup type="single" variant="outline">
    <twig:ToggleGroup:Item value="1" pressed="" aria-label="1 columns">
        1
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="2" pressed="1" aria-label="2 columns">
        2
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="3" pressed="" aria-label="3 columns">
        3
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="4" pressed="" aria-label="4 columns">
        4
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Sort Direction

```twig
<twig:ToggleGroup type="single" variant="outline" size="sm">
    <twig:ToggleGroup:Item value="asc" pressed>
        <twig:ux:icon name="lucide:arrow-up" />
        Ascending
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="desc">
        <twig:ux:icon name="lucide:arrow-down" />
        Descending
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Pricing Tier

```twig
<twig:ToggleGroup type="single" variant="outline" size="lg">
    <twig:ToggleGroup:Item value="monthly" pressed>
        Monthly
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="yearly">
        Yearly
        <twig:Badge class="ms-1">
            Save 20%
        </twig:Badge>
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

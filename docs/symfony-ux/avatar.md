# Avatar

## Examples

### Dropdown

Use an `Avatar` as the trigger of a `DropdownMenu`.

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 260px">
    <twig:DropdownMenu id="avatar-dropdown" align="end">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" class="rounded-full" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:Avatar>
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>CN</twig:Avatar:Fallback>
                </twig:Avatar>
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-32">
            <twig:DropdownMenu:Group>
                <twig:DropdownMenu:Item>Profile</twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>Billing</twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>Settings</twig:DropdownMenu:Item>
            </twig:DropdownMenu:Group>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Group>
                <twig:DropdownMenu:Item variant="destructive">Log out</twig:DropdownMenu:Item>
            </twig:DropdownMenu:Group>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Fallbacks

Initials and an icon on the muted fallback fill.

```twig
<div class="flex items-center gap-4">
    <twig:Avatar><twig:Avatar:Fallback>JD</twig:Avatar:Fallback></twig:Avatar>
    <twig:Avatar><twig:Avatar:Fallback><twig:ux:icon name="lucide:user" class="size-4" /></twig:Avatar:Fallback></twig:Avatar>
</div>
```

### Border Radius

```twig
<div class="flex items-center gap-4">
    {% for radius in ['rounded-full', 'rounded-md', 'rounded-lg', 'rounded-xl'] %}
        <twig:Avatar class="{{ radius }} after:{{ radius }}">
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="{{ radius }}" />
            <twig:Avatar:Fallback class="{{ radius }}">CN</twig:Avatar:Fallback>
        </twig:Avatar>
    {% endfor %}
</div>
```

### Custom Sizes

```twig
<div class="flex items-center gap-4">
    {% for size in ['size-4', 'size-8', 'size-12', 'size-16'] %}
        <twig:Avatar class="{{ size }}">
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>CN</twig:Avatar:Fallback>
        </twig:Avatar>
    {% endfor %}
</div>
```

### Status Dots

```twig
<div class="flex items-center gap-4">
    {% for color in ['bg-primary', 'bg-green-500', 'bg-yellow-500', 'bg-destructive'] %}
        <div class="relative">
            <twig:Avatar>
                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                <twig:Avatar:Fallback>CN</twig:Avatar:Fallback>
            </twig:Avatar>
            <span class="absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-background {{ color }}"></span>
        </div>
    {% endfor %}
</div>
```

### Badge Icons

```twig
<div class="flex items-center gap-4">
    {% for badge in [{icon: 'plus', c: 'bg-primary text-primary-foreground'}, {icon: 'check', c: 'bg-green-500 text-white'}, {icon: 'star', c: 'bg-yellow-500 text-white'}, {icon: 'shield', c: 'bg-blue-500 text-white'}] %}
        <div class="relative">
            <twig:Avatar>
                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                <twig:Avatar:Fallback>CN</twig:Avatar:Fallback>
            </twig:Avatar>
            <span class="absolute -end-1 -bottom-1 flex size-4 items-center justify-center rounded-full border-2 border-background {{ badge.c }}"><twig:ux:icon name="lucide:{{ badge.icon }}" class="size-2.5" /></span>
        </div>
    {% endfor %}
</div>
```

### Border Rings

```twig
<div class="flex items-center gap-4">
    {% for ring in ['ring-primary', 'ring-destructive', 'ring-violet-500', 'ring-yellow-500'] %}
        <twig:Avatar class="ring-2 ring-offset-2 ring-offset-background {{ ring }}">
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>CN</twig:Avatar:Fallback>
        </twig:Avatar>
    {% endfor %}
</div>
```

### Soft and Solid Fallbacks

```twig
<div class="flex flex-wrap items-center gap-4">
    <twig:Avatar><twig:Avatar:Fallback class="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">GR</twig:Avatar:Fallback></twig:Avatar>
    <twig:Avatar><twig:Avatar:Fallback class="bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300">FU</twig:Avatar:Fallback></twig:Avatar>
    <twig:Avatar><twig:Avatar:Fallback class="bg-primary text-primary-foreground">PR</twig:Avatar:Fallback></twig:Avatar>
    <twig:Avatar><twig:Avatar:Fallback class="bg-destructive text-white">DE</twig:Avatar:Fallback></twig:Avatar>
    <twig:Avatar><twig:Avatar:Fallback class="bg-blue-600 text-white">BL</twig:Avatar:Fallback></twig:Avatar>
</div>
```

### User Details

```twig
<div class="flex items-center gap-3">
    <twig:Avatar size="lg"><twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" /><twig:Avatar:Fallback>CN</twig:Avatar:Fallback></twig:Avatar>
    <div class="flex flex-col">
        <span class="flex items-center gap-2 text-sm font-medium">shadcn <twig:Badge variant="secondary">Pro</twig:Badge></span>
        <span class="text-xs text-muted-foreground">Software Engineer</span>
    </div>
</div>
```

### Grayscale

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="grayscale" />
    <twig:Avatar:Fallback>CN</twig:Avatar:Fallback>
</twig:Avatar>
```

### Group With Count

```twig
<div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
    {% for u in ['shadcn', 'maxleiter', 'evilrabbit'] %}
        <twig:Avatar><twig:Avatar:Image src="https://github.com/{{ u }}.png" alt="{{ u }}" /><twig:Avatar:Fallback>{{ u|first|upper }}</twig:Avatar:Fallback></twig:Avatar>
    {% endfor %}
    <twig:Avatar><twig:Avatar:Fallback class="text-xs">+3</twig:Avatar:Fallback></twig:Avatar>
</div>
```

### Social Proof Pill

```twig
<div class="inline-flex items-center gap-3 rounded-full border p-1 pe-4">
    <div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
        {% for u in ['shadcn', 'maxleiter', 'evilrabbit', 'leerob'] %}
            <twig:Avatar size="sm"><twig:Avatar:Image src="https://github.com/{{ u }}.png" alt="{{ u }}" /><twig:Avatar:Fallback>{{ u|first|upper }}</twig:Avatar:Fallback></twig:Avatar>
        {% endfor %}
    </div>
    <p class="text-xs text-muted-foreground"><span class="font-semibold text-foreground">100K+</span> developers use it</p>
</div>
```

### Hover Fan

A stack that spreads apart on hover.

```twig
<div class="group/fan flex -space-x-3 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:transition-transform hover:space-x-1">
    {% for u in ['shadcn', 'maxleiter', 'evilrabbit', 'leerob'] %}
        <twig:Avatar><twig:Avatar:Image src="https://github.com/{{ u }}.png" alt="{{ u }}" /><twig:Avatar:Fallback>{{ u|first|upper }}</twig:Avatar:Fallback></twig:Avatar>
    {% endfor %}
</div>
```

### Group Presence and Add Button

```twig
<div class="flex items-center gap-3">
    <div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
        {% for u in ['shadcn', 'maxleiter', 'evilrabbit'] %}
            <twig:Avatar><twig:Avatar:Image src="https://github.com/{{ u }}.png" alt="{{ u }}" /><twig:Avatar:Fallback>{{ u|first|upper }}</twig:Avatar:Fallback></twig:Avatar>
        {% endfor %}
        <twig:Avatar><twig:Avatar:Fallback class="text-xs">+5</twig:Avatar:Fallback></twig:Avatar>
    </div>
    <twig:Button variant="outline" size="icon" class="rounded-full" aria-label="Add user"><twig:ux:icon name="lucide:user-plus" /></twig:Button>
</div>
```

### Multiple Badges

```twig
<div class="relative w-fit">
    <twig:Avatar size="lg"><twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" /><twig:Avatar:Fallback>CN</twig:Avatar:Fallback></twig:Avatar>
    <span class="absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-green-500"></span>
    <span class="absolute -end-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-medium text-white">3</span>
</div>
```

### Pulsing Ring

```twig
<div class="relative w-fit">
    <twig:Avatar size="lg" class="animate-pulse ring-2 ring-green-500 ring-offset-2 ring-offset-background"><twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" /><twig:Avatar:Fallback>CN</twig:Avatar:Fallback></twig:Avatar>
    <span class="absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-green-500"></span>
</div>
```

### Dropdown Account

A pill trigger with avatar, name and chevron.

```twig
<div class="flex justify-center pt-4" style="min-height: 300px">
    <twig:DropdownMenu id="avatar-account" align="start">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" class="h-auto rounded-full py-1 ps-1" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:Avatar size="sm"><twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" /><twig:Avatar:Fallback>CN</twig:Avatar:Fallback></twig:Avatar>
                shadcn <twig:ux:icon name="lucide:chevrons-up-down" class="size-3.5 text-muted-foreground" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-48">
            <twig:DropdownMenu:Item>Profile</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>Settings</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>Teams</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>Invite</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item variant="destructive">Log out</twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

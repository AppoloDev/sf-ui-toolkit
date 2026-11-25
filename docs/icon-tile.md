# Icon Tile

> Square or circular tile giving an icon a fixed size, radius and surface: outline, elevated or frame.

## Usage

```twig
<twig:IconTile>
    <twig:ux:icon name="lucide:star" />
</twig:IconTile>
```

## Examples

### Variants

`outline` is the default; `elevated` has a muted fill and a soft shadow; `frame` draws a double container.

```twig
<div class="flex items-center gap-4">
    <twig:IconTile variant="outline">
        <twig:ux:icon name="lucide:house" />
    </twig:IconTile>
    <twig:IconTile variant="elevated">
        <twig:ux:icon name="lucide:house" />
    </twig:IconTile>
    <twig:IconTile variant="frame">
        <twig:ux:icon name="lucide:house" />
    </twig:IconTile>
</div>
```

### Sizes

The glyph, the padding and the radius follow the size.

```twig
<div class="flex items-end gap-4">
    <twig:IconTile size="xs">
        <twig:ux:icon name="lucide:plus" />
    </twig:IconTile>
    <twig:IconTile size="sm">
        <twig:ux:icon name="lucide:plus" />
    </twig:IconTile>
    <twig:IconTile>
        <twig:ux:icon name="lucide:plus" />
    </twig:IconTile>
    <twig:IconTile size="lg">
        <twig:ux:icon name="lucide:plus" />
    </twig:IconTile>
    <twig:IconTile size="xl">
        <twig:ux:icon name="lucide:plus" />
    </twig:IconTile>
</div>
```

### Circular

```twig
<div class="flex items-center gap-4">
    <twig:IconTile radius="full">
        <twig:ux:icon name="lucide:user" />
    </twig:IconTile>
    <twig:IconTile radius="full" variant="frame">
        <twig:ux:icon name="lucide:user" />
    </twig:IconTile>
</div>
```

### Colors

Override the colors with utility classes: soft, solid, or any palette color. Add a `dark:` counterpart for each one so the tile stays readable in dark mode.

```twig
<div class="flex items-center gap-4">
    <twig:IconTile class="border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400">
        <twig:ux:icon name="lucide:star" />
    </twig:IconTile>
    <twig:IconTile class="border-transparent bg-emerald-600 text-white dark:bg-emerald-500">
        <twig:ux:icon name="lucide:check" />
    </twig:IconTile>
    <twig:IconTile variant="elevated" class="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400">
        <twig:ux:icon name="lucide:triangle-alert" />
    </twig:IconTile>
</div>
```

### Text content

The tile accepts any content: initials, a number, a logo.

```twig
<div class="flex items-center gap-4">
    <twig:IconTile radius="full" class="font-semibold">
        AB
    </twig:IconTile>
    <twig:IconTile size="lg" class="font-semibold">
        42
    </twig:IconTile>
</div>
```

### List row

The tile is the media of the shadcn `Item` component.

```twig
<twig:Item variant="outline" class="max-w-sm">
    <twig:Item:Media>
        <twig:IconTile variant="elevated">
            <twig:ux:icon name="lucide:file-text" />
        </twig:IconTile>
    </twig:Item:Media>
    <twig:Item:Content>
        <twig:Item:Title>
            Weekly report
        </twig:Item:Title>
        <twig:Item:Description>
            Updated 2 hours ago
        </twig:Item:Description>
    </twig:Item:Content>
</twig:Item>
```

### Default

The outline tile with the default size.

```twig
<twig:IconTile>
    <twig:ux:icon name="lucide:sparkles" />
</twig:IconTile>
```

### Elevated

A muted fill with a ring and a soft shadow.

```twig
<twig:IconTile variant="elevated">
    <twig:ux:icon name="lucide:sparkles" />
</twig:IconTile>
```

### Framed

A tile inside a tile, for a double container.

```twig
<twig:IconTile variant="frame">
    <twig:ux:icon name="lucide:sparkles" />
</twig:IconTile>
```

### Custom Sizing

A utility class sets any size; the glyph size has to follow, with `[&_svg]:size-*!`.

```twig
<div class="flex items-center gap-4">
    <twig:IconTile class="size-14! [&_svg]:size-7!">
        <twig:ux:icon name="lucide:rocket" />
    </twig:IconTile>
    <twig:IconTile class="size-20! rounded-2xl! [&_svg]:size-10!">
        <twig:ux:icon name="lucide:rocket" />
    </twig:IconTile>
</div>
```

### Feature Card

A tile above the title and the text of a feature.

```twig
<twig:Card class="max-w-xs">
    <twig:Card:Header>
        <twig:IconTile variant="elevated" class="mb-2">
            <twig:ux:icon name="lucide:shield-check" />
        </twig:IconTile>
        <twig:Card:Title>
            Secure by default
        </twig:Card:Title>
        <twig:Card:Description>
            Every workspace is encrypted at rest and in transit, with audit logs on every plan.
        </twig:Card:Description>
    </twig:Card:Header>
</twig:Card>
```

### Empty State

The tile is the media of the shadcn `Empty` component, in its default variant (no background of its own).

```twig
<twig:Empty class="max-w-sm border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Media>
            <twig:IconTile variant="frame" size="lg">
                <twig:ux:icon name="lucide:inbox" />
            </twig:IconTile>
        </twig:Empty:Media>
        <twig:Empty:Title>
            No messages yet
        </twig:Empty:Title>
        <twig:Empty:Description>
            New messages will show up here as soon as they arrive.
        </twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content>
        <twig:Button variant="outline" size="sm">
            Refresh
        </twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Interactive

The tile is only a surface: put it in a button or a link and add the hover and focus styles to that element.

```twig
<div class="flex items-center gap-4">
    <button type="button" aria-label="Add" class="group rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
        <twig:IconTile class="transition-colors group-hover:bg-muted group-active:scale-95">
            <twig:ux:icon name="lucide:plus" />
        </twig:IconTile>
    </button>
    <button type="button" aria-label="Settings" class="group rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
        <twig:IconTile variant="elevated" class="transition-all group-hover:-translate-y-0.5 group-hover:shadow-lg">
            <twig:ux:icon name="lucide:settings" />
        </twig:IconTile>
    </button>
</div>
```

### Status Overlay

A small badge pinned to a corner of the tile.

```twig
<div class="flex items-center gap-6">
    <div class="relative">
        <twig:IconTile variant="elevated">
            <twig:ux:icon name="lucide:bell" />
        </twig:IconTile>
        <span class="absolute -right-1 -top-1 size-3 rounded-full border-2 border-background bg-emerald-500"></span>
    </div>
    <div class="relative">
        <twig:IconTile variant="elevated">
            <twig:ux:icon name="lucide:mail" />
        </twig:IconTile>
        <span class="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-background bg-destructive px-1 text-[10px] font-semibold text-white">
            3
        </span>
    </div>
    <div class="relative">
        <twig:IconTile variant="elevated">
            <twig:ux:icon name="lucide:folder" />
        </twig:IconTile>
        <span class="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground">
            <twig:ux:icon name="lucide:check" class="size-2.5" />
        </span>
    </div>
</div>
```

### Soft Tones

A pale fill and a darker glyph, with a `dark:` counterpart for each color.

```twig
<div class="flex items-center gap-3">
    <twig:IconTile class="border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400">
        <twig:ux:icon name="lucide:info" />
    </twig:IconTile>
    <twig:IconTile class="border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-400">
        <twig:ux:icon name="lucide:circle-check" />
    </twig:IconTile>
    <twig:IconTile class="border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-400">
        <twig:ux:icon name="lucide:triangle-alert" />
    </twig:IconTile>
    <twig:IconTile class="border-red-200 bg-red-50 text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
        <twig:ux:icon name="lucide:octagon-x" />
    </twig:IconTile>
    <twig:IconTile class="border-violet-200 bg-violet-50 text-violet-600 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-400">
        <twig:ux:icon name="lucide:sparkles" />
    </twig:IconTile>
</div>
```

### Solid Tones

A full color fill and a white glyph.

```twig
<div class="flex items-center gap-3">
    <twig:IconTile class="border-transparent bg-blue-600 text-white dark:bg-blue-500">
        <twig:ux:icon name="lucide:info" />
    </twig:IconTile>
    <twig:IconTile class="border-transparent bg-emerald-600 text-white dark:bg-emerald-500">
        <twig:ux:icon name="lucide:circle-check" />
    </twig:IconTile>
    <twig:IconTile class="border-transparent bg-amber-500 text-white dark:bg-amber-500">
        <twig:ux:icon name="lucide:triangle-alert" />
    </twig:IconTile>
    <twig:IconTile class="border-transparent bg-red-600 text-white dark:bg-red-500">
        <twig:ux:icon name="lucide:octagon-x" />
    </twig:IconTile>
    <twig:IconTile class="border-transparent bg-violet-600 text-white dark:bg-violet-500">
        <twig:ux:icon name="lucide:sparkles" />
    </twig:IconTile>
</div>
```

### Brand Colors

Brand logos come from the `simple-icons` set; each one takes the color of its brand.

```twig
<div class="flex items-center gap-3">
    <twig:IconTile>
        <twig:ux:icon name="simple-icons:github" class="text-foreground" />
    </twig:IconTile>
    <twig:IconTile>
        <twig:ux:icon name="simple-icons:slack" class="text-[#4A154B] dark:text-[#E01E5A]" />
    </twig:IconTile>
    <twig:IconTile>
        <twig:ux:icon name="simple-icons:stripe" class="text-[#635BFF]" />
    </twig:IconTile>
    <twig:IconTile>
        <twig:ux:icon name="simple-icons:figma" class="text-[#F24E1E]" />
    </twig:IconTile>
    <twig:IconTile>
        <twig:ux:icon name="simple-icons:notion" class="text-foreground" />
    </twig:IconTile>
</div>
```

## Accessibility

- The tile is decorative by default: it adds no role and no label. When it conveys meaning on its own, add `role="img"` and an `aria-label`, or place a visible text next to it.
- When it is interactive, wrap it in a `button` or a link that has its own accessible name.

## API

### `<twig:IconTile>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `outline`, `elevated`, `frame` | `outline` | Surface of the tile. |
| `size` | `xs`, `sm`, `default`, `lg`, `xl` | `default` | Tile size (24, 32, 40, 48 and 64 px). The glyph scales with it. |
| `radius` | `default`, `full` | `default` | `full` makes the tile circular. |

| Block | Description |
|---|---|
| `default` | Any content: an icon, initials, a number, a logo. It scales with the tile. |


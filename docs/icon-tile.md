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
    <twig:IconTile variant="outline"><twig:ux:icon name="lucide:house" /></twig:IconTile>
    <twig:IconTile variant="elevated"><twig:ux:icon name="lucide:house" /></twig:IconTile>
    <twig:IconTile variant="frame"><twig:ux:icon name="lucide:house" /></twig:IconTile>
</div>
```

### Sizes

The glyph, the padding and the radius follow the size.

```twig
<div class="flex items-end gap-4">
    <twig:IconTile size="xs"><twig:ux:icon name="lucide:plus" /></twig:IconTile>
    <twig:IconTile size="sm"><twig:ux:icon name="lucide:plus" /></twig:IconTile>
    <twig:IconTile><twig:ux:icon name="lucide:plus" /></twig:IconTile>
    <twig:IconTile size="lg"><twig:ux:icon name="lucide:plus" /></twig:IconTile>
    <twig:IconTile size="xl"><twig:ux:icon name="lucide:plus" /></twig:IconTile>
</div>
```

### Circular

```twig
<div class="flex items-center gap-4">
    <twig:IconTile radius="full"><twig:ux:icon name="lucide:user" /></twig:IconTile>
    <twig:IconTile radius="full" variant="frame"><twig:ux:icon name="lucide:user" /></twig:IconTile>
</div>
```

### Colors

Override the colors with utility classes: soft, solid, or any palette color. Add a `dark:` counterpart for each one so the tile stays readable in dark mode.

```twig
<div class="flex items-center gap-4">
    <twig:IconTile class="border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400"><twig:ux:icon name="lucide:star" /></twig:IconTile>
    <twig:IconTile class="border-transparent bg-emerald-600 text-white dark:bg-emerald-500"><twig:ux:icon name="lucide:check" /></twig:IconTile>
    <twig:IconTile variant="elevated" class="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400"><twig:ux:icon name="lucide:triangle-alert" /></twig:IconTile>
</div>
```

### Text content

The tile accepts any content: initials, a number, a logo.

```twig
<div class="flex items-center gap-4">
    <twig:IconTile radius="full" class="font-semibold">AB</twig:IconTile>
    <twig:IconTile size="lg" class="font-semibold">42</twig:IconTile>
</div>
```

### List row

```twig
<div class="flex max-w-sm items-center gap-3 rounded-lg border border-border p-3">
    <twig:IconTile variant="elevated"><twig:ux:icon name="lucide:file-text" /></twig:IconTile>
    <div class="text-sm">
        <p class="font-medium">Weekly report</p>
        <p class="text-muted-foreground">Updated 2 hours ago</p>
    </div>
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

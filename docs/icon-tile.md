# Icon Tile

> Square or circular tile giving an icon a fixed size, radius and surface: outline, elevated or frame.

## Usage

```twig
<twig:IconTile>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1z"/></svg>
</twig:IconTile>
```

## Examples

### Variants

`outline` is the default; `elevated` has a muted fill and a soft shadow; `frame` draws a double container.

```twig
<div class="flex items-center gap-4">
    <twig:IconTile variant="outline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg></twig:IconTile>
    <twig:IconTile variant="elevated"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg></twig:IconTile>
    <twig:IconTile variant="frame"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg></twig:IconTile>
</div>
```

### Sizes

The glyph, the padding and the radius follow the size.

```twig
<div class="flex items-end gap-4">
    <twig:IconTile size="xs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5v14"/></svg></twig:IconTile>
    <twig:IconTile size="sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5v14"/></svg></twig:IconTile>
    <twig:IconTile><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5v14"/></svg></twig:IconTile>
    <twig:IconTile size="lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5v14"/></svg></twig:IconTile>
    <twig:IconTile size="xl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5v14"/></svg></twig:IconTile>
</div>
```

### Circular

```twig
<div class="flex items-center gap-4">
    <twig:IconTile radius="full"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg></twig:IconTile>
    <twig:IconTile radius="full" variant="frame"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg></twig:IconTile>
</div>
```

### Colors

Override the colors with utility classes: soft, solid, or any palette color.

```twig
<div class="flex items-center gap-4">
    <twig:IconTile class="border-blue-200 bg-blue-50 text-blue-600"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1z"/></svg></twig:IconTile>
    <twig:IconTile class="border-transparent bg-emerald-600 text-white"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></twig:IconTile>
    <twig:IconTile variant="elevated" class="bg-amber-100 text-amber-700"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg></twig:IconTile>
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
    <twig:IconTile variant="elevated"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4zM4 9h16"/></svg></twig:IconTile>
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

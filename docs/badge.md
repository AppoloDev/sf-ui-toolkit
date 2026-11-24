# Badge

> The shadcn Badge with success, info and warning colors, solid, outline and light appearances, sizes and radius.

## Usage

This recipe replaces the `Badge` of the official kit: its 6 variants and its `as` prop are unchanged, so existing badges keep working. `variant` picks the color, `appearance` how it is drawn.

```twig
<twig:Badge variant="success" appearance="light">Paid</twig:Badge>
```

## Examples

### Colors

The solid colors: `default` is the primary color, `success`, `info` and `warning` are added. `destructive` keeps the soft red of the official kit.

```twig
<div class="flex flex-wrap items-center gap-2">
    <twig:Badge>Primary</twig:Badge>
    <twig:Badge variant="success">Success</twig:Badge>
    <twig:Badge variant="info">Info</twig:Badge>
    <twig:Badge variant="warning">Warning</twig:Badge>
    <twig:Badge variant="destructive">Destructive</twig:Badge>
</div>
```

### Outline

```twig
<div class="flex flex-wrap items-center gap-2">
    <twig:Badge appearance="outline">Primary</twig:Badge>
    <twig:Badge variant="success" appearance="outline">Success</twig:Badge>
    <twig:Badge variant="info" appearance="outline">Info</twig:Badge>
    <twig:Badge variant="warning" appearance="outline">Warning</twig:Badge>
    <twig:Badge variant="destructive" appearance="outline">Destructive</twig:Badge>
</div>
```

### Light

```twig
<div class="flex flex-wrap items-center gap-2">
    <twig:Badge appearance="light">Primary</twig:Badge>
    <twig:Badge variant="success" appearance="light">Success</twig:Badge>
    <twig:Badge variant="info" appearance="light">Info</twig:Badge>
    <twig:Badge variant="warning" appearance="light">Warning</twig:Badge>
    <twig:Badge variant="destructive" appearance="light">Destructive</twig:Badge>
</div>
```

### Official variants

Secondary, outline, ghost and link ignore `appearance`.

```twig
<div class="flex flex-wrap items-center gap-2">
    <twig:Badge variant="secondary">Secondary</twig:Badge>
    <twig:Badge variant="outline">Outline</twig:Badge>
    <twig:Badge variant="ghost">Ghost</twig:Badge>
    <twig:Badge variant="link">Link</twig:Badge>
</div>
```

### Sizes

```twig
<div class="flex items-center gap-2.5">
    <twig:Badge size="xs">Extra small</twig:Badge>
    <twig:Badge>Default</twig:Badge>
    <twig:Badge size="lg">Large</twig:Badge>
</div>
```

### Radius

The default is the pill of the official kit; `sm`, `md` and `full` change the corners.

```twig
<div class="flex flex-wrap items-center gap-2.5">
    <twig:Badge radius="sm" variant="success" appearance="light">Small</twig:Badge>
    <twig:Badge radius="md" variant="success" appearance="light">Medium</twig:Badge>
    <twig:Badge radius="full" variant="success" appearance="light">Full</twig:Badge>
</div>
```

### Counts

```twig
<div class="flex items-center gap-2.5">
    <twig:Badge radius="full" class="min-w-5 px-1.5">3</twig:Badge>
    <twig:Badge radius="full" variant="warning" class="min-w-5 px-1.5">12</twig:Badge>
    <twig:Badge radius="full" variant="info" appearance="outline" class="min-w-5 px-1.5">99+</twig:Badge>
</div>
```

### As a link

```twig
<twig:Badge as="a" href="#" variant="info" appearance="light">Release notes</twig:Badge>
```

## Accessibility

- A badge is plain text: when the color carries meaning (success, warning), say it in the text as well, never by color alone.
- With `as="a"` the badge is a real link with a visible focus ring.

## API

### `<twig:Badge>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `string` | `default` | `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`, `success`, `info` or `warning`. |
| `appearance` | `string` | `solid` | `solid`, `outline` or `light`; applies to default, destructive, success, info and warning. |
| `size` | `string` | `default` | `xs`, `default` or `lg`. |
| `radius` | `string` | `default` | `default` (pill), `sm`, `md` or `full`. |
| `as` | `string` | `span` | `span`, or `a` when the badge navigates. |

| Block | Description |
| --- | --- |
| `default` | The label or content of the badge. |

# Spinner

> The shadcn Spinner with an icon prop to swap the spinning icon.

<!-- order: Default, Size, Icons, Color Variants, Label, Button, Pending Buttons, Badge, In Badges, Input Group, In Input Group, Empty, Inline Text, Loading Dots, Card Overlay, Overlay With Caption, Full Page -->

## Usage

This recipe replaces the `Spinner` of the official kit: without `icon` it is the same `lucide:loader-2`.

```twig
<twig:Spinner icon="lucide:loader-circle" />
```

## Examples

### Icons

Any Symfony UX Icons name works.

```twig
<div class="flex items-center gap-4">
    <twig:Spinner />
    <twig:Spinner icon="lucide:loader-circle" />
    <twig:Spinner icon="lucide:refresh-cw" />
    <twig:Spinner icon="lucide:cog" />
    <twig:Spinner icon="lucide:rotate-cw" class="size-6 text-primary" />
</div>
```

### Label

The `label` is what assistive technologies announce.

```twig
<twig:Spinner icon="lucide:refresh-cw" label="Synchronizing" class="size-6" />
```

## Accessibility

- The spinner has `role="status"` and an `aria-label` from `label`; translate it in your application.

## API

### `<twig:Spinner>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `Loading` | Accessible label announced to assistive technologies. |
| `icon` | `string` | `lucide:loader-2` | Symfony UX Icons name of the spinning icon. |

| Block | Description |
| --- | --- |
| `default` | None: the spinner has no content. |

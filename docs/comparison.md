# Comparison

> Two images or panels on top of each other with a draggable divider to compare them, horizontal or vertical, with keyboard support.

## Usage

Give the `before` and `after` blocks. The panels fill the component: give it a height (or let an image give it one).

```twig
<twig:Comparison class="h-64">
    <twig:block name="before"><img src="before.jpg" alt="Before"></twig:block>
    <twig:block name="after"><img src="after.jpg" alt="After"></twig:block>
</twig:Comparison>
```

## Examples

### Basic

Drag the divider, or focus it and use the arrow keys, Home and End.

<!-- height: 300 -->

```twig
<twig:Comparison >
    <twig:block name="before">
        <div class="grid h-full min-h-56 place-items-center bg-gradient-to-br from-orange-400 to-pink-600 text-3xl font-bold text-white">Before</div>
    </twig:block>
    <twig:block name="after">
        <div class="grid h-full min-h-56 place-items-center bg-gradient-to-br from-sky-400 to-indigo-600 text-3xl font-bold text-white">After</div>
    </twig:block>
</twig:Comparison>
```

### Start Position

`position` sets where the divider starts.

<!-- height: 300 -->

```twig
<twig:Comparison :position="25">
    <twig:block name="before">
        <div class="grid h-full min-h-56 place-items-center bg-gradient-to-br from-orange-400 to-pink-600 text-3xl font-bold text-white">Before</div>
    </twig:block>
    <twig:block name="after">
        <div class="grid h-full min-h-56 place-items-center bg-gradient-to-br from-sky-400 to-indigo-600 text-3xl font-bold text-white">After</div>
    </twig:block>
</twig:Comparison>
```

### Vertical

`orientation="vertical"` puts the divider across, to compare top and bottom.

<!-- height: 300 -->

```twig
<twig:Comparison orientation="vertical">
    <twig:block name="before">
        <div class="grid h-full min-h-56 place-items-center bg-gradient-to-br from-orange-400 to-pink-600 text-3xl font-bold text-white">Before</div>
    </twig:block>
    <twig:block name="after">
        <div class="grid h-full min-h-56 place-items-center bg-gradient-to-br from-sky-400 to-indigo-600 text-3xl font-bold text-white">After</div>
    </twig:block>
</twig:Comparison>
```

### Images

The panels can be images.

<!-- height: 300 -->

```twig
<twig:Comparison class="max-w-md">
    <twig:block name="before">
        <img class="size-full object-cover" alt="Before" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23888'/%3E%3Ccircle cx='300' cy='200' r='90' fill='%23ccc'/%3E%3C/svg%3E">
    </twig:block>
    <twig:block name="after">
        <img class="size-full object-cover" alt="After" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%2306b6d4'/%3E%3Ccircle cx='300' cy='200' r='90' fill='%23fde047'/%3E%3C/svg%3E">
    </twig:block>
</twig:Comparison>
```

### Listening To Changes

`comparison:change` carries the position in percent.

<!-- height: 380 -->

```twig
<div id="cp-events" class="grid gap-2">
    <twig:Comparison >
        <twig:block name="before">
            <div class="grid h-full min-h-56 place-items-center bg-gradient-to-br from-orange-400 to-pink-600 text-3xl font-bold text-white">Before</div>
        </twig:block>
        <twig:block name="after">
            <div class="grid h-full min-h-56 place-items-center bg-gradient-to-br from-sky-400 to-indigo-600 text-3xl font-bold text-white">After</div>
        </twig:block>
    </twig:Comparison>
    <p class="text-sm text-muted-foreground">
        Position: <code id="cp-events-out">50</code>%
    </p>
</div>
<script>
    document.getElementById('cp-events').addEventListener('comparison:change', (event) => {
        document.getElementById('cp-events-out').textContent = Math.round(event.detail.position);
    });
</script>
```

### Another Language

The names of the comparison and of the divider are props.

<!-- height: 300 -->

```twig
<twig:Comparison label="Comparaison avant et après" handleLabel="Séparateur">
    <twig:block name="before">
        <div class="grid h-full min-h-56 place-items-center bg-gradient-to-br from-orange-400 to-pink-600 text-3xl font-bold text-white">Before</div>
    </twig:block>
    <twig:block name="after">
        <div class="grid h-full min-h-56 place-items-center bg-gradient-to-br from-sky-400 to-indigo-600 text-3xl font-bold text-white">After</div>
    </twig:block>
</twig:Comparison>
```

## Accessibility

- The divider is a `slider` (`aria-orientation`, `aria-valuenow` in percent) that works with the arrow keys, Home and End.
- Give the images an `alt` that says what each side is, and the comparison a `label`.

## Extending

- `comparison:change` when the divider moves: `detail.position` (0 to 100).

## API

### `<twig:Comparison>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | number | `50` | The start position of the divider, in percent. |
| `orientation` | `horizontal`, `vertical` | `horizontal` | The direction of the comparison. |
| `label` | string | `Comparison` | The accessible name of the comparison. |
| `handleLabel` | string | `Divider` | The accessible name of the divider. |
| `step` | number | `5` | The keyboard step, in percent. |

| Block | Description |
| --- | --- |
| `before` | The panel shown on the left (or the top). |
| `after` | The panel shown on the right (or the bottom). |

# Circular Progress

> A circular progress ring or a half-circle gauge: determinate or indeterminate, sizes, thickness, colors by threshold, and any content in the middle.

## Installation

- card (only for one example)

## Usage

```twig
<twig:CircularProgress :value="65" :showValue="true" />
<twig:CircularProgress variant="gauge" :value="30" :thresholds="[{from: 0, color: 'text-red-500'}, {from: 50, color: 'text-green-600'}]" />
```

## Examples

### Basic

A ring filled to 65%.

<!-- height: 140 -->

```twig
<twig:CircularProgress :value="65" />
```

### With The Percentage

`showValue` writes the percentage in the middle.

<!-- height: 140 -->

```twig
<twig:CircularProgress :value="65" :showValue="true" />
```

### Sizes And Thickness

`size` and `thickness` in pixels.

<!-- height: 160 -->

```twig
<div class="flex items-center gap-4">
    <twig:CircularProgress :value="40" :size="40" :thickness="4" />
    <twig:CircularProgress :value="40" :size="64" :thickness="6" :showValue="true" />
    <twig:CircularProgress :value="40" :size="120" :thickness="12" :showValue="true" />
</div>
```

### Colors By Threshold

`thresholds` picks the color from the value: the last one reached wins.

<!-- height: 140 -->

```twig
<div class="flex items-center gap-4">
    <twig:CircularProgress :value="20" :showValue="true" :thresholds="[{from: 0, color: 'text-red-500'}, {from: 50, color: 'text-amber-500'}, {from: 80, color: 'text-green-600'}]" />
    <twig:CircularProgress :value="65" :showValue="true" :thresholds="[{from: 0, color: 'text-red-500'}, {from: 50, color: 'text-amber-500'}, {from: 80, color: 'text-green-600'}]" />
    <twig:CircularProgress :value="92" :showValue="true" :thresholds="[{from: 0, color: 'text-red-500'}, {from: 50, color: 'text-amber-500'}, {from: 80, color: 'text-green-600'}]" />
</div>
```

### Gauge

`variant="gauge"` draws a half circle.

<!-- height: 120 -->

```twig
<div class="flex items-end gap-4">
    <twig:CircularProgress variant="gauge" :value="30" :showValue="true" :size="120" />
    <twig:CircularProgress variant="gauge" :value="75" :showValue="true" :size="120" color="text-green-600" />
</div>
```

### Indeterminate

Without a value, the ring spins; no value is announced.

<!-- height: 100 -->

```twig
<twig:CircularProgress :indeterminate="true" :size="48" :thickness="5" label="Loading" />
```

### Custom Content

The default block replaces the percentage: here an icon and a value.

<!-- height: 160 -->

```twig
<twig:CircularProgress :value="72" :size="120" :thickness="10" color="text-blue-600">
    <div class="text-center">
        <p class="text-xl font-bold">
            7.2k
        </p>
        <p class="text-xs text-muted-foreground">
            of 10k
        </p>
    </div>
</twig:CircularProgress>
```

### Different Maximum

`max` is the value that fills the ring: 3 of 5 steps.

<!-- height: 140 -->

```twig
<twig:CircularProgress :value="3" :max="5" :showValue="true" label="Step 3 of 5" />
```

### In A Card

Inside the official `Card`, next to a figure.

<!-- height: 180 -->

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Content class="flex items-center gap-4">
        <twig:CircularProgress :value="82" :showValue="true" :thresholds="[{from: 0, color: 'text-amber-500'}, {from: 75, color: 'text-green-600'}]" label="Storage used" />
        <div>
            <p class="font-medium">
                Storage
            </p>
            <p class="text-sm text-muted-foreground">
                82 GB of 100 GB used
            </p>
        </div>
    </twig:Card:Content>
</twig:Card>
```

## Accessibility

- The ring is a `progressbar` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax`; an indeterminate ring has no value.
- Always give a `label` that says what is progressing; the percentage in the middle is not read twice.
- Do not rely on the color alone: the value is written in the middle or in the surrounding text.

## API

### `<twig:CircularProgress>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number | `0` | The current value. |
| `max` | number | `100` | The value that fills the ring. |
| `size` | integer | `96` | The width of the ring, in pixels. |
| `thickness` | integer | `8` | The thickness of the ring, in pixels. |
| `variant` | `ring`, `gauge` | `ring` | A full circle or a half circle. |
| `indeterminate` | bool | `false` | Spin without a value. |
| `showValue` | bool | `false` | Write the percentage in the middle. |
| `label` | string | `Progress` | The accessible name of the progress. |
| `color` | string or null | `null` | A Tailwind text color class for the ring. |
| `thresholds` | array or null | `null` | Colors by value: a list of `from` and `color`. The last one reached wins. |

| Block | Description |
| --- | --- |
| `default` | The content in the middle. |

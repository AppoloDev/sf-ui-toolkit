# Value Sync

> Mirrors the value of a slider or a field into texts, an emoji, a progress bar, a bubble that follows the thumb and a number field, while it changes.

## Installation

- slider
- progress
- input
- label

## Usage

Wrap a `Slider` in `ValueSync` and add the parts that show its value. They are updated while the thumb moves, and once when the page loads, so what you write inside `Output` is only the text before the script runs.

```twig
<twig:ValueSync class="grid max-w-sm gap-3">
    <twig:ValueSync:Output format="{value}%">
        40%
    </twig:ValueSync:Output>
    <twig:Slider name="volume" value="40" aria-label="Volume" />
</twig:ValueSync>
```

## Examples

### Text

`format` builds the text: `{value}` is the value, `{percent}` its position between the minimum and the maximum.

```twig
<twig:ValueSync class="mx-auto grid w-full max-w-sm gap-3">
    <div class="flex items-center justify-between">
        <twig:Label for="volume-text" class="text-sm font-medium">
            Volume
        </twig:Label>
        <twig:ValueSync:Output format="{value}%" class="text-sm text-muted-foreground tabular-nums">
            40%
        </twig:ValueSync:Output>
    </div>
    <twig:Slider id="volume-text" name="volume" value="40" />
</twig:ValueSync>
```

### Decimals

With a `step` below 1, `decimals` fixes the number of digits shown; `{percent}` is rounded.

```twig
<twig:ValueSync class="mx-auto grid w-full max-w-sm gap-3">
    <div class="flex items-center justify-between text-sm">
        <twig:Label for="ratio" class="font-medium">
            Ratio
        </twig:Label>
        <span class="text-muted-foreground tabular-nums">
            <twig:ValueSync:Output format="{value}" :decimals="1">
                0.5
            </twig:ValueSync:Output>
            (
            <twig:ValueSync:Output format="{percent}%">
                50%
            </twig:ValueSync:Output>)
        </span>
    </div>
    <twig:Slider id="ratio" name="ratio" min="0" max="1" step="0.1" value="0.5" />
</twig:ValueSync>
```

### Progress

The bar follows the slider.

```twig
<twig:ValueSync class="mx-auto flex w-full max-w-xs flex-col gap-6">
    <twig:ValueSync:Progress :value="50" />
    <twig:Slider name="progress" value="50" aria-label="Progress" />
</twig:ValueSync>
```

### Number Input

`ValueSync:Field` shows the value and changes it: typing a number moves the thumb, and moving the thumb rewrites the field. Give it the same `min` and `max` as the slider.

```twig
<twig:ValueSync class="mx-auto grid w-full max-w-sm gap-4">
    <div class="flex items-center justify-between">
        <twig:Label for="opacity" class="text-sm font-medium">
            Opacity
        </twig:Label>
        <div class="flex items-center gap-1.5">
            <twig:ValueSync:Field id="opacity" min="0" max="100" step="1" value="50" class="h-8 w-16! text-center text-sm tabular-nums" />
            <span class="text-xs text-muted-foreground">
                %
            </span>
        </div>
    </div>
    <twig:Slider name="opacity" value="50" aria-label="Opacity" />
</twig:ValueSync>
```

### Value Tooltip

`ValueSync:Tooltip` is a bubble that follows the thumb. Put it above the slider, in a `relative` wrapper that leaves room for it.

```twig
<twig:ValueSync class="mx-auto grid w-full max-w-sm gap-4">
    <twig:Label class="text-sm font-medium">
        Volume
    </twig:Label>
    <div class="relative pt-7">
        <twig:ValueSync:Tooltip format="{value}%">
            50%
        </twig:ValueSync:Tooltip>
        <twig:Slider name="volume" value="50" aria-label="Volume" />
    </div>
</twig:ValueSync>
```

### Emoji Rating

`steps` gives a text per threshold: the one of the highest threshold that is not above the value is shown. Two outputs, an emoji and a label, read the same slider.

```twig
<twig:ValueSync class="mx-auto grid w-full max-w-sm gap-3">
    <twig:Label class="text-sm font-medium">
        Rate your experience
    </twig:Label>
    <div class="flex items-center gap-3">
        <twig:Slider name="rating" min="1" max="5" step="1" value="3" aria-label="Rating" />
        <twig:ValueSync:Output :steps="{1: '😡', 2: '🙁', 3: '😐', 4: '🙂', 5: '😍'}" class="text-2xl" aria-hidden="true">
            😐
        </twig:ValueSync:Output>
    </div>
    <twig:ValueSync:Output :steps="{1: 'Awful', 2: 'Poor', 3: 'Okay', 4: 'Good', 5: 'Amazing'}" class="text-center text-xs font-medium text-muted-foreground">
        Okay
    </twig:ValueSync:Output>
</twig:ValueSync>
```

### Field only

Without a slider, the field is the source: the other parts follow what is typed.

```twig
<twig:ValueSync class="mx-auto grid w-full max-w-xs gap-3">
    <twig:ValueSync:Field min="0" max="100" value="25" aria-label="Score" />
    <twig:ValueSync:Progress :value="25" />
</twig:ValueSync>
```

## Accessibility

- The values are written into text elements and the progress bar keeps `role="progressbar"` with an up-to-date `aria-valuenow`.
- Mark purely decorative outputs, such as an emoji, with `aria-hidden="true"` and keep a text output for screen readers, as in the emoji example.
- The bubble is decoration: the slider thumb already carries `aria-valuenow`.
- Give the `Slider` an `aria-label`, or a `Label` pointing to it.

## API

### `<twig:ValueSync>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | string | | Classes of the root element. |

| Block | Description |
| --- | --- |
| `default` | The source (a `Slider`, or a `Field`) and the parts that show its value. |

### `<twig:ValueSync:Output>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `format` | string, null | `null` | The text: `{value}` is the value, `{percent}` its position as a percentage, `{step}` the text of the current step. Without it, `{value}`, or `{step}` when `steps` is set. |
| `steps` | array, null | `null` | Texts by threshold, for example `{1: 'Poor', 4: 'Good'}`: the highest threshold that is not above the value wins. |
| `decimals` | number, null | `null` | The number of decimals of the value. |
| `as` | string | `span` | The HTML tag to render. |

| Block | Description |
| --- | --- |
| `default` | The text shown before the script runs. |

### `<twig:ValueSync:Tooltip>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `format` | string, null | `null` | The text, as for `Output`. |
| `steps` | array, null | `null` | Texts by threshold, as for `Output`. |
| `decimals` | number, null | `null` | The number of decimals of the value. |

| Block | Description |
| --- | --- |
| `default` | The text shown before the script runs. |

### `<twig:ValueSync:Progress>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number | `0` | The percentage shown before the script runs. |

### `<twig:ValueSync:Field>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | string | `number` | The type of the field. Other attributes (`min`, `max`, `step`, `value`, `id`...) go to the input. |

# Color Picker

> Color field with a popover: saturation/brightness area, hue and opacity sliders, typed CSS colors, swatches and eye dropper.

## Installation

- popover
- button
- input

## Usage

```twig
<twig:ColorPicker name="brand_color" value="#3b82f6" />
```

## Examples

### Basic

The trigger shows the current color; the popover has the saturation/brightness area, the hue slider and a typed field that accepts any CSS color (`#3b82f6`, `rgb(...)`, `hsl(...)`, `rebeccapurple`...).

<!-- height: 400 -->

```twig
<twig:ColorPicker name="brand_color" value="#3b82f6" label="Brand color" />
```

### Swatches

Put `ColorPicker:Swatch` elements in the slot to add a row of preset colors.

<!-- height: 400 -->

```twig
<twig:ColorPicker name="label_color" value="#22c55e" label="Label color">
    <twig:ColorPicker:Swatch color="#ef4444" />
    <twig:ColorPicker:Swatch color="#f97316" />
    <twig:ColorPicker:Swatch color="#eab308" />
    <twig:ColorPicker:Swatch color="#22c55e" />
    <twig:ColorPicker:Swatch color="#3b82f6" />
    <twig:ColorPicker:Swatch color="#8b5cf6" />
    <twig:ColorPicker:Swatch color="#ec4899" />
    <twig:ColorPicker:Swatch color="#64748b" />
</twig:ColorPicker>
```

### With an external label

`label` is the accessible name of the trigger and is not displayed. For a visible label, compose the picker with the shadcn `Field` and point the label at `id`.

<!-- height: 400 -->

```twig
<twig:Field class="w-fit">
    <twig:Field:Label for="brand">Brand color</twig:Field:Label>
    <twig:ColorPicker id="brand" name="brand" value="#3b82f6" label="Brand color" />
</twig:Field>
```

### Opacity

`alpha` enables the opacity slider; the output then includes the alpha channel when the color is not opaque.

<!-- height: 400 -->

```twig
<twig:ColorPicker name="overlay" value="#0f172a" alpha label="Overlay color" />
```

### Output format

`format` sets how the submitted value is written: `hex` (default, lowercase), `rgb` or `hsl`.

<!-- height: 400 -->

```twig
<div class="flex flex-wrap gap-3">
    <twig:ColorPicker name="as_hex" value="#3b82f6" format="hex" />
    <twig:ColorPicker name="as_rgb" value="#3b82f6" format="rgb" />
    <twig:ColorPicker name="as_hsl" value="#3b82f6" format="hsl" />
</div>
```

### Disabled

```twig
<twig:ColorPicker name="locked" value="#94a3b8" disabled />
```

## Accessibility

- The saturation/brightness area is a `slider` that can be moved with the arrow keys (`Shift` + arrow moves by 10%), and its value text names both channels.
- The hue and opacity sliders are native range inputs with accessible names.
- `Esc` closes the popover and returns focus to the trigger; a click outside closes it too.
- The typed field accepts any color the browser understands; an invalid value is discarded on `Enter` or blur and the previous color is restored.
- The eye dropper button only appears in browsers that support the EyeDropper API (Chromium).
- Events: `color-picker:change` fires on every move and `color-picker:commit` once per interaction, both with `detail.value`.

## API

### `<twig:ColorPicker>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name. The submitted value is a plain CSS color string. |
| `value` | string | `#3b82f6` | Initial color (any CSS color). |
| `format` | `hex`, `rgb`, `hsl` | `hex` | Format of the submitted value. |
| `alpha` | bool | `false` | Enables the opacity slider. Without it, the output is always opaque. |
| `disabled` | bool | `false` | Disables the picker. |
| `label` | string | `Pick a color` | Accessible label of the trigger and the popover (not displayed). |
| `id` | string | `null` | Id of the trigger, for an external `<label for>`. |
| `areaLabel` | string | `Saturation and brightness` | Accessible name of the color area. |
| `saturationLabel` | string | `Saturation` | Word used in the area's spoken value. |
| `brightnessLabel` | string | `Brightness` | Word used in the area's spoken value. |
| `hueLabel` | string | `Hue` | Accessible name of the hue slider. |
| `opacityLabel` | string | `Opacity` | Accessible name of the opacity slider. |
| `fieldLabel` | string | `Color value` | Accessible name of the typed field. |
| `eyedropperLabel` | string | `Pick a color from the screen` | Accessible name of the eye dropper button. |
| `swatchesLabel` | string | `Preset colors` | Accessible name of the swatch list. |

| Block | Description |
|---|---|
| `default` | `ColorPicker:Swatch` elements: the preset colors. |

### `<twig:ColorPicker:Swatch>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | string | | Preset color (any CSS color). |

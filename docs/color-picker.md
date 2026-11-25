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
    <twig:Field:Label for="brand">
        Brand color
    </twig:Field:Label>
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

### Text & Highlight

Two pickers drive a preview: the color of the text and the color behind it. The `color-picker:change` event fires while the color moves.

<!-- height: 420 -->

```twig
<div id="text-highlight" class="flex max-w-sm flex-col gap-4">
    <div class="flex gap-3">
        <twig:Field class="w-auto">
            <twig:Field:Label>
                Text
            </twig:Field:Label>
            <twig:ColorPicker name="text_color" value="#1e293b" label="Text color" data-role="text" />
        </twig:Field>
        <twig:Field class="w-auto">
            <twig:Field:Label>
                Highlight
            </twig:Field:Label>
            <twig:ColorPicker name="highlight_color" value="#fde68a" label="Highlight color" data-role="highlight" />
        </twig:Field>
    </div>
    <p data-preview class="rounded-md px-3 py-2 text-sm" style="color: #1e293b; background: #fde68a">
        The quick brown fox jumps over the lazy dog.
    </p>
</div>
<script>
    const textHighlight = document.getElementById('text-highlight');
    textHighlight.addEventListener('color-picker:change', (event) => {
        const preview = textHighlight.querySelector('[data-preview]');
        if ('text' === event.target.dataset.role) preview.style.color = event.detail.value;
        else preview.style.background = event.detail.value;
    });
</script>
```

### Contrast Checker

The ratio between two colors is computed on every move and compared with the WCAG thresholds.

<!-- height: 420 -->

```twig
<div id="contrast-checker" class="flex max-w-sm flex-col gap-4">
    <div class="flex gap-3">
        <twig:Field class="w-auto">
            <twig:Field:Label>
                Foreground
            </twig:Field:Label>
            <twig:ColorPicker name="foreground" value="#475569" label="Foreground color" data-role="foreground" />
        </twig:Field>
        <twig:Field class="w-auto">
            <twig:Field:Label>
                Background
            </twig:Field:Label>
            <twig:ColorPicker name="background" value="#ffffff" label="Background color" data-role="background" />
        </twig:Field>
    </div>
    <div data-sample class="rounded-md border border-border px-3 py-3" style="color: #475569; background: #ffffff">
        <p class="text-base font-semibold">
            Sample heading
        </p>
        <p class="text-sm">
            Body text on this background.
        </p>
    </div>
    <p class="text-sm">
        Contrast ratio <strong data-ratio>7.58</strong>:1 · <span data-verdict>AA and AAA</span>
    </p>
</div>
<script>
    const checker = document.getElementById('contrast-checker');
    const colors = { foreground: '#475569', background: '#ffffff' };
    const luminance = (hex) => {
        const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
            .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    checker.addEventListener('color-picker:change', (event) => {
        colors[event.target.dataset.role] = event.detail.value;
        const sample = checker.querySelector('[data-sample]');
        sample.style.color = colors.foreground;
        sample.style.background = colors.background;
        const [a, b] = [luminance(colors.foreground), luminance(colors.background)];
        const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
        checker.querySelector('[data-ratio]').textContent = ratio.toFixed(2);
        checker.querySelector('[data-verdict]').textContent = ratio >= 7 ? 'AA and AAA' : ratio >= 4.5 ? 'AA only' : ratio >= 3 ? 'Large text only' : 'Fails';
    });
</script>
```

### Design Inspector

The fill, stroke and shadow of a shape in an inspector panel, each with its own picker.

<!-- height: 480 -->

```twig
<div id="design-inspector" class="flex flex-wrap items-start gap-6">
    <twig:Card class="w-64">
        <twig:Card:Header>
            <twig:Card:Title>
                Appearance
            </twig:Card:Title>
        </twig:Card:Header>
        <twig:Card:Content class="flex flex-col gap-4">
            <twig:Field orientation="horizontal" class="items-center justify-between">
                <twig:Field:Label>
                    Fill
                </twig:Field:Label>
                <twig:ColorPicker name="fill" value="#3b82f6" label="Fill color" data-role="fill" />
            </twig:Field>
            <twig:Field orientation="horizontal" class="items-center justify-between">
                <twig:Field:Label>
                    Stroke
                </twig:Field:Label>
                <twig:ColorPicker name="stroke" value="#1d4ed8" label="Stroke color" data-role="stroke" />
            </twig:Field>
            <twig:Field orientation="horizontal" class="items-center justify-between">
                <twig:Field:Label>
                    Shadow
                </twig:Field:Label>
                <twig:ColorPicker name="shadow" value="#0f172a" alpha format="rgb" label="Shadow color" data-role="shadow" />
            </twig:Field>
        </twig:Card:Content>
    </twig:Card>
    <div data-shape class="size-32 rounded-2xl border-4" style="background: #3b82f6; border-color: #1d4ed8; box-shadow: 0 10px 20px #0f172a66"></div>
</div>
<script>
    const inspector = document.getElementById('design-inspector');
    inspector.addEventListener('color-picker:change', (event) => {
        const shape = inspector.querySelector('[data-shape]');
        const role = event.target.dataset.role;
        if ('fill' === role) shape.style.background = event.detail.value;
        if ('stroke' === role) shape.style.borderColor = event.detail.value;
        if ('shadow' === role) shape.style.boxShadow = '0 10px 20px ' + event.detail.value;
    });
</script>
```

### Brand Scale

Three brand colors, each with its own picker, and the resulting tints and shades underneath.

<!-- height: 480 -->

```twig
<div id="brand-scale" class="flex max-w-md flex-col gap-4">
    <div class="flex gap-3">
        <twig:Field class="w-auto">
            <twig:Field:Label>
                Primary
            </twig:Field:Label>
            <twig:ColorPicker name="primary" value="#6366f1" label="Primary color" data-role="primary" />
        </twig:Field>
        <twig:Field class="w-auto">
            <twig:Field:Label>
                Accent
            </twig:Field:Label>
            <twig:ColorPicker name="accent" value="#ec4899" label="Accent color" data-role="accent" />
        </twig:Field>
        <twig:Field class="w-auto">
            <twig:Field:Label>
                Neutral
            </twig:Field:Label>
            <twig:ColorPicker name="neutral" value="#64748b" label="Neutral color" data-role="neutral" />
        </twig:Field>
    </div>
    <div class="grid gap-2">
        <div data-scale="primary" class="flex h-8 overflow-hidden rounded-md"></div>
        <div data-scale="accent" class="flex h-8 overflow-hidden rounded-md"></div>
        <div data-scale="neutral" class="flex h-8 overflow-hidden rounded-md"></div>
    </div>
</div>
<script>
    const brand = document.getElementById('brand-scale');
    const steps = [10, 30, 50, 75, 100, 85, 65, 45];
    const draw = (role, color) => {
        const row = brand.querySelector('[data-scale="' + role + '"]');
        row.replaceChildren(...steps.map((step, index) => {
            const cell = document.createElement('div');
            cell.className = 'flex-1';
            const mix = index < 4 ? 'white' : 'black';
            const amount = index < 4 ? 100 - step : 100 - step;
            cell.style.background = 'color-mix(in srgb, ' + color + ' ' + (index < 4 ? step : step) + '%, ' + mix + ')';
            return cell;
        }));
    };
    brand.addEventListener('color-picker:change', (event) => draw(event.target.dataset.role, event.detail.value));
    draw('primary', '#6366f1');
    draw('accent', '#ec4899');
    draw('neutral', '#64748b');
</script>
```

### Form Validation

Inside a `Field`, with a description and an error message from the server's validation.

<!-- height: 160 -->

```twig
<twig:Field data-invalid="true" class="max-w-xs">
    <twig:Field:Label for="brand-color">
        Brand color
    </twig:Field:Label>
    <twig:ColorPicker id="brand-color" name="brand" value="#fef08a" label="Brand color" aria-invalid="true" />
    <twig:Field:Description>
        It must be dark enough for white text.
    </twig:Field:Description>
    <twig:Field:Error>
        This color is too light: pick a darker one.
    </twig:Field:Error>
</twig:Field>
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

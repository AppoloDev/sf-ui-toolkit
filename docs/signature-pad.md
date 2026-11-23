# Signature Pad

> Handwritten signature captured with a mouse, a finger or a stylus, exported as PNG, JPEG, SVG or JSON.

## Usage

```twig
<twig:SignaturePad name="signature" />
```

## Examples

### Basic

Draw in the area. The stroke width follows pen pressure on a stylus and the drawing speed on a mouse or a finger. `Ctrl`/`Cmd` + `Z` undoes and `Ctrl`/`Cmd` + `Shift` + `Z` redoes.

```twig
<twig:SignaturePad name="signature" class="max-w-md" />
```

### Export format

`format` sets what the form field submits: `png` (default) and `jpeg` are data URLs, `svg` is the markup, `json` is the stroke data, which can be loaded back through `value`. `jpeg` is always filled with a background (white by default).

```twig
<twig:SignaturePad name="signature_svg" format="svg" color="#1d4ed8" class="max-w-md" />
```

### Stored signature

Pass a stored `json` export as `value` to show or continue a signature.

```twig
<twig:SignaturePad name="signature" format="json" class="max-w-md"
    value='{"version":1,"strokes":[[[0.08,0.62,0,0],[0.14,0.35,60,0],[0.2,0.6,120,0],[0.26,0.38,180,0],[0.32,0.62,240,0]],[[0.38,0.55,400,0],[0.55,0.52,460,0],[0.75,0.4,520,0],[0.9,0.6,580,0]]]}' />
```

### Pen only

`pointerTypes` restricts the input, for example to a stylus so that a resting palm is ignored. Use `pen`, `touch` or `mouse`.

```twig
<twig:SignaturePad name="signature" pointerTypes="pen" placeholder="Sign with the stylus" class="max-w-md" />
```

### Read only and disabled

`readonly` keeps the ink at full strength and stops the input; `disabled` also dims the pad. Both remove the pad from the tab order.

```twig
<div class="grid max-w-md gap-4">
    <twig:SignaturePad format="json" readonly value='{"version":1,"strokes":[[[0.1,0.6,0,0],[0.3,0.3,80,0],[0.5,0.6,160,0],[0.7,0.3,240,0],[0.9,0.6,320,0]]]}' />
    <twig:SignaturePad disabled />
</div>
```

### Required

With `required`, the browser blocks the form submission while the pad is empty.

```twig
<form class="grid max-w-md gap-3" onsubmit="return false">
    <twig:SignaturePad name="signature" required />
    <button type="submit" class="h-9 w-fit rounded-md bg-primary px-4 text-sm text-primary-foreground">Sign</button>
</form>
```

## Accessibility

- The drawing area is a focusable `application` region with the accessible name `label` and a role description.
- `Ctrl`/`Cmd` + `Z` undoes, `Ctrl`/`Cmd` + `Shift` + `Z` and `Ctrl`/`Cmd` + `Y` redo; the toolbar buttons have accessible names and disable themselves when there is nothing to do. When "Clear" disables itself, focus returns to the area.
- Drawing needs a pointer. Offer an alternative for people who cannot use one, for example a typed-name field next to the pad.
- `readonly` and `disabled` pads are not focusable.
- Events: `signature-pad:change` fires once per finished stroke, undo, redo and clear, with `detail.empty` and `detail.value`.
- The form is reset with the pad: a `reset` event clears the signature.

## API

### `<twig:SignaturePad>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name. The value depends on `format`; it is empty while the pad is empty. |
| `format` | `png`, `jpeg`, `svg`, `json` | `png` | Submitted format. `json` keeps the strokes so the signature can be redrawn. |
| `value` | string | `''` | A stored `json` export to display. |
| `background` | string | `null` | Fill of exports (any CSS color). Transparent by default, white for `jpeg`. |
| `color` | string | `#000000` | Ink color of the exports. The on-screen ink follows the text color. |
| `minWidth` | number | `0.8` | Thinnest stroke width, in px. |
| `maxWidth` | number | `2.6` | Thickest stroke width, in px. |
| `pointerTypes` | `all`, `pen`, `touch`, `mouse` | `all` | Accepted input devices. |
| `required` | bool | `false` | The form cannot be submitted while the pad is empty. |
| `readonly` | bool | `false` | Shows the signature without input or toolbar. |
| `disabled` | bool | `false` | Dims the pad, no input, not focusable. |
| `label` | string | `Signature` | Accessible name of the drawing area and the toolbar. |
| `placeholder` | string | `Sign here` | Hint shown on an empty pad. |
| `undoLabel` | string | `Undo` | Accessible name of the undo button. |
| `redoLabel` | string | `Redo` | Accessible name of the redo button. |
| `clearLabel` | string | `Clear` | Text of the clear button. |

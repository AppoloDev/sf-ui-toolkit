# Signature Pad

> Handwritten signature captured with a mouse, a finger or a stylus, exported as PNG, JPEG, SVG or JSON.

## Installation

- button

## Usage

```twig
<twig:SignaturePad name="signature" />
```

## Examples

### Basic

Draw in the area. The stroke width follows pen pressure on a stylus and the drawing speed on a mouse or a finger. `Ctrl`/`Cmd` + `Z` undoes and `Ctrl`/`Cmd` + `Shift` + `Z` redoes; the toolbar has undo, redo and clear.

```twig
<twig:SignaturePad name="signature" class="max-w-md" />
```

### Without toolbar

`:toolbar="false"` hides the buttons; the keyboard shortcuts still work.

```twig
<twig:SignaturePad name="signature" :toolbar="false" class="max-w-md" />
```

### Form field with SVG

The pad submits its value through `name`. With `required` the browser blocks the submission while the pad is empty, and resetting the form clears the signature.

```twig
<form class="grid max-w-md gap-3" onsubmit="event.preventDefault(); this.querySelector('output').textContent = this.signature.value ? this.signature.value.length + ' characters of SVG submitted' : ''">
    <twig:SignaturePad name="signature" format="svg" required />
    <div class="flex items-center gap-2">
        <twig:Button type="submit">Sign</twig:Button>
        <twig:Button variant="outline" type="reset">Reset</twig:Button>
        <output class="text-sm text-muted-foreground"></output>
    </div>
</form>
```

### Ink colors, line weights and replay

Put `SignaturePad:Color` elements in the `colors` block to add ink color buttons (the first one is the initial ink), and `weights` adds thin, regular and bold. Each stroke keeps its own color and weight. The content of the component is rendered under the toolbar: use it for your own controls, wired with Stimulus actions such as `signature-pad#replay` and `signature-pad#download`.

```twig
<twig:SignaturePad name="signature" weights class="max-w-md">
    <twig:block name="colors">
        <twig:SignaturePad:Color color="#111827" />
        <twig:SignaturePad:Color color="#1d4ed8" />
        <twig:SignaturePad:Color color="#dc2626" />
    </twig:block>
    <div class="flex gap-2">
        <twig:Button variant="outline" data-action="signature-pad#replay">Replay</twig:Button>
        <twig:Button variant="outline" data-action="signature-pad#download" data-signature-pad-format-param="png">Download PNG</twig:Button>
        <twig:Button variant="outline" data-action="signature-pad#download" data-signature-pad-format-param="svg">Download SVG</twig:Button>
    </div>
</twig:SignaturePad>
```

### Formats, preview and payload size

`format` is `png` (default), `jpeg`, `svg` or `json`. Inside the component, a `preview` target (an `img`) shows the export and a `size` target shows the payload size. The download actions can export any format, whatever the one submitted.

```twig
<twig:SignaturePad name="signature" class="max-w-md">
    <div class="flex items-center gap-3 rounded-md border border-border p-2">
        <img alt="Signature preview" hidden class="h-12 rounded bg-muted object-contain" data-signature-pad-target="preview">
        <span class="text-sm text-muted-foreground">Payload: <span data-signature-pad-target="size">0 B</span></span>
        <span class="ml-auto flex gap-1">
            <twig:Button variant="outline" size="sm" data-action="signature-pad#download" data-signature-pad-format-param="png">PNG</twig:Button>
            <twig:Button variant="outline" size="sm" data-action="signature-pad#download" data-signature-pad-format-param="jpeg">JPEG</twig:Button>
            <twig:Button variant="outline" size="sm" data-action="signature-pad#download" data-signature-pad-format-param="svg">SVG</twig:Button>
            <twig:Button variant="outline" size="sm" data-action="signature-pad#download" data-signature-pad-format-param="json">JSON</twig:Button>
        </span>
    </div>
</twig:SignaturePad>
```

### Draw or type

Drawing needs a pointer. A text input wired to `signature-pad#typeName` renders the typed name in a handwriting font as the signature; drawing again replaces it.

```twig
<twig:SignaturePad name="signature" class="max-w-md">
    <twig:Field>
        <twig:Field:Label for="typed-name">Or type your name</twig:Field:Label>
        <twig:Input id="typed-name" autocomplete="name" data-action="input->signature-pad#typeName" />
    </twig:Field>
</twig:SignaturePad>
```

### Agreement card, locked once signed

`signature-pad#lock` freezes the pad: no more input, every button disabled. The `signature-pad:lock` event carries the value, to send it to the server.

```twig
<div class="grid max-w-md gap-3 rounded-lg border border-border p-4">
    <p class="text-sm">I have read and accept the terms of the agreement.</p>
    <twig:SignaturePad name="agreement" format="svg">
        <div class="flex items-center gap-3">
            <twig:Button data-action="signature-pad#lock"
                    onclick="this.nextElementSibling.textContent = 'Signed on ' + new Date().toLocaleDateString()">Sign and date</twig:Button>
            <span class="text-sm text-muted-foreground"></span>
        </div>
    </twig:SignaturePad>
</div>
```

### Pen only

`pointerTypes` restricts the input, for example to a stylus so that a resting palm is ignored. Use `pen`, `touch` or `mouse`.

```twig
<twig:SignaturePad name="signature" pointerTypes="pen" placeholder="Sign with the stylus" class="max-w-md" />
```

### Initials per clause

Several pads can live on one page; listen to `signature-pad:change` to count the completed ones.

```twig
<div class="grid max-w-md gap-3">
    <div id="clauses" class="grid gap-3">
        {% for clause in ['Payment terms', 'Confidentiality', 'Termination'] %}
            <div class="grid grid-cols-[1fr_8rem] items-center gap-3">
                <span class="text-sm">{{ clause }}</span>
                <twig:SignaturePad name="initials_{{ loop.index }}" :toolbar="false" placeholder="Initials" class="[&_div.relative]:h-14" />
            </div>
        {% endfor %}
    </div>
    <p class="text-sm text-muted-foreground"><span id="initialed">0</span> of 3 initialed</p>
</div>
<script>
    const clauses = document.getElementById('clauses');
    clauses.addEventListener('signature-pad:change', () => {
        document.getElementById('initialed').textContent = [...clauses.querySelectorAll('input[name^=initials_]')].filter((input) => input.value).length;
    });
</script>
```

### Read an exported value from outside

The submitted field is a plain input named `name`, so any script can read it. Here an external button attaches the PNG as a file.

```twig
<div class="grid max-w-md gap-3">
    <twig:SignaturePad name="signature" id="sig" />
    <div class="flex items-center gap-2">
        <twig:Button variant="outline" id="attach">Attach as file</twig:Button>
        <span id="attached" class="text-sm text-muted-foreground"></span>
    </div>
</div>
<script>
    document.getElementById('attach').addEventListener('click', async () => {
        const value = document.querySelector('[name=signature]').value;
        if (!value) return;
        const blob = await (await fetch(value)).blob();
        const file = new File([blob], 'signature.png', { type: 'image/png' });
        document.getElementById('attached').textContent = file.name + ' (' + (file.size / 1024).toFixed(1) + ' KB)';
    });
</script>
```

### Stored signature, read only and disabled

Pass a stored `json` export as `value` to show or continue a signature. `readonly` keeps the ink at full strength and stops the input; `disabled` also dims the pad. Both remove the pad from the tab order.

```twig
<div class="grid max-w-md gap-4">
    <twig:SignaturePad format="json" readonly value='{"version":1,"strokes":[[[0.08,0.62,0,0],[0.14,0.35,60,0],[0.2,0.6,120,0],[0.26,0.38,180,0],[0.32,0.62,240,0]],[[0.38,0.55,400,0],[0.55,0.52,460,0],[0.75,0.4,520,0],[0.9,0.6,580,0]]]}' />
    <twig:SignaturePad disabled />
</div>
```

## Accessibility

- The drawing area is a focusable `application` region with the accessible name `label` and a role description. `readonly` and `disabled` pads are not focusable.
- `Ctrl`/`Cmd` + `Z` undoes, `Ctrl`/`Cmd` + `Shift` + `Z` and `Ctrl`/`Cmd` + `Y` redo. The toolbar buttons have accessible names and disable themselves when there is nothing to do; when "Clear" disables itself, focus returns to the area.
- Drawing needs a pointer: offer the typed-name alternative (`signature-pad#typeName`) to people who cannot use one.
- The color and weight buttons are toggle buttons (`aria-pressed`).
- Events: `signature-pad:change` fires once per finished stroke, undo, redo, clear and typed name, with `detail.empty` and `detail.value`; `signature-pad:lock` fires when the pad is locked.
- A form `reset` clears the signature.

## API

### `<twig:SignaturePad>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name. The value depends on `format`; it is empty while the pad is empty. |
| `format` | `png`, `jpeg`, `svg`, `json` | `png` | Submitted format. `json` keeps the strokes (color, weight, points) so the signature can be redrawn. |
| `value` | string | `''` | A stored `json` export to display. |
| `background` | string | `null` | Fill of exports (any CSS color). Transparent by default, white for `jpeg`. |
| `weights` | bool | `false` | Shows the thin, regular and bold buttons. |
| `toolbar` | bool | `true` | Shows the undo, redo and clear buttons. |
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
| `colorLabel` | string | `Ink color` | Accessible name of the color group. |
| `weightLabel` | string | `Line weight` | Accessible name of the weight group. |
| `thinLabel` | string | `Thin` | Accessible name of the thin weight button. |
| `regularLabel` | string | `Regular` | Accessible name of the regular weight button. |
| `boldLabel` | string | `Bold` | Accessible name of the bold weight button. |

| Block | Description |
|---|---|
| `default` | Your own controls and readouts, rendered under the toolbar and wired with the `signature-pad` actions. |
| `colors` | `SignaturePad:Color` elements: the inks offered in the toolbar. |

### Content, actions and targets

The content of the component is rendered under the toolbar. Controls placed there can use these Stimulus actions: `signature-pad#undo`, `#redo`, `#clear`, `#replay`, `#lock`, `#download` (with `data-signature-pad-format-param`), `#setColor` (`data-signature-pad-color-param`), `#setWeight` (`data-signature-pad-weight-param`) and `#typeName` (on an `input`). Two targets are filled for you: `data-signature-pad-target="preview"` (an `img`) and `data-signature-pad-target="size"` (payload size).

### `<twig:SignaturePad:Color>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | string | | Ink color (any CSS color). Put it in the `colors` block of the pad; the first one is the initial ink. Without any, there is one ink: the text color on screen, black in exports. |

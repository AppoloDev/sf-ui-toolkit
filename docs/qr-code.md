# QR Code

> Draws a QR code in the browser from a text or a URL, as an SVG that follows the theme colors, with error correction levels, a logo slot, live updates and an optional download button.

## Installation

- input (only for the live example)
- card and badge (only for the label example)

The recipe needs the `qrcode` package: `php bin/console importmap:require qrcode`.

## Usage

```twig
<twig:QrCode value="https://symfony.com/ux" label="QR code of the Symfony UX page" />
```

The code is drawn in the browser with the `qrcode` package, loaded when the first code is shown. To draw it on the server instead, render the SVG in PHP with a library such as `endroid/qr-code` and print it in your template.

## Examples

### Standard

A QR code for a URL. It takes the text and background colors of the theme: switch the theme of the docs to see it follow.

<!-- height: 240 -->

```twig
<twig:QrCode value="https://symfony.com/ux" label="QR code of the Symfony UX page" />
```

### Robust

`level="H"` adds error correction: the code stays readable when up to 30% of it is hidden or damaged, at the price of a denser pattern.

<!-- height: 240 -->

```twig
<div class="flex items-start gap-6">
    <twig:QrCode value="https://symfony.com/ux" level="L" label="Level L" />
    <twig:QrCode value="https://symfony.com/ux" level="H" label="Level H" />
</div>
```

### Sizes

The `size` is in pixels; the code is a vector, so it stays sharp.

<!-- height: 280 -->

```twig
<div class="flex items-end gap-6">
    <twig:QrCode value="https://symfony.com/ux" :size="96" label="Small" />
    <twig:QrCode value="https://symfony.com/ux" :size="144" label="Medium" />
    <twig:QrCode value="https://symfony.com/ux" :size="208" label="Large" />
</div>
```

### Text

Any text can be encoded, not only a URL.

<!-- height: 240 -->

```twig
<twig:QrCode value="Meeting room 4, second floor. Coffee is on the way." label="QR code of a short message" />
```

### Custom Colors

Fixed colors for the modules and the background. Keep a strong contrast: scanners expect dark modules on a light background.

<!-- height: 240 -->

```twig
<div class="flex items-start gap-6">
    <twig:QrCode value="https://symfony.com/ux" foreground="#1e3a8a" background="#dbeafe" label="Blue code" />
    <twig:QrCode value="https://symfony.com/ux" foreground="#000000" background="#ffffff" label="Black on white" />
</div>
```

### With A Logo

The `logo` block sits over the middle of the code. Use level `H` so that the hidden part can be recovered.

<!-- height: 260 -->

```twig
<twig:QrCode value="https://symfony.com/ux" level="H" :size="176" label="QR code with a logo">
    <twig:block name="logo">
        <twig:ux:icon name="lucide:qr-code" class="size-full" />
    </twig:block>
</twig:QrCode>
```

### Download

`downloadLabel` adds a button that saves the code as an SVG file named `filename`.

<!-- height: 280 -->

```twig
<twig:QrCode value="https://symfony.com/ux" downloadLabel="Download SVG" filename="symfony-ux.svg" label="QR code of the Symfony UX page" />
```

### Live Value

The code follows `data-qr-code-value-value`: here, what is typed in the field.

<!-- height: 320 -->

```twig
<div class="grid max-w-xs gap-3">
    <twig:Input id="qr-live" value="https://symfony.com" aria-label="Text to encode" />
    <twig:QrCode id="qr-live-code" value="https://symfony.com" label="QR code of the text above" />
</div>
<script>
    document.getElementById('qr-live').addEventListener('input', (event) => {
        document.getElementById('qr-live-code').setAttribute('data-qr-code-value-value', event.target.value);
    });
</script>
```

### Wi-Fi Network

The text of a Wi-Fi code: phones offer to join the network.

<!-- height: 240 -->

```twig
<twig:QrCode value="WIFI:T:WPA;S:Office;P:correct-horse-battery;;" level="Q" label="QR code to join the Office Wi-Fi network" />
```

### Contact Card

A vCard: scanning it offers to add the contact.

<!-- height: 260 -->

```twig
<twig:QrCode value="BEGIN:VCARD&#10;VERSION:3.0&#10;FN:Ada Lovelace&#10;ORG:Analytical Engines&#10;TEL:+442012345678&#10;EMAIL:ada@example.com&#10;END:VCARD" level="Q" :size="192" label="QR code of the contact card of Ada Lovelace" />
```

### Equipment Label

A label for a piece of equipment, built with `Card` and `Badge`: the code carries the identifier that a scan opens.

<!-- height: 360 -->

```twig
<twig:Card class="w-64">
    <twig:Card:Header>
        <twig:Card:Title>
            Laptop 0042
        </twig:Card:Title>
        <twig:Card:Description>
            Inventory label
        </twig:Card:Description>
        <twig:Card:Action>
            <twig:Badge variant="secondary">IT</twig:Badge>
        </twig:Card:Action>
    </twig:Card:Header>
    <twig:Card:Content class="flex justify-center">
        <twig:QrCode value="https://example.com/assets/0042" :size="144" level="Q" label="QR code of the laptop 0042" />
    </twig:Card:Content>
</twig:Card>
```

### Too Long For The Level

When the text does not fit the level, `qr-code:error` is fired and the code stays empty: lower the level or shorten the text.

<!-- height: 200 -->

```twig
<div class="grid gap-2">
    <twig:QrCode id="qr-error" level="H" value="" label="QR code" />
    <p class="text-sm text-muted-foreground" id="qr-error-text">
        Waiting…
    </p>
</div>
<script>
    const code = document.getElementById('qr-error');
    code.addEventListener('qr-code:error', () => document.getElementById('qr-error-text').textContent = 'The text is too long for level H.');
    code.setAttribute('data-qr-code-value-value', 'x'.repeat(5000));
</script>
```

## Accessibility

- The code is an image (`role="img"`) with an accessible name (`label`). Say what the code leads to: a screen reader user cannot scan it, so also give the text or the link next to it.
- The default colors follow the theme. Scanners expect dark modules on a light background: if a scan fails in the dark theme, set `foreground` and `background`.
- The download button is a real button with its text (`downloadLabel`).

## Extending

The controller dispatches `qr-code:render` with the SVG text in `detail.svg` when a code is drawn, and `qr-code:error` when the value cannot be encoded. Change `data-qr-code-value-value` (or `data-qr-code-level-value`) to redraw it.

## API

### `<twig:QrCode>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | string | | The text or the URL to encode. |
| `size` | integer | `160` | The side of the code, in pixels. |
| `level` | `L`, `M`, `Q`, `H` | `M` | The error correction level: 7%, 15%, 25% or 30% of the code can be hidden. |
| `margin` | integer | `1` | The quiet zone around the code, in modules. |
| `label` | string | `QR code` | The accessible name of the code. |
| `foreground` | string or null | `null` | The color of the modules. Without it, the text color of the theme. |
| `background` | string or null | `null` | The color of the background. Without it, the background color of the theme. |
| `downloadLabel` | string or null | `null` | The text of a button that downloads the SVG. Without it, no button. |
| `filename` | string | `qr-code.svg` | The name of the downloaded file. |

| Block | Description |
| --- | --- |
| `logo` | An image or an icon shown in the middle of the code. Use level `H`. |

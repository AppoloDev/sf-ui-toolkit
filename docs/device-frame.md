# Device Frame

> Frames for screenshots and live previews: a phone (iOS or Android style), a tablet, a laptop and a browser window with an address bar. CSS only.

## Installation

- card, button (only for one example)

## Usage

```twig
<twig:DeviceFrame device="browser" url="https://example.com">
    <img src="screenshot.png" alt="The dashboard">
</twig:DeviceFrame>
```

## Examples

### Browser

A window with the three dots and an address bar.

<!-- height: 340 -->

```twig
<twig:DeviceFrame device="browser" url="https://example.com/dashboard" class="w-full max-w-lg">
    <div class="grid h-full min-h-48 place-items-center bg-gradient-to-br from-sky-400 to-indigo-600 p-6 text-center text-xl font-semibold text-white">
            Your app here
        </div>
</twig:DeviceFrame>
```

### Laptop

A laptop with its base.

<!-- height: 340 -->

```twig
<twig:DeviceFrame device="laptop" class="w-full max-w-lg">
    <div class="grid h-full min-h-48 place-items-center bg-gradient-to-br from-sky-400 to-indigo-600 p-6 text-center text-xl font-semibold text-white">
            Your app here
        </div>
</twig:DeviceFrame>
```

### Phone iOS

An iPhone-style frame with a pill at the top.

<!-- height: 600 -->

```twig
<twig:DeviceFrame device="iphone">
    <div class="grid h-full min-h-48 place-items-center bg-gradient-to-br from-sky-400 to-indigo-600 p-6 text-center text-xl font-semibold text-white">
            Your app here
        </div>
</twig:DeviceFrame>
```

### Phone Android

An Android-style frame with a punch-hole camera.

<!-- height: 600 -->

```twig
<twig:DeviceFrame device="android">
    <div class="grid h-full min-h-48 place-items-center bg-gradient-to-br from-sky-400 to-indigo-600 p-6 text-center text-xl font-semibold text-white">
            Your app here
        </div>
</twig:DeviceFrame>
```

### Tablet

A tablet.

<!-- height: 520 -->

```twig
<twig:DeviceFrame device="tablet">
    <div class="grid h-full min-h-48 place-items-center bg-gradient-to-br from-sky-400 to-indigo-600 p-6 text-center text-xl font-semibold text-white">
            Your app here
        </div>
</twig:DeviceFrame>
```

### Landscape

`landscape` turns a phone or a tablet.

<!-- height: 340 -->

```twig
<twig:DeviceFrame device="iphone" :landscape="true">
    <div class="grid h-full min-h-48 place-items-center bg-gradient-to-br from-sky-400 to-indigo-600 p-6 text-center text-xl font-semibold text-white">
            Your app here
        </div>
</twig:DeviceFrame>
```

### Live Content

The screen can hold real content, such as the official `Card`.

<!-- height: 600 -->

```twig
<twig:DeviceFrame device="android">
    <div class="grid gap-3 p-4">
        <twig:Card>
            <twig:Card:Header>
                <twig:Card:Title>
                    Inbox
                </twig:Card:Title>
                <twig:Card:Description>
                    3 new messages
                </twig:Card:Description>
            </twig:Card:Header>
        </twig:Card>
        <twig:Button>
            Compose
        </twig:Button>
    </div>
</twig:DeviceFrame>
```

## Accessibility

- The frame is decoration: the content inside is read normally, so give screenshots an `alt` that describes the screen.
- Give the frame a `label` when it groups something that needs a name.

## API

### `<twig:DeviceFrame>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `device` | `iphone`, `android`, `tablet`, `laptop`, `browser` | `browser` | The kind of frame. |
| `url` | string or null | `null` | The address shown in a browser frame. |
| `label` | string or null | `null` | An accessible name for the frame. |
| `landscape` | bool | `false` | Rotate a phone or a tablet. |

| Block | Description |
| --- | --- |
| `default` | The screen. |

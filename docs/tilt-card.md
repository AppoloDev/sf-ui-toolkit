# Tilt Card

> A wrapper that tilts its content in 3D toward the pointer, with an optional glare, scale on hover, a smooth return, and no movement for people who prefer reduced motion.

## Installation

- card (only for the examples)

## Usage

```twig
<twig:TiltCard :glare="true">
    <twig:Card>…</twig:Card>
</twig:TiltCard>
```

Give the wrapper `class="w-fit"` (or a width) when it should hug its content.

## Examples

### Basic

The card leans toward the pointer and comes back to rest when it leaves.

<!-- height: 200 -->

```twig
<twig:TiltCard class="w-fit">
    <twig:Card class="w-64">
        <twig:Card:Header>
            <twig:Card:Title>
                Tilt
            </twig:Card:Title>
            <twig:Card:Description>
                Move the pointer over the card.
            </twig:Card:Description>
        </twig:Card:Header>
    </twig:Card>
</twig:TiltCard>
```

### With Glare

`glare` adds a light that follows the pointer.

<!-- height: 200 -->

```twig
<twig:TiltCard :glare="true" class="w-fit">
    <twig:Card class="w-64">
        <twig:Card:Header>
            <twig:Card:Title>
                Glare
            </twig:Card:Title>
            <twig:Card:Description>
                Move the pointer over the card.
            </twig:Card:Description>
        </twig:Card:Header>
    </twig:Card>
</twig:TiltCard>
```

### Strong Tilt

`max` in degrees and a larger `scale`.

<!-- height: 200 -->

```twig
<twig:TiltCard :max="25" :scale="1.08" class="w-fit">
    <twig:Card class="w-64">
        <twig:Card:Header>
            <twig:Card:Title>
                Strong
            </twig:Card:Title>
            <twig:Card:Description>
                Move the pointer over the card.
            </twig:Card:Description>
        </twig:Card:Header>
    </twig:Card>
</twig:TiltCard>
```

### Reverse

`reverse` tilts away from the pointer.

<!-- height: 200 -->

```twig
<twig:TiltCard :reverse="true" class="w-fit">
    <twig:Card class="w-64">
        <twig:Card:Header>
            <twig:Card:Title>
                Reverse
            </twig:Card:Title>
            <twig:Card:Description>
                Move the pointer over the card.
            </twig:Card:Description>
        </twig:Card:Header>
    </twig:Card>
</twig:TiltCard>
```

### Image

Any content tilts, such as an image.

<!-- height: 220 -->

```twig
<twig:TiltCard :glare="true" class="w-fit">
    <div class="h-40 w-64 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-600"></div>
</twig:TiltCard>
```

## Accessibility

- The effect is decoration only: nothing depends on it, and the content keeps its normal reading and focus order.
- No movement for people who prefer reduced motion, and none on touch pointers.

## API

### `<twig:TiltCard>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `max` | number | `12` | The largest tilt, in degrees. |
| `scale` | number | `1.02` | The scale while the pointer is over the card. |
| `glare` | bool | `false` | Add a light that follows the pointer. |
| `perspective` | integer | `800` | The CSS perspective, in pixels. |
| `speed` | integer | `300` | The duration of the return to rest, in milliseconds. |
| `reverse` | bool | `false` | Tilt away from the pointer. |

| Block | Description |
| --- | --- |
| `default` | The content that tilts. |

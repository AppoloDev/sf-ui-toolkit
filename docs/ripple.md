# Ripple

> Two ripple effects: concentric rings that pulse behind a centered element (a hero, a call to action), and a click ripple on any button or card.

## Installation

- button, badge, card (only for the examples)

## Usage

```twig
<twig:Ripple class="h-72"><twig:Button>Get started</twig:Button></twig:Ripple>
<twig:Ripple mode="click"><twig:Button>Press</twig:Button></twig:Ripple>
```

## Examples

### Rings

Concentric rings pulse behind the content.

<!-- height: 300 -->

```twig
<twig:Ripple class="h-72 w-full rounded-lg border">
    <twig:Button size="lg">
        Get started
    </twig:Button>
</twig:Ripple>
```

### Fewer Rings

`rings` and `size`.

<!-- height: 240 -->

```twig
<twig:Ripple :rings="2" :size="120" class="h-56 w-full rounded-lg border">
    <twig:Badge>
        New
    </twig:Badge>
</twig:Ripple>
```

### Colored Rings

`color` is a border utility.

<!-- height: 300 -->

```twig
<twig:Ripple color="border-primary/30" class="h-72 w-full rounded-lg border">
    <twig:Button size="lg">
        Subscribe
    </twig:Button>
</twig:Ripple>
```

### Slow

`duration` in seconds for rings.

<!-- height: 300 -->

```twig
<twig:Ripple :duration="6" class="h-72 w-full rounded-lg border">
    <span class="text-sm font-medium">
        Listening…
    </span>
</twig:Ripple>
```

### Click Wave

`mode="click"`: a wave grows from the pointer on every press.

<!-- height: 120 -->

```twig
<twig:Ripple mode="click" class="rounded-md">
    <twig:Button>
        Press me
    </twig:Button>
</twig:Ripple>
```

### Click On A Card

The wave is clipped to the rounded corners of its container.

<!-- height: 160 -->

```twig
<twig:Ripple mode="click" class="w-64 rounded-xl">
    <twig:Card>
        <twig:Card:Header>
            <twig:Card:Title>
                Press the card
            </twig:Card:Title>
        </twig:Card:Header>
    </twig:Card>
</twig:Ripple>
```

## Accessibility

- Both effects are decoration (`aria-hidden`, not focusable) and are switched off for people who prefer reduced motion.
- Nothing depends on the effect: the content keeps its normal behavior.

## API

### `<twig:Ripple>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `mode` | `rings`, `click` | `rings` | Concentric rings, or a wave on click. |
| `rings` | integer | `4` | The number of rings. |
| `size` | integer | `160` | The size of the first ring, in pixels. |
| `duration` | integer | `3` | One pulse in seconds (rings); more than 20 means milliseconds for the click wave, which otherwise lasts 600 ms. |
| `color` | string or null | `null` | A Tailwind utility: a border color for rings, a background for the wave. |

| Block | Description |
| --- | --- |
| `default` | The content. |

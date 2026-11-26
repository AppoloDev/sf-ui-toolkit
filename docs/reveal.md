# Reveal

> Reveals content as it scrolls into view: fade, slide or zoom, a delay for staggering, a one-time or repeating effect, and no animation at all for people who prefer reduced motion.

## Installation

- card, badge (only for the examples)

## Usage

```twig
<twig:Reveal effect="up" :delay="100">
    <h2>It appears when it comes into view</h2>
</twig:Reveal>
```

## Examples

### Fade Up

The default: the content rises while it fades in.

<!-- height: 300 -->

```twig
<div class="h-64 overflow-auto rounded-lg border p-4">
    <p class="mb-48 text-sm text-muted-foreground">
        Scroll down.
    </p>
    <twig:Reveal effect="up">
        <twig:Card class="max-w-sm">
            <twig:Card:Header>
                <twig:Card:Title>
                    Effect: up
                </twig:Card:Title>
            </twig:Card:Header>
        </twig:Card>
    </twig:Reveal>
    <div class="h-24"></div>
</div>
```

### Effects

`fade`, `up`, `down`, `left`, `right` and `zoom`.

<!-- height: 300 -->

```twig
<div class="h-64 overflow-auto rounded-lg border p-4">
    <p class="mb-48 text-sm text-muted-foreground">
        Scroll down.
    </p>
    <twig:Reveal class="mb-6" effect="fade">
        <twig:Card class="max-w-sm">
            <twig:Card:Header>
                <twig:Card:Title>
                    Effect: fade
                </twig:Card:Title>
            </twig:Card:Header>
        </twig:Card>
    </twig:Reveal>
    <twig:Reveal class="mb-6" effect="up">
        <twig:Card class="max-w-sm">
            <twig:Card:Header>
                <twig:Card:Title>
                    Effect: up
                </twig:Card:Title>
            </twig:Card:Header>
        </twig:Card>
    </twig:Reveal>
    <twig:Reveal class="mb-6" effect="down">
        <twig:Card class="max-w-sm">
            <twig:Card:Header>
                <twig:Card:Title>
                    Effect: down
                </twig:Card:Title>
            </twig:Card:Header>
        </twig:Card>
    </twig:Reveal>
    <twig:Reveal class="mb-6" effect="left">
        <twig:Card class="max-w-sm">
            <twig:Card:Header>
                <twig:Card:Title>
                    Effect: left
                </twig:Card:Title>
            </twig:Card:Header>
        </twig:Card>
    </twig:Reveal>
    <twig:Reveal class="mb-6" effect="right">
        <twig:Card class="max-w-sm">
            <twig:Card:Header>
                <twig:Card:Title>
                    Effect: right
                </twig:Card:Title>
            </twig:Card:Header>
        </twig:Card>
    </twig:Reveal>
    <twig:Reveal class="mb-6" effect="zoom">
        <twig:Card class="max-w-sm">
            <twig:Card:Header>
                <twig:Card:Title>
                    Effect: zoom
                </twig:Card:Title>
            </twig:Card:Header>
        </twig:Card>
    </twig:Reveal>
    <div class="h-24"></div>
</div>
```

### Stagger

`delay` offsets each item, so a list appears one after the other.

<!-- height: 300 -->

```twig
<div class="h-64 overflow-auto rounded-lg border p-4">
    <p class="mb-48 text-sm text-muted-foreground">
        Scroll down.
    </p>
    <twig:Reveal :delay="0" class="mb-2">
        <twig:Badge>
            Item 1
        </twig:Badge>
    </twig:Reveal>
    <twig:Reveal :delay="150" class="mb-2">
        <twig:Badge>
            Item 2
        </twig:Badge>
    </twig:Reveal>
    <twig:Reveal :delay="300" class="mb-2">
        <twig:Badge>
            Item 3
        </twig:Badge>
    </twig:Reveal>
    <twig:Reveal :delay="450" class="mb-2">
        <twig:Badge>
            Item 4
        </twig:Badge>
    </twig:Reveal>
    <twig:Reveal :delay="600" class="mb-2">
        <twig:Badge>
            Item 5
        </twig:Badge>
    </twig:Reveal>
    <div class="h-24"></div>
</div>
```

### Every Time

`once` off hides the content again when it leaves the screen.

<!-- height: 300 -->

```twig
<div class="h-64 overflow-auto rounded-lg border p-4">
    <p class="mb-48 text-sm text-muted-foreground">
        Scroll down.
    </p>
    <twig:Reveal effect="zoom" :once="false">
        <twig:Card class="max-w-sm">
            <twig:Card:Header>
                <twig:Card:Title>
                    Effect: zoom
                </twig:Card:Title>
            </twig:Card:Header>
        </twig:Card>
    </twig:Reveal>
    <div class="h-24"></div>
</div>
```

### Slow

`duration` in milliseconds.

<!-- height: 300 -->

```twig
<div class="h-64 overflow-auto rounded-lg border p-4">
    <p class="mb-48 text-sm text-muted-foreground">
        Scroll down.
    </p>
    <twig:Reveal effect="fade" :duration="1500">
        <twig:Card class="max-w-sm">
            <twig:Card:Header>
                <twig:Card:Title>
                    Effect: fade
                </twig:Card:Title>
            </twig:Card:Header>
        </twig:Card>
    </twig:Reveal>
    <div class="h-24"></div>
</div>
```

### Another Tag

`as` changes the tag: here a list item in a list.

<!-- height: 140 -->

```twig
<ul class="grid gap-2 text-sm">
    <twig:Reveal as="li" effect="left">
        First
    </twig:Reveal>
    <twig:Reveal as="li" effect="left" :delay="120">
        Second
    </twig:Reveal>
</ul>
```

## Accessibility

- The content is visible without JavaScript and for people who prefer reduced motion: the hidden state is only set by the script, and the transitions are switched off for reduced motion.
- The effect is decoration: never hide information that is only reachable by scrolling to it with a pointer. Screen readers read the content whether it is visible yet or not.

## Extending

- `reveal:show` and `reveal:hide` when the content appears and (with `once` off) disappears.

## API

### `<twig:Reveal>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `effect` | `fade`, `up`, `down`, `left`, `right`, `zoom` | `up` | The effect. |
| `delay` | integer | `0` | The delay, in milliseconds. |
| `duration` | integer | `600` | The duration, in milliseconds. |
| `once` | bool | `true` | Reveal once. |
| `threshold` | number | `0.2` | The part of the element that must be visible, from 0 to 1. |
| `as` | string | `div` | The HTML tag. |

| Block | Description |
| --- | --- |
| `default` | The content to reveal. |

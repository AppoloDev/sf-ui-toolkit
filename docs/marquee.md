# Marquee

> Content that scrolls in a loop: logos, quotes, badges. Direction, speed, pause on hover, soft fading edges, vertical mode, and a still version for people who prefer reduced motion.

## Installation

- badge, card (only for the examples)

## Usage

```twig
<twig:Marquee :duration="30" label="Our customers">
    <img src="/logos/a.svg" alt="A" class="h-8">
    <img src="/logos/b.svg" alt="B" class="h-8">
</twig:Marquee>
```

Put enough items to be wider than the container: the content is repeated once to make the loop seamless.

## Examples

### Basic

A row of badges that loops. Hover to pause.

<!-- height: 120 -->

```twig
<twig:Marquee>
    <twig:Badge variant="secondary">
        Symfony
    </twig:Badge>
    <twig:Badge variant="secondary">
        Twig
    </twig:Badge>
    <twig:Badge variant="secondary">
        Stimulus
    </twig:Badge>
    <twig:Badge variant="secondary">
        Turbo
    </twig:Badge>
    <twig:Badge variant="secondary">
        Tailwind
    </twig:Badge>
    <twig:Badge variant="secondary">
        Doctrine
    </twig:Badge>
    <twig:Badge variant="secondary">
        Mercure
    </twig:Badge>
    <twig:Badge variant="secondary">
        Messenger
    </twig:Badge>
</twig:Marquee>
```

### Right

`direction="right"` reverses it.

<!-- height: 120 -->

```twig
<twig:Marquee direction="right" :duration="20">
    <twig:Badge variant="secondary">
        Symfony
    </twig:Badge>
    <twig:Badge variant="secondary">
        Twig
    </twig:Badge>
    <twig:Badge variant="secondary">
        Stimulus
    </twig:Badge>
    <twig:Badge variant="secondary">
        Turbo
    </twig:Badge>
    <twig:Badge variant="secondary">
        Tailwind
    </twig:Badge>
    <twig:Badge variant="secondary">
        Doctrine
    </twig:Badge>
    <twig:Badge variant="secondary">
        Mercure
    </twig:Badge>
    <twig:Badge variant="secondary">
        Messenger
    </twig:Badge>
</twig:Marquee>
```

### Without Fade

`fade` off shows hard edges.

<!-- height: 120 -->

```twig
<twig:Marquee :fade="false">
    <twig:Badge variant="secondary">
        Symfony
    </twig:Badge>
    <twig:Badge variant="secondary">
        Twig
    </twig:Badge>
    <twig:Badge variant="secondary">
        Stimulus
    </twig:Badge>
    <twig:Badge variant="secondary">
        Turbo
    </twig:Badge>
    <twig:Badge variant="secondary">
        Tailwind
    </twig:Badge>
    <twig:Badge variant="secondary">
        Doctrine
    </twig:Badge>
    <twig:Badge variant="secondary">
        Mercure
    </twig:Badge>
    <twig:Badge variant="secondary">
        Messenger
    </twig:Badge>
</twig:Marquee>
```

### Cards

Testimonials with the official `Card`.

<!-- height: 200 -->

```twig
<twig:Marquee :duration="40" gap="4" label="What people say">
    <twig:Card class="w-64 shrink-0">
        <twig:Card:Header>
            <twig:Card:Title>
                Ada
            </twig:Card:Title>
            <twig:Card:Description>
                Fast and clear.
            </twig:Card:Description>
        </twig:Card:Header>
    </twig:Card>
    <twig:Card class="w-64 shrink-0">
        <twig:Card:Header>
            <twig:Card:Title>
                Grace
            </twig:Card:Title>
            <twig:Card:Description>
                Saved us a week.
            </twig:Card:Description>
        </twig:Card:Header>
    </twig:Card>
    <twig:Card class="w-64 shrink-0">
        <twig:Card:Header>
            <twig:Card:Title>
                Alan
            </twig:Card:Title>
            <twig:Card:Description>
                Does what it says.
            </twig:Card:Description>
        </twig:Card:Header>
    </twig:Card>
    <twig:Card class="w-64 shrink-0">
        <twig:Card:Header>
            <twig:Card:Title>
                Katherine
            </twig:Card:Title>
            <twig:Card:Description>
                A pleasure to use.
            </twig:Card:Description>
        </twig:Card:Header>
    </twig:Card>
</twig:Marquee>
```

### Vertical

`vertical` scrolls up (or down). The marquee needs a height.

<!-- height: 200 -->

```twig
<twig:Marquee :vertical="true" :duration="20" class="h-40 w-48">
    <twig:Badge variant="secondary">
        Symfony
    </twig:Badge>
    <twig:Badge variant="secondary">
        Twig
    </twig:Badge>
    <twig:Badge variant="secondary">
        Stimulus
    </twig:Badge>
    <twig:Badge variant="secondary">
        Turbo
    </twig:Badge>
    <twig:Badge variant="secondary">
        Tailwind
    </twig:Badge>
    <twig:Badge variant="secondary">
        Doctrine
    </twig:Badge>
    <twig:Badge variant="secondary">
        Mercure
    </twig:Badge>
    <twig:Badge variant="secondary">
        Messenger
    </twig:Badge>
</twig:Marquee>
```

### No Pause

`pauseOnHover` off keeps it moving.

<!-- height: 120 -->

```twig
<twig:Marquee :pauseOnHover="false">
    <twig:Badge variant="secondary">
        Symfony
    </twig:Badge>
    <twig:Badge variant="secondary">
        Twig
    </twig:Badge>
    <twig:Badge variant="secondary">
        Stimulus
    </twig:Badge>
    <twig:Badge variant="secondary">
        Turbo
    </twig:Badge>
    <twig:Badge variant="secondary">
        Tailwind
    </twig:Badge>
    <twig:Badge variant="secondary">
        Doctrine
    </twig:Badge>
    <twig:Badge variant="secondary">
        Mercure
    </twig:Badge>
    <twig:Badge variant="secondary">
        Messenger
    </twig:Badge>
</twig:Marquee>
```

## Accessibility

- Moving content is distracting: it pauses on hover and on focus, and it stops (stays still) for people who prefer reduced motion.
- The repeated copy is `aria-hidden`, so a screen reader reads each item once; give a `label` when the items carry meaning.
- Do not put anything essential only in a marquee.

## API

### `<twig:Marquee>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `left`, `right`, `up`, `down` | `left` | The direction of the movement. |
| `duration` | integer | `30` | The time of one full loop, in seconds. |
| `pauseOnHover` | bool | `true` | Pause on hover and on focus. |
| `gap` | string | `8` | A Tailwind gap value. |
| `fade` | bool | `true` | Fade the edges. |
| `vertical` | bool | `false` | Scroll vertically. |
| `label` | string or null | `null` | The accessible name of the group. |

| Block | Description |
| --- | --- |
| `default` | The items that scroll. |

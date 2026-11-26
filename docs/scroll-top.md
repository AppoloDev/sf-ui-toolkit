# Scroll Top

> A button that appears after the page (or a scrolling box) has been scrolled and brings it back to the top, with a smooth scroll that respects reduced motion.

## Installation

- button (only for one example)

## Usage

Put it once in the layout. Without `target` it follows the page.

```twig
<twig:ScrollTop :threshold="400" />
```

For a scrolling box, give `target` a CSS selector and put the button in a `relative` wrapper around the box.

## Examples

### Basic

Scroll the box: the button shows after 100 pixels and scrolls it back to the top. Without `target`, the button follows the page.

<!-- height: 300 -->

```twig
<div class="relative">
    <div id="st-box" class="h-56 overflow-auto rounded-lg border p-4 text-sm text-muted-foreground">
        <p class="h-[40rem]">
            Scroll down this box: the button appears at the bottom.
        </p>
    </div>
    <twig:ScrollTop target="#st-box" :threshold="100" />
</div>
```

### Left And Center

`position` puts it at the bottom left or center.

<!-- height: 300 -->

```twig
<div class="relative">
    <div id="st-box" class="h-56 overflow-auto rounded-lg border p-4 text-sm text-muted-foreground">
        <p class="h-[40rem]">
            Scroll down this box: the button appears at the bottom.
        </p>
    </div>
    <twig:ScrollTop target="#st-box" :threshold="100" position="bottom-center" />
</div>
```

### Custom Content

The default block replaces the arrow: here a labelled pill.

<!-- height: 300 -->

```twig
<div class="relative">
    <div id="st-box" class="h-56 overflow-auto rounded-lg border p-4 text-sm text-muted-foreground">
        <p class="h-[40rem]">
            Scroll down this box: the button appears at the bottom.
        </p>
    </div>
    <twig:ScrollTop target="#st-box" :threshold="100" class="w-auto gap-1.5 px-3 text-sm">
        <twig:ux:icon name="lucide:arrow-up" class="size-4" />
        Top
    </twig:ScrollTop>
</div>
```

### With The Button Component

The official `Button` as the content, with the round look kept by classes.

<!-- height: 300 -->

```twig
<div class="relative">
    <div id="st-box" class="h-56 overflow-auto rounded-lg border p-4 text-sm text-muted-foreground">
        <p class="h-[40rem]">
            Scroll down this box: the button appears at the bottom.
        </p>
    </div>
    <twig:ScrollTop target="#st-box" :threshold="100" class="border-0 bg-transparent p-0 shadow-none">
        <twig:Button size="icon" variant="secondary" class="rounded-full">
            <twig:ux:icon name="lucide:chevron-up" class="size-4" />
        </twig:Button>
    </twig:ScrollTop>
</div>
```

### Another Language

The label is a prop.

<!-- height: 300 -->

```twig
<div class="relative">
    <div id="st-box" class="h-56 overflow-auto rounded-lg border p-4 text-sm text-muted-foreground">
        <p class="h-[40rem]">
            Scroll down this box: the button appears at the bottom.
        </p>
    </div>
    <twig:ScrollTop target="#st-box" :threshold="100" label="Retour en haut" />
</div>
```

## Accessibility

- The button has an accessible name (`label`) and is hidden (not just invisible) while the page is at the top.
- Smooth scrolling is switched off for people who prefer reduced motion.

## Extending

- `scroll-top:top` when the button brings the page back to the top.

## API

### `<twig:ScrollTop>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `threshold` | integer | `300` | The scroll distance, in pixels, after which the button shows. |
| `target` | string or null | `null` | A CSS selector of a scrolling box. Without it, the page. |
| `label` | string | `Back to top` | The accessible name of the button. |
| `position` | `bottom-right`, `bottom-left`, `bottom-center` | `bottom-right` | Where the button sits. |
| `smooth` | bool | `true` | Scroll smoothly. |

| Block | Description |
| --- | --- |
| `default` | The content of the button; an arrow icon by default. |

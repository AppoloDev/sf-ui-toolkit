# Skip Nav

> Skip links for keyboard and screen reader users: hidden until focused, they jump over the navigation to the main content.

## Usage

Put `SkipNav` first in the `<body>`, and give the target an `id` and `tabindex="-1"` so that it can take the focus.

```twig
<twig:SkipNav href="#main" />
<header>…</header>
<main id="main" tabindex="-1">…</main>
```

## Examples

### Basic

Focus the preview with a click on its blank area, then press Tab: the link slides in. It is the first element of the page, before the navigation.

<!-- height: 200 -->

```twig
<twig:SkipNav href="#skip-main" />
<header class="flex items-center gap-4 border-b p-3 text-sm">
    <a href="#" class="font-semibold">Acme</a>
    <a href="#" class="text-muted-foreground">Products</a>
    <a href="#" class="text-muted-foreground">Pricing</a>
</header>
<main id="skip-main" tabindex="-1" class="p-4 text-sm outline-none">
    Main content: the link lands here.
</main>
```

### Custom Label

Another text for the link, in the language of the page.

<!-- height: 120 -->

```twig
<twig:SkipNav href="#skip-label" linkLabel="Go to the content" label="Quick links" />
<main id="skip-label" tabindex="-1" class="p-4 text-sm outline-none">
    Content.
</main>
```

### Several Links

`SkipNav:Link` for each target: the content, the search and the footer.

<!-- height: 200 -->

```twig
<twig:SkipNav>
    <twig:SkipNav:Link href="#skip-several-main">
        Skip to content
    </twig:SkipNav:Link>
    <twig:SkipNav:Link href="#skip-several-search">
        Skip to search
    </twig:SkipNav:Link>
    <twig:SkipNav:Link href="#skip-several-footer">
        Skip to footer
    </twig:SkipNav:Link>
</twig:SkipNav>
<div class="grid gap-3 p-4 text-sm">
    <main id="skip-several-main" tabindex="-1" class="outline-none">Main</main>
    <section id="skip-several-search" tabindex="-1" class="outline-none">Search</section>
    <footer id="skip-several-footer" tabindex="-1" class="outline-none">Footer</footer>
</div>
```

### Centered

`position="center"` shows the links at the top center of the page.

<!-- height: 120 -->

```twig
<twig:SkipNav href="#skip-center" position="center" />
<main id="skip-center" tabindex="-1" class="p-4 text-sm outline-none">
    Content.
</main>
```

### Always Visible

Overriding the position classes keeps the link in the flow, for a preview or a debugging session.

<!-- height: 140 -->

```twig
<twig:SkipNav href="#skip-visible" class="static translate-y-0 w-fit" />
<main id="skip-visible" tabindex="-1" class="p-4 text-sm outline-none">
    Content.
</main>
```

## Accessibility

- The links are the first focusable elements of the page: a keyboard user reaches them with the first Tab and skips the repeated navigation (WCAG 2.4.1, bypass blocks).
- The group is a `nav` with an accessible name (`label`); both texts are props, so write them in the language of the page.
- The target needs `tabindex="-1"` (or to be focusable) so that the focus moves into it and not only the scroll.
- The links are moved out of view, not removed with `display: none`, so they stay reachable by keyboard and screen reader.

## API

### `<twig:SkipNav>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | string | `#main` | The target of the single link: the id of the main content. |
| `linkLabel` | string | `Skip to main content` | The text of the single link. |
| `label` | string | `Skip links` | The accessible name of the group of links. |
| `position` | `start`, `center` | `start` | Where the links appear when focused. |

| Block | Description |
| --- | --- |
| `default` | `SkipNav:Link` elements, to offer several targets. Without it, a single link to `href` is shown. |

### `<twig:SkipNav:Link>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | string | `#main` | The id of the target, with its `#`. |

| Block | Description |
| --- | --- |
| `default` | The text of the link. |

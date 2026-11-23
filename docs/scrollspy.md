# Scrollspy

> Table-of-contents navigation that highlights the section currently in view.

## Usage

```twig
<twig:Scrollspy>
    <twig:Scrollspy:Link href="#introduction">Introduction</twig:Scrollspy:Link>
    <twig:Scrollspy:Link href="#usage">Usage</twig:Scrollspy:Link>
</twig:Scrollspy>
```

## Examples

### In a scroll area

`root` is a CSS selector of the scrolling element. Without it the spy follows the page scroll, which is the usual case for a sticky table of contents. Scroll the panel, or click a link.

```twig
<div class="flex gap-6">
    <twig:Scrollspy root="#spy-panel" class="w-40 shrink-0 border-l border-border">
        <twig:Scrollspy:Link href="#spy-intro">Introduction</twig:Scrollspy:Link>
        <twig:Scrollspy:Link href="#spy-install">Installation</twig:Scrollspy:Link>
        <twig:Scrollspy:Link href="#spy-usage">Usage</twig:Scrollspy:Link>
        <twig:Scrollspy:Link href="#spy-api">API</twig:Scrollspy:Link>
    </twig:Scrollspy>
    <div id="spy-panel" class="h-64 flex-1 overflow-y-auto rounded-md border border-border p-4 text-sm">
        <section id="spy-intro" class="min-h-48"><h3 class="font-medium">Introduction</h3><p class="mt-2 text-muted-foreground">Scroll to see the link of the visible section light up.</p></section>
        <section id="spy-install" class="min-h-48"><h3 class="font-medium">Installation</h3><p class="mt-2 text-muted-foreground">Install the component with the Symfony UX Toolkit.</p></section>
        <section id="spy-usage" class="min-h-48"><h3 class="font-medium">Usage</h3><p class="mt-2 text-muted-foreground">Add a link for each section, with its id as the href.</p></section>
        <section id="spy-api" class="min-h-48"><h3 class="font-medium">API</h3><p class="mt-2 text-muted-foreground">The last section becomes active at the very bottom.</p></section>
    </div>
</div>
```

### With a fixed header

`offset` keeps the active section below a fixed header: a section becomes active, and a click scrolls, that many pixels above its top.

```twig
<twig:Scrollspy :offset="80" :history="false" label="Sections">
    <twig:Scrollspy:Link href="#profile">Profile</twig:Scrollspy:Link>
    <twig:Scrollspy:Link href="#security">Security</twig:Scrollspy:Link>
</twig:Scrollspy>
```

## Accessibility

- The navigation is a `nav` landmark with the accessible name `label`; the active link has `aria-current="location"`.
- A click scrolls smoothly (instantly with `prefers-reduced-motion`) and moves focus to the section, so keyboard and screen reader users land where the link points.
- With `history` on (the default), the URL hash follows the active section through `replaceState`, without adding history entries.
- Event: `scrollspy:change` fires when the active section changes, with `detail.id`.

## API

### `<twig:Scrollspy>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `root` | string | `null` | CSS selector of the scrolling element. Defaults to the page. |
| `offset` | int | `0` | Pixels kept above the active section (for a fixed header). |
| `history` | bool | `true` | Keep the URL hash in sync with the active section. |
| `label` | string | `On this page` | Accessible name of the navigation. |

### `<twig:Scrollspy:Link>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | string | required | `#<section id>`. The link is active (`data-active="true"`) while the section is in view. |

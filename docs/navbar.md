# Navbar

> Application bar with start, center and end areas, an optional row of tabs, sticky and bordered options, and link items with active state and count.

## Usage

The bar is layout only: you put the brand, the navigation and the actions in its areas. `Navbar:Link` is a link with an active state, for the middle area or for the tabs row.

```twig
<twig:Navbar>
    <twig:block name="start"><a href="/" class="text-sm font-semibold">Acme</a></twig:block>
    <nav aria-label="Main" class="flex gap-1">
        <twig:Navbar:Link href="/" active>Dashboard</twig:Navbar:Link>
        <twig:Navbar:Link href="/reports">Reports</twig:Navbar:Link>
    </nav>
    <twig:block name="end"><a href="/new" class="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground">New</a></twig:block>
</twig:Navbar>
```

## Examples

### Brand, links and actions

The default slot takes the remaining width. Wrap the links in a named `nav`.

```twig
<twig:Navbar>
    <twig:block name="start">
        <a href="#" class="flex items-center gap-2 text-sm font-semibold"><twig:ux:icon name="lucide:layers" class="size-5" aria-hidden="true" />Acme</a>
    </twig:block>
    <nav aria-label="Main" class="flex gap-1">
        <twig:Navbar:Link href="#" active icon="lucide:layout-dashboard">Dashboard</twig:Navbar:Link>
        <twig:Navbar:Link href="#" icon="lucide:folder">Projects</twig:Navbar:Link>
        <twig:Navbar:Link href="#" icon="lucide:users">Team</twig:Navbar:Link>
    </nav>
    <twig:block name="end">
        <a href="#" class="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm font-medium hover:bg-muted">Share</a>
        <a href="#" class="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground">New project</a>
    </twig:block>
</twig:Navbar>
```

### Tabs row with counts

The `tabs` block is a second row under the bar, for `variant="tab"` links; `count` shows a figure after the text.

```twig
<twig:Navbar>
    <twig:block name="start"><span class="text-sm font-semibold">Apollo / Website redesign</span></twig:block>
    <twig:block name="end"><a href="#" class="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground">Create task</a></twig:block>
    <twig:block name="tabs">
        <twig:Navbar:Link variant="tab" href="#" active :count="24">Tasks</twig:Navbar:Link>
        <twig:Navbar:Link variant="tab" href="#" :count="3">Reviews</twig:Navbar:Link>
        <twig:Navbar:Link variant="tab" href="#">Files</twig:Navbar:Link>
        <twig:Navbar:Link variant="tab" href="#">Settings</twig:Navbar:Link>
    </twig:block>
</twig:Navbar>
```

### Sticky and without border

`sticky` keeps the bar at the top of the page; `bordered` set to `false` removes the rule.

```twig
<div class="h-40 overflow-y-auto rounded-lg border border-border">
    <twig:Navbar sticky :bordered="false" class="shadow-xs">
        <twig:block name="start"><span class="text-sm font-semibold">Sticky bar</span></twig:block>
        <twig:block name="end"><twig:Navbar:Link href="#" active>Docs</twig:Navbar:Link></twig:block>
    </twig:Navbar>
    <div class="grid gap-3 p-4 text-sm text-muted-foreground">
        <p>Scroll this panel: the bar stays at the top.</p>
        <p>Content line 2.</p><p>Content line 3.</p><p>Content line 4.</p><p>Content line 5.</p><p>Content line 6.</p><p>Content line 7.</p>
    </div>
</div>
```

## Accessibility

- The bar is a `header`; `label` names it when the page has several. Put the links in a `nav` with its own name.
- The current link carries `aria-current="page"`, and the active style is never the only signal.
- Links keep a visible focus ring. The tabs row scrolls horizontally on narrow screens instead of wrapping.
- The component has no mobile menu: on small screens, move the links into your own disclosure (a `details`, a Sheet) in the `end` or `tabs` block.

## API

### `<twig:Navbar>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `sticky` | bool | `false` | Stays at the top of the page while scrolling. |
| `bordered` | bool | `true` | Rule under the bar. |
| `label` | string | `null` | Accessible name of the bar. |

Blocks: `start` (brand, breadcrumb), the default slot (takes the remaining width), `end` (actions) and `tabs` (second row).

### `<twig:Navbar:Link>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | string | `#` | Destination. |
| `active` | bool | `false` | Current page: `aria-current="page"` and the active style. |
| `variant` | `pill`, `tab` | `pill` | Rounded link for the bar, or underlined link for the tabs row. |
| `icon` | string | `null` | Symfony UX Icons name shown before the text. |
| `count` | string or number | `null` | Small figure after the text. |

The default slot is the text of the link.

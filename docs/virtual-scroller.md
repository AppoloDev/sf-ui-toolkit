# Virtual Scroller

> Scrolls very long lists (and grids) without slowing the page: only the rows in view are in the DOM, with horizontal and grid layouts, lazy loading by chunks and a placeholder while a chunk loads.

## Installation

- avatar and badge (only for the components example)
- skeleton (only for the loader example)
- button (only for the scroll example)

## Usage

Give the number of items (or the items themselves) and the markup of one item. Each item has a fixed height, so the scrollbar is the real one.

```twig
<twig:VirtualScroller :count="100000" :itemHeight="40" label="Items">
    <div class="flex h-full items-center border-b px-3">
        Item #{item}
    </div>
</twig:VirtualScroller>
```

In the markup, `{index}` is the position (from 0), `{number}` the position from 1, `{item}` the item itself (its number when only `count` is given), and each key of an object item is a placeholder. Values are escaped.

## Examples

### Basic

100,000 items, a few dozen in the DOM. `{item}` is the number of the item when `count` is used.

<!-- height: 320 -->

```twig
<twig:VirtualScroller :count="100000" :itemHeight="40" label="100,000 items" class="max-w-sm">
    <div class="flex h-full items-center border-b px-3 text-sm">
        Item #{item}
    </div>
</twig:VirtualScroller>
```

### Objects

`items` holds objects; each key is a placeholder in the markup. Values are escaped.

<!-- height: 320 -->

```twig
<twig:VirtualScroller :items="range(1, 5000)|map(i => {id: i, name: 'Customer ' ~ i, city: ['Paris', 'Lyon', 'Nantes'][i % 3]})" :itemHeight="48" label="Customers" class="max-w-sm">
    <div class="flex h-full items-center justify-between border-b px-3 text-sm">
        <span class="font-medium">{name}</span>
        <span class="text-muted-foreground">{city}</span>
    </div>
</twig:VirtualScroller>
```

### With Components

The markup is plain Twig, so the kit components are available: an `Avatar` and a `Badge` per row.

<!-- height: 340 -->

```twig
<twig:VirtualScroller :items="range(1, 3000)|map(i => {name: 'Member ' ~ i, role: ['Admin', 'Editor', 'Viewer'][i % 3], initials: 'M' ~ (i % 10)})" :itemHeight="56" label="Members" class="max-w-md">
    <div class="flex h-full items-center gap-3 border-b px-3">
        <twig:Avatar class="size-8">
            <twig:Avatar:Fallback>{initials}</twig:Avatar:Fallback>
        </twig:Avatar>
        <span class="flex-1 text-sm font-medium">{name}</span>
        <twig:Badge variant="secondary">{role}</twig:Badge>
    </div>
</twig:VirtualScroller>
```

### Horizontal

`orientation="horizontal"` lays the items side by side, each `itemWidth` wide.

<!-- height: 160 -->

```twig
<twig:VirtualScroller orientation="horizontal" :count="10000" :itemWidth="120" :itemHeight="80" height="6.5rem" label="Horizontal list" class="max-w-md">
    <div class="m-2 grid h-16 place-items-center rounded-md bg-muted text-sm font-medium">
        #{item}
    </div>
</twig:VirtualScroller>
```

### Grid

`orientation="both"`: `count` rows and `columns` columns, 50,000 cells here. `{row}` and `{column}` are the coordinates.

<!-- height: 320 -->

```twig
<twig:VirtualScroller orientation="both" :count="1000" :columns="50" :itemWidth="96" :itemHeight="36" label="Grid" class="max-w-md">
    <div class="flex h-full items-center justify-center border-b border-r text-xs text-muted-foreground">
        {row}, {column}
    </div>
</twig:VirtualScroller>
```

### Lazy Loading

With `lazy`, nothing is given up front: `virtual-scroller:load` asks for the missing range and `provide(first, items)` answers, now or later (here after 400 ms, like a request).

<!-- height: 320 -->

```twig
<twig:VirtualScroller id="vs-lazy" :lazy="true" :count="100000" :itemHeight="40" label="Lazy list" class="max-w-sm">
    <div class="flex h-full items-center border-b px-3 text-sm">
        {name}
    </div>
</twig:VirtualScroller>
<script>
    document.getElementById('vs-lazy').addEventListener('virtual-scroller:load', (event) => {
        const { first, last, provide } = event.detail;
        setTimeout(() => provide(first, Array.from({ length: last - first + 1 }, (_, offset) => ({ name: 'Loaded item ' + (first + offset + 1) }))), 400);
    });
</script>
```

### Loader Placeholder

The `loader` block is shown for an item that is still loading: here a `Skeleton`.

<!-- height: 320 -->

```twig
<twig:VirtualScroller id="vs-loader" :lazy="true" :count="100000" :itemHeight="48" label="Lazy list with a placeholder" class="max-w-sm">
    <div class="flex h-full items-center border-b px-3 text-sm">
        {name}
    </div>
    <twig:block name="loader">
        <div class="flex h-full items-center gap-3 border-b px-3">
            <twig:Skeleton class="size-8 rounded-full" />
            <twig:Skeleton class="h-4 flex-1" />
        </div>
    </twig:block>
</twig:VirtualScroller>
<script>
    document.getElementById('vs-loader').addEventListener('virtual-scroller:load', (event) => {
        const { first, last, provide } = event.detail;
        setTimeout(() => provide(first, Array.from({ length: last - first + 1 }, (_, offset) => ({ name: 'Record ' + (first + offset + 1) }))), 900);
    });
</script>
```

### Scroll To An Item

`scrollTo` with an `index` param jumps to an item.

<!-- height: 380 -->

```twig
<div class="grid max-w-sm gap-2">
    <div class="flex gap-2">
        <twig:Button variant="outline" size="sm" data-action="click->virtual-scroller#scrollTo" data-virtual-scroller-index-param="0">
            First
        </twig:Button>
        <twig:Button variant="outline" size="sm" data-action="click->virtual-scroller#scrollTo" data-virtual-scroller-index-param="50000">
            Middle
        </twig:Button>
        <twig:Button variant="outline" size="sm" data-action="click->virtual-scroller#scrollTo" data-virtual-scroller-index-param="99999">
            Last
        </twig:Button>
    </div>
    <twig:VirtualScroller :count="100000" label="Jump list">
        <div class="flex h-full items-center border-b px-3 text-sm">
            Item #{item}
        </div>
    </twig:VirtualScroller>
</div>
```

### Item Height

`itemHeight` is the height of every item; use it for two-line rows.

<!-- height: 340 -->

```twig
<twig:VirtualScroller :items="range(1, 2000)|map(i => {title: 'Message ' ~ i, text: 'A short preview of what the message says.'})" :itemHeight="68" label="Messages" class="max-w-sm">
    <div class="grid h-full content-center gap-0.5 border-b px-3">
        <span class="text-sm font-medium">{title}</span>
        <span class="truncate text-xs text-muted-foreground">{text}</span>
    </div>
</twig:VirtualScroller>
```

## Accessibility

- The area is a focusable list (`role="list"`, a name from `label`) so that it can be scrolled with the keyboard. Each drawn item has `aria-posinset` and `aria-setsize`, so a screen reader announces "3 of 100000" although only a few items are in the DOM.
- An item that is still loading has `aria-busy`.
- Interactive content inside the items is created and removed while scrolling: keep the state you need in your data, not in the DOM of the items.

## Extending

`virtual-scroller:load` (lazy mode) carries `detail.first`, `detail.last` and `detail.provide(first, items)`. `virtual-scroller:scroll` carries the visible range. Items given by `items` are read once, when the page loads.

## API

### `<twig:VirtualScroller>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | array or null | `null` | The items: strings, numbers or objects. Without it, `count` items are generated. |
| `count` | integer | `0` | The number of items (or of rows in a grid) when `items` is not given, and the total with `lazy`. |
| `orientation` | `vertical`, `horizontal`, `both` | `vertical` | `both` is a grid of `count` rows and `columns` columns. |
| `itemHeight` | integer | `40` | The height of an item, in pixels. |
| `itemWidth` | integer | `160` | The width of an item, in pixels (`horizontal` and `both`). |
| `columns` | integer | `0` | The number of columns of a grid. |
| `overscan` | integer | `3` | The number of items drawn beyond the visible ones, on each side. |
| `lazy` | bool | `false` | The items are loaded on demand, through `virtual-scroller:load`. |
| `label` | string | `Scrollable list` | The accessible name of the list. |
| `height` | string | `16rem` | The height of the area, any CSS length. |

| Block | Description |
| --- | --- |
| `default` | The markup of one item, with its placeholders. |
| `loader` | The markup of an item that is still loading (lazy mode). |

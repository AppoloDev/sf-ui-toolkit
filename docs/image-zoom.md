# Image Zoom

> An image that opens in a full-screen viewer on click: zoom in and out, move around, Escape to close, and previous and next buttons to browse a group of images.

## Usage

```twig
<twig:ImageZoom src="/photos/small.jpg" fullSrc="/photos/large.jpg" alt="The harbour at dusk" caption="The harbour" />
```

Several images with the same `group` can be browsed in the viewer.

## Examples

### Basic

Click the picture to open it. The wheel, the + and - keys and the buttons zoom; a click on the image zooms in and out; drag to move when zoomed; Escape closes.

<!-- height: 260 -->

```twig
<twig:ImageZoom class="w-64" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23f97316'/%3E%3Cstop offset='1' stop-color='%23db2777'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3Ctext x='400' y='320' font-size='72' text-anchor='middle' fill='white' font-family='sans-serif'%3EOne%3C/text%3E%3C/svg%3E" alt="An orange gradient" />
```

### Larger Version

`fullSrc` is the image shown in the viewer, when the thumbnail is a small one.

<!-- height: 200 -->

```twig
<twig:ImageZoom class="w-40" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%2306b6d4'/%3E%3Cstop offset='1' stop-color='%232563eb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3Ctext x='400' y='320' font-size='72' text-anchor='middle' fill='white' font-family='sans-serif'%3ETwo%3C/text%3E%3C/svg%3E" fullSrc="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%2306b6d4'/%3E%3Cstop offset='1' stop-color='%232563eb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3Ctext x='400' y='320' font-size='72' text-anchor='middle' fill='white' font-family='sans-serif'%3ETwo%3C/text%3E%3C/svg%3E" alt="A blue gradient" />
```

### With A Caption

`caption` is written under the image in the viewer.

<!-- height: 260 -->

```twig
<twig:ImageZoom class="w-64" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%2322c55e'/%3E%3Cstop offset='1' stop-color='%230d9488'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3Ctext x='400' y='320' font-size='72' text-anchor='middle' fill='white' font-family='sans-serif'%3EThree%3C/text%3E%3C/svg%3E" alt="A green gradient" caption="Figure 1: a green gradient" />
```

### Gallery

Images with the same `group` can be browsed with the arrows (or the left and right keys) in the viewer.

<!-- height: 200 -->

```twig
<div class="grid grid-cols-3 gap-2">
    <twig:ImageZoom group="demo" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23f97316'/%3E%3Cstop offset='1' stop-color='%23db2777'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3Ctext x='400' y='320' font-size='72' text-anchor='middle' fill='white' font-family='sans-serif'%3EOne%3C/text%3E%3C/svg%3E" alt="Orange" caption="Orange" />
    <twig:ImageZoom group="demo" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%2306b6d4'/%3E%3Cstop offset='1' stop-color='%232563eb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3Ctext x='400' y='320' font-size='72' text-anchor='middle' fill='white' font-family='sans-serif'%3ETwo%3C/text%3E%3C/svg%3E" alt="Blue" caption="Blue" />
    <twig:ImageZoom group="demo" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%2322c55e'/%3E%3Cstop offset='1' stop-color='%230d9488'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3Ctext x='400' y='320' font-size='72' text-anchor='middle' fill='white' font-family='sans-serif'%3EThree%3C/text%3E%3C/svg%3E" alt="Green" caption="Green" />
</div>
```

### Custom Trigger

The default block replaces the thumbnail: here a button with the official `Button` look, using `fullSrc` for the image.

<!-- height: 120 -->

```twig
<twig:ImageZoom src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23f97316'/%3E%3Cstop offset='1' stop-color='%23db2777'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3Ctext x='400' y='320' font-size='72' text-anchor='middle' fill='white' font-family='sans-serif'%3EOne%3C/text%3E%3C/svg%3E" alt="Orange" class="w-auto rounded-md border bg-background px-3 py-1.5 text-sm font-medium shadow-xs hover:bg-accent">
    <span class="flex items-center gap-2">
        <twig:ux:icon name="lucide:zoom-in" class="size-4" />
        View the picture
    </span>
</twig:ImageZoom>
```

### Another Language

The names of the buttons are props.

<!-- height: 260 -->

```twig
<twig:ImageZoom class="w-64" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23f97316'/%3E%3Cstop offset='1' stop-color='%23db2777'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3Ctext x='400' y='320' font-size='72' text-anchor='middle' fill='white' font-family='sans-serif'%3EOne%3C/text%3E%3C/svg%3E" alt="Un dégradé orange" openLabel="Agrandir l'image" closeLabel="Fermer" zoomInLabel="Zoomer" zoomOutLabel="Dézoomer" previousLabel="Image précédente" nextLabel="Image suivante" />
```

## Accessibility

- The thumbnail is a button named "Enlarge image" followed by the alt text; the viewer is a modal dialog that traps focus and closes on Escape, and focus returns to the thumbnail.
- Zoom works with buttons and the + and - keys, not only the wheel and the pointer; left and right arrows browse a group.
- Give every image an `alt`.

## Extending

- `image-zoom:open` and `image-zoom:close` on the thumbnail.

## API

### `<twig:ImageZoom>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | string | | The thumbnail. |
| `alt` | string | | The text alternative of the image. |
| `fullSrc` | string or null | `null` | The image shown in the viewer. |
| `group` | string or null | `null` | A name shared by the images browsed together. |
| `caption` | string or null | `null` | A caption under the image in the viewer. |
| `closeLabel` | string | `Close` | The name of the close button. |
| `zoomInLabel` | string | `Zoom in` | The name of the zoom in button. |
| `zoomOutLabel` | string | `Zoom out` | The name of the zoom out button. |
| `previousLabel` | string | `Previous image` | The name of the previous button. |
| `nextLabel` | string | `Next image` | The name of the next button. |
| `openLabel` | string | `Enlarge image` | The name of the thumbnail button. |

| Block | Description |
| --- | --- |
| `default` | Replaces the thumbnail. |

# Floating Panel

> A small window that floats above the page: draggable by its header, movable with the keyboard, with minimize and close buttons, a position that stays on screen, and opened from any button.

## Installation

- button, field, textarea (only for the examples)

## Usage

```twig
<twig:FloatingPanel id="notes" title="Notes">…</twig:FloatingPanel>
```

Open it by sending the `floating-panel:request-open` event to the panel, from a button of your own, or by setting `open` for a panel that is there from the start:

```js
document.getElementById('notes').dispatchEvent(new CustomEvent('floating-panel:request-open'));
```

## Examples

### Basic

Drag the header, or focus it and use the arrow keys (Shift moves further). The minus button folds it, the cross closes it.

<!-- height: 320 -->

```twig
<twig:Button variant="outline" size="sm" onclick="document.getElementById('fp-basic').dispatchEvent(new CustomEvent('floating-panel:request-open'))">
    Open the panel
</twig:Button>
<twig:FloatingPanel id="fp-basic" title="Notes">
    Anything can live in a floating panel: notes, a calculator, a chat.
</twig:FloatingPanel>
```

### Open By Default

`open` shows it when the page loads, and `x` and `y` place it.

<!-- height: 260 -->

```twig
<twig:FloatingPanel title="Welcome" :open="true" :x="24" :y="24" :width="260">
    This one is open from the start.
</twig:FloatingPanel>
```

### With A Form

A panel with fields from the official kit.

<!-- height: 360 -->

```twig
<twig:Button variant="outline" size="sm" onclick="document.getElementById('fp-form').dispatchEvent(new CustomEvent('floating-panel:request-open'))">
    Quick note
</twig:Button>
<twig:FloatingPanel id="fp-form" title="Quick note">
    <form class="grid gap-3">
        <twig:Field>
            <twig:Field:Label for="fp-note">
                Note
            </twig:Field:Label>
            <twig:Textarea id="fp-note" rows="3" />
        </twig:Field>
        <div>
            <twig:Button type="submit" size="sm">
                Save
            </twig:Button>
        </div>
    </form>
</twig:FloatingPanel>
```

### Two Panels

Several panels can be open: the one you grab comes to the front.

<!-- height: 320 -->

```twig
<twig:Button variant="outline" size="sm" onclick="document.getElementById('fp-a').dispatchEvent(new CustomEvent('floating-panel:request-open'))">
    Panel A
</twig:Button>
<twig:Button variant="outline" size="sm" onclick="document.getElementById('fp-b').dispatchEvent(new CustomEvent('floating-panel:request-open'))">
    Panel B
</twig:Button>
<twig:FloatingPanel id="fp-a" title="Panel A" :x="20" :y="60" :width="220">
    First panel.
</twig:FloatingPanel>
<twig:FloatingPanel id="fp-b" title="Panel B" :x="80" :y="100" :width="220">
    Second panel.
</twig:FloatingPanel>
```

### Another Language

The names of the buttons and of the handle are props.

<!-- height: 320 -->

```twig
<twig:Button variant="outline" size="sm" onclick="document.getElementById('fp-fr').dispatchEvent(new CustomEvent('floating-panel:request-open'))">
    Ouvrir
</twig:Button>
<twig:FloatingPanel id="fp-fr" title="Notes" closeLabel="Fermer" minimizeLabel="Réduire" restoreLabel="Restaurer" moveLabel="Déplacer le panneau">
    Contenu du panneau.
</twig:FloatingPanel>
```

## Accessibility

- The panel is a dialog with an accessible name. The header is a keyboard handle: arrow keys move it, Escape closes it.
- The panel is not modal: the rest of the page stays usable, which is the point. It does not trap focus.
- The minimize and close buttons have accessible names (props).

## Extending

- `floating-panel:request-open` and `floating-panel:request-close`: send them to the panel to open and close it.
- `floating-panel:open` and `floating-panel:close`: fired when it opens and closes.

## API

### `<twig:FloatingPanel>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | string | | The title in the header. |
| `id` | string or null | `null` | The id used to send events to the panel. |
| `open` | bool | `false` | Start open. |
| `x` | integer or null | `null` | The left position, in pixels. Centered without it. |
| `y` | integer or null | `null` | The top position, in pixels. |
| `width` | integer | `320` | The width, in pixels. |
| `closeLabel` | string | `Close` | The name of the close button. |
| `minimizeLabel` | string | `Minimize` | The name of the minimize button. |
| `restoreLabel` | string | `Restore` | The name of the restore button. |
| `moveLabel` | string | `Move the panel` | The name of the header as a handle. |

| Block | Description |
| --- | --- |
| `default` | The content. |

# Frame

> Bounded container that groups page regions into bordered panels: settings pages, dashboard sections, status lists.

## Usage

```twig
<twig:Frame>
    <twig:Frame:Panel title="Profile" description="Your public information.">Content</twig:Frame:Panel>
    <twig:Frame:Panel title="Security">Content</twig:Frame:Panel>
</twig:Frame>
```

## Examples

### Separated panels

Panels float on a muted surface, with a small gap between them.

```twig
<twig:Frame class="max-w-md">
    <twig:Frame:Panel title="Profile" description="Your public information.">
        <p class="text-sm">Jane Doe</p>
    </twig:Frame:Panel>
    <twig:Frame:Panel title="Notifications" description="Choose what you receive.">
        <p class="text-sm">Email, weekly digest</p>
    </twig:Frame:Panel>
</twig:Frame>
```

### Stacked

`stacked` joins adjacent panels into one block.

```twig
<twig:Frame stacked class="max-w-md">
    <twig:Frame:Panel title="Plan">Pro, billed monthly</twig:Frame:Panel>
    <twig:Frame:Panel title="Usage">12 of 20 seats</twig:Frame:Panel>
    <twig:Frame:Panel title="Invoices">Next invoice on the 1st</twig:Frame:Panel>
</twig:Frame>
```

### Dense

`dense` removes the padding and the gap: panels sit on the outer border and are separated by rules.

```twig
<twig:Frame dense class="max-w-md">
    <twig:Frame:Panel title="Database"><span class="text-sm text-emerald-600">Operational</span></twig:Frame:Panel>
    <twig:Frame:Panel title="Queue"><span class="text-sm text-emerald-600">Operational</span></twig:Frame:Panel>
    <twig:Frame:Panel title="Search"><span class="text-sm text-amber-600">Degraded</span></twig:Frame:Panel>
</twig:Frame>
```

### Ghost panel and spacing

A `ghost` panel has no border, so a heading or a hint can sit on the Frame itself. `spacing` goes from `xs` to `lg`.

```twig
<twig:Frame spacing="lg" class="max-w-md">
    <twig:Frame:Panel ghost fit class="px-1 py-0"><p class="text-sm text-muted-foreground">Changes are saved automatically.</p></twig:Frame:Panel>
    <twig:Frame:Panel title="Appearance">Light, dark or system</twig:Frame:Panel>
</twig:Frame>
```

## Accessibility

- Each panel is a `section`; a `title` renders a heading (`h3`), so keep the heading levels of the page in order or change the markup after install.
- The Frame adds no role of its own: it is layout only.

## API

### `<twig:Frame>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `dense` | bool | `false` | No padding or gap; panels are separated by rules on the outer border. |
| `stacked` | bool | `false` | Joins adjacent panels into one block. |
| `spacing` | `xs`, `sm`, `default`, `lg` | `default` | Padding and gap around the panels (ignored when `dense`). |

| Block | Description |
|---|---|
| `default` | `Frame:Panel` elements. |

### `<twig:Frame:Panel>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | string | `null` | Heading of the panel. |
| `description` | string | `null` | Text under the heading. |
| `fit` | bool | `false` | Keep the content height instead of filling the spare height of the Frame. |
| `ghost` | bool | `false` | No border and no background. |

| Block | Description |
|---|---|
| `default` | The content of the panel. |


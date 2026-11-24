# Icon Stack

> Layered isometric tile that holds an icon, for empty states and feature highlights.

## Usage

```twig
<twig:IconStack>
    <twig:ux:icon name="lucide:inbox" />
</twig:IconStack>
```

## Examples

### Sizes

`size` is `sm`, `md` (default) or `lg`. The icon follows the size of the tile.

```twig
<div class="flex items-end gap-6">
    <twig:IconStack size="sm">
        <twig:ux:icon name="lucide:folder" />
    </twig:IconStack>
    <twig:IconStack>
        <twig:ux:icon name="lucide:folder" />
    </twig:IconStack>
    <twig:IconStack size="lg">
        <twig:ux:icon name="lucide:folder" />
    </twig:IconStack>
</div>
```

### Colors

A text color class on the component tints the layers and the shadow; the icon can have its own color.

```twig
<div class="flex items-end gap-6">
    <twig:IconStack class="text-blue-300">
        <twig:ux:icon name="lucide:cloud" class="text-blue-600" />
    </twig:IconStack>
    <twig:IconStack class="text-emerald-300">
        <twig:ux:icon name="lucide:check" class="text-emerald-600" />
    </twig:IconStack>
    <twig:IconStack class="text-red-300">
        <twig:ux:icon name="lucide:triangle-alert" class="text-red-600" />
    </twig:IconStack>
</div>
```

### Empty state

The tile is the media of the shadcn `Empty` component.

```twig
<twig:Empty class="max-w-sm border">
    <twig:Empty:Header>
        <twig:Empty:Media>
            <twig:IconStack size="lg">
                <twig:ux:icon name="lucide:inbox" />
            </twig:IconStack>
        </twig:Empty:Media>
        <twig:Empty:Title>
            No messages yet
        </twig:Empty:Title>
        <twig:Empty:Description>
            New messages will show up here.
        </twig:Empty:Description>
    </twig:Empty:Header>
</twig:Empty>
```

## Accessibility

- The tile is decorative by default and hidden from assistive technologies. Pass `label` to expose it as an image with that name.
- The front layer is flat on the isometric plane and `pointer-events-none`: do not put buttons or links in it.

## API

### `<twig:IconStack>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `sm`, `md`, `lg` | `md` | Size of the tile. |
| `label` | string | `null` | Accessible name. Without it the tile is hidden from assistive technologies. |

The slot is the front layer (usually an icon).

| Block | Description |
|---|---|
| `default` | The front layer, laid flat on the isometric plane: not interactive. |


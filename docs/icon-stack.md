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

### Isometric

Three tiles side by side, each with its own tint and caption, for a feature highlight.

```twig
<div class="flex items-start gap-8">
    <div class="flex flex-col items-center gap-2 text-center text-sm">
        <twig:IconStack size="lg" class="text-blue-300">
            <twig:ux:icon name="lucide:layers" class="text-blue-600" />
        </twig:IconStack>
        Layers
    </div>
    <div class="flex flex-col items-center gap-2 text-center text-sm">
        <twig:IconStack size="lg" class="text-violet-300">
            <twig:ux:icon name="lucide:workflow" class="text-violet-600" />
        </twig:IconStack>
        Workflows
    </div>
    <div class="flex flex-col items-center gap-2 text-center text-sm">
        <twig:IconStack size="lg" class="text-amber-300">
            <twig:ux:icon name="lucide:zap" class="text-amber-600" />
        </twig:IconStack>
        Automation
    </div>
</div>
```

### Badge overlay

A `Badge` pinned to the corner of the tile, for a count or a status.

```twig
<div class="flex items-center gap-8">
    <div class="relative inline-flex">
        <twig:IconStack size="lg" label="Notifications">
            <twig:ux:icon name="lucide:bell" />
        </twig:IconStack>
        <twig:Badge variant="destructive" class="absolute -right-1 top-0 min-w-5 justify-center rounded-full px-1.5">
            3
        </twig:Badge>
    </div>
    <div class="relative inline-flex">
        <twig:IconStack size="lg" class="text-emerald-300" label="Inbox">
            <twig:ux:icon name="lucide:inbox" class="text-emerald-600" />
        </twig:IconStack>
        <twig:Badge class="absolute -right-3 top-0">
            New
        </twig:Badge>
    </div>
</div>
```

### Item media

The tile as the media of an `Item`.

```twig
<twig:Item variant="outline" class="max-w-md">
    <twig:Item:Media>
        <twig:IconStack size="sm" class="text-blue-300">
            <twig:ux:icon name="lucide:database" class="text-blue-600" />
        </twig:IconStack>
    </twig:Item:Media>
    <twig:Item:Content>
        <twig:Item:Title>
            Production database
        </twig:Item:Title>
        <twig:Item:Description>
            Last backup 2 hours ago
        </twig:Item:Description>
    </twig:Item:Content>
    <twig:Item:Actions>
        <twig:Button variant="outline" size="sm">
            Manage
        </twig:Button>
    </twig:Item:Actions>
</twig:Item>
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


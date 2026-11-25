# Clearable

> Wraps a field (input, textarea or Select) and shows a clear button while it holds a value; clearing empties the field, fires input and change and refocuses it.

## Installation

- input-group
- button
- select (only for the Select example)

## Usage

Put a `Clearable:Button` in an `InputGroup:Addon` next to the field. The button is hidden while the field is empty, disabled or read-only.

```twig
<twig:Clearable>
    <twig:InputGroup class="max-w-xs">
        <twig:InputGroup:Input placeholder="Type something" value="Hello" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:Clearable:Button />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</twig:Clearable>
```

## Examples

### Search

```twig
<twig:Clearable>
    <twig:InputGroup class="max-w-xs">
        <twig:InputGroup:Addon>
            <twig:ux:icon name="lucide:search" />
        </twig:InputGroup:Addon>
        <twig:InputGroup:Input type="search" placeholder="Search" value="symfony" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:Clearable:Button label="Clear search" />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</twig:Clearable>
```

### Empty

The button appears as soon as something is typed.

```twig
<twig:Clearable>
    <twig:InputGroup class="max-w-xs">
        <twig:InputGroup:Input placeholder="Start typing" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:Clearable:Button />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</twig:Clearable>
```

### Textarea

```twig
<twig:Clearable>
    <twig:InputGroup class="max-w-sm">
        <twig:InputGroup:Textarea placeholder="Write a note" rows="3">A note to clear</twig:InputGroup:Textarea>
        <twig:InputGroup:Addon align="block-end">
            <twig:Clearable:Button label="Clear note" class="ms-auto" />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</twig:Clearable>
```

### Custom Icon

```twig
<twig:Clearable>
    <twig:InputGroup class="max-w-xs">
        <twig:InputGroup:Input placeholder="Nickname" value="shadcn" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:Clearable:Button icon="lucide:circle-x" label="Reset nickname" />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</twig:Clearable>
```

### Select

Works with a shadcn `Select`: the value is reset to empty, `select:change` is dispatched and the trigger is focused. Place the button over the trigger.

```twig
<div style="min-height: 260px">
    <twig:Clearable>
        <div class="relative w-48">
            <twig:Select id="clr-select" value="banana" class="w-full">
                <twig:Select:Trigger class="w-full">
                    <twig:Select:Value placeholder="Select a fruit" />
                </twig:Select:Trigger>
                <twig:Select:Content>
                    <twig:Select:Group id="clr-select-list">
                        <twig:Select:Item value="apple">
                            Apple
                        </twig:Select:Item>
                        <twig:Select:Item value="banana">
                            Banana
                        </twig:Select:Item>
                    </twig:Select:Group>
                </twig:Select:Content>
            </twig:Select>
            <twig:Clearable:Button label="Clear selection" class="absolute end-8 top-1/2 -translate-y-1/2" />
        </div>
    </twig:Clearable>
</div>
```

### Disabled

```twig
<twig:Clearable>
    <twig:InputGroup class="max-w-xs">
        <twig:InputGroup:Input value="Locked" disabled />
        <twig:InputGroup:Addon align="inline-end">
            <twig:Clearable:Button />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</twig:Clearable>
```

## Extending

The controller dispatches `clearable:clear` after the field was emptied (it bubbles, `detail.field` is the field). `input` and `change` are fired on the field too, so other controllers listening to them (a character counter, a filter) follow.

## Accessibility

- The button has an accessible name (`label`) and is a real `button`, reachable with the keyboard while it is visible.
- The field is refocused after clearing.

## API

### `<twig:Clearable>`

Root element with `display: contents`. It has no prop; extra attributes go to the root.

| Block | Description |
|---|---|
| `default` | A field with a `Clearable:Button`. |

### `<twig:Clearable:Button>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | `Clear` | The accessible name of the button. |
| `icon` | string | `lucide:x` | The Symfony UX Icons name of the icon. |

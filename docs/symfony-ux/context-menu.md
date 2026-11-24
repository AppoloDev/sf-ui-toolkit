# Context Menu

## Examples

### Icons

```twig
<div style="min-height: 300px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click here
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content>
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:copy" class="size-4" />
                    Copy
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:scissors" class="size-4" />
                    Cut
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:clipboard" class="size-4" />
                    Paste
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item variant="destructive">
                    <twig:ux:icon name="lucide:trash-2" class="size-4" />
                    Delete
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Navigation Shortcuts

```twig
<div style="min-height: 300px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click here
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    Back
                    <twig:ContextMenu:Shortcut>
                        ⌘[
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item disabled>
                    Forward
                    <twig:ContextMenu:Shortcut>
                        ⌘]
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    Save
                    <twig:ContextMenu:Shortcut>
                        ⌘S
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Destructive Actions

```twig
<div style="min-height: 300px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click here
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content>
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:pencil" class="size-4" />
                    Edit
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:share-2" class="size-4" />
                    Share
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:archive" class="size-4" />
                    Archive
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item variant="destructive">
                    <twig:ux:icon name="lucide:trash-2" class="size-4" />
                    Delete
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

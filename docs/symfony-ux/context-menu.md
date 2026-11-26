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

### Arrange Layers

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a layer
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:bring-to-front" class="size-4" />
                    Bring to front
                    <twig:ContextMenu:Shortcut>
                        ⌘]
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:arrow-up" class="size-4" />
                    Bring forward
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:arrow-down" class="size-4" />
                    Send backward
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:send-to-back" class="size-4" />
                    Send to back
                    <twig:ContextMenu:Shortcut>
                        ⌘[
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Align And Distribute

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click an object
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Align
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            Left
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            Center
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            Right
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Distribute
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            Horizontally
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            Vertically
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:rotate-ccw" class="size-4" />
                    Reset position
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Group And Lock

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a selection
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:group" class="size-4" />
                    Group selection
                    <twig:ContextMenu:Shortcut>
                        ⌘G
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:ungroup" class="size-4" />
                    Ungroup
                    <twig:ContextMenu:Shortcut>
                        ⇧⌘G
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:lock" class="size-4" />
                    Lock
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:eye-off" class="size-4" />
                    Hide
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Manage Layers

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a layer
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:copy" class="size-4" />
                    Duplicate layer
                    <twig:ContextMenu:Shortcut>
                        ⌘D
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:pencil" class="size-4" />
                    Rename
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item variant="destructive">
                    <twig:ux:icon name="lucide:trash-2" class="size-4" />
                    Delete layer
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Transform Objects

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click an object
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Rotate
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            90° clockwise
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            90° counter-clockwise
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            180°
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Flip
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            Horizontal
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            Vertical
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:scaling" class="size-4" />
                    Scale to fit
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### File Operations

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a file
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:folder-open" class="size-4" />
                    Open
                    <twig:ContextMenu:Shortcut>
                        ⌘O
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:pencil" class="size-4" />
                    Rename
                    <twig:ContextMenu:Shortcut>
                        F2
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:copy" class="size-4" />
                    Duplicate
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item variant="destructive">
                    <twig:ux:icon name="lucide:trash-2" class="size-4" />
                    Move to trash
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Copy And Move Files

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a file
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:copy" class="size-4" />
                    Copy
                    <twig:ContextMenu:Shortcut>
                        ⌘C
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:scissors" class="size-4" />
                    Cut
                    <twig:ContextMenu:Shortcut>
                        ⌘X
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:clipboard" class="size-4" />
                    Paste
                    <twig:ContextMenu:Shortcut>
                        ⌘V
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:folder-input" class="size-4" />
                    Move to...
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:folder-plus" class="size-4" />
                    Copy to...
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Archive And Compress

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a file
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Compress
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            ZIP archive
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            TAR.GZ archive
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            7z archive
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:archive" class="size-4" />
                    Archive
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:archive-restore" class="size-4" />
                    Extract here
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Share And Export

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a file
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Share
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            <twig:ux:icon name="lucide:mail" class="size-4" />
                            Email
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            <twig:ux:icon name="lucide:link" class="size-4" />
                            Copy link
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            <twig:ux:icon name="lucide:users" class="size-4" />
                            Invite people
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Export as
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            PDF
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            PNG
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            SVG
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### File Properties

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a file
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:info" class="size-4" />
                    Properties
                    <twig:ContextMenu:Shortcut>
                        ⌥↵
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:history" class="size-4" />
                    Version history
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:tag" class="size-4" />
                    Add tag
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Simple Menu

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click here
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Item>
                Back
            </twig:ContextMenu:Item>
            <twig:ContextMenu:Item disabled>
                Forward
            </twig:ContextMenu:Item>
            <twig:ContextMenu:Item>
                Reload
            </twig:ContextMenu:Item>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Icons And Shortcuts

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click here
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:copy" class="size-4" />
                    Copy
                    <twig:ContextMenu:Shortcut>
                        ⌘C
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:scissors" class="size-4" />
                    Cut
                    <twig:ContextMenu:Shortcut>
                        ⌘X
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:clipboard" class="size-4" />
                    Paste
                    <twig:ContextMenu:Shortcut>
                        ⌘V
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Separators

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click here
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    Profile
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    Billing
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    Settings
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    Sign out
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Labels

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click here
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Label>
                    Account
                </twig:ContextMenu:Label>
                <twig:ContextMenu:Item>
                    Profile
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    Billing
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Label>
                    Workspace
                </twig:ContextMenu:Label>
                <twig:ContextMenu:Item>
                    Members
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    Settings
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Checkboxes

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click here
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Label>
                    View
                </twig:ContextMenu:Label>
                <twig:ContextMenu:CheckboxItem checked>
                    Show bookmarks
                </twig:ContextMenu:CheckboxItem>
                <twig:ContextMenu:CheckboxItem>
                    Show full URLs
                </twig:ContextMenu:CheckboxItem>
                <twig:ContextMenu:CheckboxItem checked>
                    Show line numbers
                </twig:ContextMenu:CheckboxItem>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Radio Items

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click here
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Label>
                    Sort by
                </twig:ContextMenu:Label>
                <twig:ContextMenu:RadioGroup value="name">
                    <twig:ContextMenu:RadioItem value="name" checked>
                        Name
                    </twig:ContextMenu:RadioItem>
                    <twig:ContextMenu:RadioItem value="date">
                        Date modified
                    </twig:ContextMenu:RadioItem>
                    <twig:ContextMenu:RadioItem value="size">
                        Size
                    </twig:ContextMenu:RadioItem>
                </twig:ContextMenu:RadioGroup>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Submenus

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click here
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    New tab
                    <twig:ContextMenu:Shortcut>
                        ⌘T
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        More tools
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            Save page...
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            Name window...
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Separator />
                        <twig:ContextMenu:Item>
                            Developer tools
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    Settings
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Sort Table Data

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a column header
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:arrow-up-a-z" class="size-4" />
                    Sort ascending
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:arrow-down-z-a" class="size-4" />
                    Sort descending
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:x" class="size-4" />
                    Clear sort
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Filter Table Data

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a column header
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Status
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:CheckboxItem checked>
                            Active
                        </twig:ContextMenu:CheckboxItem>
                        <twig:ContextMenu:CheckboxItem>
                            Paused
                        </twig:ContextMenu:CheckboxItem>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Date
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            Today
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            Last 7 days
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            Last 30 days
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:filter-x" class="size-4" />
                    Clear filters
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Export Table Data

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click the table
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Export as
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            CSV
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            Excel
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            JSON
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:printer" class="size-4" />
                    Print
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Row Operations

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a row
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:pencil" class="size-4" />
                    Edit row
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:copy" class="size-4" />
                    Duplicate row
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:arrow-up" class="size-4" />
                    Insert above
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:arrow-down" class="size-4" />
                    Insert below
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item variant="destructive">
                    <twig:ux:icon name="lucide:trash-2" class="size-4" />
                    Delete row
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Column Operations

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a column
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:eye-off" class="size-4" />
                    Hide column
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:pin" class="size-4" />
                    Pin column
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:move-horizontal" class="size-4" />
                    Resize to fit
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item variant="destructive">
                    <twig:ux:icon name="lucide:trash-2" class="size-4" />
                    Delete column
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Text Editing

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click the text
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:undo-2" class="size-4" />
                    Undo
                    <twig:ContextMenu:Shortcut>
                        ⌘Z
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:redo-2" class="size-4" />
                    Redo
                    <twig:ContextMenu:Shortcut>
                        ⇧⌘Z
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:scissors" class="size-4" />
                    Cut
                    <twig:ContextMenu:Shortcut>
                        ⌘X
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:copy" class="size-4" />
                    Copy
                    <twig:ContextMenu:Shortcut>
                        ⌘C
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:clipboard" class="size-4" />
                    Paste
                    <twig:ContextMenu:Shortcut>
                        ⌘V
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:text-select" class="size-4" />
                    Select all
                    <twig:ContextMenu:Shortcut>
                        ⌘A
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Text Formatting

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click the text
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:bold" class="size-4" />
                    Bold
                    <twig:ContextMenu:Shortcut>
                        ⌘B
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:italic" class="size-4" />
                    Italic
                    <twig:ContextMenu:Shortcut>
                        ⌘I
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:underline" class="size-4" />
                    Underline
                    <twig:ContextMenu:Shortcut>
                        ⌘U
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:strikethrough" class="size-4" />
                    Strikethrough
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:link" class="size-4" />
                    Add link
                    <twig:ContextMenu:Shortcut>
                        ⌘K
                    </twig:ContextMenu:Shortcut>
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Text Alignment

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click the text
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Align
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            <twig:ux:icon name="lucide:align-left" class="size-4" />
                            Left
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            <twig:ux:icon name="lucide:align-center" class="size-4" />
                            Center
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            <twig:ux:icon name="lucide:align-right" class="size-4" />
                            Right
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            <twig:ux:icon name="lucide:align-justify" class="size-4" />
                            Justify
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Line spacing
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            Single
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            1.5
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            Double
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Spell Checking

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click a misspelled word
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Label>
                    Suggestions
                </twig:ContextMenu:Label>
                <twig:ContextMenu:Item>
                    receive
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    recipe
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:plus" class="size-4" />
                    Add to dictionary
                </twig:ContextMenu:Item>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:eye-off" class="size-4" />
                    Ignore all
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

### Fonts And Styles

```twig
<div style="min-height: 340px" class="w-full max-w-xs">
    <twig:ContextMenu>
        <twig:ContextMenu:Trigger class="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm">
            Right click the text
        </twig:ContextMenu:Trigger>
        <twig:ContextMenu:Content class="w-56">
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Font
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:RadioGroup value="sans">
                            <twig:ContextMenu:RadioItem value="sans" checked>
                                Sans serif
                            </twig:ContextMenu:RadioItem>
                            <twig:ContextMenu:RadioItem value="serif">
                                Serif
                            </twig:ContextMenu:RadioItem>
                            <twig:ContextMenu:RadioItem value="mono">
                                Monospace
                            </twig:ContextMenu:RadioItem>
                        </twig:ContextMenu:RadioGroup>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
                <twig:ContextMenu:Sub>
                    <twig:ContextMenu:SubTrigger>
                        Size
                    </twig:ContextMenu:SubTrigger>
                    <twig:ContextMenu:SubContent class="w-48">
                        <twig:ContextMenu:Item>
                            Small
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            Normal
                        </twig:ContextMenu:Item>
                        <twig:ContextMenu:Item>
                            Large
                        </twig:ContextMenu:Item>
                    </twig:ContextMenu:SubContent>
                </twig:ContextMenu:Sub>
            </twig:ContextMenu:Group>
            <twig:ContextMenu:Separator />
            <twig:ContextMenu:Group>
                <twig:ContextMenu:Item>
                    <twig:ux:icon name="lucide:eraser" class="size-4" />
                    Clear formatting
                </twig:ContextMenu:Item>
            </twig:ContextMenu:Group>
        </twig:ContextMenu:Content>
    </twig:ContextMenu>
</div>
```

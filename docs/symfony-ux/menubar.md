# Menubar

## Examples

### Basic

```twig
<div style="min-height: 260px">
    <twig:Menubar>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    File
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    New tab
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    New window
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Print
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    Edit
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    Undo
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Redo
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
    </twig:Menubar>
</div>
```

### With Shortcuts

```twig
<div style="min-height: 260px">
    <twig:Menubar>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    File
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    New tab
                    <twig:Menubar:Shortcut>
                        ⌘T
                    </twig:Menubar:Shortcut>
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    New window
                    <twig:Menubar:Shortcut>
                        ⌘N
                    </twig:Menubar:Shortcut>
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Print
                    <twig:Menubar:Shortcut>
                        ⌘P
                    </twig:Menubar:Shortcut>
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    Edit
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    Undo
                    <twig:Menubar:Shortcut>
                        ⌘Z
                    </twig:Menubar:Shortcut>
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Redo
                    <twig:Menubar:Shortcut>
                        ⇧⌘Z
                    </twig:Menubar:Shortcut>
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
    </twig:Menubar>
</div>
```

### With Icons

```twig
<div style="min-height: 260px">
    <twig:Menubar>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    File
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    <twig:ux:icon name="lucide:file-plus" class="size-4" />
                    New file
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    <twig:ux:icon name="lucide:folder-open" class="size-4" />
                    Open
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    <twig:ux:icon name="lucide:printer" class="size-4" />
                    Print
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    Edit
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    <twig:ux:icon name="lucide:undo-2" class="size-4" />
                    Undo
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    <twig:ux:icon name="lucide:redo-2" class="size-4" />
                    Redo
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
    </twig:Menubar>
</div>
```

### With Checkboxes

```twig
<div style="min-height: 260px">
    <twig:Menubar>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    View
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:CheckboxItem checked>
                    Show bookmarks
                </twig:Menubar:CheckboxItem>
                <twig:Menubar:CheckboxItem>
                    Show full URLs
                </twig:Menubar:CheckboxItem>
                <twig:Menubar:CheckboxItem checked>
                    Show status bar
                </twig:Menubar:CheckboxItem>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    Edit
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    Undo
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Redo
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
    </twig:Menubar>
</div>
```

### With Radio Group

```twig
<div style="min-height: 260px">
    <twig:Menubar>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    View
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:RadioGroup value="list">
                    <twig:Menubar:RadioItem value="list" checked>
                        List
                    </twig:Menubar:RadioItem>
                    <twig:Menubar:RadioItem value="grid">
                        Grid
                    </twig:Menubar:RadioItem>
                    <twig:Menubar:RadioItem value="columns">
                        Columns
                    </twig:Menubar:RadioItem>
                </twig:Menubar:RadioGroup>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    Edit
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    Undo
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Redo
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
    </twig:Menubar>
</div>
```

### With Submenu

```twig
<div style="min-height: 260px">
    <twig:Menubar>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    File
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    New
                </twig:Menubar:Item>
                <twig:Menubar:Sub>
                    <twig:Menubar:SubTrigger>
                        Share
                    </twig:Menubar:SubTrigger>
                    <twig:Menubar:SubContent class="w-48">
                        <twig:Menubar:Item>
                            Email link
                        </twig:Menubar:Item>
                        <twig:Menubar:Item>
                            Messages
                        </twig:Menubar:Item>
                    </twig:Menubar:SubContent>
                </twig:Menubar:Sub>
                <twig:Menubar:Separator />
                <twig:Menubar:Item>
                    Print
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
    </twig:Menubar>
</div>
```

### Destructive Action

```twig
<div style="min-height: 260px">
    <twig:Menubar>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    File
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    Rename
                </twig:Menubar:Item>
                <twig:Menubar:Separator />
                <twig:Menubar:Item variant="destructive">
                    <twig:ux:icon name="lucide:trash-2" class="size-4" />
                    Delete file
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
    </twig:Menubar>
</div>
```

### Application Style

```twig
<div style="min-height: 260px">
    <twig:Menubar class="w-fit">
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    File
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    New
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Open
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Save
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    Edit
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    Undo
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Redo
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Cut
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Copy
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Paste
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    View
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    Zoom in
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Zoom out
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    Help
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    Documentation
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    About
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
    </twig:Menubar>
</div>
```

### Grouped Items

```twig
<div style="min-height: 260px">
    <twig:Menubar>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    File
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    New
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Open
                </twig:Menubar:Item>
                <twig:Menubar:Separator />
                <twig:Menubar:Item>
                    Save
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Save as
                </twig:Menubar:Item>
                <twig:Menubar:Separator />
                <twig:Menubar:Item>
                    Close
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
    </twig:Menubar>
</div>
```

### Compact

```twig
<div style="min-height: 260px">
    <twig:Menubar class="h-8 p-0.5">
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    File
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    New
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Open
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    Edit
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    Undo
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Redo
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
    </twig:Menubar>
</div>
```

### Start And End Slots

```twig
<div style="min-height: 260px">
    <twig:Menubar class="h-auto w-full max-w-xl gap-2 px-3 py-1.5">
        <span class="flex items-center gap-2 pe-2 text-sm font-semibold">
            <twig:ux:icon name="lucide:layers" class="size-4" />
            Acme
        </span>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    File
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    New
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Open
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
        <twig:Menubar:Menu>
            <twig:Menubar:Trigger>
                <twig:Button variant="ghost" size="sm" {{ ...menubar_trigger_attrs }}>
                    Edit
                </twig:Button>
            </twig:Menubar:Trigger>
            <twig:Menubar:Content>
                <twig:Menubar:Item>
                    Undo
                </twig:Menubar:Item>
                <twig:Menubar:Item>
                    Redo
                </twig:Menubar:Item>
            </twig:Menubar:Content>
        </twig:Menubar:Menu>
        <twig:Input type="search" placeholder="Search" aria-label="Search" class="ms-auto h-7 w-40" />
    </twig:Menubar>
</div>
```

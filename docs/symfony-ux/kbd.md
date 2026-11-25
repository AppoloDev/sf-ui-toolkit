# Kbd

## Examples

### Grouped Keys

```twig
<twig:KbdGroup>
    <twig:Kbd>
        Ctrl
    </twig:Kbd>
    <twig:Kbd>
        Shift
    </twig:Kbd>
    <twig:Kbd>
        P
    </twig:Kbd>
</twig:KbdGroup>
```

### Keys With Icons

```twig
<div class="flex items-center gap-3">
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-left" />
        Left
    </twig:Kbd>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-right" />
        Right
    </twig:Kbd>
    <twig:KbdGroup>
        <twig:Kbd>
            <twig:ux:icon name="lucide:mic" />
            Voice
        </twig:Kbd>
        <twig:Kbd>
            Enabled
        </twig:Kbd>
    </twig:KbdGroup>
</div>
```

### In Input

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input placeholder="Search..." />
    <twig:InputGroup:Addon>
        <twig:Kbd>
            Space
        </twig:Kbd>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Shortcut List

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Shortcuts
        </twig:Card:Title>
    </twig:Card:Header>
    <twig:Card:Content class="grid gap-2 text-sm">
        <div class="flex items-center justify-between">
            <span>
                Search
            </span>
            <twig:KbdGroup>
                <twig:Kbd>
                    ⌘
                </twig:Kbd>
                <twig:Kbd>
                    K
                </twig:Kbd>
            </twig:KbdGroup>
        </div>
        <div class="flex items-center justify-between">
            <span>
                Save
            </span>
            <twig:KbdGroup>
                <twig:Kbd>
                    ⌘
                </twig:Kbd>
                <twig:Kbd>
                    S
                </twig:Kbd>
            </twig:KbdGroup>
        </div>
        <div class="flex items-center justify-between">
            <span>
                Copy
            </span>
            <twig:KbdGroup>
                <twig:Kbd>
                    ⌘
                </twig:Kbd>
                <twig:Kbd>
                    C
                </twig:Kbd>
            </twig:KbdGroup>
        </div>
        <div class="flex items-center justify-between">
            <span>
                Undo
            </span>
            <twig:KbdGroup>
                <twig:Kbd>
                    ⌘
                </twig:Kbd>
                <twig:Kbd>
                    Z
                </twig:Kbd>
            </twig:KbdGroup>
        </div>
        <div class="flex items-center justify-between">
            <span>
                Redo
            </span>
            <twig:KbdGroup>
                <twig:Kbd>
                    ⇧
                </twig:Kbd>
                <twig:Kbd>
                    ⌘
                </twig:Kbd>
                <twig:Kbd>
                    Z
                </twig:Kbd>
            </twig:KbdGroup>
        </div>
    </twig:Card:Content>
</twig:Card>
```

### Arrow Keys Cross

```twig
<div class="grid w-fit grid-cols-3 gap-1">
    <span></span>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-up" />
    </twig:Kbd>
    <span></span>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-left" />
    </twig:Kbd>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-down" />
    </twig:Kbd>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-right" />
    </twig:Kbd>
</div>
```

### Arrow Keys Row

```twig
<twig:KbdGroup>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-left" />
    </twig:Kbd>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-up" />
    </twig:Kbd>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-down" />
    </twig:Kbd>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-right" />
    </twig:Kbd>
</twig:KbdGroup>
```

### WASD

```twig
<div class="grid w-fit grid-cols-3 gap-1">
    <span></span>
    <twig:Kbd>
        W
    </twig:Kbd>
    <span></span>
    <twig:Kbd>
        A
    </twig:Kbd>
    <twig:Kbd>
        S
    </twig:Kbd>
    <twig:Kbd>
        D
    </twig:Kbd>
</div>
```

### Vim Navigation

```twig
<twig:KbdGroup>
    <twig:Kbd>
        h
    </twig:Kbd>
    <twig:Kbd>
        j
    </twig:Kbd>
    <twig:Kbd>
        k
    </twig:Kbd>
    <twig:Kbd>
        l
    </twig:Kbd>
</twig:KbdGroup>
```

### Function Key Help

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Kbd>
        F1
    </twig:Kbd>
    <span class="text-sm text-muted-foreground">
        Open help
    </span>
</div>
```

### Function Key DevTools

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Kbd>
        F12
    </twig:Kbd>
    <span class="text-sm text-muted-foreground">
        Toggle DevTools
    </span>
</div>
```

### Function Keys Row

```twig
<twig:KbdGroup>
    <twig:Kbd>
        F1
    </twig:Kbd>
    <twig:Kbd>
        F2
    </twig:Kbd>
    <twig:Kbd>
        F3
    </twig:Kbd>
    <twig:Kbd>
        F4
    </twig:Kbd>
    <twig:Kbd>
        F5
    </twig:Kbd>
    <twig:Kbd>
        F6
    </twig:Kbd>
    <twig:Kbd>
        F7
    </twig:Kbd>
    <twig:Kbd>
        F8
    </twig:Kbd>
    <twig:Kbd>
        F9
    </twig:Kbd>
    <twig:Kbd>
        F10
    </twig:Kbd>
    <twig:Kbd>
        F11
    </twig:Kbd>
    <twig:Kbd>
        F12
    </twig:Kbd>
</twig:KbdGroup>
```

### Special Keys

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Kbd>
        Esc
    </twig:Kbd>
    <twig:Kbd>
        Tab
    </twig:Kbd>
    <twig:Kbd>
        Caps Lock
    </twig:Kbd>
    <twig:Kbd>
        Space
    </twig:Kbd>
    <twig:Kbd>
        Enter
    </twig:Kbd>
</div>
```

### Modifier Keys

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Kbd>
        Shift
    </twig:Kbd>
    <twig:Kbd>
        Ctrl
    </twig:Kbd>
    <twig:Kbd>
        Alt
    </twig:Kbd>
    <twig:Kbd>
        Meta
    </twig:Kbd>
    <twig:Kbd>
        Fn
    </twig:Kbd>
</div>
```

### Editing Keys

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Kbd>
        Insert
    </twig:Kbd>
    <twig:Kbd>
        Delete
    </twig:Kbd>
    <twig:Kbd>
        Home
    </twig:Kbd>
    <twig:Kbd>
        End
    </twig:Kbd>
    <twig:Kbd>
        Page Up
    </twig:Kbd>
    <twig:Kbd>
        Page Down
    </twig:Kbd>
</div>
```

### Mac Command Symbol

```twig
<twig:KbdGroup>
    <twig:Kbd>
        ⌘
    </twig:Kbd>
    <twig:Kbd>
        K
    </twig:Kbd>
</twig:KbdGroup>
```

### Mac Option Symbol

```twig
<twig:KbdGroup>
    <twig:Kbd>
        ⌥
    </twig:Kbd>
    <twig:Kbd>
        Space
    </twig:Kbd>
</twig:KbdGroup>
```

### Mac Control Symbol

```twig
<twig:KbdGroup>
    <twig:Kbd>
        ⌃
    </twig:Kbd>
    <twig:Kbd>
        C
    </twig:Kbd>
</twig:KbdGroup>
```

### Mac Modifier Symbols

```twig
<twig:KbdGroup>
    <twig:Kbd>
        ⌘
    </twig:Kbd>
    <twig:Kbd>
        ⇧
    </twig:Kbd>
    <twig:Kbd>
        ⌥
    </twig:Kbd>
    <twig:Kbd>
        ⌃
    </twig:Kbd>
</twig:KbdGroup>
```

### Windows Key

```twig
<twig:KbdGroup>
    <twig:Kbd>
        <twig:ux:icon name="lucide:layout-grid" />
        Win
    </twig:Kbd>
    <twig:Kbd>
        E
    </twig:Kbd>
</twig:KbdGroup>
```

### Platform Variants

```twig
<div class="flex flex-wrap gap-8">
    <div class="grid gap-1">
        <span class="text-xs text-muted-foreground">
            macOS
        </span>
        <twig:KbdGroup>
            <twig:Kbd>
                ⌘
            </twig:Kbd>
            <twig:Kbd>
                S
            </twig:Kbd>
        </twig:KbdGroup>
    </div>
    <div class="grid gap-1">
        <span class="text-xs text-muted-foreground">
            Windows and Linux
        </span>
        <twig:KbdGroup>
            <twig:Kbd>
                Ctrl
            </twig:Kbd>
            <twig:Kbd>
                S
            </twig:Kbd>
        </twig:KbdGroup>
    </div>
</div>
```

### Active State

```twig
<twig:Kbd class="bg-primary text-primary-foreground">
    Enter
</twig:Kbd>
```

### Disabled State

```twig
<twig:Kbd class="opacity-50">
    Enter
</twig:Kbd>
```

### Focus State

```twig
<twig:Kbd class="ring-2 ring-ring">
    Tab
</twig:Kbd>
```

### Pressed State

```twig
<twig:Kbd class="translate-y-px bg-muted-foreground/30 shadow-none">
    Space
</twig:Kbd>
```

### Hover State

```twig
<twig:Kbd class="pointer-events-auto transition-colors hover:bg-primary hover:text-primary-foreground">
    Shift
</twig:Kbd>
```

### States Overview

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Kbd>
        Default
    </twig:Kbd>
    <twig:Kbd class="bg-primary text-primary-foreground">
        Active
    </twig:Kbd>
    <twig:Kbd class="ring-2 ring-ring">
        Focus
    </twig:Kbd>
    <twig:Kbd class="translate-y-px bg-muted-foreground/30">
        Pressed
    </twig:Kbd>
    <twig:Kbd class="opacity-50">
        Disabled
    </twig:Kbd>
</div>
```

### Sequence With Then

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Kbd>
        G
    </twig:Kbd>
    <span class="text-xs text-muted-foreground">
        then
    </span>
    <twig:Kbd>
        H
    </twig:Kbd>
</div>
```

### Sequence With Arrow

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Kbd>
        G
    </twig:Kbd>
    <twig:ux:icon name="lucide:arrow-right" class="size-3 text-muted-foreground" />
    <twig:Kbd>
        I
    </twig:Kbd>
</div>
```

### Multi Step Sequence

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:KbdGroup>
        <twig:Kbd>
            Ctrl
        </twig:Kbd>
        <twig:Kbd>
            K
        </twig:Kbd>
    </twig:KbdGroup>
    <span class="text-xs text-muted-foreground">
        then
    </span>
    <twig:KbdGroup>
        <twig:Kbd>
            Ctrl
        </twig:Kbd>
        <twig:Kbd>
            S
        </twig:Kbd>
    </twig:KbdGroup>
    <span class="text-xs text-muted-foreground">
        then
    </span>
    <twig:Kbd>
        Enter
    </twig:Kbd>
</div>
```

### Vim Sequence

```twig
<div class="flex flex-wrap items-center gap-2">
    <twig:Kbd>
        d
    </twig:Kbd>
    <twig:Kbd>
        d
    </twig:Kbd>
    <span class="text-xs text-muted-foreground">
        delete line
    </span>
</div>
```

### Command Palette Shortcut

```twig
<div class="flex items-center justify-between gap-6 w-64">
    <span class="text-sm">
        Command palette
    </span>
    <twig:KbdGroup>
        <twig:Kbd>
            ⌘
        </twig:Kbd>
        <twig:Kbd>
            K
        </twig:Kbd>
    </twig:KbdGroup>
</div>
```

### Copy Shortcut

```twig
<div class="flex items-center justify-between gap-6 w-64">
    <span class="text-sm">
        Copy
    </span>
    <twig:KbdGroup>
        <twig:Kbd>
            Ctrl
        </twig:Kbd>
        <twig:Kbd>
            C
        </twig:Kbd>
    </twig:KbdGroup>
</div>
```

### Paste Shortcut

```twig
<div class="flex items-center justify-between gap-6 w-64">
    <span class="text-sm">
        Paste
    </span>
    <twig:KbdGroup>
        <twig:Kbd>
            Ctrl
        </twig:Kbd>
        <twig:Kbd>
            V
        </twig:Kbd>
    </twig:KbdGroup>
</div>
```

### Save Shortcut

```twig
<div class="flex items-center justify-between gap-6 w-64">
    <span class="text-sm">
        Save
    </span>
    <twig:KbdGroup>
        <twig:Kbd>
            Ctrl
        </twig:Kbd>
        <twig:Kbd>
            S
        </twig:Kbd>
    </twig:KbdGroup>
</div>
```

### Complex Shortcut

```twig
<twig:KbdGroup>
    <twig:Kbd>
        Ctrl
    </twig:Kbd>
    <twig:Kbd>
        Alt
    </twig:Kbd>
    <twig:Kbd>
        Shift
    </twig:Kbd>
    <twig:Kbd>
        Delete
    </twig:Kbd>
</twig:KbdGroup>
```

### Small Size

```twig
<twig:Kbd class="h-4 min-w-4 text-[10px]">
    Esc
</twig:Kbd>
```

### Default Size

```twig
<twig:Kbd>
    Esc
</twig:Kbd>
```

### Large Size

```twig
<twig:Kbd class="h-6 min-w-6 px-1.5 text-sm">
    Esc
</twig:Kbd>
```

### Extra Large Size

```twig
<twig:Kbd class="h-8 min-w-8 px-2 text-base">
    Esc
</twig:Kbd>
```

### Sizes Overview

```twig
<div class="flex items-end gap-3">
    <twig:Kbd class="h-4 min-w-4 text-[10px]">
        Esc
    </twig:Kbd>
    <twig:Kbd>
        Esc
    </twig:Kbd>
    <twig:Kbd class="h-6 min-w-6 px-1.5 text-sm">
        Esc
    </twig:Kbd>
    <twig:Kbd class="h-8 min-w-8 px-2 text-base">
        Esc
    </twig:Kbd>
    <twig:Kbd class="h-10 min-w-10 px-3 text-lg">
        Esc
    </twig:Kbd>
</div>
```

### Inline With Text

```twig
<p class="text-sm">
    Press
    <twig:KbdGroup>
        <twig:Kbd>
            Ctrl
        </twig:Kbd>
        <twig:Kbd>
            K
        </twig:Kbd>
    </twig:KbdGroup>
    to search, or
    <twig:Kbd>
        Esc
    </twig:Kbd>
    to close.
</p>
```

### Enter Key With Icon

```twig
<twig:Kbd>
    <twig:ux:icon name="lucide:corner-down-left" />
    Enter
</twig:Kbd>
```

### Delete Key With Icon

```twig
<twig:Kbd>
    <twig:ux:icon name="lucide:delete" />
    Delete
</twig:Kbd>
```

### Arrow Keys With Icons Only

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-up" />
    </twig:Kbd>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-down" />
    </twig:Kbd>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-left" />
    </twig:Kbd>
    <twig:Kbd>
        <twig:ux:icon name="lucide:arrow-right" />
    </twig:Kbd>
</div>
```

### Command Key With Icon

```twig
<twig:KbdGroup>
    <twig:Kbd>
        <twig:ux:icon name="lucide:command" />
    </twig:Kbd>
    <twig:Kbd>
        K
    </twig:Kbd>
</twig:KbdGroup>
```

### Unicode Symbols

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Kbd>
        ↵
    </twig:Kbd>
    <twig:Kbd>
        ⌫
    </twig:Kbd>
    <twig:Kbd>
        ⇥
    </twig:Kbd>
    <twig:Kbd>
        ⎋
    </twig:Kbd>
    <twig:Kbd>
        ⇧
    </twig:Kbd>
    <twig:Kbd>
        ⌘
    </twig:Kbd>
    <twig:Kbd>
        ⌥
    </twig:Kbd>
    <twig:Kbd>
        ⌃
    </twig:Kbd>
</div>
```

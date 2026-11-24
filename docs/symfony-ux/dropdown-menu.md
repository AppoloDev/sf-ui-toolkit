# Dropdown Menu

## Examples

### Opening Positions

```twig
<div class="flex flex-wrap justify-center gap-3 pt-4" style="min-height: 280px">
    <twig:DropdownMenu id="dd-side-top" side="top">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...dropdown_menu_trigger_attrs }}>
                top
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-36">
            <twig:DropdownMenu:Item>
                Profile
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Billing
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Settings
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
    <twig:DropdownMenu id="dd-side-right" side="right">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...dropdown_menu_trigger_attrs }}>
                right
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-36">
            <twig:DropdownMenu:Item>
                Profile
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Billing
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Settings
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
    <twig:DropdownMenu id="dd-side-bottom" side="bottom">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...dropdown_menu_trigger_attrs }}>
                bottom
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-36">
            <twig:DropdownMenu:Item>
                Profile
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Billing
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Settings
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
    <twig:DropdownMenu id="dd-side-left" side="left">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...dropdown_menu_trigger_attrs }}>
                left
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-36">
            <twig:DropdownMenu:Item>
                Profile
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Billing
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Settings
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Quick Actions

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:DropdownMenu id="dd-quick" align="end">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="More options" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:ux:icon name="lucide:ellipsis" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content>
            <twig:DropdownMenu:Item>
                Settings
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Share
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item variant="destructive">
                Remove
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Record Actions

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-record" align="end">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="Record actions" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:ux:icon name="lucide:ellipsis-vertical" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-48">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:pencil" class="size-4" />
                Edit
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:copy" class="size-4" />
                Duplicate
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Sub>
                <twig:DropdownMenu:SubTrigger>
                    <twig:ux:icon name="lucide:folder-input" class="size-4" />
                    Move to
                </twig:DropdownMenu:SubTrigger>
                <twig:DropdownMenu:SubContent>
                    <twig:DropdownMenu:Item>
                        Inbox
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        Archive
                    </twig:DropdownMenu:Item>
                </twig:DropdownMenu:SubContent>
            </twig:DropdownMenu:Sub>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:share-2" class="size-4" />
                Share
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:link" class="size-4" />
                Copy link
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item variant="destructive">
                <twig:ux:icon name="lucide:trash-2" class="size-4" />
                Delete
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Share and Export

```twig
<div class="flex justify-center pt-4" style="min-height: 340px">
    <twig:DropdownMenu id="dd-share">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:ux:icon name="lucide:share" data-icon="inline-start" />
                Share
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-48">
            <twig:DropdownMenu:Group>
                <twig:DropdownMenu:Label>
                    Share
                </twig:DropdownMenu:Label>
                <twig:DropdownMenu:Item>
                    Email
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    Slack
                </twig:DropdownMenu:Item>
            </twig:DropdownMenu:Group>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Group>
                <twig:DropdownMenu:Label>
                    Export
                </twig:DropdownMenu:Label>
                <twig:DropdownMenu:Item>
                    PDF
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    CSV
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    PNG
                </twig:DropdownMenu:Item>
            </twig:DropdownMenu:Group>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item>
                Print
                <twig:DropdownMenu:Shortcut>
                    ⌘P
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Notification Items

```twig
<div class="flex justify-center pt-4" style="min-height: 260px">
    <twig:DropdownMenu id="dd-notif" align="end">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="Notifications" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:ux:icon name="lucide:bell" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-64">
            <twig:DropdownMenu:Item>
                Your export is ready
                <twig:ux:icon name="lucide:check" class="ms-auto size-4" />
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                New comment on Report
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Invoice paid
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Workspace Switcher

```twig
<div class="flex justify-center pt-4" style="min-height: 300px">
    <twig:DropdownMenu id="dd-workspace" align="start">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Acme Inc
                <twig:ux:icon name="lucide:chevrons-up-down" class="size-4 text-muted-foreground" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-60">
            <twig:DropdownMenu:Label>
                Workspaces
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:Item>
                <span class="flex flex-col">
                    <span>
                        Acme Inc
                    </span>
                    <span class="text-xs text-muted-foreground">
                        Enterprise
                    </span>
                </span>
                <twig:ux:icon name="lucide:check" class="ms-auto size-4" />
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <span class="flex flex-col">
                    <span>
                        Monsters Inc
                    </span>
                    <span class="text-xs text-muted-foreground">
                        Startup
                    </span>
                </span>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <span class="flex flex-col">
                    <span>
                        Personal
                    </span>
                    <span class="text-xs text-muted-foreground">
                        Free
                    </span>
                </span>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:plus" class="size-4" />
                Create workspace
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Create Menu

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:DropdownMenu id="dd-create">
        <twig:DropdownMenu:Trigger>
            <twig:Button {{ ...dropdown_menu_trigger_attrs }}>
                <twig:ux:icon name="lucide:plus" data-icon="inline-start" />
                New
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content>
            <twig:DropdownMenu:Item>
                Customer
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Order
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Invoice
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Keyboard Shortcuts

```twig
<div class="flex justify-center pt-4" style="min-height: 260px">
    <twig:DropdownMenu id="dd-shortcuts">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Edit
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                Undo
                <twig:DropdownMenu:Shortcut>
                    ⌘Z
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Redo
                <twig:DropdownMenu:Shortcut>
                    ⇧⌘Z
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Cut
                <twig:DropdownMenu:Shortcut>
                    ⌘X
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Copy
                <twig:DropdownMenu:Shortcut>
                    ⌘C
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Paste
                <twig:DropdownMenu:Shortcut>
                    ⌘V
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Nested Submenus

```twig
<div class="flex justify-center pt-4" style="min-height: 280px">
    <twig:DropdownMenu id="dd-nested">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                File
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-48">
            <twig:DropdownMenu:Item>
                New file
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Sub>
                <twig:DropdownMenu:SubTrigger>
                    Share
                </twig:DropdownMenu:SubTrigger>
                <twig:DropdownMenu:SubContent>
                    <twig:DropdownMenu:Item>
                        Email
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Sub>
                        <twig:DropdownMenu:SubTrigger>
                            Social
                        </twig:DropdownMenu:SubTrigger>
                        <twig:DropdownMenu:SubContent>
                            <twig:DropdownMenu:Item>
                                Mastodon
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Item>
                                Bluesky
                            </twig:DropdownMenu:Item>
                        </twig:DropdownMenu:SubContent>
                    </twig:DropdownMenu:Sub>
                </twig:DropdownMenu:SubContent>
            </twig:DropdownMenu:Sub>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### User Profile

```twig
<div class="flex justify-center pt-4" style="min-height: 300px">
    <twig:DropdownMenu id="dd-profile" align="end">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" class="rounded-full" aria-label="Account" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:Avatar>
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-60">
            <twig:DropdownMenu:Label class="flex flex-col">
                <span class="text-sm font-medium">
                    shadcn
                </span>
                <span class="text-xs font-normal text-muted-foreground">
                    shadcn@example.com
                </span>
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:user" class="size-4" />
                Profile
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:settings" class="size-4" />
                Settings
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item variant="destructive">
                <twig:ux:icon name="lucide:log-out" class="size-4" />
                Log out
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Theme and Status

```twig
<div class="flex justify-center pt-4" style="min-height: 300px">
    <twig:DropdownMenu id="dd-theme">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Appearance
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-48">
            <twig:DropdownMenu:Label>
                Theme
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:sun" class="size-4" />
                Light
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:moon" class="size-4" />
                Dark
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:monitor" class="size-4" />
                System
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Label>
                Status
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:Item>
                <span class="size-2 rounded-full bg-green-500">
                </span>
                Online
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <span class="size-2 rounded-full bg-amber-500">
                </span>
                Away
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

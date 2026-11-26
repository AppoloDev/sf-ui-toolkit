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

### AI Model Selector

The menu lists models, each with its brand logo in color.

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 300px">
    <twig:DropdownMenu id="ai-model-selector">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:ux:icon name="lucide:sparkles" />
                Choose a model
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="min-w-56">
            <twig:DropdownMenu:Label>
                Model
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:RadioGroup value="claude">
                <twig:DropdownMenu:RadioItem value="claude" checked>
                    <twig:ux:icon name="simple-icons:anthropic" class="size-4 text-[#D97757]" />
                    Claude
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="gemini">
                    <twig:ux:icon name="simple-icons:googlegemini" class="size-4 text-[#8E75B2]" />
                    Gemini
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="mistral">
                    <twig:ux:icon name="simple-icons:mistralai" class="size-4 text-[#FA520F]" />
                    Mistral
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="perplexity">
                    <twig:ux:icon name="simple-icons:perplexity" class="size-4 text-[#20808D]" />
                    Perplexity
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="llama">
                    <twig:ux:icon name="simple-icons:meta" class="size-4 text-[#0467DF]" />
                    Llama
                </twig:DropdownMenu:RadioItem>
            </twig:DropdownMenu:RadioGroup>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### File Row Menu

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-file-row-menu">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="Menu" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:ux:icon name="lucide:ellipsis" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:folder-open" class="size-4" />
                Open
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:pencil" class="size-4" />
                Rename
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:copy" class="size-4" />
                Duplicate
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

### Table Row Menu

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-table-row-menu">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="Menu" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:ux:icon name="lucide:ellipsis" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:eye" class="size-4" />
                View
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:pencil" class="size-4" />
                Edit
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:archive" class="size-4" />
                Archive
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Card Share Menu

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-card-share-menu">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="Menu" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:ux:icon name="lucide:ellipsis" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:link" class="size-4" />
                Copy link
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Sub>
                <twig:DropdownMenu:SubTrigger>
                    Share to
                </twig:DropdownMenu:SubTrigger>
                <twig:DropdownMenu:SubContent class="w-48">
                    <twig:DropdownMenu:Item>
                        Mastodon
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        LinkedIn
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        Email
                    </twig:DropdownMenu:Item>
                </twig:DropdownMenu:SubContent>
            </twig:DropdownMenu:Sub>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:flag" class="size-4" />
                Report
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Bulk Actions

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-bulk-actions">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Bulk actions
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Label>
                3 selected
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:archive" class="size-4" />
                Archive all
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:tag" class="size-4" />
                Add tag
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item variant="destructive">
                <twig:ux:icon name="lucide:trash-2" class="size-4" />
                Delete selected
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Create And Upload

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-create-and-upload">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="Menu" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:ux:icon name="lucide:plus" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:file-plus" class="size-4" />
                New file
                <twig:DropdownMenu:Shortcut>
                    ⌘N
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:folder-plus" class="size-4" />
                New folder
                <twig:DropdownMenu:Shortcut>
                    ⇧⌘N
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:upload" class="size-4" />
                Upload
                <twig:DropdownMenu:Shortcut>
                    ⌘U
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Text Formatting

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-text-formatting">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Format
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:bold" class="size-4" />
                Bold
                <twig:DropdownMenu:Shortcut>
                    ⌘B
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:italic" class="size-4" />
                Italic
                <twig:DropdownMenu:Shortcut>
                    ⌘I
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:underline" class="size-4" />
                Underline
                <twig:DropdownMenu:Shortcut>
                    ⌘U
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:link" class="size-4" />
                Link
                <twig:DropdownMenu:Shortcut>
                    ⌘K
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Block Type

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-block-type">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Block type
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:RadioGroup value="p">
                <twig:DropdownMenu:RadioItem value="p" checked>
                    Paragraph
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="h">
                    Heading
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="l">
                    List
                </twig:DropdownMenu:RadioItem>
            </twig:DropdownMenu:RadioGroup>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Insert Content

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-insert-content">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Insert
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:image" class="size-4" />
                Image
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:table" class="size-4" />
                Table
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:code" class="size-4" />
                Code block
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:minus" class="size-4" />
                Divider
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Heading Level

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-heading-level">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Heading
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:RadioGroup value="h2">
                <twig:DropdownMenu:RadioItem value="h1">
                    Heading 1
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="h2" checked>
                    Heading 2
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="h3">
                    Heading 3
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="h4">
                    Heading 4
                </twig:DropdownMenu:RadioItem>
            </twig:DropdownMenu:RadioGroup>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Text Alignment

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-text-alignment">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Align
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:RadioGroup value="left">
                <twig:DropdownMenu:RadioItem value="left" checked>
                    Left
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="center">
                    Center
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="right">
                    Right
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="justify">
                    Justify
                </twig:DropdownMenu:RadioItem>
            </twig:DropdownMenu:RadioGroup>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Avatar Account Menu

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-avatar-account-menu">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="Menu" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:Avatar size="sm">
                    <twig:Avatar:Fallback>
                        JD
                    </twig:Avatar:Fallback>
                </twig:Avatar>
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Label>
                My account
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:user" class="size-4" />
                Profile
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:settings" class="size-4" />
                Settings
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:log-out" class="size-4" />
                Sign out
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Status Menu

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-status-menu">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Status
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Label>
                Status
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:RadioGroup value="online">
                <twig:DropdownMenu:RadioItem value="online" checked>
                    Online
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="away">
                    Away
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="busy">
                    Busy
                </twig:DropdownMenu:RadioItem>
            </twig:DropdownMenu:RadioGroup>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Account Settings Links

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-account-settings-links">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Settings
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:shield" class="size-4" />
                Security
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:bell" class="size-4" />
                Notifications
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:credit-card" class="size-4" />
                Billing
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Density Toggles

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-density-toggles">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Preferences
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:user" class="size-4" />
                Profile
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Label>
                Display
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:CheckboxItem>
                Compact
            </twig:DropdownMenu:CheckboxItem>
            <twig:DropdownMenu:CheckboxItem checked>
                Dark mode
            </twig:DropdownMenu:CheckboxItem>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Language Menu

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-language-menu">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Language
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:RadioGroup value="en">
                <twig:DropdownMenu:RadioItem value="en" checked>
                    English
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="fr">
                    Français
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="de">
                    Deutsch
                </twig:DropdownMenu:RadioItem>
            </twig:DropdownMenu:RadioGroup>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Preferences With Switches

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-preferences-with-switches">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Preferences
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:CheckboxItem checked>
                Alerts
            </twig:DropdownMenu:CheckboxItem>
            <twig:DropdownMenu:CheckboxItem>
                Sound
            </twig:DropdownMenu:CheckboxItem>
            <twig:DropdownMenu:CheckboxItem>
                Compact layout
            </twig:DropdownMenu:CheckboxItem>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Notification Channels

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-notification-channels">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Notifications
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Label>
                Notify me by
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:CheckboxItem checked>
                Email
            </twig:DropdownMenu:CheckboxItem>
            <twig:DropdownMenu:CheckboxItem checked>
                Push
            </twig:DropdownMenu:CheckboxItem>
            <twig:DropdownMenu:CheckboxItem>
                In-app
            </twig:DropdownMenu:CheckboxItem>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Table Options

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-table-options">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Options
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Label>
                Row spacing
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:RadioGroup value="default">
                <twig:DropdownMenu:RadioItem value="compact">
                    Compact
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="default" checked>
                    Default
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="roomy">
                    Roomy
                </twig:DropdownMenu:RadioItem>
            </twig:DropdownMenu:RadioGroup>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Label>
                Columns
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:CheckboxItem checked>
                Status
            </twig:DropdownMenu:CheckboxItem>
            <twig:DropdownMenu:CheckboxItem checked>
                Owner
            </twig:DropdownMenu:CheckboxItem>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Labeled Sections

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-labeled-sections">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Open
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Label>
                Account
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:user" class="size-4" />
                Profile
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:credit-card" class="size-4" />
                Billing
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Label>
                Team
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:users" class="size-4" />
                Members
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:settings" class="size-4" />
                Settings
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Column Visibility

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-column-visibility">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Columns
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Label>
                Columns
            </twig:DropdownMenu:Label>
            <twig:DropdownMenu:CheckboxItem checked>
                Name
            </twig:DropdownMenu:CheckboxItem>
            <twig:DropdownMenu:CheckboxItem checked>
                Status
            </twig:DropdownMenu:CheckboxItem>
            <twig:DropdownMenu:CheckboxItem>
                Created
            </twig:DropdownMenu:CheckboxItem>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Single Choice

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-single-choice">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Filter
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:RadioGroup value="all">
                <twig:DropdownMenu:RadioItem value="all" checked>
                    All
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="mine">
                    Assigned to me
                </twig:DropdownMenu:RadioItem>
                <twig:DropdownMenu:RadioItem value="unassigned">
                    Unassigned
                </twig:DropdownMenu:RadioItem>
            </twig:DropdownMenu:RadioGroup>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Icons Shortcuts Checkboxes And Submenus

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-icons-shortcuts-checkboxes-and-submenus">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Edit
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:copy" class="size-4" />
                Copy
                <twig:DropdownMenu:Shortcut>
                    ⌘C
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:CheckboxItem checked>
                Show ruler
            </twig:DropdownMenu:CheckboxItem>
            <twig:DropdownMenu:Sub>
                <twig:DropdownMenu:SubTrigger>
                    More
                </twig:DropdownMenu:SubTrigger>
                <twig:DropdownMenu:SubContent class="w-48">
                    <twig:DropdownMenu:Item>
                        Export
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        Print
                    </twig:DropdownMenu:Item>
                </twig:DropdownMenu:SubContent>
            </twig:DropdownMenu:Sub>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item variant="destructive">
                <twig:ux:icon name="lucide:trash-2" class="size-4" />
                Delete
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Help Menu

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-help-menu">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Help
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:book-open" class="size-4" />
                Documentation
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:life-buoy" class="size-4" />
                Contact support
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:activity" class="size-4" />
                Status page
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Shortcuts And Tours

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-shortcuts-and-tours">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Help
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:keyboard" class="size-4" />
                Keyboard shortcuts
                <twig:DropdownMenu:Shortcut>
                    ⌘/
                </twig:DropdownMenu:Shortcut>
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:compass" class="size-4" />
                Take the tour
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:circle-help" class="size-4" />
                FAQ
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Resources Menu

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-resources-menu">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Resources
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:newspaper" class="size-4" />
                Blog
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:history" class="size-4" />
                Changelog
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:code" class="size-4" />
                API docs
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                <twig:ux:icon name="lucide:download" class="size-4" />
                Downloads
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

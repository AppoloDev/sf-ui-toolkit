# Command

## Examples

### Always Open

```twig
<twig:Command class="max-w-xs rounded-lg border">
    <twig:Command:Input placeholder="Type a command or search..." />
    <twig:Command:List>
        <twig:Command:Empty>
            No results found.
        </twig:Command:Empty>
        <twig:Command:Group heading="Suggestions">
            <twig:Command:Item>
                Calendar
            </twig:Command:Item>
            <twig:Command:Item>
                Search Emoji
            </twig:Command:Item>
            <twig:Command:Item disabled>
                Calculator
            </twig:Command:Item>
        </twig:Command:Group>
    </twig:Command:List>
</twig:Command>
```

### File Search

```twig
<div style="min-height: 300px">
    <twig:Dialog id="command-files">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" class="w-fit" {{ ...dialog_trigger_attrs }}>
                <twig:ux:icon name="lucide:search" />
                Find a file
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command>
                <twig:Command:Input placeholder="Search files..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No files found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Files">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:file" />
                            <span>
                                index.html.twig
                            </span>
                            <span class="text-xs text-muted-foreground">
                                templates/
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Twig
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:file" />
                            <span>
                                app.js
                            </span>
                            <span class="text-xs text-muted-foreground">
                                assets/
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                JS
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:file" />
                            <span>
                                services.yaml
                            </span>
                            <span class="text-xs text-muted-foreground">
                                config/
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                YAML
                            </twig:Badge>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### User Search

```twig
<div style="min-height: 300px">
    <twig:Dialog id="command-users">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" class="w-fit" {{ ...dialog_trigger_attrs }}>
                <twig:ux:icon name="lucide:users" />
                Find a person
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command>
                <twig:Command:Input placeholder="Search people..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No people found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Team">
                        <twig:Command:Item>
                            <twig:Avatar size="sm">
                                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                                <twig:Avatar:Fallback>
                                    S
                                </twig:Avatar:Fallback>
                            </twig:Avatar>
                            <span>
                                shadcn
                            </span>
                            <twig:Badge variant="default" class="ms-auto">
                                Admin
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:Avatar size="sm">
                                <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
                                <twig:Avatar:Fallback>
                                    M
                                </twig:Avatar:Fallback>
                            </twig:Avatar>
                            <span>
                                maxleiter
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Editor
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:Avatar size="sm">
                                <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
                                <twig:Avatar:Fallback>
                                    E
                                </twig:Avatar:Fallback>
                            </twig:Avatar>
                            <span>
                                evilrabbit
                            </span>
                            <twig:Badge variant="outline" class="ms-auto">
                                Viewer
                            </twig:Badge>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### Action Palette

```twig
<div style="min-height: 340px">
    <twig:Dialog id="command-actions">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" class="w-fit" {{ ...dialog_trigger_attrs }}>
                Actions
                <twig:Kbd>
                    ⌘K
                </twig:Kbd>
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command>
                <twig:Command:Input placeholder="What do you want to do?" />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Create">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:folder-plus" />
                            New project
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:user-plus" />
                            Invite member
                        </twig:Command:Item>
                    </twig:Command:Group>
                    <twig:Command:Group heading="Navigate">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:layout-dashboard" />
                            Dashboard
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:settings" />
                            Settings
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### Recent and Favorites

Favorites come first, with a filled star, then the latest commands with when they ran, then the others. Typing filters all the groups together.

```twig
<twig:Command class="max-w-sm rounded-lg border">
    <twig:Command:Input placeholder="Search commands..." />
    <twig:Command:List>
        <twig:Command:Empty>
            No results found.
        </twig:Command:Empty>
        <twig:Command:Group heading="Favorites">
            <twig:Command:Item>
                <twig:ux:icon name="lucide:star" class="fill-amber-400 text-amber-400" />
                New project
                <twig:Command:Shortcut>
                    ⌘N
                </twig:Command:Shortcut>
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:star" class="fill-amber-400 text-amber-400" />
                Open dashboard
                <twig:Command:Shortcut>
                    ⌘D
                </twig:Command:Shortcut>
            </twig:Command:Item>
        </twig:Command:Group>
        <twig:Command:Separator />
        <twig:Command:Group heading="Recent">
            <twig:Command:Item>
                <twig:ux:icon name="lucide:history" />
                Invite a member
                <twig:Command:Shortcut class="tracking-normal">
                    2 min ago
                </twig:Command:Shortcut>
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:history" />
                Export report
                <twig:Command:Shortcut class="tracking-normal">
                    1 hour ago
                </twig:Command:Shortcut>
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:history" />
                Change theme
                <twig:Command:Shortcut class="tracking-normal">
                    Yesterday
                </twig:Command:Shortcut>
            </twig:Command:Item>
        </twig:Command:Group>
        <twig:Command:Separator />
        <twig:Command:Group heading="All commands">
            <twig:Command:Item>
                <twig:ux:icon name="lucide:settings" />
                Open settings
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:log-out" />
                Sign out
            </twig:Command:Item>
        </twig:Command:Group>
    </twig:Command:List>
</twig:Command>
```

### Many Groups

Six groups in one scrollable list. Typing filters every group at once and hides the ones left empty.

```twig
<twig:Command class="max-w-sm rounded-lg border">
    <twig:Command:Input placeholder="Search everything..." />
    <twig:Command:List class="max-h-72">
        <twig:Command:Empty>
            No results found.
        </twig:Command:Empty>
        <twig:Command:Group heading="Suggestions">
            <twig:Command:Item>
                <twig:ux:icon name="lucide:calendar" />
                Calendar
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:smile" />
                Search emoji
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:calculator" />
                Calculator
                <twig:Command:Shortcut>
                    ⌘K
                </twig:Command:Shortcut>
            </twig:Command:Item>
        </twig:Command:Group>
        <twig:Command:Separator />
        <twig:Command:Group heading="Navigation">
            <twig:Command:Item>
                <twig:ux:icon name="lucide:layout-dashboard" />
                Dashboard
                <twig:Command:Shortcut>
                    ⌘1
                </twig:Command:Shortcut>
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:inbox" />
                Inbox
                <twig:Command:Shortcut>
                    ⌘2
                </twig:Command:Shortcut>
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:folder" />
                Projects
                <twig:Command:Shortcut>
                    ⌘3
                </twig:Command:Shortcut>
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:users" />
                Team
                <twig:Command:Shortcut>
                    ⌘4
                </twig:Command:Shortcut>
            </twig:Command:Item>
        </twig:Command:Group>
        <twig:Command:Separator />
        <twig:Command:Group heading="Create">
            <twig:Command:Item>
                <twig:ux:icon name="lucide:file-plus" />
                New document
                <twig:Command:Shortcut>
                    ⌘N
                </twig:Command:Shortcut>
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:folder-plus" />
                New project
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:user-plus" />
                Invite a member
            </twig:Command:Item>
        </twig:Command:Group>
        <twig:Command:Separator />
        <twig:Command:Group heading="Settings">
            <twig:Command:Item>
                <twig:ux:icon name="lucide:user" />
                Profile
                <twig:Command:Shortcut>
                    ⌘P
                </twig:Command:Shortcut>
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:credit-card" />
                Billing
                <twig:Command:Shortcut>
                    ⌘B
                </twig:Command:Shortcut>
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:settings" />
                Preferences
                <twig:Command:Shortcut>
                    ⌘,
                </twig:Command:Shortcut>
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:keyboard" />
                Keyboard shortcuts
            </twig:Command:Item>
        </twig:Command:Group>
        <twig:Command:Separator />
        <twig:Command:Group heading="Theme">
            <twig:Command:Item>
                <twig:ux:icon name="lucide:sun" />
                Light
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:moon" />
                Dark
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:monitor" />
                System
            </twig:Command:Item>
        </twig:Command:Group>
        <twig:Command:Separator />
        <twig:Command:Group heading="Help">
            <twig:Command:Item>
                <twig:ux:icon name="lucide:book-open" />
                Documentation
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:life-buoy" />
                Support
            </twig:Command:Item>
            <twig:Command:Item>
                <twig:ux:icon name="lucide:message-square" />
                Send feedback
            </twig:Command:Item>
        </twig:Command:Group>
    </twig:Command:List>
</twig:Command>
```

### Standard Simple

```twig
<div class="w-full max-w-sm">
    <twig:Command class="rounded-lg border">
        <twig:Command:Input placeholder="Type a command or search..." />
        <twig:Command:List>
            <twig:Command:Empty>
                No results found.
            </twig:Command:Empty>
            <twig:Command:Group heading="Suggestions">
                <twig:Command:Item>
                    <span>
                        Calendar
                    </span>
                </twig:Command:Item>
                <twig:Command:Item>
                    <span>
                        Search emoji
                    </span>
                </twig:Command:Item>
                <twig:Command:Item>
                    <span>
                        Calculator
                    </span>
                </twig:Command:Item>
            </twig:Command:Group>
        </twig:Command:List>
    </twig:Command>
</div>
```

### Standard Icons And Shortcuts

```twig
<div class="w-full max-w-sm">
    <twig:Command class="rounded-lg border">
        <twig:Command:Input placeholder="Type a command or search..." />
        <twig:Command:List>
            <twig:Command:Empty>
                No results found.
            </twig:Command:Empty>
            <twig:Command:Group heading="Suggestions">
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:calendar" />
                    <span>
                        Calendar
                    </span>
                    <twig:Command:Shortcut>
                        ⌘K
                    </twig:Command:Shortcut>
                </twig:Command:Item>
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:smile" />
                    <span>
                        Search emoji
                    </span>
                    <twig:Command:Shortcut>
                        ⌘E
                    </twig:Command:Shortcut>
                </twig:Command:Item>
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:calculator" />
                    <span>
                        Calculator
                    </span>
                    <twig:Command:Shortcut>
                        ⌘J
                    </twig:Command:Shortcut>
                </twig:Command:Item>
            </twig:Command:Group>
        </twig:Command:List>
    </twig:Command>
</div>
```

### Standard Separators

```twig
<div class="w-full max-w-sm">
    <twig:Command class="rounded-lg border">
        <twig:Command:Input placeholder="Type a command or search..." />
        <twig:Command:List>
            <twig:Command:Empty>
                No results found.
            </twig:Command:Empty>
            <twig:Command:Group heading="Suggestions">
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:calendar" />
                    <span>
                        Calendar
                    </span>
                </twig:Command:Item>
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:smile" />
                    <span>
                        Search emoji
                    </span>
                </twig:Command:Item>
            </twig:Command:Group>
            <twig:Command:Separator />
            <twig:Command:Group heading="Settings">
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:user" />
                    <span>
                        Profile
                    </span>
                </twig:Command:Item>
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:credit-card" />
                    <span>
                        Billing
                    </span>
                </twig:Command:Item>
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:settings" />
                    <span>
                        Settings
                    </span>
                </twig:Command:Item>
            </twig:Command:Group>
        </twig:Command:List>
    </twig:Command>
</div>
```

### Standard Badges

```twig
<div class="w-full max-w-sm">
    <twig:Command class="rounded-lg border">
        <twig:Command:Input placeholder="Type a command or search..." />
        <twig:Command:List>
            <twig:Command:Empty>
                No results found.
            </twig:Command:Empty>
            <twig:Command:Group heading="Projects">
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:folder" />
                    <span>
                        Website redesign
                    </span>
                    <twig:Badge variant="secondary" class="ms-auto">
                        Active
                    </twig:Badge>
                </twig:Command:Item>
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:folder" />
                    <span>
                        Mobile app
                    </span>
                    <twig:Badge variant="secondary" class="ms-auto">
                        Draft
                    </twig:Badge>
                </twig:Command:Item>
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:folder" />
                    <span>
                        API v2
                    </span>
                    <twig:Badge variant="secondary" class="ms-auto">
                        New
                    </twig:Badge>
                </twig:Command:Item>
            </twig:Command:Group>
        </twig:Command:List>
    </twig:Command>
</div>
```

### Standard Descriptions

```twig
<div class="w-full max-w-sm">
    <twig:Command class="rounded-lg border">
        <twig:Command:Input placeholder="Type a command or search..." />
        <twig:Command:List>
            <twig:Command:Empty>
                No results found.
            </twig:Command:Empty>
            <twig:Command:Group heading="Actions">
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:file-plus" />
                    <div class="grid">
                        <span>
                            New file
                        </span>
                        <span class="text-xs text-muted-foreground">
                            Create an empty file
                        </span>
                    </div>
                </twig:Command:Item>
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:folder-plus" />
                    <div class="grid">
                        <span>
                            New folder
                        </span>
                        <span class="text-xs text-muted-foreground">
                            Group files together
                        </span>
                    </div>
                </twig:Command:Item>
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:upload" />
                    <div class="grid">
                        <span>
                            Import
                        </span>
                        <span class="text-xs text-muted-foreground">
                            From CSV or JSON
                        </span>
                    </div>
                </twig:Command:Item>
            </twig:Command:Group>
        </twig:Command:List>
    </twig:Command>
</div>
```

### Standard Actions Menu

```twig
<div class="w-full max-w-sm">
    <twig:Command class="rounded-lg border">
        <twig:Command:Input placeholder="Type a command or search..." />
        <twig:Command:List>
            <twig:Command:Empty>
                No results found.
            </twig:Command:Empty>
            <twig:Command:Group heading="Actions">
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:link" />
                    <span>
                        Copy link
                    </span>
                    <twig:Command:Shortcut>
                        ⌘L
                    </twig:Command:Shortcut>
                </twig:Command:Item>
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:copy" />
                    <span>
                        Duplicate
                    </span>
                    <twig:Command:Shortcut>
                        ⌘D
                    </twig:Command:Shortcut>
                </twig:Command:Item>
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:archive" />
                    <span>
                        Archive
                    </span>
                    <twig:Command:Shortcut>
                        ⌘A
                    </twig:Command:Shortcut>
                </twig:Command:Item>
            </twig:Command:Group>
            <twig:Command:Separator />
            <twig:Command:Group heading="Danger zone">
                <twig:Command:Item>
                    <twig:ux:icon name="lucide:trash-2" />
                    <span>
                        Delete
                    </span>
                    <twig:Command:Shortcut>
                        ⌫
                    </twig:Command:Shortcut>
                </twig:Command:Item>
            </twig:Command:Group>
        </twig:Command:List>
    </twig:Command>
</div>
```

### Standard Status Indicators

```twig
<div class="w-full max-w-sm">
    <twig:Command class="rounded-lg border">
        <twig:Command:Input placeholder="Type a command or search..." />
        <twig:Command:List>
            <twig:Command:Empty>
                No results found.
            </twig:Command:Empty>
            <twig:Command:Group heading="Services">
                <twig:Command:Item>
                    <span class="size-2 shrink-0 rounded-full bg-green-500"></span>
                    <span>
                        API
                    </span>
                    <twig:Badge variant="secondary" class="ms-auto">
                        Operational
                    </twig:Badge>
                </twig:Command:Item>
                <twig:Command:Item>
                    <span class="size-2 shrink-0 rounded-full bg-yellow-500"></span>
                    <span>
                        Database
                    </span>
                    <twig:Badge variant="secondary" class="ms-auto">
                        Degraded
                    </twig:Badge>
                </twig:Command:Item>
                <twig:Command:Item>
                    <span class="size-2 shrink-0 rounded-full bg-red-500"></span>
                    <span>
                        Queue
                    </span>
                    <twig:Badge variant="secondary" class="ms-auto">
                        Down
                    </twig:Badge>
                </twig:Command:Item>
            </twig:Command:Group>
        </twig:Command:List>
    </twig:Command>
</div>
```

### Dialog Simple

```twig
<div style="min-height: 300px">
    <twig:Dialog id="cmd-dlg-simple">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Suggestions">
                        <twig:Command:Item>
                            <span>
                                Calendar
                            </span>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <span>
                                Search emoji
                            </span>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <span>
                                Calculator
                            </span>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### Dialog Icons And Shortcuts

```twig
<div style="min-height: 300px">
    <twig:Dialog id="cmd-dlg-icons-and-shortcuts">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Suggestions">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:calendar" />
                            <span>
                                Calendar
                            </span>
                            <twig:Command:Shortcut>
                                ⌘K
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:smile" />
                            <span>
                                Search emoji
                            </span>
                            <twig:Command:Shortcut>
                                ⌘E
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:calculator" />
                            <span>
                                Calculator
                            </span>
                            <twig:Command:Shortcut>
                                ⌘J
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### Dialog Separators

```twig
<div style="min-height: 300px">
    <twig:Dialog id="cmd-dlg-separators">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Suggestions">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:calendar" />
                            <span>
                                Calendar
                            </span>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:smile" />
                            <span>
                                Search emoji
                            </span>
                        </twig:Command:Item>
                    </twig:Command:Group>
                    <twig:Command:Separator />
                    <twig:Command:Group heading="Settings">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:user" />
                            <span>
                                Profile
                            </span>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:credit-card" />
                            <span>
                                Billing
                            </span>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:settings" />
                            <span>
                                Settings
                            </span>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### Dialog Badges

```twig
<div style="min-height: 300px">
    <twig:Dialog id="cmd-dlg-badges">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Projects">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:folder" />
                            <span>
                                Website redesign
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Active
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:folder" />
                            <span>
                                Mobile app
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Draft
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:folder" />
                            <span>
                                API v2
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                New
                            </twig:Badge>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### Dialog Descriptions

```twig
<div style="min-height: 300px">
    <twig:Dialog id="cmd-dlg-descriptions">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Actions">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:file-plus" />
                            <div class="grid">
                                <span>
                                    New file
                                </span>
                                <span class="text-xs text-muted-foreground">
                                    Create an empty file
                                </span>
                            </div>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:folder-plus" />
                            <div class="grid">
                                <span>
                                    New folder
                                </span>
                                <span class="text-xs text-muted-foreground">
                                    Group files together
                                </span>
                            </div>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:upload" />
                            <div class="grid">
                                <span>
                                    Import
                                </span>
                                <span class="text-xs text-muted-foreground">
                                    From CSV or JSON
                                </span>
                            </div>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### Dialog Actions Menu

```twig
<div style="min-height: 300px">
    <twig:Dialog id="cmd-dlg-actions-menu">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Actions">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:link" />
                            <span>
                                Copy link
                            </span>
                            <twig:Command:Shortcut>
                                ⌘L
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:copy" />
                            <span>
                                Duplicate
                            </span>
                            <twig:Command:Shortcut>
                                ⌘D
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:archive" />
                            <span>
                                Archive
                            </span>
                            <twig:Command:Shortcut>
                                ⌘A
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                    </twig:Command:Group>
                    <twig:Command:Separator />
                    <twig:Command:Group heading="Danger zone">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:trash-2" />
                            <span>
                                Delete
                            </span>
                            <twig:Command:Shortcut>
                                ⌫
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### Dialog Status Indicators

```twig
<div style="min-height: 300px">
    <twig:Dialog id="cmd-dlg-status-indicators">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Services">
                        <twig:Command:Item>
                            <span class="size-2 shrink-0 rounded-full bg-green-500"></span>
                            <span>
                                API
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Operational
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <span class="size-2 shrink-0 rounded-full bg-yellow-500"></span>
                            <span>
                                Database
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Degraded
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <span class="size-2 shrink-0 rounded-full bg-red-500"></span>
                            <span>
                                Queue
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Down
                            </twig:Badge>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### Popover Simple

```twig
<div style="min-height: 360px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72 p-0">
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Suggestions">
                        <twig:Command:Item>
                            <span>
                                Calendar
                            </span>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <span>
                                Search emoji
                            </span>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <span>
                                Calculator
                            </span>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Popover Icons And Shortcuts

```twig
<div style="min-height: 360px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72 p-0">
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Suggestions">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:calendar" />
                            <span>
                                Calendar
                            </span>
                            <twig:Command:Shortcut>
                                ⌘K
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:smile" />
                            <span>
                                Search emoji
                            </span>
                            <twig:Command:Shortcut>
                                ⌘E
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:calculator" />
                            <span>
                                Calculator
                            </span>
                            <twig:Command:Shortcut>
                                ⌘J
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Popover Separators

```twig
<div style="min-height: 360px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72 p-0">
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Suggestions">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:calendar" />
                            <span>
                                Calendar
                            </span>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:smile" />
                            <span>
                                Search emoji
                            </span>
                        </twig:Command:Item>
                    </twig:Command:Group>
                    <twig:Command:Separator />
                    <twig:Command:Group heading="Settings">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:user" />
                            <span>
                                Profile
                            </span>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:credit-card" />
                            <span>
                                Billing
                            </span>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:settings" />
                            <span>
                                Settings
                            </span>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Popover Badges

```twig
<div style="min-height: 360px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72 p-0">
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Projects">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:folder" />
                            <span>
                                Website redesign
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Active
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:folder" />
                            <span>
                                Mobile app
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Draft
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:folder" />
                            <span>
                                API v2
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                New
                            </twig:Badge>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Popover Descriptions

```twig
<div style="min-height: 360px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72 p-0">
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Actions">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:file-plus" />
                            <div class="grid">
                                <span>
                                    New file
                                </span>
                                <span class="text-xs text-muted-foreground">
                                    Create an empty file
                                </span>
                            </div>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:folder-plus" />
                            <div class="grid">
                                <span>
                                    New folder
                                </span>
                                <span class="text-xs text-muted-foreground">
                                    Group files together
                                </span>
                            </div>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:upload" />
                            <div class="grid">
                                <span>
                                    Import
                                </span>
                                <span class="text-xs text-muted-foreground">
                                    From CSV or JSON
                                </span>
                            </div>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Popover Actions Menu

```twig
<div style="min-height: 360px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72 p-0">
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Actions">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:link" />
                            <span>
                                Copy link
                            </span>
                            <twig:Command:Shortcut>
                                ⌘L
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:copy" />
                            <span>
                                Duplicate
                            </span>
                            <twig:Command:Shortcut>
                                ⌘D
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:archive" />
                            <span>
                                Archive
                            </span>
                            <twig:Command:Shortcut>
                                ⌘A
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                    </twig:Command:Group>
                    <twig:Command:Separator />
                    <twig:Command:Group heading="Danger zone">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:trash-2" />
                            <span>
                                Delete
                            </span>
                            <twig:Command:Shortcut>
                                ⌫
                            </twig:Command:Shortcut>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Popover Status Indicators

```twig
<div style="min-height: 360px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                Open command menu
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72 p-0">
            <twig:Command class="">
                <twig:Command:Input placeholder="Type a command or search..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Services">
                        <twig:Command:Item>
                            <span class="size-2 shrink-0 rounded-full bg-green-500"></span>
                            <span>
                                API
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Operational
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <span class="size-2 shrink-0 rounded-full bg-yellow-500"></span>
                            <span>
                                Database
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Degraded
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <span class="size-2 shrink-0 rounded-full bg-red-500"></span>
                            <span>
                                Queue
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Down
                            </twig:Badge>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

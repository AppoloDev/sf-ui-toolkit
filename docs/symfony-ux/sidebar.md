# Sidebar

## Examples

### Icon Rail

Closed at first (`defaultOpen` set to `false`): only the icons show, with a tooltip on each. The trigger of the page header and the rail on the edge open it.

```twig
<twig:Sidebar:Provider id="sidebar-rail" :defaultOpen="false" cookieName="" class="min-h-[420px] w-full">
    <twig:Sidebar collapsible="icon">
        <twig:Sidebar:Header>
            <div class="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <twig:ux:icon name="lucide:command" class="size-4" aria-hidden="true" />
            </div>
        </twig:Sidebar:Header>
        <twig:Sidebar:Content>
            <twig:Sidebar:Group>
                <twig:Sidebar:GroupContent>
                    <twig:Sidebar:Menu>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#" tooltip="Home" active>
                                <twig:ux:icon name="lucide:house" aria-hidden="true" />
                                <span>
                                    Home
                                </span>
                            </twig:Sidebar:MenuButton>
                        </twig:Sidebar:MenuItem>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#" tooltip="Inbox">
                                <twig:ux:icon name="lucide:inbox" aria-hidden="true" />
                                <span>
                                    Inbox
                                </span>
                            </twig:Sidebar:MenuButton>
                        </twig:Sidebar:MenuItem>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#" tooltip="Calendar">
                                <twig:ux:icon name="lucide:calendar" aria-hidden="true" />
                                <span>
                                    Calendar
                                </span>
                            </twig:Sidebar:MenuButton>
                        </twig:Sidebar:MenuItem>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#" tooltip="Search">
                                <twig:ux:icon name="lucide:search" aria-hidden="true" />
                                <span>
                                    Search
                                </span>
                            </twig:Sidebar:MenuButton>
                        </twig:Sidebar:MenuItem>
                    </twig:Sidebar:Menu>
                </twig:Sidebar:GroupContent>
            </twig:Sidebar:Group>
        </twig:Sidebar:Content>
        <twig:Sidebar:Footer>
            <twig:Sidebar:Menu>
                <twig:Sidebar:MenuItem>
                    <twig:Sidebar:MenuButton as="a" href="#" tooltip="Settings">
                        <twig:ux:icon name="lucide:settings" aria-hidden="true" />
                        <span>
                            Settings
                        </span>
                    </twig:Sidebar:MenuButton>
                </twig:Sidebar:MenuItem>
            </twig:Sidebar:Menu>
        </twig:Sidebar:Footer>
        <twig:Sidebar:Rail />
    </twig:Sidebar>
    <twig:Sidebar:Inset>
        <header class="flex h-14 items-center gap-2 border-b px-4">
            <twig:Sidebar:Trigger>
                <twig:ux:icon name="lucide:panel-left" aria-hidden="true" />
            </twig:Sidebar:Trigger>
            <span class="text-sm font-medium">
                Icon rail
            </span>
        </header>
        <div class="p-4 text-sm text-muted-foreground">
            Page content.
        </div>
    </twig:Sidebar:Inset>
</twig:Sidebar:Provider>
```

### Inspector Panel

`side="right"` puts the sidebar on the right, as a panel of details opened from the same trigger.

```twig
<twig:Sidebar:Provider id="sidebar-inspector" cookieName="" class="min-h-[420px] w-full">
    <twig:Sidebar:Inset>
        <header class="flex h-14 items-center gap-2 border-b px-4">
            <twig:Sidebar:Trigger>
                <twig:ux:icon name="lucide:panel-left" aria-hidden="true" />
            </twig:Sidebar:Trigger>
            <span class="text-sm font-medium">
                Inspector panel
            </span>
        </header>
        <div class="p-4 text-sm text-muted-foreground">
            Page content.
        </div>
    </twig:Sidebar:Inset>
    <twig:Sidebar side="right" collapsible="offcanvas" label="Inspector">
        <twig:Sidebar:Header class="border-b">
            <span class="px-2 text-sm font-semibold">
                Inspector
            </span>
        </twig:Sidebar:Header>
        <twig:Sidebar:Content>
            <twig:Sidebar:Group>
                <twig:Sidebar:GroupLabel>
                    Properties
                </twig:Sidebar:GroupLabel>
                <twig:Sidebar:GroupContent class="grid gap-3 px-2">
                    <div class="grid gap-1">
                        <span class="text-xs text-muted-foreground">
                            Name
                        </span>
                        <span class="text-sm">
                            Landing page
                        </span>
                    </div>
                    <div class="grid gap-1">
                        <span class="text-xs text-muted-foreground">
                            Owner
                        </span>
                        <span class="text-sm">
                            Amy Brooks
                        </span>
                    </div>
                    <div class="grid gap-1">
                        <span class="text-xs text-muted-foreground">
                            Status
                        </span>
                        <span class="text-sm">
                            In review
                        </span>
                    </div>
                    <div class="grid gap-1">
                        <span class="text-xs text-muted-foreground">
                            Updated
                        </span>
                        <span class="text-sm">
                            2 hours ago
                        </span>
                    </div>
                </twig:Sidebar:GroupContent>
            </twig:Sidebar:Group>
        </twig:Sidebar:Content>
    </twig:Sidebar>
</twig:Sidebar:Provider>
```

### Workspace Switcher

A `DropdownMenu` in the header changes the workspace.

```twig
<twig:Sidebar:Provider id="sidebar-workspace" cookieName="" class="min-h-[420px] w-full">
    <twig:Sidebar collapsible="none" class="border-e">
        <twig:Sidebar:Header>
            <twig:Sidebar:Menu>
                <twig:Sidebar:MenuItem>
                    <twig:DropdownMenu id="workspace-switcher" class="block w-full">
                        <twig:DropdownMenu:Trigger>
                            <twig:Sidebar:MenuButton size="lg" {{ ...dropdown_menu_trigger_attrs }}>
                                <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <twig:ux:icon name="lucide:command" class="size-4" aria-hidden="true" />
                                </div>
                                <div class="grid flex-1 text-left text-sm leading-tight">
                                    <span class="truncate font-semibold">
                                        Acme Inc
                                    </span>
                                    <span class="truncate text-xs">
                                        Enterprise
                                    </span>
                                </div>
                                <twig:ux:icon name="lucide:chevrons-up-down" class="ms-auto size-4" aria-hidden="true" />
                            </twig:Sidebar:MenuButton>
                        </twig:DropdownMenu:Trigger>
                        <twig:DropdownMenu:Content class="w-56">
                            <twig:DropdownMenu:Label>
                                Workspaces
                            </twig:DropdownMenu:Label>
                            <twig:DropdownMenu:Item>
                                Acme Inc
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Item>
                                Acme Corp.
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Item>
                                Evil Corp.
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Separator />
                            <twig:DropdownMenu:Item>
                                Add workspace
                            </twig:DropdownMenu:Item>
                        </twig:DropdownMenu:Content>
                    </twig:DropdownMenu>
                </twig:Sidebar:MenuItem>
            </twig:Sidebar:Menu>
        </twig:Sidebar:Header>
        <twig:Sidebar:Content>
            <twig:Sidebar:Group>
                <twig:Sidebar:GroupContent>
                    <twig:Sidebar:Menu>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#" tooltip="Dashboard" active>
                                <twig:ux:icon name="lucide:layout-dashboard" aria-hidden="true" />
                                <span>
                                    Dashboard
                                </span>
                            </twig:Sidebar:MenuButton>
                        </twig:Sidebar:MenuItem>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#" tooltip="Projects">
                                <twig:ux:icon name="lucide:folder" aria-hidden="true" />
                                <span>
                                    Projects
                                </span>
                            </twig:Sidebar:MenuButton>
                        </twig:Sidebar:MenuItem>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#" tooltip="Members">
                                <twig:ux:icon name="lucide:users" aria-hidden="true" />
                                <span>
                                    Members
                                </span>
                            </twig:Sidebar:MenuButton>
                        </twig:Sidebar:MenuItem>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#" tooltip="Settings">
                                <twig:ux:icon name="lucide:settings" aria-hidden="true" />
                                <span>
                                    Settings
                                </span>
                            </twig:Sidebar:MenuButton>
                        </twig:Sidebar:MenuItem>
                    </twig:Sidebar:Menu>
                </twig:Sidebar:GroupContent>
            </twig:Sidebar:Group>
        </twig:Sidebar:Content>
    </twig:Sidebar>
    <twig:Sidebar:Inset>
        <div class="p-4 text-sm text-muted-foreground">
            Page content.
        </div>
    </twig:Sidebar:Inset>
</twig:Sidebar:Provider>
```

### Docs Navigation

Links in groups, with sub-links under a link and the current page marked as active. `collapsible="none"` keeps it fixed.

```twig
<twig:Sidebar:Provider id="sidebar-docs" cookieName="" class="min-h-[460px] w-full">
    <twig:Sidebar collapsible="none" class="border-e">
        <twig:Sidebar:Content>
            <twig:Sidebar:Group>
                <twig:Sidebar:GroupLabel>
                    Getting started
                </twig:Sidebar:GroupLabel>
                <twig:Sidebar:GroupContent>
                    <twig:Sidebar:Menu>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#" tooltip="Introduction" active>
                                <twig:ux:icon name="lucide:book-open" aria-hidden="true" />
                                <span>
                                    Introduction
                                </span>
                            </twig:Sidebar:MenuButton>
                        </twig:Sidebar:MenuItem>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#" tooltip="Installation">
                                <twig:ux:icon name="lucide:download" aria-hidden="true" />
                                <span>
                                    Installation
                                </span>
                            </twig:Sidebar:MenuButton>
                        </twig:Sidebar:MenuItem>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#" tooltip="Quick start">
                                <twig:ux:icon name="lucide:rocket" aria-hidden="true" />
                                <span>
                                    Quick start
                                </span>
                            </twig:Sidebar:MenuButton>
                        </twig:Sidebar:MenuItem>
                    </twig:Sidebar:Menu>
                </twig:Sidebar:GroupContent>
            </twig:Sidebar:Group>
            <twig:Sidebar:Group>
                <twig:Sidebar:GroupLabel>
                    Components
                </twig:Sidebar:GroupLabel>
                <twig:Sidebar:GroupContent>
                    <twig:Sidebar:Menu>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#">
                                <span>
                                    Forms
                                </span>
                            </twig:Sidebar:MenuButton>
                            <twig:Sidebar:MenuSub>
                                <twig:Sidebar:MenuSubItem>
                                    <twig:Sidebar:MenuSubButton href="#">
                                        <span>
                                            Input
                                        </span>
                                    </twig:Sidebar:MenuSubButton>
                                </twig:Sidebar:MenuSubItem>
                                <twig:Sidebar:MenuSubItem>
                                    <twig:Sidebar:MenuSubButton href="#" active>
                                        <span>
                                            Select
                                        </span>
                                    </twig:Sidebar:MenuSubButton>
                                </twig:Sidebar:MenuSubItem>
                                <twig:Sidebar:MenuSubItem>
                                    <twig:Sidebar:MenuSubButton href="#">
                                        <span>
                                            Combobox
                                        </span>
                                    </twig:Sidebar:MenuSubButton>
                                </twig:Sidebar:MenuSubItem>
                            </twig:Sidebar:MenuSub>
                        </twig:Sidebar:MenuItem>
                        <twig:Sidebar:MenuItem>
                            <twig:Sidebar:MenuButton as="a" href="#">
                                <span>
                                    Overlays
                                </span>
                            </twig:Sidebar:MenuButton>
                            <twig:Sidebar:MenuSub>
                                <twig:Sidebar:MenuSubItem>
                                    <twig:Sidebar:MenuSubButton href="#">
                                        <span>
                                            Dialog
                                        </span>
                                    </twig:Sidebar:MenuSubButton>
                                </twig:Sidebar:MenuSubItem>
                                <twig:Sidebar:MenuSubItem>
                                    <twig:Sidebar:MenuSubButton href="#">
                                        <span>
                                            Drawer
                                        </span>
                                    </twig:Sidebar:MenuSubButton>
                                </twig:Sidebar:MenuSubItem>
                                <twig:Sidebar:MenuSubItem>
                                    <twig:Sidebar:MenuSubButton href="#">
                                        <span>
                                            Popover
                                        </span>
                                    </twig:Sidebar:MenuSubButton>
                                </twig:Sidebar:MenuSubItem>
                            </twig:Sidebar:MenuSub>
                        </twig:Sidebar:MenuItem>
                    </twig:Sidebar:Menu>
                </twig:Sidebar:GroupContent>
            </twig:Sidebar:Group>
        </twig:Sidebar:Content>
    </twig:Sidebar>
    <twig:Sidebar:Inset>
        <div class="p-6">
            <h1 class="text-xl font-semibold">
                Select
            </h1>
            <p class="mt-2 text-sm text-muted-foreground">
                A list of options in a popup.
            </p>
        </div>
    </twig:Sidebar:Inset>
</twig:Sidebar:Provider>
```

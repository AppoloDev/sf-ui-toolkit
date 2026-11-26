# Drawer

## Examples

### Scrollable Content

```twig
<div style="min-height: 420px">
    <twig:Drawer id="drawer-scroll">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Open drawer
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content class="max-h-[80vh]">
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Move Goal
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Set your daily activity goal.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="min-h-0 flex-1 overflow-y-auto px-4">
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
            </div>
            <twig:Drawer:Footer>
                <twig:Button>
                    Submit
                </twig:Button>
                <twig:Drawer:Close>
                    <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Drawer:Close>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Right Side

```twig
<div style="min-height: 420px">
    <twig:Drawer id="drawer-right" direction="right">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Open right
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Filters
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Refine the list.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="flex-1 px-4 text-sm text-muted-foreground">
                Filter content.
            </div>
            <twig:Drawer:Footer>
                <twig:Drawer:Close>
                    <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                        Close
                    </twig:Button>
                </twig:Drawer:Close>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Responsive

A dialog on a wide screen and a drawer on a narrow one: both exist, and a breakpoint class shows the matching button. Nothing in the page switches between them.

```twig
<div style="min-height: 420px">
    <div class="flex">
        <twig:Dialog id="responsive-dialog">
            <twig:Dialog:Trigger>
                <twig:Button variant="outline" class="max-md:hidden" {{ ...dialog_trigger_attrs }}>
                    Edit profile
                </twig:Button>
            </twig:Dialog:Trigger>
            <twig:Dialog:Content>
                <twig:Dialog:Header>
                    <twig:Dialog:Title>
                        Edit profile
                    </twig:Dialog:Title>
                    <twig:Dialog:Description>
                        Make changes to your profile here.
                    </twig:Dialog:Description>
                </twig:Dialog:Header>
                <div class="grid gap-3">
                    <twig:Label for="responsive-dialog-email">
                        Email
                    </twig:Label>
                    <twig:Input id="responsive-dialog-email" type="email" value="amy@example.com" />
                </div>
                <twig:Dialog:Footer>
                    <twig:Dialog:Close>
                        <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                            Cancel
                        </twig:Button>
                    </twig:Dialog:Close>
                    <twig:Button>
                        Save changes
                    </twig:Button>
                </twig:Dialog:Footer>
            </twig:Dialog:Content>
        </twig:Dialog>
        <twig:Drawer id="responsive-drawer">
            <twig:Drawer:Trigger>
                <twig:Button variant="outline" class="md:hidden" {{ ...drawer_trigger_attrs }}>
                    Edit profile
                </twig:Button>
            </twig:Drawer:Trigger>
            <twig:Drawer:Content>
                <twig:Drawer:Header>
                    <twig:Drawer:Title>
                        Edit profile
                    </twig:Drawer:Title>
                    <twig:Drawer:Description>
                        Make changes to your profile here.
                    </twig:Drawer:Description>
                </twig:Drawer:Header>
                <div class="grid gap-3 px-4">
                    <twig:Label for="responsive-drawer-email">
                        Email
                    </twig:Label>
                    <twig:Input id="responsive-drawer-email" type="email" value="amy@example.com" />
                </div>
                <twig:Drawer:Footer>
                    <twig:Button>
                        Save changes
                    </twig:Button>
                    <twig:Drawer:Close>
                        <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                            Cancel
                        </twig:Button>
                    </twig:Drawer:Close>
                </twig:Drawer:Footer>
            </twig:Drawer:Content>
        </twig:Drawer>
    </div>
</div>
```

### Nested

A second drawer opened from inside the first one.

```twig
<div style="min-height: 420px">
    <twig:Drawer id="drawer-outer">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Open drawer
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Account
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Manage your account settings.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <twig:Drawer:Footer>
                <twig:Drawer id="drawer-inner">
                    <twig:Drawer:Trigger>
                        <twig:Button class="w-full" {{ ...drawer_trigger_attrs }}>
                            Delete account
                        </twig:Button>
                    </twig:Drawer:Trigger>
                    <twig:Drawer:Content>
                        <twig:Drawer:Header>
                            <twig:Drawer:Title>
                                Are you sure?
                            </twig:Drawer:Title>
                            <twig:Drawer:Description>
                                This cannot be undone.
                            </twig:Drawer:Description>
                        </twig:Drawer:Header>
                        <twig:Drawer:Footer>
                            <twig:Button variant="destructive">
                                Yes, delete
                            </twig:Button>
                            <twig:Drawer:Close>
                                <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                                    Cancel
                                </twig:Button>
                            </twig:Drawer:Close>
                        </twig:Drawer:Footer>
                    </twig:Drawer:Content>
                </twig:Drawer>
                <twig:Drawer:Close>
                    <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                        Close
                    </twig:Button>
                </twig:Drawer:Close>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Basic Bottom

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-b1">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Open drawer
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Quick actions
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Choose what to do next.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <p class="text-sm text-muted-foreground">
                    A short panel that slides up from the bottom.
                </p>
            </div>
            <twig:Drawer:Footer>
                <twig:Button>
                    Submit
                </twig:Button>
                <twig:Drawer:Close>
                    <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Drawer:Close>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Compact Form

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-b2">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Add contact
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    New contact
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Add someone to your list.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <twig:Field>
                    <twig:Field:Label for="drb2-n">
                        Name
                    </twig:Field:Label>
                    <twig:Input id="drb2-n" value="" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="drb2-e">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="drb2-e" type="email" value="" />
                </twig:Field>
            </div>
            <twig:Drawer:Footer>
                <twig:Button>
                    Save contact
                </twig:Button>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Event RSVP

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-b7">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                View event
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Design review
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Thu, Dec 3 at 10:00 in Room 4B.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                    <twig:ux:icon name="lucide:clock" class="size-4" />
                    10:00 - 11:00
                </div>
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                    <twig:ux:icon name="lucide:map-pin" class="size-4" />
                    Room 4B
                </div>
            </div>
            <twig:Drawer:Footer>
                <twig:Button>
                    Going
                </twig:Button>
                <twig:Button variant="outline">
                    Maybe
                </twig:Button>
                <twig:Button variant="ghost">
                    Decline
                </twig:Button>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Basic Left

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-l1" direction="left">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Open left
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Details
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Supporting content.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <p class="text-sm text-muted-foreground">
                    A left drawer for supporting content or actions.
                </p>
            </div>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Sidebar Replacement

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-l2" direction="left">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                <twig:ux:icon name="lucide:menu" />
                Menu
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Menu
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Stands in for a collapsed sidebar.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <nav class="grid gap-1">
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                        <twig:ux:icon name="lucide:house" class="size-4" />
                        Home
                    </a>
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                        <twig:ux:icon name="lucide:folder" class="size-4" />
                        Projects
                    </a>
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                        <twig:ux:icon name="lucide:users" class="size-4" />
                        Team
                    </a>
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                        <twig:ux:icon name="lucide:settings" class="size-4" />
                        Settings
                    </a>
                </nav>
            </div>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Nested Navigation

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-l3" direction="left">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Nested menu
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Menu
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Sections and pages.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <nav class="grid gap-1">
                    <a href="#" class="rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                        Home
                    </a>
                    <twig:Collapsible>
                        <twig:Collapsible:Trigger>
                            <twig:Button variant="ghost" class="w-full justify-between" {{ ...collapsible_trigger_attrs }}>
                                Products
                                <twig:ux:icon name="lucide:chevron-down" />
                            </twig:Button>
                        </twig:Collapsible:Trigger>
                        <twig:Collapsible:Content class="grid gap-1 ps-4">
                            <a href="#" class="rounded-md px-2 py-1.5 text-sm hover:bg-muted">
                                Apps
                            </a>
                            <a href="#" class="rounded-md px-2 py-1.5 text-sm hover:bg-muted">
                                Plugins
                            </a>
                        </twig:Collapsible:Content>
                    </twig:Collapsible>
                </nav>
            </div>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Navigation With Search

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-l4" direction="left">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Search menu
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Menu
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Find a page.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <twig:Input placeholder="Search" aria-label="Search" />
                <nav class="grid gap-1">
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                        <twig:ux:icon name="lucide:house" class="size-4" />
                        Home
                    </a>
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                        <twig:ux:icon name="lucide:folder" class="size-4" />
                        Projects
                    </a>
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                        <twig:ux:icon name="lucide:users" class="size-4" />
                        Team
                    </a>
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                        <twig:ux:icon name="lucide:settings" class="size-4" />
                        Settings
                    </a>
                </nav>
            </div>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### File Explorer

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-l5" direction="left">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Files
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Files
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Browse the project.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <twig:Tree label="Files">
                    <twig:Tree:Item label="src" :expanded="true">
                        <twig:Tree:Item label="index.php" />
                        <twig:Tree:Item label="app.js" />
                    </twig:Tree:Item>
                    <twig:Tree:Item label="README.md" />
                </twig:Tree>
            </div>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Basic Right

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-r1" direction="right">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Open details
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Details
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Opened from the main layout.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <p class="text-sm text-muted-foreground">
                    A detail panel slides in from the right.
                </p>
            </div>
            <twig:Drawer:Footer>
                <twig:Drawer:Close>
                    <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                        Close
                    </twig:Button>
                </twig:Drawer:Close>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Filters

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-r2" direction="right">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Filters
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Filters
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Refine the list.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <twig:Field>
                    <twig:Field:Label for="drr2-q">
                        Search
                    </twig:Field:Label>
                    <twig:Input id="drr2-q" value="" />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="drr2-s" class="font-normal">
                        In stock only
                    </twig:Field:Label>
                    <twig:Switch id="drr2-s" />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="drr2-o" class="font-normal">
                        On sale
                    </twig:Field:Label>
                    <twig:Switch id="drr2-o" />
                </twig:Field>
            </div>
            <twig:Drawer:Footer>
                <twig:Button>
                    Apply
                </twig:Button>
                <twig:Button variant="outline">
                    Reset
                </twig:Button>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Settings

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-r3" direction="right">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Settings
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Settings
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Grouped preferences.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <twig:Field:Set>
                    <twig:Field:Legend variant="label">
                        Notifications
                    </twig:Field:Legend>
                    <twig:Field orientation="horizontal" class="justify-between">
                        <twig:Field:Label for="drr3-e" class="font-normal">
                            Email
                        </twig:Field:Label>
                        <twig:Switch id="drr3-e" checked />
                    </twig:Field>
                    <twig:Field orientation="horizontal" class="justify-between">
                        <twig:Field:Label for="drr3-p" class="font-normal">
                            Push
                        </twig:Field:Label>
                        <twig:Switch id="drr3-p" />
                    </twig:Field>
                </twig:Field:Set>
                <twig:Field:Set>
                    <twig:Field:Legend variant="label">
                        Privacy
                    </twig:Field:Legend>
                    <twig:Field orientation="horizontal" class="justify-between">
                        <twig:Field:Label for="drr3-pp" class="font-normal">
                            Public profile
                        </twig:Field:Label>
                        <twig:Switch id="drr3-pp" />
                    </twig:Field>
                </twig:Field:Set>
            </div>
            <twig:Drawer:Footer>
                <twig:Button>
                    Save
                </twig:Button>
                <twig:Drawer:Close>
                    <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Drawer:Close>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Cart

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-r4" direction="right">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                <twig:ux:icon name="lucide:shopping-cart" />
                Cart
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Your cart
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    2 items.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <twig:Item variant="outline" size="sm">
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Aero Chair
                        </twig:Item:Title>
                        <twig:Item:Description>
                            Qty 1
                        </twig:Item:Description>
                    </twig:Item:Content>
                    <twig:Item:Actions>
                        <span class="text-sm font-medium">
                            $189
                        </span>
                    </twig:Item:Actions>
                </twig:Item>
                <twig:Item variant="outline" size="sm">
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Desk Lamp
                        </twig:Item:Title>
                        <twig:Item:Description>
                            Qty 2
                        </twig:Item:Description>
                    </twig:Item:Content>
                    <twig:Item:Actions>
                        <span class="text-sm font-medium">
                            $64
                        </span>
                    </twig:Item:Actions>
                </twig:Item>
            </div>
            <twig:Drawer:Footer>
                <twig:Button class="w-full">
                    Checkout
                </twig:Button>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Notification Feed

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-r5" direction="right">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Notifications
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Notifications
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    3 unread.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <twig:Item variant="outline" size="sm">
                    <twig:Item:Content>
                        <twig:Item:Title>
                            New comment
                        </twig:Item:Title>
                        <twig:Item:Description>
                            Jane replied to your post.
                        </twig:Item:Description>
                    </twig:Item:Content>
                    <twig:Item:Actions>
                        <twig:Button variant="ghost" size="icon-sm" aria-label="Dismiss">
                            <twig:ux:icon name="lucide:x" />
                        </twig:Button>
                    </twig:Item:Actions>
                </twig:Item>
                <twig:Item variant="outline" size="sm">
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Deployment
                        </twig:Item:Title>
                        <twig:Item:Description>
                            Production build finished.
                        </twig:Item:Description>
                    </twig:Item:Content>
                    <twig:Item:Actions>
                        <twig:Button variant="ghost" size="icon-sm" aria-label="Dismiss">
                            <twig:ux:icon name="lucide:x" />
                        </twig:Button>
                    </twig:Item:Actions>
                </twig:Item>
                <twig:Item variant="outline" size="sm">
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Invoice
                        </twig:Item:Title>
                        <twig:Item:Description>
                            October invoice is ready.
                        </twig:Item:Description>
                    </twig:Item:Content>
                    <twig:Item:Actions>
                        <twig:Button variant="ghost" size="icon-sm" aria-label="Dismiss">
                            <twig:ux:icon name="lucide:x" />
                        </twig:Button>
                    </twig:Item:Actions>
                </twig:Item>
            </div>
            <twig:Drawer:Footer>
                <twig:Button variant="outline" class="w-full">
                    Mark all as read
                </twig:Button>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Basic Top

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-t1" direction="top">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Open top
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Heads up
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Short message.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <p class="text-sm text-muted-foreground">
                    A drawer that slides down from the top edge.
                </p>
            </div>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Search Field

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-t2" direction="top">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Search
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Search
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Type to find something.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <twig:Input placeholder="Search the docs" aria-label="Search" />
                <p class="text-sm text-muted-foreground">
                    Results appear below as you type.
                </p>
            </div>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Dismissible Banner

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-t3" direction="top">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Show banner
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    New: dark mode is here
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Switch themes from your profile.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <twig:Drawer:Footer>
                <twig:Button size="sm">
                    Try it
                </twig:Button>
                <twig:Drawer:Close>
                    <twig:Button variant="ghost" size="sm" {{ ...drawer_close_attrs }}>
                        Dismiss
                    </twig:Button>
                </twig:Drawer:Close>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Shortcut Grid

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-t4" direction="top">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Shortcuts
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Shortcuts
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Common tasks.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <twig:Button variant="outline" class="h-16 flex-col">
                        <twig:ux:icon name="lucide:file-plus" />
                        New file
                    </twig:Button>
                    <twig:Button variant="outline" class="h-16 flex-col">
                        <twig:ux:icon name="lucide:upload" />
                        Upload
                    </twig:Button>
                    <twig:Button variant="outline" class="h-16 flex-col">
                        <twig:ux:icon name="lucide:share-2" />
                        Share
                    </twig:Button>
                    <twig:Button variant="outline" class="h-16 flex-col">
                        <twig:ux:icon name="lucide:settings" />
                        Settings
                    </twig:Button>
                </div>
            </div>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Command Search

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-t5" direction="top">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Quick search
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Quick search
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Jump to an action.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <twig:Command>
                    <twig:Command:Input placeholder="Type a command" />
                    <twig:Command:List>
                        <twig:Command:Group heading="Actions">
                            <twig:Command:Item>
                                New project
                            </twig:Command:Item>
                            <twig:Command:Item>
                                Invite teammate
                            </twig:Command:Item>
                        </twig:Command:Group>
                    </twig:Command:List>
                </twig:Command>
            </div>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Tall Content

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-b3">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Open long drawer
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content class="max-h-[70vh]">
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Release notes
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Scroll the content.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <p class="text-sm text-muted-foreground">
                    Paragraph 1. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 2. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 3. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 4. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 5. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 6. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 7. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 8. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 9. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 10. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 11. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 12. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 13. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 14. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 15. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 16. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 17. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 18. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 19. The body scrolls while the header and footer stay put.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 20. The body scrolls while the header and footer stay put.
                </p>
            </div>
            <twig:Drawer:Footer>
                <twig:Drawer:Close>
                    <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                        Close
                    </twig:Button>
                </twig:Drawer:Close>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Narrow Right

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-w1" direction="right">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Narrow
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content class="sm:max-w-xs">
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Narrow panel
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    About 20rem wide.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <p class="text-sm text-muted-foreground">
                    Add a width class on the content.
                </p>
            </div>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Wide Right

```twig
<div style="min-height: 480px">
    <twig:Drawer id="dr-w2" direction="right">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Wide
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content class="sm:max-w-2xl">
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Wide panel
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    About 40rem wide.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="grid min-h-0 flex-1 auto-rows-min content-start gap-4 overflow-y-auto px-4">
                <p class="text-sm text-muted-foreground">
                    Add a width class on the content.
                </p>
            </div>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

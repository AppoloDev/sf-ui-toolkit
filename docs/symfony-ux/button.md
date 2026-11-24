# Button

## Examples

### Button Group

Group buttons, and a dropdown that opens from one of them, with `ButtonGroup`.

```twig
<div class="flex justify-center" style="min-height: 360px">
    <twig:ButtonGroup>
        <twig:ButtonGroup class="hidden sm:flex">
            <twig:Button variant="outline" size="icon" aria-label="Go Back">
                <twig:ux:icon name="lucide:arrow-left" />
            </twig:Button>
        </twig:ButtonGroup>
        <twig:ButtonGroup>
            <twig:Button variant="outline">
                Archive
            </twig:Button>
            <twig:Button variant="outline">
                Report
            </twig:Button>
        </twig:ButtonGroup>
        <twig:ButtonGroup>
            <twig:Button variant="outline">
                Snooze
            </twig:Button>
            <twig:DropdownMenu id="button-group-more" align="end">
                <twig:DropdownMenu:Trigger>
                    <twig:Button variant="outline" size="icon" aria-label="More Options" {{ ...dropdown_menu_trigger_attrs }}>
                        <twig:ux:icon name="lucide:more-horizontal" />
                    </twig:Button>
                </twig:DropdownMenu:Trigger>
                <twig:DropdownMenu:Content class="w-48">
                    <twig:DropdownMenu:Group>
                        <twig:DropdownMenu:Item>
                            <twig:ux:icon name="lucide:mail-check" class="size-4" />
                            Mark as Read
                        </twig:DropdownMenu:Item>
                        <twig:DropdownMenu:Item>
                            <twig:ux:icon name="lucide:archive" class="size-4" />
                            Archive
                        </twig:DropdownMenu:Item>
                    </twig:DropdownMenu:Group>
                    <twig:DropdownMenu:Separator />
                    <twig:DropdownMenu:Group>
                        <twig:DropdownMenu:Item>
                            <twig:ux:icon name="lucide:clock" class="size-4" />
                            Snooze
                        </twig:DropdownMenu:Item>
                        <twig:DropdownMenu:Item>
                            <twig:ux:icon name="lucide:calendar-plus" class="size-4" />
                            Add to Calendar
                        </twig:DropdownMenu:Item>
                        <twig:DropdownMenu:Sub>
                            <twig:DropdownMenu:SubTrigger>
                                <twig:ux:icon name="lucide:tag" class="size-4" />
                                Label As...
                            </twig:DropdownMenu:SubTrigger>
                            <twig:DropdownMenu:SubContent>
                                <twig:DropdownMenu:RadioGroup value="personal">
                                    <twig:DropdownMenu:RadioItem value="personal" checked>
                                        Personal
                                    </twig:DropdownMenu:RadioItem>
                                    <twig:DropdownMenu:RadioItem value="work">
                                        Work
                                    </twig:DropdownMenu:RadioItem>
                                    <twig:DropdownMenu:RadioItem value="other">
                                        Other
                                    </twig:DropdownMenu:RadioItem>
                                </twig:DropdownMenu:RadioGroup>
                            </twig:DropdownMenu:SubContent>
                        </twig:DropdownMenu:Sub>
                    </twig:DropdownMenu:Group>
                    <twig:DropdownMenu:Separator />
                    <twig:DropdownMenu:Group>
                        <twig:DropdownMenu:Item variant="destructive">
                            <twig:ux:icon name="lucide:trash-2" class="size-4" />
                            Trash
                        </twig:DropdownMenu:Item>
                    </twig:DropdownMenu:Group>
                </twig:DropdownMenu:Content>
            </twig:DropdownMenu>
        </twig:ButtonGroup>
    </twig:ButtonGroup>
</div>
```

### Icon Left and Right

Icons placed before or after the label, on each variant.

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button>
        <twig:ux:icon name="lucide:cloud-download" data-icon="inline-start" />
        Download
    </twig:Button>
    <twig:Button>
        Get Started
        <twig:ux:icon name="lucide:arrow-right" data-icon="inline-end" />
    </twig:Button>
    <twig:Button variant="secondary">
        Open Project
        <twig:ux:icon name="lucide:external-link" data-icon="inline-end" />
    </twig:Button>
    <twig:Button variant="outline">
        <twig:ux:icon name="lucide:plus" data-icon="inline-start" />
        Add Item
    </twig:Button>
    <twig:Button variant="ghost">
        <twig:ux:icon name="lucide:settings" data-icon="inline-start" />
        Settings
    </twig:Button>
    <twig:Button variant="destructive">
        <twig:ux:icon name="lucide:trash-2" data-icon="inline-start" />
        Delete Account
    </twig:Button>
    <twig:Button variant="link">
        <twig:ux:icon name="lucide:circle-help" data-icon="inline-start" />
        Help Center
    </twig:Button>
</div>
```

### Invalid State

Set `aria-invalid` to show the destructive border and ring.

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button aria-invalid="true">
        Default
    </twig:Button>
    <twig:Button variant="outline" aria-invalid="true">
        Outline
    </twig:Button>
    <twig:Button variant="ghost" aria-invalid="true">
        Ghost
    </twig:Button>
</div>
```

### Icon Sizes

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="outline" size="icon-xs" aria-label="Close">
        <twig:ux:icon name="lucide:x" />
    </twig:Button>
    <twig:Button variant="ghost" size="icon-sm" aria-label="Notifications">
        <twig:ux:icon name="lucide:bell" />
    </twig:Button>
    <twig:Button size="icon-lg" aria-label="Play">
        <twig:ux:icon name="lucide:play" />
    </twig:Button>
</div>
```

### Count Badge

A badge placed in the button, or pinned over its corner.

```twig
<div class="flex flex-wrap items-center gap-4">
    <twig:Button variant="outline">
        Messages
        <twig:Badge variant="outline">
            12
        </twig:Badge>
    </twig:Button>
    <twig:Button variant="outline" class="relative">
        <twig:ux:icon name="lucide:inbox" data-icon="inline-start" />
        Inbox
        <twig:Badge variant="destructive" class="absolute -end-2 -top-2 h-4 min-w-4 px-1">
            3
        </twig:Badge>
    </twig:Button>
    <twig:Button variant="outline" size="icon" class="relative" aria-label="Notifications, 5 unread">
        <twig:ux:icon name="lucide:bell" />
        <twig:Badge variant="destructive" class="absolute -end-2 -top-2 h-4 min-w-4 px-1">
            5
        </twig:Badge>
    </twig:Button>
</div>
```

### Shortcut Keys

```twig
<twig:Button variant="outline">
    <twig:ux:icon name="lucide:search" data-icon="inline-start" />
    Search
    <twig:KbdGroup class="ms-2">
        <twig:Kbd>
            ⌘
        </twig:Kbd>
        <twig:Kbd>
            K
        </twig:Kbd>
    </twig:KbdGroup>
</twig:Button>
```

### Shortcut Tooltip

```twig
<div class="flex justify-center pt-12" style="min-height: 140px">
    <twig:Tooltip id="button-shortcut">
        <twig:Tooltip:Trigger>
            <twig:Button variant="outline" size="icon" aria-label="Search" {{ ...tooltip_trigger_attrs }}>
                <twig:ux:icon name="lucide:search" />
            </twig:Button>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content>
            Search
            <twig:KbdGroup class="ms-1">
                <twig:Kbd>
                    ⌘
                </twig:Kbd>
                <twig:Kbd>
                    K
                </twig:Kbd>
            </twig:KbdGroup>
        </twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

### Like Count

A label and a count separated by a divider.

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button>
        <twig:ux:icon name="lucide:thumbs-up" data-icon="inline-start" />
        Like
        <span class="ms-1 border-s border-primary-foreground/30 ps-2">
            456
        </span>
    </twig:Button>
    <twig:Button variant="outline">
        <twig:ux:icon name="lucide:star" data-icon="inline-start" />
        Star
        <span class="ms-1 border-s ps-2 text-muted-foreground">
            589
        </span>
    </twig:Button>
</div>
```

### Status Dot

```twig
<twig:Button variant="outline">
    Live
    <span class="relative ms-1 flex size-2">
        <span class="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75">
        </span>
        <span class="relative inline-flex size-2 rounded-full bg-green-500">
        </span>
    </span>
</twig:Button>
```

### Title and Description

A tall button with an icon tile, a title and a help text.

```twig
<twig:Button variant="outline" class="h-auto justify-start gap-3 px-4 py-3 text-start">
    <span class="flex size-9 items-center justify-center rounded-md border bg-muted">
        <twig:ux:icon name="lucide:credit-card" class="size-4" />
    </span>
    <span class="flex flex-col items-start">
        <span class="font-medium">
            Credit Card
        </span>
        <span class="text-xs font-normal text-muted-foreground">
            Pay with Visa or Mastercard
        </span>
    </span>
</twig:Button>
```

### Account Chip

A button with an avatar and a handle.

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button>
        <twig:Avatar class="size-5">
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        @shadcn
    </twig:Button>
    <twig:Button variant="outline">
        <twig:Avatar class="size-5">
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        @shadcn
    </twig:Button>
    <twig:Button size="sm" variant="outline" class="rounded-full">
        <twig:Avatar size="sm" class="-ms-1">
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        @shadcn
    </twig:Button>
</div>
```

### Go Back

A link styled as a button with a chevron that slides on hover.

```twig
<twig:Button as="a" href="#" variant="link" class="group/back px-0">
    <twig:ux:icon name="lucide:chevron-left" class="transition-transform group-hover/back:-translate-x-1" />
    Go back
</twig:Button>
```

### Expanding Button

A round button that widens on hover to reveal its label.

```twig
<twig:Button class="group/expand size-10 rounded-full px-0 transition-all hover:w-36">
    <twig:ux:icon name="lucide:plus" />
    <span class="hidden group-hover/expand:inline">
        Create New
    </span>
</twig:Button>
```

### Sliding Arrow

```twig
<twig:Button class="group/slide rounded-full">
    <span class="transition-transform group-hover/slide:-translate-x-1">
        Get Started
    </span>
    <twig:ux:icon name="lucide:arrow-right" class="-ms-4 opacity-0 transition-all group-hover/slide:ms-0 group-hover/slide:opacity-100" />
</twig:Button>
```

### Social Icons

A row of icon-only brand buttons.

```twig
<div class="flex flex-wrap gap-2">
    <twig:Button variant="outline" size="icon" aria-label="Github">
        <twig:ux:icon name="lucide:github" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Twitter">
        <twig:ux:icon name="lucide:twitter" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Linkedin">
        <twig:ux:icon name="lucide:linkedin" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Instagram">
        <twig:ux:icon name="lucide:instagram" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Youtube">
        <twig:ux:icon name="lucide:youtube" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Facebook">
        <twig:ux:icon name="lucide:facebook" />
    </twig:Button>
</div>
```

### More Less Toggle

A `Button` holds no state: a `Toggle` is the component that switches `aria-pressed`, so the label and the chevron change with CSS variants of the toggle.

```twig
<twig:Toggle aria-label="Toggle details">
    <span class="group-aria-pressed/toggle:hidden">
        Show more
    </span>
    <span class="hidden group-aria-pressed/toggle:inline">
        Show less
    </span>
    <twig:ux:icon name="lucide:chevron-down" class="group-aria-pressed/toggle:hidden" aria-hidden="true" />
    <twig:ux:icon name="lucide:chevron-up" class="hidden group-aria-pressed/toggle:block" aria-hidden="true" />
</twig:Toggle>
```

### Hamburger Toggle

The two icons are stacked and cross-fade with a rotation. The accessible name stays the same: the state is announced through `aria-pressed`.

```twig
<twig:Toggle variant="outline" aria-label="Menu">
    <span class="relative flex size-4 items-center justify-center">
        <twig:ux:icon name="lucide:menu" class="absolute size-4 transition-all duration-200 group-aria-pressed/toggle:scale-75 group-aria-pressed/toggle:rotate-90 group-aria-pressed/toggle:opacity-0" aria-hidden="true" />
        <twig:ux:icon name="lucide:x" class="absolute size-4 scale-75 -rotate-90 opacity-0 transition-all duration-200 group-aria-pressed/toggle:scale-100 group-aria-pressed/toggle:rotate-0 group-aria-pressed/toggle:opacity-100" aria-hidden="true" />
    </span>
</twig:Toggle>
```

### Theme Toggle

A `Toggle` is pressed for the dark theme: the sun and the moon cross-fade and rotate with CSS variants, no script. This example only shows the control, the theme itself is switched by your own code.

```twig
<twig:Toggle variant="outline" aria-label="Toggle theme">
    <twig:ux:icon name="lucide:sun" class="transition-all duration-300 group-aria-pressed/toggle:scale-0 group-aria-pressed/toggle:-rotate-90 group-aria-pressed/toggle:opacity-0" aria-hidden="true" />
    <twig:ux:icon name="lucide:moon" class="absolute scale-0 rotate-90 opacity-0 transition-all duration-300 group-aria-pressed/toggle:scale-100 group-aria-pressed/toggle:rotate-0 group-aria-pressed/toggle:opacity-100" aria-hidden="true" />
</twig:Toggle>
```

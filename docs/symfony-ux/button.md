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

### Colored Social Icons

Brand logos come from the `simple-icons` set, which draws each logo in one color: give it the color of the brand with a text color class.

```twig
<div class="flex flex-wrap gap-2">
    <twig:Button variant="outline" size="icon" aria-label="Google">
        <twig:ux:icon name="simple-icons:google" class="size-4 text-[#4285F4]" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Facebook">
        <twig:ux:icon name="simple-icons:facebook" class="size-4 text-[#0866FF]" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="X">
        <twig:ux:icon name="simple-icons:x" class="size-4 text-foreground" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="LinkedIn">
        <twig:ux:icon name="simple-icons:linkedin" class="size-4 text-[#0A66C2]" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Discord">
        <twig:ux:icon name="simple-icons:discord" class="size-4 text-[#5865F2]" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="GitHub">
        <twig:ux:icon name="simple-icons:github" class="size-4 text-foreground" />
    </twig:Button>
</div>
```

### Social Login Stack

```twig
<div class="mx-auto grid w-full max-w-xs gap-2">
    <twig:Button variant="outline" class="w-full">
        <twig:ux:icon name="simple-icons:google" class="text-[#4285F4]" />
        Continue with Google
    </twig:Button>
    <twig:Button variant="outline" class="w-full">
        <twig:ux:icon name="simple-icons:github" class="text-foreground" />
        Continue with GitHub
    </twig:Button>
    <twig:Button variant="outline" class="w-full">
        <twig:ux:icon name="simple-icons:gitlab" class="text-[#FC6D26]" />
        Continue with GitLab
    </twig:Button>
    <twig:Button variant="outline" class="w-full">
        <twig:ux:icon name="simple-icons:apple" class="text-foreground" />
        Continue with Apple
    </twig:Button>
</div>
```

### Default Buttons

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button>
        Button
    </twig:Button>
    <twig:Button>
        <twig:ux:icon name="lucide:plus" />
        Button
    </twig:Button>
    <twig:Button>
        Button
        <twig:ux:icon name="lucide:arrow-right" />
    </twig:Button>
    <twig:Button class="rounded-full">
        Button
    </twig:Button>
    <twig:Button disabled>
        <twig:Spinner />
        Loading
    </twig:Button>
    <twig:Button>
        Button
        <twig:Badge variant="secondary">
            3
        </twig:Badge>
    </twig:Button>
    <twig:Button>
        Button
        <twig:Kbd>
            ⌘K
        </twig:Kbd>
    </twig:Button>
</div>
```

### Secondary Buttons

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="secondary">
        Button
    </twig:Button>
    <twig:Button variant="secondary">
        <twig:ux:icon name="lucide:plus" />
        Button
    </twig:Button>
    <twig:Button variant="secondary">
        Button
        <twig:ux:icon name="lucide:arrow-right" />
    </twig:Button>
    <twig:Button variant="secondary" class="rounded-full">
        Button
    </twig:Button>
    <twig:Button variant="secondary" disabled>
        <twig:Spinner />
        Loading
    </twig:Button>
    <twig:Button variant="secondary">
        Button
        <twig:Badge variant="secondary">
            3
        </twig:Badge>
    </twig:Button>
    <twig:Button variant="secondary">
        Button
        <twig:Kbd>
            ⌘K
        </twig:Kbd>
    </twig:Button>
</div>
```

### Outline Buttons

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="outline">
        Button
    </twig:Button>
    <twig:Button variant="outline">
        <twig:ux:icon name="lucide:plus" />
        Button
    </twig:Button>
    <twig:Button variant="outline">
        Button
        <twig:ux:icon name="lucide:arrow-right" />
    </twig:Button>
    <twig:Button variant="outline" class="rounded-full">
        Button
    </twig:Button>
    <twig:Button variant="outline" disabled>
        <twig:Spinner />
        Loading
    </twig:Button>
    <twig:Button variant="outline">
        Button
        <twig:Badge variant="secondary">
            3
        </twig:Badge>
    </twig:Button>
    <twig:Button variant="outline">
        Button
        <twig:Kbd>
            ⌘K
        </twig:Kbd>
    </twig:Button>
</div>
```

### Destructive Buttons

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="destructive">
        Button
    </twig:Button>
    <twig:Button variant="destructive">
        <twig:ux:icon name="lucide:plus" />
        Button
    </twig:Button>
    <twig:Button variant="destructive">
        Button
        <twig:ux:icon name="lucide:arrow-right" />
    </twig:Button>
    <twig:Button variant="destructive" class="rounded-full">
        Button
    </twig:Button>
    <twig:Button variant="destructive" disabled>
        <twig:Spinner />
        Loading
    </twig:Button>
    <twig:Button variant="destructive">
        Button
        <twig:Badge variant="secondary">
            3
        </twig:Badge>
    </twig:Button>
    <twig:Button variant="destructive">
        Button
        <twig:Kbd>
            ⌘K
        </twig:Kbd>
    </twig:Button>
</div>
```

### Link Buttons

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="link">
        Button
    </twig:Button>
    <twig:Button variant="link">
        <twig:ux:icon name="lucide:plus" />
        Button
    </twig:Button>
    <twig:Button variant="link">
        Button
        <twig:ux:icon name="lucide:arrow-right" />
    </twig:Button>
    <twig:Button variant="link" class="rounded-full">
        Button
    </twig:Button>
    <twig:Button variant="link" disabled>
        <twig:Spinner />
        Loading
    </twig:Button>
    <twig:Button variant="link">
        Button
        <twig:Badge variant="secondary">
            3
        </twig:Badge>
    </twig:Button>
    <twig:Button variant="link">
        Button
        <twig:Kbd>
            ⌘K
        </twig:Kbd>
    </twig:Button>
</div>
```

### Ghost Buttons

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="ghost">
        Button
    </twig:Button>
    <twig:Button variant="ghost">
        <twig:ux:icon name="lucide:plus" />
        Button
    </twig:Button>
    <twig:Button variant="ghost">
        Button
        <twig:ux:icon name="lucide:arrow-right" />
    </twig:Button>
    <twig:Button variant="ghost" class="rounded-full">
        Button
    </twig:Button>
    <twig:Button variant="ghost" disabled>
        <twig:Spinner />
        Loading
    </twig:Button>
    <twig:Button variant="ghost">
        Button
        <twig:Badge variant="secondary">
            3
        </twig:Badge>
    </twig:Button>
    <twig:Button variant="ghost">
        Button
        <twig:Kbd>
            ⌘K
        </twig:Kbd>
    </twig:Button>
</div>
```

### Outline Sizes

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="outline" size="xs">
        Button
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        Button
    </twig:Button>
    <twig:Button variant="outline">
        Button
    </twig:Button>
    <twig:Button variant="outline" size="lg">
        Button
    </twig:Button>
</div>
```

### Default Sizes

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button size="xs">
        Button
    </twig:Button>
    <twig:Button size="sm">
        Button
    </twig:Button>
    <twig:Button>
        Button
    </twig:Button>
    <twig:Button size="lg">
        Button
    </twig:Button>
</div>
```

### Ghost Sizes

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="ghost" size="xs">
        Button
    </twig:Button>
    <twig:Button variant="ghost" size="sm">
        Button
    </twig:Button>
    <twig:Button variant="ghost">
        Button
    </twig:Button>
    <twig:Button variant="ghost" size="lg">
        Button
    </twig:Button>
</div>
```

### Destructive Sizes

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="destructive" size="xs">
        Button
    </twig:Button>
    <twig:Button variant="destructive" size="sm">
        Button
    </twig:Button>
    <twig:Button variant="destructive">
        Button
    </twig:Button>
    <twig:Button variant="destructive" size="lg">
        Button
    </twig:Button>
</div>
```

### Icon Button Sizes

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="outline" size="icon-xs" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button variant="outline" size="icon-lg" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
</div>
```

### Default Icon Buttons

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button size="icon" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button size="icon" class="rounded-full" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button size="icon" disabled aria-label="Loading">
        <twig:Spinner />
    </twig:Button>
    <twig:Button size="icon" disabled aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <span class="relative inline-flex">
        <twig:Button size="icon" aria-label="Notifications">
            <twig:ux:icon name="lucide:bell" />
        </twig:Button>
        <twig:Badge class="absolute -end-1.5 -top-1.5 h-4 min-w-4 justify-center rounded-full px-1 text-[10px]">
            3
        </twig:Badge>
    </span>
</div>
```

### Secondary Icon Buttons

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="secondary" size="icon" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button variant="secondary" size="icon" class="rounded-full" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button variant="secondary" size="icon" disabled aria-label="Loading">
        <twig:Spinner />
    </twig:Button>
    <twig:Button variant="secondary" size="icon" disabled aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <span class="relative inline-flex">
        <twig:Button variant="secondary" size="icon" aria-label="Notifications">
            <twig:ux:icon name="lucide:bell" />
        </twig:Button>
        <twig:Badge class="absolute -end-1.5 -top-1.5 h-4 min-w-4 justify-center rounded-full px-1 text-[10px]">
            3
        </twig:Badge>
    </span>
</div>
```

### Outline Icon Buttons

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="outline" size="icon" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" class="rounded-full" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" disabled aria-label="Loading">
        <twig:Spinner />
    </twig:Button>
    <twig:Button variant="outline" size="icon" disabled aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <span class="relative inline-flex">
        <twig:Button variant="outline" size="icon" aria-label="Notifications">
            <twig:ux:icon name="lucide:bell" />
        </twig:Button>
        <twig:Badge class="absolute -end-1.5 -top-1.5 h-4 min-w-4 justify-center rounded-full px-1 text-[10px]">
            3
        </twig:Badge>
    </span>
</div>
```

### Ghost Icon Buttons

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="ghost" size="icon" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button variant="ghost" size="icon" class="rounded-full" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button variant="ghost" size="icon" disabled aria-label="Loading">
        <twig:Spinner />
    </twig:Button>
    <twig:Button variant="ghost" size="icon" disabled aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <span class="relative inline-flex">
        <twig:Button variant="ghost" size="icon" aria-label="Notifications">
            <twig:ux:icon name="lucide:bell" />
        </twig:Button>
        <twig:Badge class="absolute -end-1.5 -top-1.5 h-4 min-w-4 justify-center rounded-full px-1 text-[10px]">
            3
        </twig:Badge>
    </span>
</div>
```

### Destructive Icon Buttons

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button variant="destructive" size="icon" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button variant="destructive" size="icon" class="rounded-full" aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <twig:Button variant="destructive" size="icon" disabled aria-label="Loading">
        <twig:Spinner />
    </twig:Button>
    <twig:Button variant="destructive" size="icon" disabled aria-label="Settings">
        <twig:ux:icon name="lucide:settings" />
    </twig:Button>
    <span class="relative inline-flex">
        <twig:Button variant="destructive" size="icon" aria-label="Notifications">
            <twig:ux:icon name="lucide:bell" />
        </twig:Button>
        <twig:Badge class="absolute -end-1.5 -top-1.5 h-4 min-w-4 justify-center rounded-full px-1 text-[10px]">
            3
        </twig:Badge>
    </span>
</div>
```

### Raised And Raised Text

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="shadow-md">
        Raised
    </twig:Button>
    <twig:Button variant="secondary" class="shadow-md">
        Raised
    </twig:Button>
    <twig:Button variant="outline" class="shadow-md">
        Raised
    </twig:Button>
    <twig:Button variant="ghost" class="[&>span]:drop-shadow-sm">
        <span class="drop-shadow-sm">
        Raised text
    </span>
    </twig:Button>
</div>
```

### Glow

Pure CSS: the shadow grows on hover.

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="shadow-[0_0_20px_-4px_var(--primary)] transition-shadow duration-300 hover:shadow-[0_0_32px_2px_var(--primary)]">
        Glow
    </twig:Button>
    <twig:Button variant="outline" class="transition-shadow duration-300 hover:shadow-[0_0_20px_-2px_var(--ring)]">
        Glow
    </twig:Button>
    <twig:Button variant="secondary" class="shadow-[0_0_16px_-6px_var(--foreground)] transition-shadow duration-300 hover:shadow-[0_0_24px_-4px_var(--foreground)]">
        Glow
    </twig:Button>
</div>
```

### Glow Shimmer

The continuous animations need the keyframes of the `<style>` block; copy them into your CSS.

```twig
<style>
    .btnfx-shimmer{background-image:linear-gradient(110deg,transparent 35%,rgb(255 255 255/.4) 50%,transparent 65%);background-size:200% 100%;animation:btnfx-sweep 2.2s linear infinite}
    @keyframes btnfx-sweep{from{background-position:200% 0}to{background-position:-200% 0}}
    .btnfx-spin{background:conic-gradient(from 0deg,transparent 0 60%,var(--btnfx-c,#888) 100%);animation:btnfx-rot 3s linear infinite}
    @keyframes btnfx-rot{to{transform:rotate(360deg)}}
</style>
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="relative overflow-hidden">
        <span aria-hidden="true" class="pointer-events-none absolute inset-0 btnfx-shimmer"></span>
        <span class="relative">
            Shimmer
        </span>
    </twig:Button>
    <span class="relative inline-flex overflow-hidden rounded-lg p-px">
        <span aria-hidden="true" class="btnfx-spin absolute -inset-[200%]" style="--btnfx-c: #a3a3a3"></span>
        <twig:Button variant="secondary" class="relative">
            Rotating glow
        </twig:Button>
    </span>
    <span class="relative inline-flex overflow-hidden rounded-lg p-px">
        <span aria-hidden="true" class="btnfx-spin absolute -inset-[200%]" style="--btnfx-c: #6366f1"></span>
        <twig:Button variant="outline" class="relative border-transparent">
            Rotating glow
        </twig:Button>
    </span>
</div>
```

### Glow Shine

Pure CSS: a light band crosses the button on hover.

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="relative overflow-hidden">
        <span aria-hidden="true" class="pointer-events-none absolute inset-y-0 start-0 w-1/3 -translate-x-full skew-x-[-20deg] bg-white/40 transition-transform duration-700 group-hover/button:translate-x-[400%]"></span>
        <span class="relative">
            Shine
        </span>
    </twig:Button>
    <twig:Button variant="secondary" class="relative overflow-hidden">
        <span aria-hidden="true" class="pointer-events-none absolute inset-y-0 start-0 w-1/3 -translate-x-full skew-x-[-20deg] bg-white/40 transition-transform duration-700 group-hover/button:translate-x-[400%]"></span>
        <span class="relative">
            Shine
        </span>
    </twig:Button>
    <twig:Button variant="outline" class="relative overflow-hidden">
        <span aria-hidden="true" class="pointer-events-none absolute inset-y-0 start-0 w-1/3 -translate-x-full skew-x-[-20deg] bg-white/40 transition-transform duration-700 group-hover/button:translate-x-[400%]"></span>
        <span class="relative">
            Shine
        </span>
    </twig:Button>
</div>
```

### Glow Aurora

The animation needs the keyframes of the `<style>` block; copy them into your CSS.

```twig
<style>
    .btnfx-aurora{background-image:linear-gradient(90deg,#6366f1,#ec4899,#f59e0b,#10b981,#6366f1);background-size:300% 100%;animation:btnfx-flow 6s linear infinite}
    @keyframes btnfx-flow{to{background-position:-300% 0}}
</style>
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="btnfx-aurora border-0 text-white">
        Aurora
    </twig:Button>
    <span class="btnfx-aurora inline-flex rounded-lg p-px">
        <twig:Button variant="outline" class="border-transparent">
            Aurora
        </twig:Button>
    </span>
    <twig:Button variant="secondary" class="relative overflow-hidden">
        <span aria-hidden="true" class="pointer-events-none absolute inset-0 btnfx-aurora opacity-25"></span>
        <span class="relative">
            Aurora
        </span>
    </twig:Button>
</div>
```

### Glow Gleam

The periodic sweep needs the keyframes of the `<style>` block.

```twig
<style>
    @keyframes btnfx-gleam{0%,55%{transform:translateX(-150%) skewX(-20deg)}100%{transform:translateX(450%) skewX(-20deg)}}
    .btnfx-gleam{animation:btnfx-gleam 3s ease-in-out infinite}
</style>
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="relative overflow-hidden">
        <span aria-hidden="true" class="pointer-events-none absolute inset-y-0 start-0 w-1/5 btnfx-gleam bg-white/50"></span>
        <span class="relative">
            Gleam
        </span>
    </twig:Button>
    <twig:Button variant="secondary" class="relative overflow-hidden">
        <span aria-hidden="true" class="pointer-events-none absolute inset-y-0 start-0 w-1/5 btnfx-gleam bg-white/50"></span>
        <span class="relative">
            Gleam
        </span>
    </twig:Button>
    <twig:Button variant="outline" class="relative overflow-hidden">
        <span aria-hidden="true" class="pointer-events-none absolute inset-y-0 start-0 w-1/5 btnfx-gleam bg-white/50"></span>
        <span class="relative">
            Gleam
        </span>
    </twig:Button>
</div>
```

### Text Effect Slide Up

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="relative overflow-hidden">
        <span class="transition-transform duration-300 group-hover/button:-translate-y-full">
            Hover me
        </span>
        <span class="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
            Let's go
        </span>
    </twig:Button>
    <twig:Button variant="outline" class="relative overflow-hidden">
        <span class="transition-transform duration-300 group-hover/button:-translate-y-full">
            Hover me
        </span>
        <span class="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
            Let's go
        </span>
    </twig:Button>
    <twig:Button variant="secondary" class="relative overflow-hidden">
        <span class="transition-transform duration-300 group-hover/button:-translate-y-full">
            Hover me
        </span>
        <span class="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
            Let's go
        </span>
    </twig:Button>
</div>
```

### Text Effect Slide Left

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="relative overflow-hidden">
        <span class="transition-transform duration-300 group-hover/button:-translate-x-full">
            Hover me
        </span>
        <span class="absolute inset-0 flex items-center justify-center translate-x-full transition-transform duration-300 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
            Let's go
        </span>
    </twig:Button>
    <twig:Button variant="outline" class="relative overflow-hidden">
        <span class="transition-transform duration-300 group-hover/button:-translate-x-full">
            Hover me
        </span>
        <span class="absolute inset-0 flex items-center justify-center translate-x-full transition-transform duration-300 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
            Let's go
        </span>
    </twig:Button>
    <twig:Button variant="secondary" class="relative overflow-hidden">
        <span class="transition-transform duration-300 group-hover/button:-translate-x-full">
            Hover me
        </span>
        <span class="absolute inset-0 flex items-center justify-center translate-x-full transition-transform duration-300 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
            Let's go
        </span>
    </twig:Button>
</div>
```

### Text Effect Slide Right

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="relative overflow-hidden">
        <span class="transition-transform duration-300 group-hover/button:translate-x-full">
            Hover me
        </span>
        <span class="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
            Let's go
        </span>
    </twig:Button>
    <twig:Button variant="outline" class="relative overflow-hidden">
        <span class="transition-transform duration-300 group-hover/button:translate-x-full">
            Hover me
        </span>
        <span class="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
            Let's go
        </span>
    </twig:Button>
    <twig:Button variant="secondary" class="relative overflow-hidden">
        <span class="transition-transform duration-300 group-hover/button:translate-x-full">
            Hover me
        </span>
        <span class="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
            Let's go
        </span>
    </twig:Button>
</div>
```

### Text Effect Arrow

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button>
        Continue
        <twig:ux:icon name="lucide:arrow-right" class="transition-transform duration-300 group-hover/button:translate-x-1" />
    </twig:Button>
    <twig:Button variant="outline">
        Continue
        <twig:ux:icon name="lucide:arrow-right" class="transition-transform duration-300 group-hover/button:translate-x-1" />
    </twig:Button>
    <twig:Button variant="secondary">
        Continue
        <twig:ux:icon name="lucide:arrow-right" class="transition-transform duration-300 group-hover/button:translate-x-1" />
    </twig:Button>
</div>
```

### Morph Fold

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="relative overflow-hidden">
        <span aria-hidden="true" class="absolute inset-0 origin-bottom scale-y-0 bg-background transition-transform duration-300 group-hover/button:scale-y-100"></span>
        <span class="relative transition-colors duration-300 group-hover/button:text-foreground">
            Fold
        </span>
    </twig:Button>
    <twig:Button variant="outline" class="relative overflow-hidden">
        <span aria-hidden="true" class="absolute inset-0 origin-bottom scale-y-0 bg-foreground transition-transform duration-300 group-hover/button:scale-y-100"></span>
        <span class="relative transition-colors duration-300 group-hover/button:text-background">
            Fold
        </span>
    </twig:Button>
    <twig:Button variant="ghost" class="relative overflow-hidden">
        <span aria-hidden="true" class="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-300 group-hover/button:scale-y-100"></span>
        <span class="relative transition-colors duration-300 ">
            Fold
        </span>
    </twig:Button>
</div>
```

### Text Marquee On Hover

The scrolling needs the keyframes of the `<style>` block.

```twig
<style>
    @keyframes btnfx-marq{to{transform:translateX(calc(-50% - .75rem))}}
    .btnfx-marq{display:inline-flex;gap:1.5rem;animation:btnfx-marq 4s linear infinite}
    .btnfx-hover{animation-play-state:paused}
    .group\/button:hover .btnfx-hover{animation-play-state:running}
</style>
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="w-36 justify-start overflow-hidden">
        <span class="btnfx-marq btnfx-hover">
            <span>
                Scrolling text
            </span>
            <span aria-hidden="true">
                Scrolling text
            </span>
        </span>
    </twig:Button>
    <twig:Button variant="outline" class="w-36 justify-start overflow-hidden">
        <span class="btnfx-marq btnfx-hover">
            <span>
                Scrolling text
            </span>
            <span aria-hidden="true">
                Scrolling text
            </span>
        </span>
    </twig:Button>
    <twig:Button variant="secondary" class="w-36 justify-start overflow-hidden">
        <span class="btnfx-marq btnfx-hover">
            <span>
                Scrolling text
            </span>
            <span aria-hidden="true">
                Scrolling text
            </span>
        </span>
    </twig:Button>
</div>
```

### Text Marquee Auto Loop

The scrolling needs the keyframes of the `<style>` block.

```twig
<style>
    @keyframes btnfx-marq{to{transform:translateX(calc(-50% - .75rem))}}
    .btnfx-marq{display:inline-flex;gap:1.5rem;animation:btnfx-marq 4s linear infinite}
    .btnfx-hover{animation-play-state:paused}
    .group\/button:hover .btnfx-hover{animation-play-state:running}
</style>
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="w-36 justify-start overflow-hidden">
        <span class="btnfx-marq">
            <span>
                Scrolling text
            </span>
            <span aria-hidden="true">
                Scrolling text
            </span>
        </span>
    </twig:Button>
    <twig:Button variant="outline" class="w-36 justify-start overflow-hidden">
        <span class="btnfx-marq">
            <span>
                Scrolling text
            </span>
            <span aria-hidden="true">
                Scrolling text
            </span>
        </span>
    </twig:Button>
    <twig:Button variant="secondary" class="w-36 justify-start overflow-hidden">
        <span class="btnfx-marq">
            <span>
                Scrolling text
            </span>
            <span aria-hidden="true">
                Scrolling text
            </span>
        </span>
    </twig:Button>
</div>
```

### Text Typewriter On Hover

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="w-36 justify-start">
        <span class="inline-block max-w-0 overflow-hidden whitespace-nowrap align-bottom transition-[max-width] duration-1000 ease-[steps(14)] group-hover/button:max-w-[14ch]">
            Typing text...
        </span>
        <span aria-hidden="true" class="-ms-1 animate-pulse">
            |
        </span>
    </twig:Button>
    <twig:Button variant="outline" class="w-36 justify-start">
        <span class="inline-block max-w-0 overflow-hidden whitespace-nowrap align-bottom transition-[max-width] duration-1000 ease-[steps(14)] group-hover/button:max-w-[14ch]">
            Typing text...
        </span>
        <span aria-hidden="true" class="-ms-1 animate-pulse">
            |
        </span>
    </twig:Button>
    <twig:Button variant="secondary" class="w-36 justify-start">
        <span class="inline-block max-w-0 overflow-hidden whitespace-nowrap align-bottom transition-[max-width] duration-1000 ease-[steps(14)] group-hover/button:max-w-[14ch]">
            Typing text...
        </span>
        <span aria-hidden="true" class="-ms-1 animate-pulse">
            |
        </span>
    </twig:Button>
</div>
```

### Text Typewriter On Load

The typing needs the keyframes of the `<style>` block.

```twig
<style>
    @keyframes btnfx-typing{from{max-width:0}to{max-width:14ch}}
    .btnfx-type{animation:btnfx-typing 1.5s steps(14) both}
</style>
<div class="flex flex-wrap items-center gap-3">
    <twig:Button class="w-36 justify-start">
        <span class="inline-block overflow-hidden whitespace-nowrap align-bottom btnfx-type">
            Typing text...
        </span>
        <span aria-hidden="true" class="-ms-1 animate-pulse">
            |
        </span>
    </twig:Button>
    <twig:Button variant="outline" class="w-36 justify-start">
        <span class="inline-block overflow-hidden whitespace-nowrap align-bottom btnfx-type">
            Typing text...
        </span>
        <span aria-hidden="true" class="-ms-1 animate-pulse">
            |
        </span>
    </twig:Button>
    <twig:Button variant="secondary" class="w-36 justify-start">
        <span class="inline-block overflow-hidden whitespace-nowrap align-bottom btnfx-type">
            Typing text...
        </span>
        <span aria-hidden="true" class="-ms-1 animate-pulse">
            |
        </span>
    </twig:Button>
</div>
```

### Morph Expand

```twig
<div class="flex flex-wrap items-center gap-3">
    <twig:Button size="icon" class="w-8 justify-start px-2 transition-[width] duration-300 hover:w-36" aria-label="Send message">
        <twig:ux:icon name="lucide:send" />
        <span class="ms-1.5 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/button:opacity-100">
            Send message
        </span>
    </twig:Button>
    <twig:Button variant="outline" size="icon" class="w-8 justify-start px-2 transition-[width] duration-300 hover:w-32" aria-label="Download">
        <twig:ux:icon name="lucide:download" />
        <span class="ms-1.5 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/button:opacity-100">
            Download
        </span>
    </twig:Button>
</div>
```

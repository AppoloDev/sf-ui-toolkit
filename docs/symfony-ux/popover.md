# Popover

## Examples

### Opening Sides

```twig
<div class="grid grid-cols-2 gap-3 pt-20 pb-20 ps-24" style="min-height: 320px; max-width: 360px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...popover_trigger_attrs }}>
                top
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content side="top" class="w-40 text-sm">
            Opens on the top.
        </twig:Popover:Content>
    </twig:Popover>
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...popover_trigger_attrs }}>
                right
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content side="right" class="w-40 text-sm">
            Opens on the right.
        </twig:Popover:Content>
    </twig:Popover>
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...popover_trigger_attrs }}>
                bottom
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content side="bottom" class="w-40 text-sm">
            Opens on the bottom.
        </twig:Popover:Content>
    </twig:Popover>
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...popover_trigger_attrs }}>
                left
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content side="left" class="w-40 text-sm">
            Opens on the left.
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Inline Form

```twig
<div class="flex justify-center pt-4" style="min-height: 280px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                Dimensions
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72">
            <h4 class="font-medium leading-none">
                Dimensions
            </h4>
            <div class="mt-3 grid gap-3">
                <div class="grid grid-cols-3 items-center gap-2">
                    <twig:Label for="pop-w">
                        Width
                    </twig:Label>
                    <twig:Input id="pop-w" value="100%" class="col-span-2 h-8" />
                </div>
                <div class="grid grid-cols-3 items-center gap-2">
                    <twig:Label for="pop-h">
                        Height
                    </twig:Label>
                    <twig:Input id="pop-h" value="25px" class="col-span-2 h-8" />
                </div>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Profile Card

```twig
<div class="flex justify-center pt-4" style="min-height: 280px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="ghost" class="gap-2" {{ ...popover_trigger_attrs }}>
                <twig:Avatar size="sm">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                @shadcn
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72">
            <div class="flex gap-3">
                <twig:Avatar>
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="flex-1">
                    <p class="font-medium">
                        shadcn
                    </p>
                    <p class="text-xs text-muted-foreground">
                        Building UI that people love.
                    </p>
                    <p class="mt-2 text-xs text-muted-foreground">
                        <span class="font-medium text-foreground">
                            12k
                        </span>
                        followers
                    </p>
                </div>
            </div>
            <twig:Button size="sm" class="mt-3 w-full">
                Follow
            </twig:Button>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Feature Pitch

```twig
<div class="flex justify-center pt-4" style="min-height: 300px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:sparkles" />
                What is new
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-80 gap-0 overflow-hidden p-0">
            <div class="bg-primary px-4 py-3 text-primary-foreground">
                <p class="font-medium">
                    Meet the AI assistant
                </p>
            </div>
            <div class="grid gap-3 p-4 text-sm">
                <p class="text-muted-foreground">
                    Summarize pages and draft replies in one click.
                </p>
                <div class="flex gap-2">
                    <twig:Button size="sm">
                        Enable AI
                    </twig:Button>
                    <twig:Button size="sm" variant="outline">
                        Learn more
                    </twig:Button>
                </div>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Controls

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" size="icon" aria-label="Settings" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:settings" />
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-64">
            <div class="grid gap-3">
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="pop-sound">
                        Sound
                    </twig:Field:Label>
                    <twig:Switch id="pop-sound" checked />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="pop-notif">
                        Notifications
                    </twig:Field:Label>
                    <twig:Switch id="pop-notif" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="pop-vol">
                        Volume
                    </twig:Field:Label>
                    <twig:Slider id="pop-vol" name="volume" value="60" />
                </twig:Field>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Actions

<!-- height: 300 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:chevron-down" />
                Actions
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content align="start" class="w-44 p-1">
            <div class="grid gap-0.5">
                <twig:Button variant="ghost" size="sm" class="justify-start">
                    <twig:ux:icon name="lucide:pencil" />
                    Edit
                </twig:Button>
                <twig:Button variant="ghost" size="sm" class="justify-start">
                    <twig:ux:icon name="lucide:copy" />
                    Duplicate
                </twig:Button>
                <twig:Button variant="ghost" size="sm" class="justify-start">
                    <twig:ux:icon name="lucide:archive" />
                    Archive
                </twig:Button>
                <twig:Button variant="ghost" size="sm" class="justify-start text-destructive">
                    <twig:ux:icon name="lucide:trash-2" />
                    Delete
                </twig:Button>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Compact

<!-- height: 240 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 180px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" size="icon-sm" aria-label="More" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:ellipsis" />
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-36 p-1">
            <div class="grid gap-0.5">
                <twig:Button variant="ghost" size="sm" class="justify-start">
                    <twig:ux:icon name="lucide:link" />
                    Copy link
                </twig:Button>
                <twig:Button variant="ghost" size="sm" class="justify-start">
                    <twig:ux:icon name="lucide:flag" />
                    Report
                </twig:Button>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Filter

<!-- height: 340 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 280px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:list-filter" />
                Filter
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-56 gap-3 p-3">
            <div class="grid gap-1">
                <div class="font-medium leading-none">
                    Status
                </div>
            </div>
            <div class="grid gap-2">
                <twig:Field orientation="horizontal">
                    <twig:Checkbox id="pf-open" checked />
                    <twig:Field:Label for="pf-open">
                        Open
                    </twig:Field:Label>
                </twig:Field>
                <twig:Field orientation="horizontal">
                    <twig:Checkbox id="pf-prog" />
                    <twig:Field:Label for="pf-prog">
                        In progress
                    </twig:Field:Label>
                </twig:Field>
                <twig:Field orientation="horizontal">
                    <twig:Checkbox id="pf-done" />
                    <twig:Field:Label for="pf-done">
                        Done
                    </twig:Field:Label>
                </twig:Field>
            </div>
            <div class="flex justify-between">
                <twig:Button variant="ghost" size="sm">
                    Clear
                </twig:Button>
                <twig:Button size="sm">
                    Apply
                </twig:Button>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Info Icon

<!-- height: 240 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 180px">
    <div class="flex items-center gap-1.5 text-sm">
        Storage
        <twig:Popover>
            <twig:Popover:Trigger>
                <twig:Button variant="ghost" size="icon-xs" aria-label="More information" {{ ...popover_trigger_attrs }}>
                    <twig:ux:icon name="lucide:info" />
                </twig:Button>
            </twig:Popover:Trigger>
            <twig:Popover:Content class="w-60">
                <p class="text-sm text-muted-foreground">
                    Storage includes files, backups and shared drives.
                </p>
            </twig:Popover:Content>
        </twig:Popover>
    </div>
</div>
```

### List

<!-- height: 340 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 280px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:file-text" />
                Recent files
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72 p-1">
            <twig:Item:Group>
                <twig:Item size="xs" class="px-2">
                    <twig:Item:Media variant="icon">
                        <twig:ux:icon name="lucide:file-text" />
                    </twig:Item:Media>
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Roadmap.pdf
                        </twig:Item:Title>
                        <twig:Item:Description>
                            Edited 2 hours ago
                        </twig:Item:Description>
                    </twig:Item:Content>
                </twig:Item>
                <twig:Item:Separator />
                <twig:Item size="xs" class="px-2">
                    <twig:Item:Media variant="icon">
                        <twig:ux:icon name="lucide:file-text" />
                    </twig:Item:Media>
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Budget.xlsx
                        </twig:Item:Title>
                        <twig:Item:Description>
                            Edited yesterday
                        </twig:Item:Description>
                    </twig:Item:Content>
                </twig:Item>
                <twig:Item:Separator />
                <twig:Item size="xs" class="px-2">
                    <twig:Item:Media variant="icon">
                        <twig:ux:icon name="lucide:file-text" />
                    </twig:Item:Media>
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Notes.md
                        </twig:Item:Title>
                        <twig:Item:Description>
                            Edited last week
                        </twig:Item:Description>
                    </twig:Item:Content>
                </twig:Item>
            </twig:Item:Group>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Notifications

<!-- height: 360 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 300px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" size="icon" aria-label="Notifications" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:bell" />
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72 gap-3 p-3">
            <div class="grid gap-1">
                <div class="font-medium leading-none">
                    Notifications
                </div>
                <p class="text-sm text-muted-foreground">
                    You have 2 unread messages.
                </p>
            </div>
            <div class="grid gap-3">
                <div class="flex items-start gap-3">
                    <span class="mt-1.5 size-2 shrink-0 rounded-full bg-primary"></span>
                    <div class="grid gap-0.5 text-sm">
                        <span class="font-medium">
                            New comment
                        </span>
                        <span class="text-muted-foreground">
                            Sam replied to your post.
                        </span>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <span class="mt-1.5 size-2 shrink-0 rounded-full bg-primary"></span>
                    <div class="grid gap-0.5 text-sm">
                        <span class="font-medium">
                            Deploy finished
                        </span>
                        <span class="text-muted-foreground">
                            Production is up to date.
                        </span>
                    </div>
                </div>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Share

<!-- height: 320 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 260px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:share-2" />
                Share
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-80 gap-3 p-3">
            <div class="grid gap-1">
                <div class="font-medium leading-none">
                    Share link
                </div>
                <p class="text-sm text-muted-foreground">
                    Anyone with the link can view.
                </p>
            </div>
            <twig:InputGroup>
                <twig:InputGroup:Input value="https://example.com/s/8f2a" readonly aria-label="Share link" />
                <twig:InputGroup:Addon align="inline-end">
                    <twig:InputGroup:Button size="icon-xs" aria-label="Copy link">
                        <twig:ux:icon name="lucide:copy" />
                    </twig:InputGroup:Button>
                </twig:InputGroup:Addon>
            </twig:InputGroup>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Footer

<!-- height: 300 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:trash-2" />
                Delete project
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72 gap-3 p-3">
            <div class="grid gap-1">
                <div class="font-medium leading-none">
                    Delete this project?
                </div>
                <p class="text-sm text-muted-foreground">
                    All of its files will be removed.
                </p>
            </div>
            <div class="flex justify-end gap-2 border-t pt-3">
                <twig:Button variant="outline" size="sm">
                    Cancel
                </twig:Button>
                <twig:Button variant="destructive" size="sm">
                    Delete
                </twig:Button>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Feedback

<!-- height: 360 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 300px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:message-square" />
                Feedback
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-80 gap-3 p-3">
            <div class="grid gap-1">
                <div class="font-medium leading-none">
                    Send feedback
                </div>
            </div>
            <twig:Textarea placeholder="What can we improve?" aria-label="Feedback" />
            <div class="flex justify-end">
                <twig:Button size="sm">
                    Send
                </twig:Button>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Separator

<!-- height: 320 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 260px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:user" />
                Account
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-44 p-1">
            <div class="grid gap-0.5">
                <twig:Button variant="ghost" size="sm" class="justify-start">
                    Profile
                </twig:Button>
                <twig:Button variant="ghost" size="sm" class="justify-start">
                    Billing
                </twig:Button>
                <twig:Separator class="my-1" />
                <twig:Button variant="ghost" size="sm" class="justify-start">
                    Sign out
                </twig:Button>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Plain Text

<!-- height: 240 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 180px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                What is this?
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-56">
            <p class="text-sm">
                A short explanation that fits on a couple of lines.
            </p>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Title

<!-- height: 300 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                Details
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-64 gap-3 p-3">
            <div class="grid gap-1">
                <div class="font-medium leading-none">
                    Order #1042
                </div>
                <p class="text-sm text-muted-foreground">
                    Placed on Nov 25, 2026
                </p>
            </div>
            <twig:Separator />
            <div class="flex justify-between text-sm">
                <span class="text-muted-foreground">
                    Total
                </span>
                <span class="font-medium">
                    $128.00
                </span>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Steps

<!-- height: 340 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 280px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:list-checks" />
                Setup guide
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-64 gap-3 p-3">
            <div class="grid gap-1">
                <div class="font-medium leading-none">
                    Getting started
                </div>
                <p class="text-sm text-muted-foreground">
                    2 of 3 steps done
                </p>
            </div>
            <twig:Progress value="66" />
            <div class="grid gap-2 text-sm">
                <div class="flex items-center gap-2 text-muted-foreground">
                    <twig:ux:icon name="lucide:circle-check" class="size-4" />
                    Create a project
                </div>
                <div class="flex items-center gap-2 text-muted-foreground">
                    <twig:ux:icon name="lucide:circle-check" class="size-4" />
                    Invite your team
                </div>
                <div class="flex items-center gap-2">
                    <twig:ux:icon name="lucide:circle" class="size-4" />
                    Connect a domain
                </div>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Data Selection

<!-- height: 340 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 280px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:map-pin" />
                Select a city
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-56 p-1">
            <twig:Item:Group>
                <twig:Item size="xs" class="px-2" role="button" tabindex="0">
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Paris
                        </twig:Item:Title>
                    </twig:Item:Content>
                    <twig:Badge variant="secondary">
                        FR
                    </twig:Badge>
                </twig:Item>
                <twig:Item size="xs" class="px-2" role="button" tabindex="0">
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Berlin
                        </twig:Item:Title>
                    </twig:Item:Content>
                    <twig:Badge variant="secondary">
                        DE
                    </twig:Badge>
                </twig:Item>
                <twig:Item size="xs" class="px-2" role="button" tabindex="0">
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Madrid
                        </twig:Item:Title>
                    </twig:Item:Content>
                    <twig:Badge variant="secondary">
                        ES
                    </twig:Badge>
                </twig:Item>
                <twig:Item size="xs" class="px-2" role="button" tabindex="0">
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Rome
                        </twig:Item:Title>
                    </twig:Item:Content>
                    <twig:Badge variant="secondary">
                        IT
                    </twig:Badge>
                </twig:Item>
            </twig:Item:Group>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Table Row Preview

<!-- height: 340 -->
```twig
<div class="flex justify-center pt-4" style="min-height: 280px">
    <twig:Table class="w-[420px]">
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Keyboard
                </twig:Table:Cell>
                <twig:Table:Cell>
                    $89
                </twig:Table:Cell>
                <twig:Table:Cell class="text-end">
                    <twig:Popover>
                        <twig:Popover:Trigger>
                            <twig:Button variant="ghost" size="icon-sm" aria-label="Preview Keyboard" {{ ...popover_trigger_attrs }}>
                                <twig:ux:icon name="lucide:eye" />
                            </twig:Button>
                        </twig:Popover:Trigger>
                        <twig:Popover:Content align="end" class="w-60 gap-2 p-3">
                            <div class="grid gap-1">
                                <div class="font-medium leading-none">
                                    Keyboard
                                </div>
                                <p class="text-sm text-muted-foreground">
                                    Ships in 2 days
                                </p>
                            </div>
                            <div class="text-sm text-muted-foreground">
                                12 in stock
                            </div>
                        </twig:Popover:Content>
                    </twig:Popover>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Mouse
                </twig:Table:Cell>
                <twig:Table:Cell>
                    $49
                </twig:Table:Cell>
                <twig:Table:Cell class="text-end">
                    <twig:Popover>
                        <twig:Popover:Trigger>
                            <twig:Button variant="ghost" size="icon-sm" aria-label="Preview Mouse" {{ ...popover_trigger_attrs }}>
                                <twig:ux:icon name="lucide:eye" />
                            </twig:Button>
                        </twig:Popover:Trigger>
                        <twig:Popover:Content align="end" class="w-60 gap-2 p-3">
                            <div class="grid gap-1">
                                <div class="font-medium leading-none">
                                    Mouse
                                </div>
                                <p class="text-sm text-muted-foreground">
                                    Ships today
                                </p>
                            </div>
                            <div class="text-sm text-muted-foreground">
                                4 in stock
                            </div>
                        </twig:Popover:Content>
                    </twig:Popover>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Monitor
                </twig:Table:Cell>
                <twig:Table:Cell>
                    $329
                </twig:Table:Cell>
                <twig:Table:Cell class="text-end">
                    <twig:Popover>
                        <twig:Popover:Trigger>
                            <twig:Button variant="ghost" size="icon-sm" aria-label="Preview Monitor" {{ ...popover_trigger_attrs }}>
                                <twig:ux:icon name="lucide:eye" />
                            </twig:Button>
                        </twig:Popover:Trigger>
                        <twig:Popover:Content align="end" class="w-60 gap-2 p-3">
                            <div class="grid gap-1">
                                <div class="font-medium leading-none">
                                    Monitor
                                </div>
                                <p class="text-sm text-muted-foreground">
                                    Backordered
                                </p>
                            </div>
                            <div class="text-sm text-muted-foreground">
                                Back on Dec 12
                            </div>
                        </twig:Popover:Content>
                    </twig:Popover>
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</div>
```

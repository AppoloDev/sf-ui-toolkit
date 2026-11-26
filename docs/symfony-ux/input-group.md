# Input Group

## Examples

### Disabled

```twig
<twig:Field data-disabled="true" class="max-w-sm">
    <twig:InputGroup>
        <twig:InputGroup:Input placeholder="Disabled" disabled />
        <twig:InputGroup:Addon>
            <twig:ux:icon name="lucide:lock" />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</twig:Field>
```

### Invalid

```twig
<twig:Field data-invalid="true" class="max-w-sm">
    <twig:InputGroup>
        <twig:InputGroup:Input placeholder="name@example.com" aria-invalid="true" />
        <twig:InputGroup:Addon>
            <twig:ux:icon name="lucide:mail" />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
    <twig:Field:Error>
        Enter a valid email address.
    </twig:Field:Error>
</twig:Field>
```

### Prefix and Suffix Text

```twig
<div class="grid w-full max-w-sm gap-4">
    <twig:InputGroup>
        <twig:InputGroup:Addon>
            <twig:InputGroup:Text>
                https://
            </twig:InputGroup:Text>
        </twig:InputGroup:Addon>
        <twig:InputGroup:Input placeholder="example.com" />
    </twig:InputGroup>
    <twig:InputGroup>
        <twig:InputGroup:Input placeholder="username" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:InputGroup:Text>
                @company.com
            </twig:InputGroup:Text>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
    <twig:InputGroup>
        <twig:InputGroup:Addon>
            <twig:InputGroup:Text>
                $
            </twig:InputGroup:Text>
        </twig:InputGroup:Addon>
        <twig:InputGroup:Input type="number" placeholder="0.00" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:InputGroup:Text>
                USD
            </twig:InputGroup:Text>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### Prefix and Suffix Icons

```twig
<div class="grid w-full max-w-sm gap-4">
    <twig:InputGroup>
        <twig:InputGroup:Addon>
            <twig:ux:icon name="lucide:mic" />
        </twig:InputGroup:Addon>
        <twig:InputGroup:Input placeholder="Listening..." />
        <twig:InputGroup:Addon align="inline-end">
            <twig:ux:icon name="lucide:radio" class="animate-pulse text-destructive" />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### Action Button

```twig
<div class="grid w-full max-w-sm gap-4">
    <twig:InputGroup>
        <twig:InputGroup:Input placeholder="Search..." />
        <twig:InputGroup:Addon align="inline-end">
            <twig:InputGroup:Button variant="secondary">
                Search
            </twig:InputGroup:Button>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
    <twig:InputGroup>
        <twig:InputGroup:Input value="https://example.com/share/abc" readonly />
        <twig:InputGroup:Addon align="inline-end">
            <twig:InputGroup:Button size="icon-xs" aria-label="Copy">
                <twig:ux:icon name="lucide:copy" />
            </twig:InputGroup:Button>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### Keyboard Shortcut

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input placeholder="Search documentation..." />
    <twig:InputGroup:Addon align="inline-end">
        <twig:KbdGroup>
            <twig:Kbd>
                ⌘
            </twig:Kbd>
            <twig:Kbd>
                K
            </twig:Kbd>
        </twig:KbdGroup>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Tooltip Action

```twig
<div style="min-height: 140px" class="pt-10">
    <twig:InputGroup class="max-w-sm">
        <twig:InputGroup:Input type="number" placeholder="Limit" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:Tooltip id="input-group-limit">
                <twig:Tooltip:Trigger>
                    <twig:InputGroup:Button variant="ghost" size="icon-xs" aria-label="Info" {{ ...tooltip_trigger_attrs }}>
                        <twig:ux:icon name="lucide:info" />
                    </twig:InputGroup:Button>
                </twig:Tooltip:Trigger>
                <twig:Tooltip:Content>
                    Maximum number of requests per minute.
                </twig:Tooltip:Content>
            </twig:Tooltip>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### Block-Start Header

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input placeholder="Jane Doe" />
    <twig:InputGroup:Addon align="block-start" class="border-b">
        <twig:InputGroup:Text>
            User Profile
        </twig:InputGroup:Text>
        <twig:ux:icon name="lucide:info" class="ms-auto" />
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Textarea Actions

A comment box with actions in the bottom row.

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Textarea placeholder="Write a comment..." />
    <twig:InputGroup:Addon align="block-end" class="justify-between">
        <twig:InputGroup:Button variant="ghost" size="sm">
            Cancel
        </twig:InputGroup:Button>
        <twig:InputGroup:Button size="sm">
            Post Comment
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Character Limit

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Textarea placeholder="Short description" maxlength="140" />
    <twig:InputGroup:Addon align="block-end">
        <twig:InputGroup:Text class="ms-auto">
            0 / 140
        </twig:InputGroup:Text>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### AI Chat Toolbar

```twig
<div style="min-height: 280px">
    <twig:InputGroup class="max-w-lg">
        <twig:InputGroup:Textarea placeholder="Ask, search or chat..." />
        <twig:InputGroup:Addon align="block-end">
            <twig:InputGroup:Button variant="outline" size="icon-xs" class="rounded-full" aria-label="Add">
                <twig:ux:icon name="lucide:plus" />
            </twig:InputGroup:Button>
            <twig:InputGroup:Button variant="ghost" size="icon-xs" aria-label="Voice">
                <twig:ux:icon name="lucide:mic" />
            </twig:InputGroup:Button>
            <twig:InputGroup:Button variant="ghost" size="icon-xs" aria-label="Web search">
                <twig:ux:icon name="lucide:globe" />
            </twig:InputGroup:Button>
            <twig:InputGroup:Button variant="default" size="icon-xs" class="ms-auto rounded-full" aria-label="Send">
                <twig:ux:icon name="lucide:arrow-up" />
            </twig:InputGroup:Button>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### Success Indicator

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input value="acme-team" />
    <twig:InputGroup:Addon align="inline-end">
        <span class="flex size-4 items-center justify-center rounded-full bg-green-500 text-white">
            <twig:ux:icon name="lucide:check" class="size-3" />
        </span>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Results Count

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon>
        <twig:ux:icon name="lucide:search" />
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input placeholder="Search logs..." />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Text>
            12 results
        </twig:InputGroup:Text>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Multiple End Actions

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input value="Quarterly report" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Button variant="ghost" size="icon-xs" aria-label="Favorite">
            <twig:ux:icon name="lucide:star" />
        </twig:InputGroup:Button>
        <twig:InputGroup:Button variant="ghost" size="icon-xs" aria-label="Copy">
            <twig:ux:icon name="lucide:copy" />
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Password Toggle

The `PasswordToggle` component of this kit is the button. It finds the input of its group by itself.

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon>
        <twig:ux:icon name="lucide:lock" />
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input type="password" value="secret-password" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:PasswordToggle />
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Share Link

An editable link with an access menu and a copy button.

```twig
<div style="min-height: 240px">
    <twig:InputGroup class="max-w-md">
        <twig:InputGroup:Input id="share-link" value="https://example.com/s/abc123" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:DropdownMenu id="input-group-access" align="end">
                <twig:DropdownMenu:Trigger>
                    <twig:InputGroup:Button variant="ghost" class="text-xs" {{ ...dropdown_menu_trigger_attrs }}>
                        Team
                        <twig:ux:icon name="lucide:chevron-down" class="size-3" />
                    </twig:InputGroup:Button>
                </twig:DropdownMenu:Trigger>
                <twig:DropdownMenu:Content>
                    <twig:DropdownMenu:RadioGroup value="team">
                        <twig:DropdownMenu:RadioItem value="private">
                            Private
                        </twig:DropdownMenu:RadioItem>
                        <twig:DropdownMenu:RadioItem value="team" checked>
                            Team
                        </twig:DropdownMenu:RadioItem>
                        <twig:DropdownMenu:RadioItem value="public">
                            Public
                        </twig:DropdownMenu:RadioItem>
                    </twig:DropdownMenu:RadioGroup>
                </twig:DropdownMenu:Content>
            </twig:DropdownMenu>
            <twig:ButtonFeedback from="#share-link" variant="ghost" size="icon-xs" aria-label="Copy the link" doneAnnouncement="Link copied">
                <twig:ux:icon name="lucide:copy" />
            </twig:ButtonFeedback>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### Button Group Cells

A domain field between `https://` and `.com` cells.

```twig
<twig:ButtonGroup class="max-w-sm">
    <twig:ButtonGroup:Text>
        https://
    </twig:ButtonGroup:Text>
    <twig:Input placeholder="example" />
    <twig:ButtonGroup:Text>
        .com
    </twig:ButtonGroup:Text>
</twig:ButtonGroup>
```

### Prefix Icon

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon>
        <twig:ux:icon name="lucide:search" />
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input placeholder="Search..." />
</twig:InputGroup>
```

### Icon Button

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input placeholder="Add a comment" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Button size="icon-xs" aria-label="Send">
            <twig:ux:icon name="lucide:send" />
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Inline Addons

```twig
<div class="grid w-full max-w-sm gap-4">
    <twig:InputGroup>
        <twig:InputGroup:Addon>
            <twig:InputGroup:Text>
                https://
            </twig:InputGroup:Text>
        </twig:InputGroup:Addon>
        <twig:InputGroup:Input placeholder="example" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:InputGroup:Text>
                .com
            </twig:InputGroup:Text>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
    <twig:InputGroup>
        <twig:InputGroup:Addon>
            <twig:InputGroup:Text>
                $
            </twig:InputGroup:Text>
        </twig:InputGroup:Addon>
        <twig:InputGroup:Input placeholder="0.00" inputmode="decimal" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:InputGroup:Text>
                USD
            </twig:InputGroup:Text>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### Order Search

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon>
        <twig:ux:icon name="lucide:package" />
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input placeholder="Order number" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Button variant="secondary">
            Find order
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Pill Category

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon>
        <twig:Badge variant="secondary">
            Tag
        </twig:Badge>
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input placeholder="Type a value" />
</twig:InputGroup>
```

### API Request

```twig
<twig:InputGroup class="max-w-lg">
    <twig:InputGroup:Addon>
        <twig:Badge>
            GET
        </twig:Badge>
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input value="https://api.example.com/v1/users" class="font-mono text-xs" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Button variant="default" size="xs">
            Send
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Member Row

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon>
        <twig:Avatar size="sm">
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input value="shadcn@example.com" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:Badge variant="secondary">
            Admin
        </twig:Badge>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Three Dot Menu

```twig
<div style="min-height: 240px" class="max-w-sm">
    <twig:InputGroup>
        <twig:InputGroup:Input value="Quarterly report" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:DropdownMenu id="ig-dots" align="end">
                <twig:DropdownMenu:Trigger>
                    <twig:InputGroup:Button variant="ghost" size="icon-xs" aria-label="More" {{ ...dropdown_menu_trigger_attrs }}>
                        <twig:ux:icon name="lucide:ellipsis" />
                    </twig:InputGroup:Button>
                </twig:DropdownMenu:Trigger>
                <twig:DropdownMenu:Content>
                    <twig:DropdownMenu:Item>
                        Rename
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        Duplicate
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item variant="destructive">
                        Delete
                    </twig:DropdownMenu:Item>
                </twig:DropdownMenu:Content>
            </twig:DropdownMenu>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### AI Prompt

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Textarea placeholder="Ask, search or chat..." />
    <twig:InputGroup:Addon align="block-end">
        <twig:InputGroup:Button size="icon-xs" variant="outline" class="rounded-full">
            <twig:ux:icon name="lucide:plus" />
        </twig:InputGroup:Button>
        <twig:InputGroup:Button variant="ghost" size="xs">
            Auto
        </twig:InputGroup:Button>
        <twig:InputGroup:Button size="icon-xs" class="ms-auto rounded-full" aria-label="Send">
            <twig:ux:icon name="lucide:arrow-up" />
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Simple AI Prompt

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input placeholder="Ask anything" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Button size="icon-xs" class="rounded-full" aria-label="Send">
            <twig:ux:icon name="lucide:arrow-up" />
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### AI With Attachments

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Textarea placeholder="Describe the task" />
    <twig:InputGroup:Addon align="block-end">
        <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="Attach">
            <twig:ux:icon name="lucide:paperclip" />
        </twig:InputGroup:Button>
        <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="Add image">
            <twig:ux:icon name="lucide:image" />
        </twig:InputGroup:Button>
        <twig:InputGroup:Button size="icon-xs" class="ms-auto rounded-full" aria-label="Send">
            <twig:ux:icon name="lucide:arrow-up" />
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### AI With Voice

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input placeholder="Type or speak" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="Voice input">
            <twig:ux:icon name="lucide:mic" />
        </twig:InputGroup:Button>
        <twig:InputGroup:Button size="icon-xs" aria-label="Send" class="rounded-full">
            <twig:ux:icon name="lucide:arrow-up" />
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Copy Button

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input value="npm install @acme/ui" readonly aria-label="Command" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="Copy">
            <twig:ux:icon name="lucide:copy" />
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Multiple Action Buttons

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input value="https://example.com" aria-label="URL" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="Copy">
            <twig:ux:icon name="lucide:copy" />
        </twig:InputGroup:Button>
        <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="Open">
            <twig:ux:icon name="lucide:external-link" />
        </twig:InputGroup:Button>
        <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="QR code">
            <twig:ux:icon name="lucide:qr-code" />
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Search Button

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input placeholder="Search" aria-label="Search" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Button size="xs">
            Search
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Textarea With Counter

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Textarea placeholder="Write a bio" maxlength="140" />
    <twig:InputGroup:Addon align="block-end">
        <twig:InputGroup:Text class="ms-auto tabular-nums">
            0 / 140
        </twig:InputGroup:Text>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Textarea With Toolbar

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Textarea placeholder="Write a note" />
    <twig:InputGroup:Addon align="block-end">
        <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="Bold">
            <twig:ux:icon name="lucide:bold" />
        </twig:InputGroup:Button>
        <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="Italic">
            <twig:ux:icon name="lucide:italic" />
        </twig:InputGroup:Button>
        <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="Link">
            <twig:ux:icon name="lucide:link" />
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Textarea With Label

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon align="block-start">
        <twig:Label for="ig-lab-ta">
            Notes
        </twig:Label>
    </twig:InputGroup:Addon>
    <twig:InputGroup:Textarea id="ig-lab-ta" placeholder="Add a note" />
</twig:InputGroup>
```

### Dropdown Actions

```twig
<div style="min-height: 220px">
    <twig:InputGroup class="max-w-sm">
        <twig:InputGroup:Input placeholder="Enter a value" aria-label="Value" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:DropdownMenu id="ig-dd1">
                <twig:DropdownMenu:Trigger>
                    <twig:InputGroup:Button variant="ghost" size="xs" {{ ...dropdown_menu_trigger_attrs }}>
                        Options
                        <twig:ux:icon name="lucide:chevron-down" />
                    </twig:InputGroup:Button>
                </twig:DropdownMenu:Trigger>
                <twig:DropdownMenu:Content>
                    <twig:DropdownMenu:Item>
                        Copy
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        Paste
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        Clear
                    </twig:DropdownMenu:Item>
                </twig:DropdownMenu:Content>
            </twig:DropdownMenu>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### Search Filters

```twig
<div style="min-height: 220px">
    <twig:InputGroup class="max-w-sm">
        <twig:InputGroup:Addon>
            <twig:DropdownMenu id="ig-dd2">
                <twig:DropdownMenu:Trigger>
                    <twig:InputGroup:Button variant="ghost" size="xs" {{ ...dropdown_menu_trigger_attrs }}>
                        All
                        <twig:ux:icon name="lucide:chevron-down" />
                    </twig:InputGroup:Button>
                </twig:DropdownMenu:Trigger>
                <twig:DropdownMenu:Content>
                    <twig:DropdownMenu:Item>
                        Projects
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        People
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        Files
                    </twig:DropdownMenu:Item>
                </twig:DropdownMenu:Content>
            </twig:DropdownMenu>
        </twig:InputGroup:Addon>
        <twig:InputGroup:Input placeholder="Search" aria-label="Search" />
    </twig:InputGroup>
</div>
```

### URL Builder With Dropdown

```twig
<div style="min-height: 220px">
    <twig:InputGroup class="max-w-sm">
        <twig:InputGroup:Addon>
            <twig:DropdownMenu id="ig-dd3">
                <twig:DropdownMenu:Trigger>
                    <twig:InputGroup:Button variant="ghost" size="xs" {{ ...dropdown_menu_trigger_attrs }}>
                        https://
                        <twig:ux:icon name="lucide:chevron-down" />
                    </twig:InputGroup:Button>
                </twig:DropdownMenu:Trigger>
                <twig:DropdownMenu:Content>
                    <twig:DropdownMenu:Item>
                        http://
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        ftp://
                    </twig:DropdownMenu:Item>
                </twig:DropdownMenu:Content>
            </twig:DropdownMenu>
        </twig:InputGroup:Addon>
        <twig:InputGroup:Input placeholder="example.com" aria-label="Domain" />
    </twig:InputGroup>
</div>
```

### Contact Fields With Icons

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input type="email" placeholder="Email" aria-label="Email" />
    <twig:InputGroup:Addon>
        <twig:ux:icon name="lucide:mail" />
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Dual Icons

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon>
        <twig:ux:icon name="lucide:search" />
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input placeholder="Search" aria-label="Search" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:ux:icon name="lucide:command" />
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Multiple Icons

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon>
        <twig:ux:icon name="lucide:map-pin" />
        <twig:ux:icon name="lucide:navigation" />
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input placeholder="Address" aria-label="Address" />
</twig:InputGroup>
```

### Inline Label

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon>
        <twig:Label for="ig-il">
            Email
        </twig:Label>
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input id="ig-il" type="email" placeholder="you@example.com" />
</twig:InputGroup>
```

### Block Label

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon align="block-start">
        <twig:Label for="ig-bl">
            Email
        </twig:Label>
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input id="ig-bl" type="email" placeholder="you@example.com" />
</twig:InputGroup>
```

### Label With Counter

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon align="block-start">
        <twig:Label for="ig-lc">
            Title
        </twig:Label>
        <twig:InputGroup:Text class="ms-auto tabular-nums">
            0 / 60
        </twig:InputGroup:Text>
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input id="ig-lc" maxlength="60" />
</twig:InputGroup>
```

### Loading State

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input placeholder="Saving..." disabled />
    <twig:InputGroup:Addon align="inline-end">
        <twig:Spinner />
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Spinner With Text

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input placeholder="Searching" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:Spinner />
        <twig:InputGroup:Text>
            Searching...
        </twig:InputGroup:Text>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Textarea Loading

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Textarea placeholder="Generating..." disabled />
    <twig:InputGroup:Addon align="block-end">
        <twig:Spinner />
        <twig:InputGroup:Text>
            Generating
        </twig:InputGroup:Text>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Currency Input

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon>
        <twig:InputGroup:Text>
            $
        </twig:InputGroup:Text>
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input type="number" placeholder="0.00" aria-label="Amount" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Text>
            USD
        </twig:InputGroup:Text>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Email With Domain

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input placeholder="name" aria-label="Name" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Text>
            @example.com
        </twig:InputGroup:Text>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Code Editor

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon align="block-start">
        <twig:InputGroup:Text>
            script.js
        </twig:InputGroup:Text>
    </twig:InputGroup:Addon>
    <twig:InputGroup:Textarea class="font-mono text-sm" placeholder="console.log('hello')" rows="4" />
</twig:InputGroup>
```

### Chat Input

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Textarea placeholder="Message the team" rows="1" />
    <twig:InputGroup:Addon align="block-end">
        <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="Emoji">
            <twig:ux:icon name="lucide:smile" />
        </twig:InputGroup:Button>
        <twig:InputGroup:Button size="xs" class="ms-auto">
            Send
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Password Requirements

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:InputGroup class="max-w-sm">
        <twig:InputGroup:Input type="password" placeholder="Password" aria-label="Password" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:Tooltip id="ig-tt1">
                <twig:Tooltip:Trigger>
                    <twig:InputGroup:Button variant="ghost" size="icon-xs" aria-label="Info" {{ ...tooltip_trigger_attrs }}>
                        <twig:ux:icon name="lucide:info" />
                    </twig:InputGroup:Button>
                </twig:Tooltip:Trigger>
                <twig:Tooltip:Content>
                    At least 12 characters
                </twig:Tooltip:Content>
            </twig:Tooltip>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### Help Tooltip

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:InputGroup class="max-w-sm">
        <twig:InputGroup:Input placeholder="Workspace slug" aria-label="Slug" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:Tooltip id="ig-tt2">
                <twig:Tooltip:Trigger>
                    <twig:InputGroup:Button variant="ghost" size="icon-xs" aria-label="Info" {{ ...tooltip_trigger_attrs }}>
                        <twig:ux:icon name="lucide:circle-help" />
                    </twig:InputGroup:Button>
                </twig:Tooltip:Trigger>
                <twig:Tooltip:Content>
                    Used in your workspace URL
                </twig:Tooltip:Content>
            </twig:Tooltip>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### API Key Info

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:InputGroup class="max-w-sm">
        <twig:InputGroup:Input value="sk_live_51Hx..." readonly aria-label="API key" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:Tooltip id="ig-tt3">
                <twig:Tooltip:Trigger>
                    <twig:InputGroup:Button variant="ghost" size="icon-xs" aria-label="Info" {{ ...tooltip_trigger_attrs }}>
                        <twig:ux:icon name="lucide:info" />
                    </twig:InputGroup:Button>
                </twig:Tooltip:Trigger>
                <twig:Tooltip:Content>
                    Keep this key secret
                </twig:Tooltip:Content>
            </twig:Tooltip>
            <twig:InputGroup:Button size="icon-xs" variant="ghost" aria-label="Copy">
                <twig:ux:icon name="lucide:copy" />
            </twig:InputGroup:Button>
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

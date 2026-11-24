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

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Addon>
        <twig:ux:icon name="lucide:lock" />
    </twig:InputGroup:Addon>
    <twig:InputGroup:Input type="password" value="secret-password" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:InputGroup:Button variant="ghost" size="icon-xs" aria-label="Show password">
            <twig:ux:icon name="lucide:eye" />
        </twig:InputGroup:Button>
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Share Link

An editable link with an access menu and a copy button.

```twig
<div style="min-height: 240px">
    <twig:InputGroup class="max-w-md">
        <twig:InputGroup:Input value="https://example.com/s/abc123" />
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
            <twig:InputGroup:Button variant="ghost" size="icon-xs" aria-label="Copy">
                <twig:ux:icon name="lucide:copy" />
            </twig:InputGroup:Button>
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

# Item

## Examples

### Dropdown

Use `Item` inside a `DropdownMenu:Item` to build a rich account picker.

```twig
<div class="flex justify-center pt-6" style="min-height: 280px">
    <twig:DropdownMenu id="item-dropdown" align="end">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Select
                <twig:ux:icon name="lucide:chevron-down" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Group>
                <twig:DropdownMenu:Item>
                    <twig:Item size="xs" class="w-full p-2">
                        <twig:Item:Media>
                            <twig:Avatar class="size-6">
                                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="grayscale" />
                                <twig:Avatar:Fallback>
                                    S
                                </twig:Avatar:Fallback>
                            </twig:Avatar>
                        </twig:Item:Media>
                        <twig:Item:Content class="gap-0">
                            <twig:Item:Title>
                                shadcn
                            </twig:Item:Title>
                            <twig:Item:Description class="leading-none">
                                shadcn@vercel.com
                            </twig:Item:Description>
                        </twig:Item:Content>
                    </twig:Item>
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    <twig:Item size="xs" class="w-full p-2">
                        <twig:Item:Media>
                            <twig:Avatar class="size-6">
                                <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" class="grayscale" />
                                <twig:Avatar:Fallback>
                                    M
                                </twig:Avatar:Fallback>
                            </twig:Avatar>
                        </twig:Item:Media>
                        <twig:Item:Content class="gap-0">
                            <twig:Item:Title>
                                maxleiter
                            </twig:Item:Title>
                            <twig:Item:Description class="leading-none">
                                maxleiter@vercel.com
                            </twig:Item:Description>
                        </twig:Item:Content>
                    </twig:Item>
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    <twig:Item size="xs" class="w-full p-2">
                        <twig:Item:Media>
                            <twig:Avatar class="size-6">
                                <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" class="grayscale" />
                                <twig:Avatar:Fallback>
                                    E
                                </twig:Avatar:Fallback>
                            </twig:Avatar>
                        </twig:Item:Media>
                        <twig:Item:Content class="gap-0">
                            <twig:Item:Title>
                                evilrabbit
                            </twig:Item:Title>
                            <twig:Item:Description class="leading-none">
                                evilrabbit@vercel.com
                            </twig:Item:Description>
                        </twig:Item:Content>
                    </twig:Item>
                </twig:DropdownMenu:Item>
            </twig:DropdownMenu:Group>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Variants

```twig
<div class="flex w-full max-w-md flex-col gap-3">
    <twig:Item variant="default">
        <twig:Item:Content>
            <twig:Item:Title class="capitalize">
                default
            </twig:Item:Title>
            <twig:Item:Description>
                A row with the default variant.
            </twig:Item:Description>
        </twig:Item:Content>
    </twig:Item>
    <twig:Item variant="outline">
        <twig:Item:Content>
            <twig:Item:Title class="capitalize">
                outline
            </twig:Item:Title>
            <twig:Item:Description>
                A row with the outline variant.
            </twig:Item:Description>
        </twig:Item:Content>
    </twig:Item>
    <twig:Item variant="muted">
        <twig:Item:Content>
            <twig:Item:Title class="capitalize">
                muted
            </twig:Item:Title>
            <twig:Item:Description>
                A row with the muted variant.
            </twig:Item:Description>
        </twig:Item:Content>
    </twig:Item>
</div>
```

### Icon and Actions

```twig
<div class="flex w-full max-w-md flex-col gap-3">
    <twig:Item variant="outline">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:mail" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Email
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:Item:Actions>
            <twig:Button variant="outline" size="sm">
                Configure
            </twig:Button>
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item variant="outline">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:smartphone" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                SMS
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:Item:Actions>
            <twig:Button variant="outline" size="sm">
                Configure
            </twig:Button>
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item variant="outline">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:bell" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Push
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:Item:Actions>
            <twig:Button variant="outline" size="sm">
                Configure
            </twig:Button>
        </twig:Item:Actions>
    </twig:Item>
</div>
```

### Navigation Links

```twig
<div class="flex w-full max-w-sm flex-col">
    <twig:Item as="a" href="#" size="sm">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:user" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Profile
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:ux:icon name="lucide:chevron-right" class="size-4 text-muted-foreground" />
    </twig:Item>
    <twig:Item as="a" href="#" size="sm">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:shield" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Security
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:ux:icon name="lucide:chevron-right" class="size-4 text-muted-foreground" />
    </twig:Item>
    <twig:Item as="a" href="#" size="sm">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:credit-card" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Billing
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:ux:icon name="lucide:chevron-right" class="size-4 text-muted-foreground" />
    </twig:Item>
</div>
```

### Status Badges

```twig
<twig:Item:Group class="w-full max-w-md gap-2">
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media>
            <twig:Avatar>
                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                <twig:Avatar:Fallback>
                    S
                </twig:Avatar:Fallback>
            </twig:Avatar>
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                shadcn
            </twig:Item:Title>
            <twig:Item:Description>
                Admin
            </twig:Item:Description>
        </twig:Item:Content>
        <twig:Badge variant="default">
            Online
        </twig:Badge>
    </twig:Item>
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media>
            <twig:Avatar>
                <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
                <twig:Avatar:Fallback>
                    M
                </twig:Avatar:Fallback>
            </twig:Avatar>
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                maxleiter
            </twig:Item:Title>
            <twig:Item:Description>
                Editor
            </twig:Item:Description>
        </twig:Item:Content>
        <twig:Badge variant="secondary">
            Away
        </twig:Badge>
    </twig:Item>
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media>
            <twig:Avatar>
                <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
                <twig:Avatar:Fallback>
                    E
                </twig:Avatar:Fallback>
            </twig:Avatar>
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                evilrabbit
            </twig:Item:Title>
            <twig:Item:Description>
                Viewer
            </twig:Item:Description>
        </twig:Item:Content>
        <twig:Badge variant="outline">
            Offline
        </twig:Badge>
    </twig:Item>
</twig:Item:Group>
```

### File Rows

```twig
<div class="flex w-full max-w-lg flex-col gap-2">
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:file-text" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                proposal.pdf
            </twig:Item:Title>
            <twig:Item:Description>
                2.4 MB · Updated 2h ago
            </twig:Item:Description>
        </twig:Item:Content>
        <twig:Badge variant="default">
            Final
        </twig:Badge>
        <twig:Item:Actions>
            <twig:Button variant="outline" size="sm">
                Open
            </twig:Button>
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:file-text" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                budget.xlsx
            </twig:Item:Title>
            <twig:Item:Description>
                580 KB · Updated yesterday
            </twig:Item:Description>
        </twig:Item:Content>
        <twig:Badge variant="secondary">
            Draft
        </twig:Badge>
        <twig:Item:Actions>
            <twig:Button variant="outline" size="sm">
                Open
            </twig:Button>
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:file-text" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                brief.docx
            </twig:Item:Title>
            <twig:Item:Description>
                120 KB · Updated 3d ago
            </twig:Item:Description>
        </twig:Item:Content>
        <twig:Badge variant="outline">
            Review
        </twig:Badge>
        <twig:Item:Actions>
            <twig:Button variant="outline" size="sm">
                Open
            </twig:Button>
        </twig:Item:Actions>
    </twig:Item>
</div>
```

### Keyboard Shortcuts

```twig
<div class="flex w-64 flex-col">
    <twig:Item as="a" href="#" size="xs">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:search" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Search
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:Kbd>
            ⌘K
        </twig:Kbd>
    </twig:Item>
    <twig:Item as="a" href="#" size="xs">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:save" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Save
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:Kbd>
            ⌘S
        </twig:Kbd>
    </twig:Item>
    <twig:Item as="a" href="#" size="xs">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:printer" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Print
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:Kbd>
            ⌘P
        </twig:Kbd>
    </twig:Item>
</div>
```

### Small Count Badges

```twig
<div class="flex w-56 flex-col">
    <twig:Item as="a" href="#" size="xs">
        <twig:Item:Content>
            <twig:Item:Title>
                Inbox
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:Badge variant="secondary" class="rounded-full">
            12
        </twig:Badge>
    </twig:Item>
    <twig:Item as="a" href="#" size="xs">
        <twig:Item:Content>
            <twig:Item:Title>
                Drafts
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:Badge variant="secondary" class="rounded-full">
            3
        </twig:Badge>
    </twig:Item>
    <twig:Item as="a" href="#" size="xs">
        <twig:Item:Content>
            <twig:Item:Title>
                Sent
            </twig:Item:Title>
        </twig:Item:Content>
    </twig:Item>
    <twig:Item as="a" href="#" size="xs">
        <twig:Item:Content>
            <twig:Item:Title>
                Trash
            </twig:Item:Title>
        </twig:Item:Content>
    </twig:Item>
</div>
```

### Team Roles

```twig
<div style="min-height: 300px" class="w-full max-w-md">
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media>
            <twig:Avatar>
                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                <twig:Avatar:Fallback>
                    CN
                </twig:Avatar:Fallback>
            </twig:Avatar>
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                shadcn
            </twig:Item:Title>
            <twig:Item:Description>
                shadcn@example.com
            </twig:Item:Description>
        </twig:Item:Content>
        <twig:Badge variant="secondary">
            Admin
        </twig:Badge>
        <twig:DropdownMenu id="item-roles" align="end">
            <twig:DropdownMenu:Trigger>
                <twig:Button variant="ghost" size="icon-sm" aria-label="Open menu" {{ ...dropdown_menu_trigger_attrs }}>
                    <twig:ux:icon name="lucide:ellipsis" />
                </twig:Button>
            </twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content>
                <twig:DropdownMenu:Item>
                    Change role
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    View profile
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Separator />
                <twig:DropdownMenu:Item variant="destructive">
                    Remove
                </twig:DropdownMenu:Item>
            </twig:DropdownMenu:Content>
        </twig:DropdownMenu>
    </twig:Item>
</div>
```

### Integrations

```twig
<div class="flex w-full max-w-md flex-col gap-2">
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:plug" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                GitHub
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:Badge variant="secondary">
            Connected
        </twig:Badge>
    </twig:Item>
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:plug" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Slack
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:Badge variant="secondary">
            Connected
        </twig:Badge>
    </twig:Item>
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media variant="icon">
            <twig:ux:icon name="lucide:plug" />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Notion
            </twig:Item:Title>
        </twig:Item:Content>
        <twig:Button variant="outline" size="sm">
            Connect
        </twig:Button>
    </twig:Item>
</div>
```

### Activity Feed

```twig
<div class="flex w-full max-w-lg flex-col gap-2">
    <twig:Item size="xs">
        <twig:Item:Media>
            <twig:Avatar size="sm">
                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                <twig:Avatar:Fallback>
                    S
                </twig:Avatar:Fallback>
            </twig:Avatar>
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title class="font-normal">
                <span class="font-medium">
                    shadcn
                </span>
                <twig:Badge variant="secondary">
                    deployed
                </twig:Badge>
                web-app
            </twig:Item:Title>
        </twig:Item:Content>
        <span class="text-xs text-muted-foreground">
            2m ago
        </span>
    </twig:Item>
    <twig:Item size="xs">
        <twig:Item:Media>
            <twig:Avatar size="sm">
                <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
                <twig:Avatar:Fallback>
                    M
                </twig:Avatar:Fallback>
            </twig:Avatar>
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title class="font-normal">
                <span class="font-medium">
                    maxleiter
                </span>
                <twig:Badge variant="secondary">
                    merged
                </twig:Badge>
                feature/auth
            </twig:Item:Title>
        </twig:Item:Content>
        <span class="text-xs text-muted-foreground">
            1h ago
        </span>
    </twig:Item>
    <twig:Item size="xs">
        <twig:Item:Media>
            <twig:Avatar size="sm">
                <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
                <twig:Avatar:Fallback>
                    E
                </twig:Avatar:Fallback>
            </twig:Avatar>
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title class="font-normal">
                <span class="font-medium">
                    evilrabbit
                </span>
                <twig:Badge variant="secondary">
                    opened
                </twig:Badge>
                issue #42
            </twig:Item:Title>
        </twig:Item:Content>
        <span class="text-xs text-muted-foreground">
            3h ago
        </span>
    </twig:Item>
</div>
```

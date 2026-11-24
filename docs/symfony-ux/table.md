# Table

## Examples

### Actions

A table with a `DropdownMenu` of actions on each row.

```twig
<div style="min-height: 300px">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Product
                </twig:Table:Head>
                <twig:Table:Head>
                    Price
                </twig:Table:Head>
                <twig:Table:Head class="text-right">
                    Actions
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Wireless Mouse
                </twig:Table:Cell>
                <twig:Table:Cell>
                    $29.99
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:DropdownMenu id="table-actions-mouse" align="end">
                        <twig:DropdownMenu:Trigger>
                            <twig:Button variant="ghost" size="icon" class="size-8" {{ ...dropdown_menu_trigger_attrs }}>
                                <twig:ux:icon name="lucide:more-horizontal" />
                                <span class="sr-only">
                                    Open menu
                                </span>
                            </twig:Button>
                        </twig:DropdownMenu:Trigger>
                        <twig:DropdownMenu:Content>
                            <twig:DropdownMenu:Item>
                                Edit
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Item>
                                Duplicate
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Separator />
                            <twig:DropdownMenu:Item variant="destructive">
                                Delete
                            </twig:DropdownMenu:Item>
                        </twig:DropdownMenu:Content>
                    </twig:DropdownMenu>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Mechanical Keyboard
                </twig:Table:Cell>
                <twig:Table:Cell>
                    $129.99
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:DropdownMenu id="table-actions-keyboard" align="end">
                        <twig:DropdownMenu:Trigger>
                            <twig:Button variant="ghost" size="icon" class="size-8" {{ ...dropdown_menu_trigger_attrs }}>
                                <twig:ux:icon name="lucide:more-horizontal" />
                                <span class="sr-only">
                                    Open menu
                                </span>
                            </twig:Button>
                        </twig:DropdownMenu:Trigger>
                        <twig:DropdownMenu:Content>
                            <twig:DropdownMenu:Item>
                                Edit
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Item>
                                Duplicate
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Separator />
                            <twig:DropdownMenu:Item variant="destructive">
                                Delete
                            </twig:DropdownMenu:Item>
                        </twig:DropdownMenu:Content>
                    </twig:DropdownMenu>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    USB-C Hub
                </twig:Table:Cell>
                <twig:Table:Cell>
                    $49.99
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:DropdownMenu id="table-actions-hub" align="end">
                        <twig:DropdownMenu:Trigger>
                            <twig:Button variant="ghost" size="icon" class="size-8" {{ ...dropdown_menu_trigger_attrs }}>
                                <twig:ux:icon name="lucide:more-horizontal" />
                                <span class="sr-only">
                                    Open menu
                                </span>
                            </twig:Button>
                        </twig:DropdownMenu:Trigger>
                        <twig:DropdownMenu:Content>
                            <twig:DropdownMenu:Item>
                                Edit
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Item>
                                Duplicate
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Separator />
                            <twig:DropdownMenu:Item variant="destructive">
                                Delete
                            </twig:DropdownMenu:Item>
                        </twig:DropdownMenu:Content>
                    </twig:DropdownMenu>
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</div>
```

### Basic

```twig
<twig:Table>
    <twig:Table:Caption>
        A list of your recent invoices.
    </twig:Table:Caption>
    <twig:Table:Header>
        <twig:Table:Row>
            <twig:Table:Head>
                Invoice
            </twig:Table:Head>
            <twig:Table:Head>
                Status
            </twig:Table:Head>
            <twig:Table:Head>
                Method
            </twig:Table:Head>
            <twig:Table:Head class="text-right">
                Amount
            </twig:Table:Head>
        </twig:Table:Row>
    </twig:Table:Header>
    <twig:Table:Body>
        <twig:Table:Row>
            <twig:Table:Cell class="font-medium">
                INV001
            </twig:Table:Cell>
            <twig:Table:Cell>
                Paid
            </twig:Table:Cell>
            <twig:Table:Cell>
                Credit Card
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                $250.00
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:Row>
            <twig:Table:Cell class="font-medium">
                INV002
            </twig:Table:Cell>
            <twig:Table:Cell>
                Pending
            </twig:Table:Cell>
            <twig:Table:Cell>
                PayPal
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                $150.00
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:Row>
            <twig:Table:Cell class="font-medium">
                INV003
            </twig:Table:Cell>
            <twig:Table:Cell>
                Unpaid
            </twig:Table:Cell>
            <twig:Table:Cell>
                Bank Transfer
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                $350.00
            </twig:Table:Cell>
        </twig:Table:Row>
    </twig:Table:Body>
</twig:Table>
```

### Status Badges

```twig
<twig:Card class="max-w-md py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Task
                </twig:Table:Head>
                <twig:Table:Head class="text-right">
                    Status
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Design review
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Badge variant="default">
                        Done
                    </twig:Badge>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    API integration
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Badge variant="secondary">
                        In progress
                    </twig:Badge>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Write docs
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Badge variant="destructive">
                        Blocked
                    </twig:Badge>
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Interactive Rows

```twig
<twig:Card class="max-w-md py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Item
                </twig:Table:Head>
                <twig:Table:Head class="w-24">
                    Quantity
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Wireless Mouse
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Input type="number" min="0" value="1" class="h-8 w-20" aria-label="Quantity of Wireless Mouse" />
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    USB-C Hub
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Input type="number" min="0" value="2" class="h-8 w-20" aria-label="Quantity of USB-C Hub" />
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Team Members

```twig
<twig:Card class="max-w-2xl py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Member
                </twig:Table:Head>
                <twig:Table:Head>
                    Role
                </twig:Table:Head>
                <twig:Table:Head class="text-right">
                    Status
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <div class="flex items-center gap-3">
                        <twig:Avatar>
                            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                            <twig:Avatar:Fallback>
                                S
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        <div class="flex flex-col">
                            <span class="font-medium">
                                shadcn
                            </span>
                            <span class="text-xs text-muted-foreground">
                                shadcn@example.com
                            </span>
                        </div>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="secondary">
                        Admin
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Badge variant="outline">
                        Online
                    </twig:Badge>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <div class="flex items-center gap-3">
                        <twig:Avatar>
                            <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
                            <twig:Avatar:Fallback>
                                M
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        <div class="flex flex-col">
                            <span class="font-medium">
                                maxleiter
                            </span>
                            <span class="text-xs text-muted-foreground">
                                maxleiter@example.com
                            </span>
                        </div>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="secondary">
                        Editor
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Badge variant="outline">
                        Away
                    </twig:Badge>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <div class="flex items-center gap-3">
                        <twig:Avatar>
                            <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
                            <twig:Avatar:Fallback>
                                E
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        <div class="flex flex-col">
                            <span class="font-medium">
                                evilrabbit
                            </span>
                            <span class="text-xs text-muted-foreground">
                                evilrabbit@example.com
                            </span>
                        </div>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="secondary">
                        Viewer
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Badge variant="outline">
                        Offline
                    </twig:Badge>
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Subscriptions

```twig
<twig:Card class="max-w-3xl py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Service
                </twig:Table:Head>
                <twig:Table:Head>
                    Plan
                </twig:Table:Head>
                <twig:Table:Head>
                    Price
                </twig:Table:Head>
                <twig:Table:Head>
                    Next billing
                </twig:Table:Head>
                <twig:Table:Head>
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Figma
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="secondary">
                        Pro
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    $15 / month
                </twig:Table:Cell>
                <twig:Table:Cell class="text-muted-foreground">
                    Dec 12
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Button variant="outline" size="sm">
                        Manage
                    </twig:Button>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Notion
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="secondary">
                        Team
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    $10 / month
                </twig:Table:Cell>
                <twig:Table:Cell class="text-muted-foreground">
                    Dec 20
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Button variant="outline" size="sm">
                        Manage
                    </twig:Button>
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Leaderboard

```twig
<twig:Card class="max-w-md py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head class="w-10">
                    #
                </twig:Table:Head>
                <twig:Table:Head>
                    Player
                </twig:Table:Head>
                <twig:Table:Head class="text-right">
                    Score
                </twig:Table:Head>
                <twig:Table:Head class="text-right">
                    Change
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium tabular-nums">
                    1
                </twig:Table:Cell>
                <twig:Table:Cell>
                    shadcn
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right tabular-nums">
                    12,480
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right text-green-600">
                    <twig:ux:icon name="lucide:arrow-up" class="inline size-3.5" />
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium tabular-nums">
                    2
                </twig:Table:Cell>
                <twig:Table:Cell>
                    maxleiter
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right tabular-nums">
                    11,920
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right text-red-600">
                    <twig:ux:icon name="lucide:arrow-down" class="inline size-3.5" />
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium tabular-nums">
                    3
                </twig:Table:Cell>
                <twig:Table:Cell>
                    evilrabbit
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right tabular-nums">
                    10,305
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right text-green-600">
                    <twig:ux:icon name="lucide:arrow-up" class="inline size-3.5" />
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Orders

```twig
<twig:Card class="max-w-3xl py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Order
                </twig:Table:Head>
                <twig:Table:Head>
                    Customer
                </twig:Table:Head>
                <twig:Table:Head class="text-right">
                    Total
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="font-mono text-xs">
                    #3210
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <div class="flex items-center gap-2">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                O
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        <div class="flex flex-col">
                            <span class="font-medium">
                                Olivia Martin
                            </span>
                            <span class="text-xs text-muted-foreground">
                                Nov 12
                            </span>
                        </div>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right tabular-nums">
                    $42.25
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-mono text-xs">
                    #3209
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <div class="flex items-center gap-2">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback>
                                A
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        <div class="flex flex-col">
                            <span class="font-medium">
                                Ava Johnson
                            </span>
                            <span class="text-xs text-muted-foreground">
                                Nov 11
                            </span>
                        </div>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right tabular-nums">
                    $74.99
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Projects

```twig
<twig:Card class="max-w-3xl py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Project
                </twig:Table:Head>
                <twig:Table:Head>
                    Team
                </twig:Table:Head>
                <twig:Table:Head class="text-right">
                    Due
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <div class="flex items-center gap-2">
                        <span class="flex size-8 items-center justify-center rounded-md bg-muted">
                            <twig:ux:icon name="lucide:folder" class="size-4" />
                        </span>
                        <span class="font-medium">
                            Website redesign
                        </span>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                            <twig:Avatar:Fallback>
                                S
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        <twig:Avatar size="sm">
                            <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
                            <twig:Avatar:Fallback>
                                M
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        <twig:Avatar size="sm">
                            <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
                            <twig:Avatar:Fallback>
                                E
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback class="text-[10px]">
                                +2
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right text-muted-foreground">
                    Dec 12
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <div class="flex items-center gap-2">
                        <span class="flex size-8 items-center justify-center rounded-md bg-muted">
                            <twig:ux:icon name="lucide:folder" class="size-4" />
                        </span>
                        <span class="font-medium">
                            Mobile app
                        </span>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                            <twig:Avatar:Fallback>
                                S
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        <twig:Avatar size="sm">
                            <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
                            <twig:Avatar:Fallback>
                                M
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        <twig:Avatar size="sm">
                            <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
                            <twig:Avatar:Fallback>
                                E
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        <twig:Avatar size="sm">
                            <twig:Avatar:Fallback class="text-[10px]">
                                +2
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right text-muted-foreground">
                    Jan 20
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Activity Log

```twig
<twig:Card class="max-w-3xl py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    User
                </twig:Table:Head>
                <twig:Table:Head>
                    Action
                </twig:Table:Head>
                <twig:Table:Head>
                    Target
                </twig:Table:Head>
                <twig:Table:Head class="text-right">
                    When
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    shadcn
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="secondary">
                        Merged
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="font-mono text-xs">
                    feature/auth
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right text-muted-foreground">
                    2m ago
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    maxleiter
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="secondary">
                        Deployed
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="font-mono text-xs">
                    main
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right text-muted-foreground">
                    1h ago
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    evilrabbit
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="destructive">
                        Deleted
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="font-mono text-xs">
                    old-branch
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right text-muted-foreground">
                    3h ago
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Inventory

```twig
<twig:Card class="max-w-3xl py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Product
                </twig:Table:Head>
                <twig:Table:Head>
                    Stock
                </twig:Table:Head>
                <twig:Table:Head class="text-right">
                    Units
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <div class="flex flex-col">
                        <span class="font-medium">
                            Wireless Mouse
                        </span>
                        <span class="font-mono text-xs text-muted-foreground">
                            MS-001
                        </span>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="secondary">
                        In stock
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right tabular-nums">
                    240
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <div class="flex flex-col">
                        <span class="font-medium">
                            USB-C Hub
                        </span>
                        <span class="font-mono text-xs text-muted-foreground">
                            HB-014
                        </span>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="outline">
                        Low
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right tabular-nums">
                    12
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <div class="flex flex-col">
                        <span class="font-medium">
                            Keyboard
                        </span>
                        <span class="font-mono text-xs text-muted-foreground">
                            KB-220
                        </span>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="destructive">
                        Out
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right tabular-nums">
                    0
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### API Keys

```twig
<twig:Card class="max-w-3xl py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Name
                </twig:Table:Head>
                <twig:Table:Head>
                    Key
                </twig:Table:Head>
                <twig:Table:Head>
                    Permissions
                </twig:Table:Head>
                <twig:Table:Head>
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Production
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                        sk_live_••••4f2a
                    </code>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <div class="flex gap-1">
                        <twig:Badge variant="secondary">
                            read
                        </twig:Badge>
                        <twig:Badge variant="secondary">
                            write
                        </twig:Badge>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Button variant="ghost" size="icon-sm" aria-label="Copy">
                        <twig:ux:icon name="lucide:copy" />
                    </twig:Button>
                    <twig:Button variant="ghost" size="icon-sm" aria-label="Regenerate">
                        <twig:ux:icon name="lucide:refresh-cw" />
                    </twig:Button>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">
                    Staging
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                        sk_test_••••91bc
                    </code>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <div class="flex gap-1">
                        <twig:Badge variant="secondary">
                            read
                        </twig:Badge>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Button variant="ghost" size="icon-sm" aria-label="Copy">
                        <twig:ux:icon name="lucide:copy" />
                    </twig:Button>
                    <twig:Button variant="ghost" size="icon-sm" aria-label="Regenerate">
                        <twig:ux:icon name="lucide:refresh-cw" />
                    </twig:Button>
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### File Manager

```twig
<twig:Card class="max-w-3xl py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Name
                </twig:Table:Head>
                <twig:Table:Head>
                    Owner
                </twig:Table:Head>
                <twig:Table:Head>
                    Sharing
                </twig:Table:Head>
                <twig:Table:Head class="text-right">
                    Size
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <div class="flex items-center gap-2">
                        <twig:ux:icon name="lucide:folder" class="size-4 text-muted-foreground" />
                        <span class="font-medium">
                            Documents
                        </span>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Avatar size="sm">
                        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                        <twig:Avatar:Fallback>
                            CN
                        </twig:Avatar:Fallback>
                    </twig:Avatar>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="outline">
                        Team
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right text-muted-foreground">
                    —
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <div class="flex items-center gap-2">
                        <twig:ux:icon name="lucide:file-text" class="size-4 text-muted-foreground" />
                        <span class="font-medium">
                            proposal.pdf
                        </span>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Avatar size="sm">
                        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                        <twig:Avatar:Fallback>
                            CN
                        </twig:Avatar:Fallback>
                    </twig:Avatar>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="outline">
                        Private
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right text-muted-foreground">
                    2.4 MB
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <div class="flex items-center gap-2">
                        <twig:ux:icon name="lucide:image" class="size-4 text-muted-foreground" />
                        <span class="font-medium">
                            logo.png
                        </span>
                    </div>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Avatar size="sm">
                        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                        <twig:Avatar:Fallback>
                            CN
                        </twig:Avatar:Fallback>
                    </twig:Avatar>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="outline">
                        Public
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right text-muted-foreground">
                    84 KB
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Issues

```twig
<twig:Card class="max-w-3xl py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    ID
                </twig:Table:Head>
                <twig:Table:Head>
                    Title
                </twig:Table:Head>
                <twig:Table:Head>
                    Assignee
                </twig:Table:Head>
                <twig:Table:Head class="text-right">
                    Status
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="font-mono text-xs">
                    ISS-101
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <span class="font-medium">
                        Login fails on Safari
                    </span>
                    <twig:Badge variant="outline" class="ms-1">
                        bug
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    shadcn
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Badge variant="secondary">
                        Open
                    </twig:Badge>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="font-mono text-xs">
                    ISS-102
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <span class="font-medium">
                        Add dark mode
                    </span>
                    <twig:Badge variant="outline" class="ms-1">
                        feature
                    </twig:Badge>
                </twig:Table:Cell>
                <twig:Table:Cell>
                    maxleiter
                </twig:Table:Cell>
                <twig:Table:Cell class="text-right">
                    <twig:Badge variant="secondary">
                        In progress
                    </twig:Badge>
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Employee Profile

```twig
<twig:Card class="max-w-md py-0">
    <twig:Table>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell class="w-32 bg-muted/50 font-medium">
                    Name
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <div class="flex items-center gap-2">
                        <twig:Avatar size="sm">
                            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                            <twig:Avatar:Fallback>
                                CN
                            </twig:Avatar:Fallback>
                        </twig:Avatar>
                        Jane Cooper
                    </div>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="bg-muted/50 font-medium">
                    Title
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Senior Engineer
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="bg-muted/50 font-medium">
                    Department
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Platform
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell class="bg-muted/50 font-medium">
                    Status
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="secondary">
                        Active
                    </twig:Badge>
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Server Config

```twig
<twig:Card class="max-w-md">
    <twig:Card:Header>
        <twig:Card:Title class="flex items-center gap-2">
            <span class="relative flex size-2">
                <span class="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75">
                </span>
                <span class="relative inline-flex size-2 rounded-full bg-green-500">
                </span>
            </span>
            web-01
        </twig:Card:Title>
    </twig:Card:Header>
    <twig:Card:Content class="grid gap-3">
        <div class="grid gap-1">
            <div class="flex justify-between text-xs">
                <span>
                    CPU
                </span>
                <span>
                    42%
                </span>
            </div>
            <twig:Progress value="42" class="h-1.5" />
        </div>
        <div class="grid gap-1">
            <div class="flex justify-between text-xs">
                <span>
                    Memory
                </span>
                <span>
                    68%
                </span>
            </div>
            <twig:Progress value="68" class="h-1.5" />
        </div>
        <div class="flex gap-1">
            <twig:Badge variant="secondary">
                nginx
            </twig:Badge>
            <twig:Badge variant="secondary">
                php-8.4
            </twig:Badge>
        </div>
    </twig:Card:Content>
</twig:Card>
```

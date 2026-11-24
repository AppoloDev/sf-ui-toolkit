# Table

> Rows that expand to show a detail panel under them, and the examples of the Table component of the shadcn kit that its own documentation does not have.

## Installation

- table

## Usage

Put `row-expansion` on the table or on an element around it (around a toolbar too, to use `expandAll` and `collapseAll`). In each row, a `Table:ExpandToggle` points to the `Table:RowExpansion` placed right under it, through the same id. The detail row spans every column of the table. `expandAll` and `collapseAll` open and close every row; with `data-row-expansion-single-value="true"` only one row stays open. With `data-row-expansion-row-click-value="true"`, a click anywhere on a row opens or closes it, except on a link, a button, a field or an element marked `data-row-expansion-ignore`. A `row-expansion:expand` or `row-expansion:collapse` event, with the `toggle` and the `row` in `event.detail`, is sent each time a row opens or closes.

```twig
<twig:Table data-controller="row-expansion">
    <twig:Table:Body>
        <twig:Table:Row>
            <twig:Table:Cell class="w-10">
                <twig:Table:ExpandToggle controls="order-1" expandLabel="Show order 1" collapseLabel="Hide order 1" />
            </twig:Table:Cell>
            <twig:Table:Cell>
                Order 1
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="order-1">
            Two items, shipped on 12 March.
        </twig:Table:RowExpansion>
    </twig:Table:Body>
</twig:Table>
```

## Examples

### Row Expansion

A toggle in the first column opens the detail of each order.

```twig
<twig:Table data-controller="row-expansion">
    <twig:Table:Header>
        <twig:Table:Row>
            <twig:Table:Head class="w-10">
                <span class="sr-only">Details</span>
            </twig:Table:Head>
            <twig:Table:Head>
                Order
            </twig:Table:Head>
            <twig:Table:Head>
                Customer
            </twig:Table:Head>
            <twig:Table:Head class="text-right">
                Amount
            </twig:Table:Head>
        </twig:Table:Row>
    </twig:Table:Header>
    <twig:Table:Body>
        <twig:Table:Row>
            <twig:Table:Cell>
                <twig:Table:ExpandToggle controls="row-a1" expandLabel="Show order 1001" collapseLabel="Hide order 1001" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                #1001
            </twig:Table:Cell>
            <twig:Table:Cell>
                Amy Brooks
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                $250.00
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-a1">
            <div class="grid gap-1 text-sm">
                <p class="font-medium">
                    Shipping address
                </p>
                <p class="text-muted-foreground">
                    12 Harbor Street, Portland, OR 97201
                </p>
                <p class="text-muted-foreground">
                    2 items, paid by credit card.
                </p>
            </div>
        </twig:Table:RowExpansion>
        <twig:Table:Row>
            <twig:Table:Cell>
                <twig:Table:ExpandToggle controls="row-a2" expandLabel="Show order 1002" collapseLabel="Hide order 1002" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                #1002
            </twig:Table:Cell>
            <twig:Table:Cell>
                Noah Carter
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                $150.00
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-a2">
            <div class="grid gap-1 text-sm">
                <p class="font-medium">
                    Shipping address
                </p>
                <p class="text-muted-foreground">
                    48 Elm Avenue, Austin, TX 78701
                </p>
                <p class="text-muted-foreground">
                    1 item, paid by PayPal.
                </p>
            </div>
        </twig:Table:RowExpansion>
        <twig:Table:Row>
            <twig:Table:Cell>
                <twig:Table:ExpandToggle controls="row-a3" expandLabel="Show order 1003" collapseLabel="Hide order 1003" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                #1003
            </twig:Table:Cell>
            <twig:Table:Cell>
                Lina Moreau
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                $350.00
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-a3">
            <div class="grid gap-1 text-sm">
                <p class="font-medium">
                    Shipping address
                </p>
                <p class="text-muted-foreground">
                    7 Rue des Lilas, 69003 Lyon
                </p>
                <p class="text-muted-foreground">
                    4 items, bank transfer.
                </p>
            </div>
        </twig:Table:RowExpansion>
    </twig:Table:Body>
</twig:Table>
```

### Expand All and Collapse All

Buttons in a toolbar call `expandAll` and `collapseAll`, and the toggle of the header (`all`) does both: it is open when every row is.

```twig
<div data-controller="row-expansion" class="grid gap-3">
    <div class="flex gap-2">
        <twig:Button variant="outline" size="sm" type="button" data-action="row-expansion#expandAll">
            Expand all
        </twig:Button>
        <twig:Button variant="outline" size="sm" type="button" data-action="row-expansion#collapseAll">
            Collapse all
        </twig:Button>
    </div>
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head class="w-10">
                    <twig:Table:ExpandToggle all />
                </twig:Table:Head>
                <twig:Table:Head>
                    Project
                </twig:Table:Head>
                <twig:Table:Head>
                    Owner
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <twig:Table:ExpandToggle controls="row-b1" expandLabel="Show Atlas" collapseLabel="Hide Atlas" />
                </twig:Table:Cell>
                <twig:Table:Cell class="font-medium">
                    Atlas
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Amy Brooks
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:RowExpansion id="row-b1">
                <p class="text-sm text-muted-foreground">
                    A new search for the documentation. Beta planned for April.
                </p>
            </twig:Table:RowExpansion>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <twig:Table:ExpandToggle controls="row-b2" expandLabel="Show Beacon" collapseLabel="Hide Beacon" />
                </twig:Table:Cell>
                <twig:Table:Cell class="font-medium">
                    Beacon
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Noah Carter
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:RowExpansion id="row-b2">
                <p class="text-sm text-muted-foreground">
                    Notifications for the mobile app. In review.
                </p>
            </twig:Table:RowExpansion>
            <twig:Table:Row>
                <twig:Table:Cell>
                    <twig:Table:ExpandToggle controls="row-b3" expandLabel="Show Compass" collapseLabel="Hide Compass" />
                </twig:Table:Cell>
                <twig:Table:Cell class="font-medium">
                    Compass
                </twig:Table:Cell>
                <twig:Table:Cell>
                    Lina Moreau
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:RowExpansion id="row-b3">
                <p class="text-sm text-muted-foreground">
                    Onboarding for new teams. Shipped.
                </p>
            </twig:Table:RowExpansion>
        </twig:Table:Body>
    </twig:Table>
</div>
```

### One at a Time

With `data-row-expansion-single-value`, opening a row closes the one that was open.

```twig
<twig:Table data-controller="row-expansion" data-row-expansion-single-value="true">
    <twig:Table:Body>
        <twig:Table:Row>
            <twig:Table:Cell class="w-10">
                <twig:Table:ExpandToggle controls="row-c1" expandLabel="Show Starter plan" collapseLabel="Hide Starter plan" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                Starter
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                $9 / month
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-c1">
            <p class="text-sm text-muted-foreground">
                One project, 2 GB of storage and community support.
            </p>
        </twig:Table:RowExpansion>
        <twig:Table:Row>
            <twig:Table:Cell>
                <twig:Table:ExpandToggle controls="row-c2" expandLabel="Show Team plan" collapseLabel="Hide Team plan" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                Team
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                $29 / month
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-c2">
            <p class="text-sm text-muted-foreground">
                Unlimited projects, 50 GB of storage and email support.
            </p>
        </twig:Table:RowExpansion>
        <twig:Table:Row>
            <twig:Table:Cell>
                <twig:Table:ExpandToggle controls="row-c3" expandLabel="Show Business plan" collapseLabel="Hide Business plan" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                Business
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                $99 / month
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-c3">
            <p class="text-sm text-muted-foreground">
                Single sign-on, audit log and a dedicated contact.
            </p>
        </twig:Table:RowExpansion>
    </twig:Table:Body>
</twig:Table>
```

### Open by Default

Set `open` on the toggle and on its detail row.

```twig
<twig:Table data-controller="row-expansion">
    <twig:Table:Body>
        <twig:Table:Row>
            <twig:Table:Cell class="w-10">
                <twig:Table:ExpandToggle controls="row-d1" open expandLabel="Show invoice INV001" collapseLabel="Hide invoice INV001" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                INV001
            </twig:Table:Cell>
            <twig:Table:Cell>
                Paid
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-d1" open>
            <p class="text-sm text-muted-foreground">
                Paid on 3 March by credit card. Receipt sent to the customer.
            </p>
        </twig:Table:RowExpansion>
        <twig:Table:Row>
            <twig:Table:Cell>
                <twig:Table:ExpandToggle controls="row-d2" expandLabel="Show invoice INV002" collapseLabel="Hide invoice INV002" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                INV002
            </twig:Table:Cell>
            <twig:Table:Cell>
                Pending
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-d2">
            <p class="text-sm text-muted-foreground">
                Waiting for the payment, due on 20 March.
            </p>
        </twig:Table:RowExpansion>
    </twig:Table:Body>
</twig:Table>
```

### Clickable Row

With `data-row-expansion-row-click-value`, the whole row is the target, not just the chevron. The link and the button of the last cell keep their own job, and so does selecting text. The chevron stays the keyboard way in.

```twig
<twig:Table data-controller="row-expansion" data-row-expansion-row-click-value="true">
    <twig:Table:Header>
        <twig:Table:Row>
            <twig:Table:Head class="w-10">
                <span class="sr-only">Details</span>
            </twig:Table:Head>
            <twig:Table:Head>
                Customer
            </twig:Table:Head>
            <twig:Table:Head>
                Plan
            </twig:Table:Head>
            <twig:Table:Head class="text-right">
                Actions
            </twig:Table:Head>
        </twig:Table:Row>
    </twig:Table:Header>
    <twig:Table:Body>
        <twig:Table:Row>
            <twig:Table:Cell>
                <twig:Table:ExpandToggle controls="row-f1" expandLabel="Show Amy Brooks" collapseLabel="Hide Amy Brooks" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                Amy Brooks
            </twig:Table:Cell>
            <twig:Table:Cell>
                Team
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                <twig:Button variant="outline" size="sm" type="button">
                    Edit
                </twig:Button>
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-f1">
            <p class="text-sm text-muted-foreground">
                Customer since 2022. Last invoice paid on 3 March.
            </p>
        </twig:Table:RowExpansion>
        <twig:Table:Row>
            <twig:Table:Cell>
                <twig:Table:ExpandToggle controls="row-f2" expandLabel="Show Noah Carter" collapseLabel="Hide Noah Carter" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                Noah Carter
            </twig:Table:Cell>
            <twig:Table:Cell>
                Starter
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                <twig:Button variant="outline" size="sm" type="button">
                    Edit
                </twig:Button>
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-f2">
            <p class="text-sm text-muted-foreground">
                Customer since 2024. Trial ends on 20 March.
            </p>
        </twig:Table:RowExpansion>
    </twig:Table:Body>
</twig:Table>
```

### Nested Table

The detail can hold another table, here the orders of a product with a status badge.

```twig
<twig:Table data-controller="row-expansion">
    <twig:Table:Header>
        <twig:Table:Row>
            <twig:Table:Head class="w-10">
                <span class="sr-only">Orders</span>
            </twig:Table:Head>
            <twig:Table:Head>
                Product
            </twig:Table:Head>
            <twig:Table:Head>
                Category
            </twig:Table:Head>
            <twig:Table:Head class="text-right">
                Price
            </twig:Table:Head>
        </twig:Table:Row>
    </twig:Table:Header>
    <twig:Table:Body>
        <twig:Table:Row>
            <twig:Table:Cell>
                <twig:Table:ExpandToggle controls="row-e1" expandLabel="Show the orders of Bamboo Watch" collapseLabel="Hide the orders of Bamboo Watch" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                Bamboo Watch
            </twig:Table:Cell>
            <twig:Table:Cell>
                Accessories
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                $65.00
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-e1">
            <div class="grid gap-2">
                <p class="text-sm font-medium">
                    Orders for Bamboo Watch
                </p>
                <div class="rounded-md border bg-background">
                    <twig:Table>
                        <twig:Table:Header>
                            <twig:Table:Row>
                                <twig:Table:Head>
                                    Id
                                </twig:Table:Head>
                                <twig:Table:Head>
                                    Customer
                                </twig:Table:Head>
                                <twig:Table:Head>
                                    Date
                                </twig:Table:Head>
                                <twig:Table:Head>
                                    Status
                                </twig:Table:Head>
                                <twig:Table:Head class="text-right">
                                    Amount
                                </twig:Table:Head>
                            </twig:Table:Row>
                        </twig:Table:Header>
                        <twig:Table:Body>
                            <twig:Table:Row>
                                <twig:Table:Cell>
                                    1000-0
                                </twig:Table:Cell>
                                <twig:Table:Cell>
                                    James Butt
                                </twig:Table:Cell>
                                <twig:Table:Cell>
                                    2020-09-13
                                </twig:Table:Cell>
                                <twig:Table:Cell>
                                    <twig:Badge variant="success">
                                        Delivered
                                    </twig:Badge>
                                </twig:Table:Cell>
                                <twig:Table:Cell class="text-right">
                                    $65.00
                                </twig:Table:Cell>
                            </twig:Table:Row>
                            <twig:Table:Row>
                                <twig:Table:Cell>
                                    1000-1
                                </twig:Table:Cell>
                                <twig:Table:Cell>
                                    Josephine Darakjy
                                </twig:Table:Cell>
                                <twig:Table:Cell>
                                    2020-05-14
                                </twig:Table:Cell>
                                <twig:Table:Cell>
                                    <twig:Badge variant="warning">
                                        Pending
                                    </twig:Badge>
                                </twig:Table:Cell>
                                <twig:Table:Cell class="text-right">
                                    $130.00
                                </twig:Table:Cell>
                            </twig:Table:Row>
                        </twig:Table:Body>
                    </twig:Table>
                </div>
            </div>
        </twig:Table:RowExpansion>
        <twig:Table:Row>
            <twig:Table:Cell>
                <twig:Table:ExpandToggle controls="row-e2" expandLabel="Show the orders of Black Watch" collapseLabel="Hide the orders of Black Watch" />
            </twig:Table:Cell>
            <twig:Table:Cell class="font-medium">
                Black Watch
            </twig:Table:Cell>
            <twig:Table:Cell>
                Accessories
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                $72.00
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:RowExpansion id="row-e2">
            <div class="grid gap-2">
                <p class="text-sm font-medium">
                    Orders for Black Watch
                </p>
                <p class="text-sm text-muted-foreground">
                    No order yet.
                </p>
            </div>
        </twig:Table:RowExpansion>
    </twig:Table:Body>
</twig:Table>
```

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

## Accessibility

- The toggle is a native button: Tab reaches it, Space and Enter use it. It has `aria-expanded`, kept up to date, and `aria-controls` pointing to the detail row.
- Its accessible name comes from `expandLabel` and `collapseLabel` and changes with the state. Name the row in them ("Show order 1001"), since the chevron alone does not say which row it opens.
- A closed detail row is `hidden`: it is neither shown nor read.
- The toggle of the header (`all`) is open when every row is, and has its own labels.

## API

### `<twig:Table:ExpandToggle>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `controls` | string or null | `null` | The id of the `Table:RowExpansion` this button opens. Not needed with `all`. |
| `open` | bool | `false` | Whether the row is open at first. Set it on the `Table:RowExpansion` too. |
| `all` | bool | `false` | Makes the button open or close every row of the controller. |
| `expandLabel` | string or null | `null` | The accessible name when the row is closed. Defaults to "Expand row", or "Expand all rows" with `all`. |
| `collapseLabel` | string or null | `null` | The accessible name when the row is open. Defaults to "Collapse row", or "Collapse all rows" with `all`. |

| Block | Description |
| --- | --- |
| `default` | Replaces the chevron, which turns when the row is open. |

### `<twig:Table:RowExpansion>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | string | | The id of the row, the one of `controls` on the toggle. |
| `open` | bool | `false` | Whether the detail is shown at first. Set it on the `Table:ExpandToggle` too. |
| `colspan` | int or null | `null` | The number of columns the detail spans. By default, the number of columns of the table, counted in the browser. |

| Block | Description |
| --- | --- |
| `default` | The detail of the row: text, a nested table, a form. |

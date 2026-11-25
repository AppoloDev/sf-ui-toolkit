# Sheet

## Examples

### Profile Editor

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sheet-profile">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Edit profile
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Edit profile
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Make changes to your profile here.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min gap-4 px-4">
                <twig:Field>
                    <twig:Field:Label for="sh-name">
                        Name
                    </twig:Field:Label>
                    <twig:Input id="sh-name" value="Pedro Duarte" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="sh-user">
                        Username
                    </twig:Field:Label>
                    <twig:Input id="sh-user" value="@peduarte" />
                </twig:Field>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Save changes
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Scrollable Content

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sheet-scroll">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Terms
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Terms of service
                </twig:Sheet:Title>
            </twig:Sheet:Header>
            <div class="min-h-0 flex-1 overflow-y-auto px-4 text-sm text-muted-foreground">
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
            </div>
            <twig:Sheet:Footer>
                <twig:Button>
                    Save
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Product Details

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-product">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Product details
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Aero Chair
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Ergonomic office chair.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:AspectRatio ratio="16/9" class="overflow-hidden rounded-md bg-gradient-to-br from-amber-300 to-orange-500" />
                <div class="flex items-center justify-between">
                    <span class="text-lg font-semibold">
                        $189
                    </span>
                    <twig:Badge>
                        In stock
                    </twig:Badge>
                </div>
                <p class="text-sm text-muted-foreground">
                    Mesh back, adjustable arms, 5-year warranty.
                </p>
            </div>
            <twig:Sheet:Footer>
                <twig:Button class="w-full">
                    Add to cart
                </twig:Button>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### User Profile

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-user">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                View profile
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Jane Doe
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Product designer
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <div class="flex items-center gap-3">
                    <twig:Avatar size="lg">
                        <twig:Avatar:Fallback>
                            JD
                        </twig:Avatar:Fallback>
                    </twig:Avatar>
                    <div>
                        <p class="font-medium">
                            Jane Doe
                        </p>
                        <p class="text-sm text-muted-foreground">
                            jane@example.com
                        </p>
                    </div>
                </div>
                <twig:Separator />
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Role
                    </span>
                    <span class="font-medium">
                        Admin
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Location
                    </span>
                    <span class="font-medium">
                        Paris
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Joined
                    </span>
                    <span class="font-medium">
                        March 2024
                    </span>
                </div>
            </div>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Order Details

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-order">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Order #1042
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Order #1042
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Placed on Nov 18, 2026.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Status
                    </span>
                    <span class="font-medium">
                        <twig:Badge variant="secondary">Shipped</twig:Badge>
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Items
                    </span>
                    <span class="font-medium">
                        3
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Shipping
                    </span>
                    <span class="font-medium">
                        Express
                    </span>
                </div>
                <twig:Separator />
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Total
                    </span>
                    <span class="font-medium">
                        $248.00
                    </span>
                </div>
            </div>
            <twig:Sheet:Footer>
                <twig:Button variant="outline" class="w-full">
                    Download invoice
                </twig:Button>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Article Preview

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-article">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Preview article
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Designing calm interfaces
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    5 min read
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:AspectRatio ratio="16/9" class="overflow-hidden rounded-md bg-gradient-to-br from-sky-400 to-indigo-600" />
                <p class="text-sm text-muted-foreground">
                    Calm interfaces reduce noise: fewer colors, steady spacing and clear hierarchy. This preview shows the first paragraph of the article.
                </p>
            </div>
            <twig:Sheet:Footer>
                <twig:Button class="w-full">
                    Read full article
                </twig:Button>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Notifications

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-notif">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Notifications
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Notifications
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    You have 3 unread messages.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:Item variant="outline" size="sm">
                    <twig:Item:Content>
                        <twig:Item:Title>
                            New comment
                        </twig:Item:Title>
                        <twig:Item:Description>
                            Jane replied to your post.
                        </twig:Item:Description>
                    </twig:Item:Content>
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
                </twig:Item>
            </div>
            <twig:Sheet:Footer>
                <twig:Button variant="outline" class="w-full">
                    Mark all as read
                </twig:Button>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Contact Form

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-contact">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Contact us
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Contact us
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    We reply within one business day.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:Field>
                    <twig:Field:Label for="shc-name">
                        Name
                    </twig:Field:Label>
                    <twig:Input id="shc-name" value="" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="shc-email">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="shc-email" type="email" value="" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="shc-msg">
                        Message
                    </twig:Field:Label>
                    <twig:Textarea id="shc-msg" rows="4" />
                </twig:Field>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Send message
                </twig:Button>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Search And Filters

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-filter">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Filters
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Filters
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Narrow the results.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:Field>
                    <twig:Field:Label for="shf-q">
                        Search
                    </twig:Field:Label>
                    <twig:Input id="shf-q" value="" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label>
                        Status
                    </twig:Field:Label>
                    <twig:RadioGroup>
                        <twig:Field orientation="horizontal">
                            <twig:RadioGroup:Item id="shf-all" name="shf-status" value="all" checked />
                            <twig:Field:Label for="shf-all" class="font-normal">
                                All
                            </twig:Field:Label>
                        </twig:Field>
                        <twig:Field orientation="horizontal">
                            <twig:RadioGroup:Item id="shf-open" name="shf-status" value="open" />
                            <twig:Field:Label for="shf-open" class="font-normal">
                                Open
                            </twig:Field:Label>
                        </twig:Field>
                        <twig:Field orientation="horizontal">
                            <twig:RadioGroup:Item id="shf-closed" name="shf-status" value="closed" />
                            <twig:Field:Label for="shf-closed" class="font-normal">
                                Closed
                            </twig:Field:Label>
                        </twig:Field>
                    </twig:RadioGroup>
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="shf-stock" class="font-normal">
                        In stock only
                    </twig:Field:Label>
                    <twig:Switch id="shf-stock" />
                </twig:Field>
            </div>
            <twig:Sheet:Footer>
                <twig:Button>
                    Apply filters
                </twig:Button>
                <twig:Button variant="outline">
                    Reset
                </twig:Button>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Create Item

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-create">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                New project
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    New project
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Name it and choose a visibility.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:Field>
                    <twig:Field:Label for="shn-name">
                        Name
                    </twig:Field:Label>
                    <twig:Input id="shn-name" value="" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="shn-desc">
                        Description
                    </twig:Field:Label>
                    <twig:Textarea id="shn-desc" rows="3" />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="shn-priv" class="font-normal">
                        Private project
                    </twig:Field:Label>
                    <twig:Switch id="shn-priv" checked />
                </twig:Field>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Create project
                </twig:Button>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Multi Step Form

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-steps">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Start onboarding
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Set up your workspace
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Step 1 of 2: your details.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:Progress :value="50" />
                <twig:Field>
                    <twig:Field:Label for="shs-co">
                        Company
                    </twig:Field:Label>
                    <twig:Input id="shs-co" value="" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="shs-size">
                        Team size
                    </twig:Field:Label>
                    <twig:Input id="shs-size" type="number" value="" />
                </twig:Field>
            </div>
            <twig:Sheet:Footer>
                <twig:Button>
                    Next
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Header Content Footer

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-hcf">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Open
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Terms of service
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Read before continuing.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <p class="text-sm text-muted-foreground">
                    By using this service you agree to the terms. Data is processed in line with our privacy policy.
                </p>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Save changes
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### With Tabs

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-tabs">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Project settings
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Project settings
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Manage your project.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:Tabs defaultValue="general">
                    <twig:Tabs:List>
                        <twig:Tabs:Trigger value="general">
                            General
                        </twig:Tabs:Trigger>
                        <twig:Tabs:Trigger value="team">
                            Team
                        </twig:Tabs:Trigger>
                    </twig:Tabs:List>
                    <twig:Tabs:Content value="general" class="text-sm text-muted-foreground">
                        General project settings.
                    </twig:Tabs:Content>
                    <twig:Tabs:Content value="team" class="text-sm text-muted-foreground">
                        Members and roles.
                    </twig:Tabs:Content>
                </twig:Tabs>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Save changes
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Fixed Header And Footer

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-fixed">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Open long sheet
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Release notes
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Scroll the content.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4 overflow-y-auto">
                <div class="grid gap-3">
                    <p class="text-sm text-muted-foreground">
                        Paragraph 1. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 2. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 3. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 4. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 5. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 6. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 7. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 8. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 9. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 10. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 11. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 12. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 13. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 14. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 15. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 16. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 17. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 18. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 19. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 20. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 21. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 22. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 23. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Paragraph 24. Long content scrolls inside the sheet while the header and footer stay in place.
                    </p>
                </div>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Save changes
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Footer Actions

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-actions">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Review changes
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Review changes
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    3 files changed.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <p class="text-sm text-muted-foreground">
                    Nothing is published until you confirm.
                </p>
            </div>
            <twig:Sheet:Footer>
                <twig:Button variant="destructive">
                    Discard
                </twig:Button>
                <twig:Button variant="outline">
                    Save draft
                </twig:Button>
                <twig:Button>
                    Publish
                </twig:Button>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Without Close Button

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-noclose">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Open
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content :showCloseButton="false">
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Quick note
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Use the footer button to close.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <p class="text-sm text-muted-foreground">
                    The corner button is hidden.
                </p>
            </div>
            <twig:Sheet:Footer>
                <twig:Sheet:Close>
                    <twig:Button class="w-full" {{ ...sheet_close_attrs }}>
                        Done
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Mobile Menu

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-mobile" side="left">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                <twig:ux:icon name="lucide:menu" />
                Menu
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Menu
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Navigate the site.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
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
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Sidebar Navigation

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-side" side="left">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Sidebar
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Workspace
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Acme Inc.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
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
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                        <twig:ux:icon name="lucide:life-buoy" class="size-4" />
                        Support
                    </a>
                </nav>
            </div>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Nested Navigation

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-nested" side="left">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Nested menu
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Menu
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Sections and pages.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
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
                    <a href="#" class="rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                        Pricing
                    </a>
                </nav>
            </div>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Navigation With Profile

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-navprof" side="left">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Menu
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Menu
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Signed in as Jane.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <div class="flex items-center gap-3">
                    <twig:Avatar>
                        <twig:Avatar:Fallback>
                            JD
                        </twig:Avatar:Fallback>
                    </twig:Avatar>
                    <div>
                        <p class="text-sm font-medium">
                            Jane Doe
                        </p>
                        <p class="text-xs text-muted-foreground">
                            jane@example.com
                        </p>
                    </div>
                </div>
                <twig:Separator />
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
                </nav>
            </div>
            <twig:Sheet:Footer>
                <twig:Button variant="outline" class="w-full">
                    Sign out
                </twig:Button>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Navigation With Search

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-navsearch" side="left">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Menu
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Menu
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Find a page.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
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
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### App Preferences

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-prefs">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Preferences
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Preferences
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Adjust the app.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="shp-save" class="font-normal">
                        Auto-save
                    </twig:Field:Label>
                    <twig:Switch id="shp-save" checked />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="shp-compact" class="font-normal">
                        Compact mode
                    </twig:Field:Label>
                    <twig:Switch id="shp-compact" />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="shp-sound" class="font-normal">
                        Sounds
                    </twig:Field:Label>
                    <twig:Switch id="shp-sound" checked />
                </twig:Field>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Save changes
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Account Settings

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-account">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Account
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Account
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Manage your account.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:Field>
                    <twig:Field:Label for="sha-name">
                        Display name
                    </twig:Field:Label>
                    <twig:Input id="sha-name" value="Jane Doe" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="sha-mail">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="sha-mail" type="email" value="jane@example.com" />
                </twig:Field>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Save changes
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Notification Preferences

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-notifp">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Notification settings
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Notifications
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Choose what you receive.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="shnp-mail" class="font-normal">
                        Email digest
                    </twig:Field:Label>
                    <twig:Switch id="shnp-mail" checked />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="shnp-push" class="font-normal">
                        Push notifications
                    </twig:Field:Label>
                    <twig:Switch id="shnp-push" checked />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="shnp-news" class="font-normal">
                        Product news
                    </twig:Field:Label>
                    <twig:Switch id="shnp-news" />
                </twig:Field>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Save changes
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Theme Settings

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-theme">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Appearance
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Appearance
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Customize the theme.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:RadioGroup>
                    <twig:Field orientation="horizontal">
                        <twig:RadioGroup:Item id="sht-light" name="sht-theme" value="light" />
                        <twig:Field:Label for="sht-light" class="font-normal">
                            Light
                        </twig:Field:Label>
                    </twig:Field>
                    <twig:Field orientation="horizontal">
                        <twig:RadioGroup:Item id="sht-dark" name="sht-theme" value="dark" />
                        <twig:Field:Label for="sht-dark" class="font-normal">
                            Dark
                        </twig:Field:Label>
                    </twig:Field>
                    <twig:Field orientation="horizontal">
                        <twig:RadioGroup:Item id="sht-system" name="sht-theme" value="system" checked />
                        <twig:Field:Label for="sht-system" class="font-normal">
                            System
                        </twig:Field:Label>
                    </twig:Field>
                </twig:RadioGroup>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Save changes
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Privacy Settings

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-privacy">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Privacy
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Privacy
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Control your data.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="shy-pub" class="font-normal">
                        Public profile
                    </twig:Field:Label>
                    <twig:Switch id="shy-pub" />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="shy-ana" class="font-normal">
                        Share usage analytics
                    </twig:Field:Label>
                    <twig:Switch id="shy-ana" checked />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="shy-ads" class="font-normal">
                        Personalized ads
                    </twig:Field:Label>
                    <twig:Switch id="shy-ads" />
                </twig:Field>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Save changes
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### From The Bottom

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-bottom" side="bottom">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Open from bottom
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Bottom sheet
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Slides up from the bottom edge.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <p class="text-sm text-muted-foreground">
                    Useful for quick actions on small screens.
                </p>
            </div>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Title And Description

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-basic">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Open
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Are you sure?
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    This only needs a title and a description.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### From The Left

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-left" side="left">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Open from left
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Left sheet
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Slides in from the left edge.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <p class="text-sm text-muted-foreground">
                    Often used for navigation.
                </p>
            </div>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### From The Top

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sh-top" side="top">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Open from top
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Top sheet
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Slides down from the top edge.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <p class="text-sm text-muted-foreground">
                    Often used for banners and search.
                </p>
            </div>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Customer Editor

```twig
<div style="min-height: 520px">
    <twig:Sheet id="sh-customer">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Edit customer
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Edit customer
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Update details and status.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:Field>
                    <twig:Field:Label for="shce-name">
                        Name
                    </twig:Field:Label>
                    <twig:Input id="shce-name" value="Acme Inc." />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label>
                        Status
                    </twig:Field:Label>
                    <twig:Select id="shce-status">
                        <twig:Select:Trigger class="w-full">
                            <twig:Select:Value placeholder="Choose a status" />
                        </twig:Select:Trigger>
                        <twig:Select:Content>
                            <twig:Select:Group id="shce-status-list">
                                <twig:Select:Item value="active">
                                    Active
                                </twig:Select:Item>
                                <twig:Select:Item value="paused">
                                    Paused
                                </twig:Select:Item>
                            </twig:Select:Group>
                        </twig:Select:Content>
                    </twig:Select>
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="shce-c1">
                        Contact
                    </twig:Field:Label>
                    <twig:Input id="shce-c1" type="email" value="jane@acme.com" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="shce-c2">
                        Contact
                    </twig:Field:Label>
                    <twig:Input id="shce-c2" type="email" value="john@acme.com" />
                </twig:Field>
                <twig:Button variant="outline" size="sm" class="w-fit">
                    <twig:ux:icon name="lucide:plus" />
                    Add contact
                </twig:Button>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">
                    Save changes
                </twig:Button>
                <twig:Sheet:Close>
                    <twig:Button variant="outline" {{ ...sheet_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Address Book

```twig
<div style="min-height: 480px">
    <twig:Sheet id="sh-address">
        <twig:Sheet:Trigger>
            <twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>
                Choose address
            </twig:Button>
        </twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>
                    Delivery address
                </twig:Sheet:Title>
                <twig:Sheet:Description>
                    Pick where to ship.
                </twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min content-start gap-4 px-4">
                <twig:RadioGroup>
                    <twig:Field orientation="horizontal" class="rounded-lg border p-3">
                        <twig:RadioGroup:Item id="shad-home" name="shad-addr" value="home" checked />
                        <twig:Field:Label for="shad-home" class="grid gap-0.5 font-normal">
                            <span class="font-medium">
                                Home, 12 Rue Lafayette
                            </span>
                            <span class="text-xs text-muted-foreground">
                                Delivery in 2 days
                            </span>
                        </twig:Field:Label>
                    </twig:Field>
                    <twig:Field orientation="horizontal" class="rounded-lg border p-3">
                        <twig:RadioGroup:Item id="shad-work" name="shad-addr" value="work" />
                        <twig:Field:Label for="shad-work" class="grid gap-0.5 font-normal">
                            <span class="font-medium">
                                Office, 5 Avenue Foch
                            </span>
                            <span class="text-xs text-muted-foreground">
                                Delivery in 3 days
                            </span>
                        </twig:Field:Label>
                    </twig:Field>
                </twig:RadioGroup>
                <twig:Button variant="outline" size="sm" class="w-fit">
                    <twig:ux:icon name="lucide:plus" />
                    Add address
                </twig:Button>
            </div>
            <twig:Sheet:Footer>
                <twig:Button class="w-full">
                    Deliver here
                </twig:Button>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

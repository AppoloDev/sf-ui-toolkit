# Card

## Examples

### Basic

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Create project
        </twig:Card:Title>
        <twig:Card:Description>
            Deploy your new project in one click.
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content>
        <p class="text-sm">
            Your project will be available at a unique URL.
        </p>
    </twig:Card:Content>
    <twig:Card:Footer>
        <twig:Button variant="outline" class="w-full">
            Deploy
        </twig:Button>
    </twig:Card:Footer>
</twig:Card>
```

### Bordered Header

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    <twig:Card:Header class="border-b px-4 py-4">
        <twig:Card:Title>
            Notifications
        </twig:Card:Title>
        <twig:Card:Description>
            You have 3 unread messages.
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="px-4 py-4 text-sm">
        Review them whenever you are ready.
    </twig:Card:Content>
</twig:Card>
```

### Header and Footer

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    <twig:Card:Header class="border-b px-4 py-3">
        <twig:Card:Title>
            Team settings
        </twig:Card:Title>
    </twig:Card:Header>
    <twig:Card:Content class="px-4 py-4 text-sm">
        Manage members and permissions.
    </twig:Card:Content>
    <twig:Card:Footer class="border-t px-4 py-3">
        <twig:Button size="sm">
            Save changes
        </twig:Button>
    </twig:Card:Footer>
</twig:Card>
```

### Link Action

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Need help?
        </twig:Card:Title>
        <twig:Card:Description>
            Browse the guides or contact support.
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Footer>
        <twig:Button as="a" href="#" variant="link" class="px-0">
            Open the help center
            <twig:ux:icon name="lucide:external-link" />
        </twig:Button>
    </twig:Card:Footer>
</twig:Card>
```

### Dropdown Menu

```twig
<div style="min-height: 320px">
    <twig:Card class="max-w-sm">
        <twig:Card:Header>
            <twig:Card:Title>
                Team
            </twig:Card:Title>
            <twig:Card:Description>
                Invite people to collaborate.
            </twig:Card:Description>
            <twig:Card:Action>
                <twig:DropdownMenu id="card-team" align="end">
                    <twig:DropdownMenu:Trigger>
                        <twig:Button variant="ghost" size="icon-sm" aria-label="Open menu" {{ ...dropdown_menu_trigger_attrs }}>
                            <twig:ux:icon name="lucide:more-horizontal" />
                        </twig:Button>
                    </twig:DropdownMenu:Trigger>
                    <twig:DropdownMenu:Content>
                        <twig:DropdownMenu:Item>
                            Invite member
                        </twig:DropdownMenu:Item>
                        <twig:DropdownMenu:Item>
                            Manage roles
                        </twig:DropdownMenu:Item>
                        <twig:DropdownMenu:Separator />
                        <twig:DropdownMenu:Item variant="destructive">
                            Leave team
                        </twig:DropdownMenu:Item>
                    </twig:DropdownMenu:Content>
                </twig:DropdownMenu>
            </twig:Card:Action>
        </twig:Card:Header>
        <twig:Card:Footer>
            <twig:Button variant="outline" class="h-auto gap-2 rounded-full py-1 ps-1">
                <twig:Avatar size="sm">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                shadcn
            </twig:Button>
        </twig:Card:Footer>
    </twig:Card>
</div>
```

### Inset Image

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Content class="flex flex-col gap-3">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80" alt="Mountain lake" class="aspect-video w-full rounded-lg object-cover" />
        <div class="flex gap-2">
            <twig:Badge>
                Trending
            </twig:Badge>
            <twig:Badge variant="outline">
                Featured
            </twig:Badge>
        </div>
        <p class="text-sm text-muted-foreground">
            Discover calm places away from the crowds.
        </p>
    </twig:Card:Content>
    <twig:Card:Footer>
        <twig:Button class="w-full">
            Get Started
        </twig:Button>
    </twig:Card:Footer>
</twig:Card>
```

### Image Hover Zoom

```twig
<twig:Card class="group/zoom relative max-w-sm overflow-hidden py-0">
    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80" alt="Forest" class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover/zoom:scale-105" />
    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <p class="font-semibold">
            Into the woods
        </p>
        <p class="text-sm text-white/80">
            A weekend trip to the forest.
        </p>
    </div>
</twig:Card>
```

### Full Image

```twig
<twig:Card class="max-w-sm overflow-hidden pt-0">
    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80" alt="Lake" class="aspect-video w-full object-cover" />
    <twig:Card:Content class="flex flex-col items-center gap-3 text-center">
        <twig:Badge>
            New
        </twig:Badge>
        <p class="text-sm text-muted-foreground">
            Plan your next escape with curated guides.
        </p>
        <twig:Button>
            Explore guides
        </twig:Button>
    </twig:Card:Content>
</twig:Card>
```

### Login Form

```twig
<twig:Card class="w-full max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Login to your account
        </twig:Card:Title>
        <twig:Card:Description>
            Enter your email below to login.
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content>
        <form>
            <twig:Field:Group>
                <twig:Field>
                    <twig:Field:Label for="card-login-email">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="card-login-email" type="email" placeholder="m@example.com" required />
                </twig:Field>
                <twig:Field>
                    <div class="flex items-center">
                        <twig:Field:Label for="card-login-password">
                            Password
                        </twig:Field:Label>
                        <a href="#" class="ms-auto text-sm underline-offset-4 hover:underline">
                            Forgot your password?
                        </a>
                    </div>
                    <twig:Input id="card-login-password" type="password" required />
                </twig:Field>
                <twig:Field>
                    <twig:Button type="submit">
                        Login
                    </twig:Button>
                    <twig:Button variant="outline" type="button">
                        <twig:ux:icon name="lucide:github" />
                        Login with GitHub
                    </twig:Button>
                </twig:Field>
            </twig:Field:Group>
        </form>
    </twig:Card:Content>
</twig:Card>
```

### Stat Trend

```twig
<twig:Card class="max-w-xs">
    <twig:Card:Header>
        <twig:Card:Description>
            Total revenue
        </twig:Card:Description>
        <twig:Card:Title class="text-3xl tabular-nums">
            $12,450
        </twig:Card:Title>
        <twig:Card:Action>
            <twig:Badge variant="outline">
                <twig:ux:icon name="lucide:trending-up" />
                +12.5%
            </twig:Badge>
        </twig:Card:Action>
    </twig:Card:Header>
    <twig:Card:Footer class="text-sm text-muted-foreground">
        Last month: $11,070
    </twig:Card:Footer>
</twig:Card>
```

### Billing Usage

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Usage
        </twig:Card:Title>
        <twig:Card:Description>
            $42 of $100 credit used
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="flex flex-col gap-3">
        <twig:Progress value="42" />
        <div class="flex flex-col gap-1 text-sm">
            <div class="flex justify-between">
                <span class="text-muted-foreground">
                    Compute
                </span>
                <span class="tabular-nums">
                    $24.00
                </span>
            </div>
            <div class="flex justify-between">
                <span class="text-muted-foreground">
                    Storage
                </span>
                <span class="tabular-nums">
                    $10.00
                </span>
            </div>
            <div class="flex justify-between">
                <span class="text-muted-foreground">
                    Bandwidth
                </span>
                <span class="tabular-nums">
                    $8.00
                </span>
            </div>
        </div>
    </twig:Card:Content>
</twig:Card>
```

### Icon and Link

```twig
<twig:Card class="max-w-xs">
    <twig:Card:Content class="flex flex-col gap-3">
        <span class="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <twig:ux:icon name="lucide:rocket" class="size-5" />
        </span>
        <a href="#" class="font-semibold hover:underline">
            Quick start
        </a>
        <p class="text-sm text-muted-foreground">
            Get up and running in a few minutes.
        </p>
        <a href="#" class="inline-flex items-center gap-1 text-sm font-medium">
            View
            <twig:ux:icon name="lucide:chevron-right" class="size-4" />
        </a>
    </twig:Card:Content>
</twig:Card>
```

### Stacked Depth

The `Card` clips its content, so the two layers behind it are siblings of the card in a `relative isolate` wrapper, not part of it. The padding at the bottom of the wrapper leaves room for them to show.

```twig
<div class="relative isolate mx-auto max-w-sm pb-4">
    <div class="absolute inset-x-6 top-4 bottom-0 -z-20 rounded-xl bg-card ring-1 ring-foreground/10">
    </div>
    <div class="absolute inset-x-3 top-2 bottom-2 -z-10 rounded-xl bg-card ring-1 ring-foreground/10">
    </div>
    <twig:Card>
        <twig:Card:Header>
            <twig:Card:Title>
                Stacked card
            </twig:Card:Title>
            <twig:Card:Description>
                Two layers sit behind this card to give it depth.
            </twig:Card:Description>
        </twig:Card:Header>
        <twig:Card:Content>
            <p class="text-sm">
                Use it for a card that stands for several items, such as a pile of drafts.
            </p>
        </twig:Card:Content>
        <twig:Card:Footer>
            <twig:Button variant="outline" class="w-full">
                Action
            </twig:Button>
        </twig:Card:Footer>
    </twig:Card>
</div>
```

### Deployment Status

```twig
<twig:Card class="mx-auto max-w-sm text-center">
    <twig:Card:Content class="flex flex-col items-center gap-3 py-4">
        <div class="flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 ring-8 ring-emerald-500/5 dark:text-emerald-400">
            <twig:ux:icon name="lucide:circle-check" class="size-7" />
        </div>
        <div class="grid gap-1">
            <p class="text-base font-medium">
                Deployment successful
            </p>
            <p class="text-muted-foreground">
                Your app is now live.
            </p>
        </div>
        <div class="flex items-center gap-2 rounded-lg bg-muted px-2.5 py-1.5 font-mono text-xs">
            <twig:ux:icon name="lucide:globe" class="size-3.5 text-muted-foreground" />
            app.example.com
        </div>
    </twig:Card:Content>
    <twig:Card:Footer>
        <twig:Button as="a" href="#" variant="outline" class="w-full">
            Visit site
            <twig:ux:icon name="lucide:arrow-up-right" />
        </twig:Button>
    </twig:Card:Footer>
</twig:Card>
```

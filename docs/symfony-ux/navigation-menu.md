# Navigation Menu

## Examples

### Grid Layout

A panel is free content, so it can be a grid: one large featured link, and a column of smaller ones.

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Products
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-[520px] grid-cols-[1.1fr_1fr] gap-2">
                        <a href="#" class="row-span-3 flex flex-col justify-end gap-2 rounded-md bg-muted p-4 outline-none transition-colors hover:bg-accent focus:bg-accent">
                            <twig:ux:icon name="lucide:layout-dashboard" class="size-6" />
                            <div class="text-sm font-medium">
                                Dashboard
                            </div>
                            <p class="text-sm text-muted-foreground">
                                One place for your metrics, reports and alerts.
                            </p>
                        </a>
                        <a href="#" class="flex flex-col gap-1 rounded-md p-2 text-sm outline-none transition-colors hover:bg-muted focus:bg-muted">
                            <div class="leading-none font-medium">
                                Analytics
                            </div>
                            <p class="line-clamp-2 text-muted-foreground">
                                Follow how people use your product.
                            </p>
                        </a>
                        <a href="#" class="flex flex-col gap-1 rounded-md p-2 text-sm outline-none transition-colors hover:bg-muted focus:bg-muted">
                            <div class="leading-none font-medium">
                                Automations
                            </div>
                            <p class="line-clamp-2 text-muted-foreground">
                                Run tasks when something happens.
                            </p>
                        </a>
                        <a href="#" class="flex flex-col gap-1 rounded-md p-2 text-sm outline-none transition-colors hover:bg-muted focus:bg-muted">
                            <div class="leading-none font-medium">
                                Integrations
                            </div>
                            <p class="line-clamp-2 text-muted-foreground">
                                Connect the tools you already use.
                            </p>
                        </a>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Link href="#">
                    Pricing
                </twig:NavigationMenu:Link>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
    </twig:NavigationMenu>
</div>
```

### With Icons

```twig
<div class="flex items-start justify-center" style="min-height: 340px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Solutions
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <ul class="grid w-80 gap-1">
                        <li>
                            <a href="#" class="flex items-center gap-3 rounded-md p-2 text-sm outline-none transition-colors hover:bg-muted focus:bg-muted">
                                <span class="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
                                    <twig:ux:icon name="lucide:rocket" class="size-4" />
                                </span>
                                <span class="grid gap-0.5">
                                    <span class="leading-none font-medium">
                                        Startups
                                    </span>
                                    <span class="text-muted-foreground">
                                        Launch fast, scale later.
                                    </span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center gap-3 rounded-md p-2 text-sm outline-none transition-colors hover:bg-muted focus:bg-muted">
                                <span class="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
                                    <twig:ux:icon name="lucide:building-2" class="size-4" />
                                </span>
                                <span class="grid gap-0.5">
                                    <span class="leading-none font-medium">
                                        Enterprise
                                    </span>
                                    <span class="text-muted-foreground">
                                        Security and control for big teams.
                                    </span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center gap-3 rounded-md p-2 text-sm outline-none transition-colors hover:bg-muted focus:bg-muted">
                                <span class="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
                                    <twig:ux:icon name="lucide:graduation-cap" class="size-4" />
                                </span>
                                <span class="grid gap-0.5">
                                    <span class="leading-none font-medium">
                                        Education
                                    </span>
                                    <span class="text-muted-foreground">
                                        Tools for classrooms and campuses.
                                    </span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Link href="#">
                    Docs
                </twig:NavigationMenu:Link>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
    </twig:NavigationMenu>
</div>
```

### Learn More Button

A footer under the links, separated by a border, with a button that leads to the full section.

```twig
<div class="flex items-start justify-center" style="min-height: 360px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Resources
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-80 gap-1">
                        <a href="#" class="flex flex-col gap-1 rounded-md p-2 text-sm outline-none transition-colors hover:bg-muted focus:bg-muted">
                            <div class="leading-none font-medium">
                                Guides
                            </div>
                            <p class="text-muted-foreground">
                                Step by step walkthroughs.
                            </p>
                        </a>
                        <a href="#" class="flex flex-col gap-1 rounded-md p-2 text-sm outline-none transition-colors hover:bg-muted focus:bg-muted">
                            <div class="leading-none font-medium">
                                API reference
                            </div>
                            <p class="text-muted-foreground">
                                Every endpoint, with examples.
                            </p>
                        </a>
                        <div class="mt-1 flex items-center justify-between gap-3 border-t p-2 pt-3">
                            <p class="text-sm text-muted-foreground">
                                Not sure where to start?
                            </p>
                            <twig:Button as="a" href="#" size="sm" variant="outline">
                                Learn more
                                <twig:ux:icon name="lucide:arrow-right" />
                            </twig:Button>
                        </div>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Link href="#">
                    Blog
                </twig:NavigationMenu:Link>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
    </twig:NavigationMenu>
</div>
```

### Pricing Overview

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Pricing
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-72 gap-1">
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="flex items-center gap-2 leading-none font-medium">
                                Starter
                                <twig:Badge variant="secondary">
                                    Free
                                </twig:Badge>
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                For side projects. Free forever.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="flex items-center gap-2 leading-none font-medium">
                                Team
                                <twig:Badge variant="secondary">
                                    $12
                                </twig:Badge>
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Shared workspaces and roles.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="flex items-center gap-2 leading-none font-medium">
                                Enterprise
                                <twig:Badge variant="secondary">
                                    Custom
                                </twig:Badge>
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                SSO, audit logs and support.
                            </span>
                        </twig:NavigationMenu:Link>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### With Descriptions

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Docs
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-72 gap-1">
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="leading-none font-medium">
                                Introduction
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Start here and learn the basics.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="leading-none font-medium">
                                Installation
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Add the kit to your project.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="leading-none font-medium">
                                Theming
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Change colors, radius and fonts.
                            </span>
                        </twig:NavigationMenu:Link>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Badges

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Product
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-72 gap-1">
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="leading-none font-medium">
                                Dashboard
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Your metrics at a glance.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="flex items-center gap-2 leading-none font-medium">
                                Reports
                                <twig:Badge variant="secondary">
                                    New
                                </twig:Badge>
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Scheduled exports.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="flex items-center gap-2 leading-none font-medium">
                                Automations
                                <twig:Badge variant="secondary">
                                    Beta
                                </twig:Badge>
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Run tasks on events.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="flex items-center gap-2 leading-none font-medium">
                                Labs
                                <twig:Badge variant="secondary">
                                    Soon
                                </twig:Badge>
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Early access features.
                            </span>
                        </twig:NavigationMenu:Link>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Feature Cards

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Features
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-[460px] grid-cols-2 gap-2">
                        <twig:Card class="gap-0 py-0">
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-2! p-4!">
                                <twig:ux:icon name="lucide:zap" class="size-5" />
                                <span class="font-medium">
                                    Fast
                                </span>
                                <span class="text-muted-foreground font-normal">
                                    Instant search and sync.
                                </span>
                            </twig:NavigationMenu:Link>
                        </twig:Card>
                        <twig:Card class="gap-0 py-0">
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-2! p-4!">
                                <twig:ux:icon name="lucide:shield-check" class="size-5" />
                                <span class="font-medium">
                                    Secure
                                </span>
                                <span class="text-muted-foreground font-normal">
                                    Encrypted at rest.
                                </span>
                            </twig:NavigationMenu:Link>
                        </twig:Card>
                        <twig:Card class="gap-0 py-0">
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-2! p-4!">
                                <twig:ux:icon name="lucide:plug" class="size-5" />
                                <span class="font-medium">
                                    Connected
                                </span>
                                <span class="text-muted-foreground font-normal">
                                    200+ integrations.
                                </span>
                            </twig:NavigationMenu:Link>
                        </twig:Card>
                        <twig:Card class="gap-0 py-0">
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-2! p-4!">
                                <twig:ux:icon name="lucide:chart-no-axes-column" class="size-5" />
                                <span class="font-medium">
                                    Insightful
                                </span>
                                <span class="text-muted-foreground font-normal">
                                    Reports that update live.
                                </span>
                            </twig:NavigationMenu:Link>
                        </twig:Card>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Categories

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Categories
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-[420px] grid-cols-2 gap-x-4">
                        <div>
                            <div class="px-2 pb-1 pt-2 text-xs font-medium text-muted-foreground">
                                Design
                            </div>
                            <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2!">
                                <span class="leading-none font-medium">
                                    Typography
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2!">
                                <span class="leading-none font-medium">
                                    Color
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2!">
                                <span class="leading-none font-medium">
                                    Spacing
                                </span>
                            </twig:NavigationMenu:Link>
                        </div>
                        <div>
                            <div class="px-2 pb-1 pt-2 text-xs font-medium text-muted-foreground">
                                Develop
                            </div>
                            <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2!">
                                <span class="leading-none font-medium">
                                    Components
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2!">
                                <span class="leading-none font-medium">
                                    Hooks
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2!">
                                <span class="leading-none font-medium">
                                    Testing
                                </span>
                            </twig:NavigationMenu:Link>
                        </div>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Mixed Content

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Updates
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-[480px] grid-cols-[1fr_1.4fr] gap-3">
                        <twig:Card class="gap-2 bg-muted py-4">
                            <twig:Card:Header>
                                <twig:Card:Title>
                                    Release 2.0
                                </twig:Card:Title>
                                <twig:Card:Description>
                                    Everything new in one place.
                                </twig:Card:Description>
                            </twig:Card:Header>
                            <twig:Card:Footer>
                                <twig:Badge>
                                    What's new
                                </twig:Badge>
                            </twig:Card:Footer>
                        </twig:Card>
                        <div class="grid w-full gap-1">
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                <span class="leading-none font-medium">
                                    Changelog
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    Every release, in order.
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                <span class="leading-none font-medium">
                                    Roadmap
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    What we are building next.
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                <span class="leading-none font-medium">
                                    Status
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    Uptime and incidents.
                                </span>
                            </twig:NavigationMenu:Link>
                        </div>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Grid

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Apps
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-[420px] grid-cols-3 gap-1">
                        <twig:NavigationMenu:Link href="#" class="h-auto! flex-col! gap-2! p-3!">
                            <twig:ux:icon name="lucide:mail" class="size-5" />
                            <span>
                                Mail
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! flex-col! gap-2! p-3!">
                            <twig:ux:icon name="lucide:calendar" class="size-5" />
                            <span>
                                Calendar
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! flex-col! gap-2! p-3!">
                            <twig:ux:icon name="lucide:file-text" class="size-5" />
                            <span>
                                Docs
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! flex-col! gap-2! p-3!">
                            <twig:ux:icon name="lucide:image" class="size-5" />
                            <span>
                                Photos
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! flex-col! gap-2! p-3!">
                            <twig:ux:icon name="lucide:map" class="size-5" />
                            <span>
                                Maps
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! flex-col! gap-2! p-3!">
                            <twig:ux:icon name="lucide:video" class="size-5" />
                            <span>
                                Meet
                            </span>
                        </twig:NavigationMenu:Link>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Multi Level

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Learn
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-[440px] grid-cols-2 gap-4">
                        <div class="flex flex-col gap-1">
                            <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2! font-semibold!">
                                <span class="leading-none font-medium">
                                    Guides
                                </span>
                            </twig:NavigationMenu:Link>
                            <div class="ms-3 flex flex-col gap-1 border-s ps-2">
                                <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2! text-muted-foreground!">
                                    <span class="leading-none font-medium">
                                        Getting started
                                    </span>
                                </twig:NavigationMenu:Link>
                                <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2! text-muted-foreground!">
                                    <span class="leading-none font-medium">
                                        Deployment
                                    </span>
                                </twig:NavigationMenu:Link>
                                <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2! text-muted-foreground!">
                                    <span class="leading-none font-medium">
                                        Upgrading
                                    </span>
                                </twig:NavigationMenu:Link>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2! font-semibold!">
                                <span class="leading-none font-medium">
                                    Reference
                                </span>
                            </twig:NavigationMenu:Link>
                            <div class="ms-3 flex flex-col gap-1 border-s ps-2">
                                <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2! text-muted-foreground!">
                                    <span class="leading-none font-medium">
                                        Components
                                    </span>
                                </twig:NavigationMenu:Link>
                                <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2! text-muted-foreground!">
                                    <span class="leading-none font-medium">
                                        Utilities
                                    </span>
                                </twig:NavigationMenu:Link>
                                <twig:NavigationMenu:Link href="#" class="h-8! w-full! justify-start! p-2! text-muted-foreground!">
                                    <span class="leading-none font-medium">
                                        Events
                                    </span>
                                </twig:NavigationMenu:Link>
                            </div>
                        </div>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Full Mega Menu

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Platform
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-[640px] grid-cols-[1fr_1fr_1fr] gap-4 p-2">
                        <div class="flex flex-col gap-1">
                            <div class="px-2 pb-1 pt-2 text-xs font-medium text-muted-foreground">
                                Build
                            </div>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-0.5! p-2!">
                                <span class="leading-none font-medium">
                                    Components
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    Ready to use
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-0.5! p-2!">
                                <span class="leading-none font-medium">
                                    Blocks
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    Page sections
                                </span>
                            </twig:NavigationMenu:Link>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="px-2 pb-1 pt-2 text-xs font-medium text-muted-foreground">
                                Ship
                            </div>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-0.5! p-2!">
                                <span class="leading-none font-medium">
                                    Deploy
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    One command
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-0.5! p-2!">
                                <span class="leading-none font-medium">
                                    Monitor
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    Alerts and logs
                                </span>
                            </twig:NavigationMenu:Link>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="px-2 pb-1 pt-2 text-xs font-medium text-muted-foreground">
                                Grow
                            </div>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-0.5! p-2!">
                                <span class="leading-none font-medium">
                                    Analytics
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    Funnels
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-0.5! p-2!">
                                <span class="leading-none font-medium">
                                    Experiments
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    A/B tests
                                </span>
                            </twig:NavigationMenu:Link>
                        </div>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Tabbed Mega Menu

<!-- height: 460 -->
```twig
<div class="flex items-start justify-center" style="min-height: 420px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Resources
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <twig:Tabs defaultValue="design" class="w-[520px]">
                        <twig:Tabs:List>
                            <twig:Tabs:Trigger value="design">
                                Design
                            </twig:Tabs:Trigger>
                            <twig:Tabs:Trigger value="code">
                                Code
                            </twig:Tabs:Trigger>
                        </twig:Tabs:List>
                        <twig:Tabs:Content value="design">
                            <div class="grid w-full gap-1">
                                <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                    <span class="leading-none font-medium">
                                        Figma kit
                                    </span>
                                    <span class="line-clamp-2 text-muted-foreground font-normal">
                                        Every component, as variants.
                                    </span>
                                </twig:NavigationMenu:Link>
                                <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                    <span class="leading-none font-medium">
                                        Icons
                                    </span>
                                    <span class="line-clamp-2 text-muted-foreground font-normal">
                                        Lucide, 1,400+ icons.
                                    </span>
                                </twig:NavigationMenu:Link>
                            </div>
                        </twig:Tabs:Content>
                        <twig:Tabs:Content value="code">
                            <div class="grid w-full gap-1">
                                <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                    <span class="leading-none font-medium">
                                        CLI
                                    </span>
                                    <span class="line-clamp-2 text-muted-foreground font-normal">
                                        Install a component in one command.
                                    </span>
                                </twig:NavigationMenu:Link>
                                <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                    <span class="leading-none font-medium">
                                        Recipes
                                    </span>
                                    <span class="line-clamp-2 text-muted-foreground font-normal">
                                        Copy-paste Twig templates.
                                    </span>
                                </twig:NavigationMenu:Link>
                            </div>
                        </twig:Tabs:Content>
                    </twig:Tabs>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Resources

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Resources
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-80 gap-1">
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! justify-start! gap-3! p-2!">
                            <twig:IconTile>
                                <twig:ux:icon name="lucide:book-open" />
                            </twig:IconTile>
                            <span class="flex flex-col gap-1">
                                <span class="leading-none font-medium">
                                    Documentation
                                </span>
                                <span class="text-muted-foreground font-normal">
                                    Guides and API reference.
                                </span>
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! justify-start! gap-3! p-2!">
                            <twig:IconTile>
                                <twig:ux:icon name="lucide:users" />
                            </twig:IconTile>
                            <span class="flex flex-col gap-1">
                                <span class="leading-none font-medium">
                                    Community
                                </span>
                                <span class="text-muted-foreground font-normal">
                                    Ask questions, share tips.
                                </span>
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! justify-start! gap-3! p-2!">
                            <twig:IconTile>
                                <twig:ux:icon name="lucide:newspaper" />
                            </twig:IconTile>
                            <span class="flex flex-col gap-1">
                                <span class="leading-none font-medium">
                                    Blog
                                </span>
                                <span class="text-muted-foreground font-normal">
                                    News and release notes.
                                </span>
                            </span>
                        </twig:NavigationMenu:Link>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Sections With Headings

<!-- height: 470 -->
```twig
<div class="flex items-start justify-center" style="min-height: 430px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Help
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="w-72">
                        <div class="px-2 pb-1 pt-2 text-xs font-medium text-muted-foreground">
                            Learn
                        </div>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="leading-none font-medium">
                                Tutorials
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Step by step.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="leading-none font-medium">
                                Guides
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Deep dives.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:Separator class="my-1" />
                        <div class="px-2 pb-1 pt-2 text-xs font-medium text-muted-foreground">
                            Support
                        </div>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="leading-none font-medium">
                                Help center
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Find an answer.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="leading-none font-medium">
                                Contact
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Talk to a person.
                            </span>
                        </twig:NavigationMenu:Link>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Solutions By Industry

<!-- height: 480 -->
```twig
<div class="flex items-start justify-center" style="min-height: 440px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Solutions
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-80 gap-1">
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! justify-start! gap-3! p-2!">
                            <twig:IconTile>
                                <twig:ux:icon name="lucide:shopping-bag" />
                            </twig:IconTile>
                            <span class="flex flex-col gap-1">
                                <span class="leading-none font-medium">
                                    Retail
                                </span>
                                <span class="text-muted-foreground font-normal">
                                    Inventory and checkout.
                                </span>
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! justify-start! gap-3! p-2!">
                            <twig:IconTile>
                                <twig:ux:icon name="lucide:heart-pulse" />
                            </twig:IconTile>
                            <span class="flex flex-col gap-1">
                                <span class="leading-none font-medium">
                                    Healthcare
                                </span>
                                <span class="text-muted-foreground font-normal">
                                    Secure patient records.
                                </span>
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! justify-start! gap-3! p-2!">
                            <twig:IconTile>
                                <twig:ux:icon name="lucide:landmark" />
                            </twig:IconTile>
                            <span class="flex flex-col gap-1">
                                <span class="leading-none font-medium">
                                    Finance
                                </span>
                                <span class="text-muted-foreground font-normal">
                                    Audit-ready reporting.
                                </span>
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! justify-start! gap-3! p-2!">
                            <twig:IconTile>
                                <twig:ux:icon name="lucide:graduation-cap" />
                            </twig:IconTile>
                            <span class="flex flex-col gap-1">
                                <span class="leading-none font-medium">
                                    Education
                                </span>
                                <span class="text-muted-foreground font-normal">
                                    Classrooms and grading.
                                </span>
                            </span>
                        </twig:NavigationMenu:Link>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Dashboard With Stats

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Analytics
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-[460px] grid-cols-[1fr_12rem] gap-3">
                        <div class="grid w-full gap-1">
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                <span class="leading-none font-medium">
                                    Overview
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    Live numbers.
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                <span class="leading-none font-medium">
                                    Reports
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    Weekly summaries.
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                <span class="leading-none font-medium">
                                    Alerts
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    Thresholds and rules.
                                </span>
                            </twig:NavigationMenu:Link>
                        </div>
                        <twig:Card class="gap-1 py-4">
                            <twig:Card:Content class="flex flex-col gap-1">
                                <span class="text-xs text-muted-foreground">
                                    Active users
                                </span>
                                <span class="text-2xl font-semibold">
                                    12,480
                                </span>
                                <twig:Badge variant="secondary" class="w-fit">
                                    +8.2%
                                </twig:Badge>
                            </twig:Card:Content>
                        </twig:Card>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Product Showcase

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Product
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-[480px] grid-cols-2 gap-3">
                        <twig:Card class="overflow-hidden gap-0 py-0">
                            <twig:Skeleton class="aspect-video w-full rounded-none" />
                            <twig:Card:Content class="flex flex-col gap-2 py-3">
                                <span class="font-medium">
                                    Pro plan
                                </span>
                                <twig:Button size="sm">
                                    Try for free
                                </twig:Button>
                            </twig:Card:Content>
                        </twig:Card>
                        <div class="grid w-full gap-1">
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                <span class="leading-none font-medium">
                                    Overview
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    What is included.
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                <span class="leading-none font-medium">
                                    Compare plans
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    Side by side.
                                </span>
                            </twig:NavigationMenu:Link>
                            <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                                <span class="leading-none font-medium">
                                    Customers
                                </span>
                                <span class="line-clamp-2 text-muted-foreground font-normal">
                                    Who uses it.
                                </span>
                            </twig:NavigationMenu:Link>
                        </div>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

### Case Studies

<!-- height: 420 -->
```twig
<div class="flex items-start justify-center" style="min-height: 380px">
    <twig:NavigationMenu>
        <twig:NavigationMenu:List>
            <twig:NavigationMenu:Item>
                <twig:NavigationMenu:Trigger>
                    Customers
                </twig:NavigationMenu:Trigger>
                <twig:NavigationMenu:Content>
                    <div class="grid w-80 gap-1">
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="flex items-center gap-2 leading-none font-medium">
                                Acme
                                <twig:Badge variant="secondary">
                                    Retail
                                </twig:Badge>
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Cut support time by 40%.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="flex items-center gap-2 leading-none font-medium">
                                Globex
                                <twig:Badge variant="secondary">
                                    Logistics
                                </twig:Badge>
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Shipped in six weeks.
                            </span>
                        </twig:NavigationMenu:Link>
                        <twig:NavigationMenu:Link href="#" class="h-auto! w-full! flex-col items-start! justify-start! gap-1! p-2!">
                            <span class="flex items-center gap-2 leading-none font-medium">
                                Initech
                                <twig:Badge variant="secondary">
                                    Finance
                                </twig:Badge>
                            </span>
                            <span class="line-clamp-2 text-muted-foreground font-normal">
                                Moved 2M records safely.
                            </span>
                        </twig:NavigationMenu:Link>
                    </div>
                </twig:NavigationMenu:Content>
            </twig:NavigationMenu:Item>
        </twig:NavigationMenu:List>
</div>
```

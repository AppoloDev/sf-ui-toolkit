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

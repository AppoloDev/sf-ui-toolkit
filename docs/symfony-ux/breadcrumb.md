# Breadcrumb

## Examples

### Dropdown

Compose a `Breadcrumb:Item` with a `DropdownMenu` to open a menu from one of the crumbs.

```twig
<div style="min-height: 220px">
    <twig:Breadcrumb>
        <twig:Breadcrumb:List>
            <twig:Breadcrumb:Item>
                <twig:Breadcrumb:Link href="#">
                    Home
                </twig:Breadcrumb:Link>
            </twig:Breadcrumb:Item>
            <twig:Breadcrumb:Separator>
                <twig:ux:icon name="lucide:dot" />
            </twig:Breadcrumb:Separator>
            <twig:Breadcrumb:Item>
                <twig:DropdownMenu id="breadcrumb-dropdown">
                    <twig:DropdownMenu:Trigger>
                        <twig:Button variant="link" class="h-auto gap-1 p-0 font-normal text-muted-foreground hover:text-foreground" {{ ...dropdown_menu_trigger_attrs }}>
                            Components
                            <twig:ux:icon name="lucide:chevron-down" class="size-3.5" />
                        </twig:Button>
                    </twig:DropdownMenu:Trigger>
                    <twig:DropdownMenu:Content align="start">
                        <twig:DropdownMenu:Group>
                            <twig:DropdownMenu:Item>
                                Documentation
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Item>
                                Themes
                            </twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Item>
                                GitHub
                            </twig:DropdownMenu:Item>
                        </twig:DropdownMenu:Group>
                    </twig:DropdownMenu:Content>
                </twig:DropdownMenu>
            </twig:Breadcrumb:Item>
            <twig:Breadcrumb:Separator>
                <twig:ux:icon name="lucide:dot" />
            </twig:Breadcrumb:Separator>
            <twig:Breadcrumb:Item>
                <twig:Breadcrumb:Page>
                    Breadcrumb
                </twig:Breadcrumb:Page>
            </twig:Breadcrumb:Item>
        </twig:Breadcrumb:List>
    </twig:Breadcrumb>
</div>
```

### Dropdown Menu

Fold middle levels into an ellipsis menu.

```twig
<div style="min-height: 220px">
    <twig:Breadcrumb>
        <twig:Breadcrumb:List>
            <twig:Breadcrumb:Item>
                <twig:Breadcrumb:Link href="#">
                    Home
                </twig:Breadcrumb:Link>
            </twig:Breadcrumb:Item>
            <twig:Breadcrumb:Separator />
            <twig:Breadcrumb:Item>
                <twig:DropdownMenu id="bc-ellipsis">
                    <twig:DropdownMenu:Trigger>
                        <twig:Button variant="ghost" size="icon-sm" aria-label="Show hidden pages" {{ ...dropdown_menu_trigger_attrs }}>
                            <twig:Breadcrumb:Ellipsis />
                        </twig:Button>
                    </twig:DropdownMenu:Trigger>
                    <twig:DropdownMenu:Content align="start">
                        <twig:DropdownMenu:Item>
                            Documentation
                        </twig:DropdownMenu:Item>
                        <twig:DropdownMenu:Item>
                            Themes
                        </twig:DropdownMenu:Item>
                        <twig:DropdownMenu:Item>
                            GitHub
                        </twig:DropdownMenu:Item>
                    </twig:DropdownMenu:Content>
                </twig:DropdownMenu>
            </twig:Breadcrumb:Item>
            <twig:Breadcrumb:Separator />
            <twig:Breadcrumb:Item>
                <twig:Breadcrumb:Page>
                    Breadcrumb
                </twig:Breadcrumb:Page>
            </twig:Breadcrumb:Item>
        </twig:Breadcrumb:List>
    </twig:Breadcrumb>
</div>
```

### Slash Separator

```twig
<twig:Breadcrumb>
    <twig:Breadcrumb:List>
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Link href="#">
                Home
            </twig:Breadcrumb:Link>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator>
            /
        </twig:Breadcrumb:Separator>
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Link href="#">
                Components
            </twig:Breadcrumb:Link>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator>
            /
        </twig:Breadcrumb:Separator>
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Page>
                Breadcrumb
            </twig:Breadcrumb:Page>
        </twig:Breadcrumb:Item>
    </twig:Breadcrumb:List>
</twig:Breadcrumb>
```

### Item Icons

```twig
<twig:Breadcrumb>
    <twig:Breadcrumb:List>
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Link href="#" class="flex items-center gap-1.5">
                <twig:ux:icon name="lucide:house" class="size-4" />
                Home
            </twig:Breadcrumb:Link>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Link href="#" class="flex items-center gap-1.5">
                <twig:ux:icon name="lucide:folder" class="size-4" />
                Projects
            </twig:Breadcrumb:Link>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Page class="flex items-center gap-1.5">
                <twig:ux:icon name="lucide:file" class="size-4" />
                Report
            </twig:Breadcrumb:Page>
        </twig:Breadcrumb:Item>
    </twig:Breadcrumb:List>
</twig:Breadcrumb>
```

### Static Ellipsis

```twig
<twig:Breadcrumb>
    <twig:Breadcrumb:List>
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Link href="#">
                Home
            </twig:Breadcrumb:Link>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Ellipsis />
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Page>
                Current page
            </twig:Breadcrumb:Page>
        </twig:Breadcrumb:Item>
    </twig:Breadcrumb:List>
</twig:Breadcrumb>
```

### Avatars

```twig
<twig:Breadcrumb>
    <twig:Breadcrumb:List>
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Link href="#" class="flex items-center gap-1.5">
                <twig:Avatar size="sm">
                    <twig:Avatar:Image src="https://github.com/vercel.png" alt="Vercel" />
                    <twig:Avatar:Fallback>
                        V
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                Vercel
            </twig:Breadcrumb:Link>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Link href="#" class="flex items-center gap-1.5">
                <twig:Avatar size="sm">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                shadcn
            </twig:Breadcrumb:Link>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Page>
                Settings
            </twig:Breadcrumb:Page>
        </twig:Breadcrumb:Item>
    </twig:Breadcrumb:List>
</twig:Breadcrumb>
```

### In Card

```twig
<twig:Card class="max-w-md py-3">
    <twig:Card:Content>
        <twig:Breadcrumb>
            <twig:Breadcrumb:List>
                <twig:Breadcrumb:Item>
                    <twig:Breadcrumb:Link href="#">
                        <twig:ux:icon name="lucide:house" class="size-4" />
                        <span class="sr-only">
                            Home
                        </span>
                    </twig:Breadcrumb:Link>
                </twig:Breadcrumb:Item>
                <twig:Breadcrumb:Separator />
                <twig:Breadcrumb:Item>
                    <twig:Breadcrumb:Link href="#">
                        Settings
                    </twig:Breadcrumb:Link>
                </twig:Breadcrumb:Item>
                <twig:Breadcrumb:Separator />
                <twig:Breadcrumb:Item>
                    <twig:Breadcrumb:Page class="font-semibold">
                        Profile
                    </twig:Breadcrumb:Page>
                </twig:Breadcrumb:Item>
            </twig:Breadcrumb:List>
        </twig:Breadcrumb>
    </twig:Card:Content>
</twig:Card>
```

### Count Badge

```twig
<twig:Breadcrumb>
    <twig:Breadcrumb:List>
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Link href="#">
                Mail
            </twig:Breadcrumb:Link>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Link href="#" class="flex items-center gap-1.5">
                Inbox
                <twig:Badge variant="secondary">
                    3
                </twig:Badge>
            </twig:Breadcrumb:Link>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Page>
                Welcome
            </twig:Breadcrumb:Page>
        </twig:Breadcrumb:Item>
    </twig:Breadcrumb:List>
</twig:Breadcrumb>
```

### Home Icon Button

```twig
<twig:Breadcrumb>
    <twig:Breadcrumb:List>
        <twig:Breadcrumb:Item>
            <twig:Button as="a" href="#" variant="outline" size="icon-sm">
                <twig:ux:icon name="lucide:house" />
                <span class="sr-only">
                    Home
                </span>
            </twig:Button>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Link href="#">
                Projects
            </twig:Breadcrumb:Link>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Breadcrumb:Page>
                Overview
            </twig:Breadcrumb:Page>
        </twig:Breadcrumb:Item>
    </twig:Breadcrumb:List>
</twig:Breadcrumb>
```

### Button Style

```twig
<twig:Breadcrumb>
    <twig:Breadcrumb:List class="gap-1">
        <twig:Breadcrumb:Item>
            <twig:Button as="a" href="#" variant="ghost" size="sm">
                <twig:ux:icon name="lucide:house" />
                Home
            </twig:Button>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Button as="a" href="#" variant="ghost" size="sm">
                <twig:ux:icon name="lucide:folder" />
                Projects
            </twig:Button>
        </twig:Breadcrumb:Item>
        <twig:Breadcrumb:Separator />
        <twig:Breadcrumb:Item>
            <twig:Button variant="secondary" size="sm" aria-current="page">
                <twig:ux:icon name="lucide:file" />
                Report
            </twig:Button>
        </twig:Breadcrumb:Item>
    </twig:Breadcrumb:List>
</twig:Breadcrumb>
```


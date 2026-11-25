# Collapsible

## Examples

### Checkbox Settings

```twig
<twig:Collapsible open class="w-full max-w-sm">
    <twig:Collapsible:Trigger>
        <twig:Button variant="outline" class="w-full justify-between" {{ ...collapsible_trigger_attrs }}>
            Notification channels
            <twig:ux:icon name="lucide:chevrons-up-down" />
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content>
        <twig:Card class="mt-2">
            <twig:Card:Content class="grid gap-3">
                <twig:Field orientation="horizontal">
                    <twig:Checkbox id="col-email" checked="1" />
                    <twig:Field:Label for="col-email" class="font-normal capitalize">
                        email
                    </twig:Field:Label>
                </twig:Field>
                <twig:Field orientation="horizontal">
                    <twig:Checkbox id="col-sms" checked="" />
                    <twig:Field:Label for="col-sms" class="font-normal capitalize">
                        sms
                    </twig:Field:Label>
                </twig:Field>
                <twig:Field orientation="horizontal">
                    <twig:Checkbox id="col-push" checked="1" />
                    <twig:Field:Label for="col-push" class="font-normal capitalize">
                        push
                    </twig:Field:Label>
                </twig:Field>
            </twig:Card:Content>
        </twig:Card>
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### Form Fields

```twig
<twig:Collapsible class="w-full max-w-sm">
    <div class="flex items-center gap-2">
        <twig:Input value="$120.00" aria-label="Price" />
        <twig:Collapsible:Trigger>
            <twig:Button variant="outline" size="icon" aria-label="More options" {{ ...collapsible_trigger_attrs }}>
                <twig:ux:icon name="lucide:sliders-horizontal" />
            </twig:Button>
        </twig:Collapsible:Trigger>
    </div>
    <twig:Collapsible:Content class="mt-2 grid gap-2">
        <twig:Input placeholder="Tax rate (%)" />
        <twig:Input placeholder="Discount (%)" />
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### User Profile

```twig
<twig:Collapsible class="w-full max-w-xs rounded-lg border p-3">
    <twig:Collapsible:Trigger>
        <twig:Button variant="ghost" class="h-auto w-full justify-start gap-2 p-0 text-sm hover:bg-transparent" {{ ...collapsible_trigger_attrs }}>
            <twig:Avatar size="sm">
                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                <twig:Avatar:Fallback>
                    CN
                </twig:Avatar:Fallback>
            </twig:Avatar>
            @shadcn
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content class="mt-3 grid gap-1 text-xs text-muted-foreground">
        <p>
            Last activity: 2 hours ago
        </p>
        <p>
            Online since 09:12
        </p>
        <p>
            Location: 🇫🇷 France
        </p>
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### In Card

```twig
<twig:Collapsible class="w-full max-w-sm">
    <twig:Card>
        <twig:Collapsible:Trigger>
            <twig:Card:Header class="cursor-pointer" {{ ...collapsible_trigger_attrs }}>
                <twig:Card:Title>
                    How do I reset my password?
                </twig:Card:Title>
            </twig:Card:Header>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content>
            <twig:Card:Content class="text-sm text-muted-foreground">
                Use the Forgot password link on the sign in page.
            </twig:Card:Content>
        </twig:Collapsible:Content>
    </twig:Card>
</twig:Collapsible>
```


### Card Section

```twig
<twig:Collapsible class="w-full max-w-sm">
    <twig:Card>
        <twig:Collapsible:Trigger>
            <twig:Card:Header class="cursor-pointer" {{ ...collapsible_trigger_attrs }}>
                <twig:Card:Title class="flex items-center gap-2">
                    Shipping details
                </twig:Card:Title>
                <twig:Card:Description>
                    Delivery options and times
                </twig:Card:Description>
            </twig:Card:Header>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content>
            <twig:Card:Content>
                <p class="text-sm text-muted-foreground">
                    Standard delivery takes 3 to 5 days.
                </p>
            </twig:Card:Content>
        </twig:Collapsible:Content>
    </twig:Card>
</twig:Collapsible>
```

### Card With Header Icon

```twig
<twig:Collapsible class="w-full max-w-sm">
    <twig:Card>
        <twig:Collapsible:Trigger>
            <twig:Card:Header class="cursor-pointer" {{ ...collapsible_trigger_attrs }}>
                <twig:Card:Title class="flex items-center gap-2">
                    <twig:ux:icon name="lucide:shield-check" class="size-4 text-muted-foreground" />
                    Security
                </twig:Card:Title>
                <twig:Card:Description>
                    Passwords and sessions
                </twig:Card:Description>
            </twig:Card:Header>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content>
            <twig:Card:Content>
                <p class="text-sm text-muted-foreground">
                    Two-factor authentication is enabled.
                </p>
            </twig:Card:Content>
        </twig:Collapsible:Content>
    </twig:Card>
</twig:Collapsible>
```

### Card With Nested Content

```twig
<twig:Collapsible class="w-full max-w-sm">
    <twig:Card>
        <twig:Collapsible:Trigger>
            <twig:Card:Header class="cursor-pointer" {{ ...collapsible_trigger_attrs }}>
                <twig:Card:Title class="flex items-center gap-2">
                    Projects
                </twig:Card:Title>
                <twig:Card:Description>
                    Your active projects
                </twig:Card:Description>
            </twig:Card:Header>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content>
            <twig:Card:Content>
                <div class="grid gap-2">
                    <twig:Item variant="outline" size="sm">
                        <twig:Item:Content>
                            <twig:Item:Title>
                                Website redesign
                            </twig:Item:Title>
                        </twig:Item:Content>
                    </twig:Item>
                    <twig:Item variant="outline" size="sm">
                        <twig:Item:Content>
                            <twig:Item:Title>
                                Mobile app
                            </twig:Item:Title>
                        </twig:Item:Content>
                    </twig:Item>
                    <twig:Item variant="outline" size="sm">
                        <twig:Item:Content>
                            <twig:Item:Title>
                                Docs refresh
                            </twig:Item:Title>
                        </twig:Item:Content>
                    </twig:Item>
                </div>
            </twig:Card:Content>
        </twig:Collapsible:Content>
    </twig:Card>
</twig:Collapsible>
```

### Card With Badge

```twig
<twig:Collapsible class="w-full max-w-sm">
    <twig:Card>
        <twig:Collapsible:Trigger>
            <twig:Card:Header class="cursor-pointer" {{ ...collapsible_trigger_attrs }}>
                <twig:Card:Title class="flex items-center gap-2">
                    Beta features
                    <twig:Badge variant="secondary">
                        New
                    </twig:Badge>
                </twig:Card:Title>
                <twig:Card:Description>
                    Try new things early
                </twig:Card:Description>
            </twig:Card:Header>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content>
            <twig:Card:Content>
                <p class="text-sm text-muted-foreground">
                    Beta features can change without notice.
                </p>
            </twig:Card:Content>
        </twig:Collapsible:Content>
    </twig:Card>
</twig:Collapsible>
```

### Card Subtle

```twig
<twig:Collapsible class="w-full max-w-sm [&_[data-slot=card]]:border-0 [&_[data-slot=card]]:bg-muted/40 [&_[data-slot=card]]:shadow-none [&_[data-slot=card]]:ring-0">
    <twig:Card>
        <twig:Collapsible:Trigger>
            <twig:Card:Header class="cursor-pointer" {{ ...collapsible_trigger_attrs }}>
                <twig:Card:Title class="flex items-center gap-2">
                    Advanced options
                </twig:Card:Title>
            </twig:Card:Header>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content>
            <twig:Card:Content>
                <p class="text-sm text-muted-foreground">
                    Rarely needed settings live here.
                </p>
            </twig:Card:Content>
        </twig:Collapsible:Content>
    </twig:Card>
</twig:Collapsible>
```

### Single FAQ Item

```twig
<twig:Collapsible class="w-full max-w-md">
    <twig:Collapsible:Trigger>
        <twig:Button variant="ghost" class="h-auto w-full justify-between py-2 text-start" {{ ...collapsible_trigger_attrs }}>
            <span class="font-medium">
                How do I reset my password?
            </span>
            <twig:ux:icon name="lucide:chevron-down" class="size-4 text-muted-foreground transition-transform [[aria-expanded=true]>&]:rotate-180" />
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content class="px-2.5 pb-2">
        <p class="text-sm text-muted-foreground">
            Use the Forgot password link on the sign in page, then check your inbox.
        </p>
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### FAQ With Icon

```twig
<twig:Collapsible class="w-full max-w-md">
    <twig:Collapsible:Trigger>
        <twig:Button variant="ghost" class="h-auto w-full justify-between py-2 text-start" {{ ...collapsible_trigger_attrs }}>
            <twig:ux:icon name="lucide:circle-help" class="size-4 text-muted-foreground me-2 shrink-0" />
            <span class="font-medium">
                How do I reset my password?
            </span>
            <twig:ux:icon name="lucide:chevron-down" class="size-4 text-muted-foreground transition-transform [[aria-expanded=true]>&]:rotate-180" />
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content class="px-2.5 pb-2">
        <p class="text-sm text-muted-foreground">
            Use the Forgot password link on the sign in page, then check your inbox.
        </p>
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### FAQ Cards

```twig
<div class="grid w-full max-w-md gap-2">
    <twig:Collapsible class="w-full">
        <twig:Card>
            <twig:Collapsible:Trigger>
                <twig:Card:Header class="cursor-pointer" {{ ...collapsible_trigger_attrs }}>
                    <twig:Card:Title class="flex items-center gap-2">
                        How do I reset my password?
                    </twig:Card:Title>
                </twig:Card:Header>
            </twig:Collapsible:Trigger>
            <twig:Collapsible:Content>
                <twig:Card:Content>
                    <p class="text-sm text-muted-foreground">
                        Use the Forgot password link on the sign in page, then check your inbox.
                    </p>
                </twig:Card:Content>
            </twig:Collapsible:Content>
        </twig:Card>
    </twig:Collapsible>
    <twig:Collapsible class="w-full">
        <twig:Card>
            <twig:Collapsible:Trigger>
                <twig:Card:Header class="cursor-pointer" {{ ...collapsible_trigger_attrs }}>
                    <twig:Card:Title class="flex items-center gap-2">
                        Can I change my plan?
                    </twig:Card:Title>
                </twig:Card:Header>
            </twig:Collapsible:Trigger>
            <twig:Collapsible:Content>
                <twig:Card:Content>
                    <p class="text-sm text-muted-foreground">
                        Yes, at any time from your account.
                    </p>
                </twig:Card:Content>
            </twig:Collapsible:Content>
        </twig:Card>
    </twig:Collapsible>
</div>
```

### Numbered FAQ

```twig
<div class="grid w-full max-w-md gap-1">
    <twig:Collapsible class="w-full max-w-md">
        <twig:Collapsible:Trigger>
            <twig:Button variant="ghost" class="h-auto w-full justify-between py-2 text-start" {{ ...collapsible_trigger_attrs }}>
                <span class="me-3 font-mono text-xs text-muted-foreground">
                    01
                </span>
                <span class="font-medium">
                    How do I reset my password?
                </span>
                <twig:ux:icon name="lucide:chevron-down" class="size-4 text-muted-foreground transition-transform [[aria-expanded=true]>&]:rotate-180" />
            </twig:Button>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content class="px-2.5 pb-2">
            <p class="text-sm text-muted-foreground">
                Use the Forgot password link on the sign in page, then check your inbox.
            </p>
        </twig:Collapsible:Content>
    </twig:Collapsible>
    <twig:Collapsible class="w-full max-w-md">
        <twig:Collapsible:Trigger>
            <twig:Button variant="ghost" class="h-auto w-full justify-between py-2 text-start" {{ ...collapsible_trigger_attrs }}>
                <span class="me-3 font-mono text-xs text-muted-foreground">
                    02
                </span>
                <span class="font-medium">
                    Can I change my plan?
                </span>
                <twig:ux:icon name="lucide:chevron-down" class="size-4 text-muted-foreground transition-transform [[aria-expanded=true]>&]:rotate-180" />
            </twig:Button>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content class="px-2.5 pb-2">
            <p class="text-sm text-muted-foreground">
                Yes, at any time from your account.
            </p>
        </twig:Collapsible:Content>
    </twig:Collapsible>
</div>
```

### FAQ With Badge

```twig
<twig:Collapsible class="w-full max-w-md">
    <twig:Collapsible:Trigger>
        <twig:Button variant="ghost" class="h-auto w-full justify-between py-2 text-start" {{ ...collapsible_trigger_attrs }}>
            <twig:Badge variant="secondary" class="me-2">
                Popular
            </twig:Badge>
            <span class="font-medium">
                Is there a free plan?
            </span>
            <twig:ux:icon name="lucide:chevron-down" class="size-4 text-muted-foreground transition-transform [[aria-expanded=true]>&]:rotate-180" />
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content class="px-2.5 pb-2">
        <p class="text-sm text-muted-foreground">
            Yes, the Free plan has no time limit.
        </p>
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### Outlined

```twig
<twig:Collapsible open class="w-full max-w-sm rounded-lg border  p-3">
    <twig:Collapsible:Trigger>
        <twig:Button variant="ghost" class="h-auto w-full justify-between gap-2 p-0 hover:bg-transparent" {{ ...collapsible_trigger_attrs }}>
            <span class="flex items-center gap-2">
                Release notes
            </span>
            <twig:ux:icon name="lucide:chevrons-up-down" class="size-4 text-muted-foreground" />
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content class="pt-2 text-sm">
        Version 2.1 adds shared views and a faster search.
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### Outlined Warning

```twig
<twig:Collapsible open class="w-full max-w-sm rounded-lg border border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-400 p-3">
    <twig:Collapsible:Trigger>
        <twig:Button variant="ghost" class="h-auto w-full justify-between gap-2 p-0 hover:bg-transparent" {{ ...collapsible_trigger_attrs }}>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:triangle-alert" class="size-4" />
                Heads up
            </span>
            <twig:ux:icon name="lucide:chevrons-up-down" class="size-4 text-muted-foreground" />
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content class="pt-2 text-sm">
        This action affects every member of the workspace.
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### Outlined Info Box

```twig
<twig:Collapsible open class="w-full max-w-sm rounded-lg border border-sky-500/50 bg-sky-500/10 text-sky-700 dark:text-sky-400 p-3">
    <twig:Collapsible:Trigger>
        <twig:Button variant="ghost" class="h-auto w-full justify-between gap-2 p-0 hover:bg-transparent" {{ ...collapsible_trigger_attrs }}>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:info" class="size-4" />
                Good to know
            </span>
            <twig:ux:icon name="lucide:chevrons-up-down" class="size-4 text-muted-foreground" />
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content class="pt-2 text-sm">
        You can change this later in Settings.
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### Outlined Dashed

```twig
<twig:Collapsible open class="w-full max-w-sm rounded-lg border border-dashed p-3">
    <twig:Collapsible:Trigger>
        <twig:Button variant="ghost" class="h-auto w-full justify-between gap-2 p-0 hover:bg-transparent" {{ ...collapsible_trigger_attrs }}>
            <span class="flex items-center gap-2">
                <twig:ux:icon name="lucide:folder" class="size-4" />
                More options
            </span>
            <twig:ux:icon name="lucide:chevrons-up-down" class="size-4 text-muted-foreground" />
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content class="pt-2 text-sm">
        Extra options appear here.
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### Sidebar Nested Items

```twig
<nav class="grid w-60 gap-1 rounded-lg border p-2" aria-label="Sidebar">
    <twig:Collapsible open>
        <twig:Collapsible:Trigger>
            <twig:Button variant="ghost" size="sm" class="w-full justify-start" {{ ...collapsible_trigger_attrs }}>
                <twig:ux:icon name="lucide:folder" class="size-4" />
                Projects
                <twig:ux:icon name="lucide:chevron-right" class="ms-auto size-4 text-muted-foreground transition-transform [[aria-expanded=true]>&]:rotate-90" />
            </twig:Button>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content class="ms-4 border-s ps-2">
            <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                <span>
                    Website
                </span>
            </a>
            <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                <span>
                    Mobile app
                </span>
            </a>
            <twig:Collapsible>
                <twig:Collapsible:Trigger>
                    <twig:Button variant="ghost" size="sm" class="w-full justify-start" {{ ...collapsible_trigger_attrs }}>
                        Archive
                        <twig:ux:icon name="lucide:chevron-right" class="ms-auto size-4 text-muted-foreground transition-transform [[aria-expanded=true]>&]:rotate-90" />
                    </twig:Button>
                </twig:Collapsible:Trigger>
                <twig:Collapsible:Content class="ms-4 border-s ps-2">
                    <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                        <span>
                            2025
                        </span>
                    </a>
                    <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                        <span>
                            2024
                        </span>
                    </a>
                </twig:Collapsible:Content>
            </twig:Collapsible>
        </twig:Collapsible:Content>
    </twig:Collapsible>
</nav>
```

### Sidebar Settings Menu

```twig
<nav class="grid w-60 gap-1 rounded-lg border p-2" aria-label="Sidebar">
    <twig:Collapsible open>
        <twig:Collapsible:Trigger>
            <twig:Button variant="ghost" size="sm" class="w-full justify-start" {{ ...collapsible_trigger_attrs }}>
                <twig:ux:icon name="lucide:settings" class="size-4" />
                Settings
                <twig:ux:icon name="lucide:chevron-right" class="ms-auto size-4 text-muted-foreground transition-transform [[aria-expanded=true]>&]:rotate-90" />
            </twig:Button>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content class="ms-4 border-s ps-2">
            <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                <span>
                    Profile
                </span>
            </a>
            <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                <span>
                    Billing
                </span>
            </a>
            <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                <span>
                    Team
                </span>
            </a>
            <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                <span>
                    Integrations
                </span>
            </a>
        </twig:Collapsible:Content>
    </twig:Collapsible>
</nav>
```

### Sidebar Items With Counts

```twig
<nav class="grid w-60 gap-1 rounded-lg border p-2" aria-label="Sidebar">
    <twig:Collapsible open>
        <twig:Collapsible:Trigger>
            <twig:Button variant="ghost" size="sm" class="w-full justify-start" {{ ...collapsible_trigger_attrs }}>
                <twig:ux:icon name="lucide:inbox" class="size-4" />
                Inbox
                <twig:ux:icon name="lucide:chevron-right" class="ms-auto size-4 text-muted-foreground transition-transform [[aria-expanded=true]>&]:rotate-90" />
            </twig:Button>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content class="ms-4 border-s ps-2">
            <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                <span>
                    Unread
                </span>
                <twig:Badge variant="secondary">
                    12
                </twig:Badge>
            </a>
            <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                <span>
                    Starred
                </span>
                <twig:Badge variant="secondary">
                    3
                </twig:Badge>
            </a>
            <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                <span>
                    Drafts
                </span>
                <twig:Badge variant="secondary">
                    1
                </twig:Badge>
            </a>
        </twig:Collapsible:Content>
    </twig:Collapsible>
</nav>
```

### Sidebar Minimal Group

```twig
<nav class="grid w-60 gap-1 rounded-lg border p-2" aria-label="Sidebar">
    <div class="px-2 pt-1 text-xs font-medium text-muted-foreground">
        Workspace
    </div>
    <twig:Collapsible open>
        <twig:Collapsible:Trigger>
            <twig:Button variant="ghost" size="sm" class="w-full justify-start" {{ ...collapsible_trigger_attrs }}>
                Documents
                <twig:ux:icon name="lucide:chevron-right" class="ms-auto size-4 text-muted-foreground transition-transform [[aria-expanded=true]>&]:rotate-90" />
            </twig:Button>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content class="ms-4 border-s ps-2">
            <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                <span>
                    Notes
                </span>
            </a>
            <a href="#" class="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                <span>
                    Files
                </span>
            </a>
        </twig:Collapsible:Content>
    </twig:Collapsible>
</nav>
```

### Basic Collapsible

```twig
<twig:Collapsible class="w-full max-w-sm">
    <twig:Collapsible:Trigger>
        <twig:Button variant="outline" class="w-fit" {{ ...collapsible_trigger_attrs }}>
            Show more
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content>
        <p class="text-sm text-muted-foreground">
            Use the Forgot password link on the sign in page, then check your inbox.
        </p>
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### Inline Trigger

```twig
<twig:Collapsible class="w-full max-w-sm">
    <p class="text-sm text-muted-foreground">
        Collapsible content can sit inside a sentence.
        <twig:Collapsible:Trigger class="inline">
            <twig:Button variant="link" class="h-auto p-0" {{ ...collapsible_trigger_attrs }}>
                Read more
            </twig:Button>
        </twig:Collapsible:Trigger>
    </p>
    <twig:Collapsible:Content class="pt-2 text-sm text-muted-foreground">
        Here is the rest of the explanation.
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### Trigger With Icon

```twig
<twig:Collapsible class="w-full max-w-sm">
    <twig:Collapsible:Trigger>
        <twig:Button variant="outline" class="w-fit" {{ ...collapsible_trigger_attrs }}>
            <twig:ux:icon name="lucide:list-filter" />
            Filters
            <twig:ux:icon name="lucide:chevron-down" />
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content>
        <p class="text-sm text-muted-foreground">
            Narrow the list by status or owner.
        </p>
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### Text Only Trigger

```twig
<twig:Collapsible class="w-full max-w-sm">
    <twig:Collapsible:Trigger>
        <twig:Button variant="link" class="h-auto p-0" {{ ...collapsible_trigger_attrs }}>
            Show advanced settings
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content>
        <p class="text-sm text-muted-foreground">
            Advanced settings are for experienced users.
        </p>
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### Controlled Open State

```twig
<twig:Collapsible open class="w-full max-w-sm">
    <twig:Collapsible:Trigger>
        <twig:Button variant="outline" class="w-full justify-between" {{ ...collapsible_trigger_attrs }}>
            Toggle details
            <twig:ux:icon name="lucide:chevrons-up-down" />
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content>
        <p class="text-sm text-muted-foreground">
            This one starts open.
        </p>
    </twig:Collapsible:Content>
</twig:Collapsible>
```

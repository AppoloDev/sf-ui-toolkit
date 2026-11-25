# Switch

## Examples

### Basic

```twig
<twig:Field orientation="horizontal" class="w-fit">
    <twig:Switch id="sw-basic" name="airplane" />
    <twig:Field:Label for="sw-basic">
        Airplane Mode
    </twig:Field:Label>
</twig:Field>
```

### With Description

```twig
<twig:Field orientation="horizontal" class="max-w-sm justify-between">
    <twig:Field:Content>
        <twig:Field:Label for="sw-desc">
            Marketing emails
        </twig:Field:Label>
        <twig:Field:Description>
            Receive news and special offers.
        </twig:Field:Description>
    </twig:Field:Content>
    <twig:Switch id="sw-desc" name="marketing" />
</twig:Field>
```

### Switch Group

```twig
<twig:Field:Set class="max-w-xs">
    <twig:Field:Legend variant="label">
        Notifications
    </twig:Field:Legend>
    <twig:Field:Group class="gap-3">
        <twig:Field orientation="horizontal">
            <twig:Switch id="sw-group-email" name="email" checked="1" />
            <twig:Field:Label for="sw-group-email" class="font-normal capitalize">
                email
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:Switch id="sw-group-sms" name="sms" checked="" />
            <twig:Field:Label for="sw-group-sms" class="font-normal capitalize">
                sms
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:Switch id="sw-group-push" name="push" checked="1" />
            <twig:Field:Label for="sw-group-push" class="font-normal capitalize">
                push
            </twig:Field:Label>
        </twig:Field>
    </twig:Field:Group>
</twig:Field:Set>
```

### Card Separators

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    <twig:Field:Label for="sw-card-email" class="flex cursor-pointer items-center justify-between px-4 py-3">
        <span class="font-normal capitalize">
            email
        </span>
        <twig:Switch id="sw-card-email" name="email" checked="1" />
    </twig:Field:Label>
    <twig:Separator />
    <twig:Field:Label for="sw-card-sms" class="flex cursor-pointer items-center justify-between px-4 py-3">
        <span class="font-normal capitalize">
            sms
        </span>
        <twig:Switch id="sw-card-sms" name="sms" checked="" />
    </twig:Field:Label>
    <twig:Separator />
    <twig:Field:Label for="sw-card-push" class="flex cursor-pointer items-center justify-between px-4 py-3">
        <span class="font-normal capitalize">
            push
        </span>
        <twig:Switch id="sw-card-push" name="push" checked="1" />
    </twig:Field:Label>
</twig:Card>
```

### Card With Icons

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    <twig:Field:Label for="sw-icon-email" class="flex cursor-pointer items-center gap-3 px-4 py-3">
        <twig:ux:icon name="lucide:mail" class="size-4 text-muted-foreground" />
        <span class="flex-1 font-normal capitalize">
            email
        </span>
        <twig:Switch id="sw-icon-email" name="email" checked="1" />
    </twig:Field:Label>
    <twig:Separator />
    <twig:Field:Label for="sw-icon-sms" class="flex cursor-pointer items-center gap-3 px-4 py-3">
        <twig:ux:icon name="lucide:smartphone" class="size-4 text-muted-foreground" />
        <span class="flex-1 font-normal capitalize">
            sms
        </span>
        <twig:Switch id="sw-icon-sms" name="sms" checked="" />
    </twig:Field:Label>
    <twig:Separator />
    <twig:Field:Label for="sw-icon-push" class="flex cursor-pointer items-center gap-3 px-4 py-3">
        <twig:ux:icon name="lucide:bell" class="size-4 text-muted-foreground" />
        <span class="flex-1 font-normal capitalize">
            push
        </span>
        <twig:Switch id="sw-icon-push" name="push" checked="1" />
    </twig:Field:Label>
</twig:Card>
```

### With Badges

```twig
<twig:Field:Group class="max-w-sm gap-3">
    <twig:Field orientation="horizontal">
        <twig:Switch id="sw-ai" />
        <twig:Field:Label for="sw-ai" class="font-normal">
            AI copilot
            <twig:Badge>
                New
            </twig:Badge>
        </twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:Switch id="sw-collab" />
        <twig:Field:Label for="sw-collab" class="font-normal">
            Live collaboration
            <twig:Badge variant="secondary">
                Beta
            </twig:Badge>
        </twig:Field:Label>
    </twig:Field>
</twig:Field:Group>
```

### Colored

```twig
<div class="flex items-center gap-4">
    <twig:Switch name="sw-blue" checked class="data-[state=checked]:bg-blue-600 has-checked:bg-blue-600" aria-label="Blue" />
    <twig:Switch name="sw-green" checked class="data-[state=checked]:bg-green-600 has-checked:bg-green-600" aria-label="Green" />
    <twig:Switch name="sw-yellow" checked class="data-[state=checked]:bg-yellow-500 has-checked:bg-yellow-500" aria-label="Yellow" />
</div>
```

### Destructive Confirm

```twig
<twig:Field orientation="horizontal" class="max-w-sm justify-between">
    <twig:Field:Content>
        <twig:Field:Label for="sw-wipe" class="text-destructive">
            Wipe all data
        </twig:Field:Label>
        <twig:Field:Description>
            This cannot be undone.
        </twig:Field:Description>
    </twig:Field:Content>
    <twig:Switch id="sw-wipe" name="wipe" />
</twig:Field>
```

### Compact Table

```twig
<twig:Card class="max-w-md gap-0 py-0">
    <div class="flex items-center justify-between gap-4 px-4 py-2.5">
        <div class="flex flex-col">
            <span class="text-sm font-medium capitalize">
                autosave
            </span>
            <span class="text-xs text-muted-foreground">
                Save files automatically
            </span>
        </div>
        <twig:Switch name="autosave" size="sm" aria-label="Autosave" />
    </div>
    <twig:Separator />
    <div class="flex items-center justify-between gap-4 px-4 py-2.5">
        <div class="flex flex-col">
            <span class="text-sm font-medium capitalize">
                minimap
            </span>
            <span class="text-xs text-muted-foreground">
                Show the code minimap
            </span>
        </div>
        <twig:Switch name="minimap" size="sm" aria-label="Minimap" />
    </div>
    <twig:Separator />
    <div class="flex items-center justify-between gap-4 px-4 py-2.5">
        <div class="flex flex-col">
            <span class="text-sm font-medium capitalize">
                wrap
            </span>
            <span class="text-xs text-muted-foreground">
                Wrap long lines
            </span>
        </div>
        <twig:Switch name="wrap" size="sm" aria-label="Wrap" />
    </div>
</twig:Card>
```

### Card Grid

```twig
<div class="grid max-w-lg grid-cols-2 gap-3">
    <div class="flex flex-col gap-3 rounded-lg border p-4">
        <div class="flex items-center justify-between">
            <span class="flex size-9 items-center justify-center rounded-md border">
                <twig:ux:icon name="lucide:github" class="size-4" />
            </span>
            <twig:Switch name="github" size="sm" aria-label="Github" />
        </div>
        <div>
            <p class="text-sm font-medium capitalize">
                github
            </p>
            <p class="text-xs text-muted-foreground">
                Sync repositories
            </p>
        </div>
    </div>
    <div class="flex flex-col gap-3 rounded-lg border p-4">
        <div class="flex items-center justify-between">
            <span class="flex size-9 items-center justify-center rounded-md border">
                <twig:ux:icon name="lucide:slack" class="size-4" />
            </span>
            <twig:Switch name="slack" size="sm" aria-label="Slack" />
        </div>
        <div>
            <p class="text-sm font-medium capitalize">
                slack
            </p>
            <p class="text-xs text-muted-foreground">
                Post updates
            </p>
        </div>
    </div>
</div>
```


### States

```twig
<div class="flex flex-wrap items-center gap-6">
    <twig:Switch aria-label="Default" />
    <twig:Switch checked aria-label="Checked" />
    <twig:Switch size="sm" aria-label="Small" />
    <twig:Switch size="sm" checked aria-label="Small checked" />
    <twig:Switch disabled aria-label="Disabled" />
    <twig:Switch disabled checked aria-label="Disabled checked" />
</div>
```

### Square

The thumb and the track lose their rounded ends.

```twig
<div class="flex flex-wrap items-center gap-6">
    <twig:Switch size="sm" class="rounded-sm [&_[data-slot=switch-thumb]]:rounded-[2px]" aria-label="Small square" />
    <twig:Switch class="rounded-md [&_[data-slot=switch-thumb]]:rounded-[4px]" aria-label="Square" />
    <twig:Switch checked class="rounded-md data-[size=default]:h-7! data-[size=default]:w-12! [&_[data-slot=switch-thumb]]:size-6! [&_[data-slot=switch-thumb]]:rounded-[4px]" aria-label="Large square" />
</div>
```

### Square With Text

```twig
<div class="group/sw relative inline-flex items-center">
    <twig:Switch checked aria-label="Mode" class="rounded-md data-[size=default]:h-8! data-[size=default]:w-20! [&_[data-slot=switch-thumb]]:size-7! [&_[data-slot=switch-thumb]]:rounded-[4px] [&_[data-slot=switch-thumb]]:group-has-checked:translate-x-[calc(100%+2px)]" />
    <span class="pointer-events-none absolute start-2 text-xs font-medium text-primary-foreground opacity-0 group-has-checked/sw:opacity-100">
        ON
    </span>
    <span class="pointer-events-none absolute end-2 text-xs font-medium text-muted-foreground group-has-checked/sw:opacity-0">
        OFF
    </span>
</div>
```

### Square With Label

```twig
<twig:Field orientation="horizontal" class="w-fit">
    <twig:Switch id="sw-square-label" class="rounded-md [&_[data-slot=switch-thumb]]:rounded-[4px]" />
    <twig:Field:Label for="sw-square-label">
        Auto-save drafts
    </twig:Field:Label>
</twig:Field>
```

### Theme Toggle

Sun and moon icons sit on the track; the thumb slides over one of them.

```twig
<div class="group/sw relative inline-flex items-center">
    <twig:Switch aria-label="Dark mode" class="data-[size=default]:h-7! data-[size=default]:w-14! [&_[data-slot=switch-thumb]]:size-6! [&_[data-slot=switch-thumb]]:group-has-checked:translate-x-[calc(100%+4px)]" />
    <twig:ux:icon name="lucide:sun" class="pointer-events-none absolute start-1.5 size-4 text-foreground/70" />
    <twig:ux:icon name="lucide:moon" class="pointer-events-none absolute end-1.5 size-4 text-foreground/70" />
</div>
```

### Square Theme Toggle

```twig
<div class="group/sw relative inline-flex items-center">
    <twig:Switch aria-label="Dark mode" class="rounded-md data-[size=default]:h-7! data-[size=default]:w-14! [&_[data-slot=switch-thumb]]:size-6! [&_[data-slot=switch-thumb]]:rounded-[4px] [&_[data-slot=switch-thumb]]:group-has-checked:translate-x-[calc(100%+4px)]" />
    <twig:ux:icon name="lucide:sun" class="pointer-events-none absolute start-1.5 size-4 text-foreground/70" />
    <twig:ux:icon name="lucide:moon" class="pointer-events-none absolute end-1.5 size-4 text-foreground/70" />
</div>
```

### Icon With Label

```twig
<twig:Field orientation="horizontal" class="w-fit">
    <twig:Switch id="sw-icon-label" />
    <twig:Field:Label for="sw-icon-label">
        <twig:ux:icon name="lucide:bell" class="size-4" />
        Notifications
    </twig:Field:Label>
</twig:Field>
```

### Volume Toggle

The icon follows the state of the switch.

```twig
<div class="group/sw flex items-center gap-3">
    <twig:ux:icon name="lucide:volume-x" class="size-5 text-muted-foreground group-has-checked/sw:hidden" />
    <twig:ux:icon name="lucide:volume-2" class="hidden size-5 group-has-checked/sw:block" />
    <twig:Switch checked aria-label="Sound" />
</div>
```

### On Label

```twig
<div class="group/sw flex items-center gap-2">
    <twig:Switch id="sw-on-label" checked />
    <twig:Field:Label for="sw-on-label" class="w-6 text-muted-foreground group-has-checked/sw:text-foreground">
        <span class="group-has-checked/sw:hidden">
            Off
        </span>
        <span class="hidden group-has-checked/sw:inline">
            On
        </span>
    </twig:Field:Label>
</div>
```

### State Labels

```twig
<div class="group/sw flex items-center gap-3">
    <span class="text-sm text-muted-foreground group-has-checked/sw:opacity-50">
        Monthly
    </span>
    <twig:Switch aria-label="Billing period" />
    <span class="text-sm text-muted-foreground group-has-checked/sw:text-foreground">
        Yearly
    </span>
</div>
```

### In an Item

```twig
<twig:Item variant="outline" class="max-w-md">
    <twig:Item:Content>
        <twig:Item:Title>
            Two-factor authentication
        </twig:Item:Title>
        <twig:Item:Description>
            Ask for a code when you sign in.
        </twig:Item:Description>
    </twig:Item:Content>
    <twig:Item:Actions>
        <twig:Switch aria-label="Two-factor authentication" />
    </twig:Item:Actions>
</twig:Item>
```

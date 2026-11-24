# Radio Group

## Examples

### Basic

```twig
<twig:RadioGroup class="w-fit">
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-basic-default" name="rg-basic" value="default" checked="" />
        <twig:Field:Label for="rg-basic-default" class="font-normal">
            Default
        </twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-basic-comfortable" name="rg-basic" value="comfortable" checked="1" />
        <twig:Field:Label for="rg-basic-comfortable" class="font-normal">
            Comfortable
        </twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-basic-compact" name="rg-basic" value="compact" checked="" />
        <twig:Field:Label for="rg-basic-compact" class="font-normal">
            Compact
        </twig:Field:Label>
    </twig:Field>
</twig:RadioGroup>
```

### Colored

```twig
<twig:RadioGroup class="w-fit">
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-color-blue" name="rg-color" value="blue" class="border-blue-600 checked:bg-blue-600" />
        <twig:Field:Label for="rg-color-blue" class="font-normal capitalize">
            blue
        </twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-color-green" name="rg-color" value="green" class="border-green-600 checked:bg-green-600" />
        <twig:Field:Label for="rg-color-green" class="font-normal capitalize">
            green
        </twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-color-yellow" name="rg-color" value="yellow" class="border-yellow-500 checked:bg-yellow-500" />
        <twig:Field:Label for="rg-color-yellow" class="font-normal capitalize">
            yellow
        </twig:Field:Label>
    </twig:Field>
</twig:RadioGroup>
```

### Legend and Description

```twig
<twig:Field:Set class="max-w-xs">
    <twig:Field:Legend variant="label">
        Battery level
    </twig:Field:Legend>
    <twig:Field:Description>
        Choose how aggressively the device saves power.
    </twig:Field:Description>
    <twig:RadioGroup>
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="rg-battery-low" name="rg-battery" value="low" checked="" />
            <twig:Field:Label for="rg-battery-low" class="font-normal capitalize">
                low
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="rg-battery-medium" name="rg-battery" value="medium" checked="1" />
            <twig:Field:Label for="rg-battery-medium" class="font-normal capitalize">
                medium
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="rg-battery-high" name="rg-battery" value="high" checked="" />
            <twig:Field:Label for="rg-battery-high" class="font-normal capitalize">
                high
            </twig:Field:Label>
        </twig:Field>
    </twig:RadioGroup>
</twig:Field:Set>
```

### Descriptive Cards

```twig
<twig:RadioGroup class="max-w-sm">
    <twig:Field:Label for="rg-plan-plus">
        <twig:Field orientation="horizontal" class="rounded-lg border p-4 has-checked:border-primary has-checked:bg-primary/5">
            <twig:Field:Content>
                <twig:Field:Title>
                    Plus
                </twig:Field:Title>
                <twig:Field:Description>
                    For individuals and small teams.
                </twig:Field:Description>
            </twig:Field:Content>
            <twig:RadioGroup:Item id="rg-plan-plus" name="rg-plan" value="plus" checked="1" />
        </twig:Field>
    </twig:Field:Label>
    <twig:Field:Label for="rg-plan-pro">
        <twig:Field orientation="horizontal" class="rounded-lg border p-4 has-checked:border-primary has-checked:bg-primary/5">
            <twig:Field:Content>
                <twig:Field:Title>
                    Pro
                </twig:Field:Title>
                <twig:Field:Description>
                    For growing businesses.
                </twig:Field:Description>
            </twig:Field:Content>
            <twig:RadioGroup:Item id="rg-plan-pro" name="rg-plan" value="pro" checked="" />
        </twig:Field>
    </twig:Field:Label>
</twig:RadioGroup>
```

### Card Separators

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    <twig:RadioGroup class="gap-0">
        <twig:Field:Label for="rg-ship-standard" class="flex cursor-pointer items-center gap-3 px-4 py-3">
            <twig:RadioGroup:Item id="rg-ship-standard" name="rg-ship" value="standard" checked="1" />
            <span class="font-normal">
                Standard (5-7 days)
            </span>
        </twig:Field:Label>
        <twig:Separator />
        <twig:Field:Label for="rg-ship-express" class="flex cursor-pointer items-center gap-3 px-4 py-3">
            <twig:RadioGroup:Item id="rg-ship-express" name="rg-ship" value="express" checked="" />
            <span class="font-normal">
                Express (2-3 days)
            </span>
        </twig:Field:Label>
        <twig:Separator />
        <twig:Field:Label for="rg-ship-overnight" class="flex cursor-pointer items-center gap-3 px-4 py-3">
            <twig:RadioGroup:Item id="rg-ship-overnight" name="rg-ship" value="overnight" checked="" />
            <span class="font-normal">
                Overnight
            </span>
        </twig:Field:Label>
    </twig:RadioGroup>
</twig:Card>
```

### Card Icons

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    <twig:RadioGroup class="gap-0">
        <twig:Field:Label for="rg-contact-email" class="flex cursor-pointer items-center gap-3 px-4 py-3">
            <twig:ux:icon name="lucide:mail" class="size-4 text-muted-foreground" />
            <span class="flex-1 font-normal">
                Email
            </span>
            <twig:RadioGroup:Item id="rg-contact-email" name="rg-contact" value="email" checked="1" />
        </twig:Field:Label>
        <twig:Separator />
        <twig:Field:Label for="rg-contact-phone" class="flex cursor-pointer items-center gap-3 px-4 py-3">
            <twig:ux:icon name="lucide:phone" class="size-4 text-muted-foreground" />
            <span class="flex-1 font-normal">
                Phone
            </span>
            <twig:RadioGroup:Item id="rg-contact-phone" name="rg-contact" value="phone" checked="" />
        </twig:Field:Label>
        <twig:Separator />
        <twig:Field:Label for="rg-contact-chat" class="flex cursor-pointer items-center gap-3 px-4 py-3">
            <twig:ux:icon name="lucide:message-circle" class="size-4 text-muted-foreground" />
            <span class="flex-1 font-normal">
                Chat
            </span>
            <twig:RadioGroup:Item id="rg-contact-chat" name="rg-contact" value="chat" checked="" />
        </twig:Field:Label>
    </twig:RadioGroup>
</twig:Card>
```

### Grid Layout

```twig
<twig:RadioGroup class="grid max-w-md grid-cols-2 gap-3">
    <twig:Field:Label for="rg-area-analytics">
        <twig:Field class="relative rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
            <span class="flex size-8 items-center justify-center rounded-md bg-muted">
                <twig:ux:icon name="lucide:chart-column" class="size-4" />
            </span>
            <twig:Field:Title>
                Analytics
            </twig:Field:Title>
            <twig:Field:Description>
                Track usage
            </twig:Field:Description>
            <twig:RadioGroup:Item id="rg-area-analytics" name="rg-area" value="analytics" class="absolute end-3 top-3" />
        </twig:Field>
    </twig:Field:Label>
    <twig:Field:Label for="rg-area-billing">
        <twig:Field class="relative rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
            <span class="flex size-8 items-center justify-center rounded-md bg-muted">
                <twig:ux:icon name="lucide:credit-card" class="size-4" />
            </span>
            <twig:Field:Title>
                Billing
            </twig:Field:Title>
            <twig:Field:Description>
                Manage plans
            </twig:Field:Description>
            <twig:RadioGroup:Item id="rg-area-billing" name="rg-area" value="billing" class="absolute end-3 top-3" />
        </twig:Field>
    </twig:Field:Label>
    <twig:Field:Label for="rg-area-security">
        <twig:Field class="relative rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
            <span class="flex size-8 items-center justify-center rounded-md bg-muted">
                <twig:ux:icon name="lucide:shield" class="size-4" />
            </span>
            <twig:Field:Title>
                Security
            </twig:Field:Title>
            <twig:Field:Description>
                Protect data
            </twig:Field:Description>
            <twig:RadioGroup:Item id="rg-area-security" name="rg-area" value="security" class="absolute end-3 top-3" />
        </twig:Field>
    </twig:Field:Label>
    <twig:Field:Label for="rg-area-support">
        <twig:Field class="relative rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
            <span class="flex size-8 items-center justify-center rounded-md bg-muted">
                <twig:ux:icon name="lucide:life-buoy" class="size-4" />
            </span>
            <twig:Field:Title>
                Support
            </twig:Field:Title>
            <twig:Field:Description>
                Get help
            </twig:Field:Description>
            <twig:RadioGroup:Item id="rg-area-support" name="rg-area" value="support" class="absolute end-3 top-3" />
        </twig:Field>
    </twig:Field:Label>
</twig:RadioGroup>
```

### Avatar Cards

```twig
<twig:RadioGroup class="grid max-w-md grid-cols-2 gap-3">
    <twig:Field:Label for="rg-user-shadcn">
        <twig:Field orientation="horizontal" class="items-center rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
            <twig:Avatar>
                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                <twig:Avatar:Fallback>
                    S
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <twig:Field:Content class="flex-1">
                <twig:Field:Title>
                    shadcn
                </twig:Field:Title>
                <twig:Field:Description>
                    @shadcn
                </twig:Field:Description>
            </twig:Field:Content>
            <twig:RadioGroup:Item id="rg-user-shadcn" name="rg-user" value="shadcn" />
        </twig:Field>
    </twig:Field:Label>
    <twig:Field:Label for="rg-user-maxleiter">
        <twig:Field orientation="horizontal" class="items-center rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
            <twig:Avatar>
                <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
                <twig:Avatar:Fallback>
                    M
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <twig:Field:Content class="flex-1">
                <twig:Field:Title>
                    maxleiter
                </twig:Field:Title>
                <twig:Field:Description>
                    @maxleiter
                </twig:Field:Description>
            </twig:Field:Content>
            <twig:RadioGroup:Item id="rg-user-maxleiter" name="rg-user" value="maxleiter" />
        </twig:Field>
    </twig:Field:Label>
</twig:RadioGroup>
```

### Badges

```twig
<twig:RadioGroup class="w-fit">
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-ch-stable" name="rg-ch" value="stable" checked />
        <twig:Field:Label for="rg-ch-stable" class="font-normal">
            Stable
            <twig:Badge variant="secondary">
                Recommended
            </twig:Badge>
        </twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-ch-beta" name="rg-ch" value="beta" />
        <twig:Field:Label for="rg-ch-beta" class="font-normal">
            Beta
            <twig:Badge>
                New
            </twig:Badge>
        </twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="rg-ch-canary" name="rg-ch" value="canary" />
        <twig:Field:Label for="rg-ch-canary" class="font-normal">
            Canary
        </twig:Field:Label>
    </twig:Field>
</twig:RadioGroup>
```

### Inline Horizontal

```twig
<twig:RadioGroup class="flex flex-wrap gap-6">
    <twig:Field orientation="horizontal" class="w-auto">
        <twig:RadioGroup:Item id="rg-role-admin" name="rg-role" value="admin" checked="" />
        <twig:Field:Label for="rg-role-admin" class="font-normal capitalize">
            admin
        </twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal" class="w-auto">
        <twig:RadioGroup:Item id="rg-role-editor" name="rg-role" value="editor" checked="" />
        <twig:Field:Label for="rg-role-editor" class="font-normal capitalize">
            editor
        </twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal" class="w-auto">
        <twig:RadioGroup:Item id="rg-role-viewer" name="rg-role" value="viewer" checked="1" />
        <twig:Field:Label for="rg-role-viewer" class="font-normal capitalize">
            viewer
        </twig:Field:Label>
    </twig:Field>
</twig:RadioGroup>
```

### Pricing Tiers

```twig
<twig:RadioGroup class="max-w-sm">
    <twig:Field:Label for="rg-tier-free">
        <twig:Field orientation="horizontal" class="items-center rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
            <twig:RadioGroup:Item id="rg-tier-free" name="rg-tier" value="free" checked="" />
            <span class="flex-1 font-medium">
                Free
            </span>
            <span class="text-sm text-muted-foreground">
                $0 / month
            </span>
        </twig:Field>
    </twig:Field:Label>
    <twig:Field:Label for="rg-tier-pro">
        <twig:Field orientation="horizontal" class="items-center rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
            <twig:RadioGroup:Item id="rg-tier-pro" name="rg-tier" value="pro" checked="1" />
            <span class="flex-1 font-medium">
                Pro
            </span>
            <span class="text-sm text-muted-foreground">
                $19 / month
            </span>
        </twig:Field>
    </twig:Field:Label>
    <twig:Field:Label for="rg-tier-enterprise">
        <twig:Field orientation="horizontal" class="items-center rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
            <twig:RadioGroup:Item id="rg-tier-enterprise" name="rg-tier" value="enterprise" checked="" />
            <span class="flex-1 font-medium">
                Enterprise
            </span>
            <span class="text-sm text-muted-foreground">
                $99 / month
            </span>
        </twig:Field>
    </twig:Field:Label>
</twig:RadioGroup>
```


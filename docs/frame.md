# Frame

> Bounded container that groups page regions into bordered panels: settings pages, dashboard sections, status lists.

## Usage

```twig
<twig:Frame>
    <twig:Frame:Panel title="Profile" description="Your public information.">
        Content
    </twig:Frame:Panel>
    <twig:Frame:Panel title="Security">
        Content
    </twig:Frame:Panel>
</twig:Frame>
```

## Examples

### Separated panels

Panels float on a muted surface, with a small gap between them.

```twig
<twig:Frame class="max-w-md">
    <twig:Frame:Panel title="Profile" description="Your public information.">
        <p class="text-sm">
            Jane Doe
        </p>
    </twig:Frame:Panel>
    <twig:Frame:Panel title="Notifications" description="Choose what you receive.">
        <p class="text-sm">
            Email, weekly digest
        </p>
    </twig:Frame:Panel>
</twig:Frame>
```

### Stacked

`stacked` joins adjacent panels into one block.

```twig
<twig:Frame stacked class="max-w-md">
    <twig:Frame:Panel title="Plan">
        Pro, billed monthly
    </twig:Frame:Panel>
    <twig:Frame:Panel title="Usage">
        12 of 20 seats
    </twig:Frame:Panel>
    <twig:Frame:Panel title="Invoices">
        Next invoice on the 1st
    </twig:Frame:Panel>
</twig:Frame>
```

### Dense

`dense` removes the padding and the gap: panels sit on the outer border and are separated by rules.

```twig
<twig:Frame dense class="max-w-md">
    <twig:Frame:Panel title="Database">
        <span class="text-sm text-emerald-600">
            Operational
        </span>
    </twig:Frame:Panel>
    <twig:Frame:Panel title="Queue">
        <span class="text-sm text-emerald-600">
            Operational
        </span>
    </twig:Frame:Panel>
    <twig:Frame:Panel title="Search">
        <span class="text-sm text-amber-600">
            Degraded
        </span>
    </twig:Frame:Panel>
</twig:Frame>
```

### Ghost panel and spacing

A `ghost` panel has no border, so a heading or a hint can sit on the Frame itself. `spacing` goes from `xs` to `lg`.

```twig
<twig:Frame spacing="lg" class="max-w-md">
    <twig:Frame:Panel ghost fit class="px-1 py-0">
        <p class="text-sm text-muted-foreground">
            Changes are saved automatically.
        </p>
    </twig:Frame:Panel>
    <twig:Frame:Panel title="Appearance">
        Light, dark or system
    </twig:Frame:Panel>
</twig:Frame>
```

### Header

`Frame:Header` is a heading area on the Frame itself, above or between panels, with a `Frame:Title` and a `Frame:Description`. In a `dense` Frame it becomes a bar with a rule under it.

```twig
<twig:Frame class="max-w-md">
    <twig:Frame:Header>
        <twig:Frame:Title>
            Notifications
        </twig:Frame:Title>
        <twig:Frame:Description>
            Choose what you hear about.
        </twig:Frame:Description>
    </twig:Frame:Header>
    <twig:Frame:Panel>
        Email, weekly digest
    </twig:Frame:Panel>
</twig:Frame>
```

### Accordion in a Frame

Needs the `accordion` recipe of the official kit.

```twig
<twig:Frame stacked spacing="sm" class="max-w-lg">
    <twig:Frame:Panel fit class="py-3">
        <twig:Accordion id="acc-frame-account" defaultValue="account">
            <twig:Accordion:Item value="account" class="border-b-0">
                <twig:Accordion:Trigger class="items-center py-1 font-semibold hover:no-underline">
                    <span class="flex items-center gap-3">
                        <span class="flex size-8 items-center justify-center rounded-lg bg-muted">
                            <twig:ux:icon name="lucide:settings" class="size-4 text-muted-foreground" />
                        </span>
                        Account Settings
                        <twig:Badge variant="secondary" class="ms-1">
                            New
                        </twig:Badge>
                    </span>
                </twig:Accordion:Trigger>
                <twig:Accordion:Content class="ps-12 text-muted-foreground">
                    Manage your account preferences, security settings and personal information.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
        </twig:Accordion>
    </twig:Frame:Panel>
    <twig:Frame:Panel fit class="py-3">
        <twig:Accordion id="acc-frame-privacy" defaultValue="">
            <twig:Accordion:Item value="privacy" class="border-b-0">
                <twig:Accordion:Trigger class="items-center py-1 font-semibold hover:no-underline">
                    <span class="flex items-center gap-3">
                        <span class="flex size-8 items-center justify-center rounded-lg bg-muted">
                            <twig:ux:icon name="lucide:lock" class="size-4 text-muted-foreground" />
                        </span>
                        Privacy and Security
                    </span>
                </twig:Accordion:Trigger>
                <twig:Accordion:Content class="ps-12 text-muted-foreground">
                    Control who can see your profile and what data we collect.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
        </twig:Accordion>
    </twig:Frame:Panel>
    <twig:Frame:Panel fit class="py-3">
        <twig:Accordion id="acc-frame-support" defaultValue="">
            <twig:Accordion:Item value="support" class="border-b-0">
                <twig:Accordion:Trigger class="items-center py-1 font-semibold hover:no-underline">
                    <span class="flex items-center gap-3">
                        <span class="flex size-8 items-center justify-center rounded-lg bg-muted">
                            <twig:ux:icon name="lucide:circle-help" class="size-4 text-muted-foreground" />
                        </span>
                        Help and Support
                    </span>
                </twig:Accordion:Trigger>
                <twig:Accordion:Content class="ps-12 text-muted-foreground">
                    Access the help center and contact support, 24/7.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
        </twig:Accordion>
    </twig:Frame:Panel>
</twig:Frame>
```

### Collapsible in a Frame

Needs the `collapsible` recipe of the official kit.

```twig
<twig:Frame stacked dense spacing="sm" class="max-w-xs">
    <twig:Collapsible open>
        <twig:Collapsible:Trigger>
            <twig:Button variant="ghost" class="h-auto w-full justify-between rounded-none px-4 py-3 text-sm font-medium" {{ ...collapsible_trigger_attrs }}>
                Deployment successful
                <twig:ux:icon name="lucide:chevron-right" class="size-4 text-muted-foreground" />
            </twig:Button>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content>
            <twig:Frame:Panel>
                <p class="text-xs leading-relaxed text-muted-foreground">
                    Updated the core authentication logic and fixed a minor bug in the login flow.
                </p>
            </twig:Frame:Panel>
        </twig:Collapsible:Content>
    </twig:Collapsible>
</twig:Frame>
```

### Collapsible with a nested list

Needs the `collapsible` and `dropdown-menu` recipes of the official kit.

```twig
<div style="min-height: 320px">
    <twig:Frame stacked dense spacing="sm" class="max-w-xs">
        <twig:Collapsible open>
            <twig:Frame:Header class="flex-row items-center gap-1.5 py-1">
                <twig:Collapsible:Trigger>
                    <twig:Button variant="ghost" size="icon-sm" aria-label="Toggle API keys" {{ ...collapsible_trigger_attrs }}>
                        <twig:ux:icon name="lucide:chevron-right" />
                    </twig:Button>
                </twig:Collapsible:Trigger>
                <twig:Frame:Title>
                    API Keys
                </twig:Frame:Title>
                <twig:Button variant="ghost" size="icon-sm" class="ms-auto" aria-label="Add key">
                    <twig:ux:icon name="lucide:plus" />
                </twig:Button>
            </twig:Frame:Header>
            <twig:Collapsible:Content>
                <twig:Frame:Panel>
                    <div class="flex flex-col gap-2.5">
                        <div class="flex items-center justify-between gap-3 text-xs">
                            <span class="w-24 truncate font-medium">
                                Production
                            </span>
                            <code class="truncate text-muted-foreground">
                                AUDO23••••SDIFPPL
                            </code>
                            <twig:DropdownMenu id="keys-production" align="end">
                                <twig:DropdownMenu:Trigger>
                                    <twig:Button variant="ghost" size="icon-xs" aria-label="Actions for Production" {{ ...dropdown_menu_trigger_attrs }}>
                                        <twig:ux:icon name="lucide:ellipsis" />
                                    </twig:Button>
                                </twig:DropdownMenu:Trigger>
                                <twig:DropdownMenu:Content>
                                    <twig:DropdownMenu:Item>
                                        Copy key
                                    </twig:DropdownMenu:Item>
                                    <twig:DropdownMenu:Item variant="destructive">
                                        Delete
                                    </twig:DropdownMenu:Item>
                                </twig:DropdownMenu:Content>
                            </twig:DropdownMenu>
                        </div>
                        <div class="flex items-center justify-between gap-3 text-xs">
                            <span class="w-24 truncate font-medium">
                                Development
                            </span>
                            <code class="truncate text-muted-foreground">
                                DUILO3••••SDIFUIP
                            </code>
                            <twig:DropdownMenu id="keys-development" align="end">
                                <twig:DropdownMenu:Trigger>
                                    <twig:Button variant="ghost" size="icon-xs" aria-label="Actions for Development" {{ ...dropdown_menu_trigger_attrs }}>
                                        <twig:ux:icon name="lucide:ellipsis" />
                                    </twig:Button>
                                </twig:DropdownMenu:Trigger>
                                <twig:DropdownMenu:Content>
                                    <twig:DropdownMenu:Item>
                                        Copy key
                                    </twig:DropdownMenu:Item>
                                    <twig:DropdownMenu:Item variant="destructive">
                                        Delete
                                    </twig:DropdownMenu:Item>
                                </twig:DropdownMenu:Content>
                            </twig:DropdownMenu>
                        </div>
                        <div class="flex items-center justify-between gap-3 text-xs">
                            <span class="w-24 truncate font-medium">
                                Staging
                            </span>
                            <code class="truncate text-muted-foreground">
                                IPPODA••••4SDI
                            </code>
                            <twig:DropdownMenu id="keys-staging" align="end">
                                <twig:DropdownMenu:Trigger>
                                    <twig:Button variant="ghost" size="icon-xs" aria-label="Actions for Staging" {{ ...dropdown_menu_trigger_attrs }}>
                                        <twig:ux:icon name="lucide:ellipsis" />
                                    </twig:Button>
                                </twig:DropdownMenu:Trigger>
                                <twig:DropdownMenu:Content>
                                    <twig:DropdownMenu:Item>
                                        Copy key
                                    </twig:DropdownMenu:Item>
                                    <twig:DropdownMenu:Item variant="destructive">
                                        Delete
                                    </twig:DropdownMenu:Item>
                                </twig:DropdownMenu:Content>
                            </twig:DropdownMenu>
                        </div>
                    </div>
                </twig:Frame:Panel>
            </twig:Collapsible:Content>
        </twig:Collapsible>
    </twig:Frame>
</div>
```

### Radio group in a Frame

Needs the `radio-group` recipe of the official kit.

```twig
<twig:Frame spacing="sm" class="max-w-xs">
    <twig:Frame:Header>
        <twig:Frame:Title>
            Language
        </twig:Frame:Title>
    </twig:Frame:Header>
    <twig:Frame:Panel class="overflow-hidden p-0">
        <twig:RadioGroup>
            <label for="rg-frame-en" class="flex cursor-pointer items-center gap-3 p-3 text-sm">
                <twig:RadioGroup:Item id="rg-frame-en" name="rg-frame" value="en" checked="1" />
                English
            </label>
            <label for="rg-frame-es" class="flex cursor-pointer items-center gap-3 p-3 text-sm border-t border-border">
                <twig:RadioGroup:Item id="rg-frame-es" name="rg-frame" value="es" checked="" />
                Spanish
            </label>
            <label for="rg-frame-fr" class="flex cursor-pointer items-center gap-3 p-3 text-sm border-t border-border">
                <twig:RadioGroup:Item id="rg-frame-fr" name="rg-frame" value="fr" checked="" />
                French
            </label>
            <label for="rg-frame-de" class="flex cursor-pointer items-center gap-3 p-3 text-sm border-t border-border">
                <twig:RadioGroup:Item id="rg-frame-de" name="rg-frame" value="de" checked="" />
                German
            </label>
        </twig:RadioGroup>
    </twig:Frame:Panel>
</twig:Frame>
```

### Switch in a Frame

Needs the `switch` recipe of the official kit.

```twig
<twig:Frame spacing="sm" class="max-w-xs">
    <twig:Frame:Header>
        <twig:Frame:Title>
            Privacy Settings
        </twig:Frame:Title>
    </twig:Frame:Header>
    <twig:Frame:Panel class="overflow-hidden p-0">
        <label for="sw-frame-visibility" class="flex cursor-pointer items-center justify-between p-3 text-sm">
            Profile visibility
            <twig:Switch id="sw-frame-visibility" checked="1" />
        </label>
        <label for="sw-frame-status" class="flex cursor-pointer items-center justify-between p-3 text-sm border-t border-border">
            Show online status
            <twig:Switch id="sw-frame-status" checked="1" />
        </label>
        <label for="sw-frame-data" class="flex cursor-pointer items-center justify-between p-3 text-sm border-t border-border">
            Allow data collection
            <twig:Switch id="sw-frame-data" checked="" />
        </label>
    </twig:Frame:Panel>
</twig:Frame>
```

### Checkbox group in a Frame

Needs the `checkbox` recipe of the official kit.

```twig
<twig:Frame spacing="sm" class="max-w-xs">
    <twig:Frame:Header>
        <twig:Frame:Title>
            Notification Settings
        </twig:Frame:Title>
    </twig:Frame:Header>
    <twig:Frame:Panel class="overflow-hidden p-0">
        <label for="cb-frame-push" class="flex cursor-pointer items-center gap-3 p-3 text-sm">
            <twig:Checkbox id="cb-frame-push" checked="1" />
            Push notifications
        </label>
        <label for="cb-frame-email" class="flex cursor-pointer items-center gap-3 p-3 text-sm border-t border-border">
            <twig:Checkbox id="cb-frame-email" checked="" />
            Email notifications
        </label>
        <label for="cb-frame-sms" class="flex cursor-pointer items-center gap-3 p-3 text-sm border-t border-border">
            <twig:Checkbox id="cb-frame-sms" checked="" />
            SMS notifications
        </label>
    </twig:Frame:Panel>
</twig:Frame>
```

### Breadcrumb in a Frame

Needs the `breadcrumb` recipe of the official kit.

```twig
<twig:Frame class="w-fit">
    <twig:Frame:Panel fit class="px-3 py-2">
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
                    <twig:Breadcrumb:Link href="#">
                        Products
                    </twig:Breadcrumb:Link>
                </twig:Breadcrumb:Item>
                <twig:Breadcrumb:Separator />
                <twig:Breadcrumb:Item>
                    <twig:Breadcrumb:Page class="font-semibold">
                        Checkout
                    </twig:Breadcrumb:Page>
                </twig:Breadcrumb:Item>
            </twig:Breadcrumb:List>
        </twig:Breadcrumb>
    </twig:Frame:Panel>
</twig:Frame>
```

### Compact social proof

Needs the `avatar` recipe of the official kit.

```twig
<twig:Frame class="w-fit">
    <twig:Frame:Panel fit class="flex items-center gap-2 p-2">
        <div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
            <twig:Avatar class="size-7">
                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                <twig:Avatar:Fallback>
                    S
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <twig:Avatar class="size-7">
                <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
                <twig:Avatar:Fallback>
                    M
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <twig:Avatar class="size-7">
                <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
                <twig:Avatar:Fallback>
                    E
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <twig:Avatar class="size-7">
                <twig:Avatar:Image src="https://github.com/leerob.png" alt="leerob" />
                <twig:Avatar:Fallback>
                    L
                </twig:Avatar:Fallback>
            </twig:Avatar>
        </div>
        <p class="me-1.5 text-xs text-muted-foreground">
            Joined by
            <span class="font-semibold text-foreground">
                500+
            </span>
            developers.
        </p>
    </twig:Frame:Panel>
</twig:Frame>
```

### Alert dialog in a Frame

Needs the `alert-dialog` and `checkbox` recipes of the official kit.

```twig
<div style="min-height: 360px">
    <twig:AlertDialog id="ad-unsaved">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Discard changes
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content class="overflow-hidden p-0">
            <twig:Frame class="p-px">
                <twig:Frame:Panel>
                    <div class="flex items-start gap-3">
                        <span class="flex size-10 shrink-0 items-center justify-center rounded-full border border-amber-100 bg-amber-50 text-amber-500 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300">
                            <twig:ux:icon name="lucide:triangle-alert" class="size-5" />
                        </span>
                        <div class="flex flex-col gap-1">
                            <twig:AlertDialog:Title class="text-sm font-semibold">
                                Unsaved changes
                            </twig:AlertDialog:Title>
                            <twig:AlertDialog:Description>
                                You have unsaved changes in this form. If you leave now, your progress will be lost.
                            </twig:AlertDialog:Description>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center justify-between gap-4">
                        <label for="ad-unsaved-ask" class="flex items-center gap-2 text-sm text-muted-foreground">
                            <twig:Checkbox id="ad-unsaved-ask" />
                            Don't ask again
                        </label>
                        <div class="flex items-center gap-2">
                            <twig:AlertDialog:Cancel>
                                Stay
                            </twig:AlertDialog:Cancel>
                            <twig:AlertDialog:Action>
                                Discard changes
                            </twig:AlertDialog:Action>
                        </div>
                    </div>
                </twig:Frame:Panel>
            </twig:Frame>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Alert without borders in a Frame

Needs the `alert` recipe of the official kit.

```twig
<twig:Frame class="max-w-lg">
    <twig:Frame:Panel fit class="overflow-hidden p-0">
        <twig:Alert class="border-0">
            <twig:ux:icon name="lucide:info" class="text-destructive" />
            <twig:Alert:Title>
                System update
            </twig:Alert:Title>
            <twig:Alert:Description>
                A new system update is available. Please restart your application to apply the changes.
            </twig:Alert:Description>
        </twig:Alert>
    </twig:Frame:Panel>
</twig:Frame>
```

### Stacked alerts in a Frame

Needs the `alert` recipe of this kit (for the success and warning variants) and the `button` recipe of the official kit.

```twig
<twig:Frame stacked class="max-w-lg">
    <twig:Frame:Panel fit class="p-0">
        <twig:Alert variant="success" class="rounded-none border-0">
            <twig:ux:icon name="lucide:circle-check" />
            <twig:Alert:Title>
                Deployment successful
            </twig:Alert:Title>
            <twig:Alert:Description>
                Your application has been deployed to the production environment.
            </twig:Alert:Description>
        </twig:Alert>
    </twig:Frame:Panel>
    <twig:Frame:Panel fit class="p-0">
        <twig:Alert variant="warning" class="rounded-none border-0">
            <twig:ux:icon name="lucide:triangle-alert" />
            <twig:Alert:Title>
                Resource limit reached
            </twig:Alert:Title>
            <twig:Alert:Description>
                Your plan has reached its resource limits. Consider upgrading.
            </twig:Alert:Description>
            <twig:Alert:Action>
                <twig:Button size="xs">
                    Verify
                </twig:Button>
            </twig:Alert:Action>
        </twig:Alert>
    </twig:Frame:Panel>
</twig:Frame>
```

### Alert with actions in a Frame

Needs the `alert` and `button` recipes of the official kit.

```twig
<twig:Frame class="max-w-lg">
    <twig:Frame:Panel fit class="overflow-hidden p-0">
        <twig:Alert class="border-0">
            <twig:ux:icon name="lucide:shield-check" class="text-emerald-500" />
            <twig:Alert:Title>
                Security update
            </twig:Alert:Title>
            <twig:Alert:Description>
                Update your password and enable 2FA to improve your account security.
            </twig:Alert:Description>
            <twig:Alert:Action>
                <twig:Button variant="outline" size="xs">
                    Dismiss
                </twig:Button>
                <twig:Button size="xs">
                    Update
                </twig:Button>
            </twig:Alert:Action>
        </twig:Alert>
    </twig:Frame:Panel>
</twig:Frame>
```

## Accessibility

- `Frame:Title` renders an `h3` by default; change it with `tag` to keep the heading levels of the page in order.
- Each panel is a `section`; a `title` renders a heading (`h3`), so keep the heading levels of the page in order or change the markup after install.
- The Frame adds no role of its own: it is layout only.

## API

### `<twig:Frame>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `dense` | bool | `false` | No padding or gap; panels are separated by rules on the outer border. |
| `stacked` | bool | `false` | Joins adjacent panels into one block. |
| `spacing` | `xs`, `sm`, `default`, `lg` | `default` | Padding and gap around the panels (ignored when `dense`). |

| Block | Description |
|---|---|
| `default` | `Frame:Panel` elements. |

### `<twig:Frame:Panel>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | string | `null` | Heading of the panel. |
| `description` | string | `null` | Text under the heading. |
| `fit` | bool | `false` | Keep the content height instead of filling the spare height of the Frame. |
| `ghost` | bool | `false` | No border and no background. |

| Block | Description |
|---|---|
| `default` | The content of the panel. |


### `<twig:Frame:Header>`

| Block | Description |
|---|---|
| `default` | A `Frame:Title` and a `Frame:Description`, or any content. |

### `<twig:Frame:Title>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `tag` | `h2`, `h3`, `h4`, `p`, `div` | `h3` | The HTML tag. |

| Block | Description |
|---|---|
| `default` | The title. |

### `<twig:Frame:Description>`

| Block | Description |
|---|---|
| `default` | The description. |

# Alert

> The shadcn Alert with info, success, warning and invert variants, in solid or light appearance.

<!-- order: Default, Basic, Title and Description, Leading Icon, Destructive, Info, Success, Warning, Invert, Solid, Light, All variants, Action, Icon and Actions, Title and Actions, Pro upsell, Payment Failure, Direct Message, Urgent Billing, Service Status, Custom Colors -->

## Installation

- alert

## Usage

This recipe replaces the `Alert` template of the official kit (install the official `alert` recipe first: `Alert:Title`, `Alert:Description` and `Alert:Action` come from it). `default` and `destructive` are unchanged.

```twig
<twig:Alert variant="success">
    <twig:ux:icon name="lucide:circle-check" />
    <twig:Alert:Title>
        Saved
    </twig:Alert:Title>
    <twig:Alert:Description>
        Your changes are live.
    </twig:Alert:Description>
</twig:Alert>
```

## Examples

### Info

```twig
<twig:Alert variant="info" class="max-w-md">
    <twig:ux:icon name="lucide:info" />
    <twig:Alert:Title>
        Heads up
    </twig:Alert:Title>
    <twig:Alert:Description>
        A new version is available.
    </twig:Alert:Description>
</twig:Alert>
```

### Success

```twig
<twig:Alert variant="success" class="max-w-md">
    <twig:ux:icon name="lucide:circle-check" />
    <twig:Alert:Title>
        Payment received
    </twig:Alert:Title>
    <twig:Alert:Description>
        The invoice is now marked as paid.
    </twig:Alert:Description>
</twig:Alert>
```

### Warning

```twig
<twig:Alert variant="warning" class="max-w-md">
    <twig:ux:icon name="lucide:triangle-alert" />
    <twig:Alert:Title>
        Almost out of space
    </twig:Alert:Title>
    <twig:Alert:Description>
        You used 92% of your storage.
    </twig:Alert:Description>
</twig:Alert>
```

### Invert

A solid bar in the foreground color, readable in light and dark themes.

```twig
<twig:Alert variant="invert" class="max-w-md">
    <twig:ux:icon name="lucide:circle-check" />
    <twig:Alert:Title>
        Deployment complete
    </twig:Alert:Title>
    <twig:Alert:Description>
        Your site is live.
    </twig:Alert:Description>
</twig:Alert>
```

### Pro upsell

```twig
<twig:Alert variant="invert" class="max-w-md">
    <twig:ux:icon name="lucide:sparkles" />
    <twig:Alert:Title>
        Unlock the full toolkit
    </twig:Alert:Title>
    <twig:Alert:Description>
        Upgrade to Pro for unlimited projects and priority support.
    </twig:Alert:Description>
    <twig:Alert:Action>
        <twig:Button size="xs" variant="secondary">
            Upgrade
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Solid

`appearance="solid"` fills the alert with the color.

```twig
<div class="flex max-w-md flex-col gap-3">
    <twig:Alert variant="default" appearance="solid">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            default
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="destructive" appearance="solid">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            destructive
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="info" appearance="solid">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            info
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="success" appearance="solid">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            success
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="warning" appearance="solid">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            warning
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
</div>
```

### Light

`appearance="light"` is a soft tint. Info, success and warning are light by default; default and destructive are cards unless you ask for it.

```twig
<div class="flex max-w-md flex-col gap-3">
    <twig:Alert variant="default" appearance="light">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            default
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="destructive" appearance="light">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            destructive
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="info" appearance="light">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            info
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="success" appearance="light">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            success
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="warning" appearance="light">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            warning
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
</div>
```

### All variants

```twig
<div class="flex max-w-md flex-col gap-3">
    <twig:Alert variant="default">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            default
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="destructive">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            destructive
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="info">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            info
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="success">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            success
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="warning">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            warning
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
    <twig:Alert variant="invert">
        <twig:ux:icon name="lucide:bell" />
        <twig:Alert:Title class="capitalize">
            invert
        </twig:Alert:Title>
        <twig:Alert:Description>
            A short message.
        </twig:Alert:Description>
    </twig:Alert>
</div>
```

## Accessibility

- The root has `role="alert"`; keep it for messages that need attention and use a plain card for static information.
- Do not rely on the color alone: the title and the icon say what kind of message it is.

## API

### `<twig:Alert>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `string` | `default` | `default`, `destructive`, `info`, `success`, `warning` or `invert`. |
| `appearance` | `string` | `null` | `solid` or `light`. Without it: a card for default and destructive, a tint for info, success and warning. Ignored by invert. |

| Block | Description |
| --- | --- |
| `default` | An icon, `Alert:Title`, `Alert:Description` and an optional `Alert:Action`. |

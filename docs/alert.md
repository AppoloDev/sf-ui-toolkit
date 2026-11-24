# Alert

> The shadcn Alert with info, success, warning and invert variants, in solid or light appearance.

<!-- order: Default, Basic, Title and Description, Leading Icon, Destructive, Info, Success, Warning, Invert, Solid, Light, All variants, Frame reset borders, Stacked in Frame, Frame with actions, Action, Icon and Actions, Title and Actions, Pro upsell, Payment Failure, Direct Message, Urgent Billing, Service Status, Custom Colors -->

## Installation

- alert

## Usage

This recipe replaces the `Alert` template of the official kit (install the official `alert` recipe first: `Alert:Title`, `Alert:Description` and `Alert:Action` come from it). `default` and `destructive` are unchanged.

```twig
<twig:Alert variant="success">
    <twig:ux:icon name="lucide:circle-check" />
    <twig:Alert:Title>Saved</twig:Alert:Title>
    <twig:Alert:Description>Your changes are live.</twig:Alert:Description>
</twig:Alert>
```

## Examples

### Info

```twig
<twig:Alert variant="info" class="max-w-md">
    <twig:ux:icon name="lucide:info" />
    <twig:Alert:Title>Heads up</twig:Alert:Title>
    <twig:Alert:Description>A new version is available.</twig:Alert:Description>
</twig:Alert>
```

### Success

```twig
<twig:Alert variant="success" class="max-w-md">
    <twig:ux:icon name="lucide:circle-check" />
    <twig:Alert:Title>Payment received</twig:Alert:Title>
    <twig:Alert:Description>The invoice is now marked as paid.</twig:Alert:Description>
</twig:Alert>
```

### Warning

```twig
<twig:Alert variant="warning" class="max-w-md">
    <twig:ux:icon name="lucide:triangle-alert" />
    <twig:Alert:Title>Almost out of space</twig:Alert:Title>
    <twig:Alert:Description>You used 92% of your storage.</twig:Alert:Description>
</twig:Alert>
```

### Invert

A solid bar in the foreground color, readable in light and dark themes.

```twig
<twig:Alert variant="invert" class="max-w-md">
    <twig:ux:icon name="lucide:circle-check" />
    <twig:Alert:Title>Deployment complete</twig:Alert:Title>
    <twig:Alert:Description>Your site is live.</twig:Alert:Description>
</twig:Alert>
```

### Pro upsell

```twig
<twig:Alert variant="invert" class="max-w-md">
    <twig:ux:icon name="lucide:sparkles" />
    <twig:Alert:Title>Unlock the full toolkit</twig:Alert:Title>
    <twig:Alert:Description>Upgrade to Pro for unlimited projects and priority support.</twig:Alert:Description>
    <twig:Alert:Action><twig:Button size="xs" variant="secondary">Upgrade</twig:Button></twig:Alert:Action>
</twig:Alert>
```

### Solid

`appearance="solid"` fills the alert with the color.

```twig
<div class="flex max-w-md flex-col gap-3">
    {% for v in ['default', 'destructive', 'info', 'success', 'warning'] %}
        <twig:Alert variant="{{ v }}" appearance="solid"><twig:ux:icon name="lucide:bell" /><twig:Alert:Title class="capitalize">{{ v }}</twig:Alert:Title><twig:Alert:Description>A short message.</twig:Alert:Description></twig:Alert>
    {% endfor %}
</div>
```

### Light

`appearance="light"` is a soft tint. Info, success and warning are light by default; default and destructive are cards unless you ask for it.

```twig
<div class="flex max-w-md flex-col gap-3">
    {% for v in ['default', 'destructive', 'info', 'success', 'warning'] %}
        <twig:Alert variant="{{ v }}" appearance="light"><twig:ux:icon name="lucide:bell" /><twig:Alert:Title class="capitalize">{{ v }}</twig:Alert:Title><twig:Alert:Description>A short message.</twig:Alert:Description></twig:Alert>
    {% endfor %}
</div>
```

### Frame reset borders

Uses `Frame` from this kit: the panel draws the only edge, so the alert loses its border.

```twig
<twig:Frame class="max-w-lg">
    <twig:Frame:Panel fit class="overflow-hidden p-0">
        <twig:Alert class="border-0"><twig:ux:icon name="lucide:info" class="text-destructive" /><twig:Alert:Title>System update</twig:Alert:Title><twig:Alert:Description>A new system update is available. Please restart your application to apply the changes.</twig:Alert:Description></twig:Alert>
    </twig:Frame:Panel>
</twig:Frame>
```

### Stacked in Frame

```twig
<twig:Frame stacked class="max-w-lg">
    <twig:Frame:Panel fit class="p-0"><twig:Alert variant="success" class="rounded-none border-0"><twig:ux:icon name="lucide:circle-check" /><twig:Alert:Title>Deployment successful</twig:Alert:Title><twig:Alert:Description>Your application has been deployed to the production environment.</twig:Alert:Description></twig:Alert></twig:Frame:Panel>
    <twig:Frame:Panel fit class="p-0"><twig:Alert variant="warning" class="rounded-none border-0"><twig:ux:icon name="lucide:triangle-alert" /><twig:Alert:Title>Resource limit reached</twig:Alert:Title><twig:Alert:Description>Your plan has reached its resource limits. Consider upgrading.</twig:Alert:Description><twig:Alert:Action><twig:Button size="xs">Verify</twig:Button></twig:Alert:Action></twig:Alert></twig:Frame:Panel>
</twig:Frame>
```

### Frame with actions

```twig
<twig:Frame class="max-w-lg">
    <twig:Frame:Panel fit class="overflow-hidden p-0">
        <twig:Alert class="border-0"><twig:ux:icon name="lucide:shield-check" class="text-emerald-500" /><twig:Alert:Title>Security update</twig:Alert:Title><twig:Alert:Description>Update your password and enable 2FA to improve your account security.</twig:Alert:Description><twig:Alert:Action><twig:Button variant="outline" size="xs">Dismiss</twig:Button><twig:Button size="xs">Update</twig:Button></twig:Alert:Action></twig:Alert>
    </twig:Frame:Panel>
</twig:Frame>
```

### All variants

```twig
<div class="flex max-w-md flex-col gap-3">
    {% for v in ['default', 'destructive', 'info', 'success', 'warning', 'invert'] %}
        <twig:Alert variant="{{ v }}"><twig:ux:icon name="lucide:bell" /><twig:Alert:Title class="capitalize">{{ v }}</twig:Alert:Title><twig:Alert:Description>A short message.</twig:Alert:Description></twig:Alert>
    {% endfor %}
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

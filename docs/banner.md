# Banner

> A full-width banner for an announcement or a notice: variants, an icon, an action, a dismiss button that can remember the choice, and an optional sticky position.

## Installation

- button (only for the examples)

## Usage

```twig
<twig:Banner variant="announcement" icon="lucide:megaphone" :dismissible="true" storageKey="v2">
    Version 2 is out.
    <twig:block name="action">
        <a href="/changelog" class="underline underline-offset-4">What is new</a>
    </twig:block>
</twig:Banner>
```

## Examples

### Basic

A message in a full-width bar.

```twig
<twig:Banner>
    Scheduled maintenance tonight from 10 pm to 11 pm.
</twig:Banner>
```

### Variants

Six variants: default, info, success, warning, destructive and announcement.

<!-- height: 420 -->

```twig
<twig:Banner variant="default" icon="lucide:info">
    A default message.
</twig:Banner>
<twig:Banner variant="info" icon="lucide:info">
    A info message.
</twig:Banner>
<twig:Banner variant="success" icon="lucide:circle-check">
    A success message.
</twig:Banner>
<twig:Banner variant="warning" icon="lucide:triangle-alert">
    A warning message.
</twig:Banner>
<twig:Banner variant="destructive" icon="lucide:circle-x">
    A destructive message.
</twig:Banner>
<twig:Banner variant="announcement" icon="lucide:megaphone">
    A announcement message.
</twig:Banner>
```

### With An Action

The `action` block sits at the end, before the dismiss button.

```twig
<twig:Banner variant="announcement" icon="lucide:sparkles">
    Version 2 is out.
    <twig:block name="action">
        <a href="#" class="underline underline-offset-4">What is new</a>
    </twig:block>
</twig:Banner>
```

### Dismissible

`dismissible` adds a dismiss button; `banner:dismiss` is fired.

```twig
<twig:Banner variant="info" icon="lucide:info" :dismissible="true">
    Your trial ends in 3 days.
</twig:Banner>
```

### Remembered

With `storageKey`, a dismissed banner stays hidden on the next visits. Reload the page after dismissing it.

```twig
<twig:Banner variant="warning" icon="lucide:triangle-alert" :dismissible="true" storageKey="docs-demo-banner">
    This banner does not come back once you dismiss it.
</twig:Banner>
```

### With A Button

A `Button` from the official kit as the action.

<!-- height: 140 -->

```twig
<twig:Banner variant="default" icon="lucide:cookie" :dismissible="true">
    We use cookies to improve the site.
    <twig:block name="action">
        <twig:Button size="sm">
            Accept
        </twig:Button>
        <twig:Button size="sm" variant="outline">
            Settings
        </twig:Button>
    </twig:block>
</twig:Banner>
```

### Sticky

`sticky` keeps the banner at the top of the page; scroll the preview to see it stay.

<!-- height: 240 -->

```twig
<div class="h-48 overflow-auto rounded-lg border">
    <twig:Banner variant="announcement" icon="lucide:megaphone" :sticky="true">
        Sticky announcement.
    </twig:Banner>
    <div class="h-96 p-4 text-sm text-muted-foreground">
        Scroll down: the banner stays at the top of this box.
    </div>
</div>
```

### Urgent

`role="alert"` makes a screen reader announce the banner at once.

```twig
<twig:Banner variant="destructive" icon="lucide:circle-x" role="alert">
    The service is down. We are working on it.
</twig:Banner>
```

## Accessibility

- The banner has `role="status"` (polite); use `role="alert"` for something urgent.
- The dismiss button has an accessible name (`dismissLabel`) and keyboard focus.
- Do not rely on the color alone: add an icon or words that say what kind of message it is.

## Extending

- `banner:dismiss` when the banner is dismissed.

## API

### `<twig:Banner>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `default`, `info`, `success`, `warning`, `destructive`, `announcement` | `default` | The color of the banner. |
| `icon` | string or null | `null` | A Symfony UX Icons name shown before the message. |
| `dismissible` | bool | `false` | Show a dismiss button. |
| `dismissLabel` | string | `Dismiss` | The accessible name of the dismiss button. |
| `storageKey` | string or null | `null` | Remember the dismissal in localStorage under this key. |
| `sticky` | bool | `false` | Stay at the top of the page while scrolling. |
| `role` | `status`, `alert` | `status` | The ARIA role. |

| Block | Description |
| --- | --- |
| `default` | The message. |
| `action` | A link or buttons next to the message. |

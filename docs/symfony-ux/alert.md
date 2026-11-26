# Alert

## Examples

### Title and Description

```twig
<twig:Alert class="max-w-md">
    <twig:Alert:Title>
        Heads up!
    </twig:Alert:Title>
    <twig:Alert:Description>
        You can add components to your app using the CLI.
    </twig:Alert:Description>
</twig:Alert>
```

### Leading Icon

```twig
<twig:Alert class="max-w-md">
    <twig:ux:icon name="lucide:circle-check" />
    <twig:Alert:Title>
        Your changes were saved
    </twig:Alert:Title>
</twig:Alert>
```

### Icon and Actions

```twig
<twig:Alert class="max-w-xl">
    <twig:ux:icon name="lucide:shield" />
    <twig:Alert:Title>
        A new version is available
    </twig:Alert:Title>
    <twig:Alert:Description>
        Update now to get the latest security fixes.
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Update
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Payment Failure

A destructive alert with a checklist.

```twig
<twig:Alert variant="destructive" class="max-w-md">
    <twig:ux:icon name="lucide:circle-alert" />
    <twig:Alert:Title>
        Unable to process your payment
    </twig:Alert:Title>
    <twig:Alert:Description>
        <p>
            Please verify your billing information and try again.
        </p>
        <ul class="mt-2 list-inside list-disc text-sm">
            <li>
                Check your card details
            </li>
            <li>
                Ensure sufficient funds
            </li>
            <li>
                Verify billing address
            </li>
        </ul>
    </twig:Alert:Description>
</twig:Alert>
```

### Title and Actions

```twig
<twig:Alert class="max-w-xl">
    <twig:ux:icon name="lucide:info" />
    <twig:Alert:Title>
        A new version is available
    </twig:Alert:Title>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Update
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Direct Message

```twig
<twig:Alert class="max-w-xl">
    <twig:Avatar size="sm">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Alert:Title>
        shadcn sent you a message
    </twig:Alert:Title>
    <twig:Alert:Description>
        "Can you review the latest changes?"
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            View
        </twig:Button>
        <twig:Button size="sm">
            Reply
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Urgent Billing

```twig
<twig:Alert variant="destructive" class="max-w-xl">
    <twig:ux:icon name="lucide:credit-card" />
    <twig:Alert:Title>
        Your subscription expires in 3 days
    </twig:Alert:Title>
    <twig:Alert:Description>
        Renew now to keep access to all features.
    </twig:Alert:Description>
    <twig:Alert:Action>
        <twig:Button variant="destructive" size="sm">
            Renew Now
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Service Status

```twig
<div class="flex max-w-xl flex-col gap-2">
    <twig:Alert>
        <twig:ux:icon name="lucide:database" class="text-green-600" />
        <twig:Alert:Title>
            Database connected
        </twig:Alert:Title>
    </twig:Alert>
    <twig:Alert>
        <twig:ux:icon name="lucide:triangle-alert" class="text-amber-500" />
        <twig:Alert:Title>
            API latency is higher than usual
        </twig:Alert:Title>
        <twig:Alert:Action>
            <twig:Button variant="outline" size="sm">
                Retry
            </twig:Button>
        </twig:Alert:Action>
    </twig:Alert>
</div>
```

### Standard Title Only

```twig
<twig:Alert class="max-w-xl">
    <twig:Alert:Title>
        Standard message
    </twig:Alert:Title>
</twig:Alert>
```

### Standard Title And Description

```twig
<twig:Alert class="max-w-xl">
    <twig:Alert:Title>
        Standard message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
</twig:Alert>
```

### Standard Title And Action

```twig
<twig:Alert class="max-w-xl">
    <twig:Alert:Title>
        Standard message
    </twig:Alert:Title>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Standard Title Description And Action

```twig
<twig:Alert class="max-w-xl">
    <twig:Alert:Title>
        Standard message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Standard With Everything

```twig
<twig:Alert class="max-w-xl">
    <twig:ux:icon name="lucide:circle-alert" />
    <twig:Alert:Title>
        Standard message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Info Title Only

```twig
<twig:Alert variant="info" class="max-w-xl">
    <twig:Alert:Title>
        Info message
    </twig:Alert:Title>
</twig:Alert>
```

### Info Title And Description

```twig
<twig:Alert variant="info" class="max-w-xl">
    <twig:Alert:Title>
        Info message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
</twig:Alert>
```

### Info Title And Action

```twig
<twig:Alert variant="info" class="max-w-xl">
    <twig:Alert:Title>
        Info message
    </twig:Alert:Title>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Info Title Description And Action

```twig
<twig:Alert variant="info" class="max-w-xl">
    <twig:Alert:Title>
        Info message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Info With Everything

```twig
<twig:Alert variant="info" class="max-w-xl">
    <twig:ux:icon name="lucide:info" />
    <twig:Alert:Title>
        Info message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Success Title Only

```twig
<twig:Alert variant="success" class="max-w-xl">
    <twig:Alert:Title>
        Success message
    </twig:Alert:Title>
</twig:Alert>
```

### Success Title And Description

```twig
<twig:Alert variant="success" class="max-w-xl">
    <twig:Alert:Title>
        Success message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
</twig:Alert>
```

### Success Title And Action

```twig
<twig:Alert variant="success" class="max-w-xl">
    <twig:Alert:Title>
        Success message
    </twig:Alert:Title>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Success Title Description And Action

```twig
<twig:Alert variant="success" class="max-w-xl">
    <twig:Alert:Title>
        Success message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Success With Everything

```twig
<twig:Alert variant="success" class="max-w-xl">
    <twig:ux:icon name="lucide:circle-check" />
    <twig:Alert:Title>
        Success message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Warning Title Only

```twig
<twig:Alert variant="warning" class="max-w-xl">
    <twig:Alert:Title>
        Warning message
    </twig:Alert:Title>
</twig:Alert>
```

### Warning Title And Description

```twig
<twig:Alert variant="warning" class="max-w-xl">
    <twig:Alert:Title>
        Warning message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
</twig:Alert>
```

### Warning Title And Action

```twig
<twig:Alert variant="warning" class="max-w-xl">
    <twig:Alert:Title>
        Warning message
    </twig:Alert:Title>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Warning Title Description And Action

```twig
<twig:Alert variant="warning" class="max-w-xl">
    <twig:Alert:Title>
        Warning message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Warning With Everything

```twig
<twig:Alert variant="warning" class="max-w-xl">
    <twig:ux:icon name="lucide:triangle-alert" />
    <twig:Alert:Title>
        Warning message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Error Title Only

```twig
<twig:Alert variant="destructive" class="max-w-xl">
    <twig:Alert:Title>
        Error message
    </twig:Alert:Title>
</twig:Alert>
```

### Error Title And Description

```twig
<twig:Alert variant="destructive" class="max-w-xl">
    <twig:Alert:Title>
        Error message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
</twig:Alert>
```

### Error Title And Action

```twig
<twig:Alert variant="destructive" class="max-w-xl">
    <twig:Alert:Title>
        Error message
    </twig:Alert:Title>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Error Title Description And Action

```twig
<twig:Alert variant="destructive" class="max-w-xl">
    <twig:Alert:Title>
        Error message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Error With Everything

```twig
<twig:Alert variant="destructive" class="max-w-xl">
    <twig:ux:icon name="lucide:circle-x" />
    <twig:Alert:Title>
        Error message
    </twig:Alert:Title>
    <twig:Alert:Description>
        A short sentence explaining what happened.
    </twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            Dismiss
        </twig:Button>
        <twig:Button size="sm">
            Review
        </twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Dismissible

A close button removes the alert. The button is an icon `Button` in the `Alert:Action` slot and a short script hides the alert.

```twig
<div id="alert-dismissible" class="grid max-w-xl gap-2">
    <twig:Alert variant="info" data-dismissible>
        <twig:ux:icon name="lucide:info" />
        <twig:Alert:Title>
            Your trial ends in 3 days
        </twig:Alert:Title>
        <twig:Alert:Action>
            <twig:Button variant="ghost" size="icon-sm" type="button" aria-label="Dismiss" data-dismiss>
                <twig:ux:icon name="lucide:x" />
            </twig:Button>
        </twig:Alert:Action>
    </twig:Alert>
    <twig:Alert variant="success" data-dismissible>
        <twig:ux:icon name="lucide:circle-check" />
        <twig:Alert:Title>
            Settings saved
        </twig:Alert:Title>
        <twig:Alert:Action>
            <twig:Button variant="ghost" size="icon-sm" type="button" aria-label="Dismiss" data-dismiss>
                <twig:ux:icon name="lucide:x" />
            </twig:Button>
        </twig:Alert:Action>
    </twig:Alert>
</div>
<script>
    document.getElementById('alert-dismissible').addEventListener('click', (event) => {
        if (event.target.closest('[data-dismiss]')) event.target.closest('[data-dismissible]').remove();
    });
</script>
```

### Auto Dismiss

The message fades out by itself after a delay, like the `life` option of PrimeVue messages. Here a CSS animation hides it after 5 seconds; the alert stays in the page, so it is also announced as a status.

```twig
<style>
    @keyframes alert-life {
        0%, 85% { opacity: 1; }
        100% { opacity: 0; visibility: hidden; }
    }
    .alert-life {
        animation: alert-life 5s ease-in forwards;
    }
    @media (prefers-reduced-motion: reduce) {
        .alert-life { animation-duration: 0.01s; animation-delay: 5s; }
    }
</style>
<twig:Alert variant="success" role="status" class="alert-life max-w-xl">
    <twig:ux:icon name="lucide:circle-check" />
    <twig:Alert:Title>
        Profile updated
    </twig:Alert:Title>
    <twig:Alert:Description>
        This message disappears in a few seconds.
    </twig:Alert:Description>
</twig:Alert>
```

### Sizes

```twig
<div class="grid max-w-xl gap-3">
    <twig:Alert variant="info" class="px-2 py-1 text-xs">
        <twig:ux:icon name="lucide:info" />
        <twig:Alert:Title>
            Small message
        </twig:Alert:Title>
    </twig:Alert>
    <twig:Alert variant="info">
        <twig:ux:icon name="lucide:info" />
        <twig:Alert:Title>
            Default message
        </twig:Alert:Title>
    </twig:Alert>
    <twig:Alert variant="info" class="px-4 py-3 text-base">
        <twig:ux:icon name="lucide:info" class="size-5" />
        <twig:Alert:Title>
            Large message
        </twig:Alert:Title>
    </twig:Alert>
</div>
```

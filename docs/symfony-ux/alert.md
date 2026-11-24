# Alert

## Examples

### Title and Description

```twig
<twig:Alert class="max-w-md">
    <twig:Alert:Title>Heads up!</twig:Alert:Title>
    <twig:Alert:Description>You can add components to your app using the CLI.</twig:Alert:Description>
</twig:Alert>
```

### Leading Icon

```twig
<twig:Alert class="max-w-md">
    <twig:ux:icon name="lucide:circle-check" />
    <twig:Alert:Title>Your changes were saved</twig:Alert:Title>
</twig:Alert>
```

### Icon and Actions

```twig
<twig:Alert class="max-w-xl">
    <twig:ux:icon name="lucide:shield" />
    <twig:Alert:Title>A new version is available</twig:Alert:Title>
    <twig:Alert:Description>Update now to get the latest security fixes.</twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">Dismiss</twig:Button>
        <twig:Button size="sm">Update</twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Payment Failure

A destructive alert with a checklist.

```twig
<twig:Alert variant="destructive" class="max-w-md">
    <twig:ux:icon name="lucide:circle-alert" />
    <twig:Alert:Title>Unable to process your payment</twig:Alert:Title>
    <twig:Alert:Description>
        <p>Please verify your billing information and try again.</p>
        <ul class="mt-2 list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
        </ul>
    </twig:Alert:Description>
</twig:Alert>
```

### Title and Actions

```twig
<twig:Alert class="max-w-xl">
    <twig:ux:icon name="lucide:info" />
    <twig:Alert:Title>A new version is available</twig:Alert:Title>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">Dismiss</twig:Button>
        <twig:Button size="sm">Update</twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Direct Message

```twig
<twig:Alert class="max-w-xl">
    <twig:Avatar size="sm"><twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" /><twig:Avatar:Fallback>CN</twig:Avatar:Fallback></twig:Avatar>
    <twig:Alert:Title>shadcn sent you a message</twig:Alert:Title>
    <twig:Alert:Description>"Can you review the latest changes?"</twig:Alert:Description>
    <twig:Alert:Action class="flex gap-2">
        <twig:Button variant="outline" size="sm">View</twig:Button>
        <twig:Button size="sm">Reply</twig:Button>
    </twig:Alert:Action>
</twig:Alert>
```

### Urgent Billing

```twig
<twig:Alert variant="destructive" class="max-w-xl">
    <twig:ux:icon name="lucide:credit-card" />
    <twig:Alert:Title>Your subscription expires in 3 days</twig:Alert:Title>
    <twig:Alert:Description>Renew now to keep access to all features.</twig:Alert:Description>
    <twig:Alert:Action><twig:Button variant="destructive" size="sm">Renew Now</twig:Button></twig:Alert:Action>
</twig:Alert>
```

### Service Status

```twig
<div class="flex max-w-xl flex-col gap-2">
    <twig:Alert>
        <twig:ux:icon name="lucide:database" class="text-green-600" />
        <twig:Alert:Title>Database connected</twig:Alert:Title>
    </twig:Alert>
    <twig:Alert>
        <twig:ux:icon name="lucide:triangle-alert" class="text-amber-500" />
        <twig:Alert:Title>API latency is higher than usual</twig:Alert:Title>
        <twig:Alert:Action><twig:Button variant="outline" size="sm">Retry</twig:Button></twig:Alert:Action>
    </twig:Alert>
</div>
```

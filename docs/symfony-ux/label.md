# Label

## Examples

### Basic

```twig
<twig:Field class="max-w-xs">
    <twig:Label for="lb-username">Username</twig:Label>
    <twig:Input id="lb-username" placeholder="shadcn" />
</twig:Field>
```

### Textarea

```twig
<twig:Field class="max-w-sm">
    <twig:Label for="lb-message">Message</twig:Label>
    <twig:Textarea id="lb-message" placeholder="Type your message here." />
</twig:Field>
```

### Required

```twig
<twig:Field class="max-w-xs">
    <twig:Label for="lb-email">Email <span class="text-destructive" aria-hidden="true">*</span></twig:Label>
    <twig:Input id="lb-email" type="email" required placeholder="name@example.com" />
</twig:Field>
```

### Optional

```twig
<twig:Field class="max-w-xs">
    <twig:Label for="lb-phone">Phone number <span class="font-normal text-muted-foreground">(optional)</span></twig:Label>
    <twig:Input id="lb-phone" type="tel" />
</twig:Field>
```

### Helper Text

```twig
<twig:Field class="max-w-xs">
    <twig:Label for="lb-key">API key</twig:Label>
    <twig:Field:Description>You can find it in your account settings.</twig:Field:Description>
    <twig:Input id="lb-key" />
</twig:Field>
```

### Error State

```twig
<twig:Field data-invalid="true" class="max-w-xs">
    <twig:Label for="lb-error">Email</twig:Label>
    <twig:Input id="lb-error" type="email" value="not-an-email" aria-invalid="true" />
    <twig:Field:Error>Enter a valid email address.</twig:Field:Error>
</twig:Field>
```

### Badge

```twig
<twig:Field class="max-w-xs">
    <twig:Label for="lb-webhook">Webhook URL <twig:Badge variant="secondary">Active</twig:Badge></twig:Label>
    <twig:Input id="lb-webhook" value="https://example.com/hook" />
</twig:Field>
```

### Status Dot

```twig
<twig:Field class="max-w-xs">
    <twig:Label for="lb-server">Server
        <span class="relative flex size-2"><span class="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75"></span><span class="relative inline-flex size-2 rounded-full bg-green-500"></span></span>
    </twig:Label>
    <twig:Input id="lb-server" value="Running" disabled />
</twig:Field>
```

### Tooltip Info

```twig
<div style="min-height: 180px" class="pt-6">
    <twig:Field class="max-w-xs">
        <div class="flex items-center gap-1">
            <twig:Label for="lb-apikey">API key name</twig:Label>
            <twig:Tooltip id="lb-apikey-tip">
                <twig:Tooltip:Trigger>
                    <twig:Button variant="ghost" size="icon-xs" aria-label="More information" {{ ...tooltip_trigger_attrs }}><twig:ux:icon name="lucide:info" class="text-muted-foreground" /></twig:Button>
                </twig:Tooltip:Trigger>
                <twig:Tooltip:Content>Find the key in your dashboard under Developers.</twig:Tooltip:Content>
            </twig:Tooltip>
        </div>
        <twig:Input id="lb-apikey" />
    </twig:Field>
</div>
```

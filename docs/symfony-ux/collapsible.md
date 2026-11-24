# Collapsible

## Examples

### Checkbox Settings

```twig
<twig:Collapsible open class="w-full max-w-sm">
    <twig:Collapsible:Trigger>
        <twig:Button variant="outline" class="w-full justify-between" {{ ...collapsible_trigger_attrs }}>Notification channels <twig:ux:icon name="lucide:chevrons-up-down" /></twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content>
        <twig:Card class="mt-2"><twig:Card:Content class="grid gap-3">
            {% for v, on in {email: true, sms: false, push: true} %}
                <twig:Field orientation="horizontal"><twig:Checkbox id="col-{{ v }}" checked="{{ on }}" /><twig:Field:Label for="col-{{ v }}" class="font-normal capitalize">{{ v }}</twig:Field:Label></twig:Field>
            {% endfor %}
        </twig:Card:Content></twig:Card>
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### Form Fields

```twig
<twig:Collapsible class="w-full max-w-sm">
    <div class="flex items-center gap-2">
        <twig:Input value="$120.00" aria-label="Price" />
        <twig:Collapsible:Trigger><twig:Button variant="outline" size="icon" aria-label="More options" {{ ...collapsible_trigger_attrs }}><twig:ux:icon name="lucide:sliders-horizontal" /></twig:Button></twig:Collapsible:Trigger>
    </div>
    <twig:Collapsible:Content class="mt-2 grid gap-2">
        <twig:Input placeholder="Tax rate (%)" /><twig:Input placeholder="Discount (%)" />
    </twig:Collapsible:Content>
</twig:Collapsible>
```

### User Profile

```twig
<twig:Collapsible class="w-full max-w-xs rounded-lg border p-3">
    <twig:Collapsible:Trigger>
        <twig:Button variant="ghost" class="h-auto w-full justify-start gap-2 p-0 text-sm hover:bg-transparent" {{ ...collapsible_trigger_attrs }}>
            <twig:Avatar size="sm"><twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" /><twig:Avatar:Fallback>CN</twig:Avatar:Fallback></twig:Avatar> @shadcn
        </twig:Button>
    </twig:Collapsible:Trigger>
    <twig:Collapsible:Content class="mt-3 grid gap-1 text-xs text-muted-foreground"><p>Last activity: 2 hours ago</p><p>Online since 09:12</p><p>Location: 🇫🇷 France</p></twig:Collapsible:Content>
</twig:Collapsible>
```

### In Card

```twig
<twig:Collapsible class="w-full max-w-sm">
    <twig:Card>
        <twig:Collapsible:Trigger>
            <twig:Card:Header class="cursor-pointer" {{ ...collapsible_trigger_attrs }}>
                <twig:Card:Title>How do I reset my password?</twig:Card:Title>
            </twig:Card:Header>
        </twig:Collapsible:Trigger>
        <twig:Collapsible:Content><twig:Card:Content class="text-sm text-muted-foreground">Use the Forgot password link on the sign in page.</twig:Card:Content></twig:Collapsible:Content>
    </twig:Card>
</twig:Collapsible>
```


# Checkbox

## Examples

### Invalid State

Set `aria-invalid` on the checkbox and `data-invalid` on the `Field` to show the error styles.

```twig
<twig:Field orientation="horizontal" data-invalid="true" class="max-w-sm">
    <twig:Checkbox id="checkbox-invalid" name="checkbox-invalid" aria-invalid="true" />
    <twig:Field:Content>
        <twig:Field:Label for="checkbox-invalid">Accept terms and conditions</twig:Field:Label>
        <twig:Field:Description>You must accept the terms and conditions to continue.</twig:Field:Description>
    </twig:Field:Content>
</twig:Field>
```

### Colored

```twig
<div class="flex items-center gap-4">
    <twig:Checkbox id="cb-blue" checked class="checked:border-blue-600 checked:bg-blue-600 dark:checked:bg-blue-600" aria-label="Blue" />
    <twig:Checkbox id="cb-green" checked class="checked:border-green-600 checked:bg-green-600 dark:checked:bg-green-600" aria-label="Green" />
    <twig:Checkbox id="cb-yellow" checked class="checked:border-yellow-500 checked:bg-yellow-500 dark:checked:bg-yellow-500" aria-label="Yellow" />
</div>
```

### Label and Description

```twig
<twig:Field orientation="horizontal" class="max-w-sm">
    <twig:Checkbox id="cb-terms" name="terms" checked />
    <twig:Field:Content>
        <twig:Field:Label for="cb-terms">Accept terms and conditions</twig:Field:Label>
        <twig:Field:Description>By clicking this checkbox, you agree to the terms.</twig:Field:Description>
    </twig:Field:Content>
</twig:Field>
```

### Circle To-Do

```twig
<twig:Field orientation="horizontal" class="max-w-sm">
    <twig:Checkbox id="cb-todo" class="rounded-full" />
    <twig:Field:Label for="cb-todo" class="font-normal peer-checked:text-muted-foreground peer-checked:line-through">Write the release notes</twig:Field:Label>
</twig:Field>
```

### Setting Card

A whole card that toggles the checkbox.

```twig
<twig:Field:Label for="cb-setting" class="max-w-sm">
    <twig:Field orientation="horizontal" class="rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
        <twig:Checkbox id="cb-setting" />
        <twig:Field:Content>
            <twig:Field:Title>Enable notifications</twig:Field:Title>
            <twig:Field:Description>You can enable or disable notifications at any time.</twig:Field:Description>
        </twig:Field:Content>
    </twig:Field>
</twig:Field:Label>
```

### Card Rows

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    {% for channel in [{id: 'email', label: 'Email', icon: 'mail', on: true, first: true}, {id: 'sms', label: 'SMS', icon: 'smartphone', on: false, first: false}, {id: 'push', label: 'Push', icon: 'bell', on: false, first: false}] %}
        {% if not channel.first %}<twig:Separator />{% endif %}
        <twig:Field:Label for="cb-row-{{ channel.id }}" class="flex w-full cursor-pointer items-center gap-3 px-4 py-3">
            <twig:ux:icon name="lucide:{{ channel.icon }}" class="size-4 text-muted-foreground" />
            <span class="flex-1 font-normal">{{ channel.label }}</span>
            <twig:Checkbox id="cb-row-{{ channel.id }}" name="{{ channel.id }}" checked="{{ channel.on }}" />
        </twig:Field:Label>
    {% endfor %}
</twig:Card>
```

### Inline Group

```twig
<twig:Field:Set>
    <twig:Field:Legend variant="label">Permissions</twig:Field:Legend>
    <twig:Field:Group class="flex-row! flex-wrap gap-4">
        {% for p, on in {Read: true, Write: false, Delete: false} %}
            <twig:Field orientation="horizontal" class="w-auto">
                <twig:Checkbox id="cb-inline-{{ p|lower }}" name="{{ p|lower }}" checked="{{ on }}" />
                <twig:Field:Label for="cb-inline-{{ p|lower }}" class="font-normal">{{ p }}</twig:Field:Label>
            </twig:Field>
        {% endfor %}
    </twig:Field:Group>
</twig:Field:Set>
```

### Badge Group

```twig
<twig:Field:Group class="max-w-sm gap-3">
    <twig:Field orientation="horizontal">
        <twig:Checkbox id="cb-feat-1" />
        <twig:Field:Label for="cb-feat-1" class="font-normal">AI assistant <twig:Badge>New</twig:Badge></twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:Checkbox id="cb-feat-2" />
        <twig:Field:Label for="cb-feat-2" class="font-normal">Live collaboration <twig:Badge variant="secondary">Beta</twig:Badge></twig:Field:Label>
    </twig:Field>
</twig:Field:Group>
```

### Help Tooltip

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:Field orientation="horizontal" class="max-w-sm">
        <twig:Checkbox id="cb-help" />
        <twig:Field:Label for="cb-help" class="font-normal">Send usage statistics</twig:Field:Label>
        <twig:Tooltip id="cb-help-tip">
            <twig:Tooltip:Trigger>
                <twig:Button variant="ghost" size="icon-xs" aria-label="More information" {{ ...tooltip_trigger_attrs }}>
                    <twig:ux:icon name="lucide:circle-help" class="text-muted-foreground" />
                </twig:Button>
            </twig:Tooltip:Trigger>
            <twig:Tooltip:Content side="right">Anonymous data helps us improve the product.</twig:Tooltip:Content>
        </twig:Tooltip>
    </twig:Field>
</div>
```

### Frame Group

These examples use `Frame` from this kit.

```twig
<twig:Frame spacing="sm" class="max-w-xs">
    <twig:Frame:Header><twig:Frame:Title>Notification Settings</twig:Frame:Title></twig:Frame:Header>
    <twig:Frame:Panel class="overflow-hidden p-0">
        {% for k, d in {push: {l: 'Push notifications', on: true}, email: {l: 'Email notifications', on: false}, sms: {l: 'SMS notifications', on: false}} %}
            <label for="cb-frame-{{ k }}" class="flex cursor-pointer items-center gap-3 p-3 text-sm {{ k != 'push' ? 'border-t border-border' : '' }}"><twig:Checkbox id="cb-frame-{{ k }}" checked="{{ d.on }}" /> {{ d.l }}</label>
        {% endfor %}
    </twig:Frame:Panel>
</twig:Frame>
```

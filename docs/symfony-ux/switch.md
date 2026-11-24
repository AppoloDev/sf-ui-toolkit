# Switch

## Examples

### Basic

```twig
<twig:Field orientation="horizontal" class="w-fit">
    <twig:Switch id="sw-basic" name="airplane" />
    <twig:Field:Label for="sw-basic">Airplane Mode</twig:Field:Label>
</twig:Field>
```

### With Description

```twig
<twig:Field orientation="horizontal" class="max-w-sm justify-between">
    <twig:Field:Content>
        <twig:Field:Label for="sw-desc">Marketing emails</twig:Field:Label>
        <twig:Field:Description>Receive news and special offers.</twig:Field:Description>
    </twig:Field:Content>
    <twig:Switch id="sw-desc" name="marketing" />
</twig:Field>
```

### Switch Group

```twig
<twig:Field:Set class="max-w-xs">
    <twig:Field:Legend variant="label">Notifications</twig:Field:Legend>
    <twig:Field:Group class="gap-3">
        {% for v, on in {email: true, sms: false, push: true} %}
            <twig:Field orientation="horizontal">
                <twig:Switch id="sw-group-{{ v }}" name="{{ v }}" checked="{{ on }}" />
                <twig:Field:Label for="sw-group-{{ v }}" class="font-normal capitalize">{{ v }}</twig:Field:Label>
            </twig:Field>
        {% endfor %}
    </twig:Field:Group>
</twig:Field:Set>
```

### Card Separators

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    {% for v, on in {email: true, sms: false, push: true} %}
        {% if v != 'email' %}<twig:Separator />{% endif %}
        <twig:Field:Label for="sw-card-{{ v }}" class="flex cursor-pointer items-center justify-between px-4 py-3">
            <span class="font-normal capitalize">{{ v }}</span>
            <twig:Switch id="sw-card-{{ v }}" name="{{ v }}" checked="{{ on }}" />
        </twig:Field:Label>
    {% endfor %}
</twig:Card>
```

### Card With Icons

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    {% for v, c in {email: {i: 'mail', on: true}, sms: {i: 'smartphone', on: false}, push: {i: 'bell', on: true}} %}
        {% if v != 'email' %}<twig:Separator />{% endif %}
        <twig:Field:Label for="sw-icon-{{ v }}" class="flex cursor-pointer items-center gap-3 px-4 py-3">
            <twig:ux:icon name="lucide:{{ c.i }}" class="size-4 text-muted-foreground" />
            <span class="flex-1 font-normal capitalize">{{ v }}</span>
            <twig:Switch id="sw-icon-{{ v }}" name="{{ v }}" checked="{{ c.on }}" />
        </twig:Field:Label>
    {% endfor %}
</twig:Card>
```

### With Badges

```twig
<twig:Field:Group class="max-w-sm gap-3">
    <twig:Field orientation="horizontal">
        <twig:Switch id="sw-ai" />
        <twig:Field:Label for="sw-ai" class="font-normal">AI copilot <twig:Badge>New</twig:Badge></twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:Switch id="sw-collab" />
        <twig:Field:Label for="sw-collab" class="font-normal">Live collaboration <twig:Badge variant="secondary">Beta</twig:Badge></twig:Field:Label>
    </twig:Field>
</twig:Field:Group>
```

### Colored

```twig
<div class="flex items-center gap-4">
    <twig:Switch name="sw-blue" checked class="data-[state=checked]:bg-blue-600 has-checked:bg-blue-600" aria-label="Blue" />
    <twig:Switch name="sw-green" checked class="data-[state=checked]:bg-green-600 has-checked:bg-green-600" aria-label="Green" />
    <twig:Switch name="sw-yellow" checked class="data-[state=checked]:bg-yellow-500 has-checked:bg-yellow-500" aria-label="Yellow" />
</div>
```

### Destructive Confirm

```twig
<twig:Field orientation="horizontal" class="max-w-sm justify-between">
    <twig:Field:Content>
        <twig:Field:Label for="sw-wipe" class="text-destructive">Wipe all data</twig:Field:Label>
        <twig:Field:Description>This cannot be undone.</twig:Field:Description>
    </twig:Field:Content>
    <twig:Switch id="sw-wipe" name="wipe" />
</twig:Field>
```

### Compact Table

```twig
<twig:Card class="max-w-md gap-0 py-0">
    {% for v, hint in {autosave: 'Save files automatically', minimap: 'Show the code minimap', wrap: 'Wrap long lines'} %}
        {% if v != 'autosave' %}<twig:Separator />{% endif %}
        <div class="flex items-center justify-between gap-4 px-4 py-2.5">
            <div class="flex flex-col"><span class="text-sm font-medium capitalize">{{ v }}</span><span class="text-xs text-muted-foreground">{{ hint }}</span></div>
            <twig:Switch name="{{ v }}" size="sm" aria-label="{{ v|capitalize }}" />
        </div>
    {% endfor %}
</twig:Card>
```

### Card Grid

```twig
<div class="grid max-w-lg grid-cols-2 gap-3">
    {% for v, c in {github: {d: 'Sync repositories', i: 'github'}, slack: {d: 'Post updates', i: 'slack'}} %}
        <div class="flex flex-col gap-3 rounded-lg border p-4">
            <div class="flex items-center justify-between">
                <span class="flex size-9 items-center justify-center rounded-md border"><twig:ux:icon name="lucide:{{ c.i }}" class="size-4" /></span>
                <twig:Switch name="{{ v }}" size="sm" aria-label="{{ v|capitalize }}" />
            </div>
            <div><p class="text-sm font-medium capitalize">{{ v }}</p><p class="text-xs text-muted-foreground">{{ c.d }}</p></div>
        </div>
    {% endfor %}
</div>
```


# Tooltip

## Examples

### Icon Trigger

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:Tooltip id="tip-info">
        <twig:Tooltip:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="More information" {{ ...tooltip_trigger_attrs }}><twig:ux:icon name="lucide:info" /></twig:Button>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content>Billing runs on the first day of the month.</twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

### Keyboard Shortcut

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:Tooltip id="tip-save">
        <twig:Tooltip:Trigger>
            <twig:Button variant="outline" size="icon-sm" aria-label="Save" {{ ...tooltip_trigger_attrs }}><twig:ux:icon name="lucide:save" /></twig:Button>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content>Save <twig:Kbd class="ms-1">⌘S</twig:Kbd></twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

### Toolbar Actions

```twig
<div class="pt-10" style="min-height: 140px">
    <div class="flex gap-1">
        {% for v, i in {bold: 'bold', italic: 'italic', underline: 'underline', image: 'image'} %}
            <twig:Tooltip id="tip-toolbar-{{ v }}">
                <twig:Tooltip:Trigger>
                    <twig:Button variant="ghost" size="icon-sm" aria-label="{{ v|capitalize }}" {{ ...tooltip_trigger_attrs }}><twig:ux:icon name="lucide:{{ i }}" /></twig:Button>
                </twig:Tooltip:Trigger>
                <twig:Tooltip:Content>{{ v|capitalize }}</twig:Tooltip:Content>
            </twig:Tooltip>
        {% endfor %}
    </div>
</div>
```

### Warning

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:Tooltip id="tip-warning">
        <twig:Tooltip:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="Warning" {{ ...tooltip_trigger_attrs }}><twig:ux:icon name="lucide:triangle-alert" class="text-amber-500" /></twig:Button>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content><twig:ux:icon name="lucide:triangle-alert" class="size-3" /> This action cannot be undone.</twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

### Disabled Button

A span wraps the disabled button so the reason still shows on hover.

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:Tooltip id="tip-disabled-delete">
        <twig:Tooltip:Trigger>
            <span class="inline-block" tabindex="0">
                <twig:Button variant="destructive" disabled class="pointer-events-none">Delete Project</twig:Button>
            </span>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content>Only the owner can delete this project.</twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

### Avatar Role Badge

```twig
<div class="pt-10" style="min-height: 160px">
    <twig:Tooltip id="tip-avatar">
        <twig:Tooltip:Trigger>
            <twig:Button variant="ghost" size="icon" class="rounded-full" aria-label="shadcn" {{ ...tooltip_trigger_attrs }}>
                <twig:Avatar><twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" /><twig:Avatar:Fallback>CN</twig:Avatar:Fallback></twig:Avatar>
            </twig:Button>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content class="flex items-center gap-2">
            <div><p class="flex items-center gap-2 font-medium">shadcn <twig:Badge variant="secondary">Admin</twig:Badge></p><p class="text-xs opacity-70">shadcn@example.com</p></div>
        </twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

### Unread Bell

```twig
<div class="pt-10" style="min-height: 160px">
    <twig:Tooltip id="tip-bell">
        <twig:Tooltip:Trigger>
            <twig:Button variant="ghost" size="icon" class="relative" aria-label="Notifications" {{ ...tooltip_trigger_attrs }}>
                <twig:ux:icon name="lucide:bell" />
                <span class="absolute end-1.5 top-1.5 size-2 rounded-full bg-destructive"></span>
            </twig:Button>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content>3 new notifications</twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```


### Placements

```twig
<div class="flex flex-wrap justify-center gap-3 py-16" style="min-height: 220px">
    {% for s in ['top', 'right', 'bottom', 'left'] %}
        <twig:Tooltip id="tip-side-{{ s }}">
            <twig:Tooltip:Trigger><twig:Button variant="outline" class="capitalize" {{ ...tooltip_trigger_attrs }}>{{ s }}</twig:Button></twig:Tooltip:Trigger>
            <twig:Tooltip:Content side="{{ s }}">Tooltip on the {{ s }}</twig:Tooltip:Content>
        </twig:Tooltip>
    {% endfor %}
</div>
```

### Bell With Count

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:Tooltip id="tip-bell-count">
        <twig:Tooltip:Trigger>
            <twig:Button variant="outline" size="icon" class="relative" aria-label="Notifications" {{ ...tooltip_trigger_attrs }}>
                <twig:ux:icon name="lucide:bell" />
                <span class="absolute -end-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-white">3</span>
            </twig:Button>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content>3 unread notifications</twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

### Verified Domain

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:Tooltip id="tip-verified">
        <twig:Tooltip:Trigger>
            <twig:Badge variant="secondary" class="gap-1" {{ ...tooltip_trigger_attrs }}><twig:ux:icon name="lucide:badge-check" class="size-3" /> example.com</twig:Badge>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content>Domain ownership verified on Nov 12</twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

### Upgrade Prompt

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:Tooltip id="tip-upgrade">
        <twig:Tooltip:Trigger>
            <span class="inline-block" tabindex="0" {{ html_attr(tooltip_trigger_attrs) }}><twig:Button variant="outline" disabled><twig:ux:icon name="lucide:lock" /> Export data</twig:Button></span>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content>Upgrade to Pro to export your data</twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

### File Info

```twig
<div class="pt-10" style="min-height: 160px">
    <twig:Tooltip id="tip-file">
        <twig:Tooltip:Trigger>
            <twig:Button variant="ghost" {{ ...tooltip_trigger_attrs }}><twig:ux:icon name="lucide:file-text" /> report-q4.pdf</twig:Button>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content>
            <div class="grid gap-0.5 text-xs"><span class="font-medium">report-q4.pdf</span><span>2.4 MB · PDF</span><span>Modified Nov 20</span></div>
        </twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

### Label Badges

```twig
<div class="flex gap-2 pt-10" style="min-height: 140px">
    {% for l, d in {bug: 'Something is not working', feature: 'New feature request', docs: 'Documentation changes'} %}
        <twig:Tooltip id="tip-label-{{ l }}">
            <twig:Tooltip:Trigger><twig:Badge variant="outline" {{ ...tooltip_trigger_attrs }}>{{ l }}</twig:Badge></twig:Tooltip:Trigger>
            <twig:Tooltip:Content>{{ d }}</twig:Tooltip:Content>
        </twig:Tooltip>
    {% endfor %}
</div>
```

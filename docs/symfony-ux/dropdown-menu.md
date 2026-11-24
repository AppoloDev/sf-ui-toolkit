# Dropdown Menu

## Examples

### Opening Positions

```twig
<div class="flex flex-wrap justify-center gap-3 pt-4" style="min-height: 280px">
    {% for side in ['top', 'right', 'bottom', 'left'] %}
        <twig:DropdownMenu id="dd-side-{{ side }}" side="{{ side }}">
            <twig:DropdownMenu:Trigger><twig:Button variant="outline" class="capitalize" {{ ...dropdown_menu_trigger_attrs }}>{{ side }}</twig:Button></twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content class="w-36">
                <twig:DropdownMenu:Item>Profile</twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>Billing</twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>Settings</twig:DropdownMenu:Item>
            </twig:DropdownMenu:Content>
        </twig:DropdownMenu>
    {% endfor %}
</div>
```

### Quick Actions

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:DropdownMenu id="dd-quick" align="end">
        <twig:DropdownMenu:Trigger><twig:Button variant="ghost" size="icon" aria-label="More options" {{ ...dropdown_menu_trigger_attrs }}><twig:ux:icon name="lucide:ellipsis" /></twig:Button></twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content>
            <twig:DropdownMenu:Item>Settings</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>Share</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item variant="destructive">Remove</twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Record Actions

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:DropdownMenu id="dd-record" align="end">
        <twig:DropdownMenu:Trigger><twig:Button variant="ghost" size="icon" aria-label="Record actions" {{ ...dropdown_menu_trigger_attrs }}><twig:ux:icon name="lucide:ellipsis-vertical" /></twig:Button></twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-48">
            <twig:DropdownMenu:Item><twig:ux:icon name="lucide:pencil" class="size-4" /> Edit</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item><twig:ux:icon name="lucide:copy" class="size-4" /> Duplicate</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Sub>
                <twig:DropdownMenu:SubTrigger><twig:ux:icon name="lucide:folder-input" class="size-4" /> Move to</twig:DropdownMenu:SubTrigger>
                <twig:DropdownMenu:SubContent>
                    <twig:DropdownMenu:Item>Inbox</twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>Archive</twig:DropdownMenu:Item>
                </twig:DropdownMenu:SubContent>
            </twig:DropdownMenu:Sub>
            <twig:DropdownMenu:Item><twig:ux:icon name="lucide:share-2" class="size-4" /> Share</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item><twig:ux:icon name="lucide:link" class="size-4" /> Copy link</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item variant="destructive"><twig:ux:icon name="lucide:trash-2" class="size-4" /> Delete</twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Share and Export

```twig
<div class="flex justify-center pt-4" style="min-height: 340px">
    <twig:DropdownMenu id="dd-share">
        <twig:DropdownMenu:Trigger><twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}><twig:ux:icon name="lucide:share" data-icon="inline-start" /> Share</twig:Button></twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-48">
            <twig:DropdownMenu:Group>
                <twig:DropdownMenu:Label>Share</twig:DropdownMenu:Label>
                <twig:DropdownMenu:Item>Email</twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>Slack</twig:DropdownMenu:Item>
            </twig:DropdownMenu:Group>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Group>
                <twig:DropdownMenu:Label>Export</twig:DropdownMenu:Label>
                <twig:DropdownMenu:Item>PDF</twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>CSV</twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>PNG</twig:DropdownMenu:Item>
            </twig:DropdownMenu:Group>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item>Print <twig:DropdownMenu:Shortcut>⌘P</twig:DropdownMenu:Shortcut></twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Notification Items

```twig
<div class="flex justify-center pt-4" style="min-height: 260px">
    <twig:DropdownMenu id="dd-notif" align="end">
        <twig:DropdownMenu:Trigger><twig:Button variant="ghost" size="icon" aria-label="Notifications" {{ ...dropdown_menu_trigger_attrs }}><twig:ux:icon name="lucide:bell" /></twig:Button></twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-64">
            <twig:DropdownMenu:Item>Your export is ready <twig:ux:icon name="lucide:check" class="ms-auto size-4" /></twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>New comment on Report</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>Invoice paid</twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Workspace Switcher

```twig
<div class="flex justify-center pt-4" style="min-height: 300px">
    <twig:DropdownMenu id="dd-workspace" align="start">
        <twig:DropdownMenu:Trigger><twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>Acme Inc <twig:ux:icon name="lucide:chevrons-up-down" class="size-4 text-muted-foreground" /></twig:Button></twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-60">
            <twig:DropdownMenu:Label>Workspaces</twig:DropdownMenu:Label>
            {% for n, p in {'Acme Inc': 'Enterprise', 'Monsters Inc': 'Startup', 'Personal': 'Free'} %}
                <twig:DropdownMenu:Item>
                    <span class="flex flex-col"><span>{{ n }}</span><span class="text-xs text-muted-foreground">{{ p }}</span></span>
                    {% if n == 'Acme Inc' %}<twig:ux:icon name="lucide:check" class="ms-auto size-4" />{% endif %}
                </twig:DropdownMenu:Item>
            {% endfor %}
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item><twig:ux:icon name="lucide:plus" class="size-4" /> Create workspace</twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Create Menu

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:DropdownMenu id="dd-create">
        <twig:DropdownMenu:Trigger><twig:Button {{ ...dropdown_menu_trigger_attrs }}><twig:ux:icon name="lucide:plus" data-icon="inline-start" /> New</twig:Button></twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content>
            <twig:DropdownMenu:Item>Customer</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>Order</twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>Invoice</twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

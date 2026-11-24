# Dialog

## Examples

### Full Width Button

```twig
<div style="min-height: 320px">
    <twig:Dialog id="dlg-timeout">
        <twig:Dialog:Trigger><twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>Session timeout</twig:Button></twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-sm">
            <twig:Dialog:Header>
                <twig:Dialog:Title>Session expired</twig:Dialog:Title>
                <twig:Dialog:Description>You were signed out after a period of inactivity.</twig:Dialog:Description>
            </twig:Dialog:Header>
            <twig:Dialog:Footer><twig:Button class="w-full">Sign In Again</twig:Button></twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Destructive Confirmation

```twig
<div style="min-height: 340px">
    <twig:Dialog id="dlg-delete">
        <twig:Dialog:Trigger><twig:Button variant="destructive" {{ ...dialog_trigger_attrs }}>Delete project</twig:Button></twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <span class="mb-2 flex size-10 items-center justify-center rounded-full bg-destructive/10 text-destructive"><twig:ux:icon name="lucide:triangle-alert" class="size-5" /></span>
                <twig:Dialog:Title>Delete this project?</twig:Dialog:Title>
                <twig:Dialog:Description>This permanently removes the project and all of its data. This cannot be undone.</twig:Dialog:Description>
            </twig:Dialog:Header>
            <twig:Dialog:Footer>
                <twig:Dialog:Close><twig:Button variant="outline" {{ ...dialog_close_attrs }}>Cancel</twig:Button></twig:Dialog:Close>
                <twig:Button variant="destructive">Delete</twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Cookie Consent

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-cookies">
        <twig:Dialog:Trigger><twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>Cookie settings</twig:Button></twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>Cookie preferences</twig:Dialog:Title>
                <twig:Dialog:Description>Choose which cookies you allow.</twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-3">
                {% for v, c in {essential: {t: 'Essential', on: true, locked: true}, analytics: {t: 'Analytics', on: false, locked: false}, marketing: {t: 'Marketing', on: false, locked: false}} %}
                    <twig:Field orientation="horizontal" class="justify-between">
                        <twig:Field:Label for="ck-{{ v }}">{{ c.t }}</twig:Field:Label>
                        <twig:Switch id="ck-{{ v }}" name="{{ v }}" checked="{{ c.on }}" disabled="{{ c.locked }}" />
                    </twig:Field>
                {% endfor %}
            </div>
            <twig:Dialog:Footer>
                <twig:Dialog:Close><twig:Button variant="outline" {{ ...dialog_close_attrs }}>Save Preferences</twig:Button></twig:Dialog:Close>
                <twig:Button>Accept All</twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Keyboard Shortcuts

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-shortcuts">
        <twig:Dialog:Trigger><twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>Keyboard shortcuts</twig:Button></twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-xl">
            <twig:Dialog:Header><twig:Dialog:Title>Keyboard shortcuts</twig:Dialog:Title></twig:Dialog:Header>
            <div class="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                {% for a, k in {Search: '⌘K', Save: '⌘S', Copy: '⌘C', Paste: '⌘V', Undo: '⌘Z', Redo: '⇧⌘Z'} %}
                    <div class="flex items-center justify-between"><span class="text-muted-foreground">{{ a }}</span><twig:Kbd>{{ k }}</twig:Kbd></div>
                {% endfor %}
            </div>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Full-Screen

```twig
<div style="min-height: 320px">
    <twig:Dialog id="dlg-full">
        <twig:Dialog:Trigger><twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>Open full screen</twig:Button></twig:Dialog:Trigger>
        <twig:Dialog:Content class="flex h-[90vh] flex-col gap-0 p-0 sm:max-w-[95vw]">
            <twig:Dialog:Header class="border-b px-6 py-4"><twig:Dialog:Title>Full screen dialog</twig:Dialog:Title></twig:Dialog:Header>
            <div class="flex-1 overflow-y-auto p-6 text-sm">
                {% for i in 1..12 %}<p class="mb-3 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{% endfor %}
            </div>
            <twig:Dialog:Footer class="border-t px-6 py-4"><twig:Dialog:Close><twig:Button variant="outline" {{ ...dialog_close_attrs }}>Close</twig:Button></twig:Dialog:Close></twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

# Sheet

## Examples

### Profile Editor

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sheet-profile">
        <twig:Sheet:Trigger><twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>Edit profile</twig:Button></twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header>
                <twig:Sheet:Title>Edit profile</twig:Sheet:Title>
                <twig:Sheet:Description>Make changes to your profile here.</twig:Sheet:Description>
            </twig:Sheet:Header>
            <div class="grid flex-1 auto-rows-min gap-4 px-4">
                <twig:Field><twig:Field:Label for="sh-name">Name</twig:Field:Label><twig:Input id="sh-name" value="Pedro Duarte" /></twig:Field>
                <twig:Field><twig:Field:Label for="sh-user">Username</twig:Field:Label><twig:Input id="sh-user" value="@peduarte" /></twig:Field>
            </div>
            <twig:Sheet:Footer>
                <twig:Button type="submit">Save changes</twig:Button>
                <twig:Sheet:Close><twig:Button variant="outline" {{ ...sheet_close_attrs }}>Cancel</twig:Button></twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

### Scrollable Content

```twig
<div style="min-height: 420px">
    <twig:Sheet id="sheet-scroll">
        <twig:Sheet:Trigger><twig:Button variant="outline" {{ ...sheet_trigger_attrs }}>Terms</twig:Button></twig:Sheet:Trigger>
        <twig:Sheet:Content>
            <twig:Sheet:Header><twig:Sheet:Title>Terms of service</twig:Sheet:Title></twig:Sheet:Header>
            <div class="min-h-0 flex-1 overflow-y-auto px-4 text-sm text-muted-foreground">
                {% for i in 1..14 %}<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>{% endfor %}
            </div>
            <twig:Sheet:Footer>
                <twig:Button>Save</twig:Button>
                <twig:Sheet:Close><twig:Button variant="outline" {{ ...sheet_close_attrs }}>Cancel</twig:Button></twig:Sheet:Close>
            </twig:Sheet:Footer>
        </twig:Sheet:Content>
    </twig:Sheet>
</div>
```

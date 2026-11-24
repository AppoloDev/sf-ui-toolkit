# Command

## Examples

### Always Open

```twig
<twig:Command class="max-w-xs rounded-lg border">
    <twig:Command:Input placeholder="Type a command or search..." />
    <twig:Command:List>
        <twig:Command:Empty>No results found.</twig:Command:Empty>
        <twig:Command:Group heading="Suggestions">
            <twig:Command:Item>Calendar</twig:Command:Item>
            <twig:Command:Item>Search Emoji</twig:Command:Item>
            <twig:Command:Item disabled>Calculator</twig:Command:Item>
        </twig:Command:Group>
    </twig:Command:List>
</twig:Command>
```

### File Search

```twig
<div style="min-height: 300px">
<twig:Dialog id="command-files">
    <twig:Dialog:Trigger><twig:Button variant="outline" class="w-fit" {{ ...dialog_trigger_attrs }}><twig:ux:icon name="lucide:search" /> Find a file</twig:Button></twig:Dialog:Trigger>
    <twig:Command:Dialog>
        <twig:Command>
            <twig:Command:Input placeholder="Search files..." />
            <twig:Command:List>
                <twig:Command:Empty>No files found.</twig:Command:Empty>
                <twig:Command:Group heading="Files">
                    {% for f in [{n: 'index.html.twig', p: 'templates/', t: 'Twig'}, {n: 'app.js', p: 'assets/', t: 'JS'}, {n: 'services.yaml', p: 'config/', t: 'YAML'}] %}
                        <twig:Command:Item><twig:ux:icon name="lucide:file" /> <span>{{ f.n }}</span> <span class="text-xs text-muted-foreground">{{ f.p }}</span> <twig:Badge variant="secondary" class="ms-auto">{{ f.t }}</twig:Badge></twig:Command:Item>
                    {% endfor %}
                </twig:Command:Group>
            </twig:Command:List>
        </twig:Command>
    </twig:Command:Dialog>
</twig:Dialog>
</div>
```

### User Search

```twig
<div style="min-height: 300px">
<twig:Dialog id="command-users">
    <twig:Dialog:Trigger><twig:Button variant="outline" class="w-fit" {{ ...dialog_trigger_attrs }}><twig:ux:icon name="lucide:users" /> Find a person</twig:Button></twig:Dialog:Trigger>
    <twig:Command:Dialog>
        <twig:Command>
            <twig:Command:Input placeholder="Search people..." />
            <twig:Command:List>
                <twig:Command:Empty>No people found.</twig:Command:Empty>
                <twig:Command:Group heading="Team">
                    {% for u in [{n: 'shadcn', r: 'Admin', v: 'default'}, {n: 'maxleiter', r: 'Editor', v: 'secondary'}, {n: 'evilrabbit', r: 'Viewer', v: 'outline'}] %}
                        <twig:Command:Item>
                            <twig:Avatar size="sm"><twig:Avatar:Image src="https://github.com/{{ u.n }}.png" alt="{{ u.n }}" /><twig:Avatar:Fallback>{{ u.n|first|upper }}</twig:Avatar:Fallback></twig:Avatar>
                            <span>{{ u.n }}</span><twig:Badge variant="{{ u.v }}" class="ms-auto">{{ u.r }}</twig:Badge>
                        </twig:Command:Item>
                    {% endfor %}
                </twig:Command:Group>
            </twig:Command:List>
        </twig:Command>
    </twig:Command:Dialog>
</twig:Dialog>
</div>
```

### Action Palette

```twig
<div style="min-height: 340px">
<twig:Dialog id="command-actions">
    <twig:Dialog:Trigger><twig:Button variant="outline" class="w-fit" {{ ...dialog_trigger_attrs }}>Actions <twig:Kbd>⌘K</twig:Kbd></twig:Button></twig:Dialog:Trigger>
    <twig:Command:Dialog>
        <twig:Command>
            <twig:Command:Input placeholder="What do you want to do?" />
            <twig:Command:List>
                <twig:Command:Empty>No results found.</twig:Command:Empty>
                <twig:Command:Group heading="Create">
                    <twig:Command:Item><twig:ux:icon name="lucide:folder-plus" /> New project</twig:Command:Item>
                    <twig:Command:Item><twig:ux:icon name="lucide:user-plus" /> Invite member</twig:Command:Item>
                </twig:Command:Group>
                <twig:Command:Group heading="Navigate">
                    <twig:Command:Item><twig:ux:icon name="lucide:layout-dashboard" /> Dashboard</twig:Command:Item>
                    <twig:Command:Item><twig:ux:icon name="lucide:settings" /> Settings</twig:Command:Item>
                </twig:Command:Group>
            </twig:Command:List>
        </twig:Command>
    </twig:Command:Dialog>
</twig:Dialog>
</div>
```

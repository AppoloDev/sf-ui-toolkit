# Item

## Examples

### Dropdown

Use `Item` inside a `DropdownMenu:Item` to build a rich account picker.

```twig
<div class="flex justify-center pt-6" style="min-height: 280px">
    <twig:DropdownMenu id="item-dropdown" align="end">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                Select <twig:ux:icon name="lucide:chevron-down" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-56">
            <twig:DropdownMenu:Group>
                {% for person in [
                    {username: 'shadcn', email: 'shadcn@vercel.com'},
                    {username: 'maxleiter', email: 'maxleiter@vercel.com'},
                    {username: 'evilrabbit', email: 'evilrabbit@vercel.com'},
                ] %}
                    <twig:DropdownMenu:Item>
                        <twig:Item size="xs" class="w-full p-2">
                            <twig:Item:Media>
                                <twig:Avatar class="size-6">
                                    <twig:Avatar:Image src="https://github.com/{{ person.username }}.png" alt="{{ person.username }}" class="grayscale" />
                                    <twig:Avatar:Fallback>{{ person.username|first|upper }}</twig:Avatar:Fallback>
                                </twig:Avatar>
                            </twig:Item:Media>
                            <twig:Item:Content class="gap-0">
                                <twig:Item:Title>{{ person.username }}</twig:Item:Title>
                                <twig:Item:Description class="leading-none">{{ person.email }}</twig:Item:Description>
                            </twig:Item:Content>
                        </twig:Item>
                    </twig:DropdownMenu:Item>
                {% endfor %}
            </twig:DropdownMenu:Group>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Variants

```twig
<div class="flex w-full max-w-md flex-col gap-3">
    {% for v in ['default', 'outline', 'muted'] %}
        <twig:Item variant="{{ v }}"><twig:Item:Content><twig:Item:Title class="capitalize">{{ v }}</twig:Item:Title><twig:Item:Description>A row with the {{ v }} variant.</twig:Item:Description></twig:Item:Content></twig:Item>
    {% endfor %}
</div>
```

### Icon and Actions

```twig
<div class="flex w-full max-w-md flex-col gap-3">
    {% for c, i in {Email: 'mail', SMS: 'smartphone', Push: 'bell'} %}
        <twig:Item variant="outline">
            <twig:Item:Media variant="icon"><twig:ux:icon name="lucide:{{ i }}" /></twig:Item:Media>
            <twig:Item:Content><twig:Item:Title>{{ c }}</twig:Item:Title></twig:Item:Content>
            <twig:Item:Actions><twig:Button variant="outline" size="sm">Configure</twig:Button></twig:Item:Actions>
        </twig:Item>
    {% endfor %}
</div>
```

### Navigation Links

```twig
<div class="flex w-full max-w-sm flex-col">
    {% for l, i in {Profile: 'user', Security: 'shield', Billing: 'credit-card'} %}
        <twig:Item as="a" href="#" size="sm">
            <twig:Item:Media variant="icon"><twig:ux:icon name="lucide:{{ i }}" /></twig:Item:Media>
            <twig:Item:Content><twig:Item:Title>{{ l }}</twig:Item:Title></twig:Item:Content>
            <twig:ux:icon name="lucide:chevron-right" class="size-4 text-muted-foreground" />
        </twig:Item>
    {% endfor %}
</div>
```

### Status Badges

```twig
<twig:Item:Group class="w-full max-w-md gap-2">
    {% for u, d in {shadcn: {r: 'Admin', s: 'Online', v: 'default'}, maxleiter: {r: 'Editor', s: 'Away', v: 'secondary'}, evilrabbit: {r: 'Viewer', s: 'Offline', v: 'outline'}} %}
        <twig:Item variant="outline" size="sm">
            <twig:Item:Media><twig:Avatar><twig:Avatar:Image src="https://github.com/{{ u }}.png" alt="{{ u }}" /><twig:Avatar:Fallback>{{ u|first|upper }}</twig:Avatar:Fallback></twig:Avatar></twig:Item:Media>
            <twig:Item:Content><twig:Item:Title>{{ u }}</twig:Item:Title><twig:Item:Description>{{ d.r }}</twig:Item:Description></twig:Item:Content>
            <twig:Badge variant="{{ d.v }}">{{ d.s }}</twig:Badge>
        </twig:Item>
    {% endfor %}
</twig:Item:Group>
```

### File Rows

```twig
<div class="flex w-full max-w-lg flex-col gap-2">
    {% for f in [{n: 'proposal.pdf', m: '2.4 MB · Updated 2h ago', b: 'Final', v: 'default'}, {n: 'budget.xlsx', m: '580 KB · Updated yesterday', b: 'Draft', v: 'secondary'}, {n: 'brief.docx', m: '120 KB · Updated 3d ago', b: 'Review', v: 'outline'}] %}
        <twig:Item variant="outline" size="sm">
            <twig:Item:Media variant="icon"><twig:ux:icon name="lucide:file-text" /></twig:Item:Media>
            <twig:Item:Content><twig:Item:Title>{{ f.n }}</twig:Item:Title><twig:Item:Description>{{ f.m }}</twig:Item:Description></twig:Item:Content>
            <twig:Badge variant="{{ f.v }}">{{ f.b }}</twig:Badge>
            <twig:Item:Actions><twig:Button variant="outline" size="sm">Open</twig:Button></twig:Item:Actions>
        </twig:Item>
    {% endfor %}
</div>
```

### Keyboard Shortcuts

```twig
<div class="flex w-64 flex-col">
    {% for l, d in {Search: {i: 'search', k: '⌘K'}, Save: {i: 'save', k: '⌘S'}, Print: {i: 'printer', k: '⌘P'}} %}
        <twig:Item as="a" href="#" size="xs">
            <twig:Item:Media variant="icon"><twig:ux:icon name="lucide:{{ d.i }}" /></twig:Item:Media>
            <twig:Item:Content><twig:Item:Title>{{ l }}</twig:Item:Title></twig:Item:Content>
            <twig:Kbd>{{ d.k }}</twig:Kbd>
        </twig:Item>
    {% endfor %}
</div>
```

### Small Count Badges

```twig
<div class="flex w-56 flex-col">
    {% for f, n in {Inbox: 12, Drafts: 3, Sent: 0, Trash: 0} %}
        <twig:Item as="a" href="#" size="xs">
            <twig:Item:Content><twig:Item:Title>{{ f }}</twig:Item:Title></twig:Item:Content>
            {% if n %}<twig:Badge variant="secondary" class="rounded-full">{{ n }}</twig:Badge>{% endif %}
        </twig:Item>
    {% endfor %}
</div>
```

### Team Roles

```twig
<div style="min-height: 300px" class="w-full max-w-md">
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media><twig:Avatar><twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" /><twig:Avatar:Fallback>CN</twig:Avatar:Fallback></twig:Avatar></twig:Item:Media>
        <twig:Item:Content><twig:Item:Title>shadcn</twig:Item:Title><twig:Item:Description>shadcn@example.com</twig:Item:Description></twig:Item:Content>
        <twig:Badge variant="secondary">Admin</twig:Badge>
        <twig:DropdownMenu id="item-roles" align="end">
            <twig:DropdownMenu:Trigger><twig:Button variant="ghost" size="icon-sm" aria-label="Open menu" {{ ...dropdown_menu_trigger_attrs }}><twig:ux:icon name="lucide:ellipsis" /></twig:Button></twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content><twig:DropdownMenu:Item>Change role</twig:DropdownMenu:Item><twig:DropdownMenu:Item>View profile</twig:DropdownMenu:Item><twig:DropdownMenu:Separator /><twig:DropdownMenu:Item variant="destructive">Remove</twig:DropdownMenu:Item></twig:DropdownMenu:Content>
        </twig:DropdownMenu>
    </twig:Item>
</div>
```

### Integrations

```twig
<div class="flex w-full max-w-md flex-col gap-2">
    {% for s, c in {GitHub: true, Slack: true, Notion: false} %}
        <twig:Item variant="outline" size="sm">
            <twig:Item:Media variant="icon"><twig:ux:icon name="lucide:plug" /></twig:Item:Media>
            <twig:Item:Content><twig:Item:Title>{{ s }}</twig:Item:Title></twig:Item:Content>
            {% if c %}<twig:Badge variant="secondary">Connected</twig:Badge>{% else %}<twig:Button variant="outline" size="sm">Connect</twig:Button>{% endif %}
        </twig:Item>
    {% endfor %}
</div>
```

### Activity Feed

```twig
<div class="flex w-full max-w-lg flex-col gap-2">
    {% for a in [{u: 'shadcn', v: 'deployed', t: 'web-app', w: '2m ago'}, {u: 'maxleiter', v: 'merged', t: 'feature/auth', w: '1h ago'}, {u: 'evilrabbit', v: 'opened', t: 'issue #42', w: '3h ago'}] %}
        <twig:Item size="xs">
            <twig:Item:Media><twig:Avatar size="sm"><twig:Avatar:Image src="https://github.com/{{ a.u }}.png" alt="{{ a.u }}" /><twig:Avatar:Fallback>{{ a.u|first|upper }}</twig:Avatar:Fallback></twig:Avatar></twig:Item:Media>
            <twig:Item:Content><twig:Item:Title class="font-normal"><span class="font-medium">{{ a.u }}</span> <twig:Badge variant="secondary">{{ a.v }}</twig:Badge> {{ a.t }}</twig:Item:Title></twig:Item:Content>
            <span class="text-xs text-muted-foreground">{{ a.w }}</span>
        </twig:Item>
    {% endfor %}
</div>
```

# Select

## Examples

### Small Trigger

```twig
<div style="min-height: 240px">
    <twig:Select id="select-small">
        <twig:Select:Trigger size="sm" class="w-44"><twig:Select:Value placeholder="Select a fruit" /></twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-small-list">
                <twig:Select:Item value="apple">Apple</twig:Select:Item>
                <twig:Select:Item value="banana">Banana</twig:Select:Item>
                <twig:Select:Item value="blueberry">Blueberry</twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Icons

```twig
<div style="min-height: 280px">
    <twig:Select id="select-icons">
        <twig:Select:Trigger class="w-52"><twig:Select:Value placeholder="Select a section" /></twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-icons-list">
                <twig:Select:Item value="dashboard"><twig:ux:icon name="lucide:layout-dashboard" class="size-4 text-muted-foreground" /> Dashboard</twig:Select:Item>
                <twig:Select:Item value="analytics"><twig:ux:icon name="lucide:chart-column" class="size-4 text-muted-foreground" /> Analytics</twig:Select:Item>
                <twig:Select:Item value="security"><twig:ux:icon name="lucide:shield" class="size-4 text-muted-foreground" /> Security</twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Field With Label

```twig
<div style="min-height: 280px">
    <twig:Field class="max-w-xs">
        <twig:Field:Label for="select-fruit">Favorite Fruit</twig:Field:Label>
        <twig:Select id="select-fruit">
            <twig:Select:Trigger class="w-full"><twig:Select:Value placeholder="Select a fruit" /></twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="select-fruit-list">
                    <twig:Select:Item value="apple">Apple</twig:Select:Item>
                    <twig:Select:Item value="banana">Banana</twig:Select:Item>
                </twig:Select:Group>
            </twig:Select:Content>
        </twig:Select>
        <twig:Field:Description>Pick the one you would eat first.</twig:Field:Description>
    </twig:Field>
</div>
```

### Inline With Input

```twig
<div style="min-height: 240px">
    <div class="flex max-w-md items-center gap-2">
        <twig:Select id="select-status" value="all">
            <twig:Select:Trigger class="w-32"><twig:Select:Value /></twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="select-status-list">
                    <twig:Select:Item value="all">All</twig:Select:Item>
                    <twig:Select:Item value="active">Active</twig:Select:Item>
                    <twig:Select:Item value="inactive">Inactive</twig:Select:Item>
                </twig:Select:Group>
            </twig:Select:Content>
        </twig:Select>
        <twig:Input placeholder="Search..." />
    </div>
</div>
```

### With Button

```twig
<div style="min-height: 240px">
    <div class="flex max-w-md items-center gap-2">
        <twig:Select id="select-button">
            <twig:Select:Trigger class="w-full"><twig:Select:Value placeholder="Select a plan" /></twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="select-button-list">
                    <twig:Select:Item value="free">Free</twig:Select:Item>
                    <twig:Select:Item value="pro">Pro</twig:Select:Item>
                </twig:Select:Group>
            </twig:Select:Content>
        </twig:Select>
        <twig:Button>Submit</twig:Button>
    </div>
</div>
```

### Disabled Item

```twig
<div style="min-height: 280px">
    <twig:Select id="select-disabled-item">
        <twig:Select:Trigger class="w-48"><twig:Select:Value placeholder="Select a fruit" /></twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-disabled-item-list">
                <twig:Select:Item value="apple">Apple</twig:Select:Item>
                <twig:Select:Item value="grapes" disabled>Grapes</twig:Select:Item>
                <twig:Select:Item value="banana">Banana</twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Option Descriptions

```twig
<div style="min-height: 300px">
    <twig:Select id="select-tiers" value="startup">
        <twig:Select:Trigger class="w-56"><twig:Select:Value /></twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-tiers-list">
                {% for tier in [{v: 'startup', t: 'Startup', d: 'For small teams'}, {v: 'business', t: 'Business', d: 'For growing companies'}, {v: 'enterprise', t: 'Enterprise', d: 'For large organizations'}] %}
                    <twig:Select:Item value="{{ tier.v }}">
                        <span class="flex flex-col"><span>{{ tier.t }}</span><span class="text-xs text-muted-foreground">{{ tier.d }}</span></span>
                    </twig:Select:Item>
                {% endfor %}
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Status Bullets

```twig
<div style="min-height: 300px">
    <twig:Select id="select-bullets" value="progress">
        <twig:Select:Trigger class="w-48"><twig:Select:Value /></twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-bullets-list">
                {% for s in [{v: 'todo', t: 'Todo', c: 'bg-slate-400'}, {v: 'progress', t: 'In Progress', c: 'bg-amber-500'}, {v: 'done', t: 'Done', c: 'bg-green-500'}, {v: 'rejected', t: 'Rejected', c: 'bg-red-500'}] %}
                    <twig:Select:Item value="{{ s.v }}"><span class="size-2 rounded-full {{ s.c }}"></span> {{ s.t }}</twig:Select:Item>
                {% endfor %}
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### User Avatars

```twig
<div style="min-height: 300px">
    <twig:Select id="select-users" value="shadcn">
        <twig:Select:Trigger class="w-56"><twig:Select:Value /></twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-users-list">
                <twig:Select:Label>Team</twig:Select:Label>
                {% for u in ['shadcn', 'maxleiter', 'evilrabbit'] %}
                    <twig:Select:Item value="{{ u }}">
                        <twig:Avatar size="sm"><twig:Avatar:Image src="https://github.com/{{ u }}.png" alt="{{ u }}" /><twig:Avatar:Fallback>{{ u|first|upper }}</twig:Avatar:Fallback></twig:Avatar>
                        {{ u }}
                    </twig:Select:Item>
                {% endfor %}
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Status Badges

```twig
<div style="min-height: 300px">
    <twig:Select id="select-badges" value="progress">
        <twig:Select:Trigger class="w-56"><twig:Select:Value /></twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-badges-list">
                <twig:Select:Item value="todo"><twig:Badge variant="outline">Todo</twig:Badge></twig:Select:Item>
                <twig:Select:Item value="progress"><twig:Badge variant="secondary">In Progress</twig:Badge></twig:Select:Item>
                <twig:Select:Item value="done"><twig:Badge>Done</twig:Badge></twig:Select:Item>
                <twig:Select:Item value="rejected"><twig:Badge variant="destructive">Rejected</twig:Badge></twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Country Flags

```twig
<div style="min-height: 300px">
    <twig:Select id="select-flags" value="us">
        <twig:Select:Trigger class="w-52"><twig:Select:Value /></twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-flags-list">
                <twig:Select:Item value="us">🇺🇸 United States</twig:Select:Item>
                <twig:Select:Item value="fr">🇫🇷 France</twig:Select:Item>
                <twig:Select:Item value="jp">🇯🇵 Japan</twig:Select:Item>
                <twig:Select:Item value="br">🇧🇷 Brazil</twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Timezone Offsets

```twig
<div style="min-height: 340px">
    <twig:Select id="select-tz">
        <twig:Select:Trigger class="w-64"><twig:Select:Value placeholder="Select a timezone" /></twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-tz-americas">
                <twig:Select:Label>Americas</twig:Select:Label>
                <twig:Select:Item value="est">EST <span class="ms-auto text-muted-foreground">UTC-5</span></twig:Select:Item>
                <twig:Select:Item value="pst">PST <span class="ms-auto text-muted-foreground">UTC-8</span></twig:Select:Item>
            </twig:Select:Group>
            <twig:Select:Separator />
            <twig:Select:Group id="select-tz-europe">
                <twig:Select:Label>Europe</twig:Select:Label>
                <twig:Select:Item value="cet">CET <span class="ms-auto text-muted-foreground">UTC+1</span></twig:Select:Item>
                <twig:Select:Item value="eet">EET <span class="ms-auto text-muted-foreground">UTC+2</span></twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Category Icons

```twig
<div style="min-height: 300px">
    <twig:Select id="select-categories" value="documents">
        <twig:Select:Trigger class="w-48"><twig:Select:Value /></twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-categories-list">
                <twig:Select:Item value="documents"><twig:ux:icon name="lucide:file-text" class="size-4" /> Documents</twig:Select:Item>
                <twig:Select:Item value="images"><twig:ux:icon name="lucide:image" class="size-4" /> Images</twig:Select:Item>
                <twig:Select:Item value="archives"><twig:ux:icon name="lucide:archive" class="size-4" /> Archives</twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

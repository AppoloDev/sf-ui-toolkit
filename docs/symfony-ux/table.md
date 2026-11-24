# Table

## Examples

### Actions

A table with a `DropdownMenu` of actions on each row.

```twig
<div style="min-height: 300px">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>Product</twig:Table:Head>
                <twig:Table:Head>Price</twig:Table:Head>
                <twig:Table:Head class="text-right">Actions</twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            {% for product in [
                {id: 'mouse', name: 'Wireless Mouse', price: '$29.99'},
                {id: 'keyboard', name: 'Mechanical Keyboard', price: '$129.99'},
                {id: 'hub', name: 'USB-C Hub', price: '$49.99'},
            ] %}
                <twig:Table:Row>
                    <twig:Table:Cell class="font-medium">{{ product.name }}</twig:Table:Cell>
                    <twig:Table:Cell>{{ product.price }}</twig:Table:Cell>
                    <twig:Table:Cell class="text-right">
                        <twig:DropdownMenu id="table-actions-{{ product.id }}" align="end">
                            <twig:DropdownMenu:Trigger>
                                <twig:Button variant="ghost" size="icon" class="size-8" {{ ...dropdown_menu_trigger_attrs }}>
                                    <twig:ux:icon name="lucide:more-horizontal" />
                                    <span class="sr-only">Open menu</span>
                                </twig:Button>
                            </twig:DropdownMenu:Trigger>
                            <twig:DropdownMenu:Content>
                                <twig:DropdownMenu:Item>Edit</twig:DropdownMenu:Item>
                                <twig:DropdownMenu:Item>Duplicate</twig:DropdownMenu:Item>
                                <twig:DropdownMenu:Separator />
                                <twig:DropdownMenu:Item variant="destructive">Delete</twig:DropdownMenu:Item>
                            </twig:DropdownMenu:Content>
                        </twig:DropdownMenu>
                    </twig:Table:Cell>
                </twig:Table:Row>
            {% endfor %}
        </twig:Table:Body>
    </twig:Table>
</div>
```

### Basic

```twig
<twig:Table>
    <twig:Table:Caption>A list of your recent invoices.</twig:Table:Caption>
    <twig:Table:Header>
        <twig:Table:Row>
            <twig:Table:Head>Invoice</twig:Table:Head>
            <twig:Table:Head>Status</twig:Table:Head>
            <twig:Table:Head>Method</twig:Table:Head>
            <twig:Table:Head class="text-right">Amount</twig:Table:Head>
        </twig:Table:Row>
    </twig:Table:Header>
    <twig:Table:Body>
        {% for i in [{n: 'INV001', s: 'Paid', m: 'Credit Card', a: '$250.00'}, {n: 'INV002', s: 'Pending', m: 'PayPal', a: '$150.00'}, {n: 'INV003', s: 'Unpaid', m: 'Bank Transfer', a: '$350.00'}] %}
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">{{ i.n }}</twig:Table:Cell>
                <twig:Table:Cell>{{ i.s }}</twig:Table:Cell>
                <twig:Table:Cell>{{ i.m }}</twig:Table:Cell>
                <twig:Table:Cell class="text-right">{{ i.a }}</twig:Table:Cell>
            </twig:Table:Row>
        {% endfor %}
    </twig:Table:Body>
</twig:Table>
```

### Status Badges

```twig
<twig:Card class="max-w-md py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row><twig:Table:Head>Task</twig:Table:Head><twig:Table:Head class="text-right">Status</twig:Table:Head></twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            {% for t in [{n: 'Design review', s: 'Done', v: 'default'}, {n: 'API integration', s: 'In progress', v: 'secondary'}, {n: 'Write docs', s: 'Blocked', v: 'destructive'}] %}
                <twig:Table:Row>
                    <twig:Table:Cell class="font-medium">{{ t.n }}</twig:Table:Cell>
                    <twig:Table:Cell class="text-right"><twig:Badge variant="{{ t.v }}">{{ t.s }}</twig:Badge></twig:Table:Cell>
                </twig:Table:Row>
            {% endfor %}
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Interactive Rows

```twig
<twig:Card class="max-w-md py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row><twig:Table:Head>Item</twig:Table:Head><twig:Table:Head class="w-24">Quantity</twig:Table:Head></twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            {% for k, q in {'Wireless Mouse': 1, 'USB-C Hub': 2} %}
                <twig:Table:Row>
                    <twig:Table:Cell class="font-medium">{{ k }}</twig:Table:Cell>
                    <twig:Table:Cell><twig:Input type="number" min="0" value="{{ q }}" class="h-8 w-20" aria-label="Quantity of {{ k }}" /></twig:Table:Cell>
                </twig:Table:Row>
            {% endfor %}
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Team Members

```twig
<twig:Card class="max-w-2xl py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row><twig:Table:Head>Member</twig:Table:Head><twig:Table:Head>Role</twig:Table:Head><twig:Table:Head class="text-right">Status</twig:Table:Head></twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            {% for u, d in {shadcn: {r: 'Admin', s: 'Online'}, maxleiter: {r: 'Editor', s: 'Away'}, evilrabbit: {r: 'Viewer', s: 'Offline'}} %}
                <twig:Table:Row>
                    <twig:Table:Cell>
                        <div class="flex items-center gap-3">
                            <twig:Avatar><twig:Avatar:Image src="https://github.com/{{ u }}.png" alt="{{ u }}" /><twig:Avatar:Fallback>{{ u|first|upper }}</twig:Avatar:Fallback></twig:Avatar>
                            <div class="flex flex-col"><span class="font-medium">{{ u }}</span><span class="text-xs text-muted-foreground">{{ u }}@example.com</span></div>
                        </div>
                    </twig:Table:Cell>
                    <twig:Table:Cell><twig:Badge variant="secondary">{{ d.r }}</twig:Badge></twig:Table:Cell>
                    <twig:Table:Cell class="text-right"><twig:Badge variant="outline">{{ d.s }}</twig:Badge></twig:Table:Cell>
                </twig:Table:Row>
            {% endfor %}
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Subscriptions

```twig
<twig:Card class="max-w-3xl py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row><twig:Table:Head>Service</twig:Table:Head><twig:Table:Head>Plan</twig:Table:Head><twig:Table:Head>Price</twig:Table:Head><twig:Table:Head>Next billing</twig:Table:Head><twig:Table:Head></twig:Table:Head></twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            {% for s in [{n: 'Figma', p: 'Pro', c: '$15', d: 'Dec 12'}, {n: 'Notion', p: 'Team', c: '$10', d: 'Dec 20'}] %}
                <twig:Table:Row>
                    <twig:Table:Cell class="font-medium">{{ s.n }}</twig:Table:Cell>
                    <twig:Table:Cell><twig:Badge variant="secondary">{{ s.p }}</twig:Badge></twig:Table:Cell>
                    <twig:Table:Cell>{{ s.c }} / month</twig:Table:Cell>
                    <twig:Table:Cell class="text-muted-foreground">{{ s.d }}</twig:Table:Cell>
                    <twig:Table:Cell class="text-right"><twig:Button variant="outline" size="sm">Manage</twig:Button></twig:Table:Cell>
                </twig:Table:Row>
            {% endfor %}
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Leaderboard

```twig
<twig:Card class="max-w-md py-0">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row><twig:Table:Head class="w-10">#</twig:Table:Head><twig:Table:Head>Player</twig:Table:Head><twig:Table:Head class="text-right">Score</twig:Table:Head><twig:Table:Head class="text-right">Change</twig:Table:Head></twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            {% for p in [{r: 1, n: 'shadcn', s: '12,480', up: true}, {r: 2, n: 'maxleiter', s: '11,920', up: false}, {r: 3, n: 'evilrabbit', s: '10,305', up: true}] %}
                <twig:Table:Row>
                    <twig:Table:Cell class="font-medium tabular-nums">{{ p.r }}</twig:Table:Cell>
                    <twig:Table:Cell>{{ p.n }}</twig:Table:Cell>
                    <twig:Table:Cell class="text-right tabular-nums">{{ p.s }}</twig:Table:Cell>
                    <twig:Table:Cell class="text-right {{ p.up ? 'text-green-600' : 'text-red-600' }}"><twig:ux:icon name="{{ p.up ? 'lucide:arrow-up' : 'lucide:arrow-down' }}" class="inline size-3.5" /></twig:Table:Cell>
                </twig:Table:Row>
            {% endfor %}
        </twig:Table:Body>
    </twig:Table>
</twig:Card>
```

### Orders

```twig
<twig:Card class="max-w-3xl py-0"><twig:Table>
    <twig:Table:Header><twig:Table:Row><twig:Table:Head>Order</twig:Table:Head><twig:Table:Head>Customer</twig:Table:Head><twig:Table:Head class="text-right">Total</twig:Table:Head></twig:Table:Row></twig:Table:Header>
    <twig:Table:Body>
        {% for o in [{n: '#3210', c: 'Olivia Martin', d: 'Nov 12', t: '$42.25'}, {n: '#3209', c: 'Ava Johnson', d: 'Nov 11', t: '$74.99'}] %}
            <twig:Table:Row>
                <twig:Table:Cell class="font-mono text-xs">{{ o.n }}</twig:Table:Cell>
                <twig:Table:Cell><div class="flex items-center gap-2"><twig:Avatar size="sm"><twig:Avatar:Fallback>{{ o.c|first }}</twig:Avatar:Fallback></twig:Avatar><div class="flex flex-col"><span class="font-medium">{{ o.c }}</span><span class="text-xs text-muted-foreground">{{ o.d }}</span></div></div></twig:Table:Cell>
                <twig:Table:Cell class="text-right tabular-nums">{{ o.t }}</twig:Table:Cell>
            </twig:Table:Row>
        {% endfor %}
    </twig:Table:Body>
</twig:Table></twig:Card>
```

### Projects

```twig
<twig:Card class="max-w-3xl py-0"><twig:Table>
    <twig:Table:Header><twig:Table:Row><twig:Table:Head>Project</twig:Table:Head><twig:Table:Head>Team</twig:Table:Head><twig:Table:Head class="text-right">Due</twig:Table:Head></twig:Table:Row></twig:Table:Header>
    <twig:Table:Body>
        {% for p in [{n: 'Website redesign', d: 'Dec 12'}, {n: 'Mobile app', d: 'Jan 20'}] %}
            <twig:Table:Row>
                <twig:Table:Cell><div class="flex items-center gap-2"><span class="flex size-8 items-center justify-center rounded-md bg-muted"><twig:ux:icon name="lucide:folder" class="size-4" /></span><span class="font-medium">{{ p.n }}</span></div></twig:Table:Cell>
                <twig:Table:Cell><div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">{% for u in ['shadcn', 'maxleiter', 'evilrabbit'] %}<twig:Avatar size="sm"><twig:Avatar:Image src="https://github.com/{{ u }}.png" alt="{{ u }}" /><twig:Avatar:Fallback>{{ u|first|upper }}</twig:Avatar:Fallback></twig:Avatar>{% endfor %}<twig:Avatar size="sm"><twig:Avatar:Fallback class="text-[10px]">+2</twig:Avatar:Fallback></twig:Avatar></div></twig:Table:Cell>
                <twig:Table:Cell class="text-right text-muted-foreground">{{ p.d }}</twig:Table:Cell>
            </twig:Table:Row>
        {% endfor %}
    </twig:Table:Body>
</twig:Table></twig:Card>
```

### Activity Log

```twig
<twig:Card class="max-w-3xl py-0"><twig:Table>
    <twig:Table:Header><twig:Table:Row><twig:Table:Head>User</twig:Table:Head><twig:Table:Head>Action</twig:Table:Head><twig:Table:Head>Target</twig:Table:Head><twig:Table:Head class="text-right">When</twig:Table:Head></twig:Table:Row></twig:Table:Header>
    <twig:Table:Body>
        {% for a in [{u: 'shadcn', a: 'Merged', t: 'feature/auth', w: '2m ago'}, {u: 'maxleiter', a: 'Deployed', t: 'main', w: '1h ago'}, {u: 'evilrabbit', a: 'Deleted', t: 'old-branch', w: '3h ago'}] %}
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">{{ a.u }}</twig:Table:Cell>
                <twig:Table:Cell><twig:Badge variant="{{ a.a == 'Deleted' ? 'destructive' : 'secondary' }}">{{ a.a }}</twig:Badge></twig:Table:Cell>
                <twig:Table:Cell class="font-mono text-xs">{{ a.t }}</twig:Table:Cell>
                <twig:Table:Cell class="text-right text-muted-foreground">{{ a.w }}</twig:Table:Cell>
            </twig:Table:Row>
        {% endfor %}
    </twig:Table:Body>
</twig:Table></twig:Card>
```

### Inventory

```twig
<twig:Card class="max-w-3xl py-0"><twig:Table>
    <twig:Table:Header><twig:Table:Row><twig:Table:Head>Product</twig:Table:Head><twig:Table:Head>Stock</twig:Table:Head><twig:Table:Head class="text-right">Units</twig:Table:Head></twig:Table:Row></twig:Table:Header>
    <twig:Table:Body>
        {% for p in [{n: 'Wireless Mouse', s: 'MS-001', l: 'In stock', v: 'secondary', u: 240}, {n: 'USB-C Hub', s: 'HB-014', l: 'Low', v: 'outline', u: 12}, {n: 'Keyboard', s: 'KB-220', l: 'Out', v: 'destructive', u: 0}] %}
            <twig:Table:Row>
                <twig:Table:Cell><div class="flex flex-col"><span class="font-medium">{{ p.n }}</span><span class="font-mono text-xs text-muted-foreground">{{ p.s }}</span></div></twig:Table:Cell>
                <twig:Table:Cell><twig:Badge variant="{{ p.v }}">{{ p.l }}</twig:Badge></twig:Table:Cell>
                <twig:Table:Cell class="text-right tabular-nums">{{ p.u }}</twig:Table:Cell>
            </twig:Table:Row>
        {% endfor %}
    </twig:Table:Body>
</twig:Table></twig:Card>
```

### API Keys

```twig
<twig:Card class="max-w-3xl py-0"><twig:Table>
    <twig:Table:Header><twig:Table:Row><twig:Table:Head>Name</twig:Table:Head><twig:Table:Head>Key</twig:Table:Head><twig:Table:Head>Permissions</twig:Table:Head><twig:Table:Head></twig:Table:Head></twig:Table:Row></twig:Table:Header>
    <twig:Table:Body>
        {% for k in [{n: 'Production', k: 'sk_live_••••4f2a', p: ['read', 'write']}, {n: 'Staging', k: 'sk_test_••••91bc', p: ['read']}] %}
            <twig:Table:Row>
                <twig:Table:Cell class="font-medium">{{ k.n }}</twig:Table:Cell>
                <twig:Table:Cell><code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{{ k.k }}</code></twig:Table:Cell>
                <twig:Table:Cell><div class="flex gap-1">{% for p in k.p %}<twig:Badge variant="secondary">{{ p }}</twig:Badge>{% endfor %}</div></twig:Table:Cell>
                <twig:Table:Cell class="text-right"><twig:Button variant="ghost" size="icon-sm" aria-label="Copy"><twig:ux:icon name="lucide:copy" /></twig:Button><twig:Button variant="ghost" size="icon-sm" aria-label="Regenerate"><twig:ux:icon name="lucide:refresh-cw" /></twig:Button></twig:Table:Cell>
            </twig:Table:Row>
        {% endfor %}
    </twig:Table:Body>
</twig:Table></twig:Card>
```

### File Manager

```twig
<twig:Card class="max-w-3xl py-0"><twig:Table>
    <twig:Table:Header><twig:Table:Row><twig:Table:Head>Name</twig:Table:Head><twig:Table:Head>Owner</twig:Table:Head><twig:Table:Head>Sharing</twig:Table:Head><twig:Table:Head class="text-right">Size</twig:Table:Head></twig:Table:Row></twig:Table:Header>
    <twig:Table:Body>
        {% for f in [{n: 'Documents', i: 'folder', s: 'Team', z: '—'}, {n: 'proposal.pdf', i: 'file-text', s: 'Private', z: '2.4 MB'}, {n: 'logo.png', i: 'image', s: 'Public', z: '84 KB'}] %}
            <twig:Table:Row>
                <twig:Table:Cell><div class="flex items-center gap-2"><twig:ux:icon name="lucide:{{ f.i }}" class="size-4 text-muted-foreground" /><span class="font-medium">{{ f.n }}</span></div></twig:Table:Cell>
                <twig:Table:Cell><twig:Avatar size="sm"><twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" /><twig:Avatar:Fallback>CN</twig:Avatar:Fallback></twig:Avatar></twig:Table:Cell>
                <twig:Table:Cell><twig:Badge variant="outline">{{ f.s }}</twig:Badge></twig:Table:Cell>
                <twig:Table:Cell class="text-right text-muted-foreground">{{ f.z }}</twig:Table:Cell>
            </twig:Table:Row>
        {% endfor %}
    </twig:Table:Body>
</twig:Table></twig:Card>
```

### Issues

```twig
<twig:Card class="max-w-3xl py-0"><twig:Table>
    <twig:Table:Header><twig:Table:Row><twig:Table:Head>ID</twig:Table:Head><twig:Table:Head>Title</twig:Table:Head><twig:Table:Head>Assignee</twig:Table:Head><twig:Table:Head class="text-right">Status</twig:Table:Head></twig:Table:Row></twig:Table:Header>
    <twig:Table:Body>
        {% for i in [{id: 'ISS-101', t: 'Login fails on Safari', l: 'bug', a: 'shadcn', s: 'Open'}, {id: 'ISS-102', t: 'Add dark mode', l: 'feature', a: 'maxleiter', s: 'In progress'}] %}
            <twig:Table:Row>
                <twig:Table:Cell class="font-mono text-xs">{{ i.id }}</twig:Table:Cell>
                <twig:Table:Cell><span class="font-medium">{{ i.t }}</span> <twig:Badge variant="outline" class="ms-1">{{ i.l }}</twig:Badge></twig:Table:Cell>
                <twig:Table:Cell>{{ i.a }}</twig:Table:Cell>
                <twig:Table:Cell class="text-right"><twig:Badge variant="secondary">{{ i.s }}</twig:Badge></twig:Table:Cell>
            </twig:Table:Row>
        {% endfor %}
    </twig:Table:Body>
</twig:Table></twig:Card>
```

### Employee Profile

```twig
<twig:Card class="max-w-md py-0"><twig:Table>
    <twig:Table:Body>
        <twig:Table:Row><twig:Table:Cell class="w-32 bg-muted/50 font-medium">Name</twig:Table:Cell><twig:Table:Cell><div class="flex items-center gap-2"><twig:Avatar size="sm"><twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" /><twig:Avatar:Fallback>CN</twig:Avatar:Fallback></twig:Avatar> Jane Cooper</div></twig:Table:Cell></twig:Table:Row>
        <twig:Table:Row><twig:Table:Cell class="bg-muted/50 font-medium">Title</twig:Table:Cell><twig:Table:Cell>Senior Engineer</twig:Table:Cell></twig:Table:Row>
        <twig:Table:Row><twig:Table:Cell class="bg-muted/50 font-medium">Department</twig:Table:Cell><twig:Table:Cell>Platform</twig:Table:Cell></twig:Table:Row>
        <twig:Table:Row><twig:Table:Cell class="bg-muted/50 font-medium">Status</twig:Table:Cell><twig:Table:Cell><twig:Badge variant="secondary">Active</twig:Badge></twig:Table:Cell></twig:Table:Row>
    </twig:Table:Body>
</twig:Table></twig:Card>
```

### Server Config

```twig
<twig:Card class="max-w-md">
    <twig:Card:Header>
        <twig:Card:Title class="flex items-center gap-2"><span class="relative flex size-2"><span class="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75"></span><span class="relative inline-flex size-2 rounded-full bg-green-500"></span></span> web-01</twig:Card:Title>
    </twig:Card:Header>
    <twig:Card:Content class="grid gap-3">
        <div class="grid gap-1"><div class="flex justify-between text-xs"><span>CPU</span><span>42%</span></div><twig:Progress value="42" class="h-1.5" /></div>
        <div class="grid gap-1"><div class="flex justify-between text-xs"><span>Memory</span><span>68%</span></div><twig:Progress value="68" class="h-1.5" /></div>
        <div class="flex gap-1"><twig:Badge variant="secondary">nginx</twig:Badge><twig:Badge variant="secondary">php-8.4</twig:Badge></div>
    </twig:Card:Content>
</twig:Card>
```

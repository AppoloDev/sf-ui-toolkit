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

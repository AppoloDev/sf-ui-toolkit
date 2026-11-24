# Progress

## Examples

### Basic

```twig
<twig:Field class="w-full max-w-sm">
    <div class="flex justify-between text-sm"><span>Storage</span><span class="text-muted-foreground">60%</span></div>
    <twig:Progress value="60" />
</twig:Field>
```

### Small and Large

```twig
<div class="grid w-full max-w-sm gap-4">
    <twig:Progress value="40" class="h-1" />
    <twig:Progress value="70" class="h-3" />
</div>
```

### File Uploads

```twig
<div class="grid w-full max-w-md gap-4">
    {% for f in [{n: 'report-q3.pdf', v: 100, t: 'Complete'}, {n: 'design-system.fig', v: 62, t: '12s left'}, {n: 'photos.zip', v: 25, t: '40s left'}] %}
        <div class="flex items-center gap-3">
            <twig:ux:icon name="lucide:file" class="size-5 text-muted-foreground" />
            <div class="min-w-0 flex-1"><p class="truncate text-sm">{{ f.n }}</p><twig:Progress value="{{ f.v }}" class="mt-1 h-1" /></div>
            <span class="text-xs text-muted-foreground">{{ f.t }}</span>
        </div>
    {% endfor %}
</div>
```

### Multi-Step

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Header><twig:Card:Title>Setup</twig:Card:Title><twig:Card:Description>2 of 4 steps done</twig:Card:Description></twig:Card:Header>
    <twig:Card:Content class="grid gap-3">
        <twig:Progress value="50" />
        {% for s, done in {'Create account': true, 'Verify email': true, 'Add a project': false, 'Invite your team': false} %}
            <p class="flex items-center gap-2 text-sm"><twig:ux:icon name="{{ done ? 'lucide:circle-check' : 'lucide:circle' }}" class="size-4 {{ done ? 'text-green-600' : 'text-muted-foreground' }}" /> {{ s }}</p>
        {% endfor %}
    </twig:Card:Content>
</twig:Card>
```

### Custom Colors

```twig
<div class="grid w-full max-w-sm gap-3">
    {% for c in ['[&>div]:bg-green-500', '[&>div]:bg-blue-500', '[&>div]:bg-amber-500', '[&>div]:bg-red-500', '[&>div]:bg-violet-500'] %}
        <twig:Progress value="{{ 30 + loop.index * 8 }}" class="{{ c }}" />
    {% endfor %}
</div>
```

# Skeleton

## Examples

### Text Paragraphs

```twig
<div class="flex w-full max-w-md flex-col gap-6">
    {% for p in [0, 1] %}
        <div class="flex flex-col gap-2">
            <twig:Skeleton class="h-4 w-full" /><twig:Skeleton class="h-4 w-full" /><twig:Skeleton class="h-4 w-3/5" />
        </div>
    {% endfor %}
</div>
```

### Stats Row

```twig
<div class="grid w-full max-w-2xl grid-cols-3 gap-4">
    {% for i in 1..3 %}
        <twig:Card><twig:Card:Content class="flex flex-col gap-3"><twig:Skeleton class="h-3 w-16" /><twig:Skeleton class="h-8 w-24" /><twig:Skeleton class="h-3 w-20" /></twig:Card:Content></twig:Card>
    {% endfor %}
</div>
```

### List With Actions

```twig
<twig:Card class="max-w-md">
    <twig:Card:Header class="flex items-center justify-between"><twig:Skeleton class="h-5 w-28" /><twig:Skeleton class="h-8 w-20" /></twig:Card:Header>
    <twig:Card:Content class="flex flex-col gap-4">
        {% for i in 1..3 %}
            <div class="flex items-center gap-3">
                <twig:Skeleton class="size-10 rounded-full" />
                <div class="flex flex-1 flex-col gap-2"><twig:Skeleton class="h-3 w-3/4" /><twig:Skeleton class="h-3 w-1/2" /></div>
                <twig:Skeleton class="h-8 w-14" />
            </div>
        {% endfor %}
    </twig:Card:Content>
</twig:Card>
```

### Card Grid

```twig
<twig:Card class="max-w-xs overflow-hidden pt-0">
    <twig:Skeleton class="aspect-video w-full rounded-none" />
    <twig:Card:Content class="flex flex-col gap-2"><twig:Skeleton class="h-5 w-2/3" /><twig:Skeleton class="h-3 w-full" /><twig:Skeleton class="h-3 w-4/5" /></twig:Card:Content>
    <twig:Card:Footer class="justify-between"><twig:Skeleton class="h-8 w-24" /><twig:Skeleton class="size-8" /></twig:Card:Footer>
</twig:Card>
```

### Profile Page

```twig
<div class="grid w-full max-w-md gap-4">
    <twig:Card>
        <twig:Card:Content class="flex flex-col items-center gap-3">
            <twig:Skeleton class="size-20 rounded-full" /><twig:Skeleton class="h-5 w-32" /><twig:Skeleton class="h-3 w-24" />
            <div class="mt-2 grid w-full grid-cols-3 gap-4">{% for i in 1..3 %}<div class="flex flex-col items-center gap-1"><twig:Skeleton class="h-5 w-10" /><twig:Skeleton class="h-3 w-14" /></div>{% endfor %}</div>
        </twig:Card:Content>
    </twig:Card>
    <twig:Card>
        <twig:Card:Content class="flex flex-col gap-3">
            {% for i in 1..4 %}<div class="flex justify-between"><twig:Skeleton class="h-3 w-20" /><twig:Skeleton class="h-3 w-32" /></div>{% endfor %}
        </twig:Card:Content>
    </twig:Card>
</div>
```

### Chat Messages

```twig
<div class="flex w-full max-w-md flex-col gap-4">
    <div class="flex items-end gap-2"><twig:Skeleton class="size-8 rounded-full" /><div class="flex flex-col gap-1"><twig:Skeleton class="h-3 w-16" /><twig:Skeleton class="h-10 w-56 rounded-2xl" /></div></div>
    <div class="flex justify-end"><twig:Skeleton class="h-10 w-44 rounded-2xl" /></div>
    <div class="flex items-end gap-2"><twig:Skeleton class="size-8 rounded-full" /><twig:Skeleton class="h-14 w-64 rounded-2xl" /></div>
    <div class="flex items-center gap-2"><twig:Skeleton class="h-9 flex-1" /><twig:Skeleton class="size-9" /></div>
</div>
```

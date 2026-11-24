# Kbd

## Examples

### Grouped Keys

```twig
<twig:KbdGroup><twig:Kbd>Ctrl</twig:Kbd><twig:Kbd>Shift</twig:Kbd><twig:Kbd>P</twig:Kbd></twig:KbdGroup>
```

### Keys With Icons

```twig
<div class="flex items-center gap-3">
    <twig:Kbd><twig:ux:icon name="lucide:arrow-left" /> Left</twig:Kbd>
    <twig:Kbd><twig:ux:icon name="lucide:arrow-right" /> Right</twig:Kbd>
    <twig:KbdGroup><twig:Kbd><twig:ux:icon name="lucide:mic" /> Voice</twig:Kbd><twig:Kbd>Enabled</twig:Kbd></twig:KbdGroup>
</div>
```

### In Input

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input placeholder="Search..." />
    <twig:InputGroup:Addon><twig:Kbd>Space</twig:Kbd></twig:InputGroup:Addon>
</twig:InputGroup>
```

### Shortcut List

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Header><twig:Card:Title>Shortcuts</twig:Card:Title></twig:Card:Header>
    <twig:Card:Content class="grid gap-2 text-sm">
        {% for a, k in {Search: ['⌘', 'K'], Save: ['⌘', 'S'], Copy: ['⌘', 'C'], Undo: ['⌘', 'Z'], Redo: ['⇧', '⌘', 'Z']} %}
            <div class="flex items-center justify-between"><span>{{ a }}</span><twig:KbdGroup>{% for key in k %}<twig:Kbd>{{ key }}</twig:Kbd>{% endfor %}</twig:KbdGroup></div>
        {% endfor %}
    </twig:Card:Content>
</twig:Card>
```

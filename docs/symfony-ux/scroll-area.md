# Scroll Area

## Examples

### Basic

```twig
<twig:ScrollArea class="h-72 w-48 rounded-md border">
    <div class="p-4">
        <h4 class="mb-4 text-sm font-medium">Releases</h4>
        {% for i in 1..30 %}
            <div class="text-sm">v1.2.{{ 31 - i }}</div>
            {% if not loop.last %}<twig:Separator class="my-2" />{% endif %}
        {% endfor %}
    </div>
</twig:ScrollArea>
```

### Both Scrollbars

```twig
<twig:ScrollArea class="h-72 w-full max-w-md rounded-md border">
    <table class="w-[640px] text-sm">
        <thead><tr class="border-b text-start">{% for h in ['Plan', 'Price', 'Seats', 'Storage', 'Support', 'API', 'SSO'] %}<th class="px-3 py-2 text-start font-medium">{{ h }}</th>{% endfor %}</tr></thead>
        <tbody>
            {% for i in 1..16 %}<tr class="border-b">{% for c in 1..7 %}<td class="px-3 py-2 text-muted-foreground">Row {{ i }}, col {{ c }}</td>{% endfor %}</tr>{% endfor %}
        </tbody>
    </table>
</twig:ScrollArea>
```

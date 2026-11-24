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

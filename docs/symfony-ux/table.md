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

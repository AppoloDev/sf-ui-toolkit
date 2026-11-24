# Breadcrumb

## Examples

### Dropdown

Compose a `Breadcrumb:Item` with a `DropdownMenu` to open a menu from one of the crumbs.

```twig
<div style="min-height: 220px">
    <twig:Breadcrumb>
        <twig:Breadcrumb:List>
            <twig:Breadcrumb:Item>
                <twig:Breadcrumb:Link href="#">Home</twig:Breadcrumb:Link>
            </twig:Breadcrumb:Item>
            <twig:Breadcrumb:Separator>
                <twig:ux:icon name="lucide:dot" />
            </twig:Breadcrumb:Separator>
            <twig:Breadcrumb:Item>
                <twig:DropdownMenu id="breadcrumb-dropdown">
                    <twig:DropdownMenu:Trigger>
                        <button type="button" class="flex items-center gap-1 outline-none" {{ ...dropdown_menu_trigger_attrs }}>
                            Components
                            <twig:ux:icon name="lucide:chevron-down" class="size-3.5" />
                        </button>
                    </twig:DropdownMenu:Trigger>
                    <twig:DropdownMenu:Content align="start">
                        <twig:DropdownMenu:Group>
                            <twig:DropdownMenu:Item>Documentation</twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Item>Themes</twig:DropdownMenu:Item>
                            <twig:DropdownMenu:Item>GitHub</twig:DropdownMenu:Item>
                        </twig:DropdownMenu:Group>
                    </twig:DropdownMenu:Content>
                </twig:DropdownMenu>
            </twig:Breadcrumb:Item>
            <twig:Breadcrumb:Separator>
                <twig:ux:icon name="lucide:dot" />
            </twig:Breadcrumb:Separator>
            <twig:Breadcrumb:Item>
                <twig:Breadcrumb:Page>Breadcrumb</twig:Breadcrumb:Page>
            </twig:Breadcrumb:Item>
        </twig:Breadcrumb:List>
    </twig:Breadcrumb>
</div>
```

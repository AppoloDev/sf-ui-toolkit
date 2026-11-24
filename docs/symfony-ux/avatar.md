# Avatar

## Examples

### Dropdown

Use an `Avatar` as the trigger of a `DropdownMenu`.

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 260px">
    <twig:DropdownMenu id="avatar-dropdown" align="end">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" class="rounded-full" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:Avatar>
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>CN</twig:Avatar:Fallback>
                </twig:Avatar>
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-32">
            <twig:DropdownMenu:Group>
                <twig:DropdownMenu:Item>Profile</twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>Billing</twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>Settings</twig:DropdownMenu:Item>
            </twig:DropdownMenu:Group>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Group>
                <twig:DropdownMenu:Item variant="destructive">Log out</twig:DropdownMenu:Item>
            </twig:DropdownMenu:Group>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

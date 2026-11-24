# Button

## Examples

### Button Group

Group buttons, and a dropdown that opens from one of them, with `ButtonGroup`.

```twig
<div class="flex justify-center" style="min-height: 360px">
    <twig:ButtonGroup>
        <twig:ButtonGroup class="hidden sm:flex">
            <twig:Button variant="outline" size="icon" aria-label="Go Back">
                <twig:ux:icon name="lucide:arrow-left" />
            </twig:Button>
        </twig:ButtonGroup>
        <twig:ButtonGroup>
            <twig:Button variant="outline">Archive</twig:Button>
            <twig:Button variant="outline">Report</twig:Button>
        </twig:ButtonGroup>
        <twig:ButtonGroup>
            <twig:Button variant="outline">Snooze</twig:Button>
            <twig:DropdownMenu id="button-group-more" align="end">
                <twig:DropdownMenu:Trigger>
                    <twig:Button variant="outline" size="icon" aria-label="More Options" {{ ...dropdown_menu_trigger_attrs }}>
                        <twig:ux:icon name="lucide:more-horizontal" />
                    </twig:Button>
                </twig:DropdownMenu:Trigger>
                <twig:DropdownMenu:Content class="w-48">
                    <twig:DropdownMenu:Group>
                        <twig:DropdownMenu:Item>
                            <twig:ux:icon name="lucide:mail-check" class="size-4" />
                            Mark as Read
                        </twig:DropdownMenu:Item>
                        <twig:DropdownMenu:Item>
                            <twig:ux:icon name="lucide:archive" class="size-4" />
                            Archive
                        </twig:DropdownMenu:Item>
                    </twig:DropdownMenu:Group>
                    <twig:DropdownMenu:Separator />
                    <twig:DropdownMenu:Group>
                        <twig:DropdownMenu:Item>
                            <twig:ux:icon name="lucide:clock" class="size-4" />
                            Snooze
                        </twig:DropdownMenu:Item>
                        <twig:DropdownMenu:Item>
                            <twig:ux:icon name="lucide:calendar-plus" class="size-4" />
                            Add to Calendar
                        </twig:DropdownMenu:Item>
                        <twig:DropdownMenu:Sub>
                            <twig:DropdownMenu:SubTrigger>
                                <twig:ux:icon name="lucide:tag" class="size-4" />
                                Label As...
                            </twig:DropdownMenu:SubTrigger>
                            <twig:DropdownMenu:SubContent>
                                <twig:DropdownMenu:RadioGroup value="personal">
                                    <twig:DropdownMenu:RadioItem value="personal" checked>Personal</twig:DropdownMenu:RadioItem>
                                    <twig:DropdownMenu:RadioItem value="work">Work</twig:DropdownMenu:RadioItem>
                                    <twig:DropdownMenu:RadioItem value="other">Other</twig:DropdownMenu:RadioItem>
                                </twig:DropdownMenu:RadioGroup>
                            </twig:DropdownMenu:SubContent>
                        </twig:DropdownMenu:Sub>
                    </twig:DropdownMenu:Group>
                    <twig:DropdownMenu:Separator />
                    <twig:DropdownMenu:Group>
                        <twig:DropdownMenu:Item variant="destructive">
                            <twig:ux:icon name="lucide:trash-2" class="size-4" />
                            Trash
                        </twig:DropdownMenu:Item>
                    </twig:DropdownMenu:Group>
                </twig:DropdownMenu:Content>
            </twig:DropdownMenu>
        </twig:ButtonGroup>
    </twig:ButtonGroup>
</div>
```

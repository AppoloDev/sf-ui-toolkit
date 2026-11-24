# Button Group

## Examples

### Dropdown Menu

Create a split button group with a `DropdownMenu`.

```twig
<div class="flex justify-center" style="min-height: 380px">
    <twig:ButtonGroup>
        <twig:Button variant="outline">Follow</twig:Button>
        <twig:DropdownMenu id="button-group-follow" align="end">
            <twig:DropdownMenu:Trigger>
                <twig:Button variant="outline" class="ps-2!" aria-label="More Options" {{ ...dropdown_menu_trigger_attrs }}>
                    <twig:ux:icon name="lucide:chevron-down" />
                </twig:Button>
            </twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content class="w-52">
                <twig:DropdownMenu:Group>
                    <twig:DropdownMenu:Item>
                        <twig:ux:icon name="lucide:volume-off" class="size-4" />
                        Mute Conversation
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        <twig:ux:icon name="lucide:check" class="size-4" />
                        Mark as Read
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        <twig:ux:icon name="lucide:triangle-alert" class="size-4" />
                        Report Conversation
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        <twig:ux:icon name="lucide:user-round-x" class="size-4" />
                        Block User
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        <twig:ux:icon name="lucide:share" class="size-4" />
                        Share Conversation
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        <twig:ux:icon name="lucide:copy" class="size-4" />
                        Copy Conversation
                    </twig:DropdownMenu:Item>
                </twig:DropdownMenu:Group>
                <twig:DropdownMenu:Separator />
                <twig:DropdownMenu:Group>
                    <twig:DropdownMenu:Item variant="destructive">
                        <twig:ux:icon name="lucide:trash" class="size-4" />
                        Delete Conversation
                    </twig:DropdownMenu:Item>
                </twig:DropdownMenu:Group>
            </twig:DropdownMenu:Content>
        </twig:DropdownMenu>
    </twig:ButtonGroup>
</div>
```

### Select

Pair a `Select` with an `Input` in a button group.

```twig
<div class="flex justify-center" style="min-height: 280px">
    <twig:ButtonGroup>
        <twig:ButtonGroup>
            <twig:Select id="button-group-currency" name="currency" value="$">
                <twig:Select:Trigger class="font-mono">
                    <twig:Select:Value />
                </twig:Select:Trigger>
                <twig:Select:Content align="start">
                    <twig:Select:Group id="button-group-currency-list">
                        <twig:Select:Item value="$">$ <span class="text-muted-foreground">US Dollar</span></twig:Select:Item>
                        <twig:Select:Item value="€">€ <span class="text-muted-foreground">Euro</span></twig:Select:Item>
                        <twig:Select:Item value="£">£ <span class="text-muted-foreground">British Pound</span></twig:Select:Item>
                    </twig:Select:Group>
                </twig:Select:Content>
            </twig:Select>
            <twig:Input placeholder="10.00" pattern="[0-9]*" />
        </twig:ButtonGroup>
        <twig:ButtonGroup>
            <twig:Button variant="outline" size="icon" aria-label="Send">
                <twig:ux:icon name="lucide:arrow-right" />
            </twig:Button>
        </twig:ButtonGroup>
    </twig:ButtonGroup>
</div>
```

### Popover

Use a `Popover` as the second part of a button group.

```twig
<div class="flex justify-center" style="min-height: 320px">
    <twig:ButtonGroup>
        <twig:Button variant="outline">
            <twig:ux:icon name="lucide:bot" /> Copilot
        </twig:Button>
        <twig:Popover>
            <twig:Popover:Trigger>
                <twig:Button variant="outline" size="icon" aria-label="Open Popover" {{ ...popover_trigger_attrs }}>
                    <twig:ux:icon name="lucide:chevron-down" />
                </twig:Button>
            </twig:Popover:Trigger>
            <twig:Popover:Content align="end" class="w-80 rounded-xl text-sm">
                <div class="space-y-1">
                    <h4 class="font-medium leading-none">Start a new task with Copilot</h4>
                    <p class="text-muted-foreground">Describe your task in natural language.</p>
                </div>
                <twig:Field>
                    <twig:Field:Label for="button-group-task" class="sr-only">Task Description</twig:Field:Label>
                    <twig:Textarea id="button-group-task" placeholder="I need to..." class="resize-none" />
                    <twig:Field:Description>Copilot will open a pull request for review.</twig:Field:Description>
                </twig:Field>
            </twig:Popover:Content>
        </twig:Popover>
    </twig:ButtonGroup>
</div>
```

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

### Icon Actions

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon" aria-label="Flip horizontal"><twig:ux:icon name="lucide:flip-horizontal" /></twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Flip vertical"><twig:ux:icon name="lucide:flip-vertical" /></twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Rotate"><twig:ux:icon name="lucide:rotate-cw" /></twig:Button>
</twig:ButtonGroup>
```

### Text Alignment

```twig
<twig:ButtonGroup>
    {% for a in ['left', 'center', 'right', 'justify'] %}
        <twig:Button variant="outline" size="icon-sm" aria-label="Align {{ a }}"><twig:ux:icon name="lucide:align-{{ a }}" /></twig:Button>
    {% endfor %}
</twig:ButtonGroup>
```

### Vertical Orientation

```twig
<twig:ButtonGroup orientation="vertical" class="h-fit">
    <twig:Button variant="outline" size="icon" aria-label="Add"><twig:ux:icon name="lucide:plus" /></twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Subtract"><twig:ux:icon name="lucide:minus" /></twig:Button>
</twig:ButtonGroup>
```

### Like Counter

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline"><twig:ux:icon name="lucide:heart" data-icon="inline-start" /> Like</twig:Button>
    <twig:ButtonGroup:Text>1.2K</twig:ButtonGroup:Text>
</twig:ButtonGroup>
```

### Basic Pagination

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="sm"><twig:ux:icon name="lucide:arrow-left" data-icon="inline-start" /> Previous</twig:Button>
    <twig:Button variant="outline" size="sm">1</twig:Button>
    <twig:Button variant="outline" size="sm">2</twig:Button>
    <twig:Button variant="outline" size="sm">3</twig:Button>
    <twig:Button variant="outline" size="sm">Next <twig:ux:icon name="lucide:arrow-right" data-icon="inline-end" /></twig:Button>
</twig:ButtonGroup>
```

### Numbered Pagination

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon-sm" aria-label="Previous"><twig:ux:icon name="lucide:chevron-left" /></twig:Button>
    {% for p in 1..5 %}<twig:Button variant="{{ p == 3 ? 'default' : 'outline' }}" size="icon-sm">{{ p }}</twig:Button>{% endfor %}
    <twig:Button variant="outline" size="icon-sm" aria-label="Next"><twig:ux:icon name="lucide:chevron-right" /></twig:Button>
</twig:ButtonGroup>
```

### View Switcher

```twig
<twig:ButtonGroup>
    <twig:Button variant="secondary" size="icon-sm" aria-label="List view" aria-pressed="true"><twig:ux:icon name="lucide:list" /></twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="Grid view"><twig:ux:icon name="lucide:layout-grid" /></twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="Table view"><twig:ux:icon name="lucide:table" /></twig:Button>
</twig:ButtonGroup>
```

### Media Controls

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon" aria-label="Skip back"><twig:ux:icon name="lucide:skip-back" /></twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Play"><twig:ux:icon name="lucide:play" /></twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Skip forward"><twig:ux:icon name="lucide:skip-forward" /></twig:Button>
</twig:ButtonGroup>
```

### Disabled Button

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline"><twig:ux:icon name="lucide:file" data-icon="inline-start" /> Files</twig:Button>
    <twig:Button variant="outline" disabled><twig:ux:icon name="lucide:folder" data-icon="inline-start" /> Folder</twig:Button>
    <twig:Button variant="outline"><twig:ux:icon name="lucide:trash-2" data-icon="inline-start" /> Trash</twig:Button>
</twig:ButtonGroup>
```

### Split Button

```twig
<div style="min-height: 240px">
    <twig:ButtonGroup>
        <twig:Button>Save</twig:Button>
        <twig:ButtonGroup:Separator />
        <twig:DropdownMenu id="bg-save" align="end">
            <twig:DropdownMenu:Trigger><twig:Button size="icon" aria-label="More save options" {{ ...dropdown_menu_trigger_attrs }}><twig:ux:icon name="lucide:chevron-down" /></twig:Button></twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content>
                <twig:DropdownMenu:Item>Publish</twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>Keep as draft</twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>Save and exit</twig:DropdownMenu:Item>
            </twig:DropdownMenu:Content>
        </twig:DropdownMenu>
    </twig:ButtonGroup>
</div>
```

### Search With Button

```twig
<twig:ButtonGroup class="max-w-sm">
    <twig:Input placeholder="Search records..." />
    <twig:Button><twig:ux:icon name="lucide:search" data-icon="inline-start" /> Search</twig:Button>
</twig:ButtonGroup>
```

### Search Filter Clear

```twig
<div style="min-height: 240px">
    <twig:ButtonGroup class="max-w-md">
        <twig:DropdownMenu id="bg-filter">
            <twig:DropdownMenu:Trigger><twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>Filter <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" /></twig:Button></twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content align="start"><twig:DropdownMenu:Item>All</twig:DropdownMenu:Item><twig:DropdownMenu:Item>Active</twig:DropdownMenu:Item><twig:DropdownMenu:Item>Archived</twig:DropdownMenu:Item></twig:DropdownMenu:Content>
        </twig:DropdownMenu>
        <twig:Input placeholder="Search..." />
        <twig:Button variant="outline" size="icon" aria-label="Clear"><twig:ux:icon name="lucide:x" /></twig:Button>
    </twig:ButtonGroup>
</div>
```

### Zoom Controls

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon" aria-label="Zoom out"><twig:ux:icon name="lucide:minus" /></twig:Button>
    <twig:ButtonGroup:Text class="w-16 justify-center tabular-nums">100%</twig:ButtonGroup:Text>
    <twig:Button variant="outline" size="icon" aria-label="Zoom in"><twig:ux:icon name="lucide:plus" /></twig:Button>
</twig:ButtonGroup>
```

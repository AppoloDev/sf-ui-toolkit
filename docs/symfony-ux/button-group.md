# Button Group

## Examples

### Dropdown Menu

Create a split button group with a `DropdownMenu`.

```twig
<div class="flex justify-center" style="min-height: 380px">
    <twig:ButtonGroup>
        <twig:Button variant="outline">
            Follow
        </twig:Button>
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
                        <twig:Select:Item value="$">
                            $
                            <span class="text-muted-foreground">
                                US Dollar
                            </span>
                        </twig:Select:Item>
                        <twig:Select:Item value="€">
                            €
                            <span class="text-muted-foreground">
                                Euro
                            </span>
                        </twig:Select:Item>
                        <twig:Select:Item value="£">
                            £
                            <span class="text-muted-foreground">
                                British Pound
                            </span>
                        </twig:Select:Item>
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
            <twig:ux:icon name="lucide:bot" />
            Copilot
        </twig:Button>
        <twig:Popover>
            <twig:Popover:Trigger>
                <twig:Button variant="outline" size="icon" aria-label="Open Popover" {{ ...popover_trigger_attrs }}>
                    <twig:ux:icon name="lucide:chevron-down" />
                </twig:Button>
            </twig:Popover:Trigger>
            <twig:Popover:Content align="end" class="w-80 rounded-xl text-sm">
                <div class="space-y-1">
                    <h4 class="font-medium leading-none">
                        Start a new task with Copilot
                    </h4>
                    <p class="text-muted-foreground">
                        Describe your task in natural language.
                    </p>
                </div>
                <twig:Field>
                    <twig:Field:Label for="button-group-task" class="sr-only">
                        Task Description
                    </twig:Field:Label>
                    <twig:Textarea id="button-group-task" placeholder="I need to..." class="resize-none" />
                    <twig:Field:Description>
                        Copilot will open a pull request for review.
                    </twig:Field:Description>
                </twig:Field>
            </twig:Popover:Content>
        </twig:Popover>
    </twig:ButtonGroup>
</div>
```

### Icon Actions

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon" aria-label="Flip horizontal">
        <twig:ux:icon name="lucide:flip-horizontal" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Flip vertical">
        <twig:ux:icon name="lucide:flip-vertical" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Rotate">
        <twig:ux:icon name="lucide:rotate-cw" />
    </twig:Button>
</twig:ButtonGroup>
```

### Text Alignment

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon-sm" aria-label="Align left">
        <twig:ux:icon name="lucide:align-left" />
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="Align center">
        <twig:ux:icon name="lucide:align-center" />
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="Align right">
        <twig:ux:icon name="lucide:align-right" />
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="Align justify">
        <twig:ux:icon name="lucide:align-justify" />
    </twig:Button>
</twig:ButtonGroup>
```

### Vertical Orientation

```twig
<twig:ButtonGroup orientation="vertical" class="h-fit">
    <twig:Button variant="outline" size="icon" aria-label="Add">
        <twig:ux:icon name="lucide:plus" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Subtract">
        <twig:ux:icon name="lucide:minus" />
    </twig:Button>
</twig:ButtonGroup>
```

### Like Counter

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline">
        <twig:ux:icon name="lucide:heart" data-icon="inline-start" />
        Like
    </twig:Button>
    <twig:ButtonGroup:Text>
        1.2K
    </twig:ButtonGroup:Text>
</twig:ButtonGroup>
```

### Basic Pagination

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:arrow-left" data-icon="inline-start" />
        Previous
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        1
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        2
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        3
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        Next
        <twig:ux:icon name="lucide:arrow-right" data-icon="inline-end" />
    </twig:Button>
</twig:ButtonGroup>
```

### Numbered Pagination

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon-sm" aria-label="Previous">
        <twig:ux:icon name="lucide:chevron-left" />
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm">
        1
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm">
        2
    </twig:Button>
    <twig:Button variant="default" size="icon-sm">
        3
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm">
        4
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm">
        5
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="Next">
        <twig:ux:icon name="lucide:chevron-right" />
    </twig:Button>
</twig:ButtonGroup>
```

### View Switcher

```twig
<twig:ButtonGroup>
    <twig:Button variant="secondary" size="icon-sm" aria-label="List view" aria-pressed="true">
        <twig:ux:icon name="lucide:list" />
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="Grid view">
        <twig:ux:icon name="lucide:layout-grid" />
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="Table view">
        <twig:ux:icon name="lucide:table" />
    </twig:Button>
</twig:ButtonGroup>
```

### Media Controls

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon" aria-label="Skip back">
        <twig:ux:icon name="lucide:skip-back" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Play">
        <twig:ux:icon name="lucide:play" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Skip forward">
        <twig:ux:icon name="lucide:skip-forward" />
    </twig:Button>
</twig:ButtonGroup>
```

### Disabled Button

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline">
        <twig:ux:icon name="lucide:file" data-icon="inline-start" />
        Files
    </twig:Button>
    <twig:Button variant="outline" disabled>
        <twig:ux:icon name="lucide:folder" data-icon="inline-start" />
        Folder
    </twig:Button>
    <twig:Button variant="outline">
        <twig:ux:icon name="lucide:trash-2" data-icon="inline-start" />
        Trash
    </twig:Button>
</twig:ButtonGroup>
```

### Split Button

```twig
<div style="min-height: 240px">
    <twig:ButtonGroup>
        <twig:Button>
            Save
        </twig:Button>
        <twig:ButtonGroup:Separator />
        <twig:DropdownMenu id="bg-save" align="end">
            <twig:DropdownMenu:Trigger>
                <twig:Button size="icon" aria-label="More save options" {{ ...dropdown_menu_trigger_attrs }}>
                    <twig:ux:icon name="lucide:chevron-down" />
                </twig:Button>
            </twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content>
                <twig:DropdownMenu:Item>
                    Publish
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    Keep as draft
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    Save and exit
                </twig:DropdownMenu:Item>
            </twig:DropdownMenu:Content>
        </twig:DropdownMenu>
    </twig:ButtonGroup>
</div>
```

### Search With Button

```twig
<twig:ButtonGroup class="max-w-sm">
    <twig:Input placeholder="Search records..." />
    <twig:Button>
        <twig:ux:icon name="lucide:search" data-icon="inline-start" />
        Search
    </twig:Button>
</twig:ButtonGroup>
```

### Search Filter Clear

```twig
<div style="min-height: 240px">
    <twig:ButtonGroup class="max-w-md">
        <twig:DropdownMenu id="bg-filter">
            <twig:DropdownMenu:Trigger>
                <twig:Button variant="outline" {{ ...dropdown_menu_trigger_attrs }}>
                    Filter
                    <twig:ux:icon name="lucide:chevron-down" data-icon="inline-end" />
                </twig:Button>
            </twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content align="start">
                <twig:DropdownMenu:Item>
                    All
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    Active
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    Archived
                </twig:DropdownMenu:Item>
            </twig:DropdownMenu:Content>
        </twig:DropdownMenu>
        <twig:Input placeholder="Search..." />
        <twig:Button variant="outline" size="icon" aria-label="Clear">
            <twig:ux:icon name="lucide:x" />
        </twig:Button>
    </twig:ButtonGroup>
</div>
```

### Zoom Controls

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon" aria-label="Zoom out">
        <twig:ux:icon name="lucide:minus" />
    </twig:Button>
    <twig:ButtonGroup:Text class="w-16 justify-center tabular-nums">
        100%
    </twig:ButtonGroup:Text>
    <twig:Button variant="outline" size="icon" aria-label="Zoom in">
        <twig:ux:icon name="lucide:plus" />
    </twig:Button>
</twig:ButtonGroup>
```

### Two Buttons

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline">
        Archive
    </twig:Button>
    <twig:Button variant="outline">
        Report
    </twig:Button>
</twig:ButtonGroup>
```

### Button and Input

```twig
<twig:ButtonGroup class="w-72">
    <twig:Button variant="outline">
        Subscribe
    </twig:Button>
    <twig:Input placeholder="you@example.com" />
</twig:ButtonGroup>
```

### Buttons and Badge

```twig
<twig:ButtonGroup>
    <twig:ButtonGroup:Text>
        <twig:ux:icon name="lucide:file" />
        <twig:Badge variant="secondary">
            Draft
        </twig:Badge>
    </twig:ButtonGroup:Text>
    <twig:Button variant="outline">
        <twig:ux:icon name="lucide:pencil" />
        Edit
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Upload">
        <twig:ux:icon name="lucide:upload" />
    </twig:Button>
</twig:ButtonGroup>
```

### Vertical Tool Palette

```twig
<div class="flex flex-col gap-2 w-fit">
    <twig:ButtonGroup orientation="vertical">
        <twig:Button variant="outline" size="icon" aria-label="Search">
            <twig:ux:icon name="lucide:search" />
        </twig:Button>
        <twig:Button variant="outline" size="icon" aria-label="Copy">
            <twig:ux:icon name="lucide:copy" />
        </twig:Button>
        <twig:Button variant="outline" size="icon" aria-label="Share">
            <twig:ux:icon name="lucide:share-2" />
        </twig:Button>
    </twig:ButtonGroup>
    <twig:ButtonGroup orientation="vertical">
        <twig:Button variant="outline" size="icon" aria-label="Delete">
            <twig:ux:icon name="lucide:trash-2" />
        </twig:Button>
    </twig:ButtonGroup>
</div>
```

### Separated Buttons

```twig
<twig:ButtonGroup>
    <twig:Button>
        Files
    </twig:Button>
    <twig:ButtonGroup:Separator />
    <twig:Button>
        Folder
    </twig:Button>
    <twig:ButtonGroup:Separator />
    <twig:Button>
        Media
    </twig:Button>
</twig:ButtonGroup>
```

### Dashboard Views

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon" aria-label="Grid view">
        <twig:ux:icon name="lucide:layout-grid" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="List view">
        <twig:ux:icon name="lucide:list" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Table view">
        <twig:ux:icon name="lucide:table" />
    </twig:Button>
</twig:ButtonGroup>
```

### Follower Count

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline">
        <twig:ux:icon name="lucide:user-plus" />
        Follow
    </twig:Button>
    <twig:ButtonGroup:Text class="text-muted-foreground">
        2.4k followers
    </twig:ButtonGroup:Text>
</twig:ButtonGroup>
```

### Share Caption

```twig
<twig:ButtonGroup>
    <twig:Button>
        <twig:ux:icon name="lucide:share-2" />
        Share
    </twig:Button>
    <twig:ButtonGroup:Text class="border-0 bg-transparent px-2 shadow-none">
        128 shares
    </twig:ButtonGroup:Text>
</twig:ButtonGroup>
```

### Vertical List

```twig
<twig:ButtonGroup orientation="vertical" class="w-40">
    <twig:Button variant="outline" class="justify-start bg-muted" aria-current="page">
        Dashboard
    </twig:Button>
    <twig:Button variant="outline" class="justify-start" aria-current="false">
        Projects
    </twig:Button>
    <twig:Button variant="outline" class="justify-start" aria-current="false">
        Team
    </twig:Button>
    <twig:Button variant="outline" class="justify-start" aria-current="false">
        Settings
    </twig:Button>
</twig:ButtonGroup>
```

### Time Interval

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="xs" class="tabular-nums">
        1m
    </twig:Button>
    <twig:Button variant="outline" size="xs" class="tabular-nums">
        5m
    </twig:Button>
    <twig:Button variant="outline" size="xs" class="tabular-nums">
        15m
    </twig:Button>
    <twig:Button variant="outline" size="xs" class="tabular-nums bg-muted">
        1H
    </twig:Button>
    <twig:Button variant="outline" size="xs" class="tabular-nums">
        4H
    </twig:Button>
    <twig:Button variant="outline" size="xs" class="tabular-nums">
        1D
    </twig:Button>
    <twig:Button variant="outline" size="xs" class="tabular-nums">
        1W
    </twig:Button>
    <twig:Button variant="outline" size="xs" class="tabular-nums">
        Auto
    </twig:Button>
</twig:ButtonGroup>
```

### Segmented Control

```twig
<div style="min-height: 220px">
    <twig:ButtonGroup>
        <twig:Button variant="outline" class="bg-muted">
            <twig:ux:icon name="lucide:route" />
            Routes
        </twig:Button>
        <twig:Button variant="outline">
            <twig:ux:icon name="lucide:folder-tree" />
            Paths
        </twig:Button>
        <twig:Button variant="outline">
            <twig:ux:icon name="lucide:bot" />
            Bot Name
        </twig:Button>
        <twig:DropdownMenu id="bg-seg" align="end">
            <twig:DropdownMenu:Trigger>
                <twig:Button variant="outline" size="icon" aria-label="Options" {{ ...dropdown_menu_trigger_attrs }}>
                    <twig:ux:icon name="lucide:chevron-down" />
                </twig:Button>
            </twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content>
                <twig:DropdownMenu:Item>
                    Rename
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    Reset
                </twig:DropdownMenu:Item>
            </twig:DropdownMenu:Content>
        </twig:DropdownMenu>
    </twig:ButtonGroup>
</div>
```

### Review Actions

```twig
<div style="min-height: 240px">
    <twig:ButtonGroup>
        <twig:Button>
            <twig:ux:icon name="lucide:check" />
            Approve
        </twig:Button>
        <twig:ButtonGroup:Separator />
        <twig:DropdownMenu id="bg-review" align="end">
            <twig:DropdownMenu:Trigger>
                <twig:Button size="icon" aria-label="More" {{ ...dropdown_menu_trigger_attrs }}>
                    <twig:ux:icon name="lucide:chevron-down" />
                </twig:Button>
            </twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content>
                <twig:DropdownMenu:Item>
                    Approve with conditions
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    Request changes
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Separator />
                <twig:DropdownMenu:Item variant="destructive">
                    Reject
                </twig:DropdownMenu:Item>
            </twig:DropdownMenu:Content>
        </twig:DropdownMenu>
    </twig:ButtonGroup>
</div>
```

### File Attachment

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="xs">
        <twig:ux:icon name="lucide:paperclip" />
        report.pdf
        <span class="text-muted-foreground">
            2.4 MB
        </span>
    </twig:Button>
    <twig:Button variant="outline" size="icon-xs" aria-label="Download">
        <twig:ux:icon name="lucide:download" />
    </twig:Button>
</twig:ButtonGroup>
```

### Buy Sell Hold

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" aria-pressed="false">
        Buy
    </twig:Button>
    <twig:Button variant="outline" aria-pressed="false">
        Hold
    </twig:Button>
    <twig:Button variant="outline" aria-pressed="false">
        Sell
    </twig:Button>
</twig:ButtonGroup>
```

### Environment Switcher

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" >
        Dev
    </twig:Button>
    <twig:Button variant="outline" >
        Staging
    </twig:Button>
    <twig:Button variant="outline" class="bg-muted">
        Production
        <span class="size-2 rounded-full bg-green-500">
        </span>
    </twig:Button>
</twig:ButtonGroup>
```

### Vertical Nav

A single-choice `ToggleGroup` stacked vertically: the pressed item is the active page.

```twig
<twig:ToggleGroup type="single" variant="outline" orientation="vertical" :spacing="0" class="w-44 items-stretch">
    <twig:ToggleGroup:Item value="dashboard" pressed class="justify-start">
        <twig:ux:icon name="lucide:layout-dashboard" aria-hidden="true" />
        Dashboard
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="analytics" class="justify-start">
        <twig:ux:icon name="lucide:bar-chart-2" aria-hidden="true" />
        Analytics
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="settings" class="justify-start">
        <twig:ux:icon name="lucide:settings" aria-hidden="true" />
        Settings
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="help" class="justify-start">
        <twig:ux:icon name="lucide:circle-help" aria-hidden="true" />
        Help
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Volume Control

A speaker icon next to a `NumberField`, which brings the buttons, the arrow keys and the limits. It needs the `number-field` recipe of this kit.

```twig
<twig:ButtonGroup>
    <twig:ButtonGroup:Text>
        <twig:ux:icon name="lucide:volume-2" />
        <span class="sr-only">
            Volume
        </span>
    </twig:ButtonGroup:Text>
    <twig:NumberField name="volume" :value="40" :min="0" :max="100" :step="10" label="Volume" />
</twig:ButtonGroup>
```

### Grouped Actions

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:scissors" />
        Cut
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:copy" />
        Copy
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:clipboard" />
        Paste
    </twig:Button>
</twig:ButtonGroup>
```

### Comment Actions

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:thumbs-up" />
        12
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:corner-up-left" />
        Reply
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="More">
        <twig:ux:icon name="lucide:ellipsis" />
    </twig:Button>
</twig:ButtonGroup>
```

### Social Actions

```twig
<div class="flex items-center gap-2">
    <twig:ButtonGroup>
        <twig:Button variant="outline" size="sm">
            <twig:ux:icon name="lucide:heart" />
            Like
        </twig:Button>
        <twig:ButtonGroup:Text class="text-xs">
            128
        </twig:ButtonGroup:Text>
    </twig:ButtonGroup>
    <twig:ButtonGroup>
        <twig:Button variant="outline" size="sm">
            <twig:ux:icon name="lucide:message-circle" />
            Comment
        </twig:Button>
        <twig:Button variant="outline" size="sm">
            <twig:ux:icon name="lucide:share-2" />
            Share
        </twig:Button>
    </twig:ButtonGroup>
</div>
```

### Context Bar

```twig
<twig:ButtonGroup>
    <twig:ButtonGroup:Text>
        3 selected
    </twig:ButtonGroup:Text>
    <twig:Button variant="outline" size="icon" aria-label="Archive">
        <twig:ux:icon name="lucide:archive" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Move">
        <twig:ux:icon name="lucide:folder-input" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Delete" class="text-destructive">
        <twig:ux:icon name="lucide:trash-2" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Clear selection">
        <twig:ux:icon name="lucide:x" />
    </twig:Button>
</twig:ButtonGroup>
```

### Rich Text Toolbar

```twig
<div class="flex flex-wrap items-center gap-2">
    <twig:ToggleGroup type="multiple" variant="outline" spacing="0">
        <twig:ToggleGroup:Item value="bold" aria-label="Bold">
            <twig:ux:icon name="lucide:bold" />
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="italic" aria-label="Italic">
            <twig:ux:icon name="lucide:italic" />
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="underline" aria-label="Underline">
            <twig:ux:icon name="lucide:underline" />
        </twig:ToggleGroup:Item>
    </twig:ToggleGroup>
    <twig:ToggleGroup type="single" variant="outline" spacing="0">
        <twig:ToggleGroup:Item value="left" aria-label="Align left">
            <twig:ux:icon name="lucide:align-left" />
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="center" aria-label="Align center">
            <twig:ux:icon name="lucide:align-center" />
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="right" aria-label="Align right">
            <twig:ux:icon name="lucide:align-right" />
        </twig:ToggleGroup:Item>
    </twig:ToggleGroup>
</div>
```

### Carousel Controls

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon" aria-label="Previous slide">
        <twig:ux:icon name="lucide:chevron-left" />
    </twig:Button>
    <twig:ButtonGroup:Text class="tabular-nums">
        2 / 5
    </twig:ButtonGroup:Text>
    <twig:Button variant="outline" size="icon" aria-label="Next slide">
        <twig:ux:icon name="lucide:chevron-right" />
    </twig:Button>
</twig:ButtonGroup>
```

### Map Controls

```twig
<div class="flex gap-3">
    <twig:ButtonGroup orientation="vertical">
        <twig:Button variant="outline" size="icon" aria-label="Zoom in">
            <twig:ux:icon name="lucide:plus" />
        </twig:Button>
        <twig:Button variant="outline" size="icon" aria-label="Zoom out">
            <twig:ux:icon name="lucide:minus" />
        </twig:Button>
    </twig:ButtonGroup>
    <twig:ButtonGroup orientation="vertical">
        <twig:Button variant="outline" size="icon" aria-label="My location">
            <twig:ux:icon name="lucide:locate-fixed" />
        </twig:Button>
        <twig:Button variant="outline" size="icon" aria-label="Reset north">
            <twig:ux:icon name="lucide:compass" />
        </twig:Button>
        <twig:Button variant="outline" size="icon" aria-label="Layers">
            <twig:ux:icon name="lucide:layers" />
        </twig:Button>
    </twig:ButtonGroup>
</div>
```

### Timeline Controls

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon" aria-label="Start">
        <twig:ux:icon name="lucide:skip-back" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Previous frame">
        <twig:ux:icon name="lucide:step-back" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Play">
        <twig:ux:icon name="lucide:play" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Next frame">
        <twig:ux:icon name="lucide:step-forward" />
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="End">
        <twig:ux:icon name="lucide:skip-forward" />
    </twig:Button>
    <twig:ButtonGroup:Text class="tabular-nums">
        00:42 / 02:10
    </twig:ButtonGroup:Text>
</twig:ButtonGroup>
```

### Chart Controls

```twig
<div class="flex items-center gap-2">
    <twig:ToggleGroup type="single" variant="outline" size="sm" spacing="0">
        <twig:ToggleGroup:Item value="1d" aria-label="1 day">
            1D
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="1w" aria-label="1 week">
            1W
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="1m" aria-label="1 month">
            1M
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="1y" aria-label="1 year">
            1Y
        </twig:ToggleGroup:Item>
    </twig:ToggleGroup>
    <twig:Button variant="outline" size="icon-sm" aria-label="Download chart">
        <twig:ux:icon name="lucide:download" />
    </twig:Button>
</div>
```

### Density

```twig
<twig:ToggleGroup type="single" variant="outline" size="sm" spacing="0">
    <twig:ToggleGroup:Item value="compact" aria-label="Compact">
        <twig:ux:icon name="lucide:align-justify" />
        Compact
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="comfortable" aria-label="Comfortable">
        <twig:ux:icon name="lucide:menu" />
        Comfortable
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="spacious" aria-label="Spacious">
        <twig:ux:icon name="lucide:rows-3" />
        Spacious
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Overflow Menu

```twig
<div class="flex justify-center" style="min-height: 280px">
    <twig:ButtonGroup>
        <twig:Button variant="outline" size="sm">
            Edit
        </twig:Button>
        <twig:Button variant="outline" size="sm">
            Share
        </twig:Button>
        <twig:DropdownMenu id="bg-overflow" align="end">
            <twig:DropdownMenu:Trigger>
                <twig:Button variant="outline" size="icon-sm" aria-label="More actions" {{ ...dropdown_menu_trigger_attrs }}>
                    <twig:ux:icon name="lucide:ellipsis" />
                </twig:Button>
            </twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content class="w-40">
                <twig:DropdownMenu:Group>
                    <twig:DropdownMenu:Item>
                        Duplicate
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item>
                        Archive
                    </twig:DropdownMenu:Item>
                    <twig:DropdownMenu:Item variant="destructive">
                        Delete
                    </twig:DropdownMenu:Item>
                </twig:DropdownMenu:Group>
            </twig:DropdownMenu:Content>
        </twig:DropdownMenu>
    </twig:ButtonGroup>
</div>
```

### Notifications

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:bell" />
        Notifications
    </twig:Button>
    <twig:ButtonGroup:Text class="bg-primary text-primary-foreground">
        4
    </twig:ButtonGroup:Text>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:check-check" />
        Mark all read
    </twig:Button>
</twig:ButtonGroup>
```

### File Operations

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:upload" />
        Upload
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:download" />
        Download
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:share-2" />
        Share
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="Delete" class="text-destructive">
        <twig:ux:icon name="lucide:trash-2" />
    </twig:Button>
</twig:ButtonGroup>
```

### Cart

```twig
<div class="flex items-center gap-3">
    <twig:ButtonGroup>
        <twig:Button variant="outline" size="icon-sm" aria-label="Remove one">
            <twig:ux:icon name="lucide:minus" />
        </twig:Button>
        <twig:ButtonGroup:Text class="w-8 justify-center tabular-nums">
            1
        </twig:ButtonGroup:Text>
        <twig:Button variant="outline" size="icon-sm" aria-label="Add one">
            <twig:ux:icon name="lucide:plus" />
        </twig:Button>
    </twig:ButtonGroup>
    <twig:Button size="sm">
        <twig:ux:icon name="lucide:shopping-cart" />
        Add to cart
    </twig:Button>
</div>
```

### Filter Chips

```twig
<twig:ToggleGroup type="multiple" variant="outline" size="sm" spacing="2">
    <twig:ToggleGroup:Item value="open" aria-label="Open">
        Open
        <twig:Badge variant="secondary">
            12
        </twig:Badge>
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="review" aria-label="In review">
        In review
        <twig:Badge variant="secondary">
            4
        </twig:Badge>
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="done" aria-label="Done">
        Done
        <twig:Badge variant="secondary">
            38
        </twig:Badge>
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Quantity

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon" aria-label="Decrease quantity">
        <twig:ux:icon name="lucide:minus" />
    </twig:Button>
    <twig:Input type="number" value="2" min="1" aria-label="Quantity" class="w-14 text-center" />
    <twig:Button variant="outline" size="icon" aria-label="Increase quantity">
        <twig:ux:icon name="lucide:plus" />
    </twig:Button>
</twig:ButtonGroup>
```

### Keyboard Shortcuts

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="sm">
        Save
        <twig:Kbd>
            ⌘S
        </twig:Kbd>
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        Undo
        <twig:Kbd>
            ⌘Z
        </twig:Kbd>
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        Find
        <twig:Kbd>
            ⌘F
        </twig:Kbd>
    </twig:Button>
</twig:ButtonGroup>
```

### Stepper

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:chevron-left" />
        Previous
    </twig:Button>
    <twig:ButtonGroup:Text>
        Step 2 of 4
    </twig:ButtonGroup:Text>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:chevron-right" />
        Next
    </twig:Button>
</twig:ButtonGroup>
```

### Date Picker

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="icon" aria-label="Previous day">
        <twig:ux:icon name="lucide:chevron-left" />
    </twig:Button>
    <twig:Button variant="outline" size="default">
        <twig:ux:icon name="lucide:calendar" />
        Wed, Nov 25
    </twig:Button>
    <twig:Button variant="outline" size="icon" aria-label="Next day">
        <twig:ux:icon name="lucide:chevron-right" />
    </twig:Button>
</twig:ButtonGroup>
```

### Priority Picker

```twig
<twig:ToggleGroup type="single" variant="outline" size="sm" spacing="0">
    <twig:ToggleGroup:Item value="low" aria-label="Low">
        <span class="size-2 rounded-full bg-sky-500"></span>
        Low
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="medium" aria-label="Medium">
        <span class="size-2 rounded-full bg-amber-500"></span>
        Medium
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="high" aria-label="High">
        <span class="size-2 rounded-full bg-red-500"></span>
        High
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Status Picker

```twig
<twig:ToggleGroup type="single" variant="outline" size="default" spacing="0">
    <twig:ToggleGroup:Item value="todo" aria-label="To do">
        To do
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="progress" aria-label="In progress">
        In progress
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="done" aria-label="Done">
        Done
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Sort

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:calendar-days" />
        Sort by date
    </twig:Button>
    <twig:Button variant="outline" size="icon-sm" aria-label="Reverse order">
        <twig:ux:icon name="lucide:arrow-up-down" />
    </twig:Button>
</twig:ButtonGroup>
```

### Playback Speed

```twig
<twig:ToggleGroup type="single" variant="outline" size="sm" spacing="0">
    <twig:ToggleGroup:Item value="0.5" aria-label="Half speed">
        0.5x
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="1" aria-label="Normal speed">
        1x
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="1.5" aria-label="1.5 times">
        1.5x
    </twig:ToggleGroup:Item>
    <twig:ToggleGroup:Item value="2" aria-label="Double speed">
        2x
    </twig:ToggleGroup:Item>
</twig:ToggleGroup>
```

### Wizard Steps

```twig
<twig:ButtonGroup>
    <twig:Button variant="outline" size="sm">
        <twig:ux:icon name="lucide:arrow-left" />
        Back
    </twig:Button>
    <twig:Button variant="outline" size="sm">
        Skip
    </twig:Button>
    <twig:Button size="sm">
        <twig:ux:icon name="lucide:arrow-right" />
        Continue
    </twig:Button>
</twig:ButtonGroup>
```

### Loading States

```twig
<div class="flex flex-wrap gap-4">
    <twig:ButtonGroup>
        <twig:Button variant="outline" size="sm" disabled>
            <twig:Spinner />
            Saving...
        </twig:Button>
        <twig:Button variant="outline" size="sm">
            Cancel
        </twig:Button>
    </twig:ButtonGroup>
    <twig:ButtonGroup>
        <twig:Button variant="outline" size="icon-sm" aria-label="Refresh" disabled>
            <twig:Spinner />
        </twig:Button>
        <twig:Button variant="outline" size="sm" disabled>
            Syncing
        </twig:Button>
    </twig:ButtonGroup>
</div>
```

# Popover

## Examples

### Opening Sides

```twig
<div class="grid grid-cols-2 gap-3 pt-20 pb-20 ps-24" style="min-height: 320px; max-width: 360px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...popover_trigger_attrs }}>
                top
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content side="top" class="w-40 text-sm">
            Opens on the top.
        </twig:Popover:Content>
    </twig:Popover>
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...popover_trigger_attrs }}>
                right
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content side="right" class="w-40 text-sm">
            Opens on the right.
        </twig:Popover:Content>
    </twig:Popover>
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...popover_trigger_attrs }}>
                bottom
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content side="bottom" class="w-40 text-sm">
            Opens on the bottom.
        </twig:Popover:Content>
    </twig:Popover>
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" class="capitalize" {{ ...popover_trigger_attrs }}>
                left
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content side="left" class="w-40 text-sm">
            Opens on the left.
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Inline Form

```twig
<div class="flex justify-center pt-4" style="min-height: 280px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                Dimensions
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72">
            <h4 class="font-medium leading-none">
                Dimensions
            </h4>
            <div class="mt-3 grid gap-3">
                <div class="grid grid-cols-3 items-center gap-2">
                    <twig:Label for="pop-w">
                        Width
                    </twig:Label>
                    <twig:Input id="pop-w" value="100%" class="col-span-2 h-8" />
                </div>
                <div class="grid grid-cols-3 items-center gap-2">
                    <twig:Label for="pop-h">
                        Height
                    </twig:Label>
                    <twig:Input id="pop-h" value="25px" class="col-span-2 h-8" />
                </div>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Profile Card

```twig
<div class="flex justify-center pt-4" style="min-height: 280px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="ghost" class="gap-2" {{ ...popover_trigger_attrs }}>
                <twig:Avatar size="sm">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                @shadcn
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-72">
            <div class="flex gap-3">
                <twig:Avatar>
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="flex-1">
                    <p class="font-medium">
                        shadcn
                    </p>
                    <p class="text-xs text-muted-foreground">
                        Building UI that people love.
                    </p>
                    <p class="mt-2 text-xs text-muted-foreground">
                        <span class="font-medium text-foreground">
                            12k
                        </span>
                        followers
                    </p>
                </div>
            </div>
            <twig:Button size="sm" class="mt-3 w-full">
                Follow
            </twig:Button>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Feature Pitch

```twig
<div class="flex justify-center pt-4" style="min-height: 300px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:sparkles" />
                What is new
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-80 gap-0 overflow-hidden p-0">
            <div class="bg-primary px-4 py-3 text-primary-foreground">
                <p class="font-medium">
                    Meet the AI assistant
                </p>
            </div>
            <div class="grid gap-3 p-4 text-sm">
                <p class="text-muted-foreground">
                    Summarize pages and draft replies in one click.
                </p>
                <div class="flex gap-2">
                    <twig:Button size="sm">
                        Enable AI
                    </twig:Button>
                    <twig:Button size="sm" variant="outline">
                        Learn more
                    </twig:Button>
                </div>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Controls

```twig
<div class="flex justify-center pt-4" style="min-height: 320px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" size="icon" aria-label="Settings" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:settings" />
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content class="w-64">
            <div class="grid gap-3">
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="pop-sound">
                        Sound
                    </twig:Field:Label>
                    <twig:Switch id="pop-sound" checked />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="pop-notif">
                        Notifications
                    </twig:Field:Label>
                    <twig:Switch id="pop-notif" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="pop-vol">
                        Volume
                    </twig:Field:Label>
                    <twig:Slider id="pop-vol" name="volume" value="60" />
                </twig:Field>
            </div>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

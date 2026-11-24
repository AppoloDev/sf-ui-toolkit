# Drawer

## Examples

### Scrollable Content

```twig
<div style="min-height: 420px">
    <twig:Drawer id="drawer-scroll">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Open drawer
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content class="max-h-[80vh]">
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Move Goal
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Set your daily activity goal.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="min-h-0 flex-1 overflow-y-auto px-4">
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p class="mb-2 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
            </div>
            <twig:Drawer:Footer>
                <twig:Button>
                    Submit
                </twig:Button>
                <twig:Drawer:Close>
                    <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Drawer:Close>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

### Right Side

```twig
<div style="min-height: 420px">
    <twig:Drawer id="drawer-right" direction="right">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Open right
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Filters
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Refine the list.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <div class="flex-1 px-4 text-sm text-muted-foreground">
                Filter content.
            </div>
            <twig:Drawer:Footer>
                <twig:Drawer:Close>
                    <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                        Close
                    </twig:Button>
                </twig:Drawer:Close>
            </twig:Drawer:Footer>
        </twig:Drawer:Content>
    </twig:Drawer>
</div>
```

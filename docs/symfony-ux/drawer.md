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

### Responsive

A dialog on a wide screen and a drawer on a narrow one: both exist, and a breakpoint class shows the matching button. Nothing in the page switches between them.

```twig
<div style="min-height: 420px">
    <div class="flex">
        <twig:Dialog id="responsive-dialog">
            <twig:Dialog:Trigger>
                <twig:Button variant="outline" class="max-md:hidden" {{ ...dialog_trigger_attrs }}>
                    Edit profile
                </twig:Button>
            </twig:Dialog:Trigger>
            <twig:Dialog:Content>
                <twig:Dialog:Header>
                    <twig:Dialog:Title>
                        Edit profile
                    </twig:Dialog:Title>
                    <twig:Dialog:Description>
                        Make changes to your profile here.
                    </twig:Dialog:Description>
                </twig:Dialog:Header>
                <div class="grid gap-3">
                    <twig:Label for="responsive-dialog-email">
                        Email
                    </twig:Label>
                    <twig:Input id="responsive-dialog-email" type="email" value="amy@example.com" />
                </div>
                <twig:Dialog:Footer>
                    <twig:Dialog:Close>
                        <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                            Cancel
                        </twig:Button>
                    </twig:Dialog:Close>
                    <twig:Button>
                        Save changes
                    </twig:Button>
                </twig:Dialog:Footer>
            </twig:Dialog:Content>
        </twig:Dialog>
        <twig:Drawer id="responsive-drawer">
            <twig:Drawer:Trigger>
                <twig:Button variant="outline" class="md:hidden" {{ ...drawer_trigger_attrs }}>
                    Edit profile
                </twig:Button>
            </twig:Drawer:Trigger>
            <twig:Drawer:Content>
                <twig:Drawer:Header>
                    <twig:Drawer:Title>
                        Edit profile
                    </twig:Drawer:Title>
                    <twig:Drawer:Description>
                        Make changes to your profile here.
                    </twig:Drawer:Description>
                </twig:Drawer:Header>
                <div class="grid gap-3 px-4">
                    <twig:Label for="responsive-drawer-email">
                        Email
                    </twig:Label>
                    <twig:Input id="responsive-drawer-email" type="email" value="amy@example.com" />
                </div>
                <twig:Drawer:Footer>
                    <twig:Button>
                        Save changes
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
</div>
```

### Nested

A second drawer opened from inside the first one.

```twig
<div style="min-height: 420px">
    <twig:Drawer id="drawer-outer">
        <twig:Drawer:Trigger>
            <twig:Button variant="outline" {{ ...drawer_trigger_attrs }}>
                Open drawer
            </twig:Button>
        </twig:Drawer:Trigger>
        <twig:Drawer:Content>
            <twig:Drawer:Header>
                <twig:Drawer:Title>
                    Account
                </twig:Drawer:Title>
                <twig:Drawer:Description>
                    Manage your account settings.
                </twig:Drawer:Description>
            </twig:Drawer:Header>
            <twig:Drawer:Footer>
                <twig:Drawer id="drawer-inner">
                    <twig:Drawer:Trigger>
                        <twig:Button class="w-full" {{ ...drawer_trigger_attrs }}>
                            Delete account
                        </twig:Button>
                    </twig:Drawer:Trigger>
                    <twig:Drawer:Content>
                        <twig:Drawer:Header>
                            <twig:Drawer:Title>
                                Are you sure?
                            </twig:Drawer:Title>
                            <twig:Drawer:Description>
                                This cannot be undone.
                            </twig:Drawer:Description>
                        </twig:Drawer:Header>
                        <twig:Drawer:Footer>
                            <twig:Button variant="destructive">
                                Yes, delete
                            </twig:Button>
                            <twig:Drawer:Close>
                                <twig:Button variant="outline" {{ ...drawer_close_attrs }}>
                                    Cancel
                                </twig:Button>
                            </twig:Drawer:Close>
                        </twig:Drawer:Footer>
                    </twig:Drawer:Content>
                </twig:Drawer>
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

# Empty

## Examples

### No Results

```twig
<twig:Empty class="bg-muted/50">
    <twig:Empty:Header>
        <twig:Empty:Title>
            No results found
        </twig:Empty:Title>
        <twig:Empty:Description>
            Try adjusting your search or filters.
        </twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content class="flex-row justify-center gap-2">
        <twig:Button variant="outline">
            Try again
        </twig:Button>
        <twig:Button as="a" href="#" variant="link" class="text-muted-foreground">
            Learn more
            <twig:ux:icon name="lucide:arrow-up-right" />
        </twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Inbox

```twig
<twig:Empty>
    <twig:Empty:Header>
        <twig:Empty:Media variant="icon">
            <twig:ux:icon name="lucide:inbox" />
        </twig:Empty:Media>
        <twig:Empty:Title>
            Inbox zero
        </twig:Empty:Title>
        <twig:Empty:Description>
            You are all caught up. New messages will show up here.
        </twig:Empty:Description>
    </twig:Empty:Header>
</twig:Empty>
```

### No Notifications

```twig
<twig:Empty class="bg-muted/50">
    <twig:Empty:Header>
        <twig:Empty:Media variant="icon">
            <twig:ux:icon name="lucide:bell-off" />
        </twig:Empty:Media>
        <twig:Empty:Title>
            No notifications
        </twig:Empty:Title>
        <twig:Empty:Description>
            We will let you know when something arrives.
        </twig:Empty:Description>
    </twig:Empty:Header>
</twig:Empty>
```

### Dashed Upload

```twig
<twig:Empty class="max-w-md border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Media variant="icon">
            <twig:ux:icon name="lucide:cloud-upload" />
        </twig:Empty:Media>
        <twig:Empty:Title>
            Upload your files
        </twig:Empty:Title>
        <twig:Empty:Description>
            PNG, JPG or PDF up to 10 MB.
        </twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content>
        <twig:Button variant="outline">
            Browse Files
        </twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Analytics

```twig
<twig:Empty class="border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Media variant="icon">
            <twig:ux:icon name="lucide:chart-column" />
        </twig:Empty:Media>
        <twig:Empty:Title>
            No analytics yet
        </twig:Empty:Title>
        <twig:Empty:Description>
            Connect a data source to start tracking.
        </twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content class="flex-row justify-center gap-2">
        <twig:Button>
            Connect Data Source
        </twig:Button>
        <twig:Button variant="outline">
            View Docs
        </twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Search Input

```twig
<twig:Empty class="border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Title>
            404 - Not Found
        </twig:Empty:Title>
        <twig:Empty:Description>
            The page you are looking for does not exist.
        </twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content>
        <twig:InputGroup class="sm:w-3/4">
            <twig:InputGroup:Input placeholder="Try searching for pages..." />
            <twig:InputGroup:Addon>
                <twig:ux:icon name="lucide:search" />
            </twig:InputGroup:Addon>
            <twig:InputGroup:Addon align="inline-end">
                <twig:Kbd>
                    /
                </twig:Kbd>
            </twig:InputGroup:Addon>
        </twig:InputGroup>
        <twig:Button as="a" href="#" variant="link" class="text-muted-foreground">
            Contact support
        </twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Team Members

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Team Members
        </twig:Card:Title>
    </twig:Card:Header>
    <twig:Card:Content>
        <twig:Empty class="p-4">
            <twig:Empty:Header>
                <twig:Empty:Media variant="icon">
                    <twig:ux:icon name="lucide:users" />
                </twig:Empty:Media>
                <twig:Empty:Title>
                    No members yet
                </twig:Empty:Title>
                <twig:Empty:Description>
                    Invite your first collaborators.
                </twig:Empty:Description>
            </twig:Empty:Header>
            <twig:Empty:Content>
                <twig:Button size="sm">
                    <twig:ux:icon name="lucide:user-plus" />
                    Invite People
                </twig:Button>
            </twig:Empty:Content>
        </twig:Empty>
    </twig:Card:Content>
</twig:Card>
```

### Tasks

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Tasks
        </twig:Card:Title>
    </twig:Card:Header>
    <twig:Card:Content>
        <twig:Empty class="p-4">
            <twig:Empty:Header>
                <twig:Empty:Media variant="icon">
                    <twig:ux:icon name="lucide:circle-check" />
                </twig:Empty:Media>
                <twig:Empty:Title>
                    All clear
                </twig:Empty:Title>
                <twig:Empty:Description>
                    Every to-do is done.
                </twig:Empty:Description>
            </twig:Empty:Header>
            <twig:Empty:Content>
                <twig:Button variant="outline" size="sm">
                    <twig:ux:icon name="lucide:plus" />
                    New Task
                </twig:Button>
            </twig:Empty:Content>
        </twig:Empty>
    </twig:Card:Content>
</twig:Card>
```

### Bookmarks

```twig
<twig:Empty>
    <twig:Empty:Header>
        <twig:Empty:Media variant="icon">
            <twig:ux:icon name="lucide:bookmark" />
        </twig:Empty:Media>
        <twig:Empty:Title>
            No bookmarks
        </twig:Empty:Title>
        <twig:Empty:Description>
            Items you save will appear here.
        </twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content>
        <twig:Button variant="outline">
            Browse Items
        </twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Automations

The illustration is plain markup: two app tiles linked to a central one by dashed lines. No image is needed.

```twig
<twig:Empty class="border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Media>
            <div class="flex items-center">
                <div class="flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground ring-1 ring-foreground/10">
                    <twig:ux:icon name="lucide:mail" class="size-5" />
                </div>
                <div class="h-px w-6 border-t border-dashed border-muted-foreground/50">
                </div>
                <div class="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-primary/15">
                    <twig:ux:icon name="lucide:zap" class="size-5" />
                </div>
                <div class="h-px w-6 border-t border-dashed border-muted-foreground/50">
                </div>
                <div class="flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground ring-1 ring-foreground/10">
                    <twig:ux:icon name="lucide:calendar-check" class="size-5" />
                </div>
            </div>
        </twig:Empty:Media>
        <twig:Empty:Title>
            No automations yet
        </twig:Empty:Title>
        <twig:Empty:Description>
            Hook up your favorite tools and let the automation magic begin.
        </twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content>
        <twig:Button>
            <twig:ux:icon name="lucide:plus" />
            Create new automation
        </twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Comments Board

A dotted canvas, drawn with a radial gradient, and a comment pin that waits for the first thought.

```twig
<twig:Empty class="border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Media>
            <div class="relative h-20 w-40 rounded-lg bg-[radial-gradient(var(--color-muted-foreground)_1.5px,transparent_1.5px)] [background-size:12px_12px] ring-1 ring-foreground/10">
                <div class="absolute start-6 top-4 flex size-9 items-center justify-center rounded-full rounded-bl-none bg-primary text-primary-foreground shadow-sm">
                    <twig:ux:icon name="lucide:message-square-plus" class="size-4" />
                </div>
                <div class="absolute end-6 bottom-3 size-6 rounded-full bg-muted ring-2 ring-background">
                </div>
            </div>
        </twig:Empty:Media>
        <twig:Empty:Title>
            Be the first to share a thought
        </twig:Empty:Title>
        <twig:Empty:Description>
            Drop a comment on the canvas to get the conversation started.
        </twig:Empty:Description>
    </twig:Empty:Header>
</twig:Empty>
```

### Search File Cards

Three small cards fanned out, one per kind of result.

```twig
<twig:Empty class="border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Media>
            <div class="flex items-end">
                <div class="flex size-12 -rotate-6 items-center justify-center rounded-xl bg-card text-muted-foreground shadow-sm ring-1 ring-foreground/10">
                    <twig:ux:icon name="lucide:file-text" class="size-5" />
                </div>
                <div class="z-10 -mx-2 flex size-14 items-center justify-center rounded-xl bg-card text-foreground shadow-md ring-1 ring-foreground/15">
                    <twig:ux:icon name="lucide:folder" class="size-6" />
                </div>
                <div class="flex size-12 rotate-6 items-center justify-center rounded-xl bg-card text-muted-foreground shadow-sm ring-1 ring-foreground/10">
                    <twig:ux:icon name="lucide:hash" class="size-5" />
                </div>
            </div>
        </twig:Empty:Media>
        <twig:Empty:Title>
            Looking for something?
        </twig:Empty:Title>
        <twig:Empty:Description>
            Type a keyword and we will search through files, folders, tags and transcripts.
        </twig:Empty:Description>
    </twig:Empty:Header>
</twig:Empty>
```

### Chat Bubbles

```twig
<twig:Empty class="border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Media>
            <div class="flex w-40 flex-col gap-2">
                <div class="flex w-28 flex-col gap-1.5 rounded-2xl rounded-bl-sm bg-muted p-2.5">
                    <div class="h-1.5 w-full rounded-full bg-foreground/15">
                    </div>
                    <div class="h-1.5 w-2/3 rounded-full bg-foreground/15">
                    </div>
                </div>
                <div class="flex w-24 flex-col gap-1.5 self-end rounded-2xl rounded-br-sm bg-primary/15 p-2.5">
                    <div class="h-1.5 w-full rounded-full bg-primary/40">
                    </div>
                </div>
            </div>
        </twig:Empty:Media>
        <twig:Empty:Title>
            No messages yet
        </twig:Empty:Title>
        <twig:Empty:Description>
            Start a conversation with your team. Messages will appear here.
        </twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content>
        <twig:Button variant="outline">
            <twig:ux:icon name="lucide:send" />
            Send a message
        </twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Credit Card

```twig
<twig:Empty class="border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Media>
            <div class="relative h-20 w-32">
                <div class="absolute inset-x-3 top-0 h-16 -rotate-6 rounded-lg bg-muted ring-1 ring-foreground/10">
                </div>
                <div class="absolute inset-x-0 bottom-0 flex h-16 flex-col justify-between rounded-lg bg-linear-to-br from-primary to-primary/60 p-2.5 shadow-md">
                    <div class="h-3.5 w-5 rounded-sm bg-primary-foreground/70">
                    </div>
                    <div class="flex items-center gap-1">
                        <div class="size-1 rounded-full bg-primary-foreground/80">
                        </div>
                        <div class="size-1 rounded-full bg-primary-foreground/80">
                        </div>
                        <div class="size-1 rounded-full bg-primary-foreground/80">
                        </div>
                        <div class="size-1 rounded-full bg-primary-foreground/80">
                        </div>
                        <div class="ms-1 h-1.5 w-6 rounded-full bg-primary-foreground/60">
                        </div>
                    </div>
                </div>
            </div>
        </twig:Empty:Media>
        <twig:Empty:Title>
            No payment methods
        </twig:Empty:Title>
        <twig:Empty:Description>
            Add a payment method to start making transactions securely.
        </twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content>
        <twig:Button>
            <twig:ux:icon name="lucide:plus" />
            Add payment method
        </twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Events Calendar

The grid of days is a single element with a dotted background; one cell is circled.

```twig
<twig:Empty class="border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Media>
            <div class="w-32 overflow-hidden rounded-lg bg-card shadow-sm ring-1 ring-foreground/10">
                <div class="flex items-center justify-between bg-primary px-2.5 py-1.5">
                    <div class="h-1.5 w-8 rounded-full bg-primary-foreground/70">
                    </div>
                    <div class="size-1.5 rounded-full bg-primary-foreground/70">
                    </div>
                </div>
                <div class="relative p-2.5">
                    <div class="h-12 bg-[radial-gradient(var(--color-muted-foreground)_1.5px,transparent_1.5px)] [background-size:16px_12px] opacity-60">
                    </div>
                    <div class="absolute start-[58px] top-[30px] size-5 rounded-full ring-2 ring-primary">
                    </div>
                </div>
            </div>
        </twig:Empty:Media>
        <twig:Empty:Title>
            No upcoming events
        </twig:Empty:Title>
        <twig:Empty:Description>
            Your schedule is clear. Create an event to get started.
        </twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content>
        <twig:Button>
            <twig:ux:icon name="lucide:calendar-plus" />
            Create event
        </twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

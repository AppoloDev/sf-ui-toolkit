# Empty

## Examples

### No Results

```twig
<twig:Empty class="bg-muted/50">
    <twig:Empty:Header>
        <twig:Empty:Title>No results found</twig:Empty:Title>
        <twig:Empty:Description>Try adjusting your search or filters.</twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content class="flex-row justify-center gap-2">
        <twig:Button variant="outline">Try again</twig:Button>
        <twig:Button as="a" href="#" variant="link" class="text-muted-foreground">Learn more <twig:ux:icon name="lucide:arrow-up-right" /></twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Inbox

```twig
<twig:Empty>
    <twig:Empty:Header>
        <twig:Empty:Media variant="icon"><twig:ux:icon name="lucide:inbox" /></twig:Empty:Media>
        <twig:Empty:Title>Inbox zero</twig:Empty:Title>
        <twig:Empty:Description>You are all caught up. New messages will show up here.</twig:Empty:Description>
    </twig:Empty:Header>
</twig:Empty>
```

### No Notifications

```twig
<twig:Empty class="bg-muted/50">
    <twig:Empty:Header>
        <twig:Empty:Media variant="icon"><twig:ux:icon name="lucide:bell-off" /></twig:Empty:Media>
        <twig:Empty:Title>No notifications</twig:Empty:Title>
        <twig:Empty:Description>We will let you know when something arrives.</twig:Empty:Description>
    </twig:Empty:Header>
</twig:Empty>
```

### Dashed Upload

```twig
<twig:Empty class="max-w-md border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Media variant="icon"><twig:ux:icon name="lucide:cloud-upload" /></twig:Empty:Media>
        <twig:Empty:Title>Upload your files</twig:Empty:Title>
        <twig:Empty:Description>PNG, JPG or PDF up to 10 MB.</twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content><twig:Button variant="outline">Browse Files</twig:Button></twig:Empty:Content>
</twig:Empty>
```

### Analytics

```twig
<twig:Empty class="border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Media variant="icon"><twig:ux:icon name="lucide:chart-column" /></twig:Empty:Media>
        <twig:Empty:Title>No analytics yet</twig:Empty:Title>
        <twig:Empty:Description>Connect a data source to start tracking.</twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content class="flex-row justify-center gap-2">
        <twig:Button>Connect Data Source</twig:Button>
        <twig:Button variant="outline">View Docs</twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Search Input

```twig
<twig:Empty class="border border-dashed">
    <twig:Empty:Header>
        <twig:Empty:Title>404 - Not Found</twig:Empty:Title>
        <twig:Empty:Description>The page you are looking for does not exist.</twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content>
        <twig:InputGroup class="sm:w-3/4">
            <twig:InputGroup:Input placeholder="Try searching for pages..." />
            <twig:InputGroup:Addon><twig:ux:icon name="lucide:search" /></twig:InputGroup:Addon>
            <twig:InputGroup:Addon align="inline-end"><twig:Kbd>/</twig:Kbd></twig:InputGroup:Addon>
        </twig:InputGroup>
        <twig:Button as="a" href="#" variant="link" class="text-muted-foreground">Contact support</twig:Button>
    </twig:Empty:Content>
</twig:Empty>
```

### Team Members

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Header><twig:Card:Title>Team Members</twig:Card:Title></twig:Card:Header>
    <twig:Card:Content>
        <twig:Empty class="p-4">
            <twig:Empty:Header>
                <twig:Empty:Media variant="icon"><twig:ux:icon name="lucide:users" /></twig:Empty:Media>
                <twig:Empty:Title>No members yet</twig:Empty:Title>
                <twig:Empty:Description>Invite your first collaborators.</twig:Empty:Description>
            </twig:Empty:Header>
            <twig:Empty:Content><twig:Button size="sm"><twig:ux:icon name="lucide:user-plus" /> Invite People</twig:Button></twig:Empty:Content>
        </twig:Empty>
    </twig:Card:Content>
</twig:Card>
```

### Tasks

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Header><twig:Card:Title>Tasks</twig:Card:Title></twig:Card:Header>
    <twig:Card:Content>
        <twig:Empty class="p-4">
            <twig:Empty:Header>
                <twig:Empty:Media variant="icon"><twig:ux:icon name="lucide:circle-check" /></twig:Empty:Media>
                <twig:Empty:Title>All clear</twig:Empty:Title>
                <twig:Empty:Description>Every to-do is done.</twig:Empty:Description>
            </twig:Empty:Header>
            <twig:Empty:Content><twig:Button variant="outline" size="sm"><twig:ux:icon name="lucide:plus" /> New Task</twig:Button></twig:Empty:Content>
        </twig:Empty>
    </twig:Card:Content>
</twig:Card>
```

### Bookmarks

```twig
<twig:Empty>
    <twig:Empty:Header>
        <twig:Empty:Media variant="icon"><twig:ux:icon name="lucide:bookmark" /></twig:Empty:Media>
        <twig:Empty:Title>No bookmarks</twig:Empty:Title>
        <twig:Empty:Description>Items you save will appear here.</twig:Empty:Description>
    </twig:Empty:Header>
    <twig:Empty:Content><twig:Button variant="outline">Browse Items</twig:Button></twig:Empty:Content>
</twig:Empty>
```

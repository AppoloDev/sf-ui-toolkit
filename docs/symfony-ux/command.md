# Command

## Examples

### Always Open

```twig
<twig:Command class="max-w-xs rounded-lg border">
    <twig:Command:Input placeholder="Type a command or search..." />
    <twig:Command:List>
        <twig:Command:Empty>
            No results found.
        </twig:Command:Empty>
        <twig:Command:Group heading="Suggestions">
            <twig:Command:Item>
                Calendar
            </twig:Command:Item>
            <twig:Command:Item>
                Search Emoji
            </twig:Command:Item>
            <twig:Command:Item disabled>
                Calculator
            </twig:Command:Item>
        </twig:Command:Group>
    </twig:Command:List>
</twig:Command>
```

### File Search

```twig
<div style="min-height: 300px">
    <twig:Dialog id="command-files">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" class="w-fit" {{ ...dialog_trigger_attrs }}>
                <twig:ux:icon name="lucide:search" />
                Find a file
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command>
                <twig:Command:Input placeholder="Search files..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No files found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Files">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:file" />
                            <span>
                                index.html.twig
                            </span>
                            <span class="text-xs text-muted-foreground">
                                templates/
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Twig
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:file" />
                            <span>
                                app.js
                            </span>
                            <span class="text-xs text-muted-foreground">
                                assets/
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                JS
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:file" />
                            <span>
                                services.yaml
                            </span>
                            <span class="text-xs text-muted-foreground">
                                config/
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                YAML
                            </twig:Badge>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### User Search

```twig
<div style="min-height: 300px">
    <twig:Dialog id="command-users">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" class="w-fit" {{ ...dialog_trigger_attrs }}>
                <twig:ux:icon name="lucide:users" />
                Find a person
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command>
                <twig:Command:Input placeholder="Search people..." />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No people found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Team">
                        <twig:Command:Item>
                            <twig:Avatar size="sm">
                                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                                <twig:Avatar:Fallback>
                                    S
                                </twig:Avatar:Fallback>
                            </twig:Avatar>
                            <span>
                                shadcn
                            </span>
                            <twig:Badge variant="default" class="ms-auto">
                                Admin
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:Avatar size="sm">
                                <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
                                <twig:Avatar:Fallback>
                                    M
                                </twig:Avatar:Fallback>
                            </twig:Avatar>
                            <span>
                                maxleiter
                            </span>
                            <twig:Badge variant="secondary" class="ms-auto">
                                Editor
                            </twig:Badge>
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:Avatar size="sm">
                                <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
                                <twig:Avatar:Fallback>
                                    E
                                </twig:Avatar:Fallback>
                            </twig:Avatar>
                            <span>
                                evilrabbit
                            </span>
                            <twig:Badge variant="outline" class="ms-auto">
                                Viewer
                            </twig:Badge>
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

### Action Palette

```twig
<div style="min-height: 340px">
    <twig:Dialog id="command-actions">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" class="w-fit" {{ ...dialog_trigger_attrs }}>
                Actions
                <twig:Kbd>
                    ⌘K
                </twig:Kbd>
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Command:Dialog>
            <twig:Command>
                <twig:Command:Input placeholder="What do you want to do?" />
                <twig:Command:List>
                    <twig:Command:Empty>
                        No results found.
                    </twig:Command:Empty>
                    <twig:Command:Group heading="Create">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:folder-plus" />
                            New project
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:user-plus" />
                            Invite member
                        </twig:Command:Item>
                    </twig:Command:Group>
                    <twig:Command:Group heading="Navigate">
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:layout-dashboard" />
                            Dashboard
                        </twig:Command:Item>
                        <twig:Command:Item>
                            <twig:ux:icon name="lucide:settings" />
                            Settings
                        </twig:Command:Item>
                    </twig:Command:Group>
                </twig:Command:List>
            </twig:Command>
        </twig:Command:Dialog>
    </twig:Dialog>
</div>
```

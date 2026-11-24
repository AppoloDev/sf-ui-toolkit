# App Shell

> Application layout: optional icon rail, collapsible navigation panel, header and content, with a mobile drawer.

## Usage

`AppShell` only holds the state (panel collapsed, drawer open) and the Stimulus controller. You assemble the parts inside it, and every part is optional: a rail with a panel, a panel alone, a rail alone, with or without a header. Nothing is rendered from data, so the menu is yours (loops over your own menu, a Symfony menu builder, plain links).

A rail item and a panel group are tied by the same `group` name; the one marked `active` is shown at load. From `md` the sidebar is a sticky column and the panel collapses (button, or Ctrl or Cmd + B, remembered in `localStorage`); below `md` it is a drawer opened by `AppShell:MenuButton`, with an overlay, Escape to close and the focus kept inside.

<!-- height: 520 -->
```twig
<twig:AppShell storageKey="docs:app-shell">
    <twig:AppShell:Sidebar>
        <twig:AppShell:Rail>
            <twig:block name="brand"><twig:ux:icon name="lucide:hexagon" class="size-6 text-primary" /></twig:block>
            <twig:AppShell:RailItem label="Overview" group="overview" active><twig:ux:icon name="lucide:layout-dashboard" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Projects" group="projects"><twig:ux:icon name="lucide:folder" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Team" group="team"><twig:ux:icon name="lucide:users" class="size-5" /></twig:AppShell:RailItem>
        </twig:AppShell:Rail>
        <twig:AppShell:Panel>
            <twig:AppShell:PanelGroup group="overview" title="Overview" active class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground bg-accent font-medium">Dashboard</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Activity</a>
            </twig:AppShell:PanelGroup>
            <twig:AppShell:PanelGroup group="projects" title="Projects" class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Website</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Mobile app</a>
            </twig:AppShell:PanelGroup>
            <twig:AppShell:PanelGroup group="team" title="Team" class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Members</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Roles</a>
            </twig:AppShell:PanelGroup>
        </twig:AppShell:Panel>
    </twig:AppShell:Sidebar>
    <twig:AppShell:Main>
        <twig:AppShell:Header>
            <twig:AppShell:MenuButton />
            <twig:AppShell:Toggle />
            <span class="mx-2 hidden h-4 w-px bg-border md:block"></span>
            <span class="text-sm text-muted-foreground">Dashboard</span>
        </twig:AppShell:Header>
        <twig:AppShell:Content>
            <h1 class="text-lg font-semibold">Dashboard</h1>
            <p class="text-sm text-muted-foreground">Page content goes here.</p>
        </twig:AppShell:Content>
    </twig:AppShell:Main>
</twig:AppShell>
```

## Examples

### Panel only

Without a rail it is a classic collapsible sidebar. `header` and `footer` blocks of `AppShell:Panel` hold a brand or an account area; a group without a `group` name is always visible.

<!-- height: 520 -->
```twig
<twig:AppShell storageKey="docs:app-shell-panel">
    <twig:AppShell:Sidebar>
        <twig:AppShell:Panel>
            <twig:block name="header"><span class="text-base font-semibold">Acme Inc.</span></twig:block>
            <twig:AppShell:PanelGroup title="Workspace" class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground bg-accent font-medium">Dashboard</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Projects</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Settings</a>
            </twig:AppShell:PanelGroup>
            <twig:block name="footer"><span class="text-xs text-muted-foreground">Free plan</span></twig:block>
        </twig:AppShell:Panel>
    </twig:AppShell:Sidebar>
    <twig:AppShell:Main>
{header}
{content}
    </twig:AppShell:Main>
</twig:AppShell>
```

### Rail only

Items with an `href` are links (`aria-current` on the active one) and need no panel. The `footer` block of the rail keeps an item at the bottom.

<!-- height: 520 -->
```twig
<twig:AppShell>
    <twig:AppShell:Sidebar>
        <twig:AppShell:Rail>
            <twig:block name="brand"><twig:ux:icon name="lucide:hexagon" class="size-6 text-primary" /></twig:block>
            <twig:AppShell:RailItem label="Home" href="#" active><twig:ux:icon name="lucide:house" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Inbox" href="#"><twig:ux:icon name="lucide:inbox" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Calendar" href="#"><twig:ux:icon name="lucide:calendar" class="size-5" /></twig:AppShell:RailItem>
            <twig:block name="footer"><twig:AppShell:RailItem label="Settings" href="#"><twig:ux:icon name="lucide:settings" class="size-5" /></twig:AppShell:RailItem></twig:block>
        </twig:AppShell:Rail>
    </twig:AppShell:Sidebar>
    <twig:AppShell:Main>
        <twig:AppShell:Header><twig:AppShell:MenuButton /><span class="text-sm text-muted-foreground">Home</span></twig:AppShell:Header>
        <twig:AppShell:Content>
            <h1 class="text-lg font-semibold">Dashboard</h1>
            <p class="text-sm text-muted-foreground">Page content goes here.</p>
        </twig:AppShell:Content>
    </twig:AppShell:Main>
</twig:AppShell>
```

### Collapsed by default

`collapsed` starts the panel collapsed. A choice remembered in `localStorage` wins over it; `storageKey` set to `false` disables the memory.

<!-- height: 520 -->
```twig
<twig:AppShell collapsed :storageKey="false">
    <twig:AppShell:Sidebar>
        <twig:AppShell:Rail>
            <twig:block name="brand"><twig:ux:icon name="lucide:hexagon" class="size-6 text-primary" /></twig:block>
            <twig:AppShell:RailItem label="Overview" group="overview" active><twig:ux:icon name="lucide:layout-dashboard" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Projects" group="projects"><twig:ux:icon name="lucide:folder" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Team" group="team"><twig:ux:icon name="lucide:users" class="size-5" /></twig:AppShell:RailItem>
        </twig:AppShell:Rail>
        <twig:AppShell:Panel>
            <twig:AppShell:PanelGroup group="overview" title="Overview" active class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground bg-accent font-medium">Dashboard</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Activity</a>
            </twig:AppShell:PanelGroup>
            <twig:AppShell:PanelGroup group="projects" title="Projects" class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Website</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Mobile app</a>
            </twig:AppShell:PanelGroup>
            <twig:AppShell:PanelGroup group="team" title="Team" class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Members</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Roles</a>
            </twig:AppShell:PanelGroup>
        </twig:AppShell:Panel>
    </twig:AppShell:Sidebar>
    <twig:AppShell:Main>
        <twig:AppShell:Header>
            <twig:AppShell:MenuButton />
            <twig:AppShell:Toggle />
            <span class="mx-2 hidden h-4 w-px bg-border md:block"></span>
            <span class="text-sm text-muted-foreground">Dashboard</span>
        </twig:AppShell:Header>
        <twig:AppShell:Content>
            <h1 class="text-lg font-semibold">Dashboard</h1>
            <p class="text-sm text-muted-foreground">Page content goes here.</p>
        </twig:AppShell:Content>
    </twig:AppShell:Main>
</twig:AppShell>
```

### Without header

The header is a part like the others. Without it the toggle and the menu button are simply not there: put them where you want, or drop them and keep the keyboard shortcut (`shortcut` set to `false` removes it).

<!-- height: 520 -->
```twig
<twig:AppShell :storageKey="false" :shortcut="false">
    <twig:AppShell:Sidebar>
        <twig:AppShell:Rail>
            <twig:block name="brand"><twig:ux:icon name="lucide:hexagon" class="size-6 text-primary" /></twig:block>
            <twig:AppShell:RailItem label="Overview" group="overview" active><twig:ux:icon name="lucide:layout-dashboard" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Projects" group="projects"><twig:ux:icon name="lucide:folder" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Team" group="team"><twig:ux:icon name="lucide:users" class="size-5" /></twig:AppShell:RailItem>
        </twig:AppShell:Rail>
        <twig:AppShell:Panel width="14rem">
            <twig:AppShell:PanelGroup group="overview" title="Overview" active class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground bg-accent font-medium">Dashboard</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Activity</a>
            </twig:AppShell:PanelGroup>
            <twig:AppShell:PanelGroup group="projects" title="Projects" class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Website</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Mobile app</a>
            </twig:AppShell:PanelGroup>
            <twig:AppShell:PanelGroup group="team" title="Team" class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Members</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Roles</a>
            </twig:AppShell:PanelGroup>
        </twig:AppShell:Panel>
    </twig:AppShell:Sidebar>
    <twig:AppShell:Main>
        <twig:AppShell:Content>
            <h1 class="text-lg font-semibold">Dashboard</h1>
            <p class="text-sm text-muted-foreground">Page content goes here.</p>
        </twig:AppShell:Content>
    </twig:AppShell:Main>
</twig:AppShell>
```

### Sticky header with actions

`sticky` keeps the header at the top while the page scrolls; anything can follow the toggle, here an action pushed to the end.

<!-- height: 520 -->
```twig
<twig:AppShell :storageKey="false">
    <twig:AppShell:Sidebar>
        <twig:AppShell:Rail>
            <twig:block name="brand"><twig:ux:icon name="lucide:hexagon" class="size-6 text-primary" /></twig:block>
            <twig:AppShell:RailItem label="Overview" group="overview" active><twig:ux:icon name="lucide:layout-dashboard" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Projects" group="projects"><twig:ux:icon name="lucide:folder" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Team" group="team"><twig:ux:icon name="lucide:users" class="size-5" /></twig:AppShell:RailItem>
        </twig:AppShell:Rail>
        <twig:AppShell:Panel>
            <twig:AppShell:PanelGroup group="overview" title="Overview" active class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground bg-accent font-medium">Dashboard</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Activity</a>
            </twig:AppShell:PanelGroup>
            <twig:AppShell:PanelGroup group="projects" title="Projects" class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Website</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Mobile app</a>
            </twig:AppShell:PanelGroup>
            <twig:AppShell:PanelGroup group="team" title="Team" class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Members</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Roles</a>
            </twig:AppShell:PanelGroup>
        </twig:AppShell:Panel>
    </twig:AppShell:Sidebar>
    <twig:AppShell:Main>
        <twig:AppShell:Header sticky>
            <twig:AppShell:MenuButton />
            <twig:AppShell:Toggle />
            <span class="mx-2 hidden h-4 w-px bg-border md:block"></span>
            <span class="text-sm text-muted-foreground">Dashboard</span>
            <a href="#" class="ms-auto rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent">Invite</a>
        </twig:AppShell:Header>
        <twig:AppShell:Content>
            <h1 class="text-lg font-semibold">Dashboard</h1>
            <p class="text-sm text-muted-foreground">Page content goes here.</p>
        </twig:AppShell:Content>
    </twig:AppShell:Main>
</twig:AppShell>
```

### Footer

The `footer` block of `AppShell:Content` sits under the page, outside its padding.

<!-- height: 520 -->
```twig
<twig:AppShell :storageKey="false">
    <twig:AppShell:Sidebar>
        <twig:AppShell:Rail>
            <twig:block name="brand"><twig:ux:icon name="lucide:hexagon" class="size-6 text-primary" /></twig:block>
            <twig:AppShell:RailItem label="Overview" group="overview" active><twig:ux:icon name="lucide:layout-dashboard" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Projects" group="projects"><twig:ux:icon name="lucide:folder" class="size-5" /></twig:AppShell:RailItem>
            <twig:AppShell:RailItem label="Team" group="team"><twig:ux:icon name="lucide:users" class="size-5" /></twig:AppShell:RailItem>
        </twig:AppShell:Rail>
        <twig:AppShell:Panel>
            <twig:AppShell:PanelGroup group="overview" title="Overview" active class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground bg-accent font-medium">Dashboard</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Activity</a>
            </twig:AppShell:PanelGroup>
            <twig:AppShell:PanelGroup group="projects" title="Projects" class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Website</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Mobile app</a>
            </twig:AppShell:PanelGroup>
            <twig:AppShell:PanelGroup group="team" title="Team" class="grid gap-0.5">
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Members</a>
                <a href="#" class="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground">Roles</a>
            </twig:AppShell:PanelGroup>
        </twig:AppShell:Panel>
    </twig:AppShell:Sidebar>
    <twig:AppShell:Main>
        <twig:AppShell:Header>
            <twig:AppShell:MenuButton />
            <twig:AppShell:Toggle />
            <span class="mx-2 hidden h-4 w-px bg-border md:block"></span>
            <span class="text-sm text-muted-foreground">Dashboard</span>
        </twig:AppShell:Header>
        <twig:AppShell:Content>
            <h1 class="text-lg font-semibold">Dashboard</h1>
            <p class="text-sm text-muted-foreground">Page content goes here.</p>
            <twig:block name="footer"><p class="border-t border-border px-4 py-3 text-xs text-muted-foreground md:px-8">&copy; Acme Inc.</p></twig:block>
        </twig:AppShell:Content>
    </twig:AppShell:Main>
</twig:AppShell>
```

## Extending

Every part accepts your own classes and attributes. Rail items can hold anything (an avatar, a badge), the panel accepts any navigation (a shadcn `Accordion`, a tree), and the controller emits `app-shell:toggle` and `app-shell:select` on the root.

```js Vanilla
document.querySelector('[data-controller~="app-shell"]').addEventListener('app-shell:toggle', (event) => {
    console.log('collapsed', event.detail.collapsed);
});
```

## Accessibility

- The rail and the panel are `nav` landmarks named by `label` and `aria-label`; the panel can be a `div` or an `aside` with `tag`.
- Rail items are buttons with `aria-pressed` (links with `aria-current`), named by `label`; the tooltip is decorative and appears on hover and keyboard focus.
- The collapsed panel is `inert`, so it leaves the tab order.
- The drawer closes with Escape or a click on the overlay, keeps the focus inside while open and gives it back to the menu button.
- Ctrl or Cmd + B toggles the panel, except while typing in a field.

## API

### `<twig:AppShell>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `collapsed` | `bool` | `false` | Starts with the panel collapsed; a remembered choice wins. |
| `storageKey` | `string, false` | `app-shell:collapsed` | `localStorage` key remembering the choice; `false` to not remember it. |
| `shortcut` | `string, false` | `b` | Letter used with Ctrl or Cmd to toggle the panel; `false` for none. |

| Block | Description |
| --- | --- |
| `default` | The parts of the layout. |

### `<twig:AppShell:Sidebar>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | | Added to the `aside`. |

| Block | Description |
| --- | --- |
| `default` | `AppShell:Rail` and or `AppShell:Panel`. |

### `<twig:AppShell:Rail>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `Sections` | Accessible name of the navigation. |

| Block | Description |
| --- | --- |
| `default` | The `AppShell:RailItem` elements. |
| `brand` | Top of the rail (logo). |
| `footer` | Bottom of the rail (account, help). |

### `<twig:AppShell:RailItem>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | | Accessible name and tooltip (required). |
| `group` | `string` | `null` | Name of the `AppShell:PanelGroup` it shows. |
| `href` | `string` | `null` | Makes the item a link. |
| `active` | `bool` | `false` | The item is the selected one at load. |

| Block | Description |
| --- | --- |
| `default` | The icon. |

### `<twig:AppShell:Panel>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `Navigation` | Accessible name of the navigation. |
| `width` | `string` | `16rem` | Width when open, any CSS length. |
| `tag` | `string` | `nav` | `nav`, `div` or `aside`. |

| Block | Description |
| --- | --- |
| `default` | The content, usually `AppShell:PanelGroup` elements. |
| `header` | Top of the panel. |
| `footer` | Bottom of the panel. |

### `<twig:AppShell:PanelGroup>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `group` | `string` | `null` | Name shared with a rail item; without it the group is always visible. |
| `title` | `string` | `null` | Small heading above the group. |
| `active` | `bool` | `false` | Visible at load. |

| Block | Description |
| --- | --- |
| `default` | The navigation of the group. |

### `<twig:AppShell:Main>`

| Block | Description |
| --- | --- |
| `default` | `AppShell:Header` and `AppShell:Content`. |

### `<twig:AppShell:Header>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `sticky` | `bool` | `false` | Stays at the top while the page scrolls. |

| Block | Description |
| --- | --- |
| `default` | `AppShell:MenuButton`, `AppShell:Toggle`, breadcrumb, actions. |

### `<twig:AppShell:Content>`

| Block | Description |
| --- | --- |
| `default` | The page. |
| `footer` | Under the page, outside its padding. |

### `<twig:AppShell:Toggle>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `Toggle sidebar` | Accessible name of the button. |

| Block | Description |
| --- | --- |
| `default` | The icon (`lucide:panel-left` by default). |

### `<twig:AppShell:MenuButton>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `Open menu` | Accessible name of the button. |

| Block | Description |
| --- | --- |
| `default` | The icon (`lucide:menu` by default). |

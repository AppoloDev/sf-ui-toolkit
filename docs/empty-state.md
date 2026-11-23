# Empty State

> Centered or left-aligned empty state with media, title, description and actions, plain or in a dashed container.

## Usage

The component is layout only: actions are the slot, so use your own `Button` components (the examples use plain links so they work anywhere).

```twig
<twig:EmptyState icon="lucide:inbox" title="No messages" description="New messages will show up here.">
    <a href="#" class="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Compose</a>
</twig:EmptyState>
```

## Examples

### Basic

`icon` shows a round tile; without a title or description the block only holds what you give it.

```twig
<twig:EmptyState icon="lucide:folder-open" title="No projects yet" description="Create your first project to start organizing your work.">
    <a href="#" class="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">New project</a>
    <a href="#" class="inline-flex h-9 items-center rounded-md border border-border px-4 text-sm font-medium hover:bg-muted">Import</a>
</twig:EmptyState>
```

### Bordered

`bordered` wraps the block in a dashed container, for an empty region inside a page.

```twig
<twig:EmptyState bordered icon="lucide:search-x" title="No results" description="Try another search term or remove some filters.">
    <a href="#" class="inline-flex h-9 items-center rounded-md border border-border px-4 text-sm font-medium hover:bg-muted">Clear filters</a>
</twig:EmptyState>
```

### Left aligned

```twig
<twig:EmptyState align="start" icon="lucide:users" title="Invite your team" description="Collaborate by adding people to this workspace.">
    <a href="#" class="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Invite members</a>
</twig:EmptyState>
```

### With an illustration

The `media` block replaces the icon: here an isometric stack built from plain markup. With the Icon Stack component of this kit, put `<twig:IconStack>` in the block instead.

```twig
<twig:EmptyState bordered title="Nothing to export" description="Generate a report first, it will be listed here.">
    <twig:block name="media">
        <div class="relative h-16 w-24" aria-hidden="true">
            <div class="absolute inset-x-2 top-0 h-10 rounded-lg border border-border bg-muted"></div>
            <div class="absolute inset-x-1 top-3 h-10 rounded-lg border border-border bg-background shadow-xs"></div>
            <div class="absolute inset-x-0 top-6 h-10 rounded-lg border border-border bg-background shadow-sm"></div>
        </div>
    </twig:block>
    <a href="#" class="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">New report</a>
</twig:EmptyState>
```

## Accessibility

- The title is a real heading: `titleTag` (`h2`, `h3`, `h4`, `h5` or `p`) lets it fit the page outline.
- Icons and illustrations are decorative and hidden from assistive technologies.
- Actions are ordinary links and buttons, in reading order after the text.

## API

### `<twig:EmptyState>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | string | `null` | Heading. |
| `description` | string | `null` | Supporting text. |
| `icon` | string | `null` | Symfony UX Icons name shown in a round tile when there is no `media` block. |
| `align` | `center` \| `start` | `center` | Alignment of the content. |
| `bordered` | bool | `false` | Dashed container with padding. |
| `titleTag` | string | `h3` | Element of the title: `h2`, `h3`, `h4`, `h5` or `p`. |

Blocks: the default slot holds the actions; `<twig:block name="media">` holds an illustration.

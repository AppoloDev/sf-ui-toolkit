# Activity Feed

> Activity feed grouped by day: actor avatar or icon, action text, time, description, attachments and a slot for a load-more button.

## Usage

The feed is data: a list of events, optionally grouped by day. Texts are escaped. The component renders what it is given; loading older events is up to you (the slot holds a "Load more" link or button).

```twig
<twig:ActivityFeed :items="[
    {actor: 'Ada Lovelace', action: 'commented on', target: 'Invoice 1042', time: '2 h ago', description: 'Approved, thanks.'},
    {icon: 'lucide:git-merge', action: 'Release 2.4 was published', time: 'Yesterday'},
]" />
```

## Examples

### Grouped by day

Each group has a heading; items show an avatar, initials or an icon for a system event.

```twig
<twig:ActivityFeed :groups="[
    {label: 'Today', items: [
        {actor: 'Ada Lovelace', action: 'commented on', target: 'Invoice 1042', time: '2 h ago', datetime: '2026-11-24T07:30', description: 'Approved. Please send it to accounting.'},
        {actor: 'Grace Hopper', action: 'assigned', target: 'Q4 audit', time: '4 h ago', datetime: '2026-11-24T05:30'},
        {icon: 'lucide:rocket', action: 'Release 2.4 was published', time: '5 h ago', datetime: '2026-11-24T04:30'},
    ]},
    {label: 'Yesterday', items: [
        {actor: 'Linus T.', action: 'uploaded files to', target: 'Contract renewal', time: '16:20', attachments: [{name: 'contract.pdf', size: '1.2 MB', href: '#'}, {name: 'terms.docx', size: '86 KB', href: '#'}]},
        {actor: 'Margaret H.', action: 'closed', target: 'Ticket 887', time: '09:05'},
    ]},
]">
    <twig:Button as="a" href="#" variant="outline">Load more</twig:Button>
</twig:ActivityFeed>
```

### Flat list with avatars

Without groups, `items` is one list. `avatar` is an image URL; without it, `initials` (or the first letters of the actor) are shown.

```twig
<twig:ActivityFeed :items="[
    {actor: 'Ada Lovelace', initials: 'AL', action: 'joined', target: 'the Finance team', time: '3 d ago'},
    {actor: 'Grace Hopper', action: 'changed the status of', target: 'Q4 audit', time: '4 d ago', description: 'From draft to in review.'},
    {actor: 'Linus T.', action: 'created', target: 'Project Apollo', time: '1 week ago'},
]" />
```

## Accessibility

- The feed is an ordered list (newest first, as you pass it); each day is a `section` with a real heading (`groupTag`: `h2`, `h3` or `h4`).
- Times use `<time>`; pass `datetime` so assistive technologies and crawlers read a date, not "2 h ago".
- Avatars and the connector line are decorative: the actor is always named in the text.
- Attachments are links when they have a `href`, plain text otherwise.

## API

### `<twig:ActivityFeed>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `groups` | array | `[]` | List of `{label, items}`: one section per day. |
| `items` | array | `[]` | Flat list of items, used when `groups` is empty. |
| `groupTag` | string | `h3` | Element of the group headings: `h2`, `h3` or `h4`. |

An item has these keys, all optional: `actor`, `action`, `target`, `description`, `time`, `datetime`, `avatar` (image URL), `initials`, `icon` (Symfony UX Icons name, replaces the avatar) and `attachments` (list of `{name, href, size}`).

The default slot is shown under the list, for a load-more button.

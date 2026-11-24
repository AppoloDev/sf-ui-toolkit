# Activity Feed

> Activity feed grouped by day: actor avatar or icon, action text, time, description, attachments and a slot for a load-more button.

## Installation

- avatar
- badge

## Usage

The feed is made of `ActivityFeed:Group` sections (one per day) holding `ActivityFeed:Item` events. The slot of an item is its description. Texts are escaped. The component renders what it is given; loading older events is up to you (the `more` block holds a "Load more" link or button).

```twig
<twig:ActivityFeed>
    <twig:ActivityFeed:Group>
        <twig:ActivityFeed:Item actor="Ada Lovelace" action="commented on" target="Invoice 1042" time="2 h ago">Approved, thanks.</twig:ActivityFeed:Item>
        <twig:ActivityFeed:Item icon="lucide:git-merge" action="Release 2.4 was published" time="Yesterday" />
    </twig:ActivityFeed:Group>
</twig:ActivityFeed>
```

## Examples

### Grouped by day

Each group has a heading; items show an avatar, initials or an icon for a system event. Files go in the `attachments` block of an item.

```twig
<twig:ActivityFeed>
    <twig:ActivityFeed:Group label="Today">
        <twig:ActivityFeed:Item actor="Ada Lovelace" action="commented on" target="Invoice 1042" time="2 h ago" datetime="2026-11-24T07:30">Approved. Please send it to accounting.</twig:ActivityFeed:Item>
        <twig:ActivityFeed:Item actor="Grace Hopper" action="assigned" target="Q4 audit" time="4 h ago" datetime="2026-11-24T05:30" />
        <twig:ActivityFeed:Item icon="lucide:rocket" action="Release 2.4 was published" time="5 h ago" datetime="2026-11-24T04:30" />
    </twig:ActivityFeed:Group>
    <twig:ActivityFeed:Group label="Yesterday">
        <twig:ActivityFeed:Item actor="Linus T." action="uploaded files to" target="Contract renewal" time="16:20">
            <twig:block name="attachments">
                <twig:ActivityFeed:Attachment name="contract.pdf" size="1.2 MB" href="#" />
                <twig:ActivityFeed:Attachment name="terms.docx" size="86 KB" href="#" />
            </twig:block>
        </twig:ActivityFeed:Item>
        <twig:ActivityFeed:Item actor="Margaret H." action="closed" target="Ticket 887" time="09:05" />
    </twig:ActivityFeed:Group>
    <twig:block name="more">
        <twig:Button as="a" href="#" variant="outline">Load more</twig:Button>
    </twig:block>
</twig:ActivityFeed>
```

### Flat list with avatars

A group without a label is a plain list. `avatar` is an image URL; without it, `initials` (or the first letters of the actor) are shown.

```twig
<twig:ActivityFeed>
    <twig:ActivityFeed:Group>
        <twig:ActivityFeed:Item actor="Ada Lovelace" initials="AL" action="joined" target="the Finance team" time="3 d ago" />
        <twig:ActivityFeed:Item actor="Grace Hopper" action="changed the status of" target="Q4 audit" time="4 d ago">From draft to in review.</twig:ActivityFeed:Item>
        <twig:ActivityFeed:Item actor="Linus T." action="created" target="Project Apollo" time="1 week ago" />
    </twig:ActivityFeed:Group>
</twig:ActivityFeed>
```

## Accessibility

- The feed is an ordered list (newest first, as you pass it); each day is a `section` with a real heading (`tag` on the group: `h2`, `h3` or `h4`).
- Times use `<time>`; pass `datetime` so assistive technologies and crawlers read a date, not "2 h ago".
- Avatars and the connector line are decorative: the actor is always named in the text.
- Attachments are links when they have a `href`, plain text otherwise.

## API

### `<twig:ActivityFeed>`

| Block | Description |
|---|---|
| `default` | `ActivityFeed:Group` elements. |
| `more` | Under the list: a "Load more" button. |

### `<twig:ActivityFeed:Group>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | `null` | Heading of the group, such as `Today`; without it the group is a plain list. |
| `tag` | string | `h3` | Element of the heading: `h2`, `h3` or `h4`. |

| Block | Description |
|---|---|
| `default` | `ActivityFeed:Item` elements. |

### `<twig:ActivityFeed:Item>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `actor` | string | `null` | Who did it, in bold. |
| `action` | string | `null` | What happened, such as `commented on`. |
| `target` | string | `null` | What it happened to, in bold. |
| `time` | string | `null` | Time as displayed, such as `2 h ago`. |
| `datetime` | string | `null` | Machine-readable date (ISO 8601) of the `time` element. |
| `avatar` | string | `null` | Image URL of the actor. |
| `initials` | string | `null` | Shown without an avatar; the first letters of the actor by default. |
| `icon` | string | `null` | Symfony UX Icons name for a system event; replaces the avatar. |

| Block | Description |
|---|---|
| `default` | The description under the line. |
| `attachments` | `ActivityFeed:Attachment` elements. |

### `<twig:ActivityFeed:Attachment>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | | File name. |
| `href` | string | `null` | Link to the file; plain text when omitted. |
| `size` | string | `null` | Size as displayed, such as `1.2 MB`. |

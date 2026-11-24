# Relative Time

> A date shown as a relative time such as "3 minutes ago", kept up to date while the page stays open.

## Installation

- hover-card
- popover
- button

## Usage

Give `RelativeTime` a date, as an ISO 8601 string or a `DateTime`. The slot is the text shown before the script runs, so write the date out there. `datetime="now"` is the moment the component is displayed, for an indicator such as "saved just now".

```twig
<twig:RelativeTime datetime="2025-03-04T09:30:00+00:00">
    March 4, 2025
</twig:RelativeTime>
```

The text follows the language of the page, or `locale`. It is rewritten every second under a minute, every minute under an hour, then every hour. The full date is the `title` of the element, shown on hover.

## Examples

### Live

With `now`, the time starts at the moment the page is displayed, and counts on.

```twig
<p class="text-center text-sm text-muted-foreground">
    Last saved
    <twig:RelativeTime datetime="now">
        just now
    </twig:RelativeTime>
</p>
```

### Live Timestamp

A hover card that shows when someone was last seen. The time is already up to date when the card opens.

```twig
<div class="flex items-start justify-center" style="min-height: 160px">
    <twig:HoverCard openDelay="10" closeDelay="100">
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" {{ ...hover_card_trigger_attrs }}>
                @ada
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="flex w-64 flex-col gap-1">
            <div class="font-semibold">
                Ada Lovelace
            </div>
            <div class="text-sm text-muted-foreground">
                Mathematician and first programmer.
            </div>
            <div class="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <span class="size-2 rounded-full bg-emerald-500">
                </span>
                Active
                <twig:RelativeTime datetime="now">
                    now
                </twig:RelativeTime>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```

### Relative Time in a Popover

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 300px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:history" />
                Recent activity
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content align="start" class="w-72">
            <ul class="grid gap-3 text-sm">
                <li class="flex items-center justify-between gap-3">
                    <span>
                        Invoice paid
                    </span>
                    <twig:RelativeTime datetime="{{ 'now'|date_modify('-8 minutes')|date('c') }}" class="text-xs text-muted-foreground">
                        8 minutes ago
                    </twig:RelativeTime>
                </li>
                <li class="flex items-center justify-between gap-3">
                    <span>
                        New comment
                    </span>
                    <twig:RelativeTime datetime="{{ 'now'|date_modify('-3 hours')|date('c') }}" class="text-xs text-muted-foreground">
                        3 hours ago
                    </twig:RelativeTime>
                </li>
                <li class="flex items-center justify-between gap-3">
                    <span>
                        Project created
                    </span>
                    <twig:RelativeTime datetime="{{ 'now'|date_modify('-2 days')|date('c') }}" class="text-xs text-muted-foreground">
                        2 days ago
                    </twig:RelativeTime>
                </li>
            </ul>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Length

`style` sets the length of the text.

```twig
<ul class="mx-auto grid max-w-xs gap-2 text-sm">
    <li class="flex justify-between">
        <span class="text-muted-foreground">
            long
        </span>
        <twig:RelativeTime datetime="{{ 'now'|date_modify('-2 hours')|date('c') }}" style="long">
            2 hours ago
        </twig:RelativeTime>
    </li>
    <li class="flex justify-between">
        <span class="text-muted-foreground">
            short
        </span>
        <twig:RelativeTime datetime="{{ 'now'|date_modify('-2 hours')|date('c') }}" style="short">
            2 hr. ago
        </twig:RelativeTime>
    </li>
    <li class="flex justify-between">
        <span class="text-muted-foreground">
            narrow
        </span>
        <twig:RelativeTime datetime="{{ 'now'|date_modify('-2 hours')|date('c') }}" style="narrow">
            2h ago
        </twig:RelativeTime>
    </li>
</ul>
```

### Numbers

With `numeric="auto"` the text can be a word, as in "yesterday". With `always` it is always a number.

```twig
<ul class="mx-auto grid max-w-xs gap-2 text-sm">
    <li class="flex justify-between">
        <span class="text-muted-foreground">
            auto
        </span>
        <twig:RelativeTime datetime="{{ 'now'|date_modify('-1 day')|date('c') }}" numeric="auto">
            yesterday
        </twig:RelativeTime>
    </li>
    <li class="flex justify-between">
        <span class="text-muted-foreground">
            always
        </span>
        <twig:RelativeTime datetime="{{ 'now'|date_modify('-1 day')|date('c') }}" numeric="always">
            1 day ago
        </twig:RelativeTime>
    </li>
</ul>
```

### Languages

```twig
<ul class="mx-auto grid max-w-xs gap-2 text-sm">
    <li class="flex justify-between">
        <span class="text-muted-foreground">
            fr
        </span>
        <twig:RelativeTime datetime="{{ 'now'|date_modify('-3 days')|date('c') }}" locale="fr">
            3 days ago
        </twig:RelativeTime>
    </li>
    <li class="flex justify-between">
        <span class="text-muted-foreground">
            es
        </span>
        <twig:RelativeTime datetime="{{ 'now'|date_modify('-3 days')|date('c') }}" locale="es">
            3 days ago
        </twig:RelativeTime>
    </li>
    <li class="flex justify-between">
        <span class="text-muted-foreground">
            ja
        </span>
        <twig:RelativeTime datetime="{{ 'now'|date_modify('-3 days')|date('c') }}" locale="ja">
            3 days ago
        </twig:RelativeTime>
    </li>
</ul>
```

## Accessibility

- The element is a `<time>` with a `datetime` attribute, so that the exact date stays available to browsers and tools whatever the text says.
- The text is not a live region: it changes every second under a minute, and announcing that would be noise. Screen readers read the current text when they reach it.
- The full date is in the `title`, which is shown on hover only. If the exact date matters, write it next to the relative time.

## API

### `<twig:RelativeTime>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `datetime` | string or DateTime | required | The date, as an ISO 8601 string or a date. `now` is the moment the component is displayed. |
| `locale` | string or null | `null` | The language of the text, a BCP 47 tag such as `fr`. The language of the page when `null`. |
| `numeric` | string | `auto` | With `auto`, the text can be "yesterday" or "now"; with `always`, it is always a number. |
| `style` | string | `long` | The length of the text: `long`, `short` or `narrow`. |
| `absoluteTitle` | boolean | `true` | Whether the full date is the `title` of the element, shown on hover. |

| Block | Description |
| --- | --- |
| `default` | The text shown before the script runs: the date, written out. |

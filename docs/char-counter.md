# Char Counter

> Shows how many characters an input or a textarea holds, against an optional limit, with a warning near the limit and a spoken update.

## Installation

- input
- textarea
- label

## Usage

Wrap the field in `CharCounter`. The counter appears under it and follows what is typed. Without `max`, it uses the `maxlength` of the field when it has one, and otherwise only counts.

```twig
<twig:CharCounter :max="280">
    <twig:Textarea placeholder="Tell us more…" />
</twig:CharCounter>
```

## Examples

### Textarea

```twig
<twig:CharCounter :max="280" class="mx-auto max-w-sm">
    <twig:Label for="counter-bio" class="text-sm font-medium">
        Bio
    </twig:Label>
    <twig:Textarea id="counter-bio" placeholder="Write a few words about yourself." />
</twig:CharCounter>
```

### Input

```twig
<twig:CharCounter :max="40" class="mx-auto max-w-sm">
    <twig:Label for="counter-title" class="text-sm font-medium">
        Title
    </twig:Label>
    <twig:Input id="counter-title" placeholder="A short title" />
</twig:CharCounter>
```

### Remaining

`format` builds the text. `{count}`, `{max}` and `{remaining}` are replaced.

```twig
<twig:CharCounter :max="100" format="{remaining} characters left" class="mx-auto max-w-sm">
    <twig:Label for="counter-remaining" class="text-sm font-medium">
        Summary
    </twig:Label>
    <twig:Textarea id="counter-remaining" placeholder="Summarize in one sentence." />
</twig:CharCounter>
```

### Count Only

Without a limit, the counter only counts.

```twig
<twig:CharCounter format="{count} characters" class="mx-auto max-w-sm">
    <twig:Label for="counter-notes" class="text-sm font-medium">
        Notes
    </twig:Label>
    <twig:Textarea id="counter-notes" placeholder="Take your notes here." />
</twig:CharCounter>
```

### Near and Over the Limit

The counter turns amber from `warnAt` of the limit, and red past it, when the field also gets `aria-invalid`. The field here starts over the limit.

```twig
<twig:CharCounter :max="60" :warnAt="0.8" class="mx-auto max-w-sm">
    <twig:Label for="counter-over" class="text-sm font-medium">
        Tagline
    </twig:Label>
    <twig:Textarea id="counter-over">
        A tagline that is much too long for the space it was given, so it is over.
    </twig:Textarea>
</twig:CharCounter>
```

### With the Native Limit

A `maxlength` on the field is used as the limit, and the browser stops the typing at it.

```twig
<twig:CharCounter class="mx-auto max-w-sm">
    <twig:Label for="counter-native" class="text-sm font-medium">
        Username
    </twig:Label>
    <twig:Input id="counter-native" maxlength="20" placeholder="At most 20 characters" />
</twig:CharCounter>
```

## Accessibility

- The visible count is hidden from screen readers, so that they do not read it on every keystroke. A separate live region announces the remaining characters when the count enters the warning zone, then every 10 characters and on the last 5, and the characters over the limit once it is passed.
- Past the limit the field gets `aria-invalid="true"`, which is removed when the text fits again. The counter does not stop the typing: add `maxlength` to the field if the limit must be strict.
- Characters are counted by code point, so an emoji counts for one.
- Both announcements are props: write them in the language of the page.

## API

### `<twig:CharCounter>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `max` | integer or null | `null` | The limit. When `null`, the `maxlength` of the field is used if it has one. |
| `format` | string or null | `null` | The text of the counter, with `{count}`, `{max}` and `{remaining}`. `{count} / {max}` with a limit, `{count}` without one. |
| `announcement` | string | `{remaining} characters remaining` | What is announced to screen readers when the count nears the limit. |
| `overAnnouncement` | string | `{over} characters over the limit` | What is announced to screen readers when the count is over the limit. |
| `warnAt` | float | `0.9` | The share of the limit, between 0 and 1, from which the counter turns to a warning. |

| Block | Description |
| --- | --- |
| `default` | The field: an `Input`, a `Textarea` or any `<input>` or `<textarea>`. |

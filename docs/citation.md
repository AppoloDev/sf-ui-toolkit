# Citation

> Numbered source references for generated or researched text: an inline citation chip that opens its source, and a collapsible list of sources.

## Installation

- badge (only for one example)

## Usage

```twig
<p>
    A claim <twig:Citation index="1" title="The source" url="https://example.com" />.
</p>
<twig:Sources>
    <twig:Sources:Item index="1" title="The source" url="https://example.com" />
</twig:Sources>
```

## Examples

### Inline

A chip after a sentence opens its source in a popover.

<!-- height: 240 -->

```twig
<p class="max-w-prose text-sm leading-6">
    Symfony UX Toolkit ships ready-made components
    <twig:Citation index="1" title="Symfony UX Toolkit" url="https://ux.symfony.com/toolkit" description="The kits of components for Twig." />
    and kits can be installed from a repository
    <twig:Citation index="2" title="Kits" url="https://ux.symfony.com/toolkit/kits" description="Official and community kits." />.
</p>
```

### Custom Content

The default block replaces the content of the popover.

<!-- height: 200 -->

```twig
<p class="text-sm">
    A claim that needs a quote
    <twig:Citation index="a" title="Interview">
        <span class="block font-medium">Interview with the team</span>
        <twig:Badge variant="secondary" class="mt-1">
            Primary source
        </twig:Badge>
    </twig:Citation>
    .
</p>
```

### Sources List

`Sources` is a collapsible list; the count in the summary is computed from the items.

<!-- height: 280 -->

```twig
<twig:Sources :open="true">
    <twig:Sources:Item index="1" title="Symfony UX Toolkit" url="https://ux.symfony.com/toolkit" description="Components for Twig." />
    <twig:Sources:Item index="2" title="Kits" url="https://ux.symfony.com/toolkit/kits" />
    <twig:Sources:Item index="3" title="Docs without a link" description="A source that has no address." />
</twig:Sources>
```

### Closed

Closed by default: the summary tells how many sources there are.

<!-- height: 120 -->

```twig
<twig:Sources>
    <twig:Sources:Item index="1" title="First source" url="https://example.com/1" />
    <twig:Sources:Item index="2" title="Second source" url="https://example.com/2" />
</twig:Sources>
```

### In An Answer

Citations in a text and the list under it, as in an assistant answer.

<!-- height: 300 -->

```twig
<div class="grid max-w-prose gap-3 text-sm leading-6">
    <p>
        Tailwind builds only the classes it finds
        <twig:Citation index="1" title="Tailwind docs" url="https://tailwindcss.com/docs" />
        so dynamic class names must be complete strings
        <twig:Citation index="2" title="Detecting classes" url="https://tailwindcss.com/docs/detecting-classes-in-source-files" />.
    </p>
    <twig:Sources>
        <twig:Sources:Item index="1" title="Tailwind docs" url="https://tailwindcss.com/docs" />
        <twig:Sources:Item index="2" title="Detecting classes" url="https://tailwindcss.com/docs/detecting-classes-in-source-files" />
    </twig:Sources>
</div>
```

### Another Language

`openLabel` and the summary text are props.

<!-- height: 240 -->

```twig
<p class="text-sm">
    Une affirmation
    <twig:Citation index="1" title="Documentation" url="https://example.com" openLabel="Source {index} : {title}" />.
</p>
<twig:Sources label="{count} sources utilisées">
    <twig:Sources:Item index="1" title="Documentation" url="https://example.com" />
</twig:Sources>
```

## Accessibility

- The chip is a button with a descriptive name (`Source 1: title`); the popover is a native popover, closed with Escape or a click outside, positioned next to the chip.
- Links to external sources open in a new tab with `rel="noopener noreferrer"`.
- The list of sources is a native `details`, keyboard friendly.

## API

### `<twig:Citation>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | string or integer | | The number shown in the chip. |
| `title` | string | | The title of the source. |
| `url` | string or null | `null` | The address of the source. |
| `description` | string or null | `null` | A short description. |
| `openLabel` | string | `Source {index}: {title}` | The accessible name of the chip. |

| Block | Description |
| --- | --- |
| `default` | Replaces the content of the popover. |

### `<twig:Sources>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | string | `Used {count} sources` | The summary text. |
| `open` | bool | `false` | Start open. |

| Block | Description |
| --- | --- |
| `default` | The `Sources:Item` elements. |

### `<twig:Sources:Item>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | string or integer | | The number of the source. |
| `title` | string | | The title. |
| `url` | string or null | `null` | The address. |
| `description` | string or null | `null` | A short description. |

| Block | Description |
| --- | --- |
| `default` | Not used. |

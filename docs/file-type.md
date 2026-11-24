# File Type

> File icon with a colored extension label for documents, spreadsheets, images, archives and code, in four variants and six sizes.

## Usage

```twig
<twig:FileType type="pdf" />
```

## Examples

### Common types

Brand-like colors for the common formats (PDF orange, Word blue, Excel green, PowerPoint red, JPG violet, PNG yellow); other formats use the color of their family.

```twig
<div class="flex flex-wrap items-center gap-4">
    <twig:FileType type="pdf" />
    <twig:FileType type="docx" />
    <twig:FileType type="xlsx" />
    <twig:FileType type="pptx" />
    <twig:FileType type="jpg" />
    <twig:FileType type="png" />
    <twig:FileType type="zip" />
    <twig:FileType type="php" />
    <twig:FileType type="json" />
    <twig:FileType type="mp3" />
    <twig:FileType type="mp4" />
    <twig:FileType type="folder" />
</div>
```

### From a file name

`type` also accepts a file name or a leading dot; unknown extensions render a neutral icon labeled with the extension.

```twig
<div class="flex items-center gap-4">
    <twig:FileType type="invoice-2026.PDF" />
    <twig:FileType type=".docx" />
    <twig:FileType type="data.xyz" />
</div>
```

### Variants

```twig
<div class="flex items-center gap-4">
    <twig:FileType type="pdf" variant="outline" />
    <twig:FileType type="pdf" variant="solid" />
    <twig:FileType type="pdf" variant="light" />
    <twig:FileType type="pdf" variant="mono" />
</div>
```

### Sizes

Six presets from `mini` (table rows) to `xl`. Any other size is a Tailwind size class away.

```twig
<div class="flex items-end gap-4">
    <twig:FileType type="docx" size="mini" />
    <twig:FileType type="docx" size="xs" />
    <twig:FileType type="docx" size="sm" />
    <twig:FileType type="docx" size="md" />
    <twig:FileType type="docx" size="lg" />
    <twig:FileType type="docx" size="xl" />
    <twig:FileType type="docx" class="size-20" />
</div>
```

### Custom label

`label` replaces the extension, for example with a version tag or a document code.

```twig
<div class="flex items-center gap-4">
    <twig:FileType type="pdf" label="v2" />
    <twig:FileType type="docx" label="CV" />
</div>
```

### In a file list

When the file name is displayed beside the icon, hide the icon from assistive technology with `decorative`.

```twig
<ul class="max-w-sm divide-y divide-border rounded-lg border border-border text-sm">
    <li class="flex items-center gap-3 p-3">
        <twig:FileType type="pdf" size="sm" decorative />
        annual-report.pdf
    </li>
    <li class="flex items-center gap-3 p-3">
        <twig:FileType type="xlsx" size="sm" decorative />
        budget.xlsx
    </li>
    <li class="flex items-center gap-3 p-3">
        <twig:FileType type="zip" size="sm" decorative />
        assets.zip
    </li>
</ul>
```

## Accessibility

- By default the root is a `span` with `role="img"` and an accessible name that reflects the type: "PDF file", "Spreadsheet file", "Folder"... A custom `label` is prepended to the name.
- Pass `decorative` when the file name is already visible beside the icon, to avoid announcing the type twice.
- The icon is not focusable: wrap it in a button or a link that has its own accessible name when it must trigger an action.

## API

### `<twig:FileType>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | string | `''` | Extension (`pdf`, `.docx`), file name (`report.pdf`) or `folder`. Case-insensitive. |
| `size` | `mini`, `xs`, `sm`, `md`, `lg`, `xl` | `md` | Preset size (18, 24, 32, 40, 48 and 56 px). Use a size class for other sizes. |
| `variant` | `outline`, `solid`, `light`, `mono` | `outline` | Look of the icon. |
| `label` | string | `null` | Replaces the extension in the label band. |
| `description` | string | `null` | Accessible name. Defaults to the file kind in English ("PDF file"); pass a translated text for other languages. |
| `decorative` | bool | `false` | Hides the icon from assistive technology. |

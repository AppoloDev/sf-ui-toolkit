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

### Family Glyphs

Each family of files has its own color. These are the families the component knows.

```twig
<div class="grid max-w-md grid-cols-4 gap-4">
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="pdf" size="lg" />
        <span class="text-xs text-muted-foreground">
            PDF
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="docx" size="lg" />
        <span class="text-xs text-muted-foreground">
            Document
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="xlsx" size="lg" />
        <span class="text-xs text-muted-foreground">
            Spreadsheet
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="pptx" size="lg" />
        <span class="text-xs text-muted-foreground">
            Presentation
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="jpg" size="lg" />
        <span class="text-xs text-muted-foreground">
            JPEG
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="png" size="lg" />
        <span class="text-xs text-muted-foreground">
            PNG
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="mp3" size="lg" />
        <span class="text-xs text-muted-foreground">
            Audio
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="mp4" size="lg" />
        <span class="text-xs text-muted-foreground">
            Video
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="zip" size="lg" />
        <span class="text-xs text-muted-foreground">
            Archive
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="txt" size="lg" />
        <span class="text-xs text-muted-foreground">
            Text
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="ts" size="lg" />
        <span class="text-xs text-muted-foreground">
            Code
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="json" size="lg" />
        <span class="text-xs text-muted-foreground">
            Configuration
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="psd" size="lg" />
        <span class="text-xs text-muted-foreground">
            Design
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="exe" size="lg" />
        <span class="text-xs text-muted-foreground">
            Application
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="ttf" size="lg" />
        <span class="text-xs text-muted-foreground">
            Font
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="folder" size="lg" />
        <span class="text-xs text-muted-foreground">
            Folder
        </span>
    </div>
</div>
```

### All Formats

Every extension the component recognizes, with its family color.

```twig
<div class="grid max-w-lg grid-cols-8 gap-3">
    <twig:FileType type="pdf" size="sm" />
    <twig:FileType type="doc" size="sm" />
    <twig:FileType type="docx" size="sm" />
    <twig:FileType type="odt" size="sm" />
    <twig:FileType type="rtf" size="sm" />
    <twig:FileType type="xls" size="sm" />
    <twig:FileType type="xlsx" size="sm" />
    <twig:FileType type="csv" size="sm" />
    <twig:FileType type="ppt" size="sm" />
    <twig:FileType type="pptx" size="sm" />
    <twig:FileType type="key" size="sm" />
    <twig:FileType type="jpg" size="sm" />
    <twig:FileType type="png" size="sm" />
    <twig:FileType type="gif" size="sm" />
    <twig:FileType type="svg" size="sm" />
    <twig:FileType type="webp" size="sm" />
    <twig:FileType type="heic" size="sm" />
    <twig:FileType type="mp3" size="sm" />
    <twig:FileType type="wav" size="sm" />
    <twig:FileType type="flac" size="sm" />
    <twig:FileType type="mp4" size="sm" />
    <twig:FileType type="mov" size="sm" />
    <twig:FileType type="mkv" size="sm" />
    <twig:FileType type="webm" size="sm" />
    <twig:FileType type="zip" size="sm" />
    <twig:FileType type="rar" size="sm" />
    <twig:FileType type="gz" size="sm" />
    <twig:FileType type="7z" size="sm" />
    <twig:FileType type="txt" size="sm" />
    <twig:FileType type="md" size="sm" />
    <twig:FileType type="js" size="sm" />
    <twig:FileType type="ts" size="sm" />
    <twig:FileType type="tsx" size="sm" />
    <twig:FileType type="php" size="sm" />
    <twig:FileType type="py" size="sm" />
    <twig:FileType type="go" size="sm" />
    <twig:FileType type="rs" size="sm" />
    <twig:FileType type="html" size="sm" />
    <twig:FileType type="css" size="sm" />
    <twig:FileType type="twig" size="sm" />
    <twig:FileType type="sql" size="sm" />
    <twig:FileType type="json" size="sm" />
    <twig:FileType type="yaml" size="sm" />
    <twig:FileType type="xml" size="sm" />
    <twig:FileType type="toml" size="sm" />
    <twig:FileType type="env" size="sm" />
    <twig:FileType type="psd" size="sm" />
    <twig:FileType type="fig" size="sm" />
    <twig:FileType type="sketch" size="sm" />
    <twig:FileType type="dmg" size="sm" />
    <twig:FileType type="apk" size="sm" />
    <twig:FileType type="woff2" size="sm" />
</div>
```

### Attachment List

The attachments of a message: the icon as the media of an `Item`, the size under the name and a download button.

```twig
<div class="flex max-w-md flex-col gap-2">
    <twig:Item variant="outline">
        <twig:Item:Media>
            <twig:FileType type="pdf" size="md" decorative />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Annual report.pdf
            </twig:Item:Title>
            <twig:Item:Description>
                2.4 MB
            </twig:Item:Description>
        </twig:Item:Content>
        <twig:Item:Actions>
            <twig:Button variant="ghost" size="icon-sm" aria-label="Download Annual report.pdf">
                <twig:ux:icon name="lucide:download" />
            </twig:Button>
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item variant="outline">
        <twig:Item:Media>
            <twig:FileType type="xlsx" size="md" decorative />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Budget 2027.xlsx
            </twig:Item:Title>
            <twig:Item:Description>
                860 KB
            </twig:Item:Description>
        </twig:Item:Content>
        <twig:Item:Actions>
            <twig:Button variant="ghost" size="icon-sm" aria-label="Download Budget 2027.xlsx">
                <twig:ux:icon name="lucide:download" />
            </twig:Button>
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item variant="outline">
        <twig:Item:Media>
            <twig:FileType type="pptx" size="md" decorative />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Launch plan.pptx
            </twig:Item:Title>
            <twig:Item:Description>
                5.1 MB
            </twig:Item:Description>
        </twig:Item:Content>
        <twig:Item:Actions>
            <twig:Button variant="ghost" size="icon-sm" aria-label="Download Launch plan.pptx">
                <twig:ux:icon name="lucide:download" />
            </twig:Button>
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item variant="outline">
        <twig:Item:Media>
            <twig:FileType type="zip" size="md" decorative />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Photos.zip
            </twig:Item:Title>
            <twig:Item:Description>
                18.7 MB
            </twig:Item:Description>
        </twig:Item:Content>
        <twig:Item:Actions>
            <twig:Button variant="ghost" size="icon-sm" aria-label="Download Photos.zip">
                <twig:ux:icon name="lucide:download" />
            </twig:Button>
        </twig:Item:Actions>
    </twig:Item>
</div>
```

### Upload Queue

Files being uploaded: a progress bar under each name, a check mark once a file is done.

```twig
<div class="flex max-w-md flex-col gap-2">
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media>
            <twig:FileType type="pdf" size="sm" decorative />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Contract.pdf
            </twig:Item:Title>
            <twig:Progress value="100" class="h-1.5" />
        </twig:Item:Content>
        <twig:Item:Actions>
            <twig:ux:icon name="lucide:circle-check" class="text-emerald-600" />
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media>
            <twig:FileType type="mp4" size="sm" decorative />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Site visit.mp4
            </twig:Item:Title>
            <twig:Progress value="64" class="h-1.5" />
        </twig:Item:Content>
        <twig:Item:Actions>
            <span class="text-xs tabular-nums text-muted-foreground">64%</span>
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media>
            <twig:FileType type="psd" size="sm" decorative />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Mockups.psd
            </twig:Item:Title>
            <twig:Progress value="28" class="h-1.5" />
        </twig:Item:Content>
        <twig:Item:Actions>
            <span class="text-xs tabular-nums text-muted-foreground">28%</span>
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item variant="outline" size="sm">
        <twig:Item:Media>
            <twig:FileType type="txt" size="sm" decorative />
        </twig:Item:Media>
        <twig:Item:Content>
            <twig:Item:Title>
                Notes.txt
            </twig:Item:Title>
            <twig:Progress value="5" class="h-1.5" />
        </twig:Item:Content>
        <twig:Item:Actions>
            <span class="text-xs tabular-nums text-muted-foreground">5%</span>
        </twig:Item:Actions>
    </twig:Item>
</div>
```

### Custom Colors

A text color class on the component recolors the label band and the icon. The `variant` and `size` still apply.

```twig
<div class="flex items-center gap-4">
    <twig:FileType type="pdf" size="lg" class="text-red-600" />
    <twig:FileType type="docx" size="lg" class="text-emerald-600" />
    <twig:FileType type="xlsx" size="lg" class="text-violet-600" />
    <twig:FileType type="pptx" size="lg" variant="solid" class="text-slate-800 dark:text-slate-200" />
    <twig:FileType type="zip" size="lg" variant="light" class="text-pink-600" />
</div>
```

### Format Picker

A toggle group where each choice is an icon: pick the format of an export.

```twig
<div class="flex flex-col gap-2">
    <span class="text-sm font-medium">
        Export as
    </span>
    <twig:ToggleGroup variant="outline" type="single" class="h-auto">
        <twig:ToggleGroup:Item value="pdf" aria-label="PDF" pressed class="h-auto flex-col gap-1 px-4 py-3">
            <twig:FileType type="pdf" size="md" decorative />
            PDF
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="docx" aria-label="Word" class="h-auto flex-col gap-1 px-4 py-3">
            <twig:FileType type="docx" size="md" decorative />
            Word
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="xlsx" aria-label="Excel" class="h-auto flex-col gap-1 px-4 py-3">
            <twig:FileType type="xlsx" size="md" decorative />
            Excel
        </twig:ToggleGroup:Item>
        <twig:ToggleGroup:Item value="csv" aria-label="CSV" class="h-auto flex-col gap-1 px-4 py-3">
            <twig:FileType type="csv" size="md" decorative />
            CSV
        </twig:ToggleGroup:Item>
    </twig:ToggleGroup>
</div>
```

### Locked & Starred

Small icons pinned to a corner of the file: a lock for a protected file, a star for a favorite.

```twig
<div class="flex items-center gap-6">
    <div class="relative">
        <twig:FileType type="pdf" size="lg" />
        <span class="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-muted text-muted-foreground">
            <twig:ux:icon name="lucide:lock" class="size-2.5" />
        </span>
    </div>
    <div class="relative">
        <twig:FileType type="docx" size="lg" />
        <span class="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-amber-100 text-amber-600">
            <twig:ux:icon name="lucide:star" class="size-2.5 fill-current" />
        </span>
    </div>
    <div class="relative">
        <twig:FileType type="xlsx" size="lg" />
        <span class="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-amber-100 text-amber-600">
            <twig:ux:icon name="lucide:star" class="size-2.5 fill-current" />
        </span>
        <span class="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-muted text-muted-foreground">
            <twig:ux:icon name="lucide:lock" class="size-2.5" />
        </span>
    </div>
</div>
```

### Restyled Labels

The `label` prop replaces the extension in the band: a version, a status, a language.

```twig
<div class="flex items-center gap-4">
    <twig:FileType type="pdf" size="lg" label="v2" />
    <twig:FileType type="docx" size="lg" label="new" variant="solid" />
    <twig:FileType type="xlsx" size="lg" label="draft" variant="light" />
    <twig:FileType type="txt" size="lg" label="fr" variant="mono" />
    <twig:FileType type="zip" size="lg" label="bak" />
</div>
```

### Dotfiles & Build Names

A dotfile or a build file has no real extension: the name itself is resolved and shortened for the label band.

```twig
<div class="grid max-w-md grid-cols-4 gap-4">
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type=".gitignore" size="lg" />
        <span class="text-xs text-muted-foreground">
            .gitignore
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type=".env.local" size="lg" />
        <span class="text-xs text-muted-foreground">
            .env.local
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="Dockerfile" size="lg" />
        <span class="text-xs text-muted-foreground">
            Dockerfile
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="Makefile" size="lg" />
        <span class="text-xs text-muted-foreground">
            Makefile
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="package.json" size="lg" />
        <span class="text-xs text-muted-foreground">
            package.json
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type="composer.lock" size="lg" />
        <span class="text-xs text-muted-foreground">
            composer.lock
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type=".editorconfig" size="lg" />
        <span class="text-xs text-muted-foreground">
            .editorconfig
        </span>
    </div>
    <div class="flex flex-col items-center gap-2">
        <twig:FileType type=".npmrc" size="lg" />
        <span class="text-xs text-muted-foreground">
            .npmrc
        </span>
    </div>
</div>
```

## Accessibility

- By default the root is a `span` with `role="img"` and an accessible name that reflects the type: "PDF file", "Spreadsheet file", "Folder"... A custom `label` is prepended to the name.
- Pass `decorative` when the file name is already visible beside the icon, to avoid announcing the type twice.
- The icon is not focusable: wrap it in a button or a link that has its own accessible name when it must trigger an action.

## API

### `<twig:FileType>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | string | `''` | Extension (`pdf`, `.docx`), file name (`report.pdf`) or `folder`. Case-insensitive. Dotfiles and build names resolve too (`.gitignore`, `.env.local`, `Dockerfile`, `Makefile`). |
| `size` | `mini`, `xs`, `sm`, `md`, `lg`, `xl` | `md` | Preset size (18, 24, 32, 40, 48 and 56 px). Use a size class for other sizes. |
| `variant` | `outline`, `solid`, `light`, `mono` | `outline` | Look of the icon. |
| `label` | string | `null` | Replaces the extension in the label band. |
| `description` | string | `null` | Accessible name. Defaults to the file kind in English ("PDF file"); pass a translated text for other languages. |
| `decorative` | bool | `false` | Hides the icon from assistive technology. |

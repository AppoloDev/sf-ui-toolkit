# Contributing

## Structure

```
manifest.json            # the kit
<recipe>/manifest.json   # a recipe (copy-files, dependencies)
<recipe>/templates/…     # files copied into the project
<recipe>/assets/…        # Stimulus controllers copied into the project
docs/<recipe>.md         # documentation source (see below)
docs-site/               # small Symfony app that renders the docs as static HTML
```

## Adding a recipe

1. `<recipe>/manifest.json` + `<recipe>/templates/components/<Name>.html.twig`
2. `docs/<recipe>.md`, with these sections:
   - `# Title`, then a `> One-line description` (used on the components index)
   - `## Usage`: one ```twig block
   - `## Examples`: one `### Title` per example, each with a ```twig block (add `<!-- height: 320 -->` in the section when the example opens a popover that overflows the preview)
   - `## Accessibility`: a bullet list
   - `## API`: one `### \`<twig:Name>\`` per component, with a `| Prop | Type | Default | Description |` table
3. Add the component to the table in `README.md`.

## Documentation site (GitHub Pages)

The `.github/workflows/docs.yml` workflow installs `docs-site`, runs `php bin/console app:build-docs`
(every ```twig block of `docs/*.md` is really rendered with the kit's components), then publishes `dist/`.

One-time setup on GitHub: *Settings → Pages → Source: GitHub Actions*.

Locally: `cd docs-site && composer install && php bin/console app:build-docs`, then open `dist/index.html`.

## Known limitations

- Tailwind is loaded from a CDN in the docs; replace it with a local build later.
- `Rating` does not use `tailwind_merge` (the official kit does): a class passed as an attribute is appended without conflict resolution.
- No syntax highlighting in the Code tab.

## Components with JavaScript dependencies

A recipe that needs a JavaScript package lists it, pinned, in `dependencies.npm` of its `manifest.json` (`"name@version"`). The docs build adds each of them to the import map of the previews (loaded from esm.sh) and shows the matching `importmap:require` command on the component page. Load such packages with a dynamic `import()` inside the Stimulus controller, so pages without the component never download them.

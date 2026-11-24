# sf-ui-toolkit: instructions

## Language

- All code, code comments, documentation (README, `docs/*.md`, docs-site templates) and kit/recipe descriptions are written in English.

## Commits and pull requests

- No mention of Claude or Anthropic in commits or pull requests: no `Co-Authored-By` line, no `Claude-Session`, no "Generated with".
- Commit author: the Git identity configured by the repository owner (`Fredxd`); never invent an identity in Claude's name.
- Commit messages: short, imperative, in English. One commit per component (recipe + docs + README row together).

## Kit structure

- `manifest.json` at the root: the kit. Each recipe has its own folder `<recipe>/manifest.json` + `<recipe>/templates/components/…`.
- Recipe manifest format: `type`, `name`, `description`, `copy-files` (`"templates/": "templates/"`), `dependencies.composer` (list of `package` or `package:constraint`).
- Each recipe is documented in `docs/<recipe>.md`: `# Title`, `> description`, then an optional `## Installation` (one bullet per shadcn recipe the component needs, since a recipe cannot depend on another kit) and the sections `## Usage`, `## Examples` (one `###` with a ```twig block per example), `## Accessibility` and `## API` (per component a props table, then a `| Block | Description |` table listing every slot: `default` and each named block). The ```twig blocks are really rendered by `docs-site`.

- A recipe can complete a component of the official shadcn kit instead of replacing it (`table` adds `Table:RowExpansion` and `Table:ExpandToggle` to the shadcn `Table`): it ships only its own files, never a copy of the official ones, and its docs page lists the shadcn recipe it extends under `## Installation`. A recipe cannot depend on another kit, so no `dependencies.recipe` for it.
- Stimulus values, actions and events have no table in `## API` (the parser only reads `Prop` and `Block` tables): describe them in `## Usage` or in an `## Extending` section.

## Documentation

- `README.md` is for end users only: what the kit is, how to install a component, and the components table with links to their docs page. Contributor and CI details go in `CONTRIBUTING.md`. Keep the README components table up to date when adding a recipe.

- `docs/symfony-ux/<component>.md` holds extra examples for a component of the official shadcn kit (`### Title` + one ```twig block each): the build appends them to that component's page of the "Symfony UX" section. A recipe page that extends an official component (like `docs/table.md`) also gets the official README examples. Examples are written one tag per line, nested, without `{% for %}` loops, and use the kit's own components (`Button`, `Badge`, `ux:icon`) rather than raw HTML.
- `docs-site/` is a small Symfony app; `php bin/console app:build-docs` generates `dist/` (published to GitHub Pages by `.github/workflows/docs.yml`).
- Kit components are resolved as after a `ux:install`: each `<recipe>/templates` is added to the Twig paths (`docs-site/config/packages/twig.php`).
- Stimulus controllers of recipes (`<recipe>/assets/controllers/*_controller.js`) are copied to `dist/controllers/` and registered by a generated `controllers.js`.

## Translatable texts

- A component never hardcodes a visible or spoken text (button text, `aria-label`, placeholder, screen reader announcement): each one is a prop with an English default, documented in the `## API` table.
- Texts written by a Stimulus controller come from Stimulus values filled by Twig from those props (`{placeholders}` such as `{count}` are replaced in JS). No translation files and no `|trans` in the recipes.

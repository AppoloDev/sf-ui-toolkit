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
- Each recipe is documented in `docs/<recipe>.md`: `# Title`, `> description`, then the sections `## Usage`, `## Examples` (one `###` with a ```twig block per example), `## Accessibility` and `## API`. The ```twig blocks are really rendered by `docs-site`.

## Documentation

- `README.md` is for end users only: what the kit is, how to install a component, and the components table with links to their docs page. Contributor and CI details go in `CONTRIBUTING.md`. Keep the README components table up to date when adding a recipe.

- `docs-site/` is a small Symfony app; `php bin/console app:build-docs` generates `dist/` (published to GitHub Pages by `.github/workflows/docs.yml`).
- Kit components are resolved as after a `ux:install`: each `<recipe>/templates` is added to the Twig paths (`docs-site/config/packages/twig.php`).
- Stimulus controllers of recipes (`<recipe>/assets/controllers/*_controller.js`) are copied to `dist/controllers/` and registered by a generated `controllers.js`.

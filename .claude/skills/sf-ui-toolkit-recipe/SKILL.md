---
name: sf-ui-toolkit-recipe
description: Add or change a component or block of the sf-ui-toolkit kit (recipe, docs page, README row, commit, CI). Use for any "add X component", "add X block" or "fix the docs" request in this repository.
---

# Working on the sf-ui-toolkit kit

The committed rules are in `CLAUDE.md` (language, commits, kit structure, documentation, translatable texts). The scripts below live next to this file and are run from the repository root.

## Add a component

1. **Check the official kit.** Make sure the shadcn kit of Symfony UX Toolkit (https://ux.symfony.com/toolkit/kits/shadcn) does not already provide it: this kit only holds what shadcn lacks.
2. **Manifest:** `python3 .claude/skills/sf-ui-toolkit-recipe/scripts/new-recipe.py <slug> <Name> "<description>" [--assets] [--icons] [--npm name@version]`.
3. **Template:** `<slug>/templates/components/<Name>.html.twig` (sub-components in `<Name>/<Part>.html.twig`, used as `<twig:Name:Part>`). Start with a `{# ... #}` comment listing props and slots. Use `{%- props a = 1, b -%}`, `attributes.render('class')` for the extra class and `{{ attributes }}` on the root. Texts are props with English defaults; icons are `<twig:ux:icon name="lucide:...">`.
4. **Stimulus controller** (only if needed): `<slug>/assets/controllers/<slug_with_underscores>_controller.js`. Texts come from Stimulus values, `{count}`-style placeholders are replaced in JS; dispatch events with `this.dispatch(...)`; load npm packages with a lazy `import()`.
5. **Docs:** `docs/<slug>.md` with `# Title`, `> description`, `## Usage` (one ```twig block), `## Examples` (one `###` + one ```twig block each, self-contained: no shadcn `Button`, plain links with Tailwind classes; `<!-- height: N -->` for tall examples), `## Accessibility` (bullets) and `## API` (`### \`<twig:Name>\`` + `| Prop | Type | Default | Description |` table, no `|` inside cells).
6. **README row:** `python3 .claude/skills/sf-ui-toolkit-recipe/scripts/readme-row.py <slug> "<description>"`.
7. **Ship:** `.claude/skills/sf-ui-toolkit-recipe/scripts/ship.sh "Add <Name> component"` commits as the repository owner, pushes `main` and waits for the docs build. Fix and push again if it fails: the docs build in CI is the check.
8. **Report:** what was added, what differs from what was expected, what was not verified.

## Add a block

Same as a component, plus `--block` on `readme-row.py` and `<!-- kind: block -->` right after the `> description` line of the docs page. Blocks are layout only: actions are slots, data comes from props. Their manifests keep `"type": "component"`.

## Component with JavaScript packages

Pin them with `--npm @scope/pkg@x.y.z`; the docs build adds them to the preview import map and prints the `importmap:require` command. Document the extension points (event, subclassable controller through a `controller` prop) in an `## Extending` section; labeled fences (```` ```js Vanilla ````, ```` ```js Stimulus ````) become tabs.

## Change the docs site

`docs-site/` is a Symfony app: `src/Command/BuildDocsCommand.php` parses the Markdown, `templates/` renders it, `assets/docs.js` handles tabs, copy, widths and the theme switch. Twig 3 rules apply (no `for ... if`, use `|filter`). After the deploy, check https://appolodev.github.io/sf-ui-toolkit/<slug>.html and `preview/<slug>-<n>.html` (a minute after the push the cache can still serve the old page).

## Rules that bite

- One commit per component, short imperative English message, push every time.
- Commits and pull requests carry no co-author or generated-by line; the author is the repository owner.
- Everything in English; the README is for end users only, contributor details go in `CONTRIBUTING.md`.
- No hardcoded visible or spoken text: every one is a prop with an English default. No generic `labels` array prop.
- `null` attributes break Symfony UX Icons: pass `false`.

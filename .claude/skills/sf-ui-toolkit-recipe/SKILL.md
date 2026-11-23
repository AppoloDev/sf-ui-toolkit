---
name: sf-ui-toolkit-recipe
description: Add or change a component or block of the sf-ui-toolkit Symfony UX Toolkit kit (recipe, docs page, README row, commit, CI). Use for any "add X component", "port X from another library" or "fix the docs" request in this repository.
---

# Working on the sf-ui-toolkit kit

Read `CLAUDE.md` first (the committed rules). If a `CLAUDE.local.md` exists (private notes of a maintainer: history, traps, unverified assumptions), read it too. The scripts below live next to this file and are run from the repository root.

## Add a component

1. **Look at the source.** When the component is ported from another library, open its reference page and verify behavior, variants and accessibility there. Check the shadcn kit (https://ux.symfony.com/toolkit/kits/shadcn) does not already have it.
2. **Manifest:** `python3 .claude/skills/sf-ui-toolkit-recipe/scripts/new-recipe.py <slug> <Name> "<description>" [--assets] [--icons] [--npm name@version]`.
3. **Template:** `<slug>/templates/components/<Name>.html.twig` (sub-components in `<Name>/<Part>.html.twig`, used as `<twig:Name:Part>`). Start with a `{# ... #}` comment listing props and slots. Use `{%- props a = 1, b -%}`, `attributes.render('class')` for the extra class and `{{ attributes }}` on the root. Texts are props with English defaults; icons are `<twig:ux:icon name="lucide:...">`.
4. **Stimulus controller** (only if needed): `<slug>/assets/controllers/<slug_with_underscores>_controller.js`. Texts come from Stimulus values, `{count}`-style placeholders are replaced in JS; dispatch events with `this.dispatch(...)`; lazy `import()` for npm packages.
5. **Docs:** `docs/<slug>.md` with `# Title`, `> description`, `## Usage` (one ```twig block), `## Examples` (one `###` + one ```twig block each, self-contained: no shadcn `Button`, plain links with Tailwind classes; `<!-- height: N -->` for tall examples), `## Accessibility` (bullets) and `## API` (`### \`<twig:Name>\`` + `| Prop | Type | Default | Description |` table, no `|` inside cells).
6. **README row:** `python3 .claude/skills/sf-ui-toolkit-recipe/scripts/readme-row.py <slug> "<description>"`.
7. **Ship:** `.claude/skills/sf-ui-toolkit-recipe/scripts/ship.sh "Add <Name> component"`: commits as Fredxd with no attribution, pushes, waits for the docs build. Fix and push again if CI fails (CI is the only build: the docs cannot be built in the sandbox).
8. **Report** to the owner in French: what was done, divergences from the reference, what was not verified (nothing is run in a browser unless the Chrome tools are connected).

## Add a block

Same as a component, plus `--block` on `readme-row.py` and `<!-- kind: block -->` right after the `> description` line of the docs page. Blocks are layout only: actions are slots, data comes from props.

## Component with JavaScript packages

Pin them with `--npm @scope/pkg@x.y.z`; the docs build adds them to the preview import map (esm.sh) and prints the `importmap:require` command. Document the extension points (event, subclassable controller via a `controller` prop) in an `## Extending` section; labeled fences (```` ```js Vanilla ````, ```` ```js Stimulus ````) become tabs.

## Change the docs site

`docs-site/` (Symfony app): `src/Command/BuildDocsCommand.php` parses the Markdown, `templates/` renders it, `assets/docs.js` handles tabs, copy, widths and the theme switch. Twig 3 rules apply (no `for ... if`). Check the result after deploy with WebFetch on https://appolodev.github.io/sf-ui-toolkit/<slug>.html and `preview/<slug>-<n>.html` (a minute after the push, the cache can serve the old page).

## Rules that bite

- One commit per component, short imperative English message, push every time.
- Never mention Claude or Anthropic in commits or pull requests (no `Co-Authored-By`, no session link, no "Generated with"); commit as the repository owner.
- Everything in English; README is end-user only; contributor details in `CONTRIBUTING.md`.
- No hardcoded visible or spoken text. No generic `labels` array prop.
- `null` attributes break UX Icons: pass `false`.

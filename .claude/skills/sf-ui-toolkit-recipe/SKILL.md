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
5. **Docs:** `docs/<slug>.md` with `# Title`, `> description`, `## Usage` (one ```twig block), `## Examples` (one `###` + one ```twig block each, use the shadcn kit components for controls (`<twig:Button>`, `<twig:Input>`, `<twig:Label>`, `<twig:Switch>`, `<twig:NativeSelect>`, `<twig:Checkbox>`, `<twig:Textarea>`; `as="a"` for links), they are available in the docs build; a forced width needs `!` (`class="w-56!"`); `<!-- height: N -->` for tall examples), `## Accessibility` (bullets) and `## API` (`### \`<twig:Name>\`` + `| Prop | Type | Default | Description |` table, no `|` inside cells).
6. **README row:** `python3 .claude/skills/sf-ui-toolkit-recipe/scripts/readme-row.py <slug> "<description>"`.
7. **Ship:** `.claude/skills/sf-ui-toolkit-recipe/scripts/ship.sh "Add <Name> component"` commits as the repository owner, pushes `main` and waits for the docs build. Fix and push again if it fails: the docs build in CI is the check.
8. **Report:** what was added, what differs from what was expected, what was not verified.

## Add a block

Same as a component, plus `--block` on `readme-row.py`, and `"type": "block"` in the manifest (the docs read the kind from it, there is no marker in the page). Blocks are layout only: actions are slots, data comes from props, so the recipes do not depend on shadcn components (only their docs examples use them).

Templates merge classes with `attributes.defaults({class: (...)|tailwind_classes})` and use `html_cva(base:, variants:)` with `style.apply({...})|tailwind_classes` for variants, like the shadcn kit; add `twig/extra-bundle`, `twig/html-extra:^3.24.0` and `tales-from-a-dev/twig-tailwind-extra:^1.3.0` to `dependencies.composer`. Use `%COMPONENTS_DIR%/` and `%CONTROLLERS_DIR%/` in `copy-files` (`"templates/components/": "%COMPONENTS_DIR%/"`). Npm packages go in `dependencies.npm`, other recipes in `dependencies.recipe`.

## Component with JavaScript packages

Pin them with `--npm @scope/pkg@x.y.z`; the docs build adds them to the preview import map and prints the `importmap:require` command. Document the extension points (event, subclassable controller through a `controller` prop) in an `## Extending` section; labeled fences (```` ```js Vanilla ````, ```` ```js Stimulus ````) become tabs.

The model is `rich-text-editor`, which depends on TipTap (`@tiptap/core` and `@tiptap/starter-kit`, pinned in its manifest): the controller loads TipTap with a lazy `import()`, and `docs/rich-text-editor.md` shows how to add TipTap extensions and tools either with the `rich-text-editor:configure` event or by subclassing the controller. Any new dependency of that kind is named in the recipe's docs and manifest only.

## Change the docs site

`docs-site/` is a Symfony app: `src/Command/BuildDocsCommand.php` parses the Markdown, `templates/` renders it, `assets/docs.js` handles tabs, copy, widths and the theme switch. Twig 3 rules apply (no `for ... if`, use `|filter`). After the deploy, check https://appolodev.github.io/sf-ui-toolkit/<slug>.html and `preview/<slug>-<n>.html` (a minute after the push the cache can still serve the old page).

## Rules that bite

- Reuse the shadcn kit before writing UI mechanics: panels are `Popover` (trigger attributes via `{{ ...popover_trigger_attrs }}`, open state through `data-state` and `data-popover-open-value` on the root), searchable lists `Combobox`/`Command`, buttons `Button`, fields `Field`/`Input`. Our controller then only holds the logic of the component and runs next to the popover controller (`data-controller="cascader"` is appended to `popover`). A recipe cannot list another kit's recipe in `dependencies.recipe` (the installer throws): state the required shadcn components in the Usage text of the docs page. `Cascader` is the model.

- Lists of entries (options, items, tools, swatches) are never an array prop: they are child components (`<twig:Cascader:Option value="..." label="...">`, nested for hierarchies). A child is an anonymous template that only renders markup (`<li data-value data-label>`, hidden under the parent), and the Stimulus controller reads that markup. Content goes in the child's slot, so Twig loops and rich content work. `Cascader` is the model.

- One commit per component, short imperative English message, push every time.
- Commits and pull requests carry no co-author or generated-by line; the author is the repository owner.
- Everything in English; the README is for end users only, contributor details go in `CONTRIBUTING.md`.
- No hardcoded visible or spoken text: every one is a prop with an English default. No generic `labels` array prop.
- `null` attributes break Symfony UX Icons: pass `false`.

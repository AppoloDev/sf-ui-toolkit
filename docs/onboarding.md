# Onboarding

> Setup flow shell: step counter, progress bar or dot indicator, title, description, content and footer actions.

## Usage

The block is the frame of one step: where the person is, the title, the content and the actions. Moving between steps (one route per step, Turbo, a multi-step form) is yours; render the block again with the next `step`.

```twig
<twig:Onboarding :step="2" :steps="4" title="Create your workspace" description="You can change this later.">
    <input type="text" aria-label="Workspace name" placeholder="Acme Inc." class="h-10 rounded-md border border-border bg-background px-3 text-sm">
    <twig:block name="footer">
        <a href="#" class="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-medium">Back</a>
        <a href="#" class="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Continue</a>
    </twig:block>
</twig:Onboarding>
```

## Examples

### Progress bar

The default indicator is a progress bar with the step counter under it.

```twig
<twig:Onboarding :step="2" :steps="4" title="Create your workspace" description="Pick a name your team will recognize.">
    <label class="grid gap-1.5 text-sm font-medium">Workspace name
        <input type="text" placeholder="Acme Inc." class="h-10 rounded-md border border-border bg-background px-3 text-sm font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring">
    </label>
    <label class="grid gap-1.5 text-sm font-medium">Team size
        <select class="h-10 rounded-md border border-border bg-background px-3 text-sm font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <option>Just me</option><option>2 to 10</option><option>11 to 50</option>
        </select>
    </label>
    <twig:block name="footer">
        <a href="#" class="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-medium hover:bg-muted">Back</a>
        <a href="#" class="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Continue</a>
    </twig:block>
</twig:Onboarding>
```

### Dots

`indicator` set to `dots` shows one dot per step, the current one wider.

```twig
<twig:Onboarding indicator="dots" :step="1" :steps="3" title="Welcome aboard" description="Three quick steps to get you set up.">
    <twig:block name="footer">
        <a href="#" class="inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground">Get started</a>
    </twig:block>
</twig:Onboarding>
```

### Left aligned, with a skip

`align` set to `start` left-aligns the text and spreads the footer actions.

```twig
<twig:Onboarding align="start" :step="3" :steps="4" title="Invite your team" description="Add colleagues by email. You can skip this for now.">
    <textarea aria-label="Email addresses" rows="3" placeholder="ada@example.com, grace@example.com" class="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"></textarea>
    <twig:block name="footer">
        <a href="#" class="text-sm font-medium text-muted-foreground underline underline-offset-4">Skip for now</a>
        <a href="#" class="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Send invites</a>
    </twig:block>
</twig:Onboarding>
```

### Translated texts

The counter and the name of the bar are props; `{current}` and `{total}` are replaced.

```twig
<twig:Onboarding :step="2" :steps="5" stepLabel="Étape {current} sur {total}" progressLabel="Progression de la configuration" title="Créez votre espace" description="Vous pourrez le modifier plus tard.">
    <twig:block name="footer">
        <a href="#" class="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-medium">Retour</a>
        <a href="#" class="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Continuer</a>
    </twig:block>
</twig:Onboarding>
```

## Accessibility

- The bar is a `progressbar` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow` and a spoken text (`aria-valuetext`, built from `stepLabel`), named by `progressLabel`.
- The dots are an ordered list: the current step carries `aria-current="step"`, and each dot has a hidden text with the step label.
- The title is a real heading: `titleTag` (`h1`, `h2` or `h3`) lets it fit the page outline, for instance `h1` when the flow is the whole page.
- Moving to another step reloads or replaces the content: move the focus to the title or the first field in your own code so keyboard and screen reader users land at the start of the new step.

## API

### `<twig:Onboarding>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `step` | number | `1` | Current step, from 1 (kept between 1 and `steps`). |
| `steps` | number | `1` | Total number of steps. |
| `title` | string | `null` | Heading of the step. |
| `description` | string | `null` | Text under the heading. |
| `indicator` | `bar`, `dots` | `bar` | Progress bar, or one dot per step. |
| `align` | `center`, `start` | `center` | Alignment of the header and the footer. |
| `stepLabel` | string | `Step {current} of {total}` | Counter text; `{current}` and `{total}` are replaced. |
| `progressLabel` | string | `Setup progress` | Accessible name of the progress bar. |
| `titleTag` | string | `h2` | Element of the title: `h1`, `h2` or `h3`. |

Blocks: the default slot is the content of the step; `<twig:block name="footer">` holds the actions.

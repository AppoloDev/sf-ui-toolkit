# Step Tour

> Content in steps, shown one at a time with a counter, dots and previous and next buttons: a guided tour, release notes, a short onboarding.

## Installation

- button
- popover
- hover-card

## Usage

Write each step in a `StepTour:Step`. `StepTour` shows one at a time and adds a counter, a dot per step and the previous and next buttons. Without the script, all the steps are shown one after the other.

```twig
<twig:StepTour class="max-w-xs">
    <twig:StepTour:Step>
        <p class="text-sm font-medium">
            Welcome
        </p>
        <p class="text-sm text-muted-foreground">
            A short tour of the main screen.
        </p>
    </twig:StepTour:Step>
    <twig:StepTour:Step>
        <p class="text-sm font-medium">
            Your projects
        </p>
        <p class="text-sm text-muted-foreground">
            Everything you work on lives here.
        </p>
    </twig:StepTour:Step>
</twig:StepTour>
```

The `step-tour:change` event, with `detail.index`, is dispatched on every change, and `step-tour:finish` when the next button is used on the last step.

## Examples

### Step Tour in a Popover

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 340px">
    <twig:Popover>
        <twig:Popover:Trigger>
            <twig:Button variant="outline" {{ ...popover_trigger_attrs }}>
                <twig:ux:icon name="lucide:compass" />
                Take the tour
            </twig:Button>
        </twig:Popover:Trigger>
        <twig:Popover:Content align="start" class="w-80">
            <twig:StepTour>
                <twig:StepTour:Step>
                    <p class="text-sm font-medium">
                        Create a project
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Start from the button at the top right of the page.
                    </p>
                </twig:StepTour:Step>
                <twig:StepTour:Step>
                    <p class="text-sm font-medium">
                        Invite your team
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Share the link, or add people by email.
                    </p>
                </twig:StepTour:Step>
                <twig:StepTour:Step>
                    <p class="text-sm font-medium">
                        Track the progress
                    </p>
                    <p class="text-sm text-muted-foreground">
                        The board shows what is done and what is next.
                    </p>
                </twig:StepTour:Step>
            </twig:StepTour>
        </twig:Popover:Content>
    </twig:Popover>
</div>
```

### Release Notes in a Hover Card

Dots only: no counter and no buttons.

```twig
<div class="flex items-start justify-center" style="min-height: 240px">
    <twig:HoverCard openDelay="10" closeDelay="200">
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" {{ ...hover_card_trigger_attrs }}>
                What is new in 2.4
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-80">
            <twig:StepTour :counter="null" :buttons="false">
                <twig:StepTour:Step>
                    <p class="text-sm font-semibold">
                        Dark mode
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Every screen now follows your system theme.
                    </p>
                </twig:StepTour:Step>
                <twig:StepTour:Step>
                    <p class="text-sm font-semibold">
                        Faster search
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Results appear as you type, even on large projects.
                    </p>
                </twig:StepTour:Step>
                <twig:StepTour:Step>
                    <p class="text-sm font-semibold">
                        Keyboard shortcuts
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Press the question mark to see them all.
                    </p>
                </twig:StepTour:Step>
            </twig:StepTour>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```

### Onboarding Card

Inside a `Card`, with the counter and the buttons only, and a label for the last step.

```twig
<twig:Card class="mx-auto max-w-sm">
    <twig:Card:Content>
        <twig:StepTour :dots="false" finishLabel="Get started">
            <twig:StepTour:Step>
                <div class="flex size-10 items-center justify-center rounded-lg bg-muted">
                    <twig:ux:icon name="lucide:folder-plus" class="size-5" />
                </div>
                <p class="mt-2 text-sm font-medium">
                    Organize your work
                </p>
                <p class="text-sm text-muted-foreground">
                    Group files in projects and find them again in a click.
                </p>
            </twig:StepTour:Step>
            <twig:StepTour:Step>
                <div class="flex size-10 items-center justify-center rounded-lg bg-muted">
                    <twig:ux:icon name="lucide:users" class="size-5" />
                </div>
                <p class="mt-2 text-sm font-medium">
                    Work together
                </p>
                <p class="text-sm text-muted-foreground">
                    Comment, assign and follow changes with your team.
                </p>
            </twig:StepTour:Step>
        </twig:StepTour>
    </twig:Card:Content>
</twig:Card>
```

### Custom Texts

```twig
<twig:StepTour counter="Étape {current} sur {total}" previousLabel="Précédent" nextLabel="Suivant" finishLabel="Terminer" dotLabel="Aller à l'étape {n}" class="mx-auto max-w-xs">
    <twig:StepTour:Step>
        <p class="text-sm font-medium">
            Bienvenue
        </p>
        <p class="text-sm text-muted-foreground">
            Un tour rapide de l'écran principal.
        </p>
    </twig:StepTour:Step>
    <twig:StepTour:Step>
        <p class="text-sm font-medium">
            Vos projets
        </p>
        <p class="text-sm text-muted-foreground">
            Tout ce sur quoi vous travaillez est ici.
        </p>
    </twig:StepTour:Step>
</twig:StepTour>
```

## Accessibility

- The counter is a polite live region: it is read when the step changes, which tells screen reader users where they are.
- The dots are real buttons with an accessible name (`dotLabel`), and the current one has `aria-current="step"`. The previous button is disabled on the first step.
- The hidden steps use the `hidden` attribute, so that they are out of the reading order and the tab order.
- All texts are props: write them in the language of the page.

## API

### `<twig:StepTour>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `counter` | string or null | `Step {current} of {total}` | The counter, with `{current}` and `{total}`. `null` hides it. |
| `previousLabel` | string | `Back` | The label of the previous button. |
| `nextLabel` | string | `Next` | The label of the next button. |
| `finishLabel` | string | `Done` | The label of the next button on the last step. |
| `dotLabel` | string | `Go to step {n}` | The accessible name of a dot, with `{n}` for the number of the step. |
| `dots` | boolean | `true` | Whether to show a dot per step. |
| `buttons` | boolean | `true` | Whether to show the previous and next buttons. |
| `index` | int | `0` | The step shown first, from 0. |

| Block | Description |
| --- | --- |
| `default` | The `StepTour:Step` components. |

### `<twig:StepTour:Step>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| any attribute | | | Passed to the element of the step. |

| Block | Description |
| --- | --- |
| `default` | The content of the step. |

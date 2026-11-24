# Onboarding

> Setup flow shell: step counter, progress bar or dot indicator, title, description, content and footer actions.

## Usage

The block is the frame of one step: where the person is, the title, the content and the actions. By default moving between steps (one route per step, Turbo, a multi-step form) is yours: render the block again with the next `step`.

```twig
<twig:Onboarding :step="2" :steps="4" title="Create your workspace" description="You can change this later.">
    <twig:Input aria-label="Workspace name" placeholder="Acme Inc." />
    <twig:block name="footer">
        <twig:Button as="a" href="#" variant="outline">Back</twig:Button>
        <twig:Button as="a" href="#">Continue</twig:Button>
    </twig:block>
</twig:Onboarding>
```

## Examples

### Interactive

Set `interactive` and put one `Onboarding:Step` per step in the default slot: the Stimulus controller shows one at a time, updates the indicator and moves the focus to the new title. The footer buttons carry a `data-onboarding-target` of `back`, `next` or `finish`; Back is hidden on the first step and Continue is replaced by Finish on the last one. The root dispatches `onboarding:change` (`detail.step`, `detail.total`) and `onboarding:finish`: listen to them to save the answers or redirect.

<!-- height: 460 -->
```twig
<twig:Onboarding interactive :steps="3" indicator="dots">
    <twig:Onboarding:Step title="Welcome aboard" description="Three quick steps to get you set up.">
        <p class="text-sm text-muted-foreground">It takes less than a minute.</p>
    </twig:Onboarding:Step>
    <twig:Onboarding:Step title="Create your workspace" description="Pick a name your team will recognize.">
        <twig:Field>
            <twig:Field:Label for="workspace">Workspace name</twig:Field:Label>
            <twig:Input id="workspace" placeholder="Acme Inc." />
        </twig:Field>
        <twig:Field>
            <twig:Field:Label for="size">Team size</twig:Field:Label>
            <twig:NativeSelect id="size" class="w-full">
                <twig:NativeSelect:Option value="1">Just me</twig:NativeSelect:Option>
                <twig:NativeSelect:Option value="10">2 to 10</twig:NativeSelect:Option>
                <twig:NativeSelect:Option value="50">11 to 50</twig:NativeSelect:Option>
            </twig:NativeSelect>
        </twig:Field>
    </twig:Onboarding:Step>
    <twig:Onboarding:Step title="Almost there" description="Choose how we keep you posted.">
        <twig:Field orientation="horizontal">
            <twig:Checkbox id="updates" checked />
            <twig:Field:Label for="updates">Send me product updates</twig:Field:Label>
        </twig:Field>
    </twig:Onboarding:Step>
    <twig:block name="footer">
        <twig:Button variant="outline" data-onboarding-target="back">Back</twig:Button>
        <twig:Button data-onboarding-target="next">Continue</twig:Button>
        <twig:Button data-onboarding-target="finish">Finish</twig:Button>
    </twig:block>
</twig:Onboarding>
```

### Progress bar

The default indicator is a progress bar with the step counter under it.

```twig
<twig:Onboarding :step="2" :steps="4" title="Create your workspace" description="Pick a name your team will recognize.">
    <twig:Field>
        <twig:Field:Label for="ws-name">Workspace name</twig:Field:Label>
        <twig:Input id="ws-name" placeholder="Acme Inc." />
    </twig:Field>
    <twig:Field>
        <twig:Field:Label for="ws-size">Team size</twig:Field:Label>
        <twig:NativeSelect id="ws-size" class="w-full">
            <twig:NativeSelect:Option value="1">Just me</twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="10">2 to 10</twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="50">11 to 50</twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Field>
    <twig:block name="footer">
        <twig:Button as="a" href="#" variant="outline">Back</twig:Button>
        <twig:Button as="a" href="#">Continue</twig:Button>
    </twig:block>
</twig:Onboarding>
```

### Dots

`indicator` set to `dots` shows one dot per step, the current one wider.

```twig
<twig:Onboarding indicator="dots" :step="1" :steps="3" title="Welcome aboard" description="Three quick steps to get you set up.">
    <twig:block name="footer">
        <twig:Button as="a" href="#">Get started</twig:Button>
    </twig:block>
</twig:Onboarding>
```

### Left aligned, with a skip

`align` set to `start` left-aligns the text and spreads the footer actions.

```twig
<twig:Onboarding align="start" :step="3" :steps="4" title="Invite your team" description="Add colleagues by email. You can skip this for now.">
    <twig:Textarea aria-label="Email addresses" rows="3" placeholder="ada@example.com, grace@example.com" />
    <twig:block name="footer">
        <twig:Button as="a" href="#" variant="link">Skip for now</twig:Button>
        <twig:Button as="a" href="#">Send invites</twig:Button>
    </twig:block>
</twig:Onboarding>
```

### Translated texts

The counter and the name of the bar are props; `{current}` and `{total}` are replaced.

```twig
<twig:Onboarding :step="2" :steps="5" stepLabel="Étape {current} sur {total}" progressLabel="Progression de la configuration" title="Créez votre espace" description="Vous pourrez le modifier plus tard.">
    <twig:block name="footer">
        <twig:Button as="a" href="#" variant="outline">Retour</twig:Button>
        <twig:Button as="a" href="#">Continuer</twig:Button>
    </twig:block>
</twig:Onboarding>
```

## Accessibility

- The bar is a `progressbar` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow` and a spoken text (`aria-valuetext`, built from `stepLabel`), named by `progressLabel`.
- The dots are an ordered list: the current step carries `aria-current="step"`, and each dot has a hidden text with the step label.
- The title is a real heading: `titleTag` (`h1`, `h2` or `h3`) lets it fit the page outline, for instance `h1` when the flow is the whole page.
- In interactive mode the focus moves to the title of the new step; hidden panels are not exposed to assistive technology.
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
| `interactive` | bool | `false` | Let the Stimulus controller switch between `Onboarding:Step` panels. |

### `<twig:Onboarding:Step>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | string | `null` | Heading of the step. |
| `description` | string | `null` | Text under the heading. |
| `titleTag` | string | `h2` | Element of the title: `h1`, `h2` or `h3`. |

Blocks: the default slot is the content of the step; `<twig:block name="footer">` holds the actions.

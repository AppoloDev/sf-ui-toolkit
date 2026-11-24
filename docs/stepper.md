# Stepper

> Multi-step navigation with indicators, states, vertical layout, panels and cancelable step changes (per-step validation).

## Usage

```twig
<twig:Stepper :value="1">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Account
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Profile
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
    <twig:Stepper:Content step="1">
        Account form…
    </twig:Stepper:Content>
    <twig:Stepper:Content step="2">
        Profile form…
    </twig:Stepper:Content>
</twig:Stepper>
```

## Examples

### With panels and navigation buttons

Steps before the current one are completed automatically. Panels stay in the DOM (hidden when inactive), so the values typed in a form survive step changes.

<!-- height: 260 -->

```twig
<twig:Stepper :value="2" class="max-w-xl">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Account
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Profile
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Confirm
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
    <twig:Stepper:Content step="1" class="rounded-md border border-border p-4 text-sm">
        Account details.
    </twig:Stepper:Content>
    <twig:Stepper:Content step="2" class="rounded-md border border-border p-4 text-sm">
        Profile details.
    </twig:Stepper:Content>
    <twig:Stepper:Content step="3" class="rounded-md border border-border p-4 text-sm">
        Review and confirm.
    </twig:Stepper:Content>
    <div class="flex justify-between">
        <twig:Button variant="outline" data-stepper-target="prev" data-action="click->stepper#prev">
            Previous
        </twig:Button>
        <twig:Button data-stepper-target="next" data-action="click->stepper#next">
            Next
        </twig:Button>
    </div>
</twig:Stepper>
```

### Descriptions

```twig
<twig:Stepper :value="2" class="max-w-2xl">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Order placed
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Payment received
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Shipped
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        On its way
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <span>
                    <twig:Stepper:Title>
                        Delivered
                    </twig:Stepper:Title>
                    <twig:Stepper:Description>
                        Not yet
                    </twig:Stepper:Description>
                </span>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Vertical

```twig
<twig:Stepper :value="2" orientation="vertical">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Create the project
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Invite the team
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Launch
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Loading

`loading` only affects the active step: a spinner replaces its marker.

```twig
<twig:Stepper :value="2" class="max-w-xl">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Upload
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" loading>
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Processing
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Done
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Non-linear and disabled steps

`completed` marks a later step as done; `disabled` blocks a step that is not reachable yet.

```twig
<twig:Stepper :value="1" class="max-w-xl">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Details
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2" :completed="true">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Optional
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="3" disabled>
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    3
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Locked
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
</twig:Stepper>
```

### Per-step validation

The `stepper:change` event is cancelable: call `preventDefault()` to refuse the change. Here the first step cannot be left while its field is empty.

```twig
<twig:Stepper :value="1" class="max-w-xl" id="validated-stepper">
    <twig:Stepper:Nav>
        <twig:Stepper:Item step="1">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    1
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Name
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
            <twig:Stepper:Separator />
        </twig:Stepper:Item>
        <twig:Stepper:Item step="2">
            <twig:Stepper:Trigger>
                <twig:Stepper:Indicator>
                    2
                </twig:Stepper:Indicator>
                <twig:Stepper:Title>
                    Done
                </twig:Stepper:Title>
            </twig:Stepper:Trigger>
        </twig:Stepper:Item>
    </twig:Stepper:Nav>
    <twig:Stepper:Content step="1">
        <twig:Input name="name" required placeholder="Required to continue" />
    </twig:Stepper:Content>
    <twig:Stepper:Content step="2" class="text-sm">
        Thanks!
    </twig:Stepper:Content>
</twig:Stepper>
<script>
    document.getElementById('validated-stepper').addEventListener('stepper:change', (event) => {
        const name = event.currentTarget.querySelector('[name=name]');
        if (event.detail.to > event.detail.from && !name.value) {
            event.preventDefault();
            name.focus();
        }
    });
</script>
```

## Accessibility

- `Stepper:Nav` is a `tablist` and each `Stepper:Trigger` a `tab`; the active tab has `aria-selected="true"` and roving focus keeps a single tab stop in the list.
- Keyboard: `→` / `↓` and `←` / `↑` move between steps and wrap at the ends, `Home` / `End` jump to the first and last step, `Enter` / `Space` select the focused step.
- `Stepper:Content` is a `tabpanel`, hidden while its step is inactive.
- Disabled steps cannot be focused or selected.

## API

### `<twig:Stepper>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | int | `1` | Current step (1-based). |
| `orientation` | `horizontal`, `vertical` | `horizontal` | Layout of the navigation. |

| Block | Description |
|---|---|
| `default` | A `Stepper:Nav` and the `Stepper:Content` panels. |

### `<twig:Stepper:Item>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `step` | int | required | Step number (1-based). |
| `completed` | bool | `false` | Forces the completed state (non-linear flows). |
| `disabled` | bool | `false` | The step is not reachable yet. |
| `loading` | bool | `false` | Shows a spinner while the step is active. |

| Block | Description |
|---|---|
| `default` | A `Stepper:Trigger` with its indicator, title and description. |

### `<twig:Stepper:Content>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `step` | int | required | Step shown by this panel. |

| Block | Description |
|---|---|
| `default` | The panel of the step. |

### Other parts

| Prop | Type | Default | Description |
|---|---|---|---|
| `Stepper:Nav` | slot | - | Tab list wrapping the items. |
| `Stepper:Trigger` | slot | - | Clickable step control (contains the indicator and labels). |
| `Stepper:Indicator` | slot | - | Marker of the step; the check mark and the spinner are drawn by the component. |
| `Stepper:Title` | slot | - | Label of the step. |
| `Stepper:Description` | slot | - | Secondary text of the step. |
| `Stepper:Separator` | - | - | Connector to the next step (hidden on the last one). |

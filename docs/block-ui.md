# Block UI

> Covers a region with a translucent layer and a spinner while something loads: blocked from a prop, from code, or automatically while a form inside it is submitted.

## Installation

- button, card, field, input, table, badge (only for the examples)

## Usage

```twig
<twig:BlockUi :blockOnSubmit="true" message="Saving…">
    <form>…</form>
</twig:BlockUi>
```

To block from code, set `data-block-ui-blocked-value` on the region to `true` or `false`, or use the `block`, `unblock` and `toggle` actions of the `block-ui` controller.

## Examples

### Blocked

`blocked` starts the region covered: its content cannot be reached, even with the keyboard.

<!-- height: 260 -->

```twig
<twig:BlockUi :blocked="true">
    <twig:Card>
        <twig:Card:Header>
            <twig:Card:Title>
                Monthly report
            </twig:Card:Title>
            <twig:Card:Description>
                Revenue grew by 12% compared with last month.
            </twig:Card:Description>
        </twig:Card:Header>
        <twig:Card:Content>
            <twig:Button size="sm">
                Download
            </twig:Button>
        </twig:Card:Content>
    </twig:Card>
</twig:BlockUi>
```

### With A Message

A visible message under the spinner.

<!-- height: 260 -->

```twig
<twig:BlockUi :blocked="true" message="Refreshing the report…" label="Refreshing">
    <twig:Card>
        <twig:Card:Header>
            <twig:Card:Title>
                Monthly report
            </twig:Card:Title>
            <twig:Card:Description>
                Revenue grew by 12% compared with last month.
            </twig:Card:Description>
        </twig:Card:Header>
        <twig:Card:Content>
            <twig:Button size="sm">
                Download
            </twig:Button>
        </twig:Card:Content>
    </twig:Card>
</twig:BlockUi>
```

### Toggle From A Button

The `blocked` value can be changed from code; the actions `block`, `unblock` and `toggle` are available on any element of the region.

<!-- height: 340 -->

```twig
<div class="grid gap-3">
    <twig:BlockUi id="bu-toggle">
    <twig:Card>
            <twig:Card:Header>
                <twig:Card:Title>
                    Monthly report
                </twig:Card:Title>
                <twig:Card:Description>
                    Revenue grew by 12% compared with last month.
                </twig:Card:Description>
            </twig:Card:Header>
            <twig:Card:Content>
                <twig:Button size="sm">
                    Download
                </twig:Button>
            </twig:Card:Content>
        </twig:Card>
    </twig:BlockUi>
    <div>
        <twig:Button variant="outline" size="sm" id="bu-toggle-button">
            Block for 2 seconds
        </twig:Button>
    </div>
</div>
<script>
    document.getElementById('bu-toggle-button').addEventListener('click', () => {
        const region = document.getElementById('bu-toggle');
        region.setAttribute('data-block-ui-blocked-value', 'true');
        setTimeout(() => region.setAttribute('data-block-ui-blocked-value', 'false'), 2000);
    });
</script>
```

### While A Form Is Submitted

`blockOnSubmit` covers the region as soon as a form inside is submitted. Here the submission is cancelled after a moment, and the region is released.

<!-- height: 260 -->

```twig
<twig:BlockUi id="bu-form" :blockOnSubmit="true" message="Saving…" label="Saving">
    <form id="bu-form-fields" class="grid gap-3 rounded-lg border p-4">
        <twig:Field>
            <twig:Field:Label for="bu-name">
                Name
            </twig:Field:Label>
            <twig:Input id="bu-name" name="name" value="Ada" />
        </twig:Field>
        <div>
            <twig:Button type="submit" size="sm">
                Save
            </twig:Button>
        </div>
    </form>
</twig:BlockUi>
<script>
    document.getElementById('bu-form-fields').addEventListener('submit', (event) => {
        event.preventDefault();
        setTimeout(() => document.getElementById('bu-form').setAttribute('data-block-ui-blocked-value', 'false'), 1500);
    });
</script>
```

### Custom Overlay

The `overlay` block replaces the spinner and the message.

<!-- height: 260 -->

```twig
<twig:BlockUi :blocked="true">
    <twig:Card>
        <twig:Card:Header>
            <twig:Card:Title>
                Premium report
            </twig:Card:Title>
        </twig:Card:Header>
        <twig:Card:Content>
            Detailed figures for every region.
        </twig:Card:Content>
    </twig:Card>
    <twig:block name="overlay">
        <twig:ux:icon name="lucide:lock" class="size-6" />
        <span class="text-sm font-medium">Available on the Pro plan</span>
        <twig:Button size="sm">
            Upgrade
        </twig:Button>
    </twig:block>
</twig:BlockUi>
```

### Table While Loading

The layer follows the rounded corners of the region.

<!-- height: 260 -->

```twig
<twig:BlockUi :blocked="true" class="rounded-lg border" label="Loading the table">
    <twig:Table>
        <twig:Table:Header>
            <twig:Table:Row>
                <twig:Table:Head>
                    Name
                </twig:Table:Head>
                <twig:Table:Head>
                    Status
                </twig:Table:Head>
            </twig:Table:Row>
        </twig:Table:Header>
        <twig:Table:Body>
            <twig:Table:Row>
                <twig:Table:Cell>
                    Ada
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge>
                        Active
                    </twig:Badge>
                </twig:Table:Cell>
            </twig:Table:Row>
            <twig:Table:Row>
                <twig:Table:Cell>
                    Grace
                </twig:Table:Cell>
                <twig:Table:Cell>
                    <twig:Badge variant="secondary">
                        Away
                    </twig:Badge>
                </twig:Table:Cell>
            </twig:Table:Row>
        </twig:Table:Body>
    </twig:Table>
</twig:BlockUi>
```

## Accessibility

- While blocked the content is `inert` (no pointer, no focus, hidden from assistive technology) and the region is `aria-busy`.
- A screen reader announces the `label` (a polite status) when the layer appears.
- Give a precise `label` for what is loading.

## Extending

- `block-ui:block` and `block-ui:unblock` when the state changes.

## API

### `<twig:BlockUi>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `blocked` | bool | `false` | Start blocked. |
| `label` | string | `Loading` | The text read by screen readers when the region is blocked. |
| `blockOnSubmit` | bool | `false` | Block automatically when a form inside is submitted. |
| `message` | string or null | `null` | A visible message under the spinner. |

| Block | Description |
| --- | --- |
| `default` | The region to block. |
| `overlay` | Replaces the spinner and the message. |

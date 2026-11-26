# Org Chart

> An organization chart drawn with nested nodes: connectors in CSS, cards with a title and a subtitle, custom card content, and no JavaScript.

## Installation

- avatar, badge (only for one example)

## Usage

```twig
<twig:OrgChart>
    <twig:OrgChart:Node label="Ada Lovelace" subtitle="CEO">
        <twig:OrgChart:Node label="Grace Hopper" subtitle="CTO" />
        <twig:OrgChart:Node label="Alan Turing" subtitle="CFO" />
    </twig:OrgChart:Node>
</twig:OrgChart>
```

## Examples

### Basic

Nodes nested in nodes. The connectors are drawn in CSS.

<!-- height: 420 -->

```twig
<twig:OrgChart>
    <twig:OrgChart:Node label="Ada Lovelace" subtitle="CEO">
        <twig:OrgChart:Node label="Grace Hopper" subtitle="CTO">
            <twig:OrgChart:Node label="Linus T." subtitle="Platform lead" />
            <twig:OrgChart:Node label="Margaret H." subtitle="Mobile lead" />
        </twig:OrgChart:Node>
        <twig:OrgChart:Node label="Alan Turing" subtitle="CFO">
            <twig:OrgChart:Node label="Dorothy V." subtitle="Accounting" />
        </twig:OrgChart:Node>
        <twig:OrgChart:Node label="Katherine J." subtitle="COO" />
    </twig:OrgChart:Node>
</twig:OrgChart>
```

### Single Branch

One child gives a straight line.

<!-- height: 380 -->

```twig
<twig:OrgChart>
<twig:OrgChart:Node label="Board" subtitle="Governance">
    <twig:OrgChart:Node label="Management" subtitle="Daily operations">
        <twig:OrgChart:Node label="Teams" subtitle="Delivery" />
    </twig:OrgChart:Node>
</twig:OrgChart:Node>
</twig:OrgChart>
```

### Several Roots

Two root nodes side by side.

<!-- height: 320 -->

```twig
<twig:OrgChart>
<twig:OrgChart:Node label="Europe" subtitle="Region">
<twig:OrgChart:Node label="France" subtitle="Country" />
<twig:OrgChart:Node label="Germany" subtitle="Country" />
</twig:OrgChart:Node>
<twig:OrgChart:Node label="Americas" subtitle="Region">
    <twig:OrgChart:Node label="Canada" subtitle="Country" />
    <twig:OrgChart:Node label="Brazil" subtitle="Country" />
</twig:OrgChart:Node>
</twig:OrgChart>
```

### Custom Card

The `card` block replaces the content of a card: here the official `Avatar` and `Badge`.

<!-- height: 320 -->

```twig
<twig:OrgChart>
    <twig:OrgChart:Node label="Ada Lovelace">
        <twig:block name="card">
            <div class="flex items-center gap-3 text-left">
                <twig:Avatar>
                    <twig:Avatar:Fallback>
                        AL
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div>
                    <p class="text-sm font-medium">
                        Ada Lovelace
                    </p>
                    <twig:Badge variant="secondary">
                        CEO
                    </twig:Badge>
                </div>
            </div>
        </twig:block>
        <twig:OrgChart:Node label="Grace Hopper" subtitle="CTO" />
        <twig:OrgChart:Node label="Alan Turing" subtitle="CFO" />
    </twig:OrgChart:Node>
</twig:OrgChart>
```

### Another Language

The accessible name of the chart is a prop.

<!-- height: 280 -->

```twig
<twig:OrgChart label="Organigramme">
    <twig:OrgChart:Node label="Direction" subtitle="Générale">
<twig:OrgChart:Node label="Technique" subtitle="CTO" />
<twig:OrgChart:Node label="Finance" subtitle="CFO" />
    </twig:OrgChart:Node>
</twig:OrgChart>
```

## Accessibility

- The chart is a tree: nodes are tree items, and nodes with children are groups, so a screen reader gets the hierarchy that the lines draw.
- The chart scrolls horizontally when it is wider than its container.

## API

### `<twig:OrgChart>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | string | `Organization chart` | The accessible name of the chart. |

| Block | Description |
| --- | --- |
| `default` | The root node(s). |

### `<twig:OrgChart:Node>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | string | | The title of the node. |
| `subtitle` | string or null | `null` | A line under the title. |

| Block | Description |
| --- | --- |
| `default` | The child nodes. |
| `card` | Replaces the content of the card. |

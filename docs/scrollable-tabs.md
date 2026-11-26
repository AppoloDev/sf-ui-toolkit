# Scrollable Tabs

> Adds scroll arrows to a row of tabs that is wider than its container: the arrows show only when needed, and the selected tab scrolls into view.

## Installation

- tabs

## Usage

Put the tab list inside `ScrollableTabs`. Give the list `class="w-max"` so it keeps its natural width instead of shrinking to the container.

```twig
<twig:ScrollableTabs>
    <twig:Tabs value="one">
        <twig:Tabs:List class="w-max">
            <twig:Tabs:Trigger value="one">One</twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="two">Two</twig:Tabs:Trigger>
        </twig:Tabs:List>
        <twig:Tabs:Content value="one">…</twig:Tabs:Content>
        <twig:Tabs:Content value="two">…</twig:Tabs:Content>
    </twig:Tabs>
</twig:ScrollableTabs>
```

## Examples

### Basic

Wrap the tabs. When they do not fit, an arrow shows on the side where more tabs are hidden; the selected tab scrolls into view.

<!-- height: 220 -->

```twig
<twig:ScrollableTabs>
    <twig:Tabs :value="'overview'" class="gap-3">
        <twig:Tabs:List class="w-max">
            <twig:Tabs:Trigger value="overview">
                Overview
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="analytics">
                Analytics
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="reports">
                Reports
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="notifications">
                Notifications
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="integrations">
                Integrations
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="billing">
                Billing
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="team">
                Team
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="security">
                Security
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="audit-log">
                Audit log
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="settings">
                Settings
            </twig:Tabs:Trigger>
        </twig:Tabs:List>
        <twig:Tabs:Content value="overview">
            Content of Overview.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="analytics">
            Content of Analytics.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="reports">
            Content of Reports.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="notifications">
            Content of Notifications.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="integrations">
            Content of Integrations.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="billing">
            Content of Billing.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="team">
            Content of Team.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="security">
            Content of Security.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="audit-log">
            Content of Audit log.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="settings">
            Content of Settings.
        </twig:Tabs:Content>
    </twig:Tabs>
</twig:ScrollableTabs>
```

### Narrow Container

The same tabs in a narrow box.

<!-- height: 220 -->

```twig
<div class="max-w-xs">
    <twig:ScrollableTabs>
        <twig:Tabs :value="'overview'" class="gap-3">
            <twig:Tabs:List class="w-max">
                <twig:Tabs:Trigger value="overview">
                    Overview
                </twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="analytics">
                    Analytics
                </twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="reports">
                    Reports
                </twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="notifications">
                    Notifications
                </twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="integrations">
                    Integrations
                </twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="billing">
                    Billing
                </twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="team">
                    Team
                </twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="security">
                    Security
                </twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="audit-log">
                    Audit log
                </twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="settings">
                    Settings
                </twig:Tabs:Trigger>
            </twig:Tabs:List>
            <twig:Tabs:Content value="overview">
                Content of Overview.
            </twig:Tabs:Content>
            <twig:Tabs:Content value="analytics">
                Content of Analytics.
            </twig:Tabs:Content>
            <twig:Tabs:Content value="reports">
                Content of Reports.
            </twig:Tabs:Content>
            <twig:Tabs:Content value="notifications">
                Content of Notifications.
            </twig:Tabs:Content>
            <twig:Tabs:Content value="integrations">
                Content of Integrations.
            </twig:Tabs:Content>
            <twig:Tabs:Content value="billing">
                Content of Billing.
            </twig:Tabs:Content>
            <twig:Tabs:Content value="team">
                Content of Team.
            </twig:Tabs:Content>
            <twig:Tabs:Content value="security">
                Content of Security.
            </twig:Tabs:Content>
            <twig:Tabs:Content value="audit-log">
                Content of Audit log.
            </twig:Tabs:Content>
            <twig:Tabs:Content value="settings">
                Content of Settings.
            </twig:Tabs:Content>
        </twig:Tabs>
    </twig:ScrollableTabs>
</div>
```

### Fits

Nothing to scroll: no arrows.

<!-- height: 180 -->

```twig
<twig:ScrollableTabs>
    <twig:Tabs :value="'tab-1'" class="gap-3">
        <twig:Tabs:List class="w-max">
            <twig:Tabs:Trigger value="tab-1">
                Tab 1
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="tab-2">
                Tab 2
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="tab-3">
                Tab 3
            </twig:Tabs:Trigger>
        </twig:Tabs:List>
        <twig:Tabs:Content value="tab-1">
            Content of Tab 1.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="tab-2">
            Content of Tab 2.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="tab-3">
            Content of Tab 3.
        </twig:Tabs:Content>
    </twig:Tabs>
</twig:ScrollableTabs>
```

### Step

`step` is how far an arrow scrolls.

<!-- height: 220 -->

```twig
<twig:ScrollableTabs :step="400">
    <twig:Tabs :value="'overview'" class="gap-3">
        <twig:Tabs:List class="w-max">
            <twig:Tabs:Trigger value="overview">
                Overview
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="analytics">
                Analytics
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="reports">
                Reports
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="notifications">
                Notifications
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="integrations">
                Integrations
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="billing">
                Billing
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="team">
                Team
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="security">
                Security
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="audit-log">
                Audit log
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="settings">
                Settings
            </twig:Tabs:Trigger>
        </twig:Tabs:List>
        <twig:Tabs:Content value="overview">
            Content of Overview.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="analytics">
            Content of Analytics.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="reports">
            Content of Reports.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="notifications">
            Content of Notifications.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="integrations">
            Content of Integrations.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="billing">
            Content of Billing.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="team">
            Content of Team.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="security">
            Content of Security.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="audit-log">
            Content of Audit log.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="settings">
            Content of Settings.
        </twig:Tabs:Content>
    </twig:Tabs>
</twig:ScrollableTabs>
```

### Another Language

The arrows have accessible names.

<!-- height: 220 -->

```twig
<twig:ScrollableTabs previousLabel="Défiler les onglets à gauche" nextLabel="Défiler les onglets à droite">
    <twig:Tabs :value="'overview'" class="gap-3">
        <twig:Tabs:List class="w-max">
            <twig:Tabs:Trigger value="overview">
                Overview
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="analytics">
                Analytics
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="reports">
                Reports
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="notifications">
                Notifications
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="integrations">
                Integrations
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="billing">
                Billing
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="team">
                Team
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="security">
                Security
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="audit-log">
                Audit log
            </twig:Tabs:Trigger>
            <twig:Tabs:Trigger value="settings">
                Settings
            </twig:Tabs:Trigger>
        </twig:Tabs:List>
        <twig:Tabs:Content value="overview">
            Content of Overview.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="analytics">
            Content of Analytics.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="reports">
            Content of Reports.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="notifications">
            Content of Notifications.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="integrations">
            Content of Integrations.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="billing">
            Content of Billing.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="team">
            Content of Team.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="security">
            Content of Security.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="audit-log">
            Content of Audit log.
        </twig:Tabs:Content>
        <twig:Tabs:Content value="settings">
            Content of Settings.
        </twig:Tabs:Content>
    </twig:Tabs>
</twig:ScrollableTabs>
```

## Accessibility

- The arrows are conveniences for the pointer and are out of the tab order: the tabs themselves keep their keyboard behavior (arrow keys, Home, End), and a focused tab scrolls into view.
- The arrows have accessible names (props).

## API

### `<twig:ScrollableTabs>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `previousLabel` | string | `Scroll tabs left` | The accessible name of the left arrow. |
| `nextLabel` | string | `Scroll tabs right` | The accessible name of the right arrow. |
| `step` | integer | `200` | The scroll distance of an arrow, in pixels. |

| Block | Description |
| --- | --- |
| `default` | The tabs. |

# Settings

> Settings page layout: optional side navigation, titled sections and rows with label, description, badge and one control.

<!-- kind: block -->

## Usage

A page is `Settings`, holding `Settings:Section` elements, each holding `Settings:Row` elements. A row is a label and a description on one side and one control (the slot) on the other. Nothing is saved by the component: the controls are yours, usually inside a Symfony form.

```twig
<twig:Settings>
    <twig:Settings:Section title="Notifications" description="Choose what you hear about.">
        <twig:Settings:Row label="Email digest" description="A summary of the week, every Monday.">
            <input type="checkbox" role="switch" aria-label="Email digest" checked>
        </twig:Settings:Row>
    </twig:Settings:Section>
</twig:Settings>
```

## Examples

### Sections and rows

Rows hold any control. `for` turns the label into a real `<label>` of that control; without it the control is grouped and named by the label. `badge` tags a setting, and `danger` shows a destructive one.

```twig
<twig:Settings>
    <twig:Settings:Section title="Profile" description="How you appear to your team.">
        <twig:Settings:Row label="Display name" description="Shown on comments and mentions." for="display-name">
            <input id="display-name" type="text" value="Ada Lovelace" class="h-9 w-56 rounded-md border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
        </twig:Settings:Row>
        <twig:Settings:Row label="Language" description="Used for dates and numbers." for="language">
            <select id="language" class="h-9 rounded-md border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option>English</option>
                <option>Français</option>
            </select>
        </twig:Settings:Row>
        <twig:Settings:Row label="Priority support" description="Answers within two hours." badge="Pro">
            <span class="text-sm text-muted-foreground">Not on your plan</span>
        </twig:Settings:Row>
    </twig:Settings:Section>

    <twig:Settings:Section title="Danger zone">
        <twig:Settings:Row label="Delete account" description="Removes your data for good." danger>
            <a href="#" class="inline-flex h-9 items-center rounded-md border border-destructive px-3 text-sm font-medium text-destructive hover:bg-muted">Delete</a>
        </twig:Settings:Row>
    </twig:Settings:Section>
</twig:Settings>
```

### With side navigation

The `nav` block puts a rail beside the content from the large breakpoint up, and it stays in view while the page scrolls. Use it when there are enough sections to need it: a rail over a few rows looks empty.

```twig
<twig:Settings>
    <twig:block name="nav">
        <nav aria-label="Settings" class="grid gap-1 text-sm">
            <a href="#profile" aria-current="page" class="rounded-md bg-muted px-3 py-2 font-medium">Profile</a>
            <a href="#security" class="rounded-md px-3 py-2 text-muted-foreground hover:bg-muted">Security</a>
            <a href="#billing" class="rounded-md px-3 py-2 text-muted-foreground hover:bg-muted">Billing</a>
        </nav>
    </twig:block>
    <twig:Settings:Section id="profile" title="Profile" description="Your public information.">
        <twig:block name="actions"><a href="#" class="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground">Save</a></twig:block>
        <twig:Settings:Row label="Username" for="username">
            <input id="username" type="text" value="ada" class="h-9 w-48 rounded-md border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
        </twig:Settings:Row>
        <twig:Settings:Row label="Public profile" description="Anyone with the link can see it.">
            <input type="checkbox" role="switch" aria-label="Public profile">
        </twig:Settings:Row>
    </twig:Settings:Section>
    <twig:Settings:Section id="security" title="Security">
        <twig:Settings:Row label="Two-factor authentication" description="Ask for a code at sign-in." badge="Recommended">
            <input type="checkbox" role="switch" aria-label="Two-factor authentication">
        </twig:Settings:Row>
    </twig:Settings:Section>
</twig:Settings>
```

### Plain list

`framed` set to `false` drops the bordered panel, for a section that already sits in a card.

```twig
<twig:Settings>
    <twig:Settings:Section title="Display" :framed="false">
        <twig:Settings:Row label="Compact mode" description="Tighter spacing in lists.">
            <input type="checkbox" role="switch" aria-label="Compact mode">
        </twig:Settings:Row>
        <twig:Settings:Row label="Show avatars">
            <input type="checkbox" role="switch" aria-label="Show avatars" checked>
        </twig:Settings:Row>
    </twig:Settings:Section>
</twig:Settings>
```

## Accessibility

- Each section is a `section` with a real heading (`titleTag`: `h2`, `h3` or `h4`).
- With `for`, the row label is a `<label>` of the control. Without it, the control sits in a `group` named by the label (`aria-labelledby`); give an `aria-label` to a lone switch or checkbox.
- The side navigation is yours: use a `nav` with a name and `aria-current="page"` on the current link.
- A `danger` row is told apart by its wording, not only by the color: say what the action does in the label and description.

## API

### `<twig:Settings>`

The `nav` block holds the side navigation; the default slot holds the sections. There are no props.

### `<twig:Settings:Section>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | string | `null` | Heading of the section. |
| `description` | string | `null` | Text under the heading. |
| `framed` | bool | `true` | Rows in a bordered panel separated by rules. |
| `titleTag` | string | `h2` | Element of the heading: `h2`, `h3` or `h4`. |

Blocks: the default slot holds the rows; `<twig:block name="actions">` holds buttons next to the heading.

### `<twig:Settings:Row>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | required | What the setting is. |
| `description` | string | `null` | What it does. |
| `badge` | string | `null` | Short tag next to the label, such as `Pro`. |
| `for` | string | `null` | Id of the control: the label becomes a real label of it. |
| `danger` | bool | `false` | Destructive setting: the label uses the destructive color. |

The default slot is the control.

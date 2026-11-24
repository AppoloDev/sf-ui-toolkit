# CTA

> Call-to-action section with eyebrow, title, description, actions and optional media: centered, split or inline, in four tones.

## Installation

- badge

## Usage

The component is layout only: actions are the slot, so use your own `Button` components (the examples use plain links so they work anywhere).

```twig
<twig:Cta title="Ready to get started?" description="Create your account in a minute.">
    <twig:Button as="a" href="#">Get started</twig:Button>
</twig:Cta>
```

## Examples

### Centered

```twig
<twig:Cta eyebrow="Free for 14 days" title="Build faster with your whole team" description="Plan, ship and review in one place. No credit card required.">
    <twig:Button as="a" href="#">Start for free</twig:Button>
    <twig:Button as="a" href="#" variant="outline">Book a demo</twig:Button>
</twig:Cta>
```

### Inline

The copy sits on the left and the actions on the right, for a banner at the end of a page.

```twig
<twig:Cta layout="inline" tone="muted" title="Talk to our sales team" description="Custom plans, volume pricing and onboarding for larger teams.">
    <twig:Button as="a" href="#">Contact sales</twig:Button>
    <twig:Button as="a" href="#" variant="outline">View pricing</twig:Button>
</twig:Cta>
```

### Split with media

The `media` block sits beside the copy in the split layout; it is hidden from the layout in the others.

```twig
<twig:Cta layout="split" tone="muted" eyebrow="New" title="Your dashboard, everywhere" description="Take your reports with you on any device.">
    <twig:block name="media">
        <div class="grid aspect-video place-items-center rounded-xl border border-border bg-background text-sm text-muted-foreground">Your image here</div>
    </twig:block>
    <twig:Button as="a" href="#">Download the app</twig:Button>
</twig:Cta>
```

### Tones

`primary` fills the section with the primary color; `dark` is always dark, whatever the theme. Style the actions for the tone you choose.

```twig
<div class="grid gap-4">
    <twig:Cta tone="primary" title="Upgrade to Pro" description="Unlimited projects and priority support.">
        <twig:Button as="a" href="#">See plans</twig:Button>
    </twig:Cta>
    <twig:Cta tone="dark" title="Join the beta" description="Be the first to try what we are building.">
        <twig:Button as="a" href="#">Request access</twig:Button>
    </twig:Cta>
</div>
```

### Custom eyebrow

The `eyebrow` block replaces the label with any element, such as a `Badge` of another variant.

```twig
<twig:Cta title="Your trial ends tomorrow" description="Pick a plan to keep your projects.">
    <twig:block name="eyebrow">
        <twig:Badge variant="destructive">1 day left</twig:Badge>
    </twig:block>
    <twig:Button as="a" href="#">Choose a plan</twig:Button>
</twig:Cta>
```

## Accessibility

- The title is a real heading: `titleTag` (`h2`, `h3` or `h4`) lets it fit the page outline.
- The section keeps normal reading order: eyebrow, title, description, actions, then the media.
- Contrast: the `primary` and `dark` tones set text colors for their own background, and your actions must keep enough contrast on it.

## API

### `<twig:Cta>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `eyebrow` | string | `null` | Small label above the title, styled for the tone. For any other look, use the `eyebrow` block. |
| `title` | string | `null` | Heading. |
| `description` | string | `null` | Supporting text. |
| `layout` | `centered`, `split`, `inline` | `centered` | Centered column, copy beside a media block, or copy left and actions right. |
| `tone` | `default`, `muted`, `primary`, `dark` | `default` | Surface of the section. |
| `titleTag` | string | `h2` | Element of the heading: `h2`, `h3` or `h4`. |

Blocks: the default slot holds the actions; `<twig:block name="media">` holds the visual of the split layout.

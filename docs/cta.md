# CTA

> Call-to-action section with eyebrow, title, description, actions and optional media: centered, split or inline, in four tones.

<!-- kind: block -->

## Usage

The component is layout only: actions are the slot, so use your own `Button` components (the examples use plain links so they work anywhere).

```twig
<twig:Cta title="Ready to get started?" description="Create your account in a minute.">
    <a href="#" class="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground">Get started</a>
</twig:Cta>
```

## Examples

### Centered

```twig
<twig:Cta eyebrow="Free for 14 days" title="Build faster with your whole team" description="Plan, ship and review in one place. No credit card required.">
    <a href="#" class="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground">Start for free</a>
    <a href="#" class="inline-flex h-10 items-center rounded-md border border-border px-5 text-sm font-medium hover:bg-muted">Book a demo</a>
</twig:Cta>
```

### Inline

The copy sits on the left and the actions on the right, for a banner at the end of a page.

```twig
<twig:Cta layout="inline" tone="muted" title="Talk to our sales team" description="Custom plans, volume pricing and onboarding for larger teams.">
    <a href="#" class="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground">Contact sales</a>
    <a href="#" class="inline-flex h-10 items-center rounded-md border border-border bg-background px-5 text-sm font-medium hover:bg-muted">View pricing</a>
</twig:Cta>
```

### Split with media

The `media` block sits beside the copy in the split layout; it is hidden from the layout in the others.

```twig
<twig:Cta layout="split" tone="muted" eyebrow="New" title="Your dashboard, everywhere" description="Take your reports with you on any device.">
    <twig:block name="media">
        <div class="grid aspect-video place-items-center rounded-xl border border-border bg-background text-sm text-muted-foreground">Your image here</div>
    </twig:block>
    <a href="#" class="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground">Download the app</a>
</twig:Cta>
```

### Tones

`primary` fills the section with the primary color; `dark` is always dark, whatever the theme. Style the actions for the tone you choose.

```twig
<div class="grid gap-4">
    <twig:Cta tone="primary" title="Upgrade to Pro" description="Unlimited projects and priority support.">
        <a href="#" class="inline-flex h-10 items-center rounded-md bg-background px-5 text-sm font-medium text-foreground">See plans</a>
    </twig:Cta>
    <twig:Cta tone="dark" title="Join the beta" description="Be the first to try what we are building.">
        <a href="#" class="inline-flex h-10 items-center rounded-md bg-white px-5 text-sm font-medium text-zinc-950">Request access</a>
    </twig:Cta>
</div>
```

## Accessibility

- The title is a real heading: `titleTag` (`h2`, `h3` or `h4`) lets it fit the page outline.
- The section keeps normal reading order: eyebrow, title, description, actions, then the media.
- Contrast: the `primary` and `dark` tones set text colors for their own background, and your actions must keep enough contrast on it.

## API

### `<twig:Cta>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `eyebrow` | string | `null` | Small label above the title. |
| `title` | string | `null` | Heading. |
| `description` | string | `null` | Supporting text. |
| `layout` | `centered`, `split`, `inline` | `centered` | Centered column, copy beside a media block, or copy left and actions right. |
| `tone` | `default`, `muted`, `primary`, `dark` | `default` | Surface of the section. |
| `titleTag` | string | `h2` | Element of the heading: `h2`, `h3` or `h4`. |

Blocks: the default slot holds the actions; `<twig:block name="media">` holds the visual of the split layout.

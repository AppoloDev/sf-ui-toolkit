# Theme Toggle

> Light, dark and system theme: an icon or labeled button that toggles, a three-way switcher, or a bare controller for your own menu. The choice is stored and applied as the `dark` class.

## Installation

- button (only for the examples that use the shadcn button)
- dropdown-menu (only for the custom menu example)
- item (only for the settings row example)

## Usage

Put the toggle anywhere on the page. It reads the stored choice (or `initial`), sets the `dark` class and `color-scheme` on `<html>`, and follows the system when the choice is `system`.

```twig
<twig:ThemeToggle />
```

To avoid a flash of the wrong theme on load, add this to the `<head>`, before the stylesheet:

```html
<script>
    const stored = localStorage.getItem('theme');
    const dark = 'dark' === stored || ('dark' !== stored && 'light' !== stored && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
</script>
```

## Examples

### Icon Outline

One button with the sun and moon icons; it switches between light and dark from the theme that is shown. Style `outline`.

```twig
<twig:ThemeToggle buttonVariant="outline" />
```

### Icon Default

One button with the sun and moon icons; it switches between light and dark from the theme that is shown. Style `default`.

```twig
<twig:ThemeToggle buttonVariant="default" />
```

### Icon Ghost

One button with the sun and moon icons; it switches between light and dark from the theme that is shown. Style `ghost`.

```twig
<twig:ThemeToggle buttonVariant="ghost" />
```

### Icon Secondary

One button with the sun and moon icons; it switches between light and dark from the theme that is shown. Style `secondary`.

```twig
<twig:ThemeToggle buttonVariant="secondary" />
```

### Icon Sizes

```twig
<div class="flex items-center gap-3">
    <twig:ThemeToggle size="sm" />
    <twig:ThemeToggle />
    <twig:ThemeToggle size="lg" />
</div>
```

### Labeled Outline

The button shows the name of the current theme next to the icon. Style `outline`.

```twig
<twig:ThemeToggle variant="labeled" buttonVariant="outline" />
```

### Labeled Default

The button shows the name of the current theme next to the icon. Style `default`.

```twig
<twig:ThemeToggle variant="labeled" buttonVariant="default" />
```

### Labeled Ghost

The button shows the name of the current theme next to the icon. Style `ghost`.

```twig
<twig:ThemeToggle variant="labeled" buttonVariant="ghost" />
```

### Labeled Texts

The names are props, for another language.

```twig
<twig:ThemeToggle variant="labeled" lightLabel="Clair" darkLabel="Sombre" />
```

### Switcher

Light, dark and system side by side. The one that applies has `aria-pressed`. Without a stored choice, `initial` decides: `system` by default.

```twig
<twig:ThemeToggle variant="switcher" />
```

### Switcher Light

Starts on the light theme when nothing is stored.

```twig
<twig:ThemeToggle variant="switcher" initial="light" storageKey="theme-switcher-light" />
```

### Switcher Dark

Starts on the dark theme when nothing is stored.

```twig
<twig:ThemeToggle variant="switcher" initial="dark" storageKey="theme-switcher-dark" />
```

### Switcher Sizes

```twig
<div class="grid justify-items-start gap-3">
    <twig:ThemeToggle variant="switcher" size="sm" />
    <twig:ThemeToggle variant="switcher" />
    <twig:ThemeToggle variant="switcher" size="lg" />
</div>
```

### Switcher In A Settings Row

The switcher in a labeled row of a settings page, with `Item`.

```twig
<twig:Item variant="outline" class="max-w-md">
    <twig:Item:Content>
        <twig:Item:Title>
            Appearance
        </twig:Item:Title>
        <twig:Item:Description>
            Choose how the application looks.
        </twig:Item:Description>
    </twig:Item:Content>
    <twig:Item:Actions>
        <twig:ThemeToggle variant="switcher" size="sm" />
    </twig:Item:Actions>
</twig:Item>
```

### Custom Menu

`variant="custom"` keeps only the controller: the actions `theme-toggle#set` (with a `mode` param) and `theme-toggle#toggle` work on any element, here the items of a dropdown.

<!-- height: 260 -->

```twig
<div style="min-height: 220px">
    <twig:ThemeToggle variant="custom">
        <twig:DropdownMenu id="theme-menu">
            <twig:DropdownMenu:Trigger>
                <twig:Button variant="outline" size="icon" aria-label="Choose a theme" {{ ...dropdown_menu_trigger_attrs }}>
                    <twig:ux:icon name="lucide:sun" class="dark:hidden" />
                    <twig:ux:icon name="lucide:moon" class="hidden dark:block" />
                </twig:Button>
            </twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content class="w-36">
                <twig:DropdownMenu:Item data-action="theme-toggle#set" data-theme-toggle-mode-param="light">
                    <twig:ux:icon name="lucide:sun" />
                    Light
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item data-action="theme-toggle#set" data-theme-toggle-mode-param="dark">
                    <twig:ux:icon name="lucide:moon" />
                    Dark
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item data-action="theme-toggle#set" data-theme-toggle-mode-param="system">
                    <twig:ux:icon name="lucide:monitor" />
                    System
                </twig:DropdownMenu:Item>
            </twig:DropdownMenu:Content>
        </twig:DropdownMenu>
    </twig:ThemeToggle>
</div>
```

### Controlled

`theme-toggle:change` carries the chosen mode and the one that applies. Two switchers on a page stay in step.

```twig
<div class="grid justify-items-start gap-3">
    <twig:ThemeToggle variant="switcher" id="theme-controlled" />
    <p class="text-sm text-muted-foreground">
        Mode: <code id="theme-controlled-mode">…</code>, shown: <code id="theme-controlled-resolved">…</code>
    </p>
</div>
<script>
    document.getElementById('theme-controlled').addEventListener('theme-toggle:change', (event) => {
        document.getElementById('theme-controlled-mode').textContent = event.detail.mode;
        document.getElementById('theme-controlled-resolved').textContent = event.detail.resolved;
    });
</script>
```

### Buttons Of Your Own

The toggle action on a plain element, for a header that has its own style.

```twig
<twig:ThemeToggle variant="custom">
    <twig:Button variant="link" data-action="theme-toggle#toggle">
        Switch to the other theme
    </twig:Button>
</twig:ThemeToggle>
```

## Accessibility

- The icon button has an accessible name (`label`); the labeled button and the switcher show their text.
- The switcher is a group (`switcherLabel`) of buttons with `aria-pressed`: the one that applies is pressed.
- The theme is applied with a class, so the colors still contrast the same way in both themes. With `system`, a change of the system preference is followed without a reload.
- All texts are props: write them in the language of the page.

## Extending

The controller dispatches `theme-toggle:change` on the element each time the theme is applied, with `detail.mode` (`light`, `dark` or `system`) and `detail.resolved` (`light` or `dark`). The choice is stored in the local storage under `storageKey`, and every toggle on the page, in this tab or another, follows it.

## API

### `<twig:ThemeToggle>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `icon`, `labeled`, `switcher`, `custom` | `icon` | One icon button, one labeled button, light, dark and system side by side, or only the controller around your own markup. |
| `buttonVariant` | `outline`, `default`, `secondary`, `ghost` | `outline` | Style of the buttons. |
| `size` | `sm`, `default`, `lg` | `default` | Size of the buttons. |
| `initial` | `light`, `dark`, `system` | `system` | The theme when nothing is stored yet. |
| `storageKey` | string | `theme` | The key of the local storage. |
| `label` | string | `Toggle theme` | The accessible name of the toggle button. |
| `lightLabel` | string | `Light` | The text for the light theme. |
| `darkLabel` | string | `Dark` | The text for the dark theme. |
| `systemLabel` | string | `System` | The text for the system theme. |
| `switcherLabel` | string | `Theme` | The accessible name of the switcher group. |

| Block | Description |
| --- | --- |
| `default` | With `variant="custom"`: your own controls, which use the actions `theme-toggle#set` and `theme-toggle#toggle`. |

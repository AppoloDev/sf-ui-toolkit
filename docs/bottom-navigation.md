# Bottom Navigation

> Icon navigation bar for the bottom of a mobile screen, with four looks: tab bar, floating pill, macOS-style dock with magnification, and limelight highlight.

## Usage

Put `BottomNavigation:Item` elements in a `BottomNavigation`. Mark the entry of the current page with `active`: it gets `aria-current="page"`.

```twig
<twig:BottomNavigation :fixed="true">
    <twig:BottomNavigation:Item href="/" label="Home" icon="lucide:house" :active="true" />
    <twig:BottomNavigation:Item href="/search" label="Search" icon="lucide:search" />
    <twig:BottomNavigation:Item href="/profile" label="Profile" icon="lucide:user" />
</twig:BottomNavigation>
```

## Examples

### Tab Bar

The classic bar: an icon and a text per entry, the current page highlighted. The script of this preview only moves the highlight on click; on a real site the active entry comes from the route.

<!-- height: 140 -->

```twig
<twig:BottomNavigation>
    <twig:BottomNavigation:Item label="Home" icon="lucide:house" :active="true" />
    <twig:BottomNavigation:Item label="Search" icon="lucide:search" />
    <twig:BottomNavigation:Item label="Inbox" icon="lucide:inbox" />
    <twig:BottomNavigation:Item label="Profile" icon="lucide:user" />
</twig:BottomNavigation>
<script>
    document.querySelectorAll('[data-slot=bottom-navigation]').forEach((nav) => nav.addEventListener('click', (event) => {
        const item = event.target.closest('[data-slot=bottom-navigation-item]');
        if (!item) return;
        event.preventDefault();
        nav.querySelectorAll('[data-slot=bottom-navigation-item]').forEach((other) => {
            other.dataset.active = String(other === item);
            other === item ? other.setAttribute('aria-current', 'page') : other.removeAttribute('aria-current');
        });
    }));
</script>
```

### Badges

A short `badge` on the icon, and `badgeLabel` for what a screen reader says after the name.

<!-- height: 140 -->

```twig
<twig:BottomNavigation>
    <twig:BottomNavigation:Item label="Home" icon="lucide:house" :active="true" />
    <twig:BottomNavigation:Item label="Search" icon="lucide:search" />
    <twig:BottomNavigation:Item label="Inbox" icon="lucide:inbox" badge="3" badgeLabel="unread" />
    <twig:BottomNavigation:Item label="Profile" icon="lucide:user" />
</twig:BottomNavigation>
<script>
    document.querySelectorAll('[data-slot=bottom-navigation]').forEach((nav) => nav.addEventListener('click', (event) => {
        const item = event.target.closest('[data-slot=bottom-navigation-item]');
        if (!item) return;
        event.preventDefault();
        nav.querySelectorAll('[data-slot=bottom-navigation-item]').forEach((other) => {
            other.dataset.active = String(other === item);
            other === item ? other.setAttribute('aria-current', 'page') : other.removeAttribute('aria-current');
        });
    }));
</script>
```

### Fixed To The Screen

`fixed` pins the bar to the bottom of the viewport. Remember a bottom padding on the page so that it does not hide the end of the content.

<!-- height: 200 -->

```twig
<div class="p-4 text-sm text-muted-foreground">
    Page content. The bar stays at the bottom of this frame.
</div>
<twig:BottomNavigation :fixed="true">
    <twig:BottomNavigation:Item label="Home" icon="lucide:house" :active="true" />
    <twig:BottomNavigation:Item label="Search" icon="lucide:search" />
    <twig:BottomNavigation:Item label="Inbox" icon="lucide:inbox" badge="3" badgeLabel="unread" />
    <twig:BottomNavigation:Item label="Profile" icon="lucide:user" />
</twig:BottomNavigation>
```

### Floating

A pill that floats above the content; the texts are for screen readers.

<!-- height: 120 -->

```twig
<twig:BottomNavigation variant="floating">
    <twig:BottomNavigation:Item label="Home" icon="lucide:house" :active="true" />
    <twig:BottomNavigation:Item label="Search" icon="lucide:search" />
    <twig:BottomNavigation:Item label="Inbox" icon="lucide:inbox" />
    <twig:BottomNavigation:Item label="Profile" icon="lucide:user" />
</twig:BottomNavigation>
<script>
    document.querySelectorAll('[data-slot=bottom-navigation]').forEach((nav) => nav.addEventListener('click', (event) => {
        const item = event.target.closest('[data-slot=bottom-navigation-item]');
        if (!item) return;
        event.preventDefault();
        nav.querySelectorAll('[data-slot=bottom-navigation-item]').forEach((other) => {
            other.dataset.active = String(other === item);
            other === item ? other.setAttribute('aria-current', 'page') : other.removeAttribute('aria-current');
        });
    }));
</script>
```

### Floating Fixed

The pill centered at the bottom of the screen.

<!-- height: 160 -->

```twig
<twig:BottomNavigation variant="floating" :fixed="true">
    <twig:BottomNavigation:Item label="Home" icon="lucide:house" :active="true" />
    <twig:BottomNavigation:Item label="Search" icon="lucide:search" />
    <twig:BottomNavigation:Item label="Inbox" icon="lucide:inbox" />
    <twig:BottomNavigation:Item label="Profile" icon="lucide:user" />
</twig:BottomNavigation>
```

### Dock

The icon under the pointer grows, and its neighbors a little; the label appears above it. Hover the icons.

<!-- height: 160 -->

```twig
<twig:BottomNavigation variant="dock">
    <twig:BottomNavigation:Item label="Home" icon="lucide:house" :active="true" />
    <twig:BottomNavigation:Item label="Search" icon="lucide:search" />
    <twig:BottomNavigation:Item label="Inbox" icon="lucide:inbox" />
    <twig:BottomNavigation:Item label="Profile" icon="lucide:user" />
</twig:BottomNavigation>
<script>
    document.querySelectorAll('[data-slot=bottom-navigation]').forEach((nav) => nav.addEventListener('click', (event) => {
        const item = event.target.closest('[data-slot=bottom-navigation-item]');
        if (!item) return;
        event.preventDefault();
        nav.querySelectorAll('[data-slot=bottom-navigation-item]').forEach((other) => {
            other.dataset.active = String(other === item);
            other === item ? other.setAttribute('aria-current', 'page') : other.removeAttribute('aria-current');
        });
    }));
</script>
```

### Dock On The Side

`orientation="vertical"` for a dock on the left or right of the screen (PrimeVue positions).

<!-- height: 320 -->

```twig
<twig:BottomNavigation variant="dock" orientation="vertical">
    <twig:BottomNavigation:Item label="Home" icon="lucide:house" :active="true" />
    <twig:BottomNavigation:Item label="Search" icon="lucide:search" />
    <twig:BottomNavigation:Item label="Inbox" icon="lucide:inbox" />
    <twig:BottomNavigation:Item label="Profile" icon="lucide:user" />
</twig:BottomNavigation>
```

### Dock With Many Apps

A longer dock, the kind of launcher a desktop has.

<!-- height: 160 -->

```twig
<twig:BottomNavigation variant="dock">
    <twig:BottomNavigation:Item label="Finder" icon="lucide:folder" />
    <twig:BottomNavigation:Item label="Mail" icon="lucide:mail" badge="2" badgeLabel="unread" />
    <twig:BottomNavigation:Item label="Calendar" icon="lucide:calendar" />
    <twig:BottomNavigation:Item label="Photos" icon="lucide:image" />
    <twig:BottomNavigation:Item label="Music" icon="lucide:music" />
    <twig:BottomNavigation:Item label="Terminal" icon="lucide:terminal" />
    <twig:BottomNavigation:Item label="Settings" icon="lucide:settings" />
</twig:BottomNavigation>
```

### Menu Dock

Only the active entry shows its text, in a highlighted pill.

<!-- height: 120 -->

```twig
<twig:BottomNavigation variant="menu">
    <twig:BottomNavigation:Item label="Home" icon="lucide:house" :active="true" />
    <twig:BottomNavigation:Item label="Search" icon="lucide:search" />
    <twig:BottomNavigation:Item label="Inbox" icon="lucide:inbox" />
    <twig:BottomNavigation:Item label="Profile" icon="lucide:user" />
</twig:BottomNavigation>
<script>
    document.querySelectorAll('[data-slot=bottom-navigation]').forEach((nav) => nav.addEventListener('click', (event) => {
        const item = event.target.closest('[data-slot=bottom-navigation-item]');
        if (!item) return;
        event.preventDefault();
        nav.querySelectorAll('[data-slot=bottom-navigation-item]').forEach((other) => {
            other.dataset.active = String(other === item);
            other === item ? other.setAttribute('aria-current', 'page') : other.removeAttribute('aria-current');
        });
    }));
</script>
```

### Limelight

A dark bar with a light on the active entry.

<!-- height: 120 -->

```twig
<twig:BottomNavigation variant="limelight">
    <twig:BottomNavigation:Item label="Home" icon="lucide:house" :active="true" />
    <twig:BottomNavigation:Item label="Search" icon="lucide:search" />
    <twig:BottomNavigation:Item label="Inbox" icon="lucide:inbox" />
    <twig:BottomNavigation:Item label="Profile" icon="lucide:user" />
</twig:BottomNavigation>
<script>
    document.querySelectorAll('[data-slot=bottom-navigation]').forEach((nav) => nav.addEventListener('click', (event) => {
        const item = event.target.closest('[data-slot=bottom-navigation-item]');
        if (!item) return;
        event.preventDefault();
        nav.querySelectorAll('[data-slot=bottom-navigation-item]').forEach((other) => {
            other.dataset.active = String(other === item);
            other === item ? other.setAttribute('aria-current', 'page') : other.removeAttribute('aria-current');
        });
    }));
</script>
```

### Icons Only

Without visible texts, each entry keeps its name for screen readers (the `floating`, `dock` and `limelight` looks do this).

<!-- height: 120 -->

```twig
<twig:BottomNavigation variant="floating">
    <twig:BottomNavigation:Item label="Home" icon="lucide:house" />
    <twig:BottomNavigation:Item label="Search" icon="lucide:search" />
    <twig:BottomNavigation:Item label="Inbox" icon="lucide:inbox" :active="true" />
    <twig:BottomNavigation:Item label="Profile" icon="lucide:user" />
</twig:BottomNavigation>
<script>
    document.querySelectorAll('[data-slot=bottom-navigation]').forEach((nav) => nav.addEventListener('click', (event) => {
        const item = event.target.closest('[data-slot=bottom-navigation-item]');
        if (!item) return;
        event.preventDefault();
        nav.querySelectorAll('[data-slot=bottom-navigation-item]').forEach((other) => {
            other.dataset.active = String(other === item);
            other === item ? other.setAttribute('aria-current', 'page') : other.removeAttribute('aria-current');
        });
    }));
</script>
```

### In A Phone Frame

The bar at the bottom of a screen mock, with the content above it.

<!-- height: 320 -->

```twig
<div class="mx-auto flex h-72 w-64 flex-col overflow-hidden rounded-[2rem] border-4 border-foreground/80 bg-background">
    <div class="flex-1 p-4 text-sm">
        <p class="font-semibold">
            Inbox
        </p>
        <p class="text-muted-foreground">
            3 unread messages.
        </p>
    </div>
    <twig:BottomNavigation>
        <twig:BottomNavigation:Item label="Home" icon="lucide:house" />
        <twig:BottomNavigation:Item label="Inbox" icon="lucide:inbox" :active="true" badge="3" badgeLabel="unread" />
        <twig:BottomNavigation:Item label="Profile" icon="lucide:user" />
    </twig:BottomNavigation>
</div>
```

## Accessibility

- The bar is a `nav` with an accessible name (`label`). Each entry is a link whose accessible name is its `label` (plus the badge and its `badgeLabel`), even when the text is not shown.
- The current page has `aria-current="page"`: set it from the route, not from the clicks.
- The dock tooltip text is also the accessible name, and is shown on hover and on keyboard focus.
- The magnification of the dock and the transitions are plain CSS; with `prefers-reduced-motion` you can remove them with `motion-reduce:` classes on the items.

## API

### `<twig:BottomNavigation>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `bar`, `floating`, `dock`, `menu`, `limelight` | `bar` | Full width tab bar, floating pill, magnifying dock, active entry with text, or a light on the active entry. |
| `orientation` | `horizontal`, `vertical` | `horizontal` | A vertical bar is a dock on the side of the screen. |
| `fixed` | bool | `false` | Fix the bar to the bottom of the screen (to the left when vertical). |
| `label` | string | `Main navigation` | The accessible name of the navigation. |

| Block | Description |
| --- | --- |
| `default` | `BottomNavigation:Item` elements. |

### `<twig:BottomNavigation:Item>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | string | `#` | The link. |
| `label` | string | | The text of the entry, always its accessible name. |
| `icon` | string | | The Symfony UX Icons name, such as `lucide:house`. |
| `active` | bool | `false` | The current page: `aria-current="page"` and the highlight. |
| `badge` | string or null | `null` | A short text on the icon, such as a count. |
| `badgeLabel` | string or null | `null` | Spoken after the label when there is a badge, such as `unread`. |

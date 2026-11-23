# Appolo UI

Twig components for [Symfony UX Toolkit](https://symfony.com/bundles/ux-toolkit/current/index.html) that complement the official `shadcn` kit: what it does not provide.

Documentation and live previews: https://appolodev.github.io/sf-ui-toolkit/

## Installation

Install the Symfony UX Toolkit, then add a component from this kit:

```bash
composer require --dev symfony/ux-toolkit
php bin/console ux:install rating --kit=github.com/AppoloDev/sf-ui-toolkit
```

Replace `rating` with the component you want. The command copies its Twig templates (and Stimulus controller, if any) into your project.

Components that display icons use [Symfony UX Icons](https://symfony.com/bundles/ux-icons/current/index.html) with the [Lucide](https://lucide.dev) set; `ux:install` prints the `composer require symfony/ux-icons` command to run, and you can import the icons locally with `php bin/console ux:icons:import lucide:star`.

## Translations

Components ship with English texts and no translation files. Every visible or spoken text is a prop (`addLabel`, `clearLabel`, ...) that you can translate where you use the component:

```twig
<twig:Filters :fields="fields" addLabel="{{ 'filters.add'|trans }}" clearLabel="{{ 'filters.clear'|trans }}" />
```

The props of each component are listed in its documentation.

## Components

| Component | Description | Docs |
|---|---|---|
| `color-picker` | Color field with a popover: saturation/brightness area, hue and opacity sliders, typed CSS colors, swatches and eye dropper. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/color-picker.html) |
| `file-type` | File icon with a colored extension label for documents, spreadsheets, images, archives and code, in four variants and six sizes. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/file-type.html) |
| `filters` | Schema-driven filter bar: chips with operator and value editors, add and clear, state carried in the URL query. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/filters.html) |
| `icon-tile` | Square or circular tile giving an icon a fixed size, radius and surface: outline, elevated or frame. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/icon-tile.html) |
| `number-field` | Numeric input with decrement and increment buttons, keyboard steps, press-and-hold repeat and min/max clamping. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/number-field.html) |
| `phone-input` | International phone field with a searchable country selector and an E.164 value. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/phone-input.html) |
| `rating` | Star rating: read-only display (partial stars) or input with radio buttons, half stars and hover preview. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/rating.html) |
| `sortable` | Reorderable list or grid: drag and drop on a handle, full keyboard reordering, and the order submitted with the form. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/sortable.html) |
| `stepper` | Multi-step navigation with indicators, states, vertical layout, panels and cancelable step changes (per-step validation). | [Documentation](https://appolodev.github.io/sf-ui-toolkit/stepper.html) |
| `time-picker` | Typed time field with a popover of scrollable columns (hours, minutes, seconds, AM/PM), steps, min/max and 12/24h display. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/time-picker.html) |
| `timeline` | Chronological list of events (activity feed, milestones, roadmap), vertical or horizontal, with completed and active states. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/timeline.html) |
| `tree` | Expandable hierarchy with WAI-ARIA tree keyboard navigation (arrows, Home/End, typeahead), selection and optional guide lines. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/tree.html) |

## License

MIT

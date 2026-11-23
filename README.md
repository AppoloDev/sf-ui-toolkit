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

## Components

| Component | Description | Docs |
|---|---|---|
| `file-type` | File icon with a colored extension label for documents, spreadsheets, images, archives and code, in four variants and six sizes. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/file-type.html) |
| `icon-tile` | Square or circular tile giving an icon a fixed size, radius and surface: outline, elevated or frame. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/icon-tile.html) |
| `number-field` | Numeric input with decrement and increment buttons, keyboard steps, press-and-hold repeat and min/max clamping. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/number-field.html) |
| `rating` | Star rating: read-only display (partial stars) or input with radio buttons, half stars and hover preview. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/rating.html) |
| `stepper` | Multi-step navigation with indicators, states, vertical layout, panels and cancelable step changes (per-step validation). | [Documentation](https://appolodev.github.io/sf-ui-toolkit/stepper.html) |
| `time-picker` | Typed time field with a popover of scrollable columns (hours, minutes, seconds, AM/PM), steps, min/max and 12/24h display. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/time-picker.html) |
| `timeline` | Chronological list of events (activity feed, milestones, roadmap), vertical or horizontal, with completed and active states. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/timeline.html) |

## License

MIT

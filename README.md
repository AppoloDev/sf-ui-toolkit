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

## Requirements

Some components are built on components of the official `shadcn` kit rather than reimplementing them (a popover panel, a button...). A recipe cannot depend on another kit, so the Installation section of their documentation page lists the shadcn components to install first, for example:

```bash
php bin/console ux:install popover button --kit=shadcn
php bin/console ux:install cascader --kit=github.com/AppoloDev/sf-ui-toolkit
```

## Translations

Components ship with English texts and no translation files. Every visible or spoken text is a prop (`addLabel`, `clearLabel`, ...) that you can translate where you use the component:

```twig
<twig:Filters :fields="fields" addLabel="{{ 'filters.add'|trans }}" clearLabel="{{ 'filters.clear'|trans }}" />
```

The props of each component are listed in its documentation.

## Components

| Component | Description | Docs |
|---|---|---|
| `alert` | The shadcn Alert with info, success, warning and invert variants, in solid or light appearance. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/alert.html) |
| `badge` | The shadcn Badge with success, info and warning colors, solid, outline and light appearances, sizes and radius. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/badge.html) |
| `bottom-navigation` | Icon navigation bar for the bottom of a mobile screen, with four looks: tab bar, floating pill, macOS-style dock with magnification, and limelight highlight. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/bottom-navigation.html) |
| `button-feedback` | A button that shows a pending, a done and a failed state around an action: copying a text, or waiting for a request. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/button-feedback.html) |
| `cascader` | Pick a value in a hierarchy through columns or one level at a time, with search, single or multiple choice. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/cascader.html) |
| `char-counter` | Shows how many characters an input or a textarea holds, against an optional limit, with a warning near the limit and a spoken update. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/char-counter.html) |
| `checkbox-tree` | Checkboxes arranged in a tree: a parent checkbox checks and unchecks its children, and shows a mixed state when only some of them are checked. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/checkbox-tree.html) |
| `clearable` | Wraps a field (input, textarea or Select) and shows a clear button while it holds a value; clearing empties the field, fires input and change and refocuses it. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/clearable.html) |
| `code-highlight` | Server-side syntax highlighting for code blocks: a Twig filter and a component with a language prop, no JavaScript in the browser. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/code-highlight.html) |
| `color-picker` | Color field with a popover: saturation/brightness area, hue and opacity sliders, typed CSS colors, swatches and eye dropper. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/color-picker.html) |
| `confirm-popup` | A confirmation popup anchored to the button that asks for it: a message, an accept and a reject button, events for both, and the option to submit a form on accept. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/confirm-popup.html) |
| `emoji-picker` | Searchable emoji grid in a popover or inline, with categories, skin tones and recents. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/emoji-picker.html) |
| `file-type` | File icon with a colored extension label for documents, spreadsheets, images, archives and code, in four variants and six sizes. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/file-type.html) |
| `filters` | Schema-driven filter bar: chips with operator and value editors, add and clear, state carried in the URL query. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/filters.html) |
| `float-label` | Label that sits inside a field and floats to the top on focus or when the field has a value, in four styles: over, in, on and ifta. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/float-label.html) |
| `frame` | Bounded container that groups page regions into bordered panels: settings pages, dashboard sections, status lists. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/frame.html) |
| `icon-stack` | Layered isometric tile that holds an icon, for empty states and feature highlights. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/icon-stack.html) |
| `icon-tile` | Square or circular tile giving an icon a fixed size, radius and surface: outline, elevated or frame. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/icon-tile.html) |
| `inline-edit` | A text that turns into an input when clicked, and back to a text when saved or cancelled. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/inline-edit.html) |
| `input-mask` | Wraps an input to force a format as the user types (phone, date, serial number, with optional parts), or to filter the characters it accepts (digits, letters, hexadecimal, a custom pattern). | [Documentation](https://appolodev.github.io/sf-ui-toolkit/input-mask.html) |
| `kanban` | Board of columns with draggable cards, moved by pointer or keyboard, with the board carried by the form. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/kanban.html) |
| `number-field` | Numeric input with decrement and increment buttons, keyboard steps, press-and-hold repeat and min/max clamping. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/number-field.html) |
| `password-strength` | A strength meter for the password typed in a field, with an optional list of the requirements it meets. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/password-strength.html) |
| `password-toggle` | A button that shows or hides the password typed in an input, for use in an input group or next to any field. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/password-toggle.html) |
| `phone-input` | International phone field with a searchable country selector and an E.164 value. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/phone-input.html) |
| `rating` | Star rating: read-only display (partial stars) or input with radio buttons, half stars and hover preview. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/rating.html) |
| `relative-time` | A date shown as a relative time such as "3 minutes ago", kept up to date while the page stays open. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/relative-time.html) |
| `rich-text-editor` | Rich text field built on TipTap with a configurable toolbar, links and an HTML value for the form. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/rich-text-editor.html) |
| `scrollspy` | Table-of-contents navigation that highlights the section currently in view. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/scrollspy.html) |
| `signature-pad` | Handwritten signature captured with a mouse, a finger or a stylus, exported as PNG, JPEG, SVG or JSON. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/signature-pad.html) |
| `skip-nav` | Skip links for keyboard and screen reader users: hidden until focused, they jump over the navigation to the main content. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/skip-nav.html) |
| `sonner-html` | A Sonner whose toasts can hold any markup, and that can follow a request from a loading toast to its result. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/sonner-html.html) |
| `sortable` | Reorderable list or grid: drag and drop on a handle, full keyboard reordering, and the order submitted with the form. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/sortable.html) |
| `spinner` | The shadcn Spinner with an icon prop to swap the spinning icon. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/spinner.html) |
| `step-tour` | Content in steps, shown one at a time with a counter, dots and previous and next buttons: a guided tour, release notes, a short onboarding. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/step-tour.html) |
| `stepper` | Multi-step navigation with indicators, states, vertical layout, panels and cancelable step changes (per-step validation). | [Documentation](https://appolodev.github.io/sf-ui-toolkit/stepper.html) |
| `table` | Rows that expand to show a detail panel under them, for the Table component of the shadcn kit. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/table.html) |
| `theme-toggle` | Light, dark and system theme: an icon or labeled button that toggles, a three-way switcher, or a bare controller for your own menu. The choice is stored and applied as the dark class. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/theme-toggle.html) |
| `time-picker` | Typed time field with a popover of scrollable columns (hours, minutes, seconds, AM/PM), steps, min/max and 12/24h display. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/time-picker.html) |
| `timeline` | Chronological list of events (activity feed, milestones, roadmap), vertical or horizontal, with completed and active states. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/timeline.html) |
| `toolbar` | A bar of actions with start, center and end areas and arrow-key navigation (Toolbar), and a floating bar that appears with the number of selected rows and their actions (ActionBar). | [Documentation](https://appolodev.github.io/sf-ui-toolkit/toolbar.html) |
| `tree` | Expandable hierarchy with WAI-ARIA tree keyboard navigation (arrows, Home/End, typeahead), selection and optional guide lines. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/tree.html) |
| `value-sync` | Mirrors the value of a slider or a field into texts, an emoji, a progress bar, a bubble that follows the thumb and a number field, while it changes; buttons can step, set or reset it. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/value-sync.html) |

## Blocks

Page sections built from a few props and slots. They are installed like any component.

| Block | Description | Docs |
|---|---|---|
| `activity-feed` | Activity feed grouped by day: actor avatar or icon, action text, time, description, attachments and a slot for a load-more button. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/activity-feed.html) |
| `app-shell` | Application layout: optional icon rail, collapsible navigation panel, header and content, with a mobile drawer. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/app-shell.html) |
| `cta` | Call-to-action section with eyebrow, title, description, actions and optional media: centered, split or inline, in four tones. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/cta.html) |
| `faq` | Frequently asked questions as a native accordion: single or split layout, multiple or exclusive answers, optional FAQPage structured data. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/faq.html) |
| `navbar` | Application bar with start, center and end areas, an optional row of tabs, sticky and bordered options, and link items with active state. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/navbar.html) |
| `onboarding` | Setup flow shell: step counter, progress bar or dot indicator, title, description, content and footer actions, server-driven or interactive. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/onboarding.html) |
| `pricing` | Pricing plan cards in a responsive grid: price, period, included and excluded features, badge, highlighted plan and a call-to-action slot. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/pricing.html) |
| `settings` | Settings page layout: optional side navigation, titled sections and rows with label, description, badge and one control. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/settings.html) |
| `stats` | KPI cards in a responsive grid: label, value, trend badge, comparison line, optional icon and progress meter. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/stats.html) |

## License

MIT

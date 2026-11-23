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
| `rating` | Star rating: read-only display (partial stars) or input with radio buttons, half stars and hover preview. | [Documentation](https://appolodev.github.io/sf-ui-toolkit/rating.html) |

## License

MIT

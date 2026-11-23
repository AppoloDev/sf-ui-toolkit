# sf-ui-toolkit : consignes

## Commits et pull requests

- Aucune mention de Claude ou d'Anthropic dans les commits ni dans les pull requests : pas de ligne `Co-Authored-By`, pas de `Claude-Session`, pas de « Generated with ».
- Auteur des commits : l'identité Git configurée par le propriétaire du repo ; ne jamais en inventer une au nom de Claude.
- Messages de commit en français, à l'impératif ou au présent, courts.

## Structure du kit

- `manifest.json` à la racine : le kit. Chaque recette a son dossier `<recette>/manifest.json` + `<recette>/templates/components/…`.
- Format des manifests de recette : `type`, `name`, `description`, `copy-files` (`"templates/": "templates/"`), `dependencies.composer` (liste de `paquet` ou `paquet:contrainte`).
- Chaque recette a sa documentation dans `docs/<recette>.md` : un `# Titre`, puis des sections `## Exemple` contenant un bloc ```twig, rendu pour de vrai par `docs-site`.

## Documentation

- `docs-site/` est une petite app Symfony ; `php bin/console app:build-docs` génère `dist/` (publié sur GitHub Pages par `.github/workflows/docs.yml`).
- Les composants du kit sont résolus comme après un `ux:install` : chaque `<recette>/templates` est ajouté aux chemins Twig (`docs-site/config/packages/twig.php`).

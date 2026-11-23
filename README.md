# sf-ui-toolkit

Kit [Symfony UX Toolkit](https://symfony.com/bundles/ux-toolkit/current/index.html) de composants Twig qui n'existent pas dans le kit officiel `shadcn`.

## Installation d'une recette

```bash
php bin/console ux:install rating --kit=github.com/AppoloDev/sf-ui-toolkit
```

## Structure

```
manifest.json            # le kit
<recette>/manifest.json  # une recette (copy-files, dépendances)
<recette>/templates/…    # les fichiers copiés dans le projet
docs/<recette>.md        # exemples de la documentation (blocs ```twig)
docs-site/               # petite app Symfony qui rend la doc en HTML statique
```

## Documentation (GitHub Pages)

Le workflow `.github/workflows/docs.yml` installe `docs-site`, exécute `php bin/console app:build-docs`
(chaque bloc ```twig de `docs/*.md` est réellement rendu avec les composants du kit) puis publie `dist/`.

À faire une fois sur GitHub : *Settings → Pages → Source : GitHub Actions*.

En local : `cd docs-site && composer install && php bin/console app:build-docs`, puis ouvrir `dist/index.html`.

## Ajouter une recette

1. `<recette>/manifest.json` + `<recette>/templates/components/<Nom>.html.twig`
2. `docs/<recette>.md` : un `# Titre`, puis des sections `## Exemple` contenant un bloc ```twig

## Limites connues (squelette)

- Tailwind est chargé par CDN dans la doc ; à remplacer par un build local.
- `Rating` n'utilise pas `tailwind_merge` (le kit officiel le fait) : une classe passée en attribut s'ajoute sans résoudre les conflits.
- Squelette non exécuté localement avant livraison : la première vraie vérification est la CI GitHub.

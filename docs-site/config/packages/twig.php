<?php

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

// Chaque recette du kit (<recette>/templates) est ajoutée comme chemin Twig racine :
// `components/Rating.html.twig` est ainsi résolu exactement comme après un `ux:install`.
return static function (ContainerConfigurator $container): void {
    $paths = [];
    foreach (glob(dirname(__DIR__, 3).'/*/templates', GLOB_ONLYDIR) ?: [] as $directory) {
        if (str_ends_with($directory, '/docs-site/templates')) {
            continue;
        }
        $paths[] = $directory;
    }

    $container->extension('twig', [
        'default_path' => '%kernel.project_dir%/templates',
        'paths' => $paths,
    ]);
};

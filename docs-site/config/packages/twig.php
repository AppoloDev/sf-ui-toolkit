<?php

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

// Each recipe of the kit (<recipe>/templates) is added as a root Twig path:
// `components/Rating.html.twig` is thus resolved exactly as after a `ux:install`.
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

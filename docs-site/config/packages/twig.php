<?php

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

// Each recipe of the kit (<recipe>/templates) is added as a root Twig path:
// `components/Rating.html.twig` is thus resolved exactly as after a `ux:install`.
// The recipes of the official shadcn kit (fetched by bin/fetch-shadcn-kit.sh) are added after them, so the
// examples can use <twig:Button>, <twig:Input>... as an application that installed that kit would.
return static function (ContainerConfigurator $container): void {
    $paths = [];
    foreach (glob(dirname(__DIR__, 3).'/*/templates', GLOB_ONLYDIR) ?: [] as $directory) {
        if (str_ends_with($directory, '/docs-site/templates')) {
            continue;
        }
        $paths[] = $directory;
    }
    foreach (glob(dirname(__DIR__, 2).'/var/ux/src/Toolkit/kits/shadcn/*/templates', GLOB_ONLYDIR) ?: [] as $directory) {
        $paths[] = $directory;
    }

    $container->extension('twig', [
        'default_path' => '%kernel.project_dir%/templates',
        'paths' => $paths,
    ]);
};

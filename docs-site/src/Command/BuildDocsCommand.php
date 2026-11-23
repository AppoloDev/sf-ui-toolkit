<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Twig\Environment;

/**
 * Génère le site de documentation statique.
 *
 * Pour chaque docs/<recette>.md : une page <recette>.html, et une page d'aperçu par exemple
 * (preview/<recette>-<n>.html) affichée dans une iframe, ce qui rend le contrôle de largeur
 * responsive fidèle (les media queries s'appliquent à la largeur de l'iframe).
 */
#[AsCommand(name: 'app:build-docs', description: 'Génère le site de documentation statique dans dist/')]
final class BuildDocsCommand extends Command
{
    public function __construct(
        private readonly Environment $twig,
        #[Autowire('%kernel.project_dir%')]
        private readonly string $projectDir,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addOption('output', 'o', InputOption::VALUE_REQUIRED, 'Dossier de sortie', null);
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $root = dirname($this->projectDir);
        $outDir = $input->getOption('output') ?? $root.'/dist';
        foreach ([$outDir, $outDir.'/preview', $outDir.'/controllers'] as $directory) {
            if (!is_dir($directory) && !mkdir($directory, 0777, true) && !is_dir($directory)) {
                $output->writeln(sprintf('<error>Impossible de créer %s</error>', $directory));

                return Command::FAILURE;
            }
        }

        $kit = json_decode((string) file_get_contents($root.'/manifest.json'), true) ?: [];

        $pages = [];
        foreach (glob($root.'/docs/*.md') ?: [] as $file) {
            $slug = basename($file, '.md');
            $page = $this->parse((string) file_get_contents($file));
            $page['slug'] = $slug;
            $page['install'] = $this->install($root, $slug);
            $pages[$slug] = $page;
        }
        ksort($pages);

        $this->buildControllers($root, $outDir);
        copy($this->projectDir.'/assets/docs.js', $outDir.'/docs.js');

        foreach ($pages as $page) {
            foreach ($page['examples'] as $index => &$example) {
                $example['html'] = $this->twig->createTemplate($example['code'])->render();
                $example['preview'] = sprintf('preview/%s-%d.html', $page['slug'], $index + 1);
                file_put_contents(
                    $outDir.'/'.$example['preview'],
                    $this->twig->render('docs/preview.html.twig', ['html' => $example['html']]),
                );
            }
            unset($example);

            file_put_contents(
                sprintf('%s/%s.html', $outDir, $page['slug']),
                $this->twig->render('docs/page.html.twig', ['page' => $page, 'pages' => $pages, 'kit' => $kit]),
            );
            $output->writeln(sprintf('  <info>%s.html</info> (%d exemples)', $page['slug'], count($page['examples'])));
        }

        file_put_contents($outDir.'/index.html', $this->twig->render('docs/index.html.twig', ['pages' => $pages, 'kit' => $kit]));
        file_put_contents($outDir.'/components.html', $this->twig->render('docs/components.html.twig', ['pages' => $pages, 'kit' => $kit]));
        $output->writeln(sprintf('<info>%d composants documentés dans %s</info>', count($pages), $outDir));

        return Command::SUCCESS;
    }

    /**
     * Copie les contrôleurs Stimulus des recettes et génère controllers.js qui les enregistre.
     */
    private function buildControllers(string $root, string $outDir): void
    {
        $imports = [];
        $registrations = [];
        foreach (glob($root.'/*/assets/controllers/*_controller.js') ?: [] as $file) {
            $base = basename($file);
            $name = str_replace('_', '-', substr($base, 0, -strlen('_controller.js')));
            copy($file, $outDir.'/controllers/'.$base);
            $variable = 'controller'.count($imports);
            $imports[] = sprintf("import %s from './controllers/%s';", $variable, $base);
            $registrations[] = sprintf("application.register('%s', %s);", $name, $variable);
        }

        file_put_contents(
            $outDir.'/controllers.js',
            "import { Application } from '@hotwired/stimulus';\n".implode("\n", $imports)."\n\nconst application = Application.start();\n".implode("\n", $registrations)."\n",
        );
    }

    /**
     * @return array{command: string, composer: list<string>, files: list<string>}
     */
    private function install(string $root, string $slug): array
    {
        $manifestFile = $root.'/'.$slug.'/manifest.json';
        $manifest = is_file($manifestFile) ? (json_decode((string) file_get_contents($manifestFile), true) ?: []) : [];

        $files = [];
        $directory = $root.'/'.$slug;
        if (is_dir($directory)) {
            $iterator = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($directory, \FilesystemIterator::SKIP_DOTS));
            foreach ($iterator as $file) {
                $relative = substr($file->getPathname(), strlen($directory) + 1);
                if ('manifest.json' !== $relative) {
                    $files[] = $relative;
                }
            }
            sort($files);
        }

        return [
            'command' => sprintf('php bin/console ux:install %s --kit=github.com/AppoloDev/sf-ui-toolkit', $slug),
            'description' => $manifest['description'] ?? '',
            'composer' => $manifest['dependencies']['composer'] ?? [],
            'files' => $files,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function parse(string $markdown): array
    {
        $page = ['title' => 'Sans titre', 'description' => '', 'usage' => null, 'examples' => [], 'accessibility' => [], 'api' => []];

        $tokens = preg_split('/^(#{1,3}) +(.+)$/m', $markdown, -1, PREG_SPLIT_DELIM_CAPTURE) ?: [];
        $part = null;
        for ($i = 1; $i + 2 < count($tokens) + 1; $i += 3) {
            $level = strlen($tokens[$i]);
            $heading = trim($tokens[$i + 1] ?? '');
            $body = $tokens[$i + 2] ?? '';

            if (1 === $level) {
                $page['title'] = $heading;
                preg_match_all('/^> ?(.*)$/m', $body, $quote);
                $page['description'] = trim(implode(' ', $quote[1]));
                continue;
            }

            if (2 === $level) {
                $part = mb_strtolower($heading);
                if ('utilisation' === $part) {
                    $page['usage'] = $this->block($body);
                } elseif ('accessibilité' === $part) {
                    preg_match_all('/^- (.+)$/m', $body, $items);
                    $page['accessibility'] = array_map($this->inline(...), $items[1]);
                }
                continue;
            }

            if ('exemples' === $part) {
                $block = $this->block($body);
                if (null !== $block['code']) {
                    $page['examples'][] = ['title' => $heading, 'description' => $block['text'], 'code' => $block['code']];
                }
            } elseif ('api' === $part) {
                $props = [];
                foreach (preg_split('/\R/', $body) ?: [] as $line) {
                    if (!str_starts_with(trim($line), '|') || preg_match('/^\|[\s:|-]+\|?$/', trim($line))) {
                        continue;
                    }
                    $cells = array_map('trim', explode('|', trim(trim($line), '|')));
                    if ('Prop' === $cells[0]) {
                        continue;
                    }
                    $props[] = ['name' => $cells[0] ?? '', 'type' => $cells[1] ?? '', 'default' => $cells[2] ?? '', 'description' => $this->inline($cells[3] ?? '')];
                }
                $page['api'][] = ['title' => trim($heading, '`'), 'props' => $props];
            }
        }

        $page['description_html'] = $this->inline($page['description']);

        return $page;
    }

    /**
     * @return array{text: string, code: string|null}
     */
    private function block(string $body): array
    {
        $code = preg_match('/```twig\n(.*?)```/s', $body, $match) ? rtrim($match[1]) : null;
        $text = trim((string) preg_replace('/```twig\n.*?```/s', '', $body));

        return ['text' => $this->inline($text), 'code' => $code];
    }

    /**
     * Échappe le texte et transforme `code` en <code>. Le résultat est destiné à |raw.
     */
    private function inline(string $text): string
    {
        $escaped = htmlspecialchars($text, \ENT_QUOTES | \ENT_SUBSTITUTE, 'UTF-8');

        return (string) preg_replace('/`([^`]+)`/', '<code class="rounded bg-muted px-1 py-0.5 text-[0.85em]">$1</code>', $escaped);
    }
}

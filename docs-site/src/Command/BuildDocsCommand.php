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
 * Builds the static documentation site.
 *
 * For each docs/<recipe>.md: a <recipe>.html page, plus one preview page per example
 * (preview/<recipe>-<n>.html) shown in an iframe, which makes the responsive width control
 * faithful (media queries apply to the iframe width).
 */
#[AsCommand(name: 'app:build-docs', description: 'Builds the static documentation site into dist/')]
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
        $this->addOption('output', 'o', InputOption::VALUE_REQUIRED, 'Output directory', null);
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $root = dirname($this->projectDir);
        $outDir = $input->getOption('output') ?? $root.'/dist';
        foreach ([$outDir, $outDir.'/preview', $outDir.'/controllers'] as $directory) {
            if (!is_dir($directory) && !mkdir($directory, 0777, true) && !is_dir($directory)) {
                $output->writeln(sprintf('<error>Cannot create %s</error>', $directory));

                return Command::FAILURE;
            }
        }

        $kit = json_decode((string) file_get_contents($root.'/manifest.json'), true) ?: [];

        $kitCss = $this->projectDir.'/var/ux/src/Toolkit/kits/shadcn/kit.css';
        if (!is_file($kitCss)) {
            $output->writeln('<error>The shadcn kit is missing: run bin/fetch-shadcn-kit.sh first.</error>');

            return Command::FAILURE;
        }
        $this->twig->addGlobal('kit_css', (string) file_get_contents($kitCss));

        $pages = [];
        foreach (glob($root.'/docs/*.md') ?: [] as $file) {
            $slug = basename($file, '.md');
            $page = $this->parse((string) file_get_contents($file));
            $page['slug'] = $slug;
            $recipe = json_decode((string) @file_get_contents($root.'/'.$slug.'/manifest.json'), true) ?: [];
            $page['kind'] = 'block' === ($recipe['type'] ?? null) ? 'block' : 'component';
            $page['install'] = $this->install($root, $slug);
            $pages[$slug] = $page;
        }
        ksort($pages);

        $this->buildControllers($root, $outDir);
        $imports = $this->importMap($pages);
        copy($this->projectDir.'/assets/docs.js', $outDir.'/docs.js');

        foreach ($pages as $page) {
            foreach ($page['examples'] as $index => &$example) {
                $example['html'] = $this->twig->createTemplate($example['code'])->render();
                $example['preview'] = sprintf('preview/%s-%d.html', $page['slug'], $index + 1);
                file_put_contents(
                    $outDir.'/'.$example['preview'],
                    $this->twig->render('docs/preview.html.twig', ['html' => $example['html'], 'imports' => $imports]),
                );
            }
            unset($example);

            file_put_contents(
                sprintf('%s/%s.html', $outDir, $page['slug']),
                $this->twig->render('docs/page.html.twig', ['page' => $page, 'pages' => $pages, 'kit' => $kit]),
            );
            $output->writeln(sprintf('  <info>%s.html</info> (%d examples)', $page['slug'], count($page['examples'])));
        }

        file_put_contents($outDir.'/index.html', $this->twig->render('docs/index.html.twig', ['pages' => $pages, 'kit' => $kit]));
        file_put_contents($outDir.'/components.html', $this->twig->render('docs/components.html.twig', ['pages' => $pages, 'kit' => $kit]));
        file_put_contents($outDir.'/blocks.html', $this->twig->render('docs/blocks.html.twig', ['pages' => $pages, 'kit' => $kit]));
        $output->writeln(sprintf('<info>%d components documented in %s</info>', count($pages), $outDir));

        return Command::SUCCESS;
    }

    /**
     * Copies the recipes' Stimulus controllers and generates controllers.js, which registers them.
     */
    private function buildControllers(string $root, string $outDir): void
    {
        $imports = [];
        $registrations = [];
        // The shadcn kit controllers (popover, ...) are registered too, as in an app that installed them; the ones
        // importing a package the previews do not load (carousel) are left out.
        $files = array_merge(
            glob($root.'/*/assets/controllers/*_controller.js') ?: [],
            array_filter(
                glob($this->projectDir.'/var/ux/src/Toolkit/kits/shadcn/*/assets/controllers/*_controller.js') ?: [],
                static fn (string $file): bool => 1 === preg_match_all('/^import .* from /m', (string) file_get_contents($file)),
            ),
        );
        foreach ($files as $file) {
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
     * Import map of the previews: the JavaScript packages that recipes declare in `dependencies.npm`
     * ("name@version") are loaded from esm.sh, and only when a controller actually imports them.
     *
     * @param array<string, array<string, mixed>> $pages
     *
     * @return array<string, string>
     */
    private function importMap(array $pages): array
    {
        $imports = ['@hotwired/stimulus' => 'https://esm.sh/@hotwired/stimulus@3.2.2'];
        foreach ($pages as $page) {
            foreach ($page['install']['npm'] as $package) {
                $at = strrpos($package, '@');
                $name = false === $at || 0 === $at ? $package : substr($package, 0, $at);
                $imports[$name] = 'https://esm.sh/'.$package;
            }
        }

        return $imports;
    }

    /**
     * @return array{command: string, composer: list<string>, npm: list<string>, files: list<string>}
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
            'npm' => $manifest['dependencies']['npm'] ?? [],
            'files' => $files,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function parse(string $markdown): array
    {
        $page = ['title' => 'Untitled', 'kind' => 'component', 'description' => '', 'usage' => null, 'examples' => [], 'extending' => [], 'shadcn' => [], 'accessibility' => [], 'api' => []];

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
                if ('usage' === $part) {
                    $page['usage'] = $this->block($body);
                } elseif ('extending' === $part) {
                    $page['extending'][] = ['title' => null] + $this->section($body);
                } elseif ('installation' === $part) {
                    preg_match_all('/^- `?([\w-]+)`?\s*$/m', $body, $recipes);
                    $page['shadcn'] = $recipes[1];
                } elseif ('accessibility' === $part) {
                    preg_match_all('/^- (.+)$/m', $body, $items);
                    $page['accessibility'] = array_map($this->inline(...), $items[1]);
                }
                continue;
            }

            if ('extending' === $part) {
                $page['extending'][] = ['title' => $heading] + $this->section($body);
            } elseif ('examples' === $part) {
                $minHeight = preg_match('/<!--\s*height:\s*(\d+)\s*-->/', $body, $height) ? (int) $height[1] : 0;
                $block = $this->block((string) preg_replace('/<!--.*?-->/s', '', $body));
                if (null !== $block['code']) {
                    $page['examples'][] = ['title' => $heading, 'description' => $block['text'], 'code' => $block['code'], 'min_height' => $minHeight];
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
     * Paragraphs and fenced code blocks (any language) of a free-form section. A fence info string such as
     * "js Vanilla" labels the block: consecutive labeled blocks are grouped into tabs, one tab per label.
     *
     * @return array{paragraphs: list<string>, items: list<array<string, mixed>>}
     */
    private function section(string $body): array
    {
        preg_match_all('/```(\w*)[ \t]*([^\n]*)\n(.*?)```/s', $body, $fences, PREG_SET_ORDER);
        $text = trim((string) preg_replace('/```\w*[^\n]*\n.*?```/s', '', $body));

        $items = [];
        foreach ($fences as $fence) {
            $block = ['lang' => $fence[1], 'code' => rtrim($fence[3])];
            $label = trim($fence[2]);
            if ('' === $label) {
                $items[] = ['tabs' => null, 'block' => $block];
                continue;
            }
            $last = count($items) - 1;
            if ($last < 0 || null === $items[$last]['tabs']) {
                $items[] = ['tabs' => [], 'block' => null];
                ++$last;
            }
            $items[$last]['tabs'][$label][] = $block;
        }

        return [
            'paragraphs' => array_values(array_map($this->inline(...), array_filter(array_map('trim', preg_split('/\n\s*\n/', $text) ?: [])))),
            'items' => $items,
        ];
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
     * Escapes the text and turns `code` into <code>. The result is meant for |raw.
     */
    private function inline(string $text): string
    {
        $escaped = htmlspecialchars($text, \ENT_QUOTES | \ENT_SUBSTITUTE, 'UTF-8');

        return (string) preg_replace('/`([^`]+)`/', '<code class="rounded bg-muted px-1 py-0.5 text-[0.85em]">$1</code>', $escaped);
    }
}

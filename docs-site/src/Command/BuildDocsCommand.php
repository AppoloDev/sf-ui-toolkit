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
 * Génère le site de documentation statique : un fichier docs/<recette>.md devient dist/<recette>.html,
 * chaque exemple ```twig étant rendu pour de vrai avec les composants du kit.
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
        if (!is_dir($outDir) && !mkdir($outDir, 0777, true) && !is_dir($outDir)) {
            $output->writeln(sprintf('<error>Impossible de créer %s</error>', $outDir));

            return Command::FAILURE;
        }

        $pages = [];
        foreach (glob($root.'/docs/*.md') ?: [] as $file) {
            $slug = basename($file, '.md');
            $pages[$slug] = $this->parse((string) file_get_contents($file)) + ['slug' => $slug];
        }
        ksort($pages);

        foreach ($pages as $page) {
            foreach ($page['examples'] as &$example) {
                $example['html'] = $this->twig->createTemplate($example['code'])->render();
            }
            unset($example);

            file_put_contents(
                sprintf('%s/%s.html', $outDir, $page['slug']),
                $this->twig->render('docs/page.html.twig', ['page' => $page, 'pages' => $pages]),
            );
            $output->writeln(sprintf('  <info>%s.html</info> (%d exemples)', $page['slug'], count($page['examples'])));
        }

        file_put_contents($outDir.'/index.html', $this->twig->render('docs/index.html.twig', ['pages' => $pages]));
        $output->writeln(sprintf('<info>%d pages générées dans %s</info>', count($pages), $outDir));

        return Command::SUCCESS;
    }

    /**
     * @return array{title: string, intro: string, examples: list<array{title: string, description: string, code: string, html?: string}>}
     */
    private function parse(string $markdown): array
    {
        $sections = preg_split('/^## /m', $markdown) ?: [];
        $head = array_shift($sections) ?? '';

        $title = preg_match('/^# (.+)$/m', $head, $match) ? trim($match[1]) : 'Sans titre';
        $intro = trim((string) preg_replace('/^# .+$/m', '', $head));

        $examples = [];
        foreach ($sections as $section) {
            [$exampleTitle, $body] = array_pad(explode("\n", $section, 2), 2, '');
            if (!preg_match('/```twig\n(.*?)```/s', $body, $code)) {
                continue;
            }
            $examples[] = [
                'title' => trim($exampleTitle),
                'description' => trim((string) preg_replace('/```twig\n.*?```/s', '', $body)),
                'code' => rtrim($code[1]),
            ];
        }

        return ['title' => $title, 'intro' => $intro, 'examples' => $examples];
    }
}

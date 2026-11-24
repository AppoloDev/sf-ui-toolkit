<?php

declare(strict_types=1);

namespace App\Twig;

use Tempest\Highlight\Highlighter;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Adds the `highlight` Twig filter: `{{ code|highlight('php') }}` returns the code as HTML, each token wrapped in
 * a `<span class="hl-…">`. The code is escaped, the blank lines around it and its common indentation are removed.
 * An unknown language is rendered as plain text.
 */
final class HighlightExtension extends AbstractExtension
{
    private ?Highlighter $highlighter = null;

    public function getFilters(): array
    {
        return [
            new TwigFilter('highlight', $this->highlight(...), ['is_safe' => ['html']]),
        ];
    }

    public function highlight(string|\Stringable|null $code, string $language = 'text'): string
    {
        return $this->highlighter()->parse($this->dedent((string) $code), strtolower($language));
    }

    private function highlighter(): Highlighter
    {
        // Add your own languages here with $highlighter->addLanguage(new MyLanguage()).
        return $this->highlighter ??= new Highlighter();
    }

    private function dedent(string $code): string
    {
        $lines = explode("\n", str_replace(["\r\n", "\r"], "\n", $code));
        while ([] !== $lines && '' === trim($lines[0])) {
            array_shift($lines);
        }
        while ([] !== $lines && '' === trim($lines[array_key_last($lines)])) {
            array_pop($lines);
        }

        $indent = null;
        foreach ($lines as $line) {
            if ('' === trim($line)) {
                continue;
            }
            $length = strlen($line) - strlen(ltrim($line, " \t"));
            $indent = null === $indent ? $length : min($indent, $length);
        }

        return implode("\n", array_map(static fn (string $line): string => substr($line, min($indent ?? 0, strlen($line))), $lines));
    }
}

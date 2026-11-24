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
 *
 * With `$fromSlot`, the code is the content of a Twig component: its first line has lost its indentation, so the
 * indentation of the other lines decides what is removed.
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

    public function highlight(string|\Stringable|null $code, string $language = 'text', bool $fromSlot = false): string
    {
        return $this->highlighter()->parse($this->dedent((string) $code, $fromSlot), strtolower($language));
    }

    private function highlighter(): Highlighter
    {
        // Add your own languages here with $highlighter->addLanguage(new MyLanguage()).
        return $this->highlighter ??= new Highlighter();
    }

    private function dedent(string $code, bool $fromSlot): string
    {
        $lines = explode("\n", str_replace(["\r\n", "\r"], "\n", $code));
        while ([] !== $lines && '' === trim($lines[0])) {
            array_shift($lines);
        }
        while ([] !== $lines && '' === trim($lines[array_key_last($lines)])) {
            array_pop($lines);
        }

        $indent = null;
        foreach ($lines as $index => $line) {
            if ('' === trim($line) || ($fromSlot && 0 === $index && count($lines) > 1)) {
                continue;
            }
            $length = strlen($line) - strlen(ltrim($line, " \t"));
            $indent = null === $indent ? $length : min($indent, $length);
        }
        $indent ??= 0;

        return implode("\n", array_map(static function (string $line) use ($indent): string {
            $own = strlen($line) - strlen(ltrim($line, " \t"));

            return substr($line, min($indent, $own, strlen($line)));
        }, $lines));
    }
}

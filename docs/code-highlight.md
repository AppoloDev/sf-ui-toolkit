# Code Highlight

> Server-side syntax highlighting for code blocks: a Twig filter and a component with a `language` prop, no JavaScript in the browser.

## Usage

The recipe copies a Twig extension (`src/Twig/HighlightExtension.php`), registered automatically in a Symfony application that autoconfigures `src/`, and installs `tempest/highlight`, which does the highlighting. The extension adds a `highlight` filter (`{{ code|highlight('php') }}`, the code is escaped) that the component calls.

```twig
<twig:CodeHighlight language="php" code="echo 'Hello';" />
```

## Examples

### Twig

The content of the component can be the code. Wrap Twig code in `verbatim` so it is not evaluated.

```twig
<twig:CodeHighlight language="twig" label="Twig example">
{% verbatim %}
    {% for user in users %}
        <li class="{{ user.active ? 'font-medium' : 'text-muted-foreground' }}">{{ user.name|title }}</li>
    {% endfor %}
{% endverbatim %}
</twig:CodeHighlight>
```

### PHP

```twig
<twig:CodeHighlight language="php">
    #[AsTwigComponent]
    final class Alert
    {
        public function __construct(public string $message = 'Saved', private int $retries = 3) {}

        /** Returns the message in upper case. */
        public function shout(): string
        {
            return strtoupper($this->message); // done
        }
    }
</twig:CodeHighlight>
```

### HTML

```twig
<twig:CodeHighlight language="html">
    <button type="submit" class="btn" disabled>
        Save <!-- label -->
    </button>
</twig:CodeHighlight>
```

### JavaScript

```twig
<twig:CodeHighlight language="javascript">
    export default class extends Controller {
        static values = { count: Number }

        connect() {
            console.log(`Count: ${this.countValue}`, true, null)
        }
    }
</twig:CodeHighlight>
```

### YAML

```twig
<twig:CodeHighlight language="yaml">
    services:
        _defaults:
            autowire: true # enabled
        App\:
            resource: '../src/'
</twig:CodeHighlight>
```

### SQL and shell

```twig
<div class="grid gap-3 md:grid-cols-2">
    <twig:CodeHighlight language="sql">
        SELECT id, name FROM user WHERE active = 1 ORDER BY name LIMIT 10;
    </twig:CodeHighlight>
    <twig:CodeHighlight language="bash">
        composer require tempest/highlight
        php bin/console cache:clear
    </twig:CodeHighlight>
</div>
```

### Diff

```twig
<twig:CodeHighlight language="diff">
    @@ -1,3 +1,3 @@
     function total(items) {
    -    return items.length
    +    return items.reduce((sum, item) => sum + item.price, 0)
     }
</twig:CodeHighlight>
```

### From a variable

Use the `code` prop with a captured string, or call the filter yourself in your own markup.

```twig
{% set snippet %}{% verbatim %}{{ 'now'|date('Y') }}{% endverbatim %}{% endset %}
<div class="space-y-3">
    <twig:CodeHighlight language="twig" :code="snippet" />
    <pre class="rounded-lg border border-border p-3 text-sm"><code>{{ "SELECT 1;"|highlight('sql') }}</code></pre>
</div>
```

### Line numbers

`lineNumbers` adds a column of numbers that is not selected when the code is copied; `startLine` sets the first number.

```twig
<twig:CodeHighlight language="php" lineNumbers :startLine="12">
    public function shout(): string
    {
        return strtoupper($this->message);
    }
</twig:CodeHighlight>
```

### Unknown language

An unknown language is shown as plain text, escaped.

```twig
<twig:CodeHighlight language="cobol">
    DISPLAY "<HELLO>".
</twig:CodeHighlight>
```

## Extending

The extension builds one `Tempest\Highlight\Highlighter`. To add a language, copy the extension into your application and register it there.

```php
private function highlighter(): Highlighter
{
    return $this->highlighter ??= (new Highlighter())->addLanguage(new MyLanguage());
}
```

The colors are Tailwind classes on the `<pre>` (one `hl-*` class per kind of token, with a light and a dark value). To change them, override the template, or pass classes such as `[&_.hl-keyword]:text-pink-600`.

## Accessibility

- The block is focusable (`tabindex="0"`) so a keyboard user can scroll long lines.
- With `label`, the block is a named region, announced by screen readers.
- The colors are never the only information: the code text is unchanged and can be copied as is.

## API

### `<twig:CodeHighlight>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `language` | string | `text` | The language: php, twig, html, css, scss, javascript, typescript, jsx, tsx, json, yaml, sql, bash, diff, xml, markdown and others. An unknown value is shown as plain text. |
| `code` | string, null | `null` | The code. Without it, the content of the component is used. |
| `label` | string, null | `null` | The accessible name of the block; it becomes a region. |
| `lineNumbers` | boolean | `false` | Shows a column of line numbers next to the code. |
| `startLine` | number | `1` | The number of the first line, when `lineNumbers` is set. |

| Block | Description |
| --- | --- |
| `content` | The code, when `code` is not set. Blank lines around it and the common indentation are removed. |

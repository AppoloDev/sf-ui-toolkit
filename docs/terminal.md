# Terminal

> A terminal window for commands and their output: prompts, command lines with a copy button, output, errors and success lines, and an optional typing animation that respects reduced motion.

## Usage

```twig
<twig:Terminal title="bash">
    <twig:Terminal:Line type="command">composer install</twig:Terminal:Line>
    <twig:Terminal:Line>Installing dependencies</twig:Terminal:Line>
    <twig:Terminal:Line type="success">Done.</twig:Terminal:Line>
</twig:Terminal>
```

## Examples

### Basic

Commands have a prompt and a copy button; output, errors and successes have their own colors.

<!-- height: 220 -->

```twig
<twig:Terminal title="bash">
    <twig:Terminal:Line type="command">
        composer require symfony/ux-toolkit
    </twig:Terminal:Line>
    <twig:Terminal:Line>
        Installing symfony/ux-toolkit (v3.5.0)
    </twig:Terminal:Line>
    <twig:Terminal:Line type="success">
        Done.
    </twig:Terminal:Line>
</twig:Terminal>
```

### Typing

`typing` types the commands when the terminal comes into view. The full text is in the page from the start.

<!-- height: 220 -->

```twig
<twig:Terminal title="bash" :typing="true">
    <twig:Terminal:Line type="command">
        composer require symfony/ux-toolkit
    </twig:Terminal:Line>
    <twig:Terminal:Line>
        Installing symfony/ux-toolkit (v3.5.0)
    </twig:Terminal:Line>
    <twig:Terminal:Line type="success">
        Done.
    </twig:Terminal:Line>
</twig:Terminal>
```

### Error

An error line.

<!-- height: 200 -->

```twig
<twig:Terminal title="php">
    <twig:Terminal:Line type="command">
        php bin/console cache:clear
    </twig:Terminal:Line>
    <twig:Terminal:Line type="error">
        In FileLoader.php line 42: file not found
    </twig:Terminal:Line>
</twig:Terminal>
```

### Custom Prompt

`prompt` changes the symbol of a command.

<!-- height: 200 -->

```twig
<twig:Terminal title="powershell">
    <twig:Terminal:Line type="command" prompt="PS>">
        Get-ChildItem
    </twig:Terminal:Line>
    <twig:Terminal:Line>
        Directory: C:\app
    </twig:Terminal:Line>
</twig:Terminal>
```

### No Title

Without a title the bar only shows the three dots.

<!-- height: 220 -->

```twig
<twig:Terminal label="Install commands">
    <twig:Terminal:Line type="command">
        composer require symfony/ux-toolkit
    </twig:Terminal:Line>
    <twig:Terminal:Line>
        Installing symfony/ux-toolkit (v3.5.0)
    </twig:Terminal:Line>
    <twig:Terminal:Line type="success">
        Done.
    </twig:Terminal:Line>
</twig:Terminal>
```

### Another Language

The copy texts are props.

<!-- height: 200 -->

```twig
<twig:Terminal title="bash" copiedLabel="Copié" label="Terminal">
    <twig:Terminal:Line type="command" copyLabel="Copier la commande">
        symfony serve
    </twig:Terminal:Line>
    <twig:Terminal:Line type="success">
        Serveur démarré.
    </twig:Terminal:Line>
</twig:Terminal>
```

## Accessibility

- The terminal is a labelled group; the text is real text in the page, so it can be read, selected and found with the browser search.
- The typing animation only decorates: the final text is in the page from the start, and the animation is skipped for people who prefer reduced motion.
- The copy button of a command has an accessible name and appears on hover and on focus; copying is announced.

## API

### `<twig:Terminal>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | string or null | `null` | The title in the title bar. |
| `typing` | bool | `false` | Type the lines when the terminal comes into view. |
| `speed` | integer | `25` | The delay between characters, in milliseconds. |
| `copyLabel` | string | `Copy command` | The default name of the copy buttons. |
| `copiedLabel` | string | `Copied` | The text announced once copied. |
| `label` | string | `Terminal` | The accessible name when there is no title. |

| Block | Description |
| --- | --- |
| `default` | The `Terminal:Line` elements. |

### `<twig:Terminal:Line>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `command`, `output`, `error`, `success` | `output` | The kind of line. |
| `prompt` | string | `$` | The prompt before a command. |
| `copyLabel` | string | `Copy command` | The name of the copy button of a command. |

| Block | Description |
| --- | --- |
| `default` | The text of the line. |

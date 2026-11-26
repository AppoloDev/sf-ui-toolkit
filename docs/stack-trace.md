# Stack Trace

> A readable PHP-style stack trace: the exception class and message, frames with file, line and function, vendor frames dimmed or folded, a copy button, and a plain text export.

## Usage

```twig
<twig:StackTrace
    exception="App\Exception\PaymentFailed"
    message="The card was declined."
    :frames="[{file: '/app/src/Controller/OrderController.php', line: 42, function: 'OrderController->pay()'}]"
/>
```

`frames` is a list of `file`, `line` and `function`. A frame is vendor code when its file contains `/vendor/`, or when `vendor` is true.

## Examples

### Basic

The exception, its message and the frames; vendor frames are folded.

<!-- height: 360 -->

```twig
<twig:StackTrace exception="App\Exception\PaymentFailed" message="The card was declined." :frames="[{file: '/app/src/Controller/OrderController.php', line: 42, function: 'App\\Controller\\OrderController->pay()'}, {file: '/app/vendor/symfony/http-kernel/HttpKernel.php', line: 181, function: 'Symfony\\Component\\HttpKernel\\HttpKernel->handleRaw()'}, {file: '/app/vendor/symfony/http-kernel/HttpKernel.php', line: 76, function: 'Symfony\\Component\\HttpKernel\\HttpKernel->handle()'}, {file: '/app/public/index.php', line: 12, function: 'require_once()'}]" basePath="/app/" />
```

### Vendor Frames Shown

`foldVendor` off shows every frame, the vendor ones dimmed.

<!-- height: 360 -->

```twig
<twig:StackTrace exception="RuntimeException" message="Something broke." :foldVendor="false" :frames="[{file: '/app/src/Controller/OrderController.php', line: 42, function: 'App\\Controller\\OrderController->pay()'}, {file: '/app/vendor/symfony/http-kernel/HttpKernel.php', line: 181, function: 'Symfony\\Component\\HttpKernel\\HttpKernel->handleRaw()'}, {file: '/app/vendor/symfony/http-kernel/HttpKernel.php', line: 76, function: 'Symfony\\Component\\HttpKernel\\HttpKernel->handle()'}, {file: '/app/public/index.php', line: 12, function: 'require_once()'}]" />
```

### Without A Message

Only the exception.

<!-- height: 320 -->

```twig
<twig:StackTrace exception="LogicException" :frames="[{file: '/app/src/Controller/OrderController.php', line: 42, function: 'App\\Controller\\OrderController->pay()'}, {file: '/app/vendor/symfony/http-kernel/HttpKernel.php', line: 181, function: 'Symfony\\Component\\HttpKernel\\HttpKernel->handleRaw()'}, {file: '/app/vendor/symfony/http-kernel/HttpKernel.php', line: 76, function: 'Symfony\\Component\\HttpKernel\\HttpKernel->handle()'}, {file: '/app/public/index.php', line: 12, function: 'require_once()'}]" />
```

### Few Frames

A short trace with no vendor frame has no fold button.

<!-- height: 220 -->

```twig
<twig:StackTrace exception="InvalidArgumentException" message="The value must be positive." :frames="[{file: '/app/src/Money.php', line: 18, function: 'Money->__construct()'}]" />
```

### Another Language

All texts are props.

<!-- height: 360 -->

```twig
<twig:StackTrace exception="Exception" message="Erreur" :frames="[{file: '/app/src/Controller/OrderController.php', line: 42, function: 'App\\Controller\\OrderController->pay()'}, {file: '/app/vendor/symfony/http-kernel/HttpKernel.php', line: 181, function: 'Symfony\\Component\\HttpKernel\\HttpKernel->handleRaw()'}, {file: '/app/vendor/symfony/http-kernel/HttpKernel.php', line: 76, function: 'Symfony\\Component\\HttpKernel\\HttpKernel->handle()'}, {file: '/app/public/index.php', line: 12, function: 'require_once()'}]" copyLabel="Copier" copiedLabel="Copié" showVendorLabel="Afficher {count} lignes de dépendances" hideVendorLabel="Masquer les dépendances" label="Pile d'appels" />
```

## Accessibility

- The trace is a labelled section with an ordered list of frames; the copy and fold buttons are native buttons with text, and the fold button reports `aria-expanded`.
- Meant for developer screens: do not show a stack trace to users in production.

## API

### `<twig:StackTrace>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `exception` | string | | The class of the exception. |
| `message` | string or null | `null` | The message. |
| `frames` | array | `[]` | The frames: `file`, `line`, `function`, optionally `vendor`. |
| `foldVendor` | bool | `true` | Fold the vendor frames behind a button. |
| `copyLabel` | string | `Copy` | The text of the copy button. |
| `copiedLabel` | string | `Copied` | The text once copied. |
| `showVendorLabel` | string | `Show {count} vendor frames` | The text of the button that shows vendor frames. |
| `hideVendorLabel` | string | `Hide vendor frames` | The text of the button that hides them. |
| `label` | string | `Stack trace` | The accessible name. |
| `basePath` | string or null | `null` | A path removed from the start of every file. |

| Block | Description |
| --- | --- |
| `default` | Not used. |

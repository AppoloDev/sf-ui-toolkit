# Prompt Input

> A message box with an auto-growing textarea: Enter sends, Shift+Enter adds a line, a send button that stays disabled while empty, a stop state for a running answer, and slots for attachments and tools.

## Installation

- button (only for the tools example)

## Usage

```twig
<twig:PromptInput action="/chat" method="post" name="message" />
```

The component is a real `<form>`: give it `action` and `method` and Enter submits it. Listen to `prompt-input:submit` to handle the message in JavaScript instead.

## Examples

### Basic

Type, then Enter to send (Shift+Enter for a new line). The send button wakes up when there is text; the box grows up to `maxRows`.

<!-- height: 160 -->

```twig
<twig:PromptInput />
```

### Handling The Message

`prompt-input:submit` carries the text. Cancel the browser submission with `preventDefault()` to handle it in JavaScript; the box clears itself.

<!-- height: 240 -->

```twig
<div class="grid gap-3">
    <ul id="pi-log" class="grid gap-1 text-sm text-muted-foreground"></ul>
    <twig:PromptInput id="pi-handle" />
</div>
<script>
    document.getElementById('pi-handle').addEventListener('prompt-input:submit', (event) => {
        event.preventDefault();
        const item = document.createElement('li');
        item.textContent = 'You: ' + event.detail.value;
        document.getElementById('pi-log').append(item);
    });
</script>
```

### Tools And Hint

The `tools` block holds buttons at the start of the footer, the `hint` block a short text before the send button.

<!-- height: 180 -->

```twig
<twig:PromptInput placeholder="Ask anything…">
    <twig:block name="tools">
        <twig:Button type="button" variant="ghost" size="icon-sm" aria-label="Attach a file">
            <twig:ux:icon name="lucide:paperclip" class="size-4" />
        </twig:Button>
        <twig:Button type="button" variant="ghost" size="icon-sm" aria-label="Search the web">
            <twig:ux:icon name="lucide:globe" class="size-4" />
        </twig:Button>
    </twig:block>
    <twig:block name="hint">
        Shift+Enter for a new line
    </twig:block>
</twig:PromptInput>
```

### Busy

`busy` turns the send button into a stop button while an answer is running; `prompt-input:stop` is fired.

<!-- height: 160 -->

```twig
<twig:PromptInput :busy="true" />
```

### Character Limit

`maxLength` adds a counter that shows when the limit is near.

<!-- height: 160 -->

```twig
<twig:PromptInput :maxLength="120" />
```

### More Rows

`rows` sets the height when empty; `maxRows` where it stops growing.

<!-- height: 200 -->

```twig
<twig:PromptInput :rows="3" :maxRows="6" />
```

### Disabled

A disabled box cannot be used.

<!-- height: 160 -->

```twig
<twig:PromptInput :disabled="true" placeholder="Waiting for the assistant…" />
```

### Another Language

All texts are props.

<!-- height: 160 -->

```twig
<twig:PromptInput placeholder="Écrire un message…" sendLabel="Envoyer" stopLabel="Arrêter" label="Message" />
```

## Accessibility

- The textarea has an accessible name (`label`); the send and stop buttons have names and the send button is disabled while there is nothing to send.
- Enter sends and Shift+Enter adds a line; while an input method (IME) is composing, Enter is left alone.
- Announce answers in a live region in your own page.

## Extending

- `prompt-input:submit` before the form is submitted: `detail.value`. Cancelable. The box clears itself unless `detail.keep` is set to `true`.
- `prompt-input:stop` when the stop button is used.
- Actions of the `prompt-input` controller: `clear` and `focus`.

## API

### `<twig:PromptInput>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | `message` | The name of the textarea. |
| `placeholder` | string | `Write a message…` | The placeholder. |
| `rows` | integer | `1` | The number of rows when empty. |
| `maxRows` | integer | `8` | The number of rows after which the box scrolls. |
| `maxLength` | integer or null | `null` | The maximum number of characters. |
| `busy` | bool | `false` | Turn the send button into a stop button. |
| `disabled` | bool | `false` | Disable the box. |
| `sendLabel` | string | `Send` | The name of the send button. |
| `stopLabel` | string | `Stop` | The name of the stop button. |
| `label` | string | `Message` | The name of the textarea. |
| `counterLabel` | string | `{count}/{max}` | The text of the counter. |

| Block | Description |
| --- | --- |
| `tools` | Buttons at the start of the footer. |
| `hint` | A short text before the send button. |

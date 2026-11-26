# Speech Input

> A microphone button that types what you say into a field using the browser's speech recognition: start and stop, live partial results, a language, and a clear message when the browser cannot do it.

## Installation

- input, textarea (only for the examples)

## Usage

```twig
<twig:Input id="message" />
<twig:SpeechInput target="#message" lang="en-US" />
```

Dictation uses the browser's `SpeechRecognition`. Support varies (it is missing in some browsers), and some browsers send the audio to a server to recognize it: say so in your privacy notice where it matters.

## Examples

### Basic

Press the microphone and speak; the text appears in the field. In a browser without speech recognition, the button is disabled.

<!-- height: 120 -->

```twig
<div class="flex max-w-sm items-center gap-2">
    <twig:Input id="si-basic" placeholder="Say something…" class="flex-1" />
    <twig:SpeechInput target="#si-basic" />
</div>
```

### Textarea

The same for a textarea: the dictated text is added after what is already written.

<!-- height: 200 -->

```twig
<div class="grid max-w-sm gap-2">
    <twig:Textarea id="si-note" rows="3" placeholder="Dictate a note…" />
    <div>
        <twig:SpeechInput target="#si-note" />
    </div>
</div>
```

### Another Language

`lang` sets the language to recognize.

<!-- height: 120 -->

```twig
<div class="flex max-w-sm items-center gap-2">
    <twig:Input id="si-fr" placeholder="Dites quelque chose…" class="flex-1" />
    <twig:SpeechInput target="#si-fr" lang="fr-FR" startLabel="Démarrer la dictée" stopLabel="Arrêter la dictée" unsupportedLabel="La dictée n'est pas disponible dans ce navigateur" listeningLabel="Écoute en cours" />
</div>
```

### One Phrase

`continuous` off stops after the first pause.

<!-- height: 120 -->

```twig
<div class="flex max-w-sm items-center gap-2">
    <twig:Input id="si-once" placeholder="One phrase" class="flex-1" />
    <twig:SpeechInput target="#si-once" :continuous="false" />
</div>
```

### Listening To Results

`speech-input:result` carries the text and whether it is final.

<!-- height: 160 -->

```twig
<div class="grid max-w-sm gap-2" id="si-events">
    <div class="flex items-center gap-2">
        <twig:Input id="si-ev" placeholder="Speak…" class="flex-1" />
        <twig:SpeechInput target="#si-ev" />
    </div>
    <p class="text-sm text-muted-foreground">
        Last result: <code id="si-ev-out">none</code>
    </p>
</div>
<script>
    document.getElementById('si-events').addEventListener('speech-input:result', (event) => {
        document.getElementById('si-ev-out').textContent = event.detail.text + (event.detail.final ? ' (final)' : '');
    });
</script>
```

## Accessibility

- The button is a toggle (`aria-pressed`) with a name that changes between start and stop; a status message announces when it listens.
- Where the browser has no speech recognition, the button is disabled and a message explains why: typing always stays available.
- The microphone permission is asked by the browser the first time.

## Extending

- `speech-input:start` and `speech-input:end`.
- `speech-input:result`: `detail.text` and `detail.final`.
- `speech-input:error`: `detail.error` (a code from the API, such as `not-allowed`).

## API

### `<twig:SpeechInput>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `target` | string | | A CSS selector of the field that receives the text. |
| `lang` | string or null | `null` | The language to recognize. Without it, the page language. |
| `continuous` | bool | `true` | Keep listening after a pause. |
| `startLabel` | string | `Start dictation` | The name of the button when idle. |
| `stopLabel` | string | `Stop dictation` | The name of the button while listening. |
| `unsupportedLabel` | string | `Dictation is not available in this browser` | The message where the API is missing. |
| `listeningLabel` | string | `Listening` | The message announced when listening starts. |

| Block | Description |
| --- | --- |
| `default` | Not used. |

# Timer

> A countdown or a stopwatch with start, pause and reset: a formatted display, optional controls, events on every second and at the end, and a live region that announces only the end.

## Installation

- alert, badge (only for two examples)

## Usage

```twig
<twig:Timer :duration="300" :autoStart="true" />
<twig:Timer mode="stopwatch" />
```

## Examples

### Countdown

A countdown of one minute: start, pause, reset.

<!-- height: 100 -->

```twig
<twig:Timer :duration="60" />
```

### Auto Start

`autoStart` runs it as soon as the page is ready.

<!-- height: 100 -->

```twig
<twig:Timer :duration="30" :autoStart="true" />
```

### Stopwatch

`mode="stopwatch"` counts up from zero.

<!-- height: 100 -->

```twig
<twig:Timer mode="stopwatch" />
```

### Hours

`format="hh:mm:ss"` always shows the hours; `auto` shows them only when needed.

<!-- height: 100 -->

```twig
<twig:Timer :duration="3725" format="hh:mm:ss" />
```

### Without Controls

A display only, started by `autoStart`.

<!-- height: 100 -->

```twig
<twig:Timer :duration="90" :autoStart="true" :controls="false" />
```

### Reacting To The End

`timer:end` is fired when a countdown reaches zero; `timer:tick` every second.

<!-- height: 160 -->

```twig
<div class="grid gap-3" id="tm-end">
    <twig:Timer :duration="5" :autoStart="true" />
    <twig:Alert hidden id="tm-end-alert">
        <twig:Alert:Title>
            Time is up
        </twig:Alert:Title>
    </twig:Alert>
</div>
<script>
    document.getElementById('tm-end').addEventListener('timer:end', () => {
        document.getElementById('tm-end-alert').hidden = false;
    });
    document.getElementById('tm-end').addEventListener('timer:tick', (event) => {
        if (event.detail.seconds > 4) document.getElementById('tm-end-alert').hidden = true;
    });
</script>
```

### Custom Display

The default block replaces the display; mark the element that shows the time with `data-timer-target="display"`.

<!-- height: 100 -->

```twig
<twig:Timer :duration="45" :controls="true">
    <twig:Badge variant="secondary" class="text-base" data-timer-target="display" />
</twig:Timer>
```

### Another Language

All texts are props.

<!-- height: 100 -->

```twig
<twig:Timer :duration="30" startLabel="Démarrer" pauseLabel="Pause" resetLabel="Réinitialiser" endLabel="Le temps est écoulé" label="Minuteur" />
```

## Accessibility

- The display is not announced every second (that would be noisy); when a countdown ends, a polite status says `endLabel` once.
- The buttons are native buttons with text; the state is also on the element as `data-state` (`idle`, `running`, `ended`) for styling.
- Time is computed from the clock, so it stays right when the tab is in the background.

## Extending

- `timer:tick` every second: `detail.seconds`.
- `timer:end` when a countdown reaches zero.
- Actions of the `timer` controller: `start`, `pause`, `toggle` and `reset`, usable from your own buttons with `data-action="timer#start"`.

## API

### `<twig:Timer>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `mode` | `countdown`, `stopwatch` | `countdown` | Count down from `duration` or count up from zero. |
| `duration` | integer | `60` | The start of a countdown, in seconds. |
| `autoStart` | bool | `false` | Start by itself. |
| `controls` | bool | `true` | Show the start, pause and reset buttons. |
| `format` | `auto`, `mm:ss`, `hh:mm:ss` | `auto` | How the time is written. |
| `startLabel` | string | `Start` | The text of the start button. |
| `pauseLabel` | string | `Pause` | The text of the pause button. |
| `resetLabel` | string | `Reset` | The text of the reset button. |
| `endLabel` | string | `Time is up` | The message announced when a countdown ends. |
| `label` | string | `Timer` | The accessible name of the timer. |

| Block | Description |
| --- | --- |
| `default` | Replaces the display. |

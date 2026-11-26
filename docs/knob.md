# Knob

> A rotary input: drag around the ring, use the keyboard or the wheel, a value in the middle, min, max and step, and a hidden field for forms.

## Installation

- button (only for one example)

## Usage

```twig
<twig:Knob name="gain" :value="50" :min="0" :max="100" label="Gain" />
```

## Examples

### Basic

Drag around the ring, or focus it and use the arrow keys, Page Up and Down, Home and End, or the wheel.

<!-- height: 160 -->

```twig
<twig:Knob :value="40" />
```

### Range And Step

`min`, `max` and `step`: a volume from 0 to 10 in steps of 0.5.

<!-- height: 160 -->

```twig
<twig:Knob :value="5" :min="0" :max="10" :step="0.5" label="Volume" />
```

### Value Template

`valueTemplate` writes a unit around the value.

<!-- height: 160 -->

```twig
<div class="flex gap-6">
    <twig:Knob :value="21" :min="10" :max="30" valueTemplate="{value}°C" label="Temperature" />
    <twig:Knob :value="60" valueTemplate="{value}%" label="Opacity" />
</div>
```

### Sizes

`size` and `thickness` in pixels.

<!-- height: 200 -->

```twig
<div class="flex items-center gap-6">
    <twig:Knob :value="30" :size="64" :thickness="6" />
    <twig:Knob :value="60" :size="100" />
    <twig:Knob :value="90" :size="150" :thickness="16" />
</div>
```

### Read Only And Disabled

A read-only knob shows a value; a disabled one is dimmed.

<!-- height: 160 -->

```twig
<div class="flex gap-6">
    <twig:Knob :value="70" :readonly="true" label="Score" />
    <twig:Knob :value="30" :disabled="true" label="Locked" />
</div>
```

### In A Form

With `name`, the value is sent with the form.

<!-- height: 180 -->

```twig
<form id="kn-form" class="flex items-center gap-4">
    <twig:Knob name="gain" :value="50" label="Gain" />
    <twig:Button type="submit" size="sm">
        Send
    </twig:Button>
    <code id="kn-form-out" class="text-sm text-muted-foreground">nothing yet</code>
</form>
<script>
    document.getElementById('kn-form').addEventListener('submit', (event) => {
        event.preventDefault();
        document.getElementById('kn-form-out').textContent = new URLSearchParams(new FormData(event.target)).toString();
    });
</script>
```

### Listening To Changes

`knob:change` carries the new value.

<!-- height: 160 -->

```twig
<div class="flex items-center gap-4" id="kn-events">
    <twig:Knob :value="25" />
    <code id="kn-events-out" class="text-sm text-muted-foreground">25</code>
</div>
<script>
    document.getElementById('kn-events').addEventListener('knob:change', (event) => {
        document.getElementById('kn-events-out').textContent = event.detail.value;
    });
</script>
```

## Accessibility

- The knob is a `slider` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax`; arrows, Page Up and Down, Home and End change the value, so it works without a pointer.
- Give a `label` that names what the knob controls.
- Read-only and disabled states are exposed with `aria-readonly` and `aria-disabled`.

## Extending

- `knob:change` when the value changes: `detail.value`. Set `data-knob-value-value` to change it from code.

## API

### `<twig:Knob>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string or null | `null` | The name of the hidden field sent with a form. |
| `value` | number | `0` | The current value. |
| `min` | number | `0` | The smallest value. |
| `max` | number | `100` | The largest value. |
| `step` | number | `1` | The step of the value. |
| `size` | integer | `100` | The width of the knob, in pixels. |
| `thickness` | integer | `10` | The thickness of the ring, in pixels. |
| `showValue` | bool | `true` | Write the value in the middle. |
| `valueTemplate` | string | `{value}` | The text in the middle. |
| `label` | string | `Value` | The accessible name. |
| `disabled` | bool | `false` | Disable the knob. |
| `readonly` | bool | `false` | The value cannot be changed. |

| Block | Description |
| --- | --- |
| `default` | Not used. |

# Count Up

> A number that counts up (or down) to its value when it comes into view: decimals, prefix and suffix, locale formatting, duration, and a quiet version for people who prefer reduced motion.

## Installation

- card, button (only for the examples)

## Usage

```twig
<twig:CountUp :value="12840" suffix=" users" />
```

The number is rendered by the server already at its final value, so it is correct without JavaScript. When JavaScript runs, it counts from `from` to `value`; people who prefer reduced motion see the final number at once.

## Examples

### Basic

The number counts up when it comes into view.

<!-- height: 120 -->

```twig
<p class="text-4xl font-bold">
    <twig:CountUp :value="12840" />
</p>
```

### Prefix And Suffix

A currency sign before, a unit after, and decimals.

<!-- height: 120 -->

```twig
<div class="flex gap-8 text-3xl font-semibold">
    <twig:CountUp :value="1249.5" :decimals="2" prefix="$" />
    <twig:CountUp :value="98.6" :decimals="1" suffix="%" />
    <twig:CountUp :value="3.2" :decimals="1" suffix="k" />
</div>
```

### Counting Down

`from` larger than `value` counts down.

<!-- height: 120 -->

```twig
<p class="text-4xl font-bold">
    <twig:CountUp :from="100" :value="0" :duration="3000" />
</p>
```

### Locale

The separators follow `locale`.

<!-- height: 120 -->

```twig
<div class="flex gap-8 text-3xl font-semibold">
    <twig:CountUp :value="1234567.89" :decimals="2" locale="fr" suffix=" €" />
    <twig:CountUp :value="1234567.89" :decimals="2" locale="de" suffix=" €" />
</div>
```

### Without Grouping

`:grouping="false"` removes the thousands separators (a year, an id).

<!-- height: 120 -->

```twig
<p class="text-4xl font-bold">
    <twig:CountUp :value="2026" :grouping="false" />
</p>
```

### Statistics Row

Several numbers with the official `Card`.

<!-- height: 200 -->

```twig
<div class="grid gap-3 sm:grid-cols-3">
    <twig:Card>
        <twig:Card:Header>
            <twig:Card:Description>
                Customers
            </twig:Card:Description>
            <twig:Card:Title class="text-3xl">
                <twig:CountUp :value="8420" />
            </twig:Card:Title>
        </twig:Card:Header>
    </twig:Card>
    <twig:Card>
        <twig:Card:Header>
            <twig:Card:Description>
                Revenue
            </twig:Card:Description>
            <twig:Card:Title class="text-3xl">
                <twig:CountUp :value="64.2" :decimals="1" prefix="$" suffix="k" />
            </twig:Card:Title>
        </twig:Card:Header>
    </twig:Card>
    <twig:Card>
        <twig:Card:Header>
            <twig:Card:Description>
                Satisfaction
            </twig:Card:Description>
            <twig:Card:Title class="text-3xl">
                <twig:CountUp :value="97" suffix="%" />
            </twig:Card:Title>
        </twig:Card:Header>
    </twig:Card>
</div>
```

### Restart From Code

Set a new `data-count-up-value-value` and the count goes there from the start value; `count-up:end` is fired when it arrives.

<!-- height: 120 -->

```twig
<div class="flex items-center gap-4">
    <p class="text-4xl font-bold">
        <twig:CountUp id="cu-code" :value="500" />
    </p>
    <twig:Button variant="outline" size="sm" id="cu-code-button">
        Random value
    </twig:Button>
</div>
<script>
    document.getElementById('cu-code-button').addEventListener('click', () => {
        document.getElementById('cu-code').setAttribute('data-count-up-value-value', String(Math.round(Math.random() * 1000)));
    });
</script>
```

## Accessibility

- The final number is in the HTML from the start; the count is only decoration, and it is skipped for people who prefer reduced motion.
- A counting number can be noisy for screen readers: put the meaning in the surrounding text (the label of the statistic), not in the counted value alone.

## Extending

- `count-up:end` when the count reaches its value. Changing `data-count-up-value-value` counts to the new value.

## API

### `<twig:CountUp>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number | | The final value. |
| `from` | number | `0` | The starting value. |
| `duration` | integer | `1500` | The duration of the count, in milliseconds. |
| `decimals` | integer | `0` | The number of decimals. |
| `prefix` | string | | Text before the number. |
| `suffix` | string | | Text after the number. |
| `locale` | string | `en` | The locale used to format the number. |
| `startOnView` | bool | `true` | Start when the number comes into view. |
| `grouping` | bool | `true` | Use thousands separators. |

| Block | Description |
| --- | --- |
| `default` | Not used. |

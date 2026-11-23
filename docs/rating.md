# Rating

> Star rating: read-only display (partial stars) or input with radio buttons, half stars and hover preview.

## Usage

```twig
<twig:Rating name="rating" :value="4" label="Your rating" />
```

## Examples

### Read-only

Without a `name` (or with `readonly`), the component displays the rating. A decimal value partially fills the relevant star.

```twig
<twig:Rating :value="3.7" />
```

### Input

With a `name`, each star is a native radio button: the field is submitted with the form, and the arrow keys change the rating. Hovering shows a preview.

```twig
<twig:Rating name="rating" :value="4" label="Your rating" />
```

### Half stars

With `step="0.5"`, each star has two zones: the left half is worth x.5 and the right half the whole value.

```twig
<twig:Rating name="precise_rating" :value="3.5" :step="0.5" label="Precise rating" />
```

### Sizes

```twig
<div class="flex flex-col items-start gap-3">
    <twig:Rating :value="4" size="sm" />
    <twig:Rating :value="4" size="md" />
    <twig:Rating :value="4" size="lg" />
</div>
```

### Number of stars

```twig
<twig:Rating :value="7" :max="10" />
```

### Forced read-only

`readonly` freezes a field that has a `name`: handy to redisplay an existing submission.

```twig
<twig:Rating name="rating" :value="2" readonly />
```

## Accessibility

- When editable, the component is a `radiogroup` whose stars are native `input type="radio"` elements: tabbing, arrow keys and screen readers work without JavaScript.
- Keyboard focus is visible on the relevant star.
- When read-only, the component is an image (`role="img"`) whose label states the rating, for example "Rating: 3.7 / 5".
- Hovering is only a preview: it changes no value until you click.

## API

### `<twig:Rating>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | Field name. Without a name, the component is display only. |
| `value` | number | `0` | Current rating. Decimals are accepted. |
| `max` | int | `5` | Number of stars. |
| `step` | 1 or 0.5 | `1` | `0.5` enables half stars when editable. |
| `readonly` | bool | `false` | Display only, even with a `name`. |
| `size` | `sm`, `md`, `lg` | `md` | Star size. |
| `label` | string | `Rating` | Accessible label of the group. |

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

### Decimal Value

A read-only rating can show a fraction: 3.7 fills the fourth star to 70%.

```twig
<twig:Rating :value="3.7" showValue label="Average rating" />
```

### Show Value

With `showValue` the number follows the stars, and it follows your hover and your choice when the rating is editable.

```twig
<div class="flex flex-col gap-3">
    <twig:Rating :value="4.5" showValue :count="128" label="Average rating" />
    <twig:Rating name="score" :value="3" showValue label="Your rating" />
</div>
```

### Review Summary

An average with the count and the distribution, composed with `Progress`.

<!-- height: 300 -->

```twig
<div class="grid w-72 gap-3">
    <div class="flex items-center gap-3">
        <span class="text-4xl font-semibold tabular-nums">
            4.4
        </span>
        <div class="grid gap-0.5">
            <twig:Rating :value="4.4" label="Average rating" />
            <span class="text-sm text-muted-foreground">
                1,284 reviews
            </span>
        </div>
    </div>
    <div class="grid gap-1.5 text-sm">
        <div class="flex items-center gap-2">
            <span class="w-3 tabular-nums">5</span>
            <twig:Progress :value="68" class="flex-1" />
            <span class="w-9 text-right text-muted-foreground tabular-nums">68%</span>
        </div>
        <div class="flex items-center gap-2">
            <span class="w-3 tabular-nums">4</span>
            <twig:Progress :value="20" class="flex-1" />
            <span class="w-9 text-right text-muted-foreground tabular-nums">20%</span>
        </div>
        <div class="flex items-center gap-2">
            <span class="w-3 tabular-nums">3</span>
            <twig:Progress :value="8" class="flex-1" />
            <span class="w-9 text-right text-muted-foreground tabular-nums">8%</span>
        </div>
        <div class="flex items-center gap-2">
            <span class="w-3 tabular-nums">2</span>
            <twig:Progress :value="3" class="flex-1" />
            <span class="w-9 text-right text-muted-foreground tabular-nums">3%</span>
        </div>
        <div class="flex items-center gap-2">
            <span class="w-3 tabular-nums">1</span>
            <twig:Progress :value="1" class="flex-1" />
            <span class="w-9 text-right text-muted-foreground tabular-nums">1%</span>
        </div>
    </div>
</div>
```

### Emoji Reactions

`emojis` replaces the stars with one emoji per level: the chosen one is highlighted and the value is its position (1 to 5 here).

```twig
<twig:Rating
    name="mood"
    :value="4"
    label="How was it?"
    :emojis="[
        {emoji: '😡', label: 'Terrible'},
        {emoji: '🙁', label: 'Bad'},
        {emoji: '😐', label: 'Okay'},
        {emoji: '🙂', label: 'Good'},
        {emoji: '😍', label: 'Great'},
    ]"
/>
```

### Review Text

`valueLabels` names each level, and the name follows the stars; compose it with a `Textarea` for a written review.

<!-- height: 320 -->

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label>
        Your review
    </twig:Field:Label>
    <twig:Rating name="stars" :value="4" size="lg" :valueLabels="['Poor', 'Fair', 'Good', 'Very good', 'Excellent']" label="Your rating" />
    <twig:Textarea name="review" placeholder="Tell others what you liked or disliked" />
</twig:Field>
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
| `showValue` | bool | `false` | Shows the number (one decimal) after the stars; it follows hover and choice when editable. |
| `valueLabels` | list | `[]` | One text per star (Poor, Fair...): the text of the current value is shown after the stars. |
| `count` | int | `null` | Number of ratings, shown after the stars. |
| `countLabel` | string | `({count})` | Text of the count; `{count}` is replaced. |
| `emojis` | list | `[]` | Objects with `emoji` and `label`: replaces the stars with one emoji per level. The value is the position of the chosen one. |

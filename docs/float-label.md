# Float Label

> Label that sits inside a field and floats to the top on focus or when the field has a value, in four styles: over, in, on and ifta.

## Installation

- input
- textarea
- native-select

## Usage

Wrap the field in `FloatLabel` and give it `placeholder=" "` (one space): the label rests inside the field while the placeholder is shown and the field is not focused, and floats otherwise. It works with CSS only.

```twig
<twig:FloatLabel label="Username" fieldId="fl-username" class="max-w-xs">
    <twig:Input id="fl-username" placeholder=" " />
</twig:FloatLabel>
```

## Examples

### Over

The label floats above the field.

```twig
<twig:FloatLabel label="Email" fieldId="fl-over" variant="over" class="max-w-xs">
    <twig:Input id="fl-over" type="email" placeholder=" " />
</twig:FloatLabel>
```

### In

The label floats inside the field, above the value.

```twig
<twig:FloatLabel label="Email" fieldId="fl-in" variant="in" class="max-w-xs">
    <twig:Input id="fl-in" type="email" placeholder=" " />
</twig:FloatLabel>
```

### On

The label floats on the border.

```twig
<twig:FloatLabel label="Email" fieldId="fl-on" variant="on" class="max-w-xs">
    <twig:Input id="fl-on" type="email" placeholder=" " />
</twig:FloatLabel>
```

### Ifta

The label stays above the value, with no resting position.

```twig
<twig:FloatLabel label="Email" fieldId="fl-ifta" variant="ifta" class="max-w-xs">
    <twig:Input id="fl-ifta" type="email" placeholder=" " />
</twig:FloatLabel>
```

### Textarea

```twig
<div class="grid max-w-xs gap-6">
    <twig:FloatLabel label="Message" fieldId="fl-ta-in" variant="in">
        <twig:Textarea id="fl-ta-in" placeholder=" " rows="4" />
    </twig:FloatLabel>
    <twig:FloatLabel label="Message" fieldId="fl-ta-on" variant="on">
        <twig:Textarea id="fl-ta-on" placeholder=" " rows="4" />
    </twig:FloatLabel>
</div>
```

### Native Select

A select always has a value, so its label stays floated.

```twig
<div class="grid max-w-xs gap-6">
    <twig:FloatLabel label="Country" fieldId="fl-sel-ifta" variant="ifta">
        <twig:NativeSelect id="fl-sel-ifta">
            <twig:NativeSelect:Option value="fr">France</twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="de">Germany</twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="es">Spain</twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:FloatLabel>
</div>
```

### Filled

The label floats from the start when the field has a value.

```twig
<twig:FloatLabel label="Username" fieldId="fl-filled" variant="on" class="max-w-xs">
    <twig:Input id="fl-filled" value="shadcn" placeholder=" " />
</twig:FloatLabel>
```

### Invalid

```twig
<twig:Field data-invalid="true" class="max-w-xs">
    <twig:FloatLabel label="Email" fieldId="fl-invalid" variant="in">
        <twig:Input id="fl-invalid" type="email" value="not-an-email" placeholder=" " aria-invalid="true" />
    </twig:FloatLabel>
    <twig:Field:Error>
        Please enter a valid email address.
    </twig:Field:Error>
</twig:Field>
```

### Disabled

```twig
<twig:FloatLabel label="Username" fieldId="fl-disabled" variant="in" class="max-w-xs">
    <twig:Input id="fl-disabled" placeholder=" " disabled />
</twig:FloatLabel>
```

### Large Field

```twig
<twig:FloatLabel label="Full name" fieldId="fl-large" variant="on" class="max-w-xs">
    <twig:Input id="fl-large" placeholder=" " class="h-12 text-base" />
</twig:FloatLabel>
```

## Accessibility

- The label is a real `<label for>`, so the field keeps its accessible name and a click on the label focuses it.
- The label turns to the destructive color when the field is `aria-invalid`.
- `variant="on"` paints the label with the page background (`bg-background`) to cut the border: use it on a background that matches.

## API

### `<twig:FloatLabel>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | required | The label text. |
| `fieldId` | string | required | The id of the field the label points to. |
| `variant` | `over`, `in`, `on`, `ifta` | `over` | Where the label goes when floated: above the field, inside above the value, on the border, or always inside above the value. |

| Block | Description |
|---|---|
| `default` | The field (`Input`, `Textarea`, `NativeSelect`), with `placeholder=" "`. |

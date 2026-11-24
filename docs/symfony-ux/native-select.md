# Native Select

## Examples

### Basic

```twig
<twig:NativeSelect class="max-w-xs">
    <twig:NativeSelect:Option value="">Select a fruit</twig:NativeSelect:Option>
    <twig:NativeSelect:Option value="apple">Apple</twig:NativeSelect:Option>
    <twig:NativeSelect:Option value="banana">Banana</twig:NativeSelect:Option>
    <twig:NativeSelect:Option value="grapes" disabled>Grapes</twig:NativeSelect:Option>
</twig:NativeSelect>
```

### Grouped Options

```twig
<twig:NativeSelect class="max-w-xs">
    <twig:NativeSelect:Option value="">Select food</twig:NativeSelect:Option>
    <twig:NativeSelect:OptGroup label="Fruits">
        <twig:NativeSelect:Option value="apple">Apple</twig:NativeSelect:Option>
        <twig:NativeSelect:Option value="banana">Banana</twig:NativeSelect:Option>
    </twig:NativeSelect:OptGroup>
    <twig:NativeSelect:OptGroup label="Vegetables">
        <twig:NativeSelect:Option value="carrot">Carrot</twig:NativeSelect:Option>
        <twig:NativeSelect:Option value="broccoli">Broccoli</twig:NativeSelect:Option>
    </twig:NativeSelect:OptGroup>
</twig:NativeSelect>
```

### Field With Label

```twig
<twig:Field class="max-w-xs">
    <twig:Field:Label for="ns-country">Country</twig:Field:Label>
    <twig:NativeSelect id="ns-country">
        <twig:NativeSelect:Option value="us">United States</twig:NativeSelect:Option>
        <twig:NativeSelect:Option value="fr">France</twig:NativeSelect:Option>
        <twig:NativeSelect:Option value="jp">Japan</twig:NativeSelect:Option>
    </twig:NativeSelect>
    <twig:Field:Description>Used to compute taxes.</twig:Field:Description>
</twig:Field>
```

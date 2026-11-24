# Checkbox

## Examples

### Invalid State

Set `aria-invalid` on the checkbox and `data-invalid` on the `Field` to show the error styles.

```twig
<twig:Field orientation="horizontal" data-invalid="true" class="max-w-sm">
    <twig:Checkbox id="checkbox-invalid" name="checkbox-invalid" aria-invalid="true" />
    <twig:Field:Content>
        <twig:Field:Label for="checkbox-invalid">Accept terms and conditions</twig:Field:Label>
        <twig:Field:Description>You must accept the terms and conditions to continue.</twig:Field:Description>
    </twig:Field:Content>
</twig:Field>
```

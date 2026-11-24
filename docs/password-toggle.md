# Password Toggle

> A button that shows or hides the password typed in an input, for use in an input group or next to any field.

## Installation

- input-group
- input
- label

## Usage

Put `PasswordToggle` in an `InputGroup:Addon`, after the input. It finds the input of its group, switches it between `type="password"` and `type="text"`, and keeps the focus in it.

```twig
<twig:InputGroup class="max-w-sm">
    <twig:InputGroup:Input type="password" placeholder="Password" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:PasswordToggle />
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

## Examples

### With a Label

```twig
<div class="mx-auto grid w-full max-w-sm gap-2">
    <twig:Label for="toggle-password" class="text-sm font-medium">
        Password
    </twig:Label>
    <twig:InputGroup>
        <twig:InputGroup:Addon>
            <twig:ux:icon name="lucide:lock" />
        </twig:InputGroup:Addon>
        <twig:InputGroup:Input id="toggle-password" type="password" value="correct horse battery" />
        <twig:InputGroup:Addon align="inline-end">
            <twig:PasswordToggle />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</div>
```

### Custom Labels

The accessible names are props. Write them in the language of the page.

```twig
<twig:InputGroup class="mx-auto max-w-sm">
    <twig:InputGroup:Input type="password" value="mot-de-passe" />
    <twig:InputGroup:Addon align="inline-end">
        <twig:PasswordToggle showLabel="Afficher le mot de passe" hideLabel="Masquer le mot de passe" />
    </twig:InputGroup:Addon>
</twig:InputGroup>
```

### Outside an Input Group

Without a group, the button looks for the input in its parent. `target` points to another field with a selector.

```twig
<div class="mx-auto flex w-full max-w-sm items-center gap-2">
    <twig:Input id="toggle-outside" type="password" value="hunter2" />
    <twig:PasswordToggle target="#toggle-outside" variant="outline" size="icon-sm" />
</div>
```

## Accessibility

- The button is a toggle: `aria-pressed` is `true` while the password is shown, and its accessible name changes with it (`showLabel`, `hideLabel`).
- The icon is hidden from screen readers: the name of the button carries the meaning.
- The focus goes back to the field after each toggle, so that typing can go on.

## API

### `<twig:PasswordToggle>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `showLabel` | string | `Show password` | The accessible name of the button while the password is hidden. |
| `hideLabel` | string | `Hide password` | The accessible name of the button while the password is shown. |
| `target` | string or null | `null` | A CSS selector for the field. By default, the input of the closest input group, or else of the parent. |
| `variant` | string | `ghost` | The visual style variant of the button. |
| `size` | string | `icon-xs` | The size of the button, as in `InputGroup:Button`. |

| Block | Description |
| --- | --- |
| `default` | None: the button holds its two icons. |

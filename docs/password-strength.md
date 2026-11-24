# Password Strength

> A strength meter for the password typed in a field, with an optional list of the requirements it meets.

## Installation

- input
- label

## Usage

Wrap the field in `PasswordStrength`. A four-segment bar and a text under it follow what is typed: the level is the number of requirements met among four (the minimum length, an uppercase and a lowercase letter, a number, a symbol), and cannot go past weak while the password is shorter than `minLength`.

```twig
<twig:PasswordStrength>
    <twig:Input type="password" placeholder="Password" />
</twig:PasswordStrength>
```

This is a hint for the person typing, not a security check: validate the password on the server.

## Examples

### Basic

```twig
<twig:PasswordStrength class="mx-auto max-w-sm">
    <twig:Label for="strength-basic" class="text-sm font-medium">
        New password
    </twig:Label>
    <twig:Input id="strength-basic" type="password" placeholder="Type a password" />
</twig:PasswordStrength>
```

### With Requirements

`showRules` lists the requirements, each ticked when it is met.

```twig
<twig:PasswordStrength :showRules="true" class="mx-auto max-w-sm">
    <twig:Label for="strength-rules" class="text-sm font-medium">
        New password
    </twig:Label>
    <twig:Input id="strength-rules" type="password" placeholder="Type a password" />
</twig:PasswordStrength>
```

### Already Typed

```twig
<twig:PasswordStrength :showRules="true" class="mx-auto max-w-sm">
    <twig:Input type="password" value="Tr0ub4dor&3" aria-label="Password" />
</twig:PasswordStrength>
```

### Custom Texts

Every text is a prop. Write them in the language of the page.

```twig
<twig:PasswordStrength :minLength="10" :showRules="true" format="Robustesse : {level}" weakLabel="Faible" fairLabel="Moyenne" goodLabel="Bonne" strongLabel="Excellente" lengthRule="Au moins {min} caractères" caseRule="Une majuscule et une minuscule" digitRule="Un chiffre" symbolRule="Un symbole" class="mx-auto max-w-sm">
    <twig:Input type="password" placeholder="Mot de passe" aria-label="Mot de passe" />
</twig:PasswordStrength>
```

## Accessibility

- The bar and the text under it are hidden from screen readers: a live region announces the level only when it changes, so that typing is not interrupted on every keystroke.
- The requirements are plain text in a list. A met requirement is shown with a check icon and a stronger text color, so the information is not color alone.
- The field keeps its label: wrap it with a `Label` or give it an `aria-label`.

## API

### `<twig:PasswordStrength>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `minLength` | int | `8` | The minimum length. Under it, the password cannot be better than weak. |
| `showRules` | boolean | `false` | Whether to list the requirements, each marked when it is met. |
| `format` | string | `Password strength: {level}` | The text under the meter, with `{level}` for the name of the level. Nothing is shown while the field is empty. |
| `weakLabel` | string | `Weak` | The name of the first level. |
| `fairLabel` | string | `Fair` | The name of the second level. |
| `goodLabel` | string | `Good` | The name of the third level. |
| `strongLabel` | string | `Strong` | The name of the fourth level. |
| `lengthRule` | string | `At least {min} characters` | The length requirement, with `{min}`. |
| `caseRule` | string | `An uppercase and a lowercase letter` | The requirement of both cases. |
| `digitRule` | string | `A number` | The requirement of a digit. |
| `symbolRule` | string | `A symbol` | The requirement of a symbol. |

| Block | Description |
| --- | --- |
| `default` | The field: an `Input` or any `<input>`. |

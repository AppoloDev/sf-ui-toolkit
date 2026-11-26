# Environment Variables

> A table of environment variables or settings with secret values masked: reveal one or all, copy a value, and a plain list for non secret values.

## Usage

```twig
<twig:EnvironmentVariables :variables="[
    {name: 'APP_ENV', value: 'prod'},
    {name: 'DATABASE_URL', value: 'mysql://…', secret: true}
]" />
```

The masking is a display aid, not a security measure: the real value is in the page, so only render secrets for people who are allowed to see them.

## Examples

### Basic

Secret values are masked; the eye reveals one, the button above reveals all, the copy button copies the real value.

<!-- height: 320 -->

```twig
<twig:EnvironmentVariables :variables="[{name: 'APP_ENV', value: 'prod'}, {name: 'DATABASE_URL', value: 'mysql://app:s3cret@db:3306/app', secret: true}, {name: 'MAILER_DSN', value: 'smtp://user:pass@mail:587', secret: true}, {name: 'APP_DEBUG', value: '0'}]" />
```

### Plain Map

A map of names to values: nothing is secret, so there is no reveal control.

<!-- height: 240 -->

```twig
<twig:EnvironmentVariables :variables="{APP_ENV: 'dev', LOCALE: 'fr', TIMEZONE: 'Europe/Paris'}" />
```

### Custom Mask

`mask` is what is shown instead of a secret.

<!-- height: 320 -->

```twig
<twig:EnvironmentVariables mask="********" :variables="[{name: 'APP_ENV', value: 'prod'}, {name: 'DATABASE_URL', value: 'mysql://app:s3cret@db:3306/app', secret: true}, {name: 'MAILER_DSN', value: 'smtp://user:pass@mail:587', secret: true}, {name: 'APP_DEBUG', value: '0'}]" />
```

### Another Language

All texts are props.

<!-- height: 320 -->

```twig
<twig:EnvironmentVariables nameLabel="Nom" valueLabel="Valeur" revealLabel="Afficher {name}" hideLabel="Masquer {name}" revealAllLabel="Tout afficher" hideAllLabel="Tout masquer" copyLabel="Copier {name}" copiedLabel="Copié" label="Variables d'environnement" :variables="[{name: 'APP_ENV', value: 'prod'}, {name: 'DATABASE_URL', value: 'mysql://app:s3cret@db:3306/app', secret: true}, {name: 'MAILER_DSN', value: 'smtp://user:pass@mail:587', secret: true}, {name: 'APP_DEBUG', value: '0'}]" />
```

## Accessibility

- A real table with column and row headers; reveal buttons are toggle buttons (`aria-pressed`) named after the variable, and copying is announced in a live region.
- The masked text is not the value: assistive technology reads the mask until the value is revealed.

## API

### `<twig:EnvironmentVariables>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variables` | array | `[]` | `{name, value, secret}` items, or a map of names to values. |
| `nameLabel` | string | `Name` | The header of the name column. |
| `valueLabel` | string | `Value` | The header of the value column. |
| `revealLabel` | string | `Reveal {name}` | The name of the reveal button. |
| `hideLabel` | string | `Hide {name}` | The name of the hide button. |
| `revealAllLabel` | string | `Reveal all` | The text of the reveal all button. |
| `hideAllLabel` | string | `Hide all` | The text of the hide all button. |
| `copyLabel` | string | `Copy {name}` | The name of the copy button. |
| `copiedLabel` | string | `Copied` | The text announced once copied. |
| `mask` | string | `••••••••••••` | What is shown instead of a secret. |
| `label` | string | `Environment variables` | The accessible name of the table. |

| Block | Description |
| --- | --- |
| `default` | Not used. |

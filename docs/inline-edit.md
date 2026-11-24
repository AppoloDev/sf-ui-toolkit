# Inline Edit

> A text that turns into an input when clicked, and back to a text when saved or cancelled.

## Installation

- input
- button

## Usage

`InlineEdit` shows the value as a text with a pencil that appears on hover. A click, or `Enter` on the focused text, turns it into an input. `Enter` or the check button keeps the change, `Escape` or the cross drops it, and leaving the field keeps it. The input is always in the page, so give it a `name` and it is submitted with its form.

```twig
<twig:InlineEdit value="Project Phoenix" name="title" label="Project name" editLabel="Edit the project name" />
```

The `inline-edit:save` event, with `detail.value`, and `inline-edit:cancel` are dispatched on the element.

## Examples

### Basic

```twig
<div class="mx-auto max-w-sm text-sm">
    <twig:InlineEdit value="Project Phoenix" name="title" label="Project name" editLabel="Edit the project name" />
</div>
```

### Heading

The text takes the style of its container, and `inputClass` sets the one of the input.

```twig
<div class="mx-auto max-w-sm text-2xl font-semibold">
    <twig:InlineEdit value="Quarterly report" name="heading" label="Title" editLabel="Edit the title" inputClass="h-10 text-xl font-semibold" />
</div>
```

### Empty Value

When the value is empty, the `placeholder` is shown in a muted style.

```twig
<div class="mx-auto max-w-sm text-sm">
    <twig:InlineEdit value="" name="nickname" label="Nickname" placeholder="Add a nickname" editLabel="Edit the nickname" />
</div>
```

### In a Field

With a label above, as in a settings form.

```twig
<div class="mx-auto grid max-w-sm gap-1.5 text-sm">
    <span class="text-xs font-medium text-muted-foreground">
        Display name
    </span>
    <twig:InlineEdit value="Ada Lovelace" name="display_name" label="Display name" editLabel="Edit the display name" />
</div>
```

### Custom Texts

```twig
<div class="mx-auto max-w-sm text-sm">
    <twig:InlineEdit value="Projet Phénix" name="titre" label="Nom du projet" editLabel="Modifier le nom du projet" saveLabel="Enregistrer" cancelLabel="Annuler" />
</div>
```

## Accessibility

- The text is a real button: it takes the focus, and `Enter` or `Space` start the edit. Its accessible name is the text followed by `editLabel`.
- The input has the accessible name `label`, and the two buttons have `saveLabel` and `cancelLabel`.
- The focus moves to the input when the edit starts, and back to the text when it ends, so that a keyboard user is not lost.
- All texts are props: write them in the language of the page.

## API

### `<twig:InlineEdit>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | string | empty | The current text. |
| `name` | string or null | `null` | The name of the input, to submit it with a form. |
| `label` | string | `Value` | The accessible name of the input. |
| `placeholder` | string or null | `null` | The text shown, in a muted style, when the value is empty, and the placeholder of the input. |
| `editLabel` | string | `Edit` | The accessible name of the button that starts the edit. |
| `saveLabel` | string | `Save` | The accessible name of the save button. |
| `cancelLabel` | string | `Cancel` | The accessible name of the cancel button. |
| `inputClass` | string | empty | Classes added to the input. |

| Block | Description |
| --- | --- |
| `default` | None: the component holds its text, its input and its buttons. |

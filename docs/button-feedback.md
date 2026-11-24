# Button Feedback

> A button that shows a pending, a done and a failed state around an action: copying a text, or waiting for a request.

## Installation

- button

## Usage

Write what the button shows at rest in the default slot, and what it shows once the action is done in a `done` block. The action is a copy to the clipboard (`action="copy"`, the default) or a request (`action="request"`). A state left out gets an icon: a spinner while pending, a check once done, a cross if it failed.

```twig
<twig:ButtonFeedback text="npm install sf-ui-toolkit" doneAnnouncement="Copied to clipboard">
    <twig:ux:icon name="lucide:copy" />
    Copy
    <twig:block name="done">
        <twig:ux:icon name="lucide:check" />
        Copied
    </twig:block>
</twig:ButtonFeedback>
```

While the action runs the button is disabled and `aria-busy`. Once it ends it shows `done` or `failed` for `duration` milliseconds, then goes back to rest. The state is also on the button as `data-state`, and a `button-feedback:done` or `button-feedback:failed` event is dispatched.

## Examples

### Copy Feedback

```twig
<twig:ButtonFeedback text="https://example.com/invite/abc123" doneAnnouncement="Link copied">
    <twig:ux:icon name="lucide:link" />
    Copy link
    <twig:block name="done">
        <twig:ux:icon name="lucide:check" />
        Link copied
    </twig:block>
</twig:ButtonFeedback>
```

### Icon Copy

An icon-only button. Give it an `aria-label`: the announcement says what happened, not what the button is.

```twig
<twig:ButtonFeedback text="hello@example.com" size="icon" variant="ghost" aria-label="Copy the email address" doneAnnouncement="Email address copied">
    <twig:ux:icon name="lucide:copy" />
</twig:ButtonFeedback>
```

### Copy From a Field

`from` is a selector: the value of a field, or the text of any other element, is copied.

```twig
<div class="mx-auto flex w-full max-w-sm items-center gap-2">
    <twig:Input id="feedback-source" value="sk_live_51N2xV3gHj" readonly />
    <twig:ButtonFeedback from="#feedback-source" size="icon" aria-label="Copy the key" doneAnnouncement="Key copied">
        <twig:ux:icon name="lucide:copy" />
    </twig:ButtonFeedback>
</div>
```

### Async Action

With `action="request"` the click sends a request. The button shows the `pending` block while it runs, then `done` if the response is fine and `failed` otherwise.

```twig
<twig:ButtonFeedback action="request" url="../button-feedback.html" doneAnnouncement="Changes saved">
    Save changes
    <twig:block name="pending">
        <twig:ux:icon name="lucide:loader-circle" class="animate-spin" />
        Saving…
    </twig:block>
    <twig:block name="done">
        <twig:ux:icon name="lucide:check" />
        Saved
    </twig:block>
</twig:ButtonFeedback>
```

### Failed Request

```twig
<twig:ButtonFeedback action="request" url="../missing-page.html" variant="destructive" failedAnnouncement="Deleting failed">
    <twig:ux:icon name="lucide:trash-2" />
    Delete
    <twig:block name="pending">
        <twig:ux:icon name="lucide:loader-circle" class="animate-spin" />
        Deleting…
    </twig:block>
    <twig:block name="failed">
        <twig:ux:icon name="lucide:circle-alert" />
        Could not delete
    </twig:block>
</twig:ButtonFeedback>
```

## Accessibility

- The button is disabled and `aria-busy` while pending, so that a second click cannot start the action again.
- A live region announces the result: `doneAnnouncement` or `failedAnnouncement`. Write them in the language of the page, and say what happened (« Link copied »), because the new content of the button is not read by itself.
- An icon-only button needs an `aria-label`. It does not change with the state: the live region carries the news.
- Copying uses the clipboard API, and falls back to a hidden field where it is missing. If both fail, the button shows `failed`.

## API

### `<twig:ButtonFeedback>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | string | `copy` | What a click does: `copy` the text to the clipboard, or send a `request` and wait for the answer. |
| `text` | string or null | `null` | The text to copy. |
| `from` | string or null | `null` | A CSS selector for the element to copy: its value for a field, its text otherwise. Used when `text` is `null`. |
| `url` | string or null | `null` | The URL of the request, for the `request` action. |
| `method` | string | `GET` | The HTTP method of the request. |
| `duration` | int | `2000` | How long, in milliseconds, the done and failed states stay before the button goes back to rest. |
| `variant` | string | `outline` | The visual style variant of the button. |
| `size` | string | `default` | The size of the button. |
| `doneAnnouncement` | string | `Done` | What is announced to screen readers when the action succeeds. |
| `failedAnnouncement` | string | `Failed` | What is announced to screen readers when the action fails. |

| Block | Description |
| --- | --- |
| `default` | What the button shows at rest. |
| `pending` | What it shows while the action runs. A spinner when left out. |
| `done` | What it shows once the action succeeded. A check when left out. |
| `failed` | What it shows once the action failed. A cross when left out. |

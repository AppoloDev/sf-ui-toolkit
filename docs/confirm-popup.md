# Confirm Popup

> A confirmation popup anchored to the button that asks for it: a message, an accept and a reject button, events for both, and the option to submit a form on accept.

## Installation

- button
- input
- avatar
- table
- sonner (only for the toast example)

## Usage

Put the button in `ConfirmPopup`. A click opens the popup next to it with the question and two buttons.

```twig
<twig:ConfirmPopup message="Delete this record?" acceptLabel="Delete" rejectLabel="Cancel" :destructive="true">
    <twig:Button variant="destructive">Delete</twig:Button>
</twig:ConfirmPopup>
```

To act on the answer, listen to `confirm-popup:accept` or pass `form`, the id of the form to submit on accept.

## Examples

### Basic

The popup opens under the button, with an arrow that points to it. Escape, a click outside or the reject button closes it.

<!-- height: 200 -->

```twig
<twig:ConfirmPopup message="Are you sure you want to proceed?" icon="lucide:circle-help">
    <twig:Button variant="outline">
        Save
    </twig:Button>
</twig:ConfirmPopup>
```

### Delete

`destructive` colors the accept button and puts the focus on the safe choice.

<!-- height: 200 -->

```twig
<twig:ConfirmPopup message="Do you want to delete this record?" icon="lucide:triangle-alert" acceptLabel="Delete" rejectLabel="Cancel" :destructive="true">
    <twig:Button variant="destructive">
        <twig:ux:icon name="lucide:trash-2" />
        Delete
    </twig:Button>
</twig:ConfirmPopup>
```

### On Top

`side="top"` is the preferred side; the popup flips to the other side when there is no room.

<!-- height: 260 -->

```twig
<div class="flex h-48 items-end">
    <twig:ConfirmPopup side="top" message="Discard your changes?" icon="lucide:circle-help">
        <twig:Button variant="outline">
            Discard
        </twig:Button>
    </twig:ConfirmPopup>
</div>
```

### Custom Content

The `body` block replaces the message, for anything a question needs.

<!-- height: 220 -->

```twig
<twig:ConfirmPopup acceptLabel="Remove" rejectLabel="Keep">
    <twig:Button variant="outline">
        Remove member
    </twig:Button>
    <twig:block name="body">
        <div class="flex items-center gap-3">
            <twig:Avatar>
                <twig:Avatar:Fallback>AL</twig:Avatar:Fallback>
            </twig:Avatar>
            <div>
                <p class="font-medium">
                    Remove Ada Lovelace?
                </p>
                <p class="text-xs text-muted-foreground">
                    She will lose access to the project.
                </p>
            </div>
        </div>
    </twig:block>
</twig:ConfirmPopup>
```

### Submit A Form

`form` is the id of the form to submit when the user accepts.

<!-- height: 240 -->

```twig
<form id="confirm-form" class="grid gap-2" onsubmit="event.preventDefault(); this.querySelector('output').textContent = 'Submitted';">
    <twig:Input name="title" value="Quarterly report" aria-label="Title" class="max-w-xs" />
    <div>
        <twig:ConfirmPopup form="confirm-form" message="Publish this report?" icon="lucide:send">
            <twig:Button type="button" variant="outline">
                Publish
            </twig:Button>
        </twig:ConfirmPopup>
    </div>
    <output class="text-sm text-muted-foreground"></output>
</form>
```

### Submit Button As Trigger

A trigger that is itself a submit button needs no `form`: the popup stops the submit and sends it on accept.

<!-- height: 240 -->

```twig
<form class="flex items-center gap-3" onsubmit="event.preventDefault(); this.querySelector('output').textContent = 'Deleted';">
    <twig:ConfirmPopup message="Delete the account?" acceptLabel="Delete" rejectLabel="Cancel" :destructive="true" icon="lucide:triangle-alert">
        <twig:Button type="submit" variant="destructive">
            Delete account
        </twig:Button>
    </twig:ConfirmPopup>
    <output class="text-sm text-muted-foreground"></output>
</form>
```

### Events

`confirm-popup:accept` and `confirm-popup:reject` (also fired when the popup is dismissed) carry the decision to your own code.

<!-- height: 240 -->

```twig
<div class="grid justify-items-start gap-2">
    <twig:ConfirmPopup id="confirm-events" message="Archive this item?">
        <twig:Button variant="outline">
            Archive
        </twig:Button>
    </twig:ConfirmPopup>
    <p class="text-sm text-muted-foreground">
        Last answer: <code id="confirm-events-answer">none</code>
    </p>
</div>
<script>
    const popup = document.querySelector('[data-controller="confirm-popup"]');
    popup.addEventListener('confirm-popup:accept', () => document.getElementById('confirm-events-answer').textContent = 'accepted');
    popup.addEventListener('confirm-popup:reject', () => document.getElementById('confirm-events-answer').textContent = 'rejected');
</script>
```

### With A Toast

On accept, a toast confirms the action: the event clicks a trigger of `Sonner`.

<!-- height: 240 -->

```twig
<twig:Sonner>
    <twig:ConfirmPopup id="confirm-toast" message="Send the invitation?" icon="lucide:mail">
        <twig:Button variant="outline">
            Invite
        </twig:Button>
    </twig:ConfirmPopup>
    <button type="button" hidden id="confirm-toast-fire" data-action="click->sonner#fire" data-sonner-title-param="Invitation sent" data-sonner-description-param="They will get an email."></button>
</twig:Sonner>
<script>
    document.querySelector('[data-controller="confirm-popup"]').addEventListener('confirm-popup:accept', () => document.getElementById('confirm-toast-fire').click());
</script>
```

### Row Actions

One popup per row of a table, each anchored to its own button.

<!-- height: 280 -->

```twig
<twig:Table>
    <twig:Table:Body>
        <twig:Table:Row>
            <twig:Table:Cell class="font-medium">
                INV001
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                <twig:ConfirmPopup message="Delete INV001?" acceptLabel="Delete" rejectLabel="Cancel" :destructive="true">
                    <twig:Button variant="ghost" size="icon-sm" aria-label="Delete INV001">
                        <twig:ux:icon name="lucide:trash-2" />
                    </twig:Button>
                </twig:ConfirmPopup>
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:Row>
            <twig:Table:Cell class="font-medium">
                INV002
            </twig:Table:Cell>
            <twig:Table:Cell class="text-right">
                <twig:ConfirmPopup message="Delete INV002?" acceptLabel="Delete" rejectLabel="Cancel" :destructive="true">
                    <twig:Button variant="ghost" size="icon-sm" aria-label="Delete INV002">
                        <twig:ux:icon name="lucide:trash-2" />
                    </twig:Button>
                </twig:ConfirmPopup>
            </twig:Table:Cell>
        </twig:Table:Row>
    </twig:Table:Body>
</twig:Table>
```

### Other Language

All texts are props.

<!-- height: 200 -->

```twig
<twig:ConfirmPopup message="Voulez-vous continuer ?" acceptLabel="Oui" rejectLabel="Non" icon="lucide:circle-help">
    <twig:Button variant="outline">
        Continuer
    </twig:Button>
</twig:ConfirmPopup>
```

## Accessibility

- The popup is a native popover with `role="alertdialog"` named by its message: it opens above the page, closes on Escape and on a click outside, and gives the focus back to the trigger.
- The focus goes to the accept button, or to the reject button when `destructive`, so that a destructive action is never one Enter away.
- Dismissing the popup counts as a rejection.
- All texts are props: write them in the language of the page.

## Extending

The controller dispatches `confirm-popup:accept`, `confirm-popup:reject`, `confirm-popup:open` and `confirm-popup:close` on the wrapper. A trigger that is a `type="submit"` button submits its own form after an accept.

## API

### `<twig:ConfirmPopup>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `message` | string | `Are you sure?` | The question. |
| `acceptLabel` | string | `Yes` | The text of the accept button. |
| `rejectLabel` | string | `No` | The text of the reject button. |
| `side` | `bottom`, `top` | `bottom` | The preferred side, flipped when there is no room. |
| `icon` | string or null | `null` | A Symfony UX Icons name shown before the message. |
| `destructive` | bool | `false` | Style the accept button as destructive and focus the reject button first. |
| `form` | string or null | `null` | The id of a form to submit on accept. |
| `id` | string or null | `null` | The id of the popup. |

| Block | Description |
| --- | --- |
| `default` | The trigger: a button. |
| `body` | Replaces the message, for custom content. |

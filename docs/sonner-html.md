# Sonner Html

> A Sonner whose toasts can hold any markup, taken from a template, and that can follow a request from a loading toast to its result.

## Installation

- sonner
- button
- avatar

## Usage

`SonnerHtml` wraps a `Sonner`: every attribute you give it goes to the `Sonner`. Write each toast as a `<template>` in the slot, then show it from any element with the `show` action. What is inside the template is the whole content of the toast, so it can hold avatars, buttons, links or anything else.

```twig
<twig:SonnerHtml position="bottom-right">
    <template id="saved">
        <p class="text-sm font-semibold">
            Changes saved
        </p>
    </template>
    <twig:Button variant="outline" data-action="click->sonner-html#show" data-sonner-html-template-param="#saved">
        Show toast
    </twig:Button>
</twig:SonnerHtml>
```

The parameters of `show` are `data-sonner-html-*-param` attributes: `template` (a selector, required), `id`, `type`, `duration` in milliseconds and `class`, whose classes are added to the toast. A toast that reuses an `id` replaces the previous one. A close button is any element with `data-slot="toast-close"` in the template.

The `request` action sends a request, shows a loading toast, then replaces it with a success or an error toast, depending on the response. Its parameters are `url` (required), `method`, `id`, `loading`, `success`, `error`, `successDescription` and `errorDescription`.

## Examples

### Rich Content

```twig
<twig:SonnerHtml>
    <template id="rich-content">
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <div class="flex-1 space-y-1">
            <p class="text-sm font-semibold">
                shadcn commented on your pull request
            </p>
            <p class="text-sm text-muted-foreground">
                Looks good to me, ready to merge.
            </p>
            <div class="flex gap-2 pt-1">
                <twig:Button size="sm">
                    Reply
                </twig:Button>
                <twig:Button size="sm" variant="outline">
                    View
                </twig:Button>
            </div>
        </div>
        <button type="button" data-slot="toast-close" aria-label="Close" class="rounded-md p-1 hover:bg-muted">
            <twig:ux:icon name="lucide:x" class="size-4" />
        </button>
    </template>
    <twig:Button variant="outline" data-action="click->sonner-html#show" data-sonner-html-template-param="#rich-content">
        Show toast
    </twig:Button>
</twig:SonnerHtml>
```

### Status Alert

```twig
<twig:SonnerHtml>
    <template id="status-alert">
        <div class="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
            <twig:ux:icon name="lucide:triangle-alert" class="size-5" />
        </div>
        <div class="flex-1 space-y-1">
            <p class="text-sm font-semibold">
                Storage almost full
            </p>
            <p class="text-sm text-muted-foreground">
                You have used 92% of your 10 GB. Free some space or upgrade your plan.
            </p>
        </div>
        <twig:Button size="sm" variant="outline">
            Upgrade
        </twig:Button>
    </template>
    <twig:Button variant="outline" data-action="click->sonner-html#show" data-sonner-html-template-param="#status-alert">
        Show toast
    </twig:Button>
</twig:SonnerHtml>
```

### Accent Border

`class` adds classes to the toast itself. The `!` suffix makes them win over the default border.

```twig
<twig:SonnerHtml>
    <template id="accent-border">
        <twig:ux:icon name="lucide:circle-check" class="mt-0.5 size-4 shrink-0 text-emerald-600" />
        <div class="flex-1 space-y-1">
            <p class="text-sm font-semibold">
                Deployment finished
            </p>
            <p class="text-sm text-muted-foreground">
                The new version is live on production.
            </p>
        </div>
    </template>
    <twig:Button variant="outline" data-action="click->sonner-html#show" data-sonner-html-template-param="#accent-border" data-sonner-html-class-param="border-s-4! border-s-emerald-500!">
        Show toast
    </twig:Button>
</twig:SonnerHtml>
```

### Integration

```twig
<twig:SonnerHtml>
    <template id="integration">
        <div class="flex items-center gap-1.5">
            <div class="flex size-9 items-center justify-center rounded-lg bg-muted">
                <twig:ux:icon name="lucide:github" class="size-5" />
            </div>
            <twig:ux:icon name="lucide:link-2" class="size-4 text-muted-foreground" />
            <div class="flex size-9 items-center justify-center rounded-lg bg-muted">
                <twig:ux:icon name="lucide:message-square" class="size-5" />
            </div>
        </div>
        <div class="flex-1 space-y-1">
            <p class="text-sm font-semibold">
                GitHub is connected
            </p>
            <p class="text-sm text-muted-foreground">
                New pull requests will be posted in #engineering.
            </p>
        </div>
    </template>
    <twig:Button variant="outline" data-action="click->sonner-html#show" data-sonner-html-template-param="#integration">
        Show toast
    </twig:Button>
</twig:SonnerHtml>
```

### Invert Avatar Group

```twig
<twig:SonnerHtml>
    <template id="invert-avatars">
        <twig:Avatar:Group>
            <twig:Avatar>
                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                <twig:Avatar:Fallback>
                    CN
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <twig:Avatar>
                <twig:Avatar:Image src="https://github.com/vercel.png" alt="vercel" />
                <twig:Avatar:Fallback>
                    VC
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <twig:Avatar>
                <twig:Avatar:Fallback>
                    +3
                </twig:Avatar:Fallback>
            </twig:Avatar>
        </twig:Avatar:Group>
        <div class="flex-1 space-y-1">
            <p class="text-sm font-semibold">
                5 people joined the project
            </p>
            <p class="text-sm opacity-70">
                They can now see the board.
            </p>
        </div>
    </template>
    <twig:Button variant="outline" data-action="click->sonner-html#show" data-sonner-html-template-param="#invert-avatars" data-sonner-html-class-param="bg-foreground! text-background! border-transparent!">
        Show toast
    </twig:Button>
</twig:SonnerHtml>
```

### Updatable

`request` shows a loading toast, then replaces it, under the same `id`, with the result of the request: a success if the response is fine, an error otherwise.

```twig
<twig:SonnerHtml>
    <twig:Button variant="outline" data-action="click->sonner-html#request" data-sonner-html-url-param="../sonner-html.html" data-sonner-html-id-param="save" data-sonner-html-loading-param="Saving changes…" data-sonner-html-success-param="Changes saved" data-sonner-html-success-description-param="Everything is up to date." data-sonner-html-error-param="Could not save">
        Save changes
    </twig:Button>
</twig:SonnerHtml>
```

### Promise

The same action with a request that works and one that fails.

```twig
<twig:SonnerHtml>
    <div class="flex flex-wrap gap-2">
        <twig:Button variant="outline" data-action="click->sonner-html#request" data-sonner-html-url-param="../sonner-html.html" data-sonner-html-id-param="report" data-sonner-html-loading-param="Sending the report…" data-sonner-html-success-param="Report sent" data-sonner-html-error-param="Sending failed">
            Resolve
        </twig:Button>
        <twig:Button variant="outline" data-action="click->sonner-html#request" data-sonner-html-url-param="../missing-page.html" data-sonner-html-id-param="report" data-sonner-html-loading-param="Sending the report…" data-sonner-html-success-param="Report sent" data-sonner-html-error-param="Sending failed" data-sonner-html-error-description-param="The server did not answer.">
            Reject
        </twig:Button>
    </div>
</twig:SonnerHtml>
```

## Accessibility

- Toasts keep the roles of the Sonner they belong to: `role="status"` with a polite live region, `role="alert"` and an assertive one for the `error` type.
- A toast made from a template has no title or description element of its own: write the text so that it reads well on its own, and give icon-only buttons an `aria-label`.
- Timers pause while the pointer is over the toasts, as in `Sonner`.

## API

### `<twig:SonnerHtml>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| any attribute | | | Passed to the wrapped `Sonner`: `position`, `expand`, `richColors`, `closeButton`, `duration`, `gap`, `visibleToasts`, `dir`, `theme` and `class`. |

| Block | Description |
| --- | --- |
| `default` | The `<template>` elements that hold the toasts, and the triggers. |

# Dialog

## Examples

### Full Width Button

```twig
<div style="min-height: 320px">
    <twig:Dialog id="dlg-timeout">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Session timeout
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-sm">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Session expired
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    You were signed out after a period of inactivity.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <twig:Dialog:Footer>
                <twig:Button class="w-full">
                    Sign In Again
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Destructive Confirmation

```twig
<div style="min-height: 340px">
    <twig:Dialog id="dlg-delete">
        <twig:Dialog:Trigger>
            <twig:Button variant="destructive" {{ ...dialog_trigger_attrs }}>
                Delete project
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <span class="mb-2 flex size-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <twig:ux:icon name="lucide:triangle-alert" class="size-5" />
                </span>
                <twig:Dialog:Title>
                    Delete this project?
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    This permanently removes the project and all of its data. This cannot be undone.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <twig:Dialog:Footer>
                <twig:Dialog:Close>
                    <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Dialog:Close>
                <twig:Button variant="destructive">
                    Delete
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Cookie Consent

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-cookies">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Cookie settings
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Cookie preferences
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Choose which cookies you allow.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-3">
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="ck-essential">
                        Essential
                    </twig:Field:Label>
                    <twig:Switch id="ck-essential" name="essential" checked="1" disabled="1" />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="ck-analytics">
                        Analytics
                    </twig:Field:Label>
                    <twig:Switch id="ck-analytics" name="analytics" checked="" disabled="" />
                </twig:Field>
                <twig:Field orientation="horizontal" class="justify-between">
                    <twig:Field:Label for="ck-marketing">
                        Marketing
                    </twig:Field:Label>
                    <twig:Switch id="ck-marketing" name="marketing" checked="" disabled="" />
                </twig:Field>
            </div>
            <twig:Dialog:Footer>
                <twig:Dialog:Close>
                    <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                        Save Preferences
                    </twig:Button>
                </twig:Dialog:Close>
                <twig:Button>
                    Accept All
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Keyboard Shortcuts

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-shortcuts">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Keyboard shortcuts
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-xl">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Keyboard shortcuts
                </twig:Dialog:Title>
            </twig:Dialog:Header>
            <div class="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                        Search
                    </span>
                    <twig:Kbd>
                        ⌘K
                    </twig:Kbd>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                        Save
                    </span>
                    <twig:Kbd>
                        ⌘S
                    </twig:Kbd>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                        Copy
                    </span>
                    <twig:Kbd>
                        ⌘C
                    </twig:Kbd>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                        Paste
                    </span>
                    <twig:Kbd>
                        ⌘V
                    </twig:Kbd>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                        Undo
                    </span>
                    <twig:Kbd>
                        ⌘Z
                    </twig:Kbd>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                        Redo
                    </span>
                    <twig:Kbd>
                        ⇧⌘Z
                    </twig:Kbd>
                </div>
            </div>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Full-Screen

```twig
<div style="min-height: 320px">
    <twig:Dialog id="dlg-full">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open full screen
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="flex h-[90vh] flex-col gap-0 p-0 sm:max-w-[95vw]">
            <twig:Dialog:Header class="border-b px-6 py-4">
                <twig:Dialog:Title>
                    Full screen dialog
                </twig:Dialog:Title>
            </twig:Dialog:Header>
            <div class="flex-1 overflow-y-auto p-6 text-sm">
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mb-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <twig:Dialog:Footer class="border-t px-6 py-4">
                <twig:Dialog:Close>
                    <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                        Close
                    </twig:Button>
                </twig:Dialog:Close>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Share Link

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-share">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Share
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Share link
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Anyone with the link can view.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-4">
                <twig:InputGroup>
                    <twig:InputGroup:Input value="https://example.com/s/8f2k1" readonly aria-label="Link" />
                    <twig:InputGroup:Addon align="inline-end">
                        <twig:InputGroup:Button size="xs">
                            Copy
                        </twig:InputGroup:Button>
                    </twig:InputGroup:Addon>
                </twig:InputGroup>
            </div>
            <twig:Dialog:Footer>
                <twig:Dialog:Close>
                    <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                        Close
                    </twig:Button>
                </twig:Dialog:Close>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Scrollable Body

```twig
<div style="min-height: 460px">
    <twig:Dialog id="dlg-scroll">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Release notes
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Scroll the content.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="max-h-64 overflow-y-auto pe-2">
                <p class="text-sm text-muted-foreground">
                    Paragraph 1. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 2. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 3. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 4. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 5. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 6. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 7. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 8. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 9. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 10. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 11. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 12. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 13. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 14. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 15. The body scrolls when the content is taller than the dialog.
                </p>
            </div>
            <twig:Dialog:Footer>
                <twig:Dialog:Close>
                    <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                        Close
                    </twig:Button>
                </twig:Dialog:Close>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Sticky Header

```twig
<div style="min-height: 460px">
    <twig:Dialog id="dlg-sticky">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header class="border-b pb-3">
                <twig:Dialog:Title>
                    Changelog
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    The header stays in view.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="max-h-64 overflow-y-auto pe-2">
                <p class="text-sm text-muted-foreground">
                    Paragraph 1. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 2. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 3. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 4. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 5. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 6. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 7. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 8. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 9. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 10. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 11. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 12. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 13. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 14. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 15. The body scrolls when the content is taller than the dialog.
                </p>
            </div>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Terms And Conditions

```twig
<div style="min-height: 460px">
    <twig:Dialog id="dlg-terms">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Read terms
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Terms and conditions
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Please read before continuing.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <twig:ScrollArea class="h-40 rounded-md border p-3">
                <p class="text-sm text-muted-foreground">
                    Paragraph 1. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 2. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 3. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 4. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 5. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 6. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 7. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 8. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 9. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 10. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 11. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 12. The body scrolls when the content is taller than the dialog.
                </p>
                <p class="text-sm text-muted-foreground">
                    Paragraph 13. The body scrolls when the content is taller than the dialog.
                </p>
            </twig:ScrollArea>
            <twig:Dialog:Footer>
                <twig:Dialog:Close>
                    <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                        Decline
                    </twig:Button>
                </twig:Dialog:Close>
                <twig:Button>
                    Accept
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Type To Confirm Delete

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-typed">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Delete project
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Delete project
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Type the project name to confirm.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-4">
                <twig:Field>
                    <twig:Field:Label for="dlgt-n">
                        Project name
                    </twig:Field:Label>
                    <twig:Input id="dlgt-n" autocomplete="off" placeholder="acme-website" value="" />
                </twig:Field>
            </div>
            <twig:Dialog:Footer>
                <twig:Dialog:Close>
                    <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Dialog:Close>
                <twig:Button variant="destructive">
                    Delete forever
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Newsletter Signup

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-news">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Subscribe
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Join the newsletter
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    One email per week.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-4">
                <twig:Field>
                    <twig:Field:Label for="dlgn-e">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="dlgn-e" type="email" placeholder="you@example.com" value="" />
                </twig:Field>
            </div>
            <twig:Dialog:Footer>
                <twig:Button type="submit">
                    Subscribe
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Feedback

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-fb">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Send feedback
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Send feedback
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Tell us how we are doing.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-4">
                <twig:Field>
                    <twig:Field:Label for="dlgf-m">
                        Message
                    </twig:Field:Label>
                    <twig:Textarea id="dlgf-m" rows="4" />
                </twig:Field>
            </div>
            <twig:Dialog:Footer>
                <twig:Button type="submit">
                    Send
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Rating

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-rate">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Rate us
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    How was your visit?
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Pick a rating.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <twig:ToggleGroup type="single" variant="outline" class="w-full">
                <twig:ToggleGroup:Item value="1" class="flex-1" aria-label="1 out of 5">
                    1
                </twig:ToggleGroup:Item>
                <twig:ToggleGroup:Item value="2" class="flex-1" aria-label="2 out of 5">
                    2
                </twig:ToggleGroup:Item>
                <twig:ToggleGroup:Item value="3" class="flex-1" aria-label="3 out of 5">
                    3
                </twig:ToggleGroup:Item>
                <twig:ToggleGroup:Item value="4" class="flex-1" aria-label="4 out of 5">
                    4
                </twig:ToggleGroup:Item>
                <twig:ToggleGroup:Item value="5" class="flex-1" aria-label="5 out of 5">
                    5
                </twig:ToggleGroup:Item>
            </twig:ToggleGroup>
            <twig:Dialog:Footer>
                <twig:Button type="submit">
                    Submit rating
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### One Time Code

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-otp">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Verify
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Enter your code
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    We sent a 6-digit code to your phone.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="flex justify-center">
                <twig:InputOtp inputs="6">
                    <twig:InputOtp:Group>
                        <twig:InputOtp:Slot input="1" pattern="[0-9]" />
                        <twig:InputOtp:Slot input="2" pattern="[0-9]" />
                        <twig:InputOtp:Slot input="3" pattern="[0-9]" />
                        <twig:InputOtp:Slot input="4" pattern="[0-9]" />
                        <twig:InputOtp:Slot input="5" pattern="[0-9]" />
                        <twig:InputOtp:Slot input="6" pattern="[0-9]" />
                    </twig:InputOtp:Group>
                </twig:InputOtp>
            </div>
            <twig:Dialog:Footer>
                <twig:Button type="submit" class="w-full">
                    Verify
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Sign Up

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-signup">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Create account
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Create an account
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Start in under a minute.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-4">
                <twig:Field>
                    <twig:Field:Label for="dlgs-n">
                        Name
                    </twig:Field:Label>
                    <twig:Input id="dlgs-n" value="" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="dlgs-e">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="dlgs-e" type="email" value="" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="dlgs-p">
                        Password
                    </twig:Field:Label>
                    <twig:Input id="dlgs-p" type="password" value="" />
                </twig:Field>
            </div>
            <twig:Dialog:Footer>
                <twig:Button type="submit" class="w-full">
                    Sign up
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Sign In

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-signin">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Sign in
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Welcome back
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Sign in to continue.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-4">
                <twig:Field>
                    <twig:Field:Label for="dlgi-e">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="dlgi-e" type="email" value="" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="dlgi-p">
                        Password
                    </twig:Field:Label>
                    <twig:Input id="dlgi-p" type="password" value="" />
                </twig:Field>
            </div>
            <twig:Dialog:Footer>
                <twig:Button type="submit" class="w-full">
                    Sign in
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Invite Team Members

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-invite">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Invite
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Invite your team
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Send an invitation by email.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-4">
                <twig:Field>
                    <twig:Field:Label for="dlgv-1">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="dlgv-1" type="email" placeholder="jane@example.com" value="" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="dlgv-2">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="dlgv-2" type="email" placeholder="john@example.com" value="" />
                </twig:Field>
            </div>
            <twig:Dialog:Footer>
                <twig:Button type="submit">
                    Send invites
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Card Details

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-card">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Add card
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Payment method
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Your card is stored securely.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-4">
                <twig:Field>
                    <twig:Field:Label for="dlgc-n">
                        Card number
                    </twig:Field:Label>
                    <twig:Input id="dlgc-n" inputmode="numeric" placeholder="1234 1234 1234 1234" value="" />
                </twig:Field>
                <div class="grid grid-cols-2 gap-4">
                    <twig:Field>
                        <twig:Field:Label for="dlgc-e">
                            Expiry
                        </twig:Field:Label>
                        <twig:Input id="dlgc-e" placeholder="MM/YY" value="" />
                    </twig:Field>
                    <twig:Field>
                        <twig:Field:Label for="dlgc-c">
                            CVC
                        </twig:Field:Label>
                        <twig:Input id="dlgc-c" placeholder="123" value="" />
                    </twig:Field>
                </div>
            </div>
            <twig:Dialog:Footer>
                <twig:Button type="submit">
                    Save card
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Checkout

```twig
<div style="min-height: 460px">
    <twig:Dialog id="dlg-checkout">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Checkout
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Order summary
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    2 items.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-4">
                <div class="flex items-center justify-between text-sm">
                    <span>
                        Aero Chair
                    </span>
                    <span class="tabular-nums">
                        $189.00
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span>
                        Desk Lamp
                    </span>
                    <span class="tabular-nums">
                        $64.00
                    </span>
                </div>
                <twig:Separator />
                <div class="flex items-center justify-between font-medium">
                    <span>
                        Total
                    </span>
                    <span class="tabular-nums">
                        $253.00
                    </span>
                </div>
            </div>
            <twig:Dialog:Footer>
                <twig:Button class="w-full">
                    Pay $253.00
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Plan Selection

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-plan">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Change plan
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Choose a plan
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Switch at any time.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <twig:RadioGroup>
                <twig:Field:Label for="dlgp-free" class="flex cursor-pointer items-center gap-3 rounded-lg border p-3 font-normal has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                    <twig:RadioGroup:Item id="dlgp-free" name="dlgp" value="free" />
                    <span class="flex flex-1 items-center justify-between">
                        <span class="font-medium">
                            Free
                        </span>
                        <span class="text-sm text-muted-foreground">
                            $0
                        </span>
                    </span>
                </twig:Field:Label>
                <twig:Field:Label for="dlgp-pro" class="flex cursor-pointer items-center gap-3 rounded-lg border p-3 font-normal has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                    <twig:RadioGroup:Item id="dlgp-pro" name="dlgp" value="pro" checked />
                    <span class="flex flex-1 items-center justify-between">
                        <span class="font-medium">
                            Pro
                        </span>
                        <span class="text-sm text-muted-foreground">
                            $12 / month
                        </span>
                    </span>
                </twig:Field:Label>
                <twig:Field:Label for="dlgp-team" class="flex cursor-pointer items-center gap-3 rounded-lg border p-3 font-normal has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                    <twig:RadioGroup:Item id="dlgp-team" name="dlgp" value="team" />
                    <span class="flex flex-1 items-center justify-between">
                        <span class="font-medium">
                            Team
                        </span>
                        <span class="text-sm text-muted-foreground">
                            $30 / month
                        </span>
                    </span>
                </twig:Field:Label>
            </twig:RadioGroup>
            <twig:Dialog:Footer>
                <twig:Button type="submit">
                    Upgrade
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Edit Profile

```twig
<div style="min-height: 520px">
    <twig:Dialog id="dlg-prof">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Edit profile
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Edit profile
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Update your public details.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <div class="grid gap-4">
                <twig:Avatar size="lg">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <twig:Field>
                    <twig:Field:Label for="dlgq-n">
                        Name
                    </twig:Field:Label>
                    <twig:Input id="dlgq-n" value="Jane Doe" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="dlgq-b">
                        Bio
                    </twig:Field:Label>
                    <twig:Textarea id="dlgq-b" rows="3" />
                </twig:Field>
            </div>
            <twig:Dialog:Footer>
                <twig:Dialog:Close>
                    <twig:Button variant="outline" {{ ...dialog_close_attrs }}>
                        Cancel
                    </twig:Button>
                </twig:Dialog:Close>
                <twig:Button type="submit">
                    Save
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Onboarding

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-onb">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Start tour
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Welcome aboard
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Step 1 of 3: set up your workspace.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <twig:Progress :value="33" />
            <div class="grid gap-4">
                <twig:Field>
                    <twig:Field:Label for="dlgo-n">
                        Workspace name
                    </twig:Field:Label>
                    <twig:Input id="dlgo-n" value="Acme" />
                </twig:Field>
            </div>
            <twig:Dialog:Footer>
                <twig:Dialog:Close>
                    <twig:Button variant="ghost" {{ ...dialog_close_attrs }}>
                        Skip
                    </twig:Button>
                </twig:Dialog:Close>
                <twig:Button>
                    Next
                </twig:Button>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Wide Dialog

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-wide">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open wide
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-2xl">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Wide dialog
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    Use a larger max width.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <p class="text-sm text-muted-foreground">
                Pass a width class such as sm:max-w-2xl on the content.
            </p>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

### Without Close Button

```twig
<div style="min-height: 420px">
    <twig:Dialog id="dlg-noc">
        <twig:Dialog:Trigger>
            <twig:Button variant="outline" {{ ...dialog_trigger_attrs }}>
                Open
            </twig:Button>
        </twig:Dialog:Trigger>
        <twig:Dialog:Content class="sm:max-w-md" :showCloseButton="false">
            <twig:Dialog:Header>
                <twig:Dialog:Title>
                    Heads up
                </twig:Dialog:Title>
                <twig:Dialog:Description>
                    The corner button is hidden.
                </twig:Dialog:Description>
            </twig:Dialog:Header>
            <twig:Dialog:Footer>
                <twig:Dialog:Close>
                    <twig:Button {{ ...dialog_close_attrs }}>
                        Got it
                    </twig:Button>
                </twig:Dialog:Close>
            </twig:Dialog:Footer>
        </twig:Dialog:Content>
    </twig:Dialog>
</div>
```

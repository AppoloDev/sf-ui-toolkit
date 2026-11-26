# Textarea

## Examples

### Basic

```twig
<twig:Textarea placeholder="Type your message here." class="max-w-sm" />
```

### With Label

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="ta-msg">
        Your message
    </twig:Field:Label>
    <twig:Textarea id="ta-msg" placeholder="Type your message here." />
</twig:Field>
```

### With Description

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="ta-feedback">
        Feedback
    </twig:Field:Label>
    <twig:Textarea id="ta-feedback" placeholder="Tell us what you think." />
    <twig:Field:Description>
        Your feedback helps us improve.
    </twig:Field:Description>
</twig:Field>
```

### Character Counter

```twig
<twig:Field class="max-w-sm">
    <div class="flex items-center justify-between">
        <twig:Field:Label for="ta-bio">
            Bio
        </twig:Field:Label>
        <span class="text-xs text-muted-foreground">
            0 / 280
        </span>
    </div>
    <twig:Textarea id="ta-bio" maxlength="280" />
</twig:Field>
```

### Required

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="ta-required">
        Message
        <span class="text-destructive" aria-hidden="true">*</span>
    </twig:Field:Label>
    <twig:Textarea id="ta-required" required placeholder="Tell us how we can help" />
    <twig:Field:Description>
        Required, 10 characters at least.
    </twig:Field:Description>
</twig:Field>
```

### Hint

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="ta-hint">
        Bio
    </twig:Field:Label>
    <twig:Textarea id="ta-hint" placeholder="A few words about you" />
    <twig:Field:Description class="flex items-center gap-1.5">
        <twig:ux:icon name="lucide:info" class="size-3.5" />
        Markdown is supported.
    </twig:Field:Description>
</twig:Field>
```

### Read Only

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="ta-readonly">
        Terms summary
    </twig:Field:Label>
    <twig:Textarea id="ta-readonly" readonly>You can cancel at any time. Refunds are issued within 14 days.</twig:Textarea>
</twig:Field>
```

### Auto Resize

The field grows with its content (`field-sizing: content`, supported by Chromium and recent Safari; other browsers keep the fixed height).

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="ta-auto">
        Notes
    </twig:Field:Label>
    <twig:Textarea id="ta-auto" rows="2" placeholder="Type, the field grows" class="field-sizing-content max-h-48 min-h-16" />
</twig:Field>
```

### Sizes

```twig
<div class="grid max-w-sm gap-4">
    <twig:Textarea placeholder="Short" rows="1" class="min-h-9 text-sm" />
    <twig:Textarea placeholder="Default" />
    <twig:Textarea placeholder="Tall" rows="8" />
</div>
```

### Inline Label

```twig
<twig:Field orientation="horizontal" class="max-w-md items-start">
    <twig:Field:Label for="ta-inline" class="w-24 flex-none pt-2">
        Comment
    </twig:Field:Label>
    <twig:Textarea id="ta-inline" placeholder="Add a comment" />
</twig:Field>
```

### Filled

```twig
<twig:Textarea placeholder="Filled background" class="max-w-sm border-transparent bg-muted shadow-none dark:bg-muted" />
```

### Clear Button

Needs the `clearable` recipe.

```twig
<twig:Clearable>
    <twig:InputGroup class="max-w-sm">
        <twig:InputGroup:Textarea placeholder="Write a note" rows="3">A note to clear</twig:InputGroup:Textarea>
        <twig:InputGroup:Addon align="block-end">
            <twig:Clearable:Button label="Clear note" class="ms-auto" />
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</twig:Clearable>
```

### Floating Label

Needs the `float-label` recipe.

```twig
<div class="grid max-w-sm gap-6">
    <twig:FloatLabel label="Message" fieldId="ta-float-over">
        <twig:Textarea id="ta-float-over" placeholder=" " rows="3" />
    </twig:FloatLabel>
    <twig:FloatLabel label="Message" fieldId="ta-float-in" variant="in">
        <twig:Textarea id="ta-float-in" placeholder=" " rows="3" />
    </twig:FloatLabel>
    <twig:FloatLabel label="Message" fieldId="ta-float-ifta" variant="ifta">
        <twig:Textarea id="ta-float-ifta" placeholder=" " rows="3" />
    </twig:FloatLabel>
</div>
```

### Required

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="ta-form-req">
        Message <span class="text-destructive">*</span>
    </twig:Field:Label>
    <twig:Textarea id="ta-form-req" name="message" required placeholder="Tell us how we can help" />
</twig:Field>
```

### With Help Text

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="ta-form-help">
        Bio
    </twig:Field:Label>
    <twig:Textarea id="ta-form-help" name="bio" placeholder="A few words about you" />
    <twig:Field:Description>
        Shown on your public profile. Markdown is not supported.
    </twig:Field:Description>
</twig:Field>
```

### Error State

```twig
<twig:Field class="max-w-sm" data-invalid="true">
    <twig:Field:Label for="ta-form-err">
        Feedback
    </twig:Field:Label>
    <twig:Textarea id="ta-form-err" name="feedback" aria-invalid="true" aria-describedby="ta-form-err-msg">
    </twig:Textarea>
    <twig:Field:Error id="ta-form-err-msg">
        Please write at least 20 characters.
    </twig:Field:Error>
</twig:Field>
```

### Hint

```twig
<twig:Field class="max-w-sm">
    <div class="flex items-center justify-between">
        <twig:Field:Label for="ta-form-hint">
            Commit message
        </twig:Field:Label>
        <span class="text-xs text-muted-foreground">
            Optional
        </span>
    </div>
    <twig:Textarea id="ta-form-hint" name="commit" placeholder="Describe the change" aria-describedby="ta-form-hint-text" />
    <twig:Field:Description id="ta-form-hint-text">
        Tip: start with a verb, in the imperative.
    </twig:Field:Description>
</twig:Field>
```

### Character Counter

`CharCounter` comes from this kit (install the `char-counter` recipe); the textarea keeps its native `maxlength`.

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="ta-form-count">
        Short description
    </twig:Field:Label>
    <twig:CharCounter :max="140" format="{remaining} characters left">
        <twig:Textarea id="ta-form-count" name="summary" maxlength="140" placeholder="Summarize in a tweet" />
    </twig:CharCounter>
</twig:Field>
```

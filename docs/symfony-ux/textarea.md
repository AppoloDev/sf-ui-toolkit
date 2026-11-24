# Textarea

## Examples

### Basic

```twig
<twig:Textarea placeholder="Type your message here." class="max-w-sm" />
```

### With Label

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="ta-msg">Your message</twig:Field:Label>
    <twig:Textarea id="ta-msg" placeholder="Type your message here." />
</twig:Field>
```

### With Description

```twig
<twig:Field class="max-w-sm">
    <twig:Field:Label for="ta-feedback">Feedback</twig:Field:Label>
    <twig:Textarea id="ta-feedback" placeholder="Tell us what you think." />
    <twig:Field:Description>Your feedback helps us improve.</twig:Field:Description>
</twig:Field>
```

### Character Counter

```twig
<twig:Field class="max-w-sm">
    <div class="flex items-center justify-between"><twig:Field:Label for="ta-bio">Bio</twig:Field:Label><span class="text-xs text-muted-foreground">0 / 280</span></div>
    <twig:Textarea id="ta-bio" maxlength="280" />
</twig:Field>
```

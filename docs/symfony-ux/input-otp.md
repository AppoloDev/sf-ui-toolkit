# Input OTP

## Examples

### Basic

```twig
<twig:InputOtp inputs="6">
    <twig:InputOtp:Group>{% for i in 1..3 %}<twig:InputOtp:Slot input="{{ i }}" />{% endfor %}</twig:InputOtp:Group>
    <twig:InputOtp:Separator />
    <twig:InputOtp:Group>{% for i in 4..6 %}<twig:InputOtp:Slot input="{{ i }}" />{% endfor %}</twig:InputOtp:Group>
</twig:InputOtp>
```

### Digits Only

```twig
<twig:InputOtp inputs="6">
    <twig:InputOtp:Group>{% for i in 1..6 %}<twig:InputOtp:Slot input="{{ i }}" pattern="[0-9]" />{% endfor %}</twig:InputOtp:Group>
</twig:InputOtp>
```

### Multiple Separators

```twig
<twig:InputOtp inputs="6">
    {% for g in [[1, 2], [3, 4], [5, 6]] %}
        <twig:InputOtp:Group>{% for i in g %}<twig:InputOtp:Slot input="{{ i }}" pattern="[0-9]" />{% endfor %}</twig:InputOtp:Group>
        {% if not loop.last %}<twig:InputOtp:Separator />{% endif %}
    {% endfor %}
</twig:InputOtp>
```

### PIN Code

```twig
<div class="grid gap-2 w-fit">
    <p class="text-sm text-muted-foreground">Enter your 4-digit PIN</p>
    <twig:InputOtp inputs="4">
        <twig:InputOtp:Group>{% for i in 1..4 %}<twig:InputOtp:Slot input="{{ i }}" pattern="[0-9]" />{% endfor %}</twig:InputOtp:Group>
    </twig:InputOtp>
</div>
```

### Verification Card

```twig
<twig:Card class="w-full max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>Verify your email</twig:Card:Title>
        <twig:Card:Description>We sent a 6-digit code to you@example.com.</twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="flex justify-center">
        <twig:InputOtp inputs="6">
            <twig:InputOtp:Group>{% for i in 1..6 %}<twig:InputOtp:Slot input="{{ i }}" pattern="[0-9]" class="size-11" />{% endfor %}</twig:InputOtp:Group>
        </twig:InputOtp>
    </twig:Card:Content>
    <twig:Card:Footer class="flex-col gap-2">
        <twig:Button class="w-full">Verify</twig:Button>
        <twig:Button variant="ghost" class="w-full">Resend code</twig:Button>
    </twig:Card:Footer>
</twig:Card>
```

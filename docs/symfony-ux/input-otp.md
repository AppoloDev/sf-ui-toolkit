# Input OTP

## Examples

### Basic

```twig
<twig:InputOtp inputs="6">
    <twig:InputOtp:Group>
        <twig:InputOtp:Slot input="1" />
        <twig:InputOtp:Slot input="2" />
        <twig:InputOtp:Slot input="3" />
    </twig:InputOtp:Group>
    <twig:InputOtp:Separator />
    <twig:InputOtp:Group>
        <twig:InputOtp:Slot input="4" />
        <twig:InputOtp:Slot input="5" />
        <twig:InputOtp:Slot input="6" />
    </twig:InputOtp:Group>
</twig:InputOtp>
```

### Digits Only

```twig
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
```

### Multiple Separators

```twig
<twig:InputOtp inputs="6">
    <twig:InputOtp:Group>
        <twig:InputOtp:Slot input="1" pattern="[0-9]" />
        <twig:InputOtp:Slot input="2" pattern="[0-9]" />
    </twig:InputOtp:Group>
    <twig:InputOtp:Separator />
    <twig:InputOtp:Group>
        <twig:InputOtp:Slot input="3" pattern="[0-9]" />
        <twig:InputOtp:Slot input="4" pattern="[0-9]" />
    </twig:InputOtp:Group>
    <twig:InputOtp:Separator />
    <twig:InputOtp:Group>
        <twig:InputOtp:Slot input="5" pattern="[0-9]" />
        <twig:InputOtp:Slot input="6" pattern="[0-9]" />
    </twig:InputOtp:Group>
</twig:InputOtp>
```

### PIN Code

```twig
<div class="grid gap-2 w-fit">
    <p class="text-sm text-muted-foreground">
        Enter your 4-digit PIN
    </p>
    <twig:InputOtp inputs="4">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" />
            <twig:InputOtp:Slot input="4" pattern="[0-9]" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
</div>
```

### Verification Card

```twig
<twig:Card class="w-full max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Verify your email
        </twig:Card:Title>
        <twig:Card:Description>
            We sent a 6-digit code to you@example.com.
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="flex justify-center">
        <twig:InputOtp inputs="6">
            <twig:InputOtp:Group>
                <twig:InputOtp:Slot input="1" pattern="[0-9]" class="size-11" />
                <twig:InputOtp:Slot input="2" pattern="[0-9]" class="size-11" />
                <twig:InputOtp:Slot input="3" pattern="[0-9]" class="size-11" />
                <twig:InputOtp:Slot input="4" pattern="[0-9]" class="size-11" />
                <twig:InputOtp:Slot input="5" pattern="[0-9]" class="size-11" />
                <twig:InputOtp:Slot input="6" pattern="[0-9]" class="size-11" />
            </twig:InputOtp:Group>
        </twig:InputOtp>
    </twig:Card:Content>
    <twig:Card:Footer class="flex-col gap-2">
        <twig:Button class="w-full">
            Verify
        </twig:Button>
        <twig:Button variant="ghost" class="w-full">
            Resend code
        </twig:Button>
    </twig:Card:Footer>
</twig:Card>
```

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

### Focus Management

Focus advances as you type and moves back on Backspace.

```twig
<div class="grid gap-2 w-fit">
    <twig:Label>
        Verification code
    </twig:Label>
    <twig:InputOtp inputs="6">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" />
        </twig:InputOtp:Group>
        <twig:InputOtp:Separator />
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="4" pattern="[0-9]" />
            <twig:InputOtp:Slot input="5" pattern="[0-9]" />
            <twig:InputOtp:Slot input="6" pattern="[0-9]" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <p class="text-sm text-muted-foreground">
        Typing moves to the next slot, Backspace goes back, and the arrow keys move between slots.
    </p>
</div>
```

### Paste Support

Pasting a code fills every slot at once.

```twig
<div class="grid gap-2 w-fit">
    <twig:Label>
        One-time code
    </twig:Label>
    <twig:InputOtp inputs="6">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" />
        </twig:InputOtp:Group>
        <twig:InputOtp:Separator />
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="4" pattern="[0-9]" />
            <twig:InputOtp:Slot input="5" pattern="[0-9]" />
            <twig:InputOtp:Slot input="6" pattern="[0-9]" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <p class="text-sm text-muted-foreground">
        Copy a 6-digit code and paste it into any slot to fill them all.
    </p>
</div>
```

### Alphanumeric Pattern

```twig
<div class="grid gap-2 w-fit">
    <twig:Label>
        Recovery code
    </twig:Label>
    <twig:InputOtp inputs="8">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[A-Za-z0-9]" class="uppercase" />
            <twig:InputOtp:Slot input="2" pattern="[A-Za-z0-9]" class="uppercase" />
            <twig:InputOtp:Slot input="3" pattern="[A-Za-z0-9]" class="uppercase" />
            <twig:InputOtp:Slot input="4" pattern="[A-Za-z0-9]" class="uppercase" />
        </twig:InputOtp:Group>
        <twig:InputOtp:Separator />
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="5" pattern="[A-Za-z0-9]" class="uppercase" />
            <twig:InputOtp:Slot input="6" pattern="[A-Za-z0-9]" class="uppercase" />
            <twig:InputOtp:Slot input="7" pattern="[A-Za-z0-9]" class="uppercase" />
            <twig:InputOtp:Slot input="8" pattern="[A-Za-z0-9]" class="uppercase" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <p class="text-sm text-muted-foreground">
        Letters and numbers only.
    </p>
</div>
```

### Prefilled Value

```twig
<div class="grid gap-2 w-fit">
    <twig:Label>
        Code
    </twig:Label>
    <twig:InputOtp inputs="6">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" value="1" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" value="2" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" value="3" />
        </twig:InputOtp:Group>
        <twig:InputOtp:Separator />
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="4" pattern="[0-9]" value="4" />
            <twig:InputOtp:Slot input="5" pattern="[0-9]" value="5" />
            <twig:InputOtp:Slot input="6" pattern="[0-9]" value="6" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <p class="text-sm text-muted-foreground">
        Slots can start with a value.
    </p>
</div>
```

### In A Form With Validation

```twig
<twig:Form class="w-fit">
    <twig:Form:Item>
        <twig:Form:Label>
            Verification code
        </twig:Form:Label>
        <twig:InputOtp inputs="6">
            <twig:InputOtp:Group>
                <twig:InputOtp:Slot input="1" pattern="[0-9]" required />
                <twig:InputOtp:Slot input="2" pattern="[0-9]" required />
                <twig:InputOtp:Slot input="3" pattern="[0-9]" required />
            </twig:InputOtp:Group>
            <twig:InputOtp:Separator />
            <twig:InputOtp:Group>
                <twig:InputOtp:Slot input="4" pattern="[0-9]" required />
                <twig:InputOtp:Slot input="5" pattern="[0-9]" required />
                <twig:InputOtp:Slot input="6" pattern="[0-9]" required />
            </twig:InputOtp:Group>
        </twig:InputOtp>
        <twig:Form:Description>
            All six digits are required.
        </twig:Form:Description>
    </twig:Form:Item>
    <twig:Button type="submit">
        Verify
    </twig:Button>
</twig:Form>
```

### Disabled

```twig
<div class="grid gap-2 w-fit">
    <twig:Label>
        Code
    </twig:Label>
    <twig:InputOtp inputs="6">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" disabled />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" disabled />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" disabled />
        </twig:InputOtp:Group>
        <twig:InputOtp:Separator />
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="4" pattern="[0-9]" disabled />
            <twig:InputOtp:Slot input="5" pattern="[0-9]" disabled />
            <twig:InputOtp:Slot input="6" pattern="[0-9]" disabled />
        </twig:InputOtp:Group>
    </twig:InputOtp>
</div>
```

### Loading State

```twig
<div class="grid gap-2 w-fit">
    <twig:Label>
        Code
    </twig:Label>
    <div class="flex items-center gap-3">
        <twig:InputOtp inputs="6">
            <twig:InputOtp:Group>
                <twig:InputOtp:Slot input="1" pattern="[0-9]" disabled value="4" />
                <twig:InputOtp:Slot input="2" pattern="[0-9]" disabled value="8" />
                <twig:InputOtp:Slot input="3" pattern="[0-9]" disabled value="2" />
            </twig:InputOtp:Group>
            <twig:InputOtp:Separator />
            <twig:InputOtp:Group>
                <twig:InputOtp:Slot input="4" pattern="[0-9]" disabled value="9" />
                <twig:InputOtp:Slot input="5" pattern="[0-9]" disabled value="1" />
                <twig:InputOtp:Slot input="6" pattern="[0-9]" disabled value="5" />
            </twig:InputOtp:Group>
        </twig:InputOtp>
        <twig:Spinner />
    </div>
    <p class="text-sm text-muted-foreground">
        Checking your code...
    </p>
</div>
```

### Error State

```twig
<div class="grid gap-2 w-fit">
    <twig:Label>
        Code
    </twig:Label>
    <twig:InputOtp inputs="6">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" aria-invalid="true" value="4" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" aria-invalid="true" value="8" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" aria-invalid="true" value="2" />
        </twig:InputOtp:Group>
        <twig:InputOtp:Separator />
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="4" pattern="[0-9]" aria-invalid="true" value="9" />
            <twig:InputOtp:Slot input="5" pattern="[0-9]" aria-invalid="true" value="1" />
            <twig:InputOtp:Slot input="6" pattern="[0-9]" aria-invalid="true" value="5" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <p class="text-sm text-destructive">
        That code is not valid. Try again.
    </p>
</div>
```

### Success State

```twig
<div class="grid gap-2 w-fit">
    <twig:Label>
        Code
    </twig:Label>
    <div class="flex items-center gap-3">
        <twig:InputOtp inputs="6" class="[&_input]:border-emerald-600">
            <twig:InputOtp:Group>
                <twig:InputOtp:Slot input="1" pattern="[0-9]" value="4" />
                <twig:InputOtp:Slot input="2" pattern="[0-9]" value="8" />
                <twig:InputOtp:Slot input="3" pattern="[0-9]" value="2" />
            </twig:InputOtp:Group>
            <twig:InputOtp:Separator />
            <twig:InputOtp:Group>
                <twig:InputOtp:Slot input="4" pattern="[0-9]" value="9" />
                <twig:InputOtp:Slot input="5" pattern="[0-9]" value="1" />
                <twig:InputOtp:Slot input="6" pattern="[0-9]" value="5" />
            </twig:InputOtp:Group>
        </twig:InputOtp>
        <twig:ux:icon name="lucide:circle-check" class="size-5 text-emerald-600" />
    </div>
    <p class="text-sm text-emerald-700 dark:text-emerald-500">
        Code verified.
    </p>
</div>
```

### Two Factor Authentication

```twig
<twig:Card class="w-full max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Two-factor authentication
        </twig:Card:Title>
        <twig:Card:Description>
            Enter the code from your authenticator app.
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="flex justify-center">
        <twig:InputOtp inputs="6">
            <twig:InputOtp:Group>
                <twig:InputOtp:Slot input="1" pattern="[0-9]" class="size-10" />
                <twig:InputOtp:Slot input="2" pattern="[0-9]" class="size-10" />
                <twig:InputOtp:Slot input="3" pattern="[0-9]" class="size-10" />
            </twig:InputOtp:Group>
            <twig:InputOtp:Separator />
            <twig:InputOtp:Group>
                <twig:InputOtp:Slot input="4" pattern="[0-9]" class="size-10" />
                <twig:InputOtp:Slot input="5" pattern="[0-9]" class="size-10" />
                <twig:InputOtp:Slot input="6" pattern="[0-9]" class="size-10" />
            </twig:InputOtp:Group>
        </twig:InputOtp>
    </twig:Card:Content>
    <twig:Card:Footer class="flex-col gap-2">
        <twig:Button class="w-full">
            Verify
        </twig:Button>
        <twig:Button variant="link" size="sm">
            Use a recovery code
        </twig:Button>
    </twig:Card:Footer>
</twig:Card>
```

### SMS Verification

```twig
<twig:Card class="w-full max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title class="flex items-center gap-2">
            <twig:ux:icon name="lucide:smartphone" class="size-4" />
            Check your phone
        </twig:Card:Title>
        <twig:Card:Description>
            We texted a code to +33 6 ** ** ** 42.
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="flex justify-center">
        <twig:InputOtp inputs="6">
            <twig:InputOtp:Group>
                <twig:InputOtp:Slot input="1" pattern="[0-9]" class="size-10" />
                <twig:InputOtp:Slot input="2" pattern="[0-9]" class="size-10" />
                <twig:InputOtp:Slot input="3" pattern="[0-9]" class="size-10" />
            </twig:InputOtp:Group>
            <twig:InputOtp:Separator />
            <twig:InputOtp:Group>
                <twig:InputOtp:Slot input="4" pattern="[0-9]" class="size-10" />
                <twig:InputOtp:Slot input="5" pattern="[0-9]" class="size-10" />
                <twig:InputOtp:Slot input="6" pattern="[0-9]" class="size-10" />
            </twig:InputOtp:Group>
        </twig:InputOtp>
    </twig:Card:Content>
</twig:Card>
```

### Transaction Confirmation

```twig
<twig:Card class="w-full max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Confirm payment
        </twig:Card:Title>
        <twig:Card:Description>
            Enter the code we sent to approve this transfer.
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="grid gap-4">
        <twig:Item variant="muted" size="sm">
            <twig:Item:Content>
                <twig:Item:Title>
                    Transfer to Jane Doe
                </twig:Item:Title>
            </twig:Item:Content>
            <twig:Item:Actions>
                <span class="font-medium tabular-nums">
                    $250.00
                </span>
            </twig:Item:Actions>
        </twig:Item>
        <div class="flex justify-center">
            <twig:InputOtp inputs="4">
                <twig:InputOtp:Group>
                    <twig:InputOtp:Slot input="1" pattern="[0-9]" type="password" class="size-10" />
                    <twig:InputOtp:Slot input="2" pattern="[0-9]" type="password" class="size-10" />
                    <twig:InputOtp:Slot input="3" pattern="[0-9]" type="password" class="size-10" />
                    <twig:InputOtp:Slot input="4" pattern="[0-9]" type="password" class="size-10" />
                </twig:InputOtp:Group>
            </twig:InputOtp>
        </div>
    </twig:Card:Content>
    <twig:Card:Footer class="gap-2">
        <twig:Button variant="outline" class="flex-1">
            Cancel
        </twig:Button>
        <twig:Button class="flex-1">
            Confirm
        </twig:Button>
    </twig:Card:Footer>
</twig:Card>
```

### Masked

```twig
<div class="grid gap-2 w-fit">
    <twig:Label>
        PIN
    </twig:Label>
    <twig:InputOtp inputs="4">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" type="password" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" type="password" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" type="password" />
            <twig:InputOtp:Slot input="4" pattern="[0-9]" type="password" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <p class="text-sm text-muted-foreground">
        Digits are hidden as you type.
    </p>
</div>
```

### Different Lengths

```twig
<div class="grid gap-3 w-fit">
    <twig:Label>
        4 digits
    </twig:Label>
    <twig:InputOtp inputs="4">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" />
            <twig:InputOtp:Slot input="4" pattern="[0-9]" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <twig:Label>
        5 digits
    </twig:Label>
    <twig:InputOtp inputs="5">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" />
            <twig:InputOtp:Slot input="4" pattern="[0-9]" />
            <twig:InputOtp:Slot input="5" pattern="[0-9]" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <twig:Label>
        6 digits
    </twig:Label>
    <twig:InputOtp inputs="6">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" />
        </twig:InputOtp:Group>
        <twig:InputOtp:Separator />
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="4" pattern="[0-9]" />
            <twig:InputOtp:Slot input="5" pattern="[0-9]" />
            <twig:InputOtp:Slot input="6" pattern="[0-9]" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <twig:Label>
        8 characters
    </twig:Label>
    <twig:InputOtp inputs="8">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" />
            <twig:InputOtp:Slot input="4" pattern="[0-9]" />
        </twig:InputOtp:Group>
        <twig:InputOtp:Separator />
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="5" pattern="[0-9]" />
            <twig:InputOtp:Slot input="6" pattern="[0-9]" />
            <twig:InputOtp:Slot input="7" pattern="[0-9]" />
            <twig:InputOtp:Slot input="8" pattern="[0-9]" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
</div>
```

### Slot Sizes

```twig
<div class="grid gap-4 w-fit">
    <twig:InputOtp inputs="4">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" class="size-7 text-xs" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" class="size-7 text-xs" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" class="size-7 text-xs" />
            <twig:InputOtp:Slot input="4" pattern="[0-9]" class="size-7 text-xs" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <twig:InputOtp inputs="4">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" class="size-8" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" class="size-8" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" class="size-8" />
            <twig:InputOtp:Slot input="4" pattern="[0-9]" class="size-8" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <twig:InputOtp inputs="4">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" class="size-11 text-base" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" class="size-11 text-base" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" class="size-11 text-base" />
            <twig:InputOtp:Slot input="4" pattern="[0-9]" class="size-11 text-base" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <twig:InputOtp inputs="4">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" class="size-14 text-xl" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" class="size-14 text-xl" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" class="size-14 text-xl" />
            <twig:InputOtp:Slot input="4" pattern="[0-9]" class="size-14 text-xl" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
</div>
```

### Custom Slot Style

```twig
<div class="grid gap-2 w-fit">
    <twig:InputOtp inputs="6" class="gap-2">
        <twig:InputOtp:Group>
            <twig:InputOtp:Slot input="1" pattern="[0-9]" class="size-12 rounded-lg! border! text-lg font-semibold" />
            <twig:InputOtp:Slot input="2" pattern="[0-9]" class="size-12 rounded-lg! border! text-lg font-semibold" />
            <twig:InputOtp:Slot input="3" pattern="[0-9]" class="size-12 rounded-lg! border! text-lg font-semibold" />
            <twig:InputOtp:Slot input="4" pattern="[0-9]" class="size-12 rounded-lg! border! text-lg font-semibold" />
            <twig:InputOtp:Slot input="5" pattern="[0-9]" class="size-12 rounded-lg! border! text-lg font-semibold" />
            <twig:InputOtp:Slot input="6" pattern="[0-9]" class="size-12 rounded-lg! border! text-lg font-semibold" />
        </twig:InputOtp:Group>
    </twig:InputOtp>
    <p class="text-sm text-muted-foreground">
        Each slot is its own rounded box.
    </p>
</div>
```

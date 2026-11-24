# Alert Dialog

## Examples

### Destructive Delete

```twig
<div style="min-height: 320px">
    <twig:AlertDialog id="ad-delete">
        <twig:AlertDialog:Trigger><twig:Button variant="destructive" {{ ...alert_dialog_trigger_attrs }}>Delete account</twig:Button></twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <span class="mb-2 flex size-10 items-center justify-center rounded-full bg-destructive/10 text-destructive"><twig:ux:icon name="lucide:trash-2" class="size-5" /></span>
                <twig:AlertDialog:Title>Delete your account?</twig:AlertDialog:Title>
                <twig:AlertDialog:Description>This action is irreversible. Read our <a href="#" class="underline">data policy</a> first.</twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>Cancel</twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action class="bg-destructive text-white hover:bg-destructive/90">Delete</twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Success Notice

```twig
<div style="min-height: 320px">
    <twig:AlertDialog id="ad-success">
        <twig:AlertDialog:Trigger><twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>Show notice</twig:Button></twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <span class="mb-2 flex size-10 items-center justify-center rounded-full bg-green-500/10 text-green-600"><twig:ux:icon name="lucide:circle-check" class="size-5" /></span>
                <twig:AlertDialog:Title>Payment received</twig:AlertDialog:Title>
                <twig:AlertDialog:Description>Your invoice has been paid.</twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:Field orientation="horizontal" class="me-auto w-auto"><twig:Checkbox id="ad-hide" /><twig:Field:Label for="ad-hide" class="font-normal">Do not show again</twig:Field:Label></twig:Field>
                <twig:AlertDialog:Action>Continue</twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Logout Confirmation

```twig
<div style="min-height: 280px">
    <twig:AlertDialog id="ad-logout">
        <twig:AlertDialog:Trigger><twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>Sign out</twig:Button></twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content class="gap-0 p-0 sm:max-w-sm">
            <twig:AlertDialog:Header class="p-6"><twig:AlertDialog:Title>Sign out?</twig:AlertDialog:Title><twig:AlertDialog:Description>You will need to sign in again.</twig:AlertDialog:Description></twig:AlertDialog:Header>
            <twig:AlertDialog:Footer class="grid grid-cols-2 gap-0 border-t p-0">
                <twig:AlertDialog:Cancel class="rounded-none border-0 border-e">No</twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action class="rounded-none">Yes</twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Billing Warning

```twig
<div style="min-height: 320px">
    <twig:AlertDialog id="ad-billing">
        <twig:AlertDialog:Trigger><twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>Billing alert</twig:Button></twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <span class="mb-2 flex size-10 items-center justify-center rounded-full bg-destructive/10 text-destructive"><twig:ux:icon name="lucide:bell-ring" class="size-5" /></span>
                <twig:Badge variant="destructive" class="w-fit">Expires in 2 days</twig:Badge>
                <twig:AlertDialog:Title>Your plan is about to expire</twig:AlertDialog:Title>
                <twig:AlertDialog:Description>Update your payment method to keep your subscription.</twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer><twig:AlertDialog:Cancel>Later</twig:AlertDialog:Cancel><twig:AlertDialog:Action>Update Payment</twig:AlertDialog:Action></twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Security Audit

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-audit">
        <twig:AlertDialog:Trigger><twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>Security audit</twig:Button></twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header><twig:AlertDialog:Title>Security audit</twig:AlertDialog:Title><twig:AlertDialog:Description>Review the checks before continuing.</twig:AlertDialog:Description></twig:AlertDialog:Header>
            <div class="grid gap-2 text-sm">
                {% for c, s in {'Two-factor authentication': 'Done', 'Password strength': 'Done', 'Recovery email': 'Pending'} %}
                    <div class="flex items-center justify-between"><span>{{ c }}</span><twig:Badge variant="{{ s == 'Done' ? 'default' : 'secondary' }}">{{ s }}</twig:Badge></div>
                {% endfor %}
            </div>
            <twig:AlertDialog:Footer class="flex-col sm:flex-col"><twig:AlertDialog:Action class="w-full">Continue</twig:AlertDialog:Action><twig:AlertDialog:Cancel class="w-full">Cancel</twig:AlertDialog:Cancel></twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```


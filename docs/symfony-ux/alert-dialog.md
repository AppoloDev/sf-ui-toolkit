# Alert Dialog

## Examples

### Destructive Delete

```twig
<div style="min-height: 320px">
    <twig:AlertDialog id="ad-delete">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="destructive" {{ ...alert_dialog_trigger_attrs }}>
                Delete account
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <span class="mb-2 flex size-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <twig:ux:icon name="lucide:trash-2" class="size-5" />
                </span>
                <twig:AlertDialog:Title>
                    Delete your account?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    This action is irreversible. Read our
                    <a href="#" class="underline">
                        data policy
                    </a>
                    first.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action class="bg-destructive text-white hover:bg-destructive/90">
                    Delete
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Success Notice

```twig
<div style="min-height: 320px">
    <twig:AlertDialog id="ad-success">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Show notice
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <span class="mb-2 flex size-10 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                    <twig:ux:icon name="lucide:circle-check" class="size-5" />
                </span>
                <twig:AlertDialog:Title>
                    Payment received
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Your invoice has been paid.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:Field orientation="horizontal" class="me-auto w-auto">
                    <twig:Checkbox id="ad-hide" />
                    <twig:Field:Label for="ad-hide" class="font-normal">
                        Do not show again
                    </twig:Field:Label>
                </twig:Field>
                <twig:AlertDialog:Action>
                    Continue
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Logout Confirmation

```twig
<div style="min-height: 280px">
    <twig:AlertDialog id="ad-logout">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Sign out
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content class="gap-0 p-0 sm:max-w-sm">
            <twig:AlertDialog:Header class="p-6">
                <twig:AlertDialog:Title>
                    Sign out?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    You will need to sign in again.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer class="grid grid-cols-2 gap-0 border-t p-0">
                <twig:AlertDialog:Cancel class="rounded-none border-0 border-e">
                    No
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action class="rounded-none">
                    Yes
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Billing Warning

```twig
<div style="min-height: 320px">
    <twig:AlertDialog id="ad-billing">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Billing alert
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <span class="mb-2 flex size-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <twig:ux:icon name="lucide:bell-ring" class="size-5" />
                </span>
                <twig:Badge variant="destructive" class="w-fit">
                    Expires in 2 days
                </twig:Badge>
                <twig:AlertDialog:Title>
                    Your plan is about to expire
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Update your payment method to keep your subscription.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Later
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Update Payment
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Security Audit

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-audit">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Security audit
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Security audit
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Review the checks before continuing.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <div class="grid gap-2 text-sm">
                <div class="flex items-center justify-between">
                    <span>
                        Two-factor authentication
                    </span>
                    <twig:Badge variant="default">
                        Done
                    </twig:Badge>
                </div>
                <div class="flex items-center justify-between">
                    <span>
                        Password strength
                    </span>
                    <twig:Badge variant="default">
                        Done
                    </twig:Badge>
                </div>
                <div class="flex items-center justify-between">
                    <span>
                        Recovery email
                    </span>
                    <twig:Badge variant="secondary">
                        Pending
                    </twig:Badge>
                </div>
            </div>
            <twig:AlertDialog:Footer class="flex-col sm:flex-col">
                <twig:AlertDialog:Action class="w-full">
                    Continue
                </twig:AlertDialog:Action>
                <twig:AlertDialog:Cancel class="w-full">
                    Cancel
                </twig:AlertDialog:Cancel>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```


### Simple Confirmation

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-1">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Continue
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Are you sure?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    This will apply your changes to the whole workspace.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Continue
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Confirmation With Icon And Warning

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-2">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Publish
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Media class="bg-amber-500/10 text-amber-600">
                    <twig:ux:icon name="lucide:triangle-alert" />
                </twig:AlertDialog:Media>
                <twig:AlertDialog:Title>
                    Publish this page?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    It will be visible to everyone.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Publish
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Confirmation With Details

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-3">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Archive project
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Archive this project?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Here is what will happen:
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <ul class="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
                <li>
                    Members lose edit access
                </li>
                <li>
                    Integrations are paused
                </li>
                <li>
                    You can restore it at any time
                </li>
            </ul>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Archive
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Confirmation With Custom Labels

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-4">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Leave page
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Unsaved changes
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    You have changes that are not saved yet.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Keep editing
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Discard changes
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Minimal Confirmation

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-5">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Reset
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content size="sm">
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Reset settings?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Your preferences return to their defaults.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    No
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Yes
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Confirmation With Centered Icon

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-6">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Enable 2FA
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header class="text-center sm:place-items-center sm:text-center">
                <twig:AlertDialog:Media class="size-12 rounded-full bg-primary/10 text-primary">
                    <twig:ux:icon name="lucide:shield-check" class="size-6" />
                </twig:AlertDialog:Media>
                <twig:AlertDialog:Title>
                    Enable two-factor?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    We will ask for a code when you sign in.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Enable
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Action With Icon

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-7">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Export
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Export data?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    A CSV file will be downloaded.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    <twig:ux:icon name="lucide:download" />
                    Export
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Stacked Actions

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-8">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Share
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Share this file
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Choose how to share it.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer class="sm:flex-col sm:justify-stretch">
                <twig:AlertDialog:Action>
                    <twig:ux:icon name="lucide:link" />
                    Copy link
                </twig:AlertDialog:Action>
                <twig:AlertDialog:Action variant="outline">
                    <twig:ux:icon name="lucide:mail" />
                    Send by email
                </twig:AlertDialog:Action>
                <twig:AlertDialog:Cancel class="border-0">
                    Not now
                </twig:AlertDialog:Cancel>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Mixed Footer Styles

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-9">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Close tab
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Close this tab?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Your work is saved.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Stay
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action variant="secondary">
                    Save and close
                </twig:AlertDialog:Action>
                <twig:AlertDialog:Action variant="destructive">
                    Close
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### File Details With Loading

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-10">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Upload
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Upload report.pdf
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    2.4 MB, PDF
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:Item variant="outline" size="sm">
                <twig:Item:Media variant="icon">
                    <twig:ux:icon name="lucide:file-text" />
                </twig:Item:Media>
                <twig:Item:Content>
                    <twig:Item:Title>
                        report.pdf
                    </twig:Item:Title>
                    <twig:Item:Description>
                        2.4 MB, PDF
                    </twig:Item:Description>
                </twig:Item:Content>
            </twig:Item>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action disabled>
                    <twig:Spinner />
                    Uploading...
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Split Actions With Draft

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-11">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Send
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Send this message?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    It will go to 3 recipients.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:Button variant="ghost" class="sm:me-auto">
                    Save draft
                </twig:Button>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Send
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Destructive With Checkbox

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-12">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="destructive" {{ ...alert_dialog_trigger_attrs }}>
                Delete project
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Delete this project?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    This cannot be undone.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <div class="flex items-center gap-2">
                <twig:Checkbox id="ad-confirm-1" />
                <twig:Label for="ad-confirm-1" class="font-normal">
                    I understand this is permanent
                </twig:Label>
            </div>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action variant="destructive">
                    Delete
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Destructive With Consequences

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-13">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="destructive" {{ ...alert_dialog_trigger_attrs }}>
                Delete workspace
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Delete workspace?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Deleting it will also:
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <ul class="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
                <li>
                    Remove all 24 projects
                </li>
                <li>
                    Cancel active subscriptions
                </li>
                <li>
                    Revoke every API key
                </li>
            </ul>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action variant="destructive">
                    Delete
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Destructive Custom Buttons

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-14">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="destructive" {{ ...alert_dialog_trigger_attrs }}>
                Remove member
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Remove Jane Doe?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    She will lose access immediately.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel class="rounded-full">
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action variant="destructive" class="rounded-full">
                    <twig:ux:icon name="lucide:user-minus" />
                    Remove
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Destructive With Warning Badge

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-15">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="destructive" {{ ...alert_dialog_trigger_attrs }}>
                Delete data
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Delete all data?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    This removes everything for good.
                </twig:AlertDialog:Description>
                <twig:Badge variant="destructive" class="mt-1">
                    Irreversible
                </twig:Badge>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action variant="destructive">
                    Delete
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Destructive Item Count

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-16">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="destructive" {{ ...alert_dialog_trigger_attrs }}>
                Delete 12 files
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Delete 12 files?
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    They will be removed from every device.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <div class="flex items-start gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                <twig:ux:icon name="lucide:triangle-alert" class="mt-0.5 size-4 shrink-0" />
                <span>
                    12 files, 340 MB, will be removed. This cannot be undone.
                </span>
            </div>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action variant="destructive">
                    Delete 12 files
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Form Single Input

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-17">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Rename
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Rename project
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Fill in the fields below.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:Field>
                <twig:Field:Label for="adf1">
                    Name
                </twig:Field:Label>
                <twig:Input id="adf1" value="Website redesign" />
            </twig:Field>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Save
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Form Multiple Inputs

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-18">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                New ticket
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    New ticket
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Fill in the fields below.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:Field:Group>
                <twig:Field>
                    <twig:Field:Label for="adf2a">
                        Title
                    </twig:Field:Label>
                    <twig:Input id="adf2a" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="adf2b">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="adf2b" type="email" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="adf2c">
                        Details
                    </twig:Field:Label>
                    <twig:Textarea id="adf2c" />
                </twig:Field>
            </twig:Field:Group>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Create
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Form Input And Select

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-19">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Invite
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Invite a teammate
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Fill in the fields below.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:Field:Group>
                <twig:Field>
                    <twig:Field:Label for="adf3a">
                        Email
                    </twig:Field:Label>
                    <twig:Input id="adf3a" type="email" />
                </twig:Field>
                <twig:Field>
                    <twig:Field:Label for="adf3b">
                        Role
                    </twig:Field:Label>
                    <twig:NativeSelect id="adf3b">
                        <twig:NativeSelect:Option value="admin">
                            Admin
                        </twig:NativeSelect:Option>
                        <twig:NativeSelect:Option value="editor">
                            Editor
                        </twig:NativeSelect:Option>
                    </twig:NativeSelect>
                </twig:Field>
            </twig:Field:Group>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Invite
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Form Input With Helper Text

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-20">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Set handle
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Choose a handle
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Fill in the fields below.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:Field>
                <twig:Field:Label for="adf4">
                    Handle
                </twig:Field:Label>
                <twig:Input id="adf4" placeholder="@jane" />
                <twig:Field:Description>
                    Letters and numbers only. You can change it later.
                </twig:Field:Description>
            </twig:Field>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Save
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Form Validation Error

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-21">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Change email
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Change email
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Fill in the fields below.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:Field data-invalid="true">
                <twig:Field:Label for="adf5">
                    Email
                </twig:Field:Label>
                <twig:Input id="adf5" value="jane@" aria-invalid="true" />
                <twig:Field:Error>
                    Enter a valid email address.
                </twig:Field:Error>
            </twig:Field>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action disabled>
                    Save
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Form Radio Group

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-22">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Export
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Choose a format
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Fill in the fields below.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:RadioGroup>
                <div class="flex items-center gap-2">
                    <twig:RadioGroup:Item id="adf6-0" name="format" value="csv" checked />
                    <twig:Label for="adf6-0" class="font-normal">
                        CSV
                    </twig:Label>
                </div>
                <div class="flex items-center gap-2">
                    <twig:RadioGroup:Item id="adf6-1" name="format" value="json" />
                    <twig:Label for="adf6-1" class="font-normal">
                        JSON
                    </twig:Label>
                </div>
                <div class="flex items-center gap-2">
                    <twig:RadioGroup:Item id="adf6-2" name="format" value="pdf" />
                    <twig:Label for="adf6-2" class="font-normal">
                        PDF
                    </twig:Label>
                </div>
            </twig:RadioGroup>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Export
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Form Checkbox List

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-23">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Notifications
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Notify me by
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Fill in the fields below.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <div class="grid gap-3">
                <div class="flex items-center gap-2">
                    <twig:Checkbox id="adf7-0" checked />
                    <twig:Label for="adf7-0" class="font-normal">
                        Email
                    </twig:Label>
                </div>
                <div class="flex items-center gap-2">
                    <twig:Checkbox id="adf7-1" />
                    <twig:Label for="adf7-1" class="font-normal">
                        Push
                    </twig:Label>
                </div>
                <div class="flex items-center gap-2">
                    <twig:Checkbox id="adf7-2" />
                    <twig:Label for="adf7-2" class="font-normal">
                        SMS
                    </twig:Label>
                </div>
            </div>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Cancel
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Save
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Informational Notice

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-24">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                System update
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    System update
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    A maintenance window starts tonight at 22:00 UTC.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Action>
                    Got it
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Informational With Icon

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-25">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                What's new
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Media class="bg-sky-500/10 text-sky-600">
                    <twig:ux:icon name="lucide:info" />
                </twig:AlertDialog:Media>
                <twig:AlertDialog:Title>
                    What's new
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Version 2.1 is available.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Later
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Update now
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Informational Long Content

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-26">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Read terms
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Updated terms
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Please read the changes below.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <div class="max-h-40 overflow-y-auto pe-2 text-sm text-muted-foreground">
                <p>
                    Paragraph 1 of the notice. It explains one part of the change in a few sentences.
                </p>
                <p>
                    Paragraph 2 of the notice. It explains one part of the change in a few sentences.
                </p>
                <p>
                    Paragraph 3 of the notice. It explains one part of the change in a few sentences.
                </p>
                <p>
                    Paragraph 4 of the notice. It explains one part of the change in a few sentences.
                </p>
                <p>
                    Paragraph 5 of the notice. It explains one part of the change in a few sentences.
                </p>
                <p>
                    Paragraph 6 of the notice. It explains one part of the change in a few sentences.
                </p>
                <p>
                    Paragraph 7 of the notice. It explains one part of the change in a few sentences.
                </p>
            </div>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Decline
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Accept
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Informational With Actions

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-27">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Update available
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Update available
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Restart to finish installing.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    Later
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Restart now
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Informational Centered With Shortcut

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-28">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Shortcuts
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header class="text-center sm:place-items-center sm:text-center">
                <twig:AlertDialog:Media class="size-12 rounded-full bg-muted">
                    <twig:ux:icon name="lucide:keyboard" class="size-6" />
                </twig:AlertDialog:Media>
                <twig:AlertDialog:Title>
                    Quick tip
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Press the shortcut to open the command menu.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <div class="flex justify-center">
                <twig:Kbd>
                    ⌘K
                </twig:Kbd>
            </div>
            <twig:AlertDialog:Footer class="sm:flex-col">
                <twig:AlertDialog:Action class="w-full">
                    Got it
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Informational With Status Badge

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-29">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Status
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Service status
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    We are investigating slower responses.
                </twig:AlertDialog:Description>
                <twig:Badge variant="secondary" class="mt-1">
                    Investigating
                </twig:Badge>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Action>
                    Close
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Informational Feature Cards

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-30">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                See what's new
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    New in 2.1
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Three things to try.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <div class="grid gap-2">
                <twig:Item variant="muted" size="sm">
                    <twig:Item:Media variant="icon">
                        <twig:ux:icon name="lucide:zap" />
                    </twig:Item:Media>
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Faster search
                        </twig:Item:Title>
                    </twig:Item:Content>
                </twig:Item>
                <twig:Item variant="muted" size="sm">
                    <twig:Item:Media variant="icon">
                        <twig:ux:icon name="lucide:moon" />
                    </twig:Item:Media>
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Dark mode
                        </twig:Item:Title>
                    </twig:Item:Content>
                </twig:Item>
                <twig:Item variant="muted" size="sm">
                    <twig:Item:Media variant="icon">
                        <twig:ux:icon name="lucide:users" />
                    </twig:Item:Media>
                    <twig:Item:Content>
                        <twig:Item:Title>
                            Shared views
                        </twig:Item:Title>
                    </twig:Item:Content>
                </twig:Item>
            </div>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Action>
                    Explore
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Simple Success

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-31">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Finish
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    All done
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Your changes were saved.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Action>
                    Close
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Success Centered Circle

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-32">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Finish
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header class="text-center sm:place-items-center sm:text-center">
                <twig:AlertDialog:Media class="size-12 rounded-full bg-emerald-500/10 text-emerald-600">
                    <twig:ux:icon name="lucide:check" class="size-6" />
                </twig:AlertDialog:Media>
                <twig:AlertDialog:Title>
                    Payment received
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Thanks for your order.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer class="sm:flex-col">
                <twig:AlertDialog:Action class="w-full">
                    Done
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Success Next Steps

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-33">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Finish
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Account created
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    What to do next:
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <ol class="list-decimal space-y-1 ps-5 text-sm text-muted-foreground">
                <li>
                    Verify your email
                </li>
                <li>
                    Invite your team
                </li>
                <li>
                    Create your first project
                </li>
            </ol>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Action>
                    Get started
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Success Summary Box

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-34">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Place order
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Order confirmed
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    A receipt is on its way.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <div class="grid gap-1 rounded-lg bg-emerald-500/10 p-3 text-sm">
                <div class="flex justify-between">
                    <span class="text-muted-foreground">
                        Order
                    </span>
                    <span class="font-medium">
                        #1042
                    </span>
                </div>
                <div class="flex justify-between">
                    <span class="text-muted-foreground">
                        Total
                    </span>
                    <span class="font-medium">
                        $128.00
                    </span>
                </div>
                <div class="flex justify-between">
                    <span class="text-muted-foreground">
                        Delivery
                    </span>
                    <span class="font-medium">
                        Dec 2
                    </span>
                </div>
            </div>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Action>
                    Done
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Success With Actions

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-35">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Finish
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Title>
                    Profile updated
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    Your profile is now live.
                </twig:AlertDialog:Description>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Cancel>
                    View profile
                </twig:AlertDialog:Cancel>
                <twig:AlertDialog:Action>
                    Done
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

### Success Celebration

```twig
<div style="min-height: 420px">
    <twig:AlertDialog id="ad-36">
        <twig:AlertDialog:Trigger>
            <twig:Button variant="outline" {{ ...alert_dialog_trigger_attrs }}>
                Finish
            </twig:Button>
        </twig:AlertDialog:Trigger>
        <twig:AlertDialog:Content>
            <twig:AlertDialog:Header>
                <twig:AlertDialog:Media class="bg-amber-500/10 text-amber-600">
                    <twig:ux:icon name="lucide:party-popper" class="size-6" />
                </twig:AlertDialog:Media>
                <twig:AlertDialog:Title>
                    Level up!
                </twig:AlertDialog:Title>
                <twig:AlertDialog:Description>
                    You completed your first project.
                </twig:AlertDialog:Description>
                <twig:Badge class="mt-1">
                    Achievement unlocked
                </twig:Badge>
            </twig:AlertDialog:Header>
            <twig:AlertDialog:Footer>
                <twig:AlertDialog:Action>
                    Keep going
                </twig:AlertDialog:Action>
            </twig:AlertDialog:Footer>
        </twig:AlertDialog:Content>
    </twig:AlertDialog>
</div>
```

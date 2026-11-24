# Checkbox

## Examples

### Invalid State

Set `aria-invalid` on the checkbox and `data-invalid` on the `Field` to show the error styles.

```twig
<twig:Field orientation="horizontal" data-invalid="true" class="max-w-sm">
    <twig:Checkbox id="checkbox-invalid" name="checkbox-invalid" aria-invalid="true" />
    <twig:Field:Content>
        <twig:Field:Label for="checkbox-invalid">
            Accept terms and conditions
        </twig:Field:Label>
        <twig:Field:Description>
            You must accept the terms and conditions to continue.
        </twig:Field:Description>
    </twig:Field:Content>
</twig:Field>
```

### Colored

```twig
<div class="flex items-center gap-4">
    <twig:Checkbox id="cb-blue" checked class="checked:border-blue-600 checked:bg-blue-600 dark:checked:bg-blue-600" aria-label="Blue" />
    <twig:Checkbox id="cb-green" checked class="checked:border-green-600 checked:bg-green-600 dark:checked:bg-green-600" aria-label="Green" />
    <twig:Checkbox id="cb-yellow" checked class="checked:border-yellow-500 checked:bg-yellow-500 dark:checked:bg-yellow-500" aria-label="Yellow" />
</div>
```

### Label and Description

```twig
<twig:Field orientation="horizontal" class="max-w-sm">
    <twig:Checkbox id="cb-terms" name="terms" checked />
    <twig:Field:Content>
        <twig:Field:Label for="cb-terms">
            Accept terms and conditions
        </twig:Field:Label>
        <twig:Field:Description>
            By clicking this checkbox, you agree to the terms.
        </twig:Field:Description>
    </twig:Field:Content>
</twig:Field>
```

### Circle To-Do

```twig
<twig:Field orientation="horizontal" class="max-w-sm">
    <twig:Checkbox id="cb-todo" class="rounded-full" />
    <twig:Field:Label for="cb-todo" class="font-normal peer-checked:text-muted-foreground peer-checked:line-through">
        Write the release notes
    </twig:Field:Label>
</twig:Field>
```

### Setting Card

A whole card that toggles the checkbox.

```twig
<twig:Field:Label for="cb-setting" class="max-w-sm">
    <twig:Field orientation="horizontal" class="rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5">
        <twig:Checkbox id="cb-setting" />
        <twig:Field:Content>
            <twig:Field:Title>
                Enable notifications
            </twig:Field:Title>
            <twig:Field:Description>
                You can enable or disable notifications at any time.
            </twig:Field:Description>
        </twig:Field:Content>
    </twig:Field>
</twig:Field:Label>
```

### Card Rows

```twig
<twig:Card class="max-w-sm gap-0 py-0">
    <twig:Field:Label for="cb-row-email" class="flex w-full cursor-pointer items-center gap-3 px-4 py-3">
        <twig:ux:icon name="lucide:mail" class="size-4 text-muted-foreground" />
        <span class="flex-1 font-normal">
            Email
        </span>
        <twig:Checkbox id="cb-row-email" name="email" checked="1" />
    </twig:Field:Label>
    <twig:Separator />
    <twig:Field:Label for="cb-row-sms" class="flex w-full cursor-pointer items-center gap-3 px-4 py-3">
        <twig:ux:icon name="lucide:smartphone" class="size-4 text-muted-foreground" />
        <span class="flex-1 font-normal">
            SMS
        </span>
        <twig:Checkbox id="cb-row-sms" name="sms" checked="" />
    </twig:Field:Label>
    <twig:Separator />
    <twig:Field:Label for="cb-row-push" class="flex w-full cursor-pointer items-center gap-3 px-4 py-3">
        <twig:ux:icon name="lucide:bell" class="size-4 text-muted-foreground" />
        <span class="flex-1 font-normal">
            Push
        </span>
        <twig:Checkbox id="cb-row-push" name="push" checked="" />
    </twig:Field:Label>
</twig:Card>
```

### Inline Group

```twig
<twig:Field:Set>
    <twig:Field:Legend variant="label">
        Permissions
    </twig:Field:Legend>
    <twig:Field:Group class="flex-row! flex-wrap gap-4">
        <twig:Field orientation="horizontal" class="w-auto">
            <twig:Checkbox id="cb-inline-read" name="read" checked="1" />
            <twig:Field:Label for="cb-inline-read" class="font-normal">
                Read
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal" class="w-auto">
            <twig:Checkbox id="cb-inline-write" name="write" checked="" />
            <twig:Field:Label for="cb-inline-write" class="font-normal">
                Write
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal" class="w-auto">
            <twig:Checkbox id="cb-inline-delete" name="delete" checked="" />
            <twig:Field:Label for="cb-inline-delete" class="font-normal">
                Delete
            </twig:Field:Label>
        </twig:Field>
    </twig:Field:Group>
</twig:Field:Set>
```

### Badge Group

```twig
<twig:Field:Group class="max-w-sm gap-3">
    <twig:Field orientation="horizontal">
        <twig:Checkbox id="cb-feat-1" />
        <twig:Field:Label for="cb-feat-1" class="font-normal">
            AI assistant
            <twig:Badge>
                New
            </twig:Badge>
        </twig:Field:Label>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:Checkbox id="cb-feat-2" />
        <twig:Field:Label for="cb-feat-2" class="font-normal">
            Live collaboration
            <twig:Badge variant="secondary">
                Beta
            </twig:Badge>
        </twig:Field:Label>
    </twig:Field>
</twig:Field:Group>
```

### Help Tooltip

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:Field orientation="horizontal" class="max-w-sm">
        <twig:Checkbox id="cb-help" />
        <twig:Field:Label for="cb-help" class="font-normal">
            Send usage statistics
        </twig:Field:Label>
        <twig:Tooltip id="cb-help-tip">
            <twig:Tooltip:Trigger>
                <twig:Button variant="ghost" size="icon-xs" aria-label="More information" {{ ...tooltip_trigger_attrs }}>
                    <twig:ux:icon name="lucide:circle-help" class="text-muted-foreground" />
                </twig:Button>
            </twig:Tooltip:Trigger>
            <twig:Tooltip:Content side="right">
                Anonymous data helps us improve the product.
            </twig:Tooltip:Content>
        </twig:Tooltip>
    </twig:Field>
</div>
```


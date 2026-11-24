# Field

## Examples

### Slider

```twig
<twig:Field class="w-full max-w-xs">
    <twig:Field:Title>
        Price Range
    </twig:Field:Title>
    <twig:Field:Description>
        Set your budget range ($200 - $800).
    </twig:Field:Description>
    <twig:Slider name="price" min="0" max="1000" step="10" value="200,800" class="mt-2 w-full" aria-label="Price Range" />
</twig:Field>
```

### Radio

```twig
<twig:Field:Set class="w-full max-w-xs">
    <twig:Field:Legend variant="label">
        Subscription Plan
    </twig:Field:Legend>
    <twig:Field:Description>
        Yearly and lifetime plans offer significant savings.
    </twig:Field:Description>
    <twig:RadioGroup>
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="plan-monthly" name="plan" value="monthly" checked />
            <twig:Field:Label for="plan-monthly" class="font-normal">
                Monthly ($9.99/month)
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="plan-yearly" name="plan" value="yearly" />
            <twig:Field:Label for="plan-yearly" class="font-normal">
                Yearly ($99.99/year)
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="plan-lifetime" name="plan" value="lifetime" />
            <twig:Field:Label for="plan-lifetime" class="font-normal">
                Lifetime ($299.99)
            </twig:Field:Label>
        </twig:Field>
    </twig:RadioGroup>
</twig:Field:Set>
```

### Responsive Layout

Set `orientation="responsive"` for automatic column layouts inside container-aware parents.

```twig
<div class="w-full max-w-lg">
    <form>
        <twig:Field:Set>
            <twig:Field:Legend>
                Profile
            </twig:Field:Legend>
            <twig:Field:Description>
                Fill in your profile information.
            </twig:Field:Description>
            <twig:Field:Group>
                <twig:Field orientation="responsive">
                    <twig:Field:Content>
                        <twig:Field:Label for="responsive-name">
                            Name
                        </twig:Field:Label>
                        <twig:Field:Description>
                            Provide your full name for identification
                        </twig:Field:Description>
                    </twig:Field:Content>
                    <twig:Input id="responsive-name" placeholder="Evil Rabbit" required />
                </twig:Field>
                <twig:Field orientation="responsive">
                    <twig:Button type="submit">
                        Submit
                    </twig:Button>
                    <twig:Button type="button" variant="outline">
                        Cancel
                    </twig:Button>
                </twig:Field>
            </twig:Field:Group>
        </twig:Field:Set>
    </form>
</div>
```

### Input and Textarea

```twig
<form class="w-full max-w-md">
    <twig:Field:Group>
        <twig:Field>
            <twig:Field:Label for="f-title">
                Title
            </twig:Field:Label>
            <twig:Input id="f-title" placeholder="Release notes" />
        </twig:Field>
        <twig:Field>
            <twig:Field:Label for="f-body">
                Message
            </twig:Field:Label>
            <twig:Textarea id="f-body" placeholder="Write something..." />
            <twig:Field:Description>
                Markdown is supported.
            </twig:Field:Description>
        </twig:Field>
    </twig:Field:Group>
</form>
```

### Select Controls

```twig
<div class="w-full max-w-md" style="min-height: 280px">
    <twig:Field>
        <twig:Field:Label for="f-role">
            Role
        </twig:Field:Label>
        <twig:Select id="f-role">
            <twig:Select:Trigger id="f-role-trigger">
                <twig:Select:Value placeholder="Select a role" />
            </twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="f-role-list">
                    <twig:Select:Item value="admin">
                        Admin
                    </twig:Select:Item>
                    <twig:Select:Item value="editor">
                        Editor
                    </twig:Select:Item>
                    <twig:Select:Item value="viewer">
                        Viewer
                    </twig:Select:Item>
                </twig:Select:Group>
            </twig:Select:Content>
        </twig:Select>
        <twig:Field:Description>
            Controls what this member can edit.
        </twig:Field:Description>
    </twig:Field>
</div>
```

### Radio and Checkboxes

```twig
<twig:Field:Group class="w-full max-w-sm">
    <twig:Field:Set>
        <twig:Field:Legend variant="label">
            Notify me about
        </twig:Field:Legend>
        <twig:Field:Group data-slot="checkbox-group">
            <twig:Field orientation="horizontal">
                <twig:Checkbox id="f-n-mentions" checked="1" />
                <twig:Field:Label for="f-n-mentions" class="font-normal">
                    Mentions
                </twig:Field:Label>
            </twig:Field>
            <twig:Field orientation="horizontal">
                <twig:Checkbox id="f-n-replies" checked="1" />
                <twig:Field:Label for="f-n-replies" class="font-normal">
                    Replies
                </twig:Field:Label>
            </twig:Field>
            <twig:Field orientation="horizontal">
                <twig:Checkbox id="f-n-digest" checked="" />
                <twig:Field:Label for="f-n-digest" class="font-normal">
                    Weekly digest
                </twig:Field:Label>
            </twig:Field>
        </twig:Field:Group>
    </twig:Field:Set>
</twig:Field:Group>
```

### Slider and Switch

```twig
<twig:Field:Group class="w-full max-w-sm">
    <twig:Field>
        <twig:Field:Label>
            Volume
        </twig:Field:Label>
        <twig:Slider value="40" />
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:Field:Content>
            <twig:Field:Label for="f-sw">
                Autoplay
            </twig:Field:Label>
            <twig:Field:Description>
                Start the next video automatically.
            </twig:Field:Description>
        </twig:Field:Content>
        <twig:Switch id="f-sw" checked />
    </twig:Field>
</twig:Field:Group>
```

### Settings Form

```twig
<form class="w-full max-w-md">
    <twig:Field:Set>
        <twig:Field:Legend>
            Account
        </twig:Field:Legend>
        <twig:Field:Description>
            Manage how you appear to others.
        </twig:Field:Description>
        <twig:Field:Group>
            <twig:Field>
                <twig:Field:Label for="s-name">
                    Display name
                </twig:Field:Label>
                <twig:Input id="s-name" value="Evil Rabbit" />
            </twig:Field>
            <twig:Field orientation="horizontal">
                <twig:Field:Content>
                    <twig:Field:Label for="s-public">
                        Public profile
                    </twig:Field:Label>
                    <twig:Field:Description>
                        Anyone can see your profile.
                    </twig:Field:Description>
                </twig:Field:Content>
                <twig:Switch id="s-public" />
            </twig:Field>
            <twig:Field orientation="horizontal">
                <twig:Button type="submit">
                    Save
                </twig:Button>
                <twig:Button type="button" variant="outline">
                    Cancel
                </twig:Button>
            </twig:Field>
        </twig:Field:Group>
    </twig:Field:Set>
</form>
```

### Validation Errors

```twig
<form class="w-full max-w-sm">
    <twig:Field:Group>
        <twig:Field data-invalid="true">
            <twig:Field:Label for="v-email">
                Email
            </twig:Field:Label>
            <twig:Input id="v-email" value="not-an-email" aria-invalid="true" />
            <twig:Field:Error>
                Enter a valid email address.
            </twig:Field:Error>
        </twig:Field>
        <twig:Field data-invalid="true">
            <twig:Field:Label for="v-pass">
                Password
            </twig:Field:Label>
            <twig:Input id="v-pass" type="password" value="123" aria-invalid="true" />
            <twig:Field:Error>
                Must be at least 8 characters.
            </twig:Field:Error>
        </twig:Field>
    </twig:Field:Group>
</form>
```

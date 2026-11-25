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

### Label And Input

```twig
<twig:Field class="w-full max-w-sm">
    <twig:Field:Label for="fd-b1">
        Email
    </twig:Field:Label>
    <twig:Input id="fd-b1" type="email" placeholder="you@example.com" />
</twig:Field>
```

### Helper Text Below

```twig
<twig:Field class="w-full max-w-sm">
    <twig:Field:Label for="fd-b2">
        Username
    </twig:Field:Label>
    <twig:Input id="fd-b2" />
    <twig:Field:Description>
        Letters and numbers only.
    </twig:Field:Description>
</twig:Field>
```

### Helper Text Above

```twig
<twig:Field class="w-full max-w-sm">
    <twig:Field:Label for="fd-b3">
        Username
    </twig:Field:Label>
    <twig:Field:Description>
        Letters and numbers only.
    </twig:Field:Description>
    <twig:Input id="fd-b3" />
</twig:Field>
```

### Stacked Group

```twig
<twig:Field:Group class="w-full max-w-sm">
    <twig:Field>
        <twig:Field:Label for="fd-g0">
            First name
        </twig:Field:Label>
        <twig:Input id="fd-g0" />
    </twig:Field>
    <twig:Field>
        <twig:Field:Label for="fd-g1">
            Last name
        </twig:Field:Label>
        <twig:Input id="fd-g1" />
    </twig:Field>
    <twig:Field>
        <twig:Field:Label for="fd-g2">
            Email
        </twig:Field:Label>
        <twig:Input id="fd-g2" />
    </twig:Field>
</twig:Field:Group>
```

### Horizontal Label And Input

```twig
<twig:Field orientation="horizontal" class="w-full max-w-sm">
    <twig:Field:Label for="fd-b5">
        Name
    </twig:Field:Label>
    <twig:Input id="fd-b5" class="max-w-48" />
</twig:Field>
```

### Vertical Layout

```twig
<twig:Field class="w-full max-w-sm">
    <twig:Field:Label for="fd-l1">
        Name
    </twig:Field:Label>
    <twig:Input id="fd-l1" />
    <twig:Field:Description>
        Label, control and description stack.
    </twig:Field:Description>
</twig:Field>
```

### Label Beside Control

```twig
<twig:Field orientation="horizontal" class="w-full max-w-sm">
    <twig:Field:Content>
        <twig:Field:Label for="fd-l2">
            Notifications
        </twig:Field:Label>
        <twig:Field:Description>
            Receive updates by email.
        </twig:Field:Description>
    </twig:Field:Content>
    <twig:Switch id="fd-l2" />
</twig:Field>
```

### Responsive Orientation

```twig
<twig:Field orientation="responsive" class="w-full max-w-xl">
    <twig:Field:Content>
        <twig:Field:Label for="fd-l3">
            Display name
        </twig:Field:Label>
        <twig:Field:Description>
            Vertical on small screens, horizontal from the md breakpoint.
        </twig:Field:Description>
    </twig:Field:Content>
    <twig:Input id="fd-l3" />
</twig:Field>
```

### Multi Column Grid

```twig
<div class="grid w-full max-w-xl gap-4 sm:grid-cols-2">
    <twig:Field>
        <twig:Field:Label for="fd-c0">
            First name
        </twig:Field:Label>
        <twig:Input id="fd-c0" />
    </twig:Field>
    <twig:Field>
        <twig:Field:Label for="fd-c1">
            Last name
        </twig:Field:Label>
        <twig:Input id="fd-c1" />
    </twig:Field>
    <twig:Field>
        <twig:Field:Label for="fd-c2">
            City
        </twig:Field:Label>
        <twig:Input id="fd-c2" />
    </twig:Field>
    <twig:Field>
        <twig:Field:Label for="fd-c3">
            Postal code
        </twig:Field:Label>
        <twig:Input id="fd-c3" />
    </twig:Field>
</div>
```

### Nested Content Wrapper

```twig
<twig:Field class="w-full max-w-sm">
    <twig:Field:Content>
        <twig:Field:Label for="fd-l5">
            Billing address
        </twig:Field:Label>
        <twig:Field:Description>
            Used on invoices.
        </twig:Field:Description>
        <twig:Input id="fd-l5" placeholder="Street" />
        <twig:Input id="fd-l5b" placeholder="City" />
    </twig:Field:Content>
</twig:Field>
```

### Mixed Orientations

```twig
<twig:Field:Group class="w-full max-w-sm">
    <twig:Field>
        <twig:Field:Label for="fd-m1">
            Name
        </twig:Field:Label>
        <twig:Input id="fd-m1" />
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:Field:Label for="fd-m2">
            Newsletter
        </twig:Field:Label>
        <twig:Switch id="fd-m2" />
    </twig:Field>
    <twig:Field>
        <twig:Field:Label for="fd-m3">
            Bio
        </twig:Field:Label>
        <twig:Textarea id="fd-m3" rows="3" />
    </twig:Field>
</twig:Field:Group>
```

### Select With Label

```twig
<twig:Field class="w-full max-w-xs">
    <twig:Field:Label for="fd-s1">
        Fruit
    </twig:Field:Label>
    <twig:Select id="fd-s1">
        <twig:Select:Trigger class="w-full">
            <twig:Select:Value placeholder="Select a fruit" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="fd-s1-list">
                <twig:Select:Item value="apple">
                    Apple
                </twig:Select:Item>
                <twig:Select:Item value="banana">
                    Banana
                </twig:Select:Item>
                <twig:Select:Item value="cherry">
                    Cherry
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</twig:Field>
```

### Select With Description

```twig
<twig:Field class="w-full max-w-xs">
    <twig:Field:Label for="fd-s2">
        Language
    </twig:Field:Label>
    <twig:Select id="fd-s2">
        <twig:Select:Trigger class="w-full">
            <twig:Select:Value placeholder="Select a language" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="fd-s2-list">
                <twig:Select:Item value="en">
                    English
                </twig:Select:Item>
                <twig:Select:Item value="fr">
                    French
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
    <twig:Field:Description>
        Changes the interface language.
    </twig:Field:Description>
</twig:Field>
```

### Select With Groups

```twig
<twig:Field class="w-full max-w-xs">
    <twig:Field:Label for="fd-s3">
        Timezone
    </twig:Field:Label>
    <twig:Select id="fd-s3">
        <twig:Select:Trigger class="w-full">
            <twig:Select:Value placeholder="Select a timezone" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="fd-s3-eu">
                <twig:Select:Label>
                    Europe
                </twig:Select:Label>
                <twig:Select:Item value="paris">
                    Paris
                </twig:Select:Item>
                <twig:Select:Item value="berlin">
                    Berlin
                </twig:Select:Item>
            </twig:Select:Group>
            <twig:Select:Group id="fd-s3-am">
                <twig:Select:Label>
                    Americas
                </twig:Select:Label>
                <twig:Select:Item value="ny">
                    New York
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</twig:Field>
```

### Several Selects

```twig
<twig:Field:Group class="w-full max-w-xs">
    <twig:Field>
        <twig:Field:Label for="fd-ss1">
            Country
        </twig:Field:Label>
        <twig:Select id="fd-ss1">
            <twig:Select:Trigger class="w-full">
                <twig:Select:Value placeholder="Country" />
            </twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="fd-ss1-list">
                    <twig:Select:Item value="fr">
                        France
                    </twig:Select:Item>
                    <twig:Select:Item value="de">
                        Germany
                    </twig:Select:Item>
                </twig:Select:Group>
            </twig:Select:Content>
        </twig:Select>
    </twig:Field>
    <twig:Field>
        <twig:Field:Label for="fd-ss2">
            Currency
        </twig:Field:Label>
        <twig:Select id="fd-ss2">
            <twig:Select:Trigger class="w-full">
                <twig:Select:Value placeholder="Currency" />
            </twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="fd-ss2-list">
                    <twig:Select:Item value="eur">
                        EUR
                    </twig:Select:Item>
                    <twig:Select:Item value="usd">
                        USD
                    </twig:Select:Item>
                </twig:Select:Group>
            </twig:Select:Content>
        </twig:Select>
    </twig:Field>
</twig:Field:Group>
```

### Select With Description Above

```twig
<twig:Field class="w-full max-w-xs">
    <twig:Field:Label for="fd-s5">
        Fruit
    </twig:Field:Label>
    <twig:Field:Description>
        Pick your favorite.
    </twig:Field:Description>
    <twig:Select id="fd-s5">
        <twig:Select:Trigger class="w-full">
            <twig:Select:Value placeholder="Select a fruit" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="fd-s5-list">
                <twig:Select:Item value="apple">
                    Apple
                </twig:Select:Item>
                <twig:Select:Item value="banana">
                    Banana
                </twig:Select:Item>
                <twig:Select:Item value="cherry">
                    Cherry
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</twig:Field>
```

### Select Beside Label

```twig
<twig:Field orientation="horizontal" class="w-full max-w-sm">
    <twig:Field:Label for="fd-s6">
        Fruit
    </twig:Field:Label>
    <div class="w-40">
        <twig:Select id="fd-s6">
            <twig:Select:Trigger class="w-full">
                <twig:Select:Value placeholder="Select" />
            </twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="fd-s6-list">
                    <twig:Select:Item value="apple">
                        Apple
                    </twig:Select:Item>
                    <twig:Select:Item value="banana">
                        Banana
                    </twig:Select:Item>
                    <twig:Select:Item value="cherry">
                        Cherry
                    </twig:Select:Item>
                </twig:Select:Group>
            </twig:Select:Content>
        </twig:Select>
    </div>
</twig:Field>
```

### Textarea With Label

```twig
<twig:Field class="w-full max-w-sm">
    <twig:Field:Label for="fd-t1">
        Message
    </twig:Field:Label>
    <twig:Textarea id="fd-t1" rows="4" />
</twig:Field>
```

### Textarea With Guidance

```twig
<twig:Field class="w-full max-w-sm">
    <twig:Field:Label for="fd-t2">
        Feedback
    </twig:Field:Label>
    <twig:Textarea id="fd-t2" rows="4" placeholder="Tell us more" />
    <twig:Field:Description>
        Share what worked and what did not.
    </twig:Field:Description>
</twig:Field>
```

### Textarea Instructions Above

```twig
<twig:Field class="w-full max-w-sm">
    <twig:Field:Label for="fd-t4">
        Bio
    </twig:Field:Label>
    <twig:Field:Description>
        Write a short bio for your public profile.
    </twig:Field:Description>
    <twig:Textarea id="fd-t4" rows="4" />
</twig:Field>
```

### Textarea Row Heights

```twig
<twig:Field:Group class="w-full max-w-sm">
    <twig:Field>
        <twig:Field:Label for="fd-t5a">
            Short
        </twig:Field:Label>
        <twig:Textarea id="fd-t5a" rows="2" />
    </twig:Field>
    <twig:Field>
        <twig:Field:Label for="fd-t5b">
            Medium
        </twig:Field:Label>
        <twig:Textarea id="fd-t5b" rows="4" />
    </twig:Field>
    <twig:Field>
        <twig:Field:Label for="fd-t5c">
            Tall
        </twig:Field:Label>
        <twig:Textarea id="fd-t5c" rows="8" />
    </twig:Field>
</twig:Field:Group>
```

### Textarea Format Guidance

```twig
<twig:Field class="w-full max-w-sm">
    <twig:Field:Label for="fd-t6">
        Address
    </twig:Field:Label>
    <twig:Textarea id="fd-t6" rows="3" placeholder="12 Rue Lafayette&#10;75009 Paris" />
    <twig:Field:Description>
        One line per row: street, then postal code and city.
    </twig:Field:Description>
</twig:Field>
```

### Single Checkbox

```twig
<twig:Field orientation="horizontal">
    <twig:Checkbox id="fd-k1" />
    <twig:Field:Label class="font-normal" for="fd-k1">
        Accept terms and conditions
    </twig:Field:Label>
</twig:Field>
```

### Checkbox Group

```twig
<twig:Field:Set class="w-full max-w-xs">
    <twig:Field:Legend variant="label">
        Notify me about
    </twig:Field:Legend>
    <twig:Field:Group class="gap-3">
        <twig:Field orientation="horizontal">
            <twig:Checkbox id="fd-k2a" checked />
            <twig:Field:Label class="font-normal" for="fd-k2a">
                Comments
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:Checkbox id="fd-k2b" />
            <twig:Field:Label class="font-normal" for="fd-k2b">
                Mentions
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:Checkbox id="fd-k2c" />
            <twig:Field:Label class="font-normal" for="fd-k2c">
                Updates
            </twig:Field:Label>
        </twig:Field>
    </twig:Field:Group>
</twig:Field:Set>
```

### Radio Choices

```twig
<twig:Field:Set class="w-full max-w-xs">
    <twig:Field:Legend variant="label">
        Plan
    </twig:Field:Legend>
    <twig:RadioGroup class="w-fit" >
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="fd-r3-free" name="fd-r3" value="free" checked />
            <twig:Field:Label for="fd-r3-free" class="font-normal">
                Free
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="fd-r3-pro" name="fd-r3" value="pro" />
            <twig:Field:Label for="fd-r3-pro" class="font-normal">
                Pro
            </twig:Field:Label>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:RadioGroup:Item id="fd-r3-team" name="fd-r3" value="team" />
            <twig:Field:Label for="fd-r3-team" class="font-normal">
                Team
            </twig:Field:Label>
        </twig:Field>
    </twig:RadioGroup>
</twig:Field:Set>
```

### Radio With Descriptions

```twig
<twig:RadioGroup class="w-full max-w-sm">
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="fd-r4-std" name="fd-r4" value="std" checked />
        <twig:Field:Content>
            <twig:Field:Label for="fd-r4-std">
                Standard
            </twig:Field:Label>
            <twig:Field:Description>
                Delivered in 5 days.
            </twig:Field:Description>
        </twig:Field:Content>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:RadioGroup:Item id="fd-r4-exp" name="fd-r4" value="exp" />
        <twig:Field:Content>
            <twig:Field:Label for="fd-r4-exp">
                Express
            </twig:Field:Label>
            <twig:Field:Description>
                Delivered tomorrow.
            </twig:Field:Description>
        </twig:Field:Content>
    </twig:Field>
</twig:RadioGroup>
```

### Simple Switch

```twig
<twig:Field orientation="horizontal" class="w-fit">
    <twig:Switch id="fd-w5" />
    <twig:Field:Label for="fd-w5">
        Airplane mode
    </twig:Field:Label>
</twig:Field>
```

### Switch With Description

```twig
<twig:Field orientation="horizontal" class="w-full max-w-sm">
    <twig:Field:Content>
        <twig:Field:Label for="fd-w6">
            Marketing emails
        </twig:Field:Label>
        <twig:Field:Description>
            Receive product news and offers.
        </twig:Field:Description>
    </twig:Field:Content>
    <twig:Switch id="fd-w6" />
</twig:Field>
```

### Checkbox With Description

```twig
<twig:Field orientation="horizontal" class="w-full max-w-sm">
    <twig:Checkbox id="fd-k7" />
    <twig:Field:Content>
        <twig:Field:Label for="fd-k7">
            Subscribe to the newsletter
        </twig:Field:Label>
        <twig:Field:Description>
            One email per week, unsubscribe anytime.
        </twig:Field:Description>
    </twig:Field:Content>
</twig:Field>
```

### Dual Thumb Slider

```twig
<twig:Field class="w-full max-w-xs">
    <twig:Field:Title>
        Budget
    </twig:Field:Title>
    <twig:Field:Description>
        Between $200 and $800.
    </twig:Field:Description>
    <twig:Slider name="fd-a2" min="0" max="1000" step="10" value="200,800" class="mt-2 w-full" aria-label="Budget" />
</twig:Field>
```

### Radio Cards

```twig
<twig:RadioGroup class="grid w-full max-w-md gap-3 sm:grid-cols-2">
    <twig:Field:Label for="fd-a3-basic" class="flex cursor-pointer items-start gap-3 rounded-lg border p-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
        <twig:RadioGroup:Item id="fd-a3-basic" name="fd-a3" value="basic" />
        <span class="grid gap-0.5">
            <span class="font-medium">
                Basic
            </span>
            <span class="text-xs font-normal text-muted-foreground">
                For one project.
            </span>
        </span>
    </twig:Field:Label>
    <twig:Field:Label for="fd-a3-pro" class="flex cursor-pointer items-start gap-3 rounded-lg border p-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
        <twig:RadioGroup:Item id="fd-a3-pro" name="fd-a3" value="pro" checked />
        <span class="grid gap-0.5">
            <span class="font-medium">
                Pro
            </span>
            <span class="text-xs font-normal text-muted-foreground">
                For growing teams.
            </span>
        </span>
    </twig:Field:Label>
</twig:RadioGroup>
```

### Grouped With Legend

```twig
<twig:Field:Set class="w-full max-w-sm">
    <twig:Field:Legend>
        Shipping address
    </twig:Field:Legend>
    <twig:Field:Description>
        Where should we deliver?
    </twig:Field:Description>
    <twig:Field:Group>
        <twig:Field>
            <twig:Field:Label for="fd-a4a">
                Street
            </twig:Field:Label>
            <twig:Input id="fd-a4a" />
        </twig:Field>
        <twig:Field>
            <twig:Field:Label for="fd-a4b">
                City
            </twig:Field:Label>
            <twig:Input id="fd-a4b" />
        </twig:Field>
    </twig:Field:Group>
</twig:Field:Set>
```

### Separated Clusters

```twig
<twig:Field:Group class="w-full max-w-sm">
    <twig:Field>
        <twig:Field:Label for="fd-a5a">
            Name
        </twig:Field:Label>
        <twig:Input id="fd-a5a" />
    </twig:Field>
    <twig:Field:Separator />
    <twig:Field>
        <twig:Field:Label for="fd-a5b">
            Email
        </twig:Field:Label>
        <twig:Input id="fd-a5b" type="email" />
    </twig:Field>
    <twig:Field:Separator>
        Optional
    </twig:Field:Separator>
    <twig:Field>
        <twig:Field:Label for="fd-a5c">
            Phone
        </twig:Field:Label>
        <twig:Input id="fd-a5c" type="tel" />
    </twig:Field>
</twig:Field:Group>
```

### Complex Form

```twig
<form class="grid w-full max-w-md gap-6">
    <twig:Field:Set>
        <twig:Field:Legend>
            Project
        </twig:Field:Legend>
        <twig:Field:Group>
            <twig:Field>
                <twig:Field:Label for="fd-a6a">
                    Name
                </twig:Field:Label>
                <twig:Input id="fd-a6a" />
            </twig:Field>
            <twig:Field>
                <twig:Field:Label for="fd-a6b">
                    Visibility
                </twig:Field:Label>
                <twig:Select id="fd-a6b">
                    <twig:Select:Trigger class="w-full">
                        <twig:Select:Value placeholder="Visibility" />
                    </twig:Select:Trigger>
                    <twig:Select:Content>
                        <twig:Select:Group id="fd-a6b-list">
                            <twig:Select:Item value="pub">
                                Public
                            </twig:Select:Item>
                            <twig:Select:Item value="priv">
                                Private
                            </twig:Select:Item>
                        </twig:Select:Group>
                    </twig:Select:Content>
                </twig:Select>
            </twig:Field>
            <twig:Field>
                <twig:Field:Label for="fd-a6c">
                    Description
                </twig:Field:Label>
                <twig:Textarea id="fd-a6c" rows="3" />
            </twig:Field>
            <twig:Field orientation="horizontal">
                <twig:Switch id="fd-a6d" />
                <twig:Field:Label for="fd-a6d">
                    Enable comments
                </twig:Field:Label>
            </twig:Field>
        </twig:Field:Group>
    </twig:Field:Set>
    <twig:Button type="submit" class="w-fit">
        Create
    </twig:Button>
</form>
```

### Multi Section Form

```twig
<form class="grid w-full max-w-md gap-6">
    <twig:Field:Group>
        <twig:Field:Set>
            <twig:Field:Legend>
                Profile
            </twig:Field:Legend>
            <twig:Field>
                <twig:Field:Label for="fd-a7a">
                    Name
                </twig:Field:Label>
                <twig:Input id="fd-a7a" />
            </twig:Field>
            <twig:Field>
                <twig:Field:Label for="fd-a7b">
                    Role
                </twig:Field:Label>
                <twig:Select id="fd-a7b">
                    <twig:Select:Trigger class="w-full">
                        <twig:Select:Value placeholder="Role" />
                    </twig:Select:Trigger>
                    <twig:Select:Content>
                        <twig:Select:Group id="fd-a7b-list">
                            <twig:Select:Item value="dev">
                                Developer
                            </twig:Select:Item>
                            <twig:Select:Item value="des">
                                Designer
                            </twig:Select:Item>
                        </twig:Select:Group>
                    </twig:Select:Content>
                </twig:Select>
            </twig:Field>
        </twig:Field:Set>
        <twig:Field:Separator />
        <twig:Field:Set>
            <twig:Field:Legend>
                Preferences
            </twig:Field:Legend>
            <twig:Field orientation="horizontal">
                <twig:Switch id="fd-a7c" />
                <twig:Field:Label for="fd-a7c">
                    Dark mode
                </twig:Field:Label>
            </twig:Field>
            <twig:Field orientation="horizontal">
                <twig:Checkbox id="fd-a7d" />
                <twig:Field:Label for="fd-a7d">
                    Email me weekly
                </twig:Field:Label>
            </twig:Field>
        </twig:Field:Set>
    </twig:Field:Group>
    <twig:Button type="submit" class="w-fit">
        Save
    </twig:Button>
</form>
```

### Order Details

```twig
<twig:Field:Group class="w-full max-w-md">
    <div class="grid gap-4 sm:grid-cols-2">
        <twig:Field>
            <twig:Field:Label for="fd-o1">
                Destination
            </twig:Field:Label>
            <twig:Input id="fd-o1" />
        </twig:Field>
        <twig:Field>
            <twig:Field:Label for="fd-o2">
                Expected date
            </twig:Field:Label>
            <twig:Input id="fd-o2" type="date" />
        </twig:Field>
        <twig:Field>
            <twig:Field:Label for="fd-o3">
                Assignee
            </twig:Field:Label>
            <twig:Select id="fd-o3">
                <twig:Select:Trigger class="w-full">
                    <twig:Select:Value placeholder="Assign" />
                </twig:Select:Trigger>
                <twig:Select:Content>
                    <twig:Select:Group id="fd-o3-list">
                        <twig:Select:Item value="jane">
                            Jane
                        </twig:Select:Item>
                        <twig:Select:Item value="john">
                            John
                        </twig:Select:Item>
                    </twig:Select:Group>
                </twig:Select:Content>
            </twig:Select>
        </twig:Field>
        <twig:Field>
            <twig:Field:Label for="fd-o4">
                Reference
            </twig:Field:Label>
            <twig:Input id="fd-o4" placeholder="PO-0001" />
        </twig:Field>
    </div>
</twig:Field:Group>
```

### Price With Currency

```twig
<twig:Field:Group class="w-full max-w-md">
    <twig:Field>
        <twig:Field:Label for="fd-p1">
            Price
        </twig:Field:Label>
        <twig:InputGroup>
            <twig:InputGroup:Addon>
                $
            </twig:InputGroup:Addon>
            <twig:InputGroup:Input id="fd-p1" type="number" placeholder="0.00" />
        </twig:InputGroup>
    </twig:Field>
    <twig:Field>
        <twig:Field:Label for="fd-p2">
            Discounted price
        </twig:Field:Label>
        <twig:InputGroup>
            <twig:InputGroup:Addon>
                $
            </twig:InputGroup:Addon>
            <twig:InputGroup:Input id="fd-p2" type="number" placeholder="0.00" />
        </twig:InputGroup>
    </twig:Field>
    <twig:Field orientation="horizontal">
        <twig:Switch id="fd-p3" />
        <twig:Field:Label for="fd-p3">
            Charge tax
        </twig:Field:Label>
    </twig:Field>
</twig:Field:Group>
```

### Weight With Unit

```twig
<twig:Field class="w-full max-w-xs">
    <twig:Field:Label for="fd-w1">
        Weight
    </twig:Field:Label>
    <twig:InputGroup>
        <twig:InputGroup:Input id="fd-w1" type="number" placeholder="0" />
        <twig:InputGroup:Addon align="inline-end">
            kg
        </twig:InputGroup:Addon>
    </twig:InputGroup>
</twig:Field>
```

### Error Message

```twig
<twig:Field class="w-full max-w-sm">
    <twig:Field:Label for="fd-e1">
        Email
    </twig:Field:Label>
    <twig:Input id="fd-e1" aria-invalid="true" value="not-an-email" />
    <twig:Field:Error>
        Enter a valid email address.
    </twig:Field:Error>
</twig:Field>
```

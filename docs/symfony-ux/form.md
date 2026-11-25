
# Form

## Examples

### Single Text Input

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="user-1">
            Username
        </twig:Form:Label>
        <twig:Input id="user-1" name="username" type="text" placeholder="shadcn" />
        <twig:Form:Description>
            This is your public display name.
        </twig:Form:Description>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Email Validation

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="emai-2">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-2" name="email" type="email" placeholder="you@example.com" value="not-an-email" aria-invalid="true" />
        <twig:Form:Message>
            Enter a valid email address.
        </twig:Form:Message>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Password Rules

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="pass-3">
            Password
        </twig:Form:Label>
        <twig:Input id="pass-3" name="password" type="password" minlength="8" pattern="(?=.*\d).{8,}" />
        <twig:Form:Description>
            At least 8 characters, with a number.
        </twig:Form:Description>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Number Input

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="age-4">
            Age
        </twig:Form:Label>
        <twig:Input id="age-4" name="age" type="number" min="18" max="120" />
        <twig:Form:Description>
            Between 18 and 120.
        </twig:Form:Description>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### URL Input

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="webs-5">
            Website
        </twig:Form:Label>
        <twig:Input id="webs-5" name="website" type="url" placeholder="https://example.com" />
        <twig:Form:Description>
            Include the protocol.
        </twig:Form:Description>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Phone Input

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="phon-6">
            Phone
        </twig:Form:Label>
        <twig:Input id="phon-6" name="phone" type="tel" placeholder="+33 6 12 34 56 78" pattern="[+0-9 ]{8,}" />
        <twig:Form:Description>
            Digits, spaces and + only.
        </twig:Form:Description>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Search Input

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="q-1">
            Search
        </twig:Form:Label>
        <twig:InputGroup>
            <twig:InputGroup:Addon>
                <twig:ux:icon name="lucide:search" />
            </twig:InputGroup:Addon>
            <twig:InputGroup:Input id="q-1" name="q" type="search" placeholder="Search..." />
            <twig:InputGroup:Addon align="inline-end">
                <twig:InputGroup:Button type="submit" size="xs">
                    Search
                </twig:InputGroup:Button>
            </twig:InputGroup:Addon>
        </twig:InputGroup>
    </twig:Form:Item>
</twig:Form>
```

### Select With Enum Validation

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="role-7">
            Role
        </twig:Form:Label>
        <twig:NativeSelect id="role-7" name="role" aria-invalid="true">
            <twig:NativeSelect:Option value="">
                Select a role
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="admin">
                Admin
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="editor">
                Editor
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="viewer">
                Viewer
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
        <twig:Form:Description>
            Pick one of the listed roles.
        </twig:Form:Description>
        <twig:Form:Message>
            Select a role.
        </twig:Form:Message>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Textarea Min Max Length

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="bio-8">
            Bio
        </twig:Form:Label>
        <twig:Textarea id="bio-8" name="bio" placeholder="Tell us about yourself" minlength="10" maxlength="160" />
        <twig:Form:Description>
            Between 10 and 160 characters.
        </twig:Form:Description>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Required Checkbox

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <div class="flex items-center gap-2">
            <twig:Checkbox id="term-9" name="terms" required />
            <twig:Form:Label for="term-9" class="font-normal">
                I accept the terms and conditions
            </twig:Form:Label>
        </div>
        <twig:Form:Description>
            You must accept to continue.
        </twig:Form:Description>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Radio Group With Enum

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label>
            Notify me about...
        </twig:Form:Label>
        <twig:RadioGroup>
            <div class="flex items-center gap-2">
                <twig:RadioGroup:Item id="rg-10-0" name="notify" value="all new messages" checked />
                <twig:Form:Label for="rg-10-0" class="font-normal">
                    All new messages
                </twig:Form:Label>
            </div>
            <div class="flex items-center gap-2">
                <twig:RadioGroup:Item id="rg-10-1" name="notify" value="direct messages" />
                <twig:Form:Label for="rg-10-1" class="font-normal">
                    Direct messages
                </twig:Form:Label>
            </div>
            <div class="flex items-center gap-2">
                <twig:RadioGroup:Item id="rg-10-2" name="notify" value="nothing" />
                <twig:Form:Label for="rg-10-2" class="font-normal">
                    Nothing
                </twig:Form:Label>
            </div>
        </twig:RadioGroup>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Settings Switch

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item class="flex-row items-center justify-between gap-4">
        <div class="grid gap-1">
            <twig:Form:Label for="sw-11">
                Marketing emails
            </twig:Form:Label>
            <twig:Form:Description>
                Receive emails about new products and features.
            </twig:Form:Description>
        </div>
        <twig:Switch id="sw-11" name="marketing" />
    </twig:Form:Item>
    <twig:Form:Item class="flex-row items-center justify-between gap-4">
        <div class="grid gap-1">
            <twig:Form:Label for="sw-12">
                Security emails
            </twig:Form:Label>
            <twig:Form:Description>
                Always sent when your account is at risk.
            </twig:Form:Description>
        </div>
        <twig:Switch id="sw-12" name="security" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Save
    </twig:Button>
</twig:Form>
```

### Multiple Select Fields

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="coun-13">
            Country
        </twig:Form:Label>
        <twig:NativeSelect id="coun-13" name="country">
            <twig:NativeSelect:Option value="">
                Select a country
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="france">
                France
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="germany">
                Germany
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="spain">
                Spain
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="lang-14">
            Language
        </twig:Form:Label>
        <twig:NativeSelect id="lang-14" name="language">
            <twig:NativeSelect:Option value="">
                Select a language
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="english">
                English
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="french">
                French
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="german">
                German
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="tz-15">
            Timezone
        </twig:Form:Label>
        <twig:NativeSelect id="tz-15" name="tz">
            <twig:NativeSelect:Option value="">
                Select a timezone
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="paris">
                Paris
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="berlin">
                Berlin
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="madrid">
                Madrid
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Mixed Controls

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="name-16">
            Name
        </twig:Form:Label>
        <twig:Input id="name-16" name="name" type="text" placeholder="Jane Doe" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="plan-17">
            Plan
        </twig:Form:Label>
        <twig:NativeSelect id="plan-17" name="plan">
            <twig:NativeSelect:Option value="">
                Select a plan
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="free">
                Free
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="pro">
                Pro
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="team">
                Team
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="note-18">
            Notes
        </twig:Form:Label>
        <twig:Textarea id="note-18" name="notes" placeholder="Anything else?" />
    </twig:Form:Item>
    <twig:Form:Item class="flex-row items-center justify-between gap-4">
        <div class="grid gap-1">
            <twig:Form:Label for="sw-19">
                Subscribe
            </twig:Form:Label>
            <twig:Form:Description>
                Get product updates.
            </twig:Form:Description>
        </div>
        <twig:Switch id="sw-19" name="sub" />
    </twig:Form:Item>
    <twig:Form:Item>
        <div class="flex items-center gap-2">
            <twig:Checkbox id="term-20" name="terms2" required />
            <twig:Form:Label for="term-20" class="font-normal">
                I accept the terms
            </twig:Form:Label>
        </div>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Vertical Layout

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="firs-21">
            First name
        </twig:Form:Label>
        <twig:Input id="firs-21" name="first" type="text" placeholder="Jane" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="last-22">
            Last name
        </twig:Form:Label>
        <twig:Input id="last-22" name="last" type="text" placeholder="Doe" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="emai-23">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-23" name="email2" type="email" placeholder="jane@example.com" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Horizontal Layout

```twig
<twig:Form class="w-full max-w-md">
    <twig:Form:Item class="sm:grid sm:grid-cols-[8rem_1fr] sm:items-center">
        <twig:Form:Label for="firs-24">
            First name
        </twig:Form:Label>
        <twig:Input id="firs-24" name="first" type="text" placeholder="Jane" />
    </twig:Form:Item>
    <twig:Form:Item class="sm:grid sm:grid-cols-[8rem_1fr] sm:items-center">
        <twig:Form:Label for="last-25">
            Last name
        </twig:Form:Label>
        <twig:Input id="last-25" name="last" type="text" placeholder="Doe" />
    </twig:Form:Item>
    <twig:Form:Item class="sm:grid sm:grid-cols-[8rem_1fr] sm:items-center">
        <twig:Form:Label for="emai-26">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-26" name="email2" type="email" placeholder="jane@example.com" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Two Column Grid

```twig
<twig:Form class="grid w-full max-w-lg grid-cols-2 gap-4 space-y-0">
    <twig:Form:Item>
        <twig:Form:Label for="firs-27">
            First name
        </twig:Form:Label>
        <twig:Input id="firs-27" name="first" type="text" placeholder="Jane" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="last-28">
            Last name
        </twig:Form:Label>
        <twig:Input id="last-28" name="last" type="text" placeholder="Doe" />
    </twig:Form:Item>
    <twig:Form:Item class="col-span-2">
        <twig:Form:Label for="emai-29">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-29" name="email2" type="email" placeholder="jane@example.com" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="coun-30">
            Country
        </twig:Form:Label>
        <twig:NativeSelect id="coun-30" name="country">
            <twig:NativeSelect:Option value="">
                Select a country
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="france">
                France
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="germany">
                Germany
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="city-31">
            City
        </twig:Form:Label>
        <twig:Input id="city-31" name="city" type="text" placeholder="Paris" />
    </twig:Form:Item>
    <div class="col-span-2">
        <twig:Button type="submit">
        Submit
    </twig:Button>
    </div>
</twig:Form>
```

### Responsive Stack To Row

```twig
<twig:Form class="flex w-full max-w-xl flex-col gap-4 space-y-0 sm:flex-row sm:items-end">
    <twig:Form:Item class="flex-1">
        <twig:Form:Label for="name-32">
            Name
        </twig:Form:Label>
        <twig:Input id="name-32" name="name" type="text" placeholder="Jane Doe" />
    </twig:Form:Item>
    <twig:Form:Item class="flex-1">
        <twig:Form:Label for="emai-33">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-33" name="email2" type="email" placeholder="jane@example.com" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Join
    </twig:Button>
</twig:Form>
```

### Compact Inline Input And Button

```twig
<twig:Form class="flex w-full max-w-sm items-end gap-2 space-y-0">
    <twig:Form:Item class="flex-1">
        <twig:Form:Label for="emai-34">
            Newsletter
        </twig:Form:Label>
        <twig:Input id="emai-34" name="email2" type="email" placeholder="you@example.com" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Subscribe
    </twig:Button>
</twig:Form>
```

### Tight Spacing

```twig
<twig:Form class="w-full max-w-xs space-y-3">
    <twig:Form:Item class="gap-1">
        <twig:Form:Label for="name-35">
            Name
        </twig:Form:Label>
        <twig:Input id="name-35" name="name" type="text" placeholder="Jane Doe" />
    </twig:Form:Item>
    <twig:Form:Item class="gap-1">
        <twig:Form:Label for="emai-36">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-36" name="email2" type="email" placeholder="jane@example.com" />
    </twig:Form:Item>
    <twig:Form:Item class="gap-1">
        <twig:Form:Label for="role-37">
            Role
        </twig:Form:Label>
        <twig:NativeSelect id="role-37" name="role">
            <twig:NativeSelect:Option value="">
                Select a role
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="admin">
                Admin
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="editor">
                Editor
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Form:Item>
    <twig:Button type="submit">
        Save
    </twig:Button>
</twig:Form>
```

### Spaced Sections With Legends

```twig
<twig:Form class="w-full max-w-md">
    <twig:Field:Set>
        <twig:Field:Legend>
            Profile
        </twig:Field:Legend>
        <twig:Field:Description>
            How you appear to others.
        </twig:Field:Description>
        <twig:Form:Item>
            <twig:Form:Label for="name-38">
                Name
            </twig:Form:Label>
            <twig:Input id="name-38" name="name" type="text" placeholder="Jane Doe" />
        </twig:Form:Item>
        <twig:Form:Item>
            <twig:Form:Label for="hand-39">
                Handle
            </twig:Form:Label>
            <twig:Input id="hand-39" name="handle" type="text" placeholder="@jane" />
        </twig:Form:Item>
    </twig:Field:Set>
    <twig:Field:Separator />
    <twig:Field:Set>
        <twig:Field:Legend>
            Notifications
        </twig:Field:Legend>
        <twig:Form:Item class="flex-row items-center justify-between gap-4">
            <div class="grid gap-1">
                <twig:Form:Label for="sw-40">
                    Email
                </twig:Form:Label>
                <twig:Form:Description>
                    Weekly summary.
                </twig:Form:Description>
            </div>
            <twig:Switch id="sw-40" name="mail" />
        </twig:Form:Item>
        <twig:Form:Item class="flex-row items-center justify-between gap-4">
            <div class="grid gap-1">
                <twig:Form:Label for="sw-41">
                    Push
                </twig:Form:Label>
                <twig:Form:Description>
                    Mentions and replies.
                </twig:Form:Description>
            </div>
            <twig:Switch id="sw-41" name="push" />
        </twig:Form:Item>
    </twig:Field:Set>
    <twig:Button type="submit">
        Save
    </twig:Button>
</twig:Form>
```

### Two Field Form

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="emai-42">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-42" name="email2" type="email" placeholder="you@example.com" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="pass-43">
            Password
        </twig:Form:Label>
        <twig:Input id="pass-43" name="password" type="password" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Sign in
    </twig:Button>
</twig:Form>
```

### Three Field Form

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="name-44">
            Name
        </twig:Form:Label>
        <twig:Input id="name-44" name="name" type="text" placeholder="Jane Doe" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="emai-45">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-45" name="email2" type="email" placeholder="you@example.com" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="comp-46">
            Company
        </twig:Form:Label>
        <twig:Input id="comp-46" name="company" type="text" placeholder="Acme" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Four Field Profile Form

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="firs-47">
            First name
        </twig:Form:Label>
        <twig:Input id="firs-47" name="first" type="text" placeholder="Jane" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="last-48">
            Last name
        </twig:Form:Label>
        <twig:Input id="last-48" name="last" type="text" placeholder="Doe" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="emai-49">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-49" name="email2" type="email" placeholder="jane@example.com" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="bio-50">
            Bio
        </twig:Form:Label>
        <twig:Textarea id="bio-50" name="bio" placeholder="A few words about you" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Save profile
    </twig:Button>
</twig:Form>
```

### Mixed Input Types

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="birt-51">
            Birthday
        </twig:Form:Label>
        <twig:Input id="birt-51" name="birthday" type="date" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="colo-52">
            Favourite colour
        </twig:Form:Label>
        <twig:Input id="colo-52" name="color" type="color" value="#6366f1" class="h-9 w-16 p-1" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="vol-53">
            Volume
        </twig:Form:Label>
        <twig:Input id="vol-53" name="vol" type="range" min="0" max="100" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="avat-54">
            Avatar
        </twig:Form:Label>
        <twig:Input id="avat-54" name="avatar" type="file" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Required And Optional Fields

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="name-55">
            Name *
        </twig:Form:Label>
        <twig:Input id="name-55" name="name" type="text" placeholder="Jane Doe" required />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="emai-56">
            Email *
        </twig:Form:Label>
        <twig:Input id="emai-56" name="email2" type="email" placeholder="jane@example.com" required />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="phon-57">
            Phone (optional)
        </twig:Form:Label>
        <twig:Input id="phon-57" name="phone" type="tel" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Multiple Field Groups

```twig
<twig:Form class="w-full max-w-md">
    <div class="grid gap-4 rounded-lg border p-4">
        <twig:Form:Item>
            <twig:Form:Label for="stre-58">
                Street
            </twig:Form:Label>
            <twig:Input id="stre-58" name="street" type="text" placeholder="12 rue de Rivoli" />
        </twig:Form:Item>
        <div class="grid grid-cols-2 gap-4">
            <twig:Form:Item>
                <twig:Form:Label for="city-59">
                    City
                </twig:Form:Label>
                <twig:Input id="city-59" name="city" type="text" placeholder="Paris" />
            </twig:Form:Item>
            <twig:Form:Item>
                <twig:Form:Label for="zip-60">
                    Postcode
                </twig:Form:Label>
                <twig:Input id="zip-60" name="zip" type="text" placeholder="75001" />
            </twig:Form:Item>
        </div>
    </div>
    <div class="grid gap-4 rounded-lg border p-4">
        <twig:Form:Item>
            <twig:Form:Label for="emai-61">
                Email
            </twig:Form:Label>
            <twig:Input id="emai-61" name="email2" type="email" placeholder="jane@example.com" />
        </twig:Form:Item>
        <twig:Form:Item>
            <twig:Form:Label for="phon-62">
                Phone
            </twig:Form:Label>
            <twig:Input id="phon-62" name="phone" type="tel" />
        </twig:Form:Item>
    </div>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Long Form With Many Fields

```twig
<twig:Form class="w-full max-w-md">
    <twig:Form:Item>
        <twig:Form:Label for="firs-63">
            First name
        </twig:Form:Label>
        <twig:Input id="firs-63" name="first_name" type="text" placeholder="First name" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="last-64">
            Last name
        </twig:Form:Label>
        <twig:Input id="last-64" name="last_name" type="text" placeholder="Last name" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="emai-65">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-65" name="email" type="text" placeholder="Email" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="comp-66">
            Company
        </twig:Form:Label>
        <twig:Input id="comp-66" name="company" type="text" placeholder="Company" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="job_-67">
            Job title
        </twig:Form:Label>
        <twig:Input id="job_-67" name="job_title" type="text" placeholder="Job title" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="stre-68">
            Street
        </twig:Form:Label>
        <twig:Input id="stre-68" name="street" type="text" placeholder="Street" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="city-69">
            City
        </twig:Form:Label>
        <twig:Input id="city-69" name="city" type="text" placeholder="City" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="post-70">
            Postcode
        </twig:Form:Label>
        <twig:Input id="post-70" name="postcode" type="text" placeholder="Postcode" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="coun-71">
            Country
        </twig:Form:Label>
        <twig:NativeSelect id="coun-71" name="country">
            <twig:NativeSelect:Option value="">
                Select a country
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="france">
                France
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="germany">
                Germany
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="spain">
                Spain
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="mess-72">
            Message
        </twig:Form:Label>
        <twig:Textarea id="mess-72" name="message" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Login Form

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="emai-73">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-73" name="email2" type="email" placeholder="you@example.com" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="pass-74">
            Password
        </twig:Form:Label>
        <twig:Input id="pass-74" name="password" type="password" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Sign in
    </twig:Button>
</twig:Form>
```

### Signup Form

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="name-75">
            Name
        </twig:Form:Label>
        <twig:Input id="name-75" name="name" type="text" placeholder="Jane Doe" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="emai-76">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-76" name="email2" type="email" placeholder="you@example.com" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="pass-77">
            Password
        </twig:Form:Label>
        <twig:Input id="pass-77" name="password" type="password" />
        <twig:Form:Description>
            At least 8 characters.
        </twig:Form:Description>
    </twig:Form:Item>
    <twig:Form:Item>
        <div class="flex items-center gap-2">
            <twig:Checkbox id="term-78" name="terms3" required />
            <twig:Form:Label for="term-78" class="font-normal">
                I accept the terms
            </twig:Form:Label>
        </div>
    </twig:Form:Item>
    <twig:Button type="submit">
        Create account
    </twig:Button>
</twig:Form>
```

### Profile Edit With Default Values

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="name-79">
            Name
        </twig:Form:Label>
        <twig:Input id="name-79" name="name" type="text" value="Jane Doe" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="emai-80">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-80" name="email2" type="email" value="jane@example.com" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="bio-81">
            Bio
        </twig:Form:Label>
        <twig:Textarea id="bio-81" name="bio" placeholder="Product designer in Paris." />
    </twig:Form:Item>
    <twig:Button type="submit">
        Save changes
    </twig:Button>
</twig:Form>
```

### Contact Form

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="name-82">
            Name
        </twig:Form:Label>
        <twig:Input id="name-82" name="name" type="text" placeholder="Jane Doe" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="emai-83">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-83" name="email2" type="email" placeholder="you@example.com" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="topi-84">
            Topic
        </twig:Form:Label>
        <twig:NativeSelect id="topi-84" name="topic">
            <twig:NativeSelect:Option value="">
                Select a topic
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="sales">
                Sales
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="support">
                Support
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="press">
                Press
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="mess-85">
            Message
        </twig:Form:Label>
        <twig:Textarea id="mess-85" name="message" placeholder="How can we help?" />
    </twig:Form:Item>
    <twig:Button type="submit">
        Send message
    </twig:Button>
</twig:Form>
```

### Settings Form

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item class="flex-row items-center justify-between gap-4">
        <div class="grid gap-1">
            <twig:Form:Label for="sw-86">
                Dark mode
            </twig:Form:Label>
            <twig:Form:Description>
                Use the dark theme.
            </twig:Form:Description>
        </div>
        <twig:Switch id="sw-86" name="dark" />
    </twig:Form:Item>
    <twig:Form:Item class="flex-row items-center justify-between gap-4">
        <div class="grid gap-1">
            <twig:Form:Label for="sw-87">
                Notifications
            </twig:Form:Label>
            <twig:Form:Description>
                Receive push notifications.
            </twig:Form:Description>
        </div>
        <twig:Switch id="sw-87" name="notif" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="lang-88">
            Language
        </twig:Form:Label>
        <twig:NativeSelect id="lang-88" name="language">
            <twig:NativeSelect:Option value="">
                Select a language
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="english">
                English
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="french">
                French
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Form:Item>
    <twig:Button type="submit">
        Save
    </twig:Button>
</twig:Form>
```

### Checkout Form

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="hold-89">
            Card holder
        </twig:Form:Label>
        <twig:Input id="hold-89" name="holder" type="text" placeholder="Jane Doe" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="card-90">
            Card number
        </twig:Form:Label>
        <twig:Input id="card-90" name="card" type="text" placeholder="4242 4242 4242 4242" />
    </twig:Form:Item>
    <div class="grid grid-cols-2 gap-4">
        <twig:Form:Item>
            <twig:Form:Label for="exp-91">
                Expiry
            </twig:Form:Label>
            <twig:Input id="exp-91" name="exp" type="text" placeholder="MM / YY" />
        </twig:Form:Item>
        <twig:Form:Item>
            <twig:Form:Label for="cvc-92">
                CVC
            </twig:Form:Label>
            <twig:Input id="cvc-92" name="cvc" type="text" placeholder="123" />
        </twig:Form:Item>
    </div>
    <twig:Form:Item>
        <div class="flex items-center gap-2">
            <twig:Checkbox id="save-93" name="save" />
            <twig:Form:Label for="save-93" class="font-normal">
                Save this card for later
            </twig:Form:Label>
        </div>
    </twig:Form:Item>
    <twig:Button type="submit">
        Pay $128.00
    </twig:Button>
</twig:Form>
```

### Search Filter With Facets

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="sf-q">
            Search
        </twig:Form:Label>
        <twig:Input id="sf-q" name="q" type="search" placeholder="Search products" />
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label>
            Category
        </twig:Form:Label>
        <twig:RadioGroup>
            <div class="flex items-center gap-2">
                <twig:RadioGroup:Item id="rg-94-0" name="category" value="all" checked />
                <twig:Form:Label for="rg-94-0" class="font-normal">
                    All
                </twig:Form:Label>
            </div>
            <div class="flex items-center gap-2">
                <twig:RadioGroup:Item id="rg-94-1" name="category" value="shoes" />
                <twig:Form:Label for="rg-94-1" class="font-normal">
                    Shoes
                </twig:Form:Label>
            </div>
            <div class="flex items-center gap-2">
                <twig:RadioGroup:Item id="rg-94-2" name="category" value="shirts" />
                <twig:Form:Label for="rg-94-2" class="font-normal">
                    Shirts
                </twig:Form:Label>
            </div>
        </twig:RadioGroup>
    </twig:Form:Item>
    <twig:Form:Item>
        <div class="flex items-center gap-2">
            <twig:Checkbox id="stoc-95" name="stock" />
            <twig:Form:Label for="stoc-95" class="font-normal">
                In stock only
            </twig:Form:Label>
        </div>
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="sort-96">
            Sort by
        </twig:Form:Label>
        <twig:NativeSelect id="sort-96" name="sort">
            <twig:NativeSelect:Option value="">
                Relevance
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="price">
                Price
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="newest">
                Newest
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Form:Item>
    <div class="flex gap-2">
        <twig:Button type="submit">
            Apply
        </twig:Button>
        <twig:Button type="submit" variant="outline" type="reset">
            Reset
        </twig:Button>
    </div>
</twig:Form>
```

### Required Field Errors

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="name-97">
            Name
        </twig:Form:Label>
        <twig:Input id="name-97" name="name" type="text" placeholder="Jane Doe" aria-invalid="true" />
        <twig:Form:Message>
            Name is required.
        </twig:Form:Message>
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="emai-98">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-98" name="email2" type="email" placeholder="you@example.com" aria-invalid="true" />
        <twig:Form:Message>
            Email is required.
        </twig:Form:Message>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Min Max Length Errors

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="user-99">
            Username
        </twig:Form:Label>
        <twig:Input id="user-99" name="username" type="text" value="ab" aria-invalid="true" />
        <twig:Form:Message>
            Username must be at least 3 characters.
        </twig:Form:Message>
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="bio-100">
            Bio
        </twig:Form:Label>
        <twig:Textarea id="bio-100" name="bio" aria-invalid="true" />
        <twig:Form:Message>
            Bio must be 160 characters or fewer.
        </twig:Form:Message>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Email Validation Message

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="emai-101">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-101" name="email2" type="email" value="jane@" aria-invalid="true" />
        <twig:Form:Message>
            Enter a valid email address.
        </twig:Form:Message>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Password Strength Rules

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="pass-102">
            Password
        </twig:Form:Label>
        <twig:Input id="pass-102" name="password" type="password" value="abcdefgh" aria-invalid="true" />
        <twig:Form:Message>
            Add a number and a symbol.
        </twig:Form:Message>
    </twig:Form:Item>
    <ul class="grid gap-1 text-sm text-muted-foreground">
        <li class="flex items-center gap-2">
            <twig:ux:icon name="lucide:check" class="size-4 text-emerald-600" />
            8 characters or more
        </li>
        <li class="flex items-center gap-2">
            <twig:ux:icon name="lucide:x" class="size-4 text-destructive" />
            A number
        </li>
        <li class="flex items-center gap-2">
            <twig:ux:icon name="lucide:x" class="size-4 text-destructive" />
            A symbol
        </li>
    </ul>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Conditional Validation

The company field only appears when the account type is Business.

```twig
<twig:Form class="group w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="at-1">
            Account type
        </twig:Form:Label>
        <twig:NativeSelect id="at-1" name="type">
            <twig:NativeSelect:Option value="personal">
                Personal
            </twig:NativeSelect:Option>
            <twig:NativeSelect:Option value="business">
                Business
            </twig:NativeSelect:Option>
        </twig:NativeSelect>
    </twig:Form:Item>
    <twig:Form:Item class="hidden group-has-[option[value=business]:checked]:grid">
        <twig:Form:Label for="comp-103">
            Company
        </twig:Form:Label>
        <twig:Input id="comp-103" name="company" type="text" placeholder="Acme" aria-invalid="true" />
        <twig:Form:Message>
            Company is required for business accounts.
        </twig:Form:Message>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Custom Validation Messages

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="user-104">
            Username
        </twig:Form:Label>
        <twig:Input id="user-104" name="username" type="text" placeholder="shadcn" value="jane doe" aria-invalid="true" />
        <twig:Form:Message>
            Usernames can only contain letters, numbers and dashes.
        </twig:Form:Message>
    </twig:Form:Item>
    <twig:Form:Item>
        <twig:Form:Label for="age-105">
            Age
        </twig:Form:Label>
        <twig:Input id="age-105" name="age" type="number" value="16" aria-invalid="true" />
        <twig:Form:Message>
            You must be at least 18 to sign up.
        </twig:Form:Message>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

### Real Time Validation

`:user-invalid` marks the field once the user has left it with an invalid value.

```twig
<twig:Form class="w-full max-w-sm">
    <twig:Form:Item>
        <twig:Form:Label for="emai-106">
            Email
        </twig:Form:Label>
        <twig:Input id="emai-106" name="email2" type="email" placeholder="you@example.com" class="user-invalid:border-destructive user-invalid:ring-3 user-invalid:ring-destructive/20" required />
        <twig:Form:Description>
            Validated when you leave the field.
        </twig:Form:Description>
    </twig:Form:Item>
    <twig:Button type="submit">
        Submit
    </twig:Button>
</twig:Form>
```

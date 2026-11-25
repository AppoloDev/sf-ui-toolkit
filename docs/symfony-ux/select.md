# Select

## Examples

### Small Trigger

```twig
<div style="min-height: 240px">
    <twig:Select id="select-small">
        <twig:Select:Trigger size="sm" class="w-44">
            <twig:Select:Value placeholder="Select a fruit" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-small-list">
                <twig:Select:Item value="apple">
                    Apple
                </twig:Select:Item>
                <twig:Select:Item value="banana">
                    Banana
                </twig:Select:Item>
                <twig:Select:Item value="blueberry">
                    Blueberry
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Icons

```twig
<div style="min-height: 280px">
    <twig:Select id="select-icons">
        <twig:Select:Trigger class="w-52">
            <twig:Select:Value placeholder="Select a section" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-icons-list">
                <twig:Select:Item value="dashboard">
                    <twig:ux:icon name="lucide:layout-dashboard" class="size-4 text-muted-foreground" />
                    Dashboard
                </twig:Select:Item>
                <twig:Select:Item value="analytics">
                    <twig:ux:icon name="lucide:chart-column" class="size-4 text-muted-foreground" />
                    Analytics
                </twig:Select:Item>
                <twig:Select:Item value="security">
                    <twig:ux:icon name="lucide:shield" class="size-4 text-muted-foreground" />
                    Security
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Field With Label

```twig
<div style="min-height: 280px">
    <twig:Field class="max-w-xs">
        <twig:Field:Label for="select-fruit">
            Favorite Fruit
        </twig:Field:Label>
        <twig:Select id="select-fruit">
            <twig:Select:Trigger class="w-full">
                <twig:Select:Value placeholder="Select a fruit" />
            </twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="select-fruit-list">
                    <twig:Select:Item value="apple">
                        Apple
                    </twig:Select:Item>
                    <twig:Select:Item value="banana">
                        Banana
                    </twig:Select:Item>
                </twig:Select:Group>
            </twig:Select:Content>
        </twig:Select>
        <twig:Field:Description>
            Pick the one you would eat first.
        </twig:Field:Description>
    </twig:Field>
</div>
```

### Inline With Input

```twig
<div style="min-height: 240px">
    <div class="flex max-w-md items-center gap-2">
        <twig:Select id="select-status" value="all">
            <twig:Select:Trigger class="w-32">
                <twig:Select:Value />
            </twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="select-status-list">
                    <twig:Select:Item value="all">
                        All
                    </twig:Select:Item>
                    <twig:Select:Item value="active">
                        Active
                    </twig:Select:Item>
                    <twig:Select:Item value="inactive">
                        Inactive
                    </twig:Select:Item>
                </twig:Select:Group>
            </twig:Select:Content>
        </twig:Select>
        <twig:Input placeholder="Search..." />
    </div>
</div>
```

### With Button

```twig
<div style="min-height: 240px">
    <div class="flex max-w-md items-center gap-2">
        <twig:Select id="select-button">
            <twig:Select:Trigger class="w-full">
                <twig:Select:Value placeholder="Select a plan" />
            </twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="select-button-list">
                    <twig:Select:Item value="free">
                        Free
                    </twig:Select:Item>
                    <twig:Select:Item value="pro">
                        Pro
                    </twig:Select:Item>
                </twig:Select:Group>
            </twig:Select:Content>
        </twig:Select>
        <twig:Button>
            Submit
        </twig:Button>
    </div>
</div>
```

### Disabled Item

```twig
<div style="min-height: 280px">
    <twig:Select id="select-disabled-item">
        <twig:Select:Trigger class="w-48">
            <twig:Select:Value placeholder="Select a fruit" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-disabled-item-list">
                <twig:Select:Item value="apple">
                    Apple
                </twig:Select:Item>
                <twig:Select:Item value="grapes" disabled>
                    Grapes
                </twig:Select:Item>
                <twig:Select:Item value="banana">
                    Banana
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Option Descriptions

```twig
<div style="min-height: 300px">
    <twig:Select id="select-tiers" value="startup">
        <twig:Select:Trigger class="w-56">
            <twig:Select:Value />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-tiers-list">
                <twig:Select:Item value="startup">
                    <span class="flex flex-col">
                        <span>
                            Startup
                        </span>
                        <span class="text-xs text-muted-foreground">
                            For small teams
                        </span>
                    </span>
                </twig:Select:Item>
                <twig:Select:Item value="business">
                    <span class="flex flex-col">
                        <span>
                            Business
                        </span>
                        <span class="text-xs text-muted-foreground">
                            For growing companies
                        </span>
                    </span>
                </twig:Select:Item>
                <twig:Select:Item value="enterprise">
                    <span class="flex flex-col">
                        <span>
                            Enterprise
                        </span>
                        <span class="text-xs text-muted-foreground">
                            For large organizations
                        </span>
                    </span>
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Status Bullets

```twig
<div style="min-height: 300px">
    <twig:Select id="select-bullets" value="progress">
        <twig:Select:Trigger class="w-48">
            <twig:Select:Value />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-bullets-list">
                <twig:Select:Item value="todo">
                    <span class="size-2 rounded-full bg-slate-400">
                    </span>
                    Todo
                </twig:Select:Item>
                <twig:Select:Item value="progress">
                    <span class="size-2 rounded-full bg-amber-500">
                    </span>
                    In Progress
                </twig:Select:Item>
                <twig:Select:Item value="done">
                    <span class="size-2 rounded-full bg-green-500">
                    </span>
                    Done
                </twig:Select:Item>
                <twig:Select:Item value="rejected">
                    <span class="size-2 rounded-full bg-red-500">
                    </span>
                    Rejected
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### User Avatars

```twig
<div style="min-height: 300px">
    <twig:Select id="select-users" value="shadcn">
        <twig:Select:Trigger class="w-56">
            <twig:Select:Value />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-users-list">
                <twig:Select:Label>
                    Team
                </twig:Select:Label>
                <twig:Select:Item value="shadcn">
                    <twig:Avatar size="sm">
                        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                        <twig:Avatar:Fallback>
                            S
                        </twig:Avatar:Fallback>
                    </twig:Avatar>
                    shadcn
                </twig:Select:Item>
                <twig:Select:Item value="maxleiter">
                    <twig:Avatar size="sm">
                        <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
                        <twig:Avatar:Fallback>
                            M
                        </twig:Avatar:Fallback>
                    </twig:Avatar>
                    maxleiter
                </twig:Select:Item>
                <twig:Select:Item value="evilrabbit">
                    <twig:Avatar size="sm">
                        <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
                        <twig:Avatar:Fallback>
                            E
                        </twig:Avatar:Fallback>
                    </twig:Avatar>
                    evilrabbit
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Status Badges

```twig
<div style="min-height: 300px">
    <twig:Select id="select-badges" value="progress">
        <twig:Select:Trigger class="w-56">
            <twig:Select:Value />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-badges-list">
                <twig:Select:Item value="todo">
                    <twig:Badge variant="outline">
                        Todo
                    </twig:Badge>
                </twig:Select:Item>
                <twig:Select:Item value="progress">
                    <twig:Badge variant="secondary">
                        In Progress
                    </twig:Badge>
                </twig:Select:Item>
                <twig:Select:Item value="done">
                    <twig:Badge>
                        Done
                    </twig:Badge>
                </twig:Select:Item>
                <twig:Select:Item value="rejected">
                    <twig:Badge variant="destructive">
                        Rejected
                    </twig:Badge>
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Country Flags

```twig
<div style="min-height: 300px">
    <twig:Select id="select-flags" value="us">
        <twig:Select:Trigger class="w-52">
            <twig:Select:Value />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-flags-list">
                <twig:Select:Item value="us">
                    🇺🇸 United States
                </twig:Select:Item>
                <twig:Select:Item value="fr">
                    🇫🇷 France
                </twig:Select:Item>
                <twig:Select:Item value="jp">
                    🇯🇵 Japan
                </twig:Select:Item>
                <twig:Select:Item value="br">
                    🇧🇷 Brazil
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Timezone Offsets

```twig
<div style="min-height: 340px">
    <twig:Select id="select-tz">
        <twig:Select:Trigger class="w-64">
            <twig:Select:Value placeholder="Select a timezone" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-tz-americas">
                <twig:Select:Label>
                    Americas
                </twig:Select:Label>
                <twig:Select:Item value="est">
                    EST
                    <span class="ms-auto text-muted-foreground">
                        UTC-5
                    </span>
                </twig:Select:Item>
                <twig:Select:Item value="pst">
                    PST
                    <span class="ms-auto text-muted-foreground">
                        UTC-8
                    </span>
                </twig:Select:Item>
            </twig:Select:Group>
            <twig:Select:Separator />
            <twig:Select:Group id="select-tz-europe">
                <twig:Select:Label>
                    Europe
                </twig:Select:Label>
                <twig:Select:Item value="cet">
                    CET
                    <span class="ms-auto text-muted-foreground">
                        UTC+1
                    </span>
                </twig:Select:Item>
                <twig:Select:Item value="eet">
                    EET
                    <span class="ms-auto text-muted-foreground">
                        UTC+2
                    </span>
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Category Icons

```twig
<div style="min-height: 300px">
    <twig:Select id="select-categories" value="documents">
        <twig:Select:Trigger class="w-48">
            <twig:Select:Value />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-categories-list">
                <twig:Select:Item value="documents">
                    <twig:ux:icon name="lucide:file-text" class="size-4" />
                    Documents
                </twig:Select:Item>
                <twig:Select:Item value="images">
                    <twig:ux:icon name="lucide:image" class="size-4" />
                    Images
                </twig:Select:Item>
                <twig:Select:Item value="archives">
                    <twig:ux:icon name="lucide:archive" class="size-4" />
                    Archives
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Basic

```twig
<div style="min-height: 240px">
    <twig:Select id="select-basic">
        <twig:Select:Trigger class="w-48">
            <twig:Select:Value placeholder="Select a framework" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-basic-list">
                <twig:Select:Item value="symfony">
                    Symfony
                </twig:Select:Item>
                <twig:Select:Item value="laravel">
                    Laravel
                </twig:Select:Item>
                <twig:Select:Item value="rails">
                    Rails
                </twig:Select:Item>
                <twig:Select:Item value="django">
                    Django
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Grouped Labels

```twig
<div style="min-height: 340px">
    <twig:Select id="select-grouped">
        <twig:Select:Trigger class="w-56">
            <twig:Select:Value placeholder="Select a food" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-grouped-fruits">
                <twig:Select:Label>
                    Fruits
                </twig:Select:Label>
                <twig:Select:Item value="apple">
                    Apple
                </twig:Select:Item>
                <twig:Select:Item value="banana">
                    Banana
                </twig:Select:Item>
            </twig:Select:Group>
            <twig:Select:Group id="select-grouped-veg">
                <twig:Select:Label>
                    Vegetables
                </twig:Select:Label>
                <twig:Select:Item value="carrot">
                    Carrot
                </twig:Select:Item>
                <twig:Select:Item value="broccoli">
                    Broccoli
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Grouped Separators

```twig
<div style="min-height: 340px">
    <twig:Select id="select-sep">
        <twig:Select:Trigger class="w-56">
            <twig:Select:Value placeholder="Select a timezone" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-sep-eu">
                <twig:Select:Item value="paris">
                    Paris (CET)
                </twig:Select:Item>
                <twig:Select:Item value="london">
                    London (GMT)
                </twig:Select:Item>
            </twig:Select:Group>
            <twig:Select:Separator />
            <twig:Select:Group id="select-sep-us">
                <twig:Select:Item value="ny">
                    New York (EST)
                </twig:Select:Item>
                <twig:Select:Item value="la">
                    Los Angeles (PST)
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Plan Picker

```twig
<div style="min-height: 300px">
    <twig:Select id="select-plan">
        <twig:Select:Trigger class="w-72">
            <twig:Select:Value placeholder="Choose a plan" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-plan-list">
                <twig:Select:Item value="free">
                    <span class="font-medium">
                        Free
                    </span>
                    <span class="text-muted-foreground">
                        $0 / month
                    </span>
                </twig:Select:Item>
                <twig:Select:Item value="pro">
                    <span class="font-medium">
                        Pro
                    </span>
                    <span class="text-muted-foreground">
                        $12 / month
                    </span>
                </twig:Select:Item>
                <twig:Select:Item value="team">
                    <span class="font-medium">
                        Team
                    </span>
                    <span class="text-muted-foreground">
                        $30 / month
                    </span>
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Access Levels

```twig
<div style="min-height: 300px">
    <twig:Select id="select-access">
        <twig:Select:Trigger class="w-52">
            <twig:Select:Value placeholder="Access level" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-access-list">
                <twig:Select:Item value="viewer">
                    <twig:ux:icon name="lucide:eye" />
                    Viewer
                </twig:Select:Item>
                <twig:Select:Item value="commenter">
                    <twig:ux:icon name="lucide:message-square" />
                    Commenter
                </twig:Select:Item>
                <twig:Select:Item value="editor">
                    <twig:ux:icon name="lucide:pencil" />
                    Editor
                </twig:Select:Item>
                <twig:Select:Item value="owner">
                    <twig:ux:icon name="lucide:crown" />
                    Owner
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Status Filter

```twig
<div style="min-height: 300px">
    <twig:Select id="select-status-filter">
        <twig:Select:Trigger size="sm" class="w-40">
            <twig:Select:Value placeholder="Status" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-status-filter-list">
                <twig:Select:Item value="all">
                    All
                </twig:Select:Item>
                <twig:Select:Item value="active">
                    Active
                </twig:Select:Item>
                <twig:Select:Item value="paused">
                    Paused
                </twig:Select:Item>
                <twig:Select:Item value="archived">
                    Archived
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Priority Badges

```twig
<div style="min-height: 300px">
    <twig:Select id="select-priority">
        <twig:Select:Trigger class="w-48">
            <twig:Select:Value placeholder="Priority" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-priority-list">
                <twig:Select:Item value="low">
                    <twig:Badge variant="outline">
                        Low
                    </twig:Badge>
                </twig:Select:Item>
                <twig:Select:Item value="medium">
                    <twig:Badge variant="secondary">
                        Medium
                    </twig:Badge>
                </twig:Select:Item>
                <twig:Select:Item value="high">
                    <twig:Badge variant="destructive">
                        High
                    </twig:Badge>
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Font Preview

```twig
<div style="min-height: 300px">
    <twig:Select id="select-font">
        <twig:Select:Trigger class="w-52">
            <twig:Select:Value placeholder="Font" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-font-list">
                <twig:Select:Item value="sans" class="font-sans">
                    Sans serif
                </twig:Select:Item>
                <twig:Select:Item value="serif" class="font-serif">
                    Serif
                </twig:Select:Item>
                <twig:Select:Item value="mono" class="font-mono">
                    Monospace
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Large List

```twig
<div style="min-height: 320px">
    <twig:Select id="select-large">
        <twig:Select:Trigger class="w-44">
            <twig:Select:Value placeholder="Select a year" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="select-large-list">
                <twig:Select:Item value="2026">
                    2026
                </twig:Select:Item>
                <twig:Select:Item value="2025">
                    2025
                </twig:Select:Item>
                <twig:Select:Item value="2024">
                    2024
                </twig:Select:Item>
                <twig:Select:Item value="2023">
                    2023
                </twig:Select:Item>
                <twig:Select:Item value="2022">
                    2022
                </twig:Select:Item>
                <twig:Select:Item value="2021">
                    2021
                </twig:Select:Item>
                <twig:Select:Item value="2020">
                    2020
                </twig:Select:Item>
                <twig:Select:Item value="2019">
                    2019
                </twig:Select:Item>
                <twig:Select:Item value="2018">
                    2018
                </twig:Select:Item>
                <twig:Select:Item value="2017">
                    2017
                </twig:Select:Item>
                <twig:Select:Item value="2016">
                    2016
                </twig:Select:Item>
                <twig:Select:Item value="2015">
                    2015
                </twig:Select:Item>
                <twig:Select:Item value="2014">
                    2014
                </twig:Select:Item>
                <twig:Select:Item value="2013">
                    2013
                </twig:Select:Item>
                <twig:Select:Item value="2012">
                    2012
                </twig:Select:Item>
                <twig:Select:Item value="2011">
                    2011
                </twig:Select:Item>
                <twig:Select:Item value="2010">
                    2010
                </twig:Select:Item>
                <twig:Select:Item value="2009">
                    2009
                </twig:Select:Item>
                <twig:Select:Item value="2008">
                    2008
                </twig:Select:Item>
                <twig:Select:Item value="2007">
                    2007
                </twig:Select:Item>
                <twig:Select:Item value="2006">
                    2006
                </twig:Select:Item>
                <twig:Select:Item value="2005">
                    2005
                </twig:Select:Item>
                <twig:Select:Item value="2004">
                    2004
                </twig:Select:Item>
                <twig:Select:Item value="2003">
                    2003
                </twig:Select:Item>
                <twig:Select:Item value="2002">
                    2002
                </twig:Select:Item>
                <twig:Select:Item value="2001">
                    2001
                </twig:Select:Item>
                <twig:Select:Item value="2000">
                    2000
                </twig:Select:Item>
                <twig:Select:Item value="1999">
                    1999
                </twig:Select:Item>
                <twig:Select:Item value="1998">
                    1998
                </twig:Select:Item>
                <twig:Select:Item value="1997">
                    1997
                </twig:Select:Item>
                <twig:Select:Item value="1996">
                    1996
                </twig:Select:Item>
                <twig:Select:Item value="1995">
                    1995
                </twig:Select:Item>
                <twig:Select:Item value="1994">
                    1994
                </twig:Select:Item>
                <twig:Select:Item value="1993">
                    1993
                </twig:Select:Item>
                <twig:Select:Item value="1992">
                    1992
                </twig:Select:Item>
                <twig:Select:Item value="1991">
                    1991
                </twig:Select:Item>
                <twig:Select:Item value="1990">
                    1990
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Required

```twig
<div style="min-height: 260px">
    <twig:Field class="w-56">
        <twig:Field:Label for="sel-required">
            Role
            <span class="text-destructive" aria-hidden="true">*</span>
        </twig:Field:Label>
        <twig:Select id="sel-required" required name="role" class="w-full">
            <twig:Select:Trigger class="w-full">
                <twig:Select:Value placeholder="Select a role" />
            </twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="sel-required-list">
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
            Required: the form is not submitted without a role.
        </twig:Field:Description>
    </twig:Field>
</div>
```

### Helper Text

```twig
<div style="min-height: 260px">
    <twig:Field class="w-56">
        <twig:Field:Label for="sel-helper">
            Language
        </twig:Field:Label>
        <twig:Select id="sel-helper" class="w-full">
            <twig:Select:Trigger class="w-full">
                <twig:Select:Value placeholder="Select a language" />
            </twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="sel-helper-list">
                    <twig:Select:Item value="english">
                        English
                    </twig:Select:Item>
                    <twig:Select:Item value="french">
                        French
                    </twig:Select:Item>
                    <twig:Select:Item value="german">
                        German
                    </twig:Select:Item>
                </twig:Select:Group>
            </twig:Select:Content>
        </twig:Select>
        <twig:Field:Description>
            Used for emails and the interface.
        </twig:Field:Description>
    </twig:Field>
</div>
```

### Error Message

```twig
<div style="min-height: 280px">
    <twig:Field data-invalid="true" class="w-56">
        <twig:Field:Label for="sel-error">
            Role
        </twig:Field:Label>
        <twig:Select id="sel-error" class="w-full">
            <twig:Select:Trigger aria-invalid="true" class="w-full">
                <twig:Select:Value placeholder="Select a role" />
            </twig:Select:Trigger>
            <twig:Select:Content>
                <twig:Select:Group id="sel-error-list">
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
        <twig:Field:Error>
            Select a role to continue.
        </twig:Field:Error>
    </twig:Field>
</div>
```

### Read Only

```twig
<div style="min-height: 120px">
    <twig:Select id="sel-readonly" value="editor">
        <twig:Select:Trigger aria-readonly="true" tabindex="-1" class="w-48 pointer-events-none bg-muted/50">
            <twig:Select:Value placeholder="Select a role" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-readonly-list">
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
</div>
```

### Loading Options

The menu shows skeleton rows while the options load.

```twig
<div style="min-height: 280px">
    <twig:Select id="sel-loading">
        <twig:Select:Trigger class="w-48">
            <twig:Select:Value placeholder="Select a project" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <div class="grid gap-2 p-2" aria-busy="true">
                <twig:Skeleton class="h-6 w-full" />
                <twig:Skeleton class="h-6 w-4/5" />
                <twig:Skeleton class="h-6 w-3/5" />
            </div>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Loading Trigger

```twig
<div style="min-height: 120px">
    <twig:Select id="sel-loading-trigger" disabled>
        <twig:Select:Trigger class="w-48">
            <twig:Spinner class="size-4" />
            <twig:Select:Value placeholder="Loading projects..." />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-loading-trigger-list">
                <twig:Select:Item value="none">
                    None
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Empty State

```twig
<div style="min-height: 200px">
    <twig:Select id="sel-empty">
        <twig:Select:Trigger class="w-48">
            <twig:Select:Value placeholder="Select a project" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Empty class="gap-1 p-4">
                <twig:Empty:Header>
                    <twig:Empty:Title class="text-sm">
                        No projects yet
                    </twig:Empty:Title>
                    <twig:Empty:Description>
                        Create one to see it here.
                    </twig:Empty:Description>
                </twig:Empty:Header>
            </twig:Empty>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Clearable

Needs the `clearable` recipe. The button sits over the trigger, next to the chevron.

```twig
<div style="min-height: 280px">
    <twig:Clearable>
        <div class="relative w-48">
            <twig:Select id="sel-clear" class="w-full" value="banana">
                <twig:Select:Trigger class="w-full">
                    <twig:Select:Value placeholder="Select a fruit" />
                </twig:Select:Trigger>
                <twig:Select:Content>
                    <twig:Select:Group id="sel-clear-list">
                        <twig:Select:Item value="apple">
                            Apple
                        </twig:Select:Item>
                        <twig:Select:Item value="banana">
                            Banana
                        </twig:Select:Item>
                        <twig:Select:Item value="blueberry">
                            Blueberry
                        </twig:Select:Item>
                        <twig:Select:Item value="grapes">
                            Grapes
                        </twig:Select:Item>
                        <twig:Select:Item value="pineapple">
                            Pineapple
                        </twig:Select:Item>
                    </twig:Select:Group>
                </twig:Select:Content>
            </twig:Select>
            <twig:Clearable:Button label="Clear selection" class="absolute end-8 top-1/2 -translate-y-1/2" />
        </div>
    </twig:Clearable>
</div>
```

### Large Trigger

```twig
<div style="min-height: 260px">
    <twig:Select id="sel-large">
        <twig:Select:Trigger class="w-56 h-10 text-base">
            <twig:Select:Value placeholder="Select a fruit" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-large-list">
                <twig:Select:Item value="apple">
                    Apple
                </twig:Select:Item>
                <twig:Select:Item value="banana">
                    Banana
                </twig:Select:Item>
                <twig:Select:Item value="blueberry">
                    Blueberry
                </twig:Select:Item>
                <twig:Select:Item value="grapes">
                    Grapes
                </twig:Select:Item>
                <twig:Select:Item value="pineapple">
                    Pineapple
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Opens Above

```twig
<div style="min-height: 300px" class="flex items-end">
    <twig:Select id="sel-top">
        <twig:Select:Trigger class="w-48">
            <twig:Select:Value placeholder="Select a fruit" />
        </twig:Select:Trigger>
        <twig:Select:Content position="popper" side="top">
            <twig:Select:Group id="sel-top-list">
                <twig:Select:Item value="apple">
                    Apple
                </twig:Select:Item>
                <twig:Select:Item value="banana">
                    Banana
                </twig:Select:Item>
                <twig:Select:Item value="blueberry">
                    Blueberry
                </twig:Select:Item>
                <twig:Select:Item value="grapes">
                    Grapes
                </twig:Select:Item>
                <twig:Select:Item value="pineapple">
                    Pineapple
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Ghost

```twig
<div style="min-height: 260px">
    <twig:Select id="sel-ghost">
        <twig:Select:Trigger class="w-40 border-transparent bg-transparent shadow-none hover:bg-accent dark:bg-transparent">
            <twig:Select:Value placeholder="Fruit" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-ghost-list">
                <twig:Select:Item value="apple">
                    Apple
                </twig:Select:Item>
                <twig:Select:Item value="banana">
                    Banana
                </twig:Select:Item>
                <twig:Select:Item value="blueberry">
                    Blueberry
                </twig:Select:Item>
                <twig:Select:Item value="grapes">
                    Grapes
                </twig:Select:Item>
                <twig:Select:Item value="pineapple">
                    Pineapple
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Filled

```twig
<div style="min-height: 260px">
    <twig:Select id="sel-filled">
        <twig:Select:Trigger class="w-48 border-transparent bg-muted dark:bg-muted">
            <twig:Select:Value placeholder="Select a fruit" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-filled-list">
                <twig:Select:Item value="apple">
                    Apple
                </twig:Select:Item>
                <twig:Select:Item value="banana">
                    Banana
                </twig:Select:Item>
                <twig:Select:Item value="blueberry">
                    Blueberry
                </twig:Select:Item>
                <twig:Select:Item value="grapes">
                    Grapes
                </twig:Select:Item>
                <twig:Select:Item value="pineapple">
                    Pineapple
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Colored Border and Ring

```twig
<div style="min-height: 260px">
    <twig:Select id="sel-colored">
        <twig:Select:Trigger class="w-48 border-blue-500 focus-visible:border-blue-500 focus-visible:ring-blue-500/30">
            <twig:Select:Value placeholder="Select a fruit" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-colored-list">
                <twig:Select:Item value="apple">
                    Apple
                </twig:Select:Item>
                <twig:Select:Item value="banana">
                    Banana
                </twig:Select:Item>
                <twig:Select:Item value="blueberry">
                    Blueberry
                </twig:Select:Item>
                <twig:Select:Item value="grapes">
                    Grapes
                </twig:Select:Item>
                <twig:Select:Item value="pineapple">
                    Pineapple
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Full Width and Horizontal

```twig
<div style="min-height: 260px">
    <div class="grid max-w-md gap-4">
        <twig:Field>
            <twig:Field:Label for="sel-full">
                Country
            </twig:Field:Label>
            <twig:Select id="sel-full" class="w-full">
                <twig:Select:Trigger class="w-full">
                    <twig:Select:Value placeholder="Select a country" />
                </twig:Select:Trigger>
                <twig:Select:Content>
                    <twig:Select:Group id="sel-full-list">
                        <twig:Select:Item value="france">
                            France
                        </twig:Select:Item>
                        <twig:Select:Item value="germany">
                            Germany
                        </twig:Select:Item>
                        <twig:Select:Item value="spain">
                            Spain
                        </twig:Select:Item>
                    </twig:Select:Group>
                </twig:Select:Content>
            </twig:Select>
        </twig:Field>
        <twig:Field orientation="horizontal">
            <twig:Field:Label for="sel-horizontal" class="w-24 flex-none">
                Language
            </twig:Field:Label>
            <twig:Select id="sel-horizontal" class="w-full">
                <twig:Select:Trigger class="w-full">
                    <twig:Select:Value placeholder="Select a language" />
                </twig:Select:Trigger>
                <twig:Select:Content>
                    <twig:Select:Group id="sel-horizontal-list">
                        <twig:Select:Item value="english">
                            English
                        </twig:Select:Item>
                        <twig:Select:Item value="french">
                            French
                        </twig:Select:Item>
                        <twig:Select:Item value="german">
                            German
                        </twig:Select:Item>
                    </twig:Select:Group>
                </twig:Select:Content>
            </twig:Select>
        </twig:Field>
    </div>
</div>
```

### Leading Text

```twig
<div style="min-height: 260px">
    <twig:Select id="sel-leading" value="newest">
        <twig:Select:Trigger class="w-56">
            <span class="text-muted-foreground">Sort by</span>
            <twig:Select:Value placeholder="Select" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-leading-list">
                <twig:Select:Item value="newest">
                    Newest
                </twig:Select:Item>
                <twig:Select:Item value="oldest">
                    Oldest
                </twig:Select:Item>
                <twig:Select:Item value="popular">
                    Popular
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Prefix and Suffix

```twig
<div style="min-height: 260px">
    <twig:Select id="sel-affix" value="usd">
        <twig:Select:Trigger class="w-56">
            <span class="text-muted-foreground">$</span>
            <twig:Select:Value placeholder="Currency" />
            <span class="text-xs text-muted-foreground">per month</span>
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-affix-list">
                <twig:Select:Item value="usd">
                    USD
                </twig:Select:Item>
                <twig:Select:Item value="eur">
                    EUR
                </twig:Select:Item>
                <twig:Select:Item value="gbp">
                    GBP
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Inset Label

```twig
<div style="min-height: 260px">
    <twig:Select id="sel-inset" value="editor">
        <twig:Select:Trigger class="w-56 h-12 flex-col items-start justify-center gap-0 py-1 [&>svg]:absolute [&>svg]:end-2">
            <span class="text-xs text-muted-foreground">Role</span>
            <twig:Select:Value placeholder="Select a role" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-inset-list">
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
</div>
```

### Truncated Trigger

```twig
<div style="min-height: 280px">
    <twig:Select id="sel-truncated" value="a">
        <twig:Select:Trigger class="w-40">
            <twig:Select:Value placeholder="Select" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-truncated-list">
                <twig:Select:Item value="a">
                    A very long project name that does not fit in the trigger
                </twig:Select:Item>
                <twig:Select:Item value="b">
                    Another extremely long workspace label for the team
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Floating Label

Needs the `float-label` recipe. The label rests while no value is selected.

```twig
<div style="min-height: 300px">
    <div class="grid w-56 gap-6">
        <twig:FloatLabel label="Role" fieldId="sel-float-over">
            <twig:Select id="sel-float-over" class="w-full">
                <twig:Select:Trigger class="w-full">
                    <twig:Select:Value />
                </twig:Select:Trigger>
                <twig:Select:Content>
                    <twig:Select:Group id="sel-float-over-list">
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
        </twig:FloatLabel>
        <twig:FloatLabel label="Role" fieldId="sel-float-in" variant="in">
            <twig:Select id="sel-float-in" class="w-full" value="editor">
                <twig:Select:Trigger class="w-full">
                    <twig:Select:Value />
                </twig:Select:Trigger>
                <twig:Select:Content>
                    <twig:Select:Group id="sel-float-in-list">
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
        </twig:FloatLabel>
        <twig:FloatLabel label="Role" fieldId="sel-float-on" variant="on">
            <twig:Select id="sel-float-on" class="w-full">
                <twig:Select:Trigger class="w-full">
                    <twig:Select:Value />
                </twig:Select:Trigger>
                <twig:Select:Content>
                    <twig:Select:Group id="sel-float-on-list">
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
        </twig:FloatLabel>
    </div>
</div>
```

### Quota Progress

```twig
<div style="min-height: 320px">
    <twig:Select id="sel-quota">
        <twig:Select:Trigger class="w-56">
            <twig:Select:Value placeholder="Select a plan" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-quota-list">
                <twig:Select:Item value="free">
                    <span class="flex w-full flex-col gap-1">
                        <span>Free</span>
                        <twig:Progress value="90" />
                        <span class="text-xs text-muted-foreground">9 / 10 projects</span>
                    </span>
                </twig:Select:Item>
                <twig:Select:Item value="pro">
                    <span class="flex w-full flex-col gap-1">
                        <span>Pro</span>
                        <twig:Progress value="30" />
                        <span class="text-xs text-muted-foreground">30 / 100 projects</span>
                    </span>
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Recommended Option

```twig
<div style="min-height: 300px">
    <twig:Select id="sel-reco">
        <twig:Select:Trigger class="w-56">
            <twig:Select:Value placeholder="Select a plan" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-reco-list">
                <twig:Select:Item value="starter">
                    Starter
                </twig:Select:Item>
                <twig:Select:Item value="team">
                    Team
                    <twig:Badge variant="secondary" class="ms-auto">
                        Recommended
                    </twig:Badge>
                </twig:Select:Item>
                <twig:Select:Item value="enterprise">
                    Enterprise
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Color Swatches

```twig
<div style="min-height: 300px">
    <twig:Select id="sel-swatch">
        <twig:Select:Trigger class="w-48">
            <twig:Select:Value placeholder="Select a color" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-swatch-list">
                <twig:Select:Item value="red">
                    <span class="size-3 rounded-full bg-red-500"></span>
                    Red
                </twig:Select:Item>
                <twig:Select:Item value="green">
                    <span class="size-3 rounded-full bg-green-500"></span>
                    Green
                </twig:Select:Item>
                <twig:Select:Item value="blue">
                    <span class="size-3 rounded-full bg-blue-500"></span>
                    Blue
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Destructive Option

```twig
<div style="min-height: 320px">
    <twig:Select id="sel-destructive" value="edit">
        <twig:Select:Trigger class="w-48">
            <twig:Select:Value />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-destructive-list">
                <twig:Select:Item value="edit">
                    Edit
                </twig:Select:Item>
                <twig:Select:Item value="duplicate">
                    Duplicate
                </twig:Select:Item>
            </twig:Select:Group>
            <twig:Select:Separator />
            <twig:Select:Group id="sel-destructive-danger">
                <twig:Select:Item value="delete" class="text-destructive focus:bg-destructive/10 focus:text-destructive">
                    <twig:ux:icon name="lucide:trash-2" />
                    Delete
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Create Footer

```twig
<div style="min-height: 320px">
    <twig:Select id="sel-create">
        <twig:Select:Trigger class="w-56">
            <twig:Select:Value placeholder="Select a project" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-create-list">
                <twig:Select:Item value="website">
                    Website
                </twig:Select:Item>
                <twig:Select:Item value="mobile">
                    Mobile app
                </twig:Select:Item>
            </twig:Select:Group>
            <twig:Select:Separator />
            <div class="p-1">
                <twig:Button variant="ghost" size="sm" class="w-full justify-start">
                    <twig:ux:icon name="lucide:plus" />
                    Create new project
                </twig:Button>
            </div>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Workspace Switcher

```twig
<div style="min-height: 320px">
    <twig:Select id="sel-workspace">
        <twig:Select:Trigger class="w-64">
            <twig:Select:Value placeholder="Select a workspace" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-workspace-list">
                <twig:Select:Item value="acme">
                    <twig:IconTile size="sm">
                        <twig:ux:icon name="lucide:building-2" />
                    </twig:IconTile>
                    <span class="flex flex-1 flex-col">
                        <span>Acme Inc</span>
                        <span class="text-xs text-muted-foreground">12 members</span>
                    </span>
                    <twig:Badge variant="secondary">
                        Pro
                    </twig:Badge>
                </twig:Select:Item>
                <twig:Select:Item value="globex">
                    <twig:IconTile size="sm">
                        <twig:ux:icon name="lucide:rocket" />
                    </twig:IconTile>
                    <span class="flex flex-1 flex-col">
                        <span>Globex</span>
                        <span class="text-xs text-muted-foreground">3 members</span>
                    </span>
                    <twig:Badge variant="outline">
                        Free
                    </twig:Badge>
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

### Region Latency

```twig
<div style="min-height: 320px">
    <twig:Select id="sel-region">
        <twig:Select:Trigger class="w-56">
            <twig:Select:Value placeholder="Select a region" />
        </twig:Select:Trigger>
        <twig:Select:Content>
            <twig:Select:Group id="sel-region-list">
                <twig:Select:Item value="par">
                    🇫🇷
                    Paris<twig:Badge variant="outline" class="ms-auto">12 ms</twig:Badge>
                </twig:Select:Item>
                <twig:Select:Item value="fra">
                    🇩🇪
                    Frankfurt<twig:Badge variant="outline" class="ms-auto">18 ms</twig:Badge>
                </twig:Select:Item>
                <twig:Select:Item value="iad">
                    🇺🇸
                    Virginia<twig:Badge variant="outline" class="ms-auto">92 ms</twig:Badge>
                </twig:Select:Item>
            </twig:Select:Group>
        </twig:Select:Content>
    </twig:Select>
</div>
```

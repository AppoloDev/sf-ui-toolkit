# Tabs

## Examples

### Basic

```twig
<twig:Tabs defaultValue="account" class="w-[400px]">
    <twig:Tabs:List>
        <twig:Tabs:Trigger value="account">
            Account
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="password">
            Password
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="account">
        <twig:Card>
            <twig:Card:Header>
                <twig:Card:Title>
                    Account
                </twig:Card:Title>
                <twig:Card:Description>
                    Make changes to your account here.
                </twig:Card:Description>
            </twig:Card:Header>
        </twig:Card>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="password">
        <twig:Card>
            <twig:Card:Header>
                <twig:Card:Title>
                    Password
                </twig:Card:Title>
                <twig:Card:Description>
                    Change your password here.
                </twig:Card:Description>
            </twig:Card:Header>
        </twig:Card>
    </twig:Tabs:Content>
</twig:Tabs>
```

### Full Width Icons

```twig
<twig:Tabs defaultValue="overview" class="w-full max-w-lg">
    <twig:Tabs:List class="w-full">
        <twig:Tabs:Trigger value="overview">
            <twig:ux:icon name="lucide:layout-dashboard" />
            Overview
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="analytics">
            <twig:ux:icon name="lucide:chart-column" />
            Analytics
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="settings">
            <twig:ux:icon name="lucide:settings" />
            Settings
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="overview" class="text-sm text-muted-foreground">
        Overview content.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="analytics" class="text-sm text-muted-foreground">
        Analytics content.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="settings" class="text-sm text-muted-foreground">
        Settings content.
    </twig:Tabs:Content>
</twig:Tabs>
```

### Badge Counts

Mail folders with counts, on an underlined row.

```twig
<twig:Tabs defaultValue="inbox" class="w-full max-w-lg">
    <twig:Tabs:List variant="line">
        <twig:Tabs:Trigger value="inbox">
            Inbox
            <twig:Badge variant="secondary">
                12
            </twig:Badge>
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="drafts">
            Drafts
            <twig:Badge variant="secondary">
                3
            </twig:Badge>
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="sent">
            Sent
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="spam">
            Spam
            <twig:Badge variant="destructive">
                7
            </twig:Badge>
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="inbox" class="text-sm text-muted-foreground">
        12 unread messages.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="drafts" class="text-sm text-muted-foreground">
        3 drafts.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="sent" class="text-sm text-muted-foreground">
        Sent messages.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="spam" class="text-sm text-muted-foreground">
        7 messages in spam.
    </twig:Tabs:Content>
</twig:Tabs>
```

### Vertical Line

```twig
<twig:Tabs defaultValue="profile" orientation="vertical" class="w-full max-w-lg">
    <twig:Tabs:List variant="line">
        <twig:Tabs:Trigger value="profile">
            Profile
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="security">
            Security
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="billing">
            Billing
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="profile" class="text-sm">
        Edit your public profile.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="security" class="text-sm">
        Manage passwords and sessions.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="billing" class="text-sm">
        Manage plans and invoices.
    </twig:Tabs:Content>
</twig:Tabs>
```

### Side List Icons

```twig
<twig:Tabs defaultValue="projects" orientation="vertical" class="w-full max-w-lg">
    <twig:Tabs:List class="w-40">
        <twig:Tabs:Trigger value="projects" class="justify-start">
            <twig:ux:icon name="lucide:folder" />
            Projects
            <twig:Badge variant="secondary" class="ms-auto">
                8
            </twig:Badge>
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="tasks" class="justify-start">
            <twig:ux:icon name="lucide:list-checks" />
            Tasks
            <twig:Badge variant="secondary" class="ms-auto">
                24
            </twig:Badge>
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="team" class="justify-start">
            <twig:ux:icon name="lucide:users" />
            Team
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="reports" class="justify-start">
            <twig:ux:icon name="lucide:file-text" />
            Reports
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="projects" class="text-sm">
        8 active projects.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="tasks" class="text-sm">
        24 open tasks.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="team" class="text-sm">
        Your team members.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="reports" class="text-sm">
        Generated reports.
    </twig:Tabs:Content>
</twig:Tabs>
```

### Segmented Control

```twig
<twig:Tabs defaultValue="daily" class="w-full max-w-sm">
    <twig:Tabs:List class="w-full">
        <twig:Tabs:Trigger value="daily" class="capitalize">
            daily
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="weekly" class="capitalize">
            weekly
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="monthly" class="capitalize">
            monthly
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="yearly" class="capitalize">
            yearly
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="daily">
        <p class="text-3xl font-semibold tabular-nums">
            1,240
        </p>
        <p class="text-sm text-muted-foreground">
            Visitors, daily
        </p>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="weekly">
        <p class="text-3xl font-semibold tabular-nums">
            8,310
        </p>
        <p class="text-sm text-muted-foreground">
            Visitors, weekly
        </p>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="monthly">
        <p class="text-3xl font-semibold tabular-nums">
            34,900
        </p>
        <p class="text-sm text-muted-foreground">
            Visitors, monthly
        </p>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="yearly">
        <p class="text-3xl font-semibold tabular-nums">
            412,000
        </p>
        <p class="text-sm text-muted-foreground">
            Visitors, yearly
        </p>
    </twig:Tabs:Content>
</twig:Tabs>
```

### Forms

```twig
<twig:Tabs defaultValue="account" class="w-full max-w-lg">
    <twig:Tabs:List>
        <twig:Tabs:Trigger value="account">
            Account
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="password">
            Password
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="account">
        <twig:Card>
            <twig:Card:Header>
                <twig:Card:Title>
                    Account
                </twig:Card:Title>
                <twig:Card:Description>
                    Update your name and username.
                </twig:Card:Description>
            </twig:Card:Header>
            <twig:Card:Content class="grid gap-3">
                <twig:Field>
                    <twig:Label for="t-name">
                        Name
                    </twig:Label>
                    <twig:Input id="t-name" value="Jane Doe" />
                </twig:Field>
                <twig:Field>
                    <twig:Label for="t-user">
                        Username
                    </twig:Label>
                    <twig:Input id="t-user" value="@jane" />
                </twig:Field>
            </twig:Card:Content>
            <twig:Card:Footer>
                <twig:Button>
                    Save changes
                </twig:Button>
            </twig:Card:Footer>
        </twig:Card>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="password">
        <twig:Card>
            <twig:Card:Header>
                <twig:Card:Title>
                    Password
                </twig:Card:Title>
                <twig:Card:Description>
                    Change your password here.
                </twig:Card:Description>
            </twig:Card:Header>
            <twig:Card:Content class="grid gap-3">
                <twig:Field>
                    <twig:Label for="t-cur">
                        Current password
                    </twig:Label>
                    <twig:Input id="t-cur" value="" />
                </twig:Field>
                <twig:Field>
                    <twig:Label for="t-new">
                        New password
                    </twig:Label>
                    <twig:Input id="t-new" value="" />
                </twig:Field>
            </twig:Card:Content>
            <twig:Card:Footer>
                <twig:Button>
                    Save password
                </twig:Button>
            </twig:Card:Footer>
        </twig:Card>
    </twig:Tabs:Content>
</twig:Tabs>
```

### Cards

```twig
<twig:Tabs defaultValue="overview" class="w-full max-w-lg">
    <twig:Tabs:List>
        <twig:Tabs:Trigger value="overview">
            Overview
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="analytics">
            Analytics
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="reports">
            Reports
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="overview">
        <div class="grid gap-3 sm:grid-cols-2">
            <twig:Card>
                <twig:Card:Header>
                    <twig:Card:Title>
                        Revenue
                    </twig:Card:Title>
                    <twig:Card:Description>
                        Last 30 days
                    </twig:Card:Description>
                </twig:Card:Header>
            </twig:Card>
            <twig:Card>
                <twig:Card:Header>
                    <twig:Card:Title>
                        Orders
                    </twig:Card:Title>
                    <twig:Card:Description>
                        Last 7 days
                    </twig:Card:Description>
                </twig:Card:Header>
            </twig:Card>
        </div>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="analytics">
        <div class="grid gap-3 sm:grid-cols-2">
            <twig:Card>
                <twig:Card:Header>
                    <twig:Card:Title>
                        Visitors
                    </twig:Card:Title>
                    <twig:Card:Description>
                        Last 30 days
                    </twig:Card:Description>
                </twig:Card:Header>
            </twig:Card>
            <twig:Card>
                <twig:Card:Header>
                    <twig:Card:Title>
                        Sessions
                    </twig:Card:Title>
                    <twig:Card:Description>
                        Last 7 days
                    </twig:Card:Description>
                </twig:Card:Header>
            </twig:Card>
        </div>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="reports">
        <div class="grid gap-3 sm:grid-cols-2">
            <twig:Card>
                <twig:Card:Header>
                    <twig:Card:Title>
                        Monthly
                    </twig:Card:Title>
                    <twig:Card:Description>
                        Last 30 days
                    </twig:Card:Description>
                </twig:Card:Header>
            </twig:Card>
            <twig:Card>
                <twig:Card:Header>
                    <twig:Card:Title>
                        Quarterly
                    </twig:Card:Title>
                    <twig:Card:Description>
                        Last 7 days
                    </twig:Card:Description>
                </twig:Card:Header>
            </twig:Card>
        </div>
    </twig:Tabs:Content>
</twig:Tabs>
```

### Tables

```twig
<twig:Tabs defaultValue="active" class="w-full max-w-lg">
    <twig:Tabs:List>
        <twig:Tabs:Trigger value="active">
            Active
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="archived">
            Archived
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="active">
        <twig:Table>
            <twig:Table:Header>
                <twig:Table:Row>
                    <twig:Table:Head>
                        Name
                    </twig:Table:Head>
                    <twig:Table:Head>
                        Status
                    </twig:Table:Head>
                </twig:Table:Row>
            </twig:Table:Header>
            <twig:Table:Body>
                <twig:Table:Row>
                    <twig:Table:Cell>
                        Atlas
                    </twig:Table:Cell>
                    <twig:Table:Cell>
                        <twig:Badge variant="secondary">
                            Live
                        </twig:Badge>
                    </twig:Table:Cell>
                </twig:Table:Row>
                <twig:Table:Row>
                    <twig:Table:Cell>
                        Orion
                    </twig:Table:Cell>
                    <twig:Table:Cell>
                        <twig:Badge variant="secondary">
                            Live
                        </twig:Badge>
                    </twig:Table:Cell>
                </twig:Table:Row>
            </twig:Table:Body>
        </twig:Table>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="archived">
        <twig:Table>
            <twig:Table:Header>
                <twig:Table:Row>
                    <twig:Table:Head>
                        Name
                    </twig:Table:Head>
                    <twig:Table:Head>
                        Status
                    </twig:Table:Head>
                </twig:Table:Row>
            </twig:Table:Header>
            <twig:Table:Body>
                <twig:Table:Row>
                    <twig:Table:Cell>
                        Apollo
                    </twig:Table:Cell>
                    <twig:Table:Cell>
                        <twig:Badge variant="secondary">
                            Archived
                        </twig:Badge>
                    </twig:Table:Cell>
                </twig:Table:Row>
                <twig:Table:Row>
                    <twig:Table:Cell>
                        Gemini
                    </twig:Table:Cell>
                    <twig:Table:Cell>
                        <twig:Badge variant="secondary">
                            Archived
                        </twig:Badge>
                    </twig:Table:Cell>
                </twig:Table:Row>
            </twig:Table:Body>
        </twig:Table>
    </twig:Tabs:Content>
</twig:Tabs>
```

### Controlled

```twig
<twig:Tabs defaultValue="profile" class="w-full max-w-lg">
    <twig:Tabs:List>
        <twig:Tabs:Trigger value="profile">
            Profile
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="billing">
            Billing
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="profile" class="grid gap-3 text-sm">
        Your public profile.
        <twig:Button variant="outline" size="sm" class="w-fit" data-tab-id="billing" data-action="click->tabs#open">
            Go to billing
        </twig:Button>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="billing" class="grid gap-3 text-sm">
        Plans and invoices.
        <twig:Button variant="outline" size="sm" class="w-fit" data-tab-id="profile" data-action="click->tabs#open">
            Back to profile
        </twig:Button>
    </twig:Tabs:Content>
</twig:Tabs>
```

### Scrollable

```twig
<twig:Tabs defaultValue="january" class="w-full max-w-sm">
    <twig:Tabs:List class="w-full justify-start overflow-x-auto">
        <twig:Tabs:Trigger value="january" class="flex-none">
            January
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="february" class="flex-none">
            February
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="march" class="flex-none">
            March
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="april" class="flex-none">
            April
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="may" class="flex-none">
            May
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="june" class="flex-none">
            June
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="july" class="flex-none">
            July
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="august" class="flex-none">
            August
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="september" class="flex-none">
            September
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="october" class="flex-none">
            October
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="november" class="flex-none">
            November
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="december" class="flex-none">
            December
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="january" class="text-sm text-muted-foreground">
        Report for January.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="february" class="text-sm text-muted-foreground">
        Report for February.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="march" class="text-sm text-muted-foreground">
        Report for March.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="april" class="text-sm text-muted-foreground">
        Report for April.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="may" class="text-sm text-muted-foreground">
        Report for May.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="june" class="text-sm text-muted-foreground">
        Report for June.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="july" class="text-sm text-muted-foreground">
        Report for July.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="august" class="text-sm text-muted-foreground">
        Report for August.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="september" class="text-sm text-muted-foreground">
        Report for September.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="october" class="text-sm text-muted-foreground">
        Report for October.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="november" class="text-sm text-muted-foreground">
        Report for November.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="december" class="text-sm text-muted-foreground">
        Report for December.
    </twig:Tabs:Content>
</twig:Tabs>
```

### Nested

```twig
<twig:Tabs defaultValue="team" class="w-full max-w-lg">
    <twig:Tabs:List>
        <twig:Tabs:Trigger value="team">
            Team
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="settings">
            Settings
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="team">
        <twig:Tabs defaultValue="members">
            <twig:Tabs:List variant="line">
                <twig:Tabs:Trigger value="members">
                    Members
                </twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="invites">
                    Invites
                </twig:Tabs:Trigger>
            </twig:Tabs:List>
            <twig:Tabs:Content value="members" class="text-sm text-muted-foreground">
                12 members.
            </twig:Tabs:Content>
            <twig:Tabs:Content value="invites" class="text-sm text-muted-foreground">
                3 pending invites.
            </twig:Tabs:Content>
        </twig:Tabs>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="settings" class="text-sm text-muted-foreground">
        Team settings.
    </twig:Tabs:Content>
</twig:Tabs>
```

### Icons

```twig
<twig:Tabs defaultValue="home" class="w-full max-w-lg">
    <twig:Tabs:List>
        <twig:Tabs:Trigger value="home">
            <twig:ux:icon name="lucide:house" />
            Home
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="search">
            <twig:ux:icon name="lucide:search" />
            Search
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="settings">
            <twig:ux:icon name="lucide:settings" />
            Settings
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="home">
        <p class="text-sm text-muted-foreground">
            Home content.
        </p>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="search">
        <p class="text-sm text-muted-foreground">
            Search content.
        </p>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="settings">
        <p class="text-sm text-muted-foreground">
            Settings content.
        </p>
    </twig:Tabs:Content>
</twig:Tabs>
```

### Count Badges

```twig
<twig:Tabs defaultValue="all" class="w-full max-w-lg">
    <twig:Tabs:List>
        <twig:Tabs:Trigger value="all">
            All
            <twig:Badge variant="secondary">
                24
            </twig:Badge>
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="open">
            Open
            <twig:Badge variant="secondary">
                9
            </twig:Badge>
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="closed">
            Closed
            <twig:Badge variant="secondary">
                15
            </twig:Badge>
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="all">
        <p class="text-sm text-muted-foreground">
            All items.
        </p>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="open">
        <p class="text-sm text-muted-foreground">
            Open items.
        </p>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="closed">
        <p class="text-sm text-muted-foreground">
            Closed items.
        </p>
    </twig:Tabs:Content>
</twig:Tabs>
```

### Full Width

```twig
<twig:Tabs defaultValue="one" class="w-full max-w-lg">
    <twig:Tabs:List class="w-full">
        <twig:Tabs:Trigger value="one">
            One
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="two">
            Two
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="three">
            Three
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="one">
        <p class="text-sm text-muted-foreground">
            Panel one.
        </p>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="two">
        <p class="text-sm text-muted-foreground">
            Panel two.
        </p>
    </twig:Tabs:Content>
    <twig:Tabs:Content value="three">
        <p class="text-sm text-muted-foreground">
            Panel three.
        </p>
    </twig:Tabs:Content>
</twig:Tabs>
```

### Vertical Layout

```twig
<twig:Tabs defaultValue="general" orientation="vertical" class="w-full max-w-lg">
    <twig:Tabs:List class="h-fit w-32 flex-col">
        <twig:Tabs:Trigger value="general">
            General
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="notifications">
            Notifications
        </twig:Tabs:Trigger>
        <twig:Tabs:Trigger value="privacy">
            Privacy
        </twig:Tabs:Trigger>
    </twig:Tabs:List>
    <twig:Tabs:Content value="general" class="text-sm">
        General settings.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="notifications" class="text-sm">
        Email and push.
    </twig:Tabs:Content>
    <twig:Tabs:Content value="privacy" class="text-sm">
        Who can see what.
    </twig:Tabs:Content>
</twig:Tabs>
```

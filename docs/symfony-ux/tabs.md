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

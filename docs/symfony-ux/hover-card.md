# Hover Card

## Examples

### Profile

```twig
<div class="flex justify-center pt-4" style="min-height: 260px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <a href="#" class="flex items-center gap-2 text-sm font-medium" {{ html_attr(hover_card_trigger_attrs) }}>
                <twig:Avatar size="sm">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                @shadcn
            </a>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="flex gap-3">
                <twig:Avatar size="lg">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div>
                    <p class="font-medium">
                        shadcn
                    </p>
                    <p class="text-xs text-muted-foreground">
                        Design engineer
                    </p>
                    <p class="mt-1 text-xs text-muted-foreground">
                        Joined December 2021
                    </p>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```

### Icon

```twig
<div class="flex justify-center pt-4" style="min-height: 220px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="outline" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:zap" class="text-amber-500" />
                Fast mode
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-64">
            <p class="font-medium">
                Fast mode
            </p>
            <p class="text-sm text-muted-foreground">
                Trades some quality for much quicker answers.
            </p>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```

### Image and Text

```twig
<div class="flex justify-center pt-4" style="min-height: 340px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" {{ ...hover_card_trigger_attrs }}>
                Mountain lake
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-80 gap-0 overflow-hidden p-0">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=640&q=80" alt="Mountain lake" class="aspect-video w-full object-cover" />
            <div class="p-3">
                <p class="font-medium">
                    Mountain lake
                </p>
                <p class="text-sm text-muted-foreground">
                    A quiet spot above the tree line.
                </p>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```

### Info Short

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="More information" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:info" />
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-56">
            <p class="text-sm">
                Projects are visible to everyone in your workspace.
            </p>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Info With Title

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="Help" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:circle-help" />
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-1">
                <p class="font-medium">
                    Workspace visibility
                </p>
                <p class="text-xs text-muted-foreground">
                    Members can view and comment. Only admins can change settings.
                </p>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Info With Badge

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="Plan details" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:info" />
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-2">
                <div class="flex items-center gap-2">
                    <twig:ux:icon name="lucide:sparkles" class="size-4" />
                    <twig:Badge variant="secondary">
                        Pro
                    </twig:Badge>
                </div>
                <p class="text-xs text-muted-foreground">
                    Unlimited projects, priority support and advanced analytics.
                </p>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Warning

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="ghost" size="icon" aria-label="Warning" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:triangle-alert" />
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="flex gap-2">
                <twig:ux:icon name="lucide:triangle-alert" class="mt-0.5 size-4 shrink-0 text-amber-600" />
                <div class="grid gap-1">
                    <p class="font-medium">
                        Irreversible action
                    </p>
                    <p class="text-xs text-muted-foreground">
                        Deleting this project also removes its backups.
                    </p>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Technical Info

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:code" />
                user_id
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-80">
            <div class="grid gap-2">
                <p class="font-medium">
                    user_id
                </p>
                <p class="text-xs text-muted-foreground">
                    UUID v4 string, 36 characters.
                </p>
                <twig:Kbd class="w-fit">
                    9b2e4f1a-7c3d-4e8a-b5f6-1d2c3a4b5e6f
                </twig:Kbd>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Link Preview

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:link" />
                symfony.com/doc
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-1">
                <p class="font-medium">
                    Symfony Documentation
                </p>
                <p class="text-xs text-muted-foreground">
                    symfony.com
                </p>
                <p class="text-sm">
                    Guides and references for building web applications with Symfony.
                </p>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Document Preview

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:file-text" />
                Q4 report.pdf
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="flex items-start gap-3">
                <twig:IconTile size="lg">
            <twig:ux:icon name="lucide:file-text" />
        </twig:IconTile>
                <div class="grid gap-0.5">
                    <p class="font-medium">
                        Q4 report.pdf
                    </p>
                    <p class="text-xs text-muted-foreground">
                        PDF, 2.4 MB
                    </p>
                    <p class="text-xs text-muted-foreground">
                        Modified Nov 18, 2026
                    </p>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Image Preview

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:image" />
                cover.jpg
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-2">
                <twig:AspectRatio ratio="16/9" class="overflow-hidden rounded-md bg-gradient-to-br from-sky-400 to-indigo-600" />
                <p class="font-medium">
                    cover.jpg
                </p>
                <p class="text-xs text-muted-foreground">
                    1920 x 1080
                </p>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Event Preview

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:calendar" />
                Design review
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-2">
                <p class="font-medium">
                    Design review
                </p>
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                    <twig:ux:icon name="lucide:clock" class="size-4" />
                    Thu, Dec 3 at 10:00
                </div>
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                    <twig:ux:icon name="lucide:map-pin" class="size-4" />
                    Room 4B
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Product Preview

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:shopping-bag" />
                Aero Chair
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="flex items-start justify-between gap-3">
                <div class="grid gap-0.5">
                    <p class="font-medium">
                        Aero Chair
                    </p>
                    <p class="text-xs text-muted-foreground">
                        Mesh back, adjustable arms.
                    </p>
                </div>
                <twig:Badge>
                    $189
                </twig:Badge>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Profile With Role

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                @shadcn
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="flex gap-3">
                <twig:Avatar size="lg">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="grid gap-0.5">
                    <p class="font-medium">
                        shadcn
                    </p>
                    <p class="text-xs text-muted-foreground">
                        Design engineer
                    </p>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Profile With Follow Button

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                @shadcn
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-3">
                <div class="flex items-center justify-between">
                    <twig:Avatar size="lg">
                        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                        <twig:Avatar:Fallback>
                            CN
                        </twig:Avatar:Fallback>
                    </twig:Avatar>
                    <twig:Button size="sm">
                        Follow
                    </twig:Button>
                </div>
                <div class="grid gap-0.5">
                    <p class="font-medium">
                        shadcn
                    </p>
                    <p class="text-xs text-muted-foreground">
                        Building the UI kit you copy and paste.
                    </p>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Profile With Badge

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                @shadcn
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="flex gap-3">
                <twig:Avatar size="lg">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="grid gap-1">
                    <div class="flex items-center gap-2">
                        <span class="font-medium">
                            shadcn
                        </span>
                        <twig:Badge variant="secondary">
                            <twig:ux:icon name="lucide:badge-check" />
                            Verified
                        </twig:Badge>
                    </div>
                    <p class="text-xs text-muted-foreground">
                        Maintainer
                    </p>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Profile With Location

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                @shadcn
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="flex gap-3">
                <twig:Avatar size="lg">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div class="grid gap-1">
                    <p class="font-medium">
                        shadcn
                    </p>
                    <p class="text-sm">
                        Design engineer at Vercel.
                    </p>
                    <div class="flex items-center gap-1 text-xs text-muted-foreground">
                        <twig:ux:icon name="lucide:map-pin" class="size-3" />
                        Paris, France
                    </div>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Profile With Counts

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                @shadcn
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-3">
                <div class="flex gap-3">
                    <twig:Avatar size="lg">
                        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                        <twig:Avatar:Fallback>
                            CN
                        </twig:Avatar:Fallback>
                    </twig:Avatar>
                    <div class="grid gap-0.5">
                        <p class="font-medium">
                            shadcn
                        </p>
                        <p class="text-xs text-muted-foreground">
                            Design engineer
                        </p>
                    </div>
                </div>
                <twig:Separator />
                <div class="flex gap-4 text-sm">
                    <span>
                        <span class="font-medium">
                            1.2k
                        </span>
                        <span class="text-muted-foreground">
                            posts
                        </span>
                    </span>
                    <span>
                        <span class="font-medium">
                            84k
                        </span>
                        <span class="text-muted-foreground">
                            followers
                        </span>
                    </span>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Stats Metrics

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:chart-no-axes-column" />
                Dashboard KPIs
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-1.5">
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Visitors
                    </span>
                    <span class="font-medium tabular-nums">
                        12,480
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Conversion
                    </span>
                    <span class="font-medium tabular-nums">
                        3.2%
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Bounce rate
                    </span>
                    <span class="font-medium tabular-nums">
                        41%
                    </span>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Stats Growth

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:trending-up" />
                Monthly growth
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-2">
                <p class="font-medium">
                    Growth this month
                </p>
                <div class="flex items-center gap-2">
                    <span class="text-2xl font-semibold tabular-nums">
                        +18.4%
                    </span>
                    <twig:Badge variant="secondary">
                        <twig:ux:icon name="lucide:arrow-up-right" />
                        +2.1 pts
                    </twig:Badge>
                </div>
                <p class="text-xs text-muted-foreground">
                    Compared with October.
                </p>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Stats User Activity

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:user" />
                Jane Doe
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-1.5">
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Sessions
                    </span>
                    <span class="font-medium tabular-nums">
                        142
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Last seen
                    </span>
                    <span class="font-medium tabular-nums">
                        2 hours ago
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Plan
                    </span>
                    <span class="font-medium tabular-nums">
                        Team
                    </span>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Stats Performance

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:activity" />
                API status
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-1.5">
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Latency
                    </span>
                    <span class="font-medium tabular-nums">
                        82 ms
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Uptime
                    </span>
                    <span class="font-medium tabular-nums">
                        99.98%
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Throughput
                    </span>
                    <span class="font-medium tabular-nums">
                        1.4k req/s
                    </span>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Stats Revenue

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:dollar-sign" />
                Revenue
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="grid gap-1.5">
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        MRR
                    </span>
                    <span class="font-medium tabular-nums">
                        $48,200
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Transactions
                    </span>
                    <span class="font-medium tabular-nums">
                        1,204
                    </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">
                        Refunds
                    </span>
                    <span class="font-medium tabular-nums">
                        $320
                    </span>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Top Placement

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:arrow-up" />
                Hover me
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-56" side="top">
            <p class="text-sm">
                The card opens above the trigger.
            </p>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```
### Open Delay

```twig
<div class="flex justify-center pt-4" style="min-height: 240px">
    <twig:HoverCard :openDelay="500" :closeDelay="200">
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" class="px-0" {{ ...hover_card_trigger_attrs }}>
                Delayed card
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-56">
            <p class="text-sm">
                This card waits before opening.
            </p>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```

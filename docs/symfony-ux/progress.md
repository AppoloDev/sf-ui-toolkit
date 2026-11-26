# Progress

## Examples

### Basic

```twig
<twig:Field class="w-full max-w-sm">
    <div class="flex justify-between text-sm">
        <span>
            Storage
        </span>
        <span class="text-muted-foreground">
            60%
        </span>
    </div>
    <twig:Progress value="60" />
</twig:Field>
```

### Small and Large

```twig
<div class="grid w-full max-w-sm gap-4">
    <twig:Progress value="40" class="h-1" />
    <twig:Progress value="70" class="h-3" />
</div>
```

### File Uploads

```twig
<div class="grid w-full max-w-md gap-4">
    <div class="flex items-center gap-3">
        <twig:ux:icon name="lucide:file" class="size-5 text-muted-foreground" />
        <div class="min-w-0 flex-1">
            <p class="truncate text-sm">
                report-q3.pdf
            </p>
            <twig:Progress value="100" class="mt-1 h-1" />
        </div>
        <span class="text-xs text-muted-foreground">
            Complete
        </span>
    </div>
    <div class="flex items-center gap-3">
        <twig:ux:icon name="lucide:file" class="size-5 text-muted-foreground" />
        <div class="min-w-0 flex-1">
            <p class="truncate text-sm">
                design-system.fig
            </p>
            <twig:Progress value="62" class="mt-1 h-1" />
        </div>
        <span class="text-xs text-muted-foreground">
            12s left
        </span>
    </div>
    <div class="flex items-center gap-3">
        <twig:ux:icon name="lucide:file" class="size-5 text-muted-foreground" />
        <div class="min-w-0 flex-1">
            <p class="truncate text-sm">
                photos.zip
            </p>
            <twig:Progress value="25" class="mt-1 h-1" />
        </div>
        <span class="text-xs text-muted-foreground">
            40s left
        </span>
    </div>
</div>
```

### Multi-Step

```twig
<twig:Card class="max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Setup
        </twig:Card:Title>
        <twig:Card:Description>
            2 of 4 steps done
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="grid gap-3">
        <twig:Progress value="50" />
        <p class="flex items-center gap-2 text-sm">
            <twig:ux:icon name="lucide:circle-check" class="size-4 text-green-600" />
            Create account
        </p>
        <p class="flex items-center gap-2 text-sm">
            <twig:ux:icon name="lucide:circle-check" class="size-4 text-green-600" />
            Verify email
        </p>
        <p class="flex items-center gap-2 text-sm">
            <twig:ux:icon name="lucide:circle" class="size-4 text-muted-foreground" />
            Add a project
        </p>
        <p class="flex items-center gap-2 text-sm">
            <twig:ux:icon name="lucide:circle" class="size-4 text-muted-foreground" />
            Invite your team
        </p>
    </twig:Card:Content>
</twig:Card>
```

### Custom Colors

```twig
<div class="grid w-full max-w-sm gap-3">
    <twig:Progress value="38" class="[&>div]:bg-green-500" />
    <twig:Progress value="46" class="[&>div]:bg-blue-500" />
    <twig:Progress value="54" class="[&>div]:bg-amber-500" />
    <twig:Progress value="62" class="[&>div]:bg-red-500" />
    <twig:Progress value="70" class="[&>div]:bg-violet-500" />
</div>
```

### Status Messages

A bar that fills in a loop, and messages that follow one another while it does. The animation is plain CSS: nothing here reads a real progress, so use it for a wait of unknown length.

```twig
<style>
    @keyframes status-fill {
        from { transform: translateX(-100%); }
        to { transform: translateX(0); }
    }
    @keyframes status-first {
        0%, 30% { opacity: 1; }
        34%, 100% { opacity: 0; }
    }
    @keyframes status-second {
        0%, 30% { opacity: 0; }
        34%, 64% { opacity: 1; }
        68%, 100% { opacity: 0; }
    }
    @keyframes status-third {
        0%, 64% { opacity: 0; }
        68%, 98% { opacity: 1; }
        100% { opacity: 0; }
    }
</style>
<div class="mx-auto grid w-full max-w-sm gap-3">
    <div class="relative h-5 text-sm text-muted-foreground">
        <p class="absolute inset-0 animate-[status-first_9s_linear_infinite]">
            Preparing your workspace…
        </p>
        <p class="absolute inset-0 animate-[status-second_9s_linear_infinite] motion-reduce:hidden">
            Installing dependencies…
        </p>
        <p class="absolute inset-0 animate-[status-third_9s_linear_infinite] motion-reduce:hidden">
            Almost there…
        </p>
    </div>
    <twig:Progress :value="0" class="[&>[data-slot=progress-indicator]]:animate-[status-fill_9s_linear_infinite] motion-reduce:[&>[data-slot=progress-indicator]]:animate-none" />
</div>
```

### With Counter

```twig
<twig:Field class="w-full max-w-sm">
    <div class="flex items-center gap-3">
        <twig:Progress value="72" class="flex-1" />
        <span class="w-10 text-right text-sm font-medium tabular-nums">
            72%
        </span>
    </div>
</twig:Field>
```

### Gradient

```twig
<div class="grid w-full max-w-sm gap-3">
    <twig:Progress value="65" class="h-2 [&>div]:bg-gradient-to-r [&>div]:from-sky-400 [&>div]:to-indigo-600" />
    <twig:Progress value="45" class="h-2 [&>div]:bg-gradient-to-r [&>div]:from-amber-400 [&>div]:to-rose-500" />
    <twig:Progress value="85" class="h-2 [&>div]:bg-gradient-to-r [&>div]:from-emerald-400 [&>div]:to-teal-600" />
</div>
```

### Multi-line Label

```twig
<twig:Field class="w-full max-w-sm">
    <div class="grid gap-0.5">
        <span class="text-sm font-medium">
            Importing contacts
        </span>
        <span class="text-xs text-muted-foreground">
            1,240 of 2,000 rows processed. You can leave this page, the import continues in the background.
        </span>
    </div>
    <twig:Progress value="62" />
</twig:Field>
```

### Label And Value

```twig
<twig:Field class="w-full max-w-sm">
    <div class="flex items-center justify-between text-sm">
        <span class="font-medium">
            Profile completion
        </span>
        <twig:Badge variant="secondary">
            4 of 5
        </twig:Badge>
    </div>
    <twig:Progress value="80" />
</twig:Field>
```

### Segmented

```twig
<div class="grid w-full max-w-sm gap-2">
    <div class="grid grid-cols-4 gap-1">
        <twig:Progress value="100" class="h-2" />
        <twig:Progress value="100" class="h-2" />
        <twig:Progress value="40" class="h-2" />
        <twig:Progress value="0" class="h-2" />
    </div>
    <span class="text-xs text-muted-foreground">
        Step 3 of 4
    </span>
</div>
```

### Milestones

```twig
<twig:Field class="w-full max-w-sm">
    <div class="flex justify-between text-xs text-muted-foreground">
        <span>
            Start
        </span>
        <span>
            Beta
        </span>
        <span>
            Launch
        </span>
    </div>
    <twig:Progress value="50" />
    <span class="text-xs text-muted-foreground">
        Halfway to launch
    </span>
</twig:Field>
```

### Storage Quota With Legend

```twig
<twig:Card class="w-full max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Storage
        </twig:Card:Title>
        <twig:Card:Description>
            7.2 GB of 10 GB used
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="grid gap-3">
        <twig:Progress value="72" class="h-3" />
        <div class="flex flex-wrap gap-2">
            <twig:Badge variant="outline">
                Photos 3.1 GB
            </twig:Badge>
            <twig:Badge variant="outline">
                Documents 2.4 GB
            </twig:Badge>
            <twig:Badge variant="outline">
                Other 1.7 GB
            </twig:Badge>
        </div>
    </twig:Card:Content>
</twig:Card>
```

### Skill Bars

```twig
<div class="grid w-full max-w-sm gap-4">
    <twig:Field>
        <div class="flex justify-between text-sm">
            <span>
                PHP
            </span>
            <span class="text-muted-foreground">
                90%
            </span>
        </div>
        <twig:Progress value="90" />
    </twig:Field>
    <twig:Field>
        <div class="flex justify-between text-sm">
            <span>
                Twig
            </span>
            <span class="text-muted-foreground">
                80%
            </span>
        </div>
        <twig:Progress value="80" />
    </twig:Field>
    <twig:Field>
        <div class="flex justify-between text-sm">
            <span>
                JavaScript
            </span>
            <span class="text-muted-foreground">
                65%
            </span>
        </div>
        <twig:Progress value="65" />
    </twig:Field>
</div>
```

### Download With Speed

```twig
<twig:Item variant="outline" class="w-full max-w-sm">
    <twig:Item:Media variant="icon">
        <twig:ux:icon name="lucide:download" />
    </twig:Item:Media>
    <twig:Item:Content>
        <twig:Item:Title>
            installer.dmg
        </twig:Item:Title>
        <twig:Item:Description>
            48 of 120 MB, 6.4 MB/s
        </twig:Item:Description>
        <twig:Progress value="40" class="mt-2" />
    </twig:Item:Content>
    <twig:Item:Actions>
        <twig:Button variant="ghost" size="icon" aria-label="Cancel download">
            <twig:ux:icon name="lucide:x" />
        </twig:Button>
    </twig:Item:Actions>
</twig:Item>
```

### Threshold Colors

```twig
<div class="grid w-full max-w-sm gap-4">
    <twig:Field>
        <div class="flex justify-between text-sm">
            <span>
                CPU
            </span>
            <span class="text-muted-foreground">
                32%
            </span>
        </div>
        <twig:Progress value="32" class="[&>div]:bg-green-500" />
    </twig:Field>
    <twig:Field>
        <div class="flex justify-between text-sm">
            <span>
                Memory
            </span>
            <span class="text-muted-foreground">
                74%
            </span>
        </div>
        <twig:Progress value="74" class="[&>div]:bg-amber-500" />
    </twig:Field>
    <twig:Field>
        <div class="flex justify-between text-sm">
            <span>
                Disk
            </span>
            <span class="text-muted-foreground">
                93%
            </span>
        </div>
        <twig:Progress value="93" class="[&>div]:bg-red-500" />
    </twig:Field>
</div>
```

### Quota Warning

```twig
<twig:Alert variant="warning" class="w-full max-w-sm">
    <twig:ux:icon name="lucide:triangle-alert" />
    <twig:Alert:Title>
        You are close to your limit
    </twig:Alert:Title>
    <twig:Alert:Description>
        <twig:Progress value="92" class="mt-2 [&>div]:bg-amber-500" />
        <span class="mt-1 block text-xs">
            920 of 1,000 API calls used this month
        </span>
    </twig:Alert:Description>
</twig:Alert>
```

### Indeterminate

For a wait of unknown length the bar slides in a loop. It is hidden from assistive technology, so the text says what is happening.

```twig
<style>
    @keyframes progress-slide {
        from { margin-left: -40%; }
        to { margin-left: 100%; }
    }
</style>
<twig:Field class="w-full max-w-sm">
    <span class="text-sm" role="status">
        Waiting for the server...
    </span>
    <twig:Progress value="100" aria-hidden="true" class="[&>div]:w-2/5 [&>div]:flex-none [&>div]:animate-[progress-slide_1.4s_ease-in-out_infinite] motion-reduce:[&>div]:animate-none" />
</twig:Field>
```

### Steps Checklist

```twig
<twig:Card class="w-full max-w-sm">
    <twig:Card:Header>
        <twig:Card:Title>
            Get started
        </twig:Card:Title>
        <twig:Card:Description>
            2 of 4 tasks done
        </twig:Card:Description>
    </twig:Card:Header>
    <twig:Card:Content class="grid gap-3">
        <twig:Progress value="50" />
        <ul class="grid gap-1.5 text-sm">
            <li class="flex items-center gap-2">
                <twig:ux:icon name="lucide:circle-check" class="size-4 text-green-600" />
                Create an account
            </li>
            <li class="flex items-center gap-2">
                <twig:ux:icon name="lucide:circle-check" class="size-4 text-green-600" />
                Invite a teammate
            </li>
            <li class="flex items-center gap-2 text-muted-foreground">
                <twig:ux:icon name="lucide:circle" class="size-4" />
                Connect a repository
            </li>
            <li class="flex items-center gap-2 text-muted-foreground">
                <twig:ux:icon name="lucide:circle" class="size-4" />
                Deploy your first site
            </li>
        </ul>
    </twig:Card:Content>
</twig:Card>
```

### Square Corners

```twig
<div class="grid w-full max-w-sm gap-3">
    <twig:Progress value="35" class="h-2 rounded-none [&>div]:rounded-none" />
    <twig:Progress value="60" class="h-4 rounded-sm" />
</div>
```

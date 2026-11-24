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

# Avatar

## Examples

### Dropdown

Use an `Avatar` as the trigger of a `DropdownMenu`.

```twig
<div class="flex items-start justify-center pt-6" style="min-height: 260px">
    <twig:DropdownMenu id="avatar-dropdown" align="end">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="ghost" size="icon" class="rounded-full" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:Avatar>
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-32">
            <twig:DropdownMenu:Group>
                <twig:DropdownMenu:Item>
                    Profile
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    Billing
                </twig:DropdownMenu:Item>
                <twig:DropdownMenu:Item>
                    Settings
                </twig:DropdownMenu:Item>
            </twig:DropdownMenu:Group>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Group>
                <twig:DropdownMenu:Item variant="destructive">
                    Log out
                </twig:DropdownMenu:Item>
            </twig:DropdownMenu:Group>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```

### Fallbacks

Initials and an icon on the muted fallback fill.

```twig
<div class="flex items-center gap-4">
    <twig:Avatar>
        <twig:Avatar:Fallback>
            JD
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar>
        <twig:Avatar:Fallback>
            <twig:ux:icon name="lucide:user" class="size-4" />
        </twig:Avatar:Fallback>
    </twig:Avatar>
</div>
```

### Border Radius

```twig
<div class="flex items-center gap-4">
    <twig:Avatar class="rounded-full after:rounded-full">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="rounded-full" />
        <twig:Avatar:Fallback class="rounded-full">
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar class="rounded-md after:rounded-md">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="rounded-md" />
        <twig:Avatar:Fallback class="rounded-md">
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar class="rounded-lg after:rounded-lg">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="rounded-lg" />
        <twig:Avatar:Fallback class="rounded-lg">
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar class="rounded-xl after:rounded-xl">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="rounded-xl" />
        <twig:Avatar:Fallback class="rounded-xl">
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
</div>
```

### Custom Sizes

```twig
<div class="flex items-center gap-4">
    <twig:Avatar class="size-4">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar class="size-8">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar class="size-12">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar class="size-16">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
</div>
```

### Status Dots

```twig
<div class="flex items-center gap-4">
    <div class="relative">
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <span class="absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-background bg-primary">
        </span>
    </div>
    <div class="relative">
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <span class="absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-background bg-green-500">
        </span>
    </div>
    <div class="relative">
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <span class="absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-background bg-yellow-500">
        </span>
    </div>
    <div class="relative">
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <span class="absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-background bg-destructive">
        </span>
    </div>
</div>
```

### Badge Icons

```twig
<div class="flex items-center gap-4">
    <div class="relative">
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <span class="absolute -end-1 -bottom-1 flex size-4 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground">
            <twig:ux:icon name="lucide:plus" class="size-2.5" />
        </span>
    </div>
    <div class="relative">
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <span class="absolute -end-1 -bottom-1 flex size-4 items-center justify-center rounded-full border-2 border-background bg-green-500 text-white">
            <twig:ux:icon name="lucide:check" class="size-2.5" />
        </span>
    </div>
    <div class="relative">
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <span class="absolute -end-1 -bottom-1 flex size-4 items-center justify-center rounded-full border-2 border-background bg-yellow-500 text-white">
            <twig:ux:icon name="lucide:star" class="size-2.5" />
        </span>
    </div>
    <div class="relative">
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                CN
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <span class="absolute -end-1 -bottom-1 flex size-4 items-center justify-center rounded-full border-2 border-background bg-blue-500 text-white">
            <twig:ux:icon name="lucide:shield" class="size-2.5" />
        </span>
    </div>
</div>
```

### Border Rings

```twig
<div class="flex items-center gap-4">
    <twig:Avatar class="ring-2 ring-offset-2 ring-offset-background ring-primary">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar class="ring-2 ring-offset-2 ring-offset-background ring-destructive">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar class="ring-2 ring-offset-2 ring-offset-background ring-violet-500">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar class="ring-2 ring-offset-2 ring-offset-background ring-yellow-500">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
</div>
```

### Soft and Solid Fallbacks

```twig
<div class="flex flex-wrap items-center gap-4">
    <twig:Avatar>
        <twig:Avatar:Fallback class="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
            GR
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar>
        <twig:Avatar:Fallback class="bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300">
            FU
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar>
        <twig:Avatar:Fallback class="bg-primary text-primary-foreground">
            PR
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar>
        <twig:Avatar:Fallback class="bg-destructive text-white">
            DE
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar>
        <twig:Avatar:Fallback class="bg-blue-600 text-white">
            BL
        </twig:Avatar:Fallback>
    </twig:Avatar>
</div>
```

### User Details

```twig
<div class="flex items-center gap-3">
    <twig:Avatar size="lg">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <div class="flex flex-col">
        <span class="flex items-center gap-2 text-sm font-medium">
            shadcn
            <twig:Badge variant="secondary">
                Pro
            </twig:Badge>
        </span>
        <span class="text-xs text-muted-foreground">
            Software Engineer
        </span>
    </div>
</div>
```

### Grayscale

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="grayscale" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Group With Count

```twig
<div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
    <twig:Avatar>
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            S
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar>
        <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
        <twig:Avatar:Fallback>
            M
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar>
        <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
        <twig:Avatar:Fallback>
            E
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar>
        <twig:Avatar:Fallback class="text-xs">
            +3
        </twig:Avatar:Fallback>
    </twig:Avatar>
</div>
```

### Social Proof Pill

```twig
<div class="inline-flex items-center gap-3 rounded-full border p-1 pe-4">
    <div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
        <twig:Avatar size="sm">
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                S
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <twig:Avatar size="sm">
            <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
            <twig:Avatar:Fallback>
                M
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <twig:Avatar size="sm">
            <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
            <twig:Avatar:Fallback>
                E
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <twig:Avatar size="sm">
            <twig:Avatar:Image src="https://github.com/leerob.png" alt="leerob" />
            <twig:Avatar:Fallback>
                L
            </twig:Avatar:Fallback>
        </twig:Avatar>
    </div>
    <p class="text-xs text-muted-foreground">
        <span class="font-semibold text-foreground">
            100K+
        </span>
        developers use it
    </p>
</div>
```

### Hover Fan

A stack that spreads apart on hover.

```twig
<div class="group/fan flex -space-x-3 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:transition-transform hover:space-x-1">
    <twig:Avatar>
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            S
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar>
        <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
        <twig:Avatar:Fallback>
            M
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar>
        <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
        <twig:Avatar:Fallback>
            E
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <twig:Avatar>
        <twig:Avatar:Image src="https://github.com/leerob.png" alt="leerob" />
        <twig:Avatar:Fallback>
            L
        </twig:Avatar:Fallback>
    </twig:Avatar>
</div>
```

### Group Presence and Add Button

```twig
<div class="flex items-center gap-3">
    <div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
            <twig:Avatar:Fallback>
                S
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/maxleiter.png" alt="maxleiter" />
            <twig:Avatar:Fallback>
                M
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <twig:Avatar>
            <twig:Avatar:Image src="https://github.com/evilrabbit.png" alt="evilrabbit" />
            <twig:Avatar:Fallback>
                E
            </twig:Avatar:Fallback>
        </twig:Avatar>
        <twig:Avatar>
            <twig:Avatar:Fallback class="text-xs">
                +5
            </twig:Avatar:Fallback>
        </twig:Avatar>
    </div>
    <twig:Button variant="outline" size="icon" class="rounded-full" aria-label="Add user">
        <twig:ux:icon name="lucide:user-plus" />
    </twig:Button>
</div>
```

### Multiple Badges

```twig
<div class="relative w-fit">
    <twig:Avatar size="lg">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <span class="absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-green-500">
    </span>
    <span class="absolute -end-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-medium text-white">
        3
    </span>
</div>
```

### Pulsing Ring

```twig
<div class="relative w-fit">
    <twig:Avatar size="lg" class="animate-pulse ring-2 ring-green-500 ring-offset-2 ring-offset-background">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <span class="absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-green-500">
    </span>
</div>
```

### Dropdown Account

A pill trigger with avatar, name and chevron.

```twig
<div class="flex justify-center pt-4" style="min-height: 300px">
    <twig:DropdownMenu id="avatar-account" align="start">
        <twig:DropdownMenu:Trigger>
            <twig:Button variant="outline" class="h-auto rounded-full py-1 ps-1" {{ ...dropdown_menu_trigger_attrs }}>
                <twig:Avatar size="sm">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                shadcn
                <twig:ux:icon name="lucide:chevrons-up-down" class="size-3.5 text-muted-foreground" />
            </twig:Button>
        </twig:DropdownMenu:Trigger>
        <twig:DropdownMenu:Content class="w-48">
            <twig:DropdownMenu:Item>
                Profile
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Settings
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Teams
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Item>
                Invite
            </twig:DropdownMenu:Item>
            <twig:DropdownMenu:Separator />
            <twig:DropdownMenu:Item variant="destructive">
                Log out
            </twig:DropdownMenu:Item>
        </twig:DropdownMenu:Content>
    </twig:DropdownMenu>
</div>
```


### Custom Badge

The badge is a Lucide icon, its shape filled through the inner group, and pinned to the corner. A ring in the page color separates it from the picture.

```twig
<div class="relative w-fit">
    <twig:Avatar size="lg">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
    <span class="absolute -end-1.5 -bottom-1.5 flex rounded-full bg-background p-px">
        <twig:ux:icon name="lucide:badge-check" class="size-5 text-white [&>g]:fill-blue-500" aria-label="Verified" />
    </span>
</div>
```

### Gradient Ring

A turning conic gradient sits behind the avatar, which keeps a gap in the page color. The second ring is still, like the one of a story that was not seen. The animation stops for people who ask for less motion.

```twig
<div class="flex items-center gap-6">
    <div class="relative flex size-16 items-center justify-center">
        <span class="absolute inset-0 animate-spin rounded-full bg-[conic-gradient(#ec4899,#f59e0b,#8b5cf6,#ec4899)] [animation-duration:3s] motion-reduce:animate-none">
        </span>
        <span class="relative flex rounded-full bg-background p-1">
            <twig:Avatar size="lg">
                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                <twig:Avatar:Fallback>
                    CN
                </twig:Avatar:Fallback>
            </twig:Avatar>
        </span>
    </div>
    <div class="relative flex size-16 items-center justify-center">
        <span class="absolute inset-0 rounded-full bg-[conic-gradient(from_45deg,#ec4899,#f59e0b,#8b5cf6,#ec4899)]">
        </span>
        <span class="relative flex rounded-full bg-background p-1">
            <twig:Avatar size="lg">
                <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                <twig:Avatar:Fallback>
                    CN
                </twig:Avatar:Fallback>
            </twig:Avatar>
        </span>
    </div>
</div>
```

### Square

```twig
<twig:Avatar class="rounded-lg after:rounded-lg">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="rounded-lg!" />
    <twig:Avatar:Fallback class="rounded-lg!">
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Square Initials

```twig
<twig:Avatar class="rounded-lg after:rounded-lg">
    <twig:Avatar:Fallback class="rounded-lg!">
        JD
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Square Placeholder Icon

```twig
<twig:Avatar class="rounded-lg after:rounded-lg">
    <twig:Avatar:Fallback class="rounded-lg!">
        <twig:ux:icon name="lucide:user" class="size-4" />
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Square Online

```twig
<twig:Avatar class="rounded-lg after:rounded-lg">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="rounded-lg!" />
    <twig:Avatar:Fallback class="rounded-lg!">
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="bg-green-500" />
</twig:Avatar>
```

### Square Offline

```twig
<twig:Avatar class="rounded-lg after:rounded-lg">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="rounded-lg!" />
    <twig:Avatar:Fallback class="rounded-lg!">
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="bg-muted-foreground" />
</twig:Avatar>
```

### Square Verified

```twig
<twig:Avatar class="rounded-lg after:rounded-lg">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="rounded-lg!" />
    <twig:Avatar:Fallback class="rounded-lg!">
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="bg-blue-500 text-white">
        <twig:ux:icon name="lucide:check" class="size-2.5" />
    </twig:Avatar:Badge>
</twig:Avatar>
```

### Square Count Badge

```twig
<twig:Avatar class="rounded-lg after:rounded-lg">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" class="rounded-lg!" />
    <twig:Avatar:Fallback class="rounded-lg!">
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="bg-destructive text-white size-4 text-[10px]">
        3
    </twig:Avatar:Badge>
</twig:Avatar>
```

### Initials Only

```twig
<twig:Avatar>
    <twig:Avatar:Fallback>
        JD
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Placeholder Icon

```twig
<twig:Avatar>
    <twig:Avatar:Fallback>
        <twig:ux:icon name="lucide:user" class="size-4" />
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Online Status

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="bg-green-500" />
</twig:Avatar>
```

### Offline Status

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="bg-muted-foreground" />
</twig:Avatar>
```

### Verified Check

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="bg-blue-500 text-white">
        <twig:ux:icon name="lucide:check" class="size-2.5" />
    </twig:Avatar:Badge>
</twig:Avatar>
```

### Count Badge

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="bg-destructive text-white size-4 text-[10px]">
        3
    </twig:Avatar:Badge>
</twig:Avatar>
```

### Count Badge Top Left

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="start-0 end-auto top-0 bottom-auto bg-destructive text-white size-4 text-[10px]">
        3
    </twig:Avatar:Badge>
</twig:Avatar>
```

### Count Badge Bottom Left

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="start-0 end-auto bg-destructive text-white size-4 text-[10px]">
        3
    </twig:Avatar:Badge>
</twig:Avatar>
```

### Away Status

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="bg-yellow-500" />
</twig:Avatar>
```

### Busy Status

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="bg-red-500" />
</twig:Avatar>
```

### Do Not Disturb

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
    <twig:Avatar:Badge class="bg-red-500 text-white">
        <twig:ux:icon name="lucide:minus" class="size-2.5" />
    </twig:Avatar:Badge>
</twig:Avatar>
```

### Online With Count

```twig
<div class="relative w-fit">
    <twig:Avatar>
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
        <twig:Avatar:Badge class="bg-green-500" />
    </twig:Avatar>
    <twig:Badge class="absolute -end-2 -top-2 h-4 min-w-4 px-1 text-[10px]" variant="destructive">
        5
    </twig:Badge>
</div>
```

### Size Extra Small

```twig
<twig:Avatar class="size-5">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Size Small

```twig
<twig:Avatar size="sm">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Size Large

```twig
<twig:Avatar size="lg">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Size 12

```twig
<twig:Avatar class="size-12">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Size Extra Large

```twig
<twig:Avatar class="size-20">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback class="text-xl">
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Primary Border

```twig
<twig:Avatar class="ring-2 ring-primary ring-offset-2 ring-offset-background">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Blue Border

```twig
<twig:Avatar class="ring-2 ring-blue-500 ring-offset-2 ring-offset-background">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Large Shadow

```twig
<twig:Avatar class="shadow-xl">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Gradient Fallback

```twig
<twig:Avatar>
    <twig:Avatar:Fallback class="bg-gradient-to-br from-pink-500 to-orange-400 text-white">
        JD
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Blue Fallback

```twig
<twig:Avatar>
    <twig:Avatar:Fallback class="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
        JD
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Error Fallback

```twig
<twig:Avatar>
    <twig:Avatar:Fallback class="bg-destructive/10 text-destructive">
        <twig:ux:icon name="lucide:triangle-alert" class="size-4" />
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Hover Scale And Shadow

```twig
<twig:Avatar class="transition-transform hover:scale-110 hover:shadow-lg">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### Loading Overlay

```twig
<twig:Avatar>
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
    <span class="absolute inset-0 flex items-center justify-center rounded-full bg-background/70">
        <twig:Spinner />
    </span>
</twig:Avatar>
```

### Pulsing Green Ring

```twig
<div class="relative w-fit">
    <span class="absolute inset-0 animate-ping rounded-full bg-green-500/40"></span>
    <twig:Avatar class="ring-2 ring-green-500">
        <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
        <twig:Avatar:Fallback>
            CN
        </twig:Avatar:Fallback>
    </twig:Avatar>
</div>
```

### Primary Glow

```twig
<twig:Avatar class="shadow-[0_0_16px] shadow-primary/60">
    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
    <twig:Avatar:Fallback>
        CN
    </twig:Avatar:Fallback>
</twig:Avatar>
```

### With Tooltip

```twig
<div class="pt-10" style="min-height: 140px">
    <twig:Tooltip id="tt-avatar">
        <twig:Tooltip:Trigger>
            <twig:Button variant="ghost" size="icon" class="rounded-full" aria-label="shadcn" {{ ...tooltip_trigger_attrs }}>
                <twig:Avatar>
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
            </twig:Button>
        </twig:Tooltip:Trigger>
        <twig:Tooltip:Content>
            shadcn
        </twig:Tooltip:Content>
    </twig:Tooltip>
</div>
```

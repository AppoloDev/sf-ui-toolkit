# Pagination

## Examples

### Hover Border

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" active="" class="border border-transparent hover:border-border">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" active="1" >
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" active="" class="border border-transparent hover:border-border">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Circle Buttons

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" class="rounded-full" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" active="" class="rounded-full">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" active="1" class="rounded-full">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" active="" class="rounded-full">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" class="rounded-full" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Trailing Ellipsis

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" active="1">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" active="">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" active="">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" active="">
                4
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Ellipsis />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Centered Page Info

```twig
<div class="flex w-80 items-center justify-between">
    <twig:Button variant="outline" size="icon" aria-label="Previous page">
        <twig:ux:icon name="lucide:chevron-left" />
    </twig:Button>
    <span class="text-sm text-muted-foreground">
        Page
        <span class="font-medium text-foreground">
            1
        </span>
        of 10
    </span>
    <twig:Button variant="outline" size="icon" aria-label="Next page">
        <twig:ux:icon name="lucide:chevron-right" />
    </twig:Button>
</div>
```

### Left Page Info

```twig
<div class="flex w-full max-w-md items-center justify-between">
    <span class="text-sm text-muted-foreground">
        Page 1 of 10
    </span>
    <div class="flex gap-2">
        <twig:Button variant="outline" size="sm">
            <twig:ux:icon name="lucide:chevron-left" />
            Previous
        </twig:Button>
        <twig:Button variant="outline" size="sm">
            Next
            <twig:ux:icon name="lucide:chevron-right" />
        </twig:Button>
    </div>
</div>
```

### Arrow Links

```twig
<div class="flex w-80 items-center justify-between">
    <twig:Button as="a" href="#" variant="link" class="px-0">
        <twig:ux:icon name="lucide:arrow-left" />
        Previous
    </twig:Button>
    <twig:Button as="a" href="#" variant="link" class="px-0">
        Next
        <twig:ux:icon name="lucide:arrow-right" />
    </twig:Button>
</div>
```

### Compact Go-To

```twig
<div class="flex items-center gap-3">
    <twig:Pagination class="mx-0 w-auto">
        <twig:Pagination:Content>
            <twig:Pagination:Item>
                <twig:Pagination:Previous href="#" />
            </twig:Pagination:Item>
            <twig:Pagination:Item>
                <twig:Pagination:Link href="#" active="1">
                    1
                </twig:Pagination:Link>
            </twig:Pagination:Item>
            <twig:Pagination:Item>
                <twig:Pagination:Link href="#" active="">
                    2
                </twig:Pagination:Link>
            </twig:Pagination:Item>
            <twig:Pagination:Item>
                <twig:Pagination:Link href="#" active="">
                    3
                </twig:Pagination:Link>
            </twig:Pagination:Item>
            <twig:Pagination:Item>
                <twig:Pagination:Ellipsis />
            </twig:Pagination:Item>
            <twig:Pagination:Item>
                <twig:Pagination:Next href="#" />
            </twig:Pagination:Item>
        </twig:Pagination:Content>
    </twig:Pagination>
    <div class="flex items-center gap-2 text-sm">
        <span class="text-muted-foreground">
            Go to
        </span>
        <twig:Input type="number" min="1" value="1" class="h-8 w-16" aria-label="Go to page" />
    </div>
</div>
```

### Rows Per Page

```twig
<div style="min-height: 240px">
    <div class="flex w-full max-w-2xl items-center justify-between text-sm">
        <div class="flex items-center gap-2">
            <span class="text-muted-foreground">
                Rows per page
            </span>
            <twig:Select id="pg-rows" value="25">
                <twig:Select:Trigger size="sm" class="w-20">
                    <twig:Select:Value />
                </twig:Select:Trigger>
                <twig:Select:Content>
                    <twig:Select:Group id="pg-rows-list">
                        <twig:Select:Item value="10">
                            10
                        </twig:Select:Item>
                        <twig:Select:Item value="25">
                            25
                        </twig:Select:Item>
                        <twig:Select:Item value="50">
                            50
                        </twig:Select:Item>
                        <twig:Select:Item value="100">
                            100
                        </twig:Select:Item>
                    </twig:Select:Group>
                </twig:Select:Content>
            </twig:Select>
        </div>
        <span class="text-muted-foreground">
            1-25 of 100
        </span>
        <div class="flex gap-1">
            <twig:Button variant="outline" size="icon-sm" aria-label="First page">
                <twig:ux:icon name="lucide:chevrons-left" />
            </twig:Button>
            <twig:Button variant="outline" size="icon-sm" aria-label="Previous page">
                <twig:ux:icon name="lucide:chevron-left" />
            </twig:Button>
            <twig:Button variant="outline" size="icon-sm" aria-label="Next page">
                <twig:ux:icon name="lucide:chevron-right" />
            </twig:Button>
            <twig:Button variant="outline" size="icon-sm" aria-label="Last page">
                <twig:ux:icon name="lucide:chevrons-right" />
            </twig:Button>
        </div>
    </div>
</div>
```

### In Card

```twig
<twig:Card class="max-w-md py-3">
    <twig:Card:Content>
        <twig:Pagination>
            <twig:Pagination:Content>
                <twig:Pagination:Item>
                    <twig:Pagination:Previous href="#" />
                </twig:Pagination:Item>
                <twig:Pagination:Item>
                    <twig:Pagination:Link href="#" active="1" class="rounded-full">
                        1
                    </twig:Pagination:Link>
                </twig:Pagination:Item>
                <twig:Pagination:Item>
                    <twig:Pagination:Link href="#" active="" class="rounded-full">
                        2
                    </twig:Pagination:Link>
                </twig:Pagination:Item>
                <twig:Pagination:Item>
                    <twig:Pagination:Link href="#" active="" class="rounded-full">
                        3
                    </twig:Pagination:Link>
                </twig:Pagination:Item>
                <twig:Pagination:Item>
                    <twig:Pagination:Ellipsis />
                </twig:Pagination:Item>
                <twig:Pagination:Item>
                    <twig:Pagination:Link href="#" class="rounded-full">
                        10
                    </twig:Pagination:Link>
                </twig:Pagination:Item>
                <twig:Pagination:Item>
                    <twig:Pagination:Link href="#" class="rounded-full">
                        11
                    </twig:Pagination:Link>
                </twig:Pagination:Item>
                <twig:Pagination:Item>
                    <twig:Pagination:Link href="#" class="rounded-full">
                        12
                    </twig:Pagination:Link>
                </twig:Pagination:Item>
                <twig:Pagination:Item>
                    <twig:Pagination:Next href="#" />
                </twig:Pagination:Item>
            </twig:Pagination:Content>
        </twig:Pagination>
    </twig:Card:Content>
</twig:Card>
```

### Ellipsis At The Start

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Ellipsis />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                8
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true">
                9
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                10
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Ellipsis At The End

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Ellipsis />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                10
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Ellipsis At Both Ends

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Ellipsis />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                5
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true">
                6
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                7
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Ellipsis />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                20
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Large Number Of Pages

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" aria-label="Go to first page">
                <twig:ux:icon name="lucide:chevrons-left" />
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Ellipsis />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                48
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true">
                49
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                50
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Ellipsis />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                100
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" aria-label="Go to last page">
                <twig:ux:icon name="lucide:chevrons-right" />
            </twig:Pagination:Link>
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Disabled

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" aria-disabled="true" tabindex="-1" class="pointer-events-none opacity-50" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```


### Simple Page Numbers

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Five Page Numbers

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                4
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                5
            </twig:Pagination:Link>
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Previous And Next Only

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Previous And Next With Labels

```twig
<twig:Pagination>
    <twig:Pagination:Content class="w-full justify-between">
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" text="Older" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" text="Newer" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### All Elements

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" aria-label="Go to first page">
                <twig:ux:icon name="lucide:chevrons-left" />
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Ellipsis />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                12
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" aria-label="Go to last page">
                <twig:ux:icon name="lucide:chevrons-right" />
            </twig:Pagination:Link>
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Page Counter

```twig
<twig:Pagination>
    <twig:Pagination:Content class="gap-3">
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <span class="text-sm text-muted-foreground tabular-nums">
                Page 2 of 12
            </span>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### First And Last Page

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" aria-label="Go to first page">
                <twig:ux:icon name="lucide:chevrons-left" />
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <span class="px-2 text-sm tabular-nums">
                4 / 20
            </span>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" aria-label="Go to last page">
                <twig:ux:icon name="lucide:chevrons-right" />
            </twig:Pagination:Link>
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### First And Last Page With Labels

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" size="default">
                <twig:ux:icon name="lucide:chevrons-left" />
                First
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true">
                4
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                5
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" size="default">
                Last
                <twig:ux:icon name="lucide:chevrons-right" />
            </twig:Pagination:Link>
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Spaced

```twig
<twig:Pagination>
    <twig:Pagination:Content class="gap-3">
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Small

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" size="sm" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" size="icon-sm">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true" size="icon-sm">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" size="icon-sm">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" size="sm" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Large

```twig
<twig:Pagination>
    <twig:Pagination:Content>
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" size="lg" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" size="icon-lg">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true" size="icon-lg">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" size="icon-lg">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" size="lg" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Compact

```twig
<twig:Pagination>
    <twig:Pagination:Content class="gap-0">
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" size="icon-xs">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true" size="icon-xs">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" size="icon-xs">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" size="icon-xs">
                4
            </twig:Pagination:Link>
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Spacious

```twig
<twig:Pagination>
    <twig:Pagination:Content class="gap-4">
        <twig:Pagination:Item>
            <twig:Pagination:Previous href="#" />
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#" :active="true">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link href="#">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Next href="#" />
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

### Outlined Group

```twig
<twig:Pagination>
    <twig:Pagination:Content class="gap-0 divide-x rounded-lg border">
        <twig:Pagination:Item>
            <twig:Pagination:Link class="rounded-none" href="#">
                1
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link class="rounded-none" href="#" :active="true">
                2
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link class="rounded-none" href="#">
                3
            </twig:Pagination:Link>
        </twig:Pagination:Item>
        <twig:Pagination:Item>
            <twig:Pagination:Link class="rounded-none" href="#">
                4
            </twig:Pagination:Link>
        </twig:Pagination:Item>
    </twig:Pagination:Content>
</twig:Pagination>
```

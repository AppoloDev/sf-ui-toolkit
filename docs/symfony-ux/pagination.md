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

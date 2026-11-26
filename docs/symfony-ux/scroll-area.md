# Scroll Area

## Examples

### Basic

```twig
<twig:ScrollArea class="h-72 w-48 rounded-md border">
    <div class="p-4">
        <h4 class="mb-4 text-sm font-medium">
            Releases
        </h4>
        <div class="text-sm">
            v1.2.30
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.29
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.28
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.27
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.26
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.25
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.24
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.23
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.22
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.21
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.20
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.19
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.18
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.17
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.16
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.15
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.14
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.13
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.12
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.11
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.10
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.9
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.8
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.7
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.6
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.5
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.4
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.3
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.2
        </div>
        <twig:Separator class="my-2" />
        <div class="text-sm">
            v1.2.1
        </div>
    </div>
</twig:ScrollArea>
```

### Both Scrollbars

```twig
<twig:ScrollArea class="h-72 w-full max-w-md rounded-md border">
    <table class="w-[640px] text-sm">
        <thead>
            <tr class="border-b text-start">
                <th class="px-3 py-2 text-start font-medium">
                    Plan
                </th>
                <th class="px-3 py-2 text-start font-medium">
                    Price
                </th>
                <th class="px-3 py-2 text-start font-medium">
                    Seats
                </th>
                <th class="px-3 py-2 text-start font-medium">
                    Storage
                </th>
                <th class="px-3 py-2 text-start font-medium">
                    Support
                </th>
                <th class="px-3 py-2 text-start font-medium">
                    API
                </th>
                <th class="px-3 py-2 text-start font-medium">
                    SSO
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 1, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 1, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 1, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 1, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 1, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 1, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 1, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 2, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 2, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 2, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 2, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 2, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 2, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 2, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 3, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 3, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 3, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 3, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 3, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 3, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 3, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 4, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 4, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 4, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 4, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 4, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 4, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 4, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 5, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 5, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 5, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 5, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 5, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 5, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 5, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 6, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 6, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 6, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 6, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 6, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 6, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 6, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 7, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 7, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 7, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 7, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 7, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 7, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 7, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 8, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 8, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 8, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 8, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 8, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 8, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 8, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 9, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 9, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 9, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 9, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 9, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 9, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 9, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 10, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 10, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 10, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 10, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 10, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 10, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 10, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 11, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 11, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 11, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 11, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 11, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 11, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 11, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 12, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 12, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 12, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 12, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 12, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 12, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 12, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 13, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 13, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 13, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 13, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 13, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 13, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 13, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 14, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 14, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 14, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 14, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 14, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 14, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 14, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 15, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 15, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 15, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 15, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 15, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 15, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 15, col 7
                </td>
            </tr>
            <tr class="border-b">
                <td class="px-3 py-2 text-muted-foreground">
                    Row 16, col 1
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 16, col 2
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 16, col 3
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 16, col 4
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 16, col 5
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 16, col 6
                </td>
                <td class="px-3 py-2 text-muted-foreground">
                    Row 16, col 7
                </td>
            </tr>
        </tbody>
    </table>
</twig:ScrollArea>
```

### Fixed Height

```twig
<twig:ScrollArea class="h-48 w-full max-w-sm rounded-md border p-4">
    <p class="text-sm text-muted-foreground">
        Row 1 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 2 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 3 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 4 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 5 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 6 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 7 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 8 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 9 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 10 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 11 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 12 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 13 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 14 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 15 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 16 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 17 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 18 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 19 of the list. The area keeps a fixed height.
    </p>
    <p class="text-sm text-muted-foreground">
        Row 20 of the list. The area keeps a fixed height.
    </p>
</twig:ScrollArea>
```

### Scrollable Tags

```twig
<twig:ScrollArea class="h-40 w-full max-w-sm rounded-md border p-4">
    <div class="flex flex-wrap gap-2">
        <twig:Badge variant="secondary">
            tag-1
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-2
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-3
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-4
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-5
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-6
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-7
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-8
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-9
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-10
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-11
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-12
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-13
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-14
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-15
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-16
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-17
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-18
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-19
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-20
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-21
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-22
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-23
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-24
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-25
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-26
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-27
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-28
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-29
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-30
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-31
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-32
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-33
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-34
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-35
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-36
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-37
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-38
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-39
        </twig:Badge>
        <twig:Badge variant="secondary">
            tag-40
        </twig:Badge>
    </div>
</twig:ScrollArea>
```

### Chat Messages

```twig
<twig:ScrollArea class="h-64 w-full max-w-sm rounded-md border p-4">
    <div class="grid gap-3">
        <div class="flex items-start gap-2">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    J
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Did you see the new design?
            </div>
        </div>
        <div class="flex items-start gap-2 flex-row-reverse">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    Y
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Yes, it looks great.
            </div>
        </div>
        <div class="flex items-start gap-2">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    J
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Can we ship it on Friday?
            </div>
        </div>
        <div class="flex items-start gap-2 flex-row-reverse">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    Y
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Let me check with the team.
            </div>
        </div>
        <div class="flex items-start gap-2">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    J
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Did you see the new design?
            </div>
        </div>
        <div class="flex items-start gap-2 flex-row-reverse">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    Y
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Yes, it looks great.
            </div>
        </div>
        <div class="flex items-start gap-2">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    J
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Can we ship it on Friday?
            </div>
        </div>
        <div class="flex items-start gap-2 flex-row-reverse">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    Y
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Let me check with the team.
            </div>
        </div>
        <div class="flex items-start gap-2">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    J
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Did you see the new design?
            </div>
        </div>
        <div class="flex items-start gap-2 flex-row-reverse">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    Y
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Yes, it looks great.
            </div>
        </div>
        <div class="flex items-start gap-2">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    J
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Can we ship it on Friday?
            </div>
        </div>
        <div class="flex items-start gap-2 flex-row-reverse">
            <twig:Avatar size="sm">
                <twig:Avatar:Fallback>
                    Y
                </twig:Avatar:Fallback>
            </twig:Avatar>
            <div class="rounded-lg bg-muted px-3 py-1.5 text-sm">
                Let me check with the team.
            </div>
        </div>
    </div>
</twig:ScrollArea>
```

### Horizontal

```twig
<twig:ScrollArea class="w-full max-w-sm rounded-md border">
    <div class="flex w-max gap-3 p-4">
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 1
        </div>
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 2
        </div>
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 3
        </div>
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 4
        </div>
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 5
        </div>
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 6
        </div>
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 7
        </div>
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 8
        </div>
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 9
        </div>
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 10
        </div>
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 11
        </div>
        <div class="grid size-24 shrink-0 place-items-center rounded-md bg-muted text-sm">
            Card 12
        </div>
    </div>
</twig:ScrollArea>
```

### Dynamic Content

```twig
<twig:ScrollArea class="h-48 w-full max-w-sm rounded-md border">
    <twig:Item:Group>
        <twig:Item size="sm">
            <twig:Item:Content>
                <twig:Item:Title>
                    Notification 1
                </twig:Item:Title>
                <twig:Item:Description>
                    Received 3 minutes ago.
                </twig:Item:Description>
            </twig:Item:Content>
        </twig:Item>
        <twig:Item size="sm">
            <twig:Item:Content>
                <twig:Item:Title>
                    Notification 2
                </twig:Item:Title>
                <twig:Item:Description>
                    Received 6 minutes ago.
                </twig:Item:Description>
            </twig:Item:Content>
        </twig:Item>
        <twig:Item size="sm">
            <twig:Item:Content>
                <twig:Item:Title>
                    Notification 3
                </twig:Item:Title>
                <twig:Item:Description>
                    Received 9 minutes ago.
                </twig:Item:Description>
            </twig:Item:Content>
        </twig:Item>
        <twig:Item size="sm">
            <twig:Item:Content>
                <twig:Item:Title>
                    Notification 4
                </twig:Item:Title>
                <twig:Item:Description>
                    Received 12 minutes ago.
                </twig:Item:Description>
            </twig:Item:Content>
        </twig:Item>
        <twig:Item size="sm">
            <twig:Item:Content>
                <twig:Item:Title>
                    Notification 5
                </twig:Item:Title>
                <twig:Item:Description>
                    Received 15 minutes ago.
                </twig:Item:Description>
            </twig:Item:Content>
        </twig:Item>
        <twig:Item size="sm">
            <twig:Item:Content>
                <twig:Item:Title>
                    Notification 6
                </twig:Item:Title>
                <twig:Item:Description>
                    Received 18 minutes ago.
                </twig:Item:Description>
            </twig:Item:Content>
        </twig:Item>
        <twig:Item size="sm">
            <twig:Item:Content>
                <twig:Item:Title>
                    Notification 7
                </twig:Item:Title>
                <twig:Item:Description>
                    Received 21 minutes ago.
                </twig:Item:Description>
            </twig:Item:Content>
        </twig:Item>
        <twig:Item size="sm">
            <twig:Item:Content>
                <twig:Item:Title>
                    Notification 8
                </twig:Item:Title>
                <twig:Item:Description>
                    Received 24 minutes ago.
                </twig:Item:Description>
            </twig:Item:Content>
        </twig:Item>
        <twig:Item size="sm">
            <twig:Item:Content>
                <twig:Item:Title>
                    Notification 9
                </twig:Item:Title>
                <twig:Item:Description>
                    Received 27 minutes ago.
                </twig:Item:Description>
            </twig:Item:Content>
        </twig:Item>
        <twig:Item size="sm">
            <twig:Item:Content>
                <twig:Item:Title>
                    Notification 10
                </twig:Item:Title>
                <twig:Item:Description>
                    Received 30 minutes ago.
                </twig:Item:Description>
            </twig:Item:Content>
        </twig:Item>
    </twig:Item:Group>
</twig:ScrollArea>
```

### With Resize Handle

```twig
<div class="h-40 min-h-24 w-full max-w-sm resize-y overflow-hidden rounded-md border">
    <twig:ScrollArea class="size-full p-4">
        <p class="text-sm text-muted-foreground">
            Row 1. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 2. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 3. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 4. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 5. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 6. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 7. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 8. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 9. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 10. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 11. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 12. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 13. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 14. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 15. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 16. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 17. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 18. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 19. Drag the corner to resize the area.
        </p>
        <p class="text-sm text-muted-foreground">
            Row 20. Drag the corner to resize the area.
        </p>
    </twig:ScrollArea>
</div>
```

### Custom Scrollbar

The scrollbar is styled with the standard `scrollbar-color` and `scrollbar-width` properties.

```twig
<twig:ScrollArea class="h-48 w-72 rounded-lg border [scrollbar-color:var(--primary)_transparent] [scrollbar-width:thin]">
    <div class="p-4 text-sm">
        <p class="mb-2 font-medium">
            Release notes
        </p>
        <p class="mb-2">Version 3.5 adds a carousel with autoplay, a message scroller and a long list of smaller fixes.</p>
        <p class="mb-2">The Select component now opens above the trigger when there is no room below.</p>
        <p class="mb-2">Dialogs trap the focus again after a nested dialog closes.</p>
        <p class="mb-2">Tables gain a sticky header and a caption slot.</p>
        <p class="mb-2">The command palette remembers the last query for the session.</p>
        <p>Thanks to everyone who reported an issue.</p>
    </div>
</twig:ScrollArea>
```

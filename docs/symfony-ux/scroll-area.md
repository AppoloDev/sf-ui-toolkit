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

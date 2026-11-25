# Skeleton

## Examples

### Text Paragraphs

```twig
<div class="flex w-full max-w-md flex-col gap-6">
    <div class="flex flex-col gap-2">
        <twig:Skeleton class="h-4 w-full" />
        <twig:Skeleton class="h-4 w-full" />
        <twig:Skeleton class="h-4 w-3/5" />
    </div>
    <div class="flex flex-col gap-2">
        <twig:Skeleton class="h-4 w-full" />
        <twig:Skeleton class="h-4 w-full" />
        <twig:Skeleton class="h-4 w-3/5" />
    </div>
</div>
```

### Stats Row

```twig
<div class="grid w-full max-w-2xl grid-cols-3 gap-4">
    <twig:Card>
        <twig:Card:Content class="flex flex-col gap-3">
            <twig:Skeleton class="h-3 w-16" />
            <twig:Skeleton class="h-8 w-24" />
            <twig:Skeleton class="h-3 w-20" />
        </twig:Card:Content>
    </twig:Card>
    <twig:Card>
        <twig:Card:Content class="flex flex-col gap-3">
            <twig:Skeleton class="h-3 w-16" />
            <twig:Skeleton class="h-8 w-24" />
            <twig:Skeleton class="h-3 w-20" />
        </twig:Card:Content>
    </twig:Card>
    <twig:Card>
        <twig:Card:Content class="flex flex-col gap-3">
            <twig:Skeleton class="h-3 w-16" />
            <twig:Skeleton class="h-8 w-24" />
            <twig:Skeleton class="h-3 w-20" />
        </twig:Card:Content>
    </twig:Card>
</div>
```

### List With Actions

```twig
<twig:Card class="max-w-md">
    <twig:Card:Header class="flex items-center justify-between">
        <twig:Skeleton class="h-5 w-28" />
        <twig:Skeleton class="h-8 w-20" />
    </twig:Card:Header>
    <twig:Card:Content class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
            <twig:Skeleton class="size-10 rounded-full" />
            <div class="flex flex-1 flex-col gap-2">
                <twig:Skeleton class="h-3 w-3/4" />
                <twig:Skeleton class="h-3 w-1/2" />
            </div>
            <twig:Skeleton class="h-8 w-14" />
        </div>
        <div class="flex items-center gap-3">
            <twig:Skeleton class="size-10 rounded-full" />
            <div class="flex flex-1 flex-col gap-2">
                <twig:Skeleton class="h-3 w-3/4" />
                <twig:Skeleton class="h-3 w-1/2" />
            </div>
            <twig:Skeleton class="h-8 w-14" />
        </div>
        <div class="flex items-center gap-3">
            <twig:Skeleton class="size-10 rounded-full" />
            <div class="flex flex-1 flex-col gap-2">
                <twig:Skeleton class="h-3 w-3/4" />
                <twig:Skeleton class="h-3 w-1/2" />
            </div>
            <twig:Skeleton class="h-8 w-14" />
        </div>
    </twig:Card:Content>
</twig:Card>
```

### Card Grid

```twig
<twig:Card class="max-w-xs overflow-hidden pt-0">
    <twig:Skeleton class="aspect-video w-full rounded-none" />
    <twig:Card:Content class="flex flex-col gap-2">
        <twig:Skeleton class="h-5 w-2/3" />
        <twig:Skeleton class="h-3 w-full" />
        <twig:Skeleton class="h-3 w-4/5" />
    </twig:Card:Content>
    <twig:Card:Footer class="justify-between">
        <twig:Skeleton class="h-8 w-24" />
        <twig:Skeleton class="size-8" />
    </twig:Card:Footer>
</twig:Card>
```

### Profile Page

```twig
<div class="grid w-full max-w-md gap-4">
    <twig:Card>
        <twig:Card:Content class="flex flex-col items-center gap-3">
            <twig:Skeleton class="size-20 rounded-full" />
            <twig:Skeleton class="h-5 w-32" />
            <twig:Skeleton class="h-3 w-24" />
            <div class="mt-2 grid w-full grid-cols-3 gap-4">
                <div class="flex flex-col items-center gap-1">
                    <twig:Skeleton class="h-5 w-10" />
                    <twig:Skeleton class="h-3 w-14" />
                </div>
                <div class="flex flex-col items-center gap-1">
                    <twig:Skeleton class="h-5 w-10" />
                    <twig:Skeleton class="h-3 w-14" />
                </div>
                <div class="flex flex-col items-center gap-1">
                    <twig:Skeleton class="h-5 w-10" />
                    <twig:Skeleton class="h-3 w-14" />
                </div>
            </div>
        </twig:Card:Content>
    </twig:Card>
    <twig:Card>
        <twig:Card:Content class="flex flex-col gap-3">
            <div class="flex justify-between">
                <twig:Skeleton class="h-3 w-20" />
                <twig:Skeleton class="h-3 w-32" />
            </div>
            <div class="flex justify-between">
                <twig:Skeleton class="h-3 w-20" />
                <twig:Skeleton class="h-3 w-32" />
            </div>
            <div class="flex justify-between">
                <twig:Skeleton class="h-3 w-20" />
                <twig:Skeleton class="h-3 w-32" />
            </div>
            <div class="flex justify-between">
                <twig:Skeleton class="h-3 w-20" />
                <twig:Skeleton class="h-3 w-32" />
            </div>
        </twig:Card:Content>
    </twig:Card>
</div>
```

### Chat Messages

```twig
<div class="flex w-full max-w-md flex-col gap-4">
    <div class="flex items-end gap-2">
        <twig:Skeleton class="size-8 rounded-full" />
        <div class="flex flex-col gap-1">
            <twig:Skeleton class="h-3 w-16" />
            <twig:Skeleton class="h-10 w-56 rounded-2xl" />
        </div>
    </div>
    <div class="flex justify-end">
        <twig:Skeleton class="h-10 w-44 rounded-2xl" />
    </div>
    <div class="flex items-end gap-2">
        <twig:Skeleton class="size-8 rounded-full" />
        <twig:Skeleton class="h-14 w-64 rounded-2xl" />
    </div>
    <div class="flex items-center gap-2">
        <twig:Skeleton class="h-9 flex-1" />
        <twig:Skeleton class="size-9" />
    </div>
</div>
```

### Article Preview

```twig
<twig:Card class="w-full max-w-sm overflow-hidden pt-0">
    <twig:Skeleton class="aspect-video w-full rounded-none" />
    <twig:Card:Content class="flex flex-col gap-2">
        <twig:Skeleton class="h-5 w-3/4" />
        <twig:Skeleton class="h-3 w-full" />
        <twig:Skeleton class="h-3 w-5/6" />
        <div class="flex items-center gap-2 pt-2">
            <twig:Skeleton class="size-6 rounded-full" />
            <twig:Skeleton class="h-3 w-24" />
        </div>
    </twig:Card:Content>
</twig:Card>
```

### Detailed Article

```twig
<div class="flex w-full max-w-xl flex-col gap-4">
    <twig:Skeleton class="h-8 w-4/5" />
    <div class="flex items-center gap-3">
        <twig:Skeleton class="size-10 rounded-full" />
        <div class="flex flex-col gap-2">
            <twig:Skeleton class="h-3 w-28" />
            <twig:Skeleton class="h-3 w-20" />
        </div>
    </div>
    <twig:Skeleton class="aspect-video w-full" />
    <twig:Skeleton class="h-4 w-full" />
    <twig:Skeleton class="h-4 w-full" />
    <twig:Skeleton class="h-4 w-2/3" />
</div>
```

### Blog Post

```twig
<div class="flex w-full max-w-xl flex-col gap-3">
    <twig:Skeleton class="h-4 w-24" />
    <twig:Skeleton class="h-7 w-3/4" />
    <twig:Skeleton class="h-4 w-full" />
    <twig:Skeleton class="h-4 w-full" />
    <twig:Skeleton class="h-4 w-4/5" />
    <div class="flex gap-2 pt-1">
        <twig:Skeleton class="h-5 w-14 rounded-full" />
        <twig:Skeleton class="h-5 w-16 rounded-full" />
        <twig:Skeleton class="h-5 w-12 rounded-full" />
    </div>
</div>
```

### Card With Badge And Tags

```twig
<twig:Card class="w-full max-w-sm">
    <twig:Card:Content class="flex flex-col gap-2">
        <twig:Skeleton class="h-5 w-16 rounded-full" />
        <twig:Skeleton class="h-5 w-2/3" />
        <twig:Skeleton class="h-3 w-full" />
        <twig:Skeleton class="h-3 w-4/5" />
        <div class="flex gap-2 pt-2">
            <twig:Skeleton class="h-5 w-14 rounded-full" />
            <twig:Skeleton class="h-5 w-14 rounded-full" />
            <twig:Skeleton class="h-5 w-14 rounded-full" />
        </div>
    </twig:Card:Content>
</twig:Card>
```

### Member Card

```twig
<twig:Card class="w-full max-w-sm">
    <twig:Card:Content class="flex flex-col items-center gap-2">
        <twig:Skeleton class="size-16 rounded-full" />
        <twig:Skeleton class="h-4 w-32" />
        <twig:Skeleton class="h-3 w-24" />
        <div class="flex gap-2 pt-2">
            <twig:Skeleton class="h-8 w-20" />
            <twig:Skeleton class="h-8 w-8" />
        </div>
    </twig:Card:Content>
</twig:Card>
```

### Horizontal Or Vertical Card

```twig
<div class="flex w-full max-w-2xl flex-col gap-4">
    <twig:Card class="flex-row overflow-hidden p-0">
        <twig:Skeleton class="h-auto w-32 shrink-0 rounded-none" />
        <twig:Card:Content class="flex flex-1 flex-col gap-2 py-4">
            <twig:Skeleton class="h-4 w-2/3" />
            <twig:Skeleton class="h-3 w-full" />
            <twig:Skeleton class="h-3 w-4/5" />
        </twig:Card:Content>
    </twig:Card>
    <twig:Card class="overflow-hidden pt-0">
        <twig:Skeleton class="aspect-video w-full rounded-none" />
        <twig:Card:Content class="flex flex-col gap-2">
            <twig:Skeleton class="h-4 w-2/3" />
            <twig:Skeleton class="h-3 w-full" />
        </twig:Card:Content>
    </twig:Card>
</div>
```

### Input Fields

```twig
<twig:Field:Group class="w-full max-w-sm">
    <twig:Field>
        <twig:Skeleton class="h-3 w-20" />
        <twig:Skeleton class="h-9 w-full" />
    </twig:Field>
    <twig:Field>
        <twig:Skeleton class="h-3 w-20" />
        <twig:Skeleton class="h-9 w-full" />
    </twig:Field>
    <twig:Field>
        <twig:Skeleton class="h-3 w-20" />
        <twig:Skeleton class="h-9 w-full" />
    </twig:Field>
</twig:Field:Group>
```

### Content With Sidebar

```twig
<div class="grid w-full max-w-3xl grid-cols-[1fr_14rem] gap-6">
    <div class="flex flex-col gap-3">
        <twig:Skeleton class="h-7 w-2/3" />
        <twig:Skeleton class="h-4 w-full" />
        <twig:Skeleton class="h-4 w-full" />
        <twig:Skeleton class="h-4 w-5/6" />
        <twig:Skeleton class="aspect-video w-full" />
        <twig:Skeleton class="h-4 w-full" />
        <twig:Skeleton class="h-4 w-3/4" />
    </div>
    <twig:Card class="self-start">
        <twig:Card:Content class="flex flex-col gap-3">
            <twig:Skeleton class="h-4 w-24" />
            <twig:Skeleton class="h-3 w-full" />
            <twig:Skeleton class="h-3 w-full" />
            <twig:Skeleton class="h-3 w-3/4" />
        </twig:Card:Content>
    </twig:Card>
</div>
```

### Profile Header

```twig
<div class="flex w-full max-w-xl flex-col gap-4">
    <twig:Skeleton class="h-28 w-full" />
    <div class="-mt-10 flex items-end gap-4 px-4">
        <twig:Skeleton class="size-20 rounded-full border-4 border-background" />
        <div class="flex flex-1 flex-col gap-2 pb-2">
            <twig:Skeleton class="h-5 w-40" />
            <twig:Skeleton class="h-3 w-28" />
        </div>
        <twig:Skeleton class="h-9 w-24" />
    </div>
</div>
```

### Comment Thread

```twig
<div class="flex w-full max-w-lg flex-col gap-5">
    <div class="flex gap-3">
        <twig:Skeleton class="size-8 shrink-0 rounded-full" />
        <div class="flex flex-1 flex-col gap-2">
            <twig:Skeleton class="h-3 w-32" />
            <twig:Skeleton class="h-3 w-full" />
            <twig:Skeleton class="h-3 w-4/5" />
        </div>
    </div>
    <div class="ms-11 flex flex-col gap-5">
        <div class="flex gap-3">
            <twig:Skeleton class="size-8 shrink-0 rounded-full" />
            <div class="flex flex-1 flex-col gap-2">
                <twig:Skeleton class="h-3 w-32" />
                <twig:Skeleton class="h-3 w-full" />
                <twig:Skeleton class="h-3 w-4/5" />
            </div>
        </div>
        <div class="flex gap-3">
            <twig:Skeleton class="size-8 shrink-0 rounded-full" />
            <div class="flex flex-1 flex-col gap-2">
                <twig:Skeleton class="h-3 w-32" />
                <twig:Skeleton class="h-3 w-full" />
                <twig:Skeleton class="h-3 w-4/5" />
            </div>
        </div>
    </div>
    <div class="flex gap-3">
        <twig:Skeleton class="size-8 shrink-0 rounded-full" />
        <div class="flex flex-1 flex-col gap-2">
            <twig:Skeleton class="h-3 w-32" />
            <twig:Skeleton class="h-3 w-full" />
            <twig:Skeleton class="h-3 w-4/5" />
        </div>
    </div>
</div>
```

### Profile Form

```twig
<twig:Card class="w-full max-w-sm">
    <twig:Card:Header>
        <twig:Skeleton class="h-5 w-32" />
        <twig:Skeleton class="h-3 w-48" />
    </twig:Card:Header>
    <twig:Card:Content class="flex flex-col gap-6">
        <div class="flex items-center gap-4">
            <twig:Skeleton class="size-16 rounded-full" />
            <twig:Skeleton class="h-8 w-24" />
        </div>
        <twig:Field:Group>
            <twig:Field>
                <twig:Skeleton class="h-3 w-16" />
                <twig:Skeleton class="h-9 w-full" />
            </twig:Field>
            <twig:Field>
                <twig:Skeleton class="h-3 w-16" />
                <twig:Skeleton class="h-9 w-full" />
            </twig:Field>
        </twig:Field:Group>
    </twig:Card:Content>
    <twig:Card:Footer class="justify-end gap-2">
        <twig:Skeleton class="h-9 w-20" />
        <twig:Skeleton class="h-9 w-24" />
    </twig:Card:Footer>
</twig:Card>
```

### Search Form

```twig
<div class="flex w-full max-w-xl flex-col gap-3">
    <div class="flex gap-2">
        <twig:Skeleton class="h-9 flex-1" />
        <twig:Skeleton class="h-9 w-24" />
    </div>
    <div class="flex gap-2">
        <twig:Skeleton class="h-7 w-20 rounded-full" />
        <twig:Skeleton class="h-7 w-24 rounded-full" />
        <twig:Skeleton class="h-7 w-16 rounded-full" />
    </div>
</div>
```

### Expandable Rows

```twig
<twig:Item:Group class="w-full max-w-md">
    <twig:Item variant="outline">
        <twig:Item:Content>
            <twig:Skeleton class="h-4 w-40" />
            <twig:Skeleton class="h-3 w-24" />
        </twig:Item:Content>
        <twig:Item:Actions>
            <twig:Skeleton class="size-4" />
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item:Separator />
    <twig:Item variant="outline">
        <twig:Item:Content>
            <twig:Skeleton class="h-4 w-40" />
            <twig:Skeleton class="h-3 w-24" />
        </twig:Item:Content>
        <twig:Item:Actions>
            <twig:Skeleton class="size-4" />
        </twig:Item:Actions>
    </twig:Item>
    <twig:Item:Separator />
    <twig:Item variant="outline">
        <twig:Item:Content>
            <twig:Skeleton class="h-4 w-40" />
            <twig:Skeleton class="h-3 w-24" />
        </twig:Item:Content>
        <twig:Item:Actions>
            <twig:Skeleton class="size-4" />
        </twig:Item:Actions>
    </twig:Item>
</twig:Item:Group>
```

### List With Icons

```twig
<div class="flex w-full max-w-md flex-col gap-3">
    <div class="flex items-center gap-3">
        <twig:Skeleton class="size-9 rounded-lg" />
        <div class="flex flex-1 flex-col gap-2">
            <twig:Skeleton class="h-4 w-2/3" />
            <twig:Skeleton class="h-3 w-1/2" />
        </div>
    </div>
    <div class="flex items-center gap-3">
        <twig:Skeleton class="size-9 rounded-lg" />
        <div class="flex flex-1 flex-col gap-2">
            <twig:Skeleton class="h-4 w-2/3" />
            <twig:Skeleton class="h-3 w-1/2" />
        </div>
    </div>
    <div class="flex items-center gap-3">
        <twig:Skeleton class="size-9 rounded-lg" />
        <div class="flex flex-1 flex-col gap-2">
            <twig:Skeleton class="h-4 w-2/3" />
            <twig:Skeleton class="h-3 w-1/2" />
        </div>
    </div>
    <div class="flex items-center gap-3">
        <twig:Skeleton class="size-9 rounded-lg" />
        <div class="flex flex-1 flex-col gap-2">
            <twig:Skeleton class="h-4 w-2/3" />
            <twig:Skeleton class="h-3 w-1/2" />
        </div>
    </div>
</div>
```

### Hierarchical List

```twig
<div class="flex w-full max-w-sm flex-col gap-3">
    <div class="flex items-center gap-2" style="padding-inline-start: 0rem">
        <twig:Skeleton class="size-4" />
        <twig:Skeleton class="h-4 w-32" />
    </div>
    <div class="flex items-center gap-2" style="padding-inline-start: 1rem">
        <twig:Skeleton class="size-4" />
        <twig:Skeleton class="h-4 w-40" />
    </div>
    <div class="flex items-center gap-2" style="padding-inline-start: 2rem">
        <twig:Skeleton class="size-4" />
        <twig:Skeleton class="h-4 w-36" />
    </div>
    <div class="flex items-center gap-2" style="padding-inline-start: 2rem">
        <twig:Skeleton class="size-4" />
        <twig:Skeleton class="h-4 w-28" />
    </div>
    <div class="flex items-center gap-2" style="padding-inline-start: 1rem">
        <twig:Skeleton class="size-4" />
        <twig:Skeleton class="h-4 w-44" />
    </div>
    <div class="flex items-center gap-2" style="padding-inline-start: 0rem">
        <twig:Skeleton class="size-4" />
        <twig:Skeleton class="h-4 w-24" />
    </div>
</div>
```

### Table With Avatars And Actions

```twig
<twig:Table>
    <twig:Table:Header>
        <twig:Table:Row>
            <twig:Table:Head>
                Member
            </twig:Table:Head>
            <twig:Table:Head>
                Status
            </twig:Table:Head>
            <twig:Table:Head>
                Joined
            </twig:Table:Head>
            <twig:Table:Head>
                <span class="sr-only">Actions</span>
            </twig:Table:Head>
        </twig:Table:Row>
    </twig:Table:Header>
    <twig:Table:Body>
        <twig:Table:Row>
            <twig:Table:Cell>
                <div class="flex items-center gap-3">
                    <twig:Skeleton class="size-8 rounded-full" />
                    <twig:Skeleton class="h-4 w-28" />
                </div>
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="h-5 w-16 rounded-full" />
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="h-4 w-20" />
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="size-8 ms-auto" />
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:Row>
            <twig:Table:Cell>
                <div class="flex items-center gap-3">
                    <twig:Skeleton class="size-8 rounded-full" />
                    <twig:Skeleton class="h-4 w-28" />
                </div>
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="h-5 w-16 rounded-full" />
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="h-4 w-20" />
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="size-8 ms-auto" />
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:Row>
            <twig:Table:Cell>
                <div class="flex items-center gap-3">
                    <twig:Skeleton class="size-8 rounded-full" />
                    <twig:Skeleton class="h-4 w-28" />
                </div>
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="h-5 w-16 rounded-full" />
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="h-4 w-20" />
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="size-8 ms-auto" />
            </twig:Table:Cell>
        </twig:Table:Row>
        <twig:Table:Row>
            <twig:Table:Cell>
                <div class="flex items-center gap-3">
                    <twig:Skeleton class="size-8 rounded-full" />
                    <twig:Skeleton class="h-4 w-28" />
                </div>
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="h-5 w-16 rounded-full" />
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="h-4 w-20" />
            </twig:Table:Cell>
            <twig:Table:Cell>
                <twig:Skeleton class="size-8 ms-auto" />
            </twig:Table:Cell>
        </twig:Table:Row>
    </twig:Table:Body>
</twig:Table>
<div class="mt-4 flex items-center justify-between">
    <twig:Skeleton class="h-4 w-32" />
    <div class="flex gap-2">
        <twig:Skeleton class="size-8" />
        <twig:Skeleton class="size-8" />
        <twig:Skeleton class="size-8" />
    </div>
</div>
```

### Shapes

```twig
<div class="flex items-center gap-4">
    <twig:Skeleton class="size-12 rounded-full" />
    <twig:Skeleton class="size-12 rounded-none" />
    <twig:Skeleton class="size-12" />
    <twig:Skeleton class="h-12 w-32" />
</div>
```

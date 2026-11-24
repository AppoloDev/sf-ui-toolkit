# Carousel

## Examples

### Basic

```twig
<div class="mx-auto w-full max-w-xs">
    <twig:Carousel aria-label="Basic carousel">
        <twig:Carousel:Content>
            <twig:Carousel:Item>
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-4xl font-semibold">
                    1
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item>
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-4xl font-semibold">
                    2
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item>
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-4xl font-semibold">
                    3
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item>
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-4xl font-semibold">
                    4
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item>
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-4xl font-semibold">
                    5
                </div>
            </twig:Carousel:Item>
        </twig:Carousel:Content>
        <twig:Carousel:Previous />
        <twig:Carousel:Next />
    </twig:Carousel>
</div>
```

### Multiple Items

```twig
<div class="mx-auto w-full max-w-md px-10">
    <twig:Carousel aria-label="Multiple items">
        <twig:Carousel:Content class="-ms-2">
            <twig:Carousel:Item class="ps-2 basis-1/3">
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    1
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-1/3">
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    2
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-1/3">
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    3
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-1/3">
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    4
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-1/3">
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    5
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-1/3">
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    6
                </div>
            </twig:Carousel:Item>
        </twig:Carousel:Content>
        <twig:Carousel:Previous />
        <twig:Carousel:Next />
    </twig:Carousel>
</div>
```

### Responsive Basis

```twig
<div class="mx-auto w-full max-w-2xl px-10">
    <twig:Carousel aria-label="Responsive carousel">
        <twig:Carousel:Content class="-ms-2">
            <twig:Carousel:Item class="ps-2 basis-full sm:basis-1/2 lg:basis-1/4">
                <div class="flex aspect-[3/4] items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    1
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-full sm:basis-1/2 lg:basis-1/4">
                <div class="flex aspect-[3/4] items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    2
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-full sm:basis-1/2 lg:basis-1/4">
                <div class="flex aspect-[3/4] items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    3
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-full sm:basis-1/2 lg:basis-1/4">
                <div class="flex aspect-[3/4] items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    4
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-full sm:basis-1/2 lg:basis-1/4">
                <div class="flex aspect-[3/4] items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    5
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-full sm:basis-1/2 lg:basis-1/4">
                <div class="flex aspect-[3/4] items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    6
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-full sm:basis-1/2 lg:basis-1/4">
                <div class="flex aspect-[3/4] items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    7
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-full sm:basis-1/2 lg:basis-1/4">
                <div class="flex aspect-[3/4] items-center justify-center rounded-lg border bg-card text-2xl font-semibold">
                    8
                </div>
            </twig:Carousel:Item>
        </twig:Carousel:Content>
        <twig:Carousel:Previous />
        <twig:Carousel:Next />
    </twig:Carousel>
</div>
```

### Centered Alignment

```twig
<div class="mx-auto w-full max-w-lg px-10">
    <twig:Carousel align="center" loop aria-label="Centered carousel">
        <twig:Carousel:Content class="-ms-2">
            <twig:Carousel:Item class="ps-2 basis-[70%]">
                <div class="flex aspect-video items-center justify-center rounded-lg border bg-card text-3xl font-semibold">
                    1
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-[70%]">
                <div class="flex aspect-video items-center justify-center rounded-lg border bg-card text-3xl font-semibold">
                    2
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-[70%]">
                <div class="flex aspect-video items-center justify-center rounded-lg border bg-card text-3xl font-semibold">
                    3
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-[70%]">
                <div class="flex aspect-video items-center justify-center rounded-lg border bg-card text-3xl font-semibold">
                    4
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item class="ps-2 basis-[70%]">
                <div class="flex aspect-video items-center justify-center rounded-lg border bg-card text-3xl font-semibold">
                    5
                </div>
            </twig:Carousel:Item>
        </twig:Carousel:Content>
        <twig:Carousel:Previous />
        <twig:Carousel:Next />
    </twig:Carousel>
</div>
```

### Image Overlays

```twig
<div class="mx-auto w-full max-w-lg px-10">
    <twig:Carousel aria-label="Image overlays">
        <twig:Carousel:Content>
            <twig:Carousel:Item>
                <div class="group/slide relative aspect-video overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80" alt="Mountain lake" class="size-full object-cover transition-transform duration-500 group-hover/slide:scale-105" />
                    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                        <p class="font-semibold">
                            Mountain lake
                        </p>
                        <p class="text-xs text-white/80">
                            A short caption.
                        </p>
                    </div>
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item>
                <div class="group/slide relative aspect-video overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80" alt="Forest" class="size-full object-cover transition-transform duration-500 group-hover/slide:scale-105" />
                    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                        <p class="font-semibold">
                            Forest
                        </p>
                        <p class="text-xs text-white/80">
                            A short caption.
                        </p>
                    </div>
                </div>
            </twig:Carousel:Item>
            <twig:Carousel:Item>
                <div class="group/slide relative aspect-video overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80" alt="Lake view" class="size-full object-cover transition-transform duration-500 group-hover/slide:scale-105" />
                    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                        <p class="font-semibold">
                            Lake view
                        </p>
                        <p class="text-xs text-white/80">
                            A short caption.
                        </p>
                    </div>
                </div>
            </twig:Carousel:Item>
        </twig:Carousel:Content>
        <twig:Carousel:Previous />
        <twig:Carousel:Next />
    </twig:Carousel>
</div>
```

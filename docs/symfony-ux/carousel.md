# Carousel

## Examples

### Basic

```twig
<div class="mx-auto w-full max-w-xs">
    <twig:Carousel aria-label="Basic carousel">
        <twig:Carousel:Content>
            {% for i in 1..5 %}
                <twig:Carousel:Item><div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-4xl font-semibold">{{ i }}</div></twig:Carousel:Item>
            {% endfor %}
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
            {% for i in 1..6 %}
                <twig:Carousel:Item class="ps-2 basis-1/3"><div class="flex aspect-square items-center justify-center rounded-lg border bg-card text-2xl font-semibold">{{ i }}</div></twig:Carousel:Item>
            {% endfor %}
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
            {% for i in 1..8 %}
                <twig:Carousel:Item class="ps-2 basis-full sm:basis-1/2 lg:basis-1/4"><div class="flex aspect-[3/4] items-center justify-center rounded-lg border bg-card text-2xl font-semibold">{{ i }}</div></twig:Carousel:Item>
            {% endfor %}
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
            {% for i in 1..5 %}
                <twig:Carousel:Item class="ps-2 basis-[70%]"><div class="flex aspect-video items-center justify-center rounded-lg border bg-card text-3xl font-semibold">{{ i }}</div></twig:Carousel:Item>
            {% endfor %}
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
            {% for t, u in {'Mountain lake': 'photo-1506744038136-46273834b3fb', 'Forest': 'photo-1469474968028-56623f02e42e', 'Lake view': 'photo-1501785888041-af3ef285b470'} %}
                <twig:Carousel:Item>
                    <div class="group/slide relative aspect-video overflow-hidden rounded-lg">
                        <img src="https://images.unsplash.com/{{ u }}?w=800&q=80" alt="{{ t }}" class="size-full object-cover transition-transform duration-500 group-hover/slide:scale-105" />
                        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white"><p class="font-semibold">{{ t }}</p><p class="text-xs text-white/80">A short caption.</p></div>
                    </div>
                </twig:Carousel:Item>
            {% endfor %}
        </twig:Carousel:Content>
        <twig:Carousel:Previous />
        <twig:Carousel:Next />
    </twig:Carousel>
</div>
```

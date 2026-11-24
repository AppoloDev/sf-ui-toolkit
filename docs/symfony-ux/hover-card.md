# Hover Card

## Examples

### Profile

```twig
<div class="flex justify-center pt-4" style="min-height: 260px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <a href="#" class="flex items-center gap-2 text-sm font-medium" {{ html_attr(hover_card_trigger_attrs) }}>
                <twig:Avatar size="sm">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                @shadcn
            </a>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-72">
            <div class="flex gap-3">
                <twig:Avatar size="lg">
                    <twig:Avatar:Image src="https://github.com/shadcn.png" alt="shadcn" />
                    <twig:Avatar:Fallback>
                        CN
                    </twig:Avatar:Fallback>
                </twig:Avatar>
                <div>
                    <p class="font-medium">
                        shadcn
                    </p>
                    <p class="text-xs text-muted-foreground">
                        Design engineer
                    </p>
                    <p class="mt-1 text-xs text-muted-foreground">
                        Joined December 2021
                    </p>
                </div>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```

### Icon

```twig
<div class="flex justify-center pt-4" style="min-height: 220px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="outline" {{ ...hover_card_trigger_attrs }}>
                <twig:ux:icon name="lucide:zap" class="text-amber-500" />
                Fast mode
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-64">
            <p class="font-medium">
                Fast mode
            </p>
            <p class="text-sm text-muted-foreground">
                Trades some quality for much quicker answers.
            </p>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```

### Image and Text

```twig
<div class="flex justify-center pt-4" style="min-height: 340px">
    <twig:HoverCard>
        <twig:HoverCard:Trigger>
            <twig:Button variant="link" {{ ...hover_card_trigger_attrs }}>
                Mountain lake
            </twig:Button>
        </twig:HoverCard:Trigger>
        <twig:HoverCard:Content class="w-80 gap-0 overflow-hidden p-0">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=640&q=80" alt="Mountain lake" class="aspect-video w-full object-cover" />
            <div class="p-3">
                <p class="font-medium">
                    Mountain lake
                </p>
                <p class="text-sm text-muted-foreground">
                    A quiet spot above the tree line.
                </p>
            </div>
        </twig:HoverCard:Content>
    </twig:HoverCard>
</div>
```

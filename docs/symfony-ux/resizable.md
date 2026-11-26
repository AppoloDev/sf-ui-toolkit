# Resizable

## Examples

### Animated Pill

The handle is a small pill that grows and turns to the primary color on hover and focus. Utility classes with `!` replace the line of the default handle.

```twig
<twig:Resizable class="h-52 max-w-lg rounded-lg border">
    <twig:Resizable:Panel size="50">
        <div class="flex h-full items-center justify-center p-6 ">
            <span class="text-sm font-medium">
                One
            </span>
        </div>
    </twig:Resizable:Panel>
    <twig:Resizable:Handle class="self-center! h-8! w-1.5! rounded-full! bg-border! transition-all duration-200 before:absolute before:-inset-x-1.5 before:-inset-y-2 before:content-[''] hover:h-12! hover:bg-primary! focus-visible:bg-primary! active:bg-primary!" />
    <twig:Resizable:Panel size="50">
        <div class="flex h-full items-center justify-center p-6 ">
            <span class="text-sm font-medium">
                Two
            </span>
        </div>
    </twig:Resizable:Panel>
</twig:Resizable>
```

### Spring Pill

The pill springs wider while it is dragged, with an easing that overshoots.

```twig
<twig:Resizable class="h-52 max-w-lg rounded-lg border">
    <twig:Resizable:Panel size="50">
        <div class="flex h-full items-center justify-center p-6 ">
            <span class="text-sm font-medium">
                One
            </span>
        </div>
    </twig:Resizable:Panel>
    <twig:Resizable:Handle class="self-center! h-8! w-1.5! rounded-full! bg-border! transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] before:absolute before:-inset-x-1.5 before:-inset-y-2 before:content-[''] hover:bg-primary! focus-visible:bg-primary! active:scale-x-150 active:scale-y-125 active:bg-primary!" />
    <twig:Resizable:Panel size="50">
        <div class="flex h-full items-center justify-center p-6 ">
            <span class="text-sm font-medium">
                Two
            </span>
        </div>
    </twig:Resizable:Panel>
</twig:Resizable>
```

### Capsule Expansion

Dragging stretches the pill into a large capsule.

```twig
<twig:Resizable class="h-52 max-w-lg rounded-lg border">
    <twig:Resizable:Panel size="50">
        <div class="flex h-full items-center justify-center p-6 ">
            <span class="text-sm font-medium">
                One
            </span>
        </div>
    </twig:Resizable:Panel>
    <twig:Resizable:Handle class="self-center! h-8! w-1.5! rounded-full! bg-border! transition-all duration-300 before:absolute before:-inset-x-1.5 before:-inset-y-2 before:content-[''] hover:bg-primary! focus-visible:bg-primary! active:h-28! active:w-3! active:bg-primary!" />
    <twig:Resizable:Panel size="50">
        <div class="flex h-full items-center justify-center p-6 ">
            <span class="text-sm font-medium">
                Two
            </span>
        </div>
    </twig:Resizable:Panel>
</twig:Resizable>
```

### Nested Pills

A vertical group inside a panel, each handle with its own pill.

```twig
<twig:Resizable class="h-72 max-w-lg rounded-lg border">
    <twig:Resizable:Panel size="40">
        <div class="flex h-full items-center justify-center p-6 ">
            <span class="text-sm font-medium">
                One
            </span>
        </div>
    </twig:Resizable:Panel>
    <twig:Resizable:Handle class="self-center! h-8! w-1.5! rounded-full! bg-border! transition-all duration-200 before:absolute before:-inset-x-1.5 before:-inset-y-2 before:content-[''] hover:h-12! hover:bg-primary! focus-visible:bg-primary! active:bg-primary!" />
    <twig:Resizable:Panel size="60">
        <twig:Resizable orientation="vertical">
            <twig:Resizable:Panel size="50">
                <div class="flex h-full items-center justify-center p-6 ">
                    <span class="text-sm font-medium">
                        Two
                    </span>
                </div>
            </twig:Resizable:Panel>
            <twig:Resizable:Handle class="self-center! h-1.5! w-8! rounded-full! bg-border! transition-all duration-200 before:absolute before:-inset-x-2 before:-inset-y-1.5 before:content-[''] hover:w-12! hover:bg-primary! focus-visible:bg-primary! active:bg-primary!" />
            <twig:Resizable:Panel size="50">
                <div class="flex h-full items-center justify-center p-6 ">
                    <span class="text-sm font-medium">
                        Three
                    </span>
                </div>
            </twig:Resizable:Panel>
        </twig:Resizable>
    </twig:Resizable:Panel>
</twig:Resizable>
```

### Three Panels

Two pill handles between three panels.

```twig
<twig:Resizable class="h-52 max-w-xl rounded-lg border">
    <twig:Resizable:Panel size="25">
        <div class="flex h-full items-center justify-center p-6 ">
            <span class="text-sm font-medium">
                Sidebar
            </span>
        </div>
    </twig:Resizable:Panel>
    <twig:Resizable:Handle class="self-center! h-8! w-1.5! rounded-full! bg-border! transition-all duration-200 before:absolute before:-inset-x-1.5 before:-inset-y-2 before:content-[''] hover:h-12! hover:bg-primary! focus-visible:bg-primary! active:bg-primary!" />
    <twig:Resizable:Panel size="50">
        <div class="flex h-full items-center justify-center p-6 ">
            <span class="text-sm font-medium">
                Content
            </span>
        </div>
    </twig:Resizable:Panel>
    <twig:Resizable:Handle class="self-center! h-8! w-1.5! rounded-full! bg-border! transition-all duration-200 before:absolute before:-inset-x-1.5 before:-inset-y-2 before:content-[''] hover:h-12! hover:bg-primary! focus-visible:bg-primary! active:bg-primary!" />
    <twig:Resizable:Panel size="25">
        <div class="flex h-full items-center justify-center p-6 ">
            <span class="text-sm font-medium">
                Details
            </span>
        </div>
    </twig:Resizable:Panel>
</twig:Resizable>
```

### Editor Layout

A file list, an editor and a terminal: a vertical group nested in a horizontal one.

```twig
<twig:Resizable class="h-64 w-full max-w-2xl rounded-lg border">
    <twig:Resizable:Panel :size="25">
        <div class="flex h-full items-start p-3">
            <span class="text-sm font-semibold">Files</span>
        </div>
    </twig:Resizable:Panel>
    <twig:Resizable:Handle :withHandle="true" />
    <twig:Resizable:Panel :size="75">
        <twig:Resizable orientation="vertical">
            <twig:Resizable:Panel :size="70">
                <div class="flex h-full items-start p-3">
                    <span class="text-sm font-semibold">Editor</span>
                </div>
            </twig:Resizable:Panel>
            <twig:Resizable:Handle :withHandle="true" />
            <twig:Resizable:Panel :size="30">
                <div class="flex h-full items-start p-3">
                    <span class="text-sm font-semibold">Terminal</span>
                </div>
            </twig:Resizable:Panel>
        </twig:Resizable>
    </twig:Resizable:Panel>
</twig:Resizable>
```

### Preview Split

Source on one side, preview on the other.

```twig
<twig:Resizable class="h-56 w-full max-w-2xl rounded-lg border">
    <twig:Resizable:Panel :size="50">
        <div class="h-full bg-muted/40 p-3 font-mono text-xs">
            &lt;h1&gt;Hello&lt;/h1&gt;
        </div>
    </twig:Resizable:Panel>
    <twig:Resizable:Handle />
    <twig:Resizable:Panel :size="50">
        <div class="grid h-full place-items-center p-3">
            <h1 class="text-2xl font-semibold">Hello</h1>
        </div>
    </twig:Resizable:Panel>
</twig:Resizable>
```

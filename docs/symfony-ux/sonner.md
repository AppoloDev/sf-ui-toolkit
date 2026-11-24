# Sonner

## Examples

### Basic

A title and a description, set through `data-sonner-*-param` attributes on any element that fires `sonner#fire`.

```twig
<twig:Sonner>
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="Event created" data-sonner-description-param="Sunday, December 03, 2023 at 9:00 AM">
        Show toast
    </twig:Button>
</twig:Sonner>
```

### Action Button

`data-sonner-action-label-param` adds a button to the toast. With `data-sonner-action-url-param` it is a link, which is the server-side way to offer an action such as Undo.

```twig
<twig:Sonner closeButton="true">
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="File deleted" data-sonner-description-param="report.pdf was moved to the trash." data-sonner-action-label-param="Undo" data-sonner-action-url-param="#undo">
        Delete file
    </twig:Button>
</twig:Sonner>
```

### Positions

Each `Sonner` region has its own `position`. Fire one button at a time, or several to see how the regions are laid out.

<!-- height: 260 -->
```twig
<div class="grid grid-cols-3 gap-2">
    <twig:Sonner position="top-left">
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="Top left">
            Top left
        </twig:Button>
    </twig:Sonner>
    <twig:Sonner position="top-center">
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="Top center">
            Top center
        </twig:Button>
    </twig:Sonner>
    <twig:Sonner position="top-right">
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="Top right">
            Top right
        </twig:Button>
    </twig:Sonner>
    <twig:Sonner position="bottom-left">
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="Bottom left">
            Bottom left
        </twig:Button>
    </twig:Sonner>
    <twig:Sonner position="bottom-center">
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="Bottom center">
            Bottom center
        </twig:Button>
    </twig:Sonner>
    <twig:Sonner position="bottom-right">
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="Bottom right">
            Bottom right
        </twig:Button>
    </twig:Sonner>
</div>
```

### Invert

The `class` of `Sonner` lands on the list of toasts, so an arbitrary variant restyles every toast in it. Here they use the foreground color as their background.

```twig
<twig:Sonner class="[&_li]:border-transparent [&_li]:bg-foreground [&_li]:text-background [&_[data-slot=toast-description]]:text-background/70">
    <div class="flex flex-wrap gap-2">
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="success" data-sonner-title-param="Changes saved" data-sonner-description-param="Your profile was updated.">
            Success
        </twig:Button>
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="error" data-sonner-title-param="Could not save" data-sonner-description-param="Please try again later.">
            Error
        </twig:Button>
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="info" data-sonner-title-param="New version available" data-sonner-description-param="Reload the page to update.">
            Info
        </twig:Button>
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="warning" data-sonner-title-param="Storage almost full" data-sonner-description-param="You have used 90% of your space.">
            Warning
        </twig:Button>
    </div>
</twig:Sonner>
```

### Upload Progress

The description is rewritten on each tick, with the same `id`, until the upload ends.

```twig
<twig:Sonner>
    <twig:Button id="upload-start" variant="outline">
        Upload file
    </twig:Button>
</twig:Sonner>
<script>
    const notify = (detail) => window.dispatchEvent(new CustomEvent('sonner', { detail }));

    document.getElementById('upload-start').addEventListener('click', () => {
        let percent = 0;
        const timer = setInterval(() => {
            percent += 10;
            if (percent >= 100) {
                clearInterval(timer);
                notify({ id: 'upload', type: 'success', title: 'Upload complete', description: 'photo.jpg is ready.' });
                return;
            }
            notify({ id: 'upload', type: 'loading', title: 'Uploading photo.jpg', description: percent + '% done' });
        }, 400);
    });
</script>
```

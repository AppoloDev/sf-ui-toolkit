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

### Default Toast

```twig
<twig:Sonner>
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="default" data-sonner-title-param="Default toast" data-sonner-description-param="Something happened.">
        Default
    </twig:Button>
</twig:Sonner>
```

### Success Toast

```twig
<twig:Sonner>
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="success" data-sonner-title-param="Success toast" data-sonner-description-param="Your changes were saved.">
        Success
    </twig:Button>
</twig:Sonner>
```

### Error Toast

```twig
<twig:Sonner>
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="error" data-sonner-title-param="Error toast" data-sonner-description-param="The request failed.">
        Error
    </twig:Button>
</twig:Sonner>
```

### Warning Toast

```twig
<twig:Sonner>
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="warning" data-sonner-title-param="Warning toast" data-sonner-description-param="Storage is almost full.">
        Warning
    </twig:Button>
</twig:Sonner>
```

### Info Toast

```twig
<twig:Sonner>
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="info" data-sonner-title-param="Info toast" data-sonner-description-param="A new version is available.">
        Info
    </twig:Button>
</twig:Sonner>
```

### Loading Toast

A loading toast with a duration of 0 stays until it is replaced or closed.

```twig
<twig:Sonner>
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="loading" data-sonner-title-param="Loading data" data-sonner-duration-param="0">
        Start loading
    </twig:Button>
</twig:Sonner>
```

### Title Only

```twig
<twig:Sonner>
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="Saved">
        Show toast
    </twig:Button>
</twig:Sonner>
```

### Long Description

```twig
<twig:Sonner>
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="success" data-sonner-title-param="Backup complete" data-sonner-description-param="Your files were archived and uploaded. The archive contains 1,204 documents and 312 images. You can download it from the storage page at any time during the next 30 days.">
        Show toast
    </twig:Button>
</twig:Sonner>
```

### Custom Duration

```twig
<twig:Sonner>
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="Stays longer" data-sonner-description-param="This toast closes after 10 seconds." data-sonner-duration-param="10000">
        Show for 10 seconds
    </twig:Button>
</twig:Sonner>
```

### Persistent

```twig
<twig:Sonner closeButton="true">
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="Stays until dismissed" data-sonner-description-param="Close it with the close button." data-sonner-duration-param="0">
        Show persistent toast
    </twig:Button>
</twig:Sonner>
```

### Close Button

```twig
<twig:Sonner closeButton="true">
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="With a close button" data-sonner-description-param="Use the corner button to dismiss it.">
        Show toast
    </twig:Button>
</twig:Sonner>
```

### Rich Colors

```twig
<twig:Sonner richColors="true">
    <div class="flex flex-wrap gap-2">
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="success" data-sonner-title-param="Success message">
            Success
        </twig:Button>
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="error" data-sonner-title-param="Error message">
            Error
        </twig:Button>
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="warning" data-sonner-title-param="Warning message">
            Warning
        </twig:Button>
        <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-type-param="info" data-sonner-title-param="Info message">
            Info
        </twig:Button>
    </div>
</twig:Sonner>
```

### Expanded Stack

Toasts stay expanded instead of stacking.

```twig
<twig:Sonner expand="true" visibleToasts="5">
    <twig:Button variant="outline" id="sn-stack">
        Show three toasts
    </twig:Button>
</twig:Sonner>
<script>
    document.getElementById('sn-stack').addEventListener('click', () => {
        ['First', 'Second', 'Third'].forEach((title) => window.dispatchEvent(new CustomEvent('sonner', { detail: { title: title + ' toast' } })));
    });
</script>
```

### Stacked Toasts

Toasts stack and expand on hover.

```twig
<twig:Sonner>
    <twig:Button variant="outline" id="sn-stack2">
        Show three toasts
    </twig:Button>
</twig:Sonner>
<script>
    document.getElementById('sn-stack2').addEventListener('click', () => {
        ['First', 'Second', 'Third'].forEach((title) => window.dispatchEvent(new CustomEvent('sonner', { detail: { title: title + ' toast' } })));
    });
</script>
```

### Update In Place

Sending a toast with an existing `id` replaces it.

```twig
<twig:Sonner>
    <twig:Button variant="outline" id="sn-upd">
        Save document
    </twig:Button>
</twig:Sonner>
<script>
    const notifyUpd = (detail) => window.dispatchEvent(new CustomEvent('sonner', { detail }));
    document.getElementById('sn-upd').addEventListener('click', () => {
        notifyUpd({ id: 'doc', type: 'loading', title: 'Saving document', duration: 0 });
        setTimeout(() => notifyUpd({ id: 'doc', type: 'success', title: 'Document saved' }), 1500);
    });
</script>
```

### Promise Success

```twig
<twig:Sonner>
    <twig:Button variant="outline" id="sn-p1">
        Run task
    </twig:Button>
</twig:Sonner>
<script>
    document.getElementById('sn-p1').addEventListener('click', () => {
        const notify = (detail) => window.dispatchEvent(new CustomEvent('sonner', { detail }));
        notify({ id: 'sn-p1-t', type: 'loading', title: 'Loading...', duration: 0 });
        new Promise((resolve, reject) => setTimeout(() => resolve({ name: 'Report.pdf' }), 1500))
            .then((data) => notify({ id: 'sn-p1-t', type: 'success', title: 'Task finished' }))
            .catch((error) => notify({ id: 'sn-p1-t', type: 'error', title: 'Task failed' }));
    });
</script>
```

### Promise With Data

```twig
<twig:Sonner>
    <twig:Button variant="outline" id="sn-p2">
        Generate report
    </twig:Button>
</twig:Sonner>
<script>
    document.getElementById('sn-p2').addEventListener('click', () => {
        const notify = (detail) => window.dispatchEvent(new CustomEvent('sonner', { detail }));
        notify({ id: 'sn-p2-t', type: 'loading', title: 'Loading...', duration: 0 });
        new Promise((resolve, reject) => setTimeout(() => resolve({ name: 'Report.pdf' }), 1500))
            .then((data) => notify({ id: 'sn-p2-t', type: 'success', title: data.name + ' is ready', description: 'Generated just now.' }))
            .catch((error) => notify({ id: 'sn-p2-t', type: 'error', title: 'Task failed' }));
    });
</script>
```

### Promise Rejected

```twig
<twig:Sonner>
    <twig:Button variant="outline" id="sn-p3">
        Run failing task
    </twig:Button>
</twig:Sonner>
<script>
    document.getElementById('sn-p3').addEventListener('click', () => {
        const notify = (detail) => window.dispatchEvent(new CustomEvent('sonner', { detail }));
        notify({ id: 'sn-p3-t', type: 'loading', title: 'Loading...', duration: 0 });
        new Promise((resolve, reject) => setTimeout(() => reject(new Error('Network error')), 1500))
            .then((data) => notify({ id: 'sn-p3-t', type: 'success', title: 'Task finished' }))
            .catch((error) => notify({ id: 'sn-p3-t', type: 'error', title: error.message }));
    });
</script>
```

### Persistent Loading

```twig
<twig:Sonner>
    <twig:Button variant="outline" id="sn-pl">
        Start sync
    </twig:Button>
</twig:Sonner>
<script>
    document.getElementById('sn-pl').addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('sonner', { detail: { id: 'sync', type: 'loading', title: 'Syncing...', description: 'This can take a minute.', duration: 0 } }));
    });
</script>
```

### Dismiss Callback

The controller dispatches `sonner:dismiss` when a toast closes.

```twig
<twig:Sonner>
    <twig:Button variant="outline" data-action="click->sonner#fire" data-sonner-title-param="Close me" data-sonner-duration-param="3000">
        Show toast
    </twig:Button>
    <p id="sn-log" class="mt-2 text-sm text-muted-foreground">
        Waiting...
    </p>
</twig:Sonner>
<script>
    window.addEventListener('sonner:dismiss', () => {
        document.getElementById('sn-log').textContent = 'Toast dismissed';
    });
</script>
```

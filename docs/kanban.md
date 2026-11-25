# Kanban

> Board of columns with draggable cards, moved by pointer or keyboard, with the board carried by the form.

## Installation

- badge

## Usage

```twig
<twig:Kanban name="board">
    <twig:Kanban:Column value="todo" title="To do">
        <twig:Kanban:Card value="1">
            Write the docs
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="done" title="Done" />
</twig:Kanban>
```

## Examples

### Basic board

Drag a card onto another column, or focus it, press `Space`, move it with the arrow keys (`←` and `→` change column) and press `Space` again. With `name`, the board is submitted as `board[<column>][]`, in order.

<!-- height: 380 -->

```twig
<twig:Kanban name="board">
    <twig:Kanban:Column value="todo" title="To do">
        <twig:Kanban:Card value="1">
            Write the documentation
        </twig:Kanban:Card>
        <twig:Kanban:Card value="2">
            Review the pull request
        </twig:Kanban:Card>
        <twig:Kanban:Card value="3">
            Plan the release
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="doing" title="In progress">
        <twig:Kanban:Card value="4">
            Fix the login redirect
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="done" title="Done">
        <twig:Kanban:Card value="5">
            Set up the CI
        </twig:Kanban:Card>
    </twig:Kanban:Column>
</twig:Kanban>
```

### Rich cards

Cards hold any content, such as a progress bar or an assignee.

<!-- height: 380 -->

```twig
<twig:Kanban>
    <twig:Kanban:Column value="planned" title="Planned">
        <twig:Kanban:Card value="a" label="Single sign-on">
            <p class="font-medium">
                Single sign-on
            </p>
            <div class="mt-2 h-1.5 rounded-full bg-muted">
                <div class="h-full w-1/4 rounded-full bg-primary">
                </div>
            </div>
            <p class="mt-1.5 text-xs text-muted-foreground">
                25 %
            </p>
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="shipping" title="Shipping">
        <twig:Kanban:Card value="b" label="Audit log">
            <p class="font-medium">
                Audit log
            </p>
            <div class="mt-2 h-1.5 rounded-full bg-muted">
                <div class="h-full w-4/5 rounded-full bg-primary">
                </div>
            </div>
            <p class="mt-1.5 text-xs text-muted-foreground">
                80 %
            </p>
        </twig:Kanban:Card>
    </twig:Kanban:Column>
</twig:Kanban>
```

### Persisting and refusing moves

`kanban:commit` fires once per accepted drop with the whole board, to save it. `kanban:move` fires first and is cancelable: call `preventDefault()` to refuse the move, and the card goes back where it was.

<!-- height: 380 -->

```twig
<div class="grid gap-2">
    <twig:Kanban id="persisted">
        <twig:Kanban:Column value="open" title="Open">
            <twig:Kanban:Card value="1">
                Ticket 1
            </twig:Kanban:Card>
            <twig:Kanban:Card value="2">
                Ticket 2
            </twig:Kanban:Card>
        </twig:Kanban:Column>
        <twig:Kanban:Column value="closed" title="Closed (locked)" />
    </twig:Kanban>
    <p id="persisted-log" class="text-sm text-muted-foreground">
        Drag a card to Closed: the move is refused.
    </p>
</div>
<script>
    const board = document.getElementById('persisted');
    board.addEventListener('kanban:move', (event) => {
        if ('closed' === event.detail.to) {
            event.preventDefault();
            document.getElementById('persisted-log').textContent = 'Move to Closed refused.';
        }
    });
    board.addEventListener('kanban:commit', (event) => {
        document.getElementById('persisted-log').textContent = 'Saved: ' + JSON.stringify(event.detail.board);
    });
</script>
```

### Placeholder Overlay

With `placeholder`, the card stays where it is while you drag and a dashed placeholder shows where it will land. `overlayClass` styles the copy of the card that follows the pointer: here a tilt and a ring.

<!-- height: 380 -->

```twig
<twig:Kanban placeholder overlayClass="rotate-3 shadow-lg ring-2 ring-primary">
    <twig:Kanban:Column value="todo" title="To do">
        <twig:Kanban:Card value="1">
            Write the documentation
        </twig:Kanban:Card>
        <twig:Kanban:Card value="2">
            Review the pull request
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="doing" title="In progress">
        <twig:Kanban:Card value="3">
            Fix the login redirect
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="done" title="Done">
        <twig:Kanban:Card value="4">
            Set up the CI
        </twig:Kanban:Card>
    </twig:Kanban:Column>
</twig:Kanban>
```

### Dynamic Overlay

The placeholder text follows the column under the pointer (`{column}` is replaced as you move), and the overlay grows slightly.

<!-- height: 380 -->

```twig
<twig:Kanban placeholder placeholderLabel="Move to {column}" overlayClass="scale-105 shadow-xl">
    <twig:Kanban:Column value="todo" title="To do">
        <twig:Kanban:Card value="1">
            Write the documentation
        </twig:Kanban:Card>
        <twig:Kanban:Card value="2">
            Review the pull request
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="doing" title="In progress">
        <twig:Kanban:Card value="3">
            Fix the login redirect
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="done" title="Done">
        <twig:Kanban:Card value="4">
            Set up the CI
        </twig:Kanban:Card>
    </twig:Kanban:Column>
</twig:Kanban>
```

### Frame Columns

`variant="frame"`: each column is a muted frame holding a bordered panel for its cards, like a `Frame` with a `Frame:Panel`.

<!-- height: 380 -->

```twig
<twig:Kanban variant="frame">
    <twig:Kanban:Column value="todo" title="To do">
        <twig:Kanban:Card value="1">
            Write the documentation
        </twig:Kanban:Card>
        <twig:Kanban:Card value="2">
            Review the pull request
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="doing" title="In progress">
        <twig:Kanban:Card value="3">
            Fix the login redirect
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="done" title="Done">
        <twig:Kanban:Card value="4">
            Set up the CI
        </twig:Kanban:Card>
    </twig:Kanban:Column>
</twig:Kanban>
```

### Stacked Frame

`variant="stacked"` joins the columns into one block inside a single muted frame, like a stacked `Frame`.

<!-- height: 380 -->

```twig
<twig:Kanban variant="stacked">
    <twig:Kanban:Column value="todo" title="To do">
        <twig:Kanban:Card value="1">
            Write the documentation
        </twig:Kanban:Card>
        <twig:Kanban:Card value="2">
            Review the pull request
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="doing" title="In progress">
        <twig:Kanban:Card value="3">
            Fix the login redirect
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="done" title="Done">
        <twig:Kanban:Card value="4">
            Set up the CI
        </twig:Kanban:Card>
    </twig:Kanban:Column>
</twig:Kanban>
```

### Feature Roadmap

A roadmap in three columns: each card has a title, a badge for the area and the number of votes.

<!-- height: 420 -->

```twig
<twig:Kanban variant="frame" overlayClass="rotate-2 shadow-lg" placeholder>
    <twig:Kanban:Column value="now" title="Now">
        <twig:Kanban:Card value="f1" label="Dark mode" class="grid gap-2">
            <span class="font-medium">Dark mode</span>
            <span class="flex items-center justify-between">
                <twig:Badge variant="secondary">
                    Design
                </twig:Badge>
                <span class="flex items-center gap-1 text-xs text-muted-foreground">
                    <twig:ux:icon name="lucide:arrow-big-up" class="size-3.5" />
                    24
                </span>
            </span>
        </twig:Kanban:Card>
        <twig:Kanban:Card value="f2" label="CSV export" class="grid gap-2">
            <span class="font-medium">CSV export</span>
            <span class="flex items-center justify-between">
                <twig:Badge variant="secondary">
                    Data
                </twig:Badge>
                <span class="flex items-center gap-1 text-xs text-muted-foreground">
                    <twig:ux:icon name="lucide:arrow-big-up" class="size-3.5" />
                    18
                </span>
            </span>
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="next" title="Next">
        <twig:Kanban:Card value="f3" label="Public API" class="grid gap-2">
            <span class="font-medium">Public API</span>
            <span class="flex items-center justify-between">
                <twig:Badge variant="secondary">
                    Platform
                </twig:Badge>
                <span class="flex items-center gap-1 text-xs text-muted-foreground">
                    <twig:ux:icon name="lucide:arrow-big-up" class="size-3.5" />
                    41
                </span>
            </span>
        </twig:Kanban:Card>
        <twig:Kanban:Card value="f4" label="Saved views" class="grid gap-2">
            <span class="font-medium">Saved views</span>
            <span class="flex items-center justify-between">
                <twig:Badge variant="secondary">
                    Data
                </twig:Badge>
                <span class="flex items-center gap-1 text-xs text-muted-foreground">
                    <twig:ux:icon name="lucide:arrow-big-up" class="size-3.5" />
                    12
                </span>
            </span>
        </twig:Kanban:Card>
    </twig:Kanban:Column>
    <twig:Kanban:Column value="later" title="Later">
        <twig:Kanban:Card value="f5" label="Mobile app" class="grid gap-2">
            <span class="font-medium">Mobile app</span>
            <span class="flex items-center justify-between">
                <twig:Badge variant="secondary">
                    Platform
                </twig:Badge>
                <span class="flex items-center gap-1 text-xs text-muted-foreground">
                    <twig:ux:icon name="lucide:arrow-big-up" class="size-3.5" />
                    63
                </span>
            </span>
        </twig:Kanban:Card>
    </twig:Kanban:Column>
</twig:Kanban>
```

## Accessibility

- Cards are focusable list items. `Space` or `Enter` picks one up, the arrow keys move it (`↑` / `↓` in the column, `←` / `→` to the neighbor column), `Space` or `Enter` drops it and `Esc` restores the board.
- Each step is announced through a live region, with texts you can translate (`pickedUpLabel`, `movedLabel`, `droppedLabel`, `cancelledLabel`).
- Columns are sections named by their title, and cards sit in a `list`; the card count of each column is shown next to its title.
- Pointer dragging uses the HTML5 drag and drop API, which does not work with touch; the keyboard flow does.
- Events: `kanban:move` (cancelable, `detail.card`, `from`, `to`, `index`) and `kanban:commit` (`detail.board`).

## API

### `<twig:Kanban>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | string | `null` | When set, the board is submitted as hidden inputs `name[<column>][]` (card values in order). |
| `label` | string | `Board` | Accessible name of the board. |
| `variant` | `default`, `frame`, `stacked` | `default` | Muted columns, columns as bordered panels inside a muted frame, or one joined block. |
| `placeholder` | bool | `false` | Shows a dashed placeholder where the dragged card will land; the card stays in place until the drop. |
| `placeholderLabel` | string | `Drop here` | Text of the placeholder; `{column}` is replaced with the column under the pointer. |
| `overlayClass` | string | `''` | Classes of the copy of the card that follows the pointer while dragging (a tilt, a shadow). |
| `pickedUpLabel` | string | `{item} picked up from {column}, position {position} of {total}. Use the arrow keys to move it.` | Announced when a card is picked up. |
| `movedLabel` | string | `{item} moved to {column}, position {position} of {total}.` | Announced after each keyboard move. |
| `droppedLabel` | string | `{item} dropped in {column}, position {position} of {total}.` | Announced when the card is dropped. |
| `cancelledLabel` | string | `{item}: move cancelled.` | Announced when `Esc` cancels the move. |

`{item}`, `{column}`, `{position}` and `{total}` are replaced with the card name, the column title, and the position and size in that column.

| Block | Description |
|---|---|
| `default` | `Kanban:Column` elements. |

### `<twig:Kanban:Column>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | string | required | Identifier of the column, reported in events and in the submitted name. |
| `title` | string | required | Heading of the column. |

| Block | Description |
|---|---|
| `default` | `Kanban:Card` elements. |

### `<twig:Kanban:Card>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | string | required | Identifier of the card. |
| `label` | string | `null` | Spoken name of the card, defaults to its text. |

| Block | Description |
|---|---|
| `default` | The content of the card. |


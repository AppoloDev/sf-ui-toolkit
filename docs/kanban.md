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


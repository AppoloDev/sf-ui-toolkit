import { Controller } from '@hotwired/stimulus';

/*
 * Kanban board. Pointer: drag a card onto a column (HTML5 drag and drop). Keyboard: focus a card,
 * Space/Enter picks it up, arrows move it (Up/Down in the column, Left/Right to the neighbor column),
 * Space/Enter drops it, Escape restores the original board.
 *
 * Events: `kanban:move` (cancelable, once per drop: { card, from, to, index }; cancel it to refuse the move),
 * `kanban:commit` (once per accepted drop: { board } as { column: [card values] }).
 *
 * With `placeholder`, the card stays where it is while dragging and a dashed placeholder (text from `placeholderLabel`,
 * `{column}` replaced) shows where it will land. With `overlayClass`, the picture that follows the pointer is a copy of
 * the card with those classes (a tilt, a shadow...).
 */
export default class extends Controller {
    static targets = ['column', 'card'];
    static values = { name: String, pickedUpLabel: String, movedLabel: String, droppedLabel: String, cancelledLabel: String, placeholder: Boolean, placeholderLabel: { type: String, default: 'Drop here' }, overlayClass: String };

    connect() {
        this.live = document.createElement('div');
        this.live.className = 'sr-only';
        this.live.setAttribute('aria-live', 'assertive');
        this.element.appendChild(this.live);
        this.inputs = document.createElement('div');
        this.inputs.hidden = true;
        this.element.appendChild(this.inputs);
        this.picked = null;

        this.onDragStart = (event) => {
            const card = event.target.closest?.('[data-kanban-target="card"]');
            if (!card) return;
            this.dragged = card;
            this.snapshot = this.board();
            card.dataset.dragging = 'true';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', card.dataset.value);
            if (this.overlayClassValue) this.overlay(card, event);
        };
        this.onDragOver = (event) => {
            if (!this.dragged) return;
            const list = event.target.closest('[data-cards]');
            if (!list) return;
            event.preventDefault();
            this.element.querySelectorAll('[data-cards]').forEach((item) => { item.dataset.over = String(item === list); });
            const cards = [...list.querySelectorAll('[data-kanban-target="card"]')].filter((card) => card !== this.dragged);
            const next = cards.find((card) => event.clientY < card.getBoundingClientRect().top + card.getBoundingClientRect().height / 2);
            if (this.placeholderValue) {
                this.placeholderAt(list, next ?? null);

                return;
            }
            list.insertBefore(this.dragged, next ?? null);
        };
        this.onDrop = (event) => {
            if (!this.dragged || !this.ph?.parentNode) return;
            event.preventDefault();
            this.ph.parentNode.insertBefore(this.dragged, this.ph);
        };
        this.onDragEnd = () => {
            if (!this.dragged) return;
            delete this.dragged.dataset.dragging;
            this.ph?.remove();
            this.ph = null;
            this.element.querySelectorAll('[data-cards]').forEach((item) => { delete item.dataset.over; });
            const card = this.dragged;
            this.dragged = null;
            this.finish(card, this.snapshot);
        };
        this.onKeyDown = (event) => this.keyboard(event);
        this.element.addEventListener('dragstart', this.onDragStart);
        this.element.addEventListener('dragover', this.onDragOver);
        this.element.addEventListener('drop', this.onDrop);
        this.element.addEventListener('dragend', this.onDragEnd);
        this.element.addEventListener('keydown', this.onKeyDown);
        this.refresh();
    }

    disconnect() {
        this.element.removeEventListener('dragstart', this.onDragStart);
        this.element.removeEventListener('dragover', this.onDragOver);
        this.element.removeEventListener('drop', this.onDrop);
        this.element.removeEventListener('dragend', this.onDragEnd);
        this.element.removeEventListener('keydown', this.onKeyDown);
        this.live.remove();
        this.inputs.remove();
    }

    // The dashed placeholder that shows where a dragged card will land.
    placeholderAt(list, before) {
        if (!this.ph) {
            this.ph = document.createElement('div');
            this.ph.className = 'grid place-items-center rounded-lg border-2 border-dashed border-border bg-muted/40 text-xs text-muted-foreground';
            this.ph.style.height = `${this.dragged.getBoundingClientRect().height}px`;
            this.ph.setAttribute('aria-hidden', 'true');
        }
        const column = this.columnOf(list);
        this.ph.textContent = this.placeholderLabelValue.replaceAll('{column}', column.querySelector('[data-title] span')?.textContent ?? column.dataset.value);
        list.insertBefore(this.ph, before);
    }

    // The picture that follows the pointer: a copy of the card with the overlay classes.
    overlay(card, event) {
        const rect = card.getBoundingClientRect();
        const copy = card.cloneNode(true);
        copy.removeAttribute('data-kanban-target');
        delete copy.dataset.dragging;
        copy.className = `${card.className} ${this.overlayClassValue}`;
        copy.style.cssText = `position:fixed;top:-1000px;left:0;width:${rect.width}px;`;
        document.body.appendChild(copy);
        event.dataTransfer.setDragImage(copy, event.clientX - rect.left, event.clientY - rect.top);
        setTimeout(() => copy.remove());
    }

    // --- state ------------------------------------------------------------------------------

    cardsOf(column) {
        return [...column.querySelectorAll('[data-kanban-target="card"]')];
    }

    board() {
        return Object.fromEntries(this.columnTargets.map((column) => [column.dataset.value, this.cardsOf(column).map((card) => card.dataset.value)]));
    }

    columnOf(card) {
        return card.closest('[data-kanban-target="column"]');
    }

    restore(snapshot) {
        const cards = new Map(this.cardTargets.map((card) => [card.dataset.value, card]));
        this.columnTargets.forEach((column) => {
            const list = column.querySelector('[data-cards]');
            (snapshot[column.dataset.value] ?? []).forEach((value) => list.appendChild(cards.get(value)));
        });
    }

    refresh() {
        this.columnTargets.forEach((column) => {
            const count = column.querySelector('[data-count]');
            if (count) count.textContent = String(this.cardsOf(column).length);
        });
        if (!this.nameValue) return;
        this.inputs.replaceChildren(...this.columnTargets.flatMap((column) => this.cardsOf(column).map((card) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = `${this.nameValue}[${column.dataset.value}][]`;
            input.value = card.dataset.value;

            return input;
        })));
    }

    finish(card, snapshot) {
        const board = this.board();
        if (JSON.stringify(board) === JSON.stringify(snapshot)) return;
        const to = this.columnOf(card).dataset.value;
        const from = Object.keys(snapshot).find((key) => snapshot[key].includes(card.dataset.value));
        const event = this.dispatch('move', { detail: { card: card.dataset.value, from, to, index: board[to].indexOf(card.dataset.value) }, cancelable: true });
        if (event.defaultPrevented) {
            this.restore(snapshot);
            this.refresh();

            return;
        }
        this.refresh();
        this.dispatch('commit', { detail: { board } });
    }

    // --- keyboard ---------------------------------------------------------------------------

    keyboard(event) {
        const card = event.target.closest?.('[data-kanban-target="card"]');
        if (!card || event.target !== card) return;
        if (!this.picked) {
            if (['Enter', ' '].includes(event.key)) {
                event.preventDefault();
                this.picked = { card, snapshot: this.board() };
                card.dataset.picked = 'true';
                this.announce('pickedUp', card);
            }

            return;
        }
        if (card !== this.picked.card) return;
        if (['Enter', ' '].includes(event.key)) {
            event.preventDefault();
            delete card.dataset.picked;
            const { snapshot } = this.picked;
            this.picked = null;
            this.announce('dropped', card);
            this.finish(card, snapshot);
        } else if ('Escape' === event.key) {
            event.preventDefault();
            delete card.dataset.picked;
            this.restore(this.picked.snapshot);
            this.picked = null;
            this.refresh();
            this.announce('cancelled', card);
            card.focus();
        } else if (event.key.startsWith('Arrow')) {
            event.preventDefault();
            this.move(card, event.key);
        }
    }

    move(card, key) {
        const column = this.columnOf(card);
        const list = column.querySelector('[data-cards]');
        const cards = this.cardsOf(column);
        const index = cards.indexOf(card);
        if ('ArrowUp' === key && index > 0) list.insertBefore(card, cards[index - 1]);
        else if ('ArrowDown' === key && index < cards.length - 1) list.insertBefore(card, cards[index + 1].nextSibling);
        else if ('ArrowLeft' === key || 'ArrowRight' === key) {
            const columns = this.columnTargets;
            const target = columns[columns.indexOf(column) + ('ArrowLeft' === key ? -1 : 1)];
            if (!target) return;
            const targetCards = this.cardsOf(target);
            target.querySelector('[data-cards]').insertBefore(card, targetCards[Math.min(index, targetCards.length)] ?? null);
        } else {
            return;
        }
        card.focus();
        this.refresh();
        this.announce('moved', card);
    }

    announce(kind, card) {
        const column = this.columnOf(card);
        const template = this[`${kind}LabelValue`];
        const cards = this.cardsOf(column);
        const message = template
            .replaceAll('{item}', card.dataset.label || card.textContent.trim().replace(/\s+/g, ' '))
            .replaceAll('{column}', column.querySelector('[data-title] span')?.textContent ?? column.dataset.value)
            .replaceAll('{position}', cards.indexOf(card) + 1)
            .replaceAll('{total}', cards.length);
        this.live.textContent = '';
        requestAnimationFrame(() => { this.live.textContent = message; });
    }
}

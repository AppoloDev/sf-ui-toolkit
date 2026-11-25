import { Controller } from '@hotwired/stimulus';

/*
 * Reorderable list. Pointer: drag an item by its handle (HTML5 drag and drop).
 * Keyboard: on a handle, Space/Enter picks the item up, arrows move it, Space/Enter drops it,
 * Escape restores the original order. `sortable:change` fires once per drop with the new order.
 * Lists can be nested: each list only handles its own items. Any element with `data-sortable-position`
 * inside an item shows the position of the item (1-based) and follows every move.
 */
export default class extends Controller {
    static targets = ['item'];
    static values = {
        name: String,
        pickedUpLabel: String,
        movedLabel: String,
        droppedLabel: String,
        cancelledLabel: String,
    };

    connect() {
        this.live = document.createElement('div');
        this.live.className = 'sr-only';
        this.live.setAttribute('aria-live', 'assertive');
        this.element.appendChild(this.live);
        this.inputs = document.createElement('div');
        this.inputs.hidden = true;
        this.element.appendChild(this.inputs);

        this.onPointerDown = (event) => {
            const handle = event.target.closest('[data-sortable-handle]');
            const owner = handle?.closest('[data-sortable-target="item"]');
            if (owner && this.owns(owner)) owner.draggable = true;
        };
        this.onDragStart = (event) => {
            const item = event.target.closest?.('[data-sortable-target="item"]');
            if (!item || !this.owns(item) || !item.draggable) return;
            this.dragged = item;
            this.before = this.order();
            item.dataset.dragging = 'true';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', item.dataset.value);
        };
        this.onDragOver = (event) => {
            if (!this.dragged) return;
            event.preventDefault();
            // Over a nested list: use the item of this list that contains it.
            let over = event.target.closest('[data-sortable-target="item"]');
            while (over && !this.owns(over)) over = over.parentElement?.closest('[data-sortable-target="item"]');
            if (!over || over === this.dragged) return;
            const rect = over.getBoundingClientRect();
            const draggedRect = this.dragged.getBoundingClientRect();
            const sameRow = Math.abs(rect.top - draggedRect.top) < rect.height / 2;
            const after = sameRow ? event.clientX > rect.left + rect.width / 2 : event.clientY > rect.top + rect.height / 2;
            over.parentElement.insertBefore(this.dragged, after ? over.nextSibling : over);
            this.updatePositions();
        };
        this.onDragEnd = () => {
            if (!this.dragged) return;
            this.dragged.draggable = false;
            delete this.dragged.dataset.dragging;
            this.dragged = null;
            this.finish(this.before);
        };
        this.onKeyDown = (event) => this.keyboard(event);

        this.element.addEventListener('pointerdown', this.onPointerDown);
        this.element.addEventListener('dragstart', this.onDragStart);
        this.element.addEventListener('dragover', this.onDragOver);
        this.element.addEventListener('dragend', this.onDragEnd);
        this.element.addEventListener('keydown', this.onKeyDown);
        this.syncInputs();
        this.updatePositions();
    }

    disconnect() {
        this.element.removeEventListener('pointerdown', this.onPointerDown);
        this.element.removeEventListener('dragstart', this.onDragStart);
        this.element.removeEventListener('dragover', this.onDragOver);
        this.element.removeEventListener('dragend', this.onDragEnd);
        this.element.removeEventListener('keydown', this.onKeyDown);
    }

    keyboard(event) {
        const handle = event.target.closest('[data-sortable-handle]');
        if (!handle) return;
        const item = handle.closest('[data-sortable-target="item"]');
        if (!this.owns(item)) return;
        if ([' ', 'Enter'].includes(event.key)) {
            event.preventDefault();
            if (this.picked === item) {
                this.drop(handle, item);
            } else {
                this.picked = item;
                this.before = this.order();
                item.dataset.picked = 'true';
                handle.setAttribute('aria-pressed', 'true');
                this.announce(this.message(this.pickedUpLabelValue, item));
            }

            return;
        }
        if (this.picked !== item) return;
        if ('Escape' === event.key) {
            event.preventDefault();
            this.restore();
            this.release(handle, item);
            this.announce(this.message(this.cancelledLabelValue, item));

            return;
        }
        const previous = ['ArrowUp', 'ArrowLeft'].includes(event.key);
        const next = ['ArrowDown', 'ArrowRight'].includes(event.key);
        if (previous || next) {
            event.preventDefault();
            const sibling = previous ? item.previousElementSibling : item.nextElementSibling;
            if (sibling && sibling.matches('[data-sortable-target="item"]')) {
                item.parentElement.insertBefore(item, previous ? sibling : sibling.nextSibling);
                handle.focus();
                this.updatePositions();
                this.announce(this.message(this.movedLabelValue, item));
            }
        }
    }

    drop(handle, item) {
        this.release(handle, item);
        this.announce(this.message(this.droppedLabelValue, item));
        this.finish(this.before);
    }

    release(handle, item) {
        delete item.dataset.picked;
        handle.setAttribute('aria-pressed', 'false');
        this.picked = null;
    }

    restore() {
        this.before.forEach((value) => {
            const item = this.itemTargets.find((candidate) => candidate.dataset.value === value);
            item.parentElement.appendChild(item);
        });
        // Keep the live region and the hidden inputs after the items.
        this.element.appendChild(this.live);
        this.element.appendChild(this.inputs);
        this.syncInputs();
        this.updatePositions();
    }

    finish(before) {
        this.syncInputs();
        const order = this.order();
        if (order.join('\u0000') !== before.join('\u0000')) {
            this.dispatch('change', { detail: { order, previous: before } });
        }
    }

    owns(item) {
        return item.parentElement?.closest('[data-controller~="sortable"]') === this.element;
    }

    updatePositions() {
        this.itemTargets.forEach((item, index) => {
            item.querySelectorAll('[data-sortable-position]').forEach((node) => {
                if (this.owns(node.closest('[data-sortable-target="item"]'))) node.textContent = String(index + 1);
            });
        });
    }

    order() {
        return this.itemTargets.map((item) => item.dataset.value);
    }

    position(item) {
        return this.itemTargets.indexOf(item) + 1;
    }

    nameOf(item) {
        return item.dataset.label ?? item.textContent.trim().replace(/\s+/g, ' ');
    }

    message(template, item) {
        return template
            .replaceAll('{item}', this.nameOf(item))
            .replaceAll('{position}', this.position(item))
            .replaceAll('{total}', this.itemTargets.length);
    }

    announce(message) {
        this.live.textContent = '';
        requestAnimationFrame(() => { this.live.textContent = message; });
    }

    syncInputs() {
        this.inputs.innerHTML = '';
        if (!this.hasNameValue || '' === this.nameValue) return;
        this.order().forEach((value) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = `${this.nameValue}[]`;
            input.value = value;
            this.inputs.appendChild(input);
        });
    }
}

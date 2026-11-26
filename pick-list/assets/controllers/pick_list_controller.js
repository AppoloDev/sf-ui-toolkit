import { Controller } from '@hotwired/stimulus';

/**
 * Two lists to move items between.
 *
 * Click toggles an item, Shift+click selects a range, double-click moves one, arrows and Home/End move the active
 * item, Space toggles it, Enter moves the selection to the other list.
 *
 * @target source  The available list.
 * @target target  The chosen list.
 * @target values  Where the hidden inputs are written.
 * @value  name  The name of the hidden inputs (`name[]`).
 * @event  pick-list:change  `detail.values` (the chosen values, in order) and `detail.moved`.
 */
export default class extends Controller {
    static targets = ['source', 'target', 'values'];
    static values = { name: String };

    connect() {
        this.anchors = new Map();
        this.write(false);
    }

    items(list) {
        return [...list.querySelectorAll('[role="option"]')];
    }

    selected(list) {
        return this.items(list).filter((item) => item.getAttribute('aria-selected') === 'true' && item.getAttribute('aria-disabled') !== 'true');
    }

    other(list) {
        return list === this.sourceTarget ? this.targetTarget : this.sourceTarget;
    }

    mark(item, on) {
        if (item.getAttribute('aria-disabled') !== 'true') item.setAttribute('aria-selected', String(on));
    }

    activate(list, item) {
        this.items(list).forEach((other) => other.removeAttribute('data-active'));
        if (item) {
            item.dataset.active = '';
            list.setAttribute('aria-activedescendant', item.id || (item.id = `pl-${Math.random().toString(36).slice(2, 8)}`));
            item.scrollIntoView({ block: 'nearest' });
        }
    }

    click(event) {
        const item = event.target.closest('[role="option"]');
        const list = event.currentTarget;
        if (!item) return;
        const all = this.items(list);
        if (event.shiftKey && this.anchors.get(list)) {
            const [a, b] = [all.indexOf(this.anchors.get(list)), all.indexOf(item)].sort((x, y) => x - y);
            all.forEach((other, index) => this.mark(other, index >= a && index <= b));
        } else {
            this.mark(item, item.getAttribute('aria-selected') !== 'true');
            this.anchors.set(list, item);
        }
        this.activate(list, item);
    }

    doubleClick(event) {
        const item = event.target.closest('[role="option"]');
        if (!item || item.getAttribute('aria-disabled') === 'true') return;
        this.move([item], this.other(event.currentTarget));
    }

    keydown(event) {
        const list = event.currentTarget;
        const all = this.items(list);
        const current = all.findIndex((item) => 'active' in item.dataset);
        let next = null;
        if (event.key === 'ArrowDown') next = Math.min(all.length - 1, current + 1);
        else if (event.key === 'ArrowUp') next = Math.max(0, current - 1);
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = all.length - 1;
        else if (event.key === ' ' && all[current]) {
            this.mark(all[current], all[current].getAttribute('aria-selected') !== 'true');
            event.preventDefault();
            return;
        } else if (event.key === 'Enter') {
            const chosen = this.selected(list);
            if (chosen.length) this.move(chosen, this.other(list));
            event.preventDefault();
            return;
        } else return;
        event.preventDefault();
        if (next !== null && all[next]) {
            if (event.shiftKey) this.mark(all[next], true);
            this.activate(list, all[next]);
        }
    }

    moveRight() {
        this.move(this.selected(this.sourceTarget), this.targetTarget);
    }

    moveAllRight() {
        this.move(this.items(this.sourceTarget).filter((item) => item.getAttribute('aria-disabled') !== 'true'), this.targetTarget);
    }

    moveLeft() {
        this.move(this.selected(this.targetTarget), this.sourceTarget);
    }

    moveAllLeft() {
        this.move(this.items(this.targetTarget).filter((item) => item.getAttribute('aria-disabled') !== 'true'), this.sourceTarget);
    }

    moveUp() {
        const chosen = this.selected(this.targetTarget);
        chosen.forEach((item) => {
            const previous = item.previousElementSibling;
            if (previous && previous.getAttribute('aria-selected') !== 'true') previous.before(item);
        });
        this.write(true, chosen);
    }

    moveDown() {
        const chosen = this.selected(this.targetTarget).reverse();
        chosen.forEach((item) => {
            const next = item.nextElementSibling;
            if (next && next.getAttribute('aria-selected') !== 'true') next.after(item);
        });
        this.write(true, chosen);
    }

    move(items, to) {
        if (items.length === 0) return;
        items.forEach((item) => {
            item.setAttribute('aria-selected', 'false');
            item.removeAttribute('data-active');
            to.append(item);
        });
        this.write(true, items);
    }

    write(notify, moved = []) {
        const values = this.items(this.targetTarget).map((item) => item.dataset.value);
        this.valuesTarget.replaceChildren();
        if (this.nameValue) {
            values.forEach((value) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = `${this.nameValue}[]`;
                input.value = value;
                this.valuesTarget.append(input);
            });
        }
        if (notify) this.dispatch('change', { detail: { values, moved: moved.map((item) => item.dataset.value) } });
    }
}

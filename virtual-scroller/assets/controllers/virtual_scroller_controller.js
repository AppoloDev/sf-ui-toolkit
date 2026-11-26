import { Controller } from '@hotwired/stimulus';

const escapeHtml = (text) => String(text).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

/**
 * Keeps only the items in view in the DOM. Items are absolutely positioned in a content box that has the size of
 * the whole list, so the scrollbar is the real one.
 *
 * @target viewport  The scrolling area.
 * @target content   The box that has the total size.
 * @target template  The markup of one item: {index}, {item}, the keys of an object item, {row} and {column} in a grid.
 * @target loader    The markup of an item that is not loaded yet (lazy mode).
 * @value  items, count, orientation, itemHeight, itemWidth, columns, overscan, lazy
 * @action scrollTo  Scrolls to `data-virtual-scroller-index-param` (an item, or a row in a grid).
 * @event  virtual-scroller:load    Lazy mode: items are missing, with `detail.first`, `detail.last` and
 *                                  `detail.provide(first, items)` to give them (now or later).
 * @event  virtual-scroller:scroll  Every scroll step, with `detail.first` and `detail.last` (visible range).
 */
export default class extends Controller {
    static targets = ['viewport', 'content', 'template', 'loader'];
    static values = {
        items: Array,
        count: Number,
        orientation: { type: String, default: 'vertical' },
        itemHeight: { type: Number, default: 40 },
        itemWidth: { type: Number, default: 160 },
        columns: Number,
        overscan: { type: Number, default: 3 },
        lazy: Boolean,
    };

    connect() {
        this.nodes = new Map();
        this.loaded = new Map();
        this.requested = new Set();
        this.viewportTarget.addEventListener('scroll', this.schedule, { passive: true });
        this.observer = new ResizeObserver(this.schedule);
        this.observer.observe(this.viewportTarget);
        this.layout();
        this.render();
    }

    disconnect() {
        this.viewportTarget.removeEventListener('scroll', this.schedule);
        this.observer.disconnect();
        cancelAnimationFrame(this.frame);
    }

    get total() {
        return this.itemsValue.length > 0 ? this.itemsValue.length : this.countValue;
    }

    get grid() {
        return this.orientationValue === 'both';
    }

    layout() {
        const { itemWidth, itemHeight } = { itemWidth: this.itemWidthValue, itemHeight: this.itemHeightValue };
        const total = this.total;
        const width = this.grid ? this.columnsValue * itemWidth : this.orientationValue === 'horizontal' ? total * itemWidth : null;
        const height = this.grid || this.orientationValue === 'vertical' ? total * itemHeight : itemHeight;
        this.contentTarget.style.height = `${height}px`;
        this.contentTarget.style.width = width === null ? '100%' : `${width}px`;
    }

    schedule = () => {
        cancelAnimationFrame(this.frame);
        this.frame = requestAnimationFrame(() => this.render());
    };

    scrollTo(event) {
        const index = Number(event.params.index ?? 0);
        const viewport = this.viewportTarget;
        if (this.orientationValue === 'horizontal') {
            viewport.scrollLeft = index * this.itemWidthValue;
        } else {
            viewport.scrollTop = index * this.itemHeightValue;
        }
    }

    /** The range of rows (vertical, grid) or items (horizontal) to draw, with the overscan. */
    range(position, size, length, itemSize) {
        const first = Math.max(0, Math.floor(position / itemSize) - this.overscanValue);
        const last = Math.min(length - 1, Math.ceil((position + size) / itemSize) + this.overscanValue);
        return [first, last];
    }

    render() {
        const viewport = this.viewportTarget;
        const total = this.total;
        const wanted = new Set();
        const missing = [];
        const add = (key, build) => {
            wanted.add(key);
            if (!this.nodes.has(key) || this.nodes.get(key).dataset.state !== build.state) {
                this.nodes.get(key)?.remove();
                const node = build.make();
                node.dataset.state = build.state;
                this.nodes.set(key, node);
                this.contentTarget.append(node);
            }
        };
        let visible;
        if (this.grid) {
            const [firstRow, lastRow] = this.range(viewport.scrollTop, viewport.clientHeight, total, this.itemHeightValue);
            const [firstColumn, lastColumn] = this.range(viewport.scrollLeft, viewport.clientWidth, this.columnsValue, this.itemWidthValue);
            for (let row = firstRow; row <= lastRow; row++) {
                for (let column = firstColumn; column <= lastColumn; column++) {
                    add(`${row}:${column}`, this.cell(row, column));
                }
            }
            visible = [firstRow, lastRow];
        } else {
            const horizontal = this.orientationValue === 'horizontal';
            const [first, last] = horizontal
                ? this.range(viewport.scrollLeft, viewport.clientWidth, total, this.itemWidthValue)
                : this.range(viewport.scrollTop, viewport.clientHeight, total, this.itemHeightValue);
            for (let index = first; index <= last; index++) {
                const item = this.itemAt(index);
                if (item === undefined) {
                    missing.push(index);
                }
                add(String(index), this.row(index, item));
            }
            visible = [first, last];
        }
        for (const [key, node] of this.nodes) {
            if (!wanted.has(key)) {
                node.remove();
                this.nodes.delete(key);
            }
        }
        this.dispatch('scroll', { detail: { first: visible[0], last: visible[1] } });
        if (this.lazyValue && missing.length > 0) {
            this.load(missing[0], missing[missing.length - 1]);
        }
    }

    itemAt(index) {
        if (this.lazyValue) {
            return this.loaded.get(index);
        }
        return this.itemsValue.length > 0 ? this.itemsValue[index] : index + 1;
    }

    fill(html, values) {
        return html.replace(/\{(\w+)\}/g, (match, name) => (name in values ? escapeHtml(values[name]) : match));
    }

    values(index, item) {
        const base = { index, number: index + 1 };
        return item !== null && typeof item === 'object' ? { ...base, ...item } : { ...base, item };
    }

    row(index, item) {
        const loading = item === undefined;
        const template = loading && this.hasLoaderTarget ? this.loaderTarget : this.templateTarget;
        const html = this.fill(template.innerHTML, this.values(index, loading ? '' : item));
        const horizontal = this.orientationValue === 'horizontal';
        return {
            state: loading ? 'loading' : 'ready',
            make: () => {
                const node = document.createElement('div');
                node.setAttribute('role', 'listitem');
                node.setAttribute('aria-posinset', String(index + 1));
                node.setAttribute('aria-setsize', String(this.total));
                if (loading) {
                    node.setAttribute('aria-busy', 'true');
                }
                node.style.cssText = horizontal
                    ? `position:absolute;top:0;left:${index * this.itemWidthValue}px;width:${this.itemWidthValue}px;height:${this.itemHeightValue}px`
                    : `position:absolute;left:0;right:0;top:${index * this.itemHeightValue}px;height:${this.itemHeightValue}px`;
                node.innerHTML = html;
                return node;
            },
        };
    }

    cell(row, column) {
        const html = this.fill(this.templateTarget.innerHTML, { index: row * this.columnsValue + column, row, column });
        return {
            state: 'ready',
            make: () => {
                const node = document.createElement('div');
                node.setAttribute('role', 'listitem');
                node.style.cssText = `position:absolute;top:${row * this.itemHeightValue}px;left:${column * this.itemWidthValue}px;width:${this.itemWidthValue}px;height:${this.itemHeightValue}px`;
                node.innerHTML = html;
                return node;
            },
        };
    }

    load(first, last) {
        const key = `${first}:${last}`;
        if (this.requested.has(key)) {
            return;
        }
        this.requested.add(key);
        const provide = (start, items) => {
            items.forEach((item, offset) => this.loaded.set(start + offset, item));
            this.requested.delete(key);
            this.render();
        };
        this.dispatch('load', { detail: { first, last, provide } });
    }
}

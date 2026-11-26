import { Controller } from '@hotwired/stimulus';

/**
 * Opens an image in a viewer (a native modal dialog): zoom with the buttons, the wheel or a click, drag to move,
 * arrows to browse the images of the same `group`, Escape to close.
 *
 * @value full, alt, group, caption, closeLabel, zoomInLabel, zoomOutLabel, previousLabel, nextLabel
 * @event image-zoom:open, image-zoom:close
 */
export default class extends Controller {
    static values = { full: String, alt: String, group: String, caption: String, closeLabel: String, zoomInLabel: String, zoomOutLabel: String, previousLabel: String, nextLabel: String };

    open() {
        this.members = this.groupValue
            ? [...document.querySelectorAll('[data-controller~="image-zoom"]')].filter((el) => el.getAttribute('data-image-zoom-group-value') === this.groupValue)
            : [this.element];
        this.index = Math.max(0, this.members.indexOf(this.element));
        this.scale = 1;
        this.x = 0;
        this.y = 0;
        this.build();
        this.show();
        this.dialog.showModal();
        this.dialog.querySelector('[data-close]').focus();
        this.dispatch('open');
    }

    build() {
        const btn = 'inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white outline-none hover:bg-white/20 focus-visible:ring-[3px] focus-visible:ring-white/60';
        const dialog = document.createElement('dialog');
        dialog.className = 'fixed inset-0 m-0 size-full max-h-none max-w-none bg-black/90 p-0 text-white backdrop:bg-transparent';
        dialog.setAttribute('aria-label', this.altValue || 'Image');
        dialog.innerHTML = `
            <div class="flex size-full flex-col">
                <div class="flex items-center justify-end gap-2 p-3">
                    <button type="button" data-out class="${btn}"></button>
                    <button type="button" data-in class="${btn}"></button>
                    <button type="button" data-close class="${btn}"></button>
                </div>
                <div data-stage class="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
                    <button type="button" data-prev class="${btn} absolute left-3 z-10"></button>
                    <img data-image alt="" class="max-h-full max-w-full cursor-zoom-in select-none object-contain" draggable="false">
                    <button type="button" data-next class="${btn} absolute right-3 z-10"></button>
                </div>
                <p data-caption class="p-3 text-center text-sm text-white/80"></p>
            </div>`;
        const icons = { out: '−', in: '+', close: '×', prev: '‹', next: '›' };
        const labels = { out: this.zoomOutLabelValue, in: this.zoomInLabelValue, close: this.closeLabelValue, prev: this.previousLabelValue, next: this.nextLabelValue };
        Object.entries(icons).forEach(([key, glyph]) => {
            const button = dialog.querySelector(`[data-${key}]`);
            button.textContent = glyph;
            button.setAttribute('aria-label', labels[key]);
            button.classList.add('text-xl', 'leading-none');
        });
        dialog.addEventListener('click', (event) => {
            if (event.target.closest('[data-close]') || event.target === dialog) dialog.close();
            else if (event.target.closest('[data-in]')) this.zoom(0.5);
            else if (event.target.closest('[data-out]')) this.zoom(-0.5);
            else if (event.target.closest('[data-prev]')) this.go(-1);
            else if (event.target.closest('[data-next]')) this.go(1);
            else if (event.target.matches('[data-image]') && !this.dragged) this.scale === 1 ? this.zoom(1) : this.reset();
        });
        dialog.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') this.go(-1);
            else if (event.key === 'ArrowRight') this.go(1);
            else if (event.key === '+' || event.key === '=') this.zoom(0.5);
            else if (event.key === '-') this.zoom(-0.5);
        });
        dialog.addEventListener('wheel', (event) => {
            event.preventDefault();
            this.zoom(event.deltaY < 0 ? 0.25 : -0.25);
        }, { passive: false });
        dialog.addEventListener('pointerdown', (event) => {
            if (!event.target.matches('[data-image]') || this.scale === 1) return;
            this.dragged = false;
            const from = { x: event.clientX - this.x, y: event.clientY - this.y };
            const move = (moveEvent) => {
                this.dragged = true;
                this.x = moveEvent.clientX - from.x;
                this.y = moveEvent.clientY - from.y;
                this.apply();
            };
            const up = () => {
                window.removeEventListener('pointermove', move);
                window.removeEventListener('pointerup', up);
                setTimeout(() => (this.dragged = false));
            };
            window.addEventListener('pointermove', move);
            window.addEventListener('pointerup', up);
        });
        dialog.addEventListener('close', () => {
            dialog.remove();
            this.element.focus();
            this.dispatch('close');
        });
        document.body.append(dialog);
        this.dialog = dialog;
    }

    show() {
        const el = this.members[this.index];
        const image = this.dialog.querySelector('[data-image]');
        image.src = el.getAttribute('data-image-zoom-full-value');
        image.alt = el.getAttribute('data-image-zoom-alt-value') || '';
        this.dialog.querySelector('[data-caption]').textContent = el.getAttribute('data-image-zoom-caption-value') || '';
        this.dialog.querySelector('[data-prev]').hidden = this.members.length < 2;
        this.dialog.querySelector('[data-next]').hidden = this.members.length < 2;
        this.reset();
    }

    go(step) {
        this.index = (this.index + step + this.members.length) % this.members.length;
        this.show();
    }

    zoom(delta) {
        this.scale = Math.min(5, Math.max(1, this.scale + delta));
        if (this.scale === 1) {
            this.x = 0;
            this.y = 0;
        }
        this.apply();
    }

    reset() {
        this.scale = 1;
        this.x = 0;
        this.y = 0;
        this.apply();
    }

    apply() {
        const image = this.dialog.querySelector('[data-image]');
        image.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
        image.classList.toggle('cursor-zoom-in', this.scale === 1);
        image.classList.toggle('cursor-grab', this.scale > 1);
    }
}

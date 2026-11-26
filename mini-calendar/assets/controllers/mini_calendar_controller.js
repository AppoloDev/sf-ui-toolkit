import { Controller } from '@hotwired/stimulus';

const pad = (number) => String(number).padStart(2, '0');
const toIso = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const fromIso = (iso) => {
    const [year, month, day] = iso.split('-').map(Number);
    return new Date(year, month - 1, day);
};
const addDays = (iso, count) => {
    const date = fromIso(iso);
    date.setDate(date.getDate() + count);
    return toIso(date);
};

/**
 * A strip of consecutive days. It draws buttons into the `days` target, pages by as many days as it shows and keeps
 * the selected date in `value`.
 *
 * @target days   Where the day buttons are drawn.
 * @target month  Optional: the month and the year of the strip.
 * @target input  Optional hidden field that carries the value to a form.
 * @value  value, days, min, max, locale, events (a map of dates to counts), eventsLabel ({count})
 * @action previous / next  Move the strip by `days` days.
 * @event  mini-calendar:select  A day was chosen: `detail.value` (`YYYY-MM-DD`).
 * @event  mini-calendar:page    The strip moved: `detail.start` (its first day).
 */
export default class extends Controller {
    static targets = ['days', 'month', 'input'];
    static values = {
        value: String,
        days: { type: Number, default: 5 },
        min: String,
        max: String,
        locale: { type: String, default: 'en' },
        events: Object,
        eventsLabel: { type: String, default: '{count} events' },
    };

    connect() {
        this.today = toIso(new Date());
        this.start = addDays(this.hasValueValue && this.valueValue ? this.valueValue : this.today, -Math.floor(this.daysValue / 2));
        this.draw();
    }

    valueValueChanged() {
        if (this.start === undefined) {
            return;
        }
        const last = addDays(this.start, this.daysValue - 1);
        if (this.valueValue && (this.valueValue < this.start || this.valueValue > last)) {
            this.start = addDays(this.valueValue, -Math.floor(this.daysValue / 2));
        }
        this.draw();
    }

    eventsValueChanged() {
        if (this.start !== undefined) {
            this.draw();
        }
    }

    previous() {
        this.page(-this.daysValue);
    }

    next() {
        this.page(this.daysValue);
    }

    page(days) {
        this.start = addDays(this.start, days);
        this.draw();
        this.dispatch('page', { detail: { start: this.start } });
    }

    select(event) {
        const iso = event.currentTarget.dataset.date;
        this.valueValue = iso;
        if (this.hasInputTarget) {
            this.inputTarget.value = iso;
        }
        this.dispatch('select', { detail: { value: iso } });
    }

    keydown(event) {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) {
            return;
        }
        event.preventDefault();
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        const buttons = [...this.daysTarget.querySelectorAll('button')];
        const index = buttons.indexOf(document.activeElement);
        const target = buttons[index + direction];
        if (target) {
            target.focus();
            return;
        }
        this.page(direction * this.daysValue);
        const fresh = this.daysTarget.querySelectorAll('button');
        fresh[direction === 1 ? 0 : fresh.length - 1].focus();
    }

    draw() {
        const formatter = (options) => new Intl.DateTimeFormat(this.localeValue, options);
        const weekday = formatter({ weekday: 'short' });
        const full = formatter({ dateStyle: 'full' });
        const focused = this.daysTarget.contains(document.activeElement) ? document.activeElement.dataset.date : null;
        this.daysTarget.replaceChildren();
        for (let offset = 0; offset < this.daysValue; offset++) {
            const iso = addDays(this.start, offset);
            const date = fromIso(iso);
            const disabled = (this.minValue && iso < this.minValue) || (this.maxValue && iso > this.maxValue);
            const count = Number(this.eventsValue[iso] ?? 0);
            const button = document.createElement('button');
            button.type = 'button';
            button.dataset.date = iso;
            button.disabled = Boolean(disabled);
            button.setAttribute('aria-pressed', String(iso === this.valueValue));
            if (iso === this.today) {
                button.setAttribute('aria-current', 'date');
            }
            button.setAttribute('aria-label', full.format(date) + (count > 0 ? `, ${this.eventsLabelValue.replace('{count}', String(count))}` : ''));
            button.className = 'relative flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-xs outline-none transition-colors hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-40 aria-pressed:bg-primary aria-pressed:text-primary-foreground aria-pressed:hover:bg-primary/90';
            button.innerHTML = `<span class="text-[11px] uppercase opacity-70"></span><span class="text-base font-semibold leading-none tabular-nums"></span><span class="mt-0.5 size-1 rounded-full bg-primary opacity-0 aria-[current=date]:opacity-100" data-today></span>`;
            button.children[0].textContent = weekday.format(date);
            button.children[1].textContent = String(date.getDate());
            if (iso === this.today) {
                button.children[2].style.opacity = '1';
            }
            if (count > 0) {
                const badge = document.createElement('span');
                badge.setAttribute('aria-hidden', 'true');
                badge.className = 'absolute -top-1 -right-0.5 grid min-w-4 place-items-center rounded-full bg-destructive px-1 text-[10px] leading-4 font-semibold text-white';
                badge.textContent = String(count);
                button.append(badge);
            }
            button.addEventListener('click', (event) => this.select(event));
            button.addEventListener('keydown', (event) => this.keydown(event));
            this.daysTarget.append(button);
            if (focused === iso) {
                button.focus();
            }
        }
        if (this.hasMonthTarget) {
            const first = fromIso(this.start);
            const last = fromIso(addDays(this.start, this.daysValue - 1));
            const month = formatter({ month: 'long', year: 'numeric' });
            this.monthTarget.textContent = first.getMonth() === last.getMonth() ? month.format(first) : `${formatter({ month: 'short' }).format(first)} – ${month.format(last)}`;
        }
    }
}

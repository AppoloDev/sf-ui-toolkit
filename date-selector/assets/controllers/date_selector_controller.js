import { Controller } from '@hotwired/stimulus';

const pad = (n) => String(n).padStart(2, '0');
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parse = (s) => {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
};
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

/**
 * One control for a day, a week, a month, a year or a custom period.
 *
 * @target text, previous, next, navigation, range, from, to, mode, values
 * @value  mode, date, end, weekStart, locale, name, min, max
 * @event  date-selector:change  `detail.mode`, `detail.start`, `detail.end` (`YYYY-MM-DD`).
 */
export default class extends Controller {
    static targets = ['text', 'previous', 'next', 'navigation', 'range', 'from', 'to', 'mode', 'values'];
    static values = { mode: { type: String, default: 'month' }, date: String, end: String, weekStart: { type: Number, default: 1 }, locale: { type: String, default: 'en' }, name: String, min: String, max: String };

    connect() {
        this.cursor = this.dateValue ? parse(this.dateValue) : new Date();
        this.cursor = new Date(this.cursor.getFullYear(), this.cursor.getMonth(), this.cursor.getDate());
        this.last = this.endValue ? parse(this.endValue) : addDays(this.cursor, 6);
        this.render(false);
    }

    get period() {
        const c = this.cursor;
        switch (this.modeValue) {
            case 'day':
                return [c, c];
            case 'week': {
                const start = addDays(c, -((c.getDay() - this.weekStartValue + 7) % 7));
                return [start, addDays(start, 6)];
            }
            case 'year':
                return [new Date(c.getFullYear(), 0, 1), new Date(c.getFullYear(), 11, 31)];
            case 'range':
                return [c, this.last < c ? c : this.last];
            default:
                return [new Date(c.getFullYear(), c.getMonth(), 1), new Date(c.getFullYear(), c.getMonth() + 1, 0)];
        }
    }

    previous() {
        this.shift(-1);
    }

    next() {
        this.shift(1);
    }

    today() {
        const now = new Date();
        this.cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        this.render(true);
    }

    setMode(event) {
        this.modeValue = event.params.mode;
        this.render(true);
    }

    edit() {
        if (this.fromTarget.value) this.cursor = parse(this.fromTarget.value);
        if (this.toTarget.value) this.last = parse(this.toTarget.value);
        this.render(true, true);
    }

    shift(direction) {
        const c = this.cursor;
        const mode = this.modeValue;
        if (mode === 'day') this.cursor = addDays(c, direction);
        else if (mode === 'week') this.cursor = addDays(c, 7 * direction);
        else if (mode === 'year') this.cursor = new Date(c.getFullYear() + direction, c.getMonth(), Math.min(c.getDate(), 28));
        else if (mode === 'range') {
            const length = Math.round((this.last - c) / 86400000) + 1;
            this.cursor = addDays(c, length * direction);
            this.last = addDays(this.last, length * direction);
        } else this.cursor = new Date(c.getFullYear(), c.getMonth() + direction, 1);
        this.render(true);
    }

    label([start, end]) {
        const fmt = (options) => new Intl.DateTimeFormat(this.localeValue, options);
        switch (this.modeValue) {
            case 'day':
                return fmt({ dateStyle: 'full' }).format(start);
            case 'week': {
                const short = fmt({ month: 'short', day: 'numeric' });
                return `${short.format(start)} – ${short.format(end)}, ${end.getFullYear()}`;
            }
            case 'year':
                return String(start.getFullYear());
            default:
                return fmt({ month: 'long', year: 'numeric' }).format(start);
        }
    }

    render(notify, keepFields = false) {
        const period = this.period;
        const [start, end] = period;
        const range = this.modeValue === 'range';
        this.rangeTarget.hidden = !range;
        this.textTarget.hidden = range;
        this.textTarget.textContent = range ? '' : this.label(period);
        if (range && !keepFields) {
            this.fromTarget.value = iso(start);
            this.toTarget.value = iso(end);
        }
        this.previousTarget.disabled = !!this.minValue && iso(start) <= this.minValue;
        this.nextTarget.disabled = !!this.maxValue && iso(end) >= this.maxValue;
        this.modeTargets.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.dateSelectorModeParam === this.modeValue)));
        this.valuesTarget.replaceChildren();
        if (this.nameValue) {
            [['start', start], ['end', end]].forEach(([key, date]) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = `${this.nameValue}_${key}`;
                input.value = iso(date);
                this.valuesTarget.append(input);
            });
        }
        if (notify) this.dispatch('change', { detail: { mode: this.modeValue, start: iso(start), end: iso(end) } });
    }
}

import { Controller } from '@hotwired/stimulus';

const UNITS = [
    ['year', 31536000],
    ['month', 2592000],
    ['week', 604800],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1],
];

/**
 * Writes a date as a relative time ("3 minutes ago") with Intl.RelativeTimeFormat, and keeps it up to date:
 * every second under a minute, every minute under an hour, then every hour.
 *
 * @value datetime       An ISO 8601 date, or `now` for the moment the element is displayed.
 * @value locale         A BCP 47 tag. The language of the page when empty.
 * @value numeric        `auto` ("yesterday") or `always` ("1 day ago").
 * @value style          `long`, `short` or `narrow`.
 * @value absoluteTitle  Puts the full date in the `title` of the element.
 */
export default class extends Controller {
    static values = {
        datetime: String,
        locale: String,
        numeric: { type: String, default: 'auto' },
        style: { type: String, default: 'long' },
        absoluteTitle: { type: Boolean, default: true },
    };

    connect() {
        this.date = this.datetimeValue === 'now' ? new Date() : new Date(this.datetimeValue);
        if (Number.isNaN(this.date.getTime())) {
            return;
        }
        const locale = this.localeValue || document.documentElement.lang || undefined;
        this.formatter = new Intl.RelativeTimeFormat(locale, { numeric: this.numericValue, style: this.styleValue });
        if (this.absoluteTitleValue && !this.element.title) {
            this.element.title = new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeStyle: 'short' }).format(this.date);
        }
        this.refresh();
    }

    disconnect() {
        clearTimeout(this.timer);
    }

    refresh() {
        const seconds = Math.round((this.date.getTime() - Date.now()) / 1000);
        const distance = Math.abs(seconds);
        const [unit, size] = UNITS.find(([, size]) => distance >= size) ?? UNITS[UNITS.length - 1];
        this.element.textContent = this.formatter.format(Math.trunc(seconds / size), unit);

        const delay = distance < 60 ? 1000 : distance < 3600 ? 60000 : 3600000;
        this.timer = setTimeout(() => this.refresh(), delay);
    }
}

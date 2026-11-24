import { Controller } from '@hotwired/stimulus';

/**
 * Counts the characters of the input or textarea inside the element.
 *
 * @target count   Where the count is written (hidden from screen readers: the status below speaks instead).
 * @target status  A live region that announces the remaining characters near the limit, not on every keystroke.
 * @value  max, format, announcement, overAnnouncement, warnAt
 *         {count}, {max}, {remaining} and {over} are replaced in the texts.
 */
export default class extends Controller {
    static targets = ['count', 'status'];
    static values = {
        max: Number,
        format: String,
        announcement: String,
        overAnnouncement: String,
        warnAt: { type: Number, default: 0.9 },
    };

    connect() {
        this.field = this.element.querySelector('input, textarea');
        if (!this.field) {
            return;
        }
        this.state = 'idle';
        this.markedInvalid = false;
        this.field.addEventListener('input', this.update);
        this.update();
    }

    disconnect() {
        this.field?.removeEventListener('input', this.update);
    }

    update = () => {
        const max = this.hasMaxValue ? this.maxValue : this.field.maxLength > 0 ? this.field.maxLength : null;
        const count = [...this.field.value].length;
        const over = max !== null && count > max;
        const warning = max !== null && !over && count >= max * this.warnAtValue;
        const state = over ? 'over' : warning ? 'warning' : 'idle';

        const format = this.hasFormatValue ? this.formatValue : max !== null ? '{count} / {max}' : '{count}';
        this.countTarget.textContent = this.#fill(format, count, max);
        this.countTarget.dataset.state = state;

        if (over) {
            this.field.setAttribute('aria-invalid', 'true');
            this.markedInvalid = true;
        } else if (this.markedInvalid) {
            this.field.removeAttribute('aria-invalid');
            this.markedInvalid = false;
        }

        // Announce when the state changes, then only every 10 characters and on the last ones.
        const remaining = max === null ? 0 : max - count;
        const worth = state !== 'idle' && (state !== this.state || remaining % 10 === 0 || (remaining >= 0 && remaining <= 5));
        if (worth) {
            this.statusTarget.textContent = this.#fill(over ? this.overAnnouncementValue : this.announcementValue, count, max);
        } else if (state === 'idle') {
            this.statusTarget.textContent = '';
        }
        this.state = state;
    };

    #fill(text, count, max) {
        return text
            .replaceAll('{count}', String(count))
            .replaceAll('{max}', max === null ? '' : String(max))
            .replaceAll('{remaining}', max === null ? '' : String(max - count))
            .replaceAll('{over}', max === null ? '' : String(Math.max(0, count - max)));
    }
}

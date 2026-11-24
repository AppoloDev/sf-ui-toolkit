import { Controller } from '@hotwired/stimulus';

/**
 * Shows the state of an action on the button that fired it: idle, pending, done or failed.
 *
 * The button holds one element per state (data-state-view), and this controller shows the one that fits.
 * The state is also on the button as data-state, so that it can be styled. While pending, the button is
 * disabled and aria-busy. Done and failed go back to idle after `duration` milliseconds.
 *
 * @action copy  Copies `text`, or the value (the text) of the element `from` designates.
 * @action run   Sends a request to `url` (with `method`): done if the response is fine, failed otherwise.
 * @event  button-feedback:done, button-feedback:failed  Dispatched on the button when the action ends.
 */
export default class extends Controller {
    static targets = ['status'];
    static values = {
        text: String,
        from: String,
        url: String,
        method: { type: String, default: 'GET' },
        duration: { type: Number, default: 2000 },
        doneAnnouncement: String,
        failedAnnouncement: String,
    };

    disconnect() {
        clearTimeout(this.timer);
    }

    async copy() {
        if (this.element.dataset.state !== 'idle') {
            return;
        }
        const source = this.hasFromValue ? document.querySelector(this.fromValue) : null;
        const text = this.hasTextValue ? this.textValue : (source?.value ?? source?.textContent ?? '');

        try {
            await this.#write(text);
            this.#finish(true);
        } catch {
            this.#finish(false);
        }
    }

    async run() {
        if (this.element.dataset.state !== 'idle' || !this.hasUrlValue) {
            return;
        }
        this.#show('pending');
        try {
            const response = await fetch(this.urlValue, { method: this.methodValue });
            this.#finish(response.ok);
        } catch {
            this.#finish(false);
        }
    }

    async #write(text) {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);

            return;
        }
        // Older browsers and non-secure pages.
        const area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.append(area);
        area.select();
        const ok = document.execCommand('copy');
        area.remove();
        if (!ok) {
            throw new Error('copy failed');
        }
    }

    #finish(success) {
        this.#show(success ? 'done' : 'failed');
        this.statusTarget.textContent = success ? this.doneAnnouncementValue : this.failedAnnouncementValue;
        this.element.dispatchEvent(new CustomEvent(success ? 'button-feedback:done' : 'button-feedback:failed', { bubbles: true }));
        this.timer = setTimeout(() => {
            this.#show('idle');
            this.statusTarget.textContent = '';
        }, this.durationValue);
    }

    #show(state) {
        this.element.dataset.state = state;
        this.element.setAttribute('aria-busy', String(state === 'pending'));
        this.element.disabled = state === 'pending';
        for (const view of this.element.querySelectorAll(':scope > [data-state-view]')) {
            view.hidden = view.dataset.stateView !== state;
        }
    }
}

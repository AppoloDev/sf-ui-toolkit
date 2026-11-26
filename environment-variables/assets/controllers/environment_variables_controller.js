import { Controller } from '@hotwired/stimulus';

/**
 * Masks secret values and lets the user reveal or copy them. Secrets are in the HTML as data attributes:
 * this is a display aid, not a security measure; never render real secrets for people who should not see them.
 *
 * @target value, all, status
 * @value  mask, revealAll, hideAll, copied
 */
export default class extends Controller {
    static targets = ['value', 'all', 'status'];
    static values = { mask: String, revealAll: String, hideAll: String, copied: String };

    paint(code, shown) {
        code.textContent = shown ? code.dataset.value : this.maskValue;
        code.dataset.hidden = String(!shown);
        const button = code.parentElement.querySelector('[data-reveal]');
        if (button) {
            button.setAttribute('aria-pressed', String(shown));
            button.setAttribute('aria-label', shown ? button.dataset.hide : button.dataset.reveal);
            button.querySelector('[data-icon="show"]').classList.toggle('hidden', shown);
            button.querySelector('[data-icon="hide"]').classList.toggle('hidden', !shown);
        }
    }

    toggle(event) {
        const code = event.currentTarget.parentElement.querySelector('code');
        this.paint(code, code.dataset.hidden === 'true');
        this.syncAll();
    }

    toggleAll() {
        const secrets = this.valueTargets.filter((code) => 'secret' in code.dataset);
        const reveal = this.allTarget.getAttribute('aria-pressed') !== 'true';
        secrets.forEach((code) => this.paint(code, reveal));
        this.syncAll();
    }

    syncAll() {
        if (!this.hasAllTarget) return;
        const secrets = this.valueTargets.filter((code) => 'secret' in code.dataset);
        const all = secrets.length > 0 && secrets.every((code) => code.dataset.hidden === 'false');
        this.allTarget.setAttribute('aria-pressed', String(all));
        this.allTarget.textContent = all ? this.hideAllValue : this.revealAllValue;
    }

    async copy(event) {
        const code = event.currentTarget.parentElement.querySelector('code');
        try {
            await navigator.clipboard.writeText(code.dataset.value);
            this.statusTarget.textContent = this.copiedValue;
            setTimeout(() => (this.statusTarget.textContent = ''), 1500);
        } catch (error) {
            // The clipboard is not available in this context.
        }
    }
}

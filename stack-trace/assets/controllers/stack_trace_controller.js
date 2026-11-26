import { Controller } from '@hotwired/stimulus';

/**
 * Folds vendor frames and copies the trace as plain text.
 *
 * @target list, vendorToggle, copy, copyText
 * @value  showLabel, hideLabel, copyLabel, copiedLabel
 */
export default class extends Controller {
    static targets = ['list', 'vendorToggle', 'copy', 'copyText'];
    static values = { showLabel: String, hideLabel: String, copyLabel: String, copiedLabel: String };

    toggleVendor() {
        const button = this.vendorToggleTarget;
        const open = button.getAttribute('aria-expanded') !== 'true';
        this.listTarget.querySelectorAll('[data-vendor]').forEach((frame) => frame.classList.toggle('hidden', !open));
        button.setAttribute('aria-expanded', String(open));
        button.textContent = open ? this.hideLabelValue : this.showLabelValue.replace('{count}', button.dataset.count);
    }

    async copy() {
        const header = this.element.querySelector('header p')?.textContent ?? '';
        const message = this.element.querySelectorAll('header p')[1]?.textContent ?? '';
        const lines = [...this.listTarget.querySelectorAll('[data-frame]')].map((frame) => frame.dataset.text);
        const text = [message ? `${header}: ${message}` : header, ...lines].join('\n');
        try {
            await navigator.clipboard.writeText(text);
            this.copyTextTarget.textContent = this.copiedLabelValue;
            setTimeout(() => (this.copyTextTarget.textContent = this.copyLabelValue), 1500);
        } catch (error) {
            // The clipboard is not available in this context.
        }
    }
}

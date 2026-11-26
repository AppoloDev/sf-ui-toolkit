import { Controller } from '@hotwired/stimulus';

/**
 * Copies a command, and (optionally) types the lines one after the other when the terminal comes into view.
 * The full text is in the page from the start, so it is readable without JavaScript and by screen readers;
 * with reduced motion the typing is skipped.
 *
 * @target body, status
 * @value  typing, speed, copied
 */
export default class extends Controller {
    static targets = ['body', 'status'];
    static values = { typing: Boolean, speed: { type: Number, default: 25 }, copied: String };

    connect() {
        if (!this.typingValue || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
        this.lines = [...this.bodyTarget.querySelectorAll('[data-terminal-line]')];
        this.saved = this.lines.map((line) => line.querySelector('[data-terminal-text]').textContent);
        this.lines.forEach((line) => {
            line.style.visibility = 'hidden';
            line.querySelector('[data-terminal-text]').textContent = '';
        });
        this.observer = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                this.observer.disconnect();
                this.play();
            }
        });
        this.observer.observe(this.element);
    }

    disconnect() {
        this.observer?.disconnect();
        this.stopped = true;
    }

    async play() {
        for (let i = 0; i < this.lines.length && !this.stopped; i++) {
            const line = this.lines[i];
            const target = line.querySelector('[data-terminal-text]');
            line.style.visibility = 'visible';
            if (line.dataset.type === 'command') {
                for (const char of this.saved[i]) {
                    if (this.stopped) return;
                    target.textContent += char;
                    await new Promise((resolve) => setTimeout(resolve, this.speedValue));
                }
                await new Promise((resolve) => setTimeout(resolve, 250));
            } else {
                target.textContent = this.saved[i];
                await new Promise((resolve) => setTimeout(resolve, 120));
            }
        }
    }

    async copy(event) {
        const text = event.currentTarget.closest('[data-terminal-line]').querySelector('[data-terminal-text]').textContent.trim();
        try {
            await navigator.clipboard.writeText(text);
            this.statusTarget.textContent = this.copiedValue;
            setTimeout(() => (this.statusTarget.textContent = ''), 1500);
        } catch (error) {
            // The clipboard is not available in this context.
        }
    }
}

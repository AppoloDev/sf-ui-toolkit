import { Controller } from '@hotwired/stimulus';

/**
 * Light, dark or system theme. Sets the `dark` class and `color-scheme` on `<html>`, stores the choice and keeps
 * every instance of the page (and every tab) in step.
 *
 * @target option  A button of the switcher, with `data-theme-toggle-mode-param`: it gets `aria-pressed`.
 * @value  initial, storageKey
 * @action set     Chooses the mode in `data-theme-toggle-mode-param` (`light`, `dark` or `system`).
 * @action toggle  Switches between light and dark, from the theme that is shown.
 * @event  theme-toggle:change  Fired on the element, with `detail.mode` (what was chosen) and `detail.resolved` (`light` or `dark`).
 */
export default class extends Controller {
    static targets = ['option'];
    static values = { initial: { type: String, default: 'system' }, storageKey: { type: String, default: 'theme' } };

    connect() {
        this.media = window.matchMedia('(prefers-color-scheme: dark)');
        this.media.addEventListener('change', this.sync);
        window.addEventListener('storage', this.onStorage);
        window.addEventListener('theme-toggle:apply', this.sync);
        this.sync();
    }

    disconnect() {
        this.media.removeEventListener('change', this.sync);
        window.removeEventListener('storage', this.onStorage);
        window.removeEventListener('theme-toggle:apply', this.sync);
    }

    get mode() {
        let stored = null;
        try {
            stored = localStorage.getItem(this.storageKeyValue);
        } catch (error) {
            // Storage is not available: use the initial value.
        }
        return ['light', 'dark', 'system'].includes(stored) ? stored : this.initialValue;
    }

    get resolved() {
        const mode = this.mode;
        return mode === 'system' ? (this.media.matches ? 'dark' : 'light') : mode;
    }

    set(event) {
        this.store(event.params.mode);
    }

    toggle() {
        this.store(this.resolved === 'dark' ? 'light' : 'dark');
    }

    store(mode) {
        try {
            localStorage.setItem(this.storageKeyValue, mode);
        } catch (error) {
            // Storage is not available: the choice only lasts for this page.
            this.volatile = mode;
        }
        window.dispatchEvent(new Event('theme-toggle:apply'));
    }

    onStorage = (event) => {
        if (event.key === this.storageKeyValue) {
            this.sync();
        }
    };

    sync = () => {
        const mode = this.volatile ?? this.mode;
        const resolved = mode === 'system' ? (this.media.matches ? 'dark' : 'light') : mode;
        document.documentElement.classList.toggle('dark', resolved === 'dark');
        document.documentElement.style.colorScheme = resolved;
        this.element.dataset.mode = mode;
        this.element.dataset.resolved = resolved;
        this.optionTargets.forEach((option) => {
            option.setAttribute('aria-pressed', String(option.dataset.themeToggleModeParam === mode));
        });
        this.dispatch('change', { detail: { mode, resolved } });
    };
}

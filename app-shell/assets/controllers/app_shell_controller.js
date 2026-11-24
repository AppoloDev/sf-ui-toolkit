import { Controller } from '@hotwired/stimulus';

/*
 * Layout state of <twig:AppShell>: panel collapsed (md and up), drawer open (below md), active rail group.
 *
 * Targets: sidebar, overlay, panelWrapper, railItem, group.
 * Values: storageKey (where the collapsed choice is kept), shortcut (letter used with Ctrl or Cmd).
 * Actions: toggle, open, close, select (reads the group param of the clicked rail item).
 * Events: app-shell:toggle ({ collapsed }), app-shell:select ({ group }).
 */
export default class extends Controller {
    static targets = ['sidebar', 'overlay', 'panelWrapper', 'railItem', 'group'];
    static values = {
        storageKey: String,
        shortcut: String,
    };

    connect() {
        this.desktop = matchMedia('(min-width: 768px)');
        this.sync = () => this.#syncInert();
        this.desktop.addEventListener('change', this.sync);
        this.keydown = (event) => this.#onKeydown(event);
        window.addEventListener('keydown', this.keydown);
        this.#syncInert();
    }

    disconnect() {
        this.desktop.removeEventListener('change', this.sync);
        window.removeEventListener('keydown', this.keydown);
    }

    get collapsed() {
        return 'true' === this.element.dataset.collapsed;
    }

    toggle() {
        this.#setCollapsed(!this.collapsed);
    }

    open() {
        this.opener = document.activeElement;
        this.element.dataset.open = 'true';
        this.sidebarTarget.querySelector('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')?.focus();
    }

    close() {
        if ('true' !== this.element.dataset.open) {
            return;
        }
        this.element.dataset.open = 'false';
        this.opener?.focus?.();
    }

    select(event) {
        const group = event.params.group;
        if (undefined === group || '' === group) {
            return;
        }
        if (this.collapsed && this.desktop.matches) {
            this.#setCollapsed(false);
        }
        this.groupTargets.forEach((element) => {
            if (element.dataset.group) {
                element.classList.toggle('hidden', element.dataset.group !== group);
            }
        });
        this.railItemTargets.forEach((item) => {
            const selected = item.dataset.appShellGroupParam === group;
            item.dataset.active = String(selected);
            if ('BUTTON' === item.tagName) {
                item.setAttribute('aria-pressed', String(selected));
            }
        });
        this.dispatch('select', { detail: { group } });
    }

    #setCollapsed(collapsed) {
        this.element.dataset.collapsed = String(collapsed);
        if (this.hasStorageKeyValue && this.storageKeyValue) {
            try {
                localStorage.setItem(this.storageKeyValue, collapsed ? '1' : '0');
            } catch (error) {
                // Storage can be unavailable (private mode): the choice just is not remembered.
            }
        }
        this.#syncInert();
        this.dispatch('toggle', { detail: { collapsed } });
    }

    #syncInert() {
        const hidden = this.collapsed && this.desktop.matches;
        this.panelWrapperTargets.forEach((element) => {
            element.inert = hidden;
        });
    }

    #onKeydown(event) {
        if ('Escape' === event.key) {
            this.close();

            return;
        }
        if ('Tab' === event.key && 'true' === this.element.dataset.open && !this.desktop.matches) {
            const focusable = [...this.sidebarTarget.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((element) => !element.closest('[inert]'));
            if (0 === focusable.length) {
                return;
            }
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }

            return;
        }
        if (!this.hasShortcutValue || !this.shortcutValue || !(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== this.shortcutValue.toLowerCase()) {
            return;
        }
        const target = event.target;
        if (target instanceof HTMLElement && (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable)) {
            return;
        }
        event.preventDefault();
        this.toggle();
    }
}

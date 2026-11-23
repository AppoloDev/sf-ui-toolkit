import { Controller } from '@hotwired/stimulus';

/*
 * Highlights the link of the section in view. The active section is the last one whose top has
 * crossed the offset line; at the very bottom of the scroll area the last section wins. A click
 * scrolls smoothly to the section (keeping the offset). `scrollspy:change` fires with { id }.
 */
export default class extends Controller {
    static targets = ['link'];
    static values = { root: String, offset: { type: Number, default: 0 }, history: { type: Boolean, default: true } };

    connect() {
        this.scroller = this.rootValue ? document.querySelector(this.rootValue) : null;
        this.listener = () => {
            if (this.frame) return;
            this.frame = requestAnimationFrame(() => {
                this.frame = null;
                this.update();
            });
        };
        (this.scroller ?? window).addEventListener('scroll', this.listener, { passive: true });
        window.addEventListener('resize', this.listener, { passive: true });
        this.update(false);
    }

    disconnect() {
        (this.scroller ?? window).removeEventListener('scroll', this.listener);
        window.removeEventListener('resize', this.listener);
        cancelAnimationFrame(this.frame);
    }

    sections() {
        return this.linkTargets
            .map((link) => ({ link, section: document.getElementById(decodeURIComponent(new URL(link.href, location.href).hash.slice(1))) }))
            .filter((item) => item.section);
    }

    topOf(section) {
        const base = this.scroller ? this.scroller.getBoundingClientRect().top : 0;

        return section.getBoundingClientRect().top - base;
    }

    update(updateHistory = true) {
        const items = this.sections();
        if (!items.length) return;
        const scroller = this.scroller ?? document.scrollingElement;
        const atBottom = scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 2;
        let active = items[0];
        items.forEach((item) => {
            if (this.topOf(item.section) - this.offsetValue <= 1) active = item;
        });
        if (atBottom && scroller.scrollTop > 0) active = items[items.length - 1];
        this.activate(active, updateHistory);
    }

    activate(item, updateHistory) {
        const changed = this.current !== item.section.id;
        this.linkTargets.forEach((link) => {
            const on = link === item.link;
            link.setAttribute('data-active', String(on));
            if (on) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
        if (!changed) return;
        this.current = item.section.id;
        if (updateHistory && this.historyValue) history.replaceState(null, '', `#${this.current}`);
        this.dispatch('change', { detail: { id: this.current } });
    }

    go(event) {
        const hash = new URL(event.currentTarget.href, location.href).hash.slice(1);
        const section = document.getElementById(decodeURIComponent(hash));
        if (!section) return;
        event.preventDefault();
        const scroller = this.scroller ?? document.scrollingElement;
        const top = scroller.scrollTop + this.topOf(section) - this.offsetValue;
        (this.scroller ?? window).scrollTo({ top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        section.setAttribute('tabindex', '-1');
        section.focus({ preventScroll: true });
        this.activate(this.sections().find((item) => item.section === section), true);
    }
}

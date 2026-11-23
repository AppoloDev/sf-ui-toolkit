import { Controller } from '@hotwired/stimulus';

// One download per locale and page, shared by every picker.
const cache = new Map();
const load = (base, locale) => {
    const key = `${base}|${locale}`;
    if (!cache.has(key)) {
        cache.set(key, Promise.all([
            fetch(`${base}/${locale}/compact.json`).then((response) => response.json()),
            fetch(`${base}/${locale}/messages.json`).then((response) => response.json()),
        ]));
    }

    return cache.get(key);
};

const GROUP_ICONS = { 'smileys-emotion': '😀', 'people-body': '👋', 'animals-nature': '🐻', 'food-drink': '🍔', 'travel-places': '✈️', activities: '⚽', objects: '💡', symbols: '❤️', flags: '🏁' };
const TONE_KEY = 'emoji-picker-tone';

/*
 * Emoji picker. Search ranks by name, tag and shortcode; one skin tone applies to every emoji that
 * supports it (kept in localStorage, shared by the pickers of the page). The submitted value is the
 * emoji character. `emoji-picker:select` fires with { emoji, name }.
 * Keys: Down from the search field enters the grid, arrows move (up/down jump a row), Enter selects,
 * Escape closes the popover.
 */
export default class extends Controller {
    static targets = ['trigger', 'chosen', 'hidden', 'panel', 'search', 'tone', 'tabs', 'grid', 'status', 'preview', 'remove'];
    static values = {
        value: String,
        locale: { type: String, default: 'en' },
        dataUrl: { type: String, default: 'https://cdn.jsdelivr.net/npm/emojibase-data@16' },
        inline: Boolean,
        columns: { type: Number, default: 8 },
        recentKey: String,
        recentLabel: { type: String, default: 'Recent' },
        emptyLabel: { type: String, default: 'No emoji found.' },
        placeholder: { type: String, default: 'Pick an emoji' },
    };

    connect() {
        this.emojis = [];
        this.groups = [];
        this.category = 'recent';
        this.toneIndex = Number(localStorage.getItem(TONE_KEY) ?? 0) || 0;
        this.toneTarget.value = String(this.toneIndex);
        this.onOutsideClick = (event) => {
            if (!this.element.contains(event.target)) this.close();
        };
        this.hiddenTarget.value = this.valueValue;
        this.renderChosen();
        if (this.inlineValue) this.ensureLoaded();
    }

    disconnect() {
        document.removeEventListener('pointerdown', this.onOutsideClick);
    }

    // --- data -------------------------------------------------------------------------------

    async ensureLoaded() {
        if (this.loaded) return this.loaded;
        this.loaded = load(this.dataUrlValue, this.localeValue).then(([compact, messages]) => {
            const groups = (messages.groups ?? []).filter((group) => 'component' !== group.key).sort((a, b) => a.order - b.order);
            this.groups = groups.map((group) => ({ key: group.key, name: group.message.charAt(0).toUpperCase() + group.message.slice(1), order: group.order }));
            const known = new Set(this.groups.map((group) => group.order));
            this.emojis = compact.filter((item) => known.has(item.group)).map((item) => ({
                emoji: item.emoji,
                name: item.annotation ?? item.label ?? '',
                group: item.group,
                search: [item.annotation ?? item.label, ...(item.tags ?? []), ...(item.shortcodes ?? [])].join(' ').toLowerCase().normalize('NFD').replace(/[̀-ͯ:_-]/g, ' '),
                skins: item.skins?.map((skin) => skin.emoji) ?? null,
            }));
            this.recent = this.recentKeyValue ? JSON.parse(localStorage.getItem(this.recentKeyValue) ?? '[]') : [];
            this.category = this.recent.length ? 'recent' : String(this.groups[0]?.order ?? 0);
            this.renderTabs();
            this.renderGrid();
        });
        this.loaded.catch(() => { this.statusTarget.textContent = this.emptyLabelValue; });

        return this.loaded;
    }

    emojiOf(item) {
        return item.skins && this.toneIndex > 0 ? (item.skins[this.toneIndex - 1] ?? item.emoji) : item.emoji;
    }

    // --- popover ----------------------------------------------------------------------------

    toggle() {
        this.panelTarget.hidden ? this.open() : this.close();
    }

    open() {
        this.panelTarget.hidden = false;
        this.triggerTarget.setAttribute('aria-expanded', 'true');
        document.addEventListener('pointerdown', this.onOutsideClick);
        this.ensureLoaded().then(() => this.searchTarget.focus());
        this.searchTarget.focus();
    }

    close(restoreFocus = false) {
        if (this.inlineValue || this.panelTarget.hidden) return;
        this.panelTarget.hidden = true;
        this.triggerTarget.setAttribute('aria-expanded', 'false');
        document.removeEventListener('pointerdown', this.onOutsideClick);
        if (restoreFocus) this.triggerTarget.focus();
    }

    // --- rendering --------------------------------------------------------------------------

    renderTabs() {
        const tabs = [];
        if (this.recent.length) tabs.push({ key: 'recent', icon: '🕘', name: this.recentLabelValue });
        this.groups.forEach((group) => tabs.push({ key: String(group.order), icon: GROUP_ICONS[group.key] ?? '•', name: group.name }));
        this.tabsTarget.replaceChildren(...tabs.map((tab) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.setAttribute('role', 'tab');
            button.setAttribute('aria-label', tab.name);
            button.title = tab.name;
            button.setAttribute('aria-selected', String(tab.key === this.category));
            button.tabIndex = tab.key === this.category ? 0 : -1;
            button.className = 'flex size-8 shrink-0 items-center justify-center rounded text-base outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring aria-selected:bg-muted';
            button.textContent = tab.icon;
            button.addEventListener('click', () => {
                this.category = tab.key;
                this.searchTarget.value = '';
                this.renderTabs();
                this.renderGrid();
            });
            button.addEventListener('keydown', (event) => {
                const items = [...this.tabsTarget.children];
                const at = items.indexOf(button);
                const next = { ArrowRight: at + 1, ArrowLeft: at - 1, Home: 0, End: items.length - 1 }[event.key];
                if (undefined === next || !items[next]) return;
                event.preventDefault();
                items[next].click();
                this.tabsTarget.children[next].focus();
            });

            return button;
        }));
    }

    visibleEmojis() {
        const query = this.searchTarget.value.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ:]/g, '');
        if (query) {
            return this.emojis
                .map((item) => ({ item, rank: item.name.toLowerCase().startsWith(query) ? 0 : item.search.includes(query) ? 1 : 2 }))
                .filter((entry) => entry.rank < 2)
                .sort((a, b) => a.rank - b.rank)
                .slice(0, 160)
                .map((entry) => entry.item);
        }
        if ('recent' === this.category) return this.recent.map((emoji) => this.emojis.find((item) => item.emoji === emoji || item.skins?.includes(emoji))).filter(Boolean);

        return this.emojis.filter((item) => String(item.group) === this.category);
    }

    renderGrid() {
        const items = this.visibleEmojis();
        this.gridTarget.replaceChildren();
        this.statusTarget.textContent = items.length ? `${items.length}` : this.emptyLabelValue;
        if (!items.length) {
            const empty = document.createElement('p');
            empty.className = 'py-8 text-center text-sm text-muted-foreground';
            empty.textContent = this.emptyLabelValue;
            this.gridTarget.append(empty);

            return;
        }
        const list = document.createElement('div');
        list.setAttribute('role', 'listbox');
        list.setAttribute('aria-label', this.searchTarget.getAttribute('aria-label'));
        list.className = 'grid gap-0.5';
        list.style.gridTemplateColumns = `repeat(${this.columnsValue}, minmax(0, 1fr))`;
        items.forEach((item, index) => {
            const emoji = this.emojiOf(item);
            const option = document.createElement('button');
            option.type = 'button';
            option.setAttribute('role', 'option');
            option.setAttribute('aria-label', item.name);
            option.setAttribute('aria-selected', String(emoji === this.hiddenTarget.value));
            option.tabIndex = -1;
            option.dataset.index = index;
            option.className = 'flex aspect-square items-center justify-center rounded text-xl outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring aria-selected:bg-muted';
            option.textContent = emoji;
            option.addEventListener('click', () => this.select(item));
            option.addEventListener('pointerenter', () => { this.previewTarget.textContent = `${emoji}  ${item.name}`; });
            option.addEventListener('focus', () => { this.previewTarget.textContent = `${emoji}  ${item.name}`; });
            list.append(option);
        });
        this.gridTarget.append(list);
    }

    search() {
        this.ensureLoaded().then(() => this.renderGrid());
    }

    tone() {
        this.toneIndex = Number(this.toneTarget.value);
        localStorage.setItem(TONE_KEY, String(this.toneIndex));
        this.renderGrid();
    }

    // --- selection --------------------------------------------------------------------------

    select(item) {
        const emoji = this.emojiOf(item);
        this.hiddenTarget.value = emoji;
        this.renderChosen();
        if (this.recentKeyValue) {
            this.recent = [emoji, ...this.recent.filter((entry) => entry !== emoji)].slice(0, 24);
            localStorage.setItem(this.recentKeyValue, JSON.stringify(this.recent));
        }
        this.hiddenTarget.dispatchEvent(new Event('change', { bubbles: true }));
        this.dispatch('select', { detail: { emoji, name: item.name } });
        this.close(true);
        if (this.inlineValue) this.renderGrid();
    }

    remove() {
        this.hiddenTarget.value = '';
        this.renderChosen();
        this.hiddenTarget.dispatchEvent(new Event('change', { bubbles: true }));
        this.dispatch('select', { detail: { emoji: '', name: '' } });
        this.renderGrid();
    }

    renderChosen() {
        const emoji = this.hiddenTarget.value;
        if (this.hasChosenTarget) {
            this.chosenTarget.textContent = emoji || this.placeholderValue;
            this.chosenTarget.classList.toggle('text-sm', !emoji);
            this.chosenTarget.classList.toggle('text-muted-foreground', !emoji);
            this.chosenTarget.classList.toggle('text-lg', Boolean(emoji));
        }
        this.removeTarget.hidden = !emoji;
    }

    // --- keyboard ---------------------------------------------------------------------------

    panelKey(event) {
        if ('Escape' === event.key) {
            event.preventDefault();
            this.close(true);

            return;
        }
        const options = [...this.gridTarget.querySelectorAll('[role=option]')];
        const at = options.indexOf(document.activeElement);
        if (document.activeElement === this.searchTarget) {
            if ('ArrowDown' === event.key && options.length) {
                event.preventDefault();
                options[0].focus();
            } else if ('Enter' === event.key && options.length) {
                event.preventDefault();
                options[0].click();
            }

            return;
        }
        if (at < 0) return;
        const moves = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: this.columnsValue, ArrowUp: -this.columnsValue };
        if (event.key in moves) {
            event.preventDefault();
            const next = at + moves[event.key];
            if (next < 0) this.searchTarget.focus();
            else options[Math.min(options.length - 1, next)]?.focus();
        }
    }
}

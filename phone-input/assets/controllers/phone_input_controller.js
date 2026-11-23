import { Controller } from '@hotwired/stimulus';

// [ISO 3166-1 alpha-2, name, dial code]
const COUNTRIES = [
    ['AR', 'Argentina', '54'], ['AU', 'Australia', '61'], ['AT', 'Austria', '43'], ['BE', 'Belgium', '32'],
    ['BR', 'Brazil', '55'], ['BG', 'Bulgaria', '359'], ['CA', 'Canada', '1'], ['CL', 'Chile', '56'],
    ['CN', 'China', '86'], ['CO', 'Colombia', '57'], ['HR', 'Croatia', '385'], ['CZ', 'Czechia', '420'],
    ['DK', 'Denmark', '45'], ['EG', 'Egypt', '20'], ['FI', 'Finland', '358'], ['FR', 'France', '33'],
    ['DE', 'Germany', '49'], ['GR', 'Greece', '30'], ['HU', 'Hungary', '36'], ['IN', 'India', '91'],
    ['ID', 'Indonesia', '62'], ['IE', 'Ireland', '353'], ['IL', 'Israel', '972'], ['IT', 'Italy', '39'],
    ['JP', 'Japan', '81'], ['LU', 'Luxembourg', '352'], ['MY', 'Malaysia', '60'], ['MX', 'Mexico', '52'],
    ['MA', 'Morocco', '212'], ['NL', 'Netherlands', '31'], ['NZ', 'New Zealand', '64'], ['NG', 'Nigeria', '234'],
    ['NO', 'Norway', '47'], ['PK', 'Pakistan', '92'], ['PE', 'Peru', '51'], ['PH', 'Philippines', '63'],
    ['PL', 'Poland', '48'], ['PT', 'Portugal', '351'], ['RO', 'Romania', '40'], ['SA', 'Saudi Arabia', '966'],
    ['SG', 'Singapore', '65'], ['ZA', 'South Africa', '27'], ['KR', 'South Korea', '82'], ['ES', 'Spain', '34'],
    ['SE', 'Sweden', '46'], ['CH', 'Switzerland', '41'], ['TN', 'Tunisia', '216'], ['TR', 'Türkiye', '90'],
    ['UA', 'Ukraine', '380'], ['AE', 'United Arab Emirates', '971'], ['GB', 'United Kingdom', '44'],
    ['US', 'United States', '1'], ['VN', 'Vietnam', '84'],
];

const flag = (iso) => String.fromCodePoint(...[...iso].map((char) => 127397 + char.charCodeAt(0)));

/*
 * International phone field. The submitted value is the E.164 number built from the selected
 * country and the digits typed in the national field (no per-country formatting). `phone-input:change`
 * is dispatched with { value, country }.
 */
export default class extends Controller {
    static targets = ['trigger', 'flag', 'dial', 'national', 'hidden', 'panel', 'search', 'list', 'empty'];
    static values = {
        value: String,
        defaultCountry: { type: String, default: 'FR' },
        locale: String,
        countryLabel: { type: String, default: 'Country' },
    };

    connect() {
        this.countries = this.localizedCountries();
        this.country = this.countries.find(([iso]) => iso === this.defaultCountryValue.toUpperCase()) ?? this.countries[0];
        this.active = -1;
        this.onOutsideClick = (event) => {
            if (!this.element.contains(event.target)) this.close();
        };
        this.parseInitial();
        this.renderList('');
        this.render();
    }

    disconnect() {
        document.removeEventListener('pointerdown', this.onOutsideClick);
    }

    // Country names come from the browser (Intl.DisplayNames) in the page language, sorted for that language.
    localizedCountries() {
        const locale = this.localeValue || document.documentElement.lang || undefined;
        let names = null;
        try {
            names = new Intl.DisplayNames(locale ? [locale] : undefined, { type: 'region' });
        } catch {
            // Unsupported locale or API: keep the English names below.
        }
        const collator = new Intl.Collator(locale || undefined);

        return COUNTRIES.map(([iso, english, dial]) => [iso, names?.of(iso) ?? english, dial]).sort((a, b) => collator.compare(a[1], b[1]));
    }

    // --- initial value ----------------------------------------------------------------------

    parseInitial() {
        const raw = (this.valueValue || '').replace(/[^\d+]/g, '');
        if (!raw.startsWith('+')) {
            this.nationalTarget.value = raw;

            return;
        }
        const digits = raw.slice(1);
        // Longest dial code wins (e.g. 351 before 35).
        const match = [...this.countries].sort((a, b) => b[2].length - a[2].length).find(([, , dial]) => digits.startsWith(dial));
        if (match) {
            // For a shared dial code (+1) keep the default country when it fits.
            this.country = match[2] === this.country[2] ? this.country : match;
            this.nationalTarget.value = digits.slice(match[2].length);
        } else {
            this.nationalTarget.value = digits;
        }
    }

    // --- popover ----------------------------------------------------------------------------

    toggle() {
        this.panelTarget.hidden ? this.open() : this.close();
    }

    open() {
        this.panelTarget.hidden = false;
        this.triggerTarget.setAttribute('aria-expanded', 'true');
        document.addEventListener('pointerdown', this.onOutsideClick);
        this.searchTarget.value = '';
        this.renderList('');
        this.searchTarget.focus();
        this.setActive(this.visible().findIndex((li) => li.dataset.iso === this.country[0]));
    }

    close(restoreFocus = false) {
        if (this.panelTarget.hidden) return;
        this.panelTarget.hidden = true;
        this.triggerTarget.setAttribute('aria-expanded', 'false');
        document.removeEventListener('pointerdown', this.onOutsideClick);
        if (restoreFocus) this.triggerTarget.focus();
    }

    filter() {
        this.renderList(this.searchTarget.value);
        this.setActive(this.visible().length ? 0 : -1);
    }

    searchKey(event) {
        const items = this.visible();
        if ('ArrowDown' === event.key || 'ArrowUp' === event.key) {
            event.preventDefault();
            const next = this.active + ('ArrowDown' === event.key ? 1 : -1);
            this.setActive(Math.min(items.length - 1, Math.max(0, next)));
        } else if ('Enter' === event.key) {
            event.preventDefault();
            if (items[this.active]) this.select(items[this.active].dataset.iso);
        } else if ('Escape' === event.key) {
            event.preventDefault();
            this.close(true);
        }
    }

    renderList(query) {
        const needle = query.trim().toLowerCase().replace(/^\+/, '');
        const matches = this.countries.filter(([iso, name, dial]) => !needle || name.toLowerCase().includes(needle) || iso.toLowerCase() === needle || dial.startsWith(needle));
        this.listTarget.replaceChildren(...matches.map(([iso, name, dial]) => {
            const li = document.createElement('li');
            li.id = `${this.element.id || 'phone'}-opt-${iso}`;
            li.setAttribute('role', 'option');
            li.setAttribute('aria-selected', String(iso === this.country[0]));
            li.dataset.iso = iso;
            li.className = 'flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 data-[active=true]:bg-muted';
            li.innerHTML = '<span class="text-base leading-none" aria-hidden="true"></span><span class="flex-1 truncate"></span><span class="tabular-nums text-muted-foreground"></span>';
            li.children[0].textContent = flag(iso);
            li.children[1].textContent = name;
            li.children[2].textContent = `+${dial}`;
            li.addEventListener('click', () => this.select(iso));
            li.addEventListener('pointermove', () => this.setActive(this.visible().indexOf(li)));

            return li;
        }));
        this.emptyTarget.hidden = matches.length > 0;
    }

    visible() {
        return [...this.listTarget.children];
    }

    setActive(index) {
        this.active = index;
        const items = this.visible();
        items.forEach((li, i) => li.setAttribute('data-active', String(i === index)));
        const current = items[index];
        if (current) {
            this.searchTarget.setAttribute('aria-activedescendant', current.id);
            current.scrollIntoView({ block: 'nearest' });
        } else {
            this.searchTarget.removeAttribute('aria-activedescendant');
        }
    }

    select(iso) {
        this.country = this.countries.find(([code]) => code === iso) ?? this.country;
        this.close(true);
        this.render();
        this.commit();
        this.nationalTarget.focus();
    }

    // --- value ------------------------------------------------------------------------------

    input() {
        // Keep digits and common separators only; the E.164 value is computed from the digits.
        this.nationalTarget.value = this.nationalTarget.value.replace(/[^\d\s().-]/g, '');
        this.render();
    }

    commit() {
        this.hiddenTarget.dispatchEvent(new Event('change', { bubbles: true }));
        this.dispatch('change', { detail: { value: this.hiddenTarget.value, country: this.country[0] } });
    }

    render() {
        this.flagTarget.textContent = flag(this.country[0]);
        this.dialTarget.textContent = `+${this.country[2]}`;
        this.triggerTarget.setAttribute('aria-label', `${this.countryLabelValue}: ${this.country[1]} (+${this.country[2]})`);
        let digits = this.nationalTarget.value.replace(/\D/g, '');
        // A leading national trunk 0 is dropped (06 12 34 56 78 -> +33612345678).
        if (digits.startsWith('0')) digits = digits.replace(/^0+/, '');
        this.hiddenTarget.value = digits ? `+${this.country[2]}${digits}` : '';
        this.listTarget.querySelectorAll('[role=option]').forEach((li) => li.setAttribute('aria-selected', String(li.dataset.iso === this.country[0])));
    }
}

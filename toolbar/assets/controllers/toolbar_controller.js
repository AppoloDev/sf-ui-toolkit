import { Controller } from '@hotwired/stimulus';

const CONTROLS = 'button:not([disabled]), a[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), [role="button"]:not([aria-disabled="true"]), [tabindex]:not([tabindex="-1"])';

/**
 * Arrow-key navigation of a toolbar (WAI-ARIA toolbar pattern): one control is in the tab order, the arrows move
 * between the others, Home and End jump to the first and the last.
 *
 * @value orientation  `horizontal` (Left/Right) or `vertical` (Up/Down).
 */
export default class extends Controller {
    static values = { orientation: { type: String, default: 'horizontal' } };

    connect() {
        this.element.addEventListener('keydown', this.onKeydown);
        this.element.addEventListener('focusin', this.onFocusin);
        this.refresh();
    }

    disconnect() {
        this.element.removeEventListener('keydown', this.onKeydown);
        this.element.removeEventListener('focusin', this.onFocusin);
    }

    get controls() {
        return [...this.element.querySelectorAll(CONTROLS)].filter((control) => !control.closest('[hidden], [data-toolbar-skip]'));
    }

    refresh() {
        const controls = this.controls;
        const current = controls.find((control) => control.getAttribute('tabindex') === '0') ?? controls[0];
        controls.forEach((control) => control.setAttribute('tabindex', control === current ? '0' : '-1'));
    }

    onFocusin = (event) => {
        const controls = this.controls;
        if (controls.includes(event.target)) {
            controls.forEach((control) => control.setAttribute('tabindex', control === event.target ? '0' : '-1'));
        }
    };

    onKeydown = (event) => {
        const next = this.orientationValue === 'vertical' ? 'ArrowDown' : 'ArrowRight';
        const previous = this.orientationValue === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
        if (![next, previous, 'Home', 'End'].includes(event.key)) {
            return;
        }
        const controls = this.controls;
        const index = controls.indexOf(document.activeElement);
        if (index === -1 || (document.activeElement.matches('input:not([type="button"]), select') && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key))) {
            return;
        }
        event.preventDefault();
        const target = event.key === 'Home' ? 0 : event.key === 'End' ? controls.length - 1 : (index + (event.key === next ? 1 : -1) + controls.length) % controls.length;
        controls[target].focus();
    };
}

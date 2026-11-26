import { Controller } from '@hotwired/stimulus';

/**
 * A confirmation popup anchored to the trigger inside the element (a native popover, so it sits above the page and
 * closes on Escape and on a click outside).
 *
 * @target panel   The popover.
 * @target arrow   The little square that points to the trigger.
 * @target accept  The accept button.
 * @target reject  The reject button.
 * @value  side  `bottom` or `top`, the preferred side.
 * @value  form  The id of a form to submit on accept.
 * @event  confirm-popup:accept  The accept button was used.
 * @event  confirm-popup:reject  The reject button was used, or the popup was dismissed.
 */
export default class extends Controller {
    static targets = ['panel', 'arrow', 'accept', 'reject'];
    static values = { side: { type: String, default: 'bottom' }, form: String };

    connect() {
        this.panelTarget.addEventListener('toggle', this.onToggle);
        window.addEventListener('resize', this.place);
        window.addEventListener('scroll', this.place, true);
    }

    disconnect() {
        this.panelTarget.removeEventListener('toggle', this.onToggle);
        window.removeEventListener('resize', this.place);
        window.removeEventListener('scroll', this.place, true);
    }

    get trigger() {
        return this.element.querySelector(':scope > span.contents')?.firstElementChild ?? null;
    }

    open(event) {
        const trigger = this.trigger;
        if (!trigger || !trigger.contains(event.target)) {
            return;
        }
        if (trigger.matches('[type="submit"]')) {
            event.preventDefault();
            this.submitter = trigger;
        }
        if (this.panelTarget.matches(':popover-open')) {
            this.panelTarget.hidePopover();
            return;
        }
        this.decided = false;
        this.panelTarget.showPopover();
    }

    accept() {
        this.decided = true;
        this.dispatch('accept');
        this.panelTarget.hidePopover();
        if (this.hasFormValue && this.formValue) {
            document.getElementById(this.formValue)?.requestSubmit();
        } else if (this.submitter?.form) {
            this.submitter.form.requestSubmit(this.submitter);
        }
    }

    reject() {
        this.decided = true;
        this.dispatch('reject');
        this.panelTarget.hidePopover();
    }

    onToggle = (event) => {
        if (event.newState === 'open') {
            this.place();
            const first = this.acceptTarget.classList.contains('bg-destructive') ? this.rejectTarget : this.acceptTarget;
            first.focus();
            this.dispatch('open');
        } else {
            if (!this.decided) {
                this.dispatch('reject');
            }
            this.dispatch('close');
        }
    };

    place = () => {
        const panel = this.panelTarget;
        const trigger = this.trigger;
        if (!trigger || !panel.matches(':popover-open')) {
            return;
        }
        const anchor = trigger.getBoundingClientRect();
        const box = panel.getBoundingClientRect();
        const gap = 10;
        const below = anchor.bottom + gap + box.height <= window.innerHeight;
        const above = anchor.top - gap - box.height >= 0;
        const onTop = this.sideValue === 'top' ? above || !below : !below && above;
        const left = Math.max(8, Math.min(anchor.left + anchor.width / 2 - box.width / 2, window.innerWidth - box.width - 8));
        panel.style.inset = 'auto';
        panel.style.left = `${left}px`;
        panel.style.top = `${onTop ? anchor.top - gap - box.height : anchor.bottom + gap}px`;
        const arrow = this.arrowTarget;
        arrow.style.left = `${Math.max(12, Math.min(anchor.left + anchor.width / 2 - left, box.width - 12)) - 5}px`;
        arrow.style.top = onTop ? 'auto' : '-6px';
        arrow.style.bottom = onTop ? '-6px' : 'auto';
        arrow.style.borderWidth = onTop ? '0 1px 1px 0' : '1px 0 0 1px';
    };
}

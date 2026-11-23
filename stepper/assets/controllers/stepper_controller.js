import { Controller } from '@hotwired/stimulus';

/*
 * Multi-step navigation following the tab-list pattern: roving tabindex, arrow keys (wrapping),
 * Home / End, Enter / Space (native button). Steps before the current one are completed.
 * The `stepper:change` event is cancelable: call preventDefault() to refuse a step change
 * (per-step validation).
 */
export default class extends Controller {
    static targets = ['item', 'trigger', 'content', 'prev', 'next'];
    static values = { value: { type: Number, default: 1 }, orientation: { type: String, default: 'horizontal' } };

    connect() {
        this.element.querySelector('[role="tablist"]')?.setAttribute('aria-orientation', this.orientationValue);
        this.apply();
    }

    valueValueChanged() {
        this.apply();
    }

    select(event) {
        this.request(this.stepOf(event.currentTarget));
    }

    next() {
        this.request(this.nextEnabled(this.valueValue, 1));
    }

    prev() {
        this.request(this.nextEnabled(this.valueValue, -1));
    }

    keydown(event) {
        const triggers = this.enabledTriggers();
        const index = triggers.indexOf(event.currentTarget);
        let target = null;
        if (['ArrowRight', 'ArrowDown'].includes(event.key)) target = triggers[(index + 1) % triggers.length];
        else if (['ArrowLeft', 'ArrowUp'].includes(event.key)) target = triggers[(index - 1 + triggers.length) % triggers.length];
        else if ('Home' === event.key) target = triggers[0];
        else if ('End' === event.key) target = triggers[triggers.length - 1];
        if (target) {
            event.preventDefault();
            target.focus();
            this.request(this.stepOf(target));
        }
    }

    request(step) {
        if (null === step || step === this.valueValue || !this.itemFor(step) || this.itemFor(step).dataset.disabled) {
            return;
        }
        const event = this.dispatch('change', { detail: { from: this.valueValue, to: step }, cancelable: true });
        if (!event.defaultPrevented) {
            this.valueValue = step;
        }
    }

    apply() {
        const current = this.valueValue;
        this.itemTargets.forEach((item) => {
            const step = Number(item.dataset.step);
            const state = item.dataset.completed || step < current ? 'completed' : (step === current ? 'active' : 'inactive');
            item.dataset.state = state;
            const trigger = item.querySelector('[role="tab"]');
            if (trigger) {
                trigger.setAttribute('aria-selected', String(step === current));
                trigger.tabIndex = step === current ? 0 : -1;
                trigger.disabled = Boolean(item.dataset.disabled);
            }
        });
        this.contentTargets.forEach((panel) => {
            panel.hidden = Number(panel.dataset.step) !== current;
        });
        const steps = this.itemTargets.map((item) => Number(item.dataset.step));
        if (this.hasPrevTarget) this.prevTargets.forEach((button) => { button.disabled = current <= Math.min(...steps); });
        if (this.hasNextTarget) this.nextTargets.forEach((button) => { button.disabled = current >= Math.max(...steps); });
    }

    itemFor(step) {
        return this.itemTargets.find((item) => Number(item.dataset.step) === step);
    }

    stepOf(element) {
        const item = element.closest('[data-step]');

        return item ? Number(item.dataset.step) : null;
    }

    enabledTriggers() {
        return this.triggerTargets.filter((trigger) => !trigger.disabled);
    }

    nextEnabled(from, direction) {
        const steps = this.itemTargets.filter((item) => !item.dataset.disabled).map((item) => Number(item.dataset.step)).sort((a, b) => a - b);

        return (direction > 0 ? steps.find((step) => step > from) : [...steps].reverse().find((step) => step < from)) ?? null;
    }
}

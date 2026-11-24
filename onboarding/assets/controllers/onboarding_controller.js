import { Controller } from '@hotwired/stimulus';

/*
 * Switches between the <twig:Onboarding:Step> panels of an interactive <twig:Onboarding>.
 *
 * Targets: step (panels), dot, bar, fill, label (indicator), back, next, finish (footer buttons).
 * Values: step (current step, from 1), stepLabel ("Step {current} of {total}").
 * Events: onboarding:change ({ step, total }), onboarding:finish.
 */
export default class extends Controller {
    static targets = ['step', 'dot', 'bar', 'fill', 'label', 'back', 'next', 'finish'];
    static values = {
        step: { type: Number, default: 1 },
        stepLabel: { type: String, default: 'Step {current} of {total}' },
    };

    connect() {
        this.render(false);
    }

    backTargetConnected(element) {
        element.addEventListener('click', this.#back);
    }

    backTargetDisconnected(element) {
        element.removeEventListener('click', this.#back);
    }

    nextTargetConnected(element) {
        element.addEventListener('click', this.#next);
    }

    nextTargetDisconnected(element) {
        element.removeEventListener('click', this.#next);
    }

    finishTargetConnected(element) {
        element.addEventListener('click', this.#finish);
    }

    finishTargetDisconnected(element) {
        element.removeEventListener('click', this.#finish);
    }

    get total() {
        return Math.max(1, this.stepTargets.length);
    }

    #back = (event) => {
        event.preventDefault();
        this.go(this.stepValue - 1);
    };

    #next = (event) => {
        event.preventDefault();
        if (this.stepValue >= this.total && !this.hasFinishTarget) {
            this.dispatch('finish');

            return;
        }
        this.go(this.stepValue + 1);
    };

    #finish = (event) => {
        if (this.stepValue < this.total) {
            event.preventDefault();

            return;
        }
        this.dispatch('finish');
    };

    go(step) {
        const next = Math.min(this.total, Math.max(1, step));
        if (next === this.stepValue) {
            return;
        }
        this.stepValue = next;
        this.render(true);
        this.dispatch('change', { detail: { step: next, total: this.total } });
    }

    render(focus) {
        const current = Math.min(this.total, Math.max(1, this.stepValue));
        const text = this.stepLabelValue.replace('{current}', current).replace('{total}', this.total);

        this.stepTargets.forEach((panel, index) => {
            panel.hidden = index + 1 !== current;
        });

        this.dotTargets.forEach((dot, index) => {
            const position = index + 1;
            dot.dataset.state = position === current ? 'active' : position < current ? 'done' : 'todo';
            if (position === current) {
                dot.setAttribute('aria-current', 'step');
            } else {
                dot.removeAttribute('aria-current');
            }
        });

        if (this.hasBarTarget) {
            this.barTarget.setAttribute('aria-valuemax', this.total);
            this.barTarget.setAttribute('aria-valuenow', current);
            this.barTarget.setAttribute('aria-valuetext', text);
        }
        if (this.hasFillTarget) {
            this.fillTarget.style.width = `${Math.round((current / this.total) * 1000) / 10}%`;
        }
        if (this.hasLabelTarget) {
            this.labelTarget.textContent = text;
        }

        const first = current === 1;
        const last = current === this.total;
        this.backTargets.forEach((button) => (button.hidden = first));
        if (this.hasFinishTarget) {
            this.nextTargets.forEach((button) => (button.hidden = last));
            this.finishTargets.forEach((button) => (button.hidden = !last));
        }

        if (focus) {
            this.stepTargets[current - 1]?.querySelector('[data-onboarding-heading]')?.focus();
        }
    }
}

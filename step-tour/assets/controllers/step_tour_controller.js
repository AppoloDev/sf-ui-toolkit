import { Controller } from '@hotwired/stimulus';

/**
 * Shows one step at a time, with a counter, a dot per step and previous and next buttons.
 *
 * @action next      The next step. On the last step, dispatches step-tour:finish and goes back to the first.
 * @action previous  The previous step.
 * @action go        The step whose index is in the data-step-tour-index-param of the dot.
 * @event  step-tour:change  Dispatched on the element when the step changes, with detail.index.
 * @event  step-tour:finish  Dispatched on the element when next is used on the last step.
 */
export default class extends Controller {
    static targets = ['step', 'counter', 'dots', 'previous', 'next'];
    static values = {
        index: { type: Number, default: 0 },
        counter: String,
        dotLabel: String,
        nextLabel: String,
        finishLabel: String,
    };

    connect() {
        if (this.hasDotsTarget) {
            this.dotsTarget.replaceChildren(
                ...this.stepTargets.map((step, position) => {
                    const dot = document.createElement('button');
                    dot.type = 'button';
                    dot.className =
                        'size-2 rounded-full bg-muted-foreground/30 outline-none transition-colors hover:bg-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-ring data-[active=true]:bg-primary';
                    dot.setAttribute('aria-label', this.dotLabelValue.replaceAll('{n}', String(position + 1)));
                    dot.dataset.action = 'click->step-tour#go';
                    dot.dataset.stepTourIndexParam = String(position);
                    return dot;
                })
            );
        }
        this.#show(false);
        this.ready = true;
    }

    next() {
        if (this.indexValue >= this.stepTargets.length - 1) {
            this.element.dispatchEvent(new CustomEvent('step-tour:finish', { bubbles: true }));
            this.indexValue = 0;
        } else {
            this.indexValue += 1;
        }
    }

    previous() {
        this.indexValue = Math.max(0, this.indexValue - 1);
    }

    go({ params: { index } }) {
        this.indexValue = index;
    }

    indexValueChanged() {
        if (this.ready) {
            this.#show(true);
        }
    }

    #show(announce) {
        const total = this.stepTargets.length;
        const index = Math.min(Math.max(this.indexValue, 0), total - 1);
        this.stepTargets.forEach((step, position) => {
            step.hidden = position !== index;
        });
        if (this.hasCounterTarget) {
            this.counterTarget.textContent = this.counterValue.replaceAll('{current}', String(index + 1)).replaceAll('{total}', String(total));
        }
        if (this.hasDotsTarget) {
            [...this.dotsTarget.children].forEach((dot, position) => {
                dot.dataset.active = String(position === index);
                position === index ? dot.setAttribute('aria-current', 'step') : dot.removeAttribute('aria-current');
            });
        }
        if (this.hasPreviousTarget) {
            this.previousTarget.disabled = index === 0;
        }
        if (this.hasNextTarget) {
            this.nextTarget.textContent = index === total - 1 ? this.finishLabelValue : this.nextLabelValue;
        }
        if (announce) {
            this.element.dispatchEvent(new CustomEvent('step-tour:change', { bubbles: true, detail: { index } }));
        }
    }
}

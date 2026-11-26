import { Controller } from '@hotwired/stimulus';

/**
 * A countdown or a stopwatch. Time is computed from the clock, so it stays right when the tab sleeps.
 *
 * @target display  Shows the time.
 * @target toggle   The start / pause button.
 * @target status   A live region, written once when a countdown ends.
 * @value  mode, duration, autoStart, format, startLabel, pauseLabel
 * @action start, pause, toggle, reset
 * @event  timer:tick   Every second: `detail.seconds` (remaining for a countdown, elapsed for a stopwatch).
 * @event  timer:end    A countdown reached zero.
 */
export default class extends Controller {
    static targets = ['display', 'toggle', 'status'];
    static values = { mode: { type: String, default: 'countdown' }, duration: { type: Number, default: 60 }, autoStart: Boolean, format: { type: String, default: 'auto' }, startLabel: { type: String, default: 'Start' }, pauseLabel: { type: String, default: 'Pause' } };

    connect() {
        this.running = false;
        this.elapsed = 0;
        this.render();
        if (this.autoStartValue) this.start();
    }

    disconnect() {
        clearInterval(this.timer);
    }

    get seconds() {
        const elapsed = this.running ? this.elapsed + (Date.now() - this.since) / 1000 : this.elapsed;
        return this.modeValue === 'countdown' ? Math.max(0, this.durationValue - elapsed) : elapsed;
    }

    start() {
        if (this.running || (this.modeValue === 'countdown' && this.seconds <= 0)) return;
        this.running = true;
        this.since = Date.now();
        this.timer = setInterval(() => this.tick(), 200);
        this.render();
    }

    pause() {
        if (!this.running) return;
        this.elapsed += (Date.now() - this.since) / 1000;
        this.running = false;
        clearInterval(this.timer);
        this.render();
    }

    toggle() {
        this.running ? this.pause() : this.start();
    }

    reset() {
        clearInterval(this.timer);
        this.running = false;
        this.elapsed = 0;
        this.last = null;
        if (this.hasStatusTarget) this.statusTarget.textContent = '';
        this.render();
    }

    tick() {
        const seconds = Math.floor(this.seconds);
        if (seconds !== this.last) {
            this.last = seconds;
            this.dispatch('tick', { detail: { seconds } });
        }
        if (this.modeValue === 'countdown' && this.seconds <= 0) {
            this.elapsed = this.durationValue;
            this.running = false;
            clearInterval(this.timer);
            if (this.hasStatusTarget) this.statusTarget.textContent = this.statusTarget.dataset.endLabel;
            this.dispatch('end');
        }
        this.render();
    }

    format(total) {
        const whole = Math.ceil(total - (this.modeValue === 'countdown' ? 0 : total % 1));
        const value = this.modeValue === 'countdown' ? Math.ceil(total) : Math.floor(total);
        void whole;
        const h = Math.floor(value / 3600);
        const m = Math.floor((value % 3600) / 60);
        const s = value % 60;
        const p = (n) => String(n).padStart(2, '0');
        if (this.formatValue === 'mm:ss') return `${p(Math.floor(value / 60))}:${p(s)}`;
        if (this.formatValue === 'hh:mm:ss' || h > 0) return `${p(h)}:${p(m)}:${p(s)}`;
        return `${p(m)}:${p(s)}`;
    }

    render() {
        if (this.hasDisplayTarget) this.displayTarget.textContent = this.format(this.seconds);
        if (this.hasToggleTarget) this.toggleTarget.textContent = this.running ? this.pauseLabelValue : this.startLabelValue;
        this.element.dataset.state = this.running ? 'running' : this.modeValue === 'countdown' && this.seconds <= 0 ? 'ended' : 'idle';
    }
}

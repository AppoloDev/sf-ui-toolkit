import { Controller } from '@hotwired/stimulus';

/**
 * Dictation into a text field with the Web Speech API (`SpeechRecognition`). The button is disabled where the API
 * is missing. Audio handling and privacy depend on the browser: some send audio to a server.
 *
 * @target status
 * @value  target, lang, continuous and the labels
 * @event  speech-input:start, speech-input:end, speech-input:result (`detail.text`, `detail.final`), speech-input:error (`detail.error`)
 */
export default class extends Controller {
    static targets = ['status'];
    static values = { target: String, lang: String, continuous: { type: Boolean, default: true }, startLabel: String, stopLabel: String, unsupportedLabel: String, listeningLabel: String };

    connect() {
        this.Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!this.Recognition) {
            this.element.disabled = true;
            this.element.title = this.unsupportedLabelValue;
            this.statusTarget.textContent = this.unsupportedLabelValue;
        }
    }

    disconnect() {
        this.recognition?.abort();
    }

    get field() {
        return document.querySelector(this.targetValue);
    }

    toggle() {
        this.listening ? this.recognition.stop() : this.start();
    }

    start() {
        const field = this.field;
        if (!this.Recognition || !field) return;
        const recognition = new this.Recognition();
        recognition.lang = this.langValue || document.documentElement.lang || navigator.language;
        recognition.interimResults = true;
        recognition.continuous = this.continuousValue;
        this.base = field.value ? `${field.value.replace(/\s+$/, '')} ` : '';
        this.final = '';
        recognition.onstart = () => {
            this.listening = true;
            this.paint(true);
            this.dispatch('start');
        };
        recognition.onresult = (event) => {
            let interim = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const text = event.results[i][0].transcript;
                if (event.results[i].isFinal) this.final += text;
                else interim += text;
            }
            field.value = `${this.base}${this.final}${interim}`;
            field.dispatchEvent(new Event('input', { bubbles: true }));
            this.dispatch('result', { detail: { text: this.final + interim, final: interim === '' } });
        };
        recognition.onerror = (event) => this.dispatch('error', { detail: { error: event.error } });
        recognition.onend = () => {
            this.listening = false;
            this.paint(false);
            field.dispatchEvent(new Event('change', { bubbles: true }));
            this.dispatch('end');
        };
        this.recognition = recognition;
        recognition.start();
    }

    paint(on) {
        this.element.setAttribute('aria-pressed', String(on));
        this.element.setAttribute('aria-label', on ? this.stopLabelValue : this.startLabelValue);
        this.statusTarget.textContent = on ? this.listeningLabelValue : '';
    }
}

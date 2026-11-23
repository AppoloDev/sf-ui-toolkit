import { Controller } from '@hotwired/stimulus';

/*
 * Aperçu au survol et mise à jour du remplissage des étoiles.
 * Le choix lui-même reste porté par les boutons radio natifs (clavier, formulaire, lecteurs d'écran).
 */
export default class extends Controller {
    static targets = ['fill'];
    static values = { value: Number };

    connect() {
        this.paint(this.valueValue);
    }

    preview(event) {
        this.paint(Number(event.currentTarget.value));
    }

    reset() {
        this.paint(this.valueValue);
    }

    sync(event) {
        this.valueValue = Number(event.currentTarget.value);
        this.paint(this.valueValue);
    }

    paint(value) {
        this.fillTargets.forEach((element, index) => {
            const percent = Math.max(0, Math.min(100, (value - index) * 100));
            element.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        });
    }
}

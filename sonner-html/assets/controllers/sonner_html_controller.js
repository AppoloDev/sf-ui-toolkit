import { Controller } from '@hotwired/stimulus';

const BASE =
    'group flex w-full items-start gap-3 rounded-2xl border bg-background p-4 text-foreground shadow-lg transition-[transform,opacity] duration-300 pointer-events-auto absolute left-0 right-0';

/**
 * Adds toasts made of markup, and toasts that follow a request, to the Sonner of the same element.
 *
 * It does not extend the Sonner controller, whose methods are private: it is a second controller on the same
 * element (`data-controller="sonner sonner-html"`), and the Sonner controller picks up the toasts it adds
 * the way it picks up server-rendered ones.
 *
 * @action show     Shows the content of a <template> as a toast.
 *                  Params: template (a selector, required), id, type, duration (ms), class (added to the toast).
 * @action request  Sends a request and shows a loading toast, then a success or an error toast with the same id.
 *                  Params: url (required), method, id, loading, success, error, successDescription, errorDescription.
 */
export default class extends Controller {
    get sonner() {
        return this.application.getControllerForElementAndIdentifier(this.element, 'sonner');
    }

    show({ params: { template, id = null, type = 'default', duration = null, class: extra = '' } = {} }) {
        const source = this.element.querySelector(template) ?? document.querySelector(template);
        if (!(source instanceof HTMLTemplateElement)) {
            return;
        }

        const sonner = this.sonner;
        const toastId = id === null ? null : String(id);
        if (toastId !== null) {
            this.#discard(sonner, toastId);
        }

        const li = document.createElement('li');
        li.dataset.slot = 'toast';
        li.dataset.state = 'closed';
        li.dataset.type = type;
        if (toastId !== null) {
            li.dataset.toastId = toastId;
        }
        if (duration !== null) {
            li.dataset.duration = String(duration);
        }
        li.setAttribute('role', type === 'error' ? 'alert' : 'status');
        li.setAttribute('aria-live', type === 'error' ? 'assertive' : 'polite');
        li.setAttribute('aria-atomic', 'true');
        li.className = `${BASE} ${extra}`.trim();
        li.append(source.content.cloneNode(true));

        // The Sonner controller picks up, on connect, the toasts it has not activated yet.
        this.element.append(li);
        this.#reconnect(sonner);

        // It puts them last in the list: move the new one first, then lay the stack out again.
        requestAnimationFrame(() => {
            sonner.listTarget.prepend(li);
            this.#reconnect(sonner);
        });
    }

    async request({
        params: {
            url,
            method = 'GET',
            id = 'request',
            loading = '',
            success = '',
            error = '',
            successDescription = null,
            errorDescription = null,
        } = {},
    }) {
        const notify = (detail) => window.dispatchEvent(new CustomEvent('sonner', { detail: { id: String(id), ...detail } }));

        notify({ type: 'loading', title: loading });
        try {
            const response = await fetch(url, { method });
            if (!response.ok) {
                throw new Error(String(response.status));
            }
            notify({ type: 'success', title: success, description: successDescription });
        } catch {
            notify({ type: 'error', title: error, description: errorDescription });
        }
    }

    #discard(sonner, id) {
        const existing = this.element.querySelector(`[data-toast-id="${CSS.escape(id)}"]`);
        if (!existing) {
            return;
        }
        const timer = sonner.timers?.get(existing);
        if (timer) {
            clearTimeout(timer.id);
            sonner.timers.delete(existing);
        }
        existing.remove();
    }

    #reconnect(sonner) {
        sonner.disconnect();
        sonner.connect();
    }
}

import { Controller } from '@hotwired/stimulus';

/**
 * Blocks a region: the content becomes `inert` and `aria-busy`, and a layer covers it.
 *
 * @target content  The region.
 * @target layer    The covering layer.
 * @value  blocked  Whether the region is blocked (can be changed from code).
 * @value  onSubmit Block when a form inside is submitted.
 * @event  block-ui:block, block-ui:unblock
 */
export default class extends Controller {
    static targets = ['content', 'layer'];
    static values = { blocked: Boolean, onSubmit: Boolean };

    blockedValueChanged() {
        if (!this.hasLayerTarget) return;
        const blocked = this.blockedValue;
        this.layerTarget.hidden = !blocked;
        this.contentTarget.inert = blocked;
        this.element.setAttribute('aria-busy', String(blocked));
        this.dispatch(blocked ? 'block' : 'unblock');
    }

    block() {
        this.blockedValue = true;
    }

    unblock() {
        this.blockedValue = false;
    }

    toggle() {
        this.blockedValue = !this.blockedValue;
    }
}

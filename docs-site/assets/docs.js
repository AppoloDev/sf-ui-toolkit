// Interactions de la documentation : onglets, copie, largeur responsive, hauteur des aperçus.
document.addEventListener('click', (event) => {
    const tab = event.target.closest('[data-tab]');
    if (tab) {
        const group = tab.closest('[data-tabs]');
        group.querySelectorAll('[data-tab]').forEach((button) => button.setAttribute('aria-selected', String(button === tab)));
        group.querySelectorAll('[data-panel]').forEach((panel) => { panel.hidden = panel.dataset.panel !== tab.dataset.tab; });
        return;
    }

    const copy = event.target.closest('[data-copy]');
    if (copy) {
        const source = document.getElementById(copy.dataset.copy);
        navigator.clipboard.writeText(source.textContent).then(() => {
            const label = copy.textContent;
            copy.textContent = 'Copié';
            setTimeout(() => { copy.textContent = label; }, 1500);
        });
        return;
    }

    const width = event.target.closest('[data-width]');
    if (width) {
        const example = width.closest('[data-example]');
        example.querySelector('iframe').style.width = width.dataset.width;
        example.querySelectorAll('[data-width]').forEach((button) => button.setAttribute('aria-pressed', String(button === width)));
    }
});

window.addEventListener('message', (event) => {
    if (event.data?.type !== 'preview-height') {
        return;
    }
    document.querySelectorAll('iframe[data-preview]').forEach((frame) => {
        if (frame.contentWindow === event.source) {
            frame.style.height = `${Math.ceil(event.data.height)}px`;
        }
    });
});

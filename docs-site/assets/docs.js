// Documentation interactions: tabs, copy, responsive width, preview height.
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
            copy.textContent = 'Copied';
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

document.addEventListener('click', (event) => {
    const theme = event.target.closest('[data-theme-set]');
    if (!theme) return;
    try { localStorage.setItem('docs-theme', theme.dataset.themeSet); } catch (error) { /* private mode: the choice lasts for this page only */ }
    window.applyDocsTheme();
});

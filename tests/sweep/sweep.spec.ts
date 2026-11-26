import { test } from '@playwright/test';
import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Opens every docs preview page (dist/preview/*.html) at three sizes and reports what looks wrong:
 *  - console errors, failed module imports, uncaught exceptions;
 *  - horizontal overflow of the page (the usual mobile defect);
 *  - small touch targets (mobile);
 *  - triggers (aria-haspopup, aria-expanded, popovertarget, details) that do nothing when clicked or tapped;
 *  - overlays (popover, menu, listbox, tooltip, dialog) that leave the screen or open far from their trigger.
 *
 * Findings never fail the run (they are written to report/findings/*.json and merged by report.mjs), unless SWEEP_STRICT=1.
 * Filter with SWEEP_ONLY=<regex on the file name>.
 */

type Finding = { page: string; viewport: string; kind: string; detail: string };

const dist = resolve(process.env.SWEEP_DIST ?? '../../dist');
const only = process.env.SWEEP_ONLY ? new RegExp(process.env.SWEEP_ONLY) : null;
const strict = process.env.SWEEP_STRICT === '1';
const MAX_TRIGGERS = 8;

const viewports = [
    { name: 'mobile', width: 375, height: 740, touch: true, triggers: true, targets: true },
    { name: 'tablet', width: 768, height: 1024, touch: false, triggers: false, targets: false },
    { name: 'desktop', width: 1280, height: 800, touch: false, triggers: true, targets: false },
];

const pages = readdirSync(`${dist}/preview`)
    .filter((file) => file.endsWith('.html'))
    .filter((file) => !only || only.test(file))
    .sort();

mkdirSync('report/findings', { recursive: true });

for (const file of pages) {
    test(file, async ({ browser }, testInfo) => {
        const findings: Finding[] = [];
        const add = (viewport: string, kind: string, detail: string) => findings.push({ page: file, viewport, kind, detail });

        for (const vp of viewports) {
            const context = await browser.newContext({
                viewport: { width: vp.width, height: vp.height },
                hasTouch: vp.touch,
                isMobile: vp.touch,
                deviceScaleFactor: vp.touch ? 2 : 1,
            });
            const page = await context.newPage();
            const errors = new Set<string>();
            page.on('pageerror', (error) => errors.add(`exception: ${error.message}`.slice(0, 300)));
            page.on('console', (message) => {
                if (message.type() === 'error') errors.add(`console: ${message.text()}`.slice(0, 300));
            });
            page.on('requestfailed', (request) => errors.add(`request failed: ${request.url()}`.slice(0, 300)));

            const open = async () => {
                await page.goto(`/preview/${file}`, { waitUntil: 'load' });
                // The Tailwind browser runtime and the Stimulus controllers need a moment after load.
                await page.waitForTimeout(700);
            };
            await open();

            // 1. Horizontal overflow of the page.
            const overflow = await page.evaluate(() => {
                const doc = document.documentElement;
                if (doc.scrollWidth <= doc.clientWidth + 1) return null;
                const culprits: string[] = [];
                for (const el of document.body.querySelectorAll<HTMLElement>('*')) {
                    const r = el.getBoundingClientRect();
                    if (r.width === 0 || r.right <= doc.clientWidth + 1) continue;
                    // Ignore what is inside a container that scrolls on its own.
                    let scrolls = false;
                    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
                        const ox = getComputedStyle(p).overflowX;
                        if (ox === 'auto' || ox === 'scroll' || ox === 'hidden' || ox === 'clip') { scrolls = true; break; }
                    }
                    if (scrolls || getComputedStyle(el).position === 'fixed') continue;
                    culprits.push(`${el.tagName.toLowerCase()}${el.className && typeof el.className === 'string' ? '.' + el.className.split(/\s+/).slice(0, 3).join('.') : ''} (right ${Math.round(r.right)} > ${doc.clientWidth})`);
                    if (culprits.length >= 3) break;
                }
                return `page is ${doc.scrollWidth}px wide in a ${doc.clientWidth}px viewport. ${culprits.join('; ')}`;
            });
            if (overflow) add(vp.name, 'overflow', overflow);

            // 2. Small touch targets.
            if (vp.targets) {
                const small = await page.evaluate(() => {
                    const out: string[] = [];
                    const selector = 'button, [role="button"], [role="tab"], [role="menuitem"], summary, input:not([type="hidden"]), select, textarea, a[href]';
                    for (const el of document.querySelectorAll<HTMLElement>(selector)) {
                        const style = getComputedStyle(el);
                        if (style.visibility === 'hidden' || style.display === 'none' || el.closest('[hidden], [inert]')) continue;
                        const r = el.getBoundingClientRect();
                        if (r.width === 0 || r.height === 0) continue;
                        // Links inside a sentence are exempt.
                        if (el.tagName === 'A' && getComputedStyle(el).display === 'inline') continue;
                        if (el.matches('input[type="checkbox"], input[type="radio"]') && el.closest('label')) continue;
                        if (r.width < 24 || r.height < 24) {
                            out.push(`${el.tagName.toLowerCase()} ${Math.round(r.width)}x${Math.round(r.height)} "${(el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 25)}"`);
                        }
                    }
                    return out;
                });
                if (small.length) add(vp.name, 'touch-target', `${small.length} below 24px: ${small.slice(0, 4).join('; ')}`);
            }

            // 3. Triggers: click or tap each one, then look at what opened.
            if (vp.triggers) {
                const count = await page.evaluate((max) => {
                    const triggers = [...document.querySelectorAll<HTMLElement>('[aria-haspopup]:not([aria-haspopup="false"]), [aria-expanded], [popovertarget], summary')]
                        .filter((el) => {
                            const r = el.getBoundingClientRect();
                            const s = getComputedStyle(el);
                            return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && !el.hasAttribute('disabled') && el.getAttribute('aria-disabled') !== 'true';
                        });
                    triggers.forEach((el, i) => el.setAttribute('data-sweep', String(i)));
                    return Math.min(triggers.length, max);
                }, MAX_TRIGGERS);

                for (let i = 0; i < count; i++) {
                    if (i > 0) await open().then(() => page.evaluate(() => {
                        const triggers = [...document.querySelectorAll<HTMLElement>('[aria-haspopup]:not([aria-haspopup="false"]), [aria-expanded], [popovertarget], summary')]
                            .filter((el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== 'hidden' && !el.hasAttribute('disabled') && el.getAttribute('aria-disabled') !== 'true'; });
                        triggers.forEach((el, n) => el.setAttribute('data-sweep', String(n)));
                    }));
                    const trigger = page.locator(`[data-sweep="${i}"]`);
                    const label = await trigger.evaluate((el) => `${el.tagName.toLowerCase()} "${(el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 25)}"`).catch(() => `trigger ${i}`);
                    const before = await page.evaluate(() => document.body.innerHTML.length);
                    try {
                        await trigger.scrollIntoViewIfNeeded({ timeout: 2000 });
                        if (vp.touch) await trigger.tap({ timeout: 3000 }); else await trigger.click({ timeout: 3000 });
                    } catch (error) {
                        add(vp.name, 'trigger-blocked', `${label}: ${String(error).split('\n')[0].slice(0, 160)}`);
                        continue;
                    }
                    await page.waitForTimeout(450);

                    const result = await page.evaluate((index) => {
                        const trigger = document.querySelector<HTMLElement>(`[data-sweep="${index}"]`);
                        const tr = trigger ? trigger.getBoundingClientRect() : null;
                        const overlays: { name: string; modal: boolean; r: DOMRect }[] = [];
                        const candidates = document.querySelectorAll<HTMLElement>('[popover], dialog, [role="menu"], [role="listbox"], [role="tooltip"], [role="dialog"], [data-slot$="-content"]');
                        for (const el of candidates) {
                            const s = getComputedStyle(el);
                            const open = el.matches(':popover-open') || (el.tagName === 'DIALOG' && (el as HTMLDialogElement).open) || (!el.hasAttribute('popover') && el.tagName !== 'DIALOG' && s.display !== 'none' && s.visibility !== 'hidden' && Number(s.opacity) > 0 && el.getBoundingClientRect().width > 0 && !el.closest('[hidden], [inert]') && el !== trigger);
                            if (!open) continue;
                            const r = el.getBoundingClientRect();
                            if (r.width === 0 || r.height === 0) continue;
                            overlays.push({ name: `${el.tagName.toLowerCase()}${el.getAttribute('data-slot') ? `[${el.getAttribute('data-slot')}]` : ''}`, modal: el.tagName === 'DIALOG' || el.getAttribute('role') === 'dialog' || el.matches('[data-slot*="sheet"], [data-slot*="drawer"], [data-slot*="dialog"]'), r });
                        }
                        const expanded = trigger?.getAttribute('aria-expanded') === 'true' || trigger?.tagName === 'DETAILS' || (trigger?.closest('details') as HTMLDetailsElement | null)?.open === true;
                        return {
                            expanded,
                            htmlChanged: document.body.innerHTML.length,
                            vw: window.innerWidth,
                            vh: window.innerHeight,
                            trigger: tr ? { left: tr.left, top: tr.top, right: tr.right, bottom: tr.bottom } : null,
                            overlays: overlays.map((o) => ({ name: o.name, modal: o.modal, left: o.r.left, top: o.r.top, right: o.r.right, bottom: o.r.bottom, w: o.r.width, h: o.r.height })),
                        };
                    }, i);

                    if (!result.overlays.length && !result.expanded && result.htmlChanged === before) {
                        add(vp.name, 'trigger-no-effect', `${label} did nothing when ${vp.touch ? 'tapped' : 'clicked'}`);
                    }
                    for (const o of result.overlays) {
                        const outside = o.left < -1 || o.top < -1 || o.right > result.vw + 1;
                        if (outside && !(o.modal && o.w > result.vw)) {
                            add(vp.name, 'overlay-offscreen', `${label} opens ${o.name} at ${Math.round(o.left)},${Math.round(o.top)} to ${Math.round(o.right)},${Math.round(o.bottom)} in a ${result.vw}x${result.vh} viewport`);
                        }
                        if (o.modal && o.w > result.vw + 1) add(vp.name, 'overlay-too-wide', `${label} opens ${o.name} ${Math.round(o.w)}px wide in a ${result.vw}px viewport`);
                        if (!o.modal && result.trigger) {
                            const t = result.trigger;
                            const dx = Math.max(t.left - o.right, o.left - t.right, 0);
                            const dy = Math.max(t.top - o.bottom, o.top - t.bottom, 0);
                            const gap = Math.hypot(dx, dy);
                            if (gap > 48) add(vp.name, 'overlay-far-from-trigger', `${label} opens ${o.name} ${Math.round(gap)}px away from it`);
                        }
                    }
                }
            }

            for (const message of errors) add(vp.name, 'error', message);
            await context.close();
        }

        if (findings.length) writeFileSync(`report/findings/${file}.json`, JSON.stringify(findings, null, 1));
        if (strict && findings.length) throw new Error(`${findings.length} finding(s) on ${file}`);
    });
}

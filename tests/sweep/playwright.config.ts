import { defineConfig } from '@playwright/test';
import { resolve } from 'node:path';

const dist = resolve(process.env.SWEEP_DIST ?? '../../dist');
const port = Number(process.env.SWEEP_PORT ?? 4173);

export default defineConfig({
    testDir: '.',
    testMatch: 'sweep.spec.ts',
    // A sweep of every example is long: one test per preview page, several workers, generous timeout.
    // Without fullyParallel a single spec file runs serially in one worker and lands whole in one shard.
    fullyParallel: true,
    timeout: 45_000,
    workers: Number(process.env.SWEEP_WORKERS ?? 4),
    retries: 0,
    reporter: [['line']],
    use: {
        baseURL: `http://127.0.0.1:${port}`,
        // Locally, point SWEEP_CHROME to an installed Chrome; in CI the Playwright Chromium is used.
        launchOptions: process.env.SWEEP_CHROME ? { executablePath: process.env.SWEEP_CHROME } : {},
    },
    webServer: {
        command: `python3 -m http.server ${port} --bind 127.0.0.1 --directory "${dist}"`,
        url: `http://127.0.0.1:${port}/index.html`,
        reuseExistingServer: true,
        timeout: 30_000,
    },
});

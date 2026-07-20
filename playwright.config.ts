import { defineConfig, devices } from "@playwright/test";

/**
 * Seam B — the running-app E2E gate.
 *
 * These tests assert externally observable behaviour of the built hub: the
 * Confluence journey, the single-PDF résumé endpoint, and the no-geo identity
 * invariant. The exhaustive timing/mapping assertions live in Seam A (the
 * Vitest `*.test.ts` suites); here we drive the real app.
 *
 * `reducedMotion: "reduce"` is the default context preference so every hold
 * resolves on the near-instant fast path (see `holdDurationFor`), keeping the
 * navigation assertions stable instead of racing multi-second ring fills.
 *
 * The web server runs a production build (`build` then `start`) so the E2E run
 * also exercises exactly what ships — the same artifact the final green gate
 * builds.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "line" : "list",
  use: {
    baseURL: "http://localhost:3000",
    contextOptions: { reducedMotion: "reduce" },
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});

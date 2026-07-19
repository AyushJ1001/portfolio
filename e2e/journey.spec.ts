import { test, expect, type Page } from "@playwright/test";

/**
 * The Confluence journey — externally observable behaviour of `/`.
 *
 * Behavioural reference: the approved prototype (`prototype/journey-16`, PR #19).
 * All tests run under the config's default `reducedMotion: "reduce"`, so every
 * hold resolves on the near-instant fast path — the same path User Story #12
 * promises reduced-motion visitors, and the one that keeps these timing-based
 * navigation assertions stable.
 */

/** The four currents the confluence must render, with their honest reality chips. */
const CURRENTS = [
  { name: "Engineering", chip: "OPEN", path: "/engineering" },
  { name: "Freelance", chip: "OPEN", path: "/freelance" },
  { name: "Music", chip: "JUST SEEDED", path: "/music" },
  { name: "More", chip: "NOT YET", path: null },
] as const;

/** Press-and-hold a current with the pointer until the ring commits (or times out). */
async function pointerHold(page: Page, name: string) {
  const button = page.getByRole("button", { name: new RegExp(name) });
  const box = await button.boundingBox();
  if (!box) throw new Error(`no bounding box for current "${name}"`);
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
}

test.describe("the confluence journey", () => {
  test("renders four currents with the correct reality-tag labels", async ({
    page,
  }) => {
    await page.goto("/");

    for (const current of CURRENTS) {
      const button = page.getByRole("button", {
        name: new RegExp(current.name),
      });
      await expect(button).toBeVisible();
      await expect(button).toContainText(current.chip);
    }

    // Exactly four currents flow from the single source (scoped to the
    // confluence itself, so the layout's theme toggle isn't counted).
    await expect(page.getByRole("main").getByRole("button")).toHaveCount(4);
  });

  test("holding a live current carries the visitor into that world", async ({
    page,
  }) => {
    await page.goto("/");
    await pointerHold(page, "Engineering");
    await page.waitForURL("**/engineering");
    await page.mouse.up();
    expect(new URL(page.url()).pathname).toBe("/engineering");
  });

  test("the locked …and more berth never navigates on hold", async ({
    page,
  }) => {
    await page.goto("/");
    const more = page.getByRole("button", { name: /More/ });
    await expect(more).toHaveAttribute("aria-disabled", "true");

    await pointerHold(page, "More");
    // Well past the reduced-motion fast-path duration — a live current would
    // have navigated by now; the locked berth must not.
    await page.waitForTimeout(500);
    await page.mouse.up();
    expect(new URL(page.url()).pathname).toBe("/");
  });

  test("keyboard focus + Enter commits the walk", async ({ page }) => {
    await page.goto("/");
    const freelance = page.getByRole("button", { name: /Freelance/ });
    await freelance.focus();
    await expect(freelance).toBeFocused();

    await page.keyboard.down("Enter");
    await page.waitForURL("**/freelance");
    await page.keyboard.up("Enter");
    expect(new URL(page.url()).pathname).toBe("/freelance");
  });

  test("keyboard focus + Space commits the walk", async ({ page }) => {
    await page.goto("/");
    const music = page.getByRole("button", { name: /Music/ });
    await music.focus();

    await page.keyboard.down("Space");
    await page.waitForURL("**/music");
    await page.keyboard.up("Space");
    expect(new URL(page.url()).pathname).toBe("/music");
  });

  test("the reduced-motion fast path still lands in the world", async ({
    page,
  }) => {
    // The whole suite runs under prefers-reduced-motion: reduce; this test
    // documents that the fast path is a real, landing walk — not a no-op.
    await page.goto("/");
    await pointerHold(page, "Music");
    await page.waitForURL("**/music");
    await page.mouse.up();
    await expect(page).toHaveURL(/\/music$/);
  });
});

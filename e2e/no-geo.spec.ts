import { test, expect } from "@playwright/test";

/**
 * The no-geo invariant (#12, User Stories #31–#32).
 *
 * The geography axis is deleted: there is one identity — Pune, India — and no
 * US-specific content or geo-detected variant renders on any surface, whatever
 * the visitor's IP or `Accept-Language`.
 */

/** Every rendered surface of the hub. */
const ROUTES = ["/", "/engineering", "/freelance", "/music"] as const;

/**
 * Substrings that would betray a US-specific variant or a live geo axis. Chosen
 * to be specific enough not to false-positive on ordinary copy (e.g. the bare
 * word "us").
 */
const FORBIDDEN = [
  "United States",
  "U.S.-based",
  "USD",
  "New York",
  "California",
  "Silicon Valley",
  "select your country",
  "geo-detected",
];

test.describe("the no-geo invariant", () => {
  test("identity reads Pune, India on the Freelance surface", async ({
    page,
  }) => {
    await page.goto("/freelance");
    await expect(page.locator("body")).toContainText("Pune");
  });

  for (const route of ROUTES) {
    test(`no US-specific or geo-detected content renders on ${route}`, async ({
      page,
    }) => {
      await page.goto(route);
      const body = (await page.locator("body").innerText()).toLowerCase();
      for (const term of FORBIDDEN) {
        expect(body, `"${term}" should not render on ${route}`).not.toContain(
          term.toLowerCase(),
        );
      }
    });
  }

  test("the Accept-Language header changes nothing about identity", async ({
    browser,
  }) => {
    // A US English visitor still gets the single Pune identity — no branch.
    const context = await browser.newContext({
      locale: "en-US",
      extraHTTPHeaders: { "Accept-Language": "en-US,en;q=0.9" },
    });
    const page = await context.newPage();
    await page.goto("/freelance");
    await expect(page.locator("body")).toContainText("Pune");
    const body = (await page.locator("body").innerText()).toLowerCase();
    expect(body).not.toContain("united states");
    await context.close();
  });
});

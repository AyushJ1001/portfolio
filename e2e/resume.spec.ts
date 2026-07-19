import { test, expect } from "@playwright/test";

/**
 * The résumé endpoint — one generalist PDF for everyone (#23).
 *
 * `GET /resume` must serve a single `application/pdf` as an attachment
 * regardless of any stray `?role=` / geo hint: the role picker and country
 * toggle are gone (User Stories #18, #32), so the params are inert.
 */
test.describe("the résumé endpoint", () => {
  const cases = [
    { label: "with no params", path: "/resume" },
    { label: "with a stray ?role=", path: "/resume?role=backend" },
    { label: "with a geo hint", path: "/resume?country=us&role=ml" },
  ];

  for (const { label, path } of cases) {
    test(`serves one attachment PDF ${label}`, async ({ request }) => {
      const res = await request.get(path);

      expect(res.status()).toBe(200);
      expect(res.headers()["content-type"]).toContain("application/pdf");
      expect(res.headers()["content-disposition"]).toContain("attachment");

      // A real PDF payload, not an HTML error page.
      const body = await res.body();
      expect(body.subarray(0, 5).toString("latin1")).toBe("%PDF-");
    });
  }

  test("serves the same single PDF whatever the role param", async ({
    request,
  }) => {
    const a = await (await request.get("/resume")).body();
    const b = await (await request.get("/resume?role=frontend")).body();
    const c = await (await request.get("/resume?role=ml&country=us")).body();

    expect(b.equals(a)).toBe(true);
    expect(c.equals(a)).toBe(true);
  });
});

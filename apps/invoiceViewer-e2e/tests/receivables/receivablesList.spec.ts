import { expect, test } from "@playwright/test";


test.describe("Receivables Page", () => {
  test("Should show label Receivables when navigating to /receivables", async ({
    baseURL,
    page,
  }) => {
    console.log("Running E2E on env: ", process.env.E2E_APP_HOST)

    await page.goto("/receivables");

    const pageContent = await page.textContent("body");

    expect(pageContent).toContain("Receivables");
  });
});

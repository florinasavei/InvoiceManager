import { expect, test } from "@playwright/test";

test.describe("Receivables Page", () => {
  test("Should show label Receivables when navigating to /receivables", async ({
    baseURL,
    page,
  }) => {
    await page.goto("/receivables");

    const pageContent = await page.textContent("body");

    expect(pageContent).toContain("Receivables");
  });

  test("Should toggle columns", async ({ baseURL, page }) => {
    await page.goto("/receivables");

    const headerRow = await page
      .locator('.MuiDataGrid-columnHeadersInner [role="row"]')
      .first();

    // Select all child div elements
    const headerElement = await headerRow.locator(
      "div.MuiDataGrid-columnHeader"
    );

    // Assert that there are exactly 8 rows initially
    let headerElementsCount = await headerElement.count();
    expect(headerElementsCount).toBe(8);

    await page.waitForTimeout(1500);

    const WidthTogglerContainer = await page.locator(
      '[test-dataid="WidthToggler"]'
    );

    const togglerButton = await WidthTogglerContainer.locator("button");

    await togglerButton.click();

    // Assert that there are exactly 4 rows when collapses
    headerElementsCount = await headerElement.count();
    expect(headerElementsCount).toBe(4);
  });
  
});

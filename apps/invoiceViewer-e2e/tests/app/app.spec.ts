import { expect, test } from "@playwright/test";

test.describe("App Root", () => {
  test("Should change theme", async ({ baseURL, page }) => {
 

    await page.goto("/");

    const AppRoot = await page.getByTestId("AppRoot");
    const changeThemeButton = await page.getByTestId("ThemeSwitcher");

    // set the theme to dark (light is the default one)
    await changeThemeButton.click();

    let backgroundColor = await AppRoot.evaluate((el) => {
      const styles = getComputedStyle(el);
      return styles.backgroundColor;
    });

    expect(backgroundColor).toBe("rgb(0, 0, 0)");

    await changeThemeButton.click();

    backgroundColor = await AppRoot.evaluate((el) => {
      const styles = getComputedStyle(el);
      return styles.backgroundColor;
    });

    expect(backgroundColor).toBe("rgb(255, 255, 255)");
  });
});

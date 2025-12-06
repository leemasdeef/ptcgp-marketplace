import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Home page displays 20 pokemon cards", async ({ page }) => {
  const cards = page.getByTestId("card");
  await expect(cards).toHaveCount(20);
});

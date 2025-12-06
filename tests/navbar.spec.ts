import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Navbar renders", async ({ page }) => {
  await expect(page.getByRole("navigation")).toBeVisible();
});

test("Navbar links navigate correctly", async ({ page }) => {
  const homeLink = page.getByRole("link", { name: "PokeHunt" });
  await expect(homeLink).toBeVisible(); //check if exists

  const cartLink = page.getByRole("link", { name: "Cart" });
  await expect(cartLink).toBeVisible(); //check if exists

  await homeLink.click();
  await expect(page).toHaveURL("/");

  await cartLink.click();
  await expect(page).toHaveURL("/cart");
});

import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Home page displays 20 pokemon cards", async ({ page }) => {
  const cards = page.getByTestId("card");
  await expect(cards).toHaveCount(20);
});

test("Page button correctly navigates and renders next 20 cards", async ({
  page,
}) => {
  // Arrange
  const pageButtons = page.getByTestId("page button container");
  const leftButton = page.getByTestId("page left");
  const rightButton = page.getByTestId("page right");

  // Test render
  await expect(pageButtons).toBeVisible();

  // Act
  await rightButton.click();

  // Assert
  await expect(page).toHaveURL("/?page=2");

  const cards = page.getByTestId("card");
  await expect(cards).toHaveCount(20);

  // Check for new cards
  const firstCard = cards.first();
  const id = await firstCard.getAttribute("data-id");

  expect(id).toBe("021");

  //Check if left button goes back to first page

  await leftButton.click();
  await expect(page).toHaveURL("/?page=1");
});

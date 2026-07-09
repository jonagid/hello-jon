const { test, expect } = require("@playwright/test");

test("page loads and shows the Study Tracker", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500");

  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("#newTopicInput")).toBeVisible();
  await expect(page.locator("#addTopicButton")).toBeVisible();
});

test("user can add a new topic", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500");

  await page.locator("#newTopicInput").fill("React");

  await page.locator("#addTopicButton").click();

  await expect(page.getByText("React")).toBeVisible();
});
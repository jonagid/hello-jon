const { test, expect } = require("@playwright/test");

test("page loads and shows the Study Tracker", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500");

  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("#newTopicInput")).toBeVisible();
  await expect(page.locator("#addTopicButton")).toBeVisible();
});
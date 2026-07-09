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

test("user cannot add a blank topic", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500");

  const topicsBefore = await page.locator("#topicList li").count();

  await page.locator("#addTopicButton").click();

  const topicsAfter = await page.locator("#topicList li").count();

  expect(topicsAfter).toBe(topicsBefore);
});

test("user can mark a topic as completed", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500");

  await page.locator("#newTopicInput").fill("Playwright");
  await page.locator("#addTopicButton").click();

  const playwrightTopic = page.locator("li").filter({ hasText: "Playwright" });

  await playwrightTopic.locator('input[type="checkbox"]').check();

  await expect(playwrightTopic.locator("span")).toHaveClass(/completed-topic/);

  await expect(page.locator("#progressPercent")).toContainText("Progress:");
});

test("user can delete a topic", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500");

  await page.locator("#newTopicInput").fill("Delete Me");
  await page.locator("#addTopicButton").click();

  const topic = page.locator("li").filter({ hasText: "Delete Me" });

  await expect(topic).toBeVisible();

  await topic.getByRole("button", { name: "Delete" }).click();

  await expect(page.getByText("Delete Me")).not.toBeVisible();
});

test("completed filter only shows completed topics", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500");

  await page.locator("#newTopicInput").fill("Incomplete Topic");
  await page.locator("#addTopicButton").click();

  await page.locator("#newTopicInput").fill("Completed Topic");
  await page.locator("#addTopicButton").click();

  const completedTopic = page.locator("li").filter({ hasText: "Completed Topic" });

  await completedTopic.locator('input[type="checkbox"]').check();

  await page.locator("#showCompletedButton").click();

  await expect(page.getByText("Completed Topic")).toBeVisible();

  await expect(page.getByText("Incomplete Topic")).not.toBeVisible();
});

test("active filter only shows incomplete topics", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500");

  await page.locator("#newTopicInput").fill("Active Topic");
  await page.locator("#addTopicButton").click();

  await page.locator("#newTopicInput").fill("Finished Topic");
  await page.locator("#addTopicButton").click();

  const finishedTopic = page.locator("li").filter({ hasText: "Finished Topic" });

  await finishedTopic.locator('input[type="checkbox"]').check();

  await page.locator("#showActiveButton").click();

  await expect(page.getByText("Active Topic")).toBeVisible();

  await expect(page.getByText("Finished Topic")).not.toBeVisible();
});

test("topics persist after page refresh", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500");

  await page.locator("#newTopicInput").fill("Persistent Topic");
  await page.locator("#addTopicButton").click();

  await expect(page.getByText("Persistent Topic")).toBeVisible();

  await page.reload();

  await expect(page.getByText("Persistent Topic")).toBeVisible();
});
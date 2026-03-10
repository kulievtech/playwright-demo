import { test } from "@playwright/test";

test("Clicking", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Single Click
  await page.click("//button[text()='Login']");

  // Double Click
  await page.dblclick("//span[@alt='toggle-switch']");
});

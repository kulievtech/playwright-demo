import { test } from "@playwright/test";

test("Filling & Typing", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Filling Input Field
  await page.fill("#username", "myUsername");

  // Typing Input Field
  await page
    .locator("#email")
    .pressSequentially("qa@tester.com", { delay: 300 });
});

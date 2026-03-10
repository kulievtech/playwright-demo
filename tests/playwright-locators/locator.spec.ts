import { test } from "@playwright/test";

test("locator()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  //   await page.locator("input[placeholder='Username']").fill("test@test.com");
  //   await page.locator("form input[placeholder='Password']").fill("mypassword");
  //   await page.locator("//button[text()='Login']").click();

  await page.fill("input[placeholder='Username']", "test@test.com");
  await page.fill("form input[placeholder='Password']", "mypassword");
  await page.click("//button[text()='Login']");
});

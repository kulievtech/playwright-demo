import { expect, test } from "@playwright/test";

test("getByText()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  const text = await page.getByText("This is a sample").textContent();
  console.log(text);

  expect(text).toBeTruthy();
});

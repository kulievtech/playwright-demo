import { test, expect } from "@playwright/test";

test("Assertions on Attributes & CSS", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  // Verify the placeholder attribute of the username input field
  await expect(page.locator("#username")).toHaveAttribute(
    "placeholder",
    "Username",
  );

  // Verify the background color of the header
  await expect(page.locator("//button[text()='Login']")).toHaveCSS(
    "border-radius",
    "8px",
  );
});

import { test, expect } from "@playwright/test";

test("login page", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});

test(
  "Selectors Practice - Basic Interactions",
  { tag: ["@smoke"] },
  async ({ page }) => {
    // 🌐 Navigate to the new website
    await page.goto("https://selectors-practice.onrender.com/");

    // ⏳ Wait for main heading to be visible
    await page.waitForSelector("h2[title='Login-form']");

    // ✅ Assertion - Verify page title text
    const heading = await page.textContent("h2[title='Login-form']");
    expect(heading).toEqual("Login Form");

    // ⌨️ Fill input using ID selector
    await page.fill("#username", "Alexa");

    // ⌨️ Fill email field using placeholder selector
    await page.fill("input[placeholder='Password']", "john@example.com");

    // 🖱️ Click button using xpath attribute and text selector
    await page.click("//button[@type='submit'][text()='Login']");

    // ⏳ Wait for success message and get the text
    await page.waitForSelector("#loginMessage");
    const successMessage = await page.textContent("#loginMessage");

    // ✅ Assertion - Verify success message appears
    expect(successMessage).toContain("Alexa");
  },
);

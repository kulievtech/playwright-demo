import { test, expect } from "@playwright/test";

test("truthy and falsy values", async () => {
  const a = "";
  const b = null;

  expect.soft(a).toBeTruthy(); // Fails
  expect(b).toBeFalsy(); // Passes
});

test("equality checks", async () => {
  const num = 10;
  const str = "Hello";

  expect(num).toBe(10); // Exact value
  expect(str).toEqual("Hello"); // Deep equality
});

test("comparison checks", async () => {
  const score = 85;

  expect(score).toBeGreaterThan(80); // passes
  expect(score).toBeGreaterThanOrEqual(85); // passes
  expect(score).toBeLessThan(100); // passes
  expect(score).toBeLessThanOrEqual(85); // passes
});

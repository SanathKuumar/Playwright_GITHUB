import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.qaplayground.com/practice/input');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Enter hollywood movie name' }).type("Bahubali");
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Append a text and press' }).type("I am very Happy and ");
  await page.waitForTimeout(3000);
  });
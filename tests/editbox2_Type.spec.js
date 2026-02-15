import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.qaplayground.com/practice/input');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Enter hollywood movie name' }).type("Magadheera");
  await page.waitForTimeout(3000);
  let result=  await page.getByRole('textbox', { name: 'Append a text and press' }).inputValue();
  await page.getByRole('textbox', { name: 'Append a text and press' }).clear();
   await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Append a text and press' }).type(result + " I am So Happy!");
  await page.waitForTimeout(3000);
  });
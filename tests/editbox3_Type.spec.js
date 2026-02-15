import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.qaplayground.com/practice/input');
  await page.waitForTimeout(3000);
<<<<<<< HEAD
  await page.getByRole('textbox', { name: 'Enter hollywood movie name' }).type("Magadheeera");
=======
  await page.getByRole('textbox', { name: 'Enter hollywood movie name' }).type("Baahubali");
>>>>>>> 2211637f9c6a0aa365e700588ea5b5169623de0c
  await page.waitForTimeout(3000);
  let result=  await page.getByRole('textbox', { name: 'Append a text and press' }).inputValue();
  await page.getByRole('textbox', { name: 'Append a text and press' }).clear();
   await page.waitForTimeout(3000);
<<<<<<< HEAD
  await page.getByRole('textbox', { name: 'Append a text and press' }).type(result + " I am Super Happy!");
=======
  await page.getByRole('textbox', { name: 'Append a text and press' }).type(result + " I am Very Happy!");
>>>>>>> 2211637f9c6a0aa365e700588ea5b5169623de0c
  await page.waitForTimeout(3000);
  await expect(page.getByRole('textbox', { name: 'Verify text present inside' })).toBeVisible();
  await page.waitForTimeout(3000);
  await expect(page.getByRole('textbox', { name: 'Check edit field is disabled' })).toBeDisabled();
   await page.waitForTimeout(3000);
   await expect(page.getByRole('textbox', { name: 'Check text is readonly' })).toBeEnabled();
    });

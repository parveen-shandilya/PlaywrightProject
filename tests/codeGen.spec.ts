import { test, expect,Locator } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('playwright');
  await page.getByPlaceholder('Search').press('Enter');
});
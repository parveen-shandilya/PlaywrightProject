import { test, expect,Locator } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('playwright');
  await page.getByPlaceholder('Search').press('Enter');
});

test('test1', async ({ page }) => {
  await page.goto('https://www.guru99.com/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByLabel('Primary Navigation').getByRole('link', { name: 'Testing' }).click();
  await page.getByRole('link', { name: 'Software Testing', exact: true }).click();
  await page.getByTitle('What is Software Testing?').click();
  await page.goto('https://www.guru99.com/software-testing-introduction-importance.html');
  await page.getByRole('link', { name: 'Next' }).click();
});

test.only('test2', async ({ page }) => {
  await page.goto('https://www.guru99.com/');
  await page.getByLabel('Primary Navigation').getByRole('link', { name: 'Testing' }).click();
  await page.getByRole('link', { name: 'SAP Testing' }).click();
  await page.getByRole('link', { name: 'What is Maintenance of SAP' }).click();
  await page.getByRole('link', { name: 'Types of Testing Applicable to SAP Applications', exact: true }).click();
  await page.getByRole('link', { name: 'Big Data' }).click();
  await page.getByRole('link', { name: 'DevOps' }).click();
  await page.getByRole('link', { name: 'Puppet Tutorial for Beginners' }).click();
});


// setup.ts
import { test ,expect} from '@playwright/test';

let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
});

test.afterAll(async () => {
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await page.close();
});

test.beforeEach(async () => {
    // Any setup needed before each test
});

test.afterEach(async () => {
    // Any cleanup needed after each test
});

export { page }; // Export the page variable for use in your tests
export {expect};


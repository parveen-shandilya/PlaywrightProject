import { test, expect } from '../fixture/pomFixture.ts';

test('Login Conduit test using POM', async ({ page, landingPage,signinPage}) => {
  await page.goto('https://react-redux.realworld.io/');
  await landingPage.clickSignInButton();
  await signinPage.enterEmailId("playwrightdemo@gmail.com");
  await signinPage.enterPassword("playwrightdemo");
  await page.close();
});
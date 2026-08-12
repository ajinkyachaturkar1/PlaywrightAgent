// spec: specs/sauce-demo-test-plan.md

const { test, expect } = require('@playwright/test');
const { ShopifyLoginPage } = require('../page_objects/ShopifyLoginPage');

test.describe('SauceDemo Shopify Flows', () => {
  test('Header login flow to Sign In', async ({ page }) => {
    const loginPage = new ShopifyLoginPage(page);

    await loginPage.open();
    await loginPage.clickLoginLink();
    await loginPage.login('test123@qa.com', 'test1234');

    // A basic post-login check — most Shopify stores redirect to an account page
    await expect(page).toHaveURL(/account/i);
  });
});

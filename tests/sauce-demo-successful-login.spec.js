// spec: specs/sauce-demo-test-plan.md
// seed: tests/seed.spec.js

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/LoginPage');
const { InventoryPage } = require('../page_objects/InventoryPage');
const { SAUCEDEMO_CREDENTIALS } = require('../utils/credentials');

test.describe('SauceDemo Core Flows', () => {
  test('Successful login and inventory access', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.open();
    await loginPage.login(SAUCEDEMO_CREDENTIALS.username, SAUCEDEMO_CREDENTIALS.password);

    await expect(inventoryPage.productsTitle).toHaveText('Products');
    await expect(inventoryPage.inventoryList).toBeVisible();
  });
});

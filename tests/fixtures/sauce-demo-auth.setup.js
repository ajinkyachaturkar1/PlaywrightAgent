const { test, setup, expect } = require('@playwright/test');
const { LoginPage } = require('../../page_objects/LoginPage');
const { InventoryPage } = require('../../page_objects/InventoryPage');
const { SAUCEDEMO_CREDENTIALS } = require('../../utils/credentials');

setup('authenticate SauceDemo user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.open();
  await loginPage.login(SAUCEDEMO_CREDENTIALS.username, SAUCEDEMO_CREDENTIALS.password);

  await expect(inventoryPage.productsTitle).toBeVisible();
  await expect(inventoryPage.inventoryList).toBeVisible();

  await page.context().storageState({ path: 'tests/.auth/saucedemo.json' });
});s

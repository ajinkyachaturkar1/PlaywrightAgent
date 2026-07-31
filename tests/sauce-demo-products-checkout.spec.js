// spec: specs/sauce-demo-test-plan.md
// seed: tests/seed.spec.js

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/LoginPage');
const { InventoryPage } = require('../page_objects/InventoryPage');
const { CheckoutPage } = require('../page_objects/CheckoutPage');
const { SAUCEDEMO_CREDENTIALS } = require('../utils/credentials');
const { SAUCEDEMO_PRODUCTS } = require('../utils/products');
const { SAUCEDEMO_CUSTOMER_INFO } = require('../utils/customerInfo');

test.describe('SauceDemo Core Flows', () => {
  test('Place order for Sauce Labs Bike Light and Sauce Labs Onesie and attempt receipt download', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.open();
    await loginPage.login(SAUCEDEMO_CREDENTIALS.username, SAUCEDEMO_CREDENTIALS.password);

    await inventoryPage.addProductToCart(SAUCEDEMO_PRODUCTS.bikeLight);
    await inventoryPage.addProductToCart(SAUCEDEMO_PRODUCTS.onesie);
    await inventoryPage.openCart();

    await checkoutPage.startCheckout();
    await checkoutPage.fillCheckoutInfo(
      SAUCEDEMO_CUSTOMER_INFO.firstName,
      SAUCEDEMO_CUSTOMER_INFO.lastName,
      SAUCEDEMO_CUSTOMER_INFO.postalCode
    );
    await checkoutPage.finishOrder();

    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    await checkoutPage.downloadOrderReceipt();
  });
});

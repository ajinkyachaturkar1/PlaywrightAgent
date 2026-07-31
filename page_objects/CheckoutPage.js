class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('.complete-header');
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async downloadOrderReceipt() {
    const downloadLink = this.page.locator('a[href*=".pdf"], a:has-text("PDF"), a:has-text("Receipt"), button:has-text("Download")').first();
    const count = await downloadLink.count();

    if (count > 0) {
      await downloadLink.click();
      await this.page.waitForEvent('download', { timeout: 5000 }).catch(() => {});
    }
  }
}

module.exports = { CheckoutPage };

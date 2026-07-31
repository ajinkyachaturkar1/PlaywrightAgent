class InventoryPage {
  constructor(page) {
    this.page = page;
    this.productsTitle = page.locator('.title');
    this.inventoryList = page.locator('.inventory_list');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addProductToCart(productName) {
    const addButton = this.page.locator(`[data-test="add-to-cart-${this._slugify(productName)}"]`);
    await addButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  _slugify(productName) {
    return productName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
}

module.exports = { InventoryPage };

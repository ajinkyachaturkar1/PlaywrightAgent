class ShopifyLoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: /log in|login in|sign in/i });
    this.emailInput = page.locator('input[name="customer[email]"], #CustomerEmail, input#CustomerEmail');
    this.passwordInput = page.locator('input[name="customer[password]"], #CustomerPassword, input#CustomerPassword');
    this.signInButton = page.getByRole('button', { name: /sign in|sign in/i });
  }

  async open() {
    await this.page.goto('https://sauce-demo.myshopify.com/');
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}

module.exports = { ShopifyLoginPage };

export class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = '#user-name';
    this.password = '#password';
    this.loginBtn = '#login-button';
    this.errorMsg = '[data-test="error"]';
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginBtn);
  }

  async getError() {
    return this.page.locator(this.errorMsg);
  }
}
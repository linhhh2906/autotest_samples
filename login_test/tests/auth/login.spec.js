// tests/auth/login.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');

test.describe('Login Feature', () => {

  test('Login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate('/login');
    await loginPage.login('admin', 'password123');

    await expect(page).toHaveURL(/dashboard/);
    await expect(await dashboardPage.getProfileName()).toContain('Admin');
  });

  test('Login failed with wrong credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate('/login');
    await loginPage.login('wrong', 'wrong');

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid credentials');
  });

});
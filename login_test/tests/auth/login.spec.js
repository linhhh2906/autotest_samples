import { test, expect } from '@playwright/test';
import { LoginPage as loginpage } from '../pages/login.page';

test.describe('Login Test Suite', () => {

  test('Login success', async ({ page }) => {
    const loginPage = new loginpage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_container')).toBeVisible();
  });

  test('Login fail - wrong password', async ({ page }) => {
    const loginPage = new loginpage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');

    await expect(loginPage.errorMsg).toBeVisible();
  });

  test('Login fail - empty username', async ({ page }) => {
    const loginPage = new loginpage(page);

    await loginPage.goto();
    await loginPage.login('', 'secret_sauce');

    await expect(loginPage.errorMsg).toContainText('Username is required');
  });

  test('Login fail - locked user', async ({ page }) => {
    const loginPage = new loginpage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMsg).toContainText('locked out');
  });

});
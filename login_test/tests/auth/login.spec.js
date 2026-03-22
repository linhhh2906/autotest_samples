import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { loginData } from '../../utils/test-data';

//test.describe('Login Feature - SauceDemo', () => {

  test('TC01 - Login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to login page
    await loginPage.goToLoginPage();

    // Step 2: Login with valid credentials
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    // Expected: Redirect to inventory page
    await expect(page).toHaveURL(/inventory/);

    // Expected: Inventory page visible
    await expect(loginPage.inventoryContainer).toBeVisible();
  });

  test('TC02 - Login failed with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to login page
    await loginPage.goToLoginPage();

    // Step 2: Login with invalid credentials
    await loginPage.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );

    // Expected: Error message displayed
    await expect(loginPage.errorMessage).toBeVisible();

    // Expected: Correct error text
    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match'
    );
  });

//});
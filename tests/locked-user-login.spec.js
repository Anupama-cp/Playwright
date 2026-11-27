const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('SauceDemo locked user login', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
  });

  test('should show an error when a locked user logs in', async () => {
    await expect(loginPage.errorMessage).toContainText(
      'Sorry, this user has been locked out.'
    );
  });
});

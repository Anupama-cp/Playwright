const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('SauceDemo successful login', () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should display the inventory when a valid user logs in', async ({ page }) => {
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(inventoryPage.inventoryTitle).toHaveText('Products');
    await expect(inventoryPage.inventoryContainer).toBeVisible();
  });
});
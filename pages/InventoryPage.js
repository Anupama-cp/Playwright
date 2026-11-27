class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryTitle = page.locator('[data-test="title"]');
    this.inventoryContainer = page.locator('[data-test="inventory-container"]');
  }
}

module.exports = { InventoryPage };

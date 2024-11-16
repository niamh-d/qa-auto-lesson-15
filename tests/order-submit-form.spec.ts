import {expect, test} from '@playwright/test'

test.describe( "Input form feature", () => {

test.beforeEach(async ({ page }) => {
    const path = require('path');
    const filePath = `file://${path.resolve('html/input-form-feature.html')}`;
    await page.goto(filePath);
})

test('button is disabled initially', async ({ page }) => {
    const orderButton = page.getByTestId("submit-order")
    const inputUsername = page.getByTestId("username")
    const inputEmail = page.getByTestId("email")
    const okPopUp = page.locator("#popup-message")

    await expect(orderButton).toBeDisabled()
    await inputUsername.fill("testUser")
    await inputEmail.fill("testUser@test.com")
    await expect(orderButton).toBeEnabled()

    await orderButton.click()
    await expect(okPopUp).toBeVisible()
});

test('button is disabled when data is missing', async ({ page }) => {
    const orderButton = page.getByTestId("submit-order")
    const inputUsername = page.getByTestId("username")
    const inputEmail = page.getByTestId("email")
    const okPopUp = page.locator("#popup-message")

    await expect(orderButton).toBeDisabled()
    await inputUsername.fill("testUser")
    await inputEmail.fill("testUser@test.com")
    await expect(orderButton).toBeEnabled()

    await inputUsername.fill("")
    await inputEmail.fill("")
    await expect(orderButton).toBeDisabled()
});
})
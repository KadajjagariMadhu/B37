import { test, expect } from "@playwright/test";
test("verify simple alert", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.locator('//button[text()="Click for JS Alert"]').click()
    page.on("dialog", async dialog => {
        expect(dialog.message()).toBe("I am a JS Alert")
        expect(dialog.type()).toBe('alert')
        await dialog.accept()

    })

})

test("verify confirm alert", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.locator("//button[text()='Click for JS Confirm']").click()
    page.on("dialog", async dialog => {
        expect(dialog.message()).toBe("I am a JS Confirm")
        expect(dialog.type()).toBe("confirm")
        await dialog.dismiss()
    })
})

test("verify prompt alert", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.locator("//button[text()='Click for JS Prompt']").click()
    page.on("dialog", async dialog => {
        expect(dialog.message()).toBe("I am a JS prompt")
        expect(dialog.type()).toBe("prompt")
        await dialog.accept("Madhu")
    })

})
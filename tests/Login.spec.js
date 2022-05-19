
////////////////////////////////////////////////////
// Test Data for Login.spec.js is Hard Coded      //
////////////////////////////////////////////////////


const {test} =require('@playwright/test')

test('Login', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const navigationPromise = page.waitForNavigation()

await page.goto('https://www.solesavy.com')

await page.setViewportSize({ width: 1920, height: 916 })

await page.waitForSelector('.header-fixed-wrapper > .u21-navigation-v2 > .nav-container > .buttons > .login')
await page.click('.header-fixed-wrapper > .u21-navigation-v2 > .nav-container > .buttons > .login')

await navigationPromise

await page.waitForSelector('#loginId')
await page.click('#loginId')
await page.type('#loginId', 'mihir.bhatt+premium@solesavy')

await page.waitForSelector('#password')
await page.click('#password')
await page.type('#password', 'Winteriscoming!')

await page.waitForSelector('.row > .col-xs > .ss__form-action-block > .login_form_button > .ss-login-bt')
await page.click('.row > .col-xs > .ss__form-action-block > .login_form_button > .ss-login-bt')

await navigationPromise


await browser.close() });
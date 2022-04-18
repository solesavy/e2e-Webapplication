const { chromium } = require('playwright');
const browser = await chromium.launch()
const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()

await page.goto('https://staging.solesavy.com/register/basic-account-registration/')

await page.setViewportSize({ width: 1920, height: 941 })

await page.waitForSelector('.container > .article > .article__page-title--hero > .content > .content__title')
await page.click('.container > .article > .article__page-title--hero > .content > .content__title')

await page.waitForSelector('#user_first_name1')
await page.click('#user_first_name1')

await navigationPromise

await page.waitForSelector('#user_last_name1')
await page.click('#user_last_name1')

await page.waitForSelector('#mepr-address-one1')
await page.click('#mepr-address-one1')

await page.waitForSelector('#mepr-address-two1')
await page.click('#mepr-address-two1')

await page.waitForSelector('#mepr-address-city1')
await page.click('#mepr-address-city1')

await page.waitForSelector('#mepr-address-country1')
await page.click('#mepr-address-country1')

await page.selectOption('#mepr-address-country1', 'CA')

await page.waitForSelector('#mepr-address-country1')
await page.click('#mepr-address-country1')

await page.waitForSelector('#mepr-address-state1')
await page.click('#mepr-address-state1')

await page.selectOption('#mepr-address-state1', 'BC')

await page.waitForSelector('#mepr-address-state1')
await page.click('#mepr-address-state1')

await page.waitForSelector('#mepr-address-zip1')
await page.click('#mepr-address-zip1')

await page.waitForSelector('#mepr_sneaker_size1')
await page.click('#mepr_sneaker_size1')

await page.selectOption('#mepr_sneaker_size1', '10-5')

await page.waitForSelector('#mepr_sneaker_size1')
await page.click('#mepr_sneaker_size1')

await page.waitForSelector('#user_login1')
await page.click('#user_login1')

await page.waitForSelector('#user_email1')
await page.click('#user_email1')

await page.waitForSelector('#mepr_user_password1')
await page.click('#mepr_user_password1')

await page.waitForSelector('#mepr_user_password_confirm1')
await page.click('#mepr_user_password_confirm1')

await page.waitForSelector('#mepr_agree_to_tos1')
await page.click('#mepr_agree_to_tos1')

await page.waitForSelector('#mepr_agree_to_privacy_policy1')
await page.click('#mepr_agree_to_privacy_policy1')

await page.waitForSelector('.article__main > .mp_wrapper > .mepr-signup-form > .mp-form-submit > .mepr-submit')
await page.click('.article__main > .mp_wrapper > .mepr-signup-form > .mp-form-submit > .mepr-submit')


await page.screenshot({ path: 'screenshot_1.png', fullPage: true })


await browser.close()
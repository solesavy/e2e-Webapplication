/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test Data for BasicReg.spec.js is Hard Coded                                                        //
//When testing the BasicReg.spec.js, Please make sure to change the test input data to the actual data.//
/////////////////////////////////////////////////////////////////////////////////////////////////////////

const {test} =require('@playwright/test')

test('BasicReg Test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const navigationPromise = page.waitForNavigation()

    await page.goto('https://staging.solesavy.com/register/basic-account-registration/')

    await page.setViewportSize({ width: 1920, height: 941 })

   
    await page.waitForSelector('#user_first_name1')
    await page.type('#user_first_name1', 'Alan')

    await navigationPromise

    await page.waitForSelector('#user_last_name1')
    await page.type('#user_last_name1', 'Turing')

    await page.waitForSelector('#mepr-address-one1')
    await page.type('#mepr-address-one1', '123 Main St')

    await page.waitForSelector('#mepr-address-two1')
    await page.type('#mepr-address-two1', 'Apt. 1')

    await page.waitForSelector('#mepr-address-city1')
    await page.type('#mepr-address-city1', 'San Francisco')

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
    await page.type('#mepr-address-zip1', 'A1A1A1')

    await page.waitForSelector('#mepr_sneaker_size1')
    await page.click('#mepr_sneaker_size1')

    await page.selectOption('#mepr_sneaker_size1', '10-5')

    await page.waitForSelector('#mepr_sneaker_size1')
    await page.click('#mepr_sneaker_size1')

    await page.waitForSelector('#user_login1')
    await page.type('#user_login1', 'Alan.Player')

    await page.waitForSelector('#user_email1')
    await page.type('#user_email1','mihir.bhatt+alan123@solesavy.com')

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

    await page.wait('timeout')

    await navigationPromise

    const element1 = await page.$('#wrapper > #main > .login-block > .container > h1')
    await element1.screenshot({ path: 'screenshot_1.png' })

    await page.waitForSelector('.tippy-content > .profile-menu > .logout > a > span')
    await page.click('.tippy-content > .profile-menu > .logout > a > span')

   
    
    await navigationPromise

    await browser.close()


});
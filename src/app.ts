import { remote } from 'webdriverio';

async function fn() {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: process.env.CI ? ['headless', 'disable-gpu'] : []
            }
        }
    })

    await browser.url('https://infokristaly.hu')

    const apiLink = await browser.$('=Script nyelvek')
    await apiLink.click()

    await browser.saveScreenshot('./screenshot.png')
    await browser.deleteSession()
}

fn();
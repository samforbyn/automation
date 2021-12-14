const {By} = require("selenium-webdriver")


module.exports = {
    crossedOff: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('Spiderman')

        await driver.findElement(By.xpath('//button')).click()

        await driver.findElement(By.xpath('//span')).click()

        const checkedClass = await driver.findElement(By.className("checked"))
        
        const displayed = checkedClass.isDisplayed()

        expect(displayed).toBeTruthy()

    },

    deletedMovie: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('Spiderman')

        await driver.findElement(By.xpath('//button')).click()

        const movieTxt = await driver.findElement(By.xpath('//span')).getText()

        const movie = await driver.findElement(By.xpath(`//button[contains(@id, ${movieTxt})]`))

        await driver.findElement(By.xpath(`//button[contains(@id, ${movieTxt})]`)).click()
        
        const displayed = movie.isDisplayed()

        expect(displayed).toBeFalsy()
    },
}
const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')
const {deletedMovie,
       crossedOff
    } = require("./movieFunctions")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})
 
test("movie was deleted", async () => {
    await deletedMovie(driver)
    await driver.sleep(3000)
})

test("movie crossed off", async () => {
    await crossedOff(driver)
    await driver.sleep(3000)
})
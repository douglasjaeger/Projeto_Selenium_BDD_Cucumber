import { Builder } from "selenium-webdriver";
import { DEFAULT_TIMEOUT } from "./consts.js";

export default class DriverUtils {

    static async startChromeDriver(){
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({implicit: DEFAULT_TIMEOUT});
        return driver
    }

}
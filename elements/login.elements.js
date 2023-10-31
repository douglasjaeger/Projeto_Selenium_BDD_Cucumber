import { By } from "selenium-webdriver"
import { DEFAULT_TIMEOUT } from "../utils/consts.js";

export default class LoginElements {

    constructor(driver) {
        this.driver = driver
    }

    async inputEmail(timeout = DEFAULT_TIMEOUT ){

        this.checkCustomTimeout(timeout)

        let inputEmail = await this.driver.findElement(By.css('[data-qa="login-email"]'));
        return inputEmail
    }

    async inputSenha(timeout = DEFAULT_TIMEOUT ){

        this.checkCustomTimeout(timeout)

        let inputEmail = await this.driver.findElement(By.css('[data-qa="login-password"]'));
        return inputEmail
    }

    async buttonLogin(timeout = DEFAULT_TIMEOUT){

        this.checkCustomTimeout(timeout)

        let buttonLogin = await this.driver.findElement(By.css('[data-qa="login-button"]'));
        return buttonLogin
    }

    async labelUsuarioLogado(timeout = DEFAULT_TIMEOUT) {

        this.checkCustomTimeout(timeout)

        let labelUsuarioLogado = await this.driver.findElement(By.css("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > b"))

        return labelUsuarioLogado
    }

    async checkCustomTimeout(timeout) {
        if ( timeout != DEFAULT_TIMEOUT) {
            await this.driver.manage().setTimeouts({implicit: timeout})
        }
    }


}
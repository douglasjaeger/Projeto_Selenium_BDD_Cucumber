import { URL_BASE } from "../utils/consts.js"
import LoginElements from "../elements/login.elements.js"
export default class LoginPage {

    constructor(driver) {
        this.driver = driver
        this.loginElements = new LoginElements(driver)
    }

    async visit() {
        await this.driver.get(`${URL_BASE}/login`)
    }

    async typeEmail(email){
        let inputEmail =  await this.loginElements.inputEmail()
        await inputEmail.sendKeys(email)
    }

    async typeSenha(senha){
        let inputSenha =  await this.loginElements.inputSenha()
        await inputSenha.sendKeys(senha)
    }

    async clickLogin(){
        let buttonLogin =  await this.loginElements.buttonLogin()
        await buttonLogin.click()
    }

    async sigin(email, senha) {
        await this.typeEmail(email)
        await this.typeSenha(senha)
        await this.clickLogin()
    }

    async getUsuarioLogado() {
        let labelUsuarioLogado = await this.loginElements.labelUsuarioLogado()
        let text = await labelUsuarioLogado.getText()
        return text
    }


}
import { strict as assert } from 'assert'
import LoginPage from '../../pages/login.pages.js';
import {BeforeAll, AfterAll ,Given, When, Then } from '@cucumber/cucumber'
import DriverUtils from "../../utils/driver.utils.js";
let driver
let loginPage
let nomeUsuario

BeforeAll(async function () {
    driver = await DriverUtils.startChromeDriver();
    loginPage = new LoginPage(driver)

})

Given("Estou na tela de login", async function () {
    await loginPage.visit()
});

When("Informo um usuario valido", async function (table) {

    let usuario = table.rowsHash()

    nomeUsuario = usuario.nome

    await loginPage.sigin(usuario.email, usuario.senha)

});

Then("O sistema faz login com sucesso", async function () {
    let usuarioLogado = await loginPage.getUsuarioLogado()

    assert.equal(usuarioLogado, nomeUsuario)

});

AfterAll(async function () {
    setTimeout(async ()=> { await driver.quit()}, 10000)
   //await driver.quit()
})
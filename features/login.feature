Feature: Login

  Scenario: Login com sucesso
    Given Estou na tela de login
    When Informo um usuario valido
      | email    | guilherme@ultima.com       |
      | senha    | 12345678                   |
      | nome     | Guilherme                  |
    Then O sistema faz login com sucesso
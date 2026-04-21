# Automation - SauceDemo
## Sobre o projeto
Projeto de automação de testes end-to-end (E2E) utilizando Cypress e BDD (Gherkin), aplicado ao site [SauceDemo](https://www.saucedemo.com/). O objetivo é validar os principais fluxos de um sistema de e-commerce, garantindo a qualidade das funcionalidades críticas.
---
## Objetivo
Validar funcionalidades essenciais como autenticação, navegação de produtos e operações de carrinho.
---
## Escopo de Testes
### Funcionalidades testadas
* Login (válido e inválido)
* Listagem de produtos
* Adição ao carrinho
* Remoção do carrinho
* Logout
---
## Estratégia de Teste
* Testes funcionais
* Testes E2E (End-to-End)
* BDD (Behavior Driven Development)
---
## Tecnologias utilizadas
* Cypress
* JavaScript
* Cucumber (BDD)
---
## Cenários de Teste (BDD)
### Login
* Login com sucesso
* Login inválido
### Produtos
* Visualizar lista de produtos
### Carrinho
* Adicionar produto
* Remover produto
### Logout
* Sair do sistema
---
## Como executar o projeto
npm install
npx cypress open
---
## Sistema testado
https://www.saucedemo.com

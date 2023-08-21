# Mercado Livre - Documentação
Este repositório contém duas aplicações relacionadas, chamadas de web e api, além de testes de e2e usando Cypress. Essas aplicações são gerenciadas dentro de um monorepo, o que significa que elas compartilham um mesmo código base e são desenvolvidas de forma coordenada.

## Estrutura do Monorepo
O monorepo é organizado da seguinte maneira:
```
monorepo/
└── packages/
    ├── api/
    ├── web/
    └── e2e/
```

- api: Contém uma aplicação simples de backend utilizando Express que serve como camada de abstração para a api do Mercado Livre.
- web: Contém a aplicação frontend que utiliza React, essa aplicação se trata de uma listagem de produtos e visualização detalhada dos mesmos.
- e2e: Contém testes de ponta a ponta utilizando Cypress.

## Pré-requisitos
Node.js instalado na versão especificada no arquivo `package.json`.

1. Instale as dependências:

```bash
yarn
```

2. Copie o arquivo `.env.example` e renomeie o mesmo para `.env` no diretório `packages/web`

## Desenvolvimento
Você pode executar ambas aplicações executando o comando abaixo apartir da raiz do projeto:

```bash
yarn start
```

## Testes unitários

## Testes e2e
Para executar os testes e2e basta executar o comando abaixo apartir da raiz do projeto:

```bash
yarn e2e
```

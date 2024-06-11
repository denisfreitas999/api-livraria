# Alura Course Overview
### Node.js: Criando uma API Rest com Express e MongoDB (01 - 05)
### Node.js: Lidando com Buscas, Filtros, Paginação e Erros em uma API (06 - 10)

## Tecnologias Envolvidas
<div style="display: inline_block">
  <img align="center" alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
   <img align="center" alt="ExpressJS" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
   <img align="center" alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
   <img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
</div>

## Índice
1. [Criando um Projeto com Node.js](#1-criando-um-projeto-com-nodejs)
2. [Express e Primeiras Rotas](#2-express-e-primeiras-rotas)
3. [Persistindo Dados](#3-persistindo-dados)
4. [Evoluindo uma API](#4-evoluindo-uma-api)
5. [Adicionando Funcionalidades](#5-adicionando-funcionalidades)
6. [Deixando nossa API Resiliente](#6-deixando-nossa-api-resiliente)
7. [Avançando o Tratamento de Erros](#7-avançando-o-tratamento-de-erros)
8. [Validando os Dados](#8-validando-os-dados)
9. [Avançando em Buscas e Filtros](#9-avançando-em-buscas-e-filtros)
10. [Implementando Paginação](#10-implementando-paginação)

## 1. Criando um Projeto com Node.js
Na primeira etapa do curso, foquei em compreender os fundamentos das APIs e servidores:
- **Conceito de APIs**: Aprendi o que são APIs, seus diferentes tipos e como funcionam no contexto de produtos.
- **Servidores**: Compreendi o que são servidores e como criar um servidor local usando o módulo HTTP nativo do Node.js.
- **Criação de Rotas**: Desenvolvi a habilidade de criar rotas em uma API, conectar-se a elas e utilizá-las dentro da lógica de uma API REST.

## 2. Express e Primeiras Rotas
Na segunda etapa, aprofundei meus conhecimentos em Express e na criação de rotas:
- **Framework Express**: Instalei e utilizei o Express para criar um servidor HTTP e gerenciar requisições, respostas e rotas.
- **Implementação de CRUD**: Implementei um CRUD inicial com os métodos HTTP GET, POST, PUT e DELETE usando Express.
- **Testes com Postman**: Testei requisições com o Postman e compreendi as partes de uma requisição HTTP.
- **Respostas HTTP**: Aprendi a gerar e enviar respostas adequadas para cada tipo de requisição HTTP com Express.

## 3. Persistindo Dados
Na terceira etapa, explorei a integração de bancos de dados com a API:
- **Integração de Bancos de Dados**: Compreendi como bancos de dados integram-se a uma API, armazenando dados recebidos e processados.
- **SQL vs NoSQL**: Entendi as principais diferenças entre bancos de dados SQL e NoSQL e os casos de uso para cada tipo.
- **MongoDB na Nuvem**: Utilizei uma instância gratuita do MongoDB na nuvem através do Mongo Atlas e conectei à API.
- **Model e Schema**: Aprendi os conceitos de model e schema e suas funções na construção de uma API.

## 4. Evoluindo uma API
Na quarta etapa, foquei na organização e evolução da API:
- **Padrão Controller**: Organizei a estrutura do código do projeto de API usando o padrão controller.
- **Chamadas do Mongoose**: Organizei chamadas da lib Mongoose em métodos separados dentro de um controller.
- **Implementação de CRUD**: Pratiquei a implementação do CRUD (Create, Read, Update e Delete) com respostas HTTP e rotas correspondentes.

## 5. Adicionando Funcionalidades
Na quinta e última etapa, aprendi a adicionar funcionalidades avançadas à API:
- **Relacionamento de Entidades**: Evoluí as funcionalidades da API unindo diferentes entidades como livro e autor.
- **Modelo de Embedding**: Compreendi como funciona o relacionamento em um banco de objetos como MongoDB utilizando o modelo de embedding.
- **Buscas via Query**: Aprendi a realizar buscas na API através de parâmetros de query.
- **Relacionamento Reference**: Entendi como funciona o relacionamento do tipo Reference no MongoDB.

## 6. Deixando nossa API Resiliente
Na primeira etapa do curso, foquei em tornar a API mais segura e robusta:
- **Proteção de Informações Sensíveis**: Configurei variáveis de ambiente no projeto usando o dotenv. Criei um arquivo .env para guardar a string de conexão do MongoDB Atlas, protegendo informações sensíveis.
- **Configuração do ESLint**: Utilizei o ESLint para manter a padronização de formatação de arquivos e identificar bugs, auxiliando no desenvolvimento.
- **Refatoração com async/await**: Removi funções callback nos métodos do Mongoose e utilizei async/await com try...catch, tornando o código mais legível e eficiente.
- **Tratamento de Erros Específicos**: Na rota de busca de um autor pelo ID, identifiquei e tratei erros com códigos de status 400, 404 e 500 de forma adequada.

## 7. Avançando o Tratamento de Erros
Na segunda etapa, centralizei e padronizei o tratamento de erros:
- **Middleware de Manipulador de Erros**: Criei e utilizei um middleware para centralizar o tratamento de erros na aplicação, reutilizando código e enviando respostas de erro padronizadas para o cliente.
- **Tratamento de Erros de Validação**: Identifiquei erros de validação do Mongoose e personalizei mensagens de validação nos Schemas.
- **Refatoração do Manipulador de Erros**: Utilize classes para cada erro, reduzindo e tornando o código mais legível.
- **Middleware para Páginas 404**: Registrei um middleware para tratar páginas não encontradas, criando uma nova instância da classe NaoEncontrado e enviando-a para o manipulador de erros.

## 8. Validando os Dados
Na terceira etapa, foquei em aplicar e personalizar validações de dados:
- **Validações Nativas do Mongoose**: Usei validadores de números como min e max, e o validador de strings enum para definir valores permitidos para campos.
- **Validadores Personalizados**: Criei validadores personalizados para executar qualquer código JavaScript, adequado para verificações complexas como CPF ou telefone.
- **Validador Global**: Criei validadores globais no Mongoose para realizar verificações em todos os Schemas da aplicação, como impedir que campos string aceitem strings vazias.

## 9. Avançando em Buscas e Filtros
Na quarta etapa, implementei buscas e filtros avançados:
- **Busca Dinâmica por Títulos de Livros**: Usei expressões regulares (regex) e operadores de busca do MongoDB ($regex e $options) para tornar a busca por texto dinâmica e insensível a maiúsculas e minúsculas.
- **Filtro por Número de Páginas**: Utilizei operadores de busca $gte e $lte para definir o número mínimo e máximo de páginas que um livro deve ter.
- **Busca por Nome do Autor**: Realizei consultas na coleção de autores para obter o ID e filtrar corretamente a busca de livros.

## 10. Implementando Paginação
Na quinta e última etapa, aprendi a implementar paginação e ordenação:
- **Paginação de Rotas**: Apliquei os métodos skip e limit para pular registros e limitar os resultados exibidos em uma única página.
- **Ordenação de Resultados**: Usei o método sort para ordenar resultados por campos da coleção, como ordenar _id de forma decrescente para registros mais recentes.
- **Reutilização da Lógica de Paginação**: Criei um middleware de paginação e registrei-o nas rotas GET /livros, GET /livros/busca e GET /autores para reutilizar a lógica de paginação.
- **Compartilhamento de Informações entre Middlewares**: Utilizei o objeto req para guardar buscas do Mongoose e permitir que o middleware de paginação acesse e aplique métodos sort, skip e limit na busca.

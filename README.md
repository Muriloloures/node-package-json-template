# Projeto LabeCommerce

O projeto LabeCommerce é uma API de comércio eletrônico desenvolvida em NodeJS com TypeScript, Express, Knex e SQLite. A API possui diversas funcionalidades para cadastrar e buscar usuários, cadastrar, buscar e listar produtos, cadastrar compras e buscar informações sobre compras específicas.

O Knex é utilizado para gerenciar a base de dados do SQLite.

Além disso, o projeto tem uma documentação clara e objetiva que descreve as funcionalidades disponíveis e como utilizá-las, tornando o desenvolvimento e a integração com outras aplicações mais fácil e rápida.

A coleção LabeCommerce no Postman é uma coleção de endpoints de API para gerenciar usuários, produtos e compras em uma plataforma de comércio eletrônico.

A seguir, estão os detalhes dos endpoints nesta coleção:

Get All Users: retorna todos os usuários cadastrados no sistema.
Create User: cria um novo usuário na plataforma.
Create Product: permite criar um novo produto na plataforma.
Get all products 1: retorna todos os produtos disponíveis na plataforma.
Get all products 2 (search product by name): retorna todos os produtos que correspondem ao nome do produto especificado.
Create Purchase: permite criar uma nova compra de um ou mais produtos.
Get Purchase by id: retorna informações sobre uma compra existente com base no ID da compra especificada.
A documentação completa pode ser encontrada neste link: https://documenter.getpostman.com/view/26335727/2s93Y5Pf2Q

## Tecnologias utilizadas:

* NodeJS: plataforma de desenvolvimento de software para construir aplicativos escaláveis em JavaScript.
* TypeScript: adiciona tipos estáticos opcionais à linguagem JavaScript.
* Express: framework de aplicativo para NodeJS que fornece uma camada abstrata para lidar com as solicitações HTTP.
* SQLite: banco de dados relacional embutido utilizado para gerenciar a persistência de dados do projeto.
* Knex: biblioteca de construção de consultas SQL para NodeJS que suporta vários bancos de dados.
* Postman: ambiente de desenvolvimento de API que permite testar APIs e criar solicitações HTTP.

## Instruções de instalação:

Instale o NodeJS através do link https://nodejs.org/en/download/.
Instale o TypeScript globalmente em sua máquina usando o comando npm install -g typescript no terminal ou prompt de comando.
Crie uma pasta para o projeto e abra o terminal ou prompt de comando na pasta criada.
Digite o comando npm init -y. Isso criará um arquivo package.json padrão na pasta do projeto.
Instale o Express e SQLite utilizando o comando npm install express sqlite3 @types/express @types/sqlite3.
Instale o Knex utilizando o comando npm install knex @types/knex sqlite3.
Crie um arquivo knexfile.js na raiz do projeto com as configurações do banco de dados. Em seguida, crie um arquivo database.ts na pasta src com as configurações do Knex para acessar o banco de dados.
Faça o download e instale o Postman em https://documenter.getpostman.com/view/26455784/2s93Y5R1BM

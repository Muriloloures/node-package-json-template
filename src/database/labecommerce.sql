-- Active: 1682274426864@@127.0.0.1@3306
CREATE Table users(
id TEXT PRIMARY KEY NOT NULL UNIQUE,
email TEXT NOT NULL UNIQUE,
password TEXT NOT NULL
);

SELECT * FROM users;

INSERT INTO users (id, email, password)
VALUES
('01', "muriloloures@hotmail.com","murilo1234"),
('02', "raissacosta@hotmail.com", "raissa1234"),
('03', "snowliontico@gmail.com", "1234567");

DROP TABLE users;

--Criando uma tabela de produto

CREATE Table products(
id TEXT PRIMARY KEY NOT NULL UNIQUE,
name TEXT NOT NULL,
price REAL NOT NULL,
category TEXT NOT NULL
);

INSERT INTO products (id, name, price, category)
VALUES
('03', "Tabuleiro xadrez", 350, "Jogos"),
('04', "macbook", 11350, "Eletronicos"),
('05', "TV 55 Polegadas 4K", 2200, "Eletronicos"),
('06', "Alexa 4 geração", 270, "Eletronicos"),
('07', "Teclado mecanico", 600, "Eletronicos");

DROP TABLE products;

--Aprofundando SQL--

--Get All Users retorna todos os usuários cadastrados
SELECT * FROM users;

--Get All Products retorna todos os produtos cadastrados
SELECT * FROM products;

--Search Product by name, mocke um termo de busca, por exemplo "monitor", retorna o resultado baseado no termo de busca
SELECT * FROM products
WHERE category LIKE "Ele%";

--Create User mocke um novo usuário, insere o item mockado na tabela users
INSERT INTO users (id, email, password)
VALUES
('077', "toy@gmail.com", "toy123456");

--Create Product mocke um novo produto, insere o item mockado na tabela products
INSERT INTO products (id, name, price, category)
VALUES
('08', "Nintendo Switch", 2.500, "Console");

--Get Products by id mocke uma id, busca baseada no valor mockado
SELECT * FROM products
WHERE id LIKE "08";

--Delete User by id mocke uma id, delete a linha baseada no valor mockado
DELETE FROM users
WHERE id = '04';

--Delete Product by id mocke uma id, delete a linha baseada no valor mockado
DELETE FROM products
WHERE id = '08';

--Edit User by id mocke valores para editar um user, edite a linha baseada nos valores mockados
UPDATE users 
SET 
    email = "muriloloures@hotmail.com",
    password = "muriloloures"
    WHERE id = '01';

--Edit Product by id mocke valores para editar um product, edite a linha baseada nos valores mockados

UPDATE products
SET 
    name = "TV 55 Polegadas 8K",
    price = 3600
    WHERE id = "05";


--Get All Users retorna o resultado ordenado pela coluna email em ordem crescente
SELECT * FROM users
ORDER BY email ASC;

--Get All Products versão 1
--retorna o resultado ordenado pela coluna price em ordem crescente
--limite o resultado em 20 iniciando pelo primeiro item
SELECT * FROM products
ORDER BY price ASC
LIMIT 20 OFFSET 0;

--Get All Products versão 2
--mocke um intervalo de preços, por exemplo entre 100.00 e 300.00
--retorna os produtos com preços dentro do intervalo mockado em ordem crescente
SELECT * FROM products
WHERE price >= 100 AND price <= 500;

-- RELAÇÕES SQL 1 --

--nome da tabela: purchases
--colunas da tabela:
--id (TEXT, PK, único e obrigatório)
--total_price (REAL e obrigatório)
--paid (INTEGER e obrigatório)
--delivered_at (TEXT e opcional)
--buyer_id (TEXT, obrigatório e FK = referencia a coluna id da tabela users)
DROP TABLE purchases;
CREATE TABLE purchases(
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    total_price  REAL NOT NULL ,
    paid INTEGER NOT NULL,
    delivered_at TEXT,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY(buyer_id) REFERENCES users(id)
);
--a) Crie dois pedidos para cada usuário cadastrado
INSERT INTO purchases(id, total_price, paid, delivered_at, buyer_id)
VALUES
("C001", 350, FALSE , NULL , '01'),
("C002", 11350, FALSE , NULL , '01'),
("C003", 350, FALSE , NULL , '01'),
("C004", 350, FALSE , NULL , '02'),
("C005", 11350, FALSE , NULL , '02'),
("C006", 350, FALSE , NULL , '02'),
("C007", 350, FALSE , NULL , '03'),
("C008", 11350, FALSE , NULL , '03'),
("C009", 350, FALSE , NULL , '03');

SELECT*FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id;

--b) Edite o status da data de entrega de um pedido
UPDATE purchases
SET delivered_at = CURRENT_TIMESTAMP;

--Crie a query de consulta utilizando junção para simular um endpoint de histórico de compras de um determinado usuário.
--Mocke um valor para a id do comprador, ela deve ser uma das que foram utilizadas no exercício 2.
SELECT 
purchases.id,
purchases.total_price,
purchases.paid,
purchases.delivered_at,
users.id 
FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id;

-- RELAÇÕES SQL 2 --

--Criação da tabela de relações
--nome da tabela: purchases_products
--colunas da tabela:
--purchase_id (TEXT e obrigatório, não deve ser único)
--product_id (TEXT e obrigatório, não deve ser único)
--quantity (INTEGER e obrigatório, não deve ser único)
CREATE TABLE purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id)
    REFERENCES purchases (id),
    FOREIGN KEY (product_id) 
    REFERENCES products (id)
);
INSERT INTO purchases_products(purchase_id, product_id, quantity )
VALUES
("C001","04", 1),
("C002","05", 1);

SELECT * FROM purchases_products;

SELECT purchases_products.*, purchases.*, products.*
FROM purchases_products
LEFT JOIN purchases ON purchases_products.purchase_id = purchases.id
LEFT JOIN products ON purchases_products.product_id = products.id;
-------------------------------------------Introdução ao Knex-------------------------------------
--Recriando a tabela de users
CREATE Table users(
id TEXT PRIMARY KEY  NOT NULL UNIQUE,
name TEXT NOT NULL,
email TEXT NOT NULL UNIQUE,
password TEXT NOT NULL,
createdAt TEXT,
DATE DEFAULT(DATETIME('now','localtime'))
);

--Recriando a tabela de Products
CREATE Table products(
id TEXT PRIMARY KEY NOT NULL UNIQUE,
name TEXT NOT NULL UNIQUE,
price REAL NOT NULL,
description TEXT NOT NULL,
imageUrl TEXT NOT NULL
);

--Recriando a tabela Purchases
CREATE TABLE purchases(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    buyer_id TEXT NOT NULL,
    totalPrice REAL NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT (datetime('now', 'localtime')),
    paid INTEGER NOT NULL,
    FOREIGN KEY (buyer) REFERENCES users(id)
);
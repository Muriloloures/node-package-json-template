// import { TProduct, TPurchase, TUser } from "./types";
// import {
//     user,
//     product,
//     purchase
// } from "./database";

//além de importar o express, também precisamos importar os objetos Request
//e Response, sempre entre chaves {} 👇🏽
import  express from 'express'
import { db } from "./database/knex";
import knex from "knex";

//import do CORS 👇🏽
import cors from 'cors';

//criação do servidor express 👇🏽
const app = express();

//configuração do middleware que garante que nossas respostas estejam sempre
//no formato json 👇🏽
app.use(express.json());

//configuração do middleware que habilita o CORS 👇🏽
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("Pong!");
});


//Agora crie endpoints para automatizar a manipulação dos dados do arquivo database.ts.
//Get All Users
// não precisa de validação, basta refatorar para o uso do try/catch
// app.get("/users", (req, res) => {
//     try {
//     const user = getAllUsers();
//     res.status(200).send(user);
//     } catch (error) {
//     res.status(500);
//     res.send(error.message);
//     }
// });
//Get All Products
// não precisa de validação, basta refatorar para o uso do try/catch
// app.get("/products", (req, res) => {
//     try {
//     const product = getAllProducts();
//     res.status(200).send(product);
//     } catch (error) {
//     res.status(500);
//     }
// });

// //Search Product by name
// //query params deve possuir pelo menos um caractere
// app.get("/products/search", (req, res) => {
//     try {
//     const q = req.query.q as string; // forçamos a tipagem aqui*
//     if (!q || q.trim().length < 1) {
//         throw new Error("Query param 'q' deve retornar pelo menos 1 caractere");
//     }
//     const result: TProduct[] = product.filter((product) =>
//     product.name.toLowerCase().includes(q.toLowerCase()));
//     res.status(200).send(result);
//     } catch (error) {
//     res.status(500).send(error.message);
//     }
// });

// console.table(user);
// console.table(product);
// console.table(purchase);

// //Create User
// //method HTTP (POST),method HTTP (POST), body: id, email, password  status 201 "Cadastro realizado com sucesso"
// //validar o body
// //extra:
// //não deve ser possível criar mais de uma conta com a mesma id
// //não deve ser possível criar mais de uma conta com o mesmo e-mail
// app.post("/users", (req, res) => {
//     try {
//     const id: string = req.body.id;
//     const name: string = req.body.name;
//     const email: string = req.body.email;
//     const password: string = req.body.password;
//     const date: number = req.body.date
//     if (!id || !email || !password) {
//         throw new Error(
//         "O corpo da requição deve conter os cos 'id', 'email' e 'password'"
//         );
//     }
//     const userExist = user.find(
//         (user) => user.id === id || user.email === email
//     );

//     if (userExist) {
//         throw new Error(
//         "Não é possível criar mais de uma conta com o mesmo ID ou Email"
//         );
//     }
//     const newUser: TUser = {
//         id,
//         name,
//         email,
//         password,
//         date,
//     };
//     user.push(newUser);
//     res.status(201).send("Cadastro realizado com sucesso");
//     } catch (error) {
//     res.status(500).send(error.message);
//     }
// });

// //Exercício 2
// //Create Product
// //method HTTP (POST),path ("/products"), body: id, name, price, category.status 201 "Produto cadastrado com sucesso"
// //validar o body
// //não deve ser possível criar mais de um produto com a mesma id
// app.post("/products", (req, res) => {
//     try {
//     const id: string = req.body.id;
//     const name: string = req.body.name;
//     const price: number = req.body.price;
//     const descripition: string = req.body.category;
//     const imageUrl: string = req.body.imageUrl
//     if (!id || !name || !price || !descripition || !imageUrl) {
//         res.status(422) 
//         throw new Error("Product deve ter 'id', 'nome', 'price' e uma 'catgory'");
//         //res.status(422).send("Product deve ter 'id', 'nome', 'price' e uma 'catgory'")
//         //return 
//     }
//     const productExist = product.find((product) => product.id === id);
//     if (productExist) {
//         res.status(422)
//         throw new Error("Não é possível add um produto com o mesmo 'id'");
//     }
//     const newProduct: TProduct = {
//         id,
//         name,
//         price,
//         imageUrl,
//         description: ""
//     };
//     product.push(newProduct);
//     res.status(201).send("Produto cadastrado com sucesso");
//     } catch (error) {
//     res.send(error.message);
//     }
// });
// //Exercício 3
// //Create Purchase
// //method HTTP (POST), path ("/purchases"), body: userId, productId, quantity, totalPrice. status 201 "Compra realizada com sucesso"
// //validar o body
// app.post("/purchases", (req, res) => {
//     try {
//     const userId: string = req.body.userId;
//     const productId: string = req.body.productId;
//     const quantity: number = req.body.quantity;
//     const totalPrice: number = req.body.totalPrice;
//     if(!userId || !product || !quantity || !totalPrice){
//         throw new Error("A compra  deve ter  'id' do usuario, 'id' do produto, 'quantidade' e o 'preço total'");
//     }
//       //id do usuário que fez a compra deve existir no array de usuários cadastrados
//     const usuarioCadastrado:TUser = user.find((item)=> item.id === userId)
//     if(!usuarioCadastrado ){
//         throw new Error("Usuario não cadastrado")
//     }
//     //id do produto que foi comprado deve existir no array de produtos cadastrados
//     const produtroCadastro= product.find((prod) => prod.id === prod.id)
//     if(!produtroCadastro){
//         throw new Error ("Produto não cadastrado")
//     }
//     //a quantidade e o total da compra devem estar com o cálculo correto
//     const price = product.find((prod)=> prod.id === productId)?.price
//     if(!price){
//         throw new Error ("Preço não encontrado para o produto")        
//     }
//     console.log(price)

//     const calculateTotalPrice = quantity * price;
//     if (totalPrice !== calculateTotalPrice) {
//         throw new Error("o Preço total calculado está incorreto")
//     }

//     const newPurchase: TPurchase = {
//         userId,
//         productId,
//         quantity,
//         totalPrice,
//     };
//     purchase.push(newPurchase);
//     res.status(201).send("Compra realizada com sucesso");
//     }catch{}
// });

//=====================================================================

// //Exercicio 01
// //Get Products by id
// app.get("/product/:id", (req, res) => {
//     try {
//         const id:string = req.params.id;
//         const productById: TProduct = product.find((prod)=> prod.id === id);  
//         //validar que o produto existe  
//         if (!productById) {
//             throw new Error("Produto não encontrado");
//         }
//         res.status(200).send(productById);
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// })
// //Get User Purchases by User id
// // app.get("/user/:id/purchase", (req, res) => {
// //     try{
// //     const userId: string = req.params.id;
// //     const getUserPurchasesByUserId: TPurchase = purchase.find((item) => item.userId === userId);
// //     if(getUserPurchasesByUserId.length === 0){
// //         throw new Error("Usuário não encontrado");
// //     }
// //     res.status(200).send(getUserPurchasesByUserId);
// // } catch (error) {
// //     res.status(404).send(error.message);
// // }
// // })
// app.get('/users/:id/purchases', (req, res)=>{
//     try {
//         const userId:string = req.params.id;
//         const getUserPurchasesByUserId: TPurchase[] = purchase.filter((purch)=> purch.userId === userId);    
//         if (getUserPurchasesByUserId.length === 0) {
//             throw new Error("Usuário não encontrado");
//         }
//         res.status(200).send(getUserPurchasesByUserId);
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// })
// //Exercício 002
// //findIndex retorna apenas o valor do index
// //ao contrario do find que retorna {} inteiro
// //splice remove numeros especificos de um []
// //Delete User by id
// // validar que o usuário existe
// app.delete("/user/:id", (req, res) => {
//     try {
//         const id: string = req.params.id;
//         const userIndex: number = user.findIndex((user)=>user.id === id)
//         if(!userIndex) {
//             throw new Error("Usuário não encontrado");
//         }
//         user.splice(userIndex, 1)
//         res.status(200).send("Usuário apagado com sucesso");
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// })

//=====================================================================


// //Exercício 002
// //findIndex retorna apenas o valor do index
// //ao contrario do find que retorna {} inteiro
// //splice remove numeros especificos de um []
// //Delete User by id
// // validar que o usuário existe
// app.delete("/user/:id", (req, res) => {
//     try {
//         const id: string = req.params.id;
//         const userIndex: number = user.findIndex((user)=>user.id === id)
//         if(!userIndex) {
//             throw new Error("Usuário não encontrado");
//         }
//         user.splice(userIndex, 1)
//         res.status(200).send("Usuário apagado com sucesso");
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// })

// //Delete Product by id
// // validar que o produto existe
// app.delete("/product/:id", (req, res) => {
//     try {
//         const id: string = req.params.id;
//         const productIndex: number = product.findIndex((product)=>product.id === id)
//         if(!productIndex) {
//             throw new Error("Produto não encontrado");
//         }
//         product.splice(productIndex, 1)
//         res.status(200).send("Produto deletado com sucesso");
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
// })

//====================================================================

// //Exercício 3
// //Edit User by id
// // validar que o usuário existe
// // validar o body
// app.put("/user/:id", (req, res) => {
//     try {
//         const id: string = req.params.id
//         const editUserById: TUser = user.find((user) => user.id === id);
    
//         if (!editUserById) {
//             throw new Error("Usuário não encontrado")
//         }
    
//         const newEmail = req.body.email as string | undefined
//         const newPassword = req.body.password as string | undefined
    
//         if (!newEmail && !newPassword) {
//             throw new Error("Nenhum campo foi enviado para atualização")
//         }
    
//         if (newEmail) {
//             editUserById.email = newEmail
//         }
    
//         if (newPassword) {
//             editUserById.password = newPassword
//         }
    
//         res.status(200).send("Cadastro atualizado com sucesso")
//         } catch (error) {
//         console.log(error)
//         res.status(404).send(error.message)
//         }
//     })


// //Edit Product by id
// // validar que o produto existe
// // validar o body
// app.put("/product/:id", (req, res) => {
//     try {
//         const id: string = req.params.id;
//         const productIndex: number = product.findIndex((product)=>product.id === id)
//         if(!productIndex) {
//             throw new Error("Produto não encontrado");
//         }
//         const newProduct: TProduct = req.body;
//         if(!newProduct.id || !newProduct.name || !newProduct.price || !newProduct.category){
//             throw new Error('Preencha todos os campos do produto!');
//         }
//         product[productIndex] = newProduct;
//         res.status(200).send("Produto atualizado com sucesso");
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
//})

//Get All Users
app.get("/users", async(req, res) =>{
  try {
    const result = await db.raw('SELECT * FROM users;')
      res.status(200).send({result})
  } catch (error: any) {
      res.status(400).send(error.message)
  }
})

//Get All Products
app.get("/products", async(req, res) =>{

  try {
  const result = await db.raw('SELECT * FROM products;')
  res.status(200).send({result})
  } catch (error: any) {
      res.status(400).send(error.message)
  }
})

//Search Products by name
app.get("/products/search", async(req, res) =>{
  try {
      const q = req.query.q
      const sql = `SELECT * FROM products WHERE name LIKE ?;`
      console.log(sql, [`%${q}%`])
      const result = await db.raw(sql, [`%${q}%`])
      console.log(result)
      res.status(200).send(result)
  } catch (error: any) {
      console.log(error.message)
      res.status(400).send(error.message)
  }
  })  

//Recriando endpoints(create users, create products, create purchases) endpoints
// CREATE USER
app.post("/users", async (req, res) => {
  try {
      const { id, name, email, password, createdAt } = req.body;
  if (typeof id !== "string") {
      throw new Error("'id' deve ser do tipo 'string'");
  }
  if (typeof email !== "string") {
      throw new Error("'email' deve ser do tipo 'string'");
  }
  if (typeof password !== "string") {
      throw new Error("'password' deve ser do tipo 'string'");
  }
    const idExist = await db.raw(`SELECT * FROM users WHERE id = ?`, [id]);
  if (idExist.length > 0) {
      throw new Error("Já existe uma conta com esse id");
  }
  const newUser = await db.raw(
      `INSERT INTO users (id, name, email, password, createdAt) VALUES (?, ?, ?, ?, ?)`,
      [id, name, email, password, createdAt]
  );
      res.status(200).send({ message: "Cadastro realizado com sucesso!" });
  } catch (error:any) {
      res.status(400).send(error.message);
  }
});

// CREATE PRODUCT
app.post("/products", async (req, res) => {
  try {
      const { id, name, price, description, imageUrl } = req.body;
  if (typeof id !== "string") {
      throw new Error("'id' deve ser do tipo 'string'");
  }
  if (typeof name !== "string") {
      throw new Error("'name' deve ser do tipo 'string'");
  }
  if (typeof price !== "number") {
      throw new Error("'price' deve ser do tipo 'number'");
  }
  if (typeof description !== "string") {
      throw new Error("'description' deve ser do tipo 'string'");
  }
      const idExist = await db("products").select("*").where({ id });
  if (idExist.length > 0) {
      throw new Error("Já existe um produto com esse id");
  }
      await db("products").insert({ id, name, price, description, imageUrl });
      res.status(200).send({ message: "Cadastro realizado com sucesso!" });
  } catch (error) {
      res.status(400).send(error.message);
  }
});

//CREATE PURCHASE
app.post("/purchases", async (req, res) =>{
  try {
      const { id, buyer, total_price, paid } = req.body;
      console.log(id, buyer, total_price, paid )
  if (!id || typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser do tipo 'string'");
  }
  if (isNaN(parseFloat(total_price))) {
    res.status(400);
    throw new Error("O preço deve ser um número");
  }
  const idExist = await db.raw(`
    SELECT * FROM purchases WHERE id = "${id}";
  `)
  if (idExist.length) {
      res.status(400);
      throw new Error("Já existe um um produto com esse id");
  }
  const newPuchases = await db.raw(`
  INSERT INTO purchases(id, buyer, totalPrice, paid)
  VALUES ("${id}", "${buyer}", "${total_price}", "${paid}");`);
  res.status(201).send({message: "Compra cadastrada com sucesso"});
  } catch (error:any) {
      res.status(400).send(error.message);
  }
});

//Get User Purchases by User id
// app.get("/users/:id/purchases", async (req, res) => {
//   try {
//   const { id } = req.params;
//   const purchases = await db("purchases").select("*").where({ user_id: id });
//       res.status(200).send(purchases);
//   } catch (error) {
//       res.status(500).send({ message: "Erro ao buscar as compras do usuário" });
//   }
// });

//////////////////////////////////////////////////Aprofundando em knex////////////////////////////////////////////////
//refatorando de raw para query builder
//Get All Users
app.get("/users", async(req, res) =>{
  try {
      const result = await db.select("*").from("users")
      res.status(200).send({result})
  } catch (error: any) {
      res.status(400).send(error.message)
  }
  })
//Get All Products
app.get("/products", async(req, res) =>{
  try {
      const result = await db.select("*").from("products")
      res.status(200).send({result})
  } catch (error: any) {
      res.status(400).send(error.message)
  }
  })
//Get All Products by name
app.get("/products/search", async(req, res) =>{
  try {
      const q = req.query.name
      const result = await db.select("*").from("products").where("name", "LIKE", `%${q}%`)
      res.status(200).send({result})
  } catch (error: any) {
      res.status(400).send(error.message)
  }
  })
// //Crie o seguinte endpoint com query builder:
// //Get Purchase by id
// app.get("/purchases/:id", async(req:Request, res:Response)=>{
//     try {
//         const id = req.params.id
//         const purchase = await db("purchases").where({id}).first();
//         const buyer = await db("users").where({id : purchase.buyer}).first();
//         const infoPurchaseUser = {
//         purchaseId: purchase.id,
//         totalPrice: purchase.totalPrice,
//         createdAt: purchase.createdAt,
//         paid: purchase.paid,
//         buyerId:buyer.id,
//         emailBuyer:buyer.email,
//         nameBuyer: buyer.name
//     }
//         res.status(200).send(infoPurchaseUser);
//     } catch (error: any) {
//         res.status(400).send(error.message)  
//     }
// })

//Refatore o endpoint criado no exercício anterior para que o resultado bem sucedido também 
//retorne a lista de produtos que tem relação com a compra pesquisada.
app.get("/purchases/:id", async(req, res) => {
  try {
      const id = req.params.id;
    // Busca a compra pelo ID
      const purchase = await db("purchases").where({id}).first();
  if (!purchase) {
      return res.status(404).send("Compra não encontrada");
  }
    // Busca o comprador pelo ID da compra
      const buyer = await db("users").where({id: purchase.buyer}).first();
  if (!buyer) {
      return res.status(404).send("Comprador não encontrado");
  }
    // Busca os produtos da compra
    const products = await db("products")
    .select("products.*")
    .join("purchases_products", "purchases_products.product_id", "products.id")
    .where("purchases_products.purchase_id", id);
  

    // Cria o objeto com as informações da compra e do comprador
      const infoPurchaseUser = {
      purchaseId: purchase.id,
      totalPrice: purchase.totalPrice,
      createdAt: purchase.createdAt,
      paid: purchase.paid,
      buyerId: buyer.id,
      emailBuyer: buyer.email,
      nameBuyer: buyer.name,
      products: products
  };
      res.status(200).send(infoPurchaseUser);
  } catch (error: any) {
      res.status(400).send(error.message);
  }
});


app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

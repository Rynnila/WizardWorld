const express = require("express"); //Adicionando módulo do express.
const app = express(); //Inicializando express.
const bodyParser = require("body-parser");
app.use(express.json()); //A função express.json() é uma função de middleware integrada no express. Ele analisa solicitações recebidas com cargas JSON.
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//INICIANDO SERVIDOR
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

const mysql = require("mysql"); //Adicionando módulo do mysql.

//Criando conexão com banco de dados.
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hogwarts",
});

//Conectando ao banco de dados.
connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao banco de dados Mysql");
});

//LOGIN
app.post("/login", (req, res) => {
  const { email } = req.body;
  connection.query("SELECT * FROM bruxinhos WHERE email = ?",
    [email],
    (err, results) => {
      if (err) throw err;
      res.json(results);
    });
});

//CREATE
app.post("/register", (req, res) => {
  const { nome, email, senha, confirmar_senha } = req.body;
  connection.query(
    "INSERT INTO bruxinhos (nome, email, senha, confirmar_senha) VALUES (?, ?, ?, ?)",
    [nome, email, senha, confirmar_senha],
    (err) => {
      if (err) throw err;
      res.json("Bruxinho inserido com sucesso!");
    }
  );
});

//BOOKS
app.post("/pedido", (req, res) => {
  const { nome, qtd, total } = req.body;
  connection.query(
    "INSERT INTO pedidos (nome, qtd, total) VALUES (?, ?, ?)",
    [nome, qtd, total],
    (err) => {
      if (err) throw err;
      res.json("Pedido inserido com sucesso!");
    }
  );
});

//ALL
app.get("/bruxinhos", (req, res) => {
  connection.query("SELECT * FROM bruxinhos", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/pedidos", (req, res) => {
  connection.query("SELECT * FROM pedidos", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/total", (req, res) => {
  connection.query("SELECT SUM(total) FROM pedidos", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//PAGES
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/:path/", (req, res) => {
  let path = String(req.params.path).toLowerCase();
  switch (path) {
    case "index":
      res.sendFile(__dirname + "/index.html");
      break;
    case "logon":
      res.sendFile(__dirname + "/logon.html");
      break;
    case "home":
      res.sendFile(__dirname + "/home.html");
      break;
    case "fantasmas":
      res.sendFile(__dirname + "/fantasmas.html");
      break;
    case "professores":
      res.sendFile(__dirname + "/professores.html");
      break;
    case "materias":
      res.sendFile(__dirname + "/materias.html");
      break;
    case "compras":
      res.sendFile(__dirname + "/compras.html");
      break;
    default:
      break;
  }
});

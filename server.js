// server.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Funções do banco de dados
const {
  createPost,
  getAllPosts,

  createUser,
  loginUser,

  getAllCars,
  createCar,
  updateCar,
  deleteCar,
  getCarById,
  sellCar
} = require("./db");

const app = express();
const PORT = 80;

// Configurar views EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// ------------------------------------------------------------
// PÁGINA PRINCIPAL
// ------------------------------------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Projects.html"));
});

// ------------------------------------------------------------
// BLOG
// ------------------------------------------------------------

// Página dinâmica do blog
app.get("/blog", async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.render("blog", { posts });
  } catch (err) {
    console.error("Erro ao carregar posts:", err);
    res.status(500).send("Erro ao carregar posts.");
  }
});

// Página de cadastro de post
app.get("/cadastrar_post.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Blog", "cadastrar_post.html"));
});

// Salvar novo post
app.post("/salvar-post", async (req, res) => {
  try {
    const { titulo, resumo, conteudo } = req.body;

    if (!titulo || !conteudo) {
      return res.status(400).send("Título e conteúdo são obrigatórios.");
    }

    await createPost({ titulo, resumo, conteudo });
    res.redirect("/blog");
  } catch (err) {
    console.error("Erro ao salvar post:", err);
    res.status(500).send("Erro ao salvar post.");
  }
});

// ------------------------------------------------------------
// USUÁRIOS: cadastro + login
// ------------------------------------------------------------

// Página HTML de cadastro
app.get("/cadastro", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Usuarios", "cadastro.html"));
});

// Salvar novo usuário
app.post("/usuarios/cadastrar", async (req, res) => {
  const { nome, email, senha } = req.body;
  await createUser({ nome, email, senha });
  res.redirect("/login");
});

// Página HTML de login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Usuarios", "login.html"));
});

// Fazer login
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const user = await loginUser(email, senha);

  if (!user) return res.status(401).send("Login inválido.");

  res.redirect("/carros");
});

// ------------------------------------------------------------
// CARROS: listar + gerenciar
// ------------------------------------------------------------

// Página de listagem dos carros
app.get("/carros", async (req, res) => {
  const carros = await getAllCars();
  res.render("carros", { carros });
});

// Página de gerência dos carros
app.get("/gerenciar-carros", async (req, res) => {
  const carros = await getAllCars();
  res.render("gerenciar-carros", { carros });
});

// Página HTML – cadastrar carro
app.get("/cadastrar-carro", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Carros", "cadastrar-carro.html"));
});

// Criar carro
app.post("/carros/cadastrar", async (req, res) => {
  const { modelo, marca, ano, preco, quantidade } = req.body;
  await createCar({ modelo, marca, ano, preco, quantidade });
  res.redirect("/gerenciar-carros");
});

// Página HTML – atualizar carro
app.get("/atualizar-carro/:id", async (req, res) => {
  const carro = await getCarById(req.params.id);

  res.render("atualizar-carro", { carro });
});

// Atualizar carro
app.post("/carros/atualizar/:id", async (req, res) => {
  await updateCar(req.params.id, req.body);
  res.redirect("/gerenciar-carros");
});

// Remover carro
app.post("/carros/remover/:id", async (req, res) => {
  await deleteCar(req.params.id);
  res.redirect("/gerenciar-carros");
});

// Vender carro (com decremento)
app.post("/carros/vender/:id", async (req, res) => {
  await sellCar(req.params.id);
  res.redirect("/gerenciar-carros");
});

// ------------------------------------------------------------
// INICIAR SERVIDOR
// ------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});


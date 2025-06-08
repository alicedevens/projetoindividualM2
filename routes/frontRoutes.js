const express = require("express");
const router = express.Router();
const path = require("path");

// Roteamento para páginas dinâmicas
router.get("/", (req, res) => {
  res.render("pages/login");
});
router.get("/atividades", (req, res) => {
  res.render("pages/atividades");
});
router.get("/questionario", (req, res) => {
  res.render("pages/questionario");
});
router.get("/nivel_facil", (req, res) => {
  res.render("pages/nivel_facil");
});
router.get("/nivel_facil/:id", (req, res) => {
  res.render("pages/nivel_facil");
});
router.get("/dados", (req, res) => {
  res.render("pages/dados");
});

router.get("/about", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Página Inicial",
    content: path.join(__dirname, "../views/pages/page2"),
  });
});

// Adicione outras rotas conforme necessário

module.exports = router;

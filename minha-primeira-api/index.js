import express from "express";

const app = express(); //Primeiro pilar: instancia do express
const PORT = 3000;

let livros = [
  { id: 1, dsTitulo: "As cronicas de narnia", dsAutor: "C.S. Lewis" },
]; // banko of dados

// metodos + caminhos + funcção
app.get("/", (req, res) => {
  res.send("rota raiz");
});

app.get("/livros", (req, res) => {
  res.json(livros);
});

app.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "o parametro deve ser um numero valido" });
  }
  res.send("deu certo");
});

app.listen(PORT); // porta a ser ouvida

/*
cadastrarm livros
post

buscar todos livros
get

buscar um livro pelo nome
get

buscar um livro pelo id
get

emprestar livros
put/patch

devolver livros
put/patch

deletar livros
delete
*/

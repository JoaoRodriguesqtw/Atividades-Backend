import express from "express";

const app = express(); //Primeiro pilar: instancia do express
const PORT = 3000;

let livros = []; // banko of dados

// metodos + caminhos + funcção
app.get("/", (req, res) => {
  res.send("rota raiz");
});

app.get("/livros", (req, res) => {
  res.send("rota livros!");
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

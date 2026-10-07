// implementar regras

let ultimo_id = 1;

// banco de dados
import { livros } from "../data/livros.js";

// função que acha todos os livros
function findAll(req, res) {
  res.json(livros);
}

// função que acha um livro so
function findOne(req, res) {
  const id = parseInt(req.params.id);
  //find
  let livro = livros.find((livro) => {
    return livro.id === id;
  });

  if (!livro) {
    return res.status(404).send();
  }

  res.json(livro);
}

// funcção que cria livro
function criarLivro(req, res) {
  let id_novo = ultimo_id + 1;
  

  let autor_enviado = req.body.dsAutor;
  let titulo_enviado = req.body.dsTitulo;

  if (!autor_enviado || !titulo_enviado) {
    return res
      .status(400)
      .json({ mensagem: "dados faltando, verifique autor e titulo" });
  }

  ultimo_id++;
  let novo_livro = {
    id: id_novo,
    fgDisponivel: true,
    dsTitulo: titulo_enviado,
    dsAutor: autor_enviado,
  };

  livros.push(novo_livro); // novo livro adicionado ao "banco de dados"
  res.status(201).json(novo_livro);
}

//função que deleta livro
function deletarLivro(req, res) {
  const index_livro = req.index_livro;

  livros.splice(index_livro, 1);
  res.status(204).send();
}

// função que edita livro
function editarLivro(req, res) {
  const id = parseInt(req.params.id);


  let livro_a_ser_atualizado = livros[req.index_livro];
  let novo_autor = req.body.dsAutor;
  let novo_titulo = req.body.dsTitulo;

  if (novo_autor !== undefined) {
    livro_a_ser_atualizado.dsAutor = novo_autor;
  }

  if (novo_titulo !== undefined) {
    livro_a_ser_atualizado.dsTitulo = novo_titulo;
  }

  res.status(200).json(livro_a_ser_atualizado);
}

// função que devolve um livro emprestado
function devolverLivro(req, res) {
  const id = parseInt(req.params.id);

  let livro_a_ser_atualizado = livros[req.index_livro];

  if (livro_a_ser_atualizado.fgDisponivel === true) {
    return res
      .status(409) // requisição mal formada
      .json({ mensagem: "Conflito: o livro já esta disponivel" });
  }

  livro_a_ser_atualizado.fgDisponivel = true;

  res.status(200).json(livro_a_ser_atualizado);
}

// função que empresta um livro
function emprestarLivro(req, res) {
  const id = parseInt(req.params.id);

  let livro_a_ser_atualizado = livros[req.index_livro];

  if (livro_a_ser_atualizado.fgDisponivel === false) {
    return res
      .status(409) // requisição mal formada
      .json({ mensagem: "Conflito: o livro já esta emprestado" });
  }

  livro_a_ser_atualizado.fgDisponivel = false;

  res.status(200).json(livro_a_ser_atualizado);
}

export {
  findAll,
  findOne,
  criarLivro,
  deletarLivro,
  editarLivro,
  devolverLivro,
  emprestarLivro,
};

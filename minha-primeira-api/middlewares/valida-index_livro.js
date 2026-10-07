import { livros } from "../data/livros.js";

export function validaIndex(req, res, next) {

  const id = parseInt(req.params.id);
  const index_livro = livros.findIndex((livro) => livro.id === id);

  if (index_livro === -1) {
    return res.sendStatus(404);
  };

  req.index_livro = index_livro;
  next();
}

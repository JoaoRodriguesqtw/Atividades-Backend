// chamar rotas

import { Router } from "express";
import * as livrosController from "../controllers/livros-controller.js";
import { ValidaParametro } from "../middlewares/validaParametro.js"
import { validaIndex } from "../middlewares/valida-index_livro.js";

const router = Router();


router.get("/", livrosController.findAll);
router.get("/:id", ValidaParametro,validaIndex, livrosController.findOne);
router.post("/",  livrosController.criarLivro);
router.delete("/:id",ValidaParametro,validaIndex,  livrosController.deletarLivro);
router.patch("/:id", ValidaParametro,validaIndex, livrosController.editarLivro);
router.patch("/:id/emprestar",ValidaParametro,validaIndex, livrosController.emprestarLivro);
router.patch("/:id/devolver",ValidaParametro,validaIndex, livrosController.devolverLivro);

export default router;
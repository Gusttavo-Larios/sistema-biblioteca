import { Router } from 'express'
import * as LivroController from '../controllers/livros.cotroller'

const router = Router()

router.get("/", LivroController.home)
router.post("/cadastrar-livro", LivroController.cadastrarLivro)
// router.put("/editar-livro/:id", LivroController.alterarDadosLivro)
// router.delete("/deletar-livro",)

export default router
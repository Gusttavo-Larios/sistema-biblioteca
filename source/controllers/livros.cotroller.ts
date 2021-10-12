import { Response, Request } from "express";
import { Livro } from "../models/Livro.model";

export function home(request: Request, response: Response) {
  const livrosCadastrados = Livro.obterTodosLivros()
  response.render('home', { livrosCadastrados })
}

export function cadastrarLivro(request: Request, response: Response) {
  const { titulo, editora, foto, autor } = request.body
  const livrosCadastrados = Livro.obterTodosLivros()
  const quantidadeLivrosCadastrados = livrosCadastrados.length

  const objetoInformacoesLivro = {
    id: quantidadeLivrosCadastrados + 1,
    titulo,
    editora,
    foto,
    autor
  }

  Livro.cadastrarLivro(objetoInformacoesLivro)

  response.redirect("/")
}

// export function alterarDadosLivro(request: Request, response: Response) {
//   const { id } = request.params
//   const { titulo, editora, foto, autor } = request.body

//   if (
//     titulo.length > 0 &&
//     editora.length > 0 &&
//     foto.length > 0 &&
//     autor.length > 0
//   ) {
//     Livro.alterarInformacoesLivro(parseInt(id), titulo, editora, foto, autor)
//     response.redirect("/")
//   }
//   response.render("update")
// }
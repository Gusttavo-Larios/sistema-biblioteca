type Livro = {
  id: number,
  titulo: string,
  editora: string,
  foto: string,
  autor: string
}

type InformacoesLivro = {
  id: number,
  titulo: string,
  editora: string,
  foto: string,
  autor: string
}

const livros = [
  {
    id: 0,
    titulo: 'Narizinho',
    editora: 'Saraiva',
    foto: '',
    autor: 'Monteiro Lobato'
  }
]

export const Livro = {
  obterTodosLivros: (): Livro[] => {
    return livros
  },

  cadastrarLivro: (informacoesLivro: InformacoesLivro): void => {
    livros.push(informacoesLivro)
  },

  // alterarInformacoesLivro: (
  //   id: number,
  //   titulo: string,
  //   editora: string,
  //   foto: string,
  //   autor: string
  // ): void => {
  //   const posicao = livros.findIndex(item => item.id === id)
  //   if (posicao >= 0) {
  //     livros[posicao] = {
  //       id: posicao,
  //       titulo,
  //       editora,
  //       foto,
  //       autor
  //     }
  //   }
  // }
}
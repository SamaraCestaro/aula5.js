const livros = [];
executarMenu()

function executarMenu() {
  const resultado = prompt(`
    (1) - Cadastrar;
    (2) - Pesquisar;
    (3) - Excluir;
    (4) - Alterar; (desafio)
    (5) - Filtrar livros por categoria
    (0) - Sair;
`)

if(resultado == "1") {
  cadastrarLivro()
  executarMenu()
  }
  
  if(resultado == "2") {
  pesquisarLivro()
  executarMenu()
  }
  
  
  if(resultado == "3") {
  exluirLivro()
  executarMenu()
  }

  if(resultado == "4") {
    alterarLivro()
    executarMenu()
    }

    if(resultado == "5") {
      filtrarLivro()
      executarMenu()
      }
  
      function cadastrarLivro() {
        let cadastrarLivro = prompt('Digite o nome do seu livro')
      
        let isNovaLivro = true
      }

      if(isNovaLivro) {
        const livros = {
          cadastrar: cadastrarLivro,
          pesquisar: prompt('Pesquise o seu livro'),
          exluir: prompt('Exclua o livro'),
          alterar: prompt('Altere o livro'),
          filtrar: prompt('Filtre o livro'),
      }

livros.push(livros)
console.log(livros)
} else {
  alert('Livro Cadastrado')
}
}

function pesquisarLivro() {
  let livro = prompt('Pesquise o livro');
  let isExiteLivros = false


veiculos.forEach(livro => {
  if(veiculo.livros == livros) {
    isExiteLivros = true
      alert(`${livros.cadastrar} - ${livros.pesquisar} -
${livros.excluir} - ${livros.alterar} - ${livros.filtrar}`)
}
})

if(!isExiteLivros) {
  alert('Livro nao encontrado!')
}

}

function exluirLivro() {
  let placa = prompt('Digite o livro que deseja excluir!')
  let isExiteLivros = false


livros.forEach((livros, index) => {
if(livros.placa == placa) {
isExiteLivros = true
livros.splice(index, 1)
alert('Livro excluido!')
}
})

if(!isExiteLivros) {
  alert('Livros não encontrada!')
}

  }

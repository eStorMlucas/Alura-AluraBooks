import { livrosComDesconto } from "./conectandoAPI.js"; 

const listagemLivros = document.querySelector("#livros")
const sectionValorDeLivros = document.querySelector("#valor_total_livros_disponiveis") 

exibeLivros(livrosComDesconto)

function exibeLivros(arrLivros) {
  listagemLivros.innerHTML = ""
  sectionValorDeLivros.innerHTML = ""

  arrLivros.forEach(livro => {
    const disponibilidade = livro.quantidade > 0 ? "" : "indisponivel" 

    listagemLivros.innerHTML += 
      `
      <div class="livro">
      <img class="livro__imagens ${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `
  });
}

function exibeValorTotalLivros(arrLivros) {
  const valorFinal = arrLivros.reduce((acc, livro) => {
    return acc + livro.preco
  }, 0)

  console.log(valorFinal)

  sectionValorDeLivros.innerHTML += 
  `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorFinal.toFixed(2)}</span></p>
  </div>
  `
}

export {
  exibeLivros,
  exibeValorTotalLivros
}

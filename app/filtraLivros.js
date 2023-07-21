import {exibeLivros, exibeValorTotalLivros} from "./exibeLivros.js";
import { livrosComDesconto } from "./conectandoAPI.js"

const botoes = document.querySelectorAll(".btn")

botoes.forEach(botao => {
  botao.addEventListener("click", () => filtraLivros(botao))
})

function filtraLivros(botao) {
  const valor = botao.value

  if (valor) {
    const livrosFiltrados = livrosComDesconto.filter(livro => livro.categoria === valor) 
    exibeLivros(livrosFiltrados) 
  } else {
    const identificaBotao = botao.classList[1]
    identificaBotao === "btn-disponiveis" ? exibeDisponiveis() : exibeOrdenado()
  }
}

function exibeDisponiveis() {
  const livrosDisponiveis = livrosComDesconto.filter(livro => livro.quantidade > 0)
  exibeLivros(livrosDisponiveis)
  exibeValorTotalLivros(livrosDisponiveis)
}

function exibeOrdenado() {
  const livrosOrdenados = livrosComDesconto.sort((a, b) => a.preco - b.preco)
  exibeLivros(livrosOrdenados)
}

const endPoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json"

async function getAPIitem(endPoint) {
  const item = await fetch(endPoint)
  return await item.json()
}

const desconto = 0.3;
const livrosAPI = await getAPIitem(endPoint)

const livrosComDesconto = livrosAPI.map(livro => {
  return {...livro, preco: livro.preco - livro.preco * desconto}
})

export { livrosComDesconto }

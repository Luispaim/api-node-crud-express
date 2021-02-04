const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = []

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos.push(produto)
    return produto
}

function getProduto(id) {
    const index = produtos.findIndex(p => p.id == id)
    return produtos[index] || {}
}


function getProdutos(valor) {
    const filtroValor = p => p.preco == valor
    if (valor) {
        return Object.values(produtos.filter(filtroValor))
    } else {
        return Object.values(produtos)
    }
}

function excluirProduto(id) {
    const index = produtos.findIndex(p => p.id == id)
    return produtos.splice(index, 1)
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }
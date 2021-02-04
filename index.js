const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))


// validação
const validatePost = (req, res, next) => {
    const produtos = bancoDeDados.getProdutos()
    // console.log(produtos)
    if (produtos.find((p) => p.nome == req.body.nome)) {
        res.status(400).send("Nome já cadastrado")
        return
    }
    next()
}

// Endpoint Bem Vindo!!
app.get('/', (req, res, next) => {
  res.status(200).send(`Bem vindo, ${req.query.nome} !!`)
})

// Endpoint Listar Produtos
app.get('/produtos', (req, res, next) => {
    // console.log(req.query.preco)
    res.status(200).send(bancoDeDados.getProdutos(req.query.preco))
})

// Endpoint Listar Um Produto
app.get('/produtos/:id', (req, res, next) => {
    res.status(200).send(bancoDeDados.getProduto(req.params.id))
})

// Endpoint Criar Produto
app.post('/produtos', validatePost, (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.status(200).send(produto) // JSON
})

// Endpoint Editar Produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.status(200).send(produto) // JSON
})

// Endpoint Deletar Produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.status(200).send(produto) // JSON
})

// Tratamento 404 Not Found
app.use((req, res, next) => {
  res.status(404).send("Página não encontrada")
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
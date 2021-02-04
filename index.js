const port = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./moduleDatabase')

app.use(bodyParser.urlencoded({ extended: true }))


// validação
const validatePost = (req, res, next) => {
    const products = database.listProducts()
    if (products.find((p) => p.name == req.body.name)) {
        res.status(400).send("name já cadastrado")
        return
    }
    next()
}

// Endpoint Bem Vindo!!
app.get('/', (req, res, next) => {
  res.status(200).send(`Bem vindo, ${req.query.name} !!`)
})

// Endpoint Listar products
app.get('/products', (req, res, next) => {
    // console.log(req.query.value)
    res.status(200).send(database.listProducts(req.query.value))
})

// Endpoint Listar Um Product
app.get('/products/:id', (req, res, next) => {
    res.status(200).send(database.retriveProduct(req.params.id))
})

// Endpoint Criar Product
app.post('/products', validatePost, (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        value: req.body.value
    })
    res.status(200).send(product) // JSON
})

// Endpoint Editar Product
app.put('/products/:id', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        value: req.body.value,
        id: parseInt(req.params.id)
    })
    res.status(200).send(product) // JSON
})

// Endpoint Deletar Product
app.delete('/products/:id', (req, res, next) => {
    const product = database.deleteProduct(req.params.id)
    res.status(200).send(product) // JSON
})

// Tratamento 404 Not Found
app.use((req, res, next) => {
  res.status(404).send("Página não encontrada")
})

app.listen(port, () => {
    console.log(`Servidor está executando na porta ${port}.`)
})
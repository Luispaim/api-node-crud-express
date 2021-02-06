const router = require('express').Router();
const Products = require('./models');

// Endpoint Listar Produtos
router.get('/', async (req, res) => {
  const products = await Products.findAll()
  res.status(200).json(products)
})

// Endpoint Listar um Produto
router.get('/:id', async (req, res) => {
  let { id } = req.params
  const product = await Products.findOne({ where: { id: id } })
  res.status(200).json(product)
})

// Endpoint Criar Produto
router.post('/', async (req, res) => {
  const product = await Products.create(req.body)
  res.status(201).json(product)
})

// Endpoint Deletar Produto
router.delete('/:id', async (req, res) => {
  let { id } = req.params
  const product = Products.destroy({ where: { id: id } })
  res.status(200).json(product)

})

// Endpoint Editar Produto
router.put('/:id', async (req, res) => {
  let { name, value } = req.body
  let product = await Products.findByPk(req.params.id)
  product.name = name || product.name
  product.value = value || product.value
  await product.save()
  res.status(200).json(product)
})

// Endpoint Editar um campo do Produto
router.patch('/:id/value', async (req, res) => {
  let { id } = req.params
  let { value } = req.body
  let product = await Products.update({ value: value }, { where: { id: id } })
  res.status(200).json(product)
})

module.exports = router

const router = require('express').Router();
const Buyers = require('./models');

// Endpoint Listar Pessoas
router.get('/', async (req, res) => {
  const buyers = await Buyers.findAll()
  res.status(200).json(buyers)
})

// Endpoint Listar um Pessoa
router.get('/:id', async (req, res) => {
  let { id } = req.params
  const buyer = await Buyers.findOne({ where: { id: id } })
  res.status(200).json(buyer)
})

// Endpoint Criar Pessoa
router.post('/', async (req, res) => {
  const buyer = await Buyers.create(req.body)
  res.status(201).json(buyer)
})

// Endpoint Deletar Pessoa
router.delete('/:id', async (req, res) => {
  let { id } = req.params
  const buyer = Buyers.destroy({ where: { id: id } })
  res.status(200).json(buyer)

})

// Endpoint Editar Pessoa
router.put('/:id', async (req, res) => {
  let { name } = req.body
  let buyer = await Buyers.findByPk(req.params.id)
  buyer.name = name || buyer.name
  await buyer.save()
  res.status(200).json(buyer)
})

// Endpoint Editar um campo do Pessoa
router.patch('/:id/name', async (req, res) => {
  let { id } = req.params
  let { name } = req.body
  let buyer = await Buyers.update({ name: name }, { where: { id: id } })
  res.status(200).json(buyer)
})

module.exports = router

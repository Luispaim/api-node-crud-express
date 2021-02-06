const router = require('express').Router();
const Types = require('./models');

// Endpoint Listar Tipos
router.get('/', async (req, res) => {
  const types = await Types.findAll()
  res.status(200).json(types)
})

// Endpoint Listar um Tipo
router.get('/:id', async (req, res) => {
  let { id } = req.params
  const type = await Types.findOne({ where: { id: id } })
  res.status(200).json(type)
})

// Endpoint Criar Tipo
router.post('/', async (req, res) => {
  const type = await Types.create(req.body)
  res.status(201).json(type)
})

// Endpoint Deletar Tipo
router.delete('/:id', async (req, res) => {
  let { id } = req.params
  const type = Types.destroy({ where: { id: id } })
  res.status(200).json(type)

})

// Endpoint Editar Tipo
router.put('/:id', async (req, res) => {
  let { name } = req.body
  let type = await Types.findByPk(req.params.id)
  type.name = name || type.name
  await type.save()
  res.status(200).json(type)
})

// Endpoint Editar um campo do Tipo
router.patch('/:id/name', async (req, res) => {
  let { id } = req.params
  let { name } = req.body
  let type = await Types.update({ name: name }, { where: { id: id } })
  res.status(200).json(type)
})

module.exports = router

const express = require("express");
const app = express();
const products = require('./products/routes');
const buyers = require('./buyers/routes');
const types = require('./types/routes');
const db = require('./db');

(
  async () => {
    await db.sync();
  }
)()

const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', products);
app.use('/buyers', buyers);
app.use('/types', types);

app.use((req, res, next) => {
  res.status(404).send("Página encontrada!")
});

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
});

const { Router } = require('express');

const mysqlConnection = require('../../database/mysqlConnection');
const ProductContenedorSQL = require('../contenedores/ProductContenedorSQL');

const productRouter = Router();

const productContenedorSQL = new ProductContenedorSQL(mysqlConnection, 'productos');

productRouter.get('/', async (req, res) => {
  const productList = await productContenedorSQL.getAll();
  res.json(productList)
});

productRouter.get('/:id', async (req, res) => {
  let productList = {};
  if (req.params.id) {
    productList = await productContenedorSQL.getById(req.params.id);
  }
  res.json(productList)
});

productRouter.post('/', async (req, res) => {
  const productId = await productContenedorSQL.save(req.body);
  res.json(productId)
});

productRouter.delete('/:id', async (req, res) => {
  if (req.params.id) {
    await productContenedorSQL.deleteById(req.params.id);
  }
  res.json({ message: `${req.params.id} deleted succesfully`});
});

productRouter.put('/:id', async (req, res) => {
  if (req.params.id) {
    await productContenedorSQL.update(req.params.id, req.body);
  }
  res.json({ message: `${req.params.id} updated succesfully`});
});

module.exports = productRouter;

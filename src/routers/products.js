const { Router } = require('express');
const ProductContenedor = require('../contenedores/ProductContenedor');

const productRouter = Router();

const productContenedor = new ProductContenedor();

productRouter.get('/:id', (request, response) => {
  const product = productContenedor.getById(request.params.id);

  if (product === null) {
    response.json({ error: 'producto no encontrado' });
  } else {
    response.json(product);
  }
});

productRouter.get('/', (request, response) => {
  const products = productContenedor.getAll();
  
  response.json(products);
});

productRouter.post('/', (request, response) => {
  console.log('POST: ', request.body);
  const productId = productContenedor.save(request.body);

  response.json({
    ...request.body,
    id: productId,
    // title: request.body.title,
    // price: request.body.price,
    // thumnail: request.body.thumnail
  });
});

productRouter.put('/:id', (request, response) => {
  productContenedor.update(request.params.id, request.body);

  response.json({ message: 'producto actualizado'});
});

productRouter.delete('/:id', (request, response) => {
  productContenedor.deleteById(request.params.id);

  response.json({ message: 'producto borrado' });
});

module.exports = productRouter;
const { default: knex } = require("knex");

const products = [
  {
    id: 1,
    title: 'Pizza',
    price: 100,
    thumbnail: 'https://img-global.cpcdn.com/recipes/c609e9b32a56f760/1200x630cq70/photo.jpg'
  },
  {
    id: 2,
    title: 'Ensalada',
    price: 80,
    thumbnail: 'https://easyrecetas.com/wp-content/uploads/2019/09/Receta-de-Ensalada-Latina.jpg'
  }
];

class ProductContenedorSQL {
  constructor(config, table) {
    this.database = knex(config);
    this.table = table;
  }

  save(product) {
    // this.database.insert
    product.id = this.getId();
    this.products.push(product);
    return product.id;
  }

  getById(id) {
    const product = this.products.find((item) => item.id === parseInt(id));
    if (!product)
      return null;
    
    return product;
  }

  getAll() {
    return this.products;
  }

  deleteById(id) {
    const productIndex = this.products.findIndex((item) => item.id === parseInt(id));
    this.products.splice(productIndex, 1);
    return ;
  }

  deleteAll() {
    this.products = [];
    return ;
  }

  update(id, product) {
    const productIndex = this.products.findIndex((item) => item.id === parseInt(id));
    this.products.splice(productIndex, 1, { id: parseInt(id), ...product });
    return ;
  }

  getId() {
    const lastProduct = this.products[this.products.length - 1];
    const lastId = lastProduct.id;

    return lastId + 1;
  }
}

module.exports = ProductContenedor;
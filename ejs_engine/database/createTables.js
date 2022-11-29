const knex = require('./connection');

const createTables = () => {
  knex.schema.dropTableIfExists('articulos').then(() => {
    knex.schema.createTable('articulos', (table) => {
      table.increments('id').primary()
      table.string('nombre', 15).notNullable()
      table.string('codigo', 10).notNullable()
      table.float('precio')
      table.integer('stock')
    })
    .then(() => console.log('TABLE articulos created'))
    .catch((error) => console.log('TABLE articulos error: ', error));
  })
}

module.exports = createTables;
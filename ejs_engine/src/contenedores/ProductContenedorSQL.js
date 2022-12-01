const knex = require("knex");

class ProductContenedorSQL {
  constructor(config, table) {
    this.database = knex(config);
    this.table = table;
  }

  async save(product) {
    const id = await this.database(this.table).insert(product, ['id']);
    return id;
  }

  getById(id) {
    return this.database.select().from(this.table).where('id', parseInt(id));
  }

  getAll() {
    return this.database.select().from(this.table);
  }

  async deleteById(id) {
    await this.database(this.table).where('id', id).del();
    return ;
  }

  async deleteAll() {
    await this.database(this.table).del();
    return ;
  }

  async update(id, product) {
    await this.database(this.table).where('id', id).update(product);
    return ;
  }
}

module.exports = ProductContenedorSQL;
// 1
use empresa;

// 2
db.createCollection('clientes');

// 3
db.clientes.insertOne({ nombre: 'CoderHouse', edad: 50 });

// 4
db.clientes.insertMany([
  { nombre: 'CoderHouse', edad: 50 },
  { nombre: 'DigitalHouse', edad: 50 },
  { nombre: 'Soy Henry', edad: 50 }
]);

// 5
db.articulos.insertMany([
  { nombre: 'CPU', precio: 50, stock: 100 },
  { nombre: 'Monitor', precio: 50, stock: 100 },
  { nombre: 'Teclado', precio: 50, stock: 100 }
]);

// 6
show collections;

// 7
db.clientes.find();
db.articulos.find();

// 8
ObjectId().getTimestamp(); // sin timezone

ObjectId("638e8a6b1485dc48978ea0f0").getTimestamp().toLocaleString() // con timezone local

// 9
db.articulos.estimatedDocumentCount();
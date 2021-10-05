const express = require('express');
const path = require ('path');
const handleBars = require('express-handlebars');

const app = express();


app.engine('hbs', handleBars({
  extname: '.hbs',
  defaultLayout: 'index.hbs',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials/',
}));

app.set('view engine', 'hbs');
app.set('views', './views');

// app.use(express.static('public'));

const fakeApi = () => [
  { name: 'Katarina', lane: 'midlaner'},
  { name: 'Jayce', lane: 'toplaner'},
  { name: 'Heimerdinger', lane: 'toplaner'},
  { name: 'Jayce', lane: 'midlaner'},
  { name: 'Azir', lane: 'midlaner'}
];

app.get('/', (req, res) => {
  res.render('main', { suggestedChamps: fakeApi(), listExists: true });
});

app.get('/datos', (req, res) => {
  const datos = {
    nombre: 'coder',
    apellido: "perez",
    edad: 29,
    email: 'pepe@coderhouse.com',
    telefono: 3302659
  };
  res.render('datos', datos);
});

const PORT = 8080;

app.listen(PORT, (error) => {
  if (error) throw new Error(`Error en el servidor ${error}`);
  console.log(`El servidor express escuchando en el puerto ${PORT}`);
});
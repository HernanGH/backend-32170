const express = require('express');
const { Server: SocketServer } = require('socket.io')
const { Server: HttpServer } = require('http')

const ProductContenedor = require('./src/contenedores/ProductContenedor');
const productRouter = require('./src/routers/products');

const app = express();

const httpServer = new HttpServer(app);

const io = new SocketServer(httpServer);


io.on('connection', (socket) => {
  console.log('socket id: ', socket.id);

  socket.emit('products', productContenedor.getAll());

  // socket.on('new-message', (newMessage) => {
  //   console.log({newMessage});
  //   messages.push(newMessage);
  //   io.sockets.emit('conversation', messages);
  // });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/static', express.static('public'));

app.set('view engine', 'ejs');

const productContenedor = new ProductContenedor();

app.get('/', (req, res) => {
    // const personList = personaContenedor.getAll();
    const personList = [];
  res.render('pages/index', { list: personList });
});

app.post('/product', (req, res) => {
  console.log(req.body);
  productContenedor.save(req.body);

  io.sockets.emit('products', productContenedor.getAll());

  res.redirect('/'); // TODO enviar datos del historial
});

app.get('/product', (req, res) => {
  res.json(productContenedor.getAll());
});

app.use('/api/products', productRouter);

const PORT = 8080;
httpServer.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
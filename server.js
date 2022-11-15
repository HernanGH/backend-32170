const express = require('express')
const { Server: SocketServer } = require('socket.io')
const { Server: HttpServer } = require('http')

const app = express();

const httpServer = new HttpServer(app);

const io = new SocketServer(httpServer);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('socket id: ', socket.id);

  socket.emit('conversation', messages);

  socket.on('new-message', (newMessage) => {
    console.log({newMessage});
    messages.push(newMessage);
    io.sockets.emit('conversation', messages);
  });
});



const messages = [
  { author: 'pepe', text: 'Hola'},
  { author: 'grillo', text: 'todo bien?'},
  { author: 'pepe', text: 'Si, todo bien!'},
]

const connectedServer = httpServer.listen(8080, () => {
  console.log('RUNNING...');
  console.log(`Servidor Http con Websockets escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))

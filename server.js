const express = require('express')
const { Server: SocketServer } = require('socket.io')
const { Server: HttpServer } = require('http')

// 1 iniciamos app con express
const app = express()
// 2 creamos server http (nativo node) con la app express como parametro
const httpServer = new HttpServer(app)
// 3 creamos el socket server ahora si con el http server como parametro
const io = new SocketServer(httpServer)

// 4 creamos servidor web estico para poder ver los htmls (frontend)
app.use(express.static('public'))

// 5 creamos el handshake, (acuerdo con el cliente)
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado!', socket.id)
  
  // mandamos 'message' a el cliente conectado
  socket.emit('message', 'Este es mi mensaje desde el servidor')
  // socket.emit('ALERTA ROJA', { message: 'cuidado' });

  socket.on('notification', (data) => {
    console.log(data)
    // mandamos 'messages' a todos los clientes conectados
    io.sockets.emit('messages', data)
  })

  socket.on('new-message', (newMessage) => {
    console.log({newMessage});
    io.sockets.emit('chat-update', newMessage)
  })
})

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Servidor Http con Websockets escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))



const express = require('express')
const { Server: SocketServer } = require('socket.io')
const { Server: HttpServer } = require('http')

const app = express()
const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)

app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado!')
  
  socket.emit('message', 'Este es mi mensaje desde el servidor')

  socket.on('notification', (data) => {
    console.log(data)
    io.sockets.emit('messages', data)
  })
})

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Servidor Http con Websockets escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))



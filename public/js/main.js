const socket = io.connect();

socket.on('message', (data) => {
  console.log(data);
  alert(data);
  socket.emit('notification', 'Mensaje recibido exitosamente');
});

socket.on('messages', (data) => {
  console.log(data);
})
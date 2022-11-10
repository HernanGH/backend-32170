const socket = io.connect();

socket.on('message', (data) => {
  console.log(data);
  socket.emit('notification', 'Mensaje recibido exitosamente');
});

// socket.on('ALERTA ROJA', (data) => {
//   console.log(data);
  
// })

socket.on('messages', (data) => {
  console.log(data);
})

socket.on('chat-update', (data) => {
  console.log('chat-update', data);
  const chat = document.getElementById('chat');
  const listItem = document.createElement('li');

  listItem.innerHTML = data;
  chat.appendChild(listItem);
})

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const mensaje = document.getElementById('mensaje').value;

  socket.emit('new-message', mensaje);
})

// const button = document.getElementById('button');}

// button.addEventListener('click', (event) => {
//   console.log(event);
// })
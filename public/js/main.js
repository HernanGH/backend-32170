const socket = io(); // emitimos el evento "connection" que el socket server esta escuchando

socket.on('conversation', (messages) => {
  const messagesHtml = messages
    .map((message) => `
      <div>
        <strong>${message.author}: </strong>
        <em>${message.text}</em>
      </div>
    `)
    .join(' ');

  document.getElementById('messages').innerHTML = messagesHtml;
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = document.getElementById('text').value;
  const author = document.getElementById('author').value;
  const message = { text, author }
  socket.emit('new-message', message);
});


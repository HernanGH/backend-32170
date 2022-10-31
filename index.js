const express = require('express');

const app = express();
const port = 3010;

const database = [
  { id: 0, name: 'coder', email: 'coder@mail.com' },
  { id: 1, name: 'coder1', email: 'coder1@mail.com' },
  { id: 2, name: 'coder2', email: 'coder2@mail.com' },
  { id: 3, name: 'coder3', email: 'coder3@mail.com' },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
  console.log('GET de todos los usuarios');
  res.json(database);
});

app.get('/users/:id', (request, response) => {
  console.log('GET un usuario por id');
  const user = database.find((item) => item.id === parseInt(request.params.id));
  console.log(user);
  response.json(user);
});

app.post('/users', (request, response) => {
  console.log('POST crear usuario con name y email');
  const newUser = {
    id: database.length,
    ...request.body
  }

  // const newUser = {
  //   id: database.length,
  //   name: request.body.name,
  //   email: request.body.email
  // }

  console.log(newUser);

  database.push(newUser);
  response.json(newUser);
});

app.delete('/users/:id', (request, response) => {
  console.log('DELETE un usuario por id');
  const userToDeleteIndex = database.findIndex((item) => item.id === parseInt(request.params.id));
  
  const user = database.splice(userToDeleteIndex, 1);
  console.log(user);
  response.json(user);
});

app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});


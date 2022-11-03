const { Router } = require('express');

const userRouter = Router();

const database = [
  { id: 0, name: 'coder', email: 'coder@mail.com' },
  { id: 1, name: 'coder1', email: 'coder1@mail.com' },
  { id: 2, name: 'coder2', email: 'coder2@mail.com' },
  { id: 3, name: 'coder3', email: 'coder3@mail.com' },
];


userRouter.get('/', (request, res) => {
  res.json(database);
});

userRouter.get('/:id', (request, response) => {
  const user = database.find((item) => item.id === parseInt(request.params.id));
  if (!user) {
    response.json({
      error: 'asdasdasd'
    });

  } else {
    response.json(user);
  }
});

userRouter.post('/', (request, response) => {
  const newUser = {
    id: database.length,
    ...request.body
  }

  // const newUser = {
  //   id: database.length,
  //   name: request.body.name,
  //   email: request.body.email
  // }


  database.push(newUser);
  response.json(newUser);
});

userRouter.delete('/:id', (request, response) => {
  const userToDeleteIndex = database.findIndex((item) => item.id === parseInt(request.params.id));
  
  const user = database.splice(userToDeleteIndex, 1);
  console.log(user);
  response.json(user);
});

userRouter.put('/:id', (request, response) => {
  const userToUpdateIndex = database.findIndex((item) => item.id === parseInt(request.params.id));
  
  database.splice(userToUpdateIndex, 1, request.body);

  response.json(request.body);
});

module.exports = userRouter;
const express = require('express');

const userRouter = require('./routers/users');

const app = express();
const port = 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});


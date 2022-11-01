const express = require('express');
const logRequestInfo = require('./middlewares/logRequestInfo');

const userRouter = require('./routers/users');

const app = express();
const port = 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', logRequestInfo, userRouter);

app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});


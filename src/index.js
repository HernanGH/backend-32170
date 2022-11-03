const express = require('express');
const logRequestInfo = require('./middlewares/logRequestInfo');

const userRouter = require('./routers/users');
const productRouter = require('./routers/products');

const app = express();
const port = 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.use('/api/users', logRequestInfo, userRouter);
app.use('/api/products', logRequestInfo, productRouter);

app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
})

app.on('error', (error) => {
  console.log(error);
});

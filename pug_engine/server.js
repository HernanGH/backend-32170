const express = require('express');
const app = express();

// app.use('/static', express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/hello', (req, res) => {
  res.render('hello.pug', {
    mensaje: req.query.mensaje,
    descripcion: req.query.descripcion
  });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
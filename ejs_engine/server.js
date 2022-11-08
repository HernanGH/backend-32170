const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/static', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // const personList = personaContenedor.getAll();
    const personList = [];
  res.render('pages/index', { list: personList });
});

app.post('/personas', (req, res) => {
  console.log(req.body);
  // personaContenedor.save(req.body);

  res.redirect('/'); // TODO enviar datos del historial
});

app.get('/mascots', (req, res) => {
  const mascots = [
    { name: 'Sammy' },
    { name: 'Tux' },
    { name: 'Moby Dock' },
    { name: 'Pug' },
    { name: 'Firulaus' }
  ];
  const tagline = 'Mascots';

  res.render('pages/mascots', {
    mascots,
    tagline
  });
});

app.get('/about', (req, res) => {
  res.render('pages/about', {});
});

// app.get('/datos', (req, res) => {
//   res.render('pages/datos', {});
// });

app.get("/datos", (req, res) => {
  res.render("pages/datos", {
    min: req.query.min,
    nivel: req.query.nivel,
    max: req.query.max,
    titulo: req.query.titulo,
  });
});


const PORT = 8080;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
const fs = require('fs');
const express = require('express');

const app = express();


// defino el motor de plantilla
app.engine('ntl', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) {
      return callback(new Error(err));
    }
    const rendered = content.toString()
                            .replace('#title#', ''+ options.title +'')
                            .replace('#message#', ''+ options.message +'');
    return callback(null, rendered);
  });
});

app.set('views', './views'); // especifica el directorio de vistas
app.set('view engine', 'ntl'); // registra el motor de plantillas

// creamos el endpoint donde vamos a usar el motor de plantilla
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello world!'});
});


app.listen(8080, () => console.log('Running in port: 8080'));
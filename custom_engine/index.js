const fs = require('fs');
const express = require('express');

const app = express();

// defino el motor de plantilla
app.engine('coderhouse', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) {
      return callback(new Error(err));
    }
    const rendered = content.toString()
                            .replace('#title#', ''+ options.title +'')
                            .replace('#subtitle#', ''+ options.subtitle +'')
                            .replace('#message#', ''+ options.message +'');
    return callback(null, rendered);
  });
});

app.set('views', './views'); // especifica el directorio de vistas
app.set('view engine', 'coderhouse'); // registra el motor de plantillas

// creamos el endpoint donde vamos a usar el motor de plantilla
app.get('/', function (req, res) {
  res.render('index', { 
    title: 'Che', 
    subtitle: 'Atencion...', 
    message: 'se viene el mundial!!!'
  });
});

app.listen(8080, () => console.log('Running in port: 8080'));
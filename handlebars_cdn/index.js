const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(8080, () => console.log('Running in 8080'));

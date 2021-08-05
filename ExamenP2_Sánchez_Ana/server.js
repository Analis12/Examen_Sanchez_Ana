const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getproductos', () => {
    var rawdata = fs.readFileSync(path.resolve(__dirname + '/data/data.json'));
    var productos = JSON.parse(rawdata);
    return productos['data'];
});
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});
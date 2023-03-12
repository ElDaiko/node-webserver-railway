const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use( express.static('public'));

//lo de la carpeta public tiene prioridad sobre la rustas definidas

//controladores

app.get('/hola-mundo',  (req, res) => {
    res.send('Hola mundo')
})

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Miguel',
        titulo: 'Node Course'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Miguel',
        titulo: 'Node Course'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Miguel',
        titulo: 'Node Course'
    });
})

app.get('*',  (req, res) => {
    res.send('404')
})

app.listen(process.env.PORT)
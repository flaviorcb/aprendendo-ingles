const express = require('express');
const ejs = require('ejs');

var db = require('./configDb'); //Abre a conexão.

const controller = require('./controller');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    controller.index(req, res);
});

app.post('/verbete', (req, res) => {
    controller.salvarVerbete(req, res);
});

app.get('/deleteVerbete', async (req, res) => {
    controller.deletarVerbete(req, res);
});

app.post('/updateVerbete', async (req, res) => {

    controller.updateVerbete(req, res);
});


app.listen(3000, () => {
    console.log('ouvindo na porta 3000');

});


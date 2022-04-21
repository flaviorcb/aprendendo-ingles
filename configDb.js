const mongoose = require('mongoose');
const url = 'mongodb://localhost/verbetes'
mongoose.connect(url, { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', () => {
    console.error.bind(console, 'erro na conexao');
});

db.once('open', () => {
    console.log('conectado ao banco de dados')
})


module.exports.db = db;

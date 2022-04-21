const { salvarVerbete, pegarVerbetes, deletarVerbete, updateVerbete } = require('./verbeteModel');

const controller = {};

controller.index = async function (req, res) {
    const lista = await pegarVerbetes();

    res.render('index', { lista });
}

controller.salvarVerbete = async function (req, res) {
    salvarVerbete(req.body, async () => {
        const listaVerbetes = await pegarVerbetes();
        res.render('index', { lista: listaVerbetes });
    }, req, res);
}

controller.deletarVerbete = async function (req, res) {
    await deletarVerbete(req.query.verbete);
    res.redirect('/');
}

controller.updateVerbete = async function (req, res) {
    await updateVerbete({ id: req.body.id, original: req.body.updateOriginal, traducao: req.body.updateTraducao });
    res.redirect('/');
}

module.exports = controller;





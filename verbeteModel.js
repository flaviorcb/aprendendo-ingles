const mongoose = require('mongoose');

var VerbeteSchema = new mongoose.Schema({
    original: String,
    traducao: String
});

var VerbeteModel = mongoose.model('verbete', VerbeteSchema);

function salvarVerbete(verbete, callback, req, res) {
    const verbeteModel = new VerbeteModel(verbete);
    verbeteModel.save((err) => {
        callback(req, res);
    });

}

async function pegarVerbetes() {
    const docs = await VerbeteModel.find({}).exec();
    return docs;
}

async function updateVerbete(verbete) {
    const doc = await VerbeteModel.updateOne({ _id: verbete.id }, { $set: { original: verbete.original, traducao: verbete.traducao } });
}

async function deletarVerbete(id) {
    const result = await VerbeteModel.deleteOne({ _id: id });
}

module.exports.salvarVerbete = salvarVerbete;
module.exports.pegarVerbetes = pegarVerbetes;
module.exports.deletarVerbete = deletarVerbete;
module.exports.updateVerbete = updateVerbete;

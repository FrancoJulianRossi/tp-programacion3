const {
    getAllPersonas
} = require('../models/personaModel');

function listarPersonas(req, res) {
    const lista = getAllPersonas();
    res.json(lista);
}

module.exports = {
    listarPersonas
};
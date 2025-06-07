const {
    Turnos
} = require('../sqlite/entities/turno.entity.js');

const getTurnoModel = () => {
    const turnos = Turnos.findAll();
    return turnos;
}

module.exports = {
    getTurnoModel
}
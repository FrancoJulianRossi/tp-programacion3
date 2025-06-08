const {Turno} = require('../sqlite/entities/turno.entity.js');

const getTurnoModel = () => {
    const turnos = Turno.findAll();
    return turnos;
}

module.exports = {
    getTurnoModel
}
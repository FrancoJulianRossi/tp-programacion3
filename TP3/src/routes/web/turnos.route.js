const { Router } = require('express');
const turnosWeb = require('../../controllers/web/turnos.controller.js');

const rutasTurnosWeb = Router();
rutasTurnosWeb.get('/', turnosWeb.listarTurnos);
rutasTurnosWeb.get('/nuevo', turnosWeb.mostrarTurnoNuevo);
rutasTurnosWeb.post('/nuevo', turnosWeb.crearTurno);
rutasTurnosWeb.post('/:idTurno/borrar', turnosWeb.borrarTurno);

module.exports = rutasTurnosWeb;
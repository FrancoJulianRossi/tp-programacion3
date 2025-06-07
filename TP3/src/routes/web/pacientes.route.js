const {Router} = require('express');
const pacientesWeb = require('../../controllers/web/pacientes.controller.js');
const rutasPacientesWeb = Router();

rutasPacientesWeb.get('/', pacientesWeb.listarPacientes);
rutasPacientesWeb.post('/nuevo', pacientesWeb.crearPaciente);
rutasPacientesWeb.post('/actualizar/:idPaciente', pacientesWeb.actualizarPaciente);
rutasPacientesWeb.post('/:idPaciente/eliminar', pacientesWeb.eliminarPaciente);

module.exports = rutasPacientesWeb;
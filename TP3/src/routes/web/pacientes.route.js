const {Router} = require('express');
const pacientesWeb = require('../../controllers/web/pacientes.controllers.js');
const rutasPacientesWeb = Router();

rutasPacientesWeb.get('/', pacientesWeb.listarPacientes);
rutasPacientesWeb.post('/nuevo', pacientesWeb.crearPaciente);
rutasPacientesWeb.post('/actualizar/:idPaciente', pacientesWeb.actualizarPaciente);
rutasPacientesWeb.post('/:idPaciente/eliminar', pacientesWeb.eliminarPaciente);
rutasPacientesWeb.get('/crearPaciente', pacientesWeb.mostrarFormularioNuevo);
rutasPacientesWeb.get('/actualizar/:idPaciente', pacientesWeb.mostrarFormularioActualizar);

module.exports = rutasPacientesWeb;
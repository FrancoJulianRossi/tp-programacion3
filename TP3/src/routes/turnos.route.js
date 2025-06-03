const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
const rutaTurnos = Router();

rutaTurnos.get('/:idPaciente',verifyTokenMiddleware,turnosController.list);
rutaTurnos.delete('/:idTurno',verifyTokenMiddleware,rutasController.delete);

module.exports = rutaTurnos;
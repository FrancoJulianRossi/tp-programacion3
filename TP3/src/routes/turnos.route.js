const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/API/turnos.controller.js');

router.get('/:idPaciente', turnosController.getTurnosId);
router.delete('/:idTurno', turnosController.deleteTurno);
router.post('/', turnosController.crearTurno);

module.exports = router;
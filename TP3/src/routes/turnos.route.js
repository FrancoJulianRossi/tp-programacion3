const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/turnosController');

router.get('/:idPaciente', turnosController.consultarPorPaciente);
router.delete('/:idTurno', turnosController.cancelarTurno);
router.post('/', turnosController.crearTurno);

module.exports = router;
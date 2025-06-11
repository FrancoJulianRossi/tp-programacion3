const express = require('express');
const router = express.Router();
const {listarPersonas} = require('../controllers/personaController');

router.get('/', listarPersonas);

module.exports = router;
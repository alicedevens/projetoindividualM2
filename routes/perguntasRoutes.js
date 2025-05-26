const express = require('express');
const router = express.Router();
const perguntasController = require('../controllers/perguntasController');

router.get('/', perguntasController.getAllPerguntas);
router.get('/:id', perguntasController.getPerguntasById);
router.post('/', perguntasController.createPerguntas);


module.exports = router;
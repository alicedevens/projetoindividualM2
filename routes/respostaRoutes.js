const express = require('express');
const router = express.Router();
const respostaController = require('../controllers/respostaController');

router.get('/', respostaController.getAllResposta);
router.get('/:id', respostaController.getRespostaById);
router.post('/', respostaController.createResposta);
router.put('/:id', respostaController.updateResposta);
router.post('/save', respostaController.saveRespostas);

module.exports = router;

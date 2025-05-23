const express = require('express');
const router = express.Router();
const questionarioController = require('../controllers/questionarioController');

router.get('/', questionarioController.getAllQuestionario);
router.get('/:id', questionarioController.getQuestionarioById);
router.post('/', questionarioController.createQuestionario);


module.exports = router;
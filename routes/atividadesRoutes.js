const express = require('express');
const router = express.Router();
const atividadesController = require('../controllers/atividadesController');

router.get('/', atividadesController.getAllAtividades);
router.get('/:id', atividadesController.getAtividadesById);
router.get('/:id', atividadesController.getAtividadesToDo);
router.get('/:id', atividadesController.getAtividadesDone);
router.post('/', atividadesController.createAtividades);
router.put('/:id', atividadesController.updateAtividades);
router.delete('/:id', atividadesController.deleteAtividades);

module.exports = router;
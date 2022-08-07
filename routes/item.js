const { Router } = require('express');
const itemController = require('../controllers/itemControllers');
const router = Router();

router.get('/items', itemController.get_items);
router.post('/items', itemController.post_items);
router.put('/items/:id', itemController.update_items);
router.delete('/items/:id', itemController.delete_items);

module.exports = router;
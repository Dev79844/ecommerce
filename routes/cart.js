const { Router } = require('express');
const cartControllers = require('../controllers/cartControllers');
const router = Router();

router.get('/cart/:id', cartControllers.get_cart_items);
router.post('/cart/:id', cartControllers.add_cart_item);
router.delete('/cart/:userId/:itemId', cartControllers.delete_item);

module.exports = router;
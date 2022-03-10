const router = require('express').Router();
const CartController = require('../controllers/Cart');

router.post('/add/:id', CartController.newCartItem);
router.delete('/remove/:id', CartController.removeCartItem);
router.post('/modify/:id', CartController.modifyQuantity);

module.exports = router;

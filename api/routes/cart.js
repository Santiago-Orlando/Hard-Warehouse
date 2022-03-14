const router = require('express').Router();
const CartController = require('../controllers/Cart');
const { isAuth } = require('../middleware/isAuth');

router.post('/add/:id', isAuth, CartController.newCartItem);
router.delete('/remove/:id', isAuth, CartController.removeCartItem);
router.post('/modify/:id', isAuth, CartController.modifyQuantity);

module.exports = router;

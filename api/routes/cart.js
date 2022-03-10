const router = require('express').Router();
const CartController = require('../controllers/Cart');

router.post('/', CartController.addCartItem);
/* modifyCartItem
deleteCartItem */

module.exports = router;

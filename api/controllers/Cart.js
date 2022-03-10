const CartServices = require('../services/Cart');

class CartController {
  static async newCartItem(req, res) {
    const { id } = req.params;
    const { error, response } = await CartServices.newCartItem(id, req.body);

    if (error) res.status(400).send(response);
    res.status(201).send(response);
  }
}

module.exports = CartController;

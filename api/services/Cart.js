const { ProductModel } = require('../db/models/Products');
const { UserModel } = require('../db/models/Users');
class CartServices {
  static async newCartItem(id, data) {
    try {
      const { productId } = data;
      const productItem = await ProductModel.findById({ id: productId });
      if (!productItem.stock) return { error: true }; // aseguro q agrego algo con stock.
      const user = await UserModel.findById(id);
      user.carrito.push(productItem.id);
      console.log('user', user);
      const updatedUser = await UserModel.findByIdAndUpdate(id, user, {
        new: true,
      });
      console.log('userupdate', updatedUser);
      return {
        error: false,
        response: updatedUser,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }
}

module.exports = CartServices;

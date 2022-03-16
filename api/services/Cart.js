const { ProductModel } = require('../models/Products');
const { UserModel } = require('../models/Users');
class CartServices {
  static async newCartItem(id, data) {
    try {
      const { productId, cantidad, price, image, title } = data;
      const productItem = await ProductModel.findById(productId);
      if (!productItem.stock) return { error: true }; // aseguro q agrego algo con stock.
      const user = await UserModel.findById(id);
      user.carrito.push({ product: productItem.id, cantidad: cantidad, price: price, title: title, image: image });
      const updatedUser = await UserModel.findByIdAndUpdate(id, user, {
        new: true,
      });
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
  static async removeCartItem(id, productId) {
    try {
      //const { productId } = data;
      const user = await UserModel.findById(id);
      user.carrito = user.carrito.filter(({ product }) => {
        return product !== productId;
      });
      const updatedUser = await UserModel.findByIdAndUpdate(id, user, {
        new: true,
      });
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
  static async modifyQuantity(id, data) {
    try {
      const { productId, cantidad } = data;
      const user = await UserModel.findById(id);
      user.carrito = user.carrito.map(item => {
        if (item.product === productId) {
          return (item.cantidad = cantidad);
        } else {
          return item;
        }
      });
      const updatedUser = await UserModel.findByIdAndUpdate(id, user, {
        new: true,
      });
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

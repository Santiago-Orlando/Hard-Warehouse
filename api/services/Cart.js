const { ProductModel } = require("../models/Products");
const { UserModel } = require("../models/Users");

class CartServices {
  static async newCartItem(id, data) {
    try {
      const { productId, cantidad, price, image, title } = data;
      const productItem = await ProductModel.findById(productId);

      if (productItem.stock < cantidad) {
        return { error: true, response: "Insufficient Stock!" };
      }

      const user = await UserModel.findById(id);
      user.carrito.push({
        product: productId,
        cantidad: cantidad,
        price: price,
        title: title,
        image: image,
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
  static async removeCartItem(id, productId) {
    try {
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
      user.carrito = user.carrito.map((item) => {
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

  static async confirmBuy(id) {
    try {
      const result = await UserModel.findById(id);
      result.history.push(result.carrito);
      result.carrito = [];
      const updateProduct = await UserModel.findByIdAndUpdate(id, result, {
        new: true,
      });
      return {
        error: false,
        response: updateProduct,
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

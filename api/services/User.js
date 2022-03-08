const { UserModel, CarritoItemModel } = require("../db/modules/Users")
const { ProductModel } = require("../db/modules/Products")

class UserServices {

    static async addUser(...data) {

        try {
            const item = await ProductModel.findById("6227a03209414d195b8ac42c")
            data[0].carrito = new CarritoItemModel({product: item, cantidad: 1})
            const response = await UserModel(...data).save()

            return {
                error: false,
                response
            }
        } catch (error) {
            return {
                error: true,
                response: error
            }
        }
    }
}


module.exports = UserServices
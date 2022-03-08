const { Schema, model } = require("mongoose")
const { ProductSchema } = require("./Products")

const CarritoItem = new Schema({

    product: {
        type: ProductSchema,
        required: true
    },
    cantidad: {
        type: Number,
        default: 1
    }
})

const CarritoItemModel = model("Carrito", CarritoItem)

const UserSchema = new Schema({

    fullName: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    carrito: {
        type: [CarritoItem],
        default: []
    }

})

const UserModel = model("User", UserSchema)

module.exports = { UserModel, CarritoItemModel }
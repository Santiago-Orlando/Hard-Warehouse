const { Schema, model } = require("mongoose")


const ProductSchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
    },
    details: {
        type: String,
        default: ""
    },
    tags: { type: [String], index: true },

})


const ProductModel = model("Products", ProductSchema)

module.exports = ProductModel
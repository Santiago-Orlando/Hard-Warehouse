const { Schema, model } = require("mongoose");
const mongoosePagination = require("mongoose-paginate-v2");

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    default: null,
  },
  image: {
    type: String,
    default: "",
  },
  details: {
    type: String,
    default: "",
  },
  tags: {
    type: [String],
    index: true,
  },
});

ProductSchema.plugin(mongoosePagination);

const ProductModel = model("Product", ProductSchema);

module.exports = { ProductModel, ProductSchema };

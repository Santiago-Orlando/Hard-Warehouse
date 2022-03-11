const ProductsServices = require("./Products");

class SearchServices {
  static async search(tag) {
    console.log("DATA", tag);
    try {
      const { response } = await ProductsServices.getProducts();
      const list = response.filter((product) => {
        if (product.tags.includes(tag)) return product;
      });
      return {
        error: false,
        response: list,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }
}

module.exports = SearchServices;

const { ProductModel } = require("../models/Products");

class SearchServices {
  static async search(page, tagList) {
    try {
      const response = await ProductModel.paginate(
        { tags: { $all: tagList } },
        { page, limit: 12 }
      );

      return {
        error: false,
        response,
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

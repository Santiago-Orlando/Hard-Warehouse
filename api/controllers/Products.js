const ProductsServices = require("../services/Products");

class ProductsController {
  static async newProduct(req, res) {
    const { error, response } = await ProductsServices.newProduct(req.body);

    if (error) res.status(400).send(response);
    res.status(201).send(response);
  }

  static async getProducts(req, res) {
    const { error, response } = await ProductsServices.getProducts();

    if (error) res.status(400).send(response);
    res.send(response);
  }

  static async getProduct(req, res) {
    const { id } = req.params;
    const { error, response } = await ProductsServices.getProduct(id);

    if (error) res.status(400).send(response);
    res.send(response);
  }
  static async updateProduct(req, res) {
    const { id } = req.params;
    const { error, response } = await ProductsServices.updateProduct(id, req.body);

    if (error) res.status(400).send(response);
    res.send(response);
  }

  static async deleteProduct(req, res) {
    const { id } = req.params;
    const { error, response } = await ProductsServices.deleteProduct(id);

    if (error) res.status(400).send(response);
    res.sendStatus(201);
  }

}

module.exports = ProductsController;

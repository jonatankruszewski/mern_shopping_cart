const Product = require("../models/Product");

class ProductsController {
  static async getAllProducts(req, res) {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  }

  static async getProductById(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  }
}

module.exports = ProductsController;

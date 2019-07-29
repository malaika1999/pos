const Product = require("../../../models/product/product/index.js");

const oneProduct = async (req, res) => {
  try {
    var product = await Product.findById({ _id: req.params.pId }).exec();
    if (!product) {
      return res.send({ message: "Product not found" });
    } else if (product) {
      return res.send({ message: "Product found", data: product });
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  oneProduct
};

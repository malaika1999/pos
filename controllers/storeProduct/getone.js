const StoreProduct = require("../../models/storeProduct/index.js");

const oneStoreProduct = async (req, res) => {
  try {
    var storeProduct = await StoreProduct.findById({ _id: req.params.spId }).exec();
    if (!storeProduct) {
      return res.send({ message: "store Product not found" });
    } else if (storeProduct) {
      return res.send({ message: "store Product found", data: storeProduct });
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  oneStoreProduct
};

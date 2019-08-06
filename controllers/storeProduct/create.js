const StoreProduct = require("../../models/storeProduct/index");

const createStoreProduct = async (req, res) => {
  try {
    let storeProduct = new StoreProduct({
      products: req.body.products,
      storeId: req.body.storeId
    });
    let addedProduct = await storeProduct.save();
    res.status(200).send({
      status: true,
      message: "Store added successfully",
      data: addedProduct
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
    createStoreProduct
}

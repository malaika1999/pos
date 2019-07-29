const StoreProduct = require("../../models/storeProduct/index.js");

const allStoreProducts = async (req, res) => {
  try {
    const storeProduct = await StoreProduct.find().exec();
    if (storeProduct) {
      res.status(200).send({
        status: true,
        message: "Following are the store Products stored in database",
        data: storeProduct
      });
    } else if (!storeProduct) {
      res.status(404).send({
        status: false,
        message: "No store Product found"
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  allStoreProducts
};

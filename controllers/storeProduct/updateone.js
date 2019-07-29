const StoreProduct = require("../../models/storeProduct/index.js");
const configdb = require('../../config/db')

const updateStoreProduct = async (req, res) => {
  try {
    let updatedStoreProduct = await StoreProduct.findOneAndUpdate(
      { _id: req.params.spId },
      {
        products: req.body.products,
      storeId: req.body.storeId
      }
    ).exec();
    // if (
    //   !req.body.storeId ||
    //   !req.body.productName ||
    //   !req.body.stockAvailable ||
    //   !req.body.retailPrice ||
    //   !req.body.soldQty
    // ) {
    //   return res.status(400).send({
    //     status: false,
    //     message: "Its mandatory to fill all required fields"
    //   });
    // }
    return res.status(200).send({
      status: true,
      message: "Store Product updated successfully",
      data: updatedStoreProduct
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  updateStoreProduct
};

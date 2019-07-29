const StoreProduct = require("../../models/storeProduct/index.js");

const deleteStoreProduct = async (req, res) => {
  try {
    let deletedStoreProduct = await StoreProduct.findByIdAndDelete({
      _id: req.params.spId
    }).exec();
    if (deletedStoreProduct) {
      return res.send({
        status: true,
        message: "store product deleted successfully",
        data: deletedStoreProduct
      });
    } else {
      return res.send({
        status: false,
        message: "store product not found with id" + req.params.spId
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message
    });
  }
};

module.exports = {
  deleteStoreProduct
};

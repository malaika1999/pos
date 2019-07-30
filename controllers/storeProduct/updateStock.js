const StoreProduct = require("../../models/storeProduct/index");
const configdb = require("../../config/db");
const mongoose = require("mongoose");

const updateStock = async (req, res) => {
    let transferedProduct = req.body.transferedProduct
    let updatedStock = await StoreProduct.findOneAndUpdate(
    { _id: req.params.sId, 'products._id': req.params.pId },
    { $inc: { 'products.stockAvailable': transferedProduct *-1, 'products.soldQty': transferedProduct  } },
    { upsert: true }
  );
  return res.send({
    message: "quantity updated",
    data: updatedStock
  });
};

module.exports = {
  updateStock
};

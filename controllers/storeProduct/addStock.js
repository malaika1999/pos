const StoreProduct = require("../../models/storeProduct/index");
const configdb = require("../../config/db");
const mongoose = require("mongoose");

const addStock = async (req, res) => {
  let addedStock = await StoreProduct.findOneAndUpdate(
    { _id: req.params.sId, "products._id": req.params.pId },
    {  $inc: { "products.stockAvailable": 1 } },
    { upsert: true }
  );
  return res.send({
    message: "quantity updated",
    data: addedStock
  });
};

module.exports = {
  addStock
};

const Inventory = require("../../models/inventory/index.js");

const updateInventory = async (req, res) => {
  try {
    let updatedInventory = await Inventory.findOneAndUpdate(
      { _id: req.params.inId },
      {
        storeId: req.body.storeId,
        productName: req.body.productName,
        stockAvailable: req.body.stockAvailable,
        retailPrice: req.body.retailPrice,
        soldQty: req.body,
        soldQty
      }
    ).exec();
    if (
      !req.body.storeId ||
      !req.body.productName ||
      !req.body.stockAvailable ||
      !req.body.retailPrice ||
      !req.body.soldQty
    ) {
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    }
    return res.status(200).send({
      status: true,
      message: "Inventory updated successfully",
      data: updatedInventory
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  updateInventory
};

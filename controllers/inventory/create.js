const Inventory = require("../../models/inventory/index.js");

const createInventory = async (req, res) => {
  try {
    let inventory = new Inventory({
      storeId: req.body.storeId,
      productName: req.body.productName,
      stockAvailable: req.body.stockAvailable,
      retailPrice: req.body.retailPrice,
      soldQty: req.body.soldQty
    });
    if (
      !req.body.storeId ||
      !req.body.productName ||
      !req.body.stockAvailable ||
      !req.body.retailPrice ||
      !req.body.soldQty
    )
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    let createdInventory = await inventory.save();
    res.status(201).send({
      status: true,
      message: "Inventory created successfully",
      data: createdInventory
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  createInventory
};

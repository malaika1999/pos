const mongoose = require("mongoose");
const Inventory = require("../../models/inventory/index.js");

const deleteInventory = async (req, res) => {
  try {
    let deletedInventory = await Inventory.findByIdAndDelete({
      _id: req.params.inId
    }).exec();
    if (deletedInventory) {
      return res.send({
        status: true,
        message: "Inventory deleted successfully",
        data: deletedInventory
      });
    } else {
      return res.send({
        status: false,
        message: "Inventory not found with id" + req.params.inId
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
  deleteInventory
};

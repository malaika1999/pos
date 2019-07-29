const Inventory = require("../../models/inventory/index.js");

const allInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find().exec();
    if (inventory) {
      res.status(200).send({
        status: true,
        message: "Following is the inventory stored in database",
        data: inventory
      });
    } else if (!inventory) {
      res.status(404).send({
        status: false,
        message: "No inventory found"
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
  allInventory
};

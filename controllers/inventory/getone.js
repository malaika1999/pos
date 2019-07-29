const Inventory = require("../../models/inventory/index.js");

const oneInventory = async (req, res) => {
  try {
    var inventory = await Inventory.findById({ _id: req.params.inId }).exec();
    if (!inventory) {
      return res.send({ message: "inventory not found" });
    } else if (inventory) {
      return res.send({ message: "inventory found", data: inventory });
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  oneInventory
};

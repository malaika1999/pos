const Waste = require("../../models/waste/index");

const addWasteStore = async (req, res) => {
  try {
    let wasteStore = new Waste({
      storeId: req.body.storeId,
      products: req.body.products
    });
    let addedWasteStore = await wasteStore.save();
    res.status(201).send({
      status: true,
      message: "Store added Successfully",
      data: addedWasteStore
    });
  } catch (error) {
    return res.send({
      status: false,
      message: error.message
    });
  }
};

module.exports = {
  addWasteStore
};

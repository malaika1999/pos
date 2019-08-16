const Waste = require("../../models/waste/index.js");

const updateWasteStore = async (req, res) => {
try {
  let updatedWasteStore = await Waste.findOneAndUpdate(
    { _id: req.params.wId },
    {
      products: req.body.products,
      storeId: req.body.storeId
    }
  ).exec();
  if (
    !req.body.storeId 
  ) {
    return res.status(400).send({
      status: false,
      message: "Its mandatory to fill all required fields"
    });
  }
  return res.status(200).send({
    status: true,
    message: "Waste Store updated successfully",
    data: updatedWasteStore
  });
} catch (error) {
  return res.send({
    status: false,
    message: error.message
  });
}
    
};
module.exports = {
  updateWasteStore
};

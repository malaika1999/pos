const Waste = require("../../models/waste/index.js");

const deleteWasteStore = async (req, res) => {
  try {
    let deletedWasteStore = await Waste.findByIdAndDelete({
      _id: req.params.wId
    }).exec();
    if (deletedWasteStore) {
      return res.send({
        status: true,
        message: "waste Store deleted successfully",
        data: deletedWasteStore
      });
    } else {
      return res.send({
        status: false,
        message: "waste Store not found with id" + req.params.wId
      });
    }
  } catch (error) {
    return res.send({
      status: false,
      message: error.message
    });
  }
};

module.exports = {
  deleteWasteStore
};

const Waste = require("../../models/waste/index.js");

const oneWasteStore = async (req, res) => {
  try {
    var wasteStore = await Waste.findById({ _id: req.params.wId }).exec();
    if (!wasteStore) {
      return res.send({ message: "waste Store not found" });
    } else if (wasteStore) {
      return res.send({ message: "waste Store found", data: wasteStore});
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  oneWasteStore
};

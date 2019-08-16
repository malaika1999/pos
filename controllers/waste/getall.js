const Waste = require("../../models/waste/index.js");

const allWasteStores = async (req, res) => {
  try {
    const wasteProduct = await Waste.find().exec();
    if (wasteProduct) {
      res.status(200).send({
        status: true,
        message: "Following are the waste Products stored in database",
        data: wasteProduct
      });
    } else if (!wasteProduct) {
      res.status(404).send({
        status: false,
        message: "No waste Product found"
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
  allWasteStores
}

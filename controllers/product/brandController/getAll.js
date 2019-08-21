const Brand = require("../../../models/product/brand/index.js");

const allBrands = async (req, res) => {
  try {
    const brand = await Brand.find().exec();
    if (brand) {
      res.status(200).send({
        status: true,
        message: "Following are the brands stored in database",
        data: brand
      });
    } else if (!brand) {
      res.status(404).send({
        status: false,
        message: "No brands found"
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
  allBrands
};

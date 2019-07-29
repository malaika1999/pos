const Brand = require("../../../models/product/brand/index.js");

const updateBrand = async (req, res) => {
  try {
    let updatedBrand = await Brand.findOneAndUpdate(
      { _id: req.params.bId },
      {
        name: req.body.name
      }
    ).exec();
    if (
        !req.body.name 
    ) {
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    }
    return res.status(200).send({
      status: true,
      message: "brand updated successfully",
      data: updatedBrand
    });
  } catch (error) {
      return res.status(500).send({
        status: false,
        message: error.message
      });
    }
};
module.exports = {
  updateBrand
};

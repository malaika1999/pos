const Category = require("../../../models/product/category/index.js");

const updateCategory = async (req, res) => {
  try {
    let updatedCategory = await Category.findOneAndUpdate(
      { _id: req.params.cId },
      {
        name: req.body.name
      }
    ).exec();
    if (!req.body.name) {
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    }
    return res.status(200).send({
      status: true,
      message: "category updated successfully",
      data: updatedCategory
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  updateCategory
};

const Category = require("../../../models/product/category/index.js");

const oneCategory = async (req, res) => {
  try {
    var category = await Category.findById({ _id: req.params.cId }).exec();
    if (!category) {
      return res.send({ message: "category not found" });
    } else if (category) {
      return res.send({ message: "category found", data: category });
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  oneCategory
};

const Brand = require("../../../models/product/brand/index.js");

const oneBrand = async (req, res) => {
  try {
    var brand = await Brand.findById({ _id: req.params.bId }).exec();
    if (!brand) {
      return res.send({ message: "brand not found" });
    } else if (brand) {
      return res.send({ message: "brand found", data: brand });
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  oneBrand
};

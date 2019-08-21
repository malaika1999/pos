const Brand = require("../../../models/product/brand/index.js");

const createBrand = async (req, res) => {
  try {
    let brand = new Brand({
      name: req.body.name
    });
    if (!req.body.name)
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    let createdBrand = await brand.save();
    res.status(201).send({
      status: true,
      message: "Brand created successfully",
      data: createdBrand
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  createBrand
};

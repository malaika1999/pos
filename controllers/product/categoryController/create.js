const Category = require("../../../models/product/category/index.js");

const createCategory = async (req, res) => {
  try {
    let category = new Category({
        name: req.body.name,
      });
      if (!req.body.name )
        return res.status(400).send({
          status: false,
          message: "Its mandatory to fill all required fields"
        });
    let createdCategory = await category.save();
        res.status(201).send({
          status: true,
          message: "Category created successfully",
          data: createdCategory
        });  
  } catch (error) {
    res.status(500).send({
        status: false,
        message: error.message
      });  
  }
    
    
};
module.exports = {
  createCategory
};


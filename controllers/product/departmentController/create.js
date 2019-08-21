const Department = require("../../../models/product/department/index.js");

const createDepartment = async (req, res) => {
  try {
    let department = new Department({
      name: req.body.name
    });
    if (!req.body.name)
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    let createdDepartment = await department.save();
    res.status(201).send({
      status: true,
      message: "department created successfully",
      data: createdDepartment
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  createDepartment
};

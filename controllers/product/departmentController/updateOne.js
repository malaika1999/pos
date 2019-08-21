const Department = require("../../../models/product/department/index.js");

const updateDepartment = async (req, res) => {
  try {
    let updatedDepartment = await Department.findOneAndUpdate(
      { _id: req.params.dId },
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
      message: "department updated successfully",
      data: updatedDepartment
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  updateDepartment
};

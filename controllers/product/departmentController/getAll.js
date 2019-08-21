const Department = require("../../../models/product/department/index.js");

const allDepartments = async (req, res) => {
  try {
    const department = await Department.find().exec();
    if (department) {
      res.status(200).send({
        status: true,
        message: "Following are the departments stored in database",
        data: department
      });
    } else if (!department) {
      res.status(404).send({
        status: false,
        message: "No departments found"
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
  allDepartments
};

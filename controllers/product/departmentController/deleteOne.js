const Department = require("../../../models/product/department/index.js");

const deleteDepartment = async (req, res) => {
  try {
    let deletedDepartment = await Department.findByIdAndDelete({
      _id: req.params.dId
    }).exec();
    if (deletedDepartment) {
      return res.send({
        status: true,
        message: "department deleted successfully",
        data: deletedDepartment
      });
    } else {
      return res.send({
        status: false,
        message: "department not found with id" + req.params.dId
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message
    });
  }
};

module.exports = {
  deleteDepartment
};

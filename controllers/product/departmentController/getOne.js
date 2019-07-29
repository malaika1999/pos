const Department = require("../../../models/product/department/index.js");

const oneDepartment = async (req, res) => {
  try {
    var department = await Department.findById({ _id: req.params.dId }).exec();
    if (!department) {
      return res.send({ message: "department not found" });
    } else if (department) {
      return res.send({ message: "department found", data: department });
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  oneDepartment
};

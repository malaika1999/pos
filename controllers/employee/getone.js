const Employee = require("../../models/employee/index.js");

const oneEmployee = async (req, res) => {
  try {
    var employee = await Employee.findById({ _id: req.params.eId }).exec();
    if (!employee) {
      return res.send({ message: "Employee not found" });
    } else if (employee) {
      return res.send({ message: "Employee found", data: employee });
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  oneEmployee
};

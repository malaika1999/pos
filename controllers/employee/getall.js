const Employee = require("../../models/employee/index.js");

const allEmployees = async (req, res) => {
  try {
    const employee = await Employee.find().exec();
    if (employee) {
      res.status(200).send({
        status: true,
        message: "Following are the employees stored in database",
        data: employee
      });
    } else if (!employee) {
      res.status(404).send({
        status: false,
        message: "No employees found"
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
  allEmployees
};

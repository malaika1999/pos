const Employee = require("../../models/employee/index.js");

const createEmployee = async (req, res) => {
  try {
    let employee = new Employee({
      name: req.body.name,
      email: req.body.email,
      NIC: req.body.NIC,
      contactNo: req.body.contactNo,
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      state: req.body.state,
      postalCode: req.body.postalCode,
      dateOfBirth: req.body.dateOfBirth,
      role: req.body.role,
      employeeCode: req.body.employeeCode,
      bankAccNo: req.body.bankAccNo,
      perHourRate: req.body.perHourRate,
      workingHoursPerWeek: req.body.workingHoursPerWeek,
      extraHourRate: req.body.extraHourRate,
      image: req.body.image,
      joiningDate: req.body.joiningDate
    });
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.contactNo ||
      !req.body.address ||
      !req.body.city ||
      !req.body.country ||
      !req.body.state ||
      !req.body.NIC ||
      !req.body.employeeCode
    )
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
      let createdEmployee = await employee.save();
      res.status(201).send({
        status: true,
        message: "Employee created successfully",
        data: createdEmployee
      });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  createEmployee
};

const Customer = require("../../models/customer/index.js");
const validator = require("validator");

const createCustomer = async (req, res) => {
  try {
    let customer = new Customer({
      name: req.body.name,
      email: req.body.email,
      contactNo: req.body.contactNo,
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      state: req.body.state,
      postalCode: req.body.postalCode,
      points: req.body.points,
      cardNumber: req.body.cardNumber
    });
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.contactNo ||
      !req.body.address ||
      !req.body.city ||
      !req.body.country ||
      !req.body.state
    ){
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    }  
    let createdCustomer = await customer.save();
    res.status(201).send({
      status: true,
      message: "Customer created successfully",
      data: createdCustomer
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  createCustomer
};

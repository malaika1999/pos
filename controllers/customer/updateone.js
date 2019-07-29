const Customer = require("../../models/customer/index.js");
const mongoose = require("mongoose");
const validator = require("validator");

const updateCustomer = async (req, res) => {
  try {
    let updatedCustomer = await Customer.findOneAndUpdate(
      { _id: req.params.cusId },
      {
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
      }
    ).exec();
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.contactNo ||
      !req.body.address ||
      !req.body.city ||
      !req.body.country ||
      !req.body.state
    ) {
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    }
    return res.status(200).send({
      status: true,
      message: "Customer updated successfully",
      data: updatedCustomer
    });
  } catch (error) {
      return res.status(500).send({
        status: false,
        message: error.message
      });
    }
};
module.exports = {
  updateCustomer
};

const mongoose = require("mongoose");
const Customer = require("../../models/customer/index.js");

const deleteCustomer = async (req, res) => {
  try {
    let deletedCustomer = await Customer.findByIdAndDelete({
      _id: req.params.cusId
    }).exec();
    if (deletedCustomer) {
      return res.send({
        status: true,
        message: "Customer deleted successfully",
        data: deletedCustomer
      });
    } else {
      return res.send({
        status: false,
        message: "Customer not found with id" + req.params.cusId
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
  deleteCustomer
};

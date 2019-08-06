const Customer = require("../../models/customer/index.js");

const oneCustomer = async (req, res) => {
  try {
    var customer = await Customer.findById({ _id: req.params.cusId }).exec();
    if (!customer) {
      return res.send({ message: "Customer not found" });
    } else if (customer) {
      return res.send({ message: "Customer found", data: customer });
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  oneCustomer
};

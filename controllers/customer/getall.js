const Customer = require("../../models/customer/index.js");

const allCustomers = async (req, res) => {
  try {
    const customer = await Customer.find().exec();
    if (customer) {
      res.status(200).send({
        status: true,
        message: "Following are the customers stored in database",
        data: customer
      });
    } else if (!customer) {
      res.status(404).send({
        status: false,
        message: "No customers found"
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
  allCustomers
};

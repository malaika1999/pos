const Customer = require("../../models/customer/index");

const isLoyalCustomer = async (req, res) => {
  try {
    let loyalCustomer = await Customer.findOneAndUpdate(
      { _id: req.body.customerId },
      {
        isLoyal: req.body.isLoyal
      }
    ).exec();
    return res.status(200).send({
      data: loyalCustomer
    });
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  isLoyalCustomer
};

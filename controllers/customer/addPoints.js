const Sales = require("../../models/sales/index.js");
const Customer = require("../../models/customer/index");

const addPoints = async (req, res) => {
  try {
    let customer = await Customer.findOne({
      _id: req.body.customerId
    }).exec();
    if (!customer) {
      console.log("customer not found");
    } else {
      let amount = req.body.amount;
      let bill = await Sales.findOne({
        Customer: req.body.customerId
      }).exec();

      let totalBill = bill.netAmount;

      var something = await Customer.updateOne(
        {
          _id: req.body.customerId
        },
        {
          $inc: {
            points: parseInt(totalBill / amount)
          }
        }
      ).exec();
      res.send({
        customer: customer,
        totalBill: totalBill
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
  addPoints
};

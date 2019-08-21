const Customer = require("../../models/Customer/index");
const Sales = require("../../models/sales/index");

const redeemPoints = async (req, res) => {
  try {
    let customer = await Customer.findOne({
      _id: req.body.customerId,
      isLoyal: true
    }).exec();
    if (!customer) {
      res.send("customer not found");
    } else {
      let amount = req.body.amount;
      let points = customer.points;
      let bill = await Sales.findOne({
        Customer: req.body.customerId
      }).exec();

      let totalBill = bill.netAmount;
      var something = await Sales.updateOne(
        {
          Customer: req.body.customerId
        },
        {
          $inc: {
            netAmount: parseInt(-(points * amount))
          }
        }
      );
      if (points * amount >= totalBill) {
        await Customer.updateOne(
          {
            _id: req.body.customerId
          },
          {
            $inc: {
              points: parseInt(-(totalBill / amount))
            }
          }
        );
      } else if (points * amount < totalBill) {
        await Customer.updateOne(
          {
            _id: req.body.customerId
          },
          {
            $inc: {
              points: parseInt(-points)
            }
          }
        );
      }

      res.send({
        customer: customer,
        points: points,
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
  redeemPoints
};

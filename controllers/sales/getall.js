const Sales = require('../../models/sales/index')

const allSalesOrders = async (req, res) => {
  try {
    const salesOrder = await Sales.find().exec();
    if (salesOrder) {
      res.status(200).send({
        status: true,
        message: "Following are the sales orders stored in database",
        data: salesOrder
      });
    } else if (!salesOrder) {
      res.status(404).send({
        status: false,
        message: "No sales order found"
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
  allSalesOrders
};
